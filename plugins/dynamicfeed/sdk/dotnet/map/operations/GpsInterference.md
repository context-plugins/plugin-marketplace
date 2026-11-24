<!-- Generated file — do not edit; regenerated with the SDK. -->

# GpsInterference — operations

Accessor: `client.GpsInterference` · Source: `src/DynamicFeed/Api/GpsInterference.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GpsInterferenceGpsInterferenceGet

- **Signature**: `GpsInterferenceGpsInterferenceGet(GpsInterferenceGpsInterferenceGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `region` ← `Region`, `lat` ← `Lat`, `lon` ← `Lon`, `radius_km` ← `RadiusKm`
- **Returns**: `object`
- **Error**: `ApiException<GpsInterferenceGpsInterferenceGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GpsInterferenceGpsInterferenceGetRequest` | `src/DynamicFeed/Requests/GpsInterference/GpsInterferenceGpsInterferenceGetRequest.cs` |
| `Lat` | `src/DynamicFeed/Models/AnyOf/Lat.cs` |
| `Lon` | `src/DynamicFeed/Models/AnyOf/Lon.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `GpsInterferenceGpsInterferenceGetError` | `src/DynamicFeed/Errors/GpsInterferenceGpsInterferenceGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

