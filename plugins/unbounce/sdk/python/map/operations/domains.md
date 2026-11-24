<!-- Generated file — do not edit; regenerated with the SDK. -->

# Domains — operations

Accessor: `client.domains` · Source: `unbounce/apis/domains.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.domains.get_domain

- **Route**: `GET /domains/{domain_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_domain(domain_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `domain_id`
- **Params**: `domain_id` — path
- **Returns (parsed)**: `Domain`
- **Returns (raw)**: `ApiResult[Domain, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Domain` | `unbounce/models/domain.py` |

### client.domains.list_domains_for_sub_account

- **Route**: `GET /sub_accounts/{sub_account_id}/domains`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_domains_for_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_account_id`
- **Params**: `sub_account_id` — path
- **Returns (parsed)**: `SubAccountsDomainsResponse`
- **Returns (raw)**: `ApiResult[SubAccountsDomainsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubAccountsDomainsResponse` | `unbounce/models/sub_accounts_domains_response.py` |

