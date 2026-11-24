<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataScraping — operations

Accessor: `client.data_scraping` · Source: `api_verve/apis/data_scraping.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_scraping.contactextractor

- **Route**: `POST /v1/contactextractor`
- **Auth**: `api_key`
- **Signature**: `def contactextractor(body: V1ContactextractorRequest | V1ContactextractorRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1ContactextractorResponse`
- **Returns (raw)**: `ApiResult[V1ContactextractorResponse, ContactextractorErrorBody]`
- **Error**: `ContactextractorErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1ContactextractorRequest` | `api_verve/models/v1_contactextractor_request.py` |
| `V1ContactextractorRequestDict` | `api_verve/models/v1_contactextractor_request.py` |
| `V1ContactextractorResponse` | `api_verve/models/v1_contactextractor_response.py` |
| `ContactextractorErrorBody` | `api_verve/errors/contactextractor_error.py` |

### client.data_scraping.linkscraper

- **Route**: `POST /v1/linkscraper`
- **Auth**: `api_key`
- **Signature**: `def linkscraper(body: V1LinkscraperRequest | V1LinkscraperRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1LinkscraperResponse`
- **Returns (raw)**: `ApiResult[V1LinkscraperResponse, LinkscraperErrorBody]`
- **Error**: `LinkscraperErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1LinkscraperRequest` | `api_verve/models/v1_linkscraper_request.py` |
| `V1LinkscraperRequestDict` | `api_verve/models/v1_linkscraper_request.py` |
| `V1LinkscraperResponse` | `api_verve/models/v1_linkscraper_response.py` |
| `LinkscraperErrorBody` | `api_verve/errors/linkscraper_error.py` |

### client.data_scraping.seoscraper

- **Route**: `POST /v1/seoscraper`
- **Auth**: `api_key`
- **Signature**: `def seoscraper(body: V1SeoscraperRequest | V1SeoscraperRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1SeoscraperResponse`
- **Returns (raw)**: `ApiResult[V1SeoscraperResponse, SeoscraperErrorBody]`
- **Error**: `SeoscraperErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1SeoscraperRequest` | `api_verve/models/v1_seoscraper_request.py` |
| `V1SeoscraperRequestDict` | `api_verve/models/v1_seoscraper_request.py` |
| `V1SeoscraperResponse` | `api_verve/models/v1_seoscraper_response.py` |
| `SeoscraperErrorBody` | `api_verve/errors/seoscraper_error.py` |

### client.data_scraping.webimagescraper

- **Route**: `POST /v1/webimagescraper`
- **Auth**: `api_key`
- **Signature**: `def webimagescraper(body: V1WebimagescraperRequest | V1WebimagescraperRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WebimagescraperResponse`
- **Returns (raw)**: `ApiResult[V1WebimagescraperResponse, WebimagescraperErrorBody]`
- **Error**: `WebimagescraperErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebimagescraperRequest` | `api_verve/models/v1_webimagescraper_request.py` |
| `V1WebimagescraperRequestDict` | `api_verve/models/v1_webimagescraper_request.py` |
| `V1WebimagescraperResponse` | `api_verve/models/v1_webimagescraper_response.py` |
| `WebimagescraperErrorBody` | `api_verve/errors/webimagescraper_error.py` |

### client.data_scraping.webscreenshots

- **Route**: `POST /v1/webscreenshots`
- **Auth**: `api_key`
- **Signature**: `def webscreenshots(body: V1WebscreenshotsRequest | V1WebscreenshotsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1WebscreenshotsResponse`
- **Returns (raw)**: `ApiResult[V1WebscreenshotsResponse, WebscreenshotsErrorBody]`
- **Error**: `WebscreenshotsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, 500, anything unmapped]

| Type | Source |
| --- | --- |
| `V1WebscreenshotsRequest` | `api_verve/models/v1_webscreenshots_request.py` |
| `V1WebscreenshotsRequestDict` | `api_verve/models/v1_webscreenshots_request.py` |
| `V1WebscreenshotsResponse` | `api_verve/models/v1_webscreenshots_response.py` |
| `WebscreenshotsErrorBody` | `api_verve/errors/webscreenshots_error.py` |

