(function($){
	$(document).ready(function(){
		//criando um efeito "toggle" nos conteúdos, ou seja, o conteúdo de cada link só irá aparecer quando eu clicar sobre o link...
		$.each($('#menu li'),function(){
			$(this).click(function(){
				//o id do '$(this)' é "link-algo", daí eu quero apenas o "algo", logo, slice(5)
				var id_que_quero_abrir=$(this).attr('id').slice(5);
				
				//escondendo qualquer conteúdo que esteja visível
				$('.conteudo').hide();
				
				//retirando o efeito de 'link selecionado' de algum link que possa estar selecionado
				$.each($('.link-selecionado'),function(){
					$(this).removeClass('link-selecionado');
				});
				
				//add efeito de 'link-selecionado' ao link escolhido
				$(this).addClass('link-selecionado');
				
				//fazendo aparecer apenas o conteúdo que eu abri
				$('#'+id_que_quero_abrir).show();
			});
		});
		
		$('#link-intro').click();
	});
})(jQuery);
