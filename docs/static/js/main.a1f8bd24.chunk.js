(this["webpackJsonpbasic-authentication"]=this["webpackJsonpbasic-authentication"]||[]).push([[0],{200:function(e,t,n){},274:function(e,t){},302:function(e,t,n){var c={"./amplify-amazon-button_5.entry.js":[334,16],"./amplify-auth-container.entry.js":[335,17],"./amplify-auth-fields_9.entry.js":[336,18],"./amplify-authenticator.entry.js":[337,5],"./amplify-button_3.entry.js":[338,19],"./amplify-chatbot.entry.js":[339,4],"./amplify-checkbox.entry.js":[340,20],"./amplify-confirm-sign-in_7.entry.js":[341,6],"./amplify-container.entry.js":[342,21],"./amplify-federated-buttons_2.entry.js":[343,22],"./amplify-federated-sign-in.entry.js":[344,23],"./amplify-form-field_4.entry.js":[345,24],"./amplify-greetings.entry.js":[346,25],"./amplify-icon-button.entry.js":[347,26],"./amplify-icon.entry.js":[348,7],"./amplify-link.entry.js":[349,27],"./amplify-nav_2.entry.js":[350,28],"./amplify-photo-picker.entry.js":[351,29],"./amplify-picker.entry.js":[352,30],"./amplify-radio-button_3.entry.js":[353,8],"./amplify-s3-album.entry.js":[354,9],"./amplify-s3-image-picker.entry.js":[355,10],"./amplify-s3-image.entry.js":[356,11],"./amplify-s3-text-picker.entry.js":[357,12],"./amplify-s3-text.entry.js":[358,13],"./amplify-select-mfa-type.entry.js":[359,31],"./amplify-sign-in-button.entry.js":[360,14],"./amplify-tooltip.entry.js":[361,32]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=302,e.exports=r},331:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(32),i=n.n(r),s=(n(200),n(5)),a=n(57),o=n(10),j=n(393),l=n(397),u=n(398),f=n(399),h=n(400),b=n(6),p=function(e){var t=e.current;return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{selectedKeys:[t],mode:"horizontal",children:[Object(b.jsx)(j.a.Item,{children:Object(b.jsxs)(a.b,{to:"/",children:[Object(b.jsx)(l.a,{})," Home"]})},"home"),Object(b.jsx)(j.a.Item,{children:Object(b.jsxs)(a.b,{to:"/profile",children:[Object(b.jsx)(u.a,{}),"Profile"]})},"Public"),Object(b.jsx)(j.a.Item,{children:Object(b.jsxs)(a.b,{to:"/protected",children:[Object(b.jsx)(f.a,{}),"Protected"]})},"protected"),Object(b.jsx)(j.a.Item,{children:Object(b.jsxs)(a.b,{to:"/contact",children:[Object(b.jsx)(h.a,{}),"Contact us"]})},"contact")]})})},d={container:{margin:"0 auto",padding:"50px 100px"}},m=function(e){var t=e.children;return Object(b.jsx)("div",{style:d.container,children:t})},y=function(){return Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{children:"Welcome to project 5!"}),Object(b.jsx)("h2",{children:"Basic Authentication!"}),Object(b.jsx)("p",{children:"Sign in on the profile page and then the protected page will show you your deets!"})]})},O=n(71),x=n.n(O),_=n(4),g=n(110),w=n(78),v=n(395),k=n(396),E=Object(k.a)((function(){Object(c.useEffect)((function(){i()}),[]);var e=Object(c.useState)({}),t=Object(s.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(g.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.currentUserPoolUser();case 3:t=e.sent,n=Object(_.a)({username:t.username},t.attributes),r(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.err("error: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{children:"Profile"}),Object(b.jsxs)("h2",{children:["Username: ",n.username]}),Object(b.jsxs)("h3",{children:["Email: ",n.email]}),Object(b.jsxs)("h4",{children:["Phone: ",n.phone_number]}),Object(b.jsx)(v.d,{})]})})),P=function(){var e=Object(o.f)();return Object(c.useEffect)((function(){w.a.currentAuthenticatedUser().catch((function(){e("/profile")}))}),[]),Object(b.jsx)(m,{children:Object(b.jsx)("h1",{children:"if you made it here, that means you signed in!"})})},I=function(){return Object(b.jsx)(m,{children:Object(b.jsx)("h1",{children:"call us at 555-555-5555"})})},L=function(){var e=Object(c.useState)("home"),t=Object(s.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){return i(),window.addEventListener("hashchange",i),function(){return window.removeEventListener("hashchange",i)}}),[]);var i=function(){var e=window.location.href.split("/"),t=e[e.length-1];r(t||"home")};return Object(b.jsxs)(a.a,{children:[Object(b.jsx)(p,{current:n}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",element:Object(b.jsx)(y,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/protected",element:Object(b.jsx)(P,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/profile",element:Object(b.jsx)(E,{})}),Object(b.jsx)(o.a,{exact:!0,path:"/contact",element:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{element:Object(b.jsx)(y,{})})]})]})},A=(n(303),{aws_project_region:"us-east-2",aws_cognito_identity_pool_id:"us-east-2:f1f400ba-fdd5-4a4f-a41d-10d7626f1e2c",aws_cognito_region:"us-east-2",aws_user_pools_id:"us-east-2_AmbN6WV7x",aws_user_pools_web_client_id:"1637o4ju8b3vhhnf96ffr1vt93",oauth:{},aws_cognito_login_mechanisms:["EMAIL"],aws_cognito_signup_attributes:["EMAIL"],aws_cognito_mfa_configuration:"OFF",aws_cognito_mfa_types:["SMS"],aws_cognito_password_protection_settings:{passwordPolicyMinLength:8,passwordPolicyCharacters:[]},aws_cognito_verification_mechanisms:["EMAIL"]});n(96).default.configure(A),i.a.render(Object(b.jsx)(L,{}),document.getElementById("root"))}},[[331,2,3]]]);
//# sourceMappingURL=main.a1f8bd24.chunk.js.map