<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `doi_t/apis/insights.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.delete_insight_result

- **Route**: `DELETE /insights/v1/results/source/{sourceID}/insight/{insightKey}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_insight_result(source_id: SourceIdOrStr, insight_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `insight_key`
- **Params**: `source_id` — path `sourceID` · `insight_key` — path `insightKey`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteInsightResultErrorBody]`
- **Error**: `DeleteInsightResultErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceIdOrStr` | `doi_t/models/enums/source_id.py` |
| `DeleteInsightResultErrorBody` | `doi_t/errors/delete_insight_result_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.delete_insight_results

- **Route**: `DELETE /insights/v1/results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def delete_insight_results(insight_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `insight_key`
- **Params**: `insight_key` — query `insightKey`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteInsightResultsErrorBody]`
- **Error**: `DeleteInsightResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteInsightResultsErrorBody` | `doi_t/errors/delete_insight_results_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.get_insight_resource_results

- **Route**: `GET /insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_insight_resource_results(source_id: str, insight_key: str, *, page_token: str | None = None, max_results: int | None = 1000, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `insight_key`
- **Params**: `source_id` — path `sourceID` · `insight_key` — path `insightKey` · `page_token` — query `pageToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ResourceResultsResponse`
- **Returns (raw)**: `ApiResult[ResourceResultsResponse, GetInsightResourceResultsErrorBody]`
- **Error**: `GetInsightResourceResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceResultsResponse` | `doi_t/models/resource_results_response.py` |
| `GetInsightResourceResultsErrorBody` | `doi_t/errors/get_insight_resource_results_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.get_insight_result

- **Route**: `GET /insights/v1/results/source/{sourceID}/insight/{insightKey}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_insight_result(source_id: str, insight_key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `insight_key`
- **Params**: `source_id` — path `sourceID` · `insight_key` — path `insightKey`
- **Returns (parsed)**: `InsightResponse`
- **Returns (raw)**: `ApiResult[InsightResponse, GetInsightResultErrorBody]`
- **Error**: `GetInsightResultErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightResponse` | `doi_t/models/insight_response.py` |
| `GetInsightResultErrorBody` | `doi_t/errors/get_insight_result_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.get_insight_results

- **Route**: `GET /insights/v1/results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_insight_results(*, search_term: str | None = None, display_status: list[DisplayStatus1OrStr] | None = None, category: Category1OrStr | None = None, cloud_provider: str | None = None, source: list[str] | None = None, priority: list[Priority1OrStr] | None = None, tag: list[str] | None = None, easy_win: bool | None = None, cloud_flows: bool | None = None, page_token: str | None = None, max_results: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `search_term` — query `searchTerm` · `display_status` — query `displayStatus` · `category` — query · `cloud_provider` — query `cloudProvider` · `source` — query · `priority` — query · `tag` — query · `easy_win` — query `easyWin` · `cloud_flows` — query `cloudFlows` · `page_token` — query `pageToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ResultsBody`
- **Returns (raw)**: `ApiResult[ResultsBody, GetInsightResultsErrorBody]`
- **Error**: `GetInsightResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DisplayStatus1OrStr` | `doi_t/models/enums/display_status1.py` |
| `Category1OrStr` | `doi_t/models/enums/category1.py` |
| `Priority1OrStr` | `doi_t/models/enums/priority1.py` |
| `ResultsBody` | `doi_t/models/results_body.py` |
| `GetInsightResultsErrorBody` | `doi_t/errors/get_insight_results_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.post_insight_resource_results

- **Route**: `POST /insights/v1/results/source/{sourceID}/insight/{insightKey}/resource-results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def post_insight_resource_results(source_id: SourceIdOrStr, insight_key: str, body: CreateResourceResultsBody | CreateResourceResultsBodyDict, *, max_results: int | None = 1000, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `insight_key`, `body`
- **Params**: `source_id` — path `sourceID` · `insight_key` — path `insightKey` · `max_results` — query `maxResults` · `body` — JSON body
- **Returns (parsed)**: `ResourceResultsResponse`
- **Returns (raw)**: `ApiResult[ResourceResultsResponse, PostInsightResourceResultsErrorBody]`
- **Error**: `PostInsightResourceResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceIdOrStr` | `doi_t/models/enums/source_id.py` |
| `CreateResourceResultsBody` | `doi_t/models/create_resource_results_body.py` |
| `CreateResourceResultsBodyDict` | `doi_t/models/create_resource_results_body.py` |
| `ResourceResultsResponse` | `doi_t/models/resource_results_response.py` |
| `PostInsightResourceResultsErrorBody` | `doi_t/errors/post_insight_resource_results_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.post_insight_result

- **Route**: `POST /insights/v1/results/source/{sourceID}/insight/{insightKey}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def post_insight_result(source_id: SourceIdOrStr, insight_key: str, body: InsightMetadataRequest | InsightMetadataRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `insight_key`, `body`
- **Params**: `source_id` — path `sourceID` · `insight_key` — path `insightKey` · `body` — JSON body
- **Returns (parsed)**: `InsightResponse`
- **Returns (raw)**: `ApiResult[InsightResponse, PostInsightResultErrorBody]`
- **Error**: `PostInsightResultErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceIdOrStr` | `doi_t/models/enums/source_id.py` |
| `InsightMetadataRequest` | `doi_t/models/insight_metadata_request.py` |
| `InsightMetadataRequestDict` | `doi_t/models/insight_metadata_request.py` |
| `InsightResponse` | `doi_t/models/insight_response.py` |
| `PostInsightResultErrorBody` | `doi_t/errors/post_insight_result_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.post_insight_results

- **Route**: `POST /insights/v1/results`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def post_insight_results(*, body: CreateResultsBody | CreateResultsBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `list[ResultsError]`
- **Returns (raw)**: `ApiResult[list[ResultsError], PostInsightResultsErrorBody]`
- **Error**: `PostInsightResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateResultsBody` | `doi_t/models/create_results_body.py` |
| `CreateResultsBodyDict` | `doi_t/models/create_results_body.py` |
| `ResultsError` | `doi_t/models/results_error.py` |
| `PostInsightResultsErrorBody` | `doi_t/errors/post_insight_results_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.insights.update_insight_status

- **Route**: `PUT /insights/v1/results/source/{sourceID}/insight/{insightKey}/status`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def update_insight_status(source_id: SourceIdOrStr, insight_key: str, body: UpdateStatusRequest | UpdateStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `source_id`, `insight_key`, `body`
- **Params**: `source_id` — path `sourceID` · `insight_key` — path `insightKey` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateInsightStatusErrorBody]`
- **Error**: `UpdateInsightStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SourceIdOrStr` | `doi_t/models/enums/source_id.py` |
| `UpdateStatusRequest` | `doi_t/models/update_status_request.py` |
| `UpdateStatusRequestDict` | `doi_t/models/update_status_request.py` |
| `UpdateInsightStatusErrorBody` | `doi_t/errors/update_insight_status_error.py` |
| `Error` | `doi_t/models/error.py` |

