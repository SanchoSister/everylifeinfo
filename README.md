# 생활계산기 모음 (calc-hub)

만나이, 연봉 실수령액, 퇴직금, 연차, 초등학교 입학연도, 이사 손없는날, 로또번호 생성기까지
한 도메인 아래 `/cal/<slug>/` 경로로 묶은 순수 정적 HTML/CSS/JS 사이트입니다.
빌드 도구, 프레임워크, 서버 없이 그대로 배포할 수 있습니다.

## 구조

```
calc-hub/
  index.html                 홈 (계산기 목록)
  robots.txt                 검색엔진 크롤링 허용 + sitemap 위치 안내
  sitemap.xml                전체 페이지 목록 (Search Console 제출용)
  assets/
    style.css                공통 스타일
    common.js                햄버거 메뉴 등 공통 동작
    lunar.js                 음양력 변환 (손없는날 계산기용, MIT 라이선스 이식)
  cal/
    man-age/index.html       만나이 계산기
    school-age/index.html    초등학교 입학연도 계산기
    salary/index.html        연봉 실수령액 계산기
    severance/index.html     퇴직금 계산기
    annual-leave/index.html  연차 계산기
    moving-day/index.html    이사 손없는날 계산기
    lotto/index.html         로또번호 생성기
  privacy/index.html         개인정보처리방침
  about/index.html           사이트 소개
  THIRD_PARTY_LICENSES.md    lunar.js 출처 및 MIT 라이선스 고지
```

## 로컬에서 확인하기

```bash
cd calc-hub
python3 -m http.server 8000
# http://localhost:8000 접속
```

## 배포

정적 파일이라 아무 호스팅에나 올리면 됩니다. 추천 순서:

1. **Cloudflare Pages** (권장) 또는 **GitHub Pages** — 이 폴더를 그대로 드래그 앤 드롭하거나 GitHub 저장소에 연결하면 끝. 무료 티어에 "비상업적 용도만" 같은 제약이 없어 광고 붙은 사이트도 문제없습니다.
2. **Vercel**은 피하는 걸 권장합니다 — Hobby(무료) 플랜 약관이 비상업적 용도로 한정돼 있어서, 애드센스로 수익을 내면 유료 플랜(Pro)으로 올려야 약관 위반을 피할 수 있습니다. 이 사이트는 서버리스 함수가 필요 없는 완전 정적 사이트라 Vercel 특유의 기능이 필요 없으니 애초에 다른 호스팅을 쓰는 게 낫습니다.

도메인은 `everylifeinfo.kr`을 사용합니다. 모든 페이지의 `<link rel="canonical">`은 이미 이 도메인으로 맞춰져 있으니, 가비아에서 구매한 도메인을 배포 호스팅의 네임서버 또는 DNS 레코드에 연결하기만 하면 됩니다.

## 검색엔진 등록 (구글 서치 콘솔)

애드센스 승인 확률을 높이려면 배포 후 구글이 사이트를 색인할 수 있어야 합니다.

1. [Google Search Console](https://search.google.com/search-console)에서 `everylifeinfo.kr`을 속성으로 추가하고, 안내에 따라 도메인 소유를 확인합니다 (가비아 DNS에 TXT 레코드 추가, 또는 HTML 메타태그 방식).
2. 좌측 메뉴 "Sitemaps"에서 `sitemap.xml`을 제출합니다 (`https://everylifeinfo.kr/sitemap.xml`).
3. `robots.txt`는 이미 `Allow: /`로 전체 크롤링을 허용하고 sitemap 위치를 안내하도록 설정돼 있습니다.
4. 색인은 보통 며칠 걸리므로, 애드센스 신청 전에 미리 등록해두는 걸 권장합니다.

새 페이지(계산기 등)를 추가하면 `sitemap.xml`에도 URL을 함께 추가해주세요.

## 구글 애드센스 붙이기

현재 페이지에는 광고 placeholder를 두지 않았습니다 (심사 중 빈 광고 박스가 보이면 불리할 수 있어 제거함). 승인 전까지는 이대로 두고, 승인 후에만 아래 순서로 추가하세요.

1. 사이트를 실제 도메인에 배포하고, 콘텐츠가 충분히 쌓인 뒤(계산기 7개 + 설명 텍스트 정도면 심사 시도 가능) [Google AdSense](https://adsense.google.com)에 사이트 등록 후 심사를 신청하세요.
2. 승인되면 발급받은 스니펫을 **모든 페이지의 `<head>` 안, `</head>` 직전**에 추가합니다 (8개 HTML 파일 전부 동일하게):
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
3. 각 페이지의 `<div class="card">...</div>` (계산기 입력창) 바로 다음, `<div class="explain">` 바로 앞에 광고 유닛을 추가합니다:
   ```html
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
   ```
4. `ads.txt` 파일을 도메인 루트에 추가해야 합니다 (AdSense 계정 페이지에서 정확한 내용 확인 후 `calc-hub/ads.txt`로 생성).

## 계산기를 더 추가하려면

`cal/` 아래에 새 폴더를 만들고 기존 페이지 하나를 복사해서 시작하면 됩니다. 공통 헤더/푸터/스타일은
`assets/style.css` 하나를 공유하므로 새 페이지도 같은 톤을 유지합니다. 새 계산기를 추가했다면:

- `index.html`의 `.hub-grid`에 카드 추가
- 관련 계산기들의 `.related-grid`에 상호 링크 추가 (내부 링크는 SEO에 도움이 됩니다)

## 주의사항

- 모든 계산 결과는 참고용 추정치입니다 (특히 연봉/퇴직금 계산기는 세법 근사치 사용). 각 페이지 하단에 고지문이 있습니다.
- `lunar.js`는 [usingsky/korean_lunar_calendar_js](https://github.com/usingsky/korean_lunar_calendar_js) (MIT)를 이식한 것으로, 1000~2050년 범위만 지원합니다. 자세한 내용은 `THIRD_PARTY_LICENSES.md` 참고.
