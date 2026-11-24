<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild20161006Listreports — operations

Accessor: `client.aws_codebuild_x_amz_target_codebuild20161006_listreports` · Source: `aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_listreports.py` · 1 operation

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_codebuild_x_amz_target_codebuild20161006_listreports.list_reports

- **Route**: `POST /#ListReports`
- **Auth**: `sigv4`
- **Signature**: `def list_reports(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListReportsErrorBody]`
- **Error**: `ListReportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listreports_api.py` |
| `ListReportsErrorBody` | `aws_code_build/errors/list_reports_error.py` |

