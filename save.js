$(document).ready(function(){

    $( "#6A" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        localStorage.setItem("6AM",saveValue);
    });

    $( "#7A" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        localStorage.setItem("7AM",saveValue);
    });

    $( "#8A" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        localStorage.setItem("8AM",saveValue);
    });

$( "#9A" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("9AM",saveValue);
});


$( "#10A" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("10AM",saveValue);
});

$( "#11A" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("11AM",saveValue);
});

$( "#12P" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("12PM",saveValue);
});

$( "#13P" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("1PM",saveValue);
});


$( "#14P" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("2PM",saveValue);
});


$( "#15P" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("3PM",saveValue);
});


$( "#16P" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("4PM",saveValue);
});

$( "#17P" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("5PM",saveValue);
});

});