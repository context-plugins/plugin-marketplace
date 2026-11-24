<!-- Generated file — do not edit; regenerated with the SDK. -->

# Account — operations

Accessor: `client.account` · Source: `juri_sign/apis/account.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.account.get_account_credits

- **Route**: `GET /account/credits`
- **Auth**: `bearer_auth`
- **Signature**: `def get_account_credits(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountCreditsResponse`
- **Returns (raw)**: `ApiResult[AccountCreditsResponse, GetAccountCreditsErrorBody]`
- **Error**: `GetAccountCreditsErrorBody` — **Case A (typed)**
- **Error arms**: `Unauthenticated1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountCreditsResponse` | `juri_sign/models/account_credits_response.py` |
| `GetAccountCreditsErrorBody` | `juri_sign/errors/get_account_credits_error.py` |
| `Unauthenticated1` | `juri_sign/models/unauthenticated1.py` |

