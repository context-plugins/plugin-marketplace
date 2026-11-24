<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `juri_sign/apis/documents.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.documents.delete_document

- **Route**: `DELETE /documents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_document(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteDocumentErrorBody]`
- **Error**: `DeleteDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404, 422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `DeleteDocumentErrorBody` | `juri_sign/errors/delete_document_error.py` |

### client.documents.download_document

- **Route**: `GET /documents/{id}/download`
- **Auth**: `bearer_auth`
- **Signature**: `def download_document(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DownloadDocumentErrorBody]`
- **Error**: `DownloadDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadDocumentErrorBody` | `juri_sign/errors/download_document_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.documents.get_document

- **Route**: `GET /documents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_document(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `DocumentsResponse1`
- **Returns (raw)**: `ApiResult[DocumentsResponse1, GetDocumentErrorBody]`
- **Error**: `GetDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentsResponse1` | `juri_sign/models/documents_response1.py` |
| `GetDocumentErrorBody` | `juri_sign/errors/get_document_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.documents.list_documents

- **Route**: `GET /documents`
- **Auth**: `bearer_auth`
- **Signature**: `def list_documents(*, status: StatusJuriSignDocumentsApiOrStr | None = None, search: str | None = None, per_page: int | None = 20, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query · `search` — query · `per_page` — query · `page` — query
- **Returns (parsed)**: `DocumentsResponse`
- **Returns (raw)**: `ApiResult[DocumentsResponse, ListDocumentsErrorBody]`
- **Error**: `ListDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StatusJuriSignDocumentsApiOrStr` | `juri_sign/models/enums/status_juri_sign_documents_api.py` |
| `DocumentsResponse` | `juri_sign/models/documents_response.py` |
| `ListDocumentsErrorBody` | `juri_sign/errors/list_documents_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |

### client.documents.upload_document

- **Route**: `POST /documents`
- **Auth**: `bearer_auth`
- **Signature**: `def upload_document(file: FileInput, *, title: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `file` — multipart file · `title` — multipart field
- **Returns (parsed)**: `DocumentsResponse1`
- **Returns (raw)**: `ApiResult[DocumentsResponse1, UploadDocumentErrorBody]`
- **Error**: `UploadDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `MessageResponse` [401] · `ValidationError1` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentsResponse1` | `juri_sign/models/documents_response1.py` |
| `UploadDocumentErrorBody` | `juri_sign/errors/upload_document_error.py` |
| `MessageResponse` | `juri_sign/models/message_response.py` |
| `ValidationError1` | `juri_sign/models/validation_error1.py` |

