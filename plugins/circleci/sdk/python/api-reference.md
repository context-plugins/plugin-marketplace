# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [CircleCiClient](circle_ci/client.py)

## ArtifactApi

> Source: [ArtifactApi](circle_ci/apis/artifact_api.py)

<details>
<summary><code>def list_build_artifacts(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> list[Artifact]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of artifacts produced by the specified build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.artifact_api.list_build_artifacts(VcsType.GITHUB, "some example string", "some example string", 1)
    # TODO: Handle 'response' of type list[Artifact]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildArtifactsErrorBody
```

**Async**

```python
try:
    response = await async_client.artifact_api.list_build_artifacts(
        VcsType.GITHUB, "some example string", "some example string", 1
    )
    # TODO: Handle 'response' of type list[Artifact]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildArtifactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>build_num</code> | <code>int</code> | The build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Artifact](circle_ci/models/artifact.py)&#93;</code> -- Successfully retrieved artifacts

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListBuildArtifactsErrorBody](circle_ci/errors/list_build_artifacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_latest_artifacts(vcs_type: VcsTypeOrStr, username: str, project: str, *, branch: str | None = None, filter_: FilterOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Artifact]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns artifacts from the latest build of the project, optionally filtered by branch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.artifact_api.list_latest_artifacts(VcsType.GITHUB, "some example string", "some example string")
    # TODO: Handle 'response' of type list[Artifact]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLatestArtifactsErrorBody
```

**Async**

```python
try:
    response = await async_client.artifact_api.list_latest_artifacts(
        VcsType.GITHUB, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[Artifact]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListLatestArtifactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>branch</code> | <code>str \| None</code> | Filter artifacts by branch name<br>**Default**: <code>None</code> |
| <code>filter_</code> | <code>[FilterOrStr](circle_ci/models/enums/filter.py) \| None</code> | Filter artifacts by status<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Artifact](circle_ci/models/artifact.py)&#93;</code> -- Successfully retrieved latest artifacts

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListLatestArtifactsErrorBody](circle_ci/errors/list_latest_artifacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## BuildApi

> Source: [BuildApi](circle_ci/apis/build_api.py)

<details>
<summary><code>def cancel_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> BuildSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.cancel_build(VcsType.GITHUB, "some example string", "some example string", 1)
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelBuildErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.cancel_build(
        VcsType.GITHUB, "some example string", "some example string", 1
    )
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>build_num</code> | <code>int</code> | The build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build cancelled successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CancelBuildErrorBody](circle_ci/errors/cancel_build_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> BuildDetail</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific build, including its status, steps, and timing information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.get_build(VcsType.GITHUB, "some example string", "some example string", 1)
    # TODO: Handle 'response' of type BuildDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuildErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.get_build(VcsType.GITHUB, "some example string", "some example string", 1)
    # TODO: Handle 'response' of type BuildDetail
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>build_num</code> | <code>int</code> | The build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildDetail](circle_ci/models/build_detail.py)</code> -- Successfully retrieved build details

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetBuildErrorBody](circle_ci/errors/get_build_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_project_builds(vcs_type: VcsTypeOrStr, username: str, project: str, *, filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Build]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the most recent builds for the specified project, with optional filtering by branch.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.list_project_builds(VcsType.GITHUB, "some example string", "some example string")
    # TODO: Handle 'response' of type list[Build]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectBuildsErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.list_project_builds(
        VcsType.GITHUB, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[Build]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectBuildsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>filter_</code> | <code>[FilterCircleCiRestApiV1BuildApiOrStr](circle_ci/models/enums/filter_circle_ci_rest_api_v1_build_api.py) \| None</code> | Filter builds by status<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Number of builds to return (max 100)<br>**Default**: <code>30</code> |
| <code>offset</code> | <code>int \| None</code> | Offset for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Build](circle_ci/models/build.py)&#93;</code> -- Successfully retrieved builds

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListProjectBuildsErrorBody](circle_ci/errors/list_project_builds_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_recent_builds(*, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Build]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of the most recent builds across all followed projects for the authenticated user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.list_recent_builds()
    # TODO: Handle 'response' of type list[Build]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecentBuildsErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.list_recent_builds()
    # TODO: Handle 'response' of type list[Build]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRecentBuildsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of builds to return (max 100)<br>**Default**: <code>30</code> |
| <code>offset</code> | <code>int \| None</code> | Offset for pagination<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Build](circle_ci/models/build.py)&#93;</code> -- Successfully retrieved recent builds

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListRecentBuildsErrorBody](circle_ci/errors/list_recent_builds_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def retry_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> BuildSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retries a build using the same configuration and revision as the original build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.retry_build(VcsType.GITHUB, "some example string", "some example string", 1)
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RetryBuildErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.retry_build(VcsType.GITHUB, "some example string", "some example string", 1)
    # TODO: Handle 'response' of type BuildSummary
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
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>build_num</code> | <code>int</code> | The build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build retried successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[RetryBuildErrorBody](circle_ci/errors/retry_build_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_branch_build(vcs_type: VcsTypeOrStr, username: str, project: str, branch: str, *, body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BuildSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new build on the specified branch of the project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.trigger_branch_build(
        VcsType.GITHUB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBranchBuildErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.trigger_branch_build(
        VcsType.GITHUB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBranchBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>branch</code> | <code>str</code> | The branch to build |
| <code>body</code> | <code>[ProjectProjectTreeBranchRequest](circle_ci/models/project_project_tree_branch_request.py) \| [ProjectProjectTreeBranchRequestDict](circle_ci/models/project_project_tree_branch_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build triggered successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[TriggerBranchBuildErrorBody](circle_ci/errors/trigger_branch_build_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_build(vcs_type: VcsTypeOrStr, username: str, project: str, *, body: ProjectProjectRequest | ProjectProjectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> BuildSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new build for the specified project. Optionally specify a branch, revision, or build parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.build_api.trigger_build(VcsType.GITHUB, "some example string", "some example string")
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBuildErrorBody
```

**Async**

```python
try:
    response = await async_client.build_api.trigger_build(VcsType.GITHUB, "some example string", "some example string")
    # TODO: Handle 'response' of type BuildSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBuildErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>body</code> | <code>[ProjectProjectRequest](circle_ci/models/project_project_request.py) \| [ProjectProjectRequestDict](circle_ci/models/project_project_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build triggered successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[TriggerBuildErrorBody](circle_ci/errors/trigger_build_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ContextApi

> Source: [ContextApi](circle_ci/apis/context_api.py)

<details>
<summary><code>def add_or_update_context_environment_variable(context_id: UUID, env_var_name: str, body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> EnvironmentVariable</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment variable or updates an existing one within the specified context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.add_or_update_context_environment_variable(
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        ContextEnvironmentVariableRequest(value="some example string"),
    )
    # TODO: Handle 'response' of type EnvironmentVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddOrUpdateContextEnvironmentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.add_or_update_context_environment_variable(
        UUID("00000000-0000-0000-0000-000000000000"),
        "some example string",
        ContextEnvironmentVariableRequest(value="some example string"),
    )
    # TODO: Handle 'response' of type EnvironmentVariable
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddOrUpdateContextEnvironmentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>context_id</code> | <code>UUID</code> | The unique identifier of the context |
| <code>env_var_name</code> | <code>str</code> | The name of the environment variable |
| <code>body</code> | <code>[ContextEnvironmentVariableRequest](circle_ci/models/context_environment_variable_request.py) \| [ContextEnvironmentVariableRequestDict](circle_ci/models/context_environment_variable_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentVariable](circle_ci/models/environment_variable.py)</code> -- Successfully added or updated environment variable

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[AddOrUpdateContextEnvironmentVariableErrorBody](circle_ci/errors/add_or_update_context_environment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_context(body: CreateContextRequest | CreateContextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Context</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new context for sharing environment variables across projects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.create_context(
        CreateContextRequest(
            name="some example string", owner=Owner(id=UUID("00000000-0000-0000-0000-000000000000"), type_=Type.ACCOUNT)
        ),
    )
    # TODO: Handle 'response' of type Context
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContextErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.create_context(
        CreateContextRequest(
            name="some example string", owner=Owner(id=UUID("00000000-0000-0000-0000-000000000000"), type_=Type.ACCOUNT)
        ),
    )
    # TODO: Handle 'response' of type Context
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateContextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateContextRequest](circle_ci/models/create_context_request.py) \| [CreateContextRequestDict](circle_ci/models/create_context_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Context](circle_ci/models/context.py)</code> -- Successfully created context

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateContextErrorBody](circle_ci/errors/create_context_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_context(context_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a context and all of its associated environment variables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.delete_context(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContextErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.delete_context(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>context_id</code> | <code>UUID</code> | The unique identifier of the context |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted context

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteContextErrorBody](circle_ci/errors/delete_context_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_context_environment_variable(context_id: UUID, env_var_name: str, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment variable from the specified context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.delete_context_environment_variable(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContextEnvironmentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.delete_context_environment_variable(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteContextEnvironmentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>context_id</code> | <code>UUID</code> | The unique identifier of the context |
| <code>env_var_name</code> | <code>str</code> | The name of the environment variable |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted environment variable

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteContextEnvironmentVariableErrorBody](circle_ci/errors/delete_context_environment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_context(context_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Context</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a specific context by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.get_context(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type Context
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContextErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.get_context(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type Context
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetContextErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>context_id</code> | <code>UUID</code> | The unique identifier of the context |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Context](circle_ci/models/context.py)</code> -- Successfully retrieved context

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetContextErrorBody](circle_ci/errors/get_context_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_context_environment_variables(context_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> EnvironmentVariableList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of environment variables associated with a specific context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.list_context_environment_variables(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type EnvironmentVariableList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContextEnvironmentVariablesErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.list_context_environment_variables(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type EnvironmentVariableList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContextEnvironmentVariablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>context_id</code> | <code>UUID</code> | The unique identifier of the context |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[EnvironmentVariableList](circle_ci/models/environment_variable_list.py)</code> -- Successfully retrieved environment variables

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListContextEnvironmentVariablesErrorBody](circle_ci/errors/list_context_environment_variables_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_contexts(*, owner_id: UUID | None = None, owner_slug: str | None = None, owner_type: OwnerTypeOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ContextList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of contexts for a given owner, which can be an organization or account.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.context_api.list_contexts()
    # TODO: Handle 'response' of type ContextList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContextsErrorBody
```

**Async**

```python
try:
    response = await async_client.context_api.list_contexts()
    # TODO: Handle 'response' of type ContextList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListContextsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>owner_id</code> | <code>UUID \| None</code> | The unique identifier of the owner<br>**Default**: <code>None</code> |
| <code>owner_slug</code> | <code>str \| None</code> | The slug for the owner<br>**Default**: <code>None</code> |
| <code>owner_type</code> | <code>[OwnerTypeOrStr](circle_ci/models/enums/owner_type.py) \| None</code> | The type of the owner<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ContextList](circle_ci/models/context_list.py)</code> -- Successfully retrieved contexts

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListContextsErrorBody](circle_ci/errors/list_contexts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Insights

> Source: [Insights](circle_ci/apis/insights.py)

<details>
<summary><code>def get_project_workflow_metrics(project_slug: str, *, branch: str | None = None, reporting_window: ReportingWindowOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightsWorkflowMetrics</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summary metrics for the workflows of a given project, including success rates, duration metrics, and throughput.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_project_workflow_metrics("some example string")
    # TODO: Handle 'response' of type InsightsWorkflowMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectWorkflowMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_project_workflow_metrics("some example string")
    # TODO: Handle 'response' of type InsightsWorkflowMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectWorkflowMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>branch</code> | <code>str \| None</code> | Filter by branch name<br>**Default**: <code>None</code> |
| <code>reporting_window</code> | <code>[ReportingWindowOrStr](circle_ci/models/enums/reporting_window.py) \| None</code> | The time window for metrics<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsWorkflowMetrics](circle_ci/models/insights_workflow_metrics.py)</code> -- Successfully retrieved workflow metrics

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetProjectWorkflowMetricsErrorBody](circle_ci/errors/get_project_workflow_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workflow_job_metrics(project_slug: str, workflow_name: str, *, branch: str | None = None, reporting_window: ReportingWindowOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightsJobMetrics</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns summary metrics for the jobs within a named workflow, including success rates and duration metrics.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_workflow_job_metrics("some example string", "some example string")
    # TODO: Handle 'response' of type InsightsJobMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowJobMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_workflow_job_metrics("some example string", "some example string")
    # TODO: Handle 'response' of type InsightsJobMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowJobMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>workflow_name</code> | <code>str</code> | The name of the workflow |
| <code>branch</code> | <code>str \| None</code> | Filter by branch name<br>**Default**: <code>None</code> |
| <code>reporting_window</code> | <code>[ReportingWindowOrStr](circle_ci/models/enums/reporting_window.py) \| None</code> | The time window for metrics<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsJobMetrics](circle_ci/models/insights_job_metrics.py)</code> -- Successfully retrieved job metrics

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetWorkflowJobMetricsErrorBody](circle_ci/errors/get_workflow_job_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workflow_runs(project_slug: str, workflow_name: str, *, branch: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> InsightsWorkflowRuns</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns recent runs of a named workflow, containing status, duration, and credits consumed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_workflow_runs("some example string", "some example string")
    # TODO: Handle 'response' of type InsightsWorkflowRuns
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowRunsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_workflow_runs("some example string", "some example string")
    # TODO: Handle 'response' of type InsightsWorkflowRuns
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>workflow_name</code> | <code>str</code> | The name of the workflow |
| <code>branch</code> | <code>str \| None</code> | Filter by branch name<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsWorkflowRuns](circle_ci/models/insights_workflow_runs.py)</code> -- Successfully retrieved workflow runs

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetWorkflowRunsErrorBody](circle_ci/errors/get_workflow_runs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workflow_test_metrics(project_slug: str, workflow_name: str, *, request_options: RequestOptionsOrDict | None = None) -> InsightsTestMetrics</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metrics for a named workflow, including most frequently failing tests and slowest tests.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.insights.get_workflow_test_metrics("some example string", "some example string")
    # TODO: Handle 'response' of type InsightsTestMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowTestMetricsErrorBody
```

**Async**

```python
try:
    response = await async_client.insights.get_workflow_test_metrics("some example string", "some example string")
    # TODO: Handle 'response' of type InsightsTestMetrics
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowTestMetricsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>workflow_name</code> | <code>str</code> | The name of the workflow |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsightsTestMetrics](circle_ci/models/insights_test_metrics.py)</code> -- Successfully retrieved test metrics

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetWorkflowTestMetricsErrorBody](circle_ci/errors/get_workflow_test_metrics_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## JobApi

> Source: [JobApi](circle_ci/apis/job_api.py)

<details>
<summary><code>def cancel_job(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running job by its job number.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.job_api.cancel_job("some example string", 1)
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelJobErrorBody
```

**Async**

```python
try:
    response = await async_client.job_api.cancel_job("some example string", 1)
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>job_number</code> | <code>int</code> | The number of the job |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Job cancelled successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CancelJobErrorBody](circle_ci/errors/cancel_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> Job</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a specific job, including its status, duration, and executor configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.job_api.get_job("some example string", 1)
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobErrorBody
```

**Async**

```python
try:
    response = await async_client.job_api.get_job("some example string", 1)
    # TODO: Handle 'response' of type Job
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>job_number</code> | <code>int</code> | The number of the job |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Job](circle_ci/models/job.py)</code> -- Successfully retrieved job details

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetJobErrorBody](circle_ci/errors/get_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_job_artifacts(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> ArtifactList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of artifacts produced by a given job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.job_api.list_job_artifacts("some example string", 1)
    # TODO: Handle 'response' of type ArtifactList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobArtifactsErrorBody
```

**Async**

```python
try:
    response = await async_client.job_api.list_job_artifacts("some example string", 1)
    # TODO: Handle 'response' of type ArtifactList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobArtifactsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>job_number</code> | <code>int</code> | The number of the job |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ArtifactList](circle_ci/models/artifact_list.py)</code> -- Successfully retrieved artifacts

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListJobArtifactsErrorBody](circle_ci/errors/list_job_artifacts_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_job_tests(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> TestList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metadata for a given job, collected from JUnit XML or similar test result files.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.job_api.list_job_tests("some example string", 1)
    # TODO: Handle 'response' of type TestList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobTestsErrorBody
```

**Async**

```python
try:
    response = await async_client.job_api.list_job_tests("some example string", 1)
    # TODO: Handle 'response' of type TestList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobTestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>job_number</code> | <code>int</code> | The number of the job |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TestList](circle_ci/models/test_list.py)</code> -- Successfully retrieved test metadata

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListJobTestsErrorBody](circle_ci/errors/list_job_tests_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## PipelineApi

> Source: [PipelineApi](circle_ci/apis/pipeline_api.py)

<details>
<summary><code>def continue_pipeline(body: PipelineContinueRequest | PipelineContinueRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Continues a pipeline from a setup workflow by providing configuration and pipeline parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.continue_pipeline(
        PipelineContinueRequest(continuation_key="some example string", configuration="some example string")
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContinuePipelineErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.continue_pipeline(
        PipelineContinueRequest(continuation_key="some example string", configuration="some example string")
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ContinuePipelineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[PipelineContinueRequest](circle_ci/models/pipeline_continue_request.py) \| [PipelineContinueRequestDict](circle_ci/models/pipeline_continue_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Pipeline continued successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ContinuePipelineErrorBody](circle_ci/errors/continue_pipeline_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline(pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PipelineCircleCiRestApiV2PipelineApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a pipeline by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.get_pipeline(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PipelineCircleCiRestApiV2PipelineApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.get_pipeline(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PipelineCircleCiRestApiV2PipelineApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pipeline_id</code> | <code>UUID</code> | The unique identifier of the pipeline |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineCircleCiRestApiV2PipelineApi](circle_ci/models/pipeline_circle_ci_rest_api_v2_pipeline_api.py)</code> -- Successfully retrieved pipeline

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetPipelineErrorBody](circle_ci/errors/get_pipeline_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_pipeline_config(pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PipelineConfig</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the configuration source for a given pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.get_pipeline_config(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PipelineConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineConfigErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.get_pipeline_config(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PipelineConfig
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetPipelineConfigErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pipeline_id</code> | <code>UUID</code> | The unique identifier of the pipeline |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineConfig](circle_ci/models/pipeline_config.py)</code> -- Successfully retrieved pipeline configuration

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetPipelineConfigErrorBody](circle_ci/errors/get_pipeline_config_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_my_project_pipelines(project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of pipelines for a project filtered to those triggered by the current user.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.list_my_project_pipelines("some example string")
    # TODO: Handle 'response' of type PipelineList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMyProjectPipelinesErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.list_my_project_pipelines("some example string")
    # TODO: Handle 'response' of type PipelineList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMyProjectPipelinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineList](circle_ci/models/pipeline_list.py)</code> -- Successfully retrieved pipelines

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListMyProjectPipelinesErrorBody](circle_ci/errors/list_my_project_pipelines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pipeline_workflows(pipeline_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> WorkflowList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of workflows associated with a given pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.list_pipeline_workflows(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WorkflowList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPipelineWorkflowsErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.list_pipeline_workflows(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WorkflowList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPipelineWorkflowsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>pipeline_id</code> | <code>UUID</code> | The unique identifier of the pipeline |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowList](circle_ci/models/workflow_list.py)</code> -- Successfully retrieved workflows

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListPipelineWorkflowsErrorBody](circle_ci/errors/list_pipeline_workflows_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_pipelines(*, org_slug: str | None = None, mine: bool | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all pipelines for the most recently built projects you follow in the organization.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.list_pipelines()
    # TODO: Handle 'response' of type PipelineList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPipelinesErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.list_pipelines()
    # TODO: Handle 'response' of type PipelineList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPipelinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>org_slug</code> | <code>str \| None</code> | Organization slug in the form vcs-slug/org-name<br>**Default**: <code>None</code> |
| <code>mine</code> | <code>bool \| None</code> | Filter to only pipelines triggered by the current user<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineList](circle_ci/models/pipeline_list.py)</code> -- Successfully retrieved pipelines

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListPipelinesErrorBody](circle_ci/errors/list_pipelines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_project_pipelines(project_slug: str, *, branch: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of pipelines for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.list_project_pipelines("some example string")
    # TODO: Handle 'response' of type PipelineList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectPipelinesErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.list_project_pipelines("some example string")
    # TODO: Handle 'response' of type PipelineList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectPipelinesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>branch</code> | <code>str \| None</code> | Filter pipelines by branch name<br>**Default**: <code>None</code> |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineList](circle_ci/models/pipeline_list.py)</code> -- Successfully retrieved pipelines

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListProjectPipelinesErrorBody](circle_ci/errors/list_project_pipelines_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_pipeline(project_slug: str, *, body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> PipelineCreation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Triggers a new pipeline on the specified project. Optionally specify a branch, tag, or revision to build. Pipeline parameters can also be provided.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.pipeline_api.trigger_pipeline("some example string")
    # TODO: Handle 'response' of type PipelineCreation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerPipelineErrorBody
```

**Async**

```python
try:
    response = await async_client.pipeline_api.trigger_pipeline("some example string")
    # TODO: Handle 'response' of type PipelineCreation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerPipelineErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[TriggerPipelineRequest](circle_ci/models/trigger_pipeline_request.py) \| [TriggerPipelineRequestDict](circle_ci/models/trigger_pipeline_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PipelineCreation](circle_ci/models/pipeline_creation.py)</code> -- Pipeline triggered successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[TriggerPipelineErrorBody](circle_ci/errors/trigger_pipeline_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ProjectApi

> Source: [ProjectApi](circle_ci/apis/project_api.py)

<details>
<summary><code>def create_checkout_key(project_slug: str, body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new checkout key for the specified project. Only deploy keys and user keys are supported.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.create_checkout_key(
        "some example string", ProjectCheckoutKeyRequest(type_=Type1.DEPLOY_KEY)
    )
    # TODO: Handle 'response' of type CheckoutKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCheckoutKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.create_checkout_key(
        "some example string", ProjectCheckoutKeyRequest(type_=Type1.DEPLOY_KEY)
    )
    # TODO: Handle 'response' of type CheckoutKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCheckoutKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[ProjectCheckoutKeyRequest](circle_ci/models/project_checkout_key_request.py) \| [ProjectCheckoutKeyRequestDict](circle_ci/models/project_checkout_key_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKey](circle_ci/models/checkout_key.py)</code> -- Checkout key created successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateCheckoutKeyErrorBody](circle_ci/errors/create_checkout_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_project_environment_variable(project_slug: str, body: ProjectEnvvarRequest | ProjectEnvvarRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProjectEnvVar</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new environment variable for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.create_project_environment_variable(
        "some example string", ProjectEnvvarRequest(name="some example string", value="some example string")
    )
    # TODO: Handle 'response' of type ProjectEnvVar
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectEnvironmentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.create_project_environment_variable(
        "some example string", ProjectEnvvarRequest(name="some example string", value="some example string")
    )
    # TODO: Handle 'response' of type ProjectEnvVar
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProjectEnvironmentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[ProjectEnvvarRequest](circle_ci/models/project_envvar_request.py) \| [ProjectEnvvarRequestDict](circle_ci/models/project_envvar_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectEnvVar](circle_ci/models/project_env_var.py)</code> -- Environment variable created successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateProjectEnvironmentVariableErrorBody](circle_ci/errors/create_project_environment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_checkout_key(project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.delete_checkout_key("some example string", "some example string")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCheckoutKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.delete_checkout_key("some example string", "some example string")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCheckoutKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>fingerprint</code> | <code>str</code> | The fingerprint of the checkout key |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted checkout key

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteCheckoutKeyErrorBody](circle_ci/errors/delete_checkout_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_project_environment_variable(project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an environment variable from the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.delete_project_environment_variable("some example string", "some example string")
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectEnvironmentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.delete_project_environment_variable(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteProjectEnvironmentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>name</code> | <code>str</code> | The name of the environment variable |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted environment variable

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteProjectEnvironmentVariableErrorBody](circle_ci/errors/delete_project_environment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def follow_project(vcs_type: VcsTypeOrStr, username: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectProjectFollowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Follows a project, adding it to the authenticated user's list of followed projects.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.follow_project(VcsType.GITHUB, "some example string", "some example string")
    # TODO: Handle 'response' of type ProjectProjectFollowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FollowProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.follow_project(
        VcsType.GITHUB, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectProjectFollowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FollowProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectProjectFollowResponse](circle_ci/models/project_project_follow_response.py)</code> -- Project followed successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[FollowProjectErrorBody](circle_ci/errors/follow_project_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_checkout_key(project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutKey</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.get_checkout_key("some example string", "some example string")
    # TODO: Handle 'response' of type CheckoutKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutKeyErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.get_checkout_key("some example string", "some example string")
    # TODO: Handle 'response' of type CheckoutKey
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>fingerprint</code> | <code>str</code> | The fingerprint of the checkout key |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKey](circle_ci/models/checkout_key.py)</code> -- Successfully retrieved checkout key

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetCheckoutKeyErrorBody](circle_ci/errors/get_checkout_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> Project2</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a project by its slug, which is a triplet of the VCS type, organization name, and repository name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.get_project("some example string")
    # TODO: Handle 'response' of type Project2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.get_project("some example string")
    # TODO: Handle 'response' of type Project2
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Project2](circle_ci/models/project2.py)</code> -- Successfully retrieved project

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetProjectErrorBody](circle_ci/errors/get_project_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_project_environment_variable(project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectEnvVar</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a masked environment variable by name for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.get_project_environment_variable("some example string", "some example string")
    # TODO: Handle 'response' of type ProjectEnvVar
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectEnvironmentVariableErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.get_project_environment_variable(
        "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectEnvVar
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProjectEnvironmentVariableErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>name</code> | <code>str</code> | The name of the environment variable |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectEnvVar](circle_ci/models/project_env_var.py)</code> -- Successfully retrieved environment variable

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetProjectEnvironmentVariableErrorBody](circle_ci/errors/get_project_environment_variable_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_checkout_keys(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutKeyList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of checkout keys for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.list_checkout_keys("some example string")
    # TODO: Handle 'response' of type CheckoutKeyList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckoutKeysErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.list_checkout_keys("some example string")
    # TODO: Handle 'response' of type CheckoutKeyList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckoutKeysErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKeyList](circle_ci/models/checkout_key_list.py)</code> -- Successfully retrieved checkout keys

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListCheckoutKeysErrorBody](circle_ci/errors/list_checkout_keys_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_project_environment_variables(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectEnvVarList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of masked environment variables for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.list_project_environment_variables("some example string")
    # TODO: Handle 'response' of type ProjectEnvVarList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectEnvironmentVariablesErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.list_project_environment_variables("some example string")
    # TODO: Handle 'response' of type ProjectEnvVarList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectEnvironmentVariablesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectEnvVarList](circle_ci/models/project_env_var_list.py)</code> -- Successfully retrieved environment variables

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListProjectEnvironmentVariablesErrorBody](circle_ci/errors/list_project_environment_variables_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_projects(*, request_options: RequestOptionsOrDict | None = None) -> list[ProjectCircleciProjectApi]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all projects the authenticated user follows, including recent build summaries for each project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.project_api.list_projects()
    # TODO: Handle 'response' of type list[ProjectCircleciProjectApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProjectsErrorBody
```

**Async**

```python
try:
    response = await async_client.project_api.list_projects()
    # TODO: Handle 'response' of type list[ProjectCircleciProjectApi]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[ProjectCircleciProjectApi](circle_ci/models/project_circleci_project_api.py)&#93;</code> -- Successfully retrieved projects

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListProjectsErrorBody](circle_ci/errors/list_projects_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ResourceClassApi

> Source: [ResourceClassApi](circle_ci/apis/resource_class_api.py)

<details>
<summary><code>def create_resource_class(body: RunnerResourceClassRequest | RunnerResourceClassRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ResourceClassCreation</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new resource class for the specified namespace. Returns a resource class token that is only displayed once and cannot be retrieved again. This token is used by runner agents to authenticate.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resource_class_api.create_resource_class(
        RunnerResourceClassRequest(resource_class="some example string", description="some example string")
    )
    # TODO: Handle 'response' of type ResourceClassCreation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResourceClassErrorBody
```

**Async**

```python
try:
    response = await async_client.resource_class_api.create_resource_class(
        RunnerResourceClassRequest(resource_class="some example string", description="some example string")
    )
    # TODO: Handle 'response' of type ResourceClassCreation
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateResourceClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RunnerResourceClassRequest](circle_ci/models/runner_resource_class_request.py) \| [RunnerResourceClassRequestDict](circle_ci/models/runner_resource_class_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceClassCreation](circle_ci/models/resource_class_creation.py)</code> -- Resource class created successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateResourceClassErrorBody](circle_ci/errors/create_resource_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_resource_class(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a resource class. This will prevent any runners using this resource class from picking up new tasks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.resource_class_api.delete_resource_class("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourceClassErrorBody
```

**Async**

```python
try:
    await async_client.resource_class_api.delete_resource_class("some example string")
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteResourceClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_class</code> | <code>str</code> | The resource class in namespace/name format |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteResourceClassErrorBody](circle_ci/errors/delete_resource_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_resource_class(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> ResourceClass</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a specific resource class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resource_class_api.get_resource_class("some example string")
    # TODO: Handle 'response' of type ResourceClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourceClassErrorBody
```

**Async**

```python
try:
    response = await async_client.resource_class_api.get_resource_class("some example string")
    # TODO: Handle 'response' of type ResourceClass
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetResourceClassErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_class</code> | <code>str</code> | The resource class in namespace/name format |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ResourceClass](circle_ci/models/resource_class.py)</code> -- Successfully retrieved resource class

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetResourceClassErrorBody](circle_ci/errors/get_resource_class_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_resource_classes(namespace: str, *, request_options: RequestOptionsOrDict | None = None) -> RunnerResourceClassResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of runner resource classes for the specified namespace. Resource classes define the compute resources available for self-hosted runner jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.resource_class_api.list_resource_classes("some example string")
    # TODO: Handle 'response' of type RunnerResourceClassResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResourceClassesErrorBody
```

**Async**

```python
try:
    response = await async_client.resource_class_api.list_resource_classes("some example string")
    # TODO: Handle 'response' of type RunnerResourceClassResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResourceClassesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>namespace</code> | <code>str</code> | The namespace to list resource classes for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerResourceClassResponse](circle_ci/models/runner_resource_class_response.py)</code> -- Successfully retrieved resource classes

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListResourceClassesErrorBody](circle_ci/errors/list_resource_classes_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RunnerApi

> Source: [RunnerApi](circle_ci/apis/runner_api.py)

<details>
<summary><code>def list_runners(*, namespace: str | None = None, resource_class: str | None = None, request_options: RequestOptionsOrDict | None = None) -> RunnerResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of self-hosted runners filtered by namespace or resource class. At least one filter parameter must be provided to return results. Returns details including hostname, name, connection timestamps, version, and resource class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runner_api.list_runners()
    # TODO: Handle 'response' of type RunnerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRunnersErrorBody
```

**Async**

```python
try:
    response = await async_client.runner_api.list_runners()
    # TODO: Handle 'response' of type RunnerResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRunnersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>namespace</code> | <code>str \| None</code> | The namespace to filter runners by. Cannot be used together with resource-class.<br>**Default**: <code>None</code> |
| <code>resource_class</code> | <code>str \| None</code> | The resource class to filter runners by. Cannot be used together with namespace.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerResponse](circle_ci/models/runner_response.py)</code> -- Successfully retrieved runners

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListRunnersErrorBody](circle_ci/errors/list_runners_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RunnerTask

> Source: [RunnerTask](circle_ci/apis/runner_task.py)

<details>
<summary><code>def get_running_task_count(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> RunnerTasksRunningResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of running tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runner_task.get_running_task_count("some example string")
    # TODO: Handle 'response' of type RunnerTasksRunningResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunningTaskCountErrorBody
```

**Async**

```python
try:
    response = await async_client.runner_task.get_running_task_count("some example string")
    # TODO: Handle 'response' of type RunnerTasksRunningResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunningTaskCountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_class</code> | <code>str</code> | The resource class to query running tasks for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerTasksRunningResponse](circle_ci/models/runner_tasks_running_response.py)</code> -- Successfully retrieved running task count

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetRunningTaskCountErrorBody](circle_ci/errors/get_running_task_count_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_unclaimed_task_count(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> RunnerTasksResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the number of unclaimed tasks for a given resource class. This endpoint is scoped to a single resource class, so it must be called per resource class to get totals across all classes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runner_task.get_unclaimed_task_count("some example string")
    # TODO: Handle 'response' of type RunnerTasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUnclaimedTaskCountErrorBody
```

**Async**

```python
try:
    response = await async_client.runner_task.get_unclaimed_task_count("some example string")
    # TODO: Handle 'response' of type RunnerTasksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetUnclaimedTaskCountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>resource_class</code> | <code>str</code> | The resource class to query unclaimed tasks for |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunnerTasksResponse](circle_ci/models/runner_tasks_response.py)</code> -- Successfully retrieved unclaimed task count

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetUnclaimedTaskCountErrorBody](circle_ci/errors/get_unclaimed_task_count_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SshKey

> Source: [SshKey](circle_ci/apis/ssh_key.py)

<details>
<summary><code>def add_ssh_key(vcs_type: VcsTypeOrStr, username: str, project: str, body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds an SSH key to the specified project for use in builds.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.ssh_key.add_ssh_key(
        VcsType.GITHUB,
        "some example string",
        "some example string",
        ProjectProjectSshKeyRequest(hostname="some example string", private_key="some example string"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddSshKeyErrorBody
```

**Async**

```python
try:
    await async_client.ssh_key.add_ssh_key(
        VcsType.GITHUB,
        "some example string",
        "some example string",
        ProjectProjectSshKeyRequest(hostname="some example string", private_key="some example string"),
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AddSshKeyErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>body</code> | <code>[ProjectProjectSshKeyRequest](circle_ci/models/project_project_ssh_key_request.py) \| [ProjectProjectSshKeyRequestDict](circle_ci/models/project_project_ssh_key_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[AddSshKeyErrorBody](circle_ci/errors/add_ssh_key_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutKeyCircleCiRestApiV1SshKeyApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new checkout key for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssh_key.create_checkout_key2(
        VcsType.GITHUB,
        "some example string",
        "some example string",
        ProjectProjectCheckoutKeyRequest(type_=Type1CircleCiRestApiV1SshKeyApi.DEPLOY_KEY),
    )
    # TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCheckoutKey2ErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh_key.create_checkout_key2(
        VcsType.GITHUB,
        "some example string",
        "some example string",
        ProjectProjectCheckoutKeyRequest(type_=Type1CircleCiRestApiV1SshKeyApi.DEPLOY_KEY),
    )
    # TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateCheckoutKey2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>body</code> | <code>[ProjectProjectCheckoutKeyRequest](circle_ci/models/project_project_checkout_key_request.py) \| [ProjectProjectCheckoutKeyRequestDict](circle_ci/models/project_project_checkout_key_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)</code> -- Checkout key created successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateCheckoutKey2ErrorBody](circle_ci/errors/create_checkout_key2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> ProjectProjectCheckoutKeyFingerprintResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssh_key.delete_checkout_key2(
        VcsType.GITHUB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectProjectCheckoutKeyFingerprintResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCheckoutKey2ErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh_key.delete_checkout_key2(
        VcsType.GITHUB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type ProjectProjectCheckoutKeyFingerprintResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteCheckoutKey2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>fingerprint</code> | <code>str</code> | The fingerprint of the checkout key |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectProjectCheckoutKeyFingerprintResponse](circle_ci/models/project_project_checkout_key_fingerprint_response.py)</code> -- Checkout key deleted successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteCheckoutKey2ErrorBody](circle_ci/errors/delete_checkout_key2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> CheckoutKeyCircleCiRestApiV1SshKeyApi</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a checkout key by its fingerprint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssh_key.get_checkout_key2(
        VcsType.GITHUB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutKey2ErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh_key.get_checkout_key2(
        VcsType.GITHUB, "some example string", "some example string", "some example string"
    )
    # TODO: Handle 'response' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCheckoutKey2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>fingerprint</code> | <code>str</code> | The fingerprint of the checkout key |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)</code> -- Successfully retrieved checkout key

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetCheckoutKey2ErrorBody](circle_ci/errors/get_checkout_key2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_checkout_keys2(vcs_type: VcsTypeOrStr, username: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> list[CheckoutKeyCircleCiRestApiV1SshKeyApi]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of checkout keys for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.ssh_key.list_checkout_keys2(VcsType.GITHUB, "some example string", "some example string")
    # TODO: Handle 'response' of type list[CheckoutKeyCircleCiRestApiV1SshKeyApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckoutKeys2ErrorBody
```

**Async**

```python
try:
    response = await async_client.ssh_key.list_checkout_keys2(
        VcsType.GITHUB, "some example string", "some example string"
    )
    # TODO: Handle 'response' of type list[CheckoutKeyCircleCiRestApiV1SshKeyApi]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckoutKeys2ErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)&#93;</code> -- Successfully retrieved checkout keys

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListCheckoutKeys2ErrorBody](circle_ci/errors/list_checkout_keys2_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ScheduleApi

> Source: [ScheduleApi](circle_ci/apis/schedule_api.py)

<details>
<summary><code>def create_schedule(project_slug: str, body: CreateScheduleRequest | CreateScheduleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Schedule</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a scheduled pipeline trigger for the specified project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedule_api.create_schedule(
        "some example string",
        CreateScheduleRequest(
            name="some example string",
            timetable=Timetable(per_hour=1, hours_of_day=[1], days_of_week=[DaysOfWeek.MON]),
            attribution_actor=AttributionActor.CURRENT,
            parameters={},
        ),
    )
    # TODO: Handle 'response' of type Schedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.schedule_api.create_schedule(
        "some example string",
        CreateScheduleRequest(
            name="some example string",
            timetable=Timetable(per_hour=1, hours_of_day=[1], days_of_week=[DaysOfWeek.MON]),
            attribution_actor=AttributionActor.CURRENT,
            parameters={},
        ),
    )
    # TODO: Handle 'response' of type Schedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>body</code> | <code>[CreateScheduleRequest](circle_ci/models/create_schedule_request.py) \| [CreateScheduleRequestDict](circle_ci/models/create_schedule_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Schedule](circle_ci/models/schedule.py)</code> -- Schedule created successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateScheduleErrorBody](circle_ci/errors/create_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_schedule(schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a schedule by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedule_api.delete_schedule(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.schedule_api.delete_schedule(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schedule_id</code> | <code>UUID</code> | The unique identifier of the schedule |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Schedule deleted successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteScheduleErrorBody](circle_ci/errors/delete_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_schedule(schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Schedule</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a schedule by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedule_api.get_schedule(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type Schedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.schedule_api.get_schedule(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type Schedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schedule_id</code> | <code>UUID</code> | The unique identifier of the schedule |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Schedule](circle_ci/models/schedule.py)</code> -- Successfully retrieved schedule

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetScheduleErrorBody](circle_ci/errors/get_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_schedules(project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ScheduleList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of scheduled pipeline triggers for a given project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedule_api.list_schedules("some example string")
    # TODO: Handle 'response' of type ScheduleList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSchedulesErrorBody
```

**Async**

```python
try:
    response = await async_client.schedule_api.list_schedules("some example string")
    # TODO: Handle 'response' of type ScheduleList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSchedulesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>project_slug</code> | <code>str</code> | The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs) |
| <code>page_token</code> | <code>str \| None</code> | Token for retrieving the next page of results<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScheduleList](circle_ci/models/schedule_list.py)</code> -- Successfully retrieved schedules

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListSchedulesErrorBody](circle_ci/errors/list_schedules_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_schedule(schedule_id: UUID, body: UpdateScheduleRequest | UpdateScheduleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> Schedule</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing schedule with the provided parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.schedule_api.update_schedule(
        UUID("00000000-0000-0000-0000-000000000000"), UpdateScheduleRequest()
    )
    # TODO: Handle 'response' of type Schedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateScheduleErrorBody
```

**Async**

```python
try:
    response = await async_client.schedule_api.update_schedule(
        UUID("00000000-0000-0000-0000-000000000000"), UpdateScheduleRequest()
    )
    # TODO: Handle 'response' of type Schedule
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateScheduleErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>schedule_id</code> | <code>UUID</code> | The unique identifier of the schedule |
| <code>body</code> | <code>[UpdateScheduleRequest](circle_ci/models/update_schedule_request.py) \| [UpdateScheduleRequestDict](circle_ci/models/update_schedule_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Schedule](circle_ci/models/schedule.py)</code> -- Schedule updated successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[UpdateScheduleErrorBody](circle_ci/errors/update_schedule_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## TestMetadataApi

> Source: [TestMetadataApi](circle_ci/apis/test_metadata_api.py)

<details>
<summary><code>def list_build_tests(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> ProjectProjectBuildNumTestsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns test metadata collected from the specified build, sourced from JUnit XML or similar test result files.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.test_metadata_api.list_build_tests(
        VcsType.GITHUB, "some example string", "some example string", 1
    )
    # TODO: Handle 'response' of type ProjectProjectBuildNumTestsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildTestsErrorBody
```

**Async**

```python
try:
    response = await async_client.test_metadata_api.list_build_tests(
        VcsType.GITHUB, "some example string", "some example string", 1
    )
    # TODO: Handle 'response' of type ProjectProjectBuildNumTestsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildTestsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vcs_type</code> | <code>[VcsTypeOrStr](circle_ci/models/enums/vcs_type.py)</code> | The version control system type |
| <code>username</code> | <code>str</code> | The organization or user name |
| <code>project</code> | <code>str</code> | The repository name |
| <code>build_num</code> | <code>int</code> | The build number |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProjectProjectBuildNumTestsResponse](circle_ci/models/project_project_build_num_tests_response.py)</code> -- Successfully retrieved test metadata

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListBuildTestsErrorBody](circle_ci/errors/list_build_tests_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## UserApi

> Source: [UserApi](circle_ci/apis/user_api.py)

<details>
<summary><code>def get_collaborations(*, request_options: RequestOptionsOrDict | None = None) -> list[Collaboration]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of organizations and accounts the current user collaborates with.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user_api.get_collaborations()
    # TODO: Handle 'response' of type list[Collaboration]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCollaborationsErrorBody
```

**Async**

```python
try:
    response = await async_client.user_api.get_collaborations()
    # TODO: Handle 'response' of type list[Collaboration]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCollaborationsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Collaboration](circle_ci/models/collaboration.py)&#93;</code> -- Successfully retrieved collaborations

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetCollaborationsErrorBody](circle_ci/errors/get_collaborations_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_current_user(*, request_options: RequestOptionsOrDict | None = None) -> User</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about the currently authenticated user, including name, login, and avatar URL.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.user_api.get_current_user()
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentUserErrorBody
```

**Async**

```python
try:
    response = await async_client.user_api.get_current_user()
    # TODO: Handle 'response' of type User
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetCurrentUserErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[User](circle_ci/models/user.py)</code> -- Successfully retrieved user information

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetCurrentUserErrorBody](circle_ci/errors/get_current_user_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[RawError](circle_ci/core/results.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Webhook

> Source: [Webhook](circle_ci/apis/webhook.py)

<details>
<summary><code>def create_webhook(body: CreateWebhookRequest | CreateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new outbound webhook for the specified scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook.create_webhook(
        CreateWebhookRequest(
            name="some example string",
            url="https://example.com",
            events=[Event.WORKFLOW_COMPLETED],
            scope=Scope1(id=UUID("00000000-0000-0000-0000-000000000000")),
            signing_secret="some example string",
        ),
    )
    # TODO: Handle 'response' of type WebhookInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook.create_webhook(
        CreateWebhookRequest(
            name="some example string",
            url="https://example.com",
            events=[Event.WORKFLOW_COMPLETED],
            scope=Scope1(id=UUID("00000000-0000-0000-0000-000000000000")),
            signing_secret="some example string",
        ),
    )
    # TODO: Handle 'response' of type WebhookInfo
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
| <code>body</code> | <code>[CreateWebhookRequest](circle_ci/models/create_webhook_request.py) \| [CreateWebhookRequestDict](circle_ci/models/create_webhook_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookInfo](circle_ci/models/webhook_info.py)</code> -- Webhook created successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CreateWebhookErrorBody](circle_ci/errors/create_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_webhook(webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook.delete_webhook(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook.delete_webhook(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
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
| <code>webhook_id</code> | <code>UUID</code> | The unique identifier of the webhook |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Webhook deleted successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[DeleteWebhookErrorBody](circle_ci/errors/delete_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_webhook(webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> WebhookInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a webhook by its unique identifier.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook.get_webhook(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WebhookInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook.get_webhook(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WebhookInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWebhookErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>webhook_id</code> | <code>UUID</code> | The unique identifier of the webhook |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookInfo](circle_ci/models/webhook_info.py)</code> -- Successfully retrieved webhook

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetWebhookErrorBody](circle_ci/errors/get_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_webhooks(scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: RequestOptionsOrDict | None = None) -> WebhookList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of outbound webhooks for the specified scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook.list_webhooks(UUID("00000000-0000-0000-0000-000000000000"), ScopeType.PROJECT)
    # TODO: Handle 'response' of type WebhookList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhooksErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook.list_webhooks(UUID("00000000-0000-0000-0000-000000000000"), ScopeType.PROJECT)
    # TODO: Handle 'response' of type WebhookList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWebhooksErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scope_id</code> | <code>UUID</code> | The ID of the scope (project ID) |
| <code>scope_type</code> | <code>[ScopeTypeOrStr](circle_ci/models/enums/scope_type.py)</code> | The type of scope |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookList](circle_ci/models/webhook_list.py)</code> -- Successfully retrieved webhooks

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListWebhooksErrorBody](circle_ci/errors/list_webhooks_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_webhook(webhook_id: UUID, body: UpdateWebhookRequest | UpdateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WebhookInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing webhook with the provided parameters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.webhook.update_webhook(UUID("00000000-0000-0000-0000-000000000000"), UpdateWebhookRequest())
    # TODO: Handle 'response' of type WebhookInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWebhookErrorBody
```

**Async**

```python
try:
    response = await async_client.webhook.update_webhook(
        UUID("00000000-0000-0000-0000-000000000000"), UpdateWebhookRequest()
    )
    # TODO: Handle 'response' of type WebhookInfo
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
| <code>webhook_id</code> | <code>UUID</code> | The unique identifier of the webhook |
| <code>body</code> | <code>[UpdateWebhookRequest](circle_ci/models/update_webhook_request.py) \| [UpdateWebhookRequestDict](circle_ci/models/update_webhook_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WebhookInfo](circle_ci/models/webhook_info.py)</code> -- Webhook updated successfully

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[UpdateWebhookErrorBody](circle_ci/errors/update_webhook_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WorkflowApi

> Source: [WorkflowApi](circle_ci/apis/workflow_api.py)

<details>
<summary><code>def approve_workflow_job(id_: UUID, approval_request_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Approves a pending approval job in a workflow, allowing the workflow to continue execution.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workflow_api.approve_workflow_job(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApproveWorkflowJobErrorBody
```

**Async**

```python
try:
    response = await async_client.workflow_api.approve_workflow_job(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ApproveWorkflowJobErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The unique identifier of the workflow |
| <code>approval_request_id</code> | <code>UUID</code> | The ID of the approval request to approve |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Approval accepted

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ApproveWorkflowJobErrorBody](circle_ci/errors/approve_workflow_job_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_workflow(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a running workflow and all of its running jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workflow_api.cancel_workflow(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelWorkflowErrorBody
```

**Async**

```python
try:
    response = await async_client.workflow_api.cancel_workflow(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type MessageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelWorkflowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The unique identifier of the workflow |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Workflow cancellation accepted

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[CancelWorkflowErrorBody](circle_ci/errors/cancel_workflow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workflow(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Workflow</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a workflow by its unique identifier, including its status, pipeline ID, and timing information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workflow_api.get_workflow(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type Workflow
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowErrorBody
```

**Async**

```python
try:
    response = await async_client.workflow_api.get_workflow(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type Workflow
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkflowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The unique identifier of the workflow |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Workflow](circle_ci/models/workflow.py)</code> -- Successfully retrieved workflow

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[GetWorkflowErrorBody](circle_ci/errors/get_workflow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_workflow_jobs(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> WorkflowJobList</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of jobs associated with a given workflow.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workflow_api.list_workflow_jobs(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WorkflowJobList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkflowJobsErrorBody
```

**Async**

```python
try:
    response = await async_client.workflow_api.list_workflow_jobs(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WorkflowJobList
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkflowJobsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The unique identifier of the workflow |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkflowJobList](circle_ci/models/workflow_job_list.py)</code> -- Successfully retrieved workflow jobs

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[ListWorkflowJobsErrorBody](circle_ci/errors/list_workflow_jobs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def rerun_workflow(id_: UUID, *, body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> RerunWorkflowResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reruns a workflow. Optionally, specific jobs can be selected for rerun, and SSH access can be enabled for debugging.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workflow_api.rerun_workflow(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RerunWorkflowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RerunWorkflowErrorBody
```

**Async**

```python
try:
    response = await async_client.workflow_api.rerun_workflow(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RerunWorkflowResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RerunWorkflowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | The unique identifier of the workflow |
| <code>body</code> | <code>[WorkflowRerunRequest](circle_ci/models/workflow_rerun_request.py) \| [WorkflowRerunRequestDict](circle_ci/models/workflow_rerun_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RerunWorkflowResponse](circle_ci/models/rerun_workflow_response.py)</code> -- Workflow rerun accepted

**OnError**: <code>[ApiError](circle_ci/core/exceptions.py)&#91;[RerunWorkflowErrorBody](circle_ci/errors/rerun_workflow_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](circle_ci/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](circle_ci/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

