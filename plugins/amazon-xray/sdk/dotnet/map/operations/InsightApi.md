<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightApi — operations

Accessor: `client.InsightApi` · Source: `src/AwsXRay/Api/InsightApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetInsight

- **Auth**: `options.Sigv4`
- **Signature**: `GetInsight(GetInsightRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetInsightResult`
- **Error**: `ApiException<GetInsightError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetInsightRequest` | `src/AwsXRay/Requests/InsightApi/GetInsightRequest.cs` |
| `InsightRequest` | `src/AwsXRay/Models/InsightRequest.cs` |
| `GetInsightResult` | `src/AwsXRay/Models/GetInsightResult.cs` |
| `GetInsightError` | `src/AwsXRay/Errors/GetInsightError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

