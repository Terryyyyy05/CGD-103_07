$(function () {
  /* 偵測卷軸 */
  let oth = $(window).innerHeight();
  $(window).scroll(function () {
    let sct = $(this).scrollTop();
    let all = sct + oth;

    /* openC-橫移 */
    $(".j-openC").each(function () {
      let sld = $(this).offset().top;
      if (all > sld) {
        $(this).addClass("j-open-activeC");

        $(`.product-list-row`).addClass("j-open-activeC");
      } else {
        $(this).removeClass("j-open-activeC");
      }
    });
  });
  /* product-title-card */
  $(`.product-title-card`)
    .hover(
      function (e) {
        $(`.product-title-card`)
          .not(this)
          .removeClass("product-title-card_hover");
        $(this)
          .addClass("product-title-card_hover")
          .click(function () {
            $(this).addClass("t-click");

            $(`.product-title-card`).not(this).removeClass("t-click");

            console.log(e.target.id);
          });
      },
      function () {
        $(`.product-title-card`).removeClass("product-title-card_hover");
        if ($(".product-title-card").is(".t-click")) {
          $(`.t-click`).addClass("product-title-card_hover");
        }
      }
    )
    .click(function (e) {
      if (e.target.id == "fresh-card") {
        $(`.card-img`).addClass("moveTop");
      }

      if (e.target.id == "s-fresh-card") {
        $(`.card-img`).removeClass("moveTop");
      }
      $(this).addClass("product-title-card_hover");
    });

  /* product-item-content */
  $(`.product-item-content`)
    .hover(
      function () {
        $(this).addClass("product-item-content_hover");
      },
      function () {
        $(this).removeClass("product-item-content_hover");
      }
    )
    .click(function () {
      $(this).addClass("testA");

      $(".modal").addClass("product-item-content_click");

      $("main").addClass("opacity");
    });

  $(`.close`).click(function () {
    $(".modal").removeClass("product-item-content_click");

    $("main").removeClass("opacity");
  });
});
