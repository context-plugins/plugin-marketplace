<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `fellow/apis/users.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.apps_developer_api_api_get_authenticated_user

- **Route**: `GET /api/v1/me`
- **Auth**: `developer_api_key_auth`
- **Signature**: `def apps_developer_api_api_get_authenticated_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `AuthenticatedUserResponse`
- **Returns (raw)**: `ApiResult[AuthenticatedUserResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `AuthenticatedUserResponse` | `fellow/models/authenticated_user_response.py` |

