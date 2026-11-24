<!-- Generated file — do not edit; regenerated with the SDK. -->

# Requirements — operations

Accessor: `client.requirements` · Source: `ui_path/apis/requirements.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.requirements.create_requirement

- **Route**: `POST /api/v2/projects/{projectId}/requirements`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def create_requirement(project_id: str, body: CreateRequirementRequest | CreateRequirementRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `body` — JSON body
- **Returns (parsed)**: `Requirement`
- **Returns (raw)**: `ApiResult[Requirement, CreateRequirementErrorBody]`
- **Error**: `CreateRequirementErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateRequirementRequest` | `ui_path/models/create_requirement_request.py` |
| `CreateRequirementRequestDict` | `ui_path/models/create_requirement_request.py` |
| `Requirement` | `ui_path/models/requirement.py` |
| `CreateRequirementErrorBody` | `ui_path/errors/create_requirement_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

### client.requirements.list_requirements

- **Route**: `GET /api/v2/projects/{projectId}/requirements`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def list_requirements(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId` · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `RequirementListResponse`
- **Returns (raw)**: `ApiResult[RequirementListResponse, ListRequirementsErrorBody]`
- **Error**: `ListRequirementsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RequirementListResponse` | `ui_path/models/requirement_list_response.py` |
| `ListRequirementsErrorBody` | `ui_path/errors/list_requirements_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

