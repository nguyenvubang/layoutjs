eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
    };if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);k = [function (e) {
            return r[e];
        }];e = function () {
            return '\\w+';
        };c = 1;
    };while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
    document.head.appendChild(msViewportStyle);
}

$(function () {
    var nua = navigator.userAgent;
    var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%');
    }
});
// Main
$(document).ready(function () {
    $('.item').addClass('underline');
    // $('.item:first-child').removeClass('underline')
    $('.item:last-child').removeClass('underline');
    var a = $('.abc').height();
    var b = a / 2;
    // console.log(a, b)
    $('.block:first-child .item').css("height", b);
    $('.block:last-child .item').css("height", b);
});

// Main
$(document).ready(function () {
    getcountUp();
});

$(window).scroll(function () {
    getcountUp();
});

$(window).resize(function () {
    // getcountUp()
});

function getcountUp() {
    $('[data-count]').each(function () {
        var elm = $(this).offset().top;
        var docS = $(window).scrollTop();
        // console.log(elm,docS)
        var docH = $(window).height();
        // console.log(docH)
        var num = $(this).attr('data-count');
        var f = $(this).attr('data-from');
        var run = false;
        if (elm < docS + docH - 400 && !run) {
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
                    run = true;
                }
            });
        } else {
            $(this).text(f);
        }
    });
}
//# sourceMappingURL=main.js.map
