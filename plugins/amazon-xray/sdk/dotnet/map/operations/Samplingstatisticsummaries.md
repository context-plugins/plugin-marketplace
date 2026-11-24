<!-- Generated file — do not edit; regenerated with the SDK. -->

# Samplingstatisticsummaries — operations

Accessor: `client.Samplingstatisticsummaries` · Source: `src/AwsXRay/Api/Samplingstatisticsummaries.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetSamplingStatisticSummaries

- **Auth**: `options.Sigv4`
- **Signature**: `GetSamplingStatisticSummaries(GetSamplingStatisticSummariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetSamplingStatisticSummariesResult`
- **Error**: `ApiException<GetSamplingStatisticSummariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSamplingStatisticSummariesRequest` | `src/AwsXRay/Requests/Samplingstatisticsummaries/GetSamplingStatisticSummariesRequest.cs` |
| `SamplingStatisticSummariesRequest` | `src/AwsXRay/Models/SamplingStatisticSummariesRequest.cs` |
| `GetSamplingStatisticSummariesResult` | `src/AwsXRay/Models/GetSamplingStatisticSummariesResult.cs` |
| `GetSamplingStatisticSummariesError` | `src/AwsXRay/Errors/GetSamplingStatisticSummariesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

