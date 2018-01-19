// seleccionamos elementos que tengan container
var elementos = document.querySelectorAll(".containerMe");
var modal = document.getElementById("modal");
var close_modal = document.getElementById("close_modal");
var img_modal = document.getElementById("img_modal");
// si se hace click sobre cualquier elemento 
for (let i = 0; i < elementos.length ; i++){
	elementos[i].addEventListener('click',function(e){modalAccion ( e, this,modal)});
}

close_modal.addEventListener('click',function(){
	modal.style.display = 'none';
})

window.addEventListener('click',function(e){
	if (e.target == modal){
		modal.style.display = 'none';
	}
})

function modalAccion(e,este,modal){
	console.log(este.firstElementChild);
	modal.style.display = "block";
	img_modal.src = este.firstElementChild.src;

}
	// con el click hace traget sobre el elemento
	// el elemento anterio que es una img metemos en una variable el src
	// este src se lo damos al modal
	