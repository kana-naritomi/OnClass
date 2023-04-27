/**
 * ギャラリーを初期化する
 *
 * @param {HTMLElement} root ギャラリー全体のルート要素
 */
function initGallery (root) {
  // サムネイル画像
  const thumbnails = root.querySelectorAll('[data-gallery-image]');

  // メイン画像のIDをサムネイルから取得
  const targetIds = Array.prototype.map.call(thumbnails, tn => {
    return "#" + tn.getAttribute('data-gallery-image');
  });

  // メイン画像
  const mainImages = root.querySelectorAll(targetIds.join(','));

  // サムネイルのクリックイベントハンドラ
  function onClickThumbnail () {
    // まずメイン画像をすべて隠す
    mainImages.forEach(image => image.classList.remove('active'));
    // 表示するメイン画像のIDを取得する
    const id = this.getAttribute('data-gallery-image');
    // 表示するメイン画像を取得する
    const target = document.getElementById(id);
    // 要素があったら表示する
    if (target) {
      target.classList.add('active');
    }
  }
  
  thumbnails.forEach(tn => {
    tn.addEventListener('click', onClickThumbnail);
  });
}

const elem = document.getElementById('myGallery');
initGallery(elem);