<!-- Generated file — do not edit; regenerated with the SDK. -->

# AwsCodebuildXAmzTargetCodebuild — operations

Accessor: `client.aws_codebuild_x_amz_target_codebuild` · Source: `aws_code_build/apis/aws_codebuild_x_amz_target_codebuild.py` · 38 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.aws_codebuild_x_amz_target_codebuild.batch_delete_builds

- **Route**: `POST /#BatchDeleteBuilds`
- **Auth**: `sigv4`
- **Signature**: `def batch_delete_builds(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchDeleteBuildsErrorBody]`
- **Error**: `BatchDeleteBuildsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr` | `aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py` |
| `BatchDeleteBuildsErrorBody` | `aws_code_build/errors/batch_delete_builds_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.batch_get_build_batches

- **Route**: `POST /#BatchGetBuildBatches`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_build_batches(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetBuildBatchesErrorBody]`
- **Error**: `BatchGetBuildBatchesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget3OrStr` | `aws_code_build/models/enums/x_amz_target3.py` |
| `BatchGetBuildBatchesErrorBody` | `aws_code_build/errors/batch_get_build_batches_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.batch_get_builds

- **Route**: `POST /#BatchGetBuilds`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_builds(x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetBuildsErrorBody]`
- **Error**: `BatchGetBuildsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr` | `aws_code_build/models/enums/x_amz_target1_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py` |
| `BatchGetBuildsErrorBody` | `aws_code_build/errors/batch_get_builds_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.batch_get_projects

- **Route**: `POST /#BatchGetProjects`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_projects(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetProjectsErrorBody]`
- **Error**: `BatchGetProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget6OrStr` | `aws_code_build/models/enums/x_amz_target6.py` |
| `BatchGetProjectsErrorBody` | `aws_code_build/errors/batch_get_projects_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.batch_get_report_groups

- **Route**: `POST /#BatchGetReportGroups`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_report_groups(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetReportGroupsErrorBody]`
- **Error**: `BatchGetReportGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget10OrStr` | `aws_code_build/models/enums/x_amz_target10.py` |
| `BatchGetReportGroupsErrorBody` | `aws_code_build/errors/batch_get_report_groups_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.batch_get_reports

- **Route**: `POST /#BatchGetReports`
- **Auth**: `sigv4`
- **Signature**: `def batch_get_reports(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, BatchGetReportsErrorBody]`
- **Error**: `BatchGetReportsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget15OrStr` | `aws_code_build/models/enums/x_amz_target15.py` |
| `BatchGetReportsErrorBody` | `aws_code_build/errors/batch_get_reports_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.create_project

- **Route**: `POST /#CreateProject`
- **Auth**: `sigv4`
- **Signature**: `def create_project(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateProjectErrorBody]`
- **Error**: `CreateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget7OrStr` | `aws_code_build/models/enums/x_amz_target7.py` |
| `CreateProjectErrorBody` | `aws_code_build/errors/create_project_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.create_report_group

- **Route**: `POST /#CreateReportGroup`
- **Auth**: `sigv4`
- **Signature**: `def create_report_group(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateReportGroupErrorBody]`
- **Error**: `CreateReportGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget11OrStr` | `aws_code_build/models/enums/x_amz_target11.py` |
| `CreateReportGroupErrorBody` | `aws_code_build/errors/create_report_group_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.create_webhook

- **Route**: `POST /#CreateWebhook`
- **Auth**: `sigv4`
- **Signature**: `def create_webhook(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, CreateWebhookErrorBody]`
- **Error**: `CreateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget17OrStr` | `aws_code_build/models/enums/x_amz_target17.py` |
| `CreateWebhookErrorBody` | `aws_code_build/errors/create_webhook_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.delete_build_batch

- **Route**: `POST /#DeleteBuildBatch`
- **Auth**: `sigv4`
- **Signature**: `def delete_build_batch(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteBuildBatchErrorBody]`
- **Error**: `DeleteBuildBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget20OrStr` | `aws_code_build/models/enums/x_amz_target20.py` |
| `DeleteBuildBatchErrorBody` | `aws_code_build/errors/delete_build_batch_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.delete_project

- **Route**: `POST /#DeleteProject`
- **Auth**: `sigv4`
- **Signature**: `def delete_project(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteProjectErrorBody]`
- **Error**: `DeleteProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget8OrStr` | `aws_code_build/models/enums/x_amz_target8.py` |
| `DeleteProjectErrorBody` | `aws_code_build/errors/delete_project_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.delete_report_group

- **Route**: `POST /#DeleteReportGroup`
- **Auth**: `sigv4`
- **Signature**: `def delete_report_group(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteReportGroupErrorBody]`
- **Error**: `DeleteReportGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget12OrStr` | `aws_code_build/models/enums/x_amz_target12.py` |
| `DeleteReportGroupErrorBody` | `aws_code_build/errors/delete_report_group_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.delete_resource_policy

- **Route**: `POST /#DeleteResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def delete_resource_policy(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteResourcePolicyErrorBody]`
- **Error**: `DeleteResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget23OrStr` | `aws_code_build/models/enums/x_amz_target23.py` |
| `DeleteResourcePolicyErrorBody` | `aws_code_build/errors/delete_resource_policy_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.delete_source_credentials

- **Route**: `POST /#DeleteSourceCredentials`
- **Auth**: `sigv4`
- **Signature**: `def delete_source_credentials(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteSourceCredentialsErrorBody]`
- **Error**: `DeleteSourceCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget26OrStr` | `aws_code_build/models/enums/x_amz_target26.py` |
| `DeleteSourceCredentialsErrorBody` | `aws_code_build/errors/delete_source_credentials_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.delete_webhook

- **Route**: `POST /#DeleteWebhook`
- **Auth**: `sigv4`
- **Signature**: `def delete_webhook(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteWebhookErrorBody]`
- **Error**: `DeleteWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget18OrStr` | `aws_code_build/models/enums/x_amz_target18.py` |
| `DeleteWebhookErrorBody` | `aws_code_build/errors/delete_webhook_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.describe_code_coverages

- **Route**: `POST /#DescribeCodeCoverages`
- **Auth**: `sigv4`
- **Signature**: `def describe_code_coverages(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeCodeCoveragesErrorBody]`
- **Error**: `DescribeCodeCoveragesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget29OrStr` | `aws_code_build/models/enums/x_amz_target29.py` |
| `DescribeCodeCoveragesErrorBody` | `aws_code_build/errors/describe_code_coverages_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.describe_test_cases

- **Route**: `POST /#DescribeTestCases`
- **Auth**: `sigv4`
- **Signature**: `def describe_test_cases(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DescribeTestCasesErrorBody]`
- **Error**: `DescribeTestCasesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget30OrStr` | `aws_code_build/models/enums/x_amz_target30.py` |
| `DescribeTestCasesErrorBody` | `aws_code_build/errors/describe_test_cases_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.get_report_group_trend

- **Route**: `POST /#GetReportGroupTrend`
- **Auth**: `sigv4`
- **Signature**: `def get_report_group_trend(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetReportGroupTrendErrorBody]`
- **Error**: `GetReportGroupTrendErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget31OrStr` | `aws_code_build/models/enums/x_amz_target31.py` |
| `GetReportGroupTrendErrorBody` | `aws_code_build/errors/get_report_group_trend_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.get_resource_policy

- **Route**: `POST /#GetResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def get_resource_policy(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetResourcePolicyErrorBody]`
- **Error**: `GetResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget24OrStr` | `aws_code_build/models/enums/x_amz_target24.py` |
| `GetResourcePolicyErrorBody` | `aws_code_build/errors/get_resource_policy_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.import_source_credentials

- **Route**: `POST /#ImportSourceCredentials`
- **Auth**: `sigv4`
- **Signature**: `def import_source_credentials(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ImportSourceCredentialsErrorBody]`
- **Error**: `ImportSourceCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget27OrStr` | `aws_code_build/models/enums/x_amz_target27.py` |
| `ImportSourceCredentialsErrorBody` | `aws_code_build/errors/import_source_credentials_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.invalidate_project_cache

- **Route**: `POST /#InvalidateProjectCache`
- **Auth**: `sigv4`
- **Signature**: `def invalidate_project_cache(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, InvalidateProjectCacheErrorBody]`
- **Error**: `InvalidateProjectCacheErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget32OrStr` | `aws_code_build/models/enums/x_amz_target32.py` |
| `InvalidateProjectCacheErrorBody` | `aws_code_build/errors/invalidate_project_cache_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_build_batches

- **Route**: `POST /#ListBuildBatches`
- **Auth**: `sigv4`
- **Signature**: `def list_build_batches(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListBuildBatchesErrorBody]`
- **Error**: `ListBuildBatchesErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget4OrStr` | `aws_code_build/models/enums/x_amz_target4.py` |
| `ListBuildBatchesErrorBody` | `aws_code_build/errors/list_build_batches_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_build_batches_for_project

- **Route**: `POST /#ListBuildBatchesForProject`
- **Auth**: `sigv4`
- **Signature**: `def list_build_batches_for_project(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListBuildBatchesForProjectErrorBody]`
- **Error**: `ListBuildBatchesForProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget5OrStr` | `aws_code_build/models/enums/x_amz_target5.py` |
| `ListBuildBatchesForProjectErrorBody` | `aws_code_build/errors/list_build_batches_for_project_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_builds_for_project

- **Route**: `POST /#ListBuildsForProject`
- **Auth**: `sigv4`
- **Signature**: `def list_builds_for_project(x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListBuildsForProjectErrorBody]`
- **Error**: `ListBuildsForProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr` | `aws_code_build/models/enums/x_amz_target2_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py` |
| `ListBuildsForProjectErrorBody` | `aws_code_build/errors/list_builds_for_project_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_curated_environment_images

- **Route**: `POST /#ListCuratedEnvironmentImages`
- **Auth**: `sigv4`
- **Signature**: `def list_curated_environment_images(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `XAmzTarget34OrStr` | `aws_code_build/models/enums/x_amz_target34.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_report_groups

