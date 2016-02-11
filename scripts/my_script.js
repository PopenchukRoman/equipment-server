	$(document).ready(function(){
	$(function(){
	alert('Подключена последняя версия jQuery через Google хостинг');
	});
		getDBequipment();
	$("div .info").toggle();
	$("div .info").dblclick(function(){
	  $(this).toggle();
	  $(".button_equip").css({'background-color':'#008800'});
	});
	
	var equip = [$("#CPM1"), $("#CPM2"), $("#M1"), $("#M2"), $("#M3"), //Порядок элементов массива должен соответствовать порядку в структуре DOM!!!
			 $("#M4"), $("#M5"), $("#M6"), $("#M7"), $("#TFP1"),
			 $("#TFP2"), $("#TFP3"), $("#M41"), $("#M42"), $("#M43"), $("#M31"), $("#YV11"), $("#YV21"), $("#YV12"), $("#YV22"), $("#YV13"), $("#YV23"), $("#YV30"), $("#YV31"), $("#YV55"), $("#YV52"), $("#YV56"), $("#AP55"), $("#AP55"), $("#SL51"), $("#SL207")];
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
	
		
	$('#aim').draggable(); //Перемещение div-a aim
	
	//Вычисляем координаты div-а с id='aim' и высвечиваем их
	//Выставляем элемен #aim, считываем координаты и вносим их в CSS для кнопки, которая должна располагаться на этом месте
	$("#aim").click(function(){
	alert("Top: "+aim.style.top+" "+"Left: "+aim.style.left);
	});
	
	$('.info').draggable(); //draggable dlja kartochek s informaciey o oborudovanij
	
	//Заполняем данными карточки с оборудованием из базы данных
	function getDBequipment(){
		$.getJSON("service.php", function(json) {
															
			$.each(json.equipments,function() {
			var info ='<table class="lux">'+
					    '<caption>Данные по '+this['name']+'</caption>' +
					    '<tr>'+
						   '<th>Узел'+'</th>'+
						   '<th>Параметры'+'</th>'+
				        '</tr>'+
			  	   	    
						'<tr>'+
						   '<td>'+this['uzel1_name']+'</td>'+
						   '<td>'+this['uzel1_desc']+'</td>'+
			  		    '</tr>'+
						
						'<tr>'+
						   '<td>'+this['uzel2_name']+'</td>'+
						   '<td>'+this['uzel2_desc']+'</td>'+
			  		    '</tr>'+
				      '</table>'+
					  '<img src='+this['img']+'>';
					 
				switch (this['name']){
				case 'CPM1':
					$('#CPM1').append(info);
					break;
				case 'CPM2':
					$('#CPM2').append(info);
					break;
				case 'M7':
					$('#M7').append(info);
					break;
				case 'M6':
					$('#M6').append(info);
					break;
				case 'M5':
					$('#M5').append(info);
					break;
				case 'M4':
					$('#M4').append(info);
					break;	
				case 'M3':
					$('#M3').append(info);
					break;
				case 'M2':
					$('#M2').append(info);
					break;
				case 'M1':
					$('#M1').append(info);
					break;
				case 'TFP1':
					$('#TFP1').append(info);
					break;
				case 'TFP2':
					$('#TFP2').append(info);
					break;
				case 'TFP3':
					$('#TFP3').append(info);
					break;
				case 'M41':
					$('#M41').append(info);
					break;
				case 'M42':
					$('#M42').append(info);
					break;
				case 'M43':
					$('#M43').append(info);
					break;
				case 'M31':
					$('#M31').append(info);
					break;
				case 'YV11':
					$('#YV11').append(info);
					break;
				case 'YV21':
					$('#YV21').append(info);
					break;	
				case 'YV12':
					$('#YV12').append(info);
					break;
				case 'YV22':
					$('#YV22').append(info);
					break;
				case 'YV13':
					$('#YV13').append(info);
					break;
				case 'YV23':
					$('#YV23').append(info);
					break;
				case 'YV30':
					$('#YV30').append(info);
					break;
				case 'YV31':
					$('#YV31').append(info);
					break;
				case 'YV55':
					$('#YV55').append(info);
					break;
				case 'YV52':
					$('#YV52').append(info);
					break;	
				case 'YV56':
					$('#YV56').append(info);
					break;
				case 'AP55':
					$('#AP55').append(info);
					break;
				case 'AP238':
					$('#AP238').append(info);
					break;	
				case 'SL51':
					$('#SL51').append(info);
					break;
				case 'SL207':
					$('#SL207').append(info);
					break;		
				default:
				break;	
				}
			});
				
		
		});	
	
	}//end getDBequipment
	
	});
