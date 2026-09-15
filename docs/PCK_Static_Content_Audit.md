# 팍스크리스티코리아 정적 홈페이지 콘텐츠 정리
## 서버 없는 완전 정적 페이지 구조

---

## 📋 전체 페이지 맵 (15개 정적 페이지)

### 🔵 PCK소개 (3개)
1. **홈** (`/index.html`) - 메인 페이지
2. **PCK는** (`/about/introduction.html`) - 단체 소개
3. **창립선언문** (`/about/founding-declaration.html`) - 단체 철학

### 🟢 PCK활동 (3개)
4. **사명선언** (`/programs/mission.html`) - 미션/비전
5. **사업** (`/programs/programs.html`) - 프로그램 소개
6. **활동내역** (`/programs/activities.html`) - 연도별 타임라인 (정적)

### 🟡 PCK뉴스 (6개)
7. **공지사항** (`/news/announcements.html`) - 공지 목록 (정적 블로그)
8. **공지사항 상세** (`/news/announcements/2024-11-26.html`) - 개별 글
9. **자료실** (`/news/resources.html`) - 카테고리별 다운로드
10. **뉴스레터** (`/news/newsletter.html`) - 뉴스레터 아카이브
11. **언론보도** (`/news/press.html`) - 언론 기사 목록
12. **갤러리** (`/news/gallery.html`) - 이미지 갤러리

### 🔴 기타 (3개)
13. **오시는 길** (`/contact/location.html`) - 약도
14. **후원안내** (`/support/donation.html`) - 기부 안내
15. **연혁** (`/about/history.html`) - 타임라인

### 🌐 English (2개)
16. **Introduction** (`/en/introduction.html`) - 영문 소개
17. **PaxChristi International** (`/en/international.html`) - 국제기구 소개

---

## 🎨 디자인 시스템

### 색상 팔레트
```css
/* Primary */
--primary-blue: #2563EB;
--primary-green: #10B981;

/* Neutral */
--white: #FFFFFF;
--bg-light: #F9FAFB;
--bg-section: #E8F0F5;
--text-primary: #333333;
--text-secondary: #666666;
--border: #D1D5DB;
--border-dark: #000000;

/* Semantic */
--accent-blue: #5BA3D0;
--table-header: #556B7F;
--success: #10B981;
--warning: #F59E0B;
```

### 타이포그래피
```
H1: 32px, 700, 중앙정렬
H2: 24px, 600
H3: 18px, 600, 파란색
Body: 15px, 400, 행간 1.6
Small: 13px, 400
```

### 간격 시스템
```
Max-width: 1100px
Section padding: 32-48px
Column gap: 24px
Row gap: 24px
```

---

## 📄 페이지별 상세 구조

### 1️⃣ 홈 (메인 페이지)

**경로:** `/index.html`

#### Section 1: Hero
```
배경: 연한 파란색 (#E8F0F5)
높이: 300px
제목: "정의에 기반을 둔 평화"
부제: "팍스크리스티코리아와 함께합니다"
CTA 버튼: "활동 보기", "후원하기"
```

#### Section 2: 3개 카드 (소개)
```
카드 1: PCK란?
  아이콘: 책
  내용: "팍스크리스티코리아는..."
  링크: /about/introduction.html

카드 2: 활동
  아이콘: 사람
  내용: "평화운동을 펼치고 있습니다"
  링크: /programs/activities.html

카드 3: 후원
  아이콘: 하트
  내용: "우리의 활동을 지원해주세요"
  링크: /support/donation.html
```

#### Section 3: 최신 소식
```
제목: "최신 소식"
공지사항: 3개 최신 항목
  - 2024.11.26 공지1
  - 2024.11.10 공지2
  - 2024.10.30 공지3
링크: /news/announcements.html (전체보기)
```

#### Section 4: 갤러리 미리보기
```
제목: "활동 풍경"
이미지: 3-4개 썸네일
링크: /news/gallery.html
```

---

### 2️⃣ PCK는 (단체 소개)

**경로:** `/about/introduction.html`

#### Section 1: Hero
```
배경: #E8F0F5
제목: "팍스크리스티코리아(Pax Christi Korea)는..."
```

#### Section 2: 6개 카드 (2x3 그리드)
```
카드들: 정의진환 / 평화구축 / 교육 / 비폭력 / 협력 / 옹호활동
각 카드: 제목 + 설명 텍스트 (100-150자)
```

#### Section 3: 본문
```
PCK가 추구하는 평화의 정의
- 3개 단락
- 약 400자
```

---

### 3️⃣ 사명선언

**경로:** `/programs/mission.html`

#### 3개 섹션
```
1. 비전 (좌측 제목, 우측 내용)
2. 사명 (큰 본문)
3. 여섯 가지 영역 (리스트 형식)
```

---

### 4️⃣ 사업

**경로:** `/programs/programs.html`

#### Section 1: 4개 아이콘 카드
```
정기적 활동 / 자발적 활동 / 문과위원회 / 특별 활동
각 카드: 아이콘 + 제목
```

#### Section 2: 섹션들
```
- 정기적 활동 설명
- 문과위원회 소개
```

#### Section 3: 테이블 (정적)
```
컬럼: 교육 | 홍보 | 대외협력 | 국제협력 | 청년
행: 5개 (스크롤 없음)
```

---

### 5️⃣ 활동내역 (📌 정적 페이지로 재설계)

**경로:** `/programs/activities.html`

#### 🆕 구조: 연도별 타임라인

```html
<section id="2024">
  <h2>2024년 활동 (3건)</h2>
  <ul class="timeline">
    <li class="event">
      <span class="date">2024.11.26</span>
      <h3>활동명 1</h3>
      <p>간단한 설명</p>
      <a href="/activities/2024-11-26">자세히 보기</a>
    </li>
    <li class="event">
      <span class="date">2024.11.10</span>
      <h3>활동명 2</h3>
      <p>간단한 설명</p>
    </li>
  </ul>
</section>

<section id="2023">
  <h2>2023년 활동 (8건)</h2>
  <ul class="timeline">
    <!-- 2023 항목들 -->
  </ul>
</section>
```

#### 데이터 구조 (JSON)
```json
{
  "activities": [
    {
      "date": "2024-11-26",
      "year": 2024,
      "title": "활동명",
      "description": "간단한 설명",
      "category": "행정"
    }
  ]
}
```

---

### 6️⃣ 공지사항 (📌 정적 블로그 형식)

**경로:** `/news/announcements.html`

#### 목록 페이지
```
<h1>공지사항</h1>

<ul class="announcement-list">
  <li>
    <time>2024-11-26</time>
    <h3><a href="/news/announcements/2024-11-26.html">
      공지 제목 1
    </a></h3>
    <p>요약 텍스트...</p>
  </li>
  <li>
    <time>2024-11-10</time>
    <h3><a href="/news/announcements/2024-11-10.html">
      공지 제목 2
    </a></h3>
  </li>
</ul>

<!-- 연도별 아카이브 -->
<aside class="archives">
  <h3>연도별 보관</h3>
  <ul>
    <li><a href="#2024">2024년 (12건)</a></li>
    <li><a href="#2023">2023년 (18건)</a></li>
    <li><a href="#2022">2022년 (15건)</a></li>
  </ul>
</aside>
```

#### 개별 공지 페이지
**경로:** `/news/announcements/2024-11-26.html`

```html
<article>
  <h1>공지 제목</h1>
  <time>2024-11-26</time>
  
  <div class="content">
    <p>공지 본문...</p>
  </div>
  
  <!-- 이전/다음 네비게이션 -->
  <nav class="post-nav">
    <a href="/news/announcements/2024-11-10.html">← 이전</a>
    <a href="/news/announcements/2024-12-01.html">다음 →</a>
  </nav>
</article>
```

#### 데이터 구조 (JSON)
```json
{
  "announcements": [
    {
      "id": "2024-11-26",
      "date": "2024-11-26",
      "year": 2024,
      "month": 11,
      "title": "공지 제목",
      "excerpt": "요약 텍스트",
      "content": "전체 본문 내용",
      "url": "/news/announcements/2024-11-26.html"
    }
  ]
}
```

---

### 7️⃣ 자료실 (📌 카테고리별 정적)

**경로:** `/news/resources.html`

#### 구조: 카테고리별 다운로드

```html
<h1>자료실</h1>

<section class="category">
  <h2>📁 설립 관련 자료</h2>
  <ul class="file-list">
    <li>
      <span class="file-icon">📄</span>
      <a href="/files/founding-declaration.pdf" download>
        창립선언문.pdf
      </a>
      <span class="meta">2019년 8월, 150KB</span>
    </li>
    <li>
      <span class="file-icon">📄</span>
      <a href="/files/founding-doctrine.pdf" download>
        정팀선언문.pdf
      </a>
      <span class="meta">2019년 8월, 89KB</span>
    </li>
  </ul>
</section>

<section class="category">
  <h2>📁 학습 자료</h2>
  <ul class="file-list">
    <li>...</li>
  </ul>
</section>

<section class="category">
  <h2>📁 회의 기록</h2>
  <ul class="file-list">
    <li>...</li>
  </ul>
</section>
```

#### 데이터 구조 (JSON)
```json
{
  "resources": [
    {
      "category": "설립 관련",
      "files": [
        {
          "id": "founding-decl",
          "name": "창립선언문",
          "file": "/files/founding-declaration.pdf",
          "size": "150KB",
          "date": "2019-08-24"
        }
      ]
    }
  ]
}
```

---

### 8️⃣ 뉴스레터 (📌 아카이브)

**경로:** `/news/newsletter.html`

#### 구조: 월별 아카이브

```html
<h1>뉴스레터</h1>

<section class="subscription">
  <h2>구독 신청</h2>
  <form>
    <input type="email" placeholder="이메일 주소" required>
    <button type="submit">구독 신청</button>
  </form>
  <p>PCK의 소식을 정기적으로 받아보세요</p>
</section>

<section class="archives">
  <h2>뉴스레터 아카이브</h2>
  
  <div class="month">
    <h3>2024년 11월호</h3>
    <ul>
      <li><a href="/files/newsletter-2024-11.pdf">2024년 11월호 다운로드</a> (PDF, 2.5MB)</li>
      <li>발행일: 2024-11-30</li>
    </ul>
  </div>
  
  <div class="month">
    <h3>2024년 10월호</h3>
    <ul>
      <li><a href="/files/newsletter-2024-10.pdf">2024년 10월호 다운로드</a> (PDF, 2.3MB)</li>
    </ul>
  </div>
  
  <!-- 이전 호들 -->
</section>
```

#### 데이터 구조 (JSON)
```json
{
  "newsletter": {
    "subscription": {
      "formUrl": "https://formspree.io/f/YOUR_FORM_ID",
      "description": "PCK의 소식을 정기적으로..."
    },
    "archives": [
      {
        "year": 2024,
        "month": 11,
        "title": "2024년 11월호",
        "file": "/files/newsletter-2024-11.pdf",
        "size": "2.5MB",
        "date": "2024-11-30"
      }
    ]
  }
}
```

---

### 9️⃣ 언론보도 (📌 정적 목록)

**경로:** `/news/press.html`

