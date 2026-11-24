<!-- Generated file — do not edit; regenerated with the SDK. -->

# TestMetadataApi — operations

Accessor: `client.test_metadata_api` · Source: `circle_ci/apis/test_metadata_api.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.test_metadata_api.list_build_tests

- **Route**: `GET /project/{vcs-type}/{username}/{project}/{build_num}/tests`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_build_tests(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`, `build_num`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path · `build_num` — path
- **Returns (parsed)**: `ProjectProjectBuildNumTestsResponse`
- **Returns (raw)**: `ApiResult[ProjectProjectBuildNumTestsResponse, ListBuildTestsErrorBody]`
- **Error**: `ListBuildTestsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectBuildNumTestsResponse` | `circle_ci/models/project_project_build_num_tests_response.py` |
| `ListBuildTestsErrorBody` | `circle_ci/errors/list_build_tests_error.py` |

