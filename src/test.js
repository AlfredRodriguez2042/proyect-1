
/**
*	1) Añadir un evento a la cabezera de los filtros que al hacer click en ella se desplieguen los filtros si están ocultos, y los oculte si no lo están.
*
*		The filters column must collapse or expand depending on the case, the action for doing this is a mouse click on the filter header.
*
*/

/**
*	2) En el listado de productos, agregue la clase 'oferta' a todos los productos impares
*
*		In the products list, add class "offer" to the odd products (eg. position 1, 3, 5, etc)
*
*/

/**
*	3) Teniendo la variable 'products' agregue al listado los productos cuando el document esté listo
*		
*		When the document is ready, loop through the 'products' Array and add each product to the product list.
*
*/
var products = [
	{ title: 'Botín', price: 800.44, category: 'Botines', image: 'http://placehold.it/225x225', brand: 'nike' },
	{ title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'http://placehold.it/225x225', brand: 'adidas' },
	{ title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'http://placehold.it/225x225', brand: 'puma' },
	{ title: 'Short', price: 320.44, category: 'Vestimenta', image: 'http://placehold.it/225x225', brand: 'nike' },
	{ title: 'Pantalón', price: 360.44, category: 'Natación', image: 'http://placehold.it/225x225', brand: 'nike' }	
];

/**
*	4) En el hover de la imagen del producto que cambié el color del precio a verde, y que aumente el tamaño del título en 2 píxeles.
*		Los valores deben volver a su estado original al quitar el mouse de la imagen.
*
*		Upon hovering the product image, change the price color to green and increase the title size by 2 pixels.
*		The values must return to the original state on mouseleave.
*
*/

/**
*  5) Al hacer click sobre las marcas (debajo del slider principal) ejecutar una llamada AJAX a la siguiente URL: http://remote.fizzmod.com/ajax.php
*		Si la llamada es satisfactoria ocultar las marcas, y mostrar el resultado devuelto dónde estaban las marcas.
*
*  	On clicking the image that's below the main slider, make an AJAX request to the URL http://remote.fizzmod.com/ajax.php.
*		If the request is successful hide the brands and show the result instead.
*
*/