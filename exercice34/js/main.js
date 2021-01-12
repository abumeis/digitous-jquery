$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: `https://restcountries.eu/rest/v2/name/${$("input").val()}`, // c'était à cause de ça {}, mail là ça march yoooho
            success: function(data) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital); //D'ailleurs comment ça s'écrit le syntaxe HTML ici ??
            }
        });
    })
})