<!-- Generated file — do not edit; regenerated with the SDK. -->

# ServiceGraph — operations

Accessor: `client.ServiceGraph` · Source: `src/AwsXRay/Api/ServiceGraph.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetServiceGraph

- **Auth**: `options.Sigv4`
- **Signature**: `GetServiceGraph(GetServiceGraphRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetServiceGraphResult`
- **Error**: `ApiException<GetServiceGraphError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetServiceGraphRequest` | `src/AwsXRay/Requests/ServiceGraph/GetServiceGraphRequest.cs` |
| `ServiceGraphRequest` | `src/AwsXRay/Models/ServiceGraphRequest.cs` |
| `GetServiceGraphResult` | `src/AwsXRay/Models/GetServiceGraphResult.cs` |
| `GetServiceGraphError` | `src/AwsXRay/Errors/GetServiceGraphError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

