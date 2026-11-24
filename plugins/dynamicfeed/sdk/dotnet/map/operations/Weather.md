<!-- Generated file — do not edit; regenerated with the SDK. -->

# Weather — operations

Accessor: `client.Weather` · Source: `src/DynamicFeed/Api/Weather.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### V1OpenweatherCurrentV1OpenweatherCurrentGet

- **Signature**: `V1OpenweatherCurrentV1OpenweatherCurrentGet(V1OpenweatherCurrentV1OpenweatherCurrentGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `city` ← `City`, `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `object`
- **Error**: `ApiException<V1OpenweatherCurrentV1OpenweatherCurrentGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1OpenweatherCurrentV1OpenweatherCurrentGetRequest` | `src/DynamicFeed/Requests/Weather/V1OpenweatherCurrentV1OpenweatherCurrentGetRequest.cs` |
| `City1` | `src/DynamicFeed/Models/AnyOf/City1.cs` |
| `Lat1` | `src/DynamicFeed/Models/AnyOf/Lat1.cs` |
| `Lon1` | `src/DynamicFeed/Models/AnyOf/Lon1.cs` |
| `V1OpenweatherCurrentV1OpenweatherCurrentGetError` | `src/DynamicFeed/Errors/V1OpenweatherCurrentV1OpenweatherCurrentGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### V1OpenweatherForecastV1OpenweatherForecastGet

- **Signature**: `V1OpenweatherForecastV1OpenweatherForecastGet(V1OpenweatherForecastV1OpenweatherForecastGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `city` ← `City`, `lat` ← `Lat`, `lon` ← `Lon`, `days` ← `Days`
- **Returns**: `object`
- **Error**: `ApiException<V1OpenweatherForecastV1OpenweatherForecastGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1OpenweatherForecastV1OpenweatherForecastGetRequest` | `src/DynamicFeed/Requests/Weather/V1OpenweatherForecastV1OpenweatherForecastGetRequest.cs` |
| `City1` | `src/DynamicFeed/Models/AnyOf/City1.cs` |
| `Lat1` | `src/DynamicFeed/Models/AnyOf/Lat1.cs` |
| `Lon1` | `src/DynamicFeed/Models/AnyOf/Lon1.cs` |
| `V1OpenweatherForecastV1OpenweatherForecastGetError` | `src/DynamicFeed/Errors/V1OpenweatherForecastV1OpenweatherForecastGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

### WeatherWeatherGet

- **Signature**: `WeatherWeatherGet(WeatherWeatherGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `city` ← `City`, `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `object`
- **Error**: `ApiException<WeatherWeatherGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WeatherWeatherGetRequest` | `src/DynamicFeed/Requests/Weather/WeatherWeatherGetRequest.cs` |
| `City` | `src/DynamicFeed/Models/AnyOf/City.cs` |
| `Lat` | `src/DynamicFeed/Models/AnyOf/Lat.cs` |
| `Lon` | `src/DynamicFeed/Models/AnyOf/Lon.cs` |
| `XApiKey` | `src/DynamicFeed/Models/AnyOf/XApiKey.cs` |
| `XRapidapiProxySecret` | `src/DynamicFeed/Models/AnyOf/XRapidapiProxySecret.cs` |
| `XRapidapiUser` | `src/DynamicFeed/Models/AnyOf/XRapidapiUser.cs` |
| `WeatherWeatherGetError` | `src/DynamicFeed/Errors/WeatherWeatherGetError.cs` |
| `HttpValidationError` | `src/DynamicFeed/Models/HttpValidationError.cs` |

