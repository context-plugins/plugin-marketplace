<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccountsApi — operations

Accessor: `client.accounts_api` · Source: `basiq/apis/accounts_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts_api.get_account

- **Route**: `GET /users/{userId}/accounts/{accountId}`
- **Auth**: `services_token`
- **Signature**: `def get_account(user_id: str, account_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `account_id`
- **Params**: `user_id` — path `userId` · `account_id` — path `accountId` · `filter_` — query `filter`
- **Returns (parsed)**: `AccountResponseResource1`
- **Returns (raw)**: `ApiResult[AccountResponseResource1, GetAccountErrorBody]`
- **Error**: `GetAccountErrorBody` — **Case A (typed)**
- **Error arms**: `UsersAccounts400Error1` [400] · `UsersAccounts403Error1` [403] · `UsersAccounts404Error1` [404] · `UsersAccounts500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountResponseResource1` | `basiq/models/account_response_resource1.py` |
| `GetAccountErrorBody` | `basiq/errors/get_account_error.py` |
| `UsersAccounts400Error1` | `basiq/models/users_accounts400_error1.py` |
| `UsersAccounts403Error1` | `basiq/models/users_accounts403_error1.py` |
| `UsersAccounts404Error1` | `basiq/models/users_accounts404_error1.py` |
| `UsersAccounts500Error1` | `basiq/models/users_accounts500_error1.py` |

### client.accounts_api.get_accounts

- **Route**: `GET /users/{userId}/accounts`
- **Auth**: `services_token`
- **Signature**: `def get_accounts(user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`
- **Params**: `user_id` — path `userId` · `filter_` — query `filter`
- **Returns (parsed)**: `UsersAccountsResponse`
- **Returns (raw)**: `ApiResult[UsersAccountsResponse, GetAccountsErrorBody]`
- **Error**: `GetAccountsErrorBody` — **Case A (typed)**
- **Error arms**: `UsersAccounts400Error1` [400] · `UsersAccounts403Error1` [403] · `UsersAccounts404Error1` [404] · `UsersAccounts500Error1` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsersAccountsResponse` | `basiq/models/users_accounts_response.py` |
| `GetAccountsErrorBody` | `basiq/errors/get_accounts_error.py` |
| `UsersAccounts400Error1` | `basiq/models/users_accounts400_error1.py` |
| `UsersAccounts403Error1` | `basiq/models/users_accounts403_error1.py` |
| `UsersAccounts404Error1` | `basiq/models/users_accounts404_error1.py` |
| `UsersAccounts500Error1` | `basiq/models/users_accounts500_error1.py` |

