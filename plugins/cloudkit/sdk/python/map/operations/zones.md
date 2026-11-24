<!-- Generated file — do not edit; regenerated with the SDK. -->

# Zones — operations

Accessor: `client.zones` · Source: `cloud_kit/apis/zones.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.zones.list_zones

- **Route**: `POST /zones/list`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def list_zones(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.zones.lookup_zones

- **Route**: `POST /zones/lookup`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def lookup_zones(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.zones.modify_zones

- **Route**: `POST /zones/modify`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def modify_zones(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.zones.zone_changes

- **Route**: `POST /zones/changes`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def zone_changes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

