(function () {
  const container = document.getElementById('newsletter-list');
  if (!container) return;

  fetch('../data/newsletters.json')
    .then((res) => {
      if (!res.ok) throw new Error('failed to load newsletters');
      return res.json();
    })
    .then((newsletters) => {
      if (!Array.isArray(newsletters) || newsletters.length === 0) {
        container.innerHTML = '<p class="text-center text-secondary">등록된 뉴스레터가 없습니다.</p>';
        return;
      }

      const sorted = [...newsletters].sort((a, b) => b.date.localeCompare(a.date));

      container.innerHTML = sorted
        .map((item) => {
          const href = item.pdf ? '../' + item.pdf : item.url;
          const linkLabel = item.pdf ? 'PDF 보기' : '뉴스레터 보기';
          const linkAttrs = 'target="_blank" rel="noopener"';

          if (item.cover) {
            const cover = '../' + item.cover;
            return `
              <div class="card newsletter-card">
                <a href="${href}" target="_blank" rel="noopener">
                  <img src="${cover}" alt="${item.title} 표지" class="newsletter-thumb">
                </a>
                <div class="newsletter-card-body">
                  <h3 class="card-title">${item.title}</h3>
                  <a class="newsletter-pdf-link" href="${href}" ${linkAttrs}>${linkLabel}</a>
                </div>
              </div>
            `;
          }

          return `
            <div class="card newsletter-card newsletter-card--text">
              <div class="newsletter-card-body">
                <h3 class="card-title">${item.title}</h3>
                <a class="newsletter-pdf-link" href="${href}" ${linkAttrs}>${linkLabel}</a>
              </div>
            </div>
          `;
        })
        .join('');
    })
    .catch(() => {
      container.innerHTML = '<p class="text-center text-secondary">뉴스레터 목록을 불러올 수 없습니다. 잠시 후 다시 시도해주세요.</p>';
    });
})();
