function getRandom(min, max) {
  var random = Math.floor(Math.random() * (max + 1 - min)) + min;

  return random;
}

let windowHeight;
let relFloatingWords = $('.catchcopyContainer p');
let numberOFloatingWords = 5;
let indexOfFloatingNow = 0;
let nextIndex = 1;

function floatTheWords() {
  nextIndex = (indexOfFloatingNow + 1) % 5;
  indexOfFloatingNow = nextIndex;
  relFloatingWords.each(function(index) {
    if (index == nextIndex) {
      $(this).addClass('sharp');
    } else {
      $(this).removeClass('sharp');
    }
  });
}

let relSlide = $('header .slideLayer .slide');
let numberOfSlide = 3;
let indexOfPlaying = 0;
let numberOfNext;

function slideShow() {

  numberOfNext = (indexOfPlaying + getRandom(1, 2)) % numberOfSlide;

  relSlide.each(function(index) {

    if (index == numberOfNext) {
      $(this).addClass('playingSlide').css('display', 'block');
    } else {
      $(this).removeClass('playingSlide').fadeOut(1000);
    }
  });
  indexOfPlaying = numberOfNext;
}

// function slideShow(brothers, show) {
//   let zIndex = [];
//   $(brothers).each(function() {
//     zIndex.push(parseInt($(this).css('z-index')));
//   });
//   let length = zIndex.length;
//   let maxIndex = zIndex.indexOf(Math.max.apply(null, zIndex));
//   let randomArray = [];
//   for (i = 0; i < length; i++) {
//     if (i != maxIndex) {
//       randomArray.push(i);
//     }
//   }
//   let nb = randomArray[getRandom(0, randomArray.length - 1)];
//
//   $(brothers).each(function(index) {
//     $(this).removeClass(show);
//     if (index === nb) {
//       $(this).css('z-index', zIndex.length - 1)
//       $(this).addClass(show);
//     } else if (zIndex[index] > zIndex[nb]) {
//       $(this).css('z-index', zIndex[index] - 1)
//     }
//   });
// };

$(function() {

  var now_position = 0; //プログレスバーの現在の位置
  var all_img = $("img"); //すべての画像

  var img_len = all_img.length; //画像の総数
  var loaded_counter = 0; //読み込み完了の数値
  var progressBar = $("#progressBar"); //プログレスバーの要素
  var timer = null;
  //アニメーションスタート
  startAnime();
  for (var i = 0; i < img_len; i++) {
    all_img[i].addEventListener("load", loadFunc());
  }
  //
  function loadFunc() {
    //読みこんだ画像の数をカウントしておく
    loaded_counter++;
  }

  function startAnime() {
    if (!timer) {
      timer = setInterval(loadingFunc, 33);
    }
  }

  function stopAnime() {
    clearInterval(timer);
    timer = null;
  }

  var animationEndEvents = [
    "webkitAnimationEnd",
    "mozAnimationEnd",
    "oAnimationEnd",
    "animationend"
  ];
  var animationEnd = animationEndEvents.join(" ");

  function loadingFunc() {
    if (now_position > 99.9) {
      now_position = 100;
      $('#logo01').text('て');
      $('#logo02').text('し');
      $('#logo03').text('て');
      $('#logo04').text('し');
      $('#logo05').text('De');
      $('#logo06').text('s');
      $('#logo07').text('ig');
      $('#logo08').text('n');
      stopAnime();
      $("#loadingPage").css('animation', 'welcomAnimation 1s ease-in forwards')
      $('#loadingPage').on(animationEnd, function() {
        $('#loadingPage').css('display','none');
      });
      $('header').css('display', 'flex');
      $('nav').css('display', 'block');
      $('main').css('display', 'block');
      windowHeight = $('main').offset().top;
    }else if (now_position >88){
      $('#logo08').text('n');
    }else if (now_position > 77){
      $('#logo06').text('g');
    }else if (now_position > 66) {
      $('#logo05').text('Si');
    }else if (now_position > 55) {
      $('#logo04').text('Dえ');
    }else if (now_position > 44) {
      $('#logo04').text('シ');
    }else if (now_position > 33) {
      $('#logo03').text('Te');
    }else if (now_position > 22) {
      $('#logo02').text('si');
    }else if (now_position > 11) {
      $('#logo01').text('て');
    }

    // 読み込んだ画像のパーセンテージ
    var target_position = (loaded_counter / img_len) * 100;
    //プログレスバーの目的の位置までイージングの設定
    now_position += (target_position - now_position) * 0.15;
  }



  let relNavigationDiv = $('.navigation div');
  let relNavi = $('.navigation');
  let relNaviHeight;
  let item = $('.contents .item');
  let numberOfItem = item.length;
  let tempOfHSUAI = 0;

  setInterval(function() {
    floatTheWords('.catchcopyContainer p', 'sharp');
  }, 4000);

  setTimeout(function() {
    setInterval(function() {
      slideShow();
    }, 20000);
  }, 10000);

  $('#nav1').hover(function() {
      $('#nav1').addClass('lSIze sharp');
      $('#nav2').addClass('rSize');
      $('#nav3,#nav4').addClass('sSize');
    },
    function() {
      $('#nav1').removeClass('lSIze sharp');
      $('#nav2').removeClass('rSize');
      $('#nav3,#nav4').removeClass('sSize');
    });
  $('#nav2').hover(function() {
      $('#nav2').addClass('lSIze sharp');
      $('#nav1,#nav3').addClass('rSize');
      $('#nav4').addClass('sSize');
    },
    function() {
      $('#nav2').removeClass('lSIze sharp');
      $('#nav1,#nav3').removeClass('rSize');
      $('#nav4').removeClass('sSize');
    });
  $('#nav3').hover(function() {
      $('#nav3').addClass('lSIze sharp');
      $('#nav2,#nav4').addClass('rSize');
      $('#nav1').addClass('sSize');
    },
    function() {
      $('#nav3').removeClass('lSIze sharp');
      $('#nav2,#nav4').removeClass('rSize');
      $('#nav1').removeClass('sSize');
    });
  $('#nav4').hover(function() {
      $('#nav4').addClass('lSIze sharp');
      $('#nav3').addClass('rSize');
      $('#nav1,#nav2').addClass('sSize');
    },
    function() {
      $('#nav4').removeClass('lSIze sharp');
      $('#nav3').removeClass('rSize');
      $('#nav1,#nav2').removeClass('sSize');
    });

  if (tempOfHSUAI != numberOfItem) {
    $(window).scroll(function() {

      item.not('slideUpItem').each(function() {
        if ($(this).offset().top - 0.9 * windowHeight < $(window).scrollTop()) {
          $(this).addClass('slideUpItem');
          tempOfHSUAI++;
        };
      });
    });
  }

  $(window).scroll(function() {
    relNaviHeight = relNavi.offset().top;
    if (relNaviHeight < windowHeight * 1.01) {

      relNavigationDiv.removeClass('sharp');
      relNavi.removeClass('colorNavi');
    } else if (relNaviHeight < windowHeight * 1.03) {
      relNavi.removeClass('colorNavi');


    } else if (relNaviHeight > windowHeight * 1.03) {
      relNavigationDiv.addClass('sharp');
      relNavi.addClass('colorNavi');
    } else {
      relNavigationDiv.addClass('sharp');
    }

  });
});
