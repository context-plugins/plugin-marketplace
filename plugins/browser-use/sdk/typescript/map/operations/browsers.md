<!-- Generated file — do not edit; regenerated with the SDK. -->

# Browsers — operations

Accessor: `client.browsers` · Source: `src/resources/browsers.ts` · 5 operations · Request and error types: namespace `Browsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBrowserSessionBrowsersPost

- **Signature**: `createBrowserSessionBrowsersPost(request: Browsers.CreateBrowserSessionBrowsersPostRequest, options?: RequestOptions): ApiPromise<BrowserSessionItemView, Browsers.CreateBrowserSessionBrowsersPostError>`
- **Wire**: `POST /browsers`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BrowserSessionItemView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Browsers.CreateBrowserSessionBrowsersPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiKeySpendLimitError"` [402] `ApiKeySpendLimitError` · `"sessionTimeoutLimitExceededError"` [403] `SessionTimeoutLimitExceededError` · `"profileNotFoundError"` [404] `ProfileNotFoundError` · `"validationError"` [422] `ValidationError` · `"tooManyConcurrentActiveSessionsError"` [429] `TooManyConcurrentActiveSessionsError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Browsers.CreateBrowserSessionBrowsersPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBrowserSessionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBrowserSessionRequest` | `createBrowserSessionRequestSchema` | `src/models/create-browser-session-request.ts` |
| `BrowserSessionItemView` | `browserSessionItemViewSchema` | `src/models/browser-session-item-view.ts` |
| `ApiKeySpendLimitError` | `apiKeySpendLimitErrorSchema` | `src/models/api-key-spend-limit-error.ts` |
| `SessionTimeoutLimitExceededError` | `sessionTimeoutLimitExceededErrorSchema` | `src/models/session-timeout-limit-exceeded-error.ts` |
| `ProfileNotFoundError` | `profileNotFoundErrorSchema` | `src/models/profile-not-found-error.ts` |
| `ValidationError` | `validationErrorSchema` | `src/models/validation-error.ts` |
| `TooManyConcurrentActiveSessionsError` | `tooManyConcurrentActiveSessionsErrorSchema` | `src/models/too-many-concurrent-active-sessions-error.ts` |

### getBrowserSessionBrowsersSessionIdGet

- **Signature**: `getBrowserSessionBrowsersSessionIdGet(request: Browsers.GetBrowserSessionBrowsersSessionIdGetRequest, options?: RequestOptions): ApiPromise<BrowserSessionView, Browsers.GetBrowserSessionBrowsersSessionIdGetError>`
- **Wire**: `GET /browsers/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BrowserSessionView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Browsers.GetBrowserSessionBrowsersSessionIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"sessionNotFoundError"` [404] `SessionNotFoundError` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Browsers.GetBrowserSessionBrowsersSessionIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BrowserSessionView` | `browserSessionViewSchema` | `src/models/browser-session-view.ts` |
| `SessionNotFoundError` | `sessionNotFoundErrorSchema` | `src/models/session-not-found-error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet

- **Signature**: `listBrowserSessionDownloadsBrowsersSessionIdDownloadsGet(request: Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest, options?: RequestOptions): ApiPromise<BrowserDownloadListResponse, Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError>`
- **Wire**: `GET /browsers/{session_id}/downloads`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BrowserDownloadListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"sessionNotFoundError"` [404] `SessionNotFoundError` · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Browsers.ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `50` |
| `cursor` | `query` | — | `Cursor` | no | — |
| `includeUrls` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `BrowserDownloadListResponse` | `browserDownloadListResponseSchema` | `src/models/browser-download-list-response.ts` |
| `SessionNotFoundError` | `sessionNotFoundErrorSchema` | `src/models/session-not-found-error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listBrowserSessionsBrowsersGet

- **Signature**: `listBrowserSessionsBrowsersGet(request?: Browsers.ListBrowserSessionsBrowsersGetRequest, options?: RequestOptions): ApiPromise<BrowserSessionListResponse, Browsers.ListBrowserSessionsBrowsersGetError>`
- **Wire**: `GET /browsers`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BrowserSessionListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Browsers.ListBrowserSessionsBrowsersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Browsers.ListBrowserSessionsBrowsersGetRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `metadata` | `query` | `Metadata1` | no | — |
| `pageSize` | `query` | `number` | no | `10` |
| `pageNumber` | `query` | `number` | no | `1` |
| `filterBy` | `query` | `Filterby` | no | — |
| `agentSessionId` | `query` | `AgentsessionidModel` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Metadata1` | `metadata1Schema` | `src/models/unions/metadata1.ts` |
| `Filterby` | `filterbySchema` | `src/models/unions/filterby.ts` |
| `AgentsessionidModel` | `agentsessionidModelSchema` | `src/models/unions/agentsessionid-model.ts` |
| `BrowserSessionListResponse` | `browserSessionListResponseSchema` | `src/models/browser-session-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateBrowserSessionBrowsersSessionIdPatch

- **Signature**: `updateBrowserSessionBrowsersSessionIdPatch(request: Browsers.UpdateBrowserSessionBrowsersSessionIdPatchRequest, options?: RequestOptions): ApiPromise<BrowserSessionView, Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError>`
- **Wire**: `PATCH /browsers/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BrowserSessionView`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Browsers.UpdateBrowserSessionBrowsersSessionIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"sessionNotFoundError"` [404] `SessionNotFoundError` · `"validationError"` [422] `ValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Browsers.UpdateBrowserSessionBrowsersSessionIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `body` | `body` | — | `UpdateBrowserSessionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBrowserSessionRequest` | `updateBrowserSessionRequestSchema` | `src/models/update-browser-session-request.ts` |
| `BrowserSessionView` | `browserSessionViewSchema` | `src/models/browser-session-view.ts` |
| `SessionNotFoundError` | `sessionNotFoundErrorSchema` | `src/models/session-not-found-error.ts` |
| `ValidationError` | `validationErrorSchema` | `src/models/validation-error.ts` |

