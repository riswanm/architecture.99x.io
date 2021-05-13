(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var o=a(3),r=a(7),n=(a(0),a(119)),i={id:"why-architecture",title:"Why Architecture?",slug:"/"},s={unversionedId:"why-architecture",id:"why-architecture",isDocsHomePage:!1,title:"Why Architecture?",description:"Although this sounds relatively straightforward, we, as software professionals, have a degree of influence over those architecturally significant decisions. Imagine you\u2019re building a simple server-side web application to deliver information to users, and that information is stored in a relational database. For the sake of this discussion, let\u2019s say there are no complex requirements related to security, performance or scalability, and that the database is simply being used for data storage. Let\u2019s also ignore non-relational (e.g. NoSQL) databases.",source:"@site/docs/why-architecture.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/99x/architecture.99x.io/edit/master/website/docs/why-architecture.md",version:"current",sidebar:"docs",next:{title:"Role of the Architect",permalink:"/docs/role-of-architect"}},c=[{value:"Is software architecture important?",id:"is-software-architecture-important",children:[]},{value:"The benefits of software architecture",id:"the-benefits-of-software-architecture",children:[]},{value:"Does every software project need software architecture?",id:"does-every-software-project-need-software-architecture",children:[]},{value:"Reference",id:"reference",children:[]}],l={toc:c};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Although this sounds relatively straightforward, we, as software professionals, have a degree of influence over those architecturally significant decisions. Imagine you\u2019re building a simple server-side web application to deliver information to users, and that information is stored in a relational database. For the sake of this discussion, let\u2019s say there are no complex requirements related to security, performance or scalability, and that the database is simply being used for data storage. Let\u2019s also ignore non-relational (e.g. NoSQL) databases."),Object(n.b)("p",null,"When building the web application, many teams will choose to use some sort of abstraction layer to communicate with the database, like an object-relational mapping framework; such as Hibernate, JPA, Entity Framework, etc. One common reason to use a database abstraction layer is to make accessing the database easier. Another common reason to use a database abstraction layer is to decouple business/domain-specific code from the choice of database. The use of an abstraction layer is a classic technique for decoupling distinct parts of a software system; promoting looser coupling, higher cohesion and a better separation of concerns. If you\u2019re simply using the database for data storage, the use of the database abstraction layer allows you to, in theory, change your database via configuration, without changing any code. Since the database can be changed so easily, many teams would therefore consider the choice of database to no longer be a significant decision."),Object(n.b)("p",null,"However, while the database may no longer be considered a significant decision, the choice to decouple through the introduction of an additional layer should be. If you\u2019re wondering why, have a think about how long it would take you to swap out your current database abstraction layer or web MVC framework and replace it with another. Of course, you could add another layer over the top of your chosen database abstraction layer to further isolate your business logic and provide the ability to easily swap out your database abstraction layer but, again, you\u2019ve made another significant decision. You\u2019ve introduced additional layering, complexity and cost."),Object(n.b)("p",null,"Although we can\u2019t necessarily make \u201csignificant decisions\u201d disappear, we can use a number of different tactics (such as architectural layering, in the previous example) to change what those significant decisions are. There\u2019s also no explicit line between the decisions that should be deemed as significant, and those that shouldn\u2019t. Having said that, the significant decisions are usually related to key technology choices (e.g. programming languages and frameworks) and the overall structure (monolithic deployment unit vs microservices). Aspects such as \u201ctabs vs whitespaces\u201d, or \u201ccurly braces on same line vs the next line\u201d, are definitely not architecturally significant! Everything else will fall in between somewhere between these two extremes. Part of the process of architecting a software system is about understanding what is significant and why, given the context you\u2019re working in."),Object(n.b)("h2",{id:"is-software-architecture-important"},"Is software architecture important?"),Object(n.b)("p",null,"Now that we understand what software architecture is, we should wrap up this chapter by looking at the importance of software architecture. The past decade or so has seen a huge shift in the way that we build software, thanks to movements such as agile, lean, software craftsmanship, continuous delivery, DevOps, the cloud and more. Together these new approaches help us to build better software that better meets the needs of the business, while carefully managing time and budgetary constraints. But there\u2019s still more we can do because even a small amount of software architecture can help prevent many of the problems that projects face."),Object(n.b)("p",null,"As we've already mentioned, successful software projects aren\u2019t just about focussing on good code. Ask yourself the following questions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Does your software system have a well defined structure?"),Object(n.b)("li",{parentName:"ul"},"Is everybody on the team implementing features in a consistent way?"),Object(n.b)("li",{parentName:"ul"},"Is there a consistent level of quality across the codebase?"),Object(n.b)("li",{parentName:"ul"},"Do team members share the same vision for how the software will be built?"),Object(n.b)("li",{parentName:"ul"},"Does everybody on the team have the necessary amount of technical guidance?"),Object(n.b)("li",{parentName:"ul"},"Is there an appropriate amount of technical leadership?")),Object(n.b)("p",null,"It is possible to successfully deliver a software project by answering \u201cno\u201d to some of these questions, but it does require a very good team and a lot of luck. If nobody thinks about software architecture, the end result is something that typically looks like the stereotypical \u201cbig ball of mud\u201d. Sure, it has a structure, but not one that you\u2019d want to work with!"),Object(n.b)("p",null,"Other side effects of a team that focusses too much on the code include the software system being too slow, insecure, fragile, unstable, hard to deploy, hard to maintain, hard to change, hard to extend, etc. Although most software projects and products start with the best of intentions, it\u2019s easy for them to veer off track without an appropriate amount of technical leadership; both at the code level and above it. These seemingly chaotic software projects do exist in the real-world, and most of us will have one or more horror stories about the time we spent working on them. If you\u2019ve never worked on such a project, you\u2019re probably in the lucky minority!"),Object(n.b)("h2",{id:"the-benefits-of-software-architecture"},"The benefits of software architecture"),Object(n.b)("p",null,"Thankfully, most of these problems are relatively easy to solve with the application of some good technical leadership, resulting in a team that therefore understands and thinks about software architecture. In summary, this can provide:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A clear vision and roadmap for the team to follow, regardless of whether that vision is owned by a single person or collectively by the whole team."),Object(n.b)("li",{parentName:"ul"},"Technical leadership and better coordination."),Object(n.b)("li",{parentName:"ul"},"A stimulus to talk to people (inside and outside of the team) in order to ask questions relating to significant decisions, quality attributes, constraints and other cross-cutting concerns."),Object(n.b)("li",{parentName:"ul"},"A framework for identifying and mitigating risk."),Object(n.b)("li",{parentName:"ul"},"Consistency of approach and standards, leading to a well structured codebase."),Object(n.b)("li",{parentName:"ul"},"A set of firm foundations for the product being built."),Object(n.b)("li",{parentName:"ul"},"A structure with which to communicate the solution at different levels of abstraction to different audiences.")),Object(n.b)("h2",{id:"does-every-software-project-need-software-architecture"},"Does every software project need software architecture?"),Object(n.b)("p",null,"Rather than use the typical consulting answer of \u201cit depends\u201d, we would say the answer is undoubtedly \u201cyes\u201d. The caveat here is that every software team should look at a number of factors in order to assess how much software architecture thinking, a degree of which manifests itself as up front design, is necessary. These include the size of the project/product, the complexity of the project/product, the size of the team and the experience of the team."),Object(n.b)("p",null,"Historically we\u2019ve seen a tendency towards too much up front design, with teams trying to answer all of the questions and solve all of the problems before writing a single line of code. More recently, We\u2019ve witnessed a trend towards the other extreme, and too little up front design. As Dave Thomas once said:"),Object(n.b)("p",null,"Big design up front is dumb. Doing no design up front is even dumber."),Object(n.b)("p",null,"As with many things in life, there is a sweet spot here awaiting discovery. The answer to how much is \u201cenough\u201d up front design and technical leadership requires experience and common sense."),Object(n.b)("h2",{id:"reference"},"Reference"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://leanpub.com/software-architecture-for-developers/read#leanpub-auto-what-is-software-architecture"},"Book: Technical Leadership and the Balance in Agility")))}u.isMDXComponent=!0},119:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return b}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=u(a),f=o,b=h["".concat(i,".").concat(f)]||h[f]||d[f]||n;return a?r.a.createElement(b,s(s({ref:t},l),{},{components:a})):r.a.createElement(b,s({ref:t},l))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);