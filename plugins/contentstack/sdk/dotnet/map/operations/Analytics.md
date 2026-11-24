<!-- Generated file — do not edit; regenerated with the SDK. -->

# Analytics — operations

Accessor: `client.Analytics` · Source: `src/Contentstack/Api/Analytics.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCacheRevalidationUsage

- **Auth**: `options.BearerAuth` OR `options.AuthtokenAuth`
- **Signature**: `GetCacheRevalidationUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CacheUsage`
- **Error**: `ApiException<GetCacheRevalidationUsageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CacheUsage` | `src/Contentstack/Models/CacheUsage.cs` |
| `GetCacheRevalidationUsageError` | `src/Contentstack/Errors/GetCacheRevalidationUsageError.cs` |
| `Error` | `src/Contentstack/Models/Error.cs` |

