<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `crawl4_ai/client.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.get_crawl_job

- **Route**: `GET /crawl/job/{jobId}`
- **Signature**: `def get_crawl_job(job_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `job_id`
- **Params**: `job_id` — path `jobId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetCrawlJobErrorBody]`
- **Error**: `GetCrawlJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetCrawlJobErrorBody` | `crawl4_ai/errors/get_crawl_job_error.py` |

### client.submit_crawl_job

- **Route**: `POST /crawl/job`
- **Signature**: `def submit_crawl_job(body: CrawlJobRequest | CrawlJobRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, SubmitCrawlJobErrorBody]`
- **Error**: `SubmitCrawlJobErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 429, anything unmapped]

| Type | Source |
| --- | --- |
| `CrawlJobRequest` | `crawl4_ai/models/crawl_job_request.py` |
| `CrawlJobRequestDict` | `crawl4_ai/models/crawl_job_request.py` |
| `SubmitCrawlJobErrorBody` | `crawl4_ai/errors/submit_crawl_job_error.py` |

