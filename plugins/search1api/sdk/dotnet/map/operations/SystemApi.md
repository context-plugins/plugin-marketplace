<!-- Generated file — do not edit; regenerated with the SDK. -->

# SystemApi — operations

Accessor: `client.SystemApi` · Source: `src/Search1Api/Api/SystemApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Health

- **Signature**: `Health(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `HealthResponse`
- **Error**: `ApiException<HealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HealthResponse` | `src/Search1Api/Models/HealthResponse.cs` |
| `HealthError` | `src/Search1Api/Errors/HealthError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

