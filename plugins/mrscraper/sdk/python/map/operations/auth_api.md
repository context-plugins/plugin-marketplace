<!-- Generated file — do not edit; regenerated with the SDK. -->

# AuthApi — operations

Accessor: `client.auth_api` · Source: `mr_scraper/apis/auth_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.auth_api.get_subscription_accounts

- **Route**: `GET /subscription-accounts`
- **Auth**: `api_key` OR `bearer_auth`
- **Server**: `default_scraper_service_gateway_auth_api`
- **Signature**: `def get_subscription_accounts(*, x_backoffice_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `x_backoffice_token` — header `x-backoffice-token`
- **Returns (parsed)**: `SubscriptionAccountsResponse`
- **Returns (raw)**: `ApiResult[SubscriptionAccountsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubscriptionAccountsResponse` | `mr_scraper/models/subscription_accounts_response.py` |

