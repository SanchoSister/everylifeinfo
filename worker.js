// everylifeinfo.kr는 서브도메인별로 다른 버티컬을 서빙하는 포털 구조다.
//   everylifeinfo.kr        -> 포털 홈 (루트 정적 자산 그대로)
//   cal.everylifeinfo.kr    -> /cal/* 정적 자산 (경로에서 /cal 접두어를 붙여 서빙)
//   foodie.everylifeinfo.kr -> /foodie/* 정적 자산
// 물리적 파일 구조는 그대로 두고, Host 헤더를 보고 요청 경로를 재작성해
// 같은 Worker + 같은 assets 바인딩 하나로 세 호스트를 모두 처리한다.
// run_worker_first = true라서 모든 요청이 이 스크립트를 거친 뒤 ASSETS로 간다.

const VERIFICATION_FILES = {
  "/naverf83f6bc5056c2dc94735bcb90f331e48.html":
    "naver-site-verification: naverf83f6bc5056c2dc94735bcb90f331e48.html\n",
};

const SUB_PREFIX = {
  "cal.everylifeinfo.kr": "/cal",
  "foodie.everylifeinfo.kr": "/foodie",
};

const ROOT_HOSTS = new Set(["everylifeinfo.kr", "www.everylifeinfo.kr"]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const host = url.hostname;

    const verification = VERIFICATION_FILES[url.pathname];
    if (verification !== undefined) {
      return new Response(verification, {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    // 옛 계산기 URL(everylifeinfo.kr/cal/...)을 새 서브도메인으로 영구 이동
    if (ROOT_HOSTS.has(host) && url.pathname.startsWith("/cal/")) {
      const dest = new URL(request.url);
      dest.hostname = "cal.everylifeinfo.kr";
      dest.pathname = url.pathname.slice(4) || "/";
      return Response.redirect(dest.toString(), 301);
    }

    const prefix = SUB_PREFIX[host];
    if (prefix && !url.pathname.startsWith("/assets/")) {
      const rewritten = new URL(request.url);
      rewritten.pathname = prefix + url.pathname;
      return env.ASSETS.fetch(new Request(rewritten.toString(), request));
    }

    return env.ASSETS.fetch(request);
  },
};
