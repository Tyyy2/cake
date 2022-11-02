var product_card_area = document.querySelector(".product-card-area");
var product_detail = document.querySelector(".product-detail-area");
var product_detail_close = document.querySelector(".product-detail-close");
var product_detail_opacity = document.querySelector(".product-detail-opacity");
var product_sheet = document.querySelectorAll(".product-series");

var product_detail_content = [
  {
    fafna2:
      "選用了台灣柑橘以及帶有花果香的法芙娜巧克力等食材，讓生巧克力塔吃起來清爽不沈重！搭配上層黑巧克力蛋奶醬，使巧克力口感更濃郁！",
    hazelnut:
      "使用了Corseglia 西西里100%榛果醬及巴瑞可可脆片製作內餡，香脆可口，帶有濃厚的榛果味，搭配榛果奶油餡和特製生巧克力餡，滑順不油膩",
    Tiramisu:
      "使用正統義式提拉米蘇製作手法，產生出綿密且柔順的口感，搭配卡魯瓦手指餅乾與消化餅，使咖啡的味道濃郁。",
    honeydrupe:
      "選用美國核桃、杏仁、蓁果以及夏威夷果製作而成的鮮奶油太妃醬，融合口感綿密的杏仁奶油餡與酥脆塔皮，每一口都吃的到滿滿的堅果香氣",
    redbeans:
      "嚴選萬丹紅豆與靜岡抹茶熬煮成抹茶紅豆餡最為基底，搭配中層白抹茶甘納許與上層抹茶卡士達醬，口感綿密，紅豆香氣濃郁",
    apple:
      "生乳酪蘋果蛋糕使用法國進口乳酪，搭配富士蘋果切成的蘋果丁，口感清爽、滑順",
    charlotte2:
      "嚴選美國加州綠葡萄與清爽荔枝庫里完美搭配 以馬達加斯加香草慕斯作為基底，滿滿的綠葡萄與香草氣息，襯托出清爽口感",
    lemon3:
      "嚴選屏東有機檸檬與法國愛樂薇奶油製作出的檸檬餡，再搭配軟綿義式蛋白霜與酥脆塔皮，酸甜度適中，檸檬香氣重！",
    grapelemon:
      "嚴選加州綠葡萄，搭配兩種不同口感乳酪(重乳酪、乳酪香緹)，再以奶油檸檬醬作為壓軸",
    blueberry:
      "以新鮮的美國藍莓製成果醬，搭配口感綿密的法國白乳酪，香氣濃郁，從果醬到乳酪餡全城皆是手工製成，絕不天加任何香料和添加物",
    saturdaylemon:
      "選用屏東有機檸檬呈現出天然檸檬香氣，加入法國發酵奶油一起烘烤，搭配檸檬皇家糖霜增加層次，口感清爽不乾燥",
    financier:
      "以發酵奶油製成的黃金焦香奶油與杏仁奶餡融合，將天然有機核果一起烘烤後，形成奶油香十足的法式費南雪蛋糕",
    madeleine:
      "選用屏東檸檬與龍眼蜂蜜作為口味基底，添加法國發酵奶油一起烘烤，形成清爽的瑪德蓮蛋糕體，口感鬆軟帶有淡淡的蜂蜜奶油香。",
    sesame:
      "以芝麻為基底製作而成的芝麻乳酪餡，搭配滑順豆漿慕斯，並以瑪士卡彭起司香緹以及杏仁糖烤脆餅裝飾，酥脆的口感加上濃郁的芝乳酪，是全家大小都適合的甜點！",
    cheesecake2:
      "濃郁的乳酪香氣，加上帶有焦香味的外殼、以及入口即化的內餡是巴斯克起司蛋糕的特色！",
    belgium:
      "!!本蛋糕有添加些許黑醋栗香甜酒!! <br> 嚴選 70.5 %比利時巧克力製成慕斯及卡士達醬，搭配鬆軟海綿蛋糕，內層以榛果巧克力脆片增加層次感，口感豐富。",
  },
];

