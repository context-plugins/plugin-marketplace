<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listprojects — operations

Accessor: `client.aws_codebuild_x_amz_target_codebuild20161006_listprojects` · Source: `aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_listprojects.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_codebuild_x_amz_target_codebuild20161006_listprojects.list_projects

- **Route**: `POST /#ListProjects`
- **Auth**: `sigv4`
- **Signature**: `def list_projects(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListProjectsErrorBody]`
- **Error**: `ListProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listprojects_api.py` |
| `ListProjectsErrorBody` | `aws_code_build/errors/list_projects_error.py` |

