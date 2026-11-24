<!-- Generated file — do not edit; regenerated with the SDK. -->

# TimeseriesservicestatisticsApi — operations

Accessor: `client.timeseriesservicestatistics_api` · Source: `aws_x_ray/apis/timeseriesservicestatistics_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.timeseriesservicestatistics_api.get_time_series_service_statistics

- **Route**: `POST /TimeSeriesServiceStatistics`
- **Auth**: `sigv4`
- **Signature**: `def get_time_series_service_statistics(*, body: TimeSeriesServiceStatisticsRequest | TimeSeriesServiceStatisticsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `GetTimeSeriesServiceStatisticsResult`
- **Returns (raw)**: `ApiResult[GetTimeSeriesServiceStatisticsResult, GetTimeSeriesServiceStatisticsErrorBody]`
- **Error**: `GetTimeSeriesServiceStatisticsErrorBody` — **Case A (typed)**
- **Error arms**: `InvalidRequestException` [400] · `ThrottledException` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TimeSeriesServiceStatisticsRequest` | `aws_x_ray/models/time_series_service_statistics_request.py` |
| `TimeSeriesServiceStatisticsRequestDict` | `aws_x_ray/models/time_series_service_statistics_request.py` |
| `GetTimeSeriesServiceStatisticsResult` | `aws_x_ray/models/get_time_series_service_statistics_result.py` |
| `GetTimeSeriesServiceStatisticsErrorBody` | `aws_x_ray/errors/get_time_series_service_statistics_error.py` |
| `InvalidRequestException` | `aws_x_ray/models/invalid_request_exception.py` |
| `ThrottledException` | `aws_x_ray/models/throttled_exception.py` |

