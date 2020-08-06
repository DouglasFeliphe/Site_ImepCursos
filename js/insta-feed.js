(function () {
    new InstagramFeed({
        'username': 'imepcursos',
        'container': document.getElementById("custom-instagram-feed"),
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'callback': null,
        'styling': false,
        'items': 10,
        'items_per_row': 5,
        'margin': 0.25
    });
})();