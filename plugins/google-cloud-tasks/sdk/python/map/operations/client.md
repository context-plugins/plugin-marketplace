<!-- Generated file — do not edit; regenerated with the SDK. -->

# Client — operations

Accessor: `client` · Source: `google_cloud_tasks/client.py` · 24 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.cloudtasks_projects_locations_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_get(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `Location`
- **Returns (raw)**: `ApiResult[Location, CloudtasksProjectsLocationsGetErrorBody]`
- **Error**: `CloudtasksProjectsLocationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Location` | `google_cloud_tasks/models/location.py` |
| `CloudtasksProjectsLocationsGetErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_get_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_get_cmek_config

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/cmekConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_get_cmek_config(projects_id: str, locations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId`
- **Returns (parsed)**: `CmekConfig`
- **Returns (raw)**: `ApiResult[CmekConfig, CloudtasksProjectsLocationsGetCmekConfigErrorBody]`
- **Error**: `CloudtasksProjectsLocationsGetCmekConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CmekConfig` | `google_cloud_tasks/models/cmek_config.py` |
| `CloudtasksProjectsLocationsGetCmekConfigErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_get_cmek_config_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_list

- **Route**: `GET /v2/projects/{projectsId}/locations`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_list(projects_id: str, *, extra_location_types: list[str] | None = None, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`
- **Params**: `projects_id` — path `projectsId` · `extra_location_types` — query `extraLocationTypes` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListLocationsResponse`
- **Returns (raw)**: `ApiResult[ListLocationsResponse, CloudtasksProjectsLocationsListErrorBody]`
- **Error**: `CloudtasksProjectsLocationsListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListLocationsResponse` | `google_cloud_tasks/models/list_locations_response.py` |
| `CloudtasksProjectsLocationsListErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_list_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_operations_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_operations_get(projects_id: str, locations_id: str, operations_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `operations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `operations_id` — path `operationsId`
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudtasksProjectsLocationsOperationsGetErrorBody]`
- **Error**: `CloudtasksProjectsLocationsOperationsGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Operation` | `google_cloud_tasks/models/operation.py` |
| `CloudtasksProjectsLocationsOperationsGetErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_operations_get_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_create

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_create(projects_id: str, locations_id: str, body: Queue | QueueDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `body` — JSON body
- **Returns (parsed)**: `Queue`
- **Returns (raw)**: `ApiResult[Queue, CloudtasksProjectsLocationsQueuesCreateErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Queue` | `google_cloud_tasks/models/queue.py` |
| `QueueDict` | `google_cloud_tasks/models/queue.py` |
| `CloudtasksProjectsLocationsQueuesCreateErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_create_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_delete

- **Route**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_delete(projects_id: str, locations_id: str, queues_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CloudtasksProjectsLocationsQueuesDeleteErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesDeleteErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_delete_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_get(projects_id: str, locations_id: str, queues_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId`
- **Returns (parsed)**: `Queue`
- **Returns (raw)**: `ApiResult[Queue, CloudtasksProjectsLocationsQueuesGetErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Queue` | `google_cloud_tasks/models/queue.py` |
| `CloudtasksProjectsLocationsQueuesGetErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_get_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_get_iam_policy

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:getIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_get_iam_policy(projects_id: str, locations_id: str, queues_id: str, body: GetIamPolicyRequest | GetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetIamPolicyRequest` | `google_cloud_tasks/models/get_iam_policy_request.py` |
| `GetIamPolicyRequestDict` | `google_cloud_tasks/models/get_iam_policy_request.py` |
| `Policy` | `google_cloud_tasks/models/policy.py` |
| `CloudtasksProjectsLocationsQueuesGetIamPolicyErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_get_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_list

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_list(projects_id: str, locations_id: str, *, filter_: str | None = None, page_size: int | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `filter_` — query `filter` · `page_size` — query `pageSize` · `page_token` — query `pageToken`
- **Returns (parsed)**: `ListQueuesResponse`
- **Returns (raw)**: `ApiResult[ListQueuesResponse, CloudtasksProjectsLocationsQueuesListErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ListQueuesResponse` | `google_cloud_tasks/models/list_queues_response.py` |
| `CloudtasksProjectsLocationsQueuesListErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_list_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_patch

- **Route**: `PATCH /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_patch(projects_id: str, locations_id: str, queues_id: str, body: Queue | QueueDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `Queue`
- **Returns (raw)**: `ApiResult[Queue, CloudtasksProjectsLocationsQueuesPatchErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesPatchErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Queue` | `google_cloud_tasks/models/queue.py` |
| `QueueDict` | `google_cloud_tasks/models/queue.py` |
| `CloudtasksProjectsLocationsQueuesPatchErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_patch_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_pause

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:pause`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_pause(projects_id: str, locations_id: str, queues_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Queue`
- **Returns (raw)**: `ApiResult[Queue, CloudtasksProjectsLocationsQueuesPauseErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesPauseErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Queue` | `google_cloud_tasks/models/queue.py` |
| `CloudtasksProjectsLocationsQueuesPauseErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_pause_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_purge

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:purge`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_purge(projects_id: str, locations_id: str, queues_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Queue`
- **Returns (raw)**: `ApiResult[Queue, CloudtasksProjectsLocationsQueuesPurgeErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesPurgeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Queue` | `google_cloud_tasks/models/queue.py` |
| `CloudtasksProjectsLocationsQueuesPurgeErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_purge_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_resume

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:resume`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_resume(projects_id: str, locations_id: str, queues_id: str, body: Any, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Queue`
- **Returns (raw)**: `ApiResult[Queue, CloudtasksProjectsLocationsQueuesResumeErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesResumeErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Queue` | `google_cloud_tasks/models/queue.py` |
| `CloudtasksProjectsLocationsQueuesResumeErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_resume_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_set_iam_policy

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:setIamPolicy`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_set_iam_policy(projects_id: str, locations_id: str, queues_id: str, body: SetIamPolicyRequest | SetIamPolicyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Policy`
- **Returns (raw)**: `ApiResult[Policy, CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SetIamPolicyRequest` | `google_cloud_tasks/models/set_iam_policy_request.py` |
| `SetIamPolicyRequestDict` | `google_cloud_tasks/models/set_iam_policy_request.py` |
| `Policy` | `google_cloud_tasks/models/policy.py` |
| `CloudtasksProjectsLocationsQueuesSetIamPolicyErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_set_iam_policy_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_batch_create

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchCreate`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_batch_create(projects_id: str, locations_id: str, queues_id: str, body: BatchCreateTasksRequest | BatchCreateTasksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchCreateTasksRequest` | `google_cloud_tasks/models/batch_create_tasks_request.py` |
| `BatchCreateTasksRequestDict` | `google_cloud_tasks/models/batch_create_tasks_request.py` |
| `Operation` | `google_cloud_tasks/models/operation.py` |
| `CloudtasksProjectsLocationsQueuesTasksBatchCreateErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_batch_create_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_batch_delete

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchDelete`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_batch_delete(projects_id: str, locations_id: str, queues_id: str, body: BatchDeleteTasksRequest | BatchDeleteTasksRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Operation`
- **Returns (raw)**: `ApiResult[Operation, CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BatchDeleteTasksRequest` | `google_cloud_tasks/models/batch_delete_tasks_request.py` |
| `BatchDeleteTasksRequestDict` | `google_cloud_tasks/models/batch_delete_tasks_request.py` |
| `Operation` | `google_cloud_tasks/models/operation.py` |
| `CloudtasksProjectsLocationsQueuesTasksBatchDeleteErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_batch_delete_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_buffer

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{taskId}:buffer`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_buffer(projects_id: str, locations_id: str, queues_id: str, task_id: str, body: BufferTaskRequest | BufferTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `task_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `task_id` — path `taskId` · `body` — JSON body
- **Returns (parsed)**: `BufferTaskResponse`
- **Returns (raw)**: `ApiResult[BufferTaskResponse, CloudtasksProjectsLocationsQueuesTasksBufferErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksBufferErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BufferTaskRequest` | `google_cloud_tasks/models/buffer_task_request.py` |
| `BufferTaskRequestDict` | `google_cloud_tasks/models/buffer_task_request.py` |
| `BufferTaskResponse` | `google_cloud_tasks/models/buffer_task_response.py` |
| `CloudtasksProjectsLocationsQueuesTasksBufferErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_buffer_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_create

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_create(projects_id: str, locations_id: str, queues_id: str, body: CreateTaskRequest | CreateTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `Task`
- **Returns (raw)**: `ApiResult[Task, CloudtasksProjectsLocationsQueuesTasksCreateErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksCreateErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTaskRequest` | `google_cloud_tasks/models/create_task_request.py` |
| `CreateTaskRequestDict` | `google_cloud_tasks/models/create_task_request.py` |
| `Task` | `google_cloud_tasks/models/task.py` |
| `CloudtasksProjectsLocationsQueuesTasksCreateErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_create_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_delete

- **Route**: `DELETE /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_delete(projects_id: str, locations_id: str, queues_id: str, tasks_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `tasks_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `tasks_id` — path `tasksId`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CloudtasksProjectsLocationsQueuesTasksDeleteErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_delete_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_get

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_get(projects_id: str, locations_id: str, queues_id: str, tasks_id: str, *, response_view: ResponseView2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `tasks_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `tasks_id` — path `tasksId` · `response_view` — query `responseView`
- **Returns (parsed)**: `Task`
- **Returns (raw)**: `ApiResult[Task, CloudtasksProjectsLocationsQueuesTasksGetErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksGetErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponseView2OrStr` | `google_cloud_tasks/models/enums/response_view2.py` |
| `Task` | `google_cloud_tasks/models/task.py` |
| `CloudtasksProjectsLocationsQueuesTasksGetErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_get_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_list

- **Route**: `GET /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_list(projects_id: str, locations_id: str, queues_id: str, *, page_size: int | None = None, page_token: str | None = None, response_view: ResponseView2OrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `page_size` — query `pageSize` · `page_token` — query `pageToken` · `response_view` — query `responseView`
- **Returns (parsed)**: `ListTasksResponse`
- **Returns (raw)**: `ApiResult[ListTasksResponse, CloudtasksProjectsLocationsQueuesTasksListErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksListErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ResponseView2OrStr` | `google_cloud_tasks/models/enums/response_view2.py` |
| `ListTasksResponse` | `google_cloud_tasks/models/list_tasks_response.py` |
| `CloudtasksProjectsLocationsQueuesTasksListErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_list_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_tasks_run

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}:run`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_tasks_run(projects_id: str, locations_id: str, queues_id: str, tasks_id: str, body: RunTaskRequest | RunTaskRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `tasks_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `tasks_id` — path `tasksId` · `body` — JSON body
- **Returns (parsed)**: `Task`
- **Returns (raw)**: `ApiResult[Task, CloudtasksProjectsLocationsQueuesTasksRunErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTasksRunErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RunTaskRequest` | `google_cloud_tasks/models/run_task_request.py` |
| `RunTaskRequestDict` | `google_cloud_tasks/models/run_task_request.py` |
| `Task` | `google_cloud_tasks/models/task.py` |
| `CloudtasksProjectsLocationsQueuesTasksRunErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_tasks_run_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_queues_test_iam_permissions

- **Route**: `POST /v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:testIamPermissions`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_queues_test_iam_permissions(projects_id: str, locations_id: str, queues_id: str, body: TestIamPermissionsRequest | TestIamPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `queues_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `queues_id` — path `queuesId` · `body` — JSON body
- **Returns (parsed)**: `TestIamPermissionsResponse`
- **Returns (raw)**: `ApiResult[TestIamPermissionsResponse, CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody]`
- **Error**: `CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestIamPermissionsRequest` | `google_cloud_tasks/models/test_iam_permissions_request.py` |
| `TestIamPermissionsRequestDict` | `google_cloud_tasks/models/test_iam_permissions_request.py` |
| `TestIamPermissionsResponse` | `google_cloud_tasks/models/test_iam_permissions_response.py` |
| `CloudtasksProjectsLocationsQueuesTestIamPermissionsErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_queues_test_iam_permissions_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

### client.cloudtasks_projects_locations_update_cmek_config

- **Route**: `PATCH /v2/projects/{projectsId}/locations/{locationsId}/cmekConfig`
- **Auth**: `oauth2` OR `api_key`
- **Server**: `default`
- **Signature**: `def cloudtasks_projects_locations_update_cmek_config(projects_id: str, locations_id: str, body: CmekConfig | CmekConfigDict, *, update_mask: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `projects_id`, `locations_id`, `body`
- **Params**: `projects_id` — path `projectsId` · `locations_id` — path `locationsId` · `update_mask` — query `updateMask` · `body` — JSON body
- **Returns (parsed)**: `CmekConfig`
- **Returns (raw)**: `ApiResult[CmekConfig, CloudtasksProjectsLocationsUpdateCmekConfigErrorBody]`
- **Error**: `CloudtasksProjectsLocationsUpdateCmekConfigErrorBody` — **Case A (typed)**
- **Error arms**: `GoogleRpcError` [4XX] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CmekConfig` | `google_cloud_tasks/models/cmek_config.py` |
| `CmekConfigDict` | `google_cloud_tasks/models/cmek_config.py` |
| `CloudtasksProjectsLocationsUpdateCmekConfigErrorBody` | `google_cloud_tasks/errors/cloudtasks_projects_locations_update_cmek_config_error.py` |
| `GoogleRpcError` | `google_cloud_tasks/models/google_rpc_error.py` |

