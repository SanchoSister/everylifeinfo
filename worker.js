// Cloudflare Workers static-assets 기본 동작은 "/file.html" 요청을
// "/file"로 307 리다이렉트한다(html_handling: auto-trailing-slash).
// 검색엔진 소유 확인용 정적 HTML 파일들은 정확한 파일명 그대로,
// 리다이렉트 없이 응답해야 하므로 여기서 예외 처리한다.
// wrangler.toml의 run_worker_first에 등록된 경로만 이 스크립트를 거치고,
// 그 외 모든 경로(계산기 페이지 등)는 그대로 정적 자산으로 서빙된다.

const VERIFICATION_FILES = {
  "/naverf83f6bc5056c2dc94735bcb90f331e48.html":
    "naver-site-verification: naverf83f6bc5056c2dc94735bcb90f331e48.html\n",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const content = VERIFICATION_FILES[url.pathname];

    if (content !== undefined) {
      return new Response(content, {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
