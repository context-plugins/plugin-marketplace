# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [CircleCiClient](circle_ci/client.py)

## ArtifactApi

> Source: [ArtifactApi](circle_ci/apis/artifact_api.py)

<details>
<summary><code>def list_build_artifacts(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Artifact], ListBuildArtifactsErrorBody]</code></summary>

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
result = client.artifact_api.with_raw_response.list_build_artifacts(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Artifact]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildArtifactsErrorBody
```

**Async**

```python
result = await async_client.artifact_api.with_raw_response.list_build_artifacts(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Artifact]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildArtifactsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[Artifact](circle_ci/models/artifact.py)&#93;, [ListBuildArtifactsErrorBody](circle_ci/errors/list_build_artifacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Artifact](circle_ci/models/artifact.py)&#93;</code> -- Successfully retrieved artifacts

**On `Failure`**: `error` is <code>[ListBuildArtifactsErrorBody](circle_ci/errors/list_build_artifacts_error.py)</code>

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
<summary><code>def list_latest_artifacts(vcs_type: VcsTypeOrStr, username: str, project: str, *, branch: str | None = None, filter_: FilterOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Artifact], ListLatestArtifactsErrorBody]</code></summary>

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
result = client.artifact_api.with_raw_response.list_latest_artifacts(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Artifact]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLatestArtifactsErrorBody
```

**Async**

```python
result = await async_client.artifact_api.with_raw_response.list_latest_artifacts(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Artifact]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListLatestArtifactsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[Artifact](circle_ci/models/artifact.py)&#93;, [ListLatestArtifactsErrorBody](circle_ci/errors/list_latest_artifacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Artifact](circle_ci/models/artifact.py)&#93;</code> -- Successfully retrieved latest artifacts

