<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channelnamespaces — operations

Accessor: `client.channelnamespaces` · Source: `amazon_app_sync/apis/channelnamespaces.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.channelnamespaces.create_channel_namespace

- **Route**: `POST /v2/apis/{apiId}/channelNamespaces`
- **Auth**: `sigv4`
- **Signature**: `def create_channel_namespace(api_id: str, *, body: V2ApisChannelNamespacesRequest | V2ApisChannelNamespacesRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `body` — JSON body
- **Returns (parsed)**: `CreateChannelNamespaceResponse`
- **Returns (raw)**: `ApiResult[CreateChannelNamespaceResponse, CreateChannelNamespaceErrorBody]`
- **Error**: `CreateChannelNamespaceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `ServiceQuotaExceededException` [402] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2ApisChannelNamespacesRequest` | `amazon_app_sync/models/v2_apis_channel_namespaces_request.py` |
| `V2ApisChannelNamespacesRequestDict` | `amazon_app_sync/models/v2_apis_channel_namespaces_request.py` |
| `CreateChannelNamespaceResponse` | `amazon_app_sync/models/create_channel_namespace_response.py` |
| `CreateChannelNamespaceErrorBody` | `amazon_app_sync/errors/create_channel_namespace_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `ServiceQuotaExceededException` | `amazon_app_sync/models/service_quota_exceeded_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.channelnamespaces.delete_channel_namespace

- **Route**: `DELETE /v2/apis/{apiId}/channelNamespaces/{name}`
- **Auth**: `sigv4`
- **Signature**: `def delete_channel_namespace(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `name`
- **Params**: `api_id` — path `apiId` · `name` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DeleteChannelNamespaceErrorBody]`
- **Error**: `DeleteChannelNamespaceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteChannelNamespaceErrorBody` | `amazon_app_sync/errors/delete_channel_namespace_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.channelnamespaces.get_channel_namespace

- **Route**: `GET /v2/apis/{apiId}/channelNamespaces/{name}`
- **Auth**: `sigv4`
- **Signature**: `def get_channel_namespace(api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `name`
- **Params**: `api_id` — path `apiId` · `name` — path
- **Returns (parsed)**: `GetChannelNamespaceResponse`
- **Returns (raw)**: `ApiResult[GetChannelNamespaceResponse, GetChannelNamespaceErrorBody]`
- **Error**: `GetChannelNamespaceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetChannelNamespaceResponse` | `amazon_app_sync/models/get_channel_namespace_response.py` |
| `GetChannelNamespaceErrorBody` | `amazon_app_sync/errors/get_channel_namespace_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.channelnamespaces.list_channel_namespaces

- **Route**: `GET /v2/apis/{apiId}/channelNamespaces`
- **Auth**: `sigv4`
- **Signature**: `def list_channel_namespaces(api_id: str, *, next_token: str | None = None, max_results: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`
- **Params**: `api_id` — path `apiId` · `next_token` — query `nextToken` · `max_results` — query `maxResults`
- **Returns (parsed)**: `ListChannelNamespacesResponse`
- **Returns (raw)**: `ApiResult[ListChannelNamespacesResponse, ListChannelNamespacesErrorBody]`
- **Error**: `ListChannelNamespacesErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `NotFoundException` [404] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListChannelNamespacesResponse` | `amazon_app_sync/models/list_channel_namespaces_response.py` |
| `ListChannelNamespacesErrorBody` | `amazon_app_sync/errors/list_channel_namespaces_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

### client.channelnamespaces.update_channel_namespace

- **Route**: `POST /v2/apis/{apiId}/channelNamespaces/{name}`
- **Auth**: `sigv4`
- **Signature**: `def update_channel_namespace(api_id: str, name: str, *, body: V2ApisChannelNamespacesRequest1 | V2ApisChannelNamespacesRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_id`, `name`
- **Params**: `api_id` — path `apiId` · `name` — path · `body` — JSON body
- **Returns (parsed)**: `UpdateChannelNamespaceResponse`
- **Returns (raw)**: `ApiResult[UpdateChannelNamespaceResponse, UpdateChannelNamespaceErrorBody]`
- **Error**: `UpdateChannelNamespaceErrorBody` — **Case A (typed)**
- **Error arms**: `BadRequestException` [400] · `UnauthorizedException` [401] · `AccessDeniedException` [403] · `NotFoundException` [404] · `ConcurrentModificationException` [409] · `InternalFailureException` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V2ApisChannelNamespacesRequest1` | `amazon_app_sync/models/v2_apis_channel_namespaces_request1.py` |
| `V2ApisChannelNamespacesRequest1Dict` | `amazon_app_sync/models/v2_apis_channel_namespaces_request1.py` |
| `UpdateChannelNamespaceResponse` | `amazon_app_sync/models/update_channel_namespace_response.py` |
| `UpdateChannelNamespaceErrorBody` | `amazon_app_sync/errors/update_channel_namespace_error.py` |
| `BadRequestException` | `amazon_app_sync/models/bad_request_exception.py` |
| `UnauthorizedException` | `amazon_app_sync/models/unauthorized_exception.py` |
| `AccessDeniedException` | `amazon_app_sync/models/access_denied_exception.py` |
| `NotFoundException` | `amazon_app_sync/models/not_found_exception.py` |
| `ConcurrentModificationException` | `amazon_app_sync/models/concurrent_modification_exception.py` |
| `InternalFailureException` | `amazon_app_sync/models/internal_failure_exception.py` |

