"use strict";(self.webpackChunkasf_doc=self.webpackChunkasf_doc||[]).push([[841],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9902:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:7},l="6. Monitor and learn",c={unversionedId:"implementation/monitor",id:"implementation/monitor",isDocsHomePage:!1,title:"6. Monitor and learn",description:"- Data is more and more abundant, including regarding security metrics. It is really worth exploiting it, as it fosters informed and efficient collaboration.",source:"@site/docs/implementation/monitor.md",sourceDirName:"implementation",slug:"/implementation/monitor",permalink:"/docs/implementation/monitor",editUrl:"https://github.com/intuitem/asf-doc/edit/main/docs/implementation/monitor.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"5. Cyber resilience",permalink:"/docs/implementation/cyber-resilience"},next:{title:"About the default baseline",permalink:"/docs/default-baseline/intro"}},d=[],m={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"6-monitor-and-learn"},"6. Monitor and learn"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data is more and more abundant, including regarding security metrics. It is really worth exploiting it, as it fosters informed and efficient collaboration."),(0,o.kt)("li",{parentName:"ul"},"Jira is the most common solution for the management of agile stories. It provides very rich reporting functions. So great attention should be given to configure it adequately."),(0,o.kt)("li",{parentName:"ul"},"It is often said that dashboards are only for managers. Following agile transparency principle, ASF pushes for shared dashboards for all stakeholders: developers, managers, security teams."),(0,o.kt)("li",{parentName:"ul"},"It is generally better to avoid sensitive information in dashboard, so that is is possible to stick to a simple access control mechanism (e.g. set the teams who have access to the dashboards)."),(0,o.kt)("li",{parentName:"ul"},"The dashboards for development environment concern vulnerabilities, code quality, micro-segmentation, secrets leaks, ..."),(0,o.kt)("li",{parentName:"ul"},"Some tools like SonarQube already provide good dashboards for code quality. Similarly, commercial tools always provide dashboard functionalities."),(0,o.kt)("li",{parentName:"ul"},"However, it often makes sense to develop additional custom dashboards:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this reduces vendor lockdown and dependency"),(0,o.kt)("li",{parentName:"ul"},"modern tools makes that much simpler than it used to be, and a POC dashboard can be developed in a few days"),(0,o.kt)("li",{parentName:"ul"},"this allows top-notch and adapted dashboards that will bring high values to all stakeholders"),(0,o.kt)("li",{parentName:"ul"},"there are connectors for most commercial tools, so exploiting their raw data is often possible"))),(0,o.kt)("li",{parentName:"ul"},"Modern dashboards are explorable, so each reader is able to dive in the details as necessary."),(0,o.kt)("li",{parentName:"ul"},"Allowing personalized dashboards is also great to improve the UX for all readers."),(0,o.kt)("li",{parentName:"ul"},"Il also makes sense to take regular (daily, weekly) snapshots for most relevant dashboards and send them by mail or in collaboration channels."),(0,o.kt)("li",{parentName:"ul"},"Many tools can be used to create dashboards. Metabase or Apache Superset are good examples in the open-source category."),(0,o.kt)("li",{parentName:"ul"},"The ultimate goal of dashboards is to push for constant progress. Once a goal has been achieved, a new goal can be defined, and the dashboards can be adapted for that new goal."),(0,o.kt)("li",{parentName:"ul"},"Trend reporting widgets are very interesting to facilitate reading at a glance.")))}u.isMDXComponent=!0}}]);