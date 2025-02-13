"use strict";(self.webpackChunkmeddler_genz_ui=self.webpackChunkmeddler_genz_ui||[]).push([[596],{5596:(I,p,o)=>{o.r(p),o.d(p,{WorkspaceSettingsModule:()=>C});var d=o(1368),u=o(6588),m=o(4704),f=o(9212),e=o(6504),t=o(4496),c=o(2624),n=o(64),a=o(2276);let h=(()=>{class i{updateWorkspace(){this.loading=!0,this.apiService.updateSelfWorkspace(this.workspace.value).subscribe(r=>{this.workspace.patchValue(r),this.loading=!1})}constructor(s){this.apiService=s,this.loading=!0,this.workspace=new e.WC({title:new e.Ku("",[e.AQ.required]),description:new e.Ku("",[e.AQ.required]),email:new e.WC({enabled:new e.Ku(!1,[e.AQ.required]),smtp_host:new e.Ku("smtp.gmail.com",[e.AQ.required]),smtp_port:new e.Ku(3123,[e.AQ.required]),smtp_username:new e.Ku("username",[e.AQ.required]),smtp_password:new e.Ku("password",[e.AQ.required]),smtp_sender_email:new e.Ku("smtp_sender@gmail.com",[e.AQ.required])}),cortex_license:new e.Ku("cortex_license"),cortex_license_publickey:new e.Ku("cortex_license_publickey"),details:new e.WC({url:new e.Ku,alias:new e.Ku})}),this.selfWorkspaceDetails=this.apiService.getWorkspaceSelf().pipe((0,m.k)(r=>r?.data)).pipe((0,f.y)(r=>{this.workspace.patchValue(r),this.loading=!1}))}ngOnInit(){this.selfWorkspaceDetails.subscribe()}static{this.\u0275fac=function(r){return new(r||i)(t.GI1(c.Ww))}}static{this.\u0275cmp=t.In1({type:i,selectors:[["app-bootstrap"]],decls:62,vars:2,consts:[[3,"nbSpinner"],[1,"h6","text-primary"],["fxLayout","column",3,"formGroup"],["fullWidth",""],["formControlName","title","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace name",2,"font-weight","200"],["status","primary","nbPrefix","","nbButton","","ghost",""],["icon","arrow-ios-back-outline","pack","eva"],["formControlName","description","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace description",2,"font-weight","200"],["formGroupName","email"],["fxLayoutAlign","end"],["formControlName","enabled"],["fxLayout","row"],["fxFlex","","fullWidth",""],["formControlName","smtp_host","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace description",2,"font-weight","200"],["formControlName","smtp_port","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace description",2,"font-weight","200"],["formControlName","smtp_username","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace description",2,"font-weight","200"],["formControlName","smtp_password","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace description",2,"font-weight","200"],["formControlName","smtp_sender_email","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Workspace description",2,"font-weight","200"],["formControlName","cortex_license","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Cortex License",2,"font-weight","200"],["formGroupName","details"],["formControlName","url","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","URL",2,"font-weight","200"],["formControlName","alias","fullWidth","","fxFlex","","ghost","","nbInput","","type","text","placeholder","Alias",2,"font-weight","200"],["href","/workspace",1,"h6","text-primary"],["ghost","","status","primary","nbButton","",3,"click"]],template:function(r,l){1&r&&(t.I0R(0,"nb-card")(1,"nb-card-body",0)(2,"div")(3,"p",1),t.OEk(4," General "),t.C$Y()(),t.I0R(5,"div",2)(6,"nb-form-field",3),t.wR5(7,"input",4),t.I0R(8,"button",5),t.wR5(9,"nb-icon",6),t.C$Y()(),t.I0R(10,"nb-form-field",3),t.wR5(11,"input",7),t.I0R(12,"button",5),t.wR5(13,"nb-icon",6),t.C$Y()(),t.SAx(14,8),t.I0R(15,"div",9)(16,"nb-toggle",10),t.OEk(17,"Email"),t.C$Y()(),t.I0R(18,"div",11)(19,"nb-form-field",12),t.wR5(20,"input",13),t.I0R(21,"button",5),t.wR5(22,"nb-icon",6),t.C$Y()(),t.I0R(23,"nb-form-field"),t.wR5(24,"input",14),t.I0R(25,"button",5),t.wR5(26,"nb-icon",6),t.C$Y()()(),t.I0R(27,"nb-form-field",3),t.wR5(28,"input",15),t.I0R(29,"button",5),t.wR5(30,"nb-icon",6),t.C$Y()(),t.I0R(31,"nb-form-field",3),t.wR5(32,"input",16),t.I0R(33,"button",5),t.wR5(34,"nb-icon",6),t.C$Y()(),t.I0R(35,"nb-form-field",3),t.wR5(36,"input",17),t.I0R(37,"button",5),t.wR5(38,"nb-icon",6),t.C$Y()(),t.k70(),t.I0R(39,"nb-form-field",3),t.wR5(40,"input",18),t.I0R(41,"button",5),t.wR5(42,"nb-icon",6),t.C$Y()(),t.SAx(43,19),t.I0R(44,"div")(45,"p",1),t.OEk(46," Configuration "),t.C$Y()(),t.I0R(47,"div",11)(48,"nb-form-field",12),t.wR5(49,"input",20),t.I0R(50,"button",5),t.wR5(51,"nb-icon",6),t.C$Y()(),t.I0R(52,"nb-form-field"),t.wR5(53,"input",21),t.I0R(54,"button",5),t.wR5(55,"nb-icon",6),t.C$Y()()(),t.k70(),t.C$Y(),t.I0R(56,"div")(57,"a",22),t.OEk(58," Manage Users "),t.C$Y()(),t.I0R(59,"div",9)(60,"button",23),t.qCj("click",function(){return l.updateWorkspace()}),t.OEk(61," Save "),t.C$Y()()()()),2&r&&(t.yG2(),t.E7m("nbSpinner",l.loading),t.yG2(4),t.E7m("formGroup",l.workspace))},dependencies:[n.KkC,n.iwb,n.UrE,e.ot,e.ue,e.u,e.uW,e.Wo,e.Kh,n.yqL,n.eAh,n.QLb,n.GAA,n.sXj,a.sZ,a.qG,a.CA,n.sHG],styles:["button[_ngcontent-%COMP%]{text-transform:none!important;font-weight:400}div[_ngcontent-%COMP%]{margin-top:1rem}"]})}}return i})();const w=[{path:"**",component:o(4025).i,data:{center_layout:!0},children:[{path:"**",component:h,data:{back_navigation:{route:["/beta"],title:"Settings",icon:"icon"}}}]}];let g=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=t.a4G({type:i})}static{this.\u0275inj=t.s3X({imports:[u.qQ.forChild(w),u.qQ]})}}return i})();var x=o(2968),R=o(7312);let C=(()=>{class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=t.a4G({type:i})}static{this.\u0275inj=t.s3X({providers:[c.Ww],imports:[R.G,d.MD,g,n.chd,n.qWr,e.sl,e.y,n.Wwy,a.nQ,n.eYm,n.E3x,n.SUu,n.qK7,n.EBJ,n.qWr,x._]})}}return i})()}}]);