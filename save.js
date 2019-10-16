$(document).ready(function(){

    $( "#save1" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        localStorage.setItem("6AM",saveValue);
    });

    $( "#save2" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        localStorage.setItem("7AM",saveValue);
    });

    $( "#save3" ).click(function() {
        var id = $(this).data("attribute");
        var idString = "#" + id;
        var idValue = $(idString);
        var saveValue = idValue.val();
        var time = $(this).parent().attr("id");
        localStorage.setItem("8AM",saveValue);
    });

$( "#save4" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("9AM",saveValue);
});


$( "#save5" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("10AM",saveValue);
});

$( "#save6" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("11AM",saveValue);
});

$( "#save7" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("12PM",saveValue);
});

$( "#save8" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("1PM",saveValue);
});


$( "#save9" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("2PM",saveValue);
});


$( "#save10" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("3PM",saveValue);
});


$( "#save11" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("4PM",saveValue);
});

$( "#save12" ).click(function() {
    var id = $(this).data("attribute");
    var idString = "#" + id;
    var idValue = $(idString);
    var saveValue = idValue.val();
    var time = $(this).parent().attr("id");
    console.log(time);
    localStorage.setItem("5PM",saveValue);
});

});