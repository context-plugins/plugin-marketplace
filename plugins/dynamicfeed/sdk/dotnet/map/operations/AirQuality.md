<!-- Generated file — do not edit; regenerated with the SDK. -->

# AirQuality — operations

Accessor: `client.AirQuality` · Source: `src/DynamicFeed/Api/AirQuality.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AirQualityAirQualityGet

- **Signature**: `AirQualityAirQualityGet(AirQualityAirQualityGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `city` ← `City`, `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `object`
- **Error**: `ApiException<AirQualityAirQualityGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirQualityAirQualityGetRequest` | `src/DynamicFeed/Requests/AirQuality/AirQualityAirQualityGetRequest.cs` |
| `City` | `src/DynamicFeed/Models/AnyOf/City.cs` |
| `Lat` | `src/DynamicFeed/Models/AnyOf/Lat.cs` |
| `Lon` | `src/DynamicFeed/Models/AnyOf/Lon.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `AirQualityAirQualityGetError` | `src/DynamicFeed/Errors/AirQualityAirQualityGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

