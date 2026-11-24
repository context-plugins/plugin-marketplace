<!-- Generated file — do not edit; regenerated with the SDK. -->

# XPayouts — operations

Accessor: `client.x_payouts` · Source: `curlec/apis/x_payouts.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.x_payouts.approve_payout

- **Route**: `POST /payouts/{payout_id}/approve`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def approve_payout(payout_id: str, *, body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout_id`
- **Params**: `payout_id` — path · `body` — JSON body
- **Returns (parsed)**: `Payout`
- **Returns (raw)**: `ApiResult[Payout, ApprovePayoutErrorBody]`
- **Error**: `ApprovePayoutErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutsApproveRequest` | `curlec/models/payouts_approve_request.py` |
| `PayoutsApproveRequestDict` | `curlec/models/payouts_approve_request.py` |
| `Payout` | `curlec/models/payout.py` |
| `ApprovePayoutErrorBody` | `curlec/errors/approve_payout_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payouts.cancel_payout

- **Route**: `POST /payouts/{payout_id}/cancel`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def cancel_payout(payout_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout_id`
- **Params**: `payout_id` — path
- **Returns (parsed)**: `Payout`
- **Returns (raw)**: `ApiResult[Payout, CancelPayoutErrorBody]`
- **Error**: `CancelPayoutErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Payout` | `curlec/models/payout.py` |
| `CancelPayoutErrorBody` | `curlec/errors/cancel_payout_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payouts.create_payout

- **Route**: `POST /payouts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def create_payout(x_payout_idempotency: str, body: PayoutsRequest | PayoutsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_payout_idempotency`, `body`
- **Params**: `x_payout_idempotency` — header `X-Payout-Idempotency` · `body` — JSON body
- **Returns (parsed)**: `Payout`
- **Returns (raw)**: `ApiResult[Payout, CreatePayoutErrorBody]`
- **Error**: `CreatePayoutErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutsRequest` | `curlec/models/payouts_request.py` |
| `PayoutsRequestDict` | `curlec/models/payouts_request.py` |
| `Payout` | `curlec/models/payout.py` |
| `CreatePayoutErrorBody` | `curlec/errors/create_payout_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payouts.fetch_payout

- **Route**: `GET /payouts/{payout_id}`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def fetch_payout(payout_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout_id`
- **Params**: `payout_id` — path
- **Returns (parsed)**: `Payout`
- **Returns (raw)**: `ApiResult[Payout, FetchPayoutErrorBody]`
- **Error**: `FetchPayoutErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Payout` | `curlec/models/payout.py` |
| `FetchPayoutErrorBody` | `curlec/errors/fetch_payout_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payouts.list_payouts

- **Route**: `GET /payouts`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def list_payouts(account_number: str, *, contact_id: str | None = None, fund_account_id: str | None = None, from_: int | None = None, to: int | None = None, count: int | None = 25, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_number`
- **Params**: `account_number` — query · `contact_id` — query · `fund_account_id` — query · `from_` — query `from` · `to` — query · `count` — query · `skip` — query
- **Returns (parsed)**: `PayoutsResponse`
- **Returns (raw)**: `ApiResult[PayoutsResponse, ListPayoutsErrorBody]`
- **Error**: `ListPayoutsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutsResponse` | `curlec/models/payouts_response.py` |
| `ListPayoutsErrorBody` | `curlec/errors/list_payouts_error.py` |
| `Error` | `curlec/models/error.py` |

### client.x_payouts.reject_payout

- **Route**: `POST /payouts/{payout_id}/reject`
- **Auth**: `basic_auth` OR `oauth2_authorization_code` OR `oauth2_client_credentials`
- **Server**: `default`
- **Signature**: `def reject_payout(payout_id: str, *, body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout_id`
- **Params**: `payout_id` — path · `body` — JSON body
- **Returns (parsed)**: `Payout`
- **Returns (raw)**: `ApiResult[Payout, RejectPayoutErrorBody]`
- **Error**: `RejectPayoutErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutsRejectRequest` | `curlec/models/payouts_reject_request.py` |
| `PayoutsRejectRequestDict` | `curlec/models/payouts_reject_request.py` |
| `Payout` | `curlec/models/payout.py` |
| `RejectPayoutErrorBody` | `curlec/errors/reject_payout_error.py` |
| `Error` | `curlec/models/error.py` |

