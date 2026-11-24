<!-- Generated file — do not edit; regenerated with the SDK. -->

# Platforms — operations

Accessor: `client.Platforms` · Source: `src/PrismaReviews/Api/Platforms.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetPlatform

- **Auth**: `options.ApiKey`
- **Signature**: `GetPlatform(GetPlatformRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Platform`
- **Error**: `ApiException<GetPlatformError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 404, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlatformRequest` | `src/PrismaReviews/Requests/Platforms/GetPlatformRequest.cs` |
| `PlatformId` | `src/PrismaReviews/Models/Enums/PlatformId.cs` |
| `Platform` | `src/PrismaReviews/Models/Platform.cs` |
| `GetPlatformError` | `src/PrismaReviews/Errors/GetPlatformError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

### ListPlatforms

- **Auth**: `options.ApiKey`
- **Signature**: `ListPlatforms(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PlatformList`
- **Error**: `ApiException<ListPlatformsError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429, 500, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PlatformList` | `src/PrismaReviews/Models/PlatformList.cs` |
| `ListPlatformsError` | `src/PrismaReviews/Errors/ListPlatformsError.cs` |
| `Error` | `src/PrismaReviews/Models/Error.cs` |

