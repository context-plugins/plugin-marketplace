<!-- Generated file — do not edit; regenerated with the SDK. -->

# UserApi — operations

Accessor: `client.user_api` · Source: `buildkite/apis/user_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.user_api.get_current_user

- **Route**: `GET /user`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_current_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `User` | `buildkite/models/user.py` |

