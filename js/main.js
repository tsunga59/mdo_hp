// ロード後アニメーション
window.addEventListener("load", function() {

    setTimeout(function() {

        const header = document.getElementById("header");
        header.classList.add("appear");

    }, 300);

    setTimeout(function() {

        const topTitle = document.getElementById("top_title");
        topTitle.classList.add("appear");

        const scrollIcon = document.getElementById("scroll_icon");
        scrollIcon.classList.add("appear");

    }, 800);

});

// window.addEventListener("scroll", function() {
//     // ヘッダー固定
//     const header = document.getElementById("header");
//     const main = document.getElementById("main");
//     const screenTop = window.screenTop;
//     const mainTop = main.getBoundingClientRect().top;
//     if (mainTop < screenTop + 80) {
//         header.classList.add("fixed");
//     } else {
//         header.classList.remove("fixed");
//     }
// });

// スムーススクロール
$(function(){
    $('a[href^="#"]').click(function(){
        const speed = 600;
        const href= $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top;
        
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

// ハンバーガーメニュー
const header = document.getElementById("header");
const menuBtn = document.getElementById("menu_btn");
let menuOpen = false;
menuBtn.addEventListener("click", function() {
    if (!menuOpen) {
        header.classList.add("open");
        menuOpen = true;
    } else {
        header.classList.remove("open");
        menuOpen = false;
    }
});

window.addEventListener("scroll", function() {

    // フェードイン
    let fadeInObj = document.querySelectorAll('.fade_in');
    let screenPosition = window.innerHeight;
    
    for (let i = 0; i < fadeInObj.length; i++) {
        
      const objPosition = fadeInObj[i].getBoundingClientRect().top;
    
      if (objPosition < screenPosition * 0.7) {
          fadeInObj[i].classList.add('scroll_in');
      } else {
          // fadeInObj[i].classList.remove('scroll_in');
      }
    
    }

});

// お問い合わせ
$(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/2/d/e/1FAIpQLSfdsUc-D4JtGdoHlZD0tVYELZMY-jtTRn2lEi00pa1-PkVn-Q/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            $(".end-message").slideDown();
            $(".submit-btn").fadeOut();
            //window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });