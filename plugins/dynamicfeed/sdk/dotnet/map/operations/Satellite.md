<!-- Generated file — do not edit; regenerated with the SDK. -->

# Satellite — operations

Accessor: `client.Satellite` · Source: `src/DynamicFeed/Api/Satellite.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SatelliteSatelliteGet

- **Signature**: `SatelliteSatelliteGet(SatelliteSatelliteGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `NoradId`
- **Query params (wire ← C#)**: `norad_id` ← `NoradId`, `track_minutes` ← `TrackMinutes`, `step_seconds` ← `StepSeconds`
- **Returns**: `object`
- **Error**: `ApiException<SatelliteSatelliteGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SatelliteSatelliteGetRequest` | `src/DynamicFeed/Requests/Satellite/SatelliteSatelliteGetRequest.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `SatelliteSatelliteGetError` | `src/DynamicFeed/Errors/SatelliteSatelliteGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

