$(function () {
  /* 偵測卷軸 */
  let oth = $(window).innerHeight();
  $(window).scroll(function () {
    let sct = $(this).scrollTop();
    let all = sct + oth;
  });

  /* tag-item */
  if ($(window).width() < 767) {
    // 當視窗寬度小於767px時執行
    $(`.tag-item`).click(function (e) {
      $(this).addClass("m-tag-item_click");
      $(`.tag-item`).not(this).removeClass("m-tag-item_click");

      if (e.target.textContent == "輕鬆空手參加") {
        console.log($(`.feature-text`).html());
        $(`.feature-text`).html(`
        <div>
          <p>我們提供設備租借</p>
          <br />
          <p>且為鼓勵初學者參與</p>
          <br />
          <p>首次參與海釣行程</p>
          <br />
          <p>可享免費租借設備乙次</p>
        </div>
        `);
      }

      if (e.target.textContent == "初學者友善") {
        console.log($(`.feature-text`).html());
        $(`.feature-text`).html(`
        <div>
          <p>經驗豐富的船長</p>
          <br />
          <p>將會細心引導及教學</p>
          <br />
          <p>第一次釣魚也可以放心享受</p>
        </div>
        `);
      }

      if (e.target.textContent == "魚貨免費處理") {
        console.log($(`.feature-text`).html());
        $(`.feature-text`).html(`
        <div>
          <p>現場協助清理魚鱗及內臟</p>
          <br />
          <p>魚貨打包回家可直接料理</p>
          <br />
          <p>港口周圍亦有合作餐廳</p>
          <br />
          <p>提供代客烹調服務</p>
        </div>
        `);
      }
    });
  } else {
    // 當視窗寬度不小於767px時執行
    $(`.tag-item`)
      .hover(
        function () {
          $(`.tag-item`).not(this).removeClass("tag-item_hover");
          $(this)
            .addClass("tag-item_hover")
            .click(function () {
              $(this).addClass("test");
              $(`.tag-item`).not(this).removeClass("test");
            });
        },
        function () {
          $(`.tag-item`).removeClass("tag-item_hover");
          if ($(`.tag-item`).is(".test")) {
            $(`.test`).addClass("tag-item_hover");
          }
        }
      )
      .click(function (e) {
        console.log(e.target.textContent == "輕鬆空手參加");
        if (e.target.textContent == "輕鬆空手參加") {
          console.log($(`.feature-text`).html());
          $(`.feature-text`).html(`
        <div>
          <p>我們提供設備租借</p>
          <br />
          <p>且為鼓勵初學者參與</p>
          <br />
          <p>首次參與海釣行程</p>
          <br />
          <p>可享免費租借設備乙次</p>
        </div>
        `);
        }

        if (e.target.textContent == "初學者友善") {
          console.log($(`.feature-text`).html());
          $(`.feature-text`).html(`
        <div>
          <p>經驗豐富的船長</p>
          <br />
          <p>將會細心引導及教學</p>
          <br />
          <p>第一次釣魚也可以放心享受</p>
        </div>
        `);
        }

        if (e.target.textContent == "魚貨免費處理") {
          console.log($(`.feature-text`).html());
          $(`.feature-text`).html(`
        <div>
          <p>現場協助清理魚鱗及內臟</p>
          <br />
          <p>魚貨打包回家可直接料理</p>
          <br />
          <p>港口周圍亦有合作餐廳</p>
          <br />
          <p>提供代客烹調服務</p>
        </div>
        `);
        }
      });
  }

  /* modal */
  $(`.have-time`).click(function () {
    $(".modal").addClass("product-item-content_click");

    $("main").addClass("opacity");
  });

  $(`.close`).click(function () {
    $(".modal").removeClass("product-item-content_click");

    $("main").removeClass("opacity");
  });
});
