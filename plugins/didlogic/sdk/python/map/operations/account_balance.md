<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountBalance — operations

Accessor: `client.account_balance` · Source: `did_logic/apis/account_balance.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account_balance.balance_show

- **Route**: `GET /api/v1/balance`
- **Auth**: `bearer_auth`
- **Signature**: `def balance_show(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1BalanceResponse`
- **Returns (raw)**: `ApiResult[ApiV1BalanceResponse, BalanceShowErrorBody]`
- **Error**: `BalanceShowErrorBody` — **Case A (typed)**
- **Error arms**: `ApiV1Balance403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1BalanceResponse` | `did_logic/models/api_v1_balance_response.py` |
| `BalanceShowErrorBody` | `did_logic/errors/balance_show_error.py` |
| `ApiV1Balance403Error1` | `did_logic/models/api_v1_balance403_error1.py` |

