<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `instagram/apis/users.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.get_business_discovery

- **Route**: `GET /{user_id}/business_discovery`
- **Server**: `default`
- **Signature**: `def get_business_discovery(user_id: str, fields: str, access_token: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `fields`, `access_token`
- **Params**: `user_id` — path · `fields` — query · `access_token` — query
- **Returns (parsed)**: `BusinessDiscoveryResponse`
- **Returns (raw)**: `ApiResult[BusinessDiscoveryResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `BusinessDiscoveryResponse` | `instagram/models/business_discovery_response.py` |

### client.users.get_user

- **Route**: `GET /{user_id}`
- **Server**: `default`
- **Signature**: `def get_user(user_id: str, access_token: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `user_id`, `access_token`
- **Params**: `user_id` — path · `access_token` — query · `fields` — query
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `User` | `instagram/models/user.py` |

