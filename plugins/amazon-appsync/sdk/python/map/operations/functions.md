<!-- Generated file — do not edit; regenerated with the SDK. -->

# Functions — operations

Accessor: `client.functions` · Source: `amazon_app_sync/apis/functions.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.functions.create_function

- **Route**: `POST /v1/apis/{apiId}/functions`
- **Auth**: `sigv4`
- **Signature**: `def create_function(api_id: str, *, body: V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `CreateFunctionResponse`
- **Returns (raw)**: `ApiResult[CreateFunctionResponse, CreateFunctionErrorBody]`
- **Error**: `CreateFunctionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisFunctionsRequest` | `amazon_app_sync/models/v1_apis_functions_request.py` |
| `V1ApisFunctionsRequestDict` | `amazon_app_sync/models/v1_apis_functions_request.py` |
| `CreateFunctionResponse` | `amazon_app_sync/models/create_function_response.py` |
| `CreateFunctionErrorBody` | `amazon_app_sync/errors/create_function_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.functions.delete_function

- **Route**: `DELETE /v1/apis/{apiId}/functions/{functionId}`
- **Auth**: `sigv4`
- **Signature**: `def delete_function(api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `function_id`
- **Params**: `api_id` — path `apiId` · `function_id` — path `functionId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteFunctionErrorBody]`
- **Error**: `DeleteFunctionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteFunctionErrorBody` | `amazon_app_sync/errors/delete_function_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.functions.get_function

- **Route**: `GET /v1/apis/{apiId}/functions/{functionId}`
- **Auth**: `sigv4`
- **Signature**: `def get_function(api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `function_id`
- **Params**: `api_id` — path `apiId` · `function_id` — path `functionId`
- **Returns (parsed)**: `GetFunctionResponse`
- **Returns (raw)**: `ApiResult[GetFunctionResponse, GetFunctionErrorBody]`
- **Error**: `GetFunctionErrorBody` — **Case A (typed)**
- **Error arms**: `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetFunctionResponse` | `amazon_app_sync/models/get_function_response.py` |
| `GetFunctionErrorBody` | `amazon_app_sync/errors/get_function_error.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |

### client.functions.list_functions

- **Route**: `GET /v1/apis/{apiId}/functions`
- **Auth**: `sigv4`
- **Signature**: `def list_functions(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListFunctionsResponse`
- **Returns (raw)**: `ApiResult[ListFunctionsResponse, ListFunctionsErrorBody]`
- **Error**: `ListFunctionsErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListFunctionsResponse` | `amazon_app_sync/models/list_functions_response.py` |
| `ListFunctionsErrorBody` | `amazon_app_sync/errors/list_functions_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.functions.update_function

- **Route**: `POST /v1/apis/{apiId}/functions/{functionId}`
- **Auth**: `sigv4`
- **Signature**: `def update_function(api_id: str, function_id: str, *, body: V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `function_id`
- **Params**: `api_id` — path `apiId` · `function_id` — path `functionId` · `body` — JSON body
- **Returns (parsed)**: `UpdateFunctionResponse`
- **Returns (raw)**: `ApiResult[UpdateFunctionResponse, UpdateFunctionErrorBody]`
- **Error**: `UpdateFunctionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisFunctionsRequest1` | `amazon_app_sync/models/v1_apis_functions_request1.py` |
| `V1ApisFunctionsRequest1Dict` | `amazon_app_sync/models/v1_apis_functions_request1.py` |
| `UpdateFunctionResponse` | `amazon_app_sync/models/update_function_response.py` |
| `UpdateFunctionErrorBody` | `amazon_app_sync/errors/update_function_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

