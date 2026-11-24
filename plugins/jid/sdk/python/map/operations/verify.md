<!-- Generated file — do not edit; regenerated with the SDK. -->

# Verify — operations

Accessor: `client.verify` · Source: `jid/apis/verify.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.verify.get_business_file

- **Route**: `GET /v1/entities/{id}`
- **Signature**: `def get_business_file(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, GetBusinessFileErrorBody]`
- **Error**: `GetBusinessFileErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetBusinessFileErrorBody` | `jid/errors/get_business_file_error.py` |
| `Error` | `jid/models/error.py` |

### client.verify.get_receipt

- **Route**: `GET /v1/receipts/{receipt_id}`
- **Signature**: `def get_receipt(receipt_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `receipt_id`
- **Params**: `receipt_id` — path
- **Returns (parsed)**: `Receipt`
- **Returns (raw)**: `ApiResult[Receipt, GetReceiptErrorBody]`
- **Error**: `GetReceiptErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Receipt` | `jid/models/receipt.py` |
| `GetReceiptErrorBody` | `jid/errors/get_receipt_error.py` |
| `Error` | `jid/models/error.py` |

### client.verify.list_activities

- **Route**: `GET /v1/activities`
- **Signature**: `def list_activities(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.verify.verify_business

- **Route**: `GET /v1/entities/{id}/verify`
- **Signature**: `def verify_business(id_: str, *, activity: ActivityOrStr | None = None, jurisdiction: str | None = None, amount: float | None = None, currency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `activity` — query · `jurisdiction` — query · `amount` — query · `currency` — query
- **Returns (parsed)**: `VerifyResponse`
- **Returns (raw)**: `ApiResult[VerifyResponse, VerifyBusinessErrorBody]`
- **Error**: `VerifyBusinessErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ActivityOrStr` | `jid/models/enums/activity.py` |
| `VerifyResponse` | `jid/models/verify_response.py` |
| `VerifyBusinessErrorBody` | `jid/errors/verify_business_error.py` |
| `Error` | `jid/models/error.py` |

