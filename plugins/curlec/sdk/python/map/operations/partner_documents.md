<!-- Generated file — do not edit; regenerated with the SDK. -->

# PartnerDocuments — operations

Accessor: `client.partner_documents` · Source: `curlec/apis/partner_documents.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.partner_documents.fetch_account_documents

- **Route**: `GET /v2/accounts/{account_id}/documents`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def fetch_account_documents(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `AccountDocument`
- **Returns (raw)**: `ApiResult[AccountDocument, FetchAccountDocumentsErrorBody]`
- **Error**: `FetchAccountDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountDocument` | `curlec/models/account_document.py` |
| `FetchAccountDocumentsErrorBody` | `curlec/errors/fetch_account_documents_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_documents.fetch_stakeholder_documents

- **Route**: `GET /v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def fetch_stakeholder_documents(account_id: str, stakeholder_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `stakeholder_id`
- **Params**: `account_id` — path · `stakeholder_id` — path
- **Returns (parsed)**: `StakeholderDocument`
- **Returns (raw)**: `ApiResult[StakeholderDocument, FetchStakeholderDocumentsErrorBody]`
- **Error**: `FetchStakeholderDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StakeholderDocument` | `curlec/models/stakeholder_document.py` |
| `FetchStakeholderDocumentsErrorBody` | `curlec/errors/fetch_stakeholder_documents_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_documents.upload_account_documents

- **Route**: `POST /v2/accounts/{account_id}/documents`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def upload_account_documents(account_id: str, *, document_type: DocumentTypeOrStr | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path · `document_type` — multipart field · `file` — multipart file
- **Returns (parsed)**: `AccountDocument`
- **Returns (raw)**: `ApiResult[AccountDocument, UploadAccountDocumentsErrorBody]`
- **Error**: `UploadAccountDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentTypeOrStr` | `curlec/models/enums/document_type.py` |
| `AccountDocument` | `curlec/models/account_document.py` |
| `UploadAccountDocumentsErrorBody` | `curlec/errors/upload_account_documents_error.py` |
| `Error` | `curlec/models/error.py` |

### client.partner_documents.upload_stakeholder_documents

- **Route**: `POST /v2/accounts/{account_id}/stakeholders/{stakeholder_id}/documents`
- **Auth**: `basic_auth`
- **Server**: `default`
- **Signature**: `def upload_stakeholder_documents(account_id: str, stakeholder_id: str, *, document_type: DocumentType1OrStr | None = None, file: FileInput | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`, `stakeholder_id`
- **Params**: `account_id` — path · `stakeholder_id` — path · `document_type` — multipart field · `file` — multipart file
- **Returns (parsed)**: `StakeholderDocument`
- **Returns (raw)**: `ApiResult[StakeholderDocument, UploadStakeholderDocumentsErrorBody]`
- **Error**: `UploadStakeholderDocumentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DocumentType1OrStr` | `curlec/models/enums/document_type1.py` |
| `StakeholderDocument` | `curlec/models/stakeholder_document.py` |
| `UploadStakeholderDocumentsErrorBody` | `curlec/errors/upload_stakeholder_documents_error.py` |
| `Error` | `curlec/models/error.py` |

