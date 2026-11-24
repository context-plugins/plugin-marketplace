<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recalls — operations

Accessor: `client.recalls` · Source: `src/resources/recalls.ts` · 6 operations · Request and error types: namespace `Recalls`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `cars-xe`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### downloadRecallsBatchResults

- **Signature**: `downloadRecallsBatchResults(request: Recalls.DownloadRecallsBatchResultsRequest, options?: RequestOptions): ApiPromise<string, Recalls.DownloadRecallsBatchResultsError>`
- **Wire**: `GET /v1/recalls-batch/download`
- **Auth**: any of `apiKeyQuery`, `recallsBatchToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recalls.DownloadRecallsBatchResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error404"` [404] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recalls.DownloadRecallsBatchResultsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `query` | — | `string` | yes |
| `xCarsXeBatchToken` | `header` | `X-CarsXE-Batch-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRecallsBatchResults

- **Signature**: `getRecallsBatchResults(request: Recalls.GetRecallsBatchResultsRequest, options?: RequestOptions): ApiPromise<V1RecallsBatchResultsResponse, Recalls.GetRecallsBatchResultsError>`
- **Wire**: `GET /v1/recalls-batch/results`
- **Auth**: any of `apiKeyQuery`, `recallsBatchToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RecallsBatchResultsResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recalls.GetRecallsBatchResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [409] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recalls.GetRecallsBatchResultsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `query` | — | `string` | yes |
| `xCarsXeBatchToken` | `header` | `X-CarsXE-Batch-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RecallsBatchResultsResponse` | `v1RecallsBatchResultsResponseSchema` | `src/models/v1-recalls-batch-results-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRecallsBatchStatus

- **Signature**: `getRecallsBatchStatus(request: Recalls.GetRecallsBatchStatusRequest, options?: RequestOptions): ApiPromise<V1RecallsBatchStatusResponse, Recalls.GetRecallsBatchStatusError>`
- **Wire**: `GET /v1/recalls-batch/status`
- **Auth**: any of `apiKeyQuery`, `recallsBatchToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RecallsBatchStatusResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recalls.GetRecallsBatchStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recalls.GetRecallsBatchStatusRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `batchId` | `query` | — | `string` | yes |
| `xCarsXeBatchToken` | `header` | `X-CarsXE-Batch-Token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RecallsBatchStatusResponse` | `v1RecallsBatchStatusResponseSchema` | `src/models/v1-recalls-batch-status-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getRecallsByYmm

- **Signature**: `getRecallsByYmm(request: Recalls.GetRecallsByYmmRequest, options?: RequestOptions): ApiPromise<V1RecallsYmmResponse, Recalls.GetRecallsByYmmError>`
- **Wire**: `GET /v1/recalls-ymm`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RecallsYmmResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recalls.GetRecallsByYmmError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recalls.GetRecallsByYmmRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `year` | `query` | `string` | yes |
| `make` | `query` | `string` | yes |
| `model` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RecallsYmmResponse` | `v1RecallsYmmResponseSchema` | `src/models/v1-recalls-ymm-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### getVehicleRecalls

- **Signature**: `getVehicleRecalls(request: Recalls.GetVehicleRecallsRequest, options?: RequestOptions): ApiPromise<V1RecallsResponse, Recalls.GetVehicleRecallsError>`
- **Wire**: `GET /v1/recalls`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1RecallsResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recalls.GetVehicleRecallsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recalls.GetVehicleRecallsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RecallsResponse` | `v1RecallsResponseSchema` | `src/models/v1-recalls-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

### submitRecallsBatch

- **Signature**: `submitRecallsBatch(request: Recalls.SubmitRecallsBatchRequest, options?: RequestOptions): ApiPromise<V1RecallsBatchSubmitResponse, Recalls.SubmitRecallsBatchError>`
- **Wire**: `POST /v1/recalls-batch/submit`
- **Auth**: any of `apiKeyQuery`, `x402Payment`, or anonymous — the first one configured is sent, otherwise nothing
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1RecallsBatchSubmitResponse`
- **Error**: `CarsXeError` with `kind: "api"`, an instance of `Recalls.SubmitRecallsBatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [405] `Error` · `"usageLimitError"` [429] `UsageLimitError` · `"error4"` [500] `Error` · `"error5"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Recalls.SubmitRecallsBatchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1RecallsBatchSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RecallsBatchSubmitRequest` | `v1RecallsBatchSubmitRequestSchema` | `src/models/v1-recalls-batch-submit-request.ts` |
| `V1RecallsBatchSubmitResponse` | `v1RecallsBatchSubmitResponseSchema` | `src/models/v1-recalls-batch-submit-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `UsageLimitError` | `usageLimitErrorSchema` | `src/models/usage-limit-error.ts` |

