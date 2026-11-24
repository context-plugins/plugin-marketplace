<!-- Generated file — do not edit; regenerated with the SDK. -->

# Earthquakes — operations

Accessor: `client.Earthquakes` · Source: `src/DynamicFeed/Api/Earthquakes.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### EarthquakesEarthquakesGet

- **Signature**: `EarthquakesEarthquakesGet(EarthquakesEarthquakesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `min_magnitude` ← `MinMagnitude`, `period` ← `Period`, `tsunami_only` ← `TsunamiOnly`, `limit` ← `Limit`
- **Returns**: `object`
- **Error**: `ApiException<EarthquakesEarthquakesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `EarthquakesEarthquakesGetRequest` | `src/DynamicFeed/Requests/Earthquakes/EarthquakesEarthquakesGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `EarthquakesEarthquakesGetError` | `src/DynamicFeed/Errors/EarthquakesEarthquakesGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

