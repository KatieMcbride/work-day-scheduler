$(document).ready(function(){
    // var currentDate = new Date()
    // $("#txtDate").datepicker().datepicker("setDate", new Date());
    
    

    // $("#save").click(function(){
    //     var textOne = document.getElementById("rowInfo1").value;
    //     console.log(textOne);
    //     localStorage.setItem("rowInfo1", textOne);
        
    // });

    $( "input" ).click(function() {
        var value = $( this ).val();
        console.log(value);
        localStorage.setItem("rowInfo1", value);
  });
  


    // $("#")
    // value = $("#rowInfo1").val();
    // console.log(value);
























});