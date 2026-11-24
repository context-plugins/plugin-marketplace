<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.user_api` · Source: `bitly/apis/user_api.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_api.get_platform_limits

- **Route**: `GET /user/platform_limits`
- **Auth**: `bearer_auth`
- **Signature**: `def get_platform_limits(*, path: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `path` — query
- **Returns (parsed)**: `PlatformLimits`
- **Returns (raw)**: `ApiResult[PlatformLimits, GetPlatformLimitsErrorBody]`
- **Error**: `GetPlatformLimitsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlatformLimits` | `bitly/models/platform_limits.py` |
| `GetPlatformLimitsErrorBody` | `bitly/errors/get_platform_limits_error.py` |
| `Error` | `bitly/models/error.py` |

### client.user_api.get_user

- **Route**: `GET /user`
- **Auth**: `bearer_auth`
- **Signature**: `def get_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [403, 404, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `User` | `bitly/models/user.py` |
| `GetUserErrorBody` | `bitly/errors/get_user_error.py` |
| `Error` | `bitly/models/error.py` |

### client.user_api.update_user

- **Route**: `PATCH /user`
- **Auth**: `bearer_auth`
- **Signature**: `def update_user(body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, UpdateUserErrorBody]`
- **Error**: `UpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 403, 404, 422, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserUpdate` | `bitly/models/user_update.py` |
| `UserUpdateDict` | `bitly/models/user_update.py` |
| `User` | `bitly/models/user.py` |
| `UpdateUserErrorBody` | `bitly/errors/update_user_error.py` |
| `Error` | `bitly/models/error.py` |

