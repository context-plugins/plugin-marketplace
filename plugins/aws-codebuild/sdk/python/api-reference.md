# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AwsCodeBuildClient](aws_code_build/client.py)

## AwsCodebuildApi

> Source: [AwsCodebuildApi](aws_code_build/apis/aws_codebuild_api.py)

<details>
<summary><code>def start_sandbox(x_amz_target: XAmzTargetOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_api.start_sandbox(XAmzTarget.CODE_BUILD_20161006_START_SANDBOX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSandboxErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_api.start_sandbox(XAmzTarget.CODE_BUILD_20161006_START_SANDBOX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSandboxErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StartSandboxErrorBody](aws_code_build/errors/start_sandbox_error.py)&#93;</code>

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
<summary><code>def start_sandbox_connection(x_amz_target: XAmzTarget2OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_api.start_sandbox_connection(XAmzTarget2.CODE_BUILD_20161006_START_SANDBOX_CONNECTION)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSandboxConnectionErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_api.start_sandbox_connection(
        XAmzTarget2.CODE_BUILD_20161006_START_SANDBOX_CONNECTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartSandboxConnectionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StartSandboxConnectionErrorBody](aws_code_build/errors/start_sandbox_connection_error.py)&#93;</code>

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
<summary><code>def stop_sandbox(x_amz_target: XAmzTarget1OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_api.stop_sandbox(XAmzTarget1.CODE_BUILD_20161006_STOP_SANDBOX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopSandboxErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_api.stop_sandbox(XAmzTarget1.CODE_BUILD_20161006_STOP_SANDBOX)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopSandboxErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StopSandboxErrorBody](aws_code_build/errors/stop_sandbox_error.py)&#93;</code>

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
<summary><code>def batch_delete_builds(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.batch_delete_builds(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDeleteBuildsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.batch_delete_builds(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDeleteBuildsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchDeleteBuildsErrorBody](aws_code_build/errors/batch_delete_builds_error.py)&#93;</code>

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
<summary><code>def batch_get_build_batches(x_amz_target: XAmzTarget3OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.batch_get_build_batches(
        XAmzTarget3.CODE_BUILD_20161006_BATCH_GET_BUILD_BATCHES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetBuildBatchesErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.batch_get_build_batches(
        XAmzTarget3.CODE_BUILD_20161006_BATCH_GET_BUILD_BATCHES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetBuildBatchesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetBuildBatchesErrorBody](aws_code_build/errors/batch_get_build_batches_error.py)&#93;</code>

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
<summary><code>def batch_get_builds(x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.batch_get_builds(
        XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetBuildsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.batch_get_builds(
        XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetBuildsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetBuildsErrorBody](aws_code_build/errors/batch_get_builds_error.py)&#93;</code>

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
<summary><code>def batch_get_projects(x_amz_target: XAmzTarget6OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.batch_get_projects(XAmzTarget6.CODE_BUILD_20161006_BATCH_GET_PROJECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetProjectsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.batch_get_projects(
        XAmzTarget6.CODE_BUILD_20161006_BATCH_GET_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetProjectsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetProjectsErrorBody](aws_code_build/errors/batch_get_projects_error.py)&#93;</code>

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
<summary><code>def batch_get_report_groups(x_amz_target: XAmzTarget10OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.batch_get_report_groups(
        XAmzTarget10.CODE_BUILD_20161006_BATCH_GET_REPORT_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetReportGroupsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.batch_get_report_groups(
        XAmzTarget10.CODE_BUILD_20161006_BATCH_GET_REPORT_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetReportGroupsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetReportGroupsErrorBody](aws_code_build/errors/batch_get_report_groups_error.py)&#93;</code>

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
<summary><code>def batch_get_reports(x_amz_target: XAmzTarget15OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.batch_get_reports(XAmzTarget15.CODE_BUILD_20161006_BATCH_GET_REPORTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetReportsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.batch_get_reports(
        XAmzTarget15.CODE_BUILD_20161006_BATCH_GET_REPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetReportsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetReportsErrorBody](aws_code_build/errors/batch_get_reports_error.py)&#93;</code>

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
<summary><code>def create_project(x_amz_target: XAmzTarget7OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.create_project(XAmzTarget7.CODE_BUILD_20161006_CREATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.create_project(
        XAmzTarget7.CODE_BUILD_20161006_CREATE_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[CreateProjectErrorBody](aws_code_build/errors/create_project_error.py)&#93;</code>

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
<summary><code>def create_report_group(x_amz_target: XAmzTarget11OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.create_report_group(
        XAmzTarget11.CODE_BUILD_20161006_CREATE_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReportGroupErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.create_report_group(
        XAmzTarget11.CODE_BUILD_20161006_CREATE_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateReportGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[CreateReportGroupErrorBody](aws_code_build/errors/create_report_group_error.py)&#93;</code>

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
<summary><code>def create_webhook(x_amz_target: XAmzTarget17OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.create_webhook(XAmzTarget17.CODE_BUILD_20161006_CREATE_WEBHOOK)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.create_webhook(
        XAmzTarget17.CODE_BUILD_20161006_CREATE_WEBHOOK
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[CreateWebhookErrorBody](aws_code_build/errors/create_webhook_error.py)&#93;</code>

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
<summary><code>def delete_build_batch(x_amz_target: XAmzTarget20OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.delete_build_batch(XAmzTarget20.CODE_BUILD_20161006_DELETE_BUILD_BATCH)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBuildBatchErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.delete_build_batch(
        XAmzTarget20.CODE_BUILD_20161006_DELETE_BUILD_BATCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBuildBatchErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteBuildBatchErrorBody](aws_code_build/errors/delete_build_batch_error.py)&#93;</code>

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
<summary><code>def delete_project(x_amz_target: XAmzTarget8OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.delete_project(XAmzTarget8.CODE_BUILD_20161006_DELETE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.delete_project(
        XAmzTarget8.CODE_BUILD_20161006_DELETE_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteProjectErrorBody](aws_code_build/errors/delete_project_error.py)&#93;</code>

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
<summary><code>def delete_report_group(x_amz_target: XAmzTarget12OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.delete_report_group(
        XAmzTarget12.CODE_BUILD_20161006_DELETE_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportGroupErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.delete_report_group(
        XAmzTarget12.CODE_BUILD_20161006_DELETE_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteReportGroupErrorBody](aws_code_build/errors/delete_report_group_error.py)&#93;</code>

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
<summary><code>def delete_resource_policy(x_amz_target: XAmzTarget23OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.delete_resource_policy(
        XAmzTarget23.CODE_BUILD_20161006_DELETE_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.delete_resource_policy(
        XAmzTarget23.CODE_BUILD_20161006_DELETE_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourcePolicyErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteResourcePolicyErrorBody](aws_code_build/errors/delete_resource_policy_error.py)&#93;</code>

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
<summary><code>def delete_source_credentials(x_amz_target: XAmzTarget26OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.delete_source_credentials(
        XAmzTarget26.CODE_BUILD_20161006_DELETE_SOURCE_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSourceCredentialsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.delete_source_credentials(
        XAmzTarget26.CODE_BUILD_20161006_DELETE_SOURCE_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSourceCredentialsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteSourceCredentialsErrorBody](aws_code_build/errors/delete_source_credentials_error.py)&#93;</code>

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
<summary><code>def delete_webhook(x_amz_target: XAmzTarget18OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.delete_webhook(XAmzTarget18.CODE_BUILD_20161006_DELETE_WEBHOOK)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.delete_webhook(
        XAmzTarget18.CODE_BUILD_20161006_DELETE_WEBHOOK
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteWebhookErrorBody](aws_code_build/errors/delete_webhook_error.py)&#93;</code>

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
<summary><code>def describe_code_coverages(x_amz_target: XAmzTarget29OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.describe_code_coverages(
        XAmzTarget29.CODE_BUILD_20161006_DESCRIBE_CODE_COVERAGES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCodeCoveragesErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.describe_code_coverages(
        XAmzTarget29.CODE_BUILD_20161006_DESCRIBE_CODE_COVERAGES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeCodeCoveragesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DescribeCodeCoveragesErrorBody](aws_code_build/errors/describe_code_coverages_error.py)&#93;</code>

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
<summary><code>def describe_test_cases(x_amz_target: XAmzTarget30OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.describe_test_cases(
        XAmzTarget30.CODE_BUILD_20161006_DESCRIBE_TEST_CASES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestCasesErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.describe_test_cases(
        XAmzTarget30.CODE_BUILD_20161006_DESCRIBE_TEST_CASES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DescribeTestCasesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DescribeTestCasesErrorBody](aws_code_build/errors/describe_test_cases_error.py)&#93;</code>

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
<summary><code>def get_report_group_trend(x_amz_target: XAmzTarget31OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.get_report_group_trend(
        XAmzTarget31.CODE_BUILD_20161006_GET_REPORT_GROUP_TREND
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportGroupTrendErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.get_report_group_trend(
        XAmzTarget31.CODE_BUILD_20161006_GET_REPORT_GROUP_TREND
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetReportGroupTrendErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[GetReportGroupTrendErrorBody](aws_code_build/errors/get_report_group_trend_error.py)&#93;</code>

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
<summary><code>def get_resource_policy(x_amz_target: XAmzTarget24OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.get_resource_policy(
        XAmzTarget24.CODE_BUILD_20161006_GET_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourcePolicyErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.get_resource_policy(
        XAmzTarget24.CODE_BUILD_20161006_GET_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourcePolicyErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[GetResourcePolicyErrorBody](aws_code_build/errors/get_resource_policy_error.py)&#93;</code>

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
<summary><code>def import_source_credentials(x_amz_target: XAmzTarget27OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.import_source_credentials(
        XAmzTarget27.CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportSourceCredentialsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.import_source_credentials(
        XAmzTarget27.CODE_BUILD_20161006_IMPORT_SOURCE_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportSourceCredentialsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ImportSourceCredentialsErrorBody](aws_code_build/errors/import_source_credentials_error.py)&#93;</code>

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
<summary><code>def invalidate_project_cache(x_amz_target: XAmzTarget32OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.invalidate_project_cache(
        XAmzTarget32.CODE_BUILD_20161006_INVALIDATE_PROJECT_CACHE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InvalidateProjectCacheErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.invalidate_project_cache(
        XAmzTarget32.CODE_BUILD_20161006_INVALIDATE_PROJECT_CACHE
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InvalidateProjectCacheErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[InvalidateProjectCacheErrorBody](aws_code_build/errors/invalidate_project_cache_error.py)&#93;</code>

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
<summary><code>def list_build_batches(x_amz_target: XAmzTarget4OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_build_batches(XAmzTarget4.CODE_BUILD_20161006_LIST_BUILD_BATCHES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildBatchesErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_build_batches(
        XAmzTarget4.CODE_BUILD_20161006_LIST_BUILD_BATCHES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildBatchesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListBuildBatchesErrorBody](aws_code_build/errors/list_build_batches_error.py)&#93;</code>

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
<summary><code>def list_build_batches_for_project(x_amz_target: XAmzTarget5OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_build_batches_for_project(
        XAmzTarget5.CODE_BUILD_20161006_LIST_BUILD_BATCHES_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildBatchesForProjectErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_build_batches_for_project(
        XAmzTarget5.CODE_BUILD_20161006_LIST_BUILD_BATCHES_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildBatchesForProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListBuildBatchesForProjectErrorBody](aws_code_build/errors/list_build_batches_for_project_error.py)&#93;</code>

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
<summary><code>def list_builds_for_project(x_amz_target: XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_builds_for_project(
        XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsForProjectErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_builds_for_project(
        XAmzTarget2AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsForProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListBuildsForProjectErrorBody](aws_code_build/errors/list_builds_for_project_error.py)&#93;</code>

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
<summary><code>def list_curated_environment_images(x_amz_target: XAmzTarget34OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_curated_environment_images(
        XAmzTarget34.CODE_BUILD_20161006_LIST_CURATED_ENVIRONMENT_IMAGES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_curated_environment_images(
        XAmzTarget34.CODE_BUILD_20161006_LIST_CURATED_ENVIRONMENT_IMAGES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[RawError](aws_code_build/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_report_groups(x_amz_target: XAmzTarget13OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_report_groups(XAmzTarget13.CODE_BUILD_20161006_LIST_REPORT_GROUPS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportGroupsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_report_groups(
        XAmzTarget13.CODE_BUILD_20161006_LIST_REPORT_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportGroupsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListReportGroupsErrorBody](aws_code_build/errors/list_report_groups_error.py)&#93;</code>

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
<summary><code>def list_reports_for_report_group(x_amz_target: XAmzTarget16OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_reports_for_report_group(
        XAmzTarget16.CODE_BUILD_20161006_LIST_REPORTS_FOR_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportsForReportGroupErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_reports_for_report_group(
        XAmzTarget16.CODE_BUILD_20161006_LIST_REPORTS_FOR_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportsForReportGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListReportsForReportGroupErrorBody](aws_code_build/errors/list_reports_for_report_group_error.py)&#93;</code>

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
<summary><code>def list_shared_projects(x_amz_target: XAmzTarget35OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_shared_projects(
        XAmzTarget35.CODE_BUILD_20161006_LIST_SHARED_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedProjectsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_shared_projects(
        XAmzTarget35.CODE_BUILD_20161006_LIST_SHARED_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedProjectsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListSharedProjectsErrorBody](aws_code_build/errors/list_shared_projects_error.py)&#93;</code>

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
<summary><code>def list_shared_report_groups(x_amz_target: XAmzTarget36OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_shared_report_groups(
        XAmzTarget36.CODE_BUILD_20161006_LIST_SHARED_REPORT_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedReportGroupsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_shared_report_groups(
        XAmzTarget36.CODE_BUILD_20161006_LIST_SHARED_REPORT_GROUPS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSharedReportGroupsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListSharedReportGroupsErrorBody](aws_code_build/errors/list_shared_report_groups_error.py)&#93;</code>

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
<summary><code>def list_source_credentials(x_amz_target: XAmzTarget28OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.list_source_credentials(
        XAmzTarget28.CODE_BUILD_20161006_LIST_SOURCE_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSourceCredentialsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.list_source_credentials(
        XAmzTarget28.CODE_BUILD_20161006_LIST_SOURCE_CREDENTIALS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSourceCredentialsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListSourceCredentialsErrorBody](aws_code_build/errors/list_source_credentials_error.py)&#93;</code>

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
<summary><code>def put_resource_policy(x_amz_target: XAmzTarget25OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.put_resource_policy(
        XAmzTarget25.CODE_BUILD_20161006_PUT_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutResourcePolicyErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.put_resource_policy(
        XAmzTarget25.CODE_BUILD_20161006_PUT_RESOURCE_POLICY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PutResourcePolicyErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[PutResourcePolicyErrorBody](aws_code_build/errors/put_resource_policy_error.py)&#93;</code>

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
<summary><code>def retry_build_batch(x_amz_target: XAmzTarget33OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.retry_build_batch(XAmzTarget33.CODE_BUILD_20161006_RETRY_BUILD_BATCH)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetryBuildBatchErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.retry_build_batch(
        XAmzTarget33.CODE_BUILD_20161006_RETRY_BUILD_BATCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetryBuildBatchErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[RetryBuildBatchErrorBody](aws_code_build/errors/retry_build_batch_error.py)&#93;</code>

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
<summary><code>def start_build_batch(x_amz_target: XAmzTarget21OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.start_build_batch(XAmzTarget21.CODE_BUILD_20161006_START_BUILD_BATCH)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBuildBatchErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.start_build_batch(
        XAmzTarget21.CODE_BUILD_20161006_START_BUILD_BATCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBuildBatchErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StartBuildBatchErrorBody](aws_code_build/errors/start_build_batch_error.py)&#93;</code>

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
<summary><code>def stop_build_batch(x_amz_target: XAmzTarget22OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.stop_build_batch(XAmzTarget22.CODE_BUILD_20161006_STOP_BUILD_BATCH)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBuildBatchErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.stop_build_batch(
        XAmzTarget22.CODE_BUILD_20161006_STOP_BUILD_BATCH
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBuildBatchErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StopBuildBatchErrorBody](aws_code_build/errors/stop_build_batch_error.py)&#93;</code>

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
<summary><code>def update_project(x_amz_target: XAmzTarget9OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.update_project(XAmzTarget9.CODE_BUILD_20161006_UPDATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProjectErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.update_project(
        XAmzTarget9.CODE_BUILD_20161006_UPDATE_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[UpdateProjectErrorBody](aws_code_build/errors/update_project_error.py)&#93;</code>

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
<summary><code>def update_project_visibility(x_amz_target: XAmzTarget37OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.update_project_visibility(
        XAmzTarget37.CODE_BUILD_20161006_UPDATE_PROJECT_VISIBILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProjectVisibilityErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.update_project_visibility(
        XAmzTarget37.CODE_BUILD_20161006_UPDATE_PROJECT_VISIBILITY
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProjectVisibilityErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[UpdateProjectVisibilityErrorBody](aws_code_build/errors/update_project_visibility_error.py)&#93;</code>

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
<summary><code>def update_report_group(x_amz_target: XAmzTarget14OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.update_report_group(
        XAmzTarget14.CODE_BUILD_20161006_UPDATE_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateReportGroupErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.update_report_group(
        XAmzTarget14.CODE_BUILD_20161006_UPDATE_REPORT_GROUP
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateReportGroupErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[UpdateReportGroupErrorBody](aws_code_build/errors/update_report_group_error.py)&#93;</code>

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
<summary><code>def update_webhook(x_amz_target: XAmzTarget19OrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild.update_webhook(XAmzTarget19.CODE_BUILD_20161006_UPDATE_WEBHOOK)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild.update_webhook(
        XAmzTarget19.CODE_BUILD_20161006_UPDATE_WEBHOOK
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[UpdateWebhookErrorBody](aws_code_build/errors/update_webhook_error.py)&#93;</code>

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
<summary><code>def delete_report(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_deletereport.delete_report(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CODE_BUILD_20161006_DELETE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_deletereport.delete_report(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006DeletereportApi.CODE_BUILD_20161006_DELETE_REPORT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteReportErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteReportErrorBody](aws_code_build/errors/delete_report_error.py)&#93;</code>

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
<summary><code>def list_builds(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_listbuilds.list_builds(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CODE_BUILD_20161006_LIST_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_listbuilds.list_builds(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListbuildsApi.CODE_BUILD_20161006_LIST_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListBuildsErrorBody](aws_code_build/errors/list_builds_error.py)&#93;</code>

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
<summary><code>def list_projects(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_listprojects.list_projects(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CODE_BUILD_20161006_LIST_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_listprojects.list_projects(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListprojectsApi.CODE_BUILD_20161006_LIST_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListProjectsErrorBody](aws_code_build/errors/list_projects_error.py)&#93;</code>

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
<summary><code>def list_reports(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_listreports.list_reports(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CODE_BUILD_20161006_LIST_REPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportsErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_listreports.list_reports(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi.CODE_BUILD_20161006_LIST_REPORTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListReportsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListReportsErrorBody](aws_code_build/errors/list_reports_error.py)&#93;</code>

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
<summary><code>def retry_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_retrybuild.retry_build(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CODE_BUILD_20161006_RETRY_BUILD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetryBuildErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_retrybuild.retry_build(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi.CODE_BUILD_20161006_RETRY_BUILD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetryBuildErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[RetryBuildErrorBody](aws_code_build/errors/retry_build_error.py)&#93;</code>

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
<summary><code>def start_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_startbuild.start_build(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CODE_BUILD_20161006_START_BUILD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBuildErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_startbuild.start_build(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StartbuildApi.CODE_BUILD_20161006_START_BUILD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBuildErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StartBuildErrorBody](aws_code_build/errors/start_build_error.py)&#93;</code>

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
<summary><code>def stop_build(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api.stop_build(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CODE_BUILD_20161006_STOP_BUILD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBuildErrorBody
```

**Async**

```python
try:
    await async_client.aws_codebuild_x_amz_target_codebuild20161006_stopbuild_api.stop_build(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006StopbuildApiApi.CODE_BUILD_20161006_STOP_BUILD
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBuildErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StopBuildErrorBody](aws_code_build/errors/stop_build_error.py)&#93;</code>

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
<summary><code>def batch_delete_builds2(x_amz_target: XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.batch_delete_builds2(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDeleteBuilds2ErrorBody
```

**Async**

```python
try:
    await async_client.builds.batch_delete_builds2(
        XAmzTargetAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_DELETE_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchDeleteBuilds2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchDeleteBuilds2ErrorBody](aws_code_build/errors/batch_delete_builds2_error.py)&#93;</code>

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
<summary><code>def batch_get_builds2(x_amz_target: XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.batch_get_builds2(
        XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetBuilds2ErrorBody
```

**Async**

```python
try:
    await async_client.builds.batch_get_builds2(
        XAmzTarget1AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi.CODE_BUILD_20161006_BATCH_GET_BUILDS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetBuilds2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetBuilds2ErrorBody](aws_code_build/errors/batch_get_builds2_error.py)&#93;</code>

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
<summary><code>def list_builds2(x_amz_target: XAmzTarget2AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.list_builds2(XAmzTarget2AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuilds2ErrorBody
```

**Async**

```python
try:
    await async_client.builds.list_builds2(XAmzTarget2AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuilds2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListBuilds2ErrorBody](aws_code_build/errors/list_builds2_error.py)&#93;</code>

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
<summary><code>def list_builds_for_project2(x_amz_target: XAmzTarget3AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.list_builds_for_project2(XAmzTarget3AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsForProject2ErrorBody
```

**Async**

```python
try:
    await async_client.builds.list_builds_for_project2(
        XAmzTarget3AwsCodeBuildBuildsApi.CODE_BUILD_20161006_LIST_BUILDS_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsForProject2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListBuildsForProject2ErrorBody](aws_code_build/errors/list_builds_for_project2_error.py)&#93;</code>

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
<summary><code>def start_build2(x_amz_target: XAmzTarget4AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.start_build2(XAmzTarget4AwsCodeBuildBuildsApi.CODE_BUILD_20161006_START_BUILD)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBuild2ErrorBody
```

**Async**

```python
try:
    await async_client.builds.start_build2(XAmzTarget4AwsCodeBuildBuildsApi.CODE_BUILD_20161006_START_BUILD)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartBuild2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StartBuild2ErrorBody](aws_code_build/errors/start_build2_error.py)&#93;</code>

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
<summary><code>def stop_build2(x_amz_target: XAmzTarget5AwsCodeBuildBuildsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.stop_build2(XAmzTarget5AwsCodeBuildBuildsApi.CODE_BUILD_20161006_STOP_BUILD)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBuild2ErrorBody
```

**Async**

```python
try:
    await async_client.builds.stop_build2(XAmzTarget5AwsCodeBuildBuildsApi.CODE_BUILD_20161006_STOP_BUILD)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopBuild2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StopBuild2ErrorBody](aws_code_build/errors/stop_build2_error.py)&#93;</code>

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
<summary><code>def batch_get_command_executions(x_amz_target: XAmzTargetAwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.command_execution_api.batch_get_command_executions(
        XAmzTargetAwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_BATCH_GET_COMMAND_EXECUTIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetCommandExecutionsErrorBody
```

**Async**

```python
try:
    await async_client.command_execution_api.batch_get_command_executions(
        XAmzTargetAwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_BATCH_GET_COMMAND_EXECUTIONS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetCommandExecutionsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetCommandExecutionsErrorBody](aws_code_build/errors/batch_get_command_executions_error.py)&#93;</code>

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
<summary><code>def list_command_executions_for_sandbox(x_amz_target: XAmzTarget1AwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.command_execution_api.list_command_executions_for_sandbox(
        XAmzTarget1AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_LIST_COMMAND_EXECUTIONS_FOR_SANDBOX
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCommandExecutionsForSandboxErrorBody
```

**Async**

```python
try:
    await async_client.command_execution_api.list_command_executions_for_sandbox(
        XAmzTarget1AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_LIST_COMMAND_EXECUTIONS_FOR_SANDBOX
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCommandExecutionsForSandboxErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListCommandExecutionsForSandboxErrorBody](aws_code_build/errors/list_command_executions_for_sandbox_error.py)&#93;</code>

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
<summary><code>def start_command_execution(x_amz_target: XAmzTarget2AwsCodeBuildCommandExecutionApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.command_execution_api.start_command_execution(
        XAmzTarget2AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_START_COMMAND_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCommandExecutionErrorBody
```

**Async**

```python
try:
    await async_client.command_execution_api.start_command_execution(
        XAmzTarget2AwsCodeBuildCommandExecutionApi.CODE_BUILD_20161006_START_COMMAND_EXECUTION
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartCommandExecutionErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[StartCommandExecutionErrorBody](aws_code_build/errors/start_command_execution_error.py)&#93;</code>

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
<summary><code>def batch_get_fleets(x_amz_target: XAmzTargetAwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.fleet_api.batch_get_fleets(XAmzTargetAwsCodeBuildFleetApi.CODE_BUILD_20161006_BATCH_GET_FLEETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetFleetsErrorBody
```

**Async**

```python
try:
    await async_client.fleet_api.batch_get_fleets(XAmzTargetAwsCodeBuildFleetApi.CODE_BUILD_20161006_BATCH_GET_FLEETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetFleetsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetFleetsErrorBody](aws_code_build/errors/batch_get_fleets_error.py)&#93;</code>

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
<summary><code>def create_fleet(x_amz_target: XAmzTarget1AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.fleet_api.create_fleet(XAmzTarget1AwsCodeBuildFleetApi.CODE_BUILD_20161006_CREATE_FLEET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFleetErrorBody
```

**Async**

```python
try:
    await async_client.fleet_api.create_fleet(XAmzTarget1AwsCodeBuildFleetApi.CODE_BUILD_20161006_CREATE_FLEET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateFleetErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[CreateFleetErrorBody](aws_code_build/errors/create_fleet_error.py)&#93;</code>

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
<summary><code>def delete_fleet(x_amz_target: XAmzTarget2AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.fleet_api.delete_fleet(XAmzTarget2AwsCodeBuildFleetApi.CODE_BUILD_20161006_DELETE_FLEET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFleetErrorBody
```

**Async**

```python
try:
    await async_client.fleet_api.delete_fleet(XAmzTarget2AwsCodeBuildFleetApi.CODE_BUILD_20161006_DELETE_FLEET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteFleetErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteFleetErrorBody](aws_code_build/errors/delete_fleet_error.py)&#93;</code>

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
<summary><code>def list_fleets(x_amz_target: XAmzTarget3AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.fleet_api.list_fleets(XAmzTarget3AwsCodeBuildFleetApi.CODE_BUILD_20161006_LIST_FLEETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFleetsErrorBody
```

**Async**

```python
try:
    await async_client.fleet_api.list_fleets(XAmzTarget3AwsCodeBuildFleetApi.CODE_BUILD_20161006_LIST_FLEETS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListFleetsErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListFleetsErrorBody](aws_code_build/errors/list_fleets_error.py)&#93;</code>

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
<summary><code>def update_fleet(x_amz_target: XAmzTarget4AwsCodeBuildFleetApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.fleet_api.update_fleet(XAmzTarget4AwsCodeBuildFleetApi.CODE_BUILD_20161006_UPDATE_FLEET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFleetErrorBody
```

**Async**

```python
try:
    await async_client.fleet_api.update_fleet(XAmzTarget4AwsCodeBuildFleetApi.CODE_BUILD_20161006_UPDATE_FLEET)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateFleetErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[UpdateFleetErrorBody](aws_code_build/errors/update_fleet_error.py)&#93;</code>

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
<summary><code>def batch_get_projects2(x_amz_target: XAmzTargetAwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.projects.batch_get_projects2(XAmzTargetAwsCodeBuildProjectsApi.CODE_BUILD_20161006_BATCH_GET_PROJECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetProjects2ErrorBody
```

**Async**

```python
try:
    await async_client.projects.batch_get_projects2(
        XAmzTargetAwsCodeBuildProjectsApi.CODE_BUILD_20161006_BATCH_GET_PROJECTS
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetProjects2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetProjects2ErrorBody](aws_code_build/errors/batch_get_projects2_error.py)&#93;</code>

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
<summary><code>def create_project2(x_amz_target: XAmzTarget1AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.projects.create_project2(XAmzTarget1AwsCodeBuildProjectsApi.CODE_BUILD_20161006_CREATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProject2ErrorBody
```

**Async**

```python
try:
    await async_client.projects.create_project2(XAmzTarget1AwsCodeBuildProjectsApi.CODE_BUILD_20161006_CREATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProject2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[CreateProject2ErrorBody](aws_code_build/errors/create_project2_error.py)&#93;</code>

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
<summary><code>def delete_project2(x_amz_target: XAmzTarget2AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.projects.delete_project2(XAmzTarget2AwsCodeBuildProjectsApi.CODE_BUILD_20161006_DELETE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProject2ErrorBody
```

**Async**

```python
try:
    await async_client.projects.delete_project2(XAmzTarget2AwsCodeBuildProjectsApi.CODE_BUILD_20161006_DELETE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProject2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[DeleteProject2ErrorBody](aws_code_build/errors/delete_project2_error.py)&#93;</code>

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
<summary><code>def list_projects2(x_amz_target: XAmzTarget3AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.projects.list_projects2(XAmzTarget3AwsCodeBuildProjectsApi.CODE_BUILD_20161006_LIST_PROJECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjects2ErrorBody
```

**Async**

```python
try:
    await async_client.projects.list_projects2(XAmzTarget3AwsCodeBuildProjectsApi.CODE_BUILD_20161006_LIST_PROJECTS)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjects2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListProjects2ErrorBody](aws_code_build/errors/list_projects2_error.py)&#93;</code>

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
<summary><code>def update_project2(x_amz_target: XAmzTarget4AwsCodeBuildProjectsApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.projects.update_project2(XAmzTarget4AwsCodeBuildProjectsApi.CODE_BUILD_20161006_UPDATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProject2ErrorBody
```

**Async**

```python
try:
    await async_client.projects.update_project2(XAmzTarget4AwsCodeBuildProjectsApi.CODE_BUILD_20161006_UPDATE_PROJECT)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProject2ErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[UpdateProject2ErrorBody](aws_code_build/errors/update_project2_error.py)&#93;</code>

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
<summary><code>def batch_get_sandboxes(x_amz_target: XAmzTargetAwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.sandboxe.batch_get_sandboxes(XAmzTargetAwsCodeBuildSandboxeApi.CODE_BUILD_20161006_BATCH_GET_SANDBOXES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetSandboxesErrorBody
```

**Async**

```python
try:
    await async_client.sandboxe.batch_get_sandboxes(
        XAmzTargetAwsCodeBuildSandboxeApi.CODE_BUILD_20161006_BATCH_GET_SANDBOXES
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchGetSandboxesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[BatchGetSandboxesErrorBody](aws_code_build/errors/batch_get_sandboxes_error.py)&#93;</code>

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
<summary><code>def list_sandboxes(x_amz_target: XAmzTarget1AwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.sandboxe.list_sandboxes(XAmzTarget1AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSandboxesErrorBody
```

**Async**

```python
try:
    await async_client.sandboxe.list_sandboxes(XAmzTarget1AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES)
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSandboxesErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListSandboxesErrorBody](aws_code_build/errors/list_sandboxes_error.py)&#93;</code>

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
<summary><code>def list_sandboxes_for_project(x_amz_target: XAmzTarget2AwsCodeBuildSandboxeApiOrStr, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.sandboxe.list_sandboxes_for_project(
        XAmzTarget2AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSandboxesForProjectErrorBody
```

**Async**

```python
try:
    await async_client.sandboxe.list_sandboxes_for_project(
        XAmzTarget2AwsCodeBuildSandboxeApi.CODE_BUILD_20161006_LIST_SANDBOXES_FOR_PROJECT
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSandboxesForProjectErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](aws_code_build/core/exceptions.py)&#91;[ListSandboxesForProjectErrorBody](aws_code_build/errors/list_sandboxes_for_project_error.py)&#93;</code>

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