```html
<h1>언론 보도</h1>

<ul class="press-list">
  <li>
    <time>2024-11-20</time>
    <h3><a href="https://..." target="_blank">
      "팍스크리스티, 평화운동 펼친다"
    </a></h3>
    <p class="source">가톨릭신문</p>
  </li>
  <li>
    <time>2024-10-15</time>
    <h3><a href="https://..." target="_blank">
      "한반도 평화를 위해"
    </a></h3>
    <p class="source">종교신문</p>
  </li>
</ul>
```

---

### 🔟 갤러리

**경로:** `/news/gallery.html`

```html
<h1>갤러리</h1>

<div class="image-grid">
  <figure>
    <img src="/images/gallery-001.jpg" alt="활동 사진 1">
    <figcaption>2024년 평화행진</figcaption>
  </figure>
  
  <figure>
    <img src="/images/gallery-002.jpg" alt="활동 사진 2">
    <figcaption>정기총회 모습</figcaption>
  </figure>
  
  <!-- 추가 이미지 -->
</div>
```

---

### 1️⃣1️⃣ 후원안내

**경로:** `/support/donation.html`

#### 구조: 정적 정보 페이지
```
1. 단체 소개 3개 섹션
2. 5개 가치 카드
3. 후원 방법 안내 (이미지 + 텍스트)
4. 연락처 정보
```

---

### 1️⃣2️⃣ 오시는 길

**경로:** `/contact/location.html`

```html
<h1>오시는 길</h1>

<div class="map-container">
  <iframe src="https://www.google.com/maps/embed?..." 
    width="100%" height="500" frameborder="0"></iframe>
</div>

<div class="contact-info">
  <h2>주소</h2>
  <p>서울시 마포구 토정로 2길 33, 국제가톨릭협회 210호</p>
  
  <h2>전화</h2>
  <p><a href="tel:01096892027">010-9689-2027</a></p>
  
  <h2>이메일</h2>
  <p><a href="mailto:paxchristikorea@gmail.com">
    paxchristikorea@gmail.com
  </a></p>
</div>
```

---

### 1️⃣3️⃣ 창립선언문

**경로:** `/about/founding-declaration.html`

```
배경 이미지 + 선언문 전문 + 서명자 목록
```

---

### 1️⃣4️⃣ 연혁

**경로:** `/about/history.html`

#### 구조: 타임라인
```
2024-현재
  ├── 3기 집행부 출범

2022
  └── [항목]

2019
  ├── 01.07 팍스크리스티코리아 창립 제안
  ├── 02.16 정팀법협 1차 모임
  └── 03.19 창립총회
```

---

## 📁 폴더 구조 (추천)

```
paxchristikorea-static/
├── index.html                          (홈)
├── css/
│   ├── style.css                       (메인 스타일)
│   └── variables.css                   (색상/타이포)
├── js/
│   └── script.js                       (최소한의 JS - 네비 등)
├── images/
│   ├── logo.svg
│   ├── gallery/
│   └── backgrounds/
├── files/
│   ├── founding-declaration.pdf
│   ├── newsletter-*.pdf
│   └── resources/
├── data/
│   ├── activities.json                 (정적 데이터)
│   ├── announcements.json
│   ├── resources.json
│   ├── newsletter.json
│   └── press.json
├── about/
│   ├── introduction.html
│   ├── founding-declaration.html
│   └── history.html
├── programs/
│   ├── mission.html
│   ├── programs.html
│   └── activities.html
├── news/
│   ├── announcements.html
│   ├── announcements/                  (개별 공지 폴더)
│   │   ├── 2024-11-26.html
│   │   ├── 2024-11-10.html
│   │   └── ...
│   ├── resources.html
│   ├── newsletter.html
│   ├── press.html
│   └── gallery.html
├── support/
│   └── donation.html
├── contact/
│   └── location.html
├── en/
│   ├── introduction.html
│   └── international.html
└── README.md
```

---

## 🔑 정적 페이지 장점

