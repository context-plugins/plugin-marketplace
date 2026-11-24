<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `unbounce/apis/accounts.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts.get_account

- **Route**: `GET /accounts/{account_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `Account`
- **Returns (raw)**: `ApiResult[Account, GetAccountErrorBody]`
- **Error**: `GetAccountErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Account` | `unbounce/models/account.py` |
| `GetAccountErrorBody` | `unbounce/errors/get_account_error.py` |
| `Error` | `unbounce/models/error.py` |

### client.accounts.get_sub_account

- **Route**: `GET /sub_accounts/{sub_account_id}`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def get_sub_account(sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `sub_account_id`
- **Params**: `sub_account_id` — path
- **Returns (parsed)**: `SubAccount`
- **Returns (raw)**: `ApiResult[SubAccount, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `SubAccount` | `unbounce/models/sub_account.py` |

### client.accounts.list_accounts

- **Route**: `GET /accounts`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_accounts(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AccountCollection`
- **Returns (raw)**: `ApiResult[AccountCollection, ListAccountsErrorBody]`
- **Error**: `ListAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountCollection` | `unbounce/models/account_collection.py` |
| `ListAccountsErrorBody` | `unbounce/errors/list_accounts_error.py` |
| `Error` | `unbounce/models/error.py` |

### client.accounts.list_sub_accounts_for_account

- **Route**: `GET /accounts/{account_id}/sub_accounts`
- **Auth**: `api_key_auth` OR `oauth2`
- **Signature**: `def list_sub_accounts_for_account(account_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `account_id`
- **Params**: `account_id` — path
- **Returns (parsed)**: `AccountsSubAccountsResponse`
- **Returns (raw)**: `ApiResult[AccountsSubAccountsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AccountsSubAccountsResponse` | `unbounce/models/accounts_sub_accounts_response.py` |

