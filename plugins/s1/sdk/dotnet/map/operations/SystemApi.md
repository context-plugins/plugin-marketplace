<!-- Generated file — do not edit; regenerated with the SDK. -->

# SystemApi — operations

Accessor: `client.SystemApi` · Source: `src/S1/Api/SystemApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Health

- **Signature**: `Health(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `HealthResponse`
- **Error**: `ApiException<HealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `HealthResponse` | `src/S1/Models/HealthResponse.cs` |
| `HealthError` | `src/S1/Errors/HealthError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

