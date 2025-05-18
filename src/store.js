
import { configureStore, createSlice } from "@reduxjs/toolkit";
const savedCart=localStorage.getItem("cart");
const localStoragecart=savedCart?JSON.parse(savedCart):[];

const productslice = createSlice({
  name: "products",
  initialState: {
    veg: [ { name: "Tomato", price: 50.0, image: "/images/tomatoes1.jpg" },
                { name: "Brinjal", price: 40.0, image: "/images/brinjal1.jpg" },
                 { name: "Carrot", price: 30.0, image: "/images/carrots1.jpg" },
                { name: "Cabbage", price: 50.0, image: "/images/cabbages.jpg" },
                { name: "Cauliflower", price: 100.0, image: "/images/cauliflower1.jpg" },
                 { name: "Tindora", price: 20.0, image: "/images/tindora1.jpg" },
                 { name: "Radish", price: 40.0, image: "/images/radish1.jpg" },
                 { name: "Beetroot", price: 40.0, image: "/images/beetroot1.jpg" },
                 { name: "Potato", price: 100.0, image: "/images/potatoes1.jpg" },
                 { name: "Ladysfinger", price: 200.0, image: "/images/ladysfinger1.jpg" },
                  { name: "Snake Gourd", price: 100.0, image: "/images/snakegourd1.jpg" },
                   { name: "Beans", price: 90.0, image: "/images/beans1.jpg" },
                    { name: "Bottle Gourd", price: 150.0, image: "/images/bottlegourd1.jpg" },
                     { name: "Capsicum", price: 40.0, image: "/images/capsicum1.jpg" },
                      { name: "Bitter Gourd", price: 50.0, image: "/images/bittergourd1.jpg" },
                      { name: "Cucumber", price: 50.0, image: "/images/cucumber1.jpg" },
                      { name: "DrumStick", price: 50.0, image: "/images/drumstick1.jpg" },
                      { name: "Spinach", price: 190.0, image: "/images/spinach.jpg" },
                      { name: "Pumpkin", price: 90.0, image: "/images/pumpkin.jpg" },
                      { name: "Coriander", price: 400.0, image: "/images/coriander.jpg" },
                      { name: "Broccoli", price: 500.0, image: "/images/broccoli.jpg" },
                      { name: "Pumpkin", price: 10.0, image: "/images/pumpkin.jpg" },
                      { name: "CurryLeaves", price: 50.0, image: "/images/curryleaves.jpg" },  
                      { name: "Onions", price: 50.0, image: "/images/onions.jpg" },
                      { name: "Spring Onions", price: 50.0, image: "/images/springonions.jpg" },
                      { name: "Green Peas", price: 50.0, image: "/images/greenpeas.jpg" },
                      { name: "Corn", price: 50.0, image: "/images/corn.jpg" },
                      { name: "Mushroom", price: 50.0, image: "/images/mushroom.jpg" },
                      { name: "Fenu Greek", price: 190.0, image: "/images/fenugreek.jpg" },
                      { name: "Mint Leaves", price: 90.0, image: "/images/mint.jpg" },
                      { name: "Green Chillies", price: 400.0, image: "/images/greenchilli.jpg" },
                      { name: "Yam", price: 300.0, image: "/images/yam.jpg" },
                      { name: "Cucumber", price: 100.0, image: "/images/cucumber2.jpg" },
                      { name: "Lemons", price: 400.0, image: "/images/lemons.jpg" },
                      { name: "Chikkudus", price:90.0, image: "/images/chikkudu.jpg" },
                      { name: "Beans", price: 90.0, image: "/images/largebeans.jpg" },
                      { name: "Garlic", price: 200.0, image: "/images/garlic.jpg" },
                      { name: "Ginger", price: 500.0, image: "/images/ginger.jpg" },
                      { name: "Turnip", price: 10.0, image: "/images/turnip.jpg" },
                      { name: "Red Chillies", price: 50.0, image: "/images/redchilli.jpg" },

                      { name: "Beet Greens", price: 190.0, image: "/images/beetgreens.jpg" },
                      { name: "Radicchio", price: 90.0, image: "/images/radicchio.jpg" },
                      { name: "Chard", price: 400.0, image: "/images/chard.jpg" },
                      { name: "Avacados", price: 500.0, image: "/images/avacados.jpg" },
                      { name: "Ajwain Leaves", price: 10.0, image: "/images/ajwainleaf.jpg" },
                      { name: "Squash", price: 50.0, image: "/images/squash.jpg" },

                      { name: "Gongura Leaves", price: 190.0, image: "/images/gongura.jpg" },
                      { name: "Celery", price: 90.0, image: "/images/celery.jpg" },
                       { name: "Chukka Leaves", price: 500.0, image: "/images/chukkaleaves.jpg" },
                      { name: "Ponnaganti Leaves", price: 10.0, image: "/images/ponnagantiaaku.jpg" },
                     

                       ],
    nonveg: [ { name: "Mutton", price: 1000.0, image: "/images/mutton.jpg" },
                { name: "ChickenLegs", price: 750.0, image: "/images/chickenlegs.jpg" },
                { name: "Prawns", price: 500.0, image: "/images/prawns1.jpg" },
                { name: "Crabs", price: 400.0, image: "/images/crabs.jpg" },
                { name: "Goat Kebab", price: 700.0, image: "/images/goatkebab.jpg" },
                { name: "Chicken Boneless", price: 300.0, image: "/images/chickenboneless.jpg" },
                { name: "Chicken Wings", price: 200.0, image: "/images/chickenwings.jpg" },
                { name: "Chicken Kebab", price: 450.0, image: "/images/chicken kebab1.jpg" },
                { name: "Chicken Lollipop", price: 300.0, image: "/images/chickenlollipop.jpg" },
                { name: "Mutton Paya", price: 350.0, image: "/images/muttonpaya.jpg" },
                { name: "Oysters", price: 800.0, image: "/images/oysters.jpg" },
                { name: "Turkey Meat", price: 950.0, image: "/images/turkeymeat.jpg" },
                { name: "Chicken Drumstick", price: 450.0, image: "/images/chickendrumstick1.jpg" },
                { name: "Basa Fish Fillet", price: 650.0, image: "/images/basafishfillet.jpg" },
                { name: "Anchovy Fish", price: 600.0, image: "/images/anchovyfish.jpg" },
                { name: "Crab Legs", price: 450.0, image: "/images/crablegs.jpg" },
                { name: "Chicken Gizzards", price: 350.0, image: "/images/chickengizzards.jpg" },
                { name: "Rohu Fish", price: 450.0, image: "/images/rohufish.jpg" },
                { name: "Turkey Meat", price: 350.0, image: "/images/turkeymeat.jpg" },
                { name: "Chicken Mince", price: 750.0, image: "/images/chickenmince.jpg" },
                { name: "Catla Fish", price: 750.0, image: "/images/catlafish.jpg" },
                { name: "Mutton Mince", price: 900.0, image: "/images/muttonmince.jpg" },
                { name: "Seer Fish", price: 800.0, image: "/images/seerfish.jpg" },
                { name: "Chicken Heart", price: 500.0, image: "/images/chickenheart.jpg" },
                { name: "Chicken Breast", price: 300.0, image: "/images/chickenbreast.jpg" },
                { name: "Tilapia Fish", price: 600.0, image: "/images/tilapiafish.jpg" },
                { name: "Lamb Chops", price: 600.0, image: "/images/lambchops.jpg" },
                { name: "Bombay Duck Fish", price: 500.0, image: "/images/bombayduckfish.jpg" },
                { name: "Beef Liver", price: 800.0, image: "/images/beefliver.jpg" },
                { name: "Tuna Fish", price: 500.0, image: "/images/tunafish.jpg" },
                { name: " Chicken Thigh", price: 250.0, image: "/images/chickenthigh.jpg" },
                { name: "Chicken Cartilage", price: 400.0, image: "/images/chickencartilage.jpg" },
                { name: "Chicken Bones", price: 500.0, image: "/images/chickenbone.jpg" },
                { name: "Crab Claws", price: 300.0, image: "/images/crabclaws.jpg" },
                { name: "Chicken Liver", price: 600.0, image: "/images/chickenliver.jpg" },
               


              ],
        chocolates: [
                { name: "Dairy Milk", price: 100.0, image: "/images/dairymilk1.jpg" },
                { name: "Milky Bar", price: 200.0, image: "/images/milkybar1.jpg" },
                { name: "KitKat", price: 400.0, image: "/images/kitkat1.jpg" },
                { name: "Lotte Choco Pai", price: 250.0, image: "/images/lottechocopai1.jpg" },
                { name: "Snickers", price: 200.0, image: "/images/snickers1.jpg" },
                 { name: "Kinder Joy", price: 500.0, image: "/images/kinderjoys1.jpg" },
                 { name: "Hersheys", price: 400.0, image: "/images/hersheys1.jpg"},
                 { name: "Fivestar", price: 50.0, image: "/images/fivestar1.jpg"},
                 { name: "Perk", price: 50.0, image: "/images/perk1.jpg"},
                 { name: "Twix", price: 100.0, image: "/images/twix1.jpg"},
                 { name: "Ferrero Rocher", price: 500.0, image: "/images/ferrerorocher.jpg"},
                 { name: "CoffyBite", price: 20.0, image: "/images/coffybite.jpg"},
                 { name: "Fabelle", price: 50.0, image: "/images/fabelle.jpg"},
                 { name: "Munch", price: 100.0, image: "/images/munch.jpg"},
                 { name: "Hersheys Kisses", price: 250.0, image: "/images/hersheyskisses.jpg"},
                 { name: "Nutties", price: 100.0, image: "/images/nutties.jpg"},
                 { name: "Galaxy Milk Chocolates", price: 200.0, image: "/images/galaxymilkchoco.jpg"},
                 { name: "Nova Nova", price: 500.0, image: "/images/novanovachocos.jpg"},
                 { name: "Bounty Milk", price: 300.0, image: "/images/bountymilk.jpg"},
                 { name: "Almond Treat", price: 350.0, image: "/images/almondtreat.jpg"},
                 { name: "BournVille", price: 50.0, image: "/images/bournville.jpg"},
                  { name: "Fuse", price: 40.0, image: "/images/fuse.jpg"},
                  { name: "Toblerone", price: 250.0, image: "/images/toblerone.jpg"},
                { name: "Amul Dark", price: 300.0, image: "/images/amuldark.jpg"},
                  { name: "Luvit Luscious", price: 800.0, image: "/images/luvitluscious.jpg"},
                  { name: "Lindt Chocos", price: 300.0, image: "/images/lindtchocos.jpg"},
                  { name: "Dairy Bites", price: 400.0, image: "/images/dairybites.jpg"},
                  { name: "Rum & Raisins", price: 800.0, image: "/images/rum&raisins.jpg"},
                  { name: "Choki Choki", price: 700.0, image: "/images/chokichoki.jpg"},
                  { name: "Cadbury Silk", price: 500.0, image: "/images/cadburysilk.jpg"},
                  { name: "Eclairs", price: 50.0, image: "/images/eclairs.jpg"},
                  { name: "Hersheys Dark", price: 300.0, image: "/images/hersheysdark.jpg"},
                  { name: "Bubby Dairy Milk", price: 450.0, image: "/images/bubbydairymilk.jpg"},
              
                ],
    
    dairy: [ { name: "Milk", price: 500.0, image: "/images/milk1.jpg" },
                { name: "Cheese", price: 250.0, image: "/images/cheese1.jpg" },
                { name: "Paneer", price: 400.0, image: "/images/paneer1.jpg" },
               { name: "Ghee", price: 250.0, image: "/images/ghee1.jpg" },
                { name: "Butter Milk", price: 250.0, image: "/images/buttermilk1.jpg" },
               { name: "Butter", price: 350.0, image: "/images/butter1.jpg" },
               { name: "Milkshake", price: 400.0, image: "/images/milkshake1.jpg" },
               { name: "Curd", price: 300.0, image: "/images/curd1.jpg" },
               { name: "Milk Powder", price: 200.0, image: "/images/milkpowder1.jpg" },
               { name: "Lassi", price: 320.0, image: "/images/lassi1.jpg" },
               { name: "Cream", price: 400.0, image: "/images/cream.jpg" },
               { name: "Mozzarella Cheese", price: 250.0, image: "/images/mozzarellacheese.jpg" },
               { name: "Cottage Cheese", price: 350.0, image: "/images/cottagecheese.jpg" },
               
               
               
               

                 ],

  },
  reducers: {}
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: localStoragecart,
  reducers: {
    AddToCart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    IncCart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      }
    },
    DecCart: (state, action) => {
        const index = state.findIndex(item => item.name === action.payload.name);
        if (index !== -1) {
          if (state[index].quantity > 1) {
            state[index].quantity -= 1;
          } else {
            state.splice(index, 1); // remove item if quantity is 1
          }
        }
      },
      RemoveFromCart: (state, action) => {
        const index = state.findIndex(item => item.name === action.payload.name);
        if (index !== -1) {
          state.splice(index, 1); // Remove the item at that index
        }
      },
      
    clearCart:()=>[]  

  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState: [],
  reducers: {
    orderDetails: (state, action) => {
      state.push(action.payload);
    }
  }
});
const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isAuthenticated: false,
    currentUser: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, inputData) => {
      
      const foundUser = state.users.find(
        user => user.username ===inputData.payload. username && user.password ===inputData.payload. password
      );
      if (foundUser) {
        state.currentUser = foundUser;
        state.isAuthenticated = true;
      }
      else{
        alert("Invalid Credentials");
      }
    },
    logoutUser: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
    },
    
  },
});


// export const { AddToCart, IncCart,DecCart,RemoveFromCart,clearCart} = cartSlice.actions;
// export let { orderDetails } = orderSlice.actions; 


const store = configureStore({
  reducer: {
    products: productslice.reducer,
    cart: cartSlice.reducer,
    orders:orderSlice.reducer,
    users:userSlice.reducer,
    },
  }
);
store.subscribe(()=>{
  const state=store.getState();
  localStorage.setItem("cart",JSON.stringify(state.cart));
});


 export const { AddToCart, IncCart,DecCart,RemoveFromCart,clearCart} = cartSlice.actions;
 export let { orderDetails } = orderSlice.actions; 
 export const {registerUser,loginUser, logoutUser}=userSlice.actions;





export default store;
