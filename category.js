function categorie(id) {
	if (localStorage.getItem('hide_'+id) == undefined) {
		localStorage.setItem('hide_'+id, 'true'); 
	} else {
		localStorage.setItem('hide_'+id, eval('!'+localStorage.getItem('hide_'+id))); 
	}

	if (eval(localStorage.getItem('hide_'+id)) == true) { $('#'+id).hide(300); $('#category_'+id).text('+ '+id); } else { $('#'+id).show(300); $('#category_'+id).text('- '+id);}
}