<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_build/client.py` · 22 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cloudbuild_projects_locations_connections_create

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_create(projects_id: str, locations_id: str, body: Connection | ConnectionDict, *, connection_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connection_id` — query `connectionId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsConnectionsCreateErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Connection` | `google_cloud_build/models/connection.py` |
| `ConnectionDict` | `google_cloud_build/models/connection.py` |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsConnectionsCreateErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_create_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_delete

- **Route**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_delete(projects_id: str, locations_id: str, connections_id: str, *, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsConnectionsDeleteErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsConnectionsDeleteErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_delete_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_fetch_linkable_repositories

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:fetchLinkableRepositories`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_fetch_linkable_repositories(projects_id: str, locations_id: str, connections_id: str, *, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `FetchLinkableRepositoriesResponse`
- **Returns (raw)**: `ApiResult[FetchLinkableRepositoriesResponse, CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FetchLinkableRepositoriesResponse` | `google_cloud_build/models/fetch_linkable_repositories_response.py` |
| `CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_fetch_linkable_repositories_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_get(projects_id: str, locations_id: str, connections_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId`
- **Returns (parsed)**: `Connection`
- **Returns (raw)**: `ApiResult[Connection, CloudbuildProjectsLocationsConnectionsGetErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Connection` | `google_cloud_build/models/connection.py` |
| `CloudbuildProjectsLocationsConnectionsGetErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_get_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_get_iam_policy

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_get_iam_policy(projects_id: str, locations_id: str, connections_id: str, *, options_requested_policy_version: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `options_requested_policy_version` — query `options.requestedPolicyVersion`
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Policy` | `google_cloud_build/models/policy.py` |
| `CloudbuildProjectsLocationsConnectionsGetIamPolicyErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_list

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_list(projects_id: str, locations_id: str, *, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListConnectionsResponse`
- **Returns (raw)**: `ApiResult[ListConnectionsResponse, CloudbuildProjectsLocationsConnectionsListErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListConnectionsResponse` | `google_cloud_build/models/list_connections_response.py` |
| `CloudbuildProjectsLocationsConnectionsListErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_list_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_patch

- **Route**: `PATCH /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_patch(projects_id: str, locations_id: str, connections_id: str, body: Connection | ConnectionDict, *, allow_missing: bool | None = None, etag: str | None = None, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `allow_missing` — query `allowMissing` · `etag` — query · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsConnectionsPatchErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Connection` | `google_cloud_build/models/connection.py` |
| `ConnectionDict` | `google_cloud_build/models/connection.py` |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsConnectionsPatchErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_patch_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_process_webhook

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections:processWebhook`
- **Auth**: `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_process_webhook(projects_id: str, locations_id: str, body: HttpBody | HttpBodyDict, *, webhook_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `webhook_key` — query `webhookKey` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `HttpBody` | `google_cloud_build/models/http_body.py` |
| `HttpBodyDict` | `google_cloud_build/models/http_body.py` |
| `CloudbuildProjectsLocationsConnectionsProcessWebhookErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_process_webhook_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_access_read_token

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadToken`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_access_read_token(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `repositories_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `repositories_id` — path `repositoriesId` · `body` — JSON body
- **Returns (parsed)**: `FetchReadTokenResponse`
- **Returns (raw)**: `ApiResult[FetchReadTokenResponse, CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FetchReadTokenResponse` | `google_cloud_build/models/fetch_read_token_response.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_access_read_token_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_access_read_write_token

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadWriteToken`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_access_read_write_token(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `repositories_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `repositories_id` — path `repositoriesId` · `body` — JSON body
- **Returns (parsed)**: `FetchReadWriteTokenResponse`
- **Returns (raw)**: `ApiResult[FetchReadWriteTokenResponse, CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `FetchReadWriteTokenResponse` | `google_cloud_build/models/fetch_read_write_token_response.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_access_read_write_token_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_batch_create

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories:batchCreate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_batch_create(projects_id: str, locations_id: str, connections_id: str, body: BatchCreateRepositoriesRequest | BatchCreateRepositoriesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchCreateRepositoriesRequest` | `google_cloud_build/models/batch_create_repositories_request.py` |
| `BatchCreateRepositoriesRequestDict` | `google_cloud_build/models/batch_create_repositories_request.py` |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_batch_create_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_create

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_create(projects_id: str, locations_id: str, connections_id: str, body: Repository | RepositoryDict, *, repository_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `repository_id` — query `repositoryId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Repository` | `google_cloud_build/models/repository.py` |
| `RepositoryDict` | `google_cloud_build/models/repository.py` |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesCreateErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_create_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_delete

- **Route**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_delete(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, *, etag: str | None = None, validate_only: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `repositories_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `repositories_id` — path `repositoriesId` · `etag` — query · `validate_only` — query `validateOnly`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesDeleteErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_delete_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_fetch_git_refs

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:fetchGitRefs`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_fetch_git_refs(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, *, page_size: int | None = None, page_token: str | None = None, ref_type: RefTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `repositories_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `repositories_id` — path `repositoriesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `ref_type` — query `refType`
- **Returns (parsed)**: `FetchGitRefsResponse`
- **Returns (raw)**: `ApiResult[FetchGitRefsResponse, CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RefTypeOrStr` | `google_cloud_build/models/enums/ref_type.py` |
| `FetchGitRefsResponse` | `google_cloud_build/models/fetch_git_refs_response.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_fetch_git_refs_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_get(projects_id: str, locations_id: str, connections_id: str, repositories_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `repositories_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `repositories_id` — path `repositoriesId`
- **Returns (parsed)**: `Repository`
- **Returns (raw)**: `ApiResult[Repository, CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Repository` | `google_cloud_build/models/repository.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesGetErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_get_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_repositories_list

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_repositories_list(projects_id: str, locations_id: str, connections_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, return_partial_success: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `return_partial_success` — query `returnPartialSuccess`
- **Returns (parsed)**: `ListRepositoriesResponse`
- **Returns (raw)**: `ApiResult[ListRepositoriesResponse, CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListRepositoriesResponse` | `google_cloud_build/models/list_repositories_response.py` |
| `CloudbuildProjectsLocationsConnectionsRepositoriesListErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_repositories_list_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_set_iam_policy

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_set_iam_policy(projects_id: str, locations_id: str, connections_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_build/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_build/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_build/models/policy.py` |
| `CloudbuildProjectsLocationsConnectionsSetIamPolicyErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_connections_test_iam_permissions

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_connections_test_iam_permissions(projects_id: str, locations_id: str, connections_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `connections_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `connections_id` — path `connectionsId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody]`
- **Error**: `CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_build/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_build/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_build/models/test_iam_permissions_response.py` |
| `CloudbuildProjectsLocationsConnectionsTestIamPermissionsErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_connections_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, CloudbuildProjectsLocationsGetErrorBody]`
- **Error**: `CloudbuildProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `google_cloud_build/models/location.py` |
| `CloudbuildProjectsLocationsGetErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_list

- **Route**: `GET /v2/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListLocationsResponse`
- **Returns (raw)**: `ApiResult[ListLocationsResponse, CloudbuildProjectsLocationsListErrorBody]`
- **Error**: `CloudbuildProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLocationsResponse` | `google_cloud_build/models/list_locations_response.py` |
| `CloudbuildProjectsLocationsListErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_operations_cancel

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_operations_cancel(projects_id: str, locations_id: str, operations_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CloudbuildProjectsLocationsOperationsCancelErrorBody]`
- **Error**: `CloudbuildProjectsLocationsOperationsCancelErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudbuildProjectsLocationsOperationsCancelErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_operations_cancel_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

### client.cloudbuild_projects_locations_operations_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudbuild_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudbuildProjectsLocationsOperationsGetErrorBody]`
- **Error**: `CloudbuildProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_build/models/operation.py` |
| `CloudbuildProjectsLocationsOperationsGetErrorBody` | `google_cloud_build/errors/cloudbuild_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_build/models/google_rpc_error.py` |

