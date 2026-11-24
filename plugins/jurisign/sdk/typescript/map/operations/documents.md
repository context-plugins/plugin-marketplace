<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 5 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `juri-sign`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDocument

- **Signature**: `deleteDocument(request: Documents.DeleteDocumentRequest, options?: RequestOptions): ApiPromise<MessageResponse, Documents.DeleteDocumentError>`
- **Wire**: `DELETE /documents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessageResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Documents.DeleteDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"messageResponse3"` [422] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.DeleteDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### downloadDocument

- **Signature**: `downloadDocument(request: Documents.DownloadDocumentRequest, options?: RequestOptions): ApiPromise<BinaryContent, Documents.DownloadDocumentError>`
- **Wire**: `GET /documents/{id}/download`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Documents.DownloadDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.DownloadDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### getDocument

- **Signature**: `getDocument(request: Documents.GetDocumentRequest, options?: RequestOptions): ApiPromise<DocumentsResponse1, Documents.GetDocumentError>`
- **Wire**: `GET /documents/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Documents.GetDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"messageResponse2"` [404] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.GetDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentsResponse1` | `documentsResponse1Schema` | `src/models/documents-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### listDocuments

- **Signature**: `listDocuments(request?: Documents.ListDocumentsRequest, options?: RequestOptions): ApiPromise<DocumentsResponse, Documents.ListDocumentsError>`
- **Wire**: `GET /documents`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentsResponse`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Documents.ListDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.ListDocumentsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | — | `StatusJuriSignDocumentsApi` | no | — |
| `search` | `query` | — | `string` | no | — |
| `perPage` | `query` | `per_page` | `number` | no | `20` |
| `page` | `query` | — | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusJuriSignDocumentsApi` | `statusJuriSignDocumentsApiSchema` | `src/models/status-juri-sign-documents-api.ts` |
| `DocumentsResponse` | `documentsResponseSchema` | `src/models/documents-response.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |

### uploadDocument

- **Signature**: `uploadDocument(request: Documents.UploadDocumentRequest, options?: RequestOptions): ApiPromise<DocumentsResponse1, Documents.UploadDocumentError>`
- **Wire**: `POST /documents`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocumentsResponse1`
- **Error**: `JuriSignError` with `kind: "api"`, an instance of `Documents.UploadDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"messageResponse"` [401] `MessageResponse` · `"validationError1"` [422] `ValidationError1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.UploadDocumentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |
| `title` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentsResponse1` | `documentsResponse1Schema` | `src/models/documents-response1.ts` |
| `MessageResponse` | `messageResponseSchema` | `src/models/message-response.ts` |
| `ValidationError1` | `validationError1Schema` | `src/models/validation-error1.ts` |

