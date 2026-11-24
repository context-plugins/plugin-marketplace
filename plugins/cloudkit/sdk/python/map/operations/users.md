<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `cloud_kit/apis/users.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.users.caller_user

- **Route**: `POST /users/caller`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def caller_user(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.users.discover_users

- **Route**: `POST /users/discover`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def discover_users(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.users.lookup_users_by_email

- **Route**: `POST /users/lookup/email`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def lookup_users_by_email(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.users.lookup_users_by_id

- **Route**: `POST /users/lookup/id`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def lookup_users_by_id(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

