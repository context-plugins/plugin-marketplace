<!-- Generated file — do not edit; regenerated with the SDK. -->

# Projects — operations

Accessor: `client.projects` · Source: `aws_code_build/apis/projects.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.projects.batch_get_projects2

- **Route**: `POST /#BatchGetProjects`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_projects2(x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetProjects2ErrorBody]`
- **Error**: `BatchGetProjects2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildProjectsApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_projects_api.py` |
| `BatchGetProjects2ErrorBody` | `aws_code_build/errors/batch_get_projects2_error.py` |

### client.projects.create_project2

- **Route**: `POST /#CreateProject`
- **Auth**: `sigv4`
- **Signature**: `def create_project2(x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateProject2ErrorBody]`
- **Error**: `CreateProject2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCodeBuildProjectsApiOrStr` | `aws_code_build/models/enums/x_amz_target1_aws_code_build_projects_api.py` |
| `CreateProject2ErrorBody` | `aws_code_build/errors/create_project2_error.py` |

### client.projects.delete_project2

- **Route**: `POST /#DeleteProject`
- **Auth**: `sigv4`
- **Signature**: `def delete_project2(x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProject2ErrorBody]`
- **Error**: `DeleteProject2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCodeBuildProjectsApiOrStr` | `aws_code_build/models/enums/x_amz_target2_aws_code_build_projects_api.py` |
| `DeleteProject2ErrorBody` | `aws_code_build/errors/delete_project2_error.py` |

### client.projects.list_projects2

- **Route**: `POST /#ListProjects`
- **Auth**: `sigv4`
- **Signature**: `def list_projects2(x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListProjects2ErrorBody]`
- **Error**: `ListProjects2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCodeBuildProjectsApiOrStr` | `aws_code_build/models/enums/x_amz_target3_aws_code_build_projects_api.py` |
| `ListProjects2ErrorBody` | `aws_code_build/errors/list_projects2_error.py` |

### client.projects.update_project2

- **Route**: `POST /#UpdateProject`
- **Auth**: `sigv4`
- **Signature**: `def update_project2(x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateProject2ErrorBody]`
- **Error**: `UpdateProject2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCodeBuildProjectsApiOrStr` | `aws_code_build/models/enums/x_amz_target4_aws_code_build_projects_api.py` |
| `UpdateProject2ErrorBody` | `aws_code_build/errors/update_project2_error.py` |

