/**
 * モーダルの開閉を制御する
 */
document.querySelectorAll('[data-modal-open]').forEach(elem => {
  // 開閉する対象の要素を取得する
  const targetModalId = elem.getAttribute('data-modal-open');
  const modal = document.getElementById('modal1');


  // 閉じる
  modal.querySelectorAll('[data-modal-close]').forEach(closeElem => {
    closeElem.addEventListener('click', function() {
      modal.classList.remove('is-open');
    });
  });


  // 開く
  elem.addEventListener('click', function () {
    modal.classList.add('is-open');
  });
});