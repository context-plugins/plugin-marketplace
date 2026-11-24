<!-- Generated file — do not edit; regenerated with the SDK. -->

# Records — operations

Accessor: `client.records` · Source: `cloud_kit/apis/records.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.records.accept_share

- **Route**: `POST /records/accept`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def accept_share(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.records.lookup_records

- **Route**: `POST /records/lookup`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def lookup_records(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.records.modify_records

- **Route**: `POST /records/modify`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def modify_records(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.records.query_records

- **Route**: `POST /records/query`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def query_records(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.records.record_changes

- **Route**: `POST /records/changes`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def record_changes(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.records.resolve_records

- **Route**: `POST /records/resolve`
- **Auth**: `cloud_kit_api_token` OR `server_to_server`
- **Signature**: `def resolve_records(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

