<!-- Generated file — do not edit; regenerated with the SDK. -->

# HealthApi — operations

Accessor: `client.HealthApi` · Source: `src/Celestia/Api/HealthApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetWebsiteHealth

- **Server group**: `DefaultCelestiaWebsiteContactApi`
- **Signature**: `GetWebsiteHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `Health`
- **Error**: `ApiException<GetWebsiteHealthError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorCelestiaWebsiteContactApi([NotNullWhen(true)] out ErrorCelestiaWebsiteContactApi? value)` [405] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `Health` | `src/Celestia/Models/Health.cs` |
| `GetWebsiteHealthError` | `src/Celestia/Errors/GetWebsiteHealthError.cs` |
| `ErrorCelestiaWebsiteContactApi` | `src/Celestia/Models/ErrorCelestiaWebsiteContactApi.cs` |

### HeadWebsiteHealth

- **Server group**: `DefaultCelestiaWebsiteContactApi`
- **Signature**: `HeadWebsiteHealth(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

