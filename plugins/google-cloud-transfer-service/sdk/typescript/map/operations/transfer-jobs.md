<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferJobs — operations

Accessor: `client.transferJobs` · Source: `src/resources/transfer-jobs.ts` · 6 operations · Request and error types: namespace `TransferJobs`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-storage-transfer-service`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### storagetransferTransferJobsCreate

- **Signature**: `storagetransferTransferJobsCreate(request: TransferJobs.StoragetransferTransferJobsCreateRequest, options?: RequestOptions): ApiPromise<TransferJob, TransferJobs.StoragetransferTransferJobsCreateError>`
- **Wire**: `POST /v1/transferJobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferJob`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferJobs.StoragetransferTransferJobsCreateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferJobs.StoragetransferTransferJobsCreateRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TransferJob` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferJob` | `transferJobSchema` | `src/models/transfer-job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferJobsDelete

- **Signature**: `storagetransferTransferJobsDelete(request: TransferJobs.StoragetransferTransferJobsDeleteRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, TransferJobs.StoragetransferTransferJobsDeleteError>`
- **Wire**: `DELETE /v1/transferJobs/{transferJobsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferJobs.StoragetransferTransferJobsDeleteError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferJobs.StoragetransferTransferJobsDeleteRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferJobsId` | `path` | `string` | yes |
| `projectId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferJobsGet

- **Signature**: `storagetransferTransferJobsGet(request: TransferJobs.StoragetransferTransferJobsGetRequest, options?: RequestOptions): ApiPromise<TransferJob, TransferJobs.StoragetransferTransferJobsGetError>`
- **Wire**: `GET /v1/transferJobs/{transferJobsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferJob`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferJobs.StoragetransferTransferJobsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferJobs.StoragetransferTransferJobsGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferJobsId` | `path` | `string` | yes |
| `projectId` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferJob` | `transferJobSchema` | `src/models/transfer-job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferJobsList

- **Signature**: `storagetransferTransferJobsList(request: TransferJobs.StoragetransferTransferJobsListRequest, options?: RequestOptions): ApiPromise<ListTransferJobsResponse, TransferJobs.StoragetransferTransferJobsListError>`
- **Wire**: `GET /v1/transferJobs`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTransferJobsResponse`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferJobs.StoragetransferTransferJobsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferJobs.StoragetransferTransferJobsListRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTransferJobsResponse` | `listTransferJobsResponseSchema` | `src/models/list-transfer-jobs-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferJobsPatch

- **Signature**: `storagetransferTransferJobsPatch(request: TransferJobs.StoragetransferTransferJobsPatchRequest, options?: RequestOptions): ApiPromise<TransferJob, TransferJobs.StoragetransferTransferJobsPatchError>`
- **Wire**: `PATCH /v1/transferJobs/{transferJobsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferJob`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferJobs.StoragetransferTransferJobsPatchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferJobs.StoragetransferTransferJobsPatchRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferJobsId` | `path` | `string` | yes |
| `body` | `body` | `UpdateTransferJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTransferJobRequest` | `updateTransferJobRequestSchema` | `src/models/update-transfer-job-request.ts` |
| `TransferJob` | `transferJobSchema` | `src/models/transfer-job.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferJobsRun

- **Signature**: `storagetransferTransferJobsRun(request: TransferJobs.StoragetransferTransferJobsRunRequest, options?: RequestOptions): ApiPromise<Operation, TransferJobs.StoragetransferTransferJobsRunError>`
- **Wire**: `POST /v1/transferJobs/{transferJobsId}:run`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Operation`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferJobs.StoragetransferTransferJobsRunError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferJobs.StoragetransferTransferJobsRunRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferJobsId` | `path` | `string` | yes |
| `body` | `body` | `RunTransferJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RunTransferJobRequest` | `runTransferJobRequestSchema` | `src/models/run-transfer-job-request.ts` |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

