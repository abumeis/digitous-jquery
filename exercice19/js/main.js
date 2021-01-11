$(document).ready(function() {
    $("#button").click(function() {
        $("input").removeAttr('disabled');
    })
});

//on peut le faire avec css méthode aussi: $("#text").css("display", "none");
//