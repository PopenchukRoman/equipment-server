	$(document).ready(function(){
	$(function(){
	alert('Подключена последняя версия jQuery через Google хостинг');
	});

	
	/*
			rotatePics(3)
			function rotatePics(currentPhoto){
			 var numberOfPhotos = $('#photos img').length;
			 currentPhoto = currentPhoto % numberOfPhotos;

			 $('#photos img').eq(currentPhoto).fadeOut(1000, function(){
				//Переупорядочить z-index
			$('#photos img').each(function(i){
			 $(this).css('zIndex', ((numberOfPhotos - i) + currentPhoto) % numberOfPhotos);
			});
			 $(this).show();
			 setTimeout(function(){rotatePics(++currentPhoto);}, 3000);
			});
			};
	*/		
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
			
			if (json.equipments.length > 0) {
				$('#CPM1').empty();
				$('#CPM2').empty();
								
				$.each(json.equipments,function() {
				   var info = '<li>Name: ' +  this['name'] + ' ' +  this['part'] +  this['parameter'] + '</li>';
				});
			}
		)};	
	
	
	}//getDBequipment()
		
	getDBequipment();
	
	});
