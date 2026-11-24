<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `cloud_kit/apis/subscriptions.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.subscriptions.list_subscriptions

- **Route**: `POST /subscriptions/list`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def list_subscriptions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.subscriptions.lookup_subscriptions

- **Route**: `POST /subscriptions/lookup`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def lookup_subscriptions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.subscriptions.modify_subscriptions

- **Route**: `POST /subscriptions/modify`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def modify_subscriptions(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

