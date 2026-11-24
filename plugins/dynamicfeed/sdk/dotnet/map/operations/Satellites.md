<!-- Generated file — do not edit; regenerated with the SDK. -->

# Satellites — operations

Accessor: `client.Satellites` · Source: `src/DynamicFeed/Api/Satellites.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SatellitesSatellitesGet

- **Signature**: `SatellitesSatellitesGet(SatellitesSatellitesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `group` ← `Group`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<SatellitesSatellitesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SatellitesSatellitesGetRequest` | `src/DynamicFeed/Requests/Satellites/SatellitesSatellitesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SatellitesSatellitesGetError` | `src/DynamicFeed/Errors/SatellitesSatellitesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

