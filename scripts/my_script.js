	$(document).ready(function(){
	$(function(){
	alert('Подключена последняя версия jQuery через Google хостинг');
	});
		getDBequipment();
	$("div .info").toggle();
	$("div .info").click(function(){
	  $(this).toggle();
	  $(".button_equip").css({'background-color':'#008800'});
	});
	
	var equip = [$("#CPM1"), $("#CPM2"), $("#M1"), $("#M2"), $("#M3"), //Порядок элементов массива должен соответствовать порядку в структуре DOM!!!
			 $("#M4"), $("#M5"), $("#M6"), $("#M7"), $("#TFP1"),
			 $("#TFP2"), $("#TFP3"), $("#M41"), $("#M42"), $("#M43")
			 ];
		$(".button_equip").each(function(index){
			$(this).click(function(){
				equip[index].toggle();	 
				if(equip[index].is(':visible')){
					$(this).css({'background-color':'#ff3333'}); 
				}else{
				$(this).css({'background-color':'#008800'}); 
				}
			});
		});	
	
		
	//Перемещение div-a aim
	$('#aim').draggable();
	
	//Вычисляем координаты div-а с id='aim' и высвечиваем их
	//Выставляем элемен #aim, считываем координаты и вносим их в CSS для кнопки, которая должна располагаться на этом месте
	$("#aim").click(function(){
	alert("Top: "+aim.style.top+" "+"Left: "+aim.style.left);
	});
	
	//Заполняем данными карточки с оборудованием из базы данных
	function getDBequipment(){
		$.getJSON("service.php", function(json) {
			
			$('#CPM1').empty();
			$('#CPM2').empty();
												
			$.each(json.equipments,function() {
			var info ='<table class="lux">'+
					'<caption>Данные по ' +this['name'] + '</caption>' +
					 '<tr>'+
				       	    '<th>Узел'+'</th>' +
			  		    '<th>Параметры' +'</th>'+
<<<<<<< HEAD
			            '</tr>'+
			  	   	 '<tr>'+
					    '<td>'+this['part']+'</td>'+
			      		    '<td>'+this['part_desc']+'</td>'+
			  		    '</tr>'+
					 '<tr>'+
					    '<td>'+this['part']+'</td>'+
					    '<td>'+this['part_desc']+'</td>'+
			  		    '</tr>'+
				  '</table>';
=======
			                 '</tr>'+
			                 
			  	   	 '<tr>'+
					    '<td>'+this['part1']+'</td>'+
			      		    '<td>'+this['part1_desc']+'</td>'+
			  		 '</tr>'+
			  		 
					 '<tr>'+
					    '<td>'+this['part2']+'</td>'+
					    '<td>'+this['part2_desc']+'</td>'+
			  		 '</tr>'+
			  		 
			 		 '<tr>'+
					    '<td>'+this['part3']+'</td>'+
					    '<td>'+this['part3_desc']+'</td>'+
			  		 '</tr>'+
			  		 
			  		 '</table>'+'<div><a href='+this['image']+'>'+'</a></div>';
>>>>>>> ce0ec28c6f19e6f8845766fcdbbc150d622ed8e1
				if(this['name']=='CPM1'){
				$('#CPM1').append(info);
				}else if(this['name']=='CPM2'){
				$('#CPM2').append(info);
				}
				});
		
				
		
		
		
		});	
	
	
	}//getDBequipment()
		
	
	
	});
