$(function () {
  /* ======= */
  /* 淡入視口 */
  /* ======= */
  let oth = $(window).innerHeight();
  $(window).scroll(function () {
    let sct = $(this).scrollTop();
    let all = sct + oth;
    $(".slideInA").each(function () {
      let sld = $(this).offset().top;
      if (all > sld) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    $(".slideInB").each(function () {
      let sld = $(this).offset().top;
      if (all > sld) {
        $(this).addClass("activeB");
      } else {
        $(this).removeClass("activeB");
      }
    });

    /* open */
    $(".j-open").each(function () {
      $(this).slideDown();
      let sld = $(this).offset().top;
      if (all > sld) {
        $(this).addClass("j-open-active");
      } else {
        $(this).removeClass("j-open-active");
      }
    });

    /* openB */

    if ($(window).width() < 767) {
    } else {
      $(".j-openB").each(function () {
        $(this).slideDown();
        let sld = $(this).offset().top;
        if (all > sld) {
          $(this).addClass("j-open-activeB");
          $(`.fishing_line::before`).css({
            "z-index": -1,
          });
        } else {
          $(this).removeClass("j-open-activeB");
        }
      });
    }
  });

  /* mobile-href */
  $(`#m-product`).click(function () {
    $(location).prop("href", "./product.html");
  });
  $(`#m-fishing`).click(function () {
    $(location).prop("href", "./fishing.html");
  });
  $(`#m-recipe`).click(function () {
    $(location).prop("href", "./recipe.html");
  });
  $(`#m-index`).click(function () {
    $(location).prop("href", "./index.html");
  });
});
