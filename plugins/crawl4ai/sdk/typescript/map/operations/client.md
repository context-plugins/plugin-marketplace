<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawl4AiClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 2 operations · Request and error types: namespace `Crawl4AiClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `Crawl4AiClient.GetCrawlJobRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `crawl4-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCrawlJob

- **Signature**: `getCrawlJob(request: Crawl4AiClient.GetCrawlJobRequest, options?: RequestOptions): ApiPromise<undefined, Crawl4AiClient.GetCrawlJobError>`
- **Wire**: `GET /crawl/job/{jobId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Crawl4AiError` with `kind: "api"`, an instance of `Crawl4AiClient.GetCrawlJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl4AiClient.GetCrawlJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `jobId` | `path` | `string` | yes |

### submitCrawlJob

- **Signature**: `submitCrawlJob(request: Crawl4AiClient.SubmitCrawlJobRequest, options?: RequestOptions): ApiPromise<undefined, Crawl4AiClient.SubmitCrawlJobError>`
- **Wire**: `POST /crawl/job`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Crawl4AiError` with `kind: "api"`, an instance of `Crawl4AiClient.SubmitCrawlJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Crawl4AiClient.SubmitCrawlJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CrawlJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CrawlJobRequest` | `crawlJobRequestSchema` | `src/models/crawl-job-request.ts` |

