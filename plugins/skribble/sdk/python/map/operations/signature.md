<!-- Generated file — do not edit; regenerated with the SDK. -->

# Signature — operations

Accessor: `client.signature` · Source: `skribble/apis/signature.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signature.add_document_in_signature_request

- **Route**: `POST /signature-requests/{SR_ID}/documents`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def add_document_in_signature_request(sr_id: UUID, body: SignatureDocumentUpload | SignatureDocumentUploadDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `body`
- **Params**: `sr_id` — path `SR_ID` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, AddDocumentInSignatureRequestErrorBody]`
- **Error**: `AddDocumentInSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureDocumentUpload` | `skribble/models/signature_document_upload.py` |
| `SignatureDocumentUploadDict` | `skribble/models/signature_document_upload.py` |
| `AddDocumentInSignatureRequestErrorBody` | `skribble/errors/add_document_in_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature.create_signature_request

- **Route**: `POST /signature-requests`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def create_signature_request(body: CreateSignatureRequest | CreateSignatureRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SignatureResponseV3`
- **Returns (raw)**: `ApiResult[SignatureResponseV3, CreateSignatureRequestErrorBody]`
- **Error**: `CreateSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateSignatureRequest` | `skribble/models/create_signature_request.py` |
| `CreateSignatureRequestDict` | `skribble/models/create_signature_request.py` |
| `SignatureResponseV3` | `skribble/models/signature_response_v3.py` |
| `CreateSignatureRequestErrorBody` | `skribble/errors/create_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature.delete_document_in_signature_request

- **Route**: `DELETE /signature-requests/{SR_ID}/documents/{DOC_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def delete_document_in_signature_request(sr_id: UUID, doc_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`, `doc_id`
- **Params**: `sr_id` — path `SR_ID` · `doc_id` — path `DOC_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteDocumentInSignatureRequestErrorBody]`
- **Error**: `DeleteDocumentInSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDocumentInSignatureRequestErrorBody` | `skribble/errors/delete_document_in_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature.delete_signature_request

- **Route**: `DELETE /signature-requests/{SR_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def delete_signature_request(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSignatureRequestErrorBody]`
- **Error**: `DeleteSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSignatureRequestErrorBody` | `skribble/errors/delete_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature.get_signature_request_details

- **Route**: `GET /signature-requests/{SR_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def get_signature_request_details(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `SignatureResponseV3`
- **Returns (raw)**: `ApiResult[SignatureResponseV3, GetSignatureRequestDetailsErrorBody]`
- **Error**: `GetSignatureRequestDetailsErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureResponseV3` | `skribble/models/signature_response_v3.py` |
| `GetSignatureRequestDetailsErrorBody` | `skribble/errors/get_signature_request_details_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature.initiate_signature_request

- **Route**: `POST /signature-requests/{SR_ID}/initiate`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def initiate_signature_request(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, InitiateSignatureRequestErrorBody]`
- **Error**: `InitiateSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InitiateSignatureRequestErrorBody` | `skribble/errors/initiate_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature.withdraw_signature_request

- **Route**: `POST /signature-requests/{SR_ID}/withdraw`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_api`
- **Signature**: `def withdraw_signature_request(sr_id: UUID, *, body: WithdrawSignatureRequest | WithdrawSignatureRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID` · `body` — JSON body
- **Returns (parsed)**: `SignatureResponse`
- **Returns (raw)**: `ApiResult[SignatureResponse, WithdrawSignatureRequestErrorBody]`
- **Error**: `WithdrawSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 404, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WithdrawSignatureRequest` | `skribble/models/withdraw_signature_request.py` |
| `WithdrawSignatureRequestDict` | `skribble/models/withdraw_signature_request.py` |
| `SignatureResponse` | `skribble/models/signature_response.py` |
| `WithdrawSignatureRequestErrorBody` | `skribble/errors/withdraw_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

