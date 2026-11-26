<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawl — operations

Accessor: `client.crawl` · Source: `search1_api/apis/crawl.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.crawl.crawl

- **Route**: `POST /crawl`
- **Auth**: `bearer_auth`
- **Signature**: `def crawl(body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CrawlResponse1`
- **Returns (raw)**: `ApiResult[CrawlResponse1, CrawlErrorBody]`
- **Error**: `CrawlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 404, 410, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CrawlRequest1` | `search1_api/models/unions/crawl_request1.py` |
| `CrawlRequest1Dict` | `search1_api/models/unions/crawl_request1.py` |
| `CrawlResponse1` | `search1_api/models/unions/crawl_response1.py` |
| `CrawlErrorBody` | `search1_api/errors/crawl_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.crawl.deepcrawl

- **Route**: `POST /deepcrawl`
- **Auth**: `bearer_auth`
- **Signature**: `def deepcrawl(body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DeepcrawlAcceptedResponse`
- **Returns (raw)**: `ApiResult[DeepcrawlAcceptedResponse, DeepcrawlErrorBody]`
- **Error**: `DeepcrawlErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeepcrawlRequest` | `search1_api/models/deepcrawl_request.py` |
| `DeepcrawlRequestDict` | `search1_api/models/deepcrawl_request.py` |
| `DeepcrawlAcceptedResponse` | `search1_api/models/deepcrawl_accepted_response.py` |
| `DeepcrawlErrorBody` | `search1_api/errors/deepcrawl_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.crawl.deepcrawl_status

- **Route**: `GET /deepcrawl/status/{taskId}`
- **Auth**: `bearer_auth`
- **Signature**: `def deepcrawl_status(task_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `task_id`
- **Params**: `task_id` — path `taskId`
- **Returns (parsed)**: `DeepcrawlStatusResponse`
- **Returns (raw)**: `ApiResult[DeepcrawlStatusResponse, DeepcrawlStatusErrorBody]`
- **Error**: `DeepcrawlStatusErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 404, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeepcrawlStatusResponse` | `search1_api/models/deepcrawl_status_response.py` |
| `DeepcrawlStatusErrorBody` | `search1_api/errors/deepcrawl_status_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.crawl.extract

- **Route**: `POST /extract`
- **Auth**: `bearer_auth`
- **Signature**: `def extract(body: ExtractRequest | ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ExtractResponse`
- **Returns (raw)**: `ApiResult[ExtractResponse, ExtractErrorBody]`
- **Error**: `ExtractErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExtractRequest` | `search1_api/models/extract_request.py` |
| `ExtractRequestDict` | `search1_api/models/extract_request.py` |
| `ExtractResponse` | `search1_api/models/extract_response.py` |
| `ExtractErrorBody` | `search1_api/errors/extract_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

### client.crawl.sitemap

- **Route**: `POST /sitemap`
- **Auth**: `bearer_auth`
- **Signature**: `def sitemap(body: SitemapRequest | SitemapRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SitemapResponse`
- **Returns (raw)**: `ApiResult[SitemapResponse, SitemapErrorBody]`
- **Error**: `SitemapErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 402, 422, 429, 500, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SitemapRequest` | `search1_api/models/sitemap_request.py` |
| `SitemapRequestDict` | `search1_api/models/sitemap_request.py` |
| `SitemapResponse` | `search1_api/models/sitemap_response.py` |
| `SitemapErrorBody` | `search1_api/errors/sitemap_error.py` |
| `ApiErrorModel` | `search1_api/models/api_error_model.py` |

