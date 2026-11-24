<!-- Generated file — do not edit; regenerated with the SDK. -->

# Gates — operations

Accessor: `client.gates` · Source: `src/resources/gates.ts` · 7 operations · Request and error types: namespace `Gates`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `deliverd`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1GatesById

- **Signature**: `getApiV1GatesById(request: Gates.GetApiV1GatesByIdRequest, options?: RequestOptions): ApiPromise<ApiV1GatesResponse, ApiError>`
- **Wire**: `GET /api/v1/gates/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1GatesResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Gates.GetApiV1GatesByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GatesResponse` | `apiV1GatesResponseSchema` | `src/models/api-v1-gates-response.ts` |

### getApiV1GatesByIdEvidence

- **Signature**: `getApiV1GatesByIdEvidence(request: Gates.GetApiV1GatesByIdEvidenceRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /api/v1/gates/{id}/evidence`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Gates.GetApiV1GatesByIdEvidenceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `format` | `query` | `Format` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |

### postApiV1Gates

- **Signature**: `postApiV1Gates(request?: Gates.PostApiV1GatesRequest, options?: RequestOptions): ApiPromise<ApiV1GatesResponse, Gates.PostApiV1GatesError>`
- **Wire**: `POST /api/v1/gates`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1GatesResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Gates.PostApiV1GatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1Gates423Error1"` [423] `ApiV1Gates423Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Gates.PostApiV1GatesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1GatesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GatesRequest` | `apiV1GatesRequestSchema` | `src/models/api-v1-gates-request.ts` |
| `ApiV1GatesResponse` | `apiV1GatesResponseSchema` | `src/models/api-v1-gates-response.ts` |
| `ApiV1Gates423Error1` | `apiV1Gates423Error1Schema` | `src/models/api-v1-gates423-error1.ts` |

### postApiV1GatesByIdCancel

- **Signature**: `postApiV1GatesByIdCancel(request: Gates.PostApiV1GatesByIdCancelRequest, options?: RequestOptions): ApiPromise<ApiV1GatesCancelResponse, Gates.PostApiV1GatesByIdCancelError>`
- **Wire**: `POST /api/v1/gates/{id}/cancel`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1GatesCancelResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Gates.PostApiV1GatesByIdCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1GatesCancel403Error1"` [403] `ApiV1GatesCancel403Error1` · `"apiV1GatesCancel409Error1"` [409] `ApiV1GatesCancel409Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Gates.PostApiV1GatesByIdCancelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1GatesCancelRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GatesCancelRequest` | `apiV1GatesCancelRequestSchema` | `src/models/api-v1-gates-cancel-request.ts` |
| `ApiV1GatesCancelResponse` | `apiV1GatesCancelResponseSchema` | `src/models/api-v1-gates-cancel-response.ts` |
| `ApiV1GatesCancel403Error1` | `apiV1GatesCancel403Error1Schema` | `src/models/api-v1-gates-cancel403-error1.ts` |
| `ApiV1GatesCancel409Error1` | `apiV1GatesCancel409Error1Schema` | `src/models/api-v1-gates-cancel409-error1.ts` |

### postApiV1GatesByIdExecution

- **Signature**: `postApiV1GatesByIdExecution(request: Gates.PostApiV1GatesByIdExecutionRequest, options?: RequestOptions): ApiPromise<ApiV1GatesExecutionResponse, Gates.PostApiV1GatesByIdExecutionError>`
- **Wire**: `POST /api/v1/gates/{id}/execution`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1GatesExecutionResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Gates.PostApiV1GatesByIdExecutionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1GatesExecution403Error1"` [403] `ApiV1GatesExecution403Error1` · `"apiV1GatesExecution409Error1"` [409] `ApiV1GatesExecution409Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Gates.PostApiV1GatesByIdExecutionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1GatesExecutionRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GatesExecutionRequest` | `apiV1GatesExecutionRequestSchema` | `src/models/api-v1-gates-execution-request.ts` |
| `ApiV1GatesExecutionResponse` | `apiV1GatesExecutionResponseSchema` | `src/models/api-v1-gates-execution-response.ts` |
| `ApiV1GatesExecution403Error1` | `apiV1GatesExecution403Error1Schema` | `src/models/api-v1-gates-execution403-error1.ts` |
| `ApiV1GatesExecution409Error1` | `apiV1GatesExecution409Error1Schema` | `src/models/api-v1-gates-execution409-error1.ts` |

### postApiV1GatesByIdRelease

- **Signature**: `postApiV1GatesByIdRelease(request: Gates.PostApiV1GatesByIdReleaseRequest, options?: RequestOptions): ApiPromise<ApiV1GatesReleaseResponse, Gates.PostApiV1GatesByIdReleaseError>`
- **Wire**: `POST /api/v1/gates/{id}/release`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1GatesReleaseResponse`
- **Error**: `DeliverdError` with `kind: "api"`, an instance of `Gates.PostApiV1GatesByIdReleaseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiV1GatesRelease403Error1"` [403] `ApiV1GatesRelease403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Gates.PostApiV1GatesByIdReleaseRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV1GatesReleaseRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GatesReleaseRequest` | `apiV1GatesReleaseRequestSchema` | `src/models/api-v1-gates-release-request.ts` |
| `ApiV1GatesReleaseResponse` | `apiV1GatesReleaseResponseSchema` | `src/models/api-v1-gates-release-response.ts` |
| `ApiV1GatesRelease403Error1` | `apiV1GatesRelease403Error1Schema` | `src/models/api-v1-gates-release403-error1.ts` |

### postApiV1GatesVerifyToken

- **Signature**: `postApiV1GatesVerifyToken(request?: Gates.PostApiV1GatesVerifyTokenRequest, options?: RequestOptions): ApiPromise<ApiV1GatesVerifyTokenResponse, ApiError>`
- **Wire**: `POST /api/v1/gates/verify-token`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1GatesVerifyTokenResponse`
- **Error**: `DeliverdError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Gates.PostApiV1GatesVerifyTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1GatesVerifyTokenRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GatesVerifyTokenRequest` | `apiV1GatesVerifyTokenRequestSchema` | `src/models/api-v1-gates-verify-token-request.ts` |
| `ApiV1GatesVerifyTokenResponse` | `apiV1GatesVerifyTokenResponseSchema` | `src/models/api-v1-gates-verify-token-response.ts` |

