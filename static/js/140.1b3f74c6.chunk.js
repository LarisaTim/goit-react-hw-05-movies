"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[140],{3901:function(e,t,r){r.d(t,{Z:function(){return v}});var a=r(1087),n=r(7689),s=r(2787),i=r(333),c=r.n(i),o="Movies_galleryList__WwPvT",l="Movies_galleryListItem__i58RU",u="Movies_galleryListImg__8WgAw",m="Movies_galleryListTitle__28y2G",h="Movies_galleryListCard__l5P05",f="Movies_link__zqp7K",p=r(184),v=function(e){var t=e.movies,r=(0,n.TH)();return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{className:o,children:t.map((function(e){var t=e.id,n=e.poster_path,i=e.title;return(0,p.jsx)("li",{className:l,children:(0,p.jsxs)(a.rU,{to:{pathname:"/movies/".concat(c()("".concat(i,"-").concat(t))),state:{from:r}},className:f,children:[n?(0,p.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(n),alt:i,loading:"lazy",width:"274",height:"398"}):(0,p.jsx)("img",{className:u,src:s,alt:i,loading:"lazy",width:"274",height:"398"}),(0,p.jsx)("div",{className:h,children:(0,p.jsx)("h3",{className:m,children:i})})]})},t)}))})})}},2690:function(e,t,r){r.d(t,{v:function(){return l}});var a=r(5861),n=r(7757),s=r.n(n),i=r(1243),c=r(8174),o=i.Z.create({baseURL:"https://api.themoviedb.org/3",timeout:1e3,params:{api_key:"843d6905879c9b52f41f5f6a1e2c8966"}});function l(e){return u.apply(this,arguments)}function u(){return(u=(0,a.Z)(s().mark((function e(t){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(t);case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},5140:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var a=r(1413),n=r(5861),s=r(9439),i=r(7757),c=r.n(i),o=r(2791),l=r(7689),u=r(4771),m=r(643),h=r(1087),f=r(3313),p=r(8174),v=(r(5462),"Form_searchForm__8fzh+"),_="Form_searchFormInput__L9OT7",d="Form_searchFormButton__ZwS5Z",g=r(184),x=function(e){var t=e.onSubmit,r=(0,h.lr)(""),a=(0,s.Z)(r,2),n=a[0],i=a[1];return(0,g.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault(),""!==n.trim()?(t(n),i("")):p.Am.warning("Enter searcher")},children:[(0,g.jsx)("input",{className:_,type:"text",name:"query",autoComplete:"off",placeholder:"Search movies",value:n,onChange:function(e){i(e.currentTarget.value.toLowerCase())}}),(0,g.jsx)("button",{type:"submit",className:d,"aria-label":"search",children:(0,g.jsx)(f.jRj,{})})]})},j=r(2690),w=r(3901);function y(){var e=(0,l.TH)(),t=(0,l.s0)(),r=(0,o.useState)(null),i=(0,s.Z)(r,2),h=i[0],f=i[1],p=(0,o.useState)(1),v=(0,s.Z)(p,2),_=v[0],d=v[1],y=(0,o.useState)(null),b=(0,s.Z)(y,2),Z=b[0],L=b[1];(0,o.useEffect)((function(){if(h){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.v)("search/movie?query=".concat(h,"&page=").concat(_));case 2:t=e.sent,L(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[_,h]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(x,{onSubmit:function(r){f(r),d(1),t.push((0,a.Z)((0,a.Z)({},e),{},{search:"query=".concat(r)}))}}),Z&&(0,g.jsxs)(u.Z,{dataLength:Z.total_results,next:function(){return d(_+1)},hasMore:!0,style:{textAlign:"center"},loader:(0,g.jsx)(m.Fe,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"line-wave",wrapperStyle:{},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),children:["",(0,g.jsx)(w.Z,{movies:Z.results})]})]})}},2787:function(e,t,r){e.exports=r.p+"static/media/nofoto.eb0b4d8f1764c867e051.jpg"}}]);
//# sourceMappingURL=140.1b3f74c6.chunk.js.map