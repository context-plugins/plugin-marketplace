<!-- Generated file — do not edit; regenerated with the SDK. -->

# Screenshot — operations

Accessor: `client.screenshot` · Source: `src/resources/screenshot.ts` · 7 operations · Request and error types: namespace `Screenshot`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rendex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRenderLink

- **Signature**: `createRenderLink(request: Screenshot.CreateRenderLinkRequest, options?: RequestOptions): ApiPromise<V1RenderLinkResponse, Screenshot.CreateRenderLinkError>`
- **Wire**: `POST /v1/render/link`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1RenderLinkResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.CreateRenderLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [413] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.CreateRenderLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1RenderLinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RenderLinkRequest` | `v1RenderLinkRequestSchema` | `src/models/v1-render-link-request.ts` |
| `V1RenderLinkResponse` | `v1RenderLinkResponseSchema` | `src/models/v1-render-link-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### extractContent

- **Signature**: `extractContent(request: Screenshot.ExtractContentRequest, options?: RequestOptions): ApiPromise<V1ExtractResponse, Screenshot.ExtractContentError>`
- **Wire**: `POST /v1/extract`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ExtractResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.ExtractContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [413] `ErrorResponse` · `"errorResponse3"` [422] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.ExtractContentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ExtractRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ExtractRequest` | `v1ExtractRequestSchema` | `src/models/v1-extract-request.ts` |
| `V1ExtractResponse` | `v1ExtractResponseSchema` | `src/models/v1-extract-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getScreenshot

- **Signature**: `getScreenshot(request: Screenshot.GetScreenshotRequest, options?: RequestOptions): ApiPromise<BinaryContent, Screenshot.GetScreenshotError>`
- **Wire**: `GET /v1/screenshot`
- **Auth**: any of `bearerAuth`, `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.GetScreenshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [408] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.GetScreenshotRequest` (20):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `url` | `query` | `string` | yes | — |
| `format` | `query` | `Format1` | no | `Format1.Png` |
| `width` | `query` | `number` | no | `1280` |
| `height` | `query` | `number` | no | `800` |
| `fullPage` | `query` | `boolean` | no | `false` |
| `quality` | `query` | `number` | no | — |
| `delay` | `query` | `number` | no | `0` |
| `darkMode` | `query` | `boolean` | no | `false` |
| `deviceScaleFactor` | `query` | `number` | no | `2` |
| `blockAds` | `query` | `boolean` | no | `true` |
| `timeout` | `query` | `number` | no | `30` |
| `waitUntil` | `query` | `WaitUntil1` | no | `WaitUntil1.Networkidle2` |
| `waitForSelector` | `query` | `string` | no | — |
| `bestAttempt` | `query` | `boolean` | no | `true` |
| `selector` | `query` | `string` | no | — |
| `device` | `query` | `Device1` | no | — |
| `blockCookieBanners` | `query` | `boolean` | no | `false` |
| `resizeWidth` | `query` | `number` | no | — |
| `resizeHeight` | `query` | `number` | no | — |
| `key` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format1` | `format1Schema` | `src/models/format1.ts` |
| `WaitUntil1` | `waitUntil1Schema` | `src/models/wait-until1.ts` |
| `Device1` | `device1Schema` | `src/models/device1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postScreenshot

- **Signature**: `postScreenshot(request: Screenshot.PostScreenshotRequest, options?: RequestOptions): ApiPromise<BinaryContent, Screenshot.PostScreenshotError>`
- **Wire**: `POST /v1/screenshot`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.PostScreenshotError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [408] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.PostScreenshotRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScreenshotRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScreenshotRequest` | `screenshotRequestSchema` | `src/models/screenshot-request.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### postScreenshotJson

- **Signature**: `postScreenshotJson(request: Screenshot.PostScreenshotJsonRequest, options?: RequestOptions): ApiPromise<ScreenshotJsonResponse, Screenshot.PostScreenshotJsonError>`
- **Wire**: `POST /v1/screenshot/json`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ScreenshotJsonResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.PostScreenshotJsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [408] `ErrorResponse` · `"errorResponse4"` [429] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.PostScreenshotJsonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ScreenshotRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScreenshotRequest` | `screenshotRequestSchema` | `src/models/screenshot-request.ts` |
| `ScreenshotJsonResponse` | `screenshotJsonResponseSchema` | `src/models/screenshot-json-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### renderArtifact

- **Signature**: `renderArtifact(request: Screenshot.RenderArtifactRequest, options?: RequestOptions): ApiPromise<V1ArtifactResponse, Screenshot.RenderArtifactError>`
- **Wire**: `POST /v1/artifact`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ArtifactResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.RenderArtifactError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.RenderArtifactRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ArtifactRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ArtifactRequest` | `v1ArtifactRequestSchema` | `src/models/v1-artifact-request.ts` |
| `V1ArtifactResponse` | `v1ArtifactResponseSchema` | `src/models/v1-artifact-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### serveRenderLink

- **Signature**: `serveRenderLink(request: Screenshot.ServeRenderLinkRequest, options?: RequestOptions): ApiPromise<BinaryContent, Screenshot.ServeRenderLinkError>`
- **Wire**: `GET /v1/render`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Screenshot.ServeRenderLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Screenshot.ServeRenderLinkRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `p` | `query` | `string` | yes |
| `uid` | `query` | `string` | yes |
| `exp` | `query` | `number` | yes |
| `sig` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

