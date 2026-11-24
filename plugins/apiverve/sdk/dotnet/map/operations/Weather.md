<!-- Generated file — do not edit; regenerated with the SDK. -->

# Weather — operations

Accessor: `client.Weather` · Source: `src/ApiVerve/Api/Weather.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Airquality

- **Auth**: `options.ApiKey`
- **Signature**: `Airquality(AirqualityRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `City`
- **Query params (wire ← C#)**: `city` ← `City`
- **Returns**: `V1AirqualityResponse`
- **Error**: `ApiException<AirqualityError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AirqualityRequest` | `src/ApiVerve/Requests/Weather/AirqualityRequest.cs` |
| `V1AirqualityResponse` | `src/ApiVerve/Models/V1AirqualityResponse.cs` |
| `AirqualityError` | `src/ApiVerve/Errors/AirqualityError.cs` |

### Earthquake

- **Auth**: `options.ApiKey`
- **Signature**: `Earthquake(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1EarthquakeResponse`
- **Error**: `ApiException<EarthquakeError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1EarthquakeResponse` | `src/ApiVerve/Models/V1EarthquakeResponse.cs` |
| `EarthquakeError` | `src/ApiVerve/Errors/EarthquakeError.cs` |

### Marineweather

- **Auth**: `options.ApiKey`
- **Signature**: `Marineweather(MarineweatherRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `V1MarineweatherResponse`
- **Error**: `ApiException<MarineweatherError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MarineweatherRequest` | `src/ApiVerve/Requests/Weather/MarineweatherRequest.cs` |
| `V1MarineweatherResponse` | `src/ApiVerve/Models/V1MarineweatherResponse.cs` |
| `MarineweatherError` | `src/ApiVerve/Errors/MarineweatherError.cs` |

### Moonrisemoonset

- **Auth**: `options.ApiKey`
- **Signature**: `Moonrisemoonset(MoonrisemoonsetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `date` ← `Date`
- **Returns**: `V1MoonrisemoonsetResponse`
- **Error**: `ApiException<MoonrisemoonsetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MoonrisemoonsetRequest` | `src/ApiVerve/Requests/Weather/MoonrisemoonsetRequest.cs` |
| `V1MoonrisemoonsetResponse` | `src/ApiVerve/Models/V1MoonrisemoonsetResponse.cs` |
| `MoonrisemoonsetError` | `src/ApiVerve/Errors/MoonrisemoonsetError.cs` |

### Solarpotential

- **Auth**: `options.ApiKey`
- **Signature**: `Solarpotential(SolarpotentialRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`
- **Returns**: `V1SolarpotentialResponse`
- **Error**: `ApiException<SolarpotentialError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SolarpotentialRequest` | `src/ApiVerve/Requests/Weather/SolarpotentialRequest.cs` |
| `V1SolarpotentialResponse` | `src/ApiVerve/Models/V1SolarpotentialResponse.cs` |
| `SolarpotentialError` | `src/ApiVerve/Errors/SolarpotentialError.cs` |

### Sunrisesunset

- **Auth**: `options.ApiKey`
- **Signature**: `Sunrisesunset(SunrisesunsetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Lat`, `Lon`
- **Query params (wire ← C#)**: `lat` ← `Lat`, `lon` ← `Lon`, `date` ← `Date`
- **Returns**: `V1SunrisesunsetResponse`
- **Error**: `ApiException<SunrisesunsetError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SunrisesunsetRequest` | `src/ApiVerve/Requests/Weather/SunrisesunsetRequest.cs` |
| `V1SunrisesunsetResponse` | `src/ApiVerve/Models/V1SunrisesunsetResponse.cs` |
| `SunrisesunsetError` | `src/ApiVerve/Errors/SunrisesunsetError.cs` |

### Weatherforecast

- **Auth**: `options.ApiKey`
- **Signature**: `Weatherforecast(WeatherforecastRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `City`
- **Query params (wire ← C#)**: `city` ← `City`
- **Returns**: `V1WeatherforecastResponse`
- **Error**: `ApiException<WeatherforecastError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WeatherforecastRequest` | `src/ApiVerve/Requests/Weather/WeatherforecastRequest.cs` |
| `V1WeatherforecastResponse` | `src/ApiVerve/Models/V1WeatherforecastResponse.cs` |
| `WeatherforecastError` | `src/ApiVerve/Errors/WeatherforecastError.cs` |

### Weatherseasons

- **Auth**: `options.ApiKey`
- **Signature**: `Weatherseasons(WeatherseasonsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `year` ← `Year`
- **Returns**: `V1WeatherseasonsResponse`
- **Error**: `ApiException<WeatherseasonsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `WeatherseasonsRequest` | `src/ApiVerve/Requests/Weather/WeatherseasonsRequest.cs` |
| `V1WeatherseasonsResponse` | `src/ApiVerve/Models/V1WeatherseasonsResponse.cs` |
| `WeatherseasonsError` | `src/ApiVerve/Errors/WeatherseasonsError.cs` |

