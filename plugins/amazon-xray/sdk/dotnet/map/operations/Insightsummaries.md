<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insightsummaries — operations

Accessor: `client.Insightsummaries` · Source: `src/AwsXRay/Api/Insightsummaries.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInsightSummaries

- **Auth**: `options.Sigv4`
- **Signature**: `GetInsightSummaries(GetInsightSummariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetInsightSummariesResult`
- **Error**: `ApiException<GetInsightSummariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightSummariesRequest` | `src/AwsXRay/Requests/Insightsummaries/GetInsightSummariesRequest.cs` |
| `InsightSummariesRequest` | `src/AwsXRay/Models/InsightSummariesRequest.cs` |
| `GetInsightSummariesResult` | `src/AwsXRay/Models/GetInsightSummariesResult.cs` |
| `GetInsightSummariesError` | `src/AwsXRay/Errors/GetInsightSummariesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

