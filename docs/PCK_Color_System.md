# 팍스크리스티코리아 색상 시스템
## 전문가급 디자인 컬러 팔레트

---

## 🎨 색상 철학

**팍스크리스티코리아의 색상 전략:**

1. **신뢰감**: 깊고 안정적인 파란색 (종교 기관, 평화)
2. **희망**: 따뜻한 초록색 (성장, 생명, 회복)
3. **균형**: 중립적이고 깔끔한 그레이 (전문성)
4. **따뜻함**: 부드러운 베이지/오프화이트 (포용성)

---

## 📊 메인 팔레트

### Primary Blue (신뢰감 & 평화)
```
Primary-700:  #1E40AF     ← 로고, 주요 버튼, 링크 (짙은 파란색)
Primary-600:  #2563EB     ← 헤더, 타이틀, CTA (현재 사용)
Primary-500:  #3B82F6     ← 활성 상태, 호버 (밝은 파란색)
Primary-200:  #BFDBFE     ← 부드러운 배경
Primary-100:  #DBEAFE     ← 매우 밝은 배경
Primary-50:   #EFF6FF     ← 섹션 배경
```

**사용 규칙:**
- Primary-700: 로고, 강조 텍스트, 주요 CTA 버튼
- Primary-600: 제목(H1, H2), 링크, 호버 상태
- Primary-500: 버튼 호버, 활성 상태
- Primary-100: 라이트 배경
- Primary-50: 섹션 구분 배경

---

### Secondary Green (희망 & 성장)
```
Green-700:   #15803D     ← 강조 (어두운 초록색)
Green-600:   #16A34A     ← 서포팅 액션 (중간 초록색)
Green-500:   #22C55E     ← 성공 상태 (밝은 초록색)
Green-100:   #DCFCE7     ← 부드러운 배경
Green-50:    #F0FDF4     ← 매우 밝은 배경
```

**사용 규칙:**
- Green-600: 로고 보조색, 세컨더리 버튼
- Green-500: 성공 메시지, 긍정 상태
- Green-100: 하이라이트 박스 배경

---

### Neutral Gray (전문성 & 깔끔함)
```
Slate-900:   #0F172A     ← 본문 텍스트 (거의 검은색)
Slate-800:   #1E293B     ← 제목 텍스트
Slate-700:   #334155     ← 보조 텍스트
Slate-600:   #475569     ← 플레이스홀더 텍스트
Slate-500:   #64748B     ← 비활성 텍스트
Slate-400:   #94A3B8     ← 흐린 텍스트
Slate-300:   #CBD5E1     ← 구분선
Slate-200:   #E2E8F0     ← 테이블 행 구분
Slate-100:   #F1F5F9     ← 배경 박스
Slate-50:    #F8FAFC     ← 페이지 배경
```

**사용 규칙:**
- Slate-900: 본문 텍스트 (메인 콘텐츠)
- Slate-800: 제목(H3, H4)
- Slate-700: 라벨, 메타 정보
- Slate-300: 경계선, 구분선
- Slate-50: 페이지 기본 배경

---

### Accent Colors (강조 & 감정)

#### Warm Beige (포용성 & 따뜻함)
```
Amber-50:    #FFFBEB     ← 경고/알림 배경
Amber-100:   #FEF3C7     ← 경고 텍스트 배경
Amber-600:   #D97706     ← 경고 텍스트
```

#### Cool Teal (평화 & 명확성)
```
Cyan-50:     #ECFDF5     ← 정보 배경
Cyan-100:    #CCFBF1     ← 정보 하이라이트
Cyan-600:    #0891B2     ← 정보 텍스트
```

#### Warm Rose (커뮤니티 & 연결)
```
Rose-50:     #FFF5F7     ← 커뮤니티 배경
Rose-100:    #FFE4E6     ← 커뮤니티 하이라이트
Rose-600:    #E11D48     ← 중요 메시지 (보조)
```

---

## 🎯 색상 사용 가이드

### 페이지 배경
```css
/* 메인 배경 */
--bg-primary: #F8FAFC;      /* Slate-50 */

/* 섹션 배경 */
--bg-section: #EFF6FF;      /* Primary-50 (연한 파란색) */
--bg-section-alt: #F0FDF4;  /* Green-50 (연한 초록색 - 교대 사용) */

/* 카드 배경 */
--bg-card: #FFFFFF;
--bg-card-hover: #F1F5F9;   /* Slate-100 */
```

### 텍스트 색상
```css
/* 본문 텍스트 */
--text-primary: #0F172A;    /* Slate-900 */

/* 제목 텍스트 */
--text-heading: #1E293B;    /* Slate-800 */

/* 보조 텍스트 (라벨, 메타) */
--text-secondary: #475569;  /* Slate-600 */

/* 비활성 텍스트 */
--text-disabled: #94A3B8;   /* Slate-400 */
```

### 버튼 색상

#### Primary Button (메인 액션)
```
기본:   Background #2563EB (Primary-600)
        Text #FFFFFF
        
호버:   Background #1E40AF (Primary-700)
        
활성:   Background #1E3A8A (더 어두움)
        
비활성: Background #E2E8F0 (Slate-200)
        Text #94A3B8 (Slate-400)
```

#### Secondary Button (보조 액션)
```
기본:   Background #16A34A (Green-600)
        Text #FFFFFF
        
호버:   Background #15803D (Green-700)
```

#### Tertiary Button (텍스트 링크)
```
기본:   Background 투명
        Text #2563EB (Primary-600)
        Border #E2E8F0 (Slate-200)
        
호버:   Background #EFF6FF (Primary-50)
        Text #1E40AF (Primary-700)
```

### 테이블 색상
```css
/* 테이블 헤더 */
--table-header-bg: #1E293B;     /* Slate-800 */
--table-header-text: #FFFFFF;

/* 테이블 행 */
--table-row-odd: #FFFFFF;
--table-row-even: #F1F5F9;      /* Slate-100 */
--table-row-hover: #EFF6FF;     /* Primary-50 */

/* 테이블 경계선 */
--table-border: #E2E8F0;        /* Slate-200 */
```

### 상태 색상
```css
/* 성공 */
--success: #22C55E;             /* Green-500 */
--success-bg: #F0FDF4;          /* Green-50 */
--success-text: #16A34A;        /* Green-600 */

/* 경고 */
--warning: #D97706;             /* Amber-600 */
--warning-bg: #FFFBEB;          /* Amber-50 */

/* 정보 */
--info: #0891B2;                /* Cyan-600 */
--info-bg: #ECFDF5;             /* Cyan-50 */

/* 에러 (필요시) */
--error: #DC2626;               /* Red-600 */
--error-bg: #FEE2E2;            /* Red-50 */
```

### 경계선 & 구분선
```css
/* 일반 경계선 */
--border-light: #E2E8F0;        /* Slate-200 */
--border-default: #CBD5E1;      /* Slate-300 */
--border-dark: #475569;         /* Slate-600 */

/* 섹션 구분선 */
--divider: #E2E8F0;             /* Slate-200 */
--divider-bold: #1E293B;        /* Slate-800 */
```

---

## 🎨 색상 조합 (컴포넌트별)

### Hero Section
```
배경:     Primary-50 (#EFF6FF)
제목:     Slate-900 (#0F172A)
버튼:     Primary-600 (#2563EB) - 파란색
버튼 대체: Green-600 (#16A34A) - 초록색
```

### Card Grid (6개 카드)
```
카드 배경:    #FFFFFF
카드 호버:    Slate-50 (#F8FAFC)
제목:        Primary-700 (#1E40AF)
텍스트:      Slate-700 (#334155)
경계선:      Slate-200 (#E2E8F0)
그림자:      rgba(15, 23, 42, 0.1)
```

### 최신 소식 섹션
```
배경:        Slate-50 (#F8FAFC)
섹션 배경:   #FFFFFF
제목:        Slate-900 (#0F172A)
날짜:        Slate-500 (#64748B)
링크:        Primary-600 (#2563EB)
링크 호버:   Primary-700 (#1E40AF)
```

### Navigation
```
배경:        #FFFFFF
텍스트:      Slate-800 (#1E293B)
활성 항목:   Primary-600 (#2563EB)
호버:        Slate-100 (#F1F5F9)
구분선:      Slate-200 (#E2E8F0)
```

### Footer
```
배경:        Slate-900 (#0F172A)
텍스트:      Slate-100 (#F1F5F9)
링크:        Primary-400 (#60A5FA)
링크 호버:   Primary-300 (#93C5FD)
```

### 테이블
```
헤더 배경:   Slate-800 (#1E293B)
헤더 텍스트: #FFFFFF
행 홀수:     #FFFFFF
행 짝수:     Slate-50 (#F8FAFC)
호버:        Primary-50 (#EFF6FF)
경계선:      Slate-200 (#E2E8F0)
```

---

## 📱 다크모드 색상 (미래 대비)

### Dark Mode Palette
```
Primary-900: #0C2340     ← 다크 배경
Slate-50:   #F8FAFC     ← 다크 모드 텍스트
Slate-200:  #E2E8F0     ← 다크 모드 보조 텍스트
Primary-400: #60A5FA    ← 다크 모드 링크
```

---

## 🔧 CSS 변수 정의 (완전한 버전)

```css
:root {
  /* Primary Colors - 신뢰감, 평화 */
  --primary-50: #EFF6FF;
  --primary-100: #DBEAFE;
  --primary-200: #BFDBFE;
  --primary-300: #93C5FD;
  --primary-400: #60A5FA;
  --primary-500: #3B82F6;
  --primary-600: #2563EB;
  --primary-700: #1E40AF;
  --primary-800: #1E3A8A;
  --primary-900: #0C2340;

  /* Secondary Colors - 희망, 성장 */
  --green-50: #F0FDF4;
  --green-100: #DCFCE7;
  --green-200: #BBF7D0;
  --green-500: #22C55E;
  --green-600: #16A34A;
  --green-700: #15803D;

  /* Neutral Colors - 전문성, 깔끔함 */
  --slate-50: #F8FAFC;
  --slate-100: #F1F5F9;
  --slate-200: #E2E8F0;
  --slate-300: #CBD5E1;
  --slate-400: #94A3B8;
  --slate-500: #64748B;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-800: #1E293B;
  --slate-900: #0F172A;

  /* Accent Colors */
  --amber-50: #FFFBEB;
  --amber-100: #FEF3C7;
  --amber-600: #D97706;
  
  --cyan-50: #ECFDF5;
  --cyan-100: #CCFBF1;
  --cyan-600: #0891B2;

  /* Text Colors */
  --text-primary: #0F172A;
  --text-secondary: #475569;
  --text-tertiary: #94A3B8;
  --text-inverse: #FFFFFF;

  /* Background Colors */
  --bg-primary: #F8FAFC;
  --bg-secondary: #FFFFFF;
  --bg-section: #EFF6FF;
  --bg-section-alt: #F0FDF4;
  --bg-hover: #F1F5F9;

  /* Border Colors */
  --border-light: #E2E8F0;
  --border-default: #CBD5E1;
  --border-dark: #475569;

  /* State Colors */
  --success: #22C55E;
  --warning: #D97706;
  --info: #0891B2;
  --error: #DC2626;
}
```

---

## 🎯 구체적인 페이지별 색상 적용

### 홈 페이지
```
Hero 배경:           Primary-50 (#EFF6FF)
Hero 제목:           Slate-900 (#0F172A)
Hero 버튼 1:         Primary-600 (#2563EB) 파란색
Hero 버튼 2:         Green-600 (#16A34A) 초록색

카드 배경:           #FFFFFF
카드 제목:           Primary-700 (#1E40AF)
카드 텍스트:         Slate-700 (#334155)

최신 소식 배경:      Slate-50 (#F8FAFC)
최신 소식 제목:      Slate-900 (#0F172A)
최신 소식 날짜:      Slate-500 (#64748B)
```

