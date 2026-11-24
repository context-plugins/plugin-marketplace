<!-- Generated file — do not edit; regenerated with the SDK. -->

# Workspaces — operations

Accessor: `client.workspaces` · Source: `audioscrape/apis/workspaces.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workspaces.get_workspace

- **Route**: `GET /api/workspaces/{workspace}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_workspace(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `WorkspaceDetail`
- **Returns (raw)**: `ApiResult[WorkspaceDetail, GetWorkspaceErrorBody]`
- **Error**: `GetWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceDetail` | `audioscrape/models/workspace_detail.py` |
| `GetWorkspaceErrorBody` | `audioscrape/errors/get_workspace_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.workspaces.list_workspace_datasets

- **Route**: `GET /api/workspaces/{workspace}/datasets`
- **Auth**: `bearer_auth`
- **Signature**: `def list_workspace_datasets(workspace: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `DatasetList`
- **Returns (raw)**: `ApiResult[DatasetList, ListWorkspaceDatasetsErrorBody]`
- **Error**: `ListWorkspaceDatasetsErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DatasetList` | `audioscrape/models/dataset_list.py` |
| `ListWorkspaceDatasetsErrorBody` | `audioscrape/errors/list_workspace_datasets_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.workspaces.list_workspaces

- **Route**: `GET /api/workspaces`
- **Auth**: `bearer_auth`
- **Signature**: `def list_workspaces(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `WorkspaceList`
- **Returns (raw)**: `ApiResult[WorkspaceList, ListWorkspacesErrorBody]`
- **Error**: `ListWorkspacesErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 402, 403, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `WorkspaceList` | `audioscrape/models/workspace_list.py` |
| `ListWorkspacesErrorBody` | `audioscrape/errors/list_workspaces_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

