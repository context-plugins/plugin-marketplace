<!-- Generated file — do not edit; regenerated with the SDK. -->

# QrCodes — operations

Accessor: `client.qr_codes` · Source: `curlec/apis/qr_codes.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.qr_codes.close_qr_code

- **Route**: `POST /payments/qr_codes/{id}/close`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def close_qr_code(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, CloseQrCodeErrorBody]`
- **Error**: `CloseQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrCode` | `curlec/models/qr_code.py` |
| `CloseQrCodeErrorBody` | `curlec/errors/close_qr_code_error.py` |
| `Error` | `curlec/models/error.py` |

### client.qr_codes.create_qr_code

- **Route**: `POST /payments/qr_codes`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_qr_code(body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, CreateQrCodeErrorBody]`
- **Error**: `CreateQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsQrCodesRequest` | `curlec/models/payments_qr_codes_request.py` |
| `PaymentsQrCodesRequestDict` | `curlec/models/payments_qr_codes_request.py` |
| `QrCode` | `curlec/models/qr_code.py` |
| `CreateQrCodeErrorBody` | `curlec/errors/create_qr_code_error.py` |
| `Error` | `curlec/models/error.py` |

### client.qr_codes.fetch_all_qr_codes

- **Route**: `GET /payments/qr_codes`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_qr_codes(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, customer_id: str | None = None, payment_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query · `customer_id` — query · `payment_id` — query
- **Returns (parsed)**: `PaymentsQrCodesResponse`
- **Returns (raw)**: `ApiResult[PaymentsQrCodesResponse, FetchAllQrCodesErrorBody]`
- **Error**: `FetchAllQrCodesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsQrCodesResponse` | `curlec/models/payments_qr_codes_response.py` |
| `FetchAllQrCodesErrorBody` | `curlec/errors/fetch_all_qr_codes_error.py` |
| `Error` | `curlec/models/error.py` |

### client.qr_codes.fetch_qr_code

- **Route**: `GET /payments/qr_codes/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_qr_code(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, FetchQrCodeErrorBody]`
- **Error**: `FetchQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QrCode` | `curlec/models/qr_code.py` |
| `FetchQrCodeErrorBody` | `curlec/errors/fetch_qr_code_error.py` |
| `Error` | `curlec/models/error.py` |

### client.qr_codes.fetch_qr_code_payments

- **Route**: `GET /payments/qr_codes/{id}/payments`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_qr_code_payments(id_: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `PaymentsQrCodesPaymentsResponse`
- **Returns (raw)**: `ApiResult[PaymentsQrCodesPaymentsResponse, FetchQrCodePaymentsErrorBody]`
- **Error**: `FetchQrCodePaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsQrCodesPaymentsResponse` | `curlec/models/payments_qr_codes_payments_response.py` |
| `FetchQrCodePaymentsErrorBody` | `curlec/errors/fetch_qr_code_payments_error.py` |
| `Error` | `curlec/models/error.py` |

### client.qr_codes.update_qr_code

- **Route**: `PATCH /payments/qr_codes/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_qr_code(id_: str, body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `QrCode`
- **Returns (raw)**: `ApiResult[QrCode, UpdateQrCodeErrorBody]`
- **Error**: `UpdateQrCodeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsQrCodesRequest1` | `curlec/models/payments_qr_codes_request1.py` |
| `PaymentsQrCodesRequest1Dict` | `curlec/models/payments_qr_codes_request1.py` |
| `QrCode` | `curlec/models/qr_code.py` |
| `UpdateQrCodeErrorBody` | `curlec/errors/update_qr_code_error.py` |
| `Error` | `curlec/models/error.py` |

