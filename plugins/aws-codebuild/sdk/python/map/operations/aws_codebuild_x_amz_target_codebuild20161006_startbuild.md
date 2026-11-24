<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Startbuild — operations

Accessor: `client.aws_codebuild_x_amz_target_codebuild20161006_startbuild` · Source: `aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_startbuild.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_codebuild_x_amz_target_codebuild20161006_startbuild.start_build

- **Route**: `POST /#StartBuild`
- **Auth**: `sigv4`
- **Signature**: `def start_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartBuildErrorBody]`
- **Error**: `StartBuildErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_startbuild_api.py` |
| `StartBuildErrorBody` | `aws_code_build/errors/start_build_error.py` |

