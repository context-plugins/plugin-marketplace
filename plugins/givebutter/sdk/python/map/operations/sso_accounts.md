<!-- Generated file — do not edit; regenerated with the SDK. -->

# SsoAccounts — operations

Accessor: `client.sso_accounts` · Source: `givebutter/apis/sso_accounts.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.sso_accounts.sso_account

- **Route**: `GET /sso/v1/account`
- **Auth**: `http`
- **Signature**: `def sso_account(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `SsoAccountResource`
- **Returns (raw)**: `ApiResult[SsoAccountResource, SsoAccountErrorBody]`
- **Error**: `SsoAccountErrorBody` — **Case A (typed)**
- **Error arms**: `AuthenticationException1` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SsoAccountResource` | `givebutter/models/sso_account_resource.py` |
| `SsoAccountErrorBody` | `givebutter/errors/sso_account_error.py` |
| `AuthenticationException1` | `givebutter/models/authentication_exception1.py` |

