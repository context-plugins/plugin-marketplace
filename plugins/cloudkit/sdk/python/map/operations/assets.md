<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.assets` · Source: `cloud_kit/apis/assets.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.assets.rereference_assets

- **Route**: `POST /assets/rereference`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def rereference_assets(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.assets.upload_assets

- **Route**: `POST /assets/upload`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def upload_assets(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

