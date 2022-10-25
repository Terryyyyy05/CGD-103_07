$(function () {
  /* loading */
  /* stop-scroll */
  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  if ($(window).width() < 767) {
    // 當視窗寬度小於767px時執行
    /* loading */
    disableScroll();
    setTimeout(enableScroll, 6000);

    $("#preloader").delay(3500).fadeOut(3000);
    $("#preloader img")
      .delay(500)
      .animate(
        {
          top: "77px",
        },
        100
      )
      .css({
        transition: "3s .5s linear",
        transform: "rotate(360deg)",
      });
  } else {
    // 當視窗寬度不小於767px時執行
    /* loading */
    disableScroll();
    setTimeout(enableScroll, 6000);

    $("#preloader").delay(3500).fadeOut(3000);
    $("#preloader img")
      .delay(500)
      .animate(
        {
          top: "50px",
        },
        100
      )
      .css({
        transition: "3s .5s linear",
        transform: "rotate(360deg)",
      });

    /* 偵測卷軸 */
    let oth = $(window).innerHeight();
    $(window).scroll(function () {
      let sct = $(this).scrollTop();
      let all = sct + oth;
    });
    /* season-card */
    $(`.season-card`)
      .mouseover(function () {
        $(this).addClass("season-card_hover");
        $(`.season-card`)
          .not(this)
          .removeClass("season-card_hover season-card_click");
      })
      .click(function () {
        $(this).addClass("season-card_click");
        $(`.fish-name span:nth-child(1)`).each(function (i) {
          let fishList = ["鮪魚", "鯊魚", "鯉魚王", "暴鯉龍", "魚昕睿"];
          $(this).text(fishList[i]);
        });
      });

    /* fish-name */
    $(`.fish-name`)
      .hover(
        function () {
          $(this).addClass("fish-name_hover");
        },
        function () {
          $(this).removeClass("fish-name_hover");
        }
      )
      .click(function () {
        $(`.fish-pic img`).attr("src", "./public/img/fish-img/black-fish.jpg");
      });
  }

  /* box */
  $(`.box`).click(function () {
    $(location).prop("href", "./recipe.html");
  });
});
