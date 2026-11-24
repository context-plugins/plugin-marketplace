<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.metrics` · Source: `atlassian_compass/apis/metrics.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.metrics.insert_metric_value

- **Route**: `POST /compass/v1/metrics`
- **Auth**: `basic_auth`
- **Signature**: `def insert_metric_value(body: CompassV1MetricsRequest | CompassV1MetricsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `InsertMetricResponseDto`
- **Returns (raw)**: `ApiResult[InsertMetricResponseDto, InsertMetricValueErrorBody]`
- **Error**: `InsertMetricValueErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseDto` [400, 403, 404] · `InsertMetricResponseDto` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompassV1MetricsRequest` | `atlassian_compass/models/unions/compass_v1_metrics_request.py` |
| `CompassV1MetricsRequestDict` | `atlassian_compass/models/unions/compass_v1_metrics_request.py` |
| `InsertMetricResponseDto` | `atlassian_compass/models/insert_metric_response_dto.py` |
| `InsertMetricValueErrorBody` | `atlassian_compass/errors/insert_metric_value_error.py` |
| `ErrorResponseDto` | `atlassian_compass/models/error_response_dto.py` |

