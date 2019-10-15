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


    $( ".save" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val()
        console.log(saveValue);
        localStorage.setItem("rowInfo1",saveValue);
  });
  























});