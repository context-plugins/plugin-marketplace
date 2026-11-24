<!-- Generated file — do not edit; regenerated with the SDK. -->

# Discovery — operations

Accessor: `client.discovery` · Source: `ui_path/apis/discovery.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.discovery.list_classifiers

- **Route**: `GET /projects/{projectId}/classifiers`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def list_classifiers(project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId` · `api_version` — query `api-version`
- **Returns (parsed)**: `ProjectsClassifiersResponse`
- **Returns (raw)**: `ApiResult[ProjectsClassifiersResponse, ListClassifiersErrorBody]`
- **Error**: `ListClassifiersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectsClassifiersResponse` | `ui_path/models/projects_classifiers_response.py` |
| `ListClassifiersErrorBody` | `ui_path/errors/list_classifiers_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.discovery.list_extractors

- **Route**: `GET /projects/{projectId}/extractors`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def list_extractors(project_id: str, *, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId` · `api_version` — query `api-version`
- **Returns (parsed)**: `ProjectsExtractorsResponse`
- **Returns (raw)**: `ApiResult[ProjectsExtractorsResponse, ListExtractorsErrorBody]`
- **Error**: `ListExtractorsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectsExtractorsResponse` | `ui_path/models/projects_extractors_response.py` |
| `ListExtractorsErrorBody` | `ui_path/errors/list_extractors_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.discovery.list_projects

- **Route**: `GET /projects`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_document_understanding_classification_api`
- **Signature**: `def list_projects(*, api_version: str | None = "1", request_options: RequestOptionsOrDict | None = None)`
- **Params**: `api_version` — query `api-version`
- **Returns (parsed)**: `ProjectsResponse`
- **Returns (raw)**: `ApiResult[ProjectsResponse, ListProjectsErrorBody]`
- **Error**: `ListProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectsResponse` | `ui_path/models/projects_response.py` |
| `ListProjectsErrorBody` | `ui_path/errors/list_projects_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

