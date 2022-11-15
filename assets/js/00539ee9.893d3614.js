"use strict";(self.webpackChunkeki_ghazouani_github_io=self.webpackChunkeki_ghazouani_github_io||[]).push([[3959],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>k});var n=t(7294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var i=n.createContext({}),o=function(a){var e=n.useContext(i),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(i.Provider,{value:e},a.children)},c={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,i=a.parentName,l=r(a,["components","mdxType","originalType","parentName"]),h=o(t),k=s,N=h["".concat(i,".").concat(k)]||h[k]||c[k]||m;return t?n.createElement(N,p(p({ref:e},l),{},{components:t})):n.createElement(N,p({ref:e},l))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=h;var r={};for(var i in e)hasOwnProperty.call(e,i)&&(r[i]=e[i]);r.originalType=a,r.mdxType="string"==typeof a?a:s,p[1]=r;for(var o=2;o<m;o++)p[o]=t[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2740:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>m,metadata:()=>r,toc:()=>o});var n=t(7462),s=(t(7294),t(3905));t(2389);const m={title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",authors:["nathan.rouff"],header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},p=void 0,r={permalink:"/blog/2022/08/27/traditional_or",source:"@site/blog/2022-08-27-traditional_or.md",title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",date:"2022-08-27T00:00:00.000Z",formattedDate:"August 27, 2022",tags:[{label:"Operational Research",permalink:"/blog/tags/operational-research"},{label:"Optimization",permalink:"/blog/tags/optimization"},{label:"Knapsack problem",permalink:"/blog/tags/knapsack-problem"},{label:"Solvers",permalink:"/blog/tags/solvers"}],readingTime:6.065,hasTruncateMarker:!0,authors:[{name:"Nathan Rouff",title:"Data Scientist Consultant",url:"mailto:inno@ekimetrics.com",imageURL:"/img/authors/nathan_rouff.png",key:"nathan.rouff"}],frontMatter:{title:"Deep RL and Optimization applied to Operations Research problem - 1/2 Traditional Optimization techniques",authors:["nathan.rouff"],header_image_url:"./img/blog/plitvice_lakes.jpg",tags:["Operational Research","Optimization","Knapsack problem","Solvers"],draft:!1,description:"This article is part of a series of articles which will introduce several optimization techniques, from traditional (yet advanced) Mathematical Optimization solvers and associated packages to Deep Reinforcement Learning algorithms, while tackling a very famous Operations Research problem: the multi-knapsack problem. Here, the focus is on traditional optimization techniques.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Data Science for business","Operational Research","Optimization","Knapsack problem"]},prevItem:{title:"Deep RL and Optimization applied to Operations Research problem - 2/2 Reinforcement Learning approach",permalink:"/blog/2022/09/06/deep_rl"}},i={authorsImageUrls:[void 0]},o=[{value:"Main steps while creating an optimization model to solve a business problem",id:"main-steps-while-creating-an-optimization-model-to-solve-a-business-problem",level:2},{value:"The multi-knapsack problem",id:"the-multi-knapsack-problem",level:2},{value:"Creating the conceptual mathematical model",id:"creating-the-conceptual-mathematical-model",level:3},{value:"Translating the mathematical model into a computer program with Python-MIP",id:"translating-the-mathematical-model-into-a-computer-program-with-python-mip",level:3},{value:"Solving the mathematical model with Python-MIP",id:"solving-the-mathematical-model-with-python-mip",level:3},{value:"Some Mathematical Optimization packages",id:"some-mathematical-optimization-packages",level:3},{value:"Conclusion",id:"conclusion",level:2}],l={toc:o};function c(a){let{components:e,...m}=a;return(0,s.kt)("wrapper",(0,n.Z)({},l,m,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Let ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mspace",{parentName:"mrow"}),(0,s.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,s.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,s.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,s.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f\\colon[a,b]\\to\\R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,s.kt)("span",{parentName:"span",className:"mpunct"}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mrel"},":")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathbb"},"R")))))," be Riemann integrable. Let ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F"),(0,s.kt)("mspace",{parentName:"mrow"}),(0,s.kt)("mspace",{parentName:"mrow",width:"0.1111em"}),(0,s.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0.17em"}),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009\u2063"),(0,s.kt)("mo",{parentName:"mrow",lspace:"0em",rspace:"0em"},":"),(0,s.kt)("mspace",{parentName:"mrow",width:"0.3333em"}),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"]"),(0,s.kt)("mo",{parentName:"mrow"},"\u2192"),(0,s.kt)("mi",{parentName:"mrow",mathvariant:"double-struck"},"R")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F\\colon[a,b]\\to\\R")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"mspace nobreak"}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1111em"}}),(0,s.kt)("span",{parentName:"span",className:"mpunct"}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"-0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mrel"},":")),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.3333em"}}),(0,s.kt)("span",{parentName:"span",className:"mopen"},"["),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mpunct"},","),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mclose"},"]"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"\u2192"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6889em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathbb"},"R")))))," be\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,s.kt)("mi",{parentName:"msubsup"},"a"),(0,s.kt)("mi",{parentName:"msubsup"},"x")),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"t"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"t")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F(x)=\\int_{a}^{x} f(t)\\,dt")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2151em",verticalAlign:"-0.3558em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{marginRight:"0.19445em",position:"relative",top:"-0.0006em"}},"\u222b"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8593em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-2.3442em",marginLeft:"-0.1945em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a")))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.2579em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3558em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),". Then ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is continuous, and at all ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," such that\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"f")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f")))))," is continuous at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),", ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"F")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F")))))," is differentiable at ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," with ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"F"),(0,s.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mi",{parentName:"mrow"},"f"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"F'(x)=f(x)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0019em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"F"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7519em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032"))))))))),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),"."),(0,s.kt)("div",{className:"math math-display"},(0,s.kt)("span",{parentName:"div",className:"katex-display"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"I"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("msubsup",{parentName:"mrow"},(0,s.kt)("mo",{parentName:"msubsup"},"\u222b"),(0,s.kt)("mn",{parentName:"msubsup"},"0"),(0,s.kt)("mrow",{parentName:"msubsup"},(0,s.kt)("mn",{parentName:"mrow"},"2"),(0,s.kt)("mi",{parentName:"mrow"},"\u03c0"))),(0,s.kt)("mi",{parentName:"mrow"},"sin"),(0,s.kt)("mo",{parentName:"mrow"},"\u2061"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"x"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,s.kt)("mtext",{parentName:"mrow"},"\u2009"),(0,s.kt)("mi",{parentName:"mrow"},"d"),(0,s.kt)("mi",{parentName:"mrow"},"x")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"I = \\int_0^{2\\pi} \\sin(x)\\,dx")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"2.476em",verticalAlign:"-0.9119em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},(0,s.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011em"}},"\u222b"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.564em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-1.7881em",marginLeft:"-0.4445em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"0"))),(0,s.kt)("span",{parentName:"span",style:{top:"-3.8129em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}},"\u03c0"))))),(0,s.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.9119em"}},(0,s.kt)("span",{parentName:"span"})))))),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mop"},"sin"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,s.kt)("p",null,"In this first article is introduced a systematic way to approach and solve optimization problems. Then, the multi-knapsack problem itself is introduced. Then we apply the rules defined before on how to solve optimization problems and obtain the optimal solution to the multi-knapsack problem, formulated as a Mixed Integer problem and using Python-MIP package. Let's now introduce simple steps one can follow to approach optimization problems with optimization solvers."),(0,s.kt)("h2",{id:"main-steps-while-creating-an-optimization-model-to-solve-a-business-problem"},"Main steps while creating an optimization model to solve a business problem"),(0,s.kt)("p",null,"Once a business problem that could benefit from optimization has been identified, we can define a systematic approach based on 3 steps for solving all kind of optimization problems with optimization solvers. These 3 steps are highlighted in the figure below."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot-app",src:t(1664).Z,width:"2670",height:"567"})),(0,s.kt)("div",{align:"center"}," Figure 1 : The 3 main steps for solving a business problem through optimization"),(0,s.kt)("br",null),(0,s.kt)("p",null,"In more details, these 3 steps are: "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Create the conceptual mathematical model")," that defines the different variables, constraints, etc. in the business problem. This step consists in writing down on paper the equations that define our problem. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Translate the conceptual mathematical model into a computer program"),". For most programming languages used for optimization, the computer program will largely resembles the mathematical equations one would write on paper.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Solve the mathematical model using a math programming solver"),". The solver available for Mathematical Programming (solvers such as GLPK, Gurobi, CPLEX...) relies on very sophisticated algorithms. Important algorithms and ideas used in these solvers are, among many others: simplex method, branch & bound, use of heuristics..."))),(0,s.kt)("p",null,"Let's see those 3 steps for the case of the multi-knapsack problem."),(0,s.kt)("h2",{id:"the-multi-knapsack-problem"},"The multi-knapsack problem"),(0,s.kt)("p",null,"The objective here is, given a set of ",(0,s.kt)("em",{parentName:"p"},"n")," items and a set of ",(0,s.kt)("em",{parentName:"p"},"m")," knapsacks, to ",(0,s.kt)("strong",{parentName:"p"},"maximize")," the total value of the items put in the knapsacks without exceeding their capacity."),(0,s.kt)("p",null,"Below,  w",(0,s.kt)("sub",null,"i")," represents the weight of item i,  p",(0,s.kt)("sub",null,"i")," the value of item i while  c",(0,s.kt)("sub",null,"j")," represents the capacity of knapsack j."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot-app",src:t(8753).Z,width:"1306",height:"1033"})),(0,s.kt)("div",{align:"center"}," Figure 2: Description of the multi-knapsack problem"),(0,s.kt)("br",null),(0,s.kt)("p",null,"The multi-knapsack is an extension of the classical knapsack problem where instead of considering only one knapsack, we consider as many as we want. This allows to easily extend the complexity of this problem."),(0,s.kt)("p",null,"While the problem is relatively easy to define mathematically, it belongs to the class of NP-hard problems. Without going into the details of what defines NP-hard problems, we can easily see that the complexity of the knapsack problems explodes when the number of knapsacks and items increases. Indeed, we have m",(0,s.kt)("sup",null,"n")," available combinations we would need to test should we want to apply a brute-force approach for solving this problem. Just with 10 knapsacks and 80 items, there are 10",(0,s.kt)("sup",null,"80")," combinations, which is the estimation of the number of atoms in the universe! And 10 knapsacks and 80 items is still quite limited... Let's now try to create the conceptual mathematical model by defining the problem with equations."),(0,s.kt)("h3",{id:"creating-the-conceptual-mathematical-model"},"Creating the conceptual mathematical model"),(0,s.kt)("p",null,"A quick translation of the multi-knapsack problem with equation can be written as the following: "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"screenshot-app",src:t(7002).Z,width:"262",height:"161"}),"\n",(0,s.kt)("img",{alt:"screenshot-app",src:t(9661).Z,width:"201",height:"19"})),(0,s.kt)("p",null,"Now that we managed to translate the problem into a set of equations, let's translate this mathematical model so that it is understood by a computer program. Below, we will make use of the Python package ",(0,s.kt)("a",{parentName:"p",href:"https://www.python-mip.com/"},"Python-MIP")," which is open-source and provides tools for modeling and solving Mixed-Integer Linear Programming Problems (MIP), relying on fast open source solvers."),(0,s.kt)("h3",{id:"translating-the-mathematical-model-into-a-computer-program-with-python-mip"},"Translating the mathematical model into a computer program with Python-MIP"),(0,s.kt)("p",null,"Before solving the problem, we have to generate an instance for it (have data defining the problem). To do so, you can use the following code that will generate an instance of this problem with 40 items to store in 5 bags."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"import pandas as pd\nimport numpy as np\nimport pickle\n\ndef data_generator_knapsack(number_bags, number_items, minimum_weight_item, maximum_weight_item, minimum_value_item, maximum_value_item, max_weight_bag):\n    data = {}\n    weights = np.random.randint(minimum_weight_item, maximum_weight_item, size = number_items)\n    values = np.random.randint(minimum_value_item, maximum_value_item, size = number_items)\n    data['weights'] = weights\n    data['values'] = values\n    data['items'] = list(range(len(weights)))\n    data['num_items'] = len(weights)\n    data['bins'] = list(range(number_bags))\n    data['bin_capacities'] = np.random.randint(0, max_weight_bag, size = number_bags) + np.int(np.mean(data['weights']))\n    return(data)\n\nnumber_bags = 5\nnumber_items = 40\nminimum_weight_item = 0\nmaximum_weight_item = 75\nminimum_value_item = 0\nmaximum_value_item = 75\nmax_weight_bag = 150\n\ndata = data_generator_knapsack(number_bags, number_items, minimum_weight_item, maximum_weight_item, minimum_value_item, maximum_value_item, max_weight_bag)\n")),(0,s.kt)("p",null,"Let's now import the package used to have access to the MIP solver, here using the python package Python-MIP:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"from mip import Model, xsum, maximize, BINARY\n")),(0,s.kt)("p",null,"Now, we can translate the mathematical model so that it is understood by Python-MIP. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"def mip_solve_knapsack(data):\n\n  model = Model(\"knapsack\")\n\n  x = [[model.add_var(var_type=BINARY) for i in data['items']] for j in data['bins']]\n\n  model.objective = maximize(xsum((xsum(data['values'][i] * x[j][i] for i in data['items']) for j in data['bins'])))\n\n  for j in data['bins']:\n      model += xsum(data['weights'][i] * x[j][i] for i in data['items']) <= data['bin_capacities'][j]\n\n  # Each item can be in at most one bin\n  for i in data['items']:\n      model += xsum(x[j][i] for j in data['bins']) <= 1\n\n  model.optimize()\n  \n  return(model)\n")),(0,s.kt)("p",null,"Remark how close it is from the original equations! These solvers are very powerful and yet easy to use directly in Python. The code is indeed very close to the original equations. "),(0,s.kt)("h3",{id:"solving-the-mathematical-model-with-python-mip"},"Solving the mathematical model with Python-MIP"),(0,s.kt)("p",null,"Using the ",(0,s.kt)("strong",{parentName:"p"},"mip_solve_knapsack")," function defined in the previous section, we can access to important information regarding the problem, such as the final objective value and the values of x",(0,s.kt)("sub",null,"ij")," telling us what were the best combinations of items inside knapsacks."),(0,s.kt)("h3",{id:"some-mathematical-optimization-packages"},"Some Mathematical Optimization packages"),(0,s.kt)("p",null,"In the notebook associated to this article, the package Python-MIP was used. ",(0,s.kt)("strong",{parentName:"p"},"Python-MIP")," is free, but many other packages exist for solving optimization problems on Python (and other languages of course like Julia). For instance ",(0,s.kt)("strong",{parentName:"p"},"OR-Tools")," from Google is a well-recognized free solver, with ",(0,s.kt)("a",{parentName:"p",href:"https://developers.google.com/optimization/introduction/overview"},"detailed documentation"),". "),(0,s.kt)("p",null,"On the other side, ",(0,s.kt)("strong",{parentName:"p"},"Gurobi")," is a very popular commercial solution for mathematical optimization and its documentation is extremely rich, with quick introductions about ",(0,s.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/modeling-basics/"},"Mathematical Programming"),", ",(0,s.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/mip-basics/"},"Linear Programming")," and ",(0,s.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/mip-basics/"},"Mixed-Integer Programming"),". Importantly, it has a ",(0,s.kt)("a",{parentName:"p",href:"https://www.gurobi.com/resource/modeling-examples-using-the-gurobi-python-api-in-jupyter-notebook/"},"large number of modeling examples from all industry fields")," directly available on Google Colab allowing to better grasp notions of Mathematical Modelling and to improve modeling skills to tackle all kind of optimization problems with Python. This resource can be of use even if one doesn't plan to use this commercial software but rather a free package such as OR-Tools."),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"In this article was introduced the multi-knapsack problem, an NP-complete problem, very difficult to solve when taking many items and bags. "),(0,s.kt)("p",null,"The approach to solve the multi-knapsack problem relied on Python-MIP, a free optimization package using powerful MILP solvers to solve very efficiently all kinds of optimization problems."),(0,s.kt)("p",null,"In the next part of this series on the multi-knapsack problem, well studied in the field of Operations Research and at the heart of many real optimization problems, we'll highlight how Deep Reinforcement Learning can be used in order to solve combinatorial optimization problems such as this one. Stay tuned!"))}c.isMDXComponent=!0},1664:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/3_steps_math_modelling_4-679cfdabcdf2ab022e54b439d00a8992.png"},8753:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/Knapsack_problem_5-31f9629281a4c78ff57ea1b68c6f753e.png"},7002:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/equations_1-de05b24a1b63925c7e9861db33be2341.svg"},9661:(a,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/equations_3-8e121b52240ee3c6995bc91941f72164.svg"}}]);