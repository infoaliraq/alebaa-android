(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{NTqr:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),t=function(){return function(){}}(),b=u("pMnS"),i=u("ZZ/e"),a=u("fJug"),e=u("kO4e"),r=u("t8sF"),s=u("6LDZ"),k=u("oBZk"),p=u("Ip0R"),c=function(){function l(l,n){this.navCtrl=l,this.bookmarkService=n,this.posts=[],this.title="Bookmark",this.loadBookmarks()}return l.prototype.loadBookmarks=function(){var l=this.bookmarkService.getAllBookmark();for(var n in this.posts=[],l)this.posts.push(l[n])},l.prototype.clearAll=function(){this.bookmarkService.clearAll(),this.loadBookmarks()},l.prototype.ionViewWillEnter=function(){this.loadBookmarks()},l.prototype.onBookmark=function(l){this.bookmarkService.delete(l),this.loadBookmarks()},l}(),g=o.nb({encapsulation:0,styles:[["page-bookmark[_nghost-%COMP%]   ion-grid[_ngcontent-%COMP%], page-bookmark   [_nghost-%COMP%]   ion-grid[_ngcontent-%COMP%], page-bookmark[_nghost-%COMP%]   ion-row[_ngcontent-%COMP%], page-bookmark   [_nghost-%COMP%]   ion-row[_ngcontent-%COMP%]{height:100%}page-bookmark[_nghost-%COMP%]   ion-col[_ngcontent-%COMP%], page-bookmark   [_nghost-%COMP%]   ion-col[_ngcontent-%COMP%]{position:relative}page-bookmark[_nghost-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%], page-bookmark   [_nghost-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;top:18px;right:5px;font-size:12px!important}"]],data:{}});function m(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,4,"div",[["list-bokmark",""],["margin-bottom",""]],null,null,null,null,null)),o.ob(1,16384,null,0,i.d,[o.k],null,null),(l()(),o.pb(2,0,null,null,2,"news-item",[],null,[[null,"onBookmark"]],function(l,n,u){var o=!0;return"onBookmark"===n&&(o=!1!==l.component.onBookmark(u)&&o),o},a.b,a.a)),o.Db(512,null,e.a,e.a,[r.a]),o.ob(4,573440,null,0,s.a,[i.Hb,e.a],{data:[0,"data"]},{onBookmark:"onBookmark"})],function(l,n){l(n,4,0,n.context.$implicit)},null)}function h(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,12,"ion-row",[],null,null,null,k.mb,k.B)),o.ob(1,49152,null,0,i.jb,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,10,"ion-col",[["size","12"]],null,null,null,k.V,k.k)),o.ob(3,49152,null,0,i.t,[o.h,o.k,o.z],{size:[0,"size"]},null),(l()(),o.pb(4,0,null,0,2,"h2",[["margin-bottom",""],["padding-start",""],["text-size-lg",""]],null,null,null,null,null)),o.ob(5,16384,null,0,i.d,[o.k],null,null),(l()(),o.Gb(-1,null,["\u0627\u0644\u0623\u062e\u0628\u0627\u0631 \u0627\u0644\u0645\u062d\u0641\u0648\u0638\u0629"])),(l()(),o.pb(7,0,null,0,2,"ion-button",[["fill","clear"],["size","small"],["text-size-p",""]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.clearAll()&&o),o},k.O,k.d)),o.ob(8,49152,null,0,i.k,[o.h,o.k,o.z],{fill:[0,"fill"],size:[1,"size"]},null),(l()(),o.Gb(-1,0,["\u0645\u0633\u062d \u0627\u0644\u0643\u0644"])),(l()(),o.pb(10,0,null,0,0,"div",[["clearfix",""]],null,null,null,null,null)),(l()(),o.gb(16777216,null,0,1,null,m)),o.ob(12,278528,null,0,p.j,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,3,0,"12"),l(n,8,0,"clear","small"),l(n,12,0,u.posts)},null)}function f(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,10,"ion-row",[["class","ion-align-items-center"]],null,null,null,k.mb,k.B)),o.ob(1,49152,null,0,i.jb,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,8,"ion-col",[],null,null,null,k.V,k.k)),o.ob(3,49152,null,0,i.t,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,6,"div",[["no-post",""],["text-center",""]],null,null,null,null,null)),o.ob(5,16384,null,0,i.d,[o.k],null,null),(l()(),o.pb(6,0,null,null,0,"img",[["alt",""],["src","../assets/imgs/alebaaLogo.png"]],null,null,null,null,null)),(l()(),o.pb(7,0,null,null,1,"h1",[["text-size-xl",""]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u062e\u0628\u0627\u0631 \u0645\u062d\u0641\u0648\u0638\u0629"])),(l()(),o.pb(9,0,null,null,1,"p",[["text-size-md",""]],null,null,null,null,null)),(l()(),o.Gb(-1,null,["\u0627\u062d\u0641\u0638 \u0627\u0644\u0627\u062e\u0628\u0627\u0631 \u0628\u0627\u0644\u0646\u0642\u0631 \u0639\u0644\u0649 \u0632\u0631 \u062d\u0641\u0638 \u0627\u0644\u062e\u0628\u0631"]))],null,null)}function d(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,11,"ion-header",[["box-shadow",""]],null,null,null,k.Z,k.o)),o.ob(1,49152,null,0,i.B,[o.h,o.k,o.z],null,null),(l()(),o.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,k.vb,k.K)),o.ob(3,49152,null,0,i.Cb,[o.h,o.k,o.z],null,null),(l()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,k.P,k.e)),o.ob(5,49152,null,0,i.l,[o.h,o.k,o.z],null,null),(l()(),o.pb(6,0,null,0,1,"ion-menu-button",[["defaultHref","/"]],null,null,null,k.hb,k.x)),o.ob(7,49152,null,0,i.R,[o.h,o.k,o.z],null,null),(l()(),o.pb(8,0,null,0,3,"ion-title",[["text-uppercase",""]],null,null,null,k.ub,k.J)),o.ob(9,49152,null,0,i.Ab,[o.h,o.k,o.z],null,null),o.ob(10,16384,null,0,i.d,[o.k],null,null),(l()(),o.pb(11,0,null,0,0,"img",[["alt",""],["src","../assets/imgs/alebaaTitle.png"]],null,null,null,null,null)),(l()(),o.pb(12,0,null,null,7,"ion-content",[],null,null,null,k.W,k.l)),o.ob(13,49152,null,0,i.u,[o.h,o.k,o.z],null,null),(l()(),o.pb(14,0,null,0,5,"ion-grid",[],null,null,null,k.Y,k.n)),o.ob(15,49152,null,0,i.A,[o.h,o.k,o.z],null,null),(l()(),o.gb(16777216,null,0,1,null,h)),o.ob(17,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null),(l()(),o.gb(16777216,null,0,1,null,f)),o.ob(19,16384,null,0,p.k,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,17,0,u.posts.length),l(n,19,0,!u.posts.length)},null)}function x(l){return o.Ib(0,[(l()(),o.pb(0,0,null,null,2,"page-bookmark",[],null,null,null,d,g)),o.Db(512,null,e.a,e.a,[r.a]),o.ob(2,49152,null,0,c,[i.Hb,e.a],null,null)],null,null)}var O=o.lb("page-bookmark",c,x,{},{},[]),z=u("gIcY"),C=u("iWjc"),M=u("ZYCi");u.d(n,"BookmarkPageModuleNgFactory",function(){return P});var P=o.mb(t,[],function(l){return o.wb([o.xb(512,o.j,o.bb,[[8,[b.a,O]],[3,o.j],o.x]),o.xb(4608,p.m,p.l,[o.u,[2,p.t]]),o.xb(4608,z.g,z.g,[]),o.xb(4608,i.a,i.a,[o.z,o.g]),o.xb(4608,i.Gb,i.Gb,[i.a,o.j,o.q]),o.xb(4608,i.Jb,i.Jb,[i.a,o.j,o.q]),o.xb(1073742336,p.b,p.b,[]),o.xb(1073742336,z.f,z.f,[]),o.xb(1073742336,z.a,z.a,[]),o.xb(1073742336,i.Eb,i.Eb,[]),o.xb(1073742336,C.a,C.a,[]),o.xb(1073742336,M.n,M.n,[[2,M.t],[2,M.m]]),o.xb(1073742336,t,t,[]),o.xb(1024,M.k,function(){return[[{path:"",component:c}]]},[])])})}}]);