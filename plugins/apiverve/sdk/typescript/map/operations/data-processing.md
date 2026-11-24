<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataProcessing — operations

Accessor: `client.dataProcessing` · Source: `src/resources/data-processing.ts` · 6 operations · Request and error types: namespace `DataProcessing`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### counter

- **Signature**: `counter(request: DataProcessing.CounterRequest, options?: RequestOptions): ApiPromise<V1CounterResponse, DataProcessing.CounterError>`
- **Wire**: `GET /v1/counter`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1CounterResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataProcessing.CounterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataProcessing.CounterRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1CounterResponse` | `v1CounterResponseSchema` | `src/models/v1-counter-response.ts` |

### htmltotext

- **Signature**: `htmltotext(request: DataProcessing.HtmltotextRequest, options?: RequestOptions): ApiPromise<V1HtmltotextResponse, DataProcessing.HtmltotextError>`
- **Wire**: `POST /v1/htmltotext`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1HtmltotextResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataProcessing.HtmltotextError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataProcessing.HtmltotextRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1HtmltotextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1HtmltotextRequest` | `v1HtmltotextRequestSchema` | `src/models/v1-htmltotext-request.ts` |
| `V1HtmltotextResponse` | `v1HtmltotextResponseSchema` | `src/models/v1-htmltotext-response.ts` |

### metadataextractor

- **Signature**: `metadataextractor(request: DataProcessing.MetadataextractorRequest, options?: RequestOptions): ApiPromise<V1MetadataextractorResponse, DataProcessing.MetadataextractorError>`
- **Wire**: `POST /v1/metadataextractor`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MetadataextractorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataProcessing.MetadataextractorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataProcessing.MetadataextractorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MetadataextractorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MetadataextractorRequest` | `v1MetadataextractorRequestSchema` | `src/models/v1-metadataextractor-request.ts` |
| `V1MetadataextractorResponse` | `v1MetadataextractorResponseSchema` | `src/models/v1-metadataextractor-response.ts` |

### morsecode

- **Signature**: `morsecode(request: DataProcessing.MorsecodeRequest, options?: RequestOptions): ApiPromise<V1MorsecodeResponse, DataProcessing.MorsecodeError>`
- **Wire**: `POST /v1/morsecode`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MorsecodeResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataProcessing.MorsecodeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataProcessing.MorsecodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MorsecodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MorsecodeRequest` | `v1MorsecodeRequestSchema` | `src/models/v1-morsecode-request.ts` |
| `V1MorsecodeResponse` | `v1MorsecodeResponseSchema` | `src/models/v1-morsecode-response.ts` |

### murmurhash

- **Signature**: `murmurhash(request: DataProcessing.MurmurhashRequest, options?: RequestOptions): ApiPromise<V1MurmurhashResponse, DataProcessing.MurmurhashError>`
- **Wire**: `POST /v1/murmurhash`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1MurmurhashResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataProcessing.MurmurhashError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataProcessing.MurmurhashRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1MurmurhashRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1MurmurhashRequest` | `v1MurmurhashRequestSchema` | `src/models/v1-murmurhash-request.ts` |
| `V1MurmurhashResponse` | `v1MurmurhashResponseSchema` | `src/models/v1-murmurhash-response.ts` |

### sqlexplainer

- **Signature**: `sqlexplainer(request: DataProcessing.SqlexplainerRequest, options?: RequestOptions): ApiPromise<V1SqlexplainerResponse, DataProcessing.SqlexplainerError>`
- **Wire**: `POST /v1/sqlexplainer`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SqlexplainerResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataProcessing.SqlexplainerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataProcessing.SqlexplainerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SqlexplainerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SqlexplainerRequest` | `v1SqlexplainerRequestSchema` | `src/models/v1-sqlexplainer-request.ts` |
| `V1SqlexplainerResponse` | `v1SqlexplainerResponseSchema` | `src/models/v1-sqlexplainer-response.ts` |

