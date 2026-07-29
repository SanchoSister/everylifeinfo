# 서드파티 라이선스

## assets/lunar.js

`assets/lunar.js`의 음양력 변환 데이터 및 알고리즘은 아래 오픈소스 프로젝트를 이식한 것입니다.

- 프로젝트: [usingsky/korean_lunar_calendar_js](https://github.com/usingsky/korean_lunar_calendar_js)
- 저작권: Copyright (c) 2022 Jinil Lee
- 라이선스: MIT License

```
MIT License

Copyright (c) 2022 Jinil Lee

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## assets/lunar-javascript.js

`assets/lunar-javascript.js`(`/cal/saju/` 사주팔자 계산기의 핵심 엔진)는 아래 오픈소스
라이브러리를 terser로 압축(minify)해 그대로 재배포한 것입니다. 절기(24절기) 기반의
정밀한 만세력·팔자(八字)·오행·십신 계산에 사용됩니다.

- 프로젝트: [6tail/lunar-javascript](https://github.com/6tail/lunar-javascript)
- 저작권: Copyright (c) 2018 6tail
- 라이선스: MIT License

```
MIT License

Copyright (c) 2018 6tail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

`/cal/saju/` 페이지 자체의 입력폼·진태양시 보정 로직·오행/십신 집계·UI는
[be-realdeveloper/saju](https://github.com/be-realdeveloper/saju)(MIT License)의
만세력 CLI 구조(진태양시 보정 방식 등)를 참고해 이 사이트 자체 코드로 새로 작성했습니다.
