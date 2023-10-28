const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

//funciones click

btnIncrement.addEventListener('click', () => {
    valueByDefault += 1
    inputQuantity.value = valueByDefault
});

btnDecrement.addEventListener('click', () => {
    if (valueByDefault === 1){
        return
    }
    valueByDefault -= 1
    inputQuantity.value = valueByDefault
});

// toggle
//contantes toggle titles
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-Additional-Information ');
const toggleReviews = document.querySelector('.title-reviews');

//constantes Contenido texto 
const contentDescription = document.querySelector(
    '.text-description'
);
const contentAdditionalInformation = document.querySelector(
    '.text-Additional-Information '
);
const contentReviews = document.querySelector(
    '.text-reviews'
);

//funciones toggle
toggleDescription.addEventListener('click', () => {
    contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
    contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () => {
    contentReviews.classList.toggle('hidden');
});

function abrirNuevaVentana() {
	//alert("Indes.js");
    var vnombre = document.getElementById("nombres_apellidos").value;				
	var vcorreo = document.getElementById("correo").value;
	var vcelular = document.getElementById("celular").value;
	var vservicio = document.getElementById("servicio").value;
		
	var url = "recibe.html?nombres_apellidos=" + encodeURIComponent(vnombre) + "&correo=" + encodeURIComponent(vcorreo) + "&celular=" + encodeURIComponent(vcelular) + "&servicio=" + encodeURIComponent(vservicio);
	//alert(url);
	// Abre una nueva ventana con recibe.html y acumula los datos
	window.open(url, "NuevaVentana", "width=750,height=600,top=150,left=187");

	// Limpiar los campos después de enviar los datos
	document.getElementById("nombres_apellidos").value = "";
	document.getElementById("correo").value = "";
	document.getElementById("celular").value = "";
	document.getElementById("servicio").value = "";
};

