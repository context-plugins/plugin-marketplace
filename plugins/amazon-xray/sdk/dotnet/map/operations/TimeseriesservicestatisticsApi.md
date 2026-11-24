<!-- Generated file — do not edit; regenerated with the SDK. -->

# TimeseriesservicestatisticsApi — operations

Accessor: `client.TimeseriesservicestatisticsApi` · Source: `src/AwsXRay/Api/TimeseriesservicestatisticsApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTimeSeriesServiceStatistics

- **Auth**: `options.Sigv4`
- **Signature**: `GetTimeSeriesServiceStatistics(GetTimeSeriesServiceStatisticsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetTimeSeriesServiceStatisticsResult`
- **Error**: `ApiException<GetTimeSeriesServiceStatisticsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTimeSeriesServiceStatisticsRequest` | `src/AwsXRay/Requests/TimeseriesservicestatisticsApi/GetTimeSeriesServiceStatisticsRequest.cs` |
| `TimeSeriesServiceStatisticsRequest` | `src/AwsXRay/Models/TimeSeriesServiceStatisticsRequest.cs` |
| `GetTimeSeriesServiceStatisticsResult` | `src/AwsXRay/Models/GetTimeSeriesServiceStatisticsResult.cs` |
| `GetTimeSeriesServiceStatisticsError` | `src/AwsXRay/Errors/GetTimeSeriesServiceStatisticsError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

