<!-- Generated file — do not edit; regenerated with the SDK. -->

# Qa — operations

Accessor: `client.qa` · Source: `src/resources/qa.ts` · 3 operations · Request and error types: namespace `Qa`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listQaChecksV2QaChecksGet

- **Signature**: `listQaChecksV2QaChecksGet(options?: RequestOptions): ApiPromise<QaCheckListResponse, Qa.ListQaChecksV2QaChecksGetError>`
- **Wire**: `GET /v2/qa/checks`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QaCheckListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Qa.ListQaChecksV2QaChecksGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `QaCheckListResponse` | `qaCheckListResponseSchema` | `src/models/qa-check-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listQaResultsV2QaResultsGet

- **Signature**: `listQaResultsV2QaResultsGet(request?: Qa.ListQaResultsV2QaResultsGetRequest, options?: RequestOptions): ApiPromise<QaResultListResponse, Qa.ListQaResultsV2QaResultsGetError>`
- **Wire**: `GET /v2/qa/results`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QaResultListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Qa.ListQaResultsV2QaResultsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Qa.ListQaResultsV2QaResultsGetRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `traceIds` | `query` | `trace_ids` | `TraceIds` | no | — |
| `taskIds` | `query` | `task_ids` | `TaskIds` | no | — |
| `includeHistory` | `query` | `include_history` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `TraceIds` | `traceIdsSchema` | `src/models/unions/trace-ids.ts` |
| `TaskIds` | `taskIdsSchema` | `src/models/unions/task-ids.ts` |
| `QaResultListResponse` | `qaResultListResponseSchema` | `src/models/qa-result-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### runQaChecksV2QaRunsPost

- **Signature**: `runQaChecksV2QaRunsPost(request: Qa.RunQaChecksV2QaRunsPostRequest, options?: RequestOptions): ApiPromise<QaResultListResponse, Qa.RunQaChecksV2QaRunsPostError>`
- **Wire**: `POST /v2/qa/runs`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `QaResultListResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Qa.RunQaChecksV2QaRunsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Qa.RunQaChecksV2QaRunsPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `QaRunCreateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `QaRunCreateRequest` | `qaRunCreateRequestSchema` | `src/models/qa-run-create-request.ts` |
| `QaResultListResponse` | `qaResultListResponseSchema` | `src/models/qa-result-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

