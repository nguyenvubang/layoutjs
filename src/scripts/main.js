// Main
$(document).ready(function () {
    getcountUp()
});


$(window).scroll(function () {
    getcountUp()
});

$(window).resize(function () {
    // getcountUp()
});

function getcountUp() {
    $('[data-count]').each(function () {
        var elm = $(this).offset().top
        var docS = $(window).scrollTop()
        // console.log(elm,docS)
        var docH = $(window).height()
        // console.log(docH)
        var num = $(this).attr('data-count')
        var f = $(this).attr('data-from')
        var run = false
        if (elm < ((docS + docH) - 400) && !run) {
            // console.log(docH,docS, num)
            // $(this).text(num)
            var $this = $(this),
                countTo = num,
                durationTo = 30000;
            $({ countNum: $this.text() }).animate({
                countNum: countTo
            }, {
                    duration: durationTo,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        run = true
                    }
                });
        } else {
            $(this).text(f)
        }

    })

}


