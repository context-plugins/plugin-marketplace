<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawl — operations

Accessor: `client.crawl` · Source: `src/resources/crawl.ts` · 5 operations · Request and error types: namespace `Crawl`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `s1`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### crawl

- **Signature**: `crawl(request: Crawl.CrawlRequestParams, options?: RequestOptions): ApiPromise<CrawlResponse1, Crawl.CrawlError>`
- **Wire**: `POST /crawl`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CrawlResponse1`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Crawl.CrawlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [404] `ApiErrorModel` · `"apiErrorModel5"` [410] `ApiErrorModel` · `"apiErrorModel6"` [422] `ApiErrorModel` · `"apiErrorModel7"` [429] `ApiErrorModel` · `"apiErrorModel8"` [500] `ApiErrorModel` · `"apiErrorModel9"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl.CrawlRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CrawlRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CrawlRequest1` | `crawlRequest1Schema` | `src/models/unions/crawl-request1.ts` |
| `CrawlResponse1` | `crawlResponse1Schema` | `src/models/unions/crawl-response1.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### deepcrawl

- **Signature**: `deepcrawl(request: Crawl.DeepcrawlRequestParams, options?: RequestOptions): ApiPromise<DeepcrawlAcceptedResponse, Crawl.DeepcrawlError>`
- **Wire**: `POST /deepcrawl`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeepcrawlAcceptedResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Crawl.DeepcrawlError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [422] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"apiErrorModel6"` [500] `ApiErrorModel` · `"apiErrorModel7"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl.DeepcrawlRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeepcrawlRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeepcrawlRequest` | `deepcrawlRequestSchema` | `src/models/deepcrawl-request.ts` |
| `DeepcrawlAcceptedResponse` | `deepcrawlAcceptedResponseSchema` | `src/models/deepcrawl-accepted-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### deepcrawlStatus

- **Signature**: `deepcrawlStatus(request: Crawl.DeepcrawlStatusRequest, options?: RequestOptions): ApiPromise<DeepcrawlStatusResponse, Crawl.DeepcrawlStatusError>`
- **Wire**: `GET /deepcrawl/status/{taskId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeepcrawlStatusResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Crawl.DeepcrawlStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [404] `ApiErrorModel` · `"apiErrorModel3"` [500] `ApiErrorModel` · `"apiErrorModel4"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl.DeepcrawlStatusRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `taskId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeepcrawlStatusResponse` | `deepcrawlStatusResponseSchema` | `src/models/deepcrawl-status-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### extract

- **Signature**: `extract(request: Crawl.ExtractRequestParams, options?: RequestOptions): ApiPromise<ExtractResponse, Crawl.ExtractError>`
- **Wire**: `POST /extract`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExtractResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Crawl.ExtractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [422] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"apiErrorModel6"` [500] `ApiErrorModel` · `"apiErrorModel7"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl.ExtractRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ExtractRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExtractRequest` | `extractRequestSchema` | `src/models/extract-request.ts` |
| `ExtractResponse` | `extractResponseSchema` | `src/models/extract-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

### sitemap

- **Signature**: `sitemap(request: Crawl.SitemapRequestParams, options?: RequestOptions): ApiPromise<SitemapResponse, Crawl.SitemapError>`
- **Wire**: `POST /sitemap`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SitemapResponse`
- **Error**: `S1Error` with `kind: "api"`, an instance of `Crawl.SitemapError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorModel"` [400] `ApiErrorModel` · `"apiErrorModel2"` [401] `ApiErrorModel` · `"apiErrorModel3"` [402] `ApiErrorModel` · `"apiErrorModel4"` [422] `ApiErrorModel` · `"apiErrorModel5"` [429] `ApiErrorModel` · `"apiErrorModel6"` [500] `ApiErrorModel` · `"apiErrorModel7"` [502] `ApiErrorModel` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl.SitemapRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SitemapRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SitemapRequest` | `sitemapRequestSchema` | `src/models/sitemap-request.ts` |
| `SitemapResponse` | `sitemapResponseSchema` | `src/models/sitemap-response.ts` |
| `ApiErrorModel` | `apiErrorModelSchema` | `src/models/api-error-model.ts` |

