<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `google_cloud_storage_transfer_service/apis/projects.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.storagetransfer_projects_agent_pools_create

- **Route**: `POST /v1/projects/{projectsId}/agentPools`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_projects_agent_pools_create(projects_id: str, body: AgentPool | AgentPoolDict, *, agent_pool_id: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `agent_pool_id` — query `agentPoolId` · `body` — JSON body
- **Returns (parsed)**: `AgentPool`
- **Returns (raw)**: `ApiResult[AgentPool, StoragetransferProjectsAgentPoolsCreateErrorBody]`
- **Error**: `StoragetransferProjectsAgentPoolsCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AgentPool` | `google_cloud_storage_transfer_service/models/agent_pool.py` |
| `AgentPoolDict` | `google_cloud_storage_transfer_service/models/agent_pool.py` |
| `StoragetransferProjectsAgentPoolsCreateErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_create_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.projects.storagetransfer_projects_agent_pools_delete

- **Route**: `DELETE /v1/projects/{projectsId}/agentPools/{agentPoolsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_projects_agent_pools_delete(projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `agent_pools_id`
- **Params**: `projects_id` — path `projectsId` · `agent_pools_id` — path `agentPoolsId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, StoragetransferProjectsAgentPoolsDeleteErrorBody]`
- **Error**: `StoragetransferProjectsAgentPoolsDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoragetransferProjectsAgentPoolsDeleteErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_delete_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.projects.storagetransfer_projects_agent_pools_get

- **Route**: `GET /v1/projects/{projectsId}/agentPools/{agentPoolsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_projects_agent_pools_get(projects_id: str, agent_pools_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `agent_pools_id`
- **Params**: `projects_id` — path `projectsId` · `agent_pools_id` — path `agentPoolsId`
- **Returns (parsed)**: `AgentPool`
- **Returns (raw)**: `ApiResult[AgentPool, StoragetransferProjectsAgentPoolsGetErrorBody]`
- **Error**: `StoragetransferProjectsAgentPoolsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AgentPool` | `google_cloud_storage_transfer_service/models/agent_pool.py` |
| `StoragetransferProjectsAgentPoolsGetErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_get_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.projects.storagetransfer_projects_agent_pools_list

- **Route**: `GET /v1/projects/{projectsId}/agentPools`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_projects_agent_pools_list(projects_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListAgentPoolsResponse`
- **Returns (raw)**: `ApiResult[ListAgentPoolsResponse, StoragetransferProjectsAgentPoolsListErrorBody]`
- **Error**: `StoragetransferProjectsAgentPoolsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListAgentPoolsResponse` | `google_cloud_storage_transfer_service/models/list_agent_pools_response.py` |
| `StoragetransferProjectsAgentPoolsListErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_list_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

### client.projects.storagetransfer_projects_agent_pools_patch

- **Route**: `PATCH /v1/projects/{projectsId}/agentPools/{agentPoolsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def storagetransfer_projects_agent_pools_patch(projects_id: str, agent_pools_id: str, body: AgentPool | AgentPoolDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `agent_pools_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `agent_pools_id` — path `agentPoolsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `AgentPool`
- **Returns (raw)**: `ApiResult[AgentPool, StoragetransferProjectsAgentPoolsPatchErrorBody]`
- **Error**: `StoragetransferProjectsAgentPoolsPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AgentPool` | `google_cloud_storage_transfer_service/models/agent_pool.py` |
| `AgentPoolDict` | `google_cloud_storage_transfer_service/models/agent_pool.py` |
| `StoragetransferProjectsAgentPoolsPatchErrorBody` | `google_cloud_storage_transfer_service/errors/storagetransfer_projects_agent_pools_patch_error.py` |
| `GoogleRpcError` | `google_cloud_storage_transfer_service/models/google_rpc_error.py` |

