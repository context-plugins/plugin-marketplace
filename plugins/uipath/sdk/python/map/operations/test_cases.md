<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestCases — operations

Accessor: `client.test_cases` · Source: `ui_path/apis/test_cases.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.test_cases.create_test_case

- **Route**: `POST /api/v2/projects/{projectId}/testcases`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def create_test_case(project_id: str, body: CreateTestCaseRequest | CreateTestCaseRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `body`
- **Params**: `project_id` — path `projectId` · `body` — JSON body
- **Returns (parsed)**: `TestCase`
- **Returns (raw)**: `ApiResult[TestCase, CreateTestCaseErrorBody]`
- **Error**: `CreateTestCaseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateTestCaseRequest` | `ui_path/models/create_test_case_request.py` |
| `CreateTestCaseRequestDict` | `ui_path/models/create_test_case_request.py` |
| `TestCase` | `ui_path/models/test_case.py` |
| `CreateTestCaseErrorBody` | `ui_path/errors/create_test_case_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

### client.test_cases.get_test_case

- **Route**: `GET /api/v2/projects/{projectId}/testcases/{testCaseId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def get_test_case(project_id: str, test_case_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`, `test_case_id`
- **Params**: `project_id` — path `projectId` · `test_case_id` — path `testCaseId`
- **Returns (parsed)**: `TestCase`
- **Returns (raw)**: `ApiResult[TestCase, GetTestCaseErrorBody]`
- **Error**: `GetTestCaseErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestCase` | `ui_path/models/test_case.py` |
| `GetTestCaseErrorBody` | `ui_path/errors/get_test_case_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

### client.test_cases.list_test_cases

- **Route**: `GET /api/v2/projects/{projectId}/testcases`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_test_manager_projects_api`
- **Signature**: `def list_test_cases(project_id: str, *, page: int | None = 0, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_id`
- **Params**: `project_id` — path `projectId` · `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `TestCaseListResponse`
- **Returns (raw)**: `ApiResult[TestCaseListResponse, ListTestCasesErrorBody]`
- **Error**: `ListTestCasesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathTestManagerProjectsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TestCaseListResponse` | `ui_path/models/test_case_list_response.py` |
| `ListTestCasesErrorBody` | `ui_path/errors/list_test_cases_error.py` |
| `ErrorResponseUiPathTestManagerProjectsApi` | `ui_path/models/error_response_ui_path_test_manager_projects_api.py` |

