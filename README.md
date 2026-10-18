# Juae Kim · Portfolio

[Dimension by HTML5 UP](https://html5up.net/dimension) 디자인을 기반으로,
**모든 메뉴를 하나의 페이지에 담아 스크롤로 이동**하도록 변형한 개발자 포트폴리오입니다.

## 원본과의 차이

원본 Dimension은 메뉴를 누르면 패널(모달)이 떠서 한 번에 하나의 섹션만 보여줍니다.
이 버전은 다음과 같이 바꿨습니다.

- 모든 섹션(About / Skills / Experience / Projects / Contact)을 한 페이지에 세로로 배치
- 메뉴 클릭 시 같은 페이지의 해당 섹션 위치로 부드럽게 스크롤 (`scroll-behavior: smooth`)
- Hero를 지나 스크롤하면 상단에 sticky 내비게이션 바가 나타남
- 현재 보고 있는 섹션의 메뉴가 자동으로 강조됨 (scrollspy)

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
