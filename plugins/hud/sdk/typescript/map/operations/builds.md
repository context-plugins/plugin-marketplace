<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `src/resources/builds.ts` · 16 operations · Request and error types: namespace `Builds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### buildStatusV2BuildsBuildIdStatusGet

- **Signature**: `buildStatusV2BuildsBuildIdStatusGet(request: Builds.BuildStatusV2BuildsBuildIdStatusGetRequest, options?: RequestOptions): ApiPromise<BuildResponse, Builds.BuildStatusV2BuildsBuildIdStatusGetError>`
- **Wire**: `GET /v2/builds/{build_id}/status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.BuildStatusV2BuildsBuildIdStatusGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.BuildStatusV2BuildsBuildIdStatusGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildResponse` | `buildResponseSchema` | `src/models/build-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### cancelBuildV2BuildsBuildIdCancelPost

- **Signature**: `cancelBuildV2BuildsBuildIdCancelPost(request: Builds.CancelBuildV2BuildsBuildIdCancelPostRequest, options?: RequestOptions): ApiPromise<BuildResponse, Builds.CancelBuildV2BuildsBuildIdCancelPostError>`
- **Wire**: `POST /v2/builds/{build_id}/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.CancelBuildV2BuildsBuildIdCancelPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.CancelBuildV2BuildsBuildIdCancelPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildResponse` | `buildResponseSchema` | `src/models/build-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### downloadBuildSourceV2BuildsBuildIdSourceDownloadGet

- **Signature**: `downloadBuildSourceV2BuildsBuildIdSourceDownloadGet(request: Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest, options?: RequestOptions): ApiPromise<BuildSourceDownloadResponse, Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError>`
- **Wire**: `GET /v2/builds/{build_id}/source/download`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildSourceDownloadResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |
| `path` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildSourceDownloadResponse` | `buildSourceDownloadResponseSchema` | `src/models/build-source-download-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet

- **Signature**: `downloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGet(request: Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError>`
- **Wire**: `GET /v2/builds/{build_id}/workspace/download`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listBuildSourceV2BuildsBuildIdSourceGet

- **Signature**: `listBuildSourceV2BuildsBuildIdSourceGet(request: Builds.ListBuildSourceV2BuildsBuildIdSourceGetRequest, options?: RequestOptions): ApiPromise<BuildSourceListResponse, Builds.ListBuildSourceV2BuildsBuildIdSourceGetError>`
- **Wire**: `GET /v2/builds/{build_id}/source`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildSourceListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.ListBuildSourceV2BuildsBuildIdSourceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.ListBuildSourceV2BuildsBuildIdSourceGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes | — |
| `path` | `query` | — | `string` | no | — |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `BuildSourceListResponse` | `buildSourceListResponseSchema` | `src/models/build-source-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listBuildWorkspaceV2BuildsBuildIdWorkspaceGet

- **Signature**: `listBuildWorkspaceV2BuildsBuildIdWorkspaceGet(request: Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest, options?: RequestOptions): ApiPromise<BuildWorkspaceListResponse, Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError>`
- **Wire**: `GET /v2/builds/{build_id}/workspace`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildWorkspaceListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes | — |
| `path` | `query` | — | `string` | no | — |
| `cursor` | `query` | — | `Cursor` | no | — |
| `limit` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `BuildWorkspaceListResponse` | `buildWorkspaceListResponseSchema` | `src/models/build-workspace-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listBuildsV2BuildsGet

- **Signature**: `listBuildsV2BuildsGet(request: Builds.ListBuildsV2BuildsGetRequest, options?: RequestOptions): ApiPromise<BuildListResponse, Builds.ListBuildsV2BuildsGetError>`
- **Wire**: `GET /v2/builds`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.ListBuildsV2BuildsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.ListBuildsV2BuildsGetRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `registryId` | `query` | `registry_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildListResponse` | `buildListResponseSchema` | `src/models/build-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### lookupBuildsV2BuildsLookupPost

- **Signature**: `lookupBuildsV2BuildsLookupPost(request: Builds.LookupBuildsV2BuildsLookupPostRequest, options?: RequestOptions): ApiPromise<BuildLookupResponse, Builds.LookupBuildsV2BuildsLookupPostError>`
- **Wire**: `POST /v2/builds/lookup`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildLookupResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.LookupBuildsV2BuildsLookupPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.LookupBuildsV2BuildsLookupPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BuildLookupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildLookupRequest` | `buildLookupRequestSchema` | `src/models/build-lookup-request.ts` |
| `BuildLookupResponse` | `buildLookupResponseSchema` | `src/models/build-lookup-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### previewBuildSourceV2BuildsBuildIdSourcePreviewGet

- **Signature**: `previewBuildSourceV2BuildsBuildIdSourcePreviewGet(request: Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest, options?: RequestOptions): ApiPromise<BuildSourcePreviewResponse, Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError>`
- **Wire**: `GET /v2/builds/{build_id}/source/preview`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildSourcePreviewResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |
| `path` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildSourcePreviewResponse` | `buildSourcePreviewResponseSchema` | `src/models/build-source-preview-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet

- **Signature**: `previewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGet(request: Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest, options?: RequestOptions): ApiPromise<BuildSourcePreviewResponse, Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError>`
- **Wire**: `GET /v2/builds/{build_id}/workspace/preview`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BuildSourcePreviewResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |
| `path` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildSourcePreviewResponse` | `buildSourcePreviewResponseSchema` | `src/models/build-source-preview-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### registerBuildSourceV2BuildsRegisterPost

- **Signature**: `registerBuildSourceV2BuildsRegisterPost(request: Builds.RegisterBuildSourceV2BuildsRegisterPostRequest, options?: RequestOptions): ApiPromise<BuildRegisterResponse, Builds.RegisterBuildSourceV2BuildsRegisterPostError>`
- **Wire**: `POST /v2/builds/register`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildRegisterResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.RegisterBuildSourceV2BuildsRegisterPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.RegisterBuildSourceV2BuildsRegisterPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BuildRegisterRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildRegisterRequest` | `buildRegisterRequestSchema` | `src/models/build-register-request.ts` |
| `BuildRegisterResponse` | `buildRegisterResponseSchema` | `src/models/build-register-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### reindexBuildSourceV2BuildsBuildIdSourceReindexPost

- **Signature**: `reindexBuildSourceV2BuildsBuildIdSourceReindexPost(request: Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest, options?: RequestOptions): ApiPromise<undefined, Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError>`
- **Wire**: `POST /v2/builds/{build_id}/source/reindex`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.ReindexBuildSourceV2BuildsBuildIdSourceReindexPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### setLatestBuildV2BuildsBuildIdSetLatestPost

- **Signature**: `setLatestBuildV2BuildsBuildIdSetLatestPost(request: Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostRequest, options?: RequestOptions): ApiPromise<BuildResponse, Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError>`
- **Wire**: `POST /v2/builds/{build_id}/set-latest`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.SetLatestBuildV2BuildsBuildIdSetLatestPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `buildId` | `path` | `build_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildResponse` | `buildResponseSchema` | `src/models/build-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### triggerBuildV2BuildsTriggerDirectPost

- **Signature**: `triggerBuildV2BuildsTriggerDirectPost(request: Builds.TriggerBuildV2BuildsTriggerDirectPostRequest, options?: RequestOptions): ApiPromise<BuildResponse, Builds.TriggerBuildV2BuildsTriggerDirectPostError>`
- **Wire**: `POST /v2/builds/trigger-direct`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.TriggerBuildV2BuildsTriggerDirectPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.TriggerBuildV2BuildsTriggerDirectPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BuildTriggerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildTriggerRequest` | `buildTriggerRequestSchema` | `src/models/build-trigger-request.ts` |
| `BuildResponse` | `buildResponseSchema` | `src/models/build-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### triggerBuildV2BuildsTriggerPost

- **Signature**: `triggerBuildV2BuildsTriggerPost(request: Builds.TriggerBuildV2BuildsTriggerPostRequest, options?: RequestOptions): ApiPromise<BuildResponse, Builds.TriggerBuildV2BuildsTriggerPostError>`
- **Wire**: `POST /v2/builds/trigger`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.TriggerBuildV2BuildsTriggerPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Builds.TriggerBuildV2BuildsTriggerPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BuildTriggerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildTriggerRequest` | `buildTriggerRequestSchema` | `src/models/build-trigger-request.ts` |
| `BuildResponse` | `buildResponseSchema` | `src/models/build-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### uploadUrlV2BuildsUploadUrlPost

- **Signature**: `uploadUrlV2BuildsUploadUrlPost(options?: RequestOptions): ApiPromise<BuildUploadUrlResponse, Builds.UploadUrlV2BuildsUploadUrlPostError>`
- **Wire**: `POST /v2/builds/upload-url`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BuildUploadUrlResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Builds.UploadUrlV2BuildsUploadUrlPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `BuildUploadUrlResponse` | `buildUploadUrlResponseSchema` | `src/models/build-upload-url-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

