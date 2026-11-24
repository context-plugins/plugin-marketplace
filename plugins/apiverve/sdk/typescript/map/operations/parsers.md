<!-- Generated file — do not edit; regenerated with the SDK. -->

# Parsers — operations

Accessor: `client.parsers` · Source: `src/resources/parsers.ts` · 4 operations · Request and error types: namespace `Parsers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### humannameparser

- **Signature**: `humannameparser(request: Parsers.HumannameparserRequest, options?: RequestOptions): ApiPromise<V1HumannameparserResponse, Parsers.HumannameparserError>`
- **Wire**: `GET /v1/humannameparser`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1HumannameparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Parsers.HumannameparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Parsers.HumannameparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HumannameparserResponse` | `v1HumannameparserResponseSchema` | `src/models/v1-humannameparser-response.ts` |

### rsstojson

- **Signature**: `rsstojson(request: Parsers.RsstojsonRequest, options?: RequestOptions): ApiPromise<V1RsstojsonResponse, Parsers.RsstojsonError>`
- **Wire**: `POST /v1/rsstojson`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1RsstojsonResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Parsers.RsstojsonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Parsers.RsstojsonRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1RsstojsonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1RsstojsonRequest` | `v1RsstojsonRequestSchema` | `src/models/v1-rsstojson-request.ts` |
| `V1RsstojsonResponse` | `v1RsstojsonResponseSchema` | `src/models/v1-rsstojson-response.ts` |

### streetaddressparser

- **Signature**: `streetaddressparser(request: Parsers.StreetaddressparserRequest, options?: RequestOptions): ApiPromise<V1StreetaddressparserResponse, Parsers.StreetaddressparserError>`
- **Wire**: `GET /v1/streetaddressparser`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1StreetaddressparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Parsers.StreetaddressparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Parsers.StreetaddressparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `address` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1StreetaddressparserResponse` | `v1StreetaddressparserResponseSchema` | `src/models/v1-streetaddressparser-response.ts` |

### useragentparser

- **Signature**: `useragentparser(request: Parsers.UseragentparserRequest, options?: RequestOptions): ApiPromise<V1UseragentparserResponse, Parsers.UseragentparserError>`
- **Wire**: `POST /v1/useragentparser`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1UseragentparserResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `Parsers.UseragentparserError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Parsers.UseragentparserRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1UseragentparserRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UseragentparserRequest` | `v1UseragentparserRequestSchema` | `src/models/v1-useragentparser-request.ts` |
| `V1UseragentparserResponse` | `v1UseragentparserResponseSchema` | `src/models/v1-useragentparser-response.ts` |

