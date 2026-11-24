<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `rendex/apis/account.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.get_account

- **Route**: `GET /v1/account`
- **Auth**: `bearer_auth`
- **Signature**: `def get_account(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1AccountResponse`
- **Returns (raw)**: `ApiResult[V1AccountResponse, GetAccountErrorBody]`
- **Error**: `GetAccountErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1AccountResponse` | `rendex/models/v1_account_response.py` |
| `GetAccountErrorBody` | `rendex/errors/get_account_error.py` |
| `ErrorResponse` | `rendex/models/error_response.py` |

