<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdAccounts — operations

Accessor: `client.ad_accounts` · Source: `facebook_business_manager/apis/ad_accounts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ad_accounts.get_ad_account

- **Route**: `GET /act_{ad_account_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_ad_account(ad_account_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ad_account_id`
- **Params**: `ad_account_id` — path · `fields` — query
- **Returns (parsed)**: `AdAccount`
- **Returns (raw)**: `ApiResult[AdAccount, GetAdAccountErrorBody]`
- **Error**: `GetAdAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdAccount` | `facebook_business_manager/models/ad_account.py` |
| `GetAdAccountErrorBody` | `facebook_business_manager/errors/get_ad_account_error.py` |
| `Error` | `facebook_business_manager/models/error.py` |

