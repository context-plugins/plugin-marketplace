<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentApi — operations

Accessor: `client.documentApi` · Source: `src/resources/document-api.ts` · 6 operations · Request and error types: namespace `DocumentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `skribble`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDocument

- **Server**: `defaultSkribbleDocumentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDocument(request: DocumentApi.DeleteDocumentRequest, options?: RequestOptions): ApiPromise<undefined, DocumentApi.DeleteDocumentError>`
- **Wire**: `DELETE /documents/{DOC_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `DocumentApi.DeleteDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [404] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentApi.DeleteDocumentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | `DOC_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getDocumentContent

- **Server**: `defaultSkribbleDocumentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDocumentContent(request: DocumentApi.GetDocumentContentRequest, options?: RequestOptions): ApiPromise<DocumentContentResponse, DocumentApi.GetDocumentContentError>`
- **Wire**: `GET /documents/{DOC_ID}/content`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentContentResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `DocumentApi.GetDocumentContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentApi.GetDocumentContentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | `DOC_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentContentResponse` | `documentContentResponseSchema` | `src/models/document-content-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getDocumentMetadata

- **Server**: `defaultSkribbleDocumentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDocumentMetadata(request: DocumentApi.GetDocumentMetadataRequest, options?: RequestOptions): ApiPromise<DocumentResponse, DocumentApi.GetDocumentMetadataError>`
- **Wire**: `GET /documents/{DOC_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `DocumentApi.GetDocumentMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentApi.GetDocumentMetadataRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `docId` | `path` | `DOC_ID` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentResponse` | `documentResponseSchema` | `src/models/document-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getDocumentPreview

- **Server**: `defaultSkribbleDocumentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDocumentPreview(request: DocumentApi.GetDocumentPreviewRequest, options?: RequestOptions): ApiPromise<BinaryContent, DocumentApi.GetDocumentPreviewError>`
- **Wire**: `GET /documents/{DOC_ID}/pages/{PAGE_ID}`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `DocumentApi.GetDocumentPreviewError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [404] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentApi.GetDocumentPreviewRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `docId` | `path` | `DOC_ID` | `string` | yes | — |
| `pageId` | `path` | `PAGE_ID` | `number` | yes | — |
| `scale` | `query` | — | `number` | no | `100` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### getDocuments

- **Server**: `defaultSkribbleDocumentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `getDocuments(options?: RequestOptions): ApiPromise<DocumentResponse[], DocumentApi.GetDocumentsError>`
- **Wire**: `GET /documents`
- **Auth**: `bearer`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocumentResponse[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `DocumentApi.GetDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [406] `Problem` · `"problem4"` [429] `Problem` · `"problem5"` [500] `Problem` · `"problem6"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `DocumentResponse` | `documentResponseSchema` | `src/models/document-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

### uploadDocument

- **Server**: `defaultSkribbleDocumentApi` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `uploadDocument(request: DocumentApi.UploadDocumentRequestParams, options?: RequestOptions): ApiPromise<DocumentResponse, DocumentApi.UploadDocumentError>`
- **Wire**: `POST /documents`
- **Auth**: `bearer`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DocumentResponse`
- **Error**: `SkribbleError` with `kind: "api"`, an instance of `DocumentApi.UploadDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problem"` [400] `Problem` · `"problem2"` [401] `Problem` · `"problem3"` [403] `Problem` · `"problem4"` [406] `Problem` · `"problem5"` [429] `Problem` · `"problem6"` [500] `Problem` · `"problem7"` [503] `Problem` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DocumentApi.UploadDocumentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UploadDocumentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UploadDocumentRequest` | `uploadDocumentRequestSchema` | `src/models/upload-document-request.ts` |
| `DocumentResponse` | `documentResponseSchema` | `src/models/document-response.ts` |
| `Problem` | `problemSchema` | `src/models/problem.ts` |

