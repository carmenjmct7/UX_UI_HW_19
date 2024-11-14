console.log("Your index.js file is loaded correctly");
$('.hover-image').hover(
    function() { $(this).attr('src', $(this).data('hover-src')); },
    function() { $(this).attr('src', $(this).data('original-src')); }
).each(function() {
    $(this).data('original-src', $(this).attr('src'));
});
