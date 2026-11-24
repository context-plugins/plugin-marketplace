<!-- Generated file — do not edit; regenerated with the SDK. -->

# Metrics — operations

Accessor: `client.Metrics` · Source: `src/ReadMe/Api/Metrics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostRequest

- **Auth**: `options.BasicAuth`
- **Signature**: `PostRequest(PostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<PostRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostRequest` | `src/ReadMe/Requests/Metrics/PostRequest.cs` |
| `MetricsRequest` | `src/ReadMe/Models/MetricsRequest.cs` |
| `PostRequestError` | `src/ReadMe/Errors/PostRequestError.cs` |

