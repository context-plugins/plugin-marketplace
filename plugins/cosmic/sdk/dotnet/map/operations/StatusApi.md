<!-- Generated file — do not edit; regenerated with the SDK. -->

# StatusApi — operations

Accessor: `client.StatusApi` · Source: `src/Cosmic/Api/StatusApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetOpenApiSpec

- **Signature**: `GetOpenApiSpec(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `OpenapiJsonResponse`
- **Error**: `ApiException<GetOpenApiSpecError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `OpenapiJsonResponse` | `src/Cosmic/Models/OpenapiJsonResponse.cs` |
| `GetOpenApiSpecError` | `src/Cosmic/Errors/GetOpenApiSpecError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

### GetStatus

- **Signature**: `GetStatus(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StatusResponse`
- **Error**: `ApiException<GetStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StatusResponse` | `src/Cosmic/Models/StatusResponse.cs` |
| `GetStatusError` | `src/Cosmic/Errors/GetStatusError.cs` |
| `Error` | `src/Cosmic/Models/Error.cs` |

