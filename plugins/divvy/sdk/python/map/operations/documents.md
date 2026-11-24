<!-- Generated file — do not edit; regenerated with the SDK. -->

# Documents — operations

Accessor: `client.documents` · Source: `divvy/apis/documents.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.documents.create_bill_document

- **Route**: `POST /v3/documents/bills/{billId}`
- **Server**: `default`
- **Signature**: `def create_bill_document(bill_id: str, name: str, body: list[str], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`, `name`, `body`
- **Params**: `bill_id` — path `billId` · `name` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `DocumentCreateResponseDto`
- **Returns (raw)**: `ApiResult[DocumentCreateResponseDto, CreateBillDocumentErrorBody]`
- **Error**: `CreateBillDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentCreateResponseDto` | `divvy/models/document_create_response_dto.py` |
| `CreateBillDocumentErrorBody` | `divvy/errors/create_bill_document_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.documents.get_document

- **Route**: `GET /v3/documents/{documentId}`
- **Server**: `default`
- **Signature**: `def get_document(document_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `document_id`
- **Params**: `document_id` — path `documentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `DocumentResponseDto`
- **Returns (raw)**: `ApiResult[DocumentResponseDto, GetDocumentErrorBody]`
- **Error**: `GetDocumentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentResponseDto` | `divvy/models/document_response_dto.py` |
| `GetDocumentErrorBody` | `divvy/errors/get_document_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.documents.list_documents

- **Route**: `GET /v3/documents/bills/{billId}`
- **Server**: `default`
- **Signature**: `def list_documents(bill_id: str, *, max_: int | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `bill_id`
- **Params**: `bill_id` — path `billId` · `max_` — query `max` · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoDocumentResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoDocumentResponseDto, ListDocumentsErrorBody]`
- **Error**: `ListDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoDocumentResponseDto` | `divvy/models/list_response_dto_document_response_dto.py` |
| `ListDocumentsErrorBody` | `divvy/errors/list_documents_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.documents.upload_status

- **Route**: `GET /v3/documents/upload-status`
- **Server**: `default`
- **Signature**: `def upload_status(ids: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ids`
- **Params**: `ids` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `list[DocumentUploadStatusResponseDto]`
- **Returns (raw)**: `ApiResult[list[DocumentUploadStatusResponseDto], UploadStatusErrorBody]`
- **Error**: `UploadStatusErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentUploadStatusResponseDto` | `divvy/models/document_upload_status_response_dto.py` |
| `UploadStatusErrorBody` | `divvy/errors/upload_status_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

