<!-- Generated file — do not edit; regenerated with the SDK. -->

# Jobs — operations

Accessor: `client.jobs` · Source: `src/resources/jobs.ts` · 2 operations · Request and error types: namespace `Jobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `rendex`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBatchStatus

- **Signature**: `getBatchStatus(request: Jobs.GetBatchStatusRequest, options?: RequestOptions): ApiPromise<BatchStatusResponse, Jobs.GetBatchStatusError>`
- **Wire**: `GET /v1/batches/{batchId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BatchStatusResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Jobs.GetBatchStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetBatchStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `batchId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchStatusResponse` | `batchStatusResponseSchema` | `src/models/batch-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getJobStatus

- **Signature**: `getJobStatus(request: Jobs.GetJobStatusRequest, options?: RequestOptions): ApiPromise<JobStatusResponse, Jobs.GetJobStatusError>`
- **Wire**: `GET /v1/jobs/{jobId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JobStatusResponse`
- **Error**: `RendexError` with `kind: "api"`, an instance of `Jobs.GetJobStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Jobs.GetJobStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `JobStatusResponse` | `jobStatusResponseSchema` | `src/models/job-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

