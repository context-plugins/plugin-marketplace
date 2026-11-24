<!-- Generated file — do not edit; regenerated with the SDK. -->

# System — operations

Accessor: `client.system` · Source: `s1/apis/system.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.system.health

- **Route**: `GET /health`
- **Signature**: `def health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `HealthResponse`
- **Returns (raw)**: `ApiResult[HealthResponse, HealthErrorBody]`
- **Error**: `HealthErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HealthResponse` | `s1/models/health_response.py` |
| `HealthErrorBody` | `s1/errors/health_error.py` |
| `ApiErrorModel` | `s1/models/api_error_model.py` |

