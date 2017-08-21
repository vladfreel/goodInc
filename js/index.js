	$(function(){

    $('#mm').mouseenter(function(){ // Навели на ссылку?

      $( "#im" ).show(); // Показываем блок

    });

$('#mm').mouseleave(function(e){

    if (e.relatedTarget.id == 'mm') return;

    $('#im').hide();

});
