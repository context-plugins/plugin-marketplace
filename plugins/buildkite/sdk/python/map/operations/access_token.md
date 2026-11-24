<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessToken — operations

Accessor: `client.access_token` · Source: `buildkite/apis/access_token.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.access_token.get_access_token

- **Route**: `GET /access-token`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_access_token(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.access_token.revoke_access_token

- **Route**: `DELETE /access-token`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def revoke_access_token(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

