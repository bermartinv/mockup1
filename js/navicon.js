const boton_navicon = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu-wrap");
const close = document.getElementById("close");
boton_navicon.addEventListener("click",function(){
	if (nav.classList.contains("menu-wrap-hidden")){
		nav.classList.remove("menu-wrap-hidden");
	}else{
		nav.classList.add("menu-wrap-hidden");
	};});


/* EVENTOS */
close.addEventListener("click",function (){
	nav.classList.remove("menu-wrap-hidden");
});
