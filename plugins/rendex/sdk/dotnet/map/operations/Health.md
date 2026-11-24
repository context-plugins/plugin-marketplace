<!-- Generated file — do not edit; regenerated with the SDK. -->

# Health — operations

Accessor: `client.Health` · Source: `src/Rendex/Api/Health.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeepHealthCheck

- **Signature**: `DeepHealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `DeepHealthResponse`
- **Error**: `ApiException<DeepHealthCheckError>` — **Case A (typed)**
- **Error accessors**: `TryGetDeepHealthResponse([NotNullWhen(true)] out DeepHealthResponse? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeepHealthResponse` | `src/Rendex/Models/DeepHealthResponse.cs` |
| `DeepHealthCheckError` | `src/Rendex/Errors/DeepHealthCheckError.cs` |

### HealthCheck

- **Signature**: `HealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `HealthResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `HealthResponse` | `src/Rendex/Models/HealthResponse.cs` |

