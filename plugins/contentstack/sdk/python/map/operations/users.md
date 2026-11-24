<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `contentstack/apis/users.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.get_user

- **Route**: `GET /user`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `User` | `contentstack/models/user.py` |
| `GetUserErrorBody` | `contentstack/errors/get_user_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.users.update_user

- **Route**: `PUT /user`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def update_user(body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, UpdateUserErrorBody]`
- **Error**: `UpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateUserRequest` | `contentstack/models/update_user_request.py` |
| `UpdateUserRequestDict` | `contentstack/models/update_user_request.py` |
| `User` | `contentstack/models/user.py` |
| `UpdateUserErrorBody` | `contentstack/errors/update_user_error.py` |
| `Error2` | `contentstack/models/error2.py` |

