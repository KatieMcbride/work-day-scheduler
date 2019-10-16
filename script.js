$(document).ready(function(){
    updateClock();


    function updateClock() {
    var currentdate = new Date(); 
    var datetime = "Today's Date: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        $('#txtDate').text(`${datetime}`);
    }
    setInterval(updateClock, 1000);


    $( "#save1" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });

  $( "#save2" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem(time,saveValue);
    });

    $( "#save3" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    
    $( "#save4" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    

    $( "#save5" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    
    $( "#save6" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    
    $( "#save7" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    
    $( "#save8" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    

    $( "#save9" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    

    $( "#save10" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    

    $( "#save11" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    
    $( "#save12" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        console.log(time);
        localStorage.setItem(time,saveValue);
    });
    
  
























});