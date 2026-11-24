<!-- Generated file — do not edit; regenerated with the SDK. -->

# Weather — operations

Accessor: `client.weather` · Source: `src/resources/weather.ts` · 8 operations · Request and error types: namespace `Weather`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### airquality

- **Signature**: `airquality(request: Weather.AirqualityRequest, options?: RequestOptions): ApiPromise<V1AirqualityResponse, Weather.AirqualityError>`
- **Wire**: `GET /v1/airquality`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AirqualityResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.AirqualityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.AirqualityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `city` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AirqualityResponse` | `v1AirqualityResponseSchema` | `src/models/v1-airquality-response.ts` |

### earthquake

- **Signature**: `earthquake(options?: RequestOptions): ApiPromise<V1EarthquakeResponse, Weather.EarthquakeError>`
- **Wire**: `GET /v1/earthquake`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1EarthquakeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.EarthquakeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `V1EarthquakeResponse` | `v1EarthquakeResponseSchema` | `src/models/v1-earthquake-response.ts` |

### marineweather

- **Signature**: `marineweather(request: Weather.MarineweatherRequest, options?: RequestOptions): ApiPromise<V1MarineweatherResponse, Weather.MarineweatherError>`
- **Wire**: `GET /v1/marineweather`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MarineweatherResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.MarineweatherError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.MarineweatherRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MarineweatherResponse` | `v1MarineweatherResponseSchema` | `src/models/v1-marineweather-response.ts` |

### moonrisemoonset

- **Signature**: `moonrisemoonset(request: Weather.MoonrisemoonsetRequest, options?: RequestOptions): ApiPromise<V1MoonrisemoonsetResponse, Weather.MoonrisemoonsetError>`
- **Wire**: `GET /v1/moonrisemoonset`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MoonrisemoonsetResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.MoonrisemoonsetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.MoonrisemoonsetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MoonrisemoonsetResponse` | `v1MoonrisemoonsetResponseSchema` | `src/models/v1-moonrisemoonset-response.ts` |

### solarpotential

- **Signature**: `solarpotential(request: Weather.SolarpotentialRequest, options?: RequestOptions): ApiPromise<V1SolarpotentialResponse, Weather.SolarpotentialError>`
- **Wire**: `GET /v1/solarpotential`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SolarpotentialResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.SolarpotentialError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.SolarpotentialRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SolarpotentialResponse` | `v1SolarpotentialResponseSchema` | `src/models/v1-solarpotential-response.ts` |

### sunrisesunset

- **Signature**: `sunrisesunset(request: Weather.SunrisesunsetRequest, options?: RequestOptions): ApiPromise<V1SunrisesunsetResponse, Weather.SunrisesunsetError>`
- **Wire**: `GET /v1/sunrisesunset`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SunrisesunsetResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.SunrisesunsetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.SunrisesunsetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |
| `date` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SunrisesunsetResponse` | `v1SunrisesunsetResponseSchema` | `src/models/v1-sunrisesunset-response.ts` |

### weatherforecast

- **Signature**: `weatherforecast(request: Weather.WeatherforecastRequest, options?: RequestOptions): ApiPromise<V1WeatherforecastResponse, Weather.WeatherforecastError>`
- **Wire**: `GET /v1/weatherforecast`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WeatherforecastResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.WeatherforecastError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.WeatherforecastRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `city` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WeatherforecastResponse` | `v1WeatherforecastResponseSchema` | `src/models/v1-weatherforecast-response.ts` |

### weatherseasons

- **Signature**: `weatherseasons(request?: Weather.WeatherseasonsRequest, options?: RequestOptions): ApiPromise<V1WeatherseasonsResponse, Weather.WeatherseasonsError>`
- **Wire**: `GET /v1/weatherseasons`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1WeatherseasonsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Weather.WeatherseasonsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Weather.WeatherseasonsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WeatherseasonsResponse` | `v1WeatherseasonsResponseSchema` | `src/models/v1-weatherseasons-response.ts` |

