$(document).ready(function(){
  //  INIT
  checkTime();

  function checkTime() {
    let currentDate = moment().format('MMM Do YYYY');
    $('#txtDate').text(`Today is: ${currentDate}`);
    let currentTime = moment().format('h:mm a');
    $('#current-time').text(`It is: ${currentTime}`);
    let currentHour = moment().hours();
    console.log(currentHour);
    let inputTime = $('input');
          
    for (i=0; i < inputTime.length; i++) {
      let idTime = inputTime[i].id 
      idTime = parseInt(idTime.slice(0, -1));
      console.log('id tags', inputTime[i].id);
      console.log('idTime', idTime);
      if (currentHour > idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color:silver');
          } else if (currentHour < idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color: coral');
          } else if (currentHour === idTime) {
        $(`#${inputTime[i].id}`).attr('style', 'background-color: RosyBrown');
      }
    };
  };
 

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

});

    
    

    

  
























