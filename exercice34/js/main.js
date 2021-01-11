$(document).ready(function() {
    $("button").click(function() {
        $.ajax({
            url: 'https://restcountries.eu/rest/v2/name/', /// normalment c'est le nom de l'input qui compte 
            //mais ce synthax $("input").val(), me donne une errore 
            success: function(data) {
                $("#country").html(data[0].name);
                $("#capital").html(data[0].capital);
            }
        });
    })
})