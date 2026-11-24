<!-- Generated file — do not edit; regenerated with the SDK. -->

# Types — operations

Accessor: `client.types` · Source: `amazon_app_sync/apis/types.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.types.create_type

- **Route**: `POST /v1/apis/{apiId}/types`
- **Auth**: `sigv4`
- **Signature**: `def create_type(api_id: str, *, body: V1ApisTypesRequest | V1ApisTypesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `CreateTypeResponse`
- **Returns (raw)**: `ApiResult[CreateTypeResponse, CreateTypeErrorBody]`
- **Error**: `CreateTypeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisTypesRequest` | `amazon_app_sync/models/v1_apis_types_request.py` |
| `V1ApisTypesRequestDict` | `amazon_app_sync/models/v1_apis_types_request.py` |
| `CreateTypeResponse` | `amazon_app_sync/models/create_type_response.py` |
| `CreateTypeErrorBody` | `amazon_app_sync/errors/create_type_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.types.delete_type

- **Route**: `DELETE /v1/apis/{apiId}/types/{typeName}`
- **Auth**: `sigv4`
- **Signature**: `def delete_type(api_id: str, type_name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteTypeErrorBody]`
- **Error**: `DeleteTypeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteTypeErrorBody` | `amazon_app_sync/errors/delete_type_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.types.get_type

- **Route**: `GET /v1/apis/{apiId}/types/{typeName}`
- **Auth**: `sigv4`
- **Signature**: `def get_type(api_id: str, type_name: str, format_: FormatOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`, `format_`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `format_` — query `format`
- **Returns (parsed)**: `GetTypeResponse`
- **Returns (raw)**: `ApiResult[GetTypeResponse, GetTypeErrorBody]`
- **Error**: `GetTypeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `amazon_app_sync/models/enums/format.py` |
| `GetTypeResponse` | `amazon_app_sync/models/get_type_response.py` |
| `GetTypeErrorBody` | `amazon_app_sync/errors/get_type_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.types.list_types

- **Route**: `GET /v1/apis/{apiId}/types`
- **Auth**: `sigv4`
- **Signature**: `def list_types(api_id: str, format_: FormatOrStr, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `format_`
- **Params**: `api_id` — path `apiId` · `format_` — query `format` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListTypesResponse`
- **Returns (raw)**: `ApiResult[ListTypesResponse, ListTypesErrorBody]`
- **Error**: `ListTypesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `amazon_app_sync/models/enums/format.py` |
| `ListTypesResponse` | `amazon_app_sync/models/list_types_response.py` |
| `ListTypesErrorBody` | `amazon_app_sync/errors/list_types_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.types.list_types_by_association

- **Route**: `GET /v1/mergedApis/{mergedApiIdentifier}/sourceApiAssociations/{associationId}/types`
- **Auth**: `sigv4`
- **Signature**: `def list_types_by_association(merged_api_identifier: str, association_id: str, format_: FormatOrStr, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `merged_api_identifier`, `association_id`, `format_`
- **Params**: `merged_api_identifier` — path `mergedApiIdentifier` · `association_id` — path `associationId` · `format_` — query `format` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListTypesByAssociationResponse`
- **Returns (raw)**: `ApiResult[ListTypesByAssociationResponse, ListTypesByAssociationErrorBody]`
- **Error**: `ListTypesByAssociationErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FormatOrStr` | `amazon_app_sync/models/enums/format.py` |
| `ListTypesByAssociationResponse` | `amazon_app_sync/models/list_types_by_association_response.py` |
| `ListTypesByAssociationErrorBody` | `amazon_app_sync/errors/list_types_by_association_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.types.update_type

- **Route**: `POST /v1/apis/{apiId}/types/{typeName}`
- **Auth**: `sigv4`
- **Signature**: `def update_type(api_id: str, type_name: str, *, body: V1ApisTypesRequest1 | V1ApisTypesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `type_name`
- **Params**: `api_id` — path `apiId` · `type_name` — path `typeName` · `body` — JSON body
- **Returns (parsed)**: `UpdateTypeResponse`
- **Returns (raw)**: `ApiResult[UpdateTypeResponse, UpdateTypeErrorBody]`
- **Error**: `UpdateTypeErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisTypesRequest1` | `amazon_app_sync/models/v1_apis_types_request1.py` |
| `V1ApisTypesRequest1Dict` | `amazon_app_sync/models/v1_apis_types_request1.py` |
| `UpdateTypeResponse` | `amazon_app_sync/models/update_type_response.py` |
| `UpdateTypeErrorBody` | `amazon_app_sync/errors/update_type_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

