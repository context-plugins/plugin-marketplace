<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `bill/apis/payments.py` · 12 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payments.cancel_payment

- **Route**: `POST /v3/payments/{paymentId}/cancel`
- **Server**: `default`
- **Signature**: `def cancel_payment(payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_id`
- **Params**: `payment_id` — path `paymentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `PaymentResponseDto`
- **Returns (raw)**: `ApiResult[PaymentResponseDto, CancelPaymentErrorBody]`
- **Error**: `CancelPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentResponseDto` | `bill/models/payment_response_dto.py` |
| `CancelPaymentErrorBody` | `bill/errors/cancel_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.create_bulk_payment

- **Route**: `POST /v3/payments/bulk`
- **Server**: `default`
- **Signature**: `def create_bulk_payment(body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `BulkPaymentResponseDto`
- **Returns (raw)**: `ApiResult[BulkPaymentResponseDto, CreateBulkPaymentErrorBody]`
- **Error**: `CreateBulkPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkPaymentRequestDto` | `bill/models/bulk_payment_request_dto.py` |
| `BulkPaymentRequestDtoDict` | `bill/models/bulk_payment_request_dto.py` |
| `BulkPaymentResponseDto` | `bill/models/bulk_payment_response_dto.py` |
| `CreateBulkPaymentErrorBody` | `bill/errors/create_bulk_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.create_mass_payment

- **Route**: `POST /v3/payments/mass`
- **Server**: `default`
- **Signature**: `def create_mass_payment(body: BulkPaymentRequestDto | BulkPaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `MassPaymentResponseDto`
- **Returns (raw)**: `ApiResult[MassPaymentResponseDto, CreateMassPaymentErrorBody]`
- **Error**: `CreateMassPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkPaymentRequestDto` | `bill/models/bulk_payment_request_dto.py` |
| `BulkPaymentRequestDtoDict` | `bill/models/bulk_payment_request_dto.py` |
| `MassPaymentResponseDto` | `bill/models/mass_payment_response_dto.py` |
| `CreateMassPaymentErrorBody` | `bill/errors/create_mass_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.create_payment

- **Route**: `POST /v3/payments`
- **Server**: `default`
- **Signature**: `def create_payment(body: PaymentRequestDto | PaymentRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `PaymentResponseDto`
- **Returns (raw)**: `ApiResult[PaymentResponseDto, CreatePaymentErrorBody]`
- **Error**: `CreatePaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentRequestDto` | `bill/models/payment_request_dto.py` |
| `PaymentRequestDtoDict` | `bill/models/payment_request_dto.py` |
| `PaymentResponseDto` | `bill/models/payment_response_dto.py` |
| `CreatePaymentErrorBody` | `bill/errors/create_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.get_check_image_data

- **Route**: `GET /v3/payments/{paymentId}/check-image`
- **Server**: `default`
- **Signature**: `def get_check_image_data(payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_id`
- **Params**: `payment_id` — path `paymentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `CheckImageDataResponseDto`
- **Returns (raw)**: `ApiResult[CheckImageDataResponseDto, GetCheckImageDataErrorBody]`
- **Error**: `GetCheckImageDataErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckImageDataResponseDto` | `bill/models/check_image_data_response_dto.py` |
| `GetCheckImageDataErrorBody` | `bill/errors/get_check_image_data_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.get_exchange_rate

- **Route**: `GET /v3/payments/exchange-rate`
- **Server**: `default`
- **Signature**: `def get_exchange_rate(vendor_id: str, amount: float, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `amount`
- **Params**: `vendor_id` — query `vendorId` · `amount` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ExchangeRateResponseDto`
- **Returns (raw)**: `ApiResult[ExchangeRateResponseDto, GetExchangeRateErrorBody]`
- **Error**: `GetExchangeRateErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExchangeRateResponseDto` | `bill/models/exchange_rate_response_dto.py` |
| `GetExchangeRateErrorBody` | `bill/errors/get_exchange_rate_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.get_exchange_rates

- **Route**: `POST /v3/payments/exchange-rate`
- **Server**: `default`
- **Signature**: `def get_exchange_rates(body: list[ExchangeRateRequestDto | ExchangeRateRequestDtoDict], *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ExchangeRatesResponseDto`
- **Returns (raw)**: `ApiResult[ExchangeRatesResponseDto, GetExchangeRatesErrorBody]`
- **Error**: `GetExchangeRatesErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExchangeRateRequestDto` | `bill/models/exchange_rate_request_dto.py` |
| `ExchangeRateRequestDtoDict` | `bill/models/exchange_rate_request_dto.py` |
| `ExchangeRatesResponseDto` | `bill/models/exchange_rates_response_dto.py` |
| `GetExchangeRatesErrorBody` | `bill/errors/get_exchange_rates_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.get_mass_payment

- **Route**: `GET /v3/payments/mass/{paymentBatchId}`
- **Server**: `default`
- **Signature**: `def get_mass_payment(payment_batch_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_batch_id`
- **Params**: `payment_batch_id` — path `paymentBatchId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `MassPaymentDetailsResponseDto`
- **Returns (raw)**: `ApiResult[MassPaymentDetailsResponseDto, GetMassPaymentErrorBody]`
- **Error**: `GetMassPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MassPaymentDetailsResponseDto` | `bill/models/mass_payment_details_response_dto.py` |
| `GetMassPaymentErrorBody` | `bill/errors/get_mass_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.get_payment

- **Route**: `GET /v3/payments/{paymentId}`
- **Server**: `default`
- **Signature**: `def get_payment(payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_id`
- **Params**: `payment_id` — path `paymentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `PaymentResponseDto`
- **Returns (raw)**: `ApiResult[PaymentResponseDto, GetPaymentErrorBody]`
- **Error**: `GetPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentResponseDto` | `bill/models/payment_response_dto.py` |
| `GetPaymentErrorBody` | `bill/errors/get_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.list_payment_options

- **Route**: `GET /v3/payments/options`
- **Server**: `default`
- **Signature**: `def list_payment_options(vendor_id: str, amount: float, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vendor_id`, `amount`
- **Params**: `vendor_id` — query `vendorId` · `amount` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `PaymentOptionsResponseDto`
- **Returns (raw)**: `ApiResult[PaymentOptionsResponseDto, ListPaymentOptionsErrorBody]`
- **Error**: `ListPaymentOptionsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentOptionsResponseDto` | `bill/models/payment_options_response_dto.py` |
| `ListPaymentOptionsErrorBody` | `bill/errors/list_payment_options_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.list_payments

- **Route**: `GET /v3/payments`
- **Server**: `default`
- **Signature**: `def list_payments(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListPaymentResponseDto`
- **Returns (raw)**: `ApiResult[ListPaymentResponseDto, ListPaymentsErrorBody]`
- **Error**: `ListPaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListPaymentResponseDto` | `bill/models/list_payment_response_dto.py` |
| `ListPaymentsErrorBody` | `bill/errors/list_payments_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

### client.payments.void_payment

- **Route**: `POST /v3/payments/{paymentId}/void`
- **Server**: `default`
- **Signature**: `def void_payment(payment_id: str, body: VoidRequestDto | VoidRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payment_id`, `body`
- **Params**: `payment_id` — path `paymentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `PaymentResponseDto`
- **Returns (raw)**: `ApiResult[PaymentResponseDto, VoidPaymentErrorBody]`
- **Error**: `VoidPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `VoidRequestDto` | `bill/models/void_request_dto.py` |
| `VoidRequestDtoDict` | `bill/models/void_request_dto.py` |
| `PaymentResponseDto` | `bill/models/payment_response_dto.py` |
| `VoidPaymentErrorBody` | `bill/errors/void_payment_error.py` |
| `BdcError` | `bill/models/bdc_error.py` |

