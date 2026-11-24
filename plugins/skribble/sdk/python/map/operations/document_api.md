<!-- Generated file — do not edit; regenerated with the SDK. -->

# DocumentApi — operations

Accessor: `client.document_api` · Source: `skribble/apis/document_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.document_api.delete_document

- **Route**: `DELETE /documents/{DOC_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_document_api`
- **Signature**: `def delete_document(doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_id`
- **Params**: `doc_id` — path `DOC_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDocumentErrorBody]`
- **Error**: `DeleteDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDocumentErrorBody` | `skribble/errors/delete_document_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.document_api.get_document_content

- **Route**: `GET /documents/{DOC_ID}/content`
- **Auth**: `bearer`
- **Server**: `default_skribble_document_api`
- **Signature**: `def get_document_content(doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_id`
- **Params**: `doc_id` — path `DOC_ID`
- **Returns (parsed)**: `DocumentContentResponse`
- **Returns (raw)**: `ApiResult[DocumentContentResponse, GetDocumentContentErrorBody]`
- **Error**: `GetDocumentContentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentContentResponse` | `skribble/models/document_content_response.py` |
| `GetDocumentContentErrorBody` | `skribble/errors/get_document_content_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.document_api.get_document_metadata

- **Route**: `GET /documents/{DOC_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_document_api`
- **Signature**: `def get_document_metadata(doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_id`
- **Params**: `doc_id` — path `DOC_ID`
- **Returns (parsed)**: `DocumentResponse`
- **Returns (raw)**: `ApiResult[DocumentResponse, GetDocumentMetadataErrorBody]`
- **Error**: `GetDocumentMetadataErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentResponse` | `skribble/models/document_response.py` |
| `GetDocumentMetadataErrorBody` | `skribble/errors/get_document_metadata_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.document_api.get_document_preview

- **Route**: `GET /documents/{DOC_ID}/pages/{PAGE_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_document_api`
- **Signature**: `def get_document_preview(doc_id: UUID, page_id: int, *, scale: float | None = 100.0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `doc_id`, `page_id`
- **Params**: `doc_id` — path `DOC_ID` · `page_id` — path `PAGE_ID` · `scale` — query
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, GetDocumentPreviewErrorBody]`
- **Error**: `GetDocumentPreviewErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetDocumentPreviewErrorBody` | `skribble/errors/get_document_preview_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.document_api.get_documents

- **Route**: `GET /documents`
- **Auth**: `bearer`
- **Server**: `default_skribble_document_api`
- **Signature**: `def get_documents(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[DocumentResponse]`
- **Returns (raw)**: `ApiResult[list[DocumentResponse], GetDocumentsErrorBody]`
- **Error**: `GetDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentResponse` | `skribble/models/document_response.py` |
| `GetDocumentsErrorBody` | `skribble/errors/get_documents_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.document_api.upload_document

- **Route**: `POST /documents`
- **Auth**: `bearer`
- **Server**: `default_skribble_document_api`
- **Signature**: `def upload_document(body: UploadDocumentRequest | UploadDocumentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DocumentResponse`
- **Returns (raw)**: `ApiResult[DocumentResponse, UploadDocumentErrorBody]`
- **Error**: `UploadDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UploadDocumentRequest` | `skribble/models/upload_document_request.py` |
| `UploadDocumentRequestDict` | `skribble/models/upload_document_request.py` |
| `DocumentResponse` | `skribble/models/document_response.py` |
| `UploadDocumentErrorBody` | `skribble/errors/upload_document_error.py` |
| `Problem` | `skribble/models/problem.py` |

