<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `amazon_dev_ops_guru/apis/accounts.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.accounts.describe_account_health

- **Route**: `GET /accounts/health`
- **Auth**: `sigv4`
- **Signature**: `def describe_account_health(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `DescribeAccountHealthResponse`
- **Returns (raw)**: `ApiResult[DescribeAccountHealthResponse, DescribeAccountHealthErrorBody]`
- **Error**: `DescribeAccountHealthErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DescribeAccountHealthResponse` | `amazon_dev_ops_guru/models/describe_account_health_response.py` |
| `DescribeAccountHealthErrorBody` | `amazon_dev_ops_guru/errors/describe_account_health_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.accounts.describe_account_overview

- **Route**: `POST /accounts/overview`
- **Auth**: `sigv4`
- **Signature**: `def describe_account_overview(*, body: AccountsOverviewRequest | AccountsOverviewRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `DescribeAccountOverviewResponse`
- **Returns (raw)**: `ApiResult[DescribeAccountOverviewResponse, DescribeAccountOverviewErrorBody]`
- **Error**: `DescribeAccountOverviewErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AccountsOverviewRequest` | `amazon_dev_ops_guru/models/accounts_overview_request.py` |
| `AccountsOverviewRequestDict` | `amazon_dev_ops_guru/models/accounts_overview_request.py` |
| `DescribeAccountOverviewResponse` | `amazon_dev_ops_guru/models/describe_account_overview_response.py` |
| `DescribeAccountOverviewErrorBody` | `amazon_dev_ops_guru/errors/describe_account_overview_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

### client.accounts.describe_resource_collection_health

- **Route**: `GET /accounts/health/resource-collection/{ResourceCollectionType}`
- **Auth**: `sigv4`
- **Signature**: `def describe_resource_collection_health(resource_collection_type: ResourceCollectionTypeOrStr, *, next_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `resource_collection_type`
- **Params**: `resource_collection_type` — path `ResourceCollectionType` · `next_token` — query `NextToken`
- **Returns (parsed)**: `DescribeResourceCollectionHealthResponse`
- **Returns (raw)**: `ApiResult[DescribeResourceCollectionHealthResponse, DescribeResourceCollectionHealthErrorBody]`
- **Error**: `DescribeResourceCollectionHealthErrorBody` — **Case A (typed)**
- **Error arms**: `ValidationException` [400] · `AccessDeniedException` [403] · `ThrottlingException` [429] · `InternalServerException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResourceCollectionTypeOrStr` | `amazon_dev_ops_guru/models/enums/resource_collection_type.py` |
| `DescribeResourceCollectionHealthResponse` | `amazon_dev_ops_guru/models/describe_resource_collection_health_response.py` |
| `DescribeResourceCollectionHealthErrorBody` | `amazon_dev_ops_guru/errors/describe_resource_collection_health_error.py` |
| `ValidationException` | `amazon_dev_ops_guru/models/validation_exception.py` |
| `AccessDeniedException` | `amazon_dev_ops_guru/models/access_denied_exception.py` |
| `ThrottlingException` | `amazon_dev_ops_guru/models/throttling_exception.py` |
| `InternalServerException` | `amazon_dev_ops_guru/models/internal_server_exception.py` |

