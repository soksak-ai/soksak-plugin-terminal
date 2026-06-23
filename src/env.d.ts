// [SWAP: view-wrapper/env] 원본 createTerminal.ts 는 Vite 런타임에서 동작해
// `import.meta.env.DEV`(Vite 가 제공하는 ambient)로 IME 진단 로깅을 DEV 전용으로 게이트했다.
// 플러그인은 esbuild 로 번들되며 build.mjs 의 define 이 `import.meta.env.DEV` 를 정적 `false` 로
// 치환한다(릴리즈에서 imeTrace 경로 제거). tsc 에는 그 ambient 타입이 없어 여기서 최소 선언만
// 한다 — 값은 esbuild 가 주입하고, 이 선언은 타입체크만 통과시킨다(원본 DEV 게이팅 로직 보존).
interface ImportMetaEnv {
  readonly DEV: boolean;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
