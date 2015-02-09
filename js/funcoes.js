
// JavaScript Document
$( document ).ready(function() {
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

			$(".fontResizer_add").click(function () {
				maisFont();
			});
			$(".fontResizer_minus").click(function () {
				menosFont();
			});
			$(".fontResizer_reset").click(function () {
				resetFont();
			});
			
			(function(){
				var tam = $.cookie('tamanhoLetra');
				$('body').css("font-size",tam+"px");
				console.log("TAMANHO INICIAL",$.cookie('tamanhoLetra'));
			})();

			function maisFont(){
				var tamanho = $('body').css("font-size");
				var maisUm = parseInt(tamanho.substr(0, 2));
				maisUm++;
				$.cookie('tamanhoLetra', maisUm,{ path: '/' });
				$('body').css("font-size",maisUm+"px");
				console.log("MAiS",$.cookie('tamanhoLetra'));
			}
			function menosFont(){
				var tamanho = $('body').css("font-size");
				var maisUm = parseInt(tamanho.substr(0, 2));
				maisUm--;
				$.cookie('tamanhoLetra', maisUm,{ path: '/' });
				$('body').css("font-size",maisUm+"px");
			}
			function resetFont(){
				$('body').css("font-size","12px");

				$.removeCookie('contraste2', { path: '/' });
		 		$.removeCookie('contraste1', { path: '/' });

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

});
