<!-- Generated file — do not edit; regenerated with the SDK. -->

# Rollouts — operations

Accessor: `client.rollouts` · Source: `src/resources/rollouts.ts` · 6 operations · Request and error types: namespace `Rollouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hud`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelJobV2RolloutsCancelJobPost

- **Signature**: `cancelJobV2RolloutsCancelJobPost(request: Rollouts.CancelJobV2RolloutsCancelJobPostRequest, options?: RequestOptions): ApiPromise<CancelJobResponse, Rollouts.CancelJobV2RolloutsCancelJobPostError>`
- **Wire**: `POST /v2/rollouts/cancel_job`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelJobResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Rollouts.CancelJobV2RolloutsCancelJobPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rollouts.CancelJobV2RolloutsCancelJobPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelJobRequest` | `cancelJobRequestSchema` | `src/models/cancel-job-request.ts` |
| `CancelJobResponse` | `cancelJobResponseSchema` | `src/models/cancel-job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### cancelUserJobsV2RolloutsCancelUserJobsPost

- **Signature**: `cancelUserJobsV2RolloutsCancelUserJobsPost(options?: RequestOptions): ApiPromise<CancelUserJobsResponse, Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError>`
- **Wire**: `POST /v2/rollouts/cancel_user_jobs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelUserJobsResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Rollouts.CancelUserJobsV2RolloutsCancelUserJobsPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelUserJobsResponse` | `cancelUserJobsResponseSchema` | `src/models/cancel-user-jobs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### cancelV2RolloutsCancelPost

- **Signature**: `cancelV2RolloutsCancelPost(request: Rollouts.CancelV2RolloutsCancelPostRequest, options?: RequestOptions): ApiPromise<CancelResponse, Rollouts.CancelV2RolloutsCancelPostError>`
- **Wire**: `POST /v2/rollouts/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Rollouts.CancelV2RolloutsCancelPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rollouts.CancelV2RolloutsCancelPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelRequest` | `cancelRequestSchema` | `src/models/cancel-request.ts` |
| `CancelResponse` | `cancelResponseSchema` | `src/models/cancel-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### runListV2RolloutsRunListPost

- **Signature**: `runListV2RolloutsRunListPost(request: Rollouts.RunListV2RolloutsRunListPostRequest, options?: RequestOptions): ApiPromise<RolloutBatchResponse, Rollouts.RunListV2RolloutsRunListPostError>`
- **Wire**: `POST /v2/rollouts/run_list`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RolloutBatchResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Rollouts.RunListV2RolloutsRunListPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rollouts.RunListV2RolloutsRunListPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RolloutRunListRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RolloutRunListRequest` | `rolloutRunListRequestSchema` | `src/models/rollout-run-list-request.ts` |
| `RolloutBatchResponse` | `rolloutBatchResponseSchema` | `src/models/rollout-batch-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### runV2RolloutsRunPost

- **Signature**: `runV2RolloutsRunPost(request: Rollouts.RunV2RolloutsRunPostRequest, options?: RequestOptions): ApiPromise<RolloutResponse, Rollouts.RunV2RolloutsRunPostError>`
- **Wire**: `POST /v2/rollouts/run`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RolloutResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Rollouts.RunV2RolloutsRunPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rollouts.RunV2RolloutsRunPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RolloutRunRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RolloutRunRequest` | `rolloutRunRequestSchema` | `src/models/rollout-run-request.ts` |
| `RolloutResponse` | `rolloutResponseSchema` | `src/models/rollout-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### submitV2RolloutsSubmitPost

- **Signature**: `submitV2RolloutsSubmitPost(request: Rollouts.SubmitV2RolloutsSubmitPostRequest, options?: RequestOptions): ApiPromise<RolloutResponse, Rollouts.SubmitV2RolloutsSubmitPostError>`
- **Wire**: `POST /v2/rollouts/submit`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RolloutResponse`
- **Error**: `HudError` with `kind: "api"`, an instance of `Rollouts.SubmitV2RolloutsSubmitPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [409] `ErrorResponse` · `"httpValidationError"` [422] `HttpValidationError` · `"errorResponse6"` [429] `ErrorResponse` · `"errorResponse7"` [503] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Rollouts.SubmitV2RolloutsSubmitPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RolloutSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RolloutSubmitRequest` | `rolloutSubmitRequestSchema` | `src/models/rollout-submit-request.ts` |
| `RolloutResponse` | `rolloutResponseSchema` | `src/models/rollout-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

