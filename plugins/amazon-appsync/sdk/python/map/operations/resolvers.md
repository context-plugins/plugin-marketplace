<!-- Generated file — do not edit; regenerated with the SDK. -->

# Resolvers — operations

Accessor: `client.resolvers` · Source: `amazon_app_sync/apis/resolvers.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.resolvers.create_resolver

- **Route**: `POST /v1/apis/{apiId}/types/{typeName}/resolvers`
- **Auth**: `sigv4`
- **Signature**: `def create_resolver(api_id: str, type_name: str, *, body: V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `body` — JSON body
- **Returns (parsed)**: `CreateResolverResponse`
- **Returns (raw)**: `ApiResult[CreateResolverResponse, CreateResolverErrorBody]`
- **Error**: `CreateResolverErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisTypesResolversRequest` | `amazon_app_sync/models/v1_apis_types_resolvers_request.py` |
| `V1ApisTypesResolversRequestDict` | `amazon_app_sync/models/v1_apis_types_resolvers_request.py` |
| `CreateResolverResponse` | `amazon_app_sync/models/create_resolver_response.py` |
| `CreateResolverErrorBody` | `amazon_app_sync/errors/create_resolver_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.resolvers.delete_resolver

- **Route**: `DELETE /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`
- **Auth**: `sigv4`
- **Signature**: `def delete_resolver(api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`, `field_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `field_name` — path `fieldName`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteResolverErrorBody]`
- **Error**: `DeleteResolverErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteResolverErrorBody` | `amazon_app_sync/errors/delete_resolver_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.resolvers.get_resolver

- **Route**: `GET /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`
- **Auth**: `sigv4`
- **Signature**: `def get_resolver(api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`, `field_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `field_name` — path `fieldName`
- **Returns (parsed)**: `GetResolverResponse`
- **Returns (raw)**: `ApiResult[GetResolverResponse, GetResolverErrorBody]`
- **Error**: `GetResolverErrorBody` — **Case A (typed)**
- **Error arms**: `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetResolverResponse` | `amazon_app_sync/models/get_resolver_response.py` |
| `GetResolverErrorBody` | `amazon_app_sync/errors/get_resolver_error.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |

### client.resolvers.list_resolvers

- **Route**: `GET /v1/apis/{apiId}/types/{typeName}/resolvers`
- **Auth**: `sigv4`
- **Signature**: `def list_resolvers(api_id: str, type_name: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListResolversResponse`
- **Returns (raw)**: `ApiResult[ListResolversResponse, ListResolversErrorBody]`
- **Error**: `ListResolversErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResolversResponse` | `amazon_app_sync/models/list_resolvers_response.py` |
| `ListResolversErrorBody` | `amazon_app_sync/errors/list_resolvers_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.resolvers.list_resolvers_by_function

- **Route**: `GET /v1/apis/{apiId}/functions/{functionId}/resolvers`
- **Auth**: `sigv4`
- **Signature**: `def list_resolvers_by_function(api_id: str, function_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `function_id`
- **Params**: `api_id` — path `apiId` · `function_id` — path `functionId` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListResolversByFunctionResponse`
- **Returns (raw)**: `ApiResult[ListResolversByFunctionResponse, ListResolversByFunctionErrorBody]`
- **Error**: `ListResolversByFunctionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListResolversByFunctionResponse` | `amazon_app_sync/models/list_resolvers_by_function_response.py` |
| `ListResolversByFunctionErrorBody` | `amazon_app_sync/errors/list_resolvers_by_function_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.resolvers.update_resolver

- **Route**: `POST /v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}`
- **Auth**: `sigv4`
- **Signature**: `def update_resolver(api_id: str, type_name: str, field_name: str, *, body: V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`, `field_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `field_name` — path `fieldName` · `body` — JSON body
- **Returns (parsed)**: `UpdateResolverResponse`
- **Returns (raw)**: `ApiResult[UpdateResolverResponse, UpdateResolverErrorBody]`
- **Error**: `UpdateResolverErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisTypesResolversFieldNameRequest` | `amazon_app_sync/models/v1_apis_types_resolvers_field_name_request.py` |
| `V1ApisTypesResolversFieldNameRequestDict` | `amazon_app_sync/models/v1_apis_types_resolvers_field_name_request.py` |
| `UpdateResolverResponse` | `amazon_app_sync/models/update_resolver_response.py` |
| `UpdateResolverErrorBody` | `amazon_app_sync/errors/update_resolver_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

