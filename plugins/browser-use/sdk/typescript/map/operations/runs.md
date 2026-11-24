<!-- Generated file — do not edit; regenerated with the SDK. -->

# Runs — operations

Accessor: `client.runs` · Source: `src/resources/runs.ts` · 7 operations · Request and error types: namespace `Runs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `browser-use`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelRunRunsRunIdCancelPost

- **Signature**: `cancelRunRunsRunIdCancelPost(request: Runs.CancelRunRunsRunIdCancelPostRequest, options?: RequestOptions): ApiPromise<RunSummary, Runs.CancelRunRunsRunIdCancelPostError>`
- **Wire**: `POST /runs/{run_id}/cancel`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunSummary`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.CancelRunRunsRunIdCancelPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"error502"` [502] no body · `"error503"` [503] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.CancelRunRunsRunIdCancelPostRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunSummary` | `runSummarySchema` | `src/models/run-summary.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### createRunRunsPost

- **Signature**: `createRunRunsPost(request: Runs.CreateRunRunsPostRequest, options?: RequestOptions): ApiPromise<RunCreateResponse, Runs.CreateRunRunsPostError>`
- **Wire**: `POST /runs`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RunCreateResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.CreateRunRunsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"apiKeySpendLimitError"` [402] `ApiKeySpendLimitError` · `"error403"` [403] no body · `"error404"` [404] no body · `"error409"` [409] no body · `"error429"` [429] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.CreateRunRunsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RunCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunCreateRequest` | `runCreateRequestSchema` | `src/models/run-create-request.ts` |
| `RunCreateResponse` | `runCreateResponseSchema` | `src/models/run-create-response.ts` |
| `ApiKeySpendLimitError` | `apiKeySpendLimitErrorSchema` | `src/models/api-key-spend-limit-error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getRunEventsRunsRunIdEventsGet

- **Signature**: `getRunEventsRunsRunIdEventsGet(request: Runs.GetRunEventsRunsRunIdEventsGetRequest, options?: RequestOptions): ApiPromise<RunEventsResponse, Runs.GetRunEventsRunsRunIdEventsGetError>`
- **Wire**: `GET /runs/{run_id}/events`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunEventsResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.GetRunEventsRunsRunIdEventsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.GetRunEventsRunsRunIdEventsGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `200` |
| `after` | `query` | — | `number` | no | `0` |
| `includeOutput` | `query` | `include_output` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunEventsResponse` | `runEventsResponseSchema` | `src/models/run-events-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getRunRunsRunIdGet

- **Signature**: `getRunRunsRunIdGet(request: Runs.GetRunRunsRunIdGetRequest, options?: RequestOptions): ApiPromise<RunSummary, Runs.GetRunRunsRunIdGetError>`
- **Wire**: `GET /runs/{run_id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunSummary`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.GetRunRunsRunIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.GetRunRunsRunIdGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunSummary` | `runSummarySchema` | `src/models/run-summary.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### getRunStatusRunsRunIdStatusGet

- **Signature**: `getRunStatusRunsRunIdStatusGet(request: Runs.GetRunStatusRunsRunIdStatusGetRequest, options?: RequestOptions): ApiPromise<RunStatusResponse, Runs.GetRunStatusRunsRunIdStatusGetError>`
- **Wire**: `GET /runs/{run_id}/status`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunStatusResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.GetRunStatusRunsRunIdStatusGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.GetRunStatusRunsRunIdStatusGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunStatusResponse` | `runStatusResponseSchema` | `src/models/run-status-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listRunAttachmentsRunsRunIdAttachmentsGet

- **Signature**: `listRunAttachmentsRunsRunIdAttachmentsGet(request: Runs.ListRunAttachmentsRunsRunIdAttachmentsGetRequest, options?: RequestOptions): ApiPromise<RunAttachmentsResponse, Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError>`
- **Wire**: `GET /runs/{run_id}/attachments`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunAttachmentsResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.ListRunAttachmentsRunsRunIdAttachmentsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.ListRunAttachmentsRunsRunIdAttachmentsGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `runId` | `path` | `run_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunAttachmentsResponse` | `runAttachmentsResponseSchema` | `src/models/run-attachments-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### listRunsRunsGet

- **Signature**: `listRunsRunsGet(request?: Runs.ListRunsRunsGetRequest, options?: RequestOptions): ApiPromise<RunListResponse, Runs.ListRunsRunsGetError>`
- **Wire**: `GET /runs`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RunListResponse`
- **Error**: `BrowserUseError` with `kind: "api"`, an instance of `Runs.ListRunsRunsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error400"` [400] no body · `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Runs.ListRunsRunsGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `limit` | `query` | `number` | no | `50` |
| `cursor` | `query` | `Cursor` | no | — |
| `sessionId` | `query` | `Sessionid` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Cursor` | `cursorSchema` | `src/models/unions/cursor.ts` |
| `Sessionid` | `sessionidSchema` | `src/models/unions/sessionid.ts` |
| `RunListResponse` | `runListResponseSchema` | `src/models/run-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

