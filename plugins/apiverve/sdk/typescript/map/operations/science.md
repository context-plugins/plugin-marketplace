<!-- Generated file — do not edit; regenerated with the SDK. -->

# Science — operations

Accessor: `client.science` · Source: `src/resources/science.ts` · 4 operations · Request and error types: namespace `Science`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### julianday

- **Signature**: `julianday(request: Science.JuliandayRequest, options?: RequestOptions): ApiPromise<V1JuliandayResponse, Science.JuliandayError>`
- **Wire**: `GET /v1/julianday`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1JuliandayResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Science.JuliandayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Science.JuliandayRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1JuliandayResponse` | `v1JuliandayResponseSchema` | `src/models/v1-julianday-response.ts` |

### meteorites

- **Signature**: `meteorites(request: Science.MeteoritesRequest, options?: RequestOptions): ApiPromise<V1MeteoritesResponse, Science.MeteoritesError>`
- **Wire**: `GET /v1/meteorites`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MeteoritesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Science.MeteoritesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Science.MeteoritesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |
| `mass` | `query` | `number` | no |
| `year` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MeteoritesResponse` | `v1MeteoritesResponseSchema` | `src/models/v1-meteorites-response.ts` |

### periodictable

- **Signature**: `periodictable(request: Science.PeriodictableRequest, options?: RequestOptions): ApiPromise<V1PeriodictableResponse, Science.PeriodictableError>`
- **Wire**: `GET /v1/periodictable`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1PeriodictableResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Science.PeriodictableError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Science.PeriodictableRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PeriodictableResponse` | `v1PeriodictableResponseSchema` | `src/models/v1-periodictable-response.ts` |

### starslookup

- **Signature**: `starslookup(request: Science.StarslookupRequest, options?: RequestOptions): ApiPromise<V1StarslookupResponse, Science.StarslookupError>`
- **Wire**: `GET /v1/starslookup`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1StarslookupResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Science.StarslookupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Science.StarslookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StarslookupResponse` | `v1StarslookupResponseSchema` | `src/models/v1-starslookup-response.ts` |