if (screen.width < 430) {
  //--first product detail
  var product_card = document.querySelectorAll(".product-card");
  product_card.forEach((card) => {
    card.addEventListener("click", function show_detail() {
      product_detail.classList.toggle("block-display");
      product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
      var product_detail_close = document.querySelector(
        ".product-detail-close"
      );
      var product_detail_opacity = document.querySelector(
        ".product-detail-opacity"
      );

      product_detail_close.addEventListener("click", close_detail);
      product_detail_opacity.addEventListener("click", close_detail);
    });
  });

  //--End of first product detail

  //--product detail
  product_sheet.forEach((sheet) => {
    sheet.addEventListener("click", function () {
      //--product sheet color
      product_sheet.forEach((element) => {
        element.classList.remove("bg-pink");
      });
      sheet.classList.add("bg-pink");
      //--End of product sheet color

      //--product card change

      if (product_sheet[0].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/chocolate/hazelnut-phone.png" data-product="hazelnut" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>焦糖榛果生巧克力塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/chocolate/fafna2-phone.png" data-product="fafna2" alt="空產品"> 
                </div>
                <div class="product-name">
                    <h3>橙香法芙娜生巧塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");

        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            var product_detail = document.querySelector(".product-detail-area");
            product_detail.classList.toggle("block-display");

            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[1].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/nut/Tiramisu-phone.png" data-product="Tiramisu" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>提拉米蘇</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/nut/honeydrupe-phone.png" data-product="honeydrupe" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>橙蜂蜜太妃核果塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");

            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[2].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/matcha/redbeans-phone.png" data-product="redbeans" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>萬丹卡士達抹茶紅豆塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[3].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/furit/apple-phone.png" data-product="apple" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>生乳酪蘋果蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/charlotte2-phone.png" data-product="charlotte2" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>香草荔葡萄夏洛特</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/lemon3-phone.png" data-product="lemon3" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>義式奶油檸檬塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/grapelemon-phone.png" data-product="grapelemon" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>綠葡萄檸檬乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/blueberry-phone.png" data-product="blueberry" alt="空產品">
                    </div>
                <div class="product-name">
                    <h3>藍莓乳酪塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[4].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/saturdaylemon-phone.png" data-product="saturdaylemon" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>周末檸檬磅蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/financier-phone.png" data-product="financier" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>黃金果仁費南雪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/madeleine-phone.png" data-product="madeleine" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>蜂蜜檸檬瑪德蓮</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[5].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/sesame-phone.png" data-product="sesame" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>Sesame Sesame</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/cheesecake2-phone.png" data-product="cheesecake2" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>巴斯克乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/belgium-phone.png" data-product="belgium" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>比利時巧克力慕斯蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail-phone.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      }
      //--End of product card change
    });
  });
  //--End of product detail
} else {
  //--first product detail
  var product_card = document.querySelectorAll(".product-card");
  product_card.forEach((card) => {
    card.addEventListener("click", function show_detail() {
      product_detail.classList.toggle("block-display");
      product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
      var product_detail_close = document.querySelector(
        ".product-detail-close"
      );
      var product_detail_opacity = document.querySelector(
        ".product-detail-opacity"
      );

      product_detail_close.addEventListener("click", close_detail);
      product_detail_opacity.addEventListener("click", close_detail);
    });
  });

  //--End of first product detail

  //--product detail
  product_sheet.forEach((sheet) => {
    sheet.addEventListener("click", function () {
      //--product sheet color
      product_sheet.forEach((element) => {
        element.classList.remove("bg-pink");
      });
      sheet.classList.add("bg-pink");
      //--End of product sheet color

      //--product card change

      if (product_sheet[0].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/chocolate/hazelnut.png" data-product="hazelnut" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>焦糖榛果生巧克力塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/chocolate/fafna2.png" data-product="fafna2" alt="空產品"> 
                </div>
                <div class="product-name">
                    <h3>橙香法芙娜生巧塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");

        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            var product_detail = document.querySelector(".product-detail-area");
            product_detail.classList.toggle("block-display");

            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[1].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/nut/Tiramisu.png" data-product="Tiramisu" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>提拉米蘇</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/nut/honeydrupe.png" data-product="honeydrupe" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>橙蜂蜜太妃核果塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");

            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[2].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/matcha/redbeans.png" data-product="redbeans" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>萬丹卡士達抹茶紅豆塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[3].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                    <img src="./img/product/product_list/furit/apple.png" data-product="apple" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>生乳酪蘋果蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/charlotte2.png" data-product="charlotte2" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>香草荔葡萄夏洛特</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/lemon3.png" data-product="lemon3" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>義式奶油檸檬塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/grapelemon.png" data-product="grapelemon" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>綠葡萄檸檬乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/furit/blueberry.png" data-product="blueberry" alt="空產品">
                    </div>
                <div class="product-name">
                    <h3>藍莓乳酪塔</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[4].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/saturdaylemon.png" data-product="saturdaylemon" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>周末檸檬磅蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/financier.png" data-product="financier" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>黃金果仁費南雪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/normal_degree/madeleine.png" data-product="madeleine" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>蜂蜜檸檬瑪德蓮</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      } else if (product_sheet[5].classList.contains("bg-pink")) {
        product_card_area.innerHTML = `
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/sesame.png" data-product="sesame" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>Sesame Sesame</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/cheesecake2.png" data-product="cheesecake2" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>巴斯克乳酪</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                <img src="./img/product/product_list/belgium.png" data-product="belgium" alt="空產品">
                </div>
                <div class="product-name">
                    <h3>比利時巧克力慕斯蛋糕</h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>
                <div class="product-card">
                <div class="img-container">
                </div>
                <div class="product-name">
                    <h3></h3>
                </div>
                </div>

`;
        var product_card = document.querySelectorAll(".product-card");
        product_card.forEach((card) => {
          card.addEventListener("click", function show_detail() {
            product_detail.classList.toggle("block-display");
            product_detail.innerHTML = `
                    <div class="product-detail-opacity"></div>
                    <div class="product-detail-card-container">
                      <div class="product-detail-card">
                        <div class="product-detail-close"><i class="bi bi-x-lg"></i></div>
                        <div class="product-detail-img"><img src="./img/product/product_list/detail/${
                          card.querySelector(".img-container>img").dataset
                            .product
                        }-detail.png" alt=""></div>
                        <div class="product-detail-text">
                          <div class="product-detail-name">${
                            card.querySelector(".product-name>h3").innerText
                          }</div>
                          <div class="product-detail-content">${
                            product_detail_content[0][
                              `${
                                card.querySelector(".img-container>img").dataset
                                  .product
                              }`
                            ]
                          }</div>
                        </div>
                    `;
            var product_detail_close = document.querySelector(
              ".product-detail-close"
            );
            var product_detail_opacity = document.querySelector(
              ".product-detail-opacity"
            );

            product_detail_close.addEventListener("click", close_detail);
            product_detail_opacity.addEventListener("click", close_detail);
          });
        });
      }
      //--End of product card change
    });
  });
  //--End of product detail
}

//--function
function close_detail() {
  product_detail.classList.toggle("block-display");
}

//--End of function
