<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApiKeys — operations

Accessor: `client.api_keys` · Source: `amazon_app_sync/apis/api_keys.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.api_keys.create_api_key

- **Route**: `POST /v1/apis/{apiId}/apikeys`
- **Auth**: `sigv4`
- **Signature**: `def create_api_key(api_id: str, *, body: V1ApisApikeysRequest | V1ApisApikeysRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `CreateApiKeyResponse`
- **Returns (raw)**: `ApiResult[CreateApiKeyResponse, CreateApiKeyErrorBody]`
- **Error**: `CreateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiKeyLimitExceededException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisApikeysRequest` | `amazon_app_sync/models/v1_apis_apikeys_request.py` |
| `V1ApisApikeysRequestDict` | `amazon_app_sync/models/v1_apis_apikeys_request.py` |
| `CreateApiKeyResponse` | `amazon_app_sync/models/create_api_key_response.py` |
| `CreateApiKeyErrorBody` | `amazon_app_sync/errors/create_api_key_error.py` |
| `ApiKeyLimitExceededException` | `amazon_app_sync/models/api_key_limit_exceeded_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.api_keys.delete_api_key

- **Route**: `DELETE /v1/apis/{apiId}/apikeys/{id}`
- **Auth**: `sigv4`
- **Signature**: `def delete_api_key(api_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `id_`
- **Params**: `api_id` — path `apiId` · `id_` — path `id`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteApiKeyErrorBody]`
- **Error**: `DeleteApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiKeyErrorBody` | `amazon_app_sync/errors/delete_api_key_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.api_keys.list_api_keys

- **Route**: `GET /v1/apis/{apiId}/apikeys`
- **Auth**: `sigv4`
- **Signature**: `def list_api_keys(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListApiKeysResponse`
- **Returns (raw)**: `ApiResult[ListApiKeysResponse, ListApiKeysErrorBody]`
- **Error**: `ListApiKeysErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListApiKeysResponse` | `amazon_app_sync/models/list_api_keys_response.py` |
| `ListApiKeysErrorBody` | `amazon_app_sync/errors/list_api_keys_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.api_keys.update_api_key

- **Route**: `POST /v1/apis/{apiId}/apikeys/{id}`
- **Auth**: `sigv4`
- **Signature**: `def update_api_key(api_id: str, id_: str, *, body: V1ApisApikeysRequest1 | V1ApisApikeysRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `id_`
- **Params**: `api_id` — path `apiId` · `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `UpdateApiKeyResponse`
- **Returns (raw)**: `ApiResult[UpdateApiKeyResponse, UpdateApiKeyErrorBody]`
- **Error**: `UpdateApiKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ApiKeyValidityOutOfBoundsException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `LimitExceededException` [429] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisApikeysRequest1` | `amazon_app_sync/models/v1_apis_apikeys_request1.py` |
| `V1ApisApikeysRequest1Dict` | `amazon_app_sync/models/v1_apis_apikeys_request1.py` |
| `UpdateApiKeyResponse` | `amazon_app_sync/models/update_api_key_response.py` |
| `UpdateApiKeyErrorBody` | `amazon_app_sync/errors/update_api_key_error.py` |
| `ApiKeyValidityOutOfBoundsException` | `amazon_app_sync/models/api_key_validity_out_of_bounds_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `LimitExceededException` | `amazon_app_sync/models/limit_exceeded_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

