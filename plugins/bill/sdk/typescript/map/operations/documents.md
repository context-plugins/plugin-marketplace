<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 4 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBillDocument

- **Signature**: `createBillDocument(request: Documents.CreateBillDocumentRequest, options?: RequestOptions): ApiPromise<DocumentCreateResponseDto, Documents.CreateBillDocumentError>`
- **Wire**: `POST /v3/documents/bills/{billId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocumentCreateResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Documents.CreateBillDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.CreateBillDocumentRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `name` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentCreateResponseDto` | `documentCreateResponseDtoSchema` | `src/models/document-create-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getDocument

- **Signature**: `getDocument(request: Documents.GetDocumentRequest, options?: RequestOptions): ApiPromise<DocumentResponseDto, Documents.GetDocumentError>`
- **Wire**: `GET /v3/documents/{documentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Documents.GetDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetDocumentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `documentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentResponseDto` | `documentResponseDtoSchema` | `src/models/document-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listDocuments

- **Signature**: `listDocuments(request: Documents.ListDocumentsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoDocumentResponseDto, Documents.ListDocumentsError>`
- **Wire**: `GET /v3/documents/bills/{billId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoDocumentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `Documents.ListDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.ListDocumentsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `billId` | `path` | `string` | yes |
| `max` | `query` | `number` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoDocumentResponseDto` | `listResponseDtoDocumentResponseDtoSchema` | `src/models/list-response-dto-document-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### uploadStatus

- **Signature**: `uploadStatus(request: Documents.UploadStatusRequest, options?: RequestOptions): ApiPromise<DocumentUploadStatusResponseDto[], Documents.UploadStatusError>`
- **Wire**: `GET /v3/documents/upload-status`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentUploadStatusResponseDto[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `BillError` with `kind: "api"`, an instance of `Documents.UploadStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.UploadStatusRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `ids` | `query` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentUploadStatusResponseDto` | `documentUploadStatusResponseDtoSchema` | `src/models/document-upload-status-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

