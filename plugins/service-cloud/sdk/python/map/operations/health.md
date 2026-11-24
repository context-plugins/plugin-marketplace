<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.health` · Source: `salesforce_service_cloud/apis/health.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.health.check_health_status

- **Route**: `GET /status`
- **Server**: `default`
- **Signature**: `def check_health_status(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Status`
- **Returns (raw)**: `ApiResult[Status, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Status` | `salesforce_service_cloud/models/status.py` |

