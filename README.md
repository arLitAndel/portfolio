# Juae Kim · Portfolio

[Dimension by HTML5 UP](https://html5up.net/dimension) 디자인을 기반으로,
**모든 메뉴를 하나의 페이지에 담아 스크롤로 이동**하도록 변형한 개발자 포트폴리오입니다 (sticky nav · scrollspy 포함).

## 구조

```
index.html               # 단일 페이지 마크업
assets/css/main.css      # Dimension 원본 스타일 (그대로 사용)
assets/css/portfolio.css # 단일 페이지 스크롤용 커스텀 오버라이드
assets/js/portfolio.js   # sticky nav · scrollspy · 인트로 애니메이션
images/                  # 배경 이미지 등
```

원본 `assets/js/main.js`(모달 동작)는 사용하지 않습니다.

## 로컬에서 보기

정적 파일이므로 `index.html`을 바로 열거나, 로컬 서버로 띄우면 됩니다.

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## 커스터마이징

`index.html`의 각 `<article>` 안 텍스트를 본인 정보로 수정하세요.
Skills 태그, Experience/Projects 카드는 자유롭게 추가·삭제할 수 있습니다.

---

Design credit: [Dimension by HTML5 UP](https://html5up.net) (CCA 3.0 license).
