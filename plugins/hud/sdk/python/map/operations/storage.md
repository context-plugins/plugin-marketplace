<!-- Generated file — do not edit; regenerated with the SDK. -->

# Storage — operations

Accessor: `client.storage` · Source: `hud/apis/storage.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.storage.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get

- **Route**: `GET /v2/storage/traces/{trace_id}/artifacts`
- **Signature**: `def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceStorageObjectListResponse`
- **Returns (raw)**: `ApiResult[TraceStorageObjectListResponse, ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody]`
- **Error**: `ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceStorageObjectListResponse` | `hud/models/trace_storage_object_list_response.py` |
| `ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody` | `hud/errors/list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.storage.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get

- **Route**: `GET /v2/storage/traces/{trace_id}/workspace/changes`
- **Signature**: `def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceWorkspaceChangesResponse`
- **Returns (raw)**: `ApiResult[TraceWorkspaceChangesResponse, TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody]`
- **Error**: `TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceWorkspaceChangesResponse` | `hud/models/trace_workspace_changes_response.py` |
| `TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody` | `hud/errors/trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.storage.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get

- **Route**: `GET /v2/storage/traces/{trace_id}/workspace/files`
- **Signature**: `def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `trace_id`
- **Params**: `trace_id` — path
- **Returns (parsed)**: `TraceWorkspaceFilesResponse`
- **Returns (raw)**: `ApiResult[TraceWorkspaceFilesResponse, TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody]`
- **Error**: `TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TraceWorkspaceFilesResponse` | `hud/models/trace_workspace_files_response.py` |
| `TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody` | `hud/errors/trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

