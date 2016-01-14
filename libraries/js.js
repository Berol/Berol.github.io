$(function () {

    console.log('dzialam');
    //$('body').on('click',function(){
    //    window.alert("Kochana Laureczko podaj mi tê liczbê " + $(window).height())
    //})
    $(window).resize(function () {
        location.reload();
    });

    $('.formularz_kontaktowy').on('click',function(){
        window.scrollTo(0,0);
        $('.kontakt_background').css('display','block');
        $('.kontakt').slideDown();
        $(".kontakt_background, .close").on('click',function(){
            $('.kontakt').slideUp(600 ,function(){
                $('.kontakt_background').css('display','none');
            });
        });
    });

    (function mobilnaNawigacja(){

        $('.menuMobile').on('click',function(){
            $('.top').children('ul').children('li').toggleClass('mobile');

            if($('.top').children('ul').css('display')=='none'){
                $('.top').children('ul').css({'display':'block','top':'','position':'absolute'});
            }else{
                $('.top').children('ul').css('display','none');
            }
        });

        $('.alternativeIkons').on('click',function(){
            $('.dropdown').toggle();
        });
    })();

    (function wielkoscObrazkow() {
        var contextHeight = $('.context').css('height');
        $('.obrazek').css('height', contextHeight);
        var height = $('.contextFirma').css('height');
        $('.firmoweFoto').css('height', height);

        dividableWidth = parseInt($('div.obrazek').css('width')) - (parseInt($('div.obrazek').css('width')) % 40);
        dividableHeight = parseInt($('div.obrazek').css('height')) - (parseInt($('div.obrazek').css('height')) % 40);
        $('div.image').css('width', dividableWidth );
        $('.kafelka').css('background-size', dividableWidth);
        $('div.image').css('height', dividableHeight);
    })();

    (function imageEffects() {

        function kafelka(x, y, count) {
            var nowaKafelka = $('<div class="kafelka"></div>');
            $(nowaKafelka).attr('data-id', count);
            $(nowaKafelka).css('left', x);
            $(nowaKafelka).css('top', y);
            $(nowaKafelka).css('opacity', '0');
            $(nowaKafelka).css('background-position', '-' + x + ' -' + y);
            return nowaKafelka;
        }

        var imgWidth = dividableWidth;
        var imgHeight = dividableHeight;

        for (var j = 0, count = 1; j < imgHeight; j += 40) {
            var positionY = j + 'px';
            for (var i = 0; i < imgWidth; i += 40) {
                var positionX = i + 'px';
                $('div.image').append(kafelka(positionX, positionY, count));

                count++;
            }
        };

        var iloscKafelek = imgWidth / 40;

        for (var i = 1, liczba = ''; i <= iloscKafelek; i++) {
            liczba += i;
            for (var j = 1; j < i; j++) {
                temp = i + ((iloscKafelek - 1) * j);
                liczba += ' ' + temp;
            }
            liczba += ','
        };

        for (i = 2 * iloscKafelek; i <= iloscKafelek * iloscKafelek; i += iloscKafelek) {
            liczba += i;
            for (var j = iloscKafelek * iloscKafelek, multiply = 1; j > i; j -= iloscKafelek) {
                temp = i + ((iloscKafelek - 1) * multiply);
                liczba += ' ' + temp;
                multiply++;
            }
            liczba += ',';
        };

        var tablicaPrzekatnych = liczba.split(',');
        tablicaPrzekatnych.pop();

        function makingIDselector(a) {
            return ('[data-id=' + a + ']');
        };

        for (i = 0; i < tablicaPrzekatnych.length; i++) {
            var temp = 50 * i;
            var id = tablicaPrzekatnych[i].split(' ');
            id = id.map(makingIDselector);
            id = id.join(',');

            rotateFace = (function (id) {
                return function () {
                    $(id).css('opacity', '1');
                }
            })(id);

            setTimeout(rotateFace, temp);
        };

        $('.kafelka').css('background-size', dividableWidth);
    })();

    if ($('.startSite').length!==0){
        function srartSiteImageTextChange() {

        $('.startSite').toggleClass('tlo1');
        $('.startSite').toggleClass('tlo2');

        var textVisibility = $('.heading, .box2').children();
        $.each(textVisibility, function () {
            if ($(this).css('display') == 'none') {
                $(this).fadeIn(3000);
            } else {
                $(this).hide();
            }
        });

        $('.box1').animate({left:'-360px'},function(){
            $(this).animate({left:0})
        });
        $('.box2').animate({right:'-360px'},function(){
            $(this).animate({right:0})
        });

    };
        setInterval(srartSiteImageTextChange, 8000);
    }

    $('.ftr').hover(function () {
            $(this).stop().animate({'margin-bottom': 0}, 400)
        }, function () {
            $(this).stop().animate({'margin-bottom': '-8.1em'}, 400)
        });

});