**On `Failure`**: `error` is <code>[ListLatestArtifactsErrorBody](circle_ci/errors/list_latest_artifacts_error.py)</code>

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
<summary><code>def cancel_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSummary, CancelBuildErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.cancel_build(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelBuildErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.cancel_build(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelBuildErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[BuildSummary](circle_ci/models/build_summary.py), [CancelBuildErrorBody](circle_ci/errors/cancel_build_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build cancelled successfully

**On `Failure`**: `error` is <code>[CancelBuildErrorBody](circle_ci/errors/cancel_build_error.py)</code>

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
<summary><code>def get_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildDetail, GetBuildErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.get_build(VcsType.GITHUB, "some example string", "some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBuildErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.get_build(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildDetail
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBuildErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[BuildDetail](circle_ci/models/build_detail.py), [GetBuildErrorBody](circle_ci/errors/get_build_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildDetail](circle_ci/models/build_detail.py)</code> -- Successfully retrieved build details

**On `Failure`**: `error` is <code>[GetBuildErrorBody](circle_ci/errors/get_build_error.py)</code>

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
<summary><code>def list_project_builds(vcs_type: VcsTypeOrStr, username: str, project: str, *, filter_: FilterCircleCiRestApiV1BuildApiOrStr | None = None, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Build], ListProjectBuildsErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.list_project_builds(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectBuildsErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.list_project_builds(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectBuildsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[Build](circle_ci/models/build.py)&#93;, [ListProjectBuildsErrorBody](circle_ci/errors/list_project_builds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Build](circle_ci/models/build.py)&#93;</code> -- Successfully retrieved builds

**On `Failure`**: `error` is <code>[ListProjectBuildsErrorBody](circle_ci/errors/list_project_builds_error.py)</code>

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
<summary><code>def list_recent_builds(*, limit: int | None = 30, offset: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Build], ListRecentBuildsErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.list_recent_builds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRecentBuildsErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.list_recent_builds()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Build]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRecentBuildsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[Build](circle_ci/models/build.py)&#93;, [ListRecentBuildsErrorBody](circle_ci/errors/list_recent_builds_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Build](circle_ci/models/build.py)&#93;</code> -- Successfully retrieved recent builds

**On `Failure`**: `error` is <code>[ListRecentBuildsErrorBody](circle_ci/errors/list_recent_builds_error.py)</code>

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
<summary><code>def retry_build(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSummary, RetryBuildErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.retry_build(VcsType.GITHUB, "some example string", "some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RetryBuildErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.retry_build(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[BuildSummary](circle_ci/models/build_summary.py), [RetryBuildErrorBody](circle_ci/errors/retry_build_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build retried successfully

**On `Failure`**: `error` is <code>[RetryBuildErrorBody](circle_ci/errors/retry_build_error.py)</code>

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
<summary><code>def trigger_branch_build(vcs_type: VcsTypeOrStr, username: str, project: str, branch: str, *, body: ProjectProjectTreeBranchRequest | ProjectProjectTreeBranchRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSummary, TriggerBranchBuildErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.trigger_branch_build(
    VcsType.GITHUB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBranchBuildErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.trigger_branch_build(
    VcsType.GITHUB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBranchBuildErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[BuildSummary](circle_ci/models/build_summary.py), [TriggerBranchBuildErrorBody](circle_ci/errors/trigger_branch_build_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build triggered successfully

**On `Failure`**: `error` is <code>[TriggerBranchBuildErrorBody](circle_ci/errors/trigger_branch_build_error.py)</code>

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
<summary><code>def trigger_build(vcs_type: VcsTypeOrStr, username: str, project: str, *, body: ProjectProjectRequest | ProjectProjectRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSummary, TriggerBuildErrorBody]</code></summary>

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
result = client.build_api.with_raw_response.trigger_build(VcsType.GITHUB, "some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBuildErrorBody
```

**Async**

```python
result = await async_client.build_api.with_raw_response.trigger_build(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBuildErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[BuildSummary](circle_ci/models/build_summary.py), [TriggerBuildErrorBody](circle_ci/errors/trigger_build_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSummary](circle_ci/models/build_summary.py)</code> -- Build triggered successfully

**On `Failure`**: `error` is <code>[TriggerBuildErrorBody](circle_ci/errors/trigger_build_error.py)</code>

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
<summary><code>def add_or_update_context_environment_variable(context_id: UUID, env_var_name: str, body: ContextEnvironmentVariableRequest | ContextEnvironmentVariableRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentVariable, AddOrUpdateContextEnvironmentVariableErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.add_or_update_context_environment_variable(
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    ContextEnvironmentVariableRequest(value="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentVariable
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddOrUpdateContextEnvironmentVariableErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.add_or_update_context_environment_variable(
    UUID("00000000-0000-0000-0000-000000000000"),
    "some example string",
    ContextEnvironmentVariableRequest(value="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentVariable
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddOrUpdateContextEnvironmentVariableErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[EnvironmentVariable](circle_ci/models/environment_variable.py), [AddOrUpdateContextEnvironmentVariableErrorBody](circle_ci/errors/add_or_update_context_environment_variable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentVariable](circle_ci/models/environment_variable.py)</code> -- Successfully added or updated environment variable

**On `Failure`**: `error` is <code>[AddOrUpdateContextEnvironmentVariableErrorBody](circle_ci/errors/add_or_update_context_environment_variable_error.py)</code>

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
<summary><code>def create_context(body: CreateContextRequest | CreateContextRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Context, CreateContextErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.create_context(
    CreateContextRequest(
        name="some example string", owner=Owner(id=UUID("00000000-0000-0000-0000-000000000000"), type_=Type.ACCOUNT)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Context
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContextErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.create_context(
    CreateContextRequest(
        name="some example string", owner=Owner(id=UUID("00000000-0000-0000-0000-000000000000"), type_=Type.ACCOUNT)
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Context
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateContextErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Context](circle_ci/models/context.py), [CreateContextErrorBody](circle_ci/errors/create_context_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Context](circle_ci/models/context.py)</code> -- Successfully created context

**On `Failure`**: `error` is <code>[CreateContextErrorBody](circle_ci/errors/create_context_error.py)</code>

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
<summary><code>def delete_context(context_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteContextErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.delete_context(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContextErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.delete_context(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContextErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [DeleteContextErrorBody](circle_ci/errors/delete_context_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted context

**On `Failure`**: `error` is <code>[DeleteContextErrorBody](circle_ci/errors/delete_context_error.py)</code>

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
<summary><code>def delete_context_environment_variable(context_id: UUID, env_var_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteContextEnvironmentVariableErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.delete_context_environment_variable(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContextEnvironmentVariableErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.delete_context_environment_variable(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteContextEnvironmentVariableErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [DeleteContextEnvironmentVariableErrorBody](circle_ci/errors/delete_context_environment_variable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted environment variable

**On `Failure`**: `error` is <code>[DeleteContextEnvironmentVariableErrorBody](circle_ci/errors/delete_context_environment_variable_error.py)</code>

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
<summary><code>def get_context(context_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Context, GetContextErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.get_context(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Context
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContextErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.get_context(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Context
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetContextErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Context](circle_ci/models/context.py), [GetContextErrorBody](circle_ci/errors/get_context_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Context](circle_ci/models/context.py)</code> -- Successfully retrieved context

**On `Failure`**: `error` is <code>[GetContextErrorBody](circle_ci/errors/get_context_error.py)</code>

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
<summary><code>def list_context_environment_variables(context_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentVariableList, ListContextEnvironmentVariablesErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.list_context_environment_variables(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentVariableList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContextEnvironmentVariablesErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.list_context_environment_variables(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentVariableList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContextEnvironmentVariablesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[EnvironmentVariableList](circle_ci/models/environment_variable_list.py), [ListContextEnvironmentVariablesErrorBody](circle_ci/errors/list_context_environment_variables_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentVariableList](circle_ci/models/environment_variable_list.py)</code> -- Successfully retrieved environment variables

**On `Failure`**: `error` is <code>[ListContextEnvironmentVariablesErrorBody](circle_ci/errors/list_context_environment_variables_error.py)</code>

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
<summary><code>def list_contexts(*, owner_id: UUID | None = None, owner_slug: str | None = None, owner_type: OwnerTypeOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ContextList, ListContextsErrorBody]</code></summary>

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
result = client.context_api.with_raw_response.list_contexts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContextList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContextsErrorBody
```

**Async**

```python
result = await async_client.context_api.with_raw_response.list_contexts()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ContextList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListContextsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ContextList](circle_ci/models/context_list.py), [ListContextsErrorBody](circle_ci/errors/list_contexts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ContextList](circle_ci/models/context_list.py)</code> -- Successfully retrieved contexts

**On `Failure`**: `error` is <code>[ListContextsErrorBody](circle_ci/errors/list_contexts_error.py)</code>

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
<summary><code>def get_project_workflow_metrics(project_slug: str, *, branch: str | None = None, reporting_window: ReportingWindowOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsWorkflowMetrics, GetProjectWorkflowMetricsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_project_workflow_metrics("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsWorkflowMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectWorkflowMetricsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_project_workflow_metrics("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsWorkflowMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectWorkflowMetricsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[InsightsWorkflowMetrics](circle_ci/models/insights_workflow_metrics.py), [GetProjectWorkflowMetricsErrorBody](circle_ci/errors/get_project_workflow_metrics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsWorkflowMetrics](circle_ci/models/insights_workflow_metrics.py)</code> -- Successfully retrieved workflow metrics

**On `Failure`**: `error` is <code>[GetProjectWorkflowMetricsErrorBody](circle_ci/errors/get_project_workflow_metrics_error.py)</code>

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
<summary><code>def get_workflow_job_metrics(project_slug: str, workflow_name: str, *, branch: str | None = None, reporting_window: ReportingWindowOrStr | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsJobMetrics, GetWorkflowJobMetricsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_workflow_job_metrics("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsJobMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowJobMetricsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_workflow_job_metrics(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsJobMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowJobMetricsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[InsightsJobMetrics](circle_ci/models/insights_job_metrics.py), [GetWorkflowJobMetricsErrorBody](circle_ci/errors/get_workflow_job_metrics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsJobMetrics](circle_ci/models/insights_job_metrics.py)</code> -- Successfully retrieved job metrics

**On `Failure`**: `error` is <code>[GetWorkflowJobMetricsErrorBody](circle_ci/errors/get_workflow_job_metrics_error.py)</code>

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
<summary><code>def get_workflow_runs(project_slug: str, workflow_name: str, *, branch: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsWorkflowRuns, GetWorkflowRunsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_workflow_runs("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsWorkflowRuns
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowRunsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_workflow_runs("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsWorkflowRuns
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowRunsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[InsightsWorkflowRuns](circle_ci/models/insights_workflow_runs.py), [GetWorkflowRunsErrorBody](circle_ci/errors/get_workflow_runs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsWorkflowRuns](circle_ci/models/insights_workflow_runs.py)</code> -- Successfully retrieved workflow runs

**On `Failure`**: `error` is <code>[GetWorkflowRunsErrorBody](circle_ci/errors/get_workflow_runs_error.py)</code>

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
<summary><code>def get_workflow_test_metrics(project_slug: str, workflow_name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InsightsTestMetrics, GetWorkflowTestMetricsErrorBody]</code></summary>

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
result = client.insights.with_raw_response.get_workflow_test_metrics("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsTestMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowTestMetricsErrorBody
```

**Async**

```python
result = await async_client.insights.with_raw_response.get_workflow_test_metrics(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InsightsTestMetrics
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowTestMetricsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[InsightsTestMetrics](circle_ci/models/insights_test_metrics.py), [GetWorkflowTestMetricsErrorBody](circle_ci/errors/get_workflow_test_metrics_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InsightsTestMetrics](circle_ci/models/insights_test_metrics.py)</code> -- Successfully retrieved test metrics

**On `Failure`**: `error` is <code>[GetWorkflowTestMetricsErrorBody](circle_ci/errors/get_workflow_test_metrics_error.py)</code>

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
<summary><code>def cancel_job(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, CancelJobErrorBody]</code></summary>

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
result = client.job_api.with_raw_response.cancel_job("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelJobErrorBody
```

**Async**

```python
result = await async_client.job_api.with_raw_response.cancel_job("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelJobErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [CancelJobErrorBody](circle_ci/errors/cancel_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Job cancelled successfully

**On `Failure`**: `error` is <code>[CancelJobErrorBody](circle_ci/errors/cancel_job_error.py)</code>

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
<summary><code>def get_job(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Job, GetJobErrorBody]</code></summary>

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
result = client.job_api.with_raw_response.get_job("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobErrorBody
```

**Async**

```python
result = await async_client.job_api.with_raw_response.get_job("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Job
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Job](circle_ci/models/job.py), [GetJobErrorBody](circle_ci/errors/get_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Job](circle_ci/models/job.py)</code> -- Successfully retrieved job details

**On `Failure`**: `error` is <code>[GetJobErrorBody](circle_ci/errors/get_job_error.py)</code>

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
<summary><code>def list_job_artifacts(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ArtifactList, ListJobArtifactsErrorBody]</code></summary>

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
result = client.job_api.with_raw_response.list_job_artifacts("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArtifactList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobArtifactsErrorBody
```

**Async**

```python
result = await async_client.job_api.with_raw_response.list_job_artifacts("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ArtifactList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobArtifactsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ArtifactList](circle_ci/models/artifact_list.py), [ListJobArtifactsErrorBody](circle_ci/errors/list_job_artifacts_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ArtifactList](circle_ci/models/artifact_list.py)</code> -- Successfully retrieved artifacts

**On `Failure`**: `error` is <code>[ListJobArtifactsErrorBody](circle_ci/errors/list_job_artifacts_error.py)</code>

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
<summary><code>def list_job_tests(project_slug: str, job_number: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TestList, ListJobTestsErrorBody]</code></summary>

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
result = client.job_api.with_raw_response.list_job_tests("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobTestsErrorBody
```

**Async**

```python
result = await async_client.job_api.with_raw_response.list_job_tests("some example string", 1)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TestList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobTestsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[TestList](circle_ci/models/test_list.py), [ListJobTestsErrorBody](circle_ci/errors/list_job_tests_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TestList](circle_ci/models/test_list.py)</code> -- Successfully retrieved test metadata

**On `Failure`**: `error` is <code>[ListJobTestsErrorBody](circle_ci/errors/list_job_tests_error.py)</code>

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
<summary><code>def continue_pipeline(body: PipelineContinueRequest | PipelineContinueRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, ContinuePipelineErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.continue_pipeline(
    PipelineContinueRequest(continuation_key="some example string", configuration="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContinuePipelineErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.continue_pipeline(
    PipelineContinueRequest(continuation_key="some example string", configuration="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ContinuePipelineErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [ContinuePipelineErrorBody](circle_ci/errors/continue_pipeline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Pipeline continued successfully

**On `Failure`**: `error` is <code>[ContinuePipelineErrorBody](circle_ci/errors/continue_pipeline_error.py)</code>

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
<summary><code>def get_pipeline(pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineCircleCiRestApiV2PipelineApi, GetPipelineErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.get_pipeline(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineCircleCiRestApiV2PipelineApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPipelineErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.get_pipeline(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineCircleCiRestApiV2PipelineApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPipelineErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[PipelineCircleCiRestApiV2PipelineApi](circle_ci/models/pipeline_circle_ci_rest_api_v2_pipeline_api.py), [GetPipelineErrorBody](circle_ci/errors/get_pipeline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineCircleCiRestApiV2PipelineApi](circle_ci/models/pipeline_circle_ci_rest_api_v2_pipeline_api.py)</code> -- Successfully retrieved pipeline

**On `Failure`**: `error` is <code>[GetPipelineErrorBody](circle_ci/errors/get_pipeline_error.py)</code>

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
<summary><code>def get_pipeline_config(pipeline_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineConfig, GetPipelineConfigErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.get_pipeline_config(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPipelineConfigErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.get_pipeline_config(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineConfig
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetPipelineConfigErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[PipelineConfig](circle_ci/models/pipeline_config.py), [GetPipelineConfigErrorBody](circle_ci/errors/get_pipeline_config_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineConfig](circle_ci/models/pipeline_config.py)</code> -- Successfully retrieved pipeline configuration

**On `Failure`**: `error` is <code>[GetPipelineConfigErrorBody](circle_ci/errors/get_pipeline_config_error.py)</code>

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
<summary><code>def list_my_project_pipelines(project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineList, ListMyProjectPipelinesErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.list_my_project_pipelines("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMyProjectPipelinesErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.list_my_project_pipelines("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMyProjectPipelinesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[PipelineList](circle_ci/models/pipeline_list.py), [ListMyProjectPipelinesErrorBody](circle_ci/errors/list_my_project_pipelines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineList](circle_ci/models/pipeline_list.py)</code> -- Successfully retrieved pipelines

**On `Failure`**: `error` is <code>[ListMyProjectPipelinesErrorBody](circle_ci/errors/list_my_project_pipelines_error.py)</code>

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
<summary><code>def list_pipeline_workflows(pipeline_id: UUID, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowList, ListPipelineWorkflowsErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.list_pipeline_workflows(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPipelineWorkflowsErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.list_pipeline_workflows(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPipelineWorkflowsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[WorkflowList](circle_ci/models/workflow_list.py), [ListPipelineWorkflowsErrorBody](circle_ci/errors/list_pipeline_workflows_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowList](circle_ci/models/workflow_list.py)</code> -- Successfully retrieved workflows

**On `Failure`**: `error` is <code>[ListPipelineWorkflowsErrorBody](circle_ci/errors/list_pipeline_workflows_error.py)</code>

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
<summary><code>def list_pipelines(*, org_slug: str | None = None, mine: bool | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineList, ListPipelinesErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.list_pipelines()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPipelinesErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.list_pipelines()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPipelinesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[PipelineList](circle_ci/models/pipeline_list.py), [ListPipelinesErrorBody](circle_ci/errors/list_pipelines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineList](circle_ci/models/pipeline_list.py)</code> -- Successfully retrieved pipelines

**On `Failure`**: `error` is <code>[ListPipelinesErrorBody](circle_ci/errors/list_pipelines_error.py)</code>

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
<summary><code>def list_project_pipelines(project_slug: str, *, branch: str | None = None, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineList, ListProjectPipelinesErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.list_project_pipelines("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectPipelinesErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.list_project_pipelines("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectPipelinesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[PipelineList](circle_ci/models/pipeline_list.py), [ListProjectPipelinesErrorBody](circle_ci/errors/list_project_pipelines_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineList](circle_ci/models/pipeline_list.py)</code> -- Successfully retrieved pipelines

**On `Failure`**: `error` is <code>[ListProjectPipelinesErrorBody](circle_ci/errors/list_project_pipelines_error.py)</code>

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
<summary><code>def trigger_pipeline(project_slug: str, *, body: TriggerPipelineRequest | TriggerPipelineRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PipelineCreation, TriggerPipelineErrorBody]</code></summary>

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
result = client.pipeline_api.with_raw_response.trigger_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineCreation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerPipelineErrorBody
```

**Async**

```python
result = await async_client.pipeline_api.with_raw_response.trigger_pipeline("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PipelineCreation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerPipelineErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[PipelineCreation](circle_ci/models/pipeline_creation.py), [TriggerPipelineErrorBody](circle_ci/errors/trigger_pipeline_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PipelineCreation](circle_ci/models/pipeline_creation.py)</code> -- Pipeline triggered successfully

**On `Failure`**: `error` is <code>[TriggerPipelineErrorBody](circle_ci/errors/trigger_pipeline_error.py)</code>

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
<summary><code>def create_checkout_key(project_slug: str, body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutKey, CreateCheckoutKeyErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.create_checkout_key(
    "some example string", ProjectCheckoutKeyRequest(type_=Type1.DEPLOY_KEY)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCheckoutKeyErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.create_checkout_key(
    "some example string", ProjectCheckoutKeyRequest(type_=Type1.DEPLOY_KEY)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCheckoutKeyErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[CheckoutKey](circle_ci/models/checkout_key.py), [CreateCheckoutKeyErrorBody](circle_ci/errors/create_checkout_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutKey](circle_ci/models/checkout_key.py)</code> -- Checkout key created successfully

**On `Failure`**: `error` is <code>[CreateCheckoutKeyErrorBody](circle_ci/errors/create_checkout_key_error.py)</code>

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
<summary><code>def create_project_environment_variable(project_slug: str, body: ProjectEnvvarRequest | ProjectEnvvarRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectEnvVar, CreateProjectEnvironmentVariableErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.create_project_environment_variable(
    "some example string", ProjectEnvvarRequest(name="some example string", value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectEnvVar
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectEnvironmentVariableErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.create_project_environment_variable(
    "some example string", ProjectEnvvarRequest(name="some example string", value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectEnvVar
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateProjectEnvironmentVariableErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ProjectEnvVar](circle_ci/models/project_env_var.py), [CreateProjectEnvironmentVariableErrorBody](circle_ci/errors/create_project_environment_variable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectEnvVar](circle_ci/models/project_env_var.py)</code> -- Environment variable created successfully

**On `Failure`**: `error` is <code>[CreateProjectEnvironmentVariableErrorBody](circle_ci/errors/create_project_environment_variable_error.py)</code>

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
<summary><code>def delete_checkout_key(project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteCheckoutKeyErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.delete_checkout_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCheckoutKeyErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.delete_checkout_key(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCheckoutKeyErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [DeleteCheckoutKeyErrorBody](circle_ci/errors/delete_checkout_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted checkout key

**On `Failure`**: `error` is <code>[DeleteCheckoutKeyErrorBody](circle_ci/errors/delete_checkout_key_error.py)</code>

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
<summary><code>def delete_project_environment_variable(project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteProjectEnvironmentVariableErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.delete_project_environment_variable(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectEnvironmentVariableErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.delete_project_environment_variable(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteProjectEnvironmentVariableErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [DeleteProjectEnvironmentVariableErrorBody](circle_ci/errors/delete_project_environment_variable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Successfully deleted environment variable

**On `Failure`**: `error` is <code>[DeleteProjectEnvironmentVariableErrorBody](circle_ci/errors/delete_project_environment_variable_error.py)</code>

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
<summary><code>def follow_project(vcs_type: VcsTypeOrStr, username: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectProjectFollowResponse, FollowProjectErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.follow_project(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectProjectFollowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FollowProjectErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.follow_project(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectProjectFollowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FollowProjectErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ProjectProjectFollowResponse](circle_ci/models/project_project_follow_response.py), [FollowProjectErrorBody](circle_ci/errors/follow_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectProjectFollowResponse](circle_ci/models/project_project_follow_response.py)</code> -- Project followed successfully

**On `Failure`**: `error` is <code>[FollowProjectErrorBody](circle_ci/errors/follow_project_error.py)</code>

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
<summary><code>def get_checkout_key(project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutKey, GetCheckoutKeyErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.get_checkout_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutKeyErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.get_checkout_key("some example string", "some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKey
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutKeyErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[CheckoutKey](circle_ci/models/checkout_key.py), [GetCheckoutKeyErrorBody](circle_ci/errors/get_checkout_key_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutKey](circle_ci/models/checkout_key.py)</code> -- Successfully retrieved checkout key

**On `Failure`**: `error` is <code>[GetCheckoutKeyErrorBody](circle_ci/errors/get_checkout_key_error.py)</code>

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
<summary><code>def get_project(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Project2, GetProjectErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.get_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.get_project("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Project2
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Project2](circle_ci/models/project2.py), [GetProjectErrorBody](circle_ci/errors/get_project_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Project2](circle_ci/models/project2.py)</code> -- Successfully retrieved project

**On `Failure`**: `error` is <code>[GetProjectErrorBody](circle_ci/errors/get_project_error.py)</code>

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
<summary><code>def get_project_environment_variable(project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectEnvVar, GetProjectEnvironmentVariableErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.get_project_environment_variable(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectEnvVar
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectEnvironmentVariableErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.get_project_environment_variable(
    "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectEnvVar
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetProjectEnvironmentVariableErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ProjectEnvVar](circle_ci/models/project_env_var.py), [GetProjectEnvironmentVariableErrorBody](circle_ci/errors/get_project_environment_variable_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectEnvVar](circle_ci/models/project_env_var.py)</code> -- Successfully retrieved environment variable

**On `Failure`**: `error` is <code>[GetProjectEnvironmentVariableErrorBody](circle_ci/errors/get_project_environment_variable_error.py)</code>

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
<summary><code>def list_checkout_keys(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutKeyList, ListCheckoutKeysErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.list_checkout_keys("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKeyList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckoutKeysErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.list_checkout_keys("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKeyList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckoutKeysErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[CheckoutKeyList](circle_ci/models/checkout_key_list.py), [ListCheckoutKeysErrorBody](circle_ci/errors/list_checkout_keys_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutKeyList](circle_ci/models/checkout_key_list.py)</code> -- Successfully retrieved checkout keys

**On `Failure`**: `error` is <code>[ListCheckoutKeysErrorBody](circle_ci/errors/list_checkout_keys_error.py)</code>

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
<summary><code>def list_project_environment_variables(project_slug: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectEnvVarList, ListProjectEnvironmentVariablesErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.list_project_environment_variables("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectEnvVarList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectEnvironmentVariablesErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.list_project_environment_variables("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectEnvVarList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectEnvironmentVariablesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ProjectEnvVarList](circle_ci/models/project_env_var_list.py), [ListProjectEnvironmentVariablesErrorBody](circle_ci/errors/list_project_environment_variables_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectEnvVarList](circle_ci/models/project_env_var_list.py)</code> -- Successfully retrieved environment variables

**On `Failure`**: `error` is <code>[ListProjectEnvironmentVariablesErrorBody](circle_ci/errors/list_project_environment_variables_error.py)</code>

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
<summary><code>def list_projects(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ProjectCircleciProjectApi], ListProjectsErrorBody]</code></summary>

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
result = client.project_api.with_raw_response.list_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProjectCircleciProjectApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListProjectsErrorBody
```

**Async**

```python
result = await async_client.project_api.with_raw_response.list_projects()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ProjectCircleciProjectApi]
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[ProjectCircleciProjectApi](circle_ci/models/project_circleci_project_api.py)&#93;, [ListProjectsErrorBody](circle_ci/errors/list_projects_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ProjectCircleciProjectApi](circle_ci/models/project_circleci_project_api.py)&#93;</code> -- Successfully retrieved projects

**On `Failure`**: `error` is <code>[ListProjectsErrorBody](circle_ci/errors/list_projects_error.py)</code>

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
<summary><code>def create_resource_class(body: RunnerResourceClassRequest | RunnerResourceClassRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResourceClassCreation, CreateResourceClassErrorBody]</code></summary>

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
result = client.resource_class_api.with_raw_response.create_resource_class(
    RunnerResourceClassRequest(resource_class="some example string", description="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceClassCreation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateResourceClassErrorBody
```

**Async**

```python
result = await async_client.resource_class_api.with_raw_response.create_resource_class(
    RunnerResourceClassRequest(resource_class="some example string", description="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceClassCreation
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateResourceClassErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ResourceClassCreation](circle_ci/models/resource_class_creation.py), [CreateResourceClassErrorBody](circle_ci/errors/create_resource_class_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResourceClassCreation](circle_ci/models/resource_class_creation.py)</code> -- Resource class created successfully

**On `Failure`**: `error` is <code>[CreateResourceClassErrorBody](circle_ci/errors/create_resource_class_error.py)</code>

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
<summary><code>def delete_resource_class(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteResourceClassErrorBody]</code></summary>

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
result = client.resource_class_api.with_raw_response.delete_resource_class("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResourceClassErrorBody
```

**Async**

```python
result = await async_client.resource_class_api.with_raw_response.delete_resource_class("some example string")
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteResourceClassErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;None, [DeleteResourceClassErrorBody](circle_ci/errors/delete_resource_class_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteResourceClassErrorBody](circle_ci/errors/delete_resource_class_error.py)</code>

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
<summary><code>def get_resource_class(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResourceClass, GetResourceClassErrorBody]</code></summary>

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
result = client.resource_class_api.with_raw_response.get_resource_class("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourceClassErrorBody
```

**Async**

```python
result = await async_client.resource_class_api.with_raw_response.get_resource_class("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResourceClass
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetResourceClassErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ResourceClass](circle_ci/models/resource_class.py), [GetResourceClassErrorBody](circle_ci/errors/get_resource_class_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResourceClass](circle_ci/models/resource_class.py)</code> -- Successfully retrieved resource class

**On `Failure`**: `error` is <code>[GetResourceClassErrorBody](circle_ci/errors/get_resource_class_error.py)</code>

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
<summary><code>def list_resource_classes(namespace: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunnerResourceClassResponse, ListResourceClassesErrorBody]</code></summary>

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
result = client.resource_class_api.with_raw_response.list_resource_classes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerResourceClassResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResourceClassesErrorBody
```

**Async**

```python
result = await async_client.resource_class_api.with_raw_response.list_resource_classes("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerResourceClassResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResourceClassesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[RunnerResourceClassResponse](circle_ci/models/runner_resource_class_response.py), [ListResourceClassesErrorBody](circle_ci/errors/list_resource_classes_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunnerResourceClassResponse](circle_ci/models/runner_resource_class_response.py)</code> -- Successfully retrieved resource classes

**On `Failure`**: `error` is <code>[ListResourceClassesErrorBody](circle_ci/errors/list_resource_classes_error.py)</code>

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
<summary><code>def list_runners(*, namespace: str | None = None, resource_class: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunnerResponse, ListRunnersErrorBody]</code></summary>

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
result = client.runner_api.with_raw_response.list_runners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRunnersErrorBody
```

**Async**

```python
result = await async_client.runner_api.with_raw_response.list_runners()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRunnersErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[RunnerResponse](circle_ci/models/runner_response.py), [ListRunnersErrorBody](circle_ci/errors/list_runners_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunnerResponse](circle_ci/models/runner_response.py)</code> -- Successfully retrieved runners

**On `Failure`**: `error` is <code>[ListRunnersErrorBody](circle_ci/errors/list_runners_error.py)</code>

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
<summary><code>def get_running_task_count(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunnerTasksRunningResponse, GetRunningTaskCountErrorBody]</code></summary>

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
result = client.runner_task.with_raw_response.get_running_task_count("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerTasksRunningResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRunningTaskCountErrorBody
```

**Async**

```python
result = await async_client.runner_task.with_raw_response.get_running_task_count("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerTasksRunningResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRunningTaskCountErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[RunnerTasksRunningResponse](circle_ci/models/runner_tasks_running_response.py), [GetRunningTaskCountErrorBody](circle_ci/errors/get_running_task_count_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunnerTasksRunningResponse](circle_ci/models/runner_tasks_running_response.py)</code> -- Successfully retrieved running task count

**On `Failure`**: `error` is <code>[GetRunningTaskCountErrorBody](circle_ci/errors/get_running_task_count_error.py)</code>

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
<summary><code>def get_unclaimed_task_count(resource_class: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RunnerTasksResponse, GetUnclaimedTaskCountErrorBody]</code></summary>

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
result = client.runner_task.with_raw_response.get_unclaimed_task_count("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerTasksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUnclaimedTaskCountErrorBody
```

**Async**

```python
result = await async_client.runner_task.with_raw_response.get_unclaimed_task_count("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RunnerTasksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetUnclaimedTaskCountErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[RunnerTasksResponse](circle_ci/models/runner_tasks_response.py), [GetUnclaimedTaskCountErrorBody](circle_ci/errors/get_unclaimed_task_count_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RunnerTasksResponse](circle_ci/models/runner_tasks_response.py)</code> -- Successfully retrieved unclaimed task count

**On `Failure`**: `error` is <code>[GetUnclaimedTaskCountErrorBody](circle_ci/errors/get_unclaimed_task_count_error.py)</code>

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
<summary><code>def add_ssh_key(vcs_type: VcsTypeOrStr, username: str, project: str, body: ProjectProjectSshKeyRequest | ProjectProjectSshKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, AddSshKeyErrorBody]</code></summary>

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
result = client.ssh_key.with_raw_response.add_ssh_key(
    VcsType.GITHUB,
    "some example string",
    "some example string",
    ProjectProjectSshKeyRequest(hostname="some example string", private_key="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddSshKeyErrorBody
```

**Async**

```python
result = await async_client.ssh_key.with_raw_response.add_ssh_key(
    VcsType.GITHUB,
    "some example string",
    "some example string",
    ProjectProjectSshKeyRequest(hostname="some example string", private_key="some example string"),
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AddSshKeyErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;None, [AddSshKeyErrorBody](circle_ci/errors/add_ssh_key_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[AddSshKeyErrorBody](circle_ci/errors/add_ssh_key_error.py)</code>

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
<summary><code>def create_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, body: ProjectProjectCheckoutKeyRequest | ProjectProjectCheckoutKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, CreateCheckoutKey2ErrorBody]</code></summary>

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
result = client.ssh_key.with_raw_response.create_checkout_key2(
    VcsType.GITHUB,
    "some example string",
    "some example string",
    ProjectProjectCheckoutKeyRequest(type_=Type1CircleCiRestApiV1SshKeyApi.DEPLOY_KEY),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCheckoutKey2ErrorBody
```

**Async**

```python
result = await async_client.ssh_key.with_raw_response.create_checkout_key2(
    VcsType.GITHUB,
    "some example string",
    "some example string",
    ProjectProjectCheckoutKeyRequest(type_=Type1CircleCiRestApiV1SshKeyApi.DEPLOY_KEY),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateCheckoutKey2ErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py), [CreateCheckoutKey2ErrorBody](circle_ci/errors/create_checkout_key2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)</code> -- Checkout key created successfully

**On `Failure`**: `error` is <code>[CreateCheckoutKey2ErrorBody](circle_ci/errors/create_checkout_key2_error.py)</code>

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
<summary><code>def delete_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectProjectCheckoutKeyFingerprintResponse, DeleteCheckoutKey2ErrorBody]</code></summary>

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
result = client.ssh_key.with_raw_response.delete_checkout_key2(
    VcsType.GITHUB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectProjectCheckoutKeyFingerprintResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCheckoutKey2ErrorBody
```

**Async**

```python
result = await async_client.ssh_key.with_raw_response.delete_checkout_key2(
    VcsType.GITHUB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectProjectCheckoutKeyFingerprintResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteCheckoutKey2ErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ProjectProjectCheckoutKeyFingerprintResponse](circle_ci/models/project_project_checkout_key_fingerprint_response.py), [DeleteCheckoutKey2ErrorBody](circle_ci/errors/delete_checkout_key2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectProjectCheckoutKeyFingerprintResponse](circle_ci/models/project_project_checkout_key_fingerprint_response.py)</code> -- Checkout key deleted successfully

**On `Failure`**: `error` is <code>[DeleteCheckoutKey2ErrorBody](circle_ci/errors/delete_checkout_key2_error.py)</code>

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
<summary><code>def get_checkout_key2(vcs_type: VcsTypeOrStr, username: str, project: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckoutKeyCircleCiRestApiV1SshKeyApi, GetCheckoutKey2ErrorBody]</code></summary>

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
result = client.ssh_key.with_raw_response.get_checkout_key2(
    VcsType.GITHUB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutKey2ErrorBody
```

**Async**

```python
result = await async_client.ssh_key.with_raw_response.get_checkout_key2(
    VcsType.GITHUB, "some example string", "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckoutKeyCircleCiRestApiV1SshKeyApi
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCheckoutKey2ErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py), [GetCheckoutKey2ErrorBody](circle_ci/errors/get_checkout_key2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)</code> -- Successfully retrieved checkout key

**On `Failure`**: `error` is <code>[GetCheckoutKey2ErrorBody](circle_ci/errors/get_checkout_key2_error.py)</code>

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
<summary><code>def list_checkout_keys2(vcs_type: VcsTypeOrStr, username: str, project: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CheckoutKeyCircleCiRestApiV1SshKeyApi], ListCheckoutKeys2ErrorBody]</code></summary>

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
result = client.ssh_key.with_raw_response.list_checkout_keys2(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckoutKeyCircleCiRestApiV1SshKeyApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckoutKeys2ErrorBody
```

**Async**

```python
result = await async_client.ssh_key.with_raw_response.list_checkout_keys2(
    VcsType.GITHUB, "some example string", "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckoutKeyCircleCiRestApiV1SshKeyApi]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckoutKeys2ErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)&#93;, [ListCheckoutKeys2ErrorBody](circle_ci/errors/list_checkout_keys2_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CheckoutKeyCircleCiRestApiV1SshKeyApi](circle_ci/models/checkout_key_circle_ci_rest_api_v1_ssh_key_api.py)&#93;</code> -- Successfully retrieved checkout keys

**On `Failure`**: `error` is <code>[ListCheckoutKeys2ErrorBody](circle_ci/errors/list_checkout_keys2_error.py)</code>

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
<summary><code>def create_schedule(project_slug: str, body: CreateScheduleRequest | CreateScheduleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Schedule, CreateScheduleErrorBody]</code></summary>

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
result = client.schedule_api.with_raw_response.create_schedule(
    "some example string",
    CreateScheduleRequest(
        name="some example string",
        timetable=Timetable(per_hour=1, hours_of_day=[1], days_of_week=[DaysOfWeek.MON]),
        attribution_actor=AttributionActor.CURRENT,
        parameters={},
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Schedule
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScheduleErrorBody
```

**Async**

```python
result = await async_client.schedule_api.with_raw_response.create_schedule(
    "some example string",
    CreateScheduleRequest(
        name="some example string",
        timetable=Timetable(per_hour=1, hours_of_day=[1], days_of_week=[DaysOfWeek.MON]),
        attribution_actor=AttributionActor.CURRENT,
        parameters={},
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Schedule
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateScheduleErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Schedule](circle_ci/models/schedule.py), [CreateScheduleErrorBody](circle_ci/errors/create_schedule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Schedule](circle_ci/models/schedule.py)</code> -- Schedule created successfully

**On `Failure`**: `error` is <code>[CreateScheduleErrorBody](circle_ci/errors/create_schedule_error.py)</code>

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
<summary><code>def delete_schedule(schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteScheduleErrorBody]</code></summary>

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
result = client.schedule_api.with_raw_response.delete_schedule(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScheduleErrorBody
```

**Async**

```python
result = await async_client.schedule_api.with_raw_response.delete_schedule(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteScheduleErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [DeleteScheduleErrorBody](circle_ci/errors/delete_schedule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Schedule deleted successfully

**On `Failure`**: `error` is <code>[DeleteScheduleErrorBody](circle_ci/errors/delete_schedule_error.py)</code>

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
<summary><code>def get_schedule(schedule_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Schedule, GetScheduleErrorBody]</code></summary>

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
result = client.schedule_api.with_raw_response.get_schedule(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Schedule
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScheduleErrorBody
```

**Async**

```python
result = await async_client.schedule_api.with_raw_response.get_schedule(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Schedule
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScheduleErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Schedule](circle_ci/models/schedule.py), [GetScheduleErrorBody](circle_ci/errors/get_schedule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Schedule](circle_ci/models/schedule.py)</code> -- Successfully retrieved schedule

**On `Failure`**: `error` is <code>[GetScheduleErrorBody](circle_ci/errors/get_schedule_error.py)</code>

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
<summary><code>def list_schedules(project_slug: str, *, page_token: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScheduleList, ListSchedulesErrorBody]</code></summary>

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
result = client.schedule_api.with_raw_response.list_schedules("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScheduleList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSchedulesErrorBody
```

**Async**

```python
result = await async_client.schedule_api.with_raw_response.list_schedules("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScheduleList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSchedulesErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ScheduleList](circle_ci/models/schedule_list.py), [ListSchedulesErrorBody](circle_ci/errors/list_schedules_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScheduleList](circle_ci/models/schedule_list.py)</code> -- Successfully retrieved schedules

**On `Failure`**: `error` is <code>[ListSchedulesErrorBody](circle_ci/errors/list_schedules_error.py)</code>

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
<summary><code>def update_schedule(schedule_id: UUID, body: UpdateScheduleRequest | UpdateScheduleRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Schedule, UpdateScheduleErrorBody]</code></summary>

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
result = client.schedule_api.with_raw_response.update_schedule(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateScheduleRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Schedule
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScheduleErrorBody
```

**Async**

```python
result = await async_client.schedule_api.with_raw_response.update_schedule(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateScheduleRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Schedule
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateScheduleErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Schedule](circle_ci/models/schedule.py), [UpdateScheduleErrorBody](circle_ci/errors/update_schedule_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Schedule](circle_ci/models/schedule.py)</code> -- Schedule updated successfully

**On `Failure`**: `error` is <code>[UpdateScheduleErrorBody](circle_ci/errors/update_schedule_error.py)</code>

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
<summary><code>def list_build_tests(vcs_type: VcsTypeOrStr, username: str, project: str, build_num: int, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ProjectProjectBuildNumTestsResponse, ListBuildTestsErrorBody]</code></summary>

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
result = client.test_metadata_api.with_raw_response.list_build_tests(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectProjectBuildNumTestsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildTestsErrorBody
```

**Async**

```python
result = await async_client.test_metadata_api.with_raw_response.list_build_tests(
    VcsType.GITHUB, "some example string", "some example string", 1
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ProjectProjectBuildNumTestsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildTestsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[ProjectProjectBuildNumTestsResponse](circle_ci/models/project_project_build_num_tests_response.py), [ListBuildTestsErrorBody](circle_ci/errors/list_build_tests_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ProjectProjectBuildNumTestsResponse](circle_ci/models/project_project_build_num_tests_response.py)</code> -- Successfully retrieved test metadata

**On `Failure`**: `error` is <code>[ListBuildTestsErrorBody](circle_ci/errors/list_build_tests_error.py)</code>

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
<summary><code>def get_collaborations(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Collaboration], GetCollaborationsErrorBody]</code></summary>

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
result = client.user_api.with_raw_response.get_collaborations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Collaboration]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCollaborationsErrorBody
```

**Async**

```python
result = await async_client.user_api.with_raw_response.get_collaborations()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[Collaboration]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCollaborationsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;list&#91;[Collaboration](circle_ci/models/collaboration.py)&#93;, [GetCollaborationsErrorBody](circle_ci/errors/get_collaborations_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[Collaboration](circle_ci/models/collaboration.py)&#93;</code> -- Successfully retrieved collaborations

**On `Failure`**: `error` is <code>[GetCollaborationsErrorBody](circle_ci/errors/get_collaborations_error.py)</code>

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
<summary><code>def get_current_user(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, GetCurrentUserErrorBody]</code></summary>

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
result = client.user_api.with_raw_response.get_current_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentUserErrorBody
```

**Async**

```python
result = await async_client.user_api.with_raw_response.get_current_user()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type User
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetCurrentUserErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[User](circle_ci/models/user.py), [GetCurrentUserErrorBody](circle_ci/errors/get_current_user_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[User](circle_ci/models/user.py)</code> -- Successfully retrieved user information

**On `Failure`**: `error` is <code>[GetCurrentUserErrorBody](circle_ci/errors/get_current_user_error.py)</code>

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
<summary><code>def create_webhook(body: CreateWebhookRequest | CreateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookInfo, CreateWebhookErrorBody]</code></summary>

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
result = client.webhook.with_raw_response.create_webhook(
    CreateWebhookRequest(
        name="some example string",
        url="https://example.com",
        events=[Event.WORKFLOW_COMPLETED],
        scope=Scope1(id=UUID("00000000-0000-0000-0000-000000000000")),
        signing_secret="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhook.with_raw_response.create_webhook(
    CreateWebhookRequest(
        name="some example string",
        url="https://example.com",
        events=[Event.WORKFLOW_COMPLETED],
        scope=Scope1(id=UUID("00000000-0000-0000-0000-000000000000")),
        signing_secret="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookInfo
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
| <code>body</code> | <code>[CreateWebhookRequest](circle_ci/models/create_webhook_request.py) \| [CreateWebhookRequestDict](circle_ci/models/create_webhook_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[WebhookInfo](circle_ci/models/webhook_info.py), [CreateWebhookErrorBody](circle_ci/errors/create_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookInfo](circle_ci/models/webhook_info.py)</code> -- Webhook created successfully

**On `Failure`**: `error` is <code>[CreateWebhookErrorBody](circle_ci/errors/create_webhook_error.py)</code>

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
<summary><code>def delete_webhook(webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, DeleteWebhookErrorBody]</code></summary>

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
result = client.webhook.with_raw_response.delete_webhook(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWebhookErrorBody
```

**Async**

```python
result = await async_client.webhook.with_raw_response.delete_webhook(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
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
| <code>webhook_id</code> | <code>UUID</code> | The unique identifier of the webhook |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [DeleteWebhookErrorBody](circle_ci/errors/delete_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Webhook deleted successfully

**On `Failure`**: `error` is <code>[DeleteWebhookErrorBody](circle_ci/errors/delete_webhook_error.py)</code>

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
<summary><code>def get_webhook(webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookInfo, GetWebhookErrorBody]</code></summary>

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
result = client.webhook.with_raw_response.get_webhook(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
```

**Async**

```python
result = await async_client.webhook.with_raw_response.get_webhook(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWebhookErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[WebhookInfo](circle_ci/models/webhook_info.py), [GetWebhookErrorBody](circle_ci/errors/get_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookInfo](circle_ci/models/webhook_info.py)</code> -- Successfully retrieved webhook

**On `Failure`**: `error` is <code>[GetWebhookErrorBody](circle_ci/errors/get_webhook_error.py)</code>

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
<summary><code>def list_webhooks(scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookList, ListWebhooksErrorBody]</code></summary>

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
result = client.webhook.with_raw_response.list_webhooks(UUID("00000000-0000-0000-0000-000000000000"), ScopeType.PROJECT)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
```

**Async**

```python
result = await async_client.webhook.with_raw_response.list_webhooks(
    UUID("00000000-0000-0000-0000-000000000000"), ScopeType.PROJECT
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWebhooksErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[WebhookList](circle_ci/models/webhook_list.py), [ListWebhooksErrorBody](circle_ci/errors/list_webhooks_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookList](circle_ci/models/webhook_list.py)</code> -- Successfully retrieved webhooks

**On `Failure`**: `error` is <code>[ListWebhooksErrorBody](circle_ci/errors/list_webhooks_error.py)</code>

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
<summary><code>def update_webhook(webhook_id: UUID, body: UpdateWebhookRequest | UpdateWebhookRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WebhookInfo, UpdateWebhookErrorBody]</code></summary>

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
result = client.webhook.with_raw_response.update_webhook(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateWebhookRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookInfo
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWebhookErrorBody
```

**Async**

```python
result = await async_client.webhook.with_raw_response.update_webhook(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateWebhookRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WebhookInfo
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
| <code>webhook_id</code> | <code>UUID</code> | The unique identifier of the webhook |
| <code>body</code> | <code>[UpdateWebhookRequest](circle_ci/models/update_webhook_request.py) \| [UpdateWebhookRequestDict](circle_ci/models/update_webhook_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](circle_ci/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[WebhookInfo](circle_ci/models/webhook_info.py), [UpdateWebhookErrorBody](circle_ci/errors/update_webhook_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WebhookInfo](circle_ci/models/webhook_info.py)</code> -- Webhook updated successfully

**On `Failure`**: `error` is <code>[UpdateWebhookErrorBody](circle_ci/errors/update_webhook_error.py)</code>

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
<summary><code>def approve_workflow_job(id_: UUID, approval_request_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, ApproveWorkflowJobErrorBody]</code></summary>

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
result = client.workflow_api.with_raw_response.approve_workflow_job(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApproveWorkflowJobErrorBody
```

**Async**

```python
result = await async_client.workflow_api.with_raw_response.approve_workflow_job(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ApproveWorkflowJobErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [ApproveWorkflowJobErrorBody](circle_ci/errors/approve_workflow_job_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Approval accepted

**On `Failure`**: `error` is <code>[ApproveWorkflowJobErrorBody](circle_ci/errors/approve_workflow_job_error.py)</code>

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
<summary><code>def cancel_workflow(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MessageResponse, CancelWorkflowErrorBody]</code></summary>

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
result = client.workflow_api.with_raw_response.cancel_workflow(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelWorkflowErrorBody
```

**Async**

```python
result = await async_client.workflow_api.with_raw_response.cancel_workflow(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MessageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelWorkflowErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[MessageResponse](circle_ci/models/message_response.py), [CancelWorkflowErrorBody](circle_ci/errors/cancel_workflow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MessageResponse](circle_ci/models/message_response.py)</code> -- Workflow cancellation accepted

**On `Failure`**: `error` is <code>[CancelWorkflowErrorBody](circle_ci/errors/cancel_workflow_error.py)</code>

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
<summary><code>def get_workflow(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Workflow, GetWorkflowErrorBody]</code></summary>

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
result = client.workflow_api.with_raw_response.get_workflow(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Workflow
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowErrorBody
```

**Async**

```python
result = await async_client.workflow_api.with_raw_response.get_workflow(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Workflow
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWorkflowErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[Workflow](circle_ci/models/workflow.py), [GetWorkflowErrorBody](circle_ci/errors/get_workflow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[Workflow](circle_ci/models/workflow.py)</code> -- Successfully retrieved workflow

**On `Failure`**: `error` is <code>[GetWorkflowErrorBody](circle_ci/errors/get_workflow_error.py)</code>

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
<summary><code>def list_workflow_jobs(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[WorkflowJobList, ListWorkflowJobsErrorBody]</code></summary>

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
result = client.workflow_api.with_raw_response.list_workflow_jobs(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowJobList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWorkflowJobsErrorBody
```

**Async**

```python
result = await async_client.workflow_api.with_raw_response.list_workflow_jobs(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type WorkflowJobList
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWorkflowJobsErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[WorkflowJobList](circle_ci/models/workflow_job_list.py), [ListWorkflowJobsErrorBody](circle_ci/errors/list_workflow_jobs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[WorkflowJobList](circle_ci/models/workflow_job_list.py)</code> -- Successfully retrieved workflow jobs

**On `Failure`**: `error` is <code>[ListWorkflowJobsErrorBody](circle_ci/errors/list_workflow_jobs_error.py)</code>

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
<summary><code>def rerun_workflow(id_: UUID, *, body: WorkflowRerunRequest | WorkflowRerunRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RerunWorkflowResponse, RerunWorkflowErrorBody]</code></summary>

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
result = client.workflow_api.with_raw_response.rerun_workflow(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RerunWorkflowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RerunWorkflowErrorBody
```

**Async**

```python
result = await async_client.workflow_api.with_raw_response.rerun_workflow(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RerunWorkflowResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RerunWorkflowErrorBody
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

**Returns**: <code>[ApiResult](circle_ci/core/results.py)&#91;[RerunWorkflowResponse](circle_ci/models/rerun_workflow_response.py), [RerunWorkflowErrorBody](circle_ci/errors/rerun_workflow_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RerunWorkflowResponse](circle_ci/models/rerun_workflow_response.py)</code> -- Workflow rerun accepted

**On `Failure`**: `error` is <code>[RerunWorkflowErrorBody](circle_ci/errors/rerun_workflow_error.py)</code>

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

