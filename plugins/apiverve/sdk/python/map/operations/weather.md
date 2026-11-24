<!-- Generated file — do not edit; regenerated with the SDK. -->

# Weather — operations

Accessor: `client.weather` · Source: `api_verve/apis/weather.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.weather.airquality

- **Route**: `GET /v1/airquality`
- **Auth**: `api_key`
- **Signature**: `def airquality(city: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `city`
- **Params**: `city` — query
- **Returns (parsed)**: `V1AirqualityResponse`
- **Returns (raw)**: `ApiResult[V1AirqualityResponse, AirqualityErrorBody]`
- **Error**: `AirqualityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1AirqualityResponse` | `api_verve/models/v1_airquality_response.py` |
| `AirqualityErrorBody` | `api_verve/errors/airquality_error.py` |

### client.weather.earthquake

- **Route**: `GET /v1/earthquake`
- **Auth**: `api_key`
- **Signature**: `def earthquake(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `V1EarthquakeResponse`
- **Returns (raw)**: `ApiResult[V1EarthquakeResponse, EarthquakeErrorBody]`
- **Error**: `EarthquakeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1EarthquakeResponse` | `api_verve/models/v1_earthquake_response.py` |
| `EarthquakeErrorBody` | `api_verve/errors/earthquake_error.py` |

### client.weather.marineweather

- **Route**: `GET /v1/marineweather`
- **Auth**: `api_key`
- **Signature**: `def marineweather(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query
- **Returns (parsed)**: `V1MarineweatherResponse`
- **Returns (raw)**: `ApiResult[V1MarineweatherResponse, MarineweatherErrorBody]`
- **Error**: `MarineweatherErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MarineweatherResponse` | `api_verve/models/v1_marineweather_response.py` |
| `MarineweatherErrorBody` | `api_verve/errors/marineweather_error.py` |

### client.weather.moonrisemoonset

- **Route**: `GET /v1/moonrisemoonset`
- **Auth**: `api_key`
- **Signature**: `def moonrisemoonset(lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `date` — query
- **Returns (parsed)**: `V1MoonrisemoonsetResponse`
- **Returns (raw)**: `ApiResult[V1MoonrisemoonsetResponse, MoonrisemoonsetErrorBody]`
- **Error**: `MoonrisemoonsetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1MoonrisemoonsetResponse` | `api_verve/models/v1_moonrisemoonset_response.py` |
| `MoonrisemoonsetErrorBody` | `api_verve/errors/moonrisemoonset_error.py` |

### client.weather.solarpotential

- **Route**: `GET /v1/solarpotential`
- **Auth**: `api_key`
- **Signature**: `def solarpotential(lat: float, lon: float, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query
- **Returns (parsed)**: `V1SolarpotentialResponse`
- **Returns (raw)**: `ApiResult[V1SolarpotentialResponse, SolarpotentialErrorBody]`
- **Error**: `SolarpotentialErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SolarpotentialResponse` | `api_verve/models/v1_solarpotential_response.py` |
| `SolarpotentialErrorBody` | `api_verve/errors/solarpotential_error.py` |

### client.weather.sunrisesunset

- **Route**: `GET /v1/sunrisesunset`
- **Auth**: `api_key`
- **Signature**: `def sunrisesunset(lat: float, lon: float, *, date: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `lat`, `lon`
- **Params**: `lat` — query · `lon` — query · `date` — query
- **Returns (parsed)**: `V1SunrisesunsetResponse`
- **Returns (raw)**: `ApiResult[V1SunrisesunsetResponse, SunrisesunsetErrorBody]`
- **Error**: `SunrisesunsetErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SunrisesunsetResponse` | `api_verve/models/v1_sunrisesunset_response.py` |
| `SunrisesunsetErrorBody` | `api_verve/errors/sunrisesunset_error.py` |

### client.weather.weatherforecast

- **Route**: `GET /v1/weatherforecast`
- **Auth**: `api_key`
- **Signature**: `def weatherforecast(city: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `city`
- **Params**: `city` — query
- **Returns (parsed)**: `V1WeatherforecastResponse`
- **Returns (raw)**: `ApiResult[V1WeatherforecastResponse, WeatherforecastErrorBody]`
- **Error**: `WeatherforecastErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WeatherforecastResponse` | `api_verve/models/v1_weatherforecast_response.py` |
| `WeatherforecastErrorBody` | `api_verve/errors/weatherforecast_error.py` |

### client.weather.weatherseasons

- **Route**: `GET /v1/weatherseasons`
- **Auth**: `api_key`
- **Signature**: `def weatherseasons(*, year: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `year` — query
- **Returns (parsed)**: `V1WeatherseasonsResponse`
- **Returns (raw)**: `ApiResult[V1WeatherseasonsResponse, WeatherseasonsErrorBody]`
- **Error**: `WeatherseasonsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WeatherseasonsResponse` | `api_verve/models/v1_weatherseasons_response.py` |
| `WeatherseasonsErrorBody` | `api_verve/errors/weatherseasons_error.py` |

