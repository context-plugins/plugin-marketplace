<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transportation — operations

Accessor: `client.transportation` · Source: `src/resources/transportation.ts` · 6 operations · Request and error types: namespace `Transportation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### airlinelookup

- **Signature**: `airlinelookup(request: Transportation.AirlinelookupRequest, options?: RequestOptions): ApiPromise<V1AirlinelookupResponse, Transportation.AirlinelookupError>`
- **Wire**: `GET /v1/airlinelookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AirlinelookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Transportation.AirlinelookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transportation.AirlinelookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `iata` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AirlinelookupResponse` | `v1AirlinelookupResponseSchema` | `src/models/v1-airlinelookup-response.ts` |

### airportcodeconverter

- **Signature**: `airportcodeconverter(request: Transportation.AirportcodeconverterRequest, options?: RequestOptions): ApiPromise<V1AirportcodeconverterResponse, Transportation.AirportcodeconverterError>`
- **Wire**: `GET /v1/airportcodeconverter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AirportcodeconverterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Transportation.AirportcodeconverterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transportation.AirportcodeconverterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `code` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AirportcodeconverterResponse` | `v1AirportcodeconverterResponseSchema` | `src/models/v1-airportcodeconverter-response.ts` |

### airportdistance

- **Signature**: `airportdistance(request: Transportation.AirportdistanceRequest, options?: RequestOptions): ApiPromise<V1AirportdistanceResponse, Transportation.AirportdistanceError>`
- **Wire**: `GET /v1/airportdistance`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AirportdistanceResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Transportation.AirportdistanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transportation.AirportdistanceRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `iata1` | `query` | `string` | yes |
| `iata2` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AirportdistanceResponse` | `v1AirportdistanceResponseSchema` | `src/models/v1-airportdistance-response.ts` |

### airports

- **Signature**: `airports(request: Transportation.AirportsRequest, options?: RequestOptions): ApiPromise<V1AirportsResponse, Transportation.AirportsError>`
- **Wire**: `GET /v1/airports`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1AirportsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Transportation.AirportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transportation.AirportsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `iata` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1AirportsResponse` | `v1AirportsResponseSchema` | `src/models/v1-airports-response.ts` |

### carmodels

- **Signature**: `carmodels(request: Transportation.CarmodelsRequest, options?: RequestOptions): ApiPromise<V1CarmodelsResponse, Transportation.CarmodelsError>`
- **Wire**: `GET /v1/carmodels`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CarmodelsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Transportation.CarmodelsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transportation.CarmodelsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `make` | `query` | `string` | yes |
| `year` | `query` | `number` | no |
| `model` | `query` | `string` | no |
| `trim` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CarmodelsResponse` | `v1CarmodelsResponseSchema` | `src/models/v1-carmodels-response.ts` |

### vindecoder

- **Signature**: `vindecoder(request: Transportation.VindecoderRequest, options?: RequestOptions): ApiPromise<V1VindecoderResponse, Transportation.VindecoderError>`
- **Wire**: `GET /v1/vindecoder`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1VindecoderResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Transportation.VindecoderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transportation.VindecoderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1VindecoderResponse` | `v1VindecoderResponseSchema` | `src/models/v1-vindecoder-response.ts` |

