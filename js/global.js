function roadmap(menu_id){
	if(menu_id=='achieved'){
		$("#achieved").fadeIn(1000);
		$("#current").hide();
		$("#near_term").hide();
		$("#long_term").hide();
	} 
	if(menu_id=='current'){
		$("#achieved").hide();
		$("#current").fadeIn(1000);
		$("#near_term").hide();
		$("#long_term").hide();
	}
	if(menu_id=='near_term'){
		$("#achieved").hide();
		$("#current").hide();
		$("#near_term").fadeIn(1000);
		$("#long_term").hide();
	}
	if(menu_id=='long_term'){
		$("#achieved").hide();
		$("#current").hide();
		$("#near_term").hide();
		$("#long_term").fadeIn(1000);
	}
}