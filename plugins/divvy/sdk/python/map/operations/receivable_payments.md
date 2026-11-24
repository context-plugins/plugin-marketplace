<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReceivablePayments — operations

Accessor: `client.receivable_payments` · Source: `divvy/apis/receivable_payments.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.receivable_payments.charge_customer

- **Route**: `POST /v3/receivable-payments`
- **Server**: `default`
- **Signature**: `def charge_customer(body: ChargeCustomerRequestDto | ChargeCustomerRequestDtoDict, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `session_id` — header `sessionId` · `dev_key` — header `devKey` · `body` — JSON body
- **Returns (parsed)**: `ReceivablePaymentResponseDto`
- **Returns (raw)**: `ApiResult[ReceivablePaymentResponseDto, ChargeCustomerErrorBody]`
- **Error**: `ChargeCustomerErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ChargeCustomerRequestDto` | `divvy/models/charge_customer_request_dto.py` |
| `ChargeCustomerRequestDtoDict` | `divvy/models/charge_customer_request_dto.py` |
| `ReceivablePaymentResponseDto` | `divvy/models/receivable_payment_response_dto.py` |
| `ChargeCustomerErrorBody` | `divvy/errors/charge_customer_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.receivable_payments.get_receivable_payment

- **Route**: `GET /v3/receivable-payments/{receivedPaymentId}`
- **Server**: `default`
- **Signature**: `def get_receivable_payment(received_payment_id: str, *, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `received_payment_id`
- **Params**: `received_payment_id` — path `receivedPaymentId` · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ReceivablePaymentResponseDto`
- **Returns (raw)**: `ApiResult[ReceivablePaymentResponseDto, GetReceivablePaymentErrorBody]`
- **Error**: `GetReceivablePaymentErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReceivablePaymentResponseDto` | `divvy/models/receivable_payment_response_dto.py` |
| `GetReceivablePaymentErrorBody` | `divvy/errors/get_receivable_payment_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

### client.receivable_payments.list_receivable_payments

- **Route**: `GET /v3/receivable-payments`
- **Server**: `default`
- **Signature**: `def list_receivable_payments(*, max_: int | None = None, sort: str | None = None, filters: str | None = None, page: str | None = None, session_id: str | None = None, dev_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_` — query `max` · `sort` — query · `filters` — query · `page` — query · `session_id` — header `sessionId` · `dev_key` — header `devKey`
- **Returns (parsed)**: `ListResponseDtoReceivablePaymentResponseDto`
- **Returns (raw)**: `ApiResult[ListResponseDtoReceivablePaymentResponseDto, ListReceivablePaymentsErrorBody]`
- **Error**: `ListReceivablePaymentsErrorBody` — **Case A (typed)**
- **Error arms**: `list[BdcError]` [4XX] · `list[BdcError]` [5XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResponseDtoReceivablePaymentResponseDto` | `divvy/models/list_response_dto_receivable_payment_response_dto.py` |
| `ListReceivablePaymentsErrorBody` | `divvy/errors/list_receivable_payments_error.py` |
| `BdcError` | `divvy/models/bdc_error.py` |

