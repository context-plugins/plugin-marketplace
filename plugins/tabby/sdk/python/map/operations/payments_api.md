<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsApi — operations

Accessor: `client.payments_api` · Source: `tabby/apis/payments_api.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payments_api.close_payment

- **Route**: `POST /api/v2/payments/{id}/close`
- **Auth**: `bearer_auth`
- **Signature**: `def close_payment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentClose`
- **Returns (raw)**: `ApiResult[PaymentClose, ClosePaymentErrorBody]`
- **Error**: `ClosePaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error400PaymentsClose` [400] · `Error403` [401, 403] · `Error404NoSuchPayment` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentClose` | `tabby/models/payment_close.py` |
| `ClosePaymentErrorBody` | `tabby/errors/close_payment_error.py` |
| `Error400PaymentsClose` | `tabby/models/error400_payments_close.py` |
| `Error403` | `tabby/models/error403.py` |
| `Error404NoSuchPayment` | `tabby/models/error404_no_such_payment.py` |

### client.payments_api.get_payment

- **Route**: `GET /api/v2/payments/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_payment(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentResponse`
- **Returns (raw)**: `ApiResult[PaymentResponse, GetPaymentErrorBody]`
- **Error**: `GetPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error400PaymentsGet` [400] · `Error401MissingBearer` [401] · `Error404NoSuchPayment` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentResponse` | `tabby/models/payment_response.py` |
| `GetPaymentErrorBody` | `tabby/errors/get_payment_error.py` |
| `Error400PaymentsGet` | `tabby/models/error400_payments_get.py` |
| `Error401MissingBearer` | `tabby/models/error401_missing_bearer.py` |
| `Error404NoSuchPayment` | `tabby/models/error404_no_such_payment.py` |

### client.payments_api.get_payments

- **Route**: `GET /api/v2/payments`
- **Auth**: `bearer_auth`
- **Signature**: `def get_payments(*, created_at_gte: Date | None = None, created_at_lte: RFC3339DateTime | None = None, limit: int | None = None, status: Status1TabbyApiReferencePaymentsApiOrStr | None = None, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `created_at_gte` — query `created_at__gte` · `created_at_lte` — query `created_at__lte` · `limit` — query · `status` — query · `offset` — query
- **Returns (parsed)**: `Payments`
- **Returns (raw)**: `ApiResult[Payments, GetPaymentsErrorBody]`
- **Error**: `GetPaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error400Failed` [400] · `Error403` [401] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Status1TabbyApiReferencePaymentsApiOrStr` | `tabby/models/enums/status1_tabby_api_reference_payments_api.py` |
| `Payments` | `tabby/models/payments.py` |
| `GetPaymentsErrorBody` | `tabby/errors/get_payments_error.py` |
| `Error400Failed` | `tabby/models/error400_failed.py` |
| `Error403` | `tabby/models/error403.py` |

### client.payments_api.post_payment_capture

- **Route**: `POST /api/v2/payments/{id}/captures`
- **Auth**: `bearer_auth`
- **Signature**: `def post_payment_capture(id_: UUID, body: CaptureRequest | CaptureRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentCaptureResponse`
- **Returns (raw)**: `ApiResult[PaymentCaptureResponse, PostPaymentCaptureErrorBody]`
- **Error**: `PostPaymentCaptureErrorBody` — **Case A (typed)**
- **Error arms**: `Error400PaymentsCapture` [400] · `Error403` [401, 403] · `Error404NoSuchPayment` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CaptureRequest` | `tabby/models/capture_request.py` |
| `CaptureRequestDict` | `tabby/models/capture_request.py` |
| `PaymentCaptureResponse` | `tabby/models/payment_capture_response.py` |
| `PostPaymentCaptureErrorBody` | `tabby/errors/post_payment_capture_error.py` |
| `Error400PaymentsCapture` | `tabby/models/error400_payments_capture.py` |
| `Error403` | `tabby/models/error403.py` |
| `Error404NoSuchPayment` | `tabby/models/error404_no_such_payment.py` |

### client.payments_api.post_payment_refund

- **Route**: `POST /api/v2/payments/{id}/refunds`
- **Auth**: `bearer_auth`
- **Signature**: `def post_payment_refund(id_: UUID, body: RefundRequest | RefundRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentRefundResponse`
- **Returns (raw)**: `ApiResult[PaymentRefundResponse, PostPaymentRefundErrorBody]`
- **Error**: `PostPaymentRefundErrorBody` — **Case A (typed)**
- **Error arms**: `Error400PaymentsRefund` [400] · `Error403` [401, 403] · `Error404NoSuchPayment` [404] · `Error400` [409] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefundRequest` | `tabby/models/refund_request.py` |
| `RefundRequestDict` | `tabby/models/refund_request.py` |
| `PaymentRefundResponse` | `tabby/models/payment_refund_response.py` |
| `PostPaymentRefundErrorBody` | `tabby/errors/post_payment_refund_error.py` |
| `Error400PaymentsRefund` | `tabby/models/error400_payments_refund.py` |
| `Error403` | `tabby/models/error403.py` |
| `Error404NoSuchPayment` | `tabby/models/error404_no_such_payment.py` |
| `Error400` | `tabby/models/error400.py` |

### client.payments_api.put_payment

- **Route**: `PUT /api/v2/payments/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def put_payment(id_: UUID, body: ApiV2PaymentsRequest | ApiV2PaymentsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentUpdate`
- **Returns (raw)**: `ApiResult[PaymentUpdate, PutPaymentErrorBody]`
- **Error**: `PutPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error400PaymentsGet` [400] · `Error403` [401, 403] · `Error404NoSuchPayment` [404] · `str` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV2PaymentsRequest` | `tabby/models/api_v2_payments_request.py` |
| `ApiV2PaymentsRequestDict` | `tabby/models/api_v2_payments_request.py` |
| `PaymentUpdate` | `tabby/models/payment_update.py` |
| `PutPaymentErrorBody` | `tabby/errors/put_payment_error.py` |
| `Error400PaymentsGet` | `tabby/models/error400_payments_get.py` |
| `Error403` | `tabby/models/error403.py` |
| `Error404NoSuchPayment` | `tabby/models/error404_no_such_payment.py` |

