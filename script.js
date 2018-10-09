var blacklist = ['bolsonaro','haddad','ciro','marina','pt','psdb','psol','sulistas','politica','fascista','fascista','fascismo','militarismo','lula','dilma','gleisi','petista','manifestantes','#elenao','bancada','#elenunca','#haddahsim','amoedo','direita','esquerda','petralha','13','17'];

function checkElements(post) {
	blacklist.forEach(function(word){
		if(post.textContent.toLowerCase().indexOf(word) >= 0){
			post.closest('._5jmm').remove();
		}
	});
}

if (window.location.hostname === 'www.facebook.com'){
	setInterval(function(){
		document.querySelectorAll('[data-ad-preview]').forEach(checkElements);
	}, 1000);
}