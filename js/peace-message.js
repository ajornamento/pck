(function () {
  const container = document.getElementById('message-content');
  const breadcrumb = document.getElementById('message-breadcrumb');
  if (!container) return;

  const id = new URLSearchParams(window.location.search).get('id');

  fetch('../data/peace-messages.json')
    .then((res) => {
      if (!res.ok) throw new Error('failed to load peace messages');
      return res.json();
    })
    .then((messages) => {
      const item = Array.isArray(messages) ? messages.find((m) => m.id === id) : null;

      if (!item) {
        container.innerHTML = '<p class="text-center text-secondary">해당 담화를 찾을 수 없습니다.</p>';
        return;
      }

      document.title = `${item.title} - 팍스크리스티코리아`;
      if (breadcrumb) {
        breadcrumb.innerHTML = `<a href="index.html">평화의 날 담화</a> / ${item.title}`;
      }

      const summaryHtml = item.summary
        ? `<p class="mb-16">${item.summary}</p>`
        : '<p class="text-center text-secondary">전문 요약을 준비 중입니다.</p>';

      const pdfHtml = item.pdf
        ? `<a class="newsletter-pdf-link" href="../${item.pdf}" target="_blank" rel="noopener">원문 PDF 보기</a>`
        : '';

      container.innerHTML = `
        <h2 class="section-title">${item.title}</h2>
        <p class="text-secondary mb-16">${item.pope} · ${item.year} · ${item.number} 세계 평화의 날 담화</p>
        ${summaryHtml}
        ${pdfHtml}
      `;
    })
    .catch(() => {
      container.innerHTML = '<p class="text-center text-secondary">담화 내용을 불러올 수 없습니다. 잠시 후 다시 시도해주세요.</p>';
    });
})();
