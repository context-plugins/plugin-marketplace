<!-- Generated file — do not edit; regenerated with the SDK. -->

# Astrology — operations

Accessor: `client.astrology` · Source: `src/resources/astrology.ts` · 6 operations · Request and error types: namespace `Astrology`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chinesezodiac

- **Signature**: `chinesezodiac(request: Astrology.ChinesezodiacRequest, options?: RequestOptions): ApiPromise<V1ChinesezodiacResponse, Astrology.ChinesezodiacError>`
- **Wire**: `GET /v1/chinesezodiac`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1ChinesezodiacResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Astrology.ChinesezodiacError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Astrology.ChinesezodiacRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `date` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ChinesezodiacResponse` | `v1ChinesezodiacResponseSchema` | `src/models/v1-chinesezodiac-response.ts` |

### horoscope

- **Signature**: `horoscope(request: Astrology.HoroscopeRequest, options?: RequestOptions): ApiPromise<V1HoroscopeResponse, Astrology.HoroscopeError>`
- **Wire**: `GET /v1/horoscope`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HoroscopeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Astrology.HoroscopeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Astrology.HoroscopeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sign` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HoroscopeResponse` | `v1HoroscopeResponseSchema` | `src/models/v1-horoscope-response.ts` |

### moonphases

- **Signature**: `moonphases(request?: Astrology.MoonphasesRequest, options?: RequestOptions): ApiPromise<V1MoonphasesResponse, Astrology.MoonphasesError>`
- **Wire**: `GET /v1/moonphases`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MoonphasesResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Astrology.MoonphasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Astrology.MoonphasesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `today` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MoonphasesResponse` | `v1MoonphasesResponseSchema` | `src/models/v1-moonphases-response.ts` |

### moonposition

- **Signature**: `moonposition(request: Astrology.MoonpositionRequest, options?: RequestOptions): ApiPromise<V1MoonpositionResponse, Astrology.MoonpositionError>`
- **Wire**: `GET /v1/moonposition`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1MoonpositionResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Astrology.MoonpositionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Astrology.MoonpositionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |
| `date` | `query` | `string` | no |
| `time` | `query` | `string` | no |
| `timezone` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MoonpositionResponse` | `v1MoonpositionResponseSchema` | `src/models/v1-moonposition-response.ts` |

### planetpositions

- **Signature**: `planetpositions(request: Astrology.PlanetpositionsRequest, options?: RequestOptions): ApiPromise<V1PlanetpositionsResponse, Astrology.PlanetpositionsError>`
- **Wire**: `POST /v1/planetpositions`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1PlanetpositionsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Astrology.PlanetpositionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Astrology.PlanetpositionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1PlanetpositionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1PlanetpositionsRequest` | `v1PlanetpositionsRequestSchema` | `src/models/v1-planetpositions-request.ts` |
| `V1PlanetpositionsResponse` | `v1PlanetpositionsResponseSchema` | `src/models/v1-planetpositions-response.ts` |

### sunposition

- **Signature**: `sunposition(request: Astrology.SunpositionRequest, options?: RequestOptions): ApiPromise<V1SunpositionResponse, Astrology.SunpositionError>`
- **Wire**: `GET /v1/sunposition`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1SunpositionResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Astrology.SunpositionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Astrology.SunpositionRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `lat` | `query` | `number` | yes |
| `lon` | `query` | `number` | yes |
| `date` | `query` | `string` | no |
| `time` | `query` | `string` | no |
| `timezone` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SunpositionResponse` | `v1SunpositionResponseSchema` | `src/models/v1-sunposition-response.ts` |

