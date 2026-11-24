<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataScraping — operations

Accessor: `client.dataScraping` · Source: `src/resources/data-scraping.ts` · 5 operations · Request and error types: namespace `DataScraping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `apiverve`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### contactextractor

- **Signature**: `contactextractor(request: DataScraping.ContactextractorRequest, options?: RequestOptions): ApiPromise<V1ContactextractorResponse, DataScraping.ContactextractorError>`
- **Wire**: `POST /v1/contactextractor`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1ContactextractorResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataScraping.ContactextractorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataScraping.ContactextractorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1ContactextractorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1ContactextractorRequest` | `v1ContactextractorRequestSchema` | `src/models/v1-contactextractor-request.ts` |
| `V1ContactextractorResponse` | `v1ContactextractorResponseSchema` | `src/models/v1-contactextractor-response.ts` |

### linkscraper

- **Signature**: `linkscraper(request: DataScraping.LinkscraperRequest, options?: RequestOptions): ApiPromise<V1LinkscraperResponse, DataScraping.LinkscraperError>`
- **Wire**: `POST /v1/linkscraper`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1LinkscraperResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataScraping.LinkscraperError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataScraping.LinkscraperRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1LinkscraperRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1LinkscraperRequest` | `v1LinkscraperRequestSchema` | `src/models/v1-linkscraper-request.ts` |
| `V1LinkscraperResponse` | `v1LinkscraperResponseSchema` | `src/models/v1-linkscraper-response.ts` |

### seoscraper

- **Signature**: `seoscraper(request: DataScraping.SeoscraperRequest, options?: RequestOptions): ApiPromise<V1SeoscraperResponse, DataScraping.SeoscraperError>`
- **Wire**: `POST /v1/seoscraper`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1SeoscraperResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataScraping.SeoscraperError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataScraping.SeoscraperRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1SeoscraperRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1SeoscraperRequest` | `v1SeoscraperRequestSchema` | `src/models/v1-seoscraper-request.ts` |
| `V1SeoscraperResponse` | `v1SeoscraperResponseSchema` | `src/models/v1-seoscraper-response.ts` |

### webimagescraper

- **Signature**: `webimagescraper(request: DataScraping.WebimagescraperRequest, options?: RequestOptions): ApiPromise<V1WebimagescraperResponse, DataScraping.WebimagescraperError>`
- **Wire**: `POST /v1/webimagescraper`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebimagescraperResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataScraping.WebimagescraperError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataScraping.WebimagescraperRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebimagescraperRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebimagescraperRequest` | `v1WebimagescraperRequestSchema` | `src/models/v1-webimagescraper-request.ts` |
| `V1WebimagescraperResponse` | `v1WebimagescraperResponseSchema` | `src/models/v1-webimagescraper-response.ts` |

### webscreenshots

- **Signature**: `webscreenshots(request: DataScraping.WebscreenshotsRequest, options?: RequestOptions): ApiPromise<V1WebscreenshotsResponse, DataScraping.WebscreenshotsError>`
- **Wire**: `POST /v1/webscreenshots`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1WebscreenshotsResponse`
- **Error**: `ApiVerveError` with `kind: "api"`, an instance of `DataScraping.WebscreenshotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `DataScraping.WebscreenshotsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1WebscreenshotsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1WebscreenshotsRequest` | `v1WebscreenshotsRequestSchema` | `src/models/v1-webscreenshots-request.ts` |
| `V1WebscreenshotsResponse` | `v1WebscreenshotsResponseSchema` | `src/models/v1-webscreenshots-response.ts` |

