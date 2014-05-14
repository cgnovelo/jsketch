$(document).ready(function(){
	var maxItems = 16;
	var gridWidth = 960;
	var btnClicked = 1;
	
	
	$('#button1').click(function(){
		btnClicked = 1;
		insertDivs();
	});
	
	$('#button2').click(function(){
		btnClicked = 2;
		insertDivs();
	});
	
	$('#button3').click(function(){
		btnClicked = 3;
		insertDivs();
	});
	
	$('#button4').click(function(){
		btnClicked = 4;
		insertDivs();
	});
	
	$('#numItems').change(function(){
		maxItems = $(this).val();
		insertDivs();
	});
	
	function insertDivs(){
		var itemWidth = (gridWidth / maxItems)-2;
		var red, green, blue;

		$('#gridwrap').html("");
		for (i=1;i<=maxItems;i++){
			for (j=1;j<=maxItems;j++){
				$('#gridwrap').append("<div class='gridItem'>&nbsp;</div>");
			}	
		}
		
		$('.gridItem').width(itemWidth);
		$('.gridItem').height(itemWidth);
		
		$('.gridItem').mouseenter(function(){
			bg_color = new $.Color(this,"background-color");
			switch(btnClicked){
				case 1: $(this).css("background-color", "white");
					    break;
			    case 2: red = (bg_color.red()<240?bg_color.red() + 16:0);
			    		green = (bg_color.green()<240?bg_color.green() + 16:0);
			    		blue = (bg_color.blue()<240?bg_color.blue() + 16:0);
			    		var newColor = new $.Color( red, green, blue ); 
			    		$(this).animate({ backgroundColor: newColor }, 0);
			    		break;
			    case 3: red = Math.floor(Math.random()*256);
			    		green = Math.floor(Math.random()*256);
			    		blue = Math.floor(Math.random()*256);
			    		var newColor = new $.Color( red, green, blue ); 
			    		$(this).animate({ backgroundColor: newColor }, 0);
			    	   	break;
			    case 4: var newColor = new $.Color( 0, 0, 0 ); 
			    		$(this).css("background-color", "white");
			    		$(this).animate({ backgroundColor: newColor }, 1000);
			    		break;
				default: $(this).css("background-color", "white");
			}
		});
	}
});
