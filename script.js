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
        console.log(currentdate.getHours());
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

   
    // Next figure out the colors
    function getStylesheet() {
        var currentTime = new Date().getHours();
        if (18 <= currentTime&&currentTime < 19) {
          // If time is after 7PM or before 6AM, apply night theme to ‘body’
        document.getElementById("sixAM").className = "row future";
        }
        // if (5 <= currentTime&&currentTime < 11) {
        //  document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
        // }
        // if (11 <= currentTime&&currentTime < 16) {
        //  document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
        // }
  };

//   if (n > 19 || n < 6)
//   // If time is after 7PM or before 6AM, apply night theme to ‘body’
//   document.body.className = "night";
// else if (n > 16 && n < 19)
//   // If time is between 4PM – 7PM sunset theme to ‘body’
//   document.body.className = "sunset";
// else
//   // Else use ‘day’ theme
//   document.body.className = "day";
  
  getStylesheet();


    // responsive time to change the colors

    // Update CSS

    // DRY code

    
    

    

  
























});