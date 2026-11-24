<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `hud/apis/builds.py` · 16 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.builds.build_status_v2_builds_build_id_status_get

- **Route**: `GET /v2/builds/{build_id}/status`
- **Signature**: `def build_status_v2_builds_build_id_status_get(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path
- **Returns (parsed)**: `BuildResponse`
- **Returns (raw)**: `ApiResult[BuildResponse, BuildStatusV2BuildsBuildIdStatusGetErrorBody]`
- **Error**: `BuildStatusV2BuildsBuildIdStatusGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildResponse` | `hud/models/build_response.py` |
| `BuildStatusV2BuildsBuildIdStatusGetErrorBody` | `hud/errors/build_status_v2_builds_build_id_status_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.cancel_build_v2_builds_build_id_cancel_post

- **Route**: `POST /v2/builds/{build_id}/cancel`
- **Signature**: `def cancel_build_v2_builds_build_id_cancel_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path
- **Returns (parsed)**: `BuildResponse`
- **Returns (raw)**: `ApiResult[BuildResponse, CancelBuildV2BuildsBuildIdCancelPostErrorBody]`
- **Error**: `CancelBuildV2BuildsBuildIdCancelPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildResponse` | `hud/models/build_response.py` |
| `CancelBuildV2BuildsBuildIdCancelPostErrorBody` | `hud/errors/cancel_build_v2_builds_build_id_cancel_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.download_build_source_v2_builds_build_id_source_download_get

- **Route**: `GET /v2/builds/{build_id}/source/download`
- **Signature**: `def download_build_source_v2_builds_build_id_source_download_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`, `path`
- **Params**: `build_id` — path · `path` — query
- **Returns (parsed)**: `BuildSourceDownloadResponse`
- **Returns (raw)**: `ApiResult[BuildSourceDownloadResponse, DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody]`
- **Error**: `DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildSourceDownloadResponse` | `hud/models/build_source_download_response.py` |
| `DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody` | `hud/errors/download_build_source_v2_builds_build_id_source_download_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.download_build_workspace_v2_builds_build_id_workspace_download_get

- **Route**: `GET /v2/builds/{build_id}/workspace/download`
- **Signature**: `def download_build_workspace_v2_builds_build_id_workspace_download_get(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody]`
- **Error**: `DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody` | `hud/errors/download_build_workspace_v2_builds_build_id_workspace_download_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.list_build_source_v2_builds_build_id_source_get

- **Route**: `GET /v2/builds/{build_id}/source`
- **Signature**: `def list_build_source_v2_builds_build_id_source_get(build_id: UUID, *, path: str | None = "", cursor: str | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path · `path` — query · `cursor` — query · `limit` — query
- **Returns (parsed)**: `BuildSourceListResponse`
- **Returns (raw)**: `ApiResult[BuildSourceListResponse, ListBuildSourceV2BuildsBuildIdSourceGetErrorBody]`
- **Error**: `ListBuildSourceV2BuildsBuildIdSourceGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildSourceListResponse` | `hud/models/build_source_list_response.py` |
| `ListBuildSourceV2BuildsBuildIdSourceGetErrorBody` | `hud/errors/list_build_source_v2_builds_build_id_source_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.list_build_workspace_v2_builds_build_id_workspace_get

- **Route**: `GET /v2/builds/{build_id}/workspace`
- **Signature**: `def list_build_workspace_v2_builds_build_id_workspace_get(build_id: UUID, *, path: str | None = "", cursor: str | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path · `path` — query · `cursor` — query · `limit` — query
- **Returns (parsed)**: `BuildWorkspaceListResponse`
- **Returns (raw)**: `ApiResult[BuildWorkspaceListResponse, ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody]`
- **Error**: `ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildWorkspaceListResponse` | `hud/models/build_workspace_list_response.py` |
| `ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody` | `hud/errors/list_build_workspace_v2_builds_build_id_workspace_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.list_builds_v2_builds_get

- **Route**: `GET /v2/builds`
- **Signature**: `def list_builds_v2_builds_get(registry_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `registry_id`
- **Params**: `registry_id` — query · `limit` — query
- **Returns (parsed)**: `BuildListResponse`
- **Returns (raw)**: `ApiResult[BuildListResponse, ListBuildsV2BuildsGetErrorBody]`
- **Error**: `ListBuildsV2BuildsGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildListResponse` | `hud/models/build_list_response.py` |
| `ListBuildsV2BuildsGetErrorBody` | `hud/errors/list_builds_v2_builds_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.lookup_builds_v2_builds_lookup_post

- **Route**: `POST /v2/builds/lookup`
- **Signature**: `def lookup_builds_v2_builds_lookup_post(body: BuildLookupRequest | BuildLookupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BuildLookupResponse`
- **Returns (raw)**: `ApiResult[BuildLookupResponse, LookupBuildsV2BuildsLookupPostErrorBody]`
- **Error**: `LookupBuildsV2BuildsLookupPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildLookupRequest` | `hud/models/build_lookup_request.py` |
| `BuildLookupRequestDict` | `hud/models/build_lookup_request.py` |
| `BuildLookupResponse` | `hud/models/build_lookup_response.py` |
| `LookupBuildsV2BuildsLookupPostErrorBody` | `hud/errors/lookup_builds_v2_builds_lookup_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.preview_build_source_v2_builds_build_id_source_preview_get

- **Route**: `GET /v2/builds/{build_id}/source/preview`
- **Signature**: `def preview_build_source_v2_builds_build_id_source_preview_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`, `path`
- **Params**: `build_id` — path · `path` — query
- **Returns (parsed)**: `BuildSourcePreviewResponse`
- **Returns (raw)**: `ApiResult[BuildSourcePreviewResponse, PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody]`
- **Error**: `PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildSourcePreviewResponse` | `hud/models/build_source_preview_response.py` |
| `PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody` | `hud/errors/preview_build_source_v2_builds_build_id_source_preview_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.preview_build_workspace_v2_builds_build_id_workspace_preview_get

