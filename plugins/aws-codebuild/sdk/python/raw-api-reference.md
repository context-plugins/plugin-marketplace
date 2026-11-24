# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [AwsCodeBuildClient](aws_code_build/client.py)

## AwsCodebuildApi

> Source: [AwsCodebuildApi](aws_code_build/apis/aws_codebuild_api.py)

<details>
<summary><code>def start_sandbox(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartSandboxErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a sandbox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_api.with_raw_response.start_sandbox(XAmzTarget.CODE_BUILD_20161006_START_SANDBOX)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSandboxErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_api.with_raw_response.start_sandbox(
    XAmzTarget.CODE_BUILD_20161006_START_SANDBOX
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSandboxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetOrStr](aws_code_build/models/enums/x_amz_target.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StartSandboxErrorBody](aws_code_build/errors/start_sandbox_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartSandboxErrorBody](aws_code_build/errors/start_sandbox_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_sandbox_connection(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartSandboxConnectionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a sandbox connection.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_api.with_raw_response.start_sandbox_connection(
    XAmzTarget2.CODE_BUILD_20161006_START_SANDBOX_CONNECTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSandboxConnectionErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_api.with_raw_response.start_sandbox_connection(
    XAmzTarget2.CODE_BUILD_20161006_START_SANDBOX_CONNECTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartSandboxConnectionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2OrStr](aws_code_build/models/enums/x_amz_target2.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StartSandboxConnectionErrorBody](aws_code_build/errors/start_sandbox_connection_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartSandboxConnectionErrorBody](aws_code_build/errors/start_sandbox_connection_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_sandbox(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StopSandboxErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a sandbox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_api.with_raw_response.stop_sandbox(XAmzTarget1.CODE_BUILD_20161006_STOP_SANDBOX)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopSandboxErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_api.with_raw_response.stop_sandbox(
    XAmzTarget1.CODE_BUILD_20161006_STOP_SANDBOX
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopSandboxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1OrStr](aws_code_build/models/enums/x_amz_target1.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StopSandboxErrorBody](aws_code_build/errors/stop_sandbox_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StopSandboxErrorBody](aws_code_build/errors/stop_sandbox_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild

> Source: [AwsCodebuildXAmzTargetCodebuild](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild.py)

<details>
<summary><code>def batch_delete_builds(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchDeleteBuildsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_delete_builds(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchDeleteBuildsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_delete_builds(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchDeleteBuildsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchDeleteBuildsErrorBody](aws_code_build/errors/batch_delete_builds_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchDeleteBuildsErrorBody](aws_code_build/errors/batch_delete_builds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_get_build_batches(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetBuildBatchesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about one or more batch builds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_build_batches(
    XAmzTarget3.CODE_BUILD_20161006_BATCH_GET_BUILD_BATCHES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetBuildBatchesErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_build_batches(
    XAmzTarget3.CODE_BUILD_20161006_BATCH_GET_BUILD_BATCHES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetBuildBatchesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3OrStr](aws_code_build/models/enums/x_amz_target3.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetBuildBatchesErrorBody](aws_code_build/errors/batch_get_build_batches_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetBuildBatchesErrorBody](aws_code_build/errors/batch_get_build_batches_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_get_builds(x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetBuildsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_builds(
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetBuildsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_builds(
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetBuildsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr](aws_code_build/models/enums/x_amz_target1_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetBuildsErrorBody](aws_code_build/errors/batch_get_builds_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetBuildsErrorBody](aws_code_build/errors/batch_get_builds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_get_projects(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more build projects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_projects(
    XAmzTarget6.CODE_BUILD_20161006_BATCH_GET_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetProjectsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_projects(
    XAmzTarget6.CODE_BUILD_20161006_BATCH_GET_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget6OrStr](aws_code_build/models/enums/x_amz_target6.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetProjectsErrorBody](aws_code_build/errors/batch_get_projects_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetProjectsErrorBody](aws_code_build/errors/batch_get_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_get_report_groups(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetReportGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of report groups.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_report_groups(
    XAmzTarget10.CODE_BUILD_20161006_BATCH_GET_REPORT_GROUPS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetReportGroupsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_report_groups(
    XAmzTarget10.CODE_BUILD_20161006_BATCH_GET_REPORT_GROUPS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetReportGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget10OrStr](aws_code_build/models/enums/x_amz_target10.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetReportGroupsErrorBody](aws_code_build/errors/batch_get_report_groups_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetReportGroupsErrorBody](aws_code_build/errors/batch_get_report_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_get_reports(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetReportsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an array of reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_reports(
    XAmzTarget15.CODE_BUILD_20161006_BATCH_GET_REPORTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetReportsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.batch_get_reports(
    XAmzTarget15.CODE_BUILD_20161006_BATCH_GET_REPORTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget15OrStr](aws_code_build/models/enums/x_amz_target15.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetReportsErrorBody](aws_code_build/errors/batch_get_reports_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetReportsErrorBody](aws_code_build/errors/batch_get_reports_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_project(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.create_project(
    XAmzTarget7.CODE_BUILD_20161006_CREATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.create_project(
    XAmzTarget7.CODE_BUILD_20161006_CREATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget7OrStr](aws_code_build/models/enums/x_amz_target7.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [CreateProjectErrorBody](aws_code_build/errors/create_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateProjectErrorBody](aws_code_build/errors/create_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_report_group(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateReportGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a report group. A report group contains a collection of reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.create_report_group(
    XAmzTarget11.CODE_BUILD_20161006_CREATE_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateReportGroupErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.create_report_group(
    XAmzTarget11.CODE_BUILD_20161006_CREATE_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateReportGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget11OrStr](aws_code_build/models/enums/x_amz_target11.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [CreateReportGroupErrorBody](aws_code_build/errors/create_report_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateReportGroupErrorBody](aws_code_build/errors/create_report_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_webhook(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository. If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in Change a Build Project's Settings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.create_webhook(
    XAmzTarget17.CODE_BUILD_20161006_CREATE_WEBHOOK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.create_webhook(
    XAmzTarget17.CODE_BUILD_20161006_CREATE_WEBHOOK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget17OrStr](aws_code_build/models/enums/x_amz_target17.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [CreateWebhookErrorBody](aws_code_build/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](aws_code_build/errors/create_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_build_batch(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteBuildBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a batch build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_build_batch(
    XAmzTarget20.CODE_BUILD_20161006_DELETE_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBuildBatchErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_build_batch(
    XAmzTarget20.CODE_BUILD_20161006_DELETE_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteBuildBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget20OrStr](aws_code_build/models/enums/x_amz_target20.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteBuildBatchErrorBody](aws_code_build/errors/delete_build_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteBuildBatchErrorBody](aws_code_build/errors/delete_build_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a build project. When you delete a project, its builds are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_project(
    XAmzTarget8.CODE_BUILD_20161006_DELETE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_project(
    XAmzTarget8.CODE_BUILD_20161006_DELETE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget8OrStr](aws_code_build/models/enums/x_amz_target8.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteProjectErrorBody](aws_code_build/errors/delete_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteProjectErrorBody](aws_code_build/errors/delete_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_report_group(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteReportGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a report group. Before you delete a report group, you must delete its reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_report_group(
    XAmzTarget12.CODE_BUILD_20161006_DELETE_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportGroupErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_report_group(
    XAmzTarget12.CODE_BUILD_20161006_DELETE_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget12OrStr](aws_code_build/models/enums/x_amz_target12.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteReportGroupErrorBody](aws_code_build/errors/delete_report_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteReportGroupErrorBody](aws_code_build/errors/delete_report_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resource_policy(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteResourcePolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource policy that is identified by its resource ARN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_resource_policy(
    XAmzTarget23.CODE_BUILD_20161006_DELETE_RESOURCE_POLICY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResourcePolicyErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_resource_policy(
    XAmzTarget23.CODE_BUILD_20161006_DELETE_RESOURCE_POLICY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget23OrStr](aws_code_build/models/enums/x_amz_target23.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteResourcePolicyErrorBody](aws_code_build/errors/delete_resource_policy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteResourcePolicyErrorBody](aws_code_build/errors/delete_resource_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_source_credentials(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSourceCredentialsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_source_credentials(
    XAmzTarget26.CODE_BUILD_20161006_DELETE_SOURCE_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSourceCredentialsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_source_credentials(
    XAmzTarget26.CODE_BUILD_20161006_DELETE_SOURCE_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSourceCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget26OrStr](aws_code_build/models/enums/x_amz_target26.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteSourceCredentialsErrorBody](aws_code_build/errors/delete_source_credentials_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSourceCredentialsErrorBody](aws_code_build/errors/delete_source_credentials_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_webhook(
    XAmzTarget18.CODE_BUILD_20161006_DELETE_WEBHOOK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.delete_webhook(
    XAmzTarget18.CODE_BUILD_20161006_DELETE_WEBHOOK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget18OrStr](aws_code_build/models/enums/x_amz_target18.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteWebhookErrorBody](aws_code_build/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](aws_code_build/errors/delete_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_code_coverages(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeCodeCoveragesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more code coverage reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.describe_code_coverages(
    XAmzTarget29.CODE_BUILD_20161006_DESCRIBE_CODE_COVERAGES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeCodeCoveragesErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.describe_code_coverages(
    XAmzTarget29.CODE_BUILD_20161006_DESCRIBE_CODE_COVERAGES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeCodeCoveragesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget29OrStr](aws_code_build/models/enums/x_amz_target29.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DescribeCodeCoveragesErrorBody](aws_code_build/errors/describe_code_coverages_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeCodeCoveragesErrorBody](aws_code_build/errors/describe_code_coverages_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def describe_test_cases(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DescribeTestCasesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of details about test cases for a report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.describe_test_cases(
    XAmzTarget30.CODE_BUILD_20161006_DESCRIBE_TEST_CASES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeTestCasesErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.describe_test_cases(
    XAmzTarget30.CODE_BUILD_20161006_DESCRIBE_TEST_CASES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DescribeTestCasesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget30OrStr](aws_code_build/models/enums/x_amz_target30.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DescribeTestCasesErrorBody](aws_code_build/errors/describe_test_cases_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DescribeTestCasesErrorBody](aws_code_build/errors/describe_test_cases_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_report_group_trend(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetReportGroupTrendErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Analyzes and accumulates test report values for the specified test reports.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.get_report_group_trend(
    XAmzTarget31.CODE_BUILD_20161006_GET_REPORT_GROUP_TREND
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportGroupTrendErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.get_report_group_trend(
    XAmzTarget31.CODE_BUILD_20161006_GET_REPORT_GROUP_TREND
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetReportGroupTrendErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget31OrStr](aws_code_build/models/enums/x_amz_target31.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [GetReportGroupTrendErrorBody](aws_code_build/errors/get_report_group_trend_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetReportGroupTrendErrorBody](aws_code_build/errors/get_report_group_trend_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_resource_policy(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, GetResourcePolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a resource policy that is identified by its resource ARN.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.get_resource_policy(
    XAmzTarget24.CODE_BUILD_20161006_GET_RESOURCE_POLICY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourcePolicyErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.get_resource_policy(
    XAmzTarget24.CODE_BUILD_20161006_GET_RESOURCE_POLICY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget24OrStr](aws_code_build/models/enums/x_amz_target24.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [GetResourcePolicyErrorBody](aws_code_build/errors/get_resource_policy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[GetResourcePolicyErrorBody](aws_code_build/errors/get_resource_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_source_credentials(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ImportSourceCredentialsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.import_source_credentials(
    XAmzTarget27.CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportSourceCredentialsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.import_source_credentials(
    XAmzTarget27.CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportSourceCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget27OrStr](aws_code_build/models/enums/x_amz_target27.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ImportSourceCredentialsErrorBody](aws_code_build/errors/import_source_credentials_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ImportSourceCredentialsErrorBody](aws_code_build/errors/import_source_credentials_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invalidate_project_cache(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, InvalidateProjectCacheErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resets the cache for a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.invalidate_project_cache(
    XAmzTarget32.CODE_BUILD_20161006_INVALIDATE_PROJECT_CACHE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvalidateProjectCacheErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.invalidate_project_cache(
    XAmzTarget32.CODE_BUILD_20161006_INVALIDATE_PROJECT_CACHE
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvalidateProjectCacheErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget32OrStr](aws_code_build/models/enums/x_amz_target32.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [InvalidateProjectCacheErrorBody](aws_code_build/errors/invalidate_project_cache_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[InvalidateProjectCacheErrorBody](aws_code_build/errors/invalidate_project_cache_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_build_batches(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListBuildBatchesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the identifiers of your build batches in the current region.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_build_batches(
    XAmzTarget4.CODE_BUILD_20161006_LIST_BUILD_BATCHES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildBatchesErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_build_batches(
    XAmzTarget4.CODE_BUILD_20161006_LIST_BUILD_BATCHES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildBatchesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4OrStr](aws_code_build/models/enums/x_amz_target4.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListBuildBatchesErrorBody](aws_code_build/errors/list_build_batches_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListBuildBatchesErrorBody](aws_code_build/errors/list_build_batches_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_build_batches_for_project(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListBuildBatchesForProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the identifiers of the build batches for a specific project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_build_batches_for_project(
    XAmzTarget5.CODE_BUILD_20161006_LIST_BUILD_BATCHES_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildBatchesForProjectErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_build_batches_for_project(
    XAmzTarget5.CODE_BUILD_20161006_LIST_BUILD_BATCHES_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildBatchesForProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5OrStr](aws_code_build/models/enums/x_amz_target5.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListBuildBatchesForProjectErrorBody](aws_code_build/errors/list_build_batches_for_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListBuildBatchesForProjectErrorBody](aws_code_build/errors/list_build_batches_for_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds_for_project(x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListBuildsForProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_builds_for_project(
    XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsForProjectErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_builds_for_project(
    XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsForProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr](aws_code_build/models/enums/x_amz_target2_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListBuildsForProjectErrorBody](aws_code_build/errors/list_builds_for_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListBuildsForProjectErrorBody](aws_code_build/errors/list_builds_for_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_curated_environment_images(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about Docker images that are managed by CodeBuild.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_curated_environment_images(
    XAmzTarget34.CODE_BUILD_20161006_LIST_CURATED_ENVIRONMENT_IMAGES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_curated_environment_images(
    XAmzTarget34.CODE_BUILD_20161006_LIST_CURATED_ENVIRONMENT_IMAGES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget34OrStr](aws_code_build/models/enums/x_amz_target34.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [RawError](aws_code_build/core/results.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RawError](aws_code_build/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_report_groups(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListReportGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list ARNs for the report groups in the current Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_report_groups(
    XAmzTarget13.CODE_BUILD_20161006_LIST_REPORT_GROUPS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportGroupsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_report_groups(
    XAmzTarget13.CODE_BUILD_20161006_LIST_REPORT_GROUPS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget13OrStr](aws_code_build/models/enums/x_amz_target13.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListReportGroupsErrorBody](aws_code_build/errors/list_report_groups_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListReportGroupsErrorBody](aws_code_build/errors/list_report_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_reports_for_report_group(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListReportsForReportGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ARNs for the reports that belong to a ReportGroup.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_reports_for_report_group(
    XAmzTarget16.CODE_BUILD_20161006_LIST_REPORTS_FOR_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportsForReportGroupErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_reports_for_report_group(
    XAmzTarget16.CODE_BUILD_20161006_LIST_REPORTS_FOR_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportsForReportGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget16OrStr](aws_code_build/models/enums/x_amz_target16.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListReportsForReportGroupErrorBody](aws_code_build/errors/list_reports_for_report_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListReportsForReportGroupErrorBody](aws_code_build/errors/list_reports_for_report_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_shared_projects(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListSharedProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of projects that are shared with other Amazon Web Services accounts or users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_shared_projects(
    XAmzTarget35.CODE_BUILD_20161006_LIST_SHARED_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedProjectsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_shared_projects(
    XAmzTarget35.CODE_BUILD_20161006_LIST_SHARED_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget35OrStr](aws_code_build/models/enums/x_amz_target35.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListSharedProjectsErrorBody](aws_code_build/errors/list_shared_projects_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListSharedProjectsErrorBody](aws_code_build/errors/list_shared_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_shared_report_groups(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListSharedReportGroupsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of report groups that are shared with other Amazon Web Services accounts or users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_shared_report_groups(
    XAmzTarget36.CODE_BUILD_20161006_LIST_SHARED_REPORT_GROUPS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedReportGroupsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_shared_report_groups(
    XAmzTarget36.CODE_BUILD_20161006_LIST_SHARED_REPORT_GROUPS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSharedReportGroupsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget36OrStr](aws_code_build/models/enums/x_amz_target36.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListSharedReportGroupsErrorBody](aws_code_build/errors/list_shared_report_groups_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListSharedReportGroupsErrorBody](aws_code_build/errors/list_shared_report_groups_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_source_credentials(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListSourceCredentialsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of SourceCredentialsInfo objects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_source_credentials(
    XAmzTarget28.CODE_BUILD_20161006_LIST_SOURCE_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceCredentialsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.list_source_credentials(
    XAmzTarget28.CODE_BUILD_20161006_LIST_SOURCE_CREDENTIALS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSourceCredentialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget28OrStr](aws_code_build/models/enums/x_amz_target28.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListSourceCredentialsErrorBody](aws_code_build/errors/list_source_credentials_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListSourceCredentialsErrorBody](aws_code_build/errors/list_source_credentials_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def put_resource_policy(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, PutResourcePolicyErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stores a resource policy for the ARN of a Project or ReportGroup object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.put_resource_policy(
    XAmzTarget25.CODE_BUILD_20161006_PUT_RESOURCE_POLICY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutResourcePolicyErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.put_resource_policy(
    XAmzTarget25.CODE_BUILD_20161006_PUT_RESOURCE_POLICY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PutResourcePolicyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget25OrStr](aws_code_build/models/enums/x_amz_target25.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [PutResourcePolicyErrorBody](aws_code_build/errors/put_resource_policy_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[PutResourcePolicyErrorBody](aws_code_build/errors/put_resource_policy_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retry_build_batch(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RetryBuildBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts a failed batch build. Only batch builds that have failed can be retried.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.retry_build_batch(
    XAmzTarget33.CODE_BUILD_20161006_RETRY_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBuildBatchErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.retry_build_batch(
    XAmzTarget33.CODE_BUILD_20161006_RETRY_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBuildBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget33OrStr](aws_code_build/models/enums/x_amz_target33.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [RetryBuildBatchErrorBody](aws_code_build/errors/retry_build_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RetryBuildBatchErrorBody](aws_code_build/errors/retry_build_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_build_batch(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartBuildBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a batch build for a project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.start_build_batch(
    XAmzTarget21.CODE_BUILD_20161006_START_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartBuildBatchErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.start_build_batch(
    XAmzTarget21.CODE_BUILD_20161006_START_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartBuildBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget21OrStr](aws_code_build/models/enums/x_amz_target21.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StartBuildBatchErrorBody](aws_code_build/errors/start_build_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartBuildBatchErrorBody](aws_code_build/errors/start_build_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_build_batch(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StopBuildBatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stops a running batch build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.stop_build_batch(
    XAmzTarget22.CODE_BUILD_20161006_STOP_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopBuildBatchErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.stop_build_batch(
    XAmzTarget22.CODE_BUILD_20161006_STOP_BUILD_BATCH
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopBuildBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget22OrStr](aws_code_build/models/enums/x_amz_target22.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StopBuildBatchErrorBody](aws_code_build/errors/stop_build_batch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StopBuildBatchErrorBody](aws_code_build/errors/stop_build_batch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the settings of a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_project(
    XAmzTarget9.CODE_BUILD_20161006_UPDATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_project(
    XAmzTarget9.CODE_BUILD_20161006_UPDATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget9OrStr](aws_code_build/models/enums/x_amz_target9.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [UpdateProjectErrorBody](aws_code_build/errors/update_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateProjectErrorBody](aws_code_build/errors/update_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project_visibility(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateProjectVisibilityErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see Public build projects in the CodeBuild User Guide. The following should be kept in mind when making your projects public: All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public. All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are: Do not store sensitive values in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values. Follow Best practices for using webhooks in the CodeBuild User Guide to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible. A malicious user can use public builds to distribute malicious artifacts. We recommend that yo

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_project_visibility(
    XAmzTarget37.CODE_BUILD_20161006_UPDATE_PROJECT_VISIBILITY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectVisibilityErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_project_visibility(
    XAmzTarget37.CODE_BUILD_20161006_UPDATE_PROJECT_VISIBILITY
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProjectVisibilityErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget37OrStr](aws_code_build/models/enums/x_amz_target37.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [UpdateProjectVisibilityErrorBody](aws_code_build/errors/update_project_visibility_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateProjectVisibilityErrorBody](aws_code_build/errors/update_project_visibility_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_report_group(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateReportGroupErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a report group.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_report_group(
    XAmzTarget14.CODE_BUILD_20161006_UPDATE_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateReportGroupErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_report_group(
    XAmzTarget14.CODE_BUILD_20161006_UPDATE_REPORT_GROUP
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateReportGroupErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget14OrStr](aws_code_build/models/enums/x_amz_target14.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [UpdateReportGroupErrorBody](aws_code_build/errors/update_report_group_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateReportGroupErrorBody](aws_code_build/errors/update_report_group_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateWebhookErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the webhook associated with an CodeBuild build project. If you use Bitbucket for your repository, rotateSecret is ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_webhook(
    XAmzTarget19.CODE_BUILD_20161006_UPDATE_WEBHOOK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild.with_raw_response.update_webhook(
    XAmzTarget19.CODE_BUILD_20161006_UPDATE_WEBHOOK
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget19OrStr](aws_code_build/models/enums/x_amz_target19.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [UpdateWebhookErrorBody](aws_code_build/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](aws_code_build/errors/update_webhook_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Deletereport

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Deletereport](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_deletereport.py)

<details>
<summary><code>def delete_report(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteReportErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a report.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_deletereport.with_raw_response.delete_report(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CODE_BUILD_20161006_DELETE_REPORT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_deletereport.with_raw_response.delete_report(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CODE_BUILD_20161006_DELETE_REPORT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteReportErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_deletereport_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteReportErrorBody](aws_code_build/errors/delete_report_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteReportErrorBody](aws_code_build/errors/delete_report_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listbuilds

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listbuilds](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_listbuilds.py)

<details>
<summary><code>def list_builds(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListBuildsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build IDs, with each build ID representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_listbuilds.with_raw_response.list_builds(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CODE_BUILD_20161006_LIST_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_listbuilds.with_raw_response.list_builds(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CODE_BUILD_20161006_LIST_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listbuilds_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListBuildsErrorBody](aws_code_build/errors/list_builds_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListBuildsErrorBody](aws_code_build/errors/list_builds_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listprojects

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listprojects](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_listprojects.py)

<details>
<summary><code>def list_projects(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListProjectsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build project names, with each build project name representing a single build project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_listprojects.with_raw_response.list_projects(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CODE_BUILD_20161006_LIST_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_listprojects.with_raw_response.list_projects(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CODE_BUILD_20161006_LIST_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listprojects_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListProjectsErrorBody](aws_code_build/errors/list_projects_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListProjectsErrorBody](aws_code_build/errors/list_projects_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Listreports

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Listreports](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_listreports.py)

<details>
<summary><code>def list_reports(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListReportsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of ARNs for the reports in the current Amazon Web Services account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_listreports.with_raw_response.list_reports(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CODE_BUILD_20161006_LIST_REPORTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportsErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_listreports.with_raw_response.list_reports(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CODE_BUILD_20161006_LIST_REPORTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListReportsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listreports_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListReportsErrorBody](aws_code_build/errors/list_reports_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListReportsErrorBody](aws_code_build/errors/list_reports_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Retrybuild

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Retrybuild](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_retrybuild.py)

<details>
<summary><code>def retry_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RetryBuildErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restarts a build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_retrybuild.with_raw_response.retry_build(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CODE_BUILD_20161006_RETRY_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBuildErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_retrybuild.with_raw_response.retry_build(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CODE_BUILD_20161006_RETRY_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_retrybuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [RetryBuildErrorBody](aws_code_build/errors/retry_build_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[RetryBuildErrorBody](aws_code_build/errors/retry_build_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006Startbuild

> Source: [AwsCodebuildXAmzTargetCodebuild20161006Startbuild](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_startbuild.py)

<details>
<summary><code>def start_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartBuildErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_startbuild.with_raw_response.start_build(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CODE_BUILD_20161006_START_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartBuildErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_startbuild.with_raw_response.start_build(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CODE_BUILD_20161006_START_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_startbuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StartBuildErrorBody](aws_code_build/errors/start_build_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartBuildErrorBody](aws_code_build/errors/start_build_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi

> Source: [AwsCodebuildXAmzTargetCodebuild20161006StopbuildApi](aws_code_build/apis/aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api.py)

<details>
<summary><code>def stop_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StopBuildErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to stop running a build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api.with_raw_response.stop_build(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CODE_BUILD_20161006_STOP_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopBuildErrorBody
```

**Async**

```python
result = await async_client.aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api.with_raw_response.stop_build(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CODE_BUILD_20161006_STOP_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StopBuildErrorBody](aws_code_build/errors/stop_build_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StopBuildErrorBody](aws_code_build/errors/stop_build_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Builds

> Source: [Builds](aws_code_build/apis/builds.py)

<details>
<summary><code>def batch_delete_builds2(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchDeleteBuilds2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.batch_delete_builds2(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchDeleteBuilds2ErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.batch_delete_builds2(
    XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchDeleteBuilds2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchDeleteBuilds2ErrorBody](aws_code_build/errors/batch_delete_builds2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchDeleteBuilds2ErrorBody](aws_code_build/errors/batch_delete_builds2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def batch_get_builds2(x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetBuilds2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more builds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.batch_get_builds2(
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetBuilds2ErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.batch_get_builds2(
    XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetBuilds2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr](aws_code_build/models/enums/x_amz_target1_aws_code_build_aws_codebuild_x_amz_target_codebuild_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetBuilds2ErrorBody](aws_code_build/errors/batch_get_builds2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetBuilds2ErrorBody](aws_code_build/errors/batch_get_builds2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds2(x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListBuilds2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build IDs, with each build ID representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.list_builds2(XAmzTarget2AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuilds2ErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_builds2(
    XAmzTarget2AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuilds2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCodeBuildBuildsApiOrStr](aws_code_build/models/enums/x_amz_target2_aws_code_build_builds_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListBuilds2ErrorBody](aws_code_build/errors/list_builds2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListBuilds2ErrorBody](aws_code_build/errors/list_builds2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds_for_project2(x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListBuildsForProject2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.list_builds_for_project2(
    XAmzTarget3AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsForProject2ErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_builds_for_project2(
    XAmzTarget3AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsForProject2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCodeBuildBuildsApiOrStr](aws_code_build/models/enums/x_amz_target3_aws_code_build_builds_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListBuildsForProject2ErrorBody](aws_code_build/errors/list_builds_for_project2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListBuildsForProject2ErrorBody](aws_code_build/errors/list_builds_for_project2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_build2(x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartBuild2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts running a build with the settings defined in the project. These setting include: how to run a build, where to get the source code, which build environment to use, which build commands to run, and where to store the build output. You can also start a build run by overriding some of the build settings in the project. The overrides only apply for that specific start build request. The settings in the project are unaltered.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.start_build2(XAmzTarget4AwsCodeBuildBuildsApi.CODE_BUILD_20161006_START_BUILD)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartBuild2ErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.start_build2(
    XAmzTarget4AwsCodeBuildBuildsApi.CODE_BUILD_20161006_START_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartBuild2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCodeBuildBuildsApiOrStr](aws_code_build/models/enums/x_amz_target4_aws_code_build_builds_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StartBuild2ErrorBody](aws_code_build/errors/start_build2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartBuild2ErrorBody](aws_code_build/errors/start_build2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_build2(x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StopBuild2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Attempts to stop running a build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.stop_build2(XAmzTarget5AwsCodeBuildBuildsApi.CODE_BUILD_20161006_STOP_BUILD)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopBuild2ErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.stop_build2(
    XAmzTarget5AwsCodeBuildBuildsApi.CODE_BUILD_20161006_STOP_BUILD
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopBuild2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget5AwsCodeBuildBuildsApiOrStr](aws_code_build/models/enums/x_amz_target5_aws_code_build_builds_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StopBuild2ErrorBody](aws_code_build/errors/stop_build2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StopBuild2ErrorBody](aws_code_build/errors/stop_build2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CommandExecutionApi

> Source: [CommandExecutionApi](aws_code_build/apis/command_execution_api.py)

<details>
<summary><code>def batch_get_command_executions(x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetCommandExecutionsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the command executions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.command_execution_api.with_raw_response.batch_get_command_executions(
    XAmzTargetAwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_BATCH_GET_COMMAND_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetCommandExecutionsErrorBody
```

**Async**

```python
result = await async_client.command_execution_api.with_raw_response.batch_get_command_executions(
    XAmzTargetAwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_BATCH_GET_COMMAND_EXECUTIONS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetCommandExecutionsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildCommandExecutionApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_command_execution_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetCommandExecutionsErrorBody](aws_code_build/errors/batch_get_command_executions_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetCommandExecutionsErrorBody](aws_code_build/errors/batch_get_command_executions_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_command_executions_for_sandbox(x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListCommandExecutionsForSandboxErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of command executions for a sandbox.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.command_execution_api.with_raw_response.list_command_executions_for_sandbox(
    XAmzTarget1AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_LIST_COMMAND_EXECUTIONS_FOR_SANDBOX
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommandExecutionsForSandboxErrorBody
```

**Async**

```python
result = await async_client.command_execution_api.with_raw_response.list_command_executions_for_sandbox(
    XAmzTarget1AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_LIST_COMMAND_EXECUTIONS_FOR_SANDBOX
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCommandExecutionsForSandboxErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr](aws_code_build/models/enums/x_amz_target1_aws_code_build_command_execution_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListCommandExecutionsForSandboxErrorBody](aws_code_build/errors/list_command_executions_for_sandbox_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListCommandExecutionsForSandboxErrorBody](aws_code_build/errors/list_command_executions_for_sandbox_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_command_execution(x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, StartCommandExecutionErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Starts a command execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.command_execution_api.with_raw_response.start_command_execution(
    XAmzTarget2AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_START_COMMAND_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCommandExecutionErrorBody
```

**Async**

```python
result = await async_client.command_execution_api.with_raw_response.start_command_execution(
    XAmzTarget2AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_START_COMMAND_EXECUTION
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartCommandExecutionErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr](aws_code_build/models/enums/x_amz_target2_aws_code_build_command_execution_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [StartCommandExecutionErrorBody](aws_code_build/errors/start_command_execution_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[StartCommandExecutionErrorBody](aws_code_build/errors/start_command_execution_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## FleetApi

> Source: [FleetApi](aws_code_build/apis/fleet_api.py)

<details>
<summary><code>def batch_get_fleets(x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetFleetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more compute fleets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fleet_api.with_raw_response.batch_get_fleets(
    XAmzTargetAwsCodeBuildFleetApi.CODE_BUILD_20161006_BATCH_GET_FLEETS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetFleetsErrorBody
```

**Async**

```python
result = await async_client.fleet_api.with_raw_response.batch_get_fleets(
    XAmzTargetAwsCodeBuildFleetApi.CODE_BUILD_20161006_BATCH_GET_FLEETS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetFleetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildFleetApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_fleet_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetFleetsErrorBody](aws_code_build/errors/batch_get_fleets_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetFleetsErrorBody](aws_code_build/errors/batch_get_fleets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_fleet(x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateFleetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a compute fleet.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fleet_api.with_raw_response.create_fleet(
    XAmzTarget1AwsCodeBuildFleetApi.CODE_BUILD_20161006_CREATE_FLEET
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFleetErrorBody
```

**Async**

```python
result = await async_client.fleet_api.with_raw_response.create_fleet(
    XAmzTarget1AwsCodeBuildFleetApi.CODE_BUILD_20161006_CREATE_FLEET
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateFleetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCodeBuildFleetApiOrStr](aws_code_build/models/enums/x_amz_target1_aws_code_build_fleet_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [CreateFleetErrorBody](aws_code_build/errors/create_fleet_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateFleetErrorBody](aws_code_build/errors/create_fleet_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_fleet(x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteFleetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a compute fleet. When you delete a compute fleet, its builds are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fleet_api.with_raw_response.delete_fleet(
    XAmzTarget2AwsCodeBuildFleetApi.CODE_BUILD_20161006_DELETE_FLEET
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFleetErrorBody
```

**Async**

```python
result = await async_client.fleet_api.with_raw_response.delete_fleet(
    XAmzTarget2AwsCodeBuildFleetApi.CODE_BUILD_20161006_DELETE_FLEET
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteFleetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCodeBuildFleetApiOrStr](aws_code_build/models/enums/x_amz_target2_aws_code_build_fleet_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteFleetErrorBody](aws_code_build/errors/delete_fleet_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteFleetErrorBody](aws_code_build/errors/delete_fleet_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_fleets(x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListFleetsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of compute fleet names with each compute fleet name representing a single compute fleet.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fleet_api.with_raw_response.list_fleets(XAmzTarget3AwsCodeBuildFleetApi.CODE_BUILD_20161006_LIST_FLEETS)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFleetsErrorBody
```

**Async**

```python
result = await async_client.fleet_api.with_raw_response.list_fleets(
    XAmzTarget3AwsCodeBuildFleetApi.CODE_BUILD_20161006_LIST_FLEETS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListFleetsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCodeBuildFleetApiOrStr](aws_code_build/models/enums/x_amz_target3_aws_code_build_fleet_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListFleetsErrorBody](aws_code_build/errors/list_fleets_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListFleetsErrorBody](aws_code_build/errors/list_fleets_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_fleet(x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateFleetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a compute fleet.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.fleet_api.with_raw_response.update_fleet(
    XAmzTarget4AwsCodeBuildFleetApi.CODE_BUILD_20161006_UPDATE_FLEET
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFleetErrorBody
```

**Async**

```python
result = await async_client.fleet_api.with_raw_response.update_fleet(
    XAmzTarget4AwsCodeBuildFleetApi.CODE_BUILD_20161006_UPDATE_FLEET
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateFleetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCodeBuildFleetApiOrStr](aws_code_build/models/enums/x_amz_target4_aws_code_build_fleet_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [UpdateFleetErrorBody](aws_code_build/errors/update_fleet_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateFleetErrorBody](aws_code_build/errors/update_fleet_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Projects

> Source: [Projects](aws_code_build/apis/projects.py)

<details>
<summary><code>def batch_get_projects2(x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetProjects2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about one or more build projects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.batch_get_projects2(
    XAmzTargetAwsCodeBuildProjectsApi.CODE_BUILD_20161006_BATCH_GET_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetProjects2ErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.batch_get_projects2(
    XAmzTargetAwsCodeBuildProjectsApi.CODE_BUILD_20161006_BATCH_GET_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetProjects2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildProjectsApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_projects_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetProjects2ErrorBody](aws_code_build/errors/batch_get_projects2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetProjects2ErrorBody](aws_code_build/errors/batch_get_projects2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_project2(x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, CreateProject2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.create_project2(
    XAmzTarget1AwsCodeBuildProjectsApi.CODE_BUILD_20161006_CREATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProject2ErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.create_project2(
    XAmzTarget1AwsCodeBuildProjectsApi.CODE_BUILD_20161006_CREATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProject2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCodeBuildProjectsApiOrStr](aws_code_build/models/enums/x_amz_target1_aws_code_build_projects_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [CreateProject2ErrorBody](aws_code_build/errors/create_project2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[CreateProject2ErrorBody](aws_code_build/errors/create_project2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project2(x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteProject2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a build project. When you delete a project, its builds are not deleted.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.delete_project2(
    XAmzTarget2AwsCodeBuildProjectsApi.CODE_BUILD_20161006_DELETE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProject2ErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.delete_project2(
    XAmzTarget2AwsCodeBuildProjectsApi.CODE_BUILD_20161006_DELETE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProject2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCodeBuildProjectsApiOrStr](aws_code_build/models/enums/x_amz_target2_aws_code_build_projects_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [DeleteProject2ErrorBody](aws_code_build/errors/delete_project2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteProject2ErrorBody](aws_code_build/errors/delete_project2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects2(x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListProjects2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of build project names, with each build project name representing a single build project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.list_projects2(
    XAmzTarget3AwsCodeBuildProjectsApi.CODE_BUILD_20161006_LIST_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjects2ErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.list_projects2(
    XAmzTarget3AwsCodeBuildProjectsApi.CODE_BUILD_20161006_LIST_PROJECTS
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjects2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget3AwsCodeBuildProjectsApiOrStr](aws_code_build/models/enums/x_amz_target3_aws_code_build_projects_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListProjects2ErrorBody](aws_code_build/errors/list_projects2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListProjects2ErrorBody](aws_code_build/errors/list_projects2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_project2(x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, UpdateProject2ErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the settings of a build project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.projects.with_raw_response.update_project2(
    XAmzTarget4AwsCodeBuildProjectsApi.CODE_BUILD_20161006_UPDATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProject2ErrorBody
```

**Async**

```python
result = await async_client.projects.with_raw_response.update_project2(
    XAmzTarget4AwsCodeBuildProjectsApi.CODE_BUILD_20161006_UPDATE_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateProject2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget4AwsCodeBuildProjectsApiOrStr](aws_code_build/models/enums/x_amz_target4_aws_code_build_projects_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [UpdateProject2ErrorBody](aws_code_build/errors/update_project2_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[UpdateProject2ErrorBody](aws_code_build/errors/update_project2_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sandboxe

> Source: [Sandboxe](aws_code_build/apis/sandboxe.py)

<details>
<summary><code>def batch_get_sandboxes(x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, BatchGetSandboxesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets information about the sandbox status.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sandboxe.with_raw_response.batch_get_sandboxes(
    XAmzTargetAwsCodeBuildSandboxeApi.CODE_BUILD_20161006_BATCH_GET_SANDBOXES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetSandboxesErrorBody
```

**Async**

```python
result = await async_client.sandboxe.with_raw_response.batch_get_sandboxes(
    XAmzTargetAwsCodeBuildSandboxeApi.CODE_BUILD_20161006_BATCH_GET_SANDBOXES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchGetSandboxesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTargetAwsCodeBuildSandboxeApiOrStr](aws_code_build/models/enums/x_amz_target_aws_code_build_sandboxe_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [BatchGetSandboxesErrorBody](aws_code_build/errors/batch_get_sandboxes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[BatchGetSandboxesErrorBody](aws_code_build/errors/batch_get_sandboxes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sandboxes(x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListSandboxesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sandboxes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sandboxe.with_raw_response.list_sandboxes(
    XAmzTarget1AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSandboxesErrorBody
```

**Async**

```python
result = await async_client.sandboxe.with_raw_response.list_sandboxes(
    XAmzTarget1AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSandboxesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget1AwsCodeBuildSandboxeApiOrStr](aws_code_build/models/enums/x_amz_target1_aws_code_build_sandboxe_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListSandboxesErrorBody](aws_code_build/errors/list_sandboxes_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListSandboxesErrorBody](aws_code_build/errors/list_sandboxes_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sandboxes_for_project(x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ListSandboxesForProjectErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Gets a list of sandboxes for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sandboxe.with_raw_response.list_sandboxes_for_project(
    XAmzTarget2AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSandboxesForProjectErrorBody
```

**Async**

```python
result = await async_client.sandboxe.with_raw_response.list_sandboxes_for_project(
    XAmzTarget2AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES_FOR_PROJECT
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSandboxesForProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>x_amz_target</code> | <code>[XAmzTarget2AwsCodeBuildSandboxeApiOrStr](aws_code_build/models/enums/x_amz_target2_aws_code_build_sandboxe_api.py)</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](aws_code_build/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](aws_code_build/core/results.py)&#91;None, [ListSandboxesForProjectErrorBody](aws_code_build/errors/list_sandboxes_for_project_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ListSandboxesForProjectErrorBody](aws_code_build/errors/list_sandboxes_for_project_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](aws_code_build/core/results.py)</code> |
| anything unmapped | <code>[RawError](aws_code_build/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

