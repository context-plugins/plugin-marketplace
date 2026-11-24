<!-- Generated file — do not edit; regenerated with the SDK. -->

# SignatureHandling — operations

Accessor: `client.signature_handling` · Source: `skribble/apis/signature_handling.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.signature_handling.bulk_get_signature_requests

- **Route**: `POST /signature-requests/bulk`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def bulk_get_signature_requests(body: list[UUID], *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[SignatureResponse]`
- **Returns (raw)**: `ApiResult[list[SignatureResponse], BulkGetSignatureRequestsErrorBody]`
- **Error**: `BulkGetSignatureRequestsErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureResponse` | `skribble/models/signature_response.py` |
| `BulkGetSignatureRequestsErrorBody` | `skribble/errors/bulk_get_signature_requests_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.delete_signature_request_expires_at

- **Route**: `DELETE /signature-requests/{SR_ID}/expires-at`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def delete_signature_request_expires_at(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSignatureRequestExpiresAtErrorBody]`
- **Error**: `DeleteSignatureRequestExpiresAtErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteSignatureRequestExpiresAtErrorBody` | `skribble/errors/delete_signature_request_expires_at_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.get_signature_report

- **Route**: `GET /signature-requests/{SR_ID}/report`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def get_signature_report(sr_id: UUID, *, type_: TypeSkribbleSignatureHandlingApiOrStr | None = TypeSkribbleSignatureHandlingApi.PDF, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID` · `type_` — query `type`
- **Returns (parsed)**: `FileResponse`
- **Returns (raw)**: `ApiResult[FileResponse, GetSignatureReportErrorBody]`
- **Error**: `GetSignatureReportErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeSkribbleSignatureHandlingApiOrStr` | `skribble/models/enums/type_skribble_signature_handling_api.py` |
| `GetSignatureReportErrorBody` | `skribble/errors/get_signature_report_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.get_signature_request

- **Route**: `GET /signature-requests`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def get_signature_request(*, account_email: EmailStr | None = None, search: str | None = None, signature_status: SignatureStatusCodeOrStr | None = None, status_overall: SignatureStatusOverallOrStr | None = None, page_number: float | None = None, page_size: float | None = 50.0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `account_email` — query · `search` — query · `signature_status` — query · `status_overall` — query · `page_number` — query · `page_size` — query
- **Returns (parsed)**: `list[SignatureResponseV3]`
- **Returns (raw)**: `ApiResult[list[SignatureResponseV3], GetSignatureRequestErrorBody]`
- **Error**: `GetSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 406, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureStatusCodeOrStr` | `skribble/models/enums/signature_status_code.py` |
| `SignatureStatusOverallOrStr` | `skribble/models/enums/signature_status_overall.py` |
| `SignatureResponseV3` | `skribble/models/signature_response_v3.py` |
| `GetSignatureRequestErrorBody` | `skribble/errors/get_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.get_signature_request_callbacks_v3

- **Route**: `GET /signature-requests/{SR_ID}/callbacks`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def get_signature_request_callbacks_v3(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `list[SignatureCallbacksInResponse]`
- **Returns (raw)**: `ApiResult[list[SignatureCallbacksInResponse], GetSignatureRequestCallbacksV3ErrorBody]`
- **Error**: `GetSignatureRequestCallbacksV3ErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureCallbacksInResponse` | `skribble/models/signature_callbacks_in_response.py` |
| `GetSignatureRequestCallbacksV3ErrorBody` | `skribble/errors/get_signature_request_callbacks_v3_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.get_signature_request_details2

- **Route**: `GET /signature-requests/{SR_ID}`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def get_signature_request_details2(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `SignatureResponseV3`
- **Returns (raw)**: `ApiResult[SignatureResponseV3, GetSignatureRequestDetails2ErrorBody]`
- **Error**: `GetSignatureRequestDetails2ErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SignatureResponseV3` | `skribble/models/signature_response_v3.py` |
| `GetSignatureRequestDetails2ErrorBody` | `skribble/errors/get_signature_request_details2_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.remind_signature_request

- **Route**: `POST /signature-requests/{SR_ID}/remind`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def remind_signature_request(sr_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sr_id`
- **Params**: `sr_id` — path `SR_ID`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RemindSignatureRequestErrorBody]`
- **Error**: `RemindSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RemindSignatureRequestErrorBody` | `skribble/errors/remind_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

### client.signature_handling.update_signature_request

- **Route**: `PUT /signature-requests`
- **Auth**: `bearer`
- **Server**: `default_skribble_signature_handling_api`
- **Signature**: `def update_signature_request(body: UpdateSignatureRequest | UpdateSignatureRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SignatureResponseV3`
- **Returns (raw)**: `ApiResult[SignatureResponseV3, UpdateSignatureRequestErrorBody]`
- **Error**: `UpdateSignatureRequestErrorBody` — **Case A (typed)**
- **Error arms**: `Problem` [400, 401, 403, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateSignatureRequest` | `skribble/models/update_signature_request.py` |
| `UpdateSignatureRequestDict` | `skribble/models/update_signature_request.py` |
| `SignatureResponseV3` | `skribble/models/signature_response_v3.py` |
| `UpdateSignatureRequestErrorBody` | `skribble/errors/update_signature_request_error.py` |
| `Problem` | `skribble/models/problem.py` |

