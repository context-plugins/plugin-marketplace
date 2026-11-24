<!-- Generated file — do not edit; regenerated with the SDK. -->

# Changes — operations

Accessor: `client.changes` · Source: `cloud_kit/apis/changes.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.changes.database_changes

- **Route**: `POST /changes/database`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def database_changes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.changes.zone_record_changes

- **Route**: `POST /changes/zone`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def zone_record_changes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

