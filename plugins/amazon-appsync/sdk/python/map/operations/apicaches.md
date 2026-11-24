<!-- Generated file — do not edit; regenerated with the SDK. -->

# Apicaches — operations

Accessor: `client.apicaches` · Source: `amazon_app_sync/apis/apicaches.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.apicaches.create_api_cache

- **Route**: `POST /v1/apis/{apiId}/ApiCaches`
- **Auth**: `sigv4`
- **Signature**: `def create_api_cache(api_id: str, *, body: V1ApisApiCachesRequest | V1ApisApiCachesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `CreateApiCacheResponse`
- **Returns (raw)**: `ApiResult[CreateApiCacheResponse, CreateApiCacheErrorBody]`
- **Error**: `CreateApiCacheErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisApiCachesRequest` | `amazon_app_sync/models/v1_apis_api_caches_request.py` |
| `V1ApisApiCachesRequestDict` | `amazon_app_sync/models/v1_apis_api_caches_request.py` |
| `CreateApiCacheResponse` | `amazon_app_sync/models/create_api_cache_response.py` |
| `CreateApiCacheErrorBody` | `amazon_app_sync/errors/create_api_cache_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apicaches.delete_api_cache

- **Route**: `DELETE /v1/apis/{apiId}/ApiCaches`
- **Auth**: `sigv4`
- **Signature**: `def delete_api_cache(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteApiCacheErrorBody]`
- **Error**: `DeleteApiCacheErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiCacheErrorBody` | `amazon_app_sync/errors/delete_api_cache_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apicaches.get_api_cache

- **Route**: `GET /v1/apis/{apiId}/ApiCaches`
- **Auth**: `sigv4`
- **Signature**: `def get_api_cache(api_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId`
- **Returns (parsed)**: `GetApiCacheResponse`
- **Returns (raw)**: `ApiResult[GetApiCacheResponse, GetApiCacheErrorBody]`
- **Error**: `GetApiCacheErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiCacheResponse` | `amazon_app_sync/models/get_api_cache_response.py` |
| `GetApiCacheErrorBody` | `amazon_app_sync/errors/get_api_cache_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.apicaches.update_api_cache

- **Route**: `POST /v1/apis/{apiId}/ApiCaches/update`
- **Auth**: `sigv4`
- **Signature**: `def update_api_cache(api_id: str, *, body: V1ApisApiCachesUpdateRequest | V1ApisApiCachesUpdateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `UpdateApiCacheResponse`
- **Returns (raw)**: `ApiResult[UpdateApiCacheResponse, UpdateApiCacheErrorBody]`
- **Error**: `UpdateApiCacheErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisApiCachesUpdateRequest` | `amazon_app_sync/models/v1_apis_api_caches_update_request.py` |
| `V1ApisApiCachesUpdateRequestDict` | `amazon_app_sync/models/v1_apis_api_caches_update_request.py` |
| `UpdateApiCacheResponse` | `amazon_app_sync/models/update_api_cache_response.py` |
| `UpdateApiCacheErrorBody` | `amazon_app_sync/errors/update_api_cache_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

