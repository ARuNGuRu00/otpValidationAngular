import './polyfills.server.mjs';
import{a,b as n,c as e,d as o,e as t,f as p,k as l,n as d,p as g,q as s,t as m,z as u}from"./chunk-JE643SZZ.mjs";var i=class c{title="proposal";static \u0275fac=function(r){return new(r||c)};static \u0275cmp=a({type:c,selectors:[["app-root"]],standalone:!0,features:[p],decls:63,vars:0,consts:[["id","dummy"],[1,"head"],[1,"heading"],["id","check-in","onclick","checkFunc()"],["id","join","onclick","joinFunc()"],["id","log"],["id","option-frame",1,"slide-animation"],["id","join-but-con"],[2,"font-size","22px","width","200px","height","150px"],[2,"display","block","font-size","17px","padding-top","20px","padding-bottom","10px"],["onclick","resFlip(),setTimeout(fun1,750),setTimeout(fun2,250)","id","join-but"],["id","check-but-con"],["onclick","resFlip(),setTimeout(fun1,750),setTimeout(fun2,250)","id","check-but"],["id","con-frame",1,"flip-animation"],["id","con-content"],["type","text","required",""],["type","password","required","",1,"pass"],["href",""],["id","con-content2"],["onsubmit","email_send(); return false;"],["id","email","name","email","type","email","required",""],["type","submit"],["id","validation"],["id","con-content3"],["onsubmit","verify();return false"],["type","text","id","otp","required",""]],template:function(r,_){r&1&&(n(0,"main")(1,"div",0),o(2,"div",1),n(3,"div",2)(4,"span"),t(5,"Proposal"),e(),n(6,"div")(7,"button",3),t(8,"Check In"),e(),t(9,"\xA0"),n(10,"button",4),t(11,"Join"),e()()()(),n(12,"div",5)(13,"div",2)(14,"span"),t(15,"Proposal"),e()(),n(16,"div",6)(17,"div",7)(18,"div",8),t(19," Make some proposals to show your professionality. "),n(20,"span",9),t(21,"Get a new account:"),e(),n(22,"button",10),t(23,"JOIN >"),e()()(),n(24,"div",11)(25,"div",8),t(26," The journey with your colleagues. "),n(27,"span",9),t(28,"Have an account already?"),e(),n(29,"button",12),t(30,"Check In >"),e()()()(),n(31,"div",13)(32,"div",14)(33,"form")(34,"label"),t(35,"Username:"),e(),o(36,"input",15),n(37,"label"),t(38,"Password:"),e(),o(39,"input",16),n(40,"a",17),t(41,"Forgot password?"),e(),n(42,"button"),t(43,"Check In >"),e()()(),n(44,"div",18)(45,"form",19)(46,"label"),t(47,"Email Id:"),e(),o(48,"input",20),n(49,"button",21),t(50,"JOIN >"),e()(),n(51,"p",22),t(52,"check you internet connect!!!"),e()(),n(53,"div",23)(54,"h3"),t(55,"OTP verification"),e(),n(56,"p"),t(57,"check you mail!!"),e(),n(58,"form",24),o(59,"input",25),n(60,"button",21),t(61,"verify"),e()()()()(),o(62,"main"),e())},styles:[`body[_ngcontent-%COMP%]{
    background-color: rgb(15, 13, 30);
    color:rgb(230, 228, 253);
    margin:0;
   
}
#dummy[_ngcontent-%COMP%]{
    

    background-color: rgb(0, 0, 0);
    color:rgb(230, 228, 253);
    height: 100vh;
    width: 100%;
    z-index: 0;
}

.head[_ngcontent-%COMP%]{
    position: relative;
    height: 80px;
    display: flex;
    background-color:rgb(14, 11, 20);
}

.heading[_ngcontent-%COMP%]{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:20px;
    padding-right:30px;
    height:80px;
    top:0;left:0;right:0;
    position: absolute;
    font-size:30px;
    font-family: "Rock Salt";
}

.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{
    transition: all 0.3s;
}

.heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{
    transform:scale(1.2);
}


#check-in[_ngcontent-%COMP%], #join[_ngcontent-%COMP%]{
    border:none;
    padding:10px 15px;
    font-size: 15px;
    font-weight: bold;
}

#check-in[_ngcontent-%COMP%]{
    background-color: rgb(58, 48, 78);
    color:rgb(255, 255, 255);
    border-radius: 15px 0 0 15px;
    transition: all 0.3s;
}
#check-in[_ngcontent-%COMP%]:hover{
    background-color:  rgb(88, 79, 107);
    transform: scale(1.1);
}
#join[_ngcontent-%COMP%]{
    background-color: rgb(58, 48, 78);
    color:rgb(230, 228, 253);
    border-radius: 0 15px 15px 0;
}

#join[_ngcontent-%COMP%]:hover{
    background-color:  rgb(88, 79, 107);
    transform: scale(1.1);
}

#log[_ngcontent-%COMP%]{
    background-color:rgb(10, 10, 10);
    color:rgb(230, 228, 253);
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display:none;
}

#con-frame[_ngcontent-%COMP%], #option-frame[_ngcontent-%COMP%]{
    width:300px;
    height:350px;
    border:solid;
    display: flex;
    justify-content: center;
    align-items: center;
}

#option-frame[_ngcontent-%COMP%]{
    background-color:  rgb(61, 42, 97);
    color:rgb(230, 228, 253);
    border-width: 2 0 2 2;
    border-radius: 20px 0 0 20px;
    box-shadow: -5px 0 20px rgb(61, 42, 97);
    margin-right:25px;
}

.slide-animation[_ngcontent-%COMP%]{
    animation:_ngcontent-%COMP%_sliding 0.5s ease-in-out;
    animation-delay: 0.5s;
}

#check-but-con[_ngcontent-%COMP%]{
    display:none;
}

#join-but[_ngcontent-%COMP%]{
    display:block;
}

#join-but-con[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #check-but-con[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{
    background-color:white;
    display: flex;
    padding-top:8px;
    padding-bottom: 8px;
    padding-left:10px;
    padding-right:10px;
    border:none;
    color: rgb(95, 67, 67);
    border-radius: 5px 0 0 5px;
    box-shadow: 0 0 5px white;
    transition: box-shadow 0.3s;
}

#join-but-con[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #check-but-con[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{
    box-shadow: 0 0 10px white;
}

#join-but-con[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, #check-but-con[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{
    background-color: red;
    color:white;
}

.flip-animation[_ngcontent-%COMP%]{
    animation: _ngcontent-%COMP%_flips 0.5s ease-in-out;
}

#con-frame[_ngcontent-%COMP%]{
    background-color:rgb(27, 27, 27);
    color:rgb(248, 248, 248);
    border-width:2 2 2 0;
    border-radius: 0 20px 20px 0;
    transform: scale(1.2);
    box-shadow: 5px 0 20px rgb(89, 76, 187);
    margin-left:25px;
}

#con-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #con-content2[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], #con-content3[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{
    display:block;
    background-color: rgb(54, 53, 63);
    border:none;
    padding:5px 10px;
    border-radius: 2px;
    margin:10px;
    color: white;
    font-size: 13px;
}

#con-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{
    border:none;
}

input[_ngcontent-%COMP%]::-ms-reveal {
    display: none;
  }

a[_ngcontent-%COMP%]{
    display:block;
    padding:0;
    color:rgb(126, 126, 252);
}

a[_ngcontent-%COMP%]:hover{
    color:rgb(48, 5, 5);
}
a[_ngcontent-%COMP%]:active{
    color: white;
}


#con-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #con-content2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #con-content3[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{
    margin-top:15px;
    background-color:rgb(89, 71, 227);
    border:none;
    padding:10px 10px;
    color: white;
    border-radius:5px;
    margin-left: 10px;
    box-shadow: 0 0 2px rgb(89, 71, 227);
    transition: box-shadow .3s;
}

#con-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, #con-content2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{
    box-shadow: 0 0 5px rgb(89, 71, 227);
}

#con-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, #con-content2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{
    background-color: white;
    color: rgb(89, 71, 227);
}

#con-content2[_ngcontent-%COMP%], #con-content3[_ngcontent-%COMP%], #validation[_ngcontent-%COMP%]{
    display:none;
}

@keyframes _ngcontent-%COMP%_sliding{
    0%{
        transform:translate(0);
    }
    50%{
        transform: translate(110%);
    }
    100%{
        transform:translate(0);
    }
}

@keyframes _ngcontent-%COMP%_flips{
    0%{
        transform: scale(1,1);
    }
    50%{
        transform:scale(0,1);
    }
    100%{
        transform:scale(1,1);
    }
}`]})};var b=[];var f={providers:[l({eventCoalescing:!0}),u(b),s()]};var h={providers:[m()]},x=d(f,h);var P=()=>g(i,x),J=P;export{J as a};
