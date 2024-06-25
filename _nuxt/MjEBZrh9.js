import{a as z,_ as D}from"./D8LDvT8c.js";import{_ as x}from"./HYnlDVvx.js";import{d as u,D as h,E as w,o,b as a,e as t,f as s,g as d,G as b,h as g,n as N,t as A,F as v,r as y,i as S,w as B,j as I,m as j,k as H}from"./BHs5J4y9.js";import{_ as $}from"./DlAUqK2U.js";import{N as M}from"./BlQXulQi.js";import{u as V,_ as O}from"./BajOHLLb.js";import"./Cs4712Kf.js";import"./DDfH5Ihl.js";import"./Dqv2b6tp.js";const F={class:"container mx-auto pb-12 px-4"},L={class:""},T={class:"lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl"},q={class:"-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"},C={class:"px-4 w-full md:w-8/12 xl:w-6/12"},P=t("h4",{class:"font-bold font-serif mb-1 text-primary-600 dark:text-primary-200 uppercase"}," Adopt A Pet ",-1),E=t("h1",{class:"capitalize leading-tight mb-2 text-white"}," Thousands of homeless dogs, one act of kindness ",-1),G=t("p",{class:"font-thin mb-6 text-gray-300"}," Find your new furry friend today! We have a wide variety of lovable pets available for adoption. Come visit us and take home your new best friend! ",-1),W=t("div",{class:"inline-block ml-1 p-1.5 text-lg"},"Adopt Now",-1),Q=u({__name:"HeroSection",setup(c){const{optimizeImage:e}=h(),i={alt:"hero",cover:!0,...e(w,{placeholder:!1},!0)}.bgStyles;return(p,l)=>{const r=z,m=x;return o(),a("section",F,[t("div",{class:"bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0",style:b(g(i))},[t("div",L,[t("div",T,[t("div",q,[t("div",C,[P,E,G,s(m,{size:"xl",label:"Adopt Now",target:"_blank",to:"https://github.com/pinegrow/happy-paws-with-nuxt-tailwindcss"},{default:d(()=>[W,s(r,{name:"i-noto-dog-face",height:"28px"})]),_:1})])])])])],4)])}}}),R={class:"pb-4 px-4 rounded-3xl w-full sm:w-8/12 md:w-6/12 lg:w-4/12"},U={class:"font-semibold my-2 text-center"},Y={__name:"CallToActionCard",props:{img:{type:String,required:!0},action:{type:String,required:!0},to:{type:String,required:!0}},setup(c){const{img:e,action:n,to:i}=c,{optimizeImage:p}=h(),r=N(()=>({alt:n,cover:!0,...p(e,{},!0)})).value.bgStyles;return(m,f)=>{const _=x,k=D;return o(),a("div",R,[t("div",{class:"bg-cover bg-no-repeat flex pb-4 pt-96 px-4 rounded-3xl",style:b(g(r))},[s(k,{to:c.to,class:"group mx-auto w-5/6"},{default:d(()=>[s(_,{size:"xl",class:"font-semibold rounded-lg w-full",block:""},{default:d(()=>[t("div",U,A(c.action),1)]),_:1})]),_:1},8,["to"])],4)])}}},Z={class:"container mx-auto px-4 py-12"},J=t("div",null,[t("h6",{class:"text-primary-600 dark:text-primary-200 text-center uppercase"}," Get Involved "),t("h3",{class:"capitalize mt-3 text-center"}," Small gesture for a big impact "),t("p",{class:"mt-4 text-center"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. ")],-1),X={class:"-mx-4 flex flex-wrap justify-center mt-12"},K=u({__name:"CallToAction",setup(c){const e=[{img:"https://images.unsplash.com/photo-1585664811087-47f65abbad64?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEwfHxkb2clMjBob3VzZXxlbnwwfHx8fDE2MzA0NjM2Mzg&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop",action:"Adopt",to:"/adopt"},{img:"https://images.unsplash.com/photo-1499946682598-202f5b527154?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDkzfHxmZWVkJTIwaGFtc3RlcnxlbnwwfHx8fDE2MzA0NjQ1Mzc&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop",action:"Volunteer",to:"/volunteer"},{img:"https://images.unsplash.com/photo-1415369629372-26f2fe60c467?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDR8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=900&h=1000&fit=crop",action:"Donate",to:"/quick-start"}];return(n,i)=>{const p=Y;return o(),a("section",Z,[J,t("div",X,[(o(),a(v,null,y(e,(l,r)=>s(p,{key:r,action:l.action,img:l.img,to:l.to},null,8,["action","img","to"])),64))])])}}}),tt={},et={class:"container mx-auto p-4 w-1/2"},st=t("hr",null,null,-1),ot=[st];function ct(c,e){return o(),a("div",et,ot)}const nt=$(tt,[["render",ct]]),it={},at={class:"container mx-auto px-4 py-12 relative"},rt={class:"-mx-4 flex flex-wrap items-center"},lt={class:"p-4 w-full lg:w-6/12"},pt={class:"mx-auto p-4 w-full lg:w-5/12"},mt=t("h6",{class:"mb-2 text-primary-600 dark:text-primary-200 uppercase"}," Our Mission ",-1),_t=t("h3",{class:"capitalize mb-2"}," Life changing experience for a valuable cause ",-1),dt=t("p",{class:"mb-6"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. ",-1);function ut(c,e){const n=M,i=x;return o(),a("div",at,[t("div",rt,[t("div",lt,[s(n,{src:"https://images.unsplash.com/photo-1528301725143-1ba694832e77?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDExfHxraWRzJTIwYW5pbWFsfGVufDB8fHx8MTYzMDQ2NTQwOQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=1000&h=650&fit=crop",class:"rounded-3xl w-full",alt:"Our Mission"})]),t("div",pt,[mt,_t,dt,s(i,{size:"xl",to:"/articles"},{default:d(()=>[S(" Learn More ")]),_:1})])])])}const ft=$(it,[["render",ut]]),xt={class:"bg-primary-100 dark:bg-primary-700"},ht={class:"pb-24 pt-12"},gt={class:"container mx-auto px-4 relative"},wt={class:"-mx-4 flex flex-col flex-wrap items-center justify-center mb-4"},bt=t("div",{class:"px-4 text-center w-full"},[t("h6",{class:"text-primary-100 dark:text-primary-700 uppercase"}," Adopt A Pet "),t("h3",{class:"capitalize"},"Small Gesture For A Big Impact"),t("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae congue tortor. ")],-1),vt={class:"px-4 text-center w-full"},yt=t("span",null,"Meet Them All >",-1),$t={class:"flex flex-wrap -mx-4 justify-center"},Mt=u({__name:"PetListLite",async setup(c){let e,n;const{somePets:i}=([e,n]=B(()=>V()),e=await e,n(),e);return(p,l)=>{const r=x,m=O;return o(),a("div",xt,[t("div",ht,[t("div",gt,[t("div",wt,[bt,t("div",vt,[s(r,{size:"xl",to:"/adopt",color:"secondary"},{default:d(()=>[yt]),_:1})])]),t("div",$t,[(o(!0),a(v,null,y(g(i),(f,_)=>(o(),I(m,j({key:_,ref_for:!0},f),null,16))),128))])])])])}}}),kt={class:"container mx-auto px-4 py-12 relative"},zt={class:"-mx-4 flex flex-wrap items-center"},Dt={class:"p-4 w-full lg:w-2/5"},Nt=H('<div class="lg:w-6/12 mx-auto p-4 w-full"><h6 class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase"> Our Work </h6><h3 class="capitalize mb-6">Impact we make</h3><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet. </p><div class="-mx-4 flex flex-wrap items-center"><div class="px-4 py-6 w-1/2"><h2 class="mb-2">1200+</h2><p>Animals Adopted</p></div><div class="px-4 py-6 w-1/2"><h2 class="mb-2">1000+</h2><p>Families United</p></div><div class="px-4 py-6 w-1/2"><h2 class="mb-2">20+</h2><p>Active Volunteers</p></div><div class="px-4 py-6 w-1/2"><h2 class="mb-2">10K+</h2><p>Animals Helped</p></div></div></div>',1),At=u({__name:"StatsSection",setup(c){return(e,n)=>{const i=M;return o(),a("section",null,[t("div",kt,[t("div",zt,[t("div",Dt,[s(i,{src:"https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080",class:"mb-6 rounded-3xl w-full",alt:"Stats"})]),Nt])])])}}}),Tt=u({__name:"index",setup(c){const{optimizeImage:e}=h();return{...e(w,{placeholder:!1},!0)},(n,i)=>{const p=Q,l=K,r=nt,m=ft,f=Mt,_=At;return o(),a("div",null,[s(p),s(l),s(r),s(m),s(f),s(_)])}}});export{Tt as default};
