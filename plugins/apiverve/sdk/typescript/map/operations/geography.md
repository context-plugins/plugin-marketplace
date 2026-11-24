<!-- Generated file — do not edit; regenerated with the SDK. -->

# Geography — operations

Accessor: `client.geography` · Source: `src/resources/geography.ts` · 13 operations · Request and error types: namespace `Geography`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### citieslookup

- **Signature**: `citieslookup(request: Geography.CitieslookupRequest, options?: RequestOptions): ApiPromise<V1CitieslookupResponse, Geography.CitieslookupError>`
- **Wire**: `GET /v1/citieslookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CitieslookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CitieslookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CitieslookupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `city` | `query` | `string` | yes |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CitieslookupResponse` | `v1CitieslookupResponseSchema` | `src/models/v1-citieslookup-response.ts` |

### coordinatesaresea

- **Signature**: `coordinatesaresea(request: Geography.CoordinatesareseaRequest, options?: RequestOptions): ApiPromise<V1CoordinatesareseaResponse, Geography.CoordinatesareseaError>`
- **Wire**: `GET /v1/coordinatesaresea`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CoordinatesareseaResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CoordinatesareseaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CoordinatesareseaRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CoordinatesareseaResponse` | `v1CoordinatesareseaResponseSchema` | `src/models/v1-coordinatesaresea-response.ts` |

### countryborders

- **Signature**: `countryborders(request: Geography.CountrybordersRequest, options?: RequestOptions): ApiPromise<V1CountrybordersResponse, Geography.CountrybordersError>`
- **Wire**: `GET /v1/countryborders`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CountrybordersResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CountrybordersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CountrybordersRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CountrybordersResponse` | `v1CountrybordersResponseSchema` | `src/models/v1-countryborders-response.ts` |

### countryboundaries

- **Signature**: `countryboundaries(request: Geography.CountryboundariesRequest, options?: RequestOptions): ApiPromise<V1CountryboundariesResponse, Geography.CountryboundariesError>`
- **Wire**: `GET /v1/countryboundaries`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CountryboundariesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CountryboundariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CountryboundariesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CountryboundariesResponse` | `v1CountryboundariesResponseSchema` | `src/models/v1-countryboundaries-response.ts` |

### countryflags

- **Signature**: `countryflags(request: Geography.CountryflagsRequest, options?: RequestOptions): ApiPromise<V1CountryflagsResponse, Geography.CountryflagsError>`
- **Wire**: `GET /v1/countryflags`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CountryflagsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CountryflagsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CountryflagsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `format` | `query` | `string` | yes |
| `shape` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CountryflagsResponse` | `v1CountryflagsResponseSchema` | `src/models/v1-countryflags-response.ts` |

### countrylanguages

- **Signature**: `countrylanguages(request: Geography.CountrylanguagesRequest, options?: RequestOptions): ApiPromise<V1CountrylanguagesResponse, Geography.CountrylanguagesError>`
- **Wire**: `GET /v1/countrylanguages`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CountrylanguagesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CountrylanguagesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CountrylanguagesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CountrylanguagesResponse` | `v1CountrylanguagesResponseSchema` | `src/models/v1-countrylanguages-response.ts` |

### countrylookup

- **Signature**: `countrylookup(request: Geography.CountrylookupRequest, options?: RequestOptions): ApiPromise<V1CountrylookupResponse, Geography.CountrylookupError>`
- **Wire**: `GET /v1/countrylookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CountrylookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CountrylookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CountrylookupRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `country` | `query` | `string` | yes |
| `majorcities` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CountrylookupResponse` | `v1CountrylookupResponseSchema` | `src/models/v1-countrylookup-response.ts` |

### countydata

- **Signature**: `countydata(request: Geography.CountydataRequest, options?: RequestOptions): ApiPromise<V1CountydataResponse, Geography.CountydataError>`
- **Wire**: `GET /v1/countydata`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CountydataResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.CountydataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.CountydataRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `state` | `query` | `string` | yes |
| `county` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CountydataResponse` | `v1CountydataResponseSchema` | `src/models/v1-countydata-response.ts` |

### distancecalculator

- **Signature**: `distancecalculator(request: Geography.DistancecalculatorRequest, options?: RequestOptions): ApiPromise<V1DistancecalculatorResponse, Geography.DistancecalculatorError>`
- **Wire**: `GET /v1/distancecalculator`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1DistancecalculatorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.DistancecalculatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.DistancecalculatorRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat1` | `query` | `number` | yes |
| `lon1` | `query` | `number` | yes |
| `lat2` | `query` | `number` | yes |
| `lon2` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1DistancecalculatorResponse` | `v1DistancecalculatorResponseSchema` | `src/models/v1-distancecalculator-response.ts` |

### hardinesszone

- **Signature**: `hardinesszone(request: Geography.HardinesszoneRequest, options?: RequestOptions): ApiPromise<V1HardinesszoneResponse, Geography.HardinesszoneError>`
- **Wire**: `GET /v1/hardinesszone`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HardinesszoneResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.HardinesszoneError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.HardinesszoneRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HardinesszoneResponse` | `v1HardinesszoneResponseSchema` | `src/models/v1-hardinesszone-response.ts` |

### reversegeocode

- **Signature**: `reversegeocode(request: Geography.ReversegeocodeRequest, options?: RequestOptions): ApiPromise<V1ReversegeocodeResponse, Geography.ReversegeocodeError>`
- **Wire**: `GET /v1/reversegeocode`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ReversegeocodeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.ReversegeocodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.ReversegeocodeRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ReversegeocodeResponse` | `v1ReversegeocodeResponseSchema` | `src/models/v1-reversegeocode-response.ts` |

### stateboundaries

- **Signature**: `stateboundaries(request: Geography.StateboundariesRequest, options?: RequestOptions): ApiPromise<V1StateboundariesResponse, Geography.StateboundariesError>`
- **Wire**: `GET /v1/stateboundaries`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1StateboundariesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.StateboundariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.StateboundariesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `state` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StateboundariesResponse` | `v1StateboundariesResponseSchema` | `src/models/v1-stateboundaries-response.ts` |

### zipcodes

- **Signature**: `zipcodes(request: Geography.ZipcodesRequest, options?: RequestOptions): ApiPromise<V1ZipcodesResponse, Geography.ZipcodesError>`
- **Wire**: `GET /v1/zipcodes`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ZipcodesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Geography.ZipcodesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Geography.ZipcodesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `zip` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ZipcodesResponse` | `v1ZipcodesResponseSchema` | `src/models/v1-zipcodes-response.ts` |

