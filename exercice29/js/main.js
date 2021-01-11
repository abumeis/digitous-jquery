$(document).ready(function() {
    $("#button").click(function() {
        var value = $("input").val();
        if (value.length > 5) {
            $('input').addClass("is-valid");
        } else {
            $('input').addClass("is-invalid");
        }
    });
});