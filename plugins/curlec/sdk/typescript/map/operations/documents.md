<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `src/resources/documents.ts` · 3 operations · Request and error types: namespace `Documents`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchDocument

- **Signature**: `fetchDocument(request: Documents.FetchDocumentRequest, options?: RequestOptions): ApiPromise<Document, Documents.FetchDocumentError>`
- **Wire**: `GET /documents/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Document`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Documents.FetchDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.FetchDocumentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Document` | `documentSchema` | `src/models/document.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchDocumentContent

- **Signature**: `fetchDocumentContent(request: Documents.FetchDocumentContentRequest, options?: RequestOptions): ApiPromise<BinaryContent, Documents.FetchDocumentContentError>`
- **Wire**: `POST /documents/{id}/content`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Documents.FetchDocumentContentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.FetchDocumentContentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### uploadDocument

- **Signature**: `uploadDocument(request: Documents.UploadDocumentRequest, options?: RequestOptions): ApiPromise<Document, Documents.UploadDocumentError>`
- **Wire**: `POST /documents`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `multipart/form-data` — every field marked `form`. `file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Document`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Documents.UploadDocumentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Documents.UploadDocumentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `file` | `form` | `FileInput` | yes |
| `purpose` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Document` | `documentSchema` | `src/models/document.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

