webpackJsonp([0],{dXKk:function(s,e,t){"use strict";var n={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"page"},[t("div",{staticClass:"flex-center"},[t("div",{staticClass:"input_content"},[t("el-input",{attrs:{placeholder:"Enter your username"},model:{value:s.userInfo.username,callback:function(e){s.$set(s.userInfo,"username",e)},expression:"userInfo.username"}})],1)]),s._v(" "),t("div",{staticClass:"flex-center"},[t("div",{staticClass:"input_content"},[t("el-input",{attrs:{placeholder:"Enter your password"},model:{value:s.userInfo.password,callback:function(e){s.$set(s.userInfo,"password",e)},expression:"userInfo.password"}})],1)]),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.isSign,expression:"isSign"}],staticClass:"flex-center"},[t("div",{staticClass:"input_content"},[t("el-input",{attrs:{placeholder:"Enter your password again"},model:{value:s.userInfo.password2,callback:function(e){s.$set(s.userInfo,"password2",e)},expression:"userInfo.password2"}})],1)])])},staticRenderFns:[]};var r=t("VU/8")({name:"",components:{},props:["isSign"],data:function(){return{userInfo:{username:"",password:""}}},methods:{getUserInfo:function(){return this.userInfo}}},n,!1,function(s){t("sRaP")},"data-v-fb1198e0",null);e.a=r.exports},nK5D:function(s,e){},o9Mw:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"",components:{userLogin:t("dXKk").a},data:function(){return{userInfo:{}}},methods:{submit:function(){return this.userInfo=this.$refs.userLogin.getUserInfo(),console.log(this.userInfo),""===this.userInfo.username||""===this.userInfo.password?(this.$message({message:"账号密码不能为空",type:"warning"}),!1):this.userInfo.password!==this.userInfo.password2?(this.$message({message:"密码输入不一致",type:"warning"}),!1):(this.$message({message:"注册成功",type:"success"}),void this.$router.push("/login"))}}},r={render:function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"page"},[e("div",[e("h2",[this._v("Sign Up")]),this._v(" "),e("userLogin",{ref:"userLogin",attrs:{isSign:!0}}),this._v(" "),e("el-button",{attrs:{type:"success"},on:{click:this.submit}},[this._v("Access")])],1)])},staticRenderFns:[]};var a=t("VU/8")(n,r,!1,function(s){t("nK5D")},"data-v-e56f122c",null);e.default=a.exports},sRaP:function(s,e){}});
//# sourceMappingURL=0.a1b5404305f44b7d629e.js.map