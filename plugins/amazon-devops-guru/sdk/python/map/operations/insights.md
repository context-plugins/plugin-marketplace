<!-- Generated file — do not edit; regenerated with the SDK. -->

# Insights — operations

Accessor: `client.insights` · Source: `amazon_dev_ops_guru/apis/insights.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.insights.delete_insight

- **Route**: `DELETE /insights/{Id}`
- **Auth**: `sigv4`
- **Signature**: `def delete_insight(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `Id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteInsightErrorBody]`
- **Error**: `DeleteInsightErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ConflictException` [409] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteInsightErrorBody` | `amazon_dev_ops_guru/errors/delete_insight_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ConflictException` | `amazon_dev_ops_guru/models/conflict_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.insights.describe_insight

- **Route**: `GET /insights/{Id}`
- **Auth**: `sigv4`
- **Signature**: `def describe_insight(id_: str, *, account_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `Id` · `account_id` — query `AccountId`
- **Returns (parsed)**: `DescribeInsightResponse`
- **Returns (raw)**: `ApiResult[DescribeInsightResponse, DescribeInsightErrorBody]`
- **Error**: `DescribeInsightErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ResourceNotFoundException` [404] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeInsightResponse` | `amazon_dev_ops_guru/models/describe_insight_response.py` |
| `DescribeInsightErrorBody` | `amazon_dev_ops_guru/errors/describe_insight_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ResourceNotFoundException` | `amazon_dev_ops_guru/models/resource_not_found_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.insights.list_insights

- **Route**: `POST /insights`
- **Auth**: `sigv4`
- **Signature**: `def list_insights(*, body: InsightsRequest | InsightsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListInsightsResponse`
- **Returns (raw)**: `ApiResult[ListInsightsResponse, ListInsightsErrorBody]`
- **Error**: `ListInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightsRequest` | `amazon_dev_ops_guru/models/insights_request.py` |
| `InsightsRequestDict` | `amazon_dev_ops_guru/models/insights_request.py` |
| `ListInsightsResponse` | `amazon_dev_ops_guru/models/list_insights_response.py` |
| `ListInsightsErrorBody` | `amazon_dev_ops_guru/errors/list_insights_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.insights.search_insights

- **Route**: `POST /insights/search`
- **Auth**: `sigv4`
- **Signature**: `def search_insights(*, body: InsightsSearchRequest | InsightsSearchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchInsightsResponse`
- **Returns (raw)**: `ApiResult[SearchInsightsResponse, SearchInsightsErrorBody]`
- **Error**: `SearchInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `InsightsSearchRequest` | `amazon_dev_ops_guru/models/insights_search_request.py` |
| `InsightsSearchRequestDict` | `amazon_dev_ops_guru/models/insights_search_request.py` |
| `SearchInsightsResponse` | `amazon_dev_ops_guru/models/search_insights_response.py` |
| `SearchInsightsErrorBody` | `amazon_dev_ops_guru/errors/search_insights_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

