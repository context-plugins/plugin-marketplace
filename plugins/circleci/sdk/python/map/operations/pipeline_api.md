<!-- Generated file — do not edit; regenerated with the SDK. -->

# PipelineApi — operations

Accessor: `client.pipeline_api` · Source: `circle_ci/apis/pipeline_api.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.pipeline_api.continue_pipeline

- **Route**: `POST /pipeline/continue`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def continue_pipeline(body: PipelineContinueRequest | PipelineContinueRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, ContinuePipelineErrorBody]`
- **Error**: `ContinuePipelineErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineContinueRequest` | `circle_ci/models/pipeline_continue_request.py` |
| `PipelineContinueRequestDict` | `circle_ci/models/pipeline_continue_request.py` |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `ContinuePipelineErrorBody` | `circle_ci/errors/continue_pipeline_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.get_pipeline

- **Route**: `GET /pipeline/{pipeline-id}`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_pipeline(pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pipeline_id`
- **Params**: `pipeline_id` — path `pipeline-id`
- **Returns (parsed)**: `PipelineCircleCiRestApiV2PipelineApi`
- **Returns (raw)**: `ApiResult[PipelineCircleCiRestApiV2PipelineApi, GetPipelineErrorBody]`
- **Error**: `GetPipelineErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineCircleCiRestApiV2PipelineApi` | `circle_ci/models/pipeline_circle_ci_rest_api_v2_pipeline_api.py` |
| `GetPipelineErrorBody` | `circle_ci/errors/get_pipeline_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.get_pipeline_config

- **Route**: `GET /pipeline/{pipeline-id}/config`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def get_pipeline_config(pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pipeline_id`
- **Params**: `pipeline_id` — path `pipeline-id`
- **Returns (parsed)**: `PipelineConfig`
- **Returns (raw)**: `ApiResult[PipelineConfig, GetPipelineConfigErrorBody]`
- **Error**: `GetPipelineConfigErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineConfig` | `circle_ci/models/pipeline_config.py` |
| `GetPipelineConfigErrorBody` | `circle_ci/errors/get_pipeline_config_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.list_my_project_pipelines

- **Route**: `GET /project/{project-slug}/pipeline/mine`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_my_project_pipelines(project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug` · `page_token` — query `page-token`
- **Returns (parsed)**: `PipelineList`
- **Returns (raw)**: `ApiResult[PipelineList, ListMyProjectPipelinesErrorBody]`
- **Error**: `ListMyProjectPipelinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineList` | `circle_ci/models/pipeline_list.py` |
| `ListMyProjectPipelinesErrorBody` | `circle_ci/errors/list_my_project_pipelines_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.list_pipeline_workflows

- **Route**: `GET /pipeline/{pipeline-id}/workflow`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_pipeline_workflows(pipeline_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `pipeline_id`
- **Params**: `pipeline_id` — path `pipeline-id` · `page_token` — query `page-token`
- **Returns (parsed)**: `WorkflowList`
- **Returns (raw)**: `ApiResult[WorkflowList, ListPipelineWorkflowsErrorBody]`
- **Error**: `ListPipelineWorkflowsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkflowList` | `circle_ci/models/workflow_list.py` |
| `ListPipelineWorkflowsErrorBody` | `circle_ci/errors/list_pipeline_workflows_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.list_pipelines

- **Route**: `GET /pipeline`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_pipelines(*, org_slug: str | None = None, mine: bool | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `org_slug` — query `org-slug` · `mine` — query · `page_token` — query `page-token`
- **Returns (parsed)**: `PipelineList`
- **Returns (raw)**: `ApiResult[PipelineList, ListPipelinesErrorBody]`
- **Error**: `ListPipelinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineList` | `circle_ci/models/pipeline_list.py` |
| `ListPipelinesErrorBody` | `circle_ci/errors/list_pipelines_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.list_project_pipelines

- **Route**: `GET /project/{project-slug}/pipeline`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def list_project_pipelines(project_slug: str, *, branch: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug` · `branch` — query · `page_token` — query `page-token`
- **Returns (parsed)**: `PipelineList`
- **Returns (raw)**: `ApiResult[PipelineList, ListProjectPipelinesErrorBody]`
- **Error**: `ListProjectPipelinesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PipelineList` | `circle_ci/models/pipeline_list.py` |
| `ListProjectPipelinesErrorBody` | `circle_ci/errors/list_project_pipelines_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.pipeline_api.trigger_pipeline

- **Route**: `POST /project/{project-slug}/pipeline`
- **Auth**: `api_token`
- **Server**: `default_circle_ci_rest_api_v2_context_api`
- **Signature**: `def trigger_pipeline(project_slug: str, *, body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug` · `body` — JSON body
- **Returns (parsed)**: `PipelineCreation`
- **Returns (raw)**: `ApiResult[PipelineCreation, TriggerPipelineErrorBody]`
- **Error**: `TriggerPipelineErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TriggerPipelineRequest` | `circle_ci/models/trigger_pipeline_request.py` |
| `TriggerPipelineRequestDict` | `circle_ci/models/trigger_pipeline_request.py` |
| `PipelineCreation` | `circle_ci/models/pipeline_creation.py` |
| `TriggerPipelineErrorBody` | `circle_ci/errors/trigger_pipeline_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

