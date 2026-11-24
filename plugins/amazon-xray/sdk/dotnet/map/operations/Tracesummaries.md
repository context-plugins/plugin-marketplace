<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracesummaries — operations

Accessor: `client.Tracesummaries` · Source: `src/AwsXRay/Api/Tracesummaries.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTraceSummaries2

- **Auth**: `options.Sigv4`
- **Signature**: `GetTraceSummaries2(GetTraceSummaries2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetTraceSummariesResult`
- **Error**: `ApiException<GetTraceSummaries2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceSummaries2Request` | `src/AwsXRay/Requests/Tracesummaries/GetTraceSummaries2Request.cs` |
| `TraceSummariesRequest` | `src/AwsXRay/Models/TraceSummariesRequest.cs` |
| `GetTraceSummariesResult` | `src/AwsXRay/Models/GetTraceSummariesResult.cs` |
| `GetTraceSummaries2Error` | `src/AwsXRay/Errors/GetTraceSummaries2Error.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

