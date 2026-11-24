<!-- Generated file — do not edit; regenerated with the SDK. -->

# BuildApi — operations

Accessor: `client.build_api` · Source: `circle_ci/apis/build_api.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.build_api.cancel_build

- **Route**: `POST /project/{vcs-type}/{username}/{project}/{build_num}/cancel`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def cancel_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `build_num`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `build_num` — path
- **Returns (parsed)**: `BuildSummary`
- **Returns (raw)**: `ApiResult[BuildSummary, CancelBuildErrorBody]`
- **Error**: `CancelBuildErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `BuildSummary` | `circle_ci/models/build_summary.py` |
| `CancelBuildErrorBody` | `circle_ci/errors/cancel_build_error.py` |

### client.build_api.get_build

- **Route**: `GET /project/{vcs-type}/{username}/{project}/{build_num}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `build_num`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `build_num` — path
- **Returns (parsed)**: `BuildDetail`
- **Returns (raw)**: `ApiResult[BuildDetail, GetBuildErrorBody]`
- **Error**: `GetBuildErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, 404, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `BuildDetail` | `circle_ci/models/build_detail.py` |
| `GetBuildErrorBody` | `circle_ci/errors/get_build_error.py` |

### client.build_api.list_project_builds

- **Route**: `GET /project/{vcs-type}/{username}/{project}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_project_builds(vcs_type: VcsTypeOrStr, username: str, project: str, *, filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `filter_` — query `filter` · `limit` — query · `offset` — query
- **Returns (parsed)**: `list[Build]`
- **Returns (raw)**: `ApiResult[list[Build], ListProjectBuildsErrorBody]`
- **Error**: `ListProjectBuildsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `FilterCircleCiRestApiV1BuildApiOrStr` | `circle_ci/models/enums/filter_circle_ci_rest_api_v1_build_api.py` |
| `Build` | `circle_ci/models/build.py` |
| `ListProjectBuildsErrorBody` | `circle_ci/errors/list_project_builds_error.py` |

### client.build_api.list_recent_builds

- **Route**: `GET /recent-builds`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_recent_builds(*, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `offset` — query
- **Returns (parsed)**: `list[Build]`
- **Returns (raw)**: `ApiResult[list[Build], ListRecentBuildsErrorBody]`
- **Error**: `ListRecentBuildsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `Build` | `circle_ci/models/build.py` |
| `ListRecentBuildsErrorBody` | `circle_ci/errors/list_recent_builds_error.py` |

### client.build_api.retry_build

- **Route**: `POST /project/{vcs-type}/{username}/{project}/{build_num}/retry`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def retry_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `build_num`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `build_num` — path
- **Returns (parsed)**: `BuildSummary`
- **Returns (raw)**: `ApiResult[BuildSummary, RetryBuildErrorBody]`
- **Error**: `RetryBuildErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `BuildSummary` | `circle_ci/models/build_summary.py` |
| `RetryBuildErrorBody` | `circle_ci/errors/retry_build_error.py` |

### client.build_api.trigger_branch_build

- **Route**: `POST /project/{vcs-type}/{username}/{project}/tree/{branch}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def trigger_branch_build(vcs_type: VcsTypeOrStr, username: str, project: str, branch: str, *, body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `branch`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `branch` — path · `body` — JSON body
- **Returns (parsed)**: `BuildSummary`
- **Returns (raw)**: `ApiResult[BuildSummary, TriggerBranchBuildErrorBody]`
- **Error**: `TriggerBranchBuildErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectTreeBranchRequest` | `circle_ci/models/project_project_tree_branch_request.py` |
| `ProjectProjectTreeBranchRequestDict` | `circle_ci/models/project_project_tree_branch_request.py` |
| `BuildSummary` | `circle_ci/models/build_summary.py` |
| `TriggerBranchBuildErrorBody` | `circle_ci/errors/trigger_branch_build_error.py` |

### client.build_api.trigger_build

- **Route**: `POST /project/{vcs-type}/{username}/{project}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def trigger_build(vcs_type: VcsTypeOrStr, username: str, project: str, *, body: ProjectProjectRequest | ProjectProjectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `body` — JSON body
- **Returns (parsed)**: `BuildSummary`
- **Returns (raw)**: `ApiResult[BuildSummary, TriggerBuildErrorBody]`
- **Error**: `TriggerBuildErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectRequest` | `circle_ci/models/project_project_request.py` |
| `ProjectProjectRequestDict` | `circle_ci/models/project_project_request.py` |
| `BuildSummary` | `circle_ci/models/build_summary.py` |
| `TriggerBuildErrorBody` | `circle_ci/errors/trigger_build_error.py` |

