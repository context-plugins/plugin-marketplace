<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.health` · Source: `rendex/apis/health.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.health.deep_health_check

- **Route**: `GET /health/deep`
- **Signature**: `def deep_health_check(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DeepHealthResponse`
- **Returns (raw)**: `ApiResult[DeepHealthResponse, DeepHealthCheckErrorBody]`
- **Error**: `DeepHealthCheckErrorBody` — **Case A (typed)**
- **Error arms**: `DeepHealthResponse` [503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeepHealthResponse` | `rendex/models/deep_health_response.py` |
| `DeepHealthCheckErrorBody` | `rendex/errors/deep_health_check_error.py` |

### client.health.health_check

- **Route**: `GET /health`
- **Signature**: `def health_check(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `HealthResponse`
- **Returns (raw)**: `ApiResult[HealthResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `HealthResponse` | `rendex/models/health_response.py` |

