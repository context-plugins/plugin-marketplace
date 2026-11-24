<!-- Generated file — do not edit; regenerated with the SDK. -->

# Builds — operations

Accessor: `client.builds` · Source: `aws_code_build/apis/builds.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.builds.batch_delete_builds2

- **Route**: `POST /#BatchDeleteBuilds`
- **Auth**: `sigv4`
- **Signature**: `def batch_delete_builds2(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDeleteBuilds2ErrorBody]`
- **Error**: `BatchDeleteBuilds2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py` |
| `BatchDeleteBuilds2ErrorBody` | `aws_code_build/errors/batch_delete_builds2_error.py` |

### client.builds.batch_get_builds2

- **Route**: `POST /#BatchGetBuilds`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_builds2(x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetBuilds2ErrorBody]`
- **Error**: `BatchGetBuilds2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr` | `aws_code_build/models/enums/x_amz_target1_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py` |
| `BatchGetBuilds2ErrorBody` | `aws_code_build/errors/batch_get_builds2_error.py` |

### client.builds.list_builds2

- **Route**: `POST /#ListBuilds`
- **Auth**: `sigv4`
- **Signature**: `def list_builds2(x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListBuilds2ErrorBody]`
- **Error**: `ListBuilds2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCodeBuildBuildsApiOrStr` | `aws_code_build/models/enums/x_amz_target2_aws_code_build_builds_api.py` |
| `ListBuilds2ErrorBody` | `aws_code_build/errors/list_builds2_error.py` |

### client.builds.list_builds_for_project2

- **Route**: `POST /#ListBuildsForProject`
- **Auth**: `sigv4`
- **Signature**: `def list_builds_for_project2(x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListBuildsForProject2ErrorBody]`
- **Error**: `ListBuildsForProject2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3AwsCodeBuildBuildsApiOrStr` | `aws_code_build/models/enums/x_amz_target3_aws_code_build_builds_api.py` |
| `ListBuildsForProject2ErrorBody` | `aws_code_build/errors/list_builds_for_project2_error.py` |

### client.builds.start_build2

- **Route**: `POST /#StartBuild`
- **Auth**: `sigv4`
- **Signature**: `def start_build2(x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartBuild2ErrorBody]`
- **Error**: `StartBuild2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4AwsCodeBuildBuildsApiOrStr` | `aws_code_build/models/enums/x_amz_target4_aws_code_build_builds_api.py` |
| `StartBuild2ErrorBody` | `aws_code_build/errors/start_build2_error.py` |

### client.builds.stop_build2

- **Route**: `POST /#StopBuild`
- **Auth**: `sigv4`
- **Signature**: `def stop_build2(x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopBuild2ErrorBody]`
- **Error**: `StopBuild2ErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5AwsCodeBuildBuildsApiOrStr` | `aws_code_build/models/enums/x_amz_target5_aws_code_build_builds_api.py` |
| `StopBuild2ErrorBody` | `aws_code_build/errors/stop_build2_error.py` |

