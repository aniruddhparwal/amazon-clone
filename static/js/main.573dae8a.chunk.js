(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{38:function(e,a,t){e.exports=t(69)},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},67:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(33),l=t.n(r),i=(t(43),t(8)),o=(t(44),t(45),t(11)),m=t(34),s=t.n(m),u=t(35),d=t.n(u),g=Object(n.createContext)(),p=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},E=function(){return Object(n.useContext)(g)},_=t(25),h=t.n(_),v=(h.a.initializeApp({apiKey:"AIzaSyCUYu7DTsdzu_2pGxG0IPnoBkDmNQ5-7gQ",authDomain:"clone-c933e.firebaseapp.com",databaseURL:"https://clone-c933e.firebaseio.com",projectId:"clone-c933e",storageBucket:"clone-c933e.appspot.com",messagingSenderId:"1037959171425",appId:"1:1037959171425:web:bd704b79d0860dde4b0920"}).firestore(),h.a.auth());var f=function(){var e=E(),a=Object(i.a)(e,1)[0],t=a.basket,n=a.user;return c.a.createElement("nav",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"amazon logo"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(s.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"headerNav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&v.signOut()},className:"header__option"},c.a.createElement("span",{className:"header_optionLineOne"},"Hello ",null===n||void 0===n?void 0:n.email),c.a.createElement("span",{className:"header_optionLineTwo"},n?"Sign Out":"SignIn"))),c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header_optionLineOne"},"Returns"),c.a.createElement("span",{className:"header_optionLineTwo"},"& Order"))),c.a.createElement(o.b,{className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header_optionLineOne"},"Your"),c.a.createElement("span",{className:"header_optionLineTwo"},"Prime"))),c.a.createElement(o.b,{to:"/checkout",className:"header__link"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header_optionLineTwo header__basketCount"},null===t||void 0===t?void 0:t.length)))))},b=t(3);t(61),t(62);var N=function(e){var a=e.id,t=e.title,n=e.price,r=e.rating,l=e.image,o=E(),m=Object(i.a)(o,2),s=(m[0].basket,m[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,t),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,n)),c.a.createElement("div",{className:"product__rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:l,alt:"product image"}),c.a.createElement("button",{onClick:function(){s({type:"ADD_TO_BASKET",item:{id:a,title:t,image:l,rating:r,price:n}})}},"Add to Basket"))};var k=function(){return Object(n.useEffect)((function(){document.title="Amazon Clone"}),[]),c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:"home banner"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"123",title:"Digitek DTR 550LW Lightweight Tripod (Maximum Load up to 5 kg), 5.57 Feet Tall for Digital SLR & Video Cameras, Made Aluminium Material (DTR 550LW)",price:1677,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/51l9waeXrgL._SL1001_.jpg"}),c.a.createElement(N,{id:"1234",title:"Quantum QHM6633 4 Port Hi-Speed USB Hub (Multicolor)",price:130,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51K68XtkF5L._SL1000_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"12345",title:"Redmi Note 9 Pro Max (Aurora Blue, 6GB RAM, 128GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G",price:18499,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg"}),c.a.createElement(N,{id:"1235",title:"TULMAN 9.5 mm Universal Caddy for HDD/SDD for CD DVD-ROM Drive Slot 2nd Bay Hard Drive Caddy for PC/Laptop",price:449,rating:2,image:"https://images-na.ssl-images-amazon.com/images/I/71EWzxyKPcL._SL1500_.jpg"}),c.a.createElement(N,{id:"1236",title:"Western Digital WD Green 240 GB 2.5 inch SATA III Internal Solid State Drive (WDS240G2G0A)",price:2557,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/51lA7br9YrL._SL1000_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(N,{id:"1237",title:"Samsung 23.5 inch (59.8 cm) Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black)",price:9699,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg"})))};t(63),t(64);var S=function(e){var a=e.id,t=e.image,n=e.title,r=e.rating,l=e.price,o=E(),m=Object(i.a)(o,2),s=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:t,alt:n}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(r).fill().map((function(e){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){s({type:"REMOVE_FROM_BASKET",id:a})}},"Remove From Basket")))},O=(t(65),t(36)),A=t.n(O),j=t(28),L=t(18),C=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},D=function(e,a){switch(console.log(a),a.type){case"SET_USER":return Object(L.a)(Object(L.a)({},e),{},{user:a.user});case"ADD_TO_BASKET":return Object(L.a)(Object(L.a)({},e),{},{basket:[].concat(Object(j.a)(e.basket),[a.item])});case"REMOVE_FROM_BASKET":var t=Object(j.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===a.id}));return n>=0?t.splice(n,1):console.warn("Can't Remove Item It Id.:".concat(a.id)),Object(L.a)(Object(L.a)({},e),{},{basket:t});default:return e}};var y=function(){var e=E(),a=Object(i.a)(e,1)[0].basket;return c.a.createElement("div",{className:"subtotal"},c.a.createElement(A.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",a.length,") items: ",c.a.createElement("strong",null,"".concat(e))),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains gift"))},decimalScale:2,value:C(a),displayType:"text",prefix:"\u20b9",thousandSeparator:!0}),c.a.createElement("button",null," Proceed to Checkout"))};var I=function(){var e=E(),a=Object(i.a)(e,1)[0].basket;return Object(n.useEffect)((function(){document.title="CheckOut"}),[]),c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://m.media-amazon.com/images/G/31/img20/AmazonPay/Travel/Ingresses/August/Bus_N2GL_Pay_Dashboard_PC._CB406968026_.jpg",alt:""}),0===(null===a||void 0===a?void 0:a.length)?c.a.createElement("div",null,c.a.createElement("h2",null,"Your Shopping Basket is Empty"),c.a.createElement("p",null,'You have items saved to buy later. To buy one or more now, click "Move to cart" next to the item.')):c.a.createElement("div",null,c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),a.map((function(e){return c.a.createElement(S,{id:e.id,image:e.image,title:e.title,rating:e.rating,price:e.price})})))),a.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(y,null)))};t(67);var B=function(){Object(n.useEffect)((function(){document.title="Login"}),[]);var e=Object(b.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],l=t[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"./"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png",alt:""})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("form",null,c.a.createElement("h5",null,"Email"),c.a.createElement("input",{value:r,type:"email",onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Email"),c.a.createElement("input",{type:"password",value:u,onChange:function(e){return d(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(a){a.preventDefault(),v.signInWithEmailAndPassword(r,u).then((function(a){e.push("./")})).catch((function(e){alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),c.a.createElement("button",{onClick:function(a){a.preventDefault(),v.createUserWithEmailAndPassword(r,u).then((function(a){e.push("/")})).catch((function(e){alert(e.message)}))},className:"login__registerButton"},"Create Your Amazon Account ")))};var w=function(){var e=E(),a=Object(i.a)(e,2),t=a[0].user,r=a[1];return Object(n.useEffect)((function(){document.title="Amazon Clone";var e=v.onAuthStateChanged((function(e){r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log(t),c.a.createElement(o.a,null,c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/checkout"},c.a.createElement(f,null),c.a.createElement(I,null)),c.a.createElement(b.a,{path:"/Login"},c.a.createElement(B,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,{initialState:{basket:[],user:null},reducer:D},c.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.573dae8a.chunk.js.map