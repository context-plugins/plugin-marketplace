<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserSessions — operations

Accessor: `client.user_sessions` · Source: `contentstack/apis/user_sessions.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_sessions.login_user

- **Route**: `POST /user-session`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def login_user(body: LoginRequest | LoginRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `LoginResponse`
- **Returns (raw)**: `ApiResult[LoginResponse, LoginUserErrorBody]`
- **Error**: `LoginUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LoginRequest` | `contentstack/models/login_request.py` |
| `LoginRequestDict` | `contentstack/models/login_request.py` |
| `LoginResponse` | `contentstack/models/login_response.py` |
| `LoginUserErrorBody` | `contentstack/errors/login_user_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.user_sessions.logout_user

- **Route**: `DELETE /user-session`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def logout_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, LogoutUserErrorBody]`
- **Error**: `LogoutUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `LogoutUserErrorBody` | `contentstack/errors/logout_user_error.py` |
| `Error2` | `contentstack/models/error2.py` |