✅ **서버 불필요** - 정적 호스팅만으로 충분
✅ **매우 빠름** - CDN으로 글로벌 배포 가능
✅ **보안** - 서버 해킹 위험 없음
✅ **유지보수 간단** - 파일만 수정하면 됨
✅ **비용 저렴** - Netlify/Vercel 무료 호스팅
✅ **SEO 최적화** - 정적 HTML이 검색에 유리

---

## 📊 데이터 JSON 파일 (구조)

### activities.json
```json
{
  "activities": [
    {
      "date": "2024-11-26",
      "year": 2024,
      "month": 11,
      "title": "활동명",
      "description": "간단한 설명",
      "category": "행정",
      "url": "/activities/2024-11-26.html"
    }
  ]
}
```

### announcements.json
```json
{
  "announcements": [
    {
      "id": "2024-11-26",
      "date": "2024-11-26",
      "year": 2024,
      "title": "공지 제목",
      "excerpt": "요약",
      "url": "/news/announcements/2024-11-26.html"
    }
  ]
}
```

### resources.json
```json
{
  "categories": [
    {
      "name": "설립 관련",
      "files": [
        {
          "name": "창립선언문",
          "file": "/files/founding-declaration.pdf",
          "size": "150KB",
          "date": "2019-08-24"
        }
      ]
    }
  ]
}
```

---

## 🚀 배포 옵션

### Netlify (추천)
```bash
# 1. GitHub에 푸시
git push origin main

# 2. Netlify 연동 (자동 배포)
# 설정: Publish directory = . (루트)
```

### GitHub Pages
```bash
# 1. main 브랜치에 푸시
git push origin main

# 2. Settings > Pages에서 Source = main branch 선택
```

### Vercel
```bash
# vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

---

## 💾 Vibe 코딩 팁 (정적 페이지)

### 1. 반복되는 HTML (Header, Footer)
각 페이지의 헤더/푸터가 같으면 **include 패턴** 사용:
```html
<!-- 모든 페이지 상단 -->
<link rel="stylesheet" href="/css/style.css">
<link rel="stylesheet" href="/css/variables.css">
```

### 2. 활동/공지 리스트 생성
JSON 데이터에서 자동으로 리스트 생성:
```javascript
// /js/generate-lists.js
fetch('/data/activities.json')
  .then(r => r.json())
  .then(data => {
    const html = data.activities
      .map(a => `<li>${a.date} - ${a.title}</li>`)
      .join('');
    document.getElementById('activities').innerHTML = html;
  });
```

### 3. 공지사항 페이지 자동 생성
빌드 시에 JSON에서 HTML 페이지 생성:
```javascript
// build.js (Node.js)
const announcements = require('./data/announcements.json').announcements;

announcements.forEach(post => {
  const html = `
    <article>
      <h1>${post.title}</h1>
      <time>${post.date}</time>
      <div>${post.content}</div>
    </article>
  `;
  fs.writeFileSync(`news/announcements/${post.id}.html`, html);
});
```

---

## ✅ 구현 체크리스트

### Phase 1: 기본 구조
- [ ] 폴더 구조 생성
- [ ] 기본 CSS (색상, 폰트, 레이아웃)
- [ ] Header/Footer 컴포넌트
- [ ] 네비게이션

### Phase 2: 핵심 페이지
- [ ] 홈 페이지
- [ ] PCK는
- [ ] 사명선언
- [ ] 후원안내

### Phase 3: 콘텐츠 페이지
- [ ] 활동내역 (타임라인)
- [ ] 공지사항 (리스트 + 개별 페이지)
- [ ] 자료실
- [ ] 갤러리

### Phase 4: 추가 페이지
- [ ] 뉴스레터
- [ ] 언론보도
- [ ] 오시는 길
- [ ] 연혁

### Phase 5: 배포
- [ ] GitHub 저장소 생성
- [ ] Netlify/Vercel 연동
- [ ] 도메인 연결
- [ ] 성능 최적화

---

**이제 Vibe 코딩을 시작할 준비가 되었습니다!** 🚀
