<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentsApi — operations

Accessor: `client.documentsApi` · Source: `src/resources/documents-api.ts` · 6 operations · Request and error types: namespace `DocumentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `glean-indexing-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkIndexDocuments

- **Signature**: `bulkIndexDocuments(request: DocumentsApi.BulkIndexDocumentsRequestParams, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.BulkIndexDocumentsError>`
- **Wire**: `POST /api/index/v1/bulkindexdocuments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `DocumentsApi.BulkIndexDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.BulkIndexDocumentsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkIndexDocumentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkIndexDocumentsRequest` | `bulkIndexDocumentsRequestSchema` | `src/models/bulk-index-documents-request.ts` |

### deleteDocument

- **Signature**: `deleteDocument(request: DocumentsApi.DeleteDocumentRequestParams, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.DeleteDocumentError>`
- **Wire**: `POST /api/index/v1/deletedocument`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `DocumentsApi.DeleteDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.DeleteDocumentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteDocumentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteDocumentRequest` | `deleteDocumentRequestSchema` | `src/models/delete-document-request.ts` |

### indexDocument

- **Signature**: `indexDocument(request: DocumentsApi.IndexDocumentRequestParams, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.IndexDocumentError>`
- **Wire**: `POST /api/index/v1/indexdocument`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `DocumentsApi.IndexDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.IndexDocumentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IndexDocumentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexDocumentRequest` | `indexDocumentRequestSchema` | `src/models/index-document-request.ts` |

### indexDocuments

- **Signature**: `indexDocuments(request: DocumentsApi.IndexDocumentsRequestParams, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.IndexDocumentsError>`
- **Wire**: `POST /api/index/v1/indexdocuments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `DocumentsApi.IndexDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.IndexDocumentsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IndexDocumentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IndexDocumentsRequest` | `indexDocumentsRequestSchema` | `src/models/index-documents-request.ts` |

### schedulesTheProcessingOfUploadedDocuments

- **Signature**: `schedulesTheProcessingOfUploadedDocuments(request: DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError>`
- **Wire**: `POST /api/index/v1/processalldocuments`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.SchedulesTheProcessingOfUploadedDocumentsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ProcessAllDocumentsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProcessAllDocumentsRequest` | `processAllDocumentsRequestSchema` | `src/models/process-all-documents-request.ts` |

### updateDocumentPermissions

- **Signature**: `updateDocumentPermissions(request: DocumentsApi.UpdateDocumentPermissionsRequest, options?: RequestOptions): ApiPromise<undefined, DocumentsApi.UpdateDocumentPermissionsError>`
- **Wire**: `POST /api/index/v1/updatepermissions`
- **Auth**: `apiToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `GleanIndexingApiError` with `kind: "api"`, an instance of `DocumentsApi.UpdateDocumentPermissionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error409"` [409] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentsApi.UpdateDocumentPermissionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdatePermissionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePermissionsRequest` | `updatePermissionsRequestSchema` | `src/models/update-permissions-request.ts` |

