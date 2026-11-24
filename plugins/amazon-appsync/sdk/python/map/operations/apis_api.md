<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApisApi — operations

Accessor: `client.apis_api` · Source: `amazon_app_sync/apis/apis_api.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.apis_api.create_api

- **Route**: `POST /v2/apis`
- **Auth**: `sigv4`
- **Signature**: `def create_api(*, body: V2ApisRequest | V2ApisRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateApiResponse`
- **Returns (raw)**: `ApiResult[CreateApiResponse, CreateApiErrorBody]`
- **Error**: `CreateApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `ServiceQuotaExceededException` [402] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2ApisRequest` | `amazon_app_sync/models/v2_apis_request.py` |
| `V2ApisRequestDict` | `amazon_app_sync/models/v2_apis_request.py` |
| `CreateApiResponse` | `amazon_app_sync/models/create_api_response.py` |
| `CreateApiErrorBody` | `amazon_app_sync/errors/create_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `ServiceQuotaExceededException` | `amazon_app_sync/models/service_quota_exceeded_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.create_graphql_api

- **Route**: `POST /v1/apis`
- **Auth**: `sigv4`
- **Signature**: `def create_graphql_api(*, body: V1ApisRequest | V1ApisRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[CreateGraphqlApiResponse, CreateGraphqlApiErrorBody]`
- **Error**: `CreateGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `ApiLimitExceededException` [400] · `UnauthorizedException` [401] · `ConcurrentModificationException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisRequest` | `amazon_app_sync/models/v1_apis_request.py` |
| `V1ApisRequestDict` | `amazon_app_sync/models/v1_apis_request.py` |
| `CreateGraphqlApiResponse` | `amazon_app_sync/models/create_graphql_api_response.py` |
| `CreateGraphqlApiErrorBody` | `amazon_app_sync/errors/create_graphql_api_error.py` |
| `ApiLimitExceededException` | `amazon_app_sync/models/api_limit_exceeded_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.delete_api

- **Route**: `DELETE /v2/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def delete_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteApiErrorBody]`
- **Error**: `DeleteApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiErrorBody` | `amazon_app_sync/errors/delete_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.delete_graphql_api

- **Route**: `DELETE /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def delete_graphql_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteGraphqlApiErrorBody]`
- **Error**: `DeleteGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteGraphqlApiErrorBody` | `amazon_app_sync/errors/delete_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.get_api

- **Route**: `GET /v2/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def get_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetApiResponse`
- **Returns (raw)**: `ApiResult[GetApiResponse, GetApiErrorBody]`
- **Error**: `GetApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiResponse` | `amazon_app_sync/models/get_api_response.py` |
| `GetApiErrorBody` | `amazon_app_sync/errors/get_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.get_graphql_api

- **Route**: `GET /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def get_graphql_api(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[GetGraphqlApiResponse, GetGraphqlApiErrorBody]`
- **Error**: `GetGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetGraphqlApiResponse` | `amazon_app_sync/models/get_graphql_api_response.py` |
| `GetGraphqlApiErrorBody` | `amazon_app_sync/errors/get_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.list_apis

- **Route**: `GET /v2/apis`
- **Auth**: `sigv4`
- **Signature**: `def list_apis(*, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListApisResponse`
- **Returns (raw)**: `ApiResult[ListApisResponse, ListApisErrorBody]`
- **Error**: `ListApisErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListApisResponse` | `amazon_app_sync/models/list_apis_response.py` |
| `ListApisErrorBody` | `amazon_app_sync/errors/list_apis_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.list_graphql_apis

- **Route**: `GET /v1/apis`
- **Auth**: `sigv4`
- **Signature**: `def list_graphql_apis(*, next_token: str | None = None, max_results: int | None = None, api_type: ApiType2OrStr | None = None, owner: OwnerOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_token` — query `nextToken` · `max_results` — query `maxResults` · `api_type` — query `apiType` · `owner` — query
- **Returns (parsed)**: `ListGraphqlApisResponse`
- **Returns (raw)**: `ApiResult[ListGraphqlApisResponse, ListGraphqlApisErrorBody]`
- **Error**: `ListGraphqlApisErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiType2OrStr` | `amazon_app_sync/models/enums/api_type2.py` |
| `OwnerOrStr` | `amazon_app_sync/models/enums/owner.py` |
| `ListGraphqlApisResponse` | `amazon_app_sync/models/list_graphql_apis_response.py` |
| `ListGraphqlApisErrorBody` | `amazon_app_sync/errors/list_graphql_apis_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.update_api

- **Route**: `POST /v2/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def update_api(api_id: str, *, body: V2ApisRequest1 | V2ApisRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `UpdateApiResponse`
- **Returns (raw)**: `ApiResult[UpdateApiResponse, UpdateApiErrorBody]`
- **Error**: `UpdateApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2ApisRequest1` | `amazon_app_sync/models/v2_apis_request1.py` |
| `V2ApisRequest1Dict` | `amazon_app_sync/models/v2_apis_request1.py` |
| `UpdateApiResponse` | `amazon_app_sync/models/update_api_response.py` |
| `UpdateApiErrorBody` | `amazon_app_sync/errors/update_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apis_api.update_graphql_api

- **Route**: `POST /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def update_graphql_api(api_id: str, *, body: V1ApisRequest1 | V1ApisRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `UpdateGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApiErrorBody]`
- **Error**: `UpdateGraphqlApiErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisRequest1` | `amazon_app_sync/models/v1_apis_request1.py` |
| `V1ApisRequest1Dict` | `amazon_app_sync/models/v1_apis_request1.py` |
| `UpdateGraphqlApiResponse` | `amazon_app_sync/models/update_graphql_api_response.py` |
| `UpdateGraphqlApiErrorBody` | `amazon_app_sync/errors/update_graphql_api_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

