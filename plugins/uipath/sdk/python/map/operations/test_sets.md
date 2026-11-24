<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestSets — operations

Accessor: `client.test_sets` · Source: `ui_path/apis/test_sets.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.test_sets.create_test_set

- **Route**: `POST /api/v2/projects/{projectId}/testsets`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def create_test_set(project_id: str, body: CreateTestSetRequest | CreateTestSetRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `body` — JSON body
- **Returns (parsed)**: `TestSet`
- **Returns (raw)**: `ApiResult[TestSet, CreateTestSetErrorBody]`
- **Error**: `CreateTestSetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTestSetRequest` | `ui_path/models/create_test_set_request.py` |
| `CreateTestSetRequestDict` | `ui_path/models/create_test_set_request.py` |
| `TestSet` | `ui_path/models/test_set.py` |
| `CreateTestSetErrorBody` | `ui_path/errors/create_test_set_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

### client.test_sets.list_test_sets

- **Route**: `GET /api/v2/projects/{projectId}/testsets`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def list_test_sets(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId` · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `TestSetListResponse`
- **Returns (raw)**: `ApiResult[TestSetListResponse, ListTestSetsErrorBody]`
- **Error**: `ListTestSetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestSetListResponse` | `ui_path/models/test_set_list_response.py` |
| `ListTestSetsErrorBody` | `ui_path/errors/list_test_sets_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

