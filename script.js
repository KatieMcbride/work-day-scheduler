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


    $( "input" ).click(function() {
        var value = $( this ).val();
        console.log(value);
        localStorage.setItem("rowInfo1", value);
  });
  























});