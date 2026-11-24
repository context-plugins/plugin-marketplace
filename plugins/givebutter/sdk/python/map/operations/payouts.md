<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.payouts` · Source: `givebutter/apis/payouts.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.payouts.payouts_index

- **Route**: `GET /v1/payouts`
- **Auth**: `http`
- **Signature**: `def payouts_index(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1PayoutsResponse`
- **Returns (raw)**: `ApiResult[V1PayoutsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `V1PayoutsResponse` | `givebutter/models/v1_payouts_response.py` |

### client.payouts.payouts_show

- **Route**: `GET /v1/payouts/{payout}`
- **Auth**: `http`
- **Signature**: `def payouts_show(payout: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `payout`
- **Params**: `payout` — path
- **Returns (parsed)**: `PayoutResource`
- **Returns (raw)**: `ApiResult[PayoutResource, PayoutsShowErrorBody]`
- **Error**: `PayoutsShowErrorBody` — **Case A (typed)**
- **Error arms**: `AuthorizationException1` [403] · `ModelNotFoundException1` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PayoutResource` | `givebutter/models/payout_resource.py` |
| `PayoutsShowErrorBody` | `givebutter/errors/payouts_show_error.py` |
| `AuthorizationException1` | `givebutter/models/authorization_exception1.py` |
| `ModelNotFoundException1` | `givebutter/models/model_not_found_exception1.py` |

