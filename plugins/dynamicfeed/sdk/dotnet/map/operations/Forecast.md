<!-- Generated file — do not edit; regenerated with the SDK. -->

# Forecast — operations

Accessor: `client.Forecast` · Source: `src/DynamicFeed/Api/Forecast.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ForecastForecastGet

- **Signature**: `ForecastForecastGet(ForecastForecastGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `city` ← `City`, `lat` ← `Lat`, `lon` ← `Lon`, `days` ← `Days`
- **Returns**: `object`
- **Error**: `ApiException<ForecastForecastGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ForecastForecastGetRequest` | `src/DynamicFeed/Requests/Forecast/ForecastForecastGetRequest.cs` |
| `City` | `src/DynamicFeed/Models/AnyOf/City.cs` |
| `Lat` | `src/DynamicFeed/Models/AnyOf/Lat.cs` |
| `Lon` | `src/DynamicFeed/Models/AnyOf/Lon.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `ForecastForecastGetError` | `src/DynamicFeed/Errors/ForecastForecastGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

