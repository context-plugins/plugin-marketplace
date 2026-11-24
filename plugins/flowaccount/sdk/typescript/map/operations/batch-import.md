<!-- Generated file — do not edit; regenerated with the SDK. -->

# BatchImport — operations

Accessor: `client.batchImport` · Source: `src/resources/batch-import.ts` · 11 operations · Request types: namespace `BatchImport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `flow-account`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchImportDeleteCustomTemplate

- **Signature**: `batchImportDeleteCustomTemplate(request: BatchImport.BatchImportDeleteCustomTemplateRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `DELETE /{culture}/cash-invoices/custom-template/{templateId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportDeleteCustomTemplateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `templateId` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### batchImportGenerateBacthIdMetadata

- **Signature**: `batchImportGenerateBacthIdMetadata(request: BatchImport.BatchImportGenerateBacthIdMetadataRequest, options?: RequestOptions): ApiPromise<BatchImportMetadata, ApiError>`
- **Wire**: `GET /{culture}/cash-invoices/batch-metadata`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BatchImportMetadata`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportGenerateBacthIdMetadataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `fileName` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchImportMetadata` | `batchImportMetadataSchema` | `src/models/batch-import-metadata.ts` |

### batchImportGetBatchS3Data

- **Signature**: `batchImportGetBatchS3Data(request: BatchImport.BatchImportGetBatchS3DataRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/cash-invoices/get-batch-s3-data/{batchId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportGetBatchS3DataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `batchId` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### batchImportGetCustomTemplate

- **Signature**: `batchImportGetCustomTemplate(request: BatchImport.BatchImportGetCustomTemplateRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/cash-invoices/custom-template/{templateId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportGetCustomTemplateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `templateId` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### batchImportGetOrgingalFile

- **Signature**: `batchImportGetOrgingalFile(request: BatchImport.BatchImportGetOrgingalFileRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `GET /{culture}/cash-invoices/get-batch-import-org-file/{batchId}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportGetOrgingalFileRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `batchId` | `path` | `string` | yes |
| `culture` | `path` | `string` | yes |

### batchImportGetPresign

- **Signature**: `batchImportGetPresign(request: BatchImport.BatchImportGetPresignRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/cash-invoices/get-presign-for-upload-simpledoc`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportGetPresignRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `id` | `query` | `number` | no |
| `body` | `body` | `BatchImportPayload` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchImportPayload` | `batchImportPayloadSchema` | `src/models/batch-import-payload.ts` |

### batchImportMarkViewed

- **Signature**: `batchImportMarkViewed(request: BatchImport.BatchImportMarkViewedRequest, options?: RequestOptions): ApiPromise<boolean, ApiError>`
- **Wire**: `POST /{culture}/cash-invoices/mark-viewed`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON number
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportMarkViewedRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `userId` | `query` | `number` | no |
| `batchId` | `query` | `string` | no |
| `body` | `body` | `number` | yes |

### batchImportQueryBatch

- **Signature**: `batchImportQueryBatch(request: BatchImport.BatchImportQueryBatchRequest, options?: RequestOptions): ApiPromise<BatchStatus, ApiError>`
- **Wire**: `POST /{culture}/cash-invoices/query-batch`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON string
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchStatus`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportQueryBatchRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `status` | `query` | `BatchImportStatus` | no |
| `body` | `body` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchImportStatus` | `batchImportStatusSchema` | `src/models/batch-import-status.ts` |
| `BatchStatus` | `batchStatusSchema` | `src/models/batch-status.ts` |

### batchImportQueryBatchHistory

- **Signature**: `batchImportQueryBatchHistory(request: BatchImport.BatchImportQueryBatchHistoryRequest, options?: RequestOptions): ApiPromise<BatchHistory, ApiError>`
- **Wire**: `POST /{culture}/cash-invoices/batch-import-history`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchHistory`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportQueryBatchHistoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchHistory` | `batchHistorySchema` | `src/models/batch-history.ts` |

### batchImportRetrySimpleDocuments

- **Signature**: `batchImportRetrySimpleDocuments(request: BatchImport.BatchImportRetrySimpleDocumentsRequest, options?: RequestOptions): ApiPromise<boolean, ApiError>`
- **Wire**: `POST /{culture}/cash-invoices/retry-simple-documents`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportRetrySimpleDocumentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `BatchImportRetry` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchImportRetry` | `batchImportRetrySchema` | `src/models/batch-import-retry.ts` |

### batchImportUpsertCustomTemplate

- **Signature**: `batchImportUpsertCustomTemplate(request: BatchImport.BatchImportUpsertCustomTemplateRequest, options?: RequestOptions): ApiPromise<BinaryContent, ApiError>`
- **Wire**: `POST /{culture}/cash-invoices/custom-template`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `FlowAccountError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BatchImport.BatchImportUpsertCustomTemplateRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `culture` | `path` | `string` | yes |
| `body` | `body` | `CustomTemplate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomTemplate` | `customTemplateSchema` | `src/models/custom-template.ts` |

