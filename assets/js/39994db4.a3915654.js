"use strict";(self.webpackChunkasf_doc=self.webpackChunkasf_doc||[]).push([[281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4452:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:6},o="5. Cyber resilience",s={unversionedId:"implementation/cyber-resilience",id:"implementation/cyber-resilience",title:"5. Cyber resilience",description:"- Availability is a fundamental security principle. To achieve it, a cyber resilience approach is necessary.",source:"@site/docs/implementation/cyber-resilience.md",sourceDirName:"implementation",slug:"/implementation/cyber-resilience",permalink:"/docs/implementation/cyber-resilience",draft:!1,editUrl:"https://github.com/intuitem/asf-doc/edit/main/docs/implementation/cyber-resilience.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"4. Tooling & automation",permalink:"/docs/implementation/tooling"},next:{title:"6. Monitor and learn",permalink:"/docs/implementation/monitor"}},l={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"5-cyber-resilience"},"5. Cyber resilience"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Availability is a fundamental security principle. To achieve it, a cyber resilience approach is necessary. "),(0,i.kt)("li",{parentName:"ul"},"Resilience is mainly an architecture concern, both at system and software level. Cloud architectures are much easier to make resilient, as the underlying infrastructure offers resilient services."),(0,i.kt)("li",{parentName:"ul"},"However, the effort to achieve resilience shall not be overlooked, as it requires a consistent assembly of cloud services. Don't imagine that a cloud application is automatically resilient!"),(0,i.kt)("li",{parentName:"ul"},"Cloud providers offer several levels of geographical resiliency:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Autonomous Zones (AZ), separated by a few kilometers, with very low latency between them "),(0,i.kt)("li",{parentName:"ul"},"Regions, that are typically separated by more than 50 km"))),(0,i.kt)("li",{parentName:"ul"},"You can replicate a database in realtime between 2 AZs. Using several AZs significantly improves resilience, by avoiding any dependence to a single datacenter."),(0,i.kt)("li",{parentName:"ul"},"Using several regions provides even higher resilience, in particular in the case of outage of a entire region."),(0,i.kt)("li",{parentName:"ul"},"Avoid and remove unnecessary dependencies. This is one of the simplest and most effective way to improve resilience. But being a subtractive approach, it is often overlooked (this has been proved scientifically, see ",(0,i.kt)("a",{parentName:"li",href:"https://doi.org/10.1038/s41586-021-03380-y"},"https://doi.org/10.1038/s41586-021-03380-y"),")."),(0,i.kt)("li",{parentName:"ul"},"Testing the effectiveness of resilience mechanisms is essential to really make sure everything is working. Rule of thumb: if it is not tested, it will not work."),(0,i.kt)("li",{parentName:"ul"},"Chaos monkey approaches are the ultimate testing approach, but only possible for very mature organizations. It consists in introducing random breakdowns volontarily in production, to keep testing the resilience mechanisms, and regularly challenge operations teams. This approach has been popularized by Netflix."),(0,i.kt)("li",{parentName:"ul"},"Backup and restore processes are also fundamental for cyber resilience. Indeed, this is the only way to mitigate a successful ransomware attack."),(0,i.kt)("li",{parentName:"ul"},"Beware that attackers will do their best to erase or corrupt backups too, so the backup process shall be highly independent from the information system (offline backup on tapes or hard disks is a good option, and can be provided by Cloud Service Providers)."),(0,i.kt)("li",{parentName:"ul"},"Restoration testing is essential to make sure backups will work when necessary and are not corrupt. Rule of thumb: an untested backup does not work."),(0,i.kt)("li",{parentName:"ul"},"Backup encryption is recommended, but shall be managed properly, as cryptography is prone to pitfalls. Loosing your keys is equivalent to loosing your backup. At the end of the end, you will probably use a physical safe.")))}m.isMDXComponent=!0}}]);