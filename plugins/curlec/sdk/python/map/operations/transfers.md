<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.transfers` · Source: `curlec/apis/transfers.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.transfers.create_direct_transfer

- **Route**: `POST /transfers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_direct_transfer(body: TransfersRequest | TransfersRequestDict, *, x_transfer_idempotency: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_transfer_idempotency` — header `X-Transfer-Idempotency` · `body` — JSON body
- **Returns (parsed)**: `TransferRazorpayTransfersApi`
- **Returns (raw)**: `ApiResult[TransferRazorpayTransfersApi, CreateDirectTransferErrorBody]`
- **Error**: `CreateDirectTransferErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransfersRequest` | `curlec/models/transfers_request.py` |
| `TransfersRequestDict` | `curlec/models/transfers_request.py` |
| `TransferRazorpayTransfersApi` | `curlec/models/transfer_razorpay_transfers_api.py` |
| `CreateDirectTransferErrorBody` | `curlec/errors/create_direct_transfer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.create_transfers_from_payment

- **Route**: `POST /payments/{id}/transfers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_transfers_from_payment(id_: str, body: PaymentsTransfersRequest | PaymentsTransfersRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `PaymentsTransfersResponse`
- **Returns (raw)**: `ApiResult[PaymentsTransfersResponse, CreateTransfersFromPaymentErrorBody]`
- **Error**: `CreateTransfersFromPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsTransfersRequest` | `curlec/models/payments_transfers_request.py` |
| `PaymentsTransfersRequestDict` | `curlec/models/payments_transfers_request.py` |
| `PaymentsTransfersResponse` | `curlec/models/payments_transfers_response.py` |
| `CreateTransfersFromPaymentErrorBody` | `curlec/errors/create_transfers_from_payment_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.fetch_transfer

- **Route**: `GET /transfers/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_transfer(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `TransferRazorpayTransfersApi`
- **Returns (raw)**: `ApiResult[TransferRazorpayTransfersApi, FetchTransferErrorBody]`
- **Error**: `FetchTransferErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransferRazorpayTransfersApi` | `curlec/models/transfer_razorpay_transfers_api.py` |
| `FetchTransferErrorBody` | `curlec/errors/fetch_transfer_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.fetch_transfers_for_payment

- **Route**: `GET /payments/{id}/transfers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_transfers_for_payment(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `PaymentsTransfersResponse`
- **Returns (raw)**: `ApiResult[PaymentsTransfersResponse, FetchTransfersForPaymentErrorBody]`
- **Error**: `FetchTransfersForPaymentErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentsTransfersResponse` | `curlec/models/payments_transfers_response.py` |
| `FetchTransfersForPaymentErrorBody` | `curlec/errors/fetch_transfers_for_payment_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.list_reversals

- **Route**: `GET /transfers/{id}/reversals`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_reversals(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `TransfersReversalsResponse`
- **Returns (raw)**: `ApiResult[TransfersReversalsResponse, ListReversalsErrorBody]`
- **Error**: `ListReversalsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransfersReversalsResponse` | `curlec/models/transfers_reversals_response.py` |
| `ListReversalsErrorBody` | `curlec/errors/list_reversals_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.list_transfers

- **Route**: `GET /transfers`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_transfers(*, from_: int | None = None, to: int | None = None, count: int | None = 10, skip: int | None = 0, recipient_settlement_id: str | None = None, expand: ExpandRazorpayTransfersApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `from_` — query `from` · `to` — query · `count` — query · `skip` — query · `recipient_settlement_id` — query · `expand` — query `expand[]`
- **Returns (parsed)**: `TransfersResponse`
- **Returns (raw)**: `ApiResult[TransfersResponse, ListTransfersErrorBody]`
- **Error**: `ListTransfersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExpandRazorpayTransfersApiOrStr` | `curlec/models/enums/expand_razorpay_transfers_api.py` |
| `TransfersResponse` | `curlec/models/transfers_response.py` |
| `ListTransfersErrorBody` | `curlec/errors/list_transfers_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.modify_transfer_settlement_hold

- **Route**: `PATCH /transfers/{id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def modify_transfer_settlement_hold(id_: str, body: TransfersRequest1 | TransfersRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `TransferRazorpayTransfersApi`
- **Returns (raw)**: `ApiResult[TransferRazorpayTransfersApi, ModifyTransferSettlementHoldErrorBody]`
- **Error**: `ModifyTransferSettlementHoldErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransfersRequest1` | `curlec/models/transfers_request1.py` |
| `TransfersRequest1Dict` | `curlec/models/transfers_request1.py` |
| `TransferRazorpayTransfersApi` | `curlec/models/transfer_razorpay_transfers_api.py` |
| `ModifyTransferSettlementHoldErrorBody` | `curlec/errors/modify_transfer_settlement_hold_error.py` |
| `Error` | `curlec/models/error.py` |

### client.transfers.reverse_transfer

- **Route**: `POST /transfers/{id}/reversals`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def reverse_transfer(id_: str, *, body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `Reversal`
- **Returns (raw)**: `ApiResult[Reversal, ReverseTransferErrorBody]`
- **Error**: `ReverseTransferErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransfersReversalsRequest` | `curlec/models/transfers_reversals_request.py` |
| `TransfersReversalsRequestDict` | `curlec/models/transfers_reversals_request.py` |
| `Reversal` | `curlec/models/reversal.py` |
| `ReverseTransferErrorBody` | `curlec/errors/reverse_transfer_error.py` |
| `Error` | `curlec/models/error.py` |

