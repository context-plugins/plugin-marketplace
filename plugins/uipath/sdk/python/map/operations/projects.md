<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `ui_path/apis/projects.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.create_project

- **Route**: `POST /api/v2/projects`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def create_project(body: CreateProjectRequest | CreateProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ProjectUiPathTestManagerProjectsApi`
- **Returns (raw)**: `ApiResult[ProjectUiPathTestManagerProjectsApi, CreateProjectErrorBody]`
- **Error**: `CreateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateProjectRequest` | `ui_path/models/create_project_request.py` |
| `CreateProjectRequestDict` | `ui_path/models/create_project_request.py` |
| `ProjectUiPathTestManagerProjectsApi` | `ui_path/models/project_ui_path_test_manager_projects_api.py` |
| `CreateProjectErrorBody` | `ui_path/errors/create_project_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

### client.projects.get_project

- **Route**: `GET /api/v2/projects/{projectId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def get_project(project_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId`
- **Returns (parsed)**: `ProjectUiPathTestManagerProjectsApi`
- **Returns (raw)**: `ApiResult[ProjectUiPathTestManagerProjectsApi, GetProjectErrorBody]`
- **Error**: `GetProjectErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectUiPathTestManagerProjectsApi` | `ui_path/models/project_ui_path_test_manager_projects_api.py` |
| `GetProjectErrorBody` | `ui_path/errors/get_project_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

### client.projects.list_projects2

- **Route**: `GET /api/v2/projects`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def list_projects2(*, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `ProjectListResponse`
- **Returns (raw)**: `ApiResult[ProjectListResponse, ListProjects2ErrorBody]`
- **Error**: `ListProjects2ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectListResponse` | `ui_path/models/project_list_response.py` |
| `ListProjects2ErrorBody` | `ui_path/errors/list_projects2_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

