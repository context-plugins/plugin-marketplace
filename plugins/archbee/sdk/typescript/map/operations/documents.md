<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 5 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `archbee`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDocument

- **Signature**: `deleteDocument(request: Documents.DeleteDocumentRequest, options?: RequestOptions): ApiPromise<DocResponse, Documents.DeleteDocumentError>`
- **Wire**: `DELETE /doc`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Documents.DeleteDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"doc400Error1"` [400] `Doc400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.DeleteDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DocRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocRequest` | `docRequestSchema` | `src/models/doc-request.ts` |
| `DocResponse` | `docResponseSchema` | `src/models/doc-response.ts` |
| `Doc400Error1` | `doc400Error1Schema` | `src/models/doc400-error1.ts` |

### getDocument

- **Signature**: `getDocument(options?: RequestOptions): ApiPromise<DocResponse1, Documents.GetDocumentError>`
- **Wire**: `GET /doc`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocResponse1`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Documents.GetDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"doc400Error1"` [400] `Doc400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DocResponse1` | `docResponse1Schema` | `src/models/doc-response1.ts` |
| `Doc400Error1` | `doc400Error1Schema` | `src/models/doc400-error1.ts` |

### importContent

- **Signature**: `importContent(request: Documents.ImportContentRequest, options?: RequestOptions): ApiPromise<ImportContentResponse, Documents.ImportContentError>`
- **Wire**: `POST /import-content`
- **Auth**: `bearerAuth`
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ImportContentResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Documents.ImportContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"importContent400Error1"` [400] `ImportContent400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.ImportContentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes | — |
| `type` | `form` | `Type1` | no | `Type1.Markdown` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Type1` | `type1Schema` | `src/models/type1.ts` |
| `ImportContentResponse` | `importContentResponseSchema` | `src/models/import-content-response.ts` |
| `ImportContent400Error1` | `importContent400Error1Schema` | `src/models/import-content400-error1.ts` |

### searchDocument

- **Signature**: `searchDocument(request: Documents.SearchDocumentRequest, options?: RequestOptions): ApiPromise<DocsSearchResponse, Documents.SearchDocumentError>`
- **Wire**: `POST /docs/search`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocsSearchResponse`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Documents.SearchDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"docsSearch400Error1"` [400] `DocsSearch400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.SearchDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DocsSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocsSearchRequest` | `docsSearchRequestSchema` | `src/models/docs-search-request.ts` |
| `DocsSearchResponse` | `docsSearchResponseSchema` | `src/models/docs-search-response.ts` |
| `DocsSearch400Error1` | `docsSearch400Error1Schema` | `src/models/docs-search400-error1.ts` |

### updateCreateDocument

- **Signature**: `updateCreateDocument(request: Documents.UpdateCreateDocumentRequest, options?: RequestOptions): ApiPromise<DocResponse2, Documents.UpdateCreateDocumentError>`
- **Wire**: `POST /doc`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocResponse2`
- **Error**: `ArchbeeError` with `kind: "api"`, an instance of `Documents.UpdateCreateDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"doc400Error1"` [400] `Doc400Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.UpdateCreateDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DocRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocRequest1` | `docRequest1Schema` | `src/models/doc-request1.ts` |
| `DocResponse2` | `docResponse2Schema` | `src/models/doc-response2.ts` |
| `Doc400Error1` | `doc400Error1Schema` | `src/models/doc400-error1.ts` |

