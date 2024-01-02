// Codice per animare gli elementi
$(document).ready(function () {
    var progressBar = $(".progress-bar");

    progressBar.each(function () {
        var currentProgress = $(this).data("progress");
        $(this).css("width", currentProgress + "%");
    });
});