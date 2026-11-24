<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `bitbucket/apis/users.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.get_user

- **Route**: `GET /user`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Account`
- **Returns (raw)**: `ApiResult[Account, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Account` | `bitbucket/models/account.py` |
| `GetUserErrorBody` | `bitbucket/errors/get_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

### client.users.get_user_emails

- **Route**: `GET /user/emails`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_emails(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |

### client.users.get_user_emails_by_email

- **Route**: `GET /user/emails/{email}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_user_emails_by_email(email: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `email`
- **Params**: `email` — path
- **Returns (parsed)**: `Error`
- **Returns (raw)**: `ApiResult[Error, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Error` | `bitbucket/models/error.py` |

### client.users.get_users_by_selected_user

- **Route**: `GET /users/{selected_user}`
- **Auth**: `oauth2` OR `basic` OR `api_key`
- **Server**: `default`
- **Signature**: `def get_users_by_selected_user(selected_user: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `selected_user`
- **Params**: `selected_user` — path
- **Returns (parsed)**: `Account`
- **Returns (raw)**: `ApiResult[Account, GetUsersBySelectedUserErrorBody]`
- **Error**: `GetUsersBySelectedUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Account` | `bitbucket/models/account.py` |
| `GetUsersBySelectedUserErrorBody` | `bitbucket/errors/get_users_by_selected_user_error.py` |
| `Error` | `bitbucket/models/error.py` |

