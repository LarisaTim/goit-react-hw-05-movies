"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[63],{3901:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(1087),a=r(7689),s=r(2787),i=r(333),c=r.n(i),o="Movies_galleryList__WwPvT",l="Movies_galleryListItem__i58RU",u="Movies_galleryListImg__8WgAw",p="Movies_galleryListTitle__28y2G",f="Movies_galleryListCard__l5P05",h="Movies_link__zqp7K",d=r(184),v=function(e){var t=e.movies,r=(0,a.TH)();return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{className:o,children:t.map((function(e){var t=e.id,a=e.poster_path,i=e.title;return(0,d.jsx)("li",{className:l,children:(0,d.jsxs)(n.rU,{to:{pathname:"/movies/".concat(c()("".concat(i,"-").concat(t))),state:{from:r}},className:h,children:[a?(0,d.jsx)("img",{className:u,src:"https://image.tmdb.org/t/p/w500".concat(a),alt:i,loading:"lazy",width:"274",height:"398"}):(0,d.jsx)("img",{className:u,src:s,alt:i,loading:"lazy",width:"274",height:"398"}),(0,d.jsx)("div",{className:f,children:(0,d.jsx)("h3",{className:p,children:i})})]})},t)}))})})}},2690:function(e,t,r){r.d(t,{v:function(){return l}});var n=r(5861),a=r(7757),s=r.n(a),i=r(1243),c=r(8174),o=i.Z.create({baseURL:"https://api.themoviedb.org/3",timeout:1e3,params:{api_key:"843d6905879c9b52f41f5f6a1e2c8966"}});function l(e){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o(t);case 3:return r=e.sent,n=r.data,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),c.Am.error("\u041d\u0435\u0442 \u0444\u0438\u043b\u044c\u043c\u0430 \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}},4063:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(5861),a=r(9439),s=r(7757),i=r.n(s),c=r(2791),o=r(2690),l=r(4771),u=r(643),p=r(3901),f=r(184);function h(){var e=(0,c.useState)(null),t=(0,a.Z)(e,2),r=t[0],s=t[1],h=(0,c.useState)(1),d=(0,a.Z)(h,2),v=d[0],m=d[1];(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.v)("/trending/movie/week?page=".concat(v));case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return(0,f.jsx)(f.Fragment,{children:r&&(0,f.jsxs)(l.Z,{dataLength:r.total_results,next:function(){return m((function(e){return e+1}))},hasMore:!0,style:{textAlign:"center"},loader:(0,f.jsx)(u.Fe,{height:"100",width:"100",color:"#4fa94d",ariaLabel:"line-wave",wrapperStyle:{},wrapperClass:"",visible:!0,firstLineColor:"",middleLineColor:"",lastLineColor:""}),children:["",(0,f.jsx)(p.Z,{movies:r.results})]})})}},2787:function(e,t,r){e.exports=r.p+"static/media/nofoto.eb0b4d8f1764c867e051.jpg"}}]);
//# sourceMappingURL=63.5f72a26c.chunk.js.map