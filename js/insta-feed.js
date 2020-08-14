(function () {
    new InstagramFeed({
        'username': 'imepcursos',
        'container': document.getElementById("custom-instagram-feed"),
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'callback': null,
        'styling': true,
        'items': 12,
        'items_per_row': 6,
        'margin': 1
    });
})();