var blacklist = ['bolsonaro','bozonaro','haddad','bolsominion','bolsominions','ciro','amoedo','marina','lula','dilma','gleisi','pt','psdb','psol','mbl','sulistas','nordestinos','politica','fascistas','fascista','fascismo','militarismo','comunistas','socialista','socialismo','petista','manifestantes','#elenao','#elenão','#elejamais','#lulalivre','bancada','#elenunca','#haddahsim','direita','esquerda','petralha','cuba','13','17', 'bbb'];

if (window.location.hostname === 'www.facebook.com'){
	setInterval(function(){
		document.querySelectorAll('[data-ad-preview]').forEach(function(post){
			blacklist.forEach(function(word){
                		if(post.textContent.toLowerCase().indexOf(word) >= 0){
				    post.style.border = "5px solid red"					
				    post.closest('.du4w35lb').remove();
				}				
			});
		});
	}, 1000);
}