- **Route**: `GET /v2/builds/{build_id}/workspace/preview`
- **Signature**: `def preview_build_workspace_v2_builds_build_id_workspace_preview_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`, `path`
- **Params**: `build_id` — path · `path` — query
- **Returns (parsed)**: `BuildSourcePreviewResponse`
- **Returns (raw)**: `ApiResult[BuildSourcePreviewResponse, PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody]`
- **Error**: `PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildSourcePreviewResponse` | `hud/models/build_source_preview_response.py` |
| `PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody` | `hud/errors/preview_build_workspace_v2_builds_build_id_workspace_preview_get_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.register_build_source_v2_builds_register_post

- **Route**: `POST /v2/builds/register`
- **Signature**: `def register_build_source_v2_builds_register_post(body: BuildRegisterRequest | BuildRegisterRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BuildRegisterResponse`
- **Returns (raw)**: `ApiResult[BuildRegisterResponse, RegisterBuildSourceV2BuildsRegisterPostErrorBody]`
- **Error**: `RegisterBuildSourceV2BuildsRegisterPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildRegisterRequest` | `hud/models/build_register_request.py` |
| `BuildRegisterRequestDict` | `hud/models/build_register_request.py` |
| `BuildRegisterResponse` | `hud/models/build_register_response.py` |
| `RegisterBuildSourceV2BuildsRegisterPostErrorBody` | `hud/errors/register_build_source_v2_builds_register_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.reindex_build_source_v2_builds_build_id_source_reindex_post

- **Route**: `POST /v2/builds/{build_id}/source/reindex`
- **Signature**: `def reindex_build_source_v2_builds_build_id_source_reindex_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody]`
- **Error**: `ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody` | `hud/errors/reindex_build_source_v2_builds_build_id_source_reindex_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.set_latest_build_v2_builds_build_id_set_latest_post

- **Route**: `POST /v2/builds/{build_id}/set-latest`
- **Signature**: `def set_latest_build_v2_builds_build_id_set_latest_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `build_id`
- **Params**: `build_id` — path
- **Returns (parsed)**: `BuildResponse`
- **Returns (raw)**: `ApiResult[BuildResponse, SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody]`
- **Error**: `SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildResponse` | `hud/models/build_response.py` |
| `SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody` | `hud/errors/set_latest_build_v2_builds_build_id_set_latest_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.trigger_build_v2_builds_trigger_direct_post

- **Route**: `POST /v2/builds/trigger-direct`
- **Signature**: `def trigger_build_v2_builds_trigger_direct_post(body: BuildTriggerRequest | BuildTriggerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BuildResponse`
- **Returns (raw)**: `ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerDirectPostErrorBody]`
- **Error**: `TriggerBuildV2BuildsTriggerDirectPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildTriggerRequest` | `hud/models/build_trigger_request.py` |
| `BuildTriggerRequestDict` | `hud/models/build_trigger_request.py` |
| `BuildResponse` | `hud/models/build_response.py` |
| `TriggerBuildV2BuildsTriggerDirectPostErrorBody` | `hud/errors/trigger_build_v2_builds_trigger_direct_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.trigger_build_v2_builds_trigger_post

- **Route**: `POST /v2/builds/trigger`
- **Signature**: `def trigger_build_v2_builds_trigger_post(body: BuildTriggerRequest | BuildTriggerRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `BuildResponse`
- **Returns (raw)**: `ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerPostErrorBody]`
- **Error**: `TriggerBuildV2BuildsTriggerPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildTriggerRequest` | `hud/models/build_trigger_request.py` |
| `BuildTriggerRequestDict` | `hud/models/build_trigger_request.py` |
| `BuildResponse` | `hud/models/build_response.py` |
| `TriggerBuildV2BuildsTriggerPostErrorBody` | `hud/errors/trigger_build_v2_builds_trigger_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |
| `HttpValidationError` | `hud/models/http_validation_error.py` |

### client.builds.upload_url_v2_builds_upload_url_post

- **Route**: `POST /v2/builds/upload-url`
- **Signature**: `def upload_url_v2_builds_upload_url_post(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `BuildUploadUrlResponse`
- **Returns (raw)**: `ApiResult[BuildUploadUrlResponse, UploadUrlV2BuildsUploadUrlPostErrorBody]`
- **Error**: `UploadUrlV2BuildsUploadUrlPostErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 409, 429, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BuildUploadUrlResponse` | `hud/models/build_upload_url_response.py` |
| `UploadUrlV2BuildsUploadUrlPostErrorBody` | `hud/errors/upload_url_v2_builds_upload_url_post_error.py` |
| `ErrorResponse` | `hud/models/error_response.py` |

