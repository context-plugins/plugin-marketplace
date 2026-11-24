<!-- Generated file — do not edit; regenerated with the SDK. -->

# GraphqlApis — operations

Accessor: `client.graphql_apis` · Source: `amazon_app_sync/apis/graphql_apis.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.graphql_apis.create_graphql_api2

- **Route**: `POST /v1/apis`
- **Auth**: `sigv4`
- **Signature**: `def create_graphql_api2(*, body: V1ApisRequest | V1ApisRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `CreateGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[CreateGraphqlApiResponse, CreateGraphqlApi2ErrorBody]`
- **Error**: `CreateGraphqlApi2ErrorBody` — **Case A (typed)**
- **Error arms**: `ApiLimitExceededException` [400] · `UnauthorizedException` [401] · `ConcurrentModificationException` [409] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisRequest` | `amazon_app_sync/models/v1_apis_request.py` |
| `V1ApisRequestDict` | `amazon_app_sync/models/v1_apis_request.py` |
| `CreateGraphqlApiResponse` | `amazon_app_sync/models/create_graphql_api_response.py` |
| `CreateGraphqlApi2ErrorBody` | `amazon_app_sync/errors/create_graphql_api2_error.py` |
| `ApiLimitExceededException` | `amazon_app_sync/models/api_limit_exceeded_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.graphql_apis.delete_graphql_api2

- **Route**: `DELETE /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def delete_graphql_api2(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteGraphqlApi2ErrorBody]`
- **Error**: `DeleteGraphqlApi2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteGraphqlApi2ErrorBody` | `amazon_app_sync/errors/delete_graphql_api2_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.graphql_apis.evaluate_mapping_template

- **Route**: `POST /v1/dataplane-evaluatetemplate`
- **Auth**: `sigv4`
- **Signature**: `def evaluate_mapping_template(*, body: V1DataplaneEvaluatetemplateRequest | V1DataplaneEvaluatetemplateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `EvaluateMappingTemplateResponse`
- **Returns (raw)**: `ApiResult[EvaluateMappingTemplateResponse, EvaluateMappingTemplateErrorBody]`
- **Error**: `EvaluateMappingTemplateErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `AccessDeniedException` [403] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DataplaneEvaluatetemplateRequest` | `amazon_app_sync/models/v1_dataplane_evaluatetemplate_request.py` |
| `V1DataplaneEvaluatetemplateRequestDict` | `amazon_app_sync/models/v1_dataplane_evaluatetemplate_request.py` |
| `EvaluateMappingTemplateResponse` | `amazon_app_sync/models/evaluate_mapping_template_response.py` |
| `EvaluateMappingTemplateErrorBody` | `amazon_app_sync/errors/evaluate_mapping_template_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.graphql_apis.get_graphql_api2

- **Route**: `GET /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def get_graphql_api2(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[GetGraphqlApiResponse, GetGraphqlApi2ErrorBody]`
- **Error**: `GetGraphqlApi2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetGraphqlApiResponse` | `amazon_app_sync/models/get_graphql_api_response.py` |
| `GetGraphqlApi2ErrorBody` | `amazon_app_sync/errors/get_graphql_api2_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.graphql_apis.list_graphql_apis2

- **Route**: `GET /v1/apis`
- **Auth**: `sigv4`
- **Signature**: `def list_graphql_apis2(*, next_token: str | None = None, max_results: int | None = None, api_type: ApiType2OrStr | None = None, owner: OwnerOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `next_token` — query `nextToken` · `max_results` — query `maxResults` · `api_type` — query `apiType` · `owner` — query
- **Returns (parsed)**: `ListGraphqlApisResponse`
- **Returns (raw)**: `ApiResult[ListGraphqlApisResponse, ListGraphqlApis2ErrorBody]`
- **Error**: `ListGraphqlApis2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiType2OrStr` | `amazon_app_sync/models/enums/api_type2.py` |
| `OwnerOrStr` | `amazon_app_sync/models/enums/owner.py` |
| `ListGraphqlApisResponse` | `amazon_app_sync/models/list_graphql_apis_response.py` |
| `ListGraphqlApis2ErrorBody` | `amazon_app_sync/errors/list_graphql_apis2_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.graphql_apis.update_graphql_api2

- **Route**: `POST /v1/apis/{apiId}`
- **Auth**: `sigv4`
- **Signature**: `def update_graphql_api2(api_id: str, *, body: V1ApisRequest1 | V1ApisRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `UpdateGraphqlApiResponse`
- **Returns (raw)**: `ApiResult[UpdateGraphqlApiResponse, UpdateGraphqlApi2ErrorBody]`
- **Error**: `UpdateGraphqlApi2ErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisRequest1` | `amazon_app_sync/models/v1_apis_request1.py` |
| `V1ApisRequest1Dict` | `amazon_app_sync/models/v1_apis_request1.py` |
| `UpdateGraphqlApiResponse` | `amazon_app_sync/models/update_graphql_api_response.py` |
| `UpdateGraphqlApi2ErrorBody` | `amazon_app_sync/errors/update_graphql_api2_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

