<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataSources — operations

Accessor: `client.data_sources` · Source: `amazon_app_sync/apis/data_sources.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_sources.create_data_source

- **Route**: `POST /v1/apis/{apiId}/datasources`
- **Auth**: `sigv4`
- **Signature**: `def create_data_source(api_id: str, *, body: V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `CreateDataSourceResponse`
- **Returns (raw)**: `ApiResult[CreateDataSourceResponse, CreateDataSourceErrorBody]`
- **Error**: `CreateDataSourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisDatasourcesRequest` | `amazon_app_sync/models/v1_apis_datasources_request.py` |
| `V1ApisDatasourcesRequestDict` | `amazon_app_sync/models/v1_apis_datasources_request.py` |
| `CreateDataSourceResponse` | `amazon_app_sync/models/create_data_source_response.py` |
| `CreateDataSourceErrorBody` | `amazon_app_sync/errors/create_data_source_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.data_sources.delete_data_source

- **Route**: `DELETE /v1/apis/{apiId}/datasources/{name}`
- **Auth**: `sigv4`
- **Signature**: `def delete_data_source(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `name`
- **Params**: `api_id` — path `apiId` · `name` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteDataSourceErrorBody]`
- **Error**: `DeleteDataSourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteDataSourceErrorBody` | `amazon_app_sync/errors/delete_data_source_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.data_sources.get_data_source

- **Route**: `GET /v1/apis/{apiId}/datasources/{name}`
- **Auth**: `sigv4`
- **Signature**: `def get_data_source(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `name`
- **Params**: `api_id` — path `apiId` · `name` — path
- **Returns (parsed)**: `GetDataSourceResponse`
- **Returns (raw)**: `ApiResult[GetDataSourceResponse, GetDataSourceErrorBody]`
- **Error**: `GetDataSourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetDataSourceResponse` | `amazon_app_sync/models/get_data_source_response.py` |
| `GetDataSourceErrorBody` | `amazon_app_sync/errors/get_data_source_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.data_sources.get_data_source_introspection

- **Route**: `GET /v1/datasources/introspections/{introspectionId}`
- **Auth**: `sigv4`
- **Signature**: `def get_data_source_introspection(introspection_id: str, *, include_models_sdl: bool | None = None, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `introspection_id`
- **Params**: `introspection_id` — path `introspectionId` · `include_models_sdl` — query `includeModelsSDL` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `GetDataSourceIntrospectionResponse`
- **Returns (raw)**: `ApiResult[GetDataSourceIntrospectionResponse, GetDataSourceIntrospectionErrorBody]`
- **Error**: `GetDataSourceIntrospectionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetDataSourceIntrospectionResponse` | `amazon_app_sync/models/get_data_source_introspection_response.py` |
| `GetDataSourceIntrospectionErrorBody` | `amazon_app_sync/errors/get_data_source_introspection_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.data_sources.list_data_sources

- **Route**: `GET /v1/apis/{apiId}/datasources`
- **Auth**: `sigv4`
- **Signature**: `def list_data_sources(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListDataSourcesResponse`
- **Returns (raw)**: `ApiResult[ListDataSourcesResponse, ListDataSourcesErrorBody]`
- **Error**: `ListDataSourcesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListDataSourcesResponse` | `amazon_app_sync/models/list_data_sources_response.py` |
| `ListDataSourcesErrorBody` | `amazon_app_sync/errors/list_data_sources_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.data_sources.start_data_source_introspection

- **Route**: `POST /v1/datasources/introspections`
- **Auth**: `sigv4`
- **Signature**: `def start_data_source_introspection(*, body: V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `StartDataSourceIntrospectionResponse`
- **Returns (raw)**: `ApiResult[StartDataSourceIntrospectionResponse, StartDataSourceIntrospectionErrorBody]`
- **Error**: `StartDataSourceIntrospectionErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1DatasourcesIntrospectionsRequest` | `amazon_app_sync/models/v1_datasources_introspections_request.py` |
| `V1DatasourcesIntrospectionsRequestDict` | `amazon_app_sync/models/v1_datasources_introspections_request.py` |
| `StartDataSourceIntrospectionResponse` | `amazon_app_sync/models/start_data_source_introspection_response.py` |
| `StartDataSourceIntrospectionErrorBody` | `amazon_app_sync/errors/start_data_source_introspection_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.data_sources.update_data_source

- **Route**: `POST /v1/apis/{apiId}/datasources/{name}`
- **Auth**: `sigv4`
- **Signature**: `def update_data_source(api_id: str, name: str, *, body: V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `name`
- **Params**: `api_id` — path `apiId` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `UpdateDataSourceResponse`
- **Returns (raw)**: `ApiResult[UpdateDataSourceResponse, UpdateDataSourceErrorBody]`
- **Error**: `UpdateDataSourceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1ApisDatasourcesRequest1` | `amazon_app_sync/models/v1_apis_datasources_request1.py` |
| `V1ApisDatasourcesRequest1Dict` | `amazon_app_sync/models/v1_apis_datasources_request1.py` |
| `UpdateDataSourceResponse` | `amazon_app_sync/models/update_data_source_response.py` |
| `UpdateDataSourceErrorBody` | `amazon_app_sync/errors/update_data_source_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

