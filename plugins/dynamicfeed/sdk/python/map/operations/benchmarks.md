<!-- Generated file — do not edit; regenerated with the SDK. -->

# Benchmarks — operations

Accessor: `client.benchmarks` · Source: `dynamic_feed/apis/benchmarks.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.benchmarks.benchmarks_benchmarks_get

- **Route**: `GET /benchmarks`
- **Signature**: `def benchmarks_benchmarks_get(*, window_hours: int | None = 24, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `window_hours` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, BenchmarksBenchmarksGetErrorBody]`
- **Error**: `BenchmarksBenchmarksGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BenchmarksBenchmarksGetErrorBody` | `dynamic_feed/errors/benchmarks_benchmarks_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.benchmarks.benchmarks_history_benchmarks_history_get

- **Route**: `GET /benchmarks/history`
- **Signature**: `def benchmarks_history_benchmarks_history_get(*, provider: str | None = "", days: int | None = 90, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `provider` — query · `days` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, BenchmarksHistoryBenchmarksHistoryGetErrorBody]`
- **Error**: `BenchmarksHistoryBenchmarksHistoryGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BenchmarksHistoryBenchmarksHistoryGetErrorBody` | `dynamic_feed/errors/benchmarks_history_benchmarks_history_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

