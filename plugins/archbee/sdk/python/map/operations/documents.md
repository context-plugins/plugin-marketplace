<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `archbee/apis/documents.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.documents.delete_document

- **Route**: `DELETE /doc`
- **Auth**: `bearer_auth`
- **Signature**: `def delete_document(body: DocRequest | DocRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DocResponse`
- **Returns (raw)**: `ApiResult[DocResponse, DeleteDocumentErrorBody]`
- **Error**: `DeleteDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Doc400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocRequest` | `archbee/models/doc_request.py` |
| `DocRequestDict` | `archbee/models/doc_request.py` |
| `DocResponse` | `archbee/models/doc_response.py` |
| `DeleteDocumentErrorBody` | `archbee/errors/delete_document_error.py` |
| `Doc400Error1` | `archbee/models/doc400_error1.py` |

### client.documents.get_document

- **Route**: `GET /doc`
- **Auth**: `bearer_auth`
- **Signature**: `def get_document(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DocResponse1`
- **Returns (raw)**: `ApiResult[DocResponse1, GetDocumentErrorBody]`
- **Error**: `GetDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Doc400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocResponse1` | `archbee/models/doc_response1.py` |
| `GetDocumentErrorBody` | `archbee/errors/get_document_error.py` |
| `Doc400Error1` | `archbee/models/doc400_error1.py` |

### client.documents.import_content

- **Route**: `POST /import-content`
- **Auth**: `bearer_auth`
- **Signature**: `def import_content(file: FileInput, *, type_: Type1OrStr | None = Type1.MARKDOWN, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `file`
- **Params**: `file` — multipart file · `type_` — multipart field `type`
- **Returns (parsed)**: `ImportContentResponse`
- **Returns (raw)**: `ApiResult[ImportContentResponse, ImportContentErrorBody]`
- **Error**: `ImportContentErrorBody` — **Case A (typed)**
- **Error arms**: `ImportContent400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Type1OrStr` | `archbee/models/enums/type1.py` |
| `ImportContentResponse` | `archbee/models/import_content_response.py` |
| `ImportContentErrorBody` | `archbee/errors/import_content_error.py` |
| `ImportContent400Error1` | `archbee/models/import_content400_error1.py` |

### client.documents.search_document

- **Route**: `POST /docs/search`
- **Auth**: `bearer_auth`
- **Signature**: `def search_document(body: DocsSearchRequest | DocsSearchRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DocsSearchResponse`
- **Returns (raw)**: `ApiResult[DocsSearchResponse, SearchDocumentErrorBody]`
- **Error**: `SearchDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `DocsSearch400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocsSearchRequest` | `archbee/models/docs_search_request.py` |
| `DocsSearchRequestDict` | `archbee/models/docs_search_request.py` |
| `DocsSearchResponse` | `archbee/models/docs_search_response.py` |
| `SearchDocumentErrorBody` | `archbee/errors/search_document_error.py` |
| `DocsSearch400Error1` | `archbee/models/docs_search400_error1.py` |

### client.documents.update_create_document

- **Route**: `POST /doc`
- **Auth**: `bearer_auth`
- **Signature**: `def update_create_document(body: DocRequest1 | DocRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DocResponse2`
- **Returns (raw)**: `ApiResult[DocResponse2, UpdateCreateDocumentErrorBody]`
- **Error**: `UpdateCreateDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `Doc400Error1` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocRequest1` | `archbee/models/doc_request1.py` |
| `DocRequest1Dict` | `archbee/models/doc_request1.py` |
| `DocResponse2` | `archbee/models/doc_response2.py` |
| `UpdateCreateDocumentErrorBody` | `archbee/errors/update_create_document_error.py` |
| `Doc400Error1` | `archbee/models/doc400_error1.py` |

