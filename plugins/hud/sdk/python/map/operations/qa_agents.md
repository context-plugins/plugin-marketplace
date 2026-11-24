<!-- Generated file — do not edit; regenerated with the SDK. -->

# QaAgents — operations

Accessor: `client.qa_agents` · Source: `hud/apis/qa_agents.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.qa_agents.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get

- **Route**: `GET /v2/qa-agents/results/{result_id}/rollout`
- **Signature**: `def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(result_id: UUID, *, since_seq: int | None = -1, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `result_id`
- **Params**: `result_id` — path · `since_seq` — query · `limit` — query
- **Returns (parsed)**: `TraceEventsResponse`
- **Returns (raw)**: `ApiResult[TraceEventsResponse, GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody]`
- **Error**: `GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceEventsResponse` | `hud/models/trace_events_response.py` |
| `GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody` | `hud/errors/get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.qa_agents.get_qa_agent_v2_qa_agents_agent_id_get

- **Route**: `GET /v2/qa-agents/{agent_id}`
- **Signature**: `def get_qa_agent_v2_qa_agents_agent_id_get(agent_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `agent_id`
- **Params**: `agent_id` — path
- **Returns (parsed)**: `QaAgentResponse`
- **Returns (raw)**: `ApiResult[QaAgentResponse, GetQaAgentV2QaAgentsAgentIdGetErrorBody]`
- **Error**: `GetQaAgentV2QaAgentsAgentIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QaAgentResponse` | `hud/models/qa_agent_response.py` |
| `GetQaAgentV2QaAgentsAgentIdGetErrorBody` | `hud/errors/get_qa_agent_v2_qa_agents_agent_id_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.qa_agents.list_qa_agents_v2_qa_agents_get

- **Route**: `GET /v2/qa-agents`
- **Signature**: `def list_qa_agents_v2_qa_agents_get(*, subject_type: QaAgentSubjectTypeOrStr | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subject_type` — query · `limit` — query · `offset` — query
- **Returns (parsed)**: `PaginatedResponseQaAgentResponse`
- **Returns (raw)**: `ApiResult[PaginatedResponseQaAgentResponse, ListQaAgentsV2QaAgentsGetErrorBody]`
- **Error**: `ListQaAgentsV2QaAgentsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QaAgentSubjectTypeOrStr` | `hud/models/enums/qa_agent_subject_type.py` |
| `PaginatedResponseQaAgentResponse` | `hud/models/paginated_response_qa_agent_response.py` |
| `ListQaAgentsV2QaAgentsGetErrorBody` | `hud/errors/list_qa_agents_v2_qa_agents_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.qa_agents.list_resource_qa_agent_results_v2_qa_agents_results_resources_get

- **Route**: `GET /v2/qa-agents/results/resources`
- **Signature**: `def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(*, subject_type: CheckSubjectTypeOrStr | None = None, subject_ids: list[UUID] | None = None, result_ids: list[UUID] | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `subject_type` — query · `subject_ids` — query · `result_ids` — query
- **Returns (parsed)**: `list[QaAgentResourceResultDetail]`
- **Returns (raw)**: `ApiResult[list[QaAgentResourceResultDetail], ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody]`
- **Error**: `ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckSubjectTypeOrStr` | `hud/models/enums/check_subject_type.py` |
| `QaAgentResourceResultDetail` | `hud/models/qa_agent_resource_result_detail.py` |
| `ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody` | `hud/errors/list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.qa_agents.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post

- **Route**: `POST /v2/qa-agents/{agent_id}/run-resources`
- **Signature**: `def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(agent_id: UUID, body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `agent_id`, `body`
- **Params**: `agent_id` — path · `body` — JSON body
- **Returns (parsed)**: `list[QaAgentResultResponse]`
- **Returns (raw)**: `ApiResult[list[QaAgentResultResponse], RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody]`
- **Error**: `RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `QaAgentResourceRunRequest` | `hud/models/qa_agent_resource_run_request.py` |
| `QaAgentResourceRunRequestDict` | `hud/models/qa_agent_resource_run_request.py` |
| `QaAgentResultResponse` | `hud/models/qa_agent_result_response.py` |
| `RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody` | `hud/errors/run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

