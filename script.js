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
    
    renderLastRegistered();

    function renderLastRegistered() {
    $("#saveInput1").val(localStorage.getItem("6AM"));
    $("#saveInput2").val(localStorage.getItem("7AM"));
    $("#saveInput3").val(localStorage.getItem("8AM"));
    $("#saveInput4").val(localStorage.getItem("9AM"));
    $("#saveInput5").val(localStorage.getItem("10AM"));
    $("#saveInput6").val(localStorage.getItem("11AM"));
    $("#saveInput7").val(localStorage.getItem("12PM"));
    $("#saveInput8").val(localStorage.getItem("1PM"));
    $("#saveInput9").val(localStorage.getItem("2PM"));
    $("#saveInput10").val(localStorage.getItem("3PM"));
    $("#saveInput11").val(localStorage.getItem("4PM"));
    $("#saveInput12").val(localStorage.getItem("5PM"));
    };

    $( "#save1" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        localStorage.setItem("6AM",saveValue);
        $("#saveInput1").val(localStorage.getItem("6AM"));
    });
    

    

  
























});