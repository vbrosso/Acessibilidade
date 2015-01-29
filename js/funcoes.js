
// JavaScript Document
$( document ).ready(function() {
	//ACESSIBILIDADE
	/*$('p, h1, h2, h3, h4, h5, legend, span, strong, a, label, p a, div, td').addClass('fontSize');*/
		
	// Cria os Cookies
    if ($.cookie('contraste1') === "true") {
		$('body').addClass('contraste1');
    }

    if ($.cookie('contraste2') === "true") {
		$('body').addClass('contraste2');
    }
	
    if ($.cookie('resetCookie') === "true") {
    	$('body').removeClass('contraste1');
		$('body').removeClass('contraste2');
    }
	
	if ($.cookie('librasCookie') === "ativo") {
		$('a.btn-libras').attr('id','ativo');
		$('.contEsq .divLibras').addClass('abrevideo');
		$('a.btn-libras').addClass('ativo');
		
    }else{
		$('.contEsq .divLibras').removeClass('abrevideo');
		$('a.btn-libras').removeClass('ativo');
		$('a.btn-libras').attr('id','');
    }
	
	if ($.cookie('tamanhoLetra') != null) {
		var iTamanho = $.cookie('tamanhoLetra');
		console.log(iTamanho);
		$(".fontSize, .fontSize15").each(function(){
			var tamanho = $(this).css('font-size').substring(0, 2);
			$(this).attr("style", "font-size:"+(parseInt(tamanho)+parseInt(iTamanho))+"px;");
		});
    } else {
    	var iTamanho = 0;
    }
	
    // Acoes nos botoes de acessibilidade
    $(".btn-contraste1").click(function () {
		$.removeCookie('contraste2', { path: '/' });
		$.removeCookie('resetCookie', { path: '/' });
		if (!($.cookie('contraste1') === "true")) {
            $('body').removeClass('contraste2');
			$('body').addClass('contraste1');
            $.cookie('contraste1','true',{path:'/'});
        }       
        else {
            $.cookie('contraste1','false',{path:'/'});
        }
		return false;
    });
	
    $(".btn-contraste2").click(function () {
		$.removeCookie('contraste1', { path: '/' });
		$.removeCookie('resetCookie', { path: '/' });
        if (!($.cookie('contraste2') === "true")) {
            $('body').removeClass('contraste1');
			$('body').addClass('contraste2');
            $.cookie('contraste2','true',{path:'/'});
        }       
        else {
            $.cookie('contraste2','false',{path:'/'});
        }
		return false;		
    });
	
	 $(".fontResizer_reset").click(function () {
		 $.removeCookie('contraste2', { path: '/' });
		 $.removeCookie('contraste1', { path: '/' });

		// $(".fontSize, .fontSize15").each(function(){
		// 	var tamanho = $(this).css('font-size').substring(0, 2);
		// 	$(this).attr("style", "font-size:"+tamanho+"px;");
		// 	$.cookie('tamanhoLetra',iTamanho,{ path: '/' });
		// });
	 	iTamanho = 0;
        if (!($.cookie('resetCookie') === "true")) {
            $('body').removeClass('contraste1');
			$('body').removeClass('contraste2');
            $.cookie('resetCookie','true',{path:'/'});

        	$('.fontSize').removeAttr('style');
        	$('.fontSize15').removeAttr('style');
            $.removeCookie('tamanhoLetra', { path: '/' });
        }       
        else {
        	$('.fontSize').removeAttr('style');
        	$('.fontSize15').removeAttr('style');
            $.removeCookie('tamanhoLetra', { path: '/' });
            $.cookie('resetCookie','false',{path:'/'});
        }
		return false;		
    });
	
	$(".btn-libras").click(function () {
		
		if($(this).attr('id')=='ativo'){
			$('.contEsq .divLibras').removeClass('abrevideo');
			$('a.btn-libras').removeClass('ativo');
			$('a.btn-libras').attr('id','');
			
		}else{
			$('a.btn-libras').attr('id','ativo');
			$('.contEsq .divLibras').addClass('abrevideo');
			$('a.btn-libras').addClass('ativo');
		}
		$.cookie('librasCookie',$(this).attr('id'),{ path: '/' });

    });
	
	
	$(function(){

		tamanhoMax = 28;
		tamanhoMin = 10;
		
		$(".btn-aumenta").click(function(){
			iTamanho++;
			console.log(iTamanho);
			$(".fontSize, .fontSize15").each(function(){
				tamanho = $(this).css('font-size').substring(0, 2);
				if (tamanho <= tamanhoMax){
					tamanho = tamanho-iTamanho+1;
					$(this).attr("style", "font-size:"+(parseInt(tamanho)+parseInt(iTamanho))+"px;");
					$.cookie('tamanhoLetra', iTamanho,{ path: '/' });
				}
			});
			// if(tamanhoLetra <= tamanhoMax){
			// 	tamanhoLetra++;
			// 	$('.fontSize').css({'fontSize': tamanhoLetra});
			// 	$.cookie('tamanhoLetra',tamanhoLetra,{ path: '/' });
			// }
			// if(tamanhoLetra15 <= tamanhoMax15){
			// 	tamanhoLetra15++;
			// 	$('.fontSize15').css({'fontSize': tamanhoLetra15});
			// 	$.cookie('tamanhoLetra15',tamanhoLetra15,{ path: '/' });
			// }
			return false;			
		});
	 
		$(".btn-diminui").click(function(){
			iTamanho--;
			console.log(iTamanho);
			$(".fontSize, .fontSize15").each(function(){
				tamanho = $(this).css('font-size').substring(0, 2);
				if (tamanho >= tamanhoMin){
					tamanho = tamanho-iTamanho-1;
					$(this).attr("style", "font-size:"+(parseInt(tamanho)+parseInt(iTamanho))+"px;");
					$.cookie('tamanhoLetra', iTamanho,{ path: '/' });
				}
			});
			// if(tamanhoLetra >= tamanhoMin){
			// 	tamanhoLetra--;
			// 	$('.fontSize').css({'fontSize': tamanhoLetra});
			// 	$.cookie('tamanhoLetra',tamanhoLetra,{ path: '/' });
			// }
			// if(tamanhoLetra15 >= tamanhoMin15){
			// 	tamanhoLetra15--;
			// 	$('.fontSize15').css({'fontSize': tamanhoLetra15});
			// 	$.cookie('tamanhoLetra15',tamanhoLetra15,{ path: '/' });
			// }
			return false;		
		});

	})
});
