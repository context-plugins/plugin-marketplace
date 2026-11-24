<!-- Generated file — do not edit; regenerated with the SDK. -->

# DataExport — operations

Accessor: `client.data_export` · Source: `audioscrape/apis/data_export.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.data_export.create_workspace_export

- **Route**: `POST /api/workspaces/{workspace}/export`
- **Auth**: `bearer_auth`
- **Signature**: `def create_workspace_export(workspace: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`
- **Params**: `workspace` — path
- **Returns (parsed)**: `CreateExportJobResponse`
- **Returns (raw)**: `ApiResult[CreateExportJobResponse, CreateWorkspaceExportErrorBody]`
- **Error**: `CreateWorkspaceExportErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateExportJobResponse` | `audioscrape/models/create_export_job_response.py` |
| `CreateWorkspaceExportErrorBody` | `audioscrape/errors/create_workspace_export_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

### client.data_export.get_workspace_export

- **Route**: `GET /api/workspaces/{workspace}/export/{job_id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_workspace_export(workspace: int, job_id: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `workspace`, `job_id`
- **Params**: `workspace` — path · `job_id` — path
- **Returns (parsed)**: `ExportJobStatus`
- **Returns (raw)**: `ApiResult[ExportJobStatus, GetWorkspaceExportErrorBody]`
- **Error**: `GetWorkspaceExportErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorBody` [401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ExportJobStatus` | `audioscrape/models/export_job_status.py` |
| `GetWorkspaceExportErrorBody` | `audioscrape/errors/get_workspace_export_error.py` |
| `ApiErrorBody` | `audioscrape/models/api_error_body.py` |

