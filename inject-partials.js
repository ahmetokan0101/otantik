function injectPartial(selector, url, position = 'afterbegin') {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML(position, html);
    });
}

window.addEventListener('DOMContentLoaded', () => {
  injectPartial('header', 'partials/header.html', 'afterbegin');
  injectPartial('footer', 'partials/footer.html', 'beforeend');
}); 