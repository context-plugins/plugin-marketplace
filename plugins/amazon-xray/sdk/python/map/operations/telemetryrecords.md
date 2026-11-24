<!-- Generated file — do not edit; regenerated with the SDK. -->

# Telemetryrecords — operations

Accessor: `client.telemetryrecords` · Source: `aws_x_ray/apis/telemetryrecords.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.telemetryrecords.put_telemetry_records

- **Route**: `POST /TelemetryRecords`
- **Auth**: `sigv4`
- **Signature**: `def put_telemetry_records(*, body: TelemetryRecordsRequest | TelemetryRecordsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, PutTelemetryRecordsErrorBody]`
- **Error**: `PutTelemetryRecordsErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TelemetryRecordsRequest` | `aws_x_ray/models/telemetry_records_request.py` |
| `TelemetryRecordsRequestDict` | `aws_x_ray/models/telemetry_records_request.py` |
| `PutTelemetryRecordsErrorBody` | `aws_x_ray/errors/put_telemetry_records_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

