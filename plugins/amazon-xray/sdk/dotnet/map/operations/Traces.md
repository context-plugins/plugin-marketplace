<!-- Generated file — do not edit; regenerated with the SDK. -->

# Traces — operations

Accessor: `client.Traces` · Source: `src/AwsXRay/Api/Traces.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### BatchGetTraces

- **Auth**: `options.Sigv4`
- **Signature**: `BatchGetTraces(BatchGetTracesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `BatchGetTracesResult`
- **Error**: `ApiException<BatchGetTracesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `BatchGetTracesRequest` | `src/AwsXRay/Requests/Traces/BatchGetTracesRequest.cs` |
| `TracesRequest` | `src/AwsXRay/Models/TracesRequest.cs` |
| `BatchGetTracesResult` | `src/AwsXRay/Models/BatchGetTracesResult.cs` |
| `BatchGetTracesError` | `src/AwsXRay/Errors/BatchGetTracesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

### GetTraceSummaries

- **Auth**: `options.Sigv4`
- **Signature**: `GetTraceSummaries(GetTraceSummariesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetTraceSummariesResult`
- **Error**: `ApiException<GetTraceSummariesError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceSummariesRequest` | `src/AwsXRay/Requests/Traces/GetTraceSummariesRequest.cs` |
| `TraceSummariesRequest` | `src/AwsXRay/Models/TraceSummariesRequest.cs` |
| `GetTraceSummariesResult` | `src/AwsXRay/Models/GetTraceSummariesResult.cs` |
| `GetTraceSummariesError` | `src/AwsXRay/Errors/GetTraceSummariesError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

