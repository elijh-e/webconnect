(self.webpackChunkwebconnect=self.webpackChunkwebconnect||[]).push([[371],{5258:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var o=r(7462),a=r(5987),n=r(7294),i=r(6010),s=r(4670),l=r(3871),d=r(9895),c=n.forwardRef((function(e,t){var r=e.classes,s=e.className,c=e.color,u=void 0===c?"primary":c,p=e.position,m=void 0===p?"fixed":p,f=(0,a.Z)(e,["classes","className","color","position"]);return n.createElement(d.Z,(0,o.Z)({square:!0,component:"header",elevation:4,className:(0,i.Z)(r.root,r["position".concat((0,l.Z)(m))],r["color".concat((0,l.Z)(u))],s,"fixed"===m&&"mui-fixed"),ref:t},f))}));const u=(0,s.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(c)},3681:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var o=r(7462),a=r(5987),n=r(7294),i=r(6010),s=r(3871),l=r(4670),d=r(9693),c=r(8920),u=n.forwardRef((function(e,t){var r=e.classes,l=e.className,d=e.color,u=void 0===d?"primary":d,p=e.value,m=e.valueBuffer,f=e.variant,b=void 0===f?"indeterminate":f,g=(0,a.Z)(e,["classes","className","color","value","valueBuffer","variant"]),h=(0,c.Z)(),v={},y={bar1:{},bar2:{}};if(("determinate"===b||"buffer"===b)&&void 0!==p){v["aria-valuenow"]=Math.round(p),v["aria-valuemin"]=0,v["aria-valuemax"]=100;var w=p-100;"rtl"===h.direction&&(w=-w),y.bar1.transform="translateX(".concat(w,"%)")}if("buffer"===b&&void 0!==m){var Z=(m||0)-100;"rtl"===h.direction&&(Z=-Z),y.bar2.transform="translateX(".concat(Z,"%)")}return n.createElement("div",(0,o.Z)({className:(0,i.Z)(r.root,r["color".concat((0,s.Z)(u))],l,{determinate:r.determinate,indeterminate:r.indeterminate,buffer:r.buffer,query:r.query}[b]),role:"progressbar"},v,{ref:t},g),"buffer"===b?n.createElement("div",{className:(0,i.Z)(r.dashed,r["dashedColor".concat((0,s.Z)(u))])}):null,n.createElement("div",{className:(0,i.Z)(r.bar,r["barColor".concat((0,s.Z)(u))],("indeterminate"===b||"query"===b)&&r.bar1Indeterminate,{determinate:r.bar1Determinate,buffer:r.bar1Buffer}[b]),style:y.bar1}),"determinate"===b?null:n.createElement("div",{className:(0,i.Z)(r.bar,("indeterminate"===b||"query"===b)&&r.bar2Indeterminate,"buffer"===b?[r["color".concat((0,s.Z)(u))],r.bar2Buffer]:r["barColor".concat((0,s.Z)(u))]),style:y.bar2}))}));const p=(0,l.Z)((function(e){var t=function(t){return"light"===e.palette.type?(0,d.$n)(t,.62):(0,d._j)(t,.5)},r=t(e.palette.primary.main),o=t(e.palette.secondary.main);return{root:{position:"relative",overflow:"hidden",height:4,"@media print":{colorAdjust:"exact"}},colorPrimary:{backgroundColor:r},colorSecondary:{backgroundColor:o},determinate:{},indeterminate:{},buffer:{backgroundColor:"transparent"},query:{transform:"rotate(180deg)"},dashed:{position:"absolute",marginTop:0,height:"100%",width:"100%",animation:"$buffer 3s infinite linear"},dashedColorPrimary:{backgroundImage:"radial-gradient(".concat(r," 0%, ").concat(r," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},dashedColorSecondary:{backgroundImage:"radial-gradient(".concat(o," 0%, ").concat(o," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"},bar:{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},barColorPrimary:{backgroundColor:e.palette.primary.main},barColorSecondary:{backgroundColor:e.palette.secondary.main},bar1Indeterminate:{width:"auto",animation:"$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite"},bar1Determinate:{transition:"transform .".concat(4,"s linear")},bar1Buffer:{zIndex:1,transition:"transform .".concat(4,"s linear")},bar2Indeterminate:{width:"auto",animation:"$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite"},bar2Buffer:{transition:"transform .".concat(4,"s linear")},"@keyframes indeterminate1":{"0%":{left:"-35%",right:"100%"},"60%":{left:"100%",right:"-90%"},"100%":{left:"100%",right:"-90%"}},"@keyframes indeterminate2":{"0%":{left:"-200%",right:"100%"},"60%":{left:"107%",right:"-8%"},"100%":{left:"107%",right:"-8%"}},"@keyframes buffer":{"0%":{opacity:1,backgroundPosition:"0 -23px"},"50%":{opacity:0,backgroundPosition:"0 -23px"},"100%":{opacity:1,backgroundPosition:"-200px -23px"}}}}),{name:"MuiLinearProgress"})(u)},8358:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(7462),a=r(5987),n=r(4942),i=r(7294),s=r(6010),l=r(4670),d=i.forwardRef((function(e,t){var r=e.classes,n=e.className,l=e.component,d=void 0===l?"div":l,c=e.disableGutters,u=void 0!==c&&c,p=e.variant,m=void 0===p?"regular":p,f=(0,a.Z)(e,["classes","className","component","disableGutters","variant"]);return i.createElement(d,(0,o.Z)({className:(0,s.Z)(r.root,r[m],n,!u&&r.gutters),ref:t},f))}));const c=(0,l.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:(0,n.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(d)},8546:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>o.Z,createChainedFunction:()=>a.Z,createSvgIcon:()=>n.Z,debounce:()=>i.Z,deprecatedPropType:()=>s,isMuiElement:()=>l.Z,ownerDocument:()=>d.Z,ownerWindow:()=>c.Z,requirePropFactory:()=>u,setRef:()=>p.Z,unstable_useId:()=>h.Z,unsupportedProp:()=>m,useControlled:()=>f.Z,useEventCallback:()=>b.Z,useForkRef:()=>g.Z,useIsFocusVisible:()=>v.Z});var o=r(3871),a=r(2568),n=r(5209),i=r(9437);function s(e,t){return function(){return null}}var l=r(3711),d=r(626),c=r(713);function u(e){return function(){return null}}var p=r(4236);function m(e,t,r,o,a){return null}var f=r(2775),b=r(5192),g=r(3834),h=r(5001),v=r(4896)},5001:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var o=r(7294);function a(e){var t=o.useState(e),r=t[0],a=t[1],n=e||r;return o.useEffect((function(){null==r&&a("mui-".concat(Math.round(1e5*Math.random())))}),[r]),n}},4379:(e,t,r)=>{"use strict";var o=r(4836),a=r(5263);t.Z=void 0;var n=a(r(7294)),i=(0,o(r(2108)).default)(n.createElement("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");t.Z=i},8963:(e,t,r)=>{"use strict";var o=r(4836),a=r(5263);t.Z=void 0;var n=a(r(7294)),i=(0,o(r(2108)).default)(n.createElement("path",{d:"M20 8h-3V6.21c0-2.61-1.91-4.94-4.51-5.19C9.51.74 7 3.08 7 6v2H4v14h16V8zm-8 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"}),"LockSharp");t.Z=i},9753:(e,t,r)=>{"use strict";var o=r(4836),a=r(5263);t.Z=void 0;var n=a(r(7294)),i=(0,o(r(2108)).default)(n.createElement("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}),"Repeat");t.Z=i},1019:(e,t,r)=>{"use strict";var o=r(4836),a=r(5263);t.Z=void 0;var n=a(r(7294)),i=(0,o(r(2108)).default)(n.createElement("path",{d:"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"}),"Security");t.Z=i},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=r(8546)},2835:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var o=r(7294),a=r(1120),n=r(5258),i=r(8358),s=r(515);const l=(0,a.Z)((e=>({root:{flexGrow:1,height:"3.7rem",padding:"10px 0",height:"4.5rem",background:s.Z.white,top:0,boxShadow:"-3px 1px 3px 0px #e5e5e5","& .MuiToolbar-root":{padding:0,height:"100%"}},menuButton:{marginRight:e.spacing(2)}}))),d=({children:e,styles:t})=>{const r=l();return o.createElement(n.Z,{position:"sticky",className:r.root,style:t},o.createElement(i.Z,{variant:"dense"},e))}},5212:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(7294),a=r(3681);const n=(0,r(1120).Z)({progress:{position:"absolute",top:"120%",width:"98%",height:"3px",margin:"0 auto"}}),i=()=>{const e=n();return o.createElement(a.Z,{color:"primary",className:e.progress})}},2371:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var o=r(7294),a=r(2157),n=r(282),i=r(7397),s=r(1120),l=r(7462),d=r(5987),c=(r(9864),r(6010)),u=r(3871),p=r(9693),m=r(4670);n.Z.styles;var f=o.forwardRef((function(e,t){var r=e.children,a=e.classes,n=e.className,i=e.color,s=void 0===i?"default":i,p=e.component,m=void 0===p?"div":p,f=e.disabled,b=void 0!==f&&f,g=e.disableElevation,h=void 0!==g&&g,v=e.disableFocusRipple,y=void 0!==v&&v,w=e.disableRipple,Z=void 0!==w&&w,x=e.fullWidth,P=void 0!==x&&x,E=e.orientation,C=void 0===E?"horizontal":E,S=e.size,k=void 0===S?"medium":S,R=e.variant,N=void 0===R?"outlined":R,T=(0,d.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),z=(0,c.Z)(a.grouped,a["grouped".concat((0,u.Z)(C))],a["grouped".concat((0,u.Z)(N))],a["grouped".concat((0,u.Z)(N)).concat((0,u.Z)(C))],a["grouped".concat((0,u.Z)(N)).concat("default"!==s?(0,u.Z)(s):"")],b&&a.disabled);return o.createElement(m,(0,l.Z)({role:"group",className:(0,c.Z)(a.root,n,P&&a.fullWidth,h&&a.disableElevation,"contained"===N&&a.contained,"vertical"===C&&a.vertical),ref:t},T),o.Children.map(r,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:(0,c.Z)(z,e.props.className),color:e.props.color||s,disabled:e.props.disabled||b,disableElevation:e.props.disableElevation||h,disableFocusRipple:y,disableRipple:Z,fullWidth:P,size:e.props.size||k,variant:e.props.variant||N}):null})))}));const b=(0,m.Z)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:(0,p.Fq)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:(0,p.Fq)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(f);var g=r(7812),h=r(2318),v=r(1270),y=r(1738),w=r(4379),Z=r(8963),x=r(1019),P=r(9753),E=(r(3084),r(9585)),C=r(5953),S=r(9704),k=r(2835),R=r(5212),N=r(8742);const T=(0,s.Z)({body:{margin:"20px 0"},form:{width:"90%",margin:"0 auto",display:"flex",flexDirection:"column","& .MuiFormControl-root":{paddingBottom:10},"& .MuiButtonGroup-root":{marginTop:10,flexDirection:"column","& button":{boxShadow:"-1px 1px 1px 0px #c3c3c3",fontSize:".84rem",marginBottom:10,color:"#fff"}}},input:{"& .MuiOutlinedInput-root":{"& input":{padding:"10px",fontSize:".95rem"},"& .MuiSvgIcon-root":{fontSize:"1.2rem"}}}}),z=({className:e})=>{const{id:t}=(0,S.v9)((e=>e.account.account)),r=(0,S.I0)(),s=T(),[l,d]=o.useState({severity:"",msg:"",show:!1}),[c,u]=o.useState(!1),[p,m]=o.useState({former:!1,newPassword:!1,confirmPassword:!1}),[f,z]=o.useState({former:"",newPassword:"",confirmPassword:""}),[M,B]=o.useState({former:!1,newPassword:!1,confirmPassword:!1}),[O,I]=o.useState({former:"",newPassword:"",confirmPassword:""}),_=()=>{r((0,E.T6)({component:"settings",parent:"stack"}))},F=(e,t)=>{B({...M,former:!1,newPassword:!1,confirmPassword:!1}),I({...O,former:"",newPassword:"",confirmPassword:""}),"former"===t&&z({...f,former:e}),"newPassword"===t&&z({...f,newPassword:e}),"confirmPassword"===t&&z({...f,confirmPassword:e})},H=e=>{m({...p,[`${e}`]:!p[`${e}`]})};return o.createElement(o.Fragment,null,o.createElement("section",{className:[s.resetPassword,e].join(" ")},o.createElement(k.Z,null,o.createElement(g.Z,{onClick:_},o.createElement(w.Z,null)),o.createElement(h.Z,{component:"h6"}," Reset Password "),c&&o.createElement(R.Z,null)),o.createElement("div",{className:s.body},o.createElement("form",{onSubmit:async e=>{e.preventDefault(),u(!0);const{former:t,newPassword:o,confirmPassword:a}=f;(0,N.mw)({former:t},(async e=>(u(!1),403===e.status?(B({...M,former:!0}),void I({...O,former:"Passwords do not match"})):o!==a?(B({...M,confirmPassword:!0,newPassword:!0}),void I({...O,confirmPassword:"Passwords do not match"})):o.length<5?(B({...M,confirmPassword:!0,newPassword:!0}),void I({...O,confirmPassword:"Password is too short. Password length should be more than 5 characters"})):void(async()=>{u(!0),(0,N.c0)(f,(e=>{z({...f,former:"",newPassword:"",confirmPassword:""}),u(!1),_(),200===e.status?r((0,C.Pc)({open:!0,msg:"Password updated successfully",severity:"success"})):r((0,C.Pc)({open:!0,msg:"Something went wrong",severity:"error"}))}))})())))},className:s.form},o.createElement(a.Z,{variant:"outlined",onChange:e=>F(e.target.value,"former"),className:s.input,value:f.former,placeholder:"Former password",type:"password",required:!0,error:M.former,type:p.former?"text":"password",helperText:O.former,autoComplete:"current-password",InputProps:{startAdornment:o.createElement(i.Z,{position:"start"},o.createElement(x.Z,{color:"secondary"})),endAdornment:o.createElement(i.Z,{position:"end"},o.createElement(g.Z,{color:"secondary","aria-label":"Toggle password visibility",onClick:()=>H("former")},p.former?o.createElement(v.Z,null):o.createElement(y.Z,null)))}}),o.createElement(a.Z,{variant:"outlined",className:s.input,onChange:e=>F(e.target.value,"newPassword"),value:f.newPassword,placeholder:"New password",type:"password",required:!0,autoComplete:"new-password",error:M.newPassword,type:p.newPassword?"text":"password",InputProps:{startAdornment:o.createElement(i.Z,{position:"start"},o.createElement(Z.Z,{color:"secondary"})),endAdornment:o.createElement(i.Z,{position:"end"},o.createElement(g.Z,{color:"secondary","aria-label":"Toggle password visibility",onClick:()=>H("newPassword")},p.newPassword?o.createElement(v.Z,null):o.createElement(y.Z,null)))}}),o.createElement(a.Z,{variant:"outlined",className:s.input,onChange:e=>F(e.target.value,"confirmPassword"),value:f.confirmPassword,placeholder:"Confirm password",type:"password",required:!0,autoComplete:"new-password",error:M.confirmPassword,helperText:O.confirmPassword,type:p.confirmPassword?"text":"password",InputProps:{startAdornment:o.createElement(i.Z,{position:"start"},o.createElement(P.Z,{color:"secondary"})),endAdornment:o.createElement(i.Z,{position:"end"},o.createElement(g.Z,{color:"secondary","aria-label":"Toggle password visibility",onClick:()=>H("confirmPassword")},p.confirmPassword?o.createElement(v.Z,null):o.createElement(y.Z,null)))}}),o.createElement(b,null,o.createElement(n.Z,{variant:"contained",disabled:c,type:"submit",color:"primary"},"Update password"),o.createElement(n.Z,{onClick:_,color:"primary",variant:"contained",type:"button"},"Cancel"))))))}},8742:(e,t,r)=>{"use strict";r.d(t,{c0:()=>n,dP:()=>s,g5:()=>i,mw:()=>a});const o=new Headers;function a(e,t){e=JSON.stringify(e);const[r,a]=["/account/matchPassword","POST"];fetch(r,{method:a,headers:o,body:e}).then((e=>{t(e)})).catch((e=>{}))}function n(e,t){e=e=JSON.stringify(e);const[r,a]=["/account/updatePassword","PUT"];fetch(r,{method:a,headers:o,body:e}).then((e=>{t(e)})).catch((e=>{}))}function i(e,t){e=JSON.stringify(e);const[r,a]=["/account/updateSocials","PUT"];fetch(r,{method:a,headers:o,body:e}).then((e=>{t(e)}))}function s(e,t){e=JSON.stringify(e);const[r,a]=["/account/updateSocials","PUT"];fetch(r,{method:a,headers:o,body:e}).then((e=>{t(e)}))}o.append("Content-Type","application/json")},4836:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},5263:(e,t,r)=>{var o=r(8698).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var l=i?Object.getOwnPropertyDescriptor(e,s):null;l&&(l.get||l.set)?Object.defineProperty(n,s,l):n[s]=e[s]}return n.default=e,r&&r.set(e,n),n},e.exports.__esModule=!0,e.exports.default=e.exports},8698:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);