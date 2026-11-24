<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `buildkite/apis/metrics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.metrics.get_metrics

- **Route**: `GET /metrics`
- **Auth**: `bearer_auth`
- **Server**: `default_buildkite_agent_metrics_api`
- **Signature**: `def get_metrics(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `MetricsResponse`
- **Returns (raw)**: `ApiResult[MetricsResponse, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `MetricsResponse` | `buildkite/models/metrics_response.py` |

