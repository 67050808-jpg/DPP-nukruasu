$(document).ready(function() {
    let $balloon = $('#balloon');

    let size = 200;
    const minSize = 200;
    const maxSize = 420;

    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    function updateBalloon() {
        $balloon.css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': colors[colorIndex]
        });
    }

   
    $balloon.click(function() {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size > maxSize) {
            size = minSize;
            colorIndex = 0;
        }

        updateBalloon();
    });

  
    $balloon.mouseleave(function() {
        size -= 5;
        if (size < minSize) size = minSize;

        colorIndex = (colorIndex - 1 + colors.length) % colors.length;

        updateBalloon();
    });

  
    updateBalloon();
});
