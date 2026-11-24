<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.user_api` · Source: `circle_ci/apis/user_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_api.get_collaborations

- **Route**: `GET /me/collaborations`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_collaborations(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[Collaboration]`
- **Returns (raw)**: `ApiResult[list[Collaboration], GetCollaborationsErrorBody]`
- **Error**: `GetCollaborationsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Collaboration` | `circle_ci/models/collaboration.py` |
| `GetCollaborationsErrorBody` | `circle_ci/errors/get_collaborations_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.user_api.get_current_user

- **Route**: `GET /me`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_current_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, GetCurrentUserErrorBody]`
- **Error**: `GetCurrentUserErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `User` | `circle_ci/models/user.py` |
| `GetCurrentUserErrorBody` | `circle_ci/errors/get_current_user_error.py` |

