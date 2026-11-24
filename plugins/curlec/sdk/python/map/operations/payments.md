<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `curlec/apis/payments.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payments.capture_payment

- **Route**: `POST /payments/{id}/capture`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def capture_payment(id_: str, body: PaymentsCaptureRequest | PaymentsCaptureRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentRazorpayPaymentsApi`
- **Returns (raw)**: `ApiResult[PaymentRazorpayPaymentsApi, CapturePaymentErrorBody]`
- **Error**: `CapturePaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsCaptureRequest` | `curlec/models/payments_capture_request.py` |
| `PaymentsCaptureRequestDict` | `curlec/models/payments_capture_request.py` |
| `PaymentRazorpayPaymentsApi` | `curlec/models/payment_razorpay_payments_api.py` |
| `CapturePaymentErrorBody` | `curlec/errors/capture_payment_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payments.fetch_all_payments

- **Route**: `GET /payments`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_all_payments(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `PaymentsResponse`
- **Returns (raw)**: `ApiResult[PaymentsResponse, FetchAllPaymentsErrorBody]`
- **Error**: `FetchAllPaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsResponse` | `curlec/models/payments_response.py` |
| `FetchAllPaymentsErrorBody` | `curlec/errors/fetch_all_payments_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payments.fetch_payment

- **Route**: `GET /payments/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payment(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentRazorpayPaymentsApi`
- **Returns (raw)**: `ApiResult[PaymentRazorpayPaymentsApi, FetchPaymentErrorBody]`
- **Error**: `FetchPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentRazorpayPaymentsApi` | `curlec/models/payment_razorpay_payments_api.py` |
| `FetchPaymentErrorBody` | `curlec/errors/fetch_payment_error.py` |
| `Error` | `curlec/models/error.py` |

### client.payments.update_payment

- **Route**: `PATCH /payments/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def update_payment(id_: str, body: PaymentsRequest | PaymentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentRazorpayPaymentsApi`
- **Returns (raw)**: `ApiResult[PaymentRazorpayPaymentsApi, UpdatePaymentErrorBody]`
- **Error**: `UpdatePaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsRequest` | `curlec/models/payments_request.py` |
| `PaymentsRequestDict` | `curlec/models/payments_request.py` |
| `PaymentRazorpayPaymentsApi` | `curlec/models/payment_razorpay_payments_api.py` |
| `UpdatePaymentErrorBody` | `curlec/errors/update_payment_error.py` |
| `Error` | `curlec/models/error.py` |

