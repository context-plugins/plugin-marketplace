<!-- Generated file — do not edit; regenerated with the SDK. -->

# Weather — operations

Accessor: `client.weather` · Source: `dynamic_feed/apis/weather.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.weather.v1_openweather_current_v1_openweather_current_get

- **Route**: `GET /v1/openweather/current`
- **Signature**: `def v1_openweather_current_v1_openweather_current_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `city` — query · `lat` — query · `lon` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody]`
- **Error**: `V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1OpenweatherCurrentV1OpenweatherCurrentGetErrorBody` | `dynamic_feed/errors/v1_openweather_current_v1_openweather_current_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.weather.v1_openweather_forecast_v1_openweather_forecast_get

- **Route**: `GET /v1/openweather/forecast`
- **Signature**: `def v1_openweather_forecast_v1_openweather_forecast_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, days: int | None = 5, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `city` — query · `lat` — query · `lon` — query · `days` — query
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, V1OpenweatherForecastV1OpenweatherForecastGetErrorBody]`
- **Error**: `V1OpenweatherForecastV1OpenweatherForecastGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1OpenweatherForecastV1OpenweatherForecastGetErrorBody` | `dynamic_feed/errors/v1_openweather_forecast_v1_openweather_forecast_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

### client.weather.weather_weather_get

- **Route**: `GET /weather`
- **Signature**: `def weather_weather_get(*, city: str | None = None, lat: float | None = None, lon: float | None = None, x_api_key: str | None = None, x_rapidapi_proxy_secret: str | None = None, x_rapidapi_user: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `city` — query · `lat` — query · `lon` — query · `x_api_key` — header `x-api-key` · `x_rapidapi_proxy_secret` — header `x-rapidapi-proxy-secret` · `x_rapidapi_user` — header `x-rapidapi-user`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, WeatherWeatherGetErrorBody]`
- **Error**: `WeatherWeatherGetErrorBody` — **Case A (typed)**
- **Error arms**: `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WeatherWeatherGetErrorBody` | `dynamic_feed/errors/weather_weather_get_error.py` |
| `HttpValidationError` | `dynamic_feed/models/http_validation_error.py` |

