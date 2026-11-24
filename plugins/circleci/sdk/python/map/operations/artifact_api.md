<!-- Generated file — do not edit; regenerated with the SDK. -->

# ArtifactApi — operations

Accessor: `client.artifact_api` · Source: `circle_ci/apis/artifact_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.artifact_api.list_build_artifacts

- **Route**: `GET /project/{vcs-type}/{username}/{project}/{build_num}/artifacts`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_build_artifacts(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `build_num`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `build_num` — path
- **Returns (parsed)**: `list[Artifact]`
- **Returns (raw)**: `ApiResult[list[Artifact], ListBuildArtifactsErrorBody]`
- **Error**: `ListBuildArtifactsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `Artifact` | `circle_ci/models/artifact.py` |
| `ListBuildArtifactsErrorBody` | `circle_ci/errors/list_build_artifacts_error.py` |

### client.artifact_api.list_latest_artifacts

- **Route**: `GET /project/{vcs-type}/{username}/{project}/latest/artifacts`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_latest_artifacts(vcs_type: VcsTypeOrStr, username: str, project: str, *, branch: str | None = None, filter_: FilterOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `branch` — query · `filter_` — query `filter`
- **Returns (parsed)**: `list[Artifact]`
- **Returns (raw)**: `ApiResult[list[Artifact], ListLatestArtifactsErrorBody]`
- **Error**: `ListLatestArtifactsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `FilterOrStr` | `circle_ci/models/enums/filter.py` |
| `Artifact` | `circle_ci/models/artifact.py` |
| `ListLatestArtifactsErrorBody` | `circle_ci/errors/list_latest_artifacts_error.py` |

