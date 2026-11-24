<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `upstox/apis/payments.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payments.cancel_payout

- **Route**: `DELETE /v2/user/payments/payout/{transaction_id}`
- **Auth**: `oauth2`
- **Signature**: `def cancel_payout(transaction_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`
- **Params**: `transaction_id` — path
- **Returns (parsed)**: `PayoutDetailsResponse`
- **Returns (raw)**: `ApiResult[PayoutDetailsResponse, CancelPayoutErrorBody]`
- **Error**: `CancelPayoutErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutDetailsResponse` | `upstox/models/payout_details_response.py` |
| `CancelPayoutErrorBody` | `upstox/errors/cancel_payout_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.payments.get_payin_history

- **Route**: `GET /v2/user/payments/payin`
- **Auth**: `oauth2`
- **Signature**: `def get_payin_history(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PaymentHistoryResponse`
- **Returns (raw)**: `ApiResult[PaymentHistoryResponse, GetPayinHistoryErrorBody]`
- **Error**: `GetPayinHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentHistoryResponse` | `upstox/models/payment_history_response.py` |
| `GetPayinHistoryErrorBody` | `upstox/errors/get_payin_history_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.payments.get_payout_history

- **Route**: `GET /v2/user/payments/payout`
- **Auth**: `oauth2`
- **Signature**: `def get_payout_history(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PaymentHistoryResponse`
- **Returns (raw)**: `ApiResult[PaymentHistoryResponse, GetPayoutHistoryErrorBody]`
- **Error**: `GetPayoutHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PaymentHistoryResponse` | `upstox/models/payment_history_response.py` |
| `GetPayoutHistoryErrorBody` | `upstox/errors/get_payout_history_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.payments.get_payout_modes

- **Route**: `GET /v2/user/payments/payout/modes`
- **Auth**: `oauth2`
- **Signature**: `def get_payout_modes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `PayoutModesResponse`
- **Returns (raw)**: `ApiResult[PayoutModesResponse, GetPayoutModesErrorBody]`
- **Error**: `GetPayoutModesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutModesResponse` | `upstox/models/payout_modes_response.py` |
| `GetPayoutModesErrorBody` | `upstox/errors/get_payout_modes_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.payments.initiate_payout

- **Route**: `POST /v2/user/payments/payout`
- **Auth**: `oauth2`
- **Signature**: `def initiate_payout(body: InitiatePayoutRequest | InitiatePayoutRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PayoutDetailsResponse`
- **Returns (raw)**: `ApiResult[PayoutDetailsResponse, InitiatePayoutErrorBody]`
- **Error**: `InitiatePayoutErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InitiatePayoutRequest` | `upstox/models/initiate_payout_request.py` |
| `InitiatePayoutRequestDict` | `upstox/models/initiate_payout_request.py` |
| `PayoutDetailsResponse` | `upstox/models/payout_details_response.py` |
| `InitiatePayoutErrorBody` | `upstox/errors/initiate_payout_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

### client.payments.modify_payout

- **Route**: `PUT /v2/user/payments/payout/{transaction_id}`
- **Auth**: `oauth2`
- **Signature**: `def modify_payout(transaction_id: str, body: ModifyPayoutRequest | ModifyPayoutRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `transaction_id`, `body`
- **Params**: `transaction_id` — path · `body` — JSON body
- **Returns (parsed)**: `PayoutDetailsResponse`
- **Returns (raw)**: `ApiResult[PayoutDetailsResponse, ModifyPayoutErrorBody]`
- **Error**: `ModifyPayoutErrorBody` — **Case A (typed)**
- **Error arms**: `ApiGatewayErrorResponse` [400, 403, 405, 422, 423, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ModifyPayoutRequest` | `upstox/models/modify_payout_request.py` |
| `ModifyPayoutRequestDict` | `upstox/models/modify_payout_request.py` |
| `PayoutDetailsResponse` | `upstox/models/payout_details_response.py` |
| `ModifyPayoutErrorBody` | `upstox/errors/modify_payout_error.py` |
| `ApiGatewayErrorResponse` | `upstox/models/api_gateway_error_response.py` |