- **Route**: `POST /#ListReportGroups`
- **Auth**: `sigv4`
- **Signature**: `def list_report_groups(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListReportGroupsErrorBody]`
- **Error**: `ListReportGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget13OrStr` | `aws_code_build/models/enums/x_amz_target13.py` |
| `ListReportGroupsErrorBody` | `aws_code_build/errors/list_report_groups_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_reports_for_report_group

- **Route**: `POST /#ListReportsForReportGroup`
- **Auth**: `sigv4`
- **Signature**: `def list_reports_for_report_group(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListReportsForReportGroupErrorBody]`
- **Error**: `ListReportsForReportGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget16OrStr` | `aws_code_build/models/enums/x_amz_target16.py` |
| `ListReportsForReportGroupErrorBody` | `aws_code_build/errors/list_reports_for_report_group_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_shared_projects

- **Route**: `POST /#ListSharedProjects`
- **Auth**: `sigv4`
- **Signature**: `def list_shared_projects(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListSharedProjectsErrorBody]`
- **Error**: `ListSharedProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget35OrStr` | `aws_code_build/models/enums/x_amz_target35.py` |
| `ListSharedProjectsErrorBody` | `aws_code_build/errors/list_shared_projects_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_shared_report_groups

- **Route**: `POST /#ListSharedReportGroups`
- **Auth**: `sigv4`
- **Signature**: `def list_shared_report_groups(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListSharedReportGroupsErrorBody]`
- **Error**: `ListSharedReportGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget36OrStr` | `aws_code_build/models/enums/x_amz_target36.py` |
| `ListSharedReportGroupsErrorBody` | `aws_code_build/errors/list_shared_report_groups_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.list_source_credentials

- **Route**: `POST /#ListSourceCredentials`
- **Auth**: `sigv4`
- **Signature**: `def list_source_credentials(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, ListSourceCredentialsErrorBody]`
- **Error**: `ListSourceCredentialsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget28OrStr` | `aws_code_build/models/enums/x_amz_target28.py` |
| `ListSourceCredentialsErrorBody` | `aws_code_build/errors/list_source_credentials_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.put_resource_policy

- **Route**: `POST /#PutResourcePolicy`
- **Auth**: `sigv4`
- **Signature**: `def put_resource_policy(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PutResourcePolicyErrorBody]`
- **Error**: `PutResourcePolicyErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget25OrStr` | `aws_code_build/models/enums/x_amz_target25.py` |
| `PutResourcePolicyErrorBody` | `aws_code_build/errors/put_resource_policy_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.retry_build_batch

- **Route**: `POST /#RetryBuildBatch`
- **Auth**: `sigv4`
- **Signature**: `def retry_build_batch(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RetryBuildBatchErrorBody]`
- **Error**: `RetryBuildBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget33OrStr` | `aws_code_build/models/enums/x_amz_target33.py` |
| `RetryBuildBatchErrorBody` | `aws_code_build/errors/retry_build_batch_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.start_build_batch

- **Route**: `POST /#StartBuildBatch`
- **Auth**: `sigv4`
- **Signature**: `def start_build_batch(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StartBuildBatchErrorBody]`
- **Error**: `StartBuildBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget21OrStr` | `aws_code_build/models/enums/x_amz_target21.py` |
| `StartBuildBatchErrorBody` | `aws_code_build/errors/start_build_batch_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.stop_build_batch

- **Route**: `POST /#StopBuildBatch`
- **Auth**: `sigv4`
- **Signature**: `def stop_build_batch(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, StopBuildBatchErrorBody]`
- **Error**: `StopBuildBatchErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget22OrStr` | `aws_code_build/models/enums/x_amz_target22.py` |
| `StopBuildBatchErrorBody` | `aws_code_build/errors/stop_build_batch_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.update_project

- **Route**: `POST /#UpdateProject`
- **Auth**: `sigv4`
- **Signature**: `def update_project(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateProjectErrorBody]`
- **Error**: `UpdateProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget9OrStr` | `aws_code_build/models/enums/x_amz_target9.py` |
| `UpdateProjectErrorBody` | `aws_code_build/errors/update_project_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.update_project_visibility

- **Route**: `POST /#UpdateProjectVisibility`
- **Auth**: `sigv4`
- **Signature**: `def update_project_visibility(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateProjectVisibilityErrorBody]`
- **Error**: `UpdateProjectVisibilityErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget37OrStr` | `aws_code_build/models/enums/x_amz_target37.py` |
| `UpdateProjectVisibilityErrorBody` | `aws_code_build/errors/update_project_visibility_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.update_report_group

- **Route**: `POST /#UpdateReportGroup`
- **Auth**: `sigv4`
- **Signature**: `def update_report_group(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateReportGroupErrorBody]`
- **Error**: `UpdateReportGroupErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget14OrStr` | `aws_code_build/models/enums/x_amz_target14.py` |
| `UpdateReportGroupErrorBody` | `aws_code_build/errors/update_report_group_error.py` |

### client.aws_codebuild_x_amz_target_codebuild.update_webhook

- **Route**: `POST /#UpdateWebhook`
- **Auth**: `sigv4`
- **Signature**: `def update_webhook(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `x_amz_target`
- **Params**: `x_amz_target` — header `X-Amz-Target`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, UpdateWebhookErrorBody]`
- **Error**: `UpdateWebhookErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `XAmzTarget19OrStr` | `aws_code_build/models/enums/x_amz_target19.py` |
| `UpdateWebhookErrorBody` | `aws_code_build/errors/update_webhook_error.py` |

