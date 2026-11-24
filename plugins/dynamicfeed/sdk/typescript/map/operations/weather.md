<!-- Generated file — do not edit; regenerated with the SDK. -->

# Weather — operations

Accessor: `client.weather` · Source: `src/resources/weather.ts` · 3 operations · Request and error types: namespace `Weather`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamic-feed`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### v1OpenweatherCurrentV1OpenweatherCurrentGet

- **Signature**: `v1OpenweatherCurrentV1OpenweatherCurrentGet(request?: Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError>`
- **Wire**: `GET /v1/openweather/current`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.V1OpenweatherCurrentV1OpenweatherCurrentGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `city` | `query` | `City1` | no |
| `lat` | `query` | `Lat1` | no |
| `lon` | `query` | `Lon1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `City1` | `city1Schema` | `src/models/unions/city1.ts` |
| `Lat1` | `lat1Schema` | `src/models/unions/lat1.ts` |
| `Lon1` | `lon1Schema` | `src/models/unions/lon1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### v1OpenweatherForecastV1OpenweatherForecastGet

- **Signature**: `v1OpenweatherForecastV1OpenweatherForecastGet(request?: Weather.V1OpenweatherForecastV1OpenweatherForecastGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Weather.V1OpenweatherForecastV1OpenweatherForecastGetError>`
- **Wire**: `GET /v1/openweather/forecast`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Weather.V1OpenweatherForecastV1OpenweatherForecastGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.V1OpenweatherForecastV1OpenweatherForecastGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `city` | `query` | `City1` | no | — |
| `lat` | `query` | `Lat1` | no | — |
| `lon` | `query` | `Lon1` | no | — |
| `days` | `query` | `number` | no | `5` |

| Type | Schema value | Source |
| --- | --- | --- |
| `City1` | `city1Schema` | `src/models/unions/city1.ts` |
| `Lat1` | `lat1Schema` | `src/models/unions/lat1.ts` |
| `Lon1` | `lon1Schema` | `src/models/unions/lon1.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

### weatherWeatherGet

- **Signature**: `weatherWeatherGet(request?: Weather.WeatherWeatherGetRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Weather.WeatherWeatherGetError>`
- **Wire**: `GET /weather`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `DynamicFeedError` with `kind: "api"`, an instance of `Weather.WeatherWeatherGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.WeatherWeatherGetRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `city` | `query` | — | `City` | no |
| `lat` | `query` | — | `Lat` | no |
| `lon` | `query` | — | `Lon` | no |
| `xApiKey` | `header` | `x-api-key` | `XApiKey` | no |
| `xRapidapiProxySecret` | `header` | `x-rapidapi-proxy-secret` | `XRapidapiProxySecret` | no |
| `xRapidapiUser` | `header` | `x-rapidapi-user` | `XRapidapiUser` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `City` | `citySchema` | `src/models/unions/city.ts` |
| `Lat` | `latSchema` | `src/models/unions/lat.ts` |
| `Lon` | `lonSchema` | `src/models/unions/lon.ts` |
| `XApiKey` | `xApiKeySchema` | `src/models/unions/xapi-key.ts` |
| `XRapidapiProxySecret` | `xRapidapiProxySecretSchema` | `src/models/unions/xrapidapi-proxy-secret.ts` |
| `XRapidapiUser` | `xRapidapiUserSchema` | `src/models/unions/xrapidapi-user.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |

