<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `curlec/apis/documents.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.documents.fetch_document

- **Route**: `GET /documents/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_document(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Document`
- **Returns (raw)**: `ApiResult[Document, FetchDocumentErrorBody]`
- **Error**: `FetchDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Document` | `curlec/models/document.py` |
| `FetchDocumentErrorBody` | `curlec/errors/fetch_document_error.py` |
| `Error` | `curlec/models/error.py` |

### client.documents.fetch_document_content

- **Route**: `POST /documents/{id}/content`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_document_content(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, FetchDocumentContentErrorBody]`
- **Error**: `FetchDocumentContentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FetchDocumentContentErrorBody` | `curlec/errors/fetch_document_content_error.py` |
| `Error` | `curlec/models/error.py` |

### client.documents.upload_document

- **Route**: `POST /documents`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def upload_document(file: FileInput, purpose: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`, `purpose`
- **Params**: `file` — multipart file · `purpose` — multipart field
- **Returns (parsed)**: `Document`
- **Returns (raw)**: `ApiResult[Document, UploadDocumentErrorBody]`
- **Error**: `UploadDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Document` | `curlec/models/document.py` |
| `UploadDocumentErrorBody` | `curlec/errors/upload_document_error.py` |
| `Error` | `curlec/models/error.py` |

