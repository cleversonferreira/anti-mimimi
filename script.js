var blacklist = [
	'bolsonaro',
	'haddad',
	'ciro',
	'marina',
	'pt',
	'psdb',
	'psol',
	'sulistas',
	'politica',
	'fascista',
	'fascista',
	'Lula',
	'Gleisi',
	'petista',
	'manifestantes',
	'#elenao',
	'bancada',
	'#elenunca',
	'#haddahsim',
	'amoedo',
	'direita',
	'esquerda',
	'petralha',
	'13',
	'17',
];

function checkElements(element, index, array) {
	blacklist.forEach(function(element2, index2, array2){
		let word = element.textContent.toLowerCase();
		let post = element.closest('._5jmm');
		if(word.indexOf(element2) >= 0){
			post.remove();
		}
	});
}

setInterval(function(){ 
	let filds = document.querySelectorAll('[data-ad-preview]');
	filds.forEach(checkElements);
}, 1000);