<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sessions — operations

Accessor: `client.sessions` · Source: `src/resources/sessions.ts` · 14 operations · Request and error types: namespace `Sessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete

- **Signature**: `cancelQueuedMessageSessionsSessionIdQueueMessageIdDelete(request: Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest, options?: RequestOptions): ApiPromise<QueuedMessage, Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError>`
- **Wire**: `DELETE /sessions/{session_id}/queue/{message_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QueuedMessage`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `messageId` | `path` | `message_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueuedMessage` | `queuedMessageSchema` | `src/models/queued-message.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createSessionShareSessionsSessionIdSharePost

- **Signature**: `createSessionShareSessionsSessionIdSharePost(request: Sessions.CreateSessionShareSessionsSessionIdSharePostRequest, options?: RequestOptions): ApiPromise<SessionShareInfo, Sessions.CreateSessionShareSessionsSessionIdSharePostError>`
- **Wire**: `POST /sessions/{session_id}/share`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionShareInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.CreateSessionShareSessionsSessionIdSharePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.CreateSessionShareSessionsSessionIdSharePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionShareInfo` | `sessionShareInfoSchema` | `src/models/session-share-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### deleteSessionSessionsSessionIdDelete

- **Signature**: `deleteSessionSessionsSessionIdDelete(request: Sessions.DeleteSessionSessionsSessionIdDeleteRequest, options?: RequestOptions): ApiPromise<undefined, Sessions.DeleteSessionSessionsSessionIdDeleteError>`
- **Wire**: `DELETE /sessions/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.DeleteSessionSessionsSessionIdDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error502"` [502] no body · `"error503"` [503] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.DeleteSessionSessionsSessionIdDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSessionCostSessionsSessionIdCostGet

- **Signature**: `getSessionCostSessionsSessionIdCostGet(request: Sessions.GetSessionCostSessionsSessionIdCostGetRequest, options?: RequestOptions): ApiPromise<SessionCostResponse, Sessions.GetSessionCostSessionsSessionIdCostGetError>`
- **Wire**: `GET /sessions/{session_id}/cost`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionCostResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.GetSessionCostSessionsSessionIdCostGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GetSessionCostSessionsSessionIdCostGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionCostResponse` | `sessionCostResponseSchema` | `src/models/session-cost-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSessionQueueMessageSessionsSessionIdQueueMessageIdGet

- **Signature**: `getSessionQueueMessageSessionsSessionIdQueueMessageIdGet(request: Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest, options?: RequestOptions): ApiPromise<QueuedMessage, Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError>`
- **Wire**: `GET /sessions/{session_id}/queue/{message_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QueuedMessage`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `messageId` | `path` | `message_id` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueuedMessage` | `queuedMessageSchema` | `src/models/queued-message.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSessionSessionsSessionIdGet

- **Signature**: `getSessionSessionsSessionIdGet(request: Sessions.GetSessionSessionsSessionIdGetRequest, options?: RequestOptions): ApiPromise<SessionInfo, Sessions.GetSessionSessionsSessionIdGetError>`
- **Wire**: `GET /sessions/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.GetSessionSessionsSessionIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GetSessionSessionsSessionIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionInfo` | `sessionInfoSchema` | `src/models/session-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getSessionShareSessionsSessionIdShareGet

- **Signature**: `getSessionShareSessionsSessionIdShareGet(request: Sessions.GetSessionShareSessionsSessionIdShareGetRequest, options?: RequestOptions): ApiPromise<ResponseGetSessionShareSessionsSessionIdShareGet, Sessions.GetSessionShareSessionsSessionIdShareGetError>`
- **Wire**: `GET /sessions/{session_id}/share`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ResponseGetSessionShareSessionsSessionIdShareGet`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.GetSessionShareSessionsSessionIdShareGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.GetSessionShareSessionsSessionIdShareGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResponseGetSessionShareSessionsSessionIdShareGet` | `responseGetSessionShareSessionsSessionIdShareGetSchema` | `src/models/unions/response-get-session-share-sessions-session-id-share-get.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listSessionQueueSessionsSessionIdQueueGet

- **Signature**: `listSessionQueueSessionsSessionIdQueueGet(request: Sessions.ListSessionQueueSessionsSessionIdQueueGetRequest, options?: RequestOptions): ApiPromise<QueueListResponse, Sessions.ListSessionQueueSessionsSessionIdQueueGetError>`
- **Wire**: `GET /sessions/{session_id}/queue`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QueueListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.ListSessionQueueSessionsSessionIdQueueGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.ListSessionQueueSessionsSessionIdQueueGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QueueListResponse` | `queueListResponseSchema` | `src/models/queue-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listSessionsSessionsGet

- **Signature**: `listSessionsSessionsGet(request?: Sessions.ListSessionsSessionsGetRequest, options?: RequestOptions): ApiPromise<SessionListResponse, Sessions.ListSessionsSessionsGetError>`
- **Wire**: `GET /sessions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SessionListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.ListSessionsSessionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.ListSessionsSessionsGetRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `20` |
| `cursor` | `query` | `Cursor` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `SessionListResponse` | `sessionListResponseSchema` | `src/models/session-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### purgeSessionSessionsSessionIdPurgePost

- **Signature**: `purgeSessionSessionsSessionIdPurgePost(request: Sessions.PurgeSessionSessionsSessionIdPurgePostRequest, options?: RequestOptions): ApiPromise<undefined, Sessions.PurgeSessionSessionsSessionIdPurgePostError>`
- **Wire**: `POST /sessions/{session_id}/purge`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.PurgeSessionSessionsSessionIdPurgePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.PurgeSessionSessionsSessionIdPurgePostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### queueSessionMessageSessionsSessionIdQueuePost

- **Signature**: `queueSessionMessageSessionsSessionIdQueuePost(request: Sessions.QueueSessionMessageSessionsSessionIdQueuePostRequest, options?: RequestOptions): ApiPromise<QueuedMessage, Sessions.QueueSessionMessageSessionsSessionIdQueuePostError>`
- **Wire**: `POST /sessions/{session_id}/queue`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QueuedMessage`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.QueueSessionMessageSessionsSessionIdQueuePostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiKeySpendLimitError"` [402] `ApiKeySpendLimitError` · `"error403"` [403] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.QueueSessionMessageSessionsSessionIdQueuePostRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `xV4QueueDeduplicate` | `header` | `X-V4-Queue-Deduplicate` | `XV4QueueDeduplicate` | no |
| `body` | `body` | — | `QueueMessageRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `XV4QueueDeduplicate` | `xv4QueueDeduplicateSchema` | `src/models/unions/xv4-queue-deduplicate.ts` |
| `QueueMessageRequest` | `queueMessageRequestSchema` | `src/models/queue-message-request.ts` |
| `QueuedMessage` | `queuedMessageSchema` | `src/models/queued-message.ts` |
| `ApiKeySpendLimitError` | `apiKeySpendLimitErrorSchema` | `src/models/api-key-spend-limit-error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateSessionCostCapSessionsSessionIdCostCapPatch

- **Signature**: `updateSessionCostCapSessionsSessionIdCostCapPatch(request: Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest, options?: RequestOptions): ApiPromise<SessionCostCapResponse, Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError>`
- **Wire**: `PATCH /sessions/{session_id}/cost-cap`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionCostCapResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.UpdateSessionCostCapSessionsSessionIdCostCapPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `body` | `body` | — | `SessionCostCapRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionCostCapRequest` | `sessionCostCapRequestSchema` | `src/models/session-cost-cap-request.ts` |
| `SessionCostCapResponse` | `sessionCostCapResponseSchema` | `src/models/session-cost-cap-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateSessionSessionsSessionIdPatch

- **Signature**: `updateSessionSessionsSessionIdPatch(request: Sessions.UpdateSessionSessionsSessionIdPatchRequest, options?: RequestOptions): ApiPromise<SessionInfo, Sessions.UpdateSessionSessionsSessionIdPatchError>`
- **Wire**: `PATCH /sessions/{session_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.UpdateSessionSessionsSessionIdPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.UpdateSessionSessionsSessionIdPatchRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `body` | `body` | — | `SessionUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionUpdateRequest` | `sessionUpdateRequestSchema` | `src/models/session-update-request.ts` |
| `SessionInfo` | `sessionInfoSchema` | `src/models/session-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### updateSessionShareSessionsSessionIdSharePut

- **Signature**: `updateSessionShareSessionsSessionIdSharePut(request: Sessions.UpdateSessionShareSessionsSessionIdSharePutRequest, options?: RequestOptions): ApiPromise<SessionShareInfo, Sessions.UpdateSessionShareSessionsSessionIdSharePutError>`
- **Wire**: `PUT /sessions/{session_id}/share`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SessionShareInfo`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Sessions.UpdateSessionShareSessionsSessionIdSharePutError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Sessions.UpdateSessionShareSessionsSessionIdSharePutRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sessionId` | `path` | `session_id` | `string` | yes |
| `body` | `body` | — | `SessionShareUpdateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionShareUpdateRequest` | `sessionShareUpdateRequestSchema` | `src/models/session-share-update-request.ts` |
| `SessionShareInfo` | `sessionShareInfoSchema` | `src/models/session-share-info.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

