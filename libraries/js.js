$(function () {

    console.log('dzialam');

    $('.formularz_kontaktowy').on('click',function(){
        $('.kontakt_background').css('display','block');
        $('.kontakt').slideDown();
        $(".kontakt_background, .close").on('click',function(){
            $('.kontakt').slideUp(600 ,function(){
                $('.kontakt_background').css('display','none');
            });
        });
    });




    var contextHeight = $('.context').css('height');
    $('.obrazek').css('height', contextHeight);


    dividableWidth = parseInt($('div.obrazek').css('width')) - (parseInt($('div.obrazek').css('width')) % 40);
    dividableHeight = parseInt($('div.obrazek').css('height')) - (parseInt($('div.obrazek').css('height')) % 40);
    $('div.image').css('width', dividableWidth );
    $('.kafelka').css('background-size', dividableWidth);
    $('div.image').css('height', dividableHeight);
    $('.main, .startSite').css('margin-top', $('.nav').css('height'));


    $(window).resize(function () {
        var contextHeight = $('.context').css('height');
        $('.main, .startSite').css('margin-top', $('.nav').css('height'));
        $('.obrazek').css('height', contextHeight);
        $('div.image').css('width', dividableWidth);
        $('div.image').css('height', parseInt($('div.obrazek').css('height')) - parseInt($('div.obrazek').css('height')) % 40);
        location.reload();
    });


    //image effects
    function imageEffects() {

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
    }

    imageEffects();

    //start site

    function imageSelection() {
        $('.startSite').toggleClass('tlo1');
        $('.startSite').toggleClass('tlo2');

        var textVisibility = $('.heading, .box2').children();
        var box2= $('.box2').children();

            $.each(textVisibility, function () {
                if ($(this).css('display') == 'none') {
                    $(this).fadeIn(3000);
                } else {
                    $(this).hide();
                }
            });

        //var negativeMargin=$('.green_box').css('width');

        $('.box1').animate({left:'-360px'},function(){
            $(this).animate({left:0})
        })

        $('.box2').animate({right:'-360px'},function(){
            $(this).animate({right:0})
        })

    };

    setInterval(imageSelection, 8000);


    $('.ftr').hover(
        function () {
            $(this).stop().animate({'margin-bottom': 0}, 400)
        }, function () {
            $(this).stop().animate({'margin-bottom': '-125px'}, 400)
        });

    //function longButtons(){
    //    var times=$('.descriptions h2').length;
    //    for(var i= 0,idnumber=1;i<times;i++){
    //        var Longbutton=$("<div class='longButton'></div>");
    //       currentTarget=$('.descriptions h2')[i];
    //        var tempText=$(currentTarget).text();
    //        $(currentTarget).css('background','red');
    //        $(currentTarget).attr('id',i);
    //        idnumber++;
    //
    //        $(Longbutton).text(tempText);
    //        (function (i){
    //        $(Longbutton).on('click',function(){
    //           console.log(i);
    //            window.location.href='#'+ i;
    //            var tempvalue=window.scrollY-150;
    //            window.scrollTo(0,tempvalue);
    //        });})(i);
    //        $('.context').append($(Longbutton));
    //
    //    };
    //
    //}
    //longButtons();


});

