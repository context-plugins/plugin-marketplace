<!-- Generated file — do not edit; regenerated with the SDK. -->

# CallRecords — operations

Accessor: `client.call_records` · Source: `call_node/apis/call_records.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.call_records.get_call_record

- **Route**: `GET /api/v1/calls/{callId}`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def get_call_record(call_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `call_id`
- **Params**: `call_id` — path `callId`
- **Returns (parsed)**: `ApiV1CallsResponse1`
- **Returns (raw)**: `ApiResult[ApiV1CallsResponse1, GetCallRecordErrorBody]`
- **Error**: `GetCallRecordErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1CallsResponse1` | `call_node/models/api_v1_calls_response1.py` |
| `GetCallRecordErrorBody` | `call_node/errors/get_call_record_error.py` |
| `Error` | `call_node/models/error.py` |

### client.call_records.list_call_records

- **Route**: `GET /api/v1/calls`
- **Auth**: `api_key_auth` AND `timestamp_auth` AND `signature_auth`
- **Signature**: `def list_call_records(*, number: str | None = None, direction: DirectionOrStr | None = None, status: StatusOrStr | None = None, since: RFC3339DateTime | None = None, until: RFC3339DateTime | None = None, before: RFC3339DateTime | None = None, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `number` — query · `direction` — query · `status` — query · `since` — query · `until` — query · `before` — query · `limit` — query
- **Returns (parsed)**: `ApiV1CallsResponse`
- **Returns (raw)**: `ApiResult[ApiV1CallsResponse, ListCallRecordsErrorBody]`
- **Error**: `ListCallRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DirectionOrStr` | `call_node/models/enums/direction.py` |
| `StatusOrStr` | `call_node/models/enums/status.py` |
| `ApiV1CallsResponse` | `call_node/models/api_v1_calls_response.py` |
| `ListCallRecordsErrorBody` | `call_node/errors/list_call_records_error.py` |
| `Error` | `call_node/models/error.py` |

