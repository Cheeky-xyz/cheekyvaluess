(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[179],{4014:function(e,t,l){Promise.resolve().then(l.bind(l,9485))},1554:function(e,t,l){"use strict";var s=l(9973);t.Z=void 0;var a=s(l(9815)),r=l(7437);t.Z=(0,a.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},9485:function(e,t,l){"use strict";var s=l(7437),a=l(3145),r=l(2265),c=l(1554),n=l(9869);t.default=e=>{let t=e.fruits,l=e.gamepass,[i,o]=(0,r.useState)([]),[d,m]=(0,r.useState)([]),[f,x]=(0,r.useState)(!1),[u,b]=(0,r.useState)(!1),[h,w]=(0,r.useState)(0),[j,g]=(0,r.useState)(0),[p,v]=(0,r.useState)(0),[N,y]=(0,r.useState)(0),[k,C]=(0,r.useState)(""),[I,S]=(0,r.useState)(""),_=(e,t)=>"Physical"===e||""===e?parseFloat(t.value):"Permanent"===e?parseFloat(t.permValue):void 0,L=(e,t)=>{let l="left"===t?i:d,s="left"===t?h:j,a="left"===t?p:N;if(e<l.length){let r=[...l],c=r.splice(e,1)[0];("left"===t?o:m)(r),c&&(c.beli&&!c.variant&&("left"===t?v:y)(a-c.beli),("left"===t?w:g)(s-(_(c.variant||"",c)||0)))}};function P(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}let E=(0,s.jsx)("div",{className:"w-40 h-40 max-lg:w-32 max-lg:h-32 rounded-xl bg-[#337e9f] transform transition-transform active:scale-95",children:(0,s.jsx)("button",{className:"text-white/70 text-6xl stroked-text w-full h-full flex items-center justify-center ",onClick:()=>{x(!0)},children:(0,s.jsx)(c.Z,{style:{fontSize:"64px"}})})}),Z=(0,s.jsx)("div",{className:"w-40 h-40 max-lg:w-32 max-lg:h-32 rounded-xl bg-[#337e9f] transform transition-transform active:scale-95",children:(0,s.jsx)("button",{className:"text-white/70 text-6xl stroked-text w-full h-full flex items-center justify-center ",onClick:()=>{b(!0)},children:(0,s.jsx)(c.Z,{style:{fontSize:"64px"}})})}),$=(0,s.jsx)("div",{className:"w-40 h-40 max-lg:w-32 max-lg:h-32 rounded-md bg-[#337e9f] transform transition-transform active:scale-95",children:(0,s.jsx)("button",{className:"text-white/70 text-6xl stroked-text w-full h-full flex items-center justify-center ",onClick:()=>{x(!1)},children:"<"})}),z=(0,s.jsx)("div",{className:"w-40 h-40 max-lg:w-32 max-lg:h-32 rounded-md bg-[#337e9f] transform transition-transform active:scale-95",children:(0,s.jsx)("button",{className:"text-white/70 text-6xl stroked-text w-full h-full flex items-center justify-center ",onClick:()=>{b(!1)},children:"<"})});return(0,s.jsx)("div",{className:"w-fit rounded-2xl p-7 text-white bg-[#1c1f21]",children:(0,s.jsxs)("div",{className:"w-full flex flex-row max-md:flex-col gap-10 h-full",children:[(0,s.jsxs)("div",{className:"flex flex-col ",children:[(0,s.jsxs)("div",{className:"w-full relative ",children:[f?(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:"text",value:k,onChange:e=>C(e.target.value),className:"w-full h-10 rounded-t-xl bg-[#2d3337] text-[#edf1f3] pl-10 font-semibold focus:outline-none",placeholder:"Search..."}),(0,s.jsx)("div",{className:"absolute inset-y-0 justify-center pl-1.5 flex items-center pointer-events-none",children:(0,s.jsx)(n.Z,{})})]}):(0,s.jsx)("h1",{className:"flex justify-center text-2xl mb-2",children:"You"}),f&&(0,s.jsxs)("div",{className:"w-full h-[336px] max-lg:h-[272px] absolute bg-[#2d3337] overflow-y-scroll z-30 flex flex-wrap gap-4",children:[$,t.sort((e,t)=>e.beli-t.beli).filter(e=>e.name.toLowerCase().includes(k.toLowerCase())).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer w-40 h-40 max-lg:w-32 max-lg:h-32 border-2 border-black rounded-md bg-[#2d3337] transform transition-transform active:scale-95",onClick:()=>{o([...i,e]),w(h+_("",e)),v(p+e.beli),x(!1)},children:(0,s.jsxs)("div",{className:"w-full h-full flex items-center justify-center",children:[(0,s.jsx)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:e.name}),(0,s.jsx)(a.default,{src:"/assets/fruits/inventoryIcon/".concat(e.rarity,"/").concat(e.name,"_InventoryIcon.webp"),alt:e.name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsxs)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:["$",P(e.beli)]})]})},t)),t.sort((e,t)=>e.beli-t.beli).filter(e=>e.name.toLowerCase().includes(k.toLowerCase())).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer w-40 h-40 max-lg:w-32 max-lg:h-32 border-2 border-black rounded-md bg-[#2d3337] transform transition-transform active:scale-95",onClick:()=>{o([...i,{...e,variant:"Permanent"}]),w(h+_("Permanent",e)),x(!1)},children:(0,s.jsxs)("div",{className:"w-full h-full flex items-center justify-center",children:[(0,s.jsxs)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:["Permanent ",e.name]}),(0,s.jsx)(a.default,{src:"/assets/fruits/".concat(e.rarity,"/").concat(e.name,"_Icon.webp"),alt:e.name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsx)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:"Special"})]})},t)),l.filter(e=>e.name.toLowerCase().includes(k.toLowerCase())).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer w-40 h-40 max-lg:w-32 max-lg:h-32 border-2 border-black rounded-md bg-[#2d3337] transform transition-transform active:scale-95",onClick:()=>{o([...i,e]),w(h+_("",e)),x(!1)},children:(0,s.jsxs)("div",{className:"w-full h-full flex items-center justify-center",children:[(0,s.jsx)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:e.name}),(0,s.jsx)(a.default,{src:"/assets/gamepasses/".concat(e.name,"_Icon.webp"),alt:e.name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsx)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:"Special"})]})},t))]}),(0,s.jsx)("div",{className:"w-[344px] max-lg:w-[280px] h-80 max-lg:h-64 flex flex-wrap gap-4",children:Array.from({length:4}).map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-wrap w-40 h-40 max-lg:w-32 max-lg:h-32 rounded-xl cursor-pointer bg-[#2d3337]",onClick:()=>{L(t,"left")},children:[i[t]&&(0,s.jsxs)("div",{className:"w-full h-full relative flex items-center justify-center border border-black",children:[(0,s.jsxs)("h1",{className:"absolute top-0  bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:[i[t].variant&&"Permanent ",i[t].name]}),(0,s.jsx)(a.default,{src:i[t].variant?"/assets/fruits/".concat(i[t].rarity,"/").concat(i[t].name,"_Icon.webp"):i[t].rarity?"/assets/fruits/inventoryIcon/".concat(i[t].rarity,"/").concat(i[t].name,"_InventoryIcon.webp"):"/assets/gamepasses/".concat(i[t].name,"_Icon.webp"),alt:i[t].name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsx)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:i[t].beli&&!i[t].variant?"$".concat(P(i[t].beli)):"Special"})]}),t===i.length&&i.length<4&&E]},t))})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-3 mt-9",children:[(0,s.jsxs)("div",{className:"bg-[#2d3337] flex justify-between pl-3 pr-2 py-2.5 font-semibold text-lg w-full rounded-xl",children:[(0,s.jsx)("h1",{children:"PRICE:"}),(0,s.jsxs)("h1",{className:"text-[#189ee9]",children:["$",P(p)]})]}),(0,s.jsxs)("div",{className:"bg-[#2d3337] flex justify-between pl-3 pr-2 py-2.5 font-semibold text-lg w-full rounded-xl",children:[(0,s.jsx)("h1",{children:"VALUE:"}),(0,s.jsx)("h1",{className:"text-[#189ee9]",children:P(h)})]})]})]}),(0,s.jsx)("div",{className:"flex w-1 h-[92.5%] mt-9 bg-[#353d42] rounded-lg mx-12"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"w-full relative ",children:[u?(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{type:"text",value:I,onChange:e=>S(e.target.value),className:"w-full h-10 rounded-t-xl bg-[#2d3337] text-[#edf1f3] pl-10 font-semibold focus:outline-none",placeholder:"Search..."}),(0,s.jsx)("div",{className:"absolute inset-y-0 justify-center pl-1.5 flex items-center pointer-events-none",children:(0,s.jsx)(n.Z,{})})]}):(0,s.jsx)("h1",{className:"flex justify-center text-2xl mb-2",children:"Them"}),u&&(0,s.jsxs)("div",{className:"w-full h-[336px] max-lg:h-[272px] absolute bg-[#2d3337] overflow-y-scroll z-30 flex flex-wrap gap-4",children:[z,t.sort((e,t)=>e.beli-t.beli).filter(e=>e.name.toLowerCase().includes(I.toLowerCase())).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer w-40 h-40 max-lg:w-32 max-lg:h-32 border-2 border-black rounded-md bg-[#2d3337] transform transition-transform active:scale-95",onClick:()=>{m([...d,e]),g(j+_("",e)),y(N+e.beli),b(!1)},children:(0,s.jsxs)("div",{className:"w-full h-full flex items-center justify-center",children:[(0,s.jsx)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:e.name}),(0,s.jsx)(a.default,{src:"/assets/fruits/inventoryIcon/".concat(e.rarity,"/").concat(e.name,"_InventoryIcon.webp"),alt:e.name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsxs)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:["$",P(e.beli)]})]})},t)),t.sort((e,t)=>e.beli-t.beli).filter(e=>e.name.toLowerCase().includes(I.toLowerCase())).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer w-40 h-40 max-lg:w-32 max-lg:h-32 border-2 border-black rounded-md bg-[#2d3337] transform transition-transform active:scale-95",onClick:()=>{m([...d,{...e,variant:"Permanent"}]),g(j+_("Permanent",e)),b(!1)},children:(0,s.jsxs)("div",{className:"w-full h-full flex items-center justify-center",children:[(0,s.jsxs)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:["Permanent ",e.name]}),(0,s.jsx)(a.default,{src:"/assets/fruits/".concat(e.rarity,"/").concat(e.name,"_Icon.webp"),alt:e.name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsx)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:"Special"})]})},t)),l.filter(e=>e.name.toLowerCase().includes(I.toLowerCase())).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer w-40 h-40 max-lg:w-32 max-lg:h-32 border-2 border-black rounded-md bg-[#2d3337] transform transition-transform active:scale-95",onClick:()=>{m([...d,e]),g(j+_("",e)),b(!1)},children:(0,s.jsxs)("div",{className:"w-full h-full flex items-center justify-center",children:[(0,s.jsx)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:e.name}),(0,s.jsx)(a.default,{src:"/assets/gamepasses/".concat(e.name,"_Icon.webp"),alt:e.name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsx)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:"Special"})]})},t))]}),(0,s.jsx)("div",{className:"w-[344px] max-lg:w-[280px] h-80 max-lg:h-64 flex flex-wrap gap-4",children:Array.from({length:4}).map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-wrap w-40 h-40 max-lg:w-32 max-lg:h-32 rounded-md cursor-pointer bg-[#2d3337]",onClick:()=>{L(t,"right")},children:[d[t]&&(0,s.jsxs)("div",{className:"w-full h-full relative flex items-center justify-center border border-black",children:[(0,s.jsxs)("h1",{className:"absolute top-0 bg-gradient-to-t from-[#1dc226] to-[#2ccd3c] rounded-t-sm flex justify-center border-b border-black text-black w-full",children:[d[t].variant&&"Permanent ",d[t].name]}),(0,s.jsx)(a.default,{src:d[t].variant?"/assets/fruits/".concat(d[t].rarity,"/").concat(d[t].name,"_Icon.webp"):d[t].rarity?"/assets/fruits/inventoryIcon/".concat(d[t].rarity,"/").concat(d[t].name,"_InventoryIcon.webp"):"/assets/gamepasses/".concat(d[t].name,"_Icon.webp"),alt:d[t].name,width:100,height:100,className:"w-20 h-20"}),(0,s.jsx)("p",{className:"absolute bottom-0 bg-[#fe00ea] rounded-b-sm flex justify-center border-t border-black text-black w-full",children:d[t].beli&&!d[t].variant?"$".concat(P(d[t].beli)):"Special"})]}),t===d.length&&d.length<4&&Z]},t))})]}),(0,s.jsxs)("div",{className:"w-full flex flex-col gap-3 mt-9",children:[(0,s.jsxs)("div",{className:"bg-[#2d3337] flex justify-between pl-3 pr-2 py-2.5 font-semibold text-lg w-full rounded-xl",children:[(0,s.jsx)("h1",{children:"PRICE:"}),(0,s.jsxs)("h1",{className:"text-[#189ee9]",children:["$",P(N)]})]}),(0,s.jsxs)("div",{className:"bg-[#2d3337] flex justify-between pl-3 pr-2 py-2.5 font-semibold text-lg w-full rounded-xl",children:[(0,s.jsx)("h1",{children:"VALUE:"}),(0,s.jsx)("h1",{className:"text-[#189ee9]",children:P(j)})]})]})]})]})})}}},function(e){e.O(0,[878,157,971,117,744],function(){return e(e.s=4014)}),_N_E=e.O()}]);