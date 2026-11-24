<!-- Generated file — do not edit; regenerated with the SDK. -->

# Launches — operations

Accessor: `client.Launches` · Source: `src/DynamicFeed/Api/Launches.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### LaunchesLaunchesGet

- **Signature**: `LaunchesLaunchesGet(LaunchesLaunchesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `provider` ← `Provider`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<LaunchesLaunchesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `LaunchesLaunchesGetRequest` | `src/DynamicFeed/Requests/Launches/LaunchesLaunchesGetRequest.cs` |
| `Provider` | `src/DynamicFeed/Models/AnyOf/Provider.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `LaunchesLaunchesGetError` | `src/DynamicFeed/Errors/LaunchesLaunchesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

