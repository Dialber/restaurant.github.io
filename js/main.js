/* En esta función lo que hago es escuchar el evento click en los parrafos de las card,
	porque no estoy mostrando todo el texto,si el user da click lo muestro todo. 
*/
function ShowText(){
	var parraf=document.getElementsByClassName("card__p");
	for (let index = 0; index < parraf.length; index++) {
		parraf[index].addEventListener("click",()=>{
			if(parraf[index].classList.contains("ellipsis")){
				parraf[index].classList.toggle("ellipsis");
				parraf[index].nextElementSibling.style.display="inline-block";
				return;
			}			
			parraf[index].classList.toggle("ellipsis");
			parraf[index].nextElementSibling.style.display="none";
		})
		
	}
}
function Exit(){
	return;
}


/*funcion para cerrar los cards al dar click en el icono de cerrar*/
var list_boton_close=document.getElementsByClassName("card__close");
for (let index = 0; index < list_boton_close.length; index++) {
	list_boton_close[index].addEventListener("click",()=>{				
		list_boton_close[index].previousElementSibling.classList.toggle("ellipsis");//añado la clase ellipsis para ocultar el texto
		list_boton_close[index].style.display="none";
		
	})
			
}
/*funcion para cerrar los cards al dar click en el icono de cerrar*/


var clase=".card__parraf";

/*Mostrar y ocultar texto de los menu grandes,cambio el texto del botón*/
function HowTextMenu(){
	var listinput=document.getElementsByClassName("food__input");
	for (let index = 0; index < listinput.length; index++) {
		listinput[index].addEventListener("click",()=>{
			listinput[index].previousElementSibling.classList.toggle("ellipsis--2");    
			if(listinput[index].textContent=="Hide text"){
				listinput[index].textContent="Read More";
				return;
			}
			listinput[index].textContent="Hide text";
			return
		});		
	}
}
/*Mostrar y ocultar texto de las cards */


/*Mostrar el menu cuando doy click en el icono de amburgueza*/
var idbarsMenu=document.getElementById("id-barsMenu");
idbarsMenu.addEventListener("click",()=>{
	idbarsMenu.setAttribute("aria-expanded","true");
	document.getElementById("id-menuNav").classList.toggle("showMenu");		
});
/*End Mostrar el menu cuando doy click en el icono de amburgueza*/

/*Cerrar menu al hacer click en el icono close*/
var idcloseMenu=document.getElementById("id-close-menu");
idcloseMenu.addEventListener("click",()=>{
	idbarsMenu.setAttribute("aria-expanded","false");
	document.getElementById("id-menuNav").classList.toggle("showMenu");
});
/*End Cerrar menu al hacer click en el icono close*/


var aMenuItemes=document.getElementsByClassName("menu__a");
for (let index = 0; index < aMenuItemes.length; index++) {
	aMenuItemes[index].addEventListener("click",()=>{
		let element=document.getElementById("id-barsMenu");
		let elementStyle=window.getComputedStyle(element);		
		if(elementStyle.getPropertyValue("display")=="none"){
			return;
		}
		document.getElementById("id-menuNav").classList.toggle("showMenu");
	})	
}


/*En este método escucho el click del button de los menu popular,si estan ocultos los muestro,si estan visibles los oculto*/
const buttonPopularMenu=document.getElementById("id-buttonPopularMenu");
buttonPopularMenu.addEventListener("click",()=>{
	const cardsContainer2=document.getElementById("id-cardsContainer2");//obtengo los cards2 del menu
	if(buttonPopularMenu.textContent=="SHOW MORE"){		
		document.getElementById("id-firstHideCard").focus();
		buttonPopularMenu.textContent="HIDE THESE";
		cardsContainer2.style.display="flex";
		return;
	}    
	buttonPopularMenu.textContent="SHOW MORE";
	cardsContainer2.style.display="none";	
	return;
})
/*En este método escucho el click del button de los menu,si estan ocultos los muestro,si estan visibles los oculto*/

function Accsesible(){
	var screenWidth=window.innerWidth;
	switch (screenWidth) {		
		case screenWidth >= 992:
			idbarsMenu.setAttribute("aria-expanded","true");
			break;		
		default:
			idbarsMenu.setAttribute("aria-expanded","false");	
			break;
	}
}
function ShowScroollTop() {
	window.addEventListener('scroll',()=>{
		var arrow=document.getElementById('id-food__h2');/*selecciono el h2 ,que es mas o menos una distancia suficiente para que aparesca la flecha para desplasarte hacia arriva*/
		let position=arrow.getBoundingClientRect().top;/*guardo la posicion que tiene respecto al tope del documento*/
		let up=document.getElementById('id-scroollTop');
		if((position < window.innerHeight/2) && (up.classList.contains('animate')==false)){/*cuando el elemento este a la mitad del tamaño de la pantalla,lo muestro añadiendo la clase animate*/
			up.classList.add('animate');	
			return;
		}
		if((position < window.innerHeight/2) && (up.classList.contains('animate')==true)){/*Si ya tiene la clase animate no hago nada*/
			return;
		}
		if((position > window.innerHeight/2) && (up.classList.contains('animate')==true)){/*Si la posición es mayor, le elimino la clase animate */
			up.classList.remove('animate');
			return;
		}
		else{
			return;
		}
	})
}
function SaveLocalStorage(){
	document.getElementById('id-submit').addEventListener('click',()=>{
		localStorage.setItem('name',document.getElementById('id-nombre').value);
		localStorage.setItem('email',document.getElementById('id-email').value);
		localStorage.setItem('number',document.getElementById('id-number').value);
		localStorage.setItem('sms',document.getElementById('id-sms').value);
		
	})
}



window.addEventListener('resize',Accsesible,false);//escucho si hubo cambio de tamaño de la pantalla para poner el expanded del menu en "true" para pantallas grandes.

window.addEventListener('load',ShowScroollTop,false);
window.addEventListener('load',SaveLocalStorage,false);
window.addEventListener('load',HowTextMenu,false);

window.addEventListener('load',Accsesible,false);
window.addEventListener('load',HowTextMenu,false);
window.addEventListener('load',ShowText,false);
