//JavaScript



















//jQuery

$(document).ready(function(){

	//accordtion
	$("#accordion" ).accordion({
		collapsible: true
	})

	//autocomplete
	var language = [
	"Html",
	"Css",
	"JavaScript",
	"jQuery"
	];

	 $( "#tags" ).autocomplete({
      source: language
    })

	//datepicker
	$('#date').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true

	})

	//tooltip
	$('#tool').tooltip({
		track: true
	})

	//tabs
	$('#tabs').tabs();

	//animation
	var state = true;
    $( "#button" ).click(function(){
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "red",
          color: "#fff",
          width: 500
        });
      } else {
        $( "#effect" ).animate({
          backgroundColor: "green",
          color: "#000",
          width: 240
        });
      }
      state = !state;
    })

    /*draggable*/

    $( "#draggable" ).draggable();


    //droppable
	$( "#drag" ).draggable();
    $( "#droppable" ).droppable({
      drop: function(){
      	$( this )
          .html( "Dropped!" );
      }
        
    })    

    //sortable
     $( "#sortable" ).sortable();

     //sortable
     $( "#selectable" ).selectable();

    //AddClass RemoveClass & ToggleClass

   $('#addbutton').click(function(){
   	$('#box').addClass("first");
   })

   $('#removebutton').click(function(){
   	$('#box').removeClass("first");
   })

   $('#togglebutton').click(function(){
   	$('#box').toggleClass("first");
   })

});