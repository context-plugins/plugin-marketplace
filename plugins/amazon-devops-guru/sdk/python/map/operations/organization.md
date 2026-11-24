<!-- Generated file — do not edit; regenerated with the SDK. -->

# Organization — operations

Accessor: `client.organization` · Source: `amazon_dev_ops_guru/apis/organization.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.organization.describe_organization_health

- **Route**: `POST /organization/health`
- **Auth**: `sigv4`
- **Signature**: `def describe_organization_health(*, body: OrganizationHealthRequest | OrganizationHealthRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DescribeOrganizationHealthResponse`
- **Returns (raw)**: `ApiResult[DescribeOrganizationHealthResponse, DescribeOrganizationHealthErrorBody]`
- **Error**: `DescribeOrganizationHealthErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationHealthRequest` | `amazon_dev_ops_guru/models/organization_health_request.py` |
| `OrganizationHealthRequestDict` | `amazon_dev_ops_guru/models/organization_health_request.py` |
| `DescribeOrganizationHealthResponse` | `amazon_dev_ops_guru/models/describe_organization_health_response.py` |
| `DescribeOrganizationHealthErrorBody` | `amazon_dev_ops_guru/errors/describe_organization_health_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.organization.describe_organization_overview

- **Route**: `POST /organization/overview`
- **Auth**: `sigv4`
- **Signature**: `def describe_organization_overview(*, body: OrganizationOverviewRequest | OrganizationOverviewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DescribeOrganizationOverviewResponse`
- **Returns (raw)**: `ApiResult[DescribeOrganizationOverviewResponse, DescribeOrganizationOverviewErrorBody]`
- **Error**: `DescribeOrganizationOverviewErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationOverviewRequest` | `amazon_dev_ops_guru/models/organization_overview_request.py` |
| `OrganizationOverviewRequestDict` | `amazon_dev_ops_guru/models/organization_overview_request.py` |
| `DescribeOrganizationOverviewResponse` | `amazon_dev_ops_guru/models/describe_organization_overview_response.py` |
| `DescribeOrganizationOverviewErrorBody` | `amazon_dev_ops_guru/errors/describe_organization_overview_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.organization.describe_organization_resource_collection_health

- **Route**: `POST /organization/health/resource-collection`
- **Auth**: `sigv4`
- **Signature**: `def describe_organization_resource_collection_health(*, body: OrganizationHealthResourceCollectionRequest | OrganizationHealthResourceCollectionRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DescribeOrganizationResourceCollectionHealthResponse`
- **Returns (raw)**: `ApiResult[DescribeOrganizationResourceCollectionHealthResponse, DescribeOrganizationResourceCollectionHealthErrorBody]`
- **Error**: `DescribeOrganizationResourceCollectionHealthErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationHealthResourceCollectionRequest` | `amazon_dev_ops_guru/models/organization_health_resource_collection_request.py` |
| `OrganizationHealthResourceCollectionRequestDict` | `amazon_dev_ops_guru/models/organization_health_resource_collection_request.py` |
| `DescribeOrganizationResourceCollectionHealthResponse` | `amazon_dev_ops_guru/models/describe_organization_resource_collection_health_response.py` |
| `DescribeOrganizationResourceCollectionHealthErrorBody` | `amazon_dev_ops_guru/errors/describe_organization_resource_collection_health_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.organization.list_organization_insights

- **Route**: `POST /organization/insights`
- **Auth**: `sigv4`
- **Signature**: `def list_organization_insights(*, body: OrganizationInsightsRequest | OrganizationInsightsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ListOrganizationInsightsResponse`
- **Returns (raw)**: `ApiResult[ListOrganizationInsightsResponse, ListOrganizationInsightsErrorBody]`
- **Error**: `ListOrganizationInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationInsightsRequest` | `amazon_dev_ops_guru/models/organization_insights_request.py` |
| `OrganizationInsightsRequestDict` | `amazon_dev_ops_guru/models/organization_insights_request.py` |
| `ListOrganizationInsightsResponse` | `amazon_dev_ops_guru/models/list_organization_insights_response.py` |
| `ListOrganizationInsightsErrorBody` | `amazon_dev_ops_guru/errors/list_organization_insights_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.organization.search_organization_insights

- **Route**: `POST /organization/insights/search`
- **Auth**: `sigv4`
- **Signature**: `def search_organization_insights(*, body: OrganizationInsightsSearchRequest | OrganizationInsightsSearchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SearchOrganizationInsightsResponse`
- **Returns (raw)**: `ApiResult[SearchOrganizationInsightsResponse, SearchOrganizationInsightsErrorBody]`
- **Error**: `SearchOrganizationInsightsErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OrganizationInsightsSearchRequest` | `amazon_dev_ops_guru/models/organization_insights_search_request.py` |
| `OrganizationInsightsSearchRequestDict` | `amazon_dev_ops_guru/models/organization_insights_search_request.py` |
| `SearchOrganizationInsightsResponse` | `amazon_dev_ops_guru/models/search_organization_insights_response.py` |
| `SearchOrganizationInsightsErrorBody` | `amazon_dev_ops_guru/errors/search_organization_insights_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

