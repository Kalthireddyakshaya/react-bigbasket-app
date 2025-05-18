import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  DecCart,
  IncCart,
  orderDetails,
  RemoveFromCart,
} from './store';
import './cart.css';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import QRCode from 'react-qr-code';
import confetti from 'canvas-confetti';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponCodeDiscountPer, setCouponCodeDiscountPer] = useState(0);
  const [couponName, setCouponName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const couponCodeRef = useRef();

  const handleCouponApply = () => {
    const code = couponCodeRef.current.value.trim().toUpperCase();
    setCouponName(code);
    switch (code) {
      case 'RATAN10':
        setCouponCodeDiscountPer(10);
        break;
      case 'RATAN20':
        setCouponCodeDiscountPer(20);
        break;
      case 'RATAN30':
        setCouponCodeDiscountPer(30);
        break;
      default:
        alert('❌ Invalid coupon code');
        setCouponCodeDiscountPer(0);
        setCouponName('');
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const manualDiscount = (totalPrice * discountPercentage) / 100;
  const priceAfterManual = totalPrice - manualDiscount;
  const couponDiscount = (priceAfterManual * couponCodeDiscountPer) / 100;
  const priceAfterAllDiscounts = priceAfterManual - couponDiscount;
  const taxPrice = priceAfterAllDiscounts * 0.05;
  const finalPrice = priceAfterAllDiscounts + taxPrice;

  const handleCompletePurchase = () => {
    const purchaseDateTime = new Date().toLocaleString();
    const orderDetailObject = {
      orderId: 'ORD-' + new Date().getTime(),
      date: purchaseDateTime,
      items: [...cart],
      finalPrice: finalPrice.toFixed(2),
    };

    const templateParams = {
      order_id: orderDetailObject.orderId,
      email: customerEmail,
      orders: orderDetailObject.items.map((item) => ({
        name: item.name,
        price: item.price.toFixed(2),
        units: item.quantity,
        image_url: item.image,
      })),
      cost: {
        shipping: '0.00',
        tax: taxPrice.toFixed(2),
        total: finalPrice.toFixed(2),
      },
    };

    emailjs
      .send(
        'service_tfuhsgt',
        'template_rtnnpyh',
        templateParams,
        'x-iYzMxYmgJjLVzLJ'
      )
      .then(() => {
        console.log('✅ Email sent successfully');
      })
      .catch((error) => {
        console.error('❌ Email sending failed:', error);
      });

    dispatch(orderDetails(orderDetailObject));
    dispatch(clearCart());

    setShowThankYou(true);
    fireConfetti();

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          navigate('/orders');
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleQRPayment = () => {
    alert('QR Payment Successful! Proceeding with purchase...');
    handleCompletePurchase();
  };

  const fireConfetti = () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <div className="page-wrapper">
      <div className={`cart-container ${cart.length === 0 ? 'empty-cart' : ''}`}>
        <h2 className="cart-title">🛒 Your Cart</h2>

        {showThankYou ? (
          <div className="thank-you-section">
            <h2>🎉 Thank you for your purchase! 🎉</h2>
            <p>You will be redirected to your orders page in {countdown} seconds.</p>
          </div>
        ) : cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <div className="cart-content">
            {/* Cart Items */}
            <div className="cart-items-section">
              {cart.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-details">
                    <p><strong>{item.name}</strong></p>
                    <p>Price: ₹{item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                 <div className="cart-buttons">
  <button className="btn-increase" onClick={() => dispatch(IncCart(item))}>+</button>
  <button className="btn-decrease" onClick={() => dispatch(DecCart(item))}>-</button>
  <button className="btn-remove" onClick={() => dispatch(RemoveFromCart(item))}>Remove</button>
</div>

                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="cart-summary-section">
              <div className="cart-total">
                <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>

                <div className="discount-buttons">
                  <button onClick={() => setDiscountPercentage(10)}>Apply 10% Discount</button>
                  <button onClick={() => setDiscountPercentage(20)}>Apply 20% Discount</button>
                  <button onClick={() => setDiscountPercentage(30)}>Apply 30% Discount</button>
                </div>

                <p>Manual Discount ({discountPercentage}%): -₹{manualDiscount.toFixed(2)}</p>

                <input ref={couponCodeRef} type="text" placeholder="Enter coupon code" />
                <button className="apply-coupon-button" onClick={handleCouponApply}>
                  Apply Coupon
                </button>
                <h4>Coupon {couponName}: -₹{couponDiscount.toFixed(2)}</h4>

                <p>Tax (5%): ₹{taxPrice.toFixed(2)}</p>
                <h3>Final Amount: ₹{finalPrice.toFixed(2)}</h3>

                <div className="email-section">
                  <h4>📧 Enter your email to receive order details:</h4>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                </div>

                {/* Payment Options */}
                <div className="payment-methods">
                  <button
                    onClick={() => setPaymentMethod('qr')}
                    className={`payment-btn ${paymentMethod === 'qr' ? 'selected' : ''}`}
                  >
                    QR Code Payment
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`payment-btn ${paymentMethod === 'card' ? 'selected' : ''}`}
                  >
                    Card Payment
                  </button>
                </div>

                {/* QR Code */}
                {paymentMethod === 'qr' && (
                  <div className="qr-code-section">
                    <h3>Scan to Pay</h3>
                    <QRCode
                      value={`upi://pay?pa=6281665378@ibl&pn=AkshayaStore&am=${finalPrice.toFixed(
                        2
                      )}&cu=INR`}
                      size={256}
                      level="H"
                    />
                    <p>UPI ID: <strong>6281665378@ibl</strong></p>
                    <button onClick={handleQRPayment} className="qr-payment-btn">
                      Mark as Paid (QR)
                    </button>
                  </div>
                )}

                <button
                  onClick={handleCompletePurchase}
                  className="complete-purchase-btn"
                >
                  ✅ Complete Purchase
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
