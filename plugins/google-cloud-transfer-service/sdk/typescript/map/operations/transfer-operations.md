<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferOperations — operations

Accessor: `client.transferOperations` · Source: `src/resources/transfer-operations.ts` · 5 operations · Request and error types: namespace `TransferOperations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `google-cloud-storage-transfer-service`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### storagetransferTransferOperationsCancel

- **Signature**: `storagetransferTransferOperationsCancel(request: TransferOperations.StoragetransferTransferOperationsCancelRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, TransferOperations.StoragetransferTransferOperationsCancelError>`
- **Wire**: `POST /v1/transferOperations/{transferOperationsId}:cancel`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferOperations.StoragetransferTransferOperationsCancelError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferOperations.StoragetransferTransferOperationsCancelRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferOperationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferOperationsGet

- **Signature**: `storagetransferTransferOperationsGet(request: TransferOperations.StoragetransferTransferOperationsGetRequest, options?: RequestOptions): ApiPromise<Operation, TransferOperations.StoragetransferTransferOperationsGetError>`
- **Wire**: `GET /v1/transferOperations/{transferOperationsId}`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Operation`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferOperations.StoragetransferTransferOperationsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferOperations.StoragetransferTransferOperationsGetRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferOperationsId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Operation` | `operationSchema` | `src/models/operation.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferOperationsList

- **Signature**: `storagetransferTransferOperationsList(request: TransferOperations.StoragetransferTransferOperationsListRequest, options?: RequestOptions): ApiPromise<ListOperationsResponse, TransferOperations.StoragetransferTransferOperationsListError>`
- **Wire**: `GET /v1/transferOperations`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOperationsResponse`
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferOperations.StoragetransferTransferOperationsListError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferOperations.StoragetransferTransferOperationsListRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `filter` | `query` | `string` | yes |
| `pageSize` | `query` | `number` | no |
| `pageToken` | `query` | `string` | no |
| `returnPartialSuccess` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOperationsResponse` | `listOperationsResponseSchema` | `src/models/list-operations-response.ts` |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferOperationsPause

- **Signature**: `storagetransferTransferOperationsPause(request: TransferOperations.StoragetransferTransferOperationsPauseRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, TransferOperations.StoragetransferTransferOperationsPauseError>`
- **Wire**: `POST /v1/transferOperations/{transferOperationsId}:pause`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferOperations.StoragetransferTransferOperationsPauseError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferOperations.StoragetransferTransferOperationsPauseRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferOperationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

### storagetransferTransferOperationsResume

- **Signature**: `storagetransferTransferOperationsResume(request: TransferOperations.StoragetransferTransferOperationsResumeRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, TransferOperations.StoragetransferTransferOperationsResumeError>`
- **Wire**: `POST /v1/transferOperations/{transferOperationsId}:resume`
- **Auth**: any of `oauth2`, `apiKey` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `GoogleCloudStorageTransferServiceError` with `kind: "api"`, an instance of `TransferOperations.StoragetransferTransferOperationsResumeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"googleRpcError"` [4XX wildcard] `GoogleRpcError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransferOperations.StoragetransferTransferOperationsResumeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `transferOperationsId` | `path` | `string` | yes |
| `body` | `body` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GoogleRpcError` | `googleRpcErrorSchema` | `src/models/google-rpc-error.ts` |

