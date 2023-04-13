// テスト実装
//$(function(){
//  $(".test").on("click", function(){
//    //ここに処理の中身を書く
//    alert("クリックされたよ！");
//  });
//});
//
// ------------------------------- //

// ハンバーガー
$(".openbtn8").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
  $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});


$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn8").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});


// スライドショー
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 3,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    centerMode: true,//要素を中央ぞろえにする
    variableWidth: true,//幅の違う画像の高さを揃えて表示
    dots: true,//下部ドットナビゲーションの表示
  });



  // モーダルウィンドウ
  //初回のみモーダルをすぐ出す判定。flagがモーダル表示のstart_open後に代入される
  var access = $.cookie('access')
  if(!access){
    flag = true;
    $.cookie('access', false);
  }else{
    flag = false  
  }
  
  //モーダル表示
  $(".modal-open").modaal({
  start_open:flag, // ページロード時に表示するか
  overlay_close:true,//モーダル背景クリック時に閉じるか
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
  });