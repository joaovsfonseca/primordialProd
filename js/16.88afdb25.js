(self["webpackChunkprimordial"]=self["webpackChunkprimordial"]||[]).push([[16],{5189:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});r(7280),r(5363);var s=r(6249),a=r(589),o=r(52),i=r.n(o),n=r(3701);const l="https://api.primordialconstrucaocivil.com.br/api/v1/",u={headers:{Accept:"application/json"}},c={setHeaders(e=!1){return u.headers["Content-Type"]="application/json",a.Z.getItem("user"),u.headers.Authorization=null,e&&(u.headers["Content-Type"]="multipart/form-data"),u},setResponse(e,t){const r=e.data.payload?e.data.payload:e.data;if(t){if(401===e.status&&window.location.replace("/"),"message"===e.data.type)return n.Z.patternNotify(e.data);if(e.status<200||e.status>299)return n.Z.error("Erro "+e.status+"! Entre em contato se persistir!")}return r},async get(e,t=!0,r=!0){t&&s.Z.show();const a=this.setHeaders(),o=await i().get(l+e,a);return s.Z.hide(),this.setResponse(o,r)},async post(e,t,r=!1,a=!0,o=!0){a&&s.Z.show();const n=this.setHeaders(r),u=await i().post(l+e,t,n);return s.Z.hide(),this.setResponse(u,o)}}},3701:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(6417);const a={patternNotify(e){var t=e.text,r="",a="",o=!1;return"error"===e.msgType?(o=!1,r="error",a="negative"):"warning"===e.msgType?(o=!1,r="warning",a="warning"):"success"===e.msgType&&(o=!0,r="done",a="positive"),s.Z.create({message:t,icon:r,color:a}),o},error(e){return s.Z.create({message:e,icon:"error",color:"negative"}),!1},warn(e){return s.Z.create({message:e,icon:"warning",color:"warning"}),!1},success(e){return s.Z.create({message:e,icon:"done",color:"positive"}),!0}}},2016:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var s=r(3673);const a={class:"q-pa-md flex flex-center",style:{height:"100vh"}},o={class:"row justify-center"},i={class:"row q-col-gutter-md"},n=(0,s.Uk)(" Acessar "),l={class:"col-12"},u={class:"col-12"},c={class:"col-12 row"};function d(e,t,r,d,p,m){const g=(0,s.up)("q-card-section"),w=(0,s.up)("q-icon"),h=(0,s.up)("q-input"),Z=(0,s.up)("q-btn"),f=(0,s.up)("q-form"),y=(0,s.up)("q-card"),v=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(v,null,{default:(0,s.w5)((()=>[(0,s.Wm)("div",a,[(0,s.Wm)("div",o,[(0,s.Wm)(y,{flat:"",class:"col-12 col-md-4 q-pa-md card-login bg-grey-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{onSubmit:m.userLogin},{default:(0,s.w5)((()=>[(0,s.Wm)("div",i,[(0,s.Wm)(g,{class:"text-center text-primary text-h3 q-mt-md text-weight-light col-12"},{default:(0,s.w5)((()=>[n])),_:1}),(0,s.Wm)("div",l,[(0,s.Wm)(h,{filled:"",type:"text",color:"primary",modelValue:p.credentials.usr_email,"onUpdate:modelValue":t[1]||(t[1]=e=>p.credentials.usr_email=e),label:"Email",ref:"usr_idUsr","hide-bottom-space":"",rules:[e=>!!e||"Obrigatório"]},{prepend:(0,s.w5)((()=>[(0,s.Wm)(w,{name:"mail"})])),_:1},8,["modelValue","rules"])]),(0,s.Wm)("div",u,[(0,s.Wm)(h,{filled:"",modelValue:p.credentials.usr_password,"onUpdate:modelValue":t[3]||(t[3]=e=>p.credentials.usr_password=e),color:"primary",ref:"usr_idUsr","hide-bottom-space":"",rules:[e=>!!e||"Obrigatório"],label:"Senha",type:p.isPwd?"password":"text"},{prepend:(0,s.w5)((()=>[(0,s.Wm)(w,{name:"lock"})])),append:(0,s.w5)((()=>[(0,s.Wm)(w,{name:p.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[2]||(t[2]=e=>p.isPwd=!p.isPwd)},null,8,["name"])])),_:1},8,["modelValue","rules","type"])]),(0,s.Wm)("div",c,[(0,s.Wm)(Z,{class:"col-12",color:"primary",label:"Entrar",type:"submit"})])])])),_:1},8,["onSubmit"])])),_:1})])])])),_:1})}var p=r(5189),m=r(589),g=r(768);const w={isGuest(){let e=!0;return m.Z.has("user")&&(e=!1),e},getToken(){const e=m.Z.getItem("user");return e?e.token:null},getData(){const e=m.Z.getItem("user");return e&&e.user?e.user:null},setUserData(e){const t=m.Z.getItem("user");m.Z.remove("user"),t.user=e.user,m.Z.set("user",t),g.default.commit("userStorage/updateUser",m.Z.getItem("user"))},updateUser(e){m.Z.set("user",e)},reloadStorage(){g.default.commit("userStorage/updateUser",m.Z.getItem("user"))}},h={name:"login",data(){return{isPwd:"visibility_off",password:!1,credentials:{usr_email:null,usr_password:null}}},methods:{async userLogin(){const e=await p.Z.post("login",this.credentials);e&&(w.updateUser(e),this.$router.push("/painel/home"))}}};var Z=r(4379),f=r(151),y=r(5269),v=r(5589),b=r(1206),_=r(4554),W=r(8240),q=r(7518),U=r.n(q);h.render=d;const k=h;U()(h,"components",{QPage:Z.Z,QCard:f.Z,QForm:y.Z,QCardSection:v.Z,QInput:b.Z,QIcon:_.Z,QBtn:W.Z})}}]);