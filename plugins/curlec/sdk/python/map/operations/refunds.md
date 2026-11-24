<!-- Generated file — do not edit; regenerated with the SDK. -->

# Refunds — operations

Accessor: `client.refunds` · Source: `curlec/apis/refunds.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.refunds.create_refund

- **Route**: `POST /payments/{id}/refund`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_refund(id_: str, *, body: PaymentsRefundRequest | PaymentsRefundRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `RefundRazorpayRefundsApi`
- **Returns (raw)**: `ApiResult[RefundRazorpayRefundsApi, CreateRefundErrorBody]`
- **Error**: `CreateRefundErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsRefundRequest` | `curlec/models/payments_refund_request.py` |
| `PaymentsRefundRequestDict` | `curlec/models/payments_refund_request.py` |
| `RefundRazorpayRefundsApi` | `curlec/models/refund_razorpay_refunds_api.py` |
| `CreateRefundErrorBody` | `curlec/errors/create_refund_error.py` |
| `Error` | `curlec/models/error.py` |

### client.refunds.fetch_all_refunds

- **Route**: `GET /refunds`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_refunds(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `RefundsResponse`
- **Returns (raw)**: `ApiResult[RefundsResponse, FetchAllRefundsErrorBody]`
- **Error**: `FetchAllRefundsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefundsResponse` | `curlec/models/refunds_response.py` |
| `FetchAllRefundsErrorBody` | `curlec/errors/fetch_all_refunds_error.py` |
| `Error` | `curlec/models/error.py` |

### client.refunds.fetch_payment_refund

- **Route**: `GET /payments/{payment_id}/refunds/{refund_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payment_refund(payment_id: str, refund_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_id`, `refund_id`
- **Params**: `payment_id` — path · `refund_id` — path
- **Returns (parsed)**: `RefundRazorpayRefundsApi`
- **Returns (raw)**: `ApiResult[RefundRazorpayRefundsApi, FetchPaymentRefundErrorBody]`
- **Error**: `FetchPaymentRefundErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefundRazorpayRefundsApi` | `curlec/models/refund_razorpay_refunds_api.py` |
| `FetchPaymentRefundErrorBody` | `curlec/errors/fetch_payment_refund_error.py` |
| `Error` | `curlec/models/error.py` |

### client.refunds.fetch_payment_refunds

- **Route**: `GET /payments/{payment_id}/refunds`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payment_refunds(payment_id: str, *, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_id`
- **Params**: `payment_id` — path · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `PaymentsRefundsResponse`
- **Returns (raw)**: `ApiResult[PaymentsRefundsResponse, FetchPaymentRefundsErrorBody]`
- **Error**: `FetchPaymentRefundsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsRefundsResponse` | `curlec/models/payments_refunds_response.py` |
| `FetchPaymentRefundsErrorBody` | `curlec/errors/fetch_payment_refunds_error.py` |
| `Error` | `curlec/models/error.py` |

### client.refunds.fetch_refund

- **Route**: `GET /refunds/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_refund(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `RefundRazorpayRefundsApi`
- **Returns (raw)**: `ApiResult[RefundRazorpayRefundsApi, FetchRefundErrorBody]`
- **Error**: `FetchRefundErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefundRazorpayRefundsApi` | `curlec/models/refund_razorpay_refunds_api.py` |
| `FetchRefundErrorBody` | `curlec/errors/fetch_refund_error.py` |
| `Error` | `curlec/models/error.py` |

### client.refunds.update_refund

- **Route**: `PATCH /refunds/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_refund(id_: str, body: RefundsRequest | RefundsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `RefundRazorpayRefundsApi`
- **Returns (raw)**: `ApiResult[RefundRazorpayRefundsApi, UpdateRefundErrorBody]`
- **Error**: `UpdateRefundErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefundsRequest` | `curlec/models/refunds_request.py` |
| `RefundsRequestDict` | `curlec/models/refunds_request.py` |
| `RefundRazorpayRefundsApi` | `curlec/models/refund_razorpay_refunds_api.py` |
| `UpdateRefundErrorBody` | `curlec/errors/update_refund_error.py` |
| `Error` | `curlec/models/error.py` |

