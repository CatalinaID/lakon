$(document).ready(function() {
    $.ajax({
        url: "http://194.135.81.36:8080/lakon-0.1/relasi/list"
    }).then(function(data) {
       $('#graf').append(data.content);
    });
});