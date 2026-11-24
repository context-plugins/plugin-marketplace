<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tracegraph — operations

Accessor: `client.Tracegraph` · Source: `src/AwsXRay/Api/Tracegraph.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetTraceGraph

- **Auth**: `options.Sigv4`
- **Signature**: `GetTraceGraph(GetTraceGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetTraceGraphResult`
- **Error**: `ApiException<GetTraceGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetTraceGraphRequest` | `src/AwsXRay/Requests/Tracegraph/GetTraceGraphRequest.cs` |
| `TraceGraphRequest` | `src/AwsXRay/Models/TraceGraphRequest.cs` |
| `GetTraceGraphResult` | `src/AwsXRay/Models/GetTraceGraphResult.cs` |
| `GetTraceGraphError` | `src/AwsXRay/Errors/GetTraceGraphError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

