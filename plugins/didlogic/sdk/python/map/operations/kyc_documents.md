<!-- Generated file — do not edit; regenerated with the SDK. -->

# KycDocuments — operations

Accessor: `client.kyc_documents` · Source: `did_logic/apis/kyc_documents.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.kyc_documents.documents_countries

- **Route**: `GET /api/v2/documents/countries`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_countries(*, name_contains: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `name_contains` — query
- **Returns (parsed)**: `ApiV2DocumentsCountriesResponse`
- **Returns (raw)**: `ApiResult[ApiV2DocumentsCountriesResponse, DocumentsCountriesErrorBody]`
- **Error**: `DocumentsCountriesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2DocumentsCountries401Error1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2DocumentsCountriesResponse` | `did_logic/models/api_v2_documents_countries_response.py` |
| `DocumentsCountriesErrorBody` | `did_logic/errors/documents_countries_error.py` |
| `ApiV2DocumentsCountries401Error1` | `did_logic/models/api_v2_documents_countries401_error1.py` |

### client.kyc_documents.documents_create

- **Route**: `POST /api/v2/documents`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_create(document_name: str, document_doc_type: DocumentDocTypeOrStr, document_files_frontside: FileInput, document_identity_id: int, document_country: str, *, document_files_backside: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `document_name`, `document_doc_type`, `document_files_frontside`, `document_identity_id`, `document_country`
- **Params**: `document_name` — multipart field `document[name]` · `document_doc_type` — multipart field `document[doc_type]` · `document_files_frontside` — multipart file `document[files][frontside]` · `document_identity_id` — multipart field `document[identity_id]` · `document_country` — multipart field `document[country]` · `document_files_backside` — multipart file `document[files][backside]`
- **Returns (parsed)**: `ApiV2DocumentsResponse1`
- **Returns (raw)**: `ApiResult[ApiV2DocumentsResponse1, DocumentsCreateErrorBody]`
- **Error**: `DocumentsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Documents401Error1` [401] · `Error` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentDocTypeOrStr` | `did_logic/models/enums/document_doc_type.py` |
| `ApiV2DocumentsResponse1` | `did_logic/models/api_v2_documents_response1.py` |
| `DocumentsCreateErrorBody` | `did_logic/errors/documents_create_error.py` |
| `ApiV2Documents401Error1` | `did_logic/models/api_v2_documents401_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.kyc_documents.documents_destroy

- **Route**: `DELETE /api/v2/documents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_destroy(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DocumentsDestroyErrorBody]`
- **Error**: `DocumentsDestroyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Documents401Error1` [401] · `ApiV2Documents404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentsDestroyErrorBody` | `did_logic/errors/documents_destroy_error.py` |
| `ApiV2Documents401Error1` | `did_logic/models/api_v2_documents401_error1.py` |
| `ApiV2Documents404Error1` | `did_logic/models/api_v2_documents404_error1.py` |

### client.kyc_documents.documents_files_download_file

- **Route**: `GET /api/v2/documents/{id}/files/{role}`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_files_download_file(id_: int, role: RoleOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `role`
- **Params**: `id_` — path `id` · `role` — path
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, DocumentsFilesDownloadFileErrorBody]`
- **Error**: `DocumentsFilesDownloadFileErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2DocumentsFiles401Error1` [401] · `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RoleOrStr` | `did_logic/models/enums/role.py` |
| `DocumentsFilesDownloadFileErrorBody` | `did_logic/errors/documents_files_download_file_error.py` |
| `ApiV2DocumentsFiles401Error1` | `did_logic/models/api_v2_documents_files401_error1.py` |
| `Error` | `did_logic/models/error.py` |

### client.kyc_documents.documents_index

- **Route**: `GET /api/v2/documents`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_index(*, ids: str | None = None, identity_id: int | None = None, approvement_status: ApprovementStatusOrStr | None = None, upload_date_from: Date | None = None, upload_date_to: Date | None = None, order_by: str | None = None, order: OrderOrStr | None = Order.DESC, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `ids` — query · `identity_id` — query · `approvement_status` — query · `upload_date_from` — query · `upload_date_to` — query · `order_by` — query · `order` — query · `page` — query · `per_page` — query
- **Returns (parsed)**: `ApiV2DocumentsResponse`
- **Returns (raw)**: `ApiResult[ApiV2DocumentsResponse, DocumentsIndexErrorBody]`
- **Error**: `DocumentsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Documents401Error1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApprovementStatusOrStr` | `did_logic/models/enums/approvement_status.py` |
| `OrderOrStr` | `did_logic/models/enums/order.py` |
| `ApiV2DocumentsResponse` | `did_logic/models/api_v2_documents_response.py` |
| `DocumentsIndexErrorBody` | `did_logic/errors/documents_index_error.py` |
| `ApiV2Documents401Error1` | `did_logic/models/api_v2_documents401_error1.py` |

### client.kyc_documents.documents_show

- **Route**: `GET /api/v2/documents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_show(id_: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV2DocumentsResponse2`
- **Returns (raw)**: `ApiResult[ApiV2DocumentsResponse2, DocumentsShowErrorBody]`
- **Error**: `DocumentsShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Documents401Error1` [401] · `ApiV2Documents404Error1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2DocumentsResponse2` | `did_logic/models/api_v2_documents_response2.py` |
| `DocumentsShowErrorBody` | `did_logic/errors/documents_show_error.py` |
| `ApiV2Documents401Error1` | `did_logic/models/api_v2_documents401_error1.py` |
| `ApiV2Documents404Error1` | `did_logic/models/api_v2_documents404_error1.py` |

### client.kyc_documents.documents_update

- **Route**: `PUT /api/v2/documents/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def documents_update(id_: int, body: ApiV2DocumentsRequest | ApiV2DocumentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV2DocumentsResponse3`
- **Returns (raw)**: `ApiResult[ApiV2DocumentsResponse3, DocumentsUpdateErrorBody]`
- **Error**: `DocumentsUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV2Documents401Error1` [401] · `ApiV2Documents404Error1` [404] · `Error` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2DocumentsRequest` | `did_logic/models/api_v2_documents_request.py` |
| `ApiV2DocumentsRequestDict` | `did_logic/models/api_v2_documents_request.py` |
| `ApiV2DocumentsResponse3` | `did_logic/models/api_v2_documents_response3.py` |
| `DocumentsUpdateErrorBody` | `did_logic/errors/documents_update_error.py` |
| `ApiV2Documents401Error1` | `did_logic/models/api_v2_documents401_error1.py` |
| `ApiV2Documents404Error1` | `did_logic/models/api_v2_documents404_error1.py` |
| `Error` | `did_logic/models/error.py` |

