<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestExecutions — operations

Accessor: `client.test_executions` · Source: `ui_path/apis/test_executions.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.test_executions.list_test_executions

- **Route**: `GET /api/v2/projects/{projectId}/testexecutions`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def list_test_executions(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId` · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `TestExecutionListResponse`
- **Returns (raw)**: `ApiResult[TestExecutionListResponse, ListTestExecutionsErrorBody]`
- **Error**: `ListTestExecutionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestExecutionListResponse` | `ui_path/models/test_execution_list_response.py` |
| `ListTestExecutionsErrorBody` | `ui_path/errors/list_test_executions_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