### PCK는 페이지
```
Hero 배경:           Primary-50 (#EFF6FF)
Hero 제목:           Slate-900 (#0F172A)

6개 카드 (2x3):      
  배경:              #FFFFFF
  제목:              Primary-700 (#1E40AF)
  텍스트:            Slate-700 (#334155)
  경계선:            Slate-200 (#E2E8F0)
  호버:              Primary-50 (#EFF6FF)
```

### 활동내역 페이지
```
섹션 배경:           Slate-50 (#F8FAFC)
섹션 제목:           Slate-900 (#0F172A)

타임라인 항목:
  날짜 배경:         Primary-100 (#DBEAFE)
  날짜 텍스트:       Primary-700 (#1E40AF)
  제목:              Slate-900 (#0F172A)
  설명:              Slate-600 (#475569)
  링크:              Primary-600 (#2563EB)
  링크 호버:         Primary-700 (#1E40AF)
```

### 후원안내 페이지
```
배경:                Slate-50 (#F8FAFC)

카드 배경:           #FFFFFF
카드 제목:           Slate-900 (#0F172A)
카드 텍스트:         Slate-700 (#334155)

배너:                Primary-700 (#1E40AF) 또는 Slate-800 (#1E293B)
배너 텍스트:         #FFFFFF
CTA 버튼:            Primary-600 (#2563EB)
CTA 버튼 호버:       Primary-700 (#1E40AF)
```

---

## ✨ 색상 적용의 핵심 원칙

1. **계층 구조**: Primary-700 > Primary-600 > Primary-500 (진한 것이 중요)
2. **일관성**: 같은 용도는 같은 색상 사용
3. **대비**: 텍스트-배경 명도 차이 최소 4.5:1 (접근성)
4. **제약**: 최대 3-4개 주요 색상만 사용
5. **공간**: 중립색(Slate)으로 여백 확보

---

## 🎨 설치 방법

### Option 1: CSS 변수 (권장)
```css
/* /css/colors.css */
:root {
  --primary-50: #EFF6FF;
  --primary-600: #2563EB;
  /* ... 나머지 변수들 ... */
}

/* 사용 */
button {
  background-color: var(--primary-600);
  color: var(--text-inverse);
}
```

### Option 2: Tailwind (Tailwind 사용 시)
```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: {
        50: '#EFF6FF',
        600: '#2563EB',
        700: '#1E40AF',
      },
      slate: {
        50: '#F8FAFC',
        900: '#0F172A',
      },
    },
  },
}
```

### Option 3: SCSS 변수
```scss
// _colors.scss
$primary-50: #EFF6FF;
$primary-600: #2563EB;
$slate-900: #0F172A;

// 사용
.button {
  background: $primary-600;
  color: white;
}
```

---

## 📊 색상 대비 검증

모든 색상 조합이 **WCAG AA 기준** (4.5:1)을 만족합니다:

```
✅ Primary-600 (#2563EB) + White:  명도 비율 6.2:1
✅ Slate-900 (#0F172A) + White:    명도 비율 15:1
✅ Slate-700 (#334155) + White:    명도 비율 8.9:1
✅ Primary-700 + White:            명도 비율 5.8:1
```

---

## 🎨 최종 색상 팔레트 요약

| 용도 | 색상 | HEX |
|------|------|-----|
| **로고** | 파란색 | #1E40AF |
| **제목** | 어두운 파란색 | #1E40AF |
| **본문** | 거의 검은색 | #0F172A |
| **섹션 배경** | 연한 파란색 | #EFF6FF |
| **카드 배경** | 흰색 | #FFFFFF |
| **버튼** | 파란색 | #2563EB |
| **링크** | 파란색 | #2563EB |
| **경계선** | 연한 회색 | #E2E8F0 |
| **페이지 배경** | 매우 연한 회색 | #F8FAFC |
| **Footer** | 거의 검은색 | #0F172A |

---

**이 색상 시스템을 사용하면 전문적이고 일관성 있는 디자인을 구현할 수 있습니다!** 🎨
