# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [HudClient](hud/client.py)

## Builds

> Source: [Builds](hud/apis/builds.py)

<details>
<summary><code>def build_status_v2_builds_build_id_status_get(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildResponse, BuildStatusV2BuildsBuildIdStatusGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a build's current status and details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.build_status_v2_builds_build_id_status_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BuildStatusV2BuildsBuildIdStatusGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.build_status_v2_builds_build_id_status_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BuildStatusV2BuildsBuildIdStatusGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildResponse](hud/models/build_response.py), [BuildStatusV2BuildsBuildIdStatusGetErrorBody](hud/errors/build_status_v2_builds_build_id_status_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BuildStatusV2BuildsBuildIdStatusGetErrorBody](hud/errors/build_status_v2_builds_build_id_status_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_build_v2_builds_build_id_cancel_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildResponse, CancelBuildV2BuildsBuildIdCancelPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an in-progress build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.cancel_build_v2_builds_build_id_cancel_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelBuildV2BuildsBuildIdCancelPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.cancel_build_v2_builds_build_id_cancel_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelBuildV2BuildsBuildIdCancelPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildResponse](hud/models/build_response.py), [CancelBuildV2BuildsBuildIdCancelPostErrorBody](hud/errors/cancel_build_v2_builds_build_id_cancel_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CancelBuildV2BuildsBuildIdCancelPostErrorBody](hud/errors/cancel_build_v2_builds_build_id_cancel_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_build_source_v2_builds_build_id_source_download_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSourceDownloadResponse, DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a short-lived presigned download URL for a file in a build's source tree.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.download_build_source_v2_builds_build_id_source_download_get(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourceDownloadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.download_build_source_v2_builds_build_id_source_download_get(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourceDownloadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>path</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildSourceDownloadResponse](hud/models/build_source_download_response.py), [DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody](hud/errors/download_build_source_v2_builds_build_id_source_download_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSourceDownloadResponse](hud/models/build_source_download_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody](hud/errors/download_build_source_v2_builds_build_id_source_download_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_build_workspace_v2_builds_build_id_workspace_download_get(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stream a build's captured workspace as a zip archive.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.download_build_workspace_v2_builds_build_id_workspace_download_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.download_build_workspace_v2_builds_build_id_workspace_download_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;Any, [DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody](hud/errors/download_build_workspace_v2_builds_build_id_workspace_download_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful Response

**On `Failure`**: `error` is <code>[DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody](hud/errors/download_build_workspace_v2_builds_build_id_workspace_download_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_build_source_v2_builds_build_id_source_get(build_id: UUID, *, path: str | None = "", cursor: str | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSourceListResponse, ListBuildSourceV2BuildsBuildIdSourceGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and directories at a path in a build's expanded source tree.

Readers outside the owning team see only the latest build of a public environment
whose owner published its source.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.list_build_source_v2_builds_build_id_source_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildSourceV2BuildsBuildIdSourceGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_build_source_v2_builds_build_id_source_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildSourceV2BuildsBuildIdSourceGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>path</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildSourceListResponse](hud/models/build_source_list_response.py), [ListBuildSourceV2BuildsBuildIdSourceGetErrorBody](hud/errors/list_build_source_v2_builds_build_id_source_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSourceListResponse](hud/models/build_source_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListBuildSourceV2BuildsBuildIdSourceGetErrorBody](hud/errors/list_build_source_v2_builds_build_id_source_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_build_workspace_v2_builds_build_id_workspace_get(build_id: UUID, *, path: str | None = "", cursor: str | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildWorkspaceListResponse, ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files and directories at a path in a build's captured workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.list_build_workspace_v2_builds_build_id_workspace_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildWorkspaceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_build_workspace_v2_builds_build_id_workspace_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildWorkspaceListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>path</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildWorkspaceListResponse](hud/models/build_workspace_list_response.py), [ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody](hud/errors/list_build_workspace_v2_builds_build_id_workspace_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildWorkspaceListResponse](hud/models/build_workspace_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody](hud/errors/list_build_workspace_v2_builds_build_id_workspace_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_builds_v2_builds_get(registry_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildListResponse, ListBuildsV2BuildsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List builds for an environment registry, newest first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.list_builds_v2_builds_get(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsV2BuildsGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.list_builds_v2_builds_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListBuildsV2BuildsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registry_id</code> | <code>UUID</code> | Filter builds to this registry |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildListResponse](hud/models/build_list_response.py), [ListBuildsV2BuildsGetErrorBody](hud/errors/list_builds_v2_builds_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildListResponse](hud/models/build_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListBuildsV2BuildsGetErrorBody](hud/errors/list_builds_v2_builds_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def lookup_builds_v2_builds_lookup_post(body: BuildLookupRequest | BuildLookupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildLookupResponse, LookupBuildsV2BuildsLookupPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Find the team's builds whose source has one of the given content digests.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.lookup_builds_v2_builds_lookup_post(
    BuildLookupRequest(content_digests=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildLookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LookupBuildsV2BuildsLookupPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.lookup_builds_v2_builds_lookup_post(
    BuildLookupRequest(content_digests=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildLookupResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type LookupBuildsV2BuildsLookupPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildLookupRequest](hud/models/build_lookup_request.py) \| [BuildLookupRequestDict](hud/models/build_lookup_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildLookupResponse](hud/models/build_lookup_response.py), [LookupBuildsV2BuildsLookupPostErrorBody](hud/errors/lookup_builds_v2_builds_lookup_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildLookupResponse](hud/models/build_lookup_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[LookupBuildsV2BuildsLookupPostErrorBody](hud/errors/lookup_builds_v2_builds_lookup_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_build_source_v2_builds_build_id_source_preview_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSourcePreviewResponse, PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text content of a file in a build's source tree (1 MiB cap, text only).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.preview_build_source_v2_builds_build_id_source_preview_get(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourcePreviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.preview_build_source_v2_builds_build_id_source_preview_get(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourcePreviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>path</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildSourcePreviewResponse](hud/models/build_source_preview_response.py), [PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody](hud/errors/preview_build_source_v2_builds_build_id_source_preview_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSourcePreviewResponse](hud/models/build_source_preview_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody](hud/errors/preview_build_source_v2_builds_build_id_source_preview_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def preview_build_workspace_v2_builds_build_id_workspace_preview_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildSourcePreviewResponse, PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the text content of a captured workspace file (1 MiB cap, text only).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.preview_build_workspace_v2_builds_build_id_workspace_preview_get(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourcePreviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.preview_build_workspace_v2_builds_build_id_workspace_preview_get(
    UUID("00000000-0000-0000-0000-000000000000"), "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildSourcePreviewResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>path</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildSourcePreviewResponse](hud/models/build_source_preview_response.py), [PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody](hud/errors/preview_build_workspace_v2_builds_build_id_workspace_preview_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildSourcePreviewResponse](hud/models/build_source_preview_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody](hud/errors/preview_build_workspace_v2_builds_build_id_workspace_preview_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def register_build_source_v2_builds_register_post(body: BuildRegisterRequest | BuildRegisterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildRegisterResponse, RegisterBuildSourceV2BuildsRegisterPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record an uploaded build context as an unbuilt build of an environment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.register_build_source_v2_builds_register_post(
    BuildRegisterRequest(build_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildRegisterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterBuildSourceV2BuildsRegisterPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.register_build_source_v2_builds_register_post(
    BuildRegisterRequest(build_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildRegisterResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RegisterBuildSourceV2BuildsRegisterPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildRegisterRequest](hud/models/build_register_request.py) \| [BuildRegisterRequestDict](hud/models/build_register_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildRegisterResponse](hud/models/build_register_response.py), [RegisterBuildSourceV2BuildsRegisterPostErrorBody](hud/errors/register_build_source_v2_builds_register_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildRegisterResponse](hud/models/build_register_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RegisterBuildSourceV2BuildsRegisterPostErrorBody](hud/errors/register_build_source_v2_builds_register_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reindex_build_source_v2_builds_build_id_source_reindex_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request a new source index after an indexing failure. Requires build edit access.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.reindex_build_source_v2_builds_build_id_source_reindex_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.reindex_build_source_v2_builds_build_id_source_reindex_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody](hud/errors/reindex_build_source_v2_builds_build_id_source_reindex_post_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody](hud/errors/reindex_build_source_v2_builds_build_id_source_reindex_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_latest_build_v2_builds_build_id_set_latest_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildResponse, SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pin a successful build as its registry's latest build.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.set_latest_build_v2_builds_build_id_set_latest_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.set_latest_build_v2_builds_build_id_set_latest_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>build_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildResponse](hud/models/build_response.py), [SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody](hud/errors/set_latest_build_v2_builds_build_id_set_latest_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody](hud/errors/set_latest_build_v2_builds_build_id_set_latest_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_build_v2_builds_trigger_direct_post(body: BuildTriggerRequest | BuildTriggerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerDirectPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an environment build from a previously uploaded build context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.trigger_build_v2_builds_trigger_direct_post(BuildTriggerRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBuildV2BuildsTriggerDirectPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.trigger_build_v2_builds_trigger_direct_post(BuildTriggerRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBuildV2BuildsTriggerDirectPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildTriggerRequest](hud/models/build_trigger_request.py) \| [BuildTriggerRequestDict](hud/models/build_trigger_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildResponse](hud/models/build_response.py), [TriggerBuildV2BuildsTriggerDirectPostErrorBody](hud/errors/trigger_build_v2_builds_trigger_direct_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TriggerBuildV2BuildsTriggerDirectPostErrorBody](hud/errors/trigger_build_v2_builds_trigger_direct_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trigger_build_v2_builds_trigger_post(body: BuildTriggerRequest | BuildTriggerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildResponse, TriggerBuildV2BuildsTriggerPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trigger an environment build from a previously uploaded build context.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.trigger_build_v2_builds_trigger_post(BuildTriggerRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBuildV2BuildsTriggerPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.trigger_build_v2_builds_trigger_post(BuildTriggerRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TriggerBuildV2BuildsTriggerPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BuildTriggerRequest](hud/models/build_trigger_request.py) \| [BuildTriggerRequestDict](hud/models/build_trigger_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildResponse](hud/models/build_response.py), [TriggerBuildV2BuildsTriggerPostErrorBody](hud/errors/trigger_build_v2_builds_trigger_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TriggerBuildV2BuildsTriggerPostErrorBody](hud/errors/trigger_build_v2_builds_trigger_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_url_v2_builds_upload_url_post(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BuildUploadUrlResponse, UploadUrlV2BuildsUploadUrlPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a presigned S3 URL for uploading a build context, with a new build id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.builds.with_raw_response.upload_url_v2_builds_upload_url_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildUploadUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadUrlV2BuildsUploadUrlPostErrorBody
```

**Async**

```python
result = await async_client.builds.with_raw_response.upload_url_v2_builds_upload_url_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BuildUploadUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadUrlV2BuildsUploadUrlPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BuildUploadUrlResponse](hud/models/build_upload_url_response.py), [UploadUrlV2BuildsUploadUrlPostErrorBody](hud/errors/upload_url_v2_builds_upload_url_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BuildUploadUrlResponse](hud/models/build_upload_url_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UploadUrlV2BuildsUploadUrlPostErrorBody](hud/errors/upload_url_v2_builds_upload_url_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Checks

> Source: [Checks](hud/apis/checks.py)

<details>
<summary><code>def create_team_qc_pipeline_v2_checks_pipelines_post(body: QcPipelineCreateRequest | QcPipelineCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QcPipelineRegistrationResponse, CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Register a team environment scenario as a private DataVendor QC pipeline.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checks.with_raw_response.create_team_qc_pipeline_v2_checks_pipelines_post(
    QcPipelineCreateRequest(
        asset_type="some example string",
        key="some example string",
        label="some example string",
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        scenario_name="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QcPipelineRegistrationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.create_team_qc_pipeline_v2_checks_pipelines_post(
    QcPipelineCreateRequest(
        asset_type="some example string",
        key="some example string",
        label="some example string",
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        scenario_name="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QcPipelineRegistrationResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QcPipelineCreateRequest](hud/models/qc_pipeline_create_request.py) \| [QcPipelineCreateRequestDict](hud/models/qc_pipeline_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[QcPipelineRegistrationResponse](hud/models/qc_pipeline_registration_response.py), [CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody](hud/errors/create_team_qc_pipeline_v2_checks_pipelines_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QcPipelineRegistrationResponse](hud/models/qc_pipeline_registration_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody](hud/errors/create_team_qc_pipeline_v2_checks_pipelines_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_platform_check_runs_v2_checks_runs_get(subject_type: CheckSubjectTypeOrStr, subject_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CheckRunResponse], ListPlatformCheckRunsV2ChecksRunsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recent check attempts for one authorized resource.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checks.with_raw_response.list_platform_check_runs_v2_checks_runs_get(
    CheckSubjectType.ENVIRONMENT, UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckRunResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformCheckRunsV2ChecksRunsGetErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.list_platform_check_runs_v2_checks_runs_get(
    CheckSubjectType.ENVIRONMENT, UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckRunResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformCheckRunsV2ChecksRunsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject_type</code> | <code>[CheckSubjectTypeOrStr](hud/models/enums/check_subject_type.py)</code> | Value sent with the request. |
| <code>subject_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[CheckRunResponse](hud/models/check_run_response.py)&#93;, [ListPlatformCheckRunsV2ChecksRunsGetErrorBody](hud/errors/list_platform_check_runs_v2_checks_runs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CheckRunResponse](hud/models/check_run_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListPlatformCheckRunsV2ChecksRunsGetErrorBody](hud/errors/list_platform_check_runs_v2_checks_runs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_platform_checks_v2_checks_get(*, subject_type: CheckSubjectTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CheckDefinitionResponse], ListPlatformChecksV2ChecksGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List available checks and their supported resource types.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checks.with_raw_response.list_platform_checks_v2_checks_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckDefinitionResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformChecksV2ChecksGetErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.list_platform_checks_v2_checks_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckDefinitionResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListPlatformChecksV2ChecksGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject_type</code> | <code>[CheckSubjectTypeOrStr](hud/models/enums/check_subject_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[CheckDefinitionResponse](hud/models/check_definition_response.py)&#93;, [ListPlatformChecksV2ChecksGetErrorBody](hud/errors/list_platform_checks_v2_checks_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CheckDefinitionResponse](hud/models/check_definition_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListPlatformChecksV2ChecksGetErrorBody](hud/errors/list_platform_checks_v2_checks_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_team_qc_pipelines_v2_checks_pipelines_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[QcPipelineRegistrationResponse], ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List QC pipelines registered by the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checks.with_raw_response.list_team_qc_pipelines_v2_checks_pipelines_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QcPipelineRegistrationResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.list_team_qc_pipelines_v2_checks_pipelines_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QcPipelineRegistrationResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[QcPipelineRegistrationResponse](hud/models/qc_pipeline_registration_response.py)&#93;, [ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody](hud/errors/list_team_qc_pipelines_v2_checks_pipelines_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[QcPipelineRegistrationResponse](hud/models/qc_pipeline_registration_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody](hud/errors/list_team_qc_pipelines_v2_checks_pipelines_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_platform_check_v2_checks_check_key_runs_post(check_key: str, body: CheckRunRequest | CheckRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CheckRunResponse, RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run one check against an authorized resource snapshot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.checks.with_raw_response.run_platform_check_v2_checks_check_key_runs_post(
    "some example string",
    CheckRunRequest(subject_type=CheckSubjectType.ENVIRONMENT, subject_id=UUID("00000000-0000-0000-0000-000000000000")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody
```

**Async**

```python
result = await async_client.checks.with_raw_response.run_platform_check_v2_checks_check_key_runs_post(
    "some example string",
    CheckRunRequest(subject_type=CheckSubjectType.ENVIRONMENT, subject_id=UUID("00000000-0000-0000-0000-000000000000")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CheckRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>check_key</code> | <code>str</code> | Value sent with the request. |
| <code>body</code> | <code>[CheckRunRequest](hud/models/check_run_request.py) \| [CheckRunRequestDict](hud/models/check_run_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[CheckRunResponse](hud/models/check_run_response.py), [RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody](hud/errors/run_platform_check_v2_checks_check_key_runs_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CheckRunResponse](hud/models/check_run_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody](hud/errors/run_platform_check_v2_checks_check_key_runs_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Completions

> Source: [Completions](hud/apis/completions.py)

<details>
<summary><code>def post_completion_v2_completions_post(body: CompletionRequest | CompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CompletionResponse, PostCompletionV2CompletionsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One-shot chat completion proxied to the inference gateway.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.completions.with_raw_response.post_completion_v2_completions_post(
    CompletionRequest(
        model="some example string", messages=[ChatMessage(role="some example string", content="some example string")]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompletionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostCompletionV2CompletionsPostErrorBody
```

**Async**

```python
result = await async_client.completions.with_raw_response.post_completion_v2_completions_post(
    CompletionRequest(
        model="some example string", messages=[ChatMessage(role="some example string", content="some example string")]
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CompletionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostCompletionV2CompletionsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CompletionRequest](hud/models/completion_request.py) \| [CompletionRequestDict](hud/models/completion_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[CompletionResponse](hud/models/completion_response.py), [PostCompletionV2CompletionsPostErrorBody](hud/errors/post_completion_v2_completions_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CompletionResponse](hud/models/completion_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PostCompletionV2CompletionsPostErrorBody](hud/errors/post_completion_v2_completions_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Data

> Source: [Data](hud/apis/data.py)

<details>
<summary><code>def complete_data_file_v2_data_file_id_complete_post(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileResponse, CompleteDataFileV2DataFileIdCompletePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publish an uploaded data file, recording its stored size and type.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.complete_data_file_v2_data_file_id_complete_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CompleteDataFileV2DataFileIdCompletePostErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.complete_data_file_v2_data_file_id_complete_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CompleteDataFileV2DataFileIdCompletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileResponse](hud/models/data_file_response.py), [CompleteDataFileV2DataFileIdCompletePostErrorBody](hud/errors/complete_data_file_v2_data_file_id_complete_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileResponse](hud/models/data_file_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CompleteDataFileV2DataFileIdCompletePostErrorBody](hud/errors/complete_data_file_v2_data_file_id_complete_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_data_file_v2_data_post(body: DataFileCreateRequest | DataFileCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileUploadResponse, CreateDataFileV2DataPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserve a data file and return a presigned PUT to upload its bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.create_data_file_v2_data_post(
    DataFileCreateRequest(filename="some example string", size_bytes=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDataFileV2DataPostErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.create_data_file_v2_data_post(
    DataFileCreateRequest(filename="some example string", size_bytes=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateDataFileV2DataPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DataFileCreateRequest](hud/models/data_file_create_request.py) \| [DataFileCreateRequestDict](hud/models/data_file_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileUploadResponse](hud/models/data_file_upload_response.py), [CreateDataFileV2DataPostErrorBody](hud/errors/create_data_file_v2_data_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileUploadResponse](hud/models/data_file_upload_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateDataFileV2DataPostErrorBody](hud/errors/create_data_file_v2_data_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_data_file_v2_data_file_id_delete(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteDataFileV2DataFileIdDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a data file and its stored object.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.delete_data_file_v2_data_file_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDataFileV2DataFileIdDeleteErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.delete_data_file_v2_data_file_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDataFileV2DataFileIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteDataFileV2DataFileIdDeleteErrorBody](hud/errors/delete_data_file_v2_data_file_id_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteDataFileV2DataFileIdDeleteErrorBody](hud/errors/delete_data_file_v2_data_file_id_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_data_files_v2_data_delete_post(body: DataFileIdsRequest | DataFileIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteDataFilesV2DataDeletePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete data files and their stored objects. Fails if any id is unreadable or unwritable.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.delete_data_files_v2_data_delete_post(
    DataFileIdsRequest(file_ids=[UUID("00000000-0000-0000-0000-000000000000")])
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDataFilesV2DataDeletePostErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.delete_data_files_v2_data_delete_post(
    DataFileIdsRequest(file_ids=[UUID("00000000-0000-0000-0000-000000000000")])
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteDataFilesV2DataDeletePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DataFileIdsRequest](hud/models/data_file_ids_request.py) \| [DataFileIdsRequestDict](hud/models/data_file_ids_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteDataFilesV2DataDeletePostErrorBody](hud/errors/delete_data_files_v2_data_delete_post_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteDataFilesV2DataDeletePostErrorBody](hud/errors/delete_data_files_v2_data_delete_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def download_data_file_v2_data_file_id_download_get(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileDownloadResponse, DownloadDataFileV2DataFileIdDownloadGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Presign an inline and an attachment link for a ready data file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.download_data_file_v2_data_file_id_download_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileDownloadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadDataFileV2DataFileIdDownloadGetErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.download_data_file_v2_data_file_id_download_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileDownloadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DownloadDataFileV2DataFileIdDownloadGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileDownloadResponse](hud/models/data_file_download_response.py), [DownloadDataFileV2DataFileIdDownloadGetErrorBody](hud/errors/download_data_file_v2_data_file_id_download_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileDownloadResponse](hud/models/data_file_download_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[DownloadDataFileV2DataFileIdDownloadGetErrorBody](hud/errors/download_data_file_v2_data_file_id_download_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_data_file_storage_usage_v2_data_usage_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileStorageUsageResponse, GetDataFileStorageUsageV2DataUsageGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return current data-file storage use and the team's effective limits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.get_data_file_storage_usage_v2_data_usage_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileStorageUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataFileStorageUsageV2DataUsageGetErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.get_data_file_storage_usage_v2_data_usage_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileStorageUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataFileStorageUsageV2DataUsageGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileStorageUsageResponse](hud/models/data_file_storage_usage_response.py), [GetDataFileStorageUsageV2DataUsageGetErrorBody](hud/errors/get_data_file_storage_usage_v2_data_usage_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileStorageUsageResponse](hud/models/data_file_storage_usage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetDataFileStorageUsageV2DataUsageGetErrorBody](hud/errors/get_data_file_storage_usage_v2_data_usage_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_data_file_v2_data_file_id_get(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileResponse, GetDataFileV2DataFileIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one data file's metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.get_data_file_v2_data_file_id_get(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataFileV2DataFileIdGetErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.get_data_file_v2_data_file_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetDataFileV2DataFileIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileResponse](hud/models/data_file_response.py), [GetDataFileV2DataFileIdGetErrorBody](hud/errors/get_data_file_v2_data_file_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileResponse](hud/models/data_file_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetDataFileV2DataFileIdGetErrorBody](hud/errors/get_data_file_v2_data_file_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_data_file_groups_v2_data_groups_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileGroupListResponse, ListDataFileGroupsV2DataGroupsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Summarise the readable folders so a browser can load their files on demand.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.list_data_file_groups_v2_data_groups_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileGroupListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDataFileGroupsV2DataGroupsGetErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.list_data_file_groups_v2_data_groups_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileGroupListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDataFileGroupsV2DataGroupsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileGroupListResponse](hud/models/data_file_group_list_response.py), [ListDataFileGroupsV2DataGroupsGetErrorBody](hud/errors/list_data_file_groups_v2_data_groups_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileGroupListResponse](hud/models/data_file_group_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListDataFileGroupsV2DataGroupsGetErrorBody](hud/errors/list_data_file_groups_v2_data_groups_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_data_files_v2_data_get(*, scope: Scope3OrStr | None = Scope3.ALL, membership_id: int | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileListResponse, ListDataFilesV2DataGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the data files the caller can read, optionally narrowed to one folder.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.list_data_files_v2_data_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDataFilesV2DataGetErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.list_data_files_v2_data_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListDataFilesV2DataGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>scope</code> | <code>[Scope3OrStr](hud/models/enums/scope3.py) \| None</code> | Value sent with the request.<br>**Default**: <code>Scope3.ALL</code> |
| <code>membership_id</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileListResponse](hud/models/data_file_list_response.py), [ListDataFilesV2DataGetErrorBody](hud/errors/list_data_files_v2_data_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileListResponse](hud/models/data_file_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListDataFilesV2DataGetErrorBody](hud/errors/list_data_files_v2_data_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_data_file_v2_data_file_id_patch(file_id: UUID, body: DataFileUpdateRequest | DataFileUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileResponse, UpdateDataFileV2DataFileIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a data file.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.data.with_raw_response.update_data_file_v2_data_file_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), DataFileUpdateRequest(filename="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDataFileV2DataFileIdPatchErrorBody
```

**Async**

```python
result = await async_client.data.with_raw_response.update_data_file_v2_data_file_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), DataFileUpdateRequest(filename="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateDataFileV2DataFileIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[DataFileUpdateRequest](hud/models/data_file_update_request.py) \| [DataFileUpdateRequestDict](hud/models/data_file_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileResponse](hud/models/data_file_response.py), [UpdateDataFileV2DataFileIdPatchErrorBody](hud/errors/update_data_file_v2_data_file_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileResponse](hud/models/data_file_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateDataFileV2DataFileIdPatchErrorBody](hud/errors/update_data_file_v2_data_file_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Imports

> Source: [Imports](hud/apis/imports.py)

<details>
<summary><code>def cancel_import_v2_imports_import_id_cancel_post(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportResponse, CancelImportV2ImportsImportIdCancelPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Request cancellation of a live import; one that has ended is returned unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.cancel_import_v2_imports_import_id_cancel_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelImportV2ImportsImportIdCancelPostErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.cancel_import_v2_imports_import_id_cancel_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelImportV2ImportsImportIdCancelPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ImportResponse](hud/models/import_response.py), [CancelImportV2ImportsImportIdCancelPostErrorBody](hud/errors/cancel_import_v2_imports_import_id_cancel_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportResponse](hud/models/import_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CancelImportV2ImportsImportIdCancelPostErrorBody](hud/errors/cancel_import_v2_imports_import_id_cancel_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_import_upload_v2_imports_uploads_post(body: ImportUploadRequest | ImportUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DataFileUploadResponse, CreateImportUploadV2ImportsUploadsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Reserve a data file for a bundle and return a presigned PUT to upload its bytes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.create_import_upload_v2_imports_uploads_post(
    ImportUploadRequest(filename="some example string", size_bytes=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateImportUploadV2ImportsUploadsPostErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.create_import_upload_v2_imports_uploads_post(
    ImportUploadRequest(filename="some example string", size_bytes=1)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DataFileUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateImportUploadV2ImportsUploadsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImportUploadRequest](hud/models/import_upload_request.py) \| [ImportUploadRequestDict](hud/models/import_upload_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[DataFileUploadResponse](hud/models/data_file_upload_response.py), [CreateImportUploadV2ImportsUploadsPostErrorBody](hud/errors/create_import_upload_v2_imports_uploads_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DataFileUploadResponse](hud/models/data_file_upload_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateImportUploadV2ImportsUploadsPostErrorBody](hud/errors/create_import_upload_v2_imports_uploads_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def estimate_import_v2_imports_estimate_get(format_: FormatOrStr, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportEstimateResponse, EstimateImportV2ImportsEstimateGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Estimate an import of a bundle; fails when the bundle cannot be imported.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.estimate_import_v2_imports_estimate_get(
    Format.HARBOR, UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportEstimateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EstimateImportV2ImportsEstimateGetErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.estimate_import_v2_imports_estimate_get(
    Format.HARBOR, UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportEstimateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EstimateImportV2ImportsEstimateGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format_</code> | <code>[FormatOrStr](hud/models/enums/format.py)</code> | Value sent with the request. |
| <code>file_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ImportEstimateResponse](hud/models/import_estimate_response.py), [EstimateImportV2ImportsEstimateGetErrorBody](hud/errors/estimate_import_v2_imports_estimate_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportEstimateResponse](hud/models/import_estimate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EstimateImportV2ImportsEstimateGetErrorBody](hud/errors/estimate_import_v2_imports_estimate_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_import_report_v2_imports_import_id_report_get(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, GetImportReportV2ImportsImportIdReportGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the report a completed or stopped import published, in its format's schema.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.get_import_report_v2_imports_import_id_report_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetImportReportV2ImportsImportIdReportGetErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.get_import_report_v2_imports_import_id_report_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type Any
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetImportReportV2ImportsImportIdReportGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;Any, [GetImportReportV2ImportsImportIdReportGetErrorBody](hud/errors/get_import_report_v2_imports_import_id_report_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>Any</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetImportReportV2ImportsImportIdReportGetErrorBody](hud/errors/get_import_report_v2_imports_import_id_report_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 413, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_import_v2_imports_import_id_get(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportResponse, GetImportV2ImportsImportIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one import.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.get_import_v2_imports_import_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetImportV2ImportsImportIdGetErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.get_import_v2_imports_import_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetImportV2ImportsImportIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>import_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ImportResponse](hud/models/import_response.py), [GetImportV2ImportsImportIdGetErrorBody](hud/errors/get_import_v2_imports_import_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportResponse](hud/models/import_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetImportV2ImportsImportIdGetErrorBody](hud/errors/get_import_v2_imports_import_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_import_formats_v2_imports_formats_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportFormatListResponse, ListImportFormatsV2ImportsFormatsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the bundle formats available to import.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.list_import_formats_v2_imports_formats_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportFormatListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListImportFormatsV2ImportsFormatsGetErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.list_import_formats_v2_imports_formats_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportFormatListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListImportFormatsV2ImportsFormatsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ImportFormatListResponse](hud/models/import_format_list_response.py), [ListImportFormatsV2ImportsFormatsGetErrorBody](hud/errors/list_import_formats_v2_imports_formats_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportFormatListResponse](hud/models/import_format_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListImportFormatsV2ImportsFormatsGetErrorBody](hud/errors/list_import_formats_v2_imports_formats_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_imports_v2_imports_get(*, format_: FormatOrStr | None = None, taskset_id: UUID | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportListResponse, ListImportsV2ImportsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the imports the caller can read, newest first.

Team admins see every import on the team; other members see their own.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.list_imports_v2_imports_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListImportsV2ImportsGetErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.list_imports_v2_imports_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListImportsV2ImportsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>format_</code> | <code>[FormatOrStr](hud/models/enums/format.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>taskset_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ImportListResponse](hud/models/import_list_response.py), [ListImportsV2ImportsGetErrorBody](hud/errors/list_imports_v2_imports_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportListResponse](hud/models/import_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListImportsV2ImportsGetErrorBody](hud/errors/list_imports_v2_imports_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def start_import_v2_imports_post(body: ImportCreateRequest | ImportCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ImportResponse, StartImportV2ImportsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Import an uploaded bundle into a taskset.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.imports.with_raw_response.start_import_v2_imports_post(
    ImportCreateRequest(
        file_id=UUID("00000000-0000-0000-0000-000000000000"), taskset_id=UUID("00000000-0000-0000-0000-000000000000")
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartImportV2ImportsPostErrorBody
```

**Async**

```python
result = await async_client.imports.with_raw_response.start_import_v2_imports_post(
    ImportCreateRequest(
        file_id=UUID("00000000-0000-0000-0000-000000000000"), taskset_id=UUID("00000000-0000-0000-0000-000000000000")
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StartImportV2ImportsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ImportCreateRequest](hud/models/import_create_request.py) \| [ImportCreateRequestDict](hud/models/import_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ImportResponse](hud/models/import_response.py), [StartImportV2ImportsPostErrorBody](hud/errors/start_import_v2_imports_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ImportResponse](hud/models/import_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StartImportV2ImportsPostErrorBody](hud/errors/start_import_v2_imports_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Inference

> Source: [Inference](hud/apis/inference.py)

<details>
<summary><code>def get_inference_usage_v2_inference_usage_get(*, days: int | None = 7, user_id: UUID | None = None, api_key_id: UUID | None = None, byok_credential_id: UUID | None = None, model_id: UUID | None = None, request_type: str | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InferenceUsageResponse, GetInferenceUsageV2InferenceUsageGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the team's inference usage over a window, with summary and paged requests.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.inference.with_raw_response.get_inference_usage_v2_inference_usage_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InferenceUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInferenceUsageV2InferenceUsageGetErrorBody
```

**Async**

```python
result = await async_client.inference.with_raw_response.get_inference_usage_v2_inference_usage_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InferenceUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInferenceUsageV2InferenceUsageGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>7</code> |
| <code>user_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_key_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>byok_credential_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>model_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_type</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[InferenceUsageResponse](hud/models/inference_usage_response.py), [GetInferenceUsageV2InferenceUsageGetErrorBody](hud/errors/get_inference_usage_v2_inference_usage_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InferenceUsageResponse](hud/models/inference_usage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetInferenceUsageV2InferenceUsageGetErrorBody](hud/errors/get_inference_usage_v2_inference_usage_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Instances

> Source: [Instances](hud/apis/instances.py)

<details>
<summary><code>def list_instances_v2_instance_get(registry_id: UUID, *, include_terminated: bool | None = False, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ActiveInstancesResponse, ListInstancesV2InstanceGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a registry's instances, optionally including recently terminated ones.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.instances.with_raw_response.list_instances_v2_instance_get(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActiveInstancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInstancesV2InstanceGetErrorBody
```

**Async**

```python
result = await async_client.instances.with_raw_response.list_instances_v2_instance_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ActiveInstancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListInstancesV2InstanceGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registry_id</code> | <code>UUID</code> | Filter instances to this registry |
| <code>include_terminated</code> | <code>bool \| None</code> | Include recently terminated instances<br>**Default**: <code>False</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ActiveInstancesResponse](hud/models/active_instances_response.py), [ListInstancesV2InstanceGetErrorBody](hud/errors/list_instances_v2_instance_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ActiveInstancesResponse](hud/models/active_instances_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListInstancesV2InstanceGetErrorBody](hud/errors/list_instances_v2_instance_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def stop_instances_v2_instance_stop_post(body: StopInstancesRequest | StopInstancesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StopInstancesResponse, StopInstancesV2InstanceStopPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop the given instances of a registry, reporting per-instance results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.instances.with_raw_response.stop_instances_v2_instance_stop_post(
    StopInstancesRequest(
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        instance_ids=[UUID("00000000-0000-0000-0000-000000000000")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StopInstancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopInstancesV2InstanceStopPostErrorBody
```

**Async**

```python
result = await async_client.instances.with_raw_response.stop_instances_v2_instance_stop_post(
    StopInstancesRequest(
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        instance_ids=[UUID("00000000-0000-0000-0000-000000000000")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StopInstancesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type StopInstancesV2InstanceStopPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[StopInstancesRequest](hud/models/stop_instances_request.py) \| [StopInstancesRequestDict](hud/models/stop_instances_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[StopInstancesResponse](hud/models/stop_instances_response.py), [StopInstancesV2InstanceStopPostErrorBody](hud/errors/stop_instances_v2_instance_stop_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StopInstancesResponse](hud/models/stop_instances_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[StopInstancesV2InstanceStopPostErrorBody](hud/errors/stop_instances_v2_instance_stop_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](hud/apis/jobs.py)

<details>
<summary><code>def enrich_jobs_v2_jobs_enrich_post(body: list[UUID], *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnrichJobsResponse, EnrichJobsV2JobsEnrichPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch enrichment data (chart points, task coverage, models) for a batch of jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.enrich_jobs_v2_jobs_enrich_post([UUID("00000000-0000-0000-0000-000000000000")])
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichJobsV2JobsEnrichPostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.enrich_jobs_v2_jobs_enrich_post(
    [UUID("00000000-0000-0000-0000-000000000000")]
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnrichJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type EnrichJobsV2JobsEnrichPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>list&#91;UUID&#93;</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[EnrichJobsResponse](hud/models/enrich_jobs_response.py), [EnrichJobsV2JobsEnrichPostErrorBody](hud/errors/enrich_jobs_v2_jobs_enrich_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnrichJobsResponse](hud/models/enrich_jobs_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[EnrichJobsV2JobsEnrichPostErrorBody](hud/errors/enrich_jobs_v2_jobs_enrich_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def finish_imported_job_v2_jobs_import_job_id_finish_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobImportFinishResponse, FinishImportedJobV2JobsImportJobIdFinishPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Finish an imported job once each of its traces has been finished.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.finish_imported_job_v2_jobs_import_job_id_finish_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportFinishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FinishImportedJobV2JobsImportJobIdFinishPostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.finish_imported_job_v2_jobs_import_job_id_finish_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportFinishResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FinishImportedJobV2JobsImportJobIdFinishPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobImportFinishResponse](hud/models/job_import_finish_response.py), [FinishImportedJobV2JobsImportJobIdFinishPostErrorBody](hud/errors/finish_imported_job_v2_jobs_import_job_id_finish_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobImportFinishResponse](hud/models/job_import_finish_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FinishImportedJobV2JobsImportJobIdFinishPostErrorBody](hud/errors/finish_imported_job_v2_jobs_import_job_id_finish_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(job_id: UUID, trace_id: UUID, body: JobImportTraceResult | JobImportTraceResultDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobImportTraceResultResponse, FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Record the outcome of one imported trace after its trajectory is uploaded.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    JobImportTraceResult(status=StatusHudPlatformJobsApi.COMPLETED),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportTraceResultResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    JobImportTraceResult(status=StatusHudPlatformJobsApi.COMPLETED),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportTraceResultResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[JobImportTraceResult](hud/models/job_import_trace_result.py) \| [JobImportTraceResultDict](hud/models/job_import_trace_result.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobImportTraceResultResponse](hud/models/job_import_trace_result_response.py), [FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody](hud/errors/finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobImportTraceResultResponse](hud/models/job_import_trace_result_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody](hud/errors/finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_chart_data_v2_jobs_job_id_chart_data_get(job_id: UUID, *, limit: int | None = 5000, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ChartDataResponse, GetJobChartDataV2JobsJobIdChartDataGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-trace reward data points for charting a job's results.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_job_chart_data_v2_jobs_job_id_chart_data_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChartDataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobChartDataV2JobsJobIdChartDataGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_chart_data_v2_jobs_job_id_chart_data_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ChartDataResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobChartDataV2JobsJobIdChartDataGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>5000</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ChartDataResponse](hud/models/chart_data_response.py), [GetJobChartDataV2JobsJobIdChartDataGetErrorBody](hud/errors/get_job_chart_data_v2_jobs_job_id_chart_data_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ChartDataResponse](hud/models/chart_data_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetJobChartDataV2JobsJobIdChartDataGetErrorBody](hud/errors/get_job_chart_data_v2_jobs_job_id_chart_data_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_entity_links_v2_jobs_job_id_entity_links_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobEntityLinksResponse, GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tasksets and registries linked to a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_job_entity_links_v2_jobs_job_id_entity_links_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobEntityLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_entity_links_v2_jobs_job_id_entity_links_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobEntityLinksResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobEntityLinksResponse](hud/models/job_entity_links_response.py), [GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody](hud/errors/get_job_entity_links_v2_jobs_job_id_entity_links_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobEntityLinksResponse](hud/models/job_entity_links_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody](hud/errors/get_job_entity_links_v2_jobs_job_id_entity_links_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksetCoverageResponse, GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-task coverage of the job's taskset, including unattempted tasks.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetCoverageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetCoverageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TasksetCoverageResponse](hud/models/taskset_coverage_response.py), [GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody](hud/errors/get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksetCoverageResponse](hud/models/taskset_coverage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody](hud/errors/get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_usage_v2_jobs_job_id_usage_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobUsageResponse, GetJobUsageV2JobsJobIdUsageGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-trace compute and inference usage for a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_job_usage_v2_jobs_job_id_usage_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobUsageV2JobsJobIdUsageGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_usage_v2_jobs_job_id_usage_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobUsageV2JobsJobIdUsageGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobUsageResponse](hud/models/job_usage_response.py), [GetJobUsageV2JobsJobIdUsageGetErrorBody](hud/errors/get_job_usage_v2_jobs_job_id_usage_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobUsageResponse](hud/models/job_usage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetJobUsageV2JobsJobIdUsageGetErrorBody](hud/errors/get_job_usage_v2_jobs_job_id_usage_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_v2_jobs_job_id_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobResponse, GetJobV2JobsJobIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a job by id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.get_job_v2_jobs_job_id_get(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobV2JobsJobIdGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_v2_jobs_job_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobV2JobsJobIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobResponse](hud/models/job_response.py), [GetJobV2JobsJobIdGetErrorBody](hud/errors/get_job_v2_jobs_job_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobResponse](hud/models/job_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetJobV2JobsJobIdGetErrorBody](hud/errors/get_job_v2_jobs_job_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def import_job_v2_jobs_import_post(body: JobImportRequest | JobImportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobImportResponse, ImportJobV2JobsImportPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add runs done outside HUD to an imported job, creating the job on first call.

Each trace is linked to its task by content digest and starts running. A
running trace with no span upload for an hour is errored, so add traces as
they are uploaded rather than all at once. Retried traces are reported as
already imported.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.import_job_v2_jobs_import_post(
    JobImportRequest(
        taskset_id=UUID("00000000-0000-0000-0000-000000000000"),
        external_id="some example string",
        name="some example string",
        traces=[JobImportTrace(external_id="some example string", task_digest="some example string")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportJobV2JobsImportPostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.import_job_v2_jobs_import_post(
    JobImportRequest(
        taskset_id=UUID("00000000-0000-0000-0000-000000000000"),
        external_id="some example string",
        name="some example string",
        traces=[JobImportTrace(external_id="some example string", task_digest="some example string")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ImportJobV2JobsImportPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[JobImportRequest](hud/models/job_import_request.py) \| [JobImportRequestDict](hud/models/job_import_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobImportResponse](hud/models/job_import_response.py), [ImportJobV2JobsImportPostErrorBody](hud/errors/import_job_v2_jobs_import_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobImportResponse](hud/models/job_import_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ImportJobV2JobsImportPostErrorBody](hud/errors/import_job_v2_jobs_import_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def invalidate_job_v2_jobs_job_id_invalidate_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchValidateResponse, InvalidateJobV2JobsJobIdInvalidatePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark every trace in this job as invalid (excluded from leaderboards).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.invalidate_job_v2_jobs_job_id_invalidate_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvalidateJobV2JobsJobIdInvalidatePostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.invalidate_job_v2_jobs_job_id_invalidate_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InvalidateJobV2JobsJobIdInvalidatePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BatchValidateResponse](hud/models/batch_validate_response.py), [InvalidateJobV2JobsJobIdInvalidatePostErrorBody](hud/errors/invalidate_job_v2_jobs_job_id_invalidate_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchValidateResponse](hud/models/batch_validate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InvalidateJobV2JobsJobIdInvalidatePostErrorBody](hud/errors/invalidate_job_v2_jobs_job_id_invalidate_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def job_summary_v2_jobs_job_id_summary_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobSummary, JobSummaryV2JobsJobIdSummaryGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get aggregate trace statistics for a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.job_summary_v2_jobs_job_id_summary_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobSummaryV2JobsJobIdSummaryGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.job_summary_v2_jobs_job_id_summary_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobSummary
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JobSummaryV2JobsJobIdSummaryGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobSummary](hud/models/job_summary.py), [JobSummaryV2JobsJobIdSummaryGetErrorBody](hud/errors/job_summary_v2_jobs_job_id_summary_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobSummary](hud/models/job_summary.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JobSummaryV2JobsJobIdSummaryGetErrorBody](hud/errors/job_summary_v2_jobs_job_id_summary_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_active_jobs_v2_jobs_active_get(*, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[JobResponse], ListActiveJobsV2JobsActiveGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a bounded page of currently running jobs for the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.list_active_jobs_v2_jobs_active_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[JobResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListActiveJobsV2JobsActiveGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_active_jobs_v2_jobs_active_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[JobResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListActiveJobsV2JobsActiveGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[JobResponse](hud/models/job_response.py)&#93;, [ListActiveJobsV2JobsActiveGetErrorBody](hud/errors/list_active_jobs_v2_jobs_active_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[JobResponse](hud/models/job_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListActiveJobsV2JobsActiveGetErrorBody](hud/errors/list_active_jobs_v2_jobs_active_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_enriched_jobs_v2_jobs_enriched_get(taskset_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksetJobsEnrichedResponse, ListEnrichedJobsV2JobsEnrichedGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List enriched taskset jobs; public-only viewers receive public jobs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.list_enriched_jobs_v2_jobs_enriched_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetJobsEnrichedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnrichedJobsV2JobsEnrichedGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_enriched_jobs_v2_jobs_enriched_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetJobsEnrichedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnrichedJobsV2JobsEnrichedGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskset_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TasksetJobsEnrichedResponse](hud/models/taskset_jobs_enriched_response.py), [ListEnrichedJobsV2JobsEnrichedGetErrorBody](hud/errors/list_enriched_jobs_v2_jobs_enriched_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksetJobsEnrichedResponse](hud/models/taskset_jobs_enriched_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListEnrichedJobsV2JobsEnrichedGetErrorBody](hud/errors/list_enriched_jobs_v2_jobs_enriched_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(job_id: UUID, *, limit: int | None = 100, offset: int | None = 0, status: list[TraceStatusOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobThumbnailsResponse, ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List trace thumbnails for a job with presigned image URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobThumbnailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobThumbnailsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>status</code> | <code>list&#91;[TraceStatusOrStr](hud/models/enums/trace_status.py)&#93; \| None</code> | Only traces in these statuses; the category counts cover the same traces.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobThumbnailsResponse](hud/models/job_thumbnails_response.py), [ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody](hud/errors/list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobThumbnailsResponse](hud/models/job_thumbnails_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody](hud/errors/list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_job_traces_v2_jobs_job_id_traces_get(job_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseTraceResponse, ListJobTracesV2JobsJobIdTracesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List traces belonging to a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.list_job_traces_v2_jobs_job_id_traces_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTraceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobTracesV2JobsJobIdTracesGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_job_traces_v2_jobs_job_id_traces_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTraceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobTracesV2JobsJobIdTracesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseTraceResponse](hud/models/paginated_response_trace_response.py), [ListJobTracesV2JobsJobIdTracesGetErrorBody](hud/errors/list_job_traces_v2_jobs_job_id_traces_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseTraceResponse](hud/models/paginated_response_trace_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListJobTracesV2JobsJobIdTracesGetErrorBody](hud/errors/list_job_traces_v2_jobs_job_id_traces_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_jobs_v2_jobs_get(*, limit: int | None = 50, offset: int | None = 0, taskset_id: UUID | None = None, project_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseJobResponse, ListJobsV2JobsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List jobs for the caller's team, optionally filtered by taskset or Project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.list_jobs_v2_jobs_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobsV2JobsGetErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.list_jobs_v2_jobs_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListJobsV2JobsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>taskset_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>project_id</code> | <code>UUID \| None</code> | Only jobs contained by this Project; omitted lists every Project<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseJobResponse](hud/models/paginated_response_job_response.py), [ListJobsV2JobsGetErrorBody](hud/errors/list_jobs_v2_jobs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseJobResponse](hud/models/paginated_response_job_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListJobsV2JobsGetErrorBody](hud/errors/list_jobs_v2_jobs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_job_v2_jobs_job_id_publish_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublishJobResponse, PublishJobV2JobsJobIdPublishPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set `jobs.public=true` so the job is visible on the public taskset page.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.publish_job_v2_jobs_job_id_publish_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublishJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishJobV2JobsJobIdPublishPostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.publish_job_v2_jobs_job_id_publish_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublishJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishJobV2JobsJobIdPublishPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PublishJobResponse](hud/models/publish_job_response.py), [PublishJobV2JobsJobIdPublishPostErrorBody](hud/errors/publish_job_v2_jobs_job_id_publish_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublishJobResponse](hud/models/publish_job_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PublishJobV2JobsJobIdPublishPostErrorBody](hud/errors/publish_job_v2_jobs_job_id_publish_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revalidate_job_v2_jobs_job_id_revalidate_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchValidateResponse, RevalidateJobV2JobsJobIdRevalidatePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Re-include every trace in this job in leaderboard calculations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.revalidate_job_v2_jobs_job_id_revalidate_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevalidateJobV2JobsJobIdRevalidatePostErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.revalidate_job_v2_jobs_job_id_revalidate_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevalidateJobV2JobsJobIdRevalidatePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BatchValidateResponse](hud/models/batch_validate_response.py), [RevalidateJobV2JobsJobIdRevalidatePostErrorBody](hud/errors/revalidate_job_v2_jobs_job_id_revalidate_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchValidateResponse](hud/models/batch_validate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RevalidateJobV2JobsJobIdRevalidatePostErrorBody](hud/errors/revalidate_job_v2_jobs_job_id_revalidate_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unpublish_job_v2_jobs_job_id_publish_delete(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatusResponse, UnpublishJobV2JobsJobIdPublishDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set `jobs.public=false`; the job and its traces return to invited-only visibility.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.unpublish_job_v2_jobs_job_id_publish_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishJobV2JobsJobIdPublishDeleteErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.unpublish_job_v2_jobs_job_id_publish_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishJobV2JobsJobIdPublishDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[StatusResponse](hud/models/status_response.py), [UnpublishJobV2JobsJobIdPublishDeleteErrorBody](hud/errors/unpublish_job_v2_jobs_job_id_publish_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatusResponse](hud/models/status_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnpublishJobV2JobsJobIdPublishDeleteErrorBody](hud/errors/unpublish_job_v2_jobs_job_id_publish_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_job_v2_jobs_job_id_patch(job_id: UUID, body: JobUpdateRequest | JobUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobResponse, UpdateJobV2JobsJobIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a job's mutable fields, such as its name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.update_job_v2_jobs_job_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), JobUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateJobV2JobsJobIdPatchErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.update_job_v2_jobs_job_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), JobUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateJobV2JobsJobIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[JobUpdateRequest](hud/models/job_update_request.py) \| [JobUpdateRequestDict](hud/models/job_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobResponse](hud/models/job_response.py), [UpdateJobV2JobsJobIdPatchErrorBody](hud/errors/update_job_v2_jobs_job_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobResponse](hud/models/job_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateJobV2JobsJobIdPatchErrorBody](hud/errors/update_job_v2_jobs_job_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(job_id: UUID, trace_id: UUID, body: AtifTrajectory | AtifTrajectoryDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobImportTrajectoryResponse, UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Store an ATIF agent trajectory as an imported trace's telemetry.

Upload it before finishing the trace. A trace keeps the first trajectory
it receives; a repeated upload reports `ingested: false`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.jobs.with_raw_response.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    AtifTrajectory(
        agent=AtifAgent(name="some example string", version="some example string"),
        steps=[AtifStep(step_id=1, source=SourceHudPlatformJobsApi.SYSTEM, message="some example string")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportTrajectoryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody
        ...
```

**Async**

```python
result = await async_client.jobs.with_raw_response.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    AtifTrajectory(
        agent=AtifAgent(name="some example string", version="some example string"),
        steps=[AtifStep(step_id=1, source=SourceHudPlatformJobsApi.SYSTEM, message="some example string")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobImportTrajectoryResponse
    case Failure(error=error):
        # TODO: Handle 'error' of type UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody
        ...
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[AtifTrajectory](hud/models/atif_trajectory.py) \| [AtifTrajectoryDict](hud/models/atif_trajectory.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[JobImportTrajectoryResponse](hud/models/job_import_trajectory_response.py), [UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody](hud/errors/upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobImportTrajectoryResponse](hud/models/job_import_trajectory_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody](hud/errors/upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 413, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## LimitsApi

> Source: [LimitsApi](hud/apis/limits_api.py)

<details>
<summary><code>def create_spend_limit_v2_limits_post(body: SpendLimitCreateRequest | SpendLimitCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SpendLimitItem, CreateSpendLimitV2LimitsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a team, member, or API-key limit, or a team percentage alert.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.limits_api.with_raw_response.create_spend_limit_v2_limits_post(
    SpendLimitCreateRequest(interval=SpendInterval.WEEK, action=SpendLimitAction.ALERT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSpendLimitV2LimitsPostErrorBody
```

**Async**

```python
result = await async_client.limits_api.with_raw_response.create_spend_limit_v2_limits_post(
    SpendLimitCreateRequest(interval=SpendInterval.WEEK, action=SpendLimitAction.ALERT)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateSpendLimitV2LimitsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SpendLimitCreateRequest](hud/models/spend_limit_create_request.py) \| [SpendLimitCreateRequestDict](hud/models/spend_limit_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[SpendLimitItem](hud/models/spend_limit_item.py), [CreateSpendLimitV2LimitsPostErrorBody](hud/errors/create_spend_limit_v2_limits_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SpendLimitItem](hud/models/spend_limit_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateSpendLimitV2LimitsPostErrorBody](hud/errors/create_spend_limit_v2_limits_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_spend_limit_v2_limits_limit_id_delete(limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a spend limit.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.limits_api.with_raw_response.delete_spend_limit_v2_limits_limit_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody
```

**Async**

```python
result = await async_client.limits_api.with_raw_response.delete_spend_limit_v2_limits_limit_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody](hud/errors/delete_spend_limit_v2_limits_limit_id_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody](hud/errors/delete_spend_limit_v2_limits_limit_id_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_spend_limits_v2_limits_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SpendLimitListResponse, ListSpendLimitsV2LimitsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the spend limits visible to the caller with current-period spend.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.limits_api.with_raw_response.list_spend_limits_v2_limits_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSpendLimitsV2LimitsGetErrorBody
```

**Async**

```python
result = await async_client.limits_api.with_raw_response.list_spend_limits_v2_limits_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListSpendLimitsV2LimitsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[SpendLimitListResponse](hud/models/spend_limit_list_response.py), [ListSpendLimitsV2LimitsGetErrorBody](hud/errors/list_spend_limits_v2_limits_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SpendLimitListResponse](hud/models/spend_limit_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListSpendLimitsV2LimitsGetErrorBody](hud/errors/list_spend_limits_v2_limits_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def reset_spend_limit_v2_limits_limit_id_reset_post(limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SpendLimitItem, ResetSpendLimitV2LimitsLimitIdResetPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start a new spend window on a blocking limit. Ledger rows are unchanged.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.limits_api.with_raw_response.reset_spend_limit_v2_limits_limit_id_reset_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResetSpendLimitV2LimitsLimitIdResetPostErrorBody
```

**Async**

```python
result = await async_client.limits_api.with_raw_response.reset_spend_limit_v2_limits_limit_id_reset_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResetSpendLimitV2LimitsLimitIdResetPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[SpendLimitItem](hud/models/spend_limit_item.py), [ResetSpendLimitV2LimitsLimitIdResetPostErrorBody](hud/errors/reset_spend_limit_v2_limits_limit_id_reset_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SpendLimitItem](hud/models/spend_limit_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ResetSpendLimitV2LimitsLimitIdResetPostErrorBody](hud/errors/reset_spend_limit_v2_limits_limit_id_reset_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_spend_limit_v2_limits_limit_id_patch(limit_id: UUID, body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SpendLimitItem, UpdateSpendLimitV2LimitsLimitIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update an absolute amount, percentage threshold, or enabled state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.limits_api.with_raw_response.update_spend_limit_v2_limits_limit_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), SpendLimitUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSpendLimitV2LimitsLimitIdPatchErrorBody
```

**Async**

```python
result = await async_client.limits_api.with_raw_response.update_spend_limit_v2_limits_limit_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), SpendLimitUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SpendLimitItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateSpendLimitV2LimitsLimitIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[SpendLimitUpdateRequest](hud/models/spend_limit_update_request.py) \| [SpendLimitUpdateRequestDict](hud/models/spend_limit_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[SpendLimitItem](hud/models/spend_limit_item.py), [UpdateSpendLimitV2LimitsLimitIdPatchErrorBody](hud/errors/update_spend_limit_v2_limits_limit_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SpendLimitItem](hud/models/spend_limit_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateSpendLimitV2LimitsLimitIdPatchErrorBody](hud/errors/update_spend_limit_v2_limits_limit_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ModelsApi

> Source: [ModelsApi](hud/apis/models_api.py)

<details>
<summary><code>def fork_model_v2_models_fork_post(body: ModelForkRequest | ModelForkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelResponse, ForkModelV2ModelsForkPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create an owned trainable model derived from a source trainable model.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.fork_model_v2_models_fork_post(
    ModelForkRequest(source_model_id=UUID("00000000-0000-0000-0000-000000000000"), name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ForkModelV2ModelsForkPostErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.fork_model_v2_models_fork_post(
    ModelForkRequest(source_model_id=UUID("00000000-0000-0000-0000-000000000000"), name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ForkModelV2ModelsForkPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ModelForkRequest](hud/models/model_fork_request.py) \| [ModelForkRequestDict](hud/models/model_fork_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ModelResponse](hud/models/model_response.py), [ForkModelV2ModelsForkPostErrorBody](hud/errors/fork_model_v2_models_fork_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ForkModelV2ModelsForkPostErrorBody](hud/errors/fork_model_v2_models_fork_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_model_v2_models_model_id_get(model_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelResponse, GetModelV2ModelsModelIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a catalog model by id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.get_model_v2_models_model_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetModelV2ModelsModelIdGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.get_model_v2_models_model_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetModelV2ModelsModelIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ModelResponse](hud/models/model_response.py), [GetModelV2ModelsModelIdGetErrorBody](hud/errors/get_model_v2_models_model_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetModelV2ModelsModelIdGetErrorBody](hud/errors/get_model_v2_models_model_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(model_id: UUID, checkpoint_id: UUID, *, limit: int | None = 200, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CheckpointTraceRow], ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List recent traces produced by a specific model checkpoint.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckpointTraceRow]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckpointTraceRow]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>checkpoint_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>200</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[CheckpointTraceRow](hud/models/checkpoint_trace_row.py)&#93;, [ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody](hud/errors/list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CheckpointTraceRow](hud/models/checkpoint_trace_row.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody](hud/errors/list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_model_checkpoints_v2_models_model_id_checkpoints_get(model_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[CheckpointResponse], ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a trainable model's checkpoint tree.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_model_checkpoints_v2_models_model_id_checkpoints_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckpointResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_model_checkpoints_v2_models_model_id_checkpoints_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[CheckpointResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[CheckpointResponse](hud/models/checkpoint_response.py)&#93;, [ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody](hud/errors/list_model_checkpoints_v2_models_model_id_checkpoints_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[CheckpointResponse](hud/models/checkpoint_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody](hud/errors/list_model_checkpoints_v2_models_model_id_checkpoints_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_model_inference_logs_v2_models_model_id_logs_get(model_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseModelInferenceLogEntry, ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's gateway inference logs for a model, excluding QA analysis calls.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_model_inference_logs_v2_models_model_id_logs_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseModelInferenceLogEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_model_inference_logs_v2_models_model_id_logs_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseModelInferenceLogEntry
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseModelInferenceLogEntry](hud/models/paginated_response_model_inference_log_entry.py), [ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody](hud/errors/list_model_inference_logs_v2_models_model_id_logs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseModelInferenceLogEntry](hud/models/paginated_response_model_inference_log_entry.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody](hud/errors/list_model_inference_logs_v2_models_model_id_logs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_models_v2_models_get(*, limit: int | None = 100, offset: int | None = 0, scope: ModelListScopeOrStr | None = None, search: str | None = None, trainable: bool | None = False, include_deprecated: bool | None = True, sort: ModelListSort1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseModelResponse, ListModelsV2ModelsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List catalog models visible to the caller.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.list_models_v2_models_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelsV2ModelsGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.list_models_v2_models_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListModelsV2ModelsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>scope</code> | <code>[ModelListScopeOrStr](hud/models/enums/model_list_scope.py) \| None</code> | `catalog` for global base models, `owned` for the team's trainable forks; both when omitted. Signed-out callers must pass `catalog`.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Case-insensitive match on display name, model name, or provider name.<br>**Default**: <code>None</code> |
| <code>trainable</code> | <code>bool \| None</code> | Only models that can be fine-tuned.<br>**Default**: <code>False</code> |
| <code>include_deprecated</code> | <code>bool \| None</code> | Include models whose deprecation date has passed.<br>**Default**: <code>True</code> |
| <code>sort</code> | <code>[ModelListSort1OrStr](hud/models/enums/model_list_sort1.py) \| None</code> | Row order. Signed-out callers cannot sort by `usage`.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseModelResponse](hud/models/paginated_response_model_response.py), [ListModelsV2ModelsGetErrorBody](hud/errors/list_models_v2_models_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseModelResponse](hud/models/paginated_response_model_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListModelsV2ModelsGetErrorBody](hud/errors/list_models_v2_models_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def model_results_v2_models_model_id_results_get(model_id: UUID, *, checkpoint_ids: str | None = None, purpose: PurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelResultsResponse, ModelResultsV2ModelsModelIdResultsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get per-taskset evaluation results for a model's checkpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.model_results_v2_models_model_id_results_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModelResultsV2ModelsModelIdResultsGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.model_results_v2_models_model_id_results_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResultsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModelResultsV2ModelsModelIdResultsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>checkpoint_ids</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>purpose</code> | <code>[PurposeOrStr](hud/models/enums/purpose.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ModelResultsResponse](hud/models/model_results_response.py), [ModelResultsV2ModelsModelIdResultsGetErrorBody](hud/errors/model_results_v2_models_model_id_results_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelResultsResponse](hud/models/model_results_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ModelResultsV2ModelsModelIdResultsGetErrorBody](hud/errors/model_results_v2_models_model_id_results_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(model_id: UUID, *, exclude: str | None = None, search: str | None = None, limit: int | None = 50, purpose: PurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SuggestedTasksetsResponse, ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Suggest tasksets to evaluate or train a model on.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuggestedTasksetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SuggestedTasksetsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>exclude</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>search</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>purpose</code> | <code>[PurposeOrStr](hud/models/enums/purpose.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[SuggestedTasksetsResponse](hud/models/suggested_tasksets_response.py), [ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody](hud/errors/model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SuggestedTasksetsResponse](hud/models/suggested_tasksets_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody](hud/errors/model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def resolve_model_v2_models_resolve_get(model: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelResponse, ResolveModelV2ModelsResolveGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a model string (slug or id) to its catalog record.

General slug→id lookup: any client holding a model string (e.g. a trainable
model's gateway slug) can map it to the id and metadata. Declared before
`/{model_id}` so the literal `resolve` path is not parsed as an id; a
query param (not a path segment) so slugs with `/` or `:` need no
encoding. Team-scoping still hides other teams' private fine-tunes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.resolve_model_v2_models_resolve_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResolveModelV2ModelsResolveGetErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.resolve_model_v2_models_resolve_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ResolveModelV2ModelsResolveGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model</code> | <code>str</code> | Model slug (or id) to resolve to its catalog record |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ModelResponse](hud/models/model_response.py), [ResolveModelV2ModelsResolveGetErrorBody](hud/errors/resolve_model_v2_models_resolve_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ResolveModelV2ModelsResolveGetErrorBody](hud/errors/resolve_model_v2_models_resolve_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def set_model_head_v2_models_model_id_head_put(model_id: UUID, body: SetHeadRequest | SetHeadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelResponse, SetModelHeadV2ModelsModelIdHeadPutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Point the model's active checkpoint (head) at one of its checkpoint nodes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.set_model_head_v2_models_model_id_head_put(
    UUID("00000000-0000-0000-0000-000000000000"),
    SetHeadRequest(checkpoint_id=UUID("00000000-0000-0000-0000-000000000000")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetModelHeadV2ModelsModelIdHeadPutErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.set_model_head_v2_models_model_id_head_put(
    UUID("00000000-0000-0000-0000-000000000000"),
    SetHeadRequest(checkpoint_id=UUID("00000000-0000-0000-0000-000000000000")),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SetModelHeadV2ModelsModelIdHeadPutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[SetHeadRequest](hud/models/set_head_request.py) \| [SetHeadRequestDict](hud/models/set_head_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ModelResponse](hud/models/model_response.py), [SetModelHeadV2ModelsModelIdHeadPutErrorBody](hud/errors/set_model_head_v2_models_model_id_head_put_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SetModelHeadV2ModelsModelIdHeadPutErrorBody](hud/errors/set_model_head_v2_models_model_id_head_put_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_model_v2_models_model_id_patch(model_id: UUID, body: ModelUpdate | ModelUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ModelResponse, UpdateModelV2ModelsModelIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a model's catalog fields, such as name or visibility.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.models_api.with_raw_response.update_model_v2_models_model_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), ModelUpdate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateModelV2ModelsModelIdPatchErrorBody
```

**Async**

```python
result = await async_client.models_api.with_raw_response.update_model_v2_models_model_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), ModelUpdate()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ModelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateModelV2ModelsModelIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>model_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ModelUpdate](hud/models/model_update.py) \| [ModelUpdateDict](hud/models/model_update.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ModelResponse](hud/models/model_response.py), [UpdateModelV2ModelsModelIdPatchErrorBody](hud/errors/update_model_v2_models_model_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateModelV2ModelsModelIdPatchErrorBody](hud/errors/update_model_v2_models_model_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## OAuth

> Source: [OAuth](hud/apis/o_auth.py)

<details>
<summary><code>def join_oauth_app_team_v2_oauth_join_post(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[OAuthJoinResponse, JoinOauthAppTeamV2OauthJoinPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Make the OAuth access token's user a member of its application's team.

Idempotent. A user who is already a member keeps their role; a new user
joins as an external member, whom a team admin can promote. A user who was
removed from the team is refused until a team admin invites them again.
Every other endpoint answers `principal_not_found` for the token until
its user has joined.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.o_auth.with_raw_response.join_oauth_app_team_v2_oauth_join_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OAuthJoinResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JoinOauthAppTeamV2OauthJoinPostErrorBody
```

**Async**

```python
result = await async_client.o_auth.with_raw_response.join_oauth_app_team_v2_oauth_join_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type OAuthJoinResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type JoinOauthAppTeamV2OauthJoinPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[OAuthJoinResponse](hud/models/o_auth_join_response.py), [JoinOauthAppTeamV2OauthJoinPostErrorBody](hud/errors/join_oauth_app_team_v2_oauth_join_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[OAuthJoinResponse](hud/models/o_auth_join_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[JoinOauthAppTeamV2OauthJoinPostErrorBody](hud/errors/join_oauth_app_team_v2_oauth_join_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 502, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## RegistryApi

> Source: [RegistryApi](hud/apis/registry_api.py)

<details>
<summary><code>def get_registry_source_url_v2_registry_registry_id_source_url_get(registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistrySourceUrlResponse, GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a presigned download URL for the registry's source archive.

Readers outside the owning team download only the latest build of a public environment
whose owner published its source.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.registry_api.with_raw_response.get_registry_source_url_v2_registry_registry_id_source_url_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistrySourceUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody
```

**Async**

```python
result = await async_client.registry_api.with_raw_response.get_registry_source_url_v2_registry_registry_id_source_url_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistrySourceUrlResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registry_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>build_id</code> | <code>UUID \| None</code> | Download a specific build's source archive. Defaults to the registry's latest build when omitted.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistrySourceUrlResponse](hud/models/registry_source_url_response.py), [GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody](hud/errors/get_registry_source_url_v2_registry_registry_id_source_url_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistrySourceUrlResponse](hud/models/registry_source_url_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody](hud/errors/get_registry_source_url_v2_registry_registry_id_source_url_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_registry_v2_registry_registry_id_get(registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistryDetailResponse, GetRegistryV2RegistryRegistryIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a registry by id with its latest build details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.registry_api.with_raw_response.get_registry_v2_registry_registry_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRegistryV2RegistryRegistryIdGetErrorBody
```

**Async**

```python
result = await async_client.registry_api.with_raw_response.get_registry_v2_registry_registry_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetRegistryV2RegistryRegistryIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registry_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistryDetailResponse](hud/models/registry_detail_response.py), [GetRegistryV2RegistryRegistryIdGetErrorBody](hud/errors/get_registry_v2_registry_registry_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistryDetailResponse](hud/models/registry_detail_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetRegistryV2RegistryRegistryIdGetErrorBody](hud/errors/get_registry_v2_registry_registry_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_registries_v2_registry_get(*, limit: int | None = 50, offset: int | None = 0, search: str | None = None, match_templates: bool | None = False, include_latest_scenarios: bool | None = False, public_only: bool | None = False, featured_only: bool | None = False, owner_only: bool | None = False, project_id: UUID | None = None, sort_by: SortByOrStr | None = SortBy.STARRED, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseRegistryDetailResponse, ListRegistriesV2RegistryGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List registries visible to the caller, with search, ownership, and sort filters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.registry_api.with_raw_response.list_registries_v2_registry_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseRegistryDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRegistriesV2RegistryGetErrorBody
```

**Async**

```python
result = await async_client.registry_api.with_raw_response.list_registries_v2_registry_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseRegistryDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRegistriesV2RegistryGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>search</code> | <code>str \| None</code> | ILIKE-match on name<br>**Default**: <code>None</code> |
| <code>match_templates</code> | <code>bool \| None</code> | When search is set, also match environment description and latest-build template name, description, and setup_description<br>**Default**: <code>False</code> |
| <code>include_latest_scenarios</code> | <code>bool \| None</code> | Embed latest-build templates on each list row<br>**Default**: <code>False</code> |
| <code>public_only</code> | <code>bool \| None</code> | Only public registries; anonymous browsing requires this or featured_only<br>**Default**: <code>False</code> |
| <code>featured_only</code> | <code>bool \| None</code> | Only platform-featured registries, which are always public<br>**Default**: <code>False</code> |
| <code>owner_only</code> | <code>bool \| None</code> | Only registries owned by the caller's membership; ignored when public_only=True<br>**Default**: <code>False</code> |
| <code>project_id</code> | <code>UUID \| None</code> | Only registries contained by this Project; omitted lists every Project<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByOrStr](hud/models/enums/sort_by.py) \| None</code> | Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC)<br>**Default**: <code>SortBy.STARRED</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseRegistryDetailResponse](hud/models/paginated_response_registry_detail_response.py), [ListRegistriesV2RegistryGetErrorBody](hud/errors/list_registries_v2_registry_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseRegistryDetailResponse](hud/models/paginated_response_registry_detail_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListRegistriesV2RegistryGetErrorBody](hud/errors/list_registries_v2_registry_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_registry_scenarios_v2_registry_registry_id_scenarios_get(registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[ScenarioResponse], ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List scenarios for a registry build (latest build by default).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.registry_api.with_raw_response.list_registry_scenarios_v2_registry_registry_id_scenarios_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ScenarioResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody
```

**Async**

```python
result = await async_client.registry_api.with_raw_response.list_registry_scenarios_v2_registry_registry_id_scenarios_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[ScenarioResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registry_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>build_id</code> | <code>UUID \| None</code> | Filter scenarios to a specific build of this registry. Defaults to the registry's latest build when omitted.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[ScenarioResponse](hud/models/scenario_response.py)&#93;, [ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody](hud/errors/list_registry_scenarios_v2_registry_registry_id_scenarios_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[ScenarioResponse](hud/models/scenario_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody](hud/errors/list_registry_scenarios_v2_registry_registry_id_scenarios_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Storage

> Source: [Storage](hud/apis/storage.py)

<details>
<summary><code>def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceStorageObjectListResponse, ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List trace-owned screenshots, recordings, and captured files.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.storage.with_raw_response.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceStorageObjectListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceStorageObjectListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceStorageObjectListResponse](hud/models/trace_storage_object_list_response.py), [ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody](hud/errors/list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceStorageObjectListResponse](hud/models/trace_storage_object_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody](hud/errors/list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceWorkspaceChangesResponse, TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return filetracking snapshots, patches, and captured files for a trace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.storage.with_raw_response.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceWorkspaceChangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceWorkspaceChangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceWorkspaceChangesResponse](hud/models/trace_workspace_changes_response.py), [TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody](hud/errors/trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceWorkspaceChangesResponse](hud/models/trace_workspace_changes_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody](hud/errors/trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceWorkspaceFilesResponse, TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return final captured file contents for a trace workspace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.storage.with_raw_response.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceWorkspaceFilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody
```

**Async**

```python
result = await async_client.storage.with_raw_response.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceWorkspaceFilesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceWorkspaceFilesResponse](hud/models/trace_workspace_files_response.py), [TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody](hud/errors/trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceWorkspaceFilesResponse](hud/models/trace_workspace_files_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody](hud/errors/trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tasks

> Source: [Tasks](hud/apis/tasks.py)

<details>
<summary><code>def bulk_update_task_stage_v2_tasks_stage_patch(body: BulkStageRequest | BulkStageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkStatusResponse, BulkUpdateTaskStageV2TasksStagePatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk lifecycle-stage move (advance one stage / send back); non-atomic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.bulk_update_task_stage_v2_tasks_stage_patch(
    BulkStageRequest(ids=[UUID("00000000-0000-0000-0000-000000000000")], stage="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkUpdateTaskStageV2TasksStagePatchErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.bulk_update_task_stage_v2_tasks_stage_patch(
    BulkStageRequest(ids=[UUID("00000000-0000-0000-0000-000000000000")], stage="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkUpdateTaskStageV2TasksStagePatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkStageRequest](hud/models/bulk_stage_request.py) \| [BulkStageRequestDict](hud/models/bulk_stage_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BulkStatusResponse](hud/models/bulk_status_response.py), [BulkUpdateTaskStageV2TasksStagePatchErrorBody](hud/errors/bulk_update_task_stage_v2_tasks_stage_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkStatusResponse](hud/models/bulk_status_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BulkUpdateTaskStageV2TasksStagePatchErrorBody](hud/errors/bulk_update_task_stage_v2_tasks_stage_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def bulk_update_task_status_v2_tasks_status_patch(body: BulkStatusRequest | BulkStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BulkStatusResponse, BulkUpdateTaskStatusV2TasksStatusPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk status mutation; reviewer-only clear resets directly to pending; non-atomic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.bulk_update_task_status_v2_tasks_status_patch(BulkStatusRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkUpdateTaskStatusV2TasksStatusPatchErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.bulk_update_task_status_v2_tasks_status_patch(BulkStatusRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BulkStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BulkUpdateTaskStatusV2TasksStatusPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkStatusRequest](hud/models/bulk_status_request.py) \| [BulkStatusRequestDict](hud/models/bulk_status_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[BulkStatusResponse](hud/models/bulk_status_response.py), [BulkUpdateTaskStatusV2TasksStatusPatchErrorBody](hud/errors/bulk_update_task_status_v2_tasks_status_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BulkStatusResponse](hud/models/bulk_status_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BulkUpdateTaskStatusV2TasksStatusPatchErrorBody](hud/errors/bulk_update_task_status_v2_tasks_status_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_task_comment_v2_tasks_task_id_comments_post(task_id: UUID, body: CreateTaskCommentRequest | CreateTaskCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskCommentItem, CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Add a comment to a task and notify mentioned users.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.create_task_comment_v2_tasks_task_id_comments_post(
    UUID("00000000-0000-0000-0000-000000000000"), CreateTaskCommentRequest(body="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskCommentItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.create_task_comment_v2_tasks_task_id_comments_post(
    UUID("00000000-0000-0000-0000-000000000000"), CreateTaskCommentRequest(body="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskCommentItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[CreateTaskCommentRequest](hud/models/create_task_comment_request.py) \| [CreateTaskCommentRequestDict](hud/models/create_task_comment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TaskCommentItem](hud/models/task_comment_item.py), [CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody](hud/errors/create_task_comment_v2_tasks_task_id_comments_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskCommentItem](hud/models/task_comment_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody](hud/errors/create_task_comment_v2_tasks_task_id_comments_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(task_id: UUID, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a task comment.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>comment_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody](hud/errors/delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody](hud/errors/delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task_activity_v2_tasks_task_id_activity_get(task_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskActivityResponse, GetTaskActivityV2TasksTaskIdActivityGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a task's combined activity feed of comments and state changes.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.get_task_activity_v2_tasks_task_id_activity_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskActivityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskActivityV2TasksTaskIdActivityGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_task_activity_v2_tasks_task_id_activity_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskActivityResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskActivityV2TasksTaskIdActivityGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TaskActivityResponse](hud/models/task_activity_response.py), [GetTaskActivityV2TasksTaskIdActivityGetErrorBody](hud/errors/get_task_activity_v2_tasks_task_id_activity_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskActivityResponse](hud/models/task_activity_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTaskActivityV2TasksTaskIdActivityGetErrorBody](hud/errors/get_task_activity_v2_tasks_task_id_activity_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task_comments_v2_tasks_task_id_comments_get(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskCommentsListResponse, GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List comments on a task.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.get_task_comments_v2_tasks_task_id_comments_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskCommentsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_task_comments_v2_tasks_task_id_comments_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskCommentsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TaskCommentsListResponse](hud/models/task_comments_list_response.py), [GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody](hud/errors/get_task_comments_v2_tasks_task_id_comments_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskCommentsListResponse](hud/models/task_comments_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody](hud/errors/get_task_comments_v2_tasks_task_id_comments_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task_ready_check_v2_tasks_task_id_ready_check_get(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet, GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Evaluate the taskset's ready requirements against the task's latest version.

Informational: the Ready click is not blocked server-side.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.get_task_ready_check_v2_tasks_task_id_ready_check_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_task_ready_check_v2_tasks_task_id_ready_check_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet](hud/models/unions/response_get_task_ready_check_v2_tasks_task_id_ready_check_get.py), [GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody](hud/errors/get_task_ready_check_v2_tasks_task_id_ready_check_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet](hud/models/unions/response_get_task_ready_check_v2_tasks_task_id_ready_check_get.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody](hud/errors/get_task_ready_check_v2_tasks_task_id_ready_check_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task_traces_v2_tasks_task_id_traces_get(task_id: UUID, *, limit: int | None = 20, offset: int | None = 0, task_version_id: UUID | None = None, model_id: UUID | None = None, exclude_training: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseTaskTrace, GetTaskTracesV2TasksTaskIdTracesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the task's traces, newest first, optionally for one version or model.

Callers without scoped access to the task receive traces from public jobs only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.get_task_traces_v2_tasks_task_id_traces_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTaskTrace
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskTracesV2TasksTaskIdTracesGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_task_traces_v2_tasks_task_id_traces_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTaskTrace
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskTracesV2TasksTaskIdTracesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>task_version_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>model_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>exclude_training</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseTaskTrace](hud/models/paginated_response_task_trace.py), [GetTaskTracesV2TasksTaskIdTracesGetErrorBody](hud/errors/get_task_traces_v2_tasks_task_id_traces_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseTaskTrace](hud/models/paginated_response_task_trace.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTaskTracesV2TasksTaskIdTracesGetErrorBody](hud/errors/get_task_traces_v2_tasks_task_id_traces_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_task_version_v2_tasks_task_id_versions_version_id_get(task_id: UUID, version_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskWithVersionResponse, GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Task plus one of its versions, by version id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.get_task_version_v2_tasks_task_id_versions_version_id_get(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskWithVersionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.get_task_version_v2_tasks_task_id_versions_version_id_get(
    UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskWithVersionResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>version_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TaskWithVersionResponse](hud/models/task_with_version_response.py), [GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody](hud/errors/get_task_version_v2_tasks_task_id_versions_version_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskWithVersionResponse](hud/models/task_with_version_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody](hud/errors/get_task_version_v2_tasks_task_id_versions_version_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(task_id: UUID, comment_id: UUID, body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskCommentItem, UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Edit one of the caller's task comments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    UpdateTaskCommentRequest(body="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskCommentItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"),
    UUID("00000000-0000-0000-0000-000000000000"),
    UpdateTaskCommentRequest(body="some example string"),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskCommentItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>comment_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateTaskCommentRequest](hud/models/update_task_comment_request.py) \| [UpdateTaskCommentRequestDict](hud/models/update_task_comment_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TaskCommentItem](hud/models/task_comment_item.py), [UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody](hud/errors/update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskCommentItem](hud/models/task_comment_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody](hud/errors/update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_tasks_v2_tasks_upload_post(body: TaskUploadRequest | TaskUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TaskUploadResponse, UploadTasksV2TasksUploadPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk-upload tasks into a taskset, creating the taskset if needed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasks.with_raw_response.upload_tasks_v2_tasks_upload_post(
    TaskUploadRequest(tasks=[TaskUploadItem(name="some example string")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadTasksV2TasksUploadPostErrorBody
```

**Async**

```python
result = await async_client.tasks.with_raw_response.upload_tasks_v2_tasks_upload_post(
    TaskUploadRequest(tasks=[TaskUploadItem(name="some example string")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TaskUploadResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UploadTasksV2TasksUploadPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TaskUploadRequest](hud/models/task_upload_request.py) \| [TaskUploadRequestDict](hud/models/task_upload_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TaskUploadResponse](hud/models/task_upload_response.py), [UploadTasksV2TasksUploadPostErrorBody](hud/errors/upload_tasks_v2_tasks_upload_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TaskUploadResponse](hud/models/task_upload_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UploadTasksV2TasksUploadPostErrorBody](hud/errors/upload_tasks_v2_tasks_upload_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Teams

> Source: [Teams](hud/apis/teams.py)

<details>
<summary><code>def invite_team_members_v2_team_invitations_post(body: TeamInviteRequest | TeamInviteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamInviteResponse, InviteTeamMembersV2TeamInvitationsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Invite email addresses to the caller's team; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.teams.with_raw_response.invite_team_members_v2_team_invitations_post(
    TeamInviteRequest(emails=["user@example.com"], role=Role.ADMIN)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamInviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InviteTeamMembersV2TeamInvitationsPostErrorBody
```

**Async**

```python
result = await async_client.teams.with_raw_response.invite_team_members_v2_team_invitations_post(
    TeamInviteRequest(emails=["user@example.com"], role=Role.ADMIN)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamInviteResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type InviteTeamMembersV2TeamInvitationsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamInviteRequest](hud/models/team_invite_request.py) \| [TeamInviteRequestDict](hud/models/team_invite_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TeamInviteResponse](hud/models/team_invite_response.py), [InviteTeamMembersV2TeamInvitationsPostErrorBody](hud/errors/invite_team_members_v2_team_invitations_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamInviteResponse](hud/models/team_invite_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[InviteTeamMembersV2TeamInvitationsPostErrorBody](hud/errors/invite_team_members_v2_team_invitations_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 502, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_team_invitations_v2_team_invitations_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamInvitationsResponse, ListTeamInvitationsV2TeamInvitationsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's pending invitations; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.teams.with_raw_response.list_team_invitations_v2_team_invitations_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamInvitationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTeamInvitationsV2TeamInvitationsGetErrorBody
```

**Async**

```python
result = await async_client.teams.with_raw_response.list_team_invitations_v2_team_invitations_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamInvitationsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTeamInvitationsV2TeamInvitationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TeamInvitationsResponse](hud/models/team_invitations_response.py), [ListTeamInvitationsV2TeamInvitationsGetErrorBody](hud/errors/list_team_invitations_v2_team_invitations_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamInvitationsResponse](hud/models/team_invitations_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListTeamInvitationsV2TeamInvitationsGetErrorBody](hud/errors/list_team_invitations_v2_team_invitations_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 502, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_team_members_v2_team_members_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamMembersResponse, ListTeamMembersV2TeamMembersGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the members of the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.teams.with_raw_response.list_team_members_v2_team_members_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTeamMembersV2TeamMembersGetErrorBody
```

**Async**

```python
result = await async_client.teams.with_raw_response.list_team_members_v2_team_members_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamMembersResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTeamMembersV2TeamMembersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TeamMembersResponse](hud/models/team_members_response.py), [ListTeamMembersV2TeamMembersGetErrorBody](hud/errors/list_team_members_v2_team_members_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamMembersResponse](hud/models/team_members_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListTeamMembersV2TeamMembersGetErrorBody](hud/errors/list_team_members_v2_team_members_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def remove_team_members_v2_team_members_batch_remove_post(body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamMemberBatchResponse, RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove other members from the caller's team and revoke their API keys; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.teams.with_raw_response.remove_team_members_v2_team_members_batch_remove_post(
    TeamMemberRemoveRequest(membership_ids=[1])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamMemberBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody
```

**Async**

```python
result = await async_client.teams.with_raw_response.remove_team_members_v2_team_members_batch_remove_post(
    TeamMemberRemoveRequest(membership_ids=[1])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamMemberBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamMemberRemoveRequest](hud/models/team_member_remove_request.py) \| [TeamMemberRemoveRequestDict](hud/models/team_member_remove_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TeamMemberBatchResponse](hud/models/team_member_batch_response.py), [RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody](hud/errors/remove_team_members_v2_team_members_batch_remove_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamMemberBatchResponse](hud/models/team_member_batch_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody](hud/errors/remove_team_members_v2_team_members_batch_remove_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 502, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def revoke_team_invitations_v2_team_invitations_batch_revoke_post(body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamInvitationRevokeResponse, RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revoke pending invitations to the caller's team; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.teams.with_raw_response.revoke_team_invitations_v2_team_invitations_batch_revoke_post(
    TeamInvitationRevokeRequest(invitation_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamInvitationRevokeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody
```

**Async**

```python
result = await async_client.teams.with_raw_response.revoke_team_invitations_v2_team_invitations_batch_revoke_post(
    TeamInvitationRevokeRequest(invitation_ids=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamInvitationRevokeResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamInvitationRevokeRequest](hud/models/team_invitation_revoke_request.py) \| [TeamInvitationRevokeRequestDict](hud/models/team_invitation_revoke_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TeamInvitationRevokeResponse](hud/models/team_invitation_revoke_response.py), [RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody](hud/errors/revoke_team_invitations_v2_team_invitations_batch_revoke_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamInvitationRevokeResponse](hud/models/team_invitation_revoke_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody](hud/errors/revoke_team_invitations_v2_team_invitations_batch_revoke_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 502, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_team_member_roles_v2_team_members_batch_role_post(body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TeamMemberBatchResponse, UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set the role of other members of the caller's team; admin only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.teams.with_raw_response.update_team_member_roles_v2_team_members_batch_role_post(
    TeamMemberRoleUpdateRequest(membership_ids=[1], role=Role.ADMIN)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamMemberBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody
```

**Async**

```python
result = await async_client.teams.with_raw_response.update_team_member_roles_v2_team_members_batch_role_post(
    TeamMemberRoleUpdateRequest(membership_ids=[1], role=Role.ADMIN)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TeamMemberBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TeamMemberRoleUpdateRequest](hud/models/team_member_role_update_request.py) \| [TeamMemberRoleUpdateRequestDict](hud/models/team_member_role_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TeamMemberBatchResponse](hud/models/team_member_batch_response.py), [UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody](hud/errors/update_team_member_roles_v2_team_members_batch_role_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TeamMemberBatchResponse](hud/models/team_member_batch_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody](hud/errors/update_team_member_roles_v2_team_members_batch_role_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 502, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Traces

> Source: [Traces](hud/apis/traces.py)

<details>
<summary><code>def batch_validate_traces_v2_trace_batch_validate_post(body: TraceBatchValidateRequest | TraceBatchValidateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceBatchValidateResponse, BatchValidateTracesV2TraceBatchValidatePostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mark a batch of traces as valid or invalid for leaderboard calculations.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.batch_validate_traces_v2_trace_batch_validate_post(
    TraceBatchValidateRequest(trace_ids=[UUID("00000000-0000-0000-0000-000000000000")], is_valid=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceBatchValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchValidateTracesV2TraceBatchValidatePostErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.batch_validate_traces_v2_trace_batch_validate_post(
    TraceBatchValidateRequest(trace_ids=[UUID("00000000-0000-0000-0000-000000000000")], is_valid=True)
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceBatchValidateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchValidateTracesV2TraceBatchValidatePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TraceBatchValidateRequest](hud/models/trace_batch_validate_request.py) \| [TraceBatchValidateRequestDict](hud/models/trace_batch_validate_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceBatchValidateResponse](hud/models/trace_batch_validate_response.py), [BatchValidateTracesV2TraceBatchValidatePostErrorBody](hud/errors/batch_validate_traces_v2_trace_batch_validate_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceBatchValidateResponse](hud/models/trace_batch_validate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BatchValidateTracesV2TraceBatchValidatePostErrorBody](hud/errors/batch_validate_traces_v2_trace_batch_validate_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(trace_id: UUID, *, include_spans: bool | None = True, include_env_logs: bool | None = True, include_worker_logs: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceAnalysisContextResponse, GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate context for analysis environments (QA agents).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceAnalysisContextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceAnalysisContextResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>include_spans</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>include_env_logs</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>include_worker_logs</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceAnalysisContextResponse](hud/models/trace_analysis_context_response.py), [GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody](hud/errors/get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceAnalysisContextResponse](hud/models/trace_analysis_context_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody](hud/errors/get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceAnalysisPromptResponse, GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Size-bounded debugging prompt: error, task, trajectory, and log tails.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceAnalysisPromptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceAnalysisPromptResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceAnalysisPromptResponse](hud/models/trace_analysis_prompt_response.py), [GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody](hud/errors/get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceAnalysisPromptResponse](hud/models/trace_analysis_prompt_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody](hud/errors/get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_env_logs_v2_trace_trace_id_env_logs_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvLogsResponse, GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Environment logs — the customer container's stdout/stderr.

Fetched from the daemon's S3 debug bundle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_env_logs_v2_trace_trace_id_env_logs_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_env_logs_v2_trace_trace_id_env_logs_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[EnvLogsResponse](hud/models/env_logs_response.py), [GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody](hud/errors/get_trace_env_logs_v2_trace_trace_id_env_logs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvLogsResponse](hud/models/env_logs_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody](hud/errors/get_trace_env_logs_v2_trace_trace_id_env_logs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_events_v2_trace_trace_id_events_get(trace_id: UUID, *, since_seq: int | None = -1, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceEventsResponse, GetTraceEventsV2TraceTraceIdEventsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Projected, typed view of a trace's telemetry — drives the trace viewer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_events_v2_trace_trace_id_events_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceEventsV2TraceTraceIdEventsGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_events_v2_trace_trace_id_events_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceEventsV2TraceTraceIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>since_seq</code> | <code>int \| None</code> | Return only events derived from spans with sequence > since_seq. Use -1 (default) for the first page, then pass the previous `next_seq` while `has_more` is true. Once caught up, use `latest_seq` for incremental polling.<br>**Default**: <code>-1</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum completed span references to project in this page.<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceEventsResponse](hud/models/trace_events_response.py), [GetTraceEventsV2TraceTraceIdEventsGetErrorBody](hud/errors/get_trace_events_v2_trace_trace_id_events_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceEventsResponse](hud/models/trace_events_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceEventsV2TraceTraceIdEventsGetErrorBody](hud/errors/get_trace_events_v2_trace_trace_id_events_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_info_v2_trace_trace_id_info_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceInfoResponse, GetTraceInfoV2TraceTraceIdInfoGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace with its task, job, and model context for the trace viewer.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_info_v2_trace_trace_id_info_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceInfoResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceInfoV2TraceTraceIdInfoGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_info_v2_trace_trace_id_info_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceInfoResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceInfoV2TraceTraceIdInfoGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceInfoResponse](hud/models/trace_info_response.py), [GetTraceInfoV2TraceTraceIdInfoGetErrorBody](hud/errors/get_trace_info_v2_trace_trace_id_info_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceInfoResponse](hud/models/trace_info_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceInfoV2TraceTraceIdInfoGetErrorBody](hud/errors/get_trace_info_v2_trace_trace_id_info_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_logs_v2_trace_trace_id_logs_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceLogsResponse, GetTraceLogsV2TraceTraceIdLogsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace's captured worker logs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_logs_v2_trace_trace_id_logs_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceLogsV2TraceTraceIdLogsGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_logs_v2_trace_trace_id_logs_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceLogsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceLogsV2TraceTraceIdLogsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceLogsResponse](hud/models/trace_logs_response.py), [GetTraceLogsV2TraceTraceIdLogsGetErrorBody](hud/errors/get_trace_logs_v2_trace_trace_id_logs_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceLogsResponse](hud/models/trace_logs_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceLogsV2TraceTraceIdLogsGetErrorBody](hud/errors/get_trace_logs_v2_trace_trace_id_logs_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_usage_v2_trace_trace_id_usage_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceUsageBreakdown, GetTraceUsageV2TraceTraceIdUsageGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace's compute and inference cost breakdown.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_usage_v2_trace_trace_id_usage_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceUsageBreakdown
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceUsageV2TraceTraceIdUsageGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_usage_v2_trace_trace_id_usage_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceUsageBreakdown
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceUsageV2TraceTraceIdUsageGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceUsageBreakdown](hud/models/trace_usage_breakdown.py), [GetTraceUsageV2TraceTraceIdUsageGetErrorBody](hud/errors/get_trace_usage_v2_trace_trace_id_usage_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceUsageBreakdown](hud/models/trace_usage_breakdown.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceUsageV2TraceTraceIdUsageGetErrorBody](hud/errors/get_trace_usage_v2_trace_trace_id_usage_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_trace_v2_trace_trace_id_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceDetailResponse, GetTraceV2TraceTraceIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a trace by id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.get_trace_v2_trace_trace_id_get(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceV2TraceTraceIdGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.get_trace_v2_trace_trace_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceDetailResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTraceV2TraceTraceIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceDetailResponse](hud/models/trace_detail_response.py), [GetTraceV2TraceTraceIdGetErrorBody](hud/errors/get_trace_v2_trace_trace_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceDetailResponse](hud/models/trace_detail_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTraceV2TraceTraceIdGetErrorBody](hud/errors/get_trace_v2_trace_trace_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_related_traces_v2_trace_trace_id_related_get(trace_id: UUID, kind: RelatedKind1OrStr, *, limit: int | None = 50, scope_to_job: bool | None = False, status: str | None = None, order: RelatedOrder1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[TraceThumbnail], ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Trace thumbnails related to `trace_id`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.list_related_traces_v2_trace_trace_id_related_get(
    UUID("00000000-0000-0000-0000-000000000000"), RelatedKind1.JOB
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[TraceThumbnail]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.list_related_traces_v2_trace_trace_id_related_get(
    UUID("00000000-0000-0000-0000-000000000000"), RelatedKind1.JOB
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[TraceThumbnail]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>kind</code> | <code>[RelatedKind1OrStr](hud/models/enums/related_kind1.py)</code> | `job` (same job_id), `task` (every version of the same task), `recent` (caller's own traces, requires auth), or `discover` (most-recent visible traces overall). |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>scope_to_job</code> | <code>bool \| None</code> | Only meaningful with `kind=task`: further restrict to the source trace's job. Used by the info-card sibling-run squares.<br>**Default**: <code>False</code> |
| <code>status</code> | <code>str \| None</code> | Comma-separated status whitelist applied to `Trace.status` — e.g. `completed` to exclude live/cancelled rows.<br>**Default**: <code>None</code> |
| <code>order</code> | <code>[RelatedOrder1OrStr](hud/models/enums/related_order1.py) \| None</code> | Sort by created_at.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[TraceThumbnail](hud/models/trace_thumbnail.py)&#93;, [ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody](hud/errors/list_related_traces_v2_trace_trace_id_related_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[TraceThumbnail](hud/models/trace_thumbnail.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody](hud/errors/list_related_traces_v2_trace_trace_id_related_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def publish_trace_v2_trace_trace_id_publish_post(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PublishTraceResponse, PublishTraceV2TraceTraceIdPublishPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set `traces.public=true` so anyone with the link can view the trace.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.publish_trace_v2_trace_trace_id_publish_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublishTraceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishTraceV2TraceTraceIdPublishPostErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.publish_trace_v2_trace_trace_id_publish_post(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PublishTraceResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PublishTraceV2TraceTraceIdPublishPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PublishTraceResponse](hud/models/publish_trace_response.py), [PublishTraceV2TraceTraceIdPublishPostErrorBody](hud/errors/publish_trace_v2_trace_trace_id_publish_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PublishTraceResponse](hud/models/publish_trace_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[PublishTraceV2TraceTraceIdPublishPostErrorBody](hud/errors/publish_trace_v2_trace_trace_id_publish_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def unpublish_trace_v2_trace_trace_id_publish_delete(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[StatusResponse, UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set `traces.public=false`; the trace returns to invited-only visibility.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.unpublish_trace_v2_trace_trace_id_publish_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.unpublish_trace_v2_trace_trace_id_publish_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type StatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[StatusResponse](hud/models/status_response.py), [UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody](hud/errors/unpublish_trace_v2_trace_trace_id_publish_delete_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[StatusResponse](hud/models/status_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody](hud/errors/unpublish_trace_v2_trace_trace_id_publish_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_trace_v2_trace_trace_id_patch(trace_id: UUID, body: TraceUpdateRequest | TraceUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceInfoResponse, UpdateTraceV2TraceTraceIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a trace's metadata fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.traces.with_raw_response.update_trace_v2_trace_trace_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), TraceUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceInfoResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTraceV2TraceTraceIdPatchErrorBody
```

**Async**

```python
result = await async_client.traces.with_raw_response.update_trace_v2_trace_trace_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), TraceUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceInfoResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateTraceV2TraceTraceIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[TraceUpdateRequest](hud/models/trace_update_request.py) \| [TraceUpdateRequestDict](hud/models/trace_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceInfoResponse](hud/models/trace_info_response.py), [UpdateTraceV2TraceTraceIdPatchErrorBody](hud/errors/update_trace_v2_trace_trace_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceInfoResponse](hud/models/trace_info_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateTraceV2TraceTraceIdPatchErrorBody](hud/errors/update_trace_v2_trace_trace_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Usage

> Source: [Usage](hud/apis/usage.py)

<details>
<summary><code>def get_environment_usage_v2_environments_usage_get(*, days: int | None = 7, user_id: UUID | None = None, api_key_id: UUID | None = None, status: str | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[EnvironmentUsageResponse, GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the team's environment session usage over a window, with summary and paged sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.usage.with_raw_response.get_environment_usage_v2_environments_usage_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody
```

**Async**

```python
result = await async_client.usage.with_raw_response.get_environment_usage_v2_environments_usage_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type EnvironmentUsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>7</code> |
| <code>user_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_key_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[EnvironmentUsageResponse](hud/models/environment_usage_response.py), [GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody](hud/errors/get_environment_usage_v2_environments_usage_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[EnvironmentUsageResponse](hud/models/environment_usage_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody](hud/errors/get_environment_usage_v2_environments_usage_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_inference_usage_aggregate_v2_usage_inference_get(*, start: RFC3339DateTime | None = None, end: RFC3339DateTime | None = None, bucket_width: BucketWidthOrStr | None = BucketWidth._1D, group_by: list[GroupByOrStr] | None = None, user_id: UUID | None = None, api_key_id: UUID | None = None, byok_credential_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[InferenceUsageAggregateResponse, GetInferenceUsageAggregateV2UsageInferenceGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregate the team's inference usage into time buckets, optionally grouped.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.usage.with_raw_response.get_inference_usage_aggregate_v2_usage_inference_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InferenceUsageAggregateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInferenceUsageAggregateV2UsageInferenceGetErrorBody
```

**Async**

```python
result = await async_client.usage.with_raw_response.get_inference_usage_aggregate_v2_usage_inference_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type InferenceUsageAggregateResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetInferenceUsageAggregateV2UsageInferenceGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>start</code> | <code>RFC3339DateTime \| None</code> | Window start; defaults to end-7d<br>**Default**: <code>None</code> |
| <code>end</code> | <code>RFC3339DateTime \| None</code> | Window end; defaults to now<br>**Default**: <code>None</code> |
| <code>bucket_width</code> | <code>[BucketWidthOrStr](hud/models/enums/bucket_width.py) \| None</code> | Value sent with the request.<br>**Default**: <code>BucketWidth._1D</code> |
| <code>group_by</code> | <code>list&#91;[GroupByOrStr](hud/models/enums/group_by.py)&#93; \| None</code> | Grouping dimensions; repeat the parameter to group by several at once<br>**Default**: <code>None</code> |
| <code>user_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>api_key_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>byok_credential_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[InferenceUsageAggregateResponse](hud/models/inference_usage_aggregate_response.py), [GetInferenceUsageAggregateV2UsageInferenceGetErrorBody](hud/errors/get_inference_usage_aggregate_v2_usage_inference_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[InferenceUsageAggregateResponse](hud/models/inference_usage_aggregate_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetInferenceUsageAggregateV2UsageInferenceGetErrorBody](hud/errors/get_inference_usage_aggregate_v2_usage_inference_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ByokCredentials

> Source: [ByokCredentials](hud/apis/byok_credentials.py)

<details>
<summary><code>def create_byok_credential_v2_byok_credentials_post(body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ByokCredentialItem, CreateByokCredentialV2ByokCredentialsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create or replace a provider credential for one ownership scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.byok_credentials.with_raw_response.create_byok_credential_v2_byok_credentials_post(
    ByokCredentialCreateRequest(provider_id=1, scope=Scope.MEMBER, value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ByokCredentialItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateByokCredentialV2ByokCredentialsPostErrorBody
```

**Async**

```python
result = await async_client.byok_credentials.with_raw_response.create_byok_credential_v2_byok_credentials_post(
    ByokCredentialCreateRequest(provider_id=1, scope=Scope.MEMBER, value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ByokCredentialItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateByokCredentialV2ByokCredentialsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ByokCredentialCreateRequest](hud/models/byok_credential_create_request.py) \| [ByokCredentialCreateRequestDict](hud/models/byok_credential_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ByokCredentialItem](hud/models/byok_credential_item.py), [CreateByokCredentialV2ByokCredentialsPostErrorBody](hud/errors/create_byok_credential_v2_byok_credentials_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ByokCredentialItem](hud/models/byok_credential_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateByokCredentialV2ByokCredentialsPostErrorBody](hud/errors/create_byok_credential_v2_byok_credentials_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_byok_credential_v2_byok_credentials_credential_id_delete(credential_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a BYOK credential and erase its encrypted value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.byok_credentials.with_raw_response.delete_byok_credential_v2_byok_credentials_credential_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody
```

**Async**

```python
result = await async_client.byok_credentials.with_raw_response.delete_byok_credential_v2_byok_credentials_credential_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credential_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody](hud/errors/delete_byok_credential_v2_byok_credentials_credential_id_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody](hud/errors/delete_byok_credential_v2_byok_credentials_credential_id_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_byok_credentials_v2_byok_credentials_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ByokCredentialsListResponse, ListByokCredentialsV2ByokCredentialsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's personal and team BYOK credentials with masked values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.byok_credentials.with_raw_response.list_byok_credentials_v2_byok_credentials_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ByokCredentialsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListByokCredentialsV2ByokCredentialsGetErrorBody
```

**Async**

```python
result = await async_client.byok_credentials.with_raw_response.list_byok_credentials_v2_byok_credentials_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ByokCredentialsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListByokCredentialsV2ByokCredentialsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ByokCredentialsListResponse](hud/models/byok_credentials_list_response.py), [ListByokCredentialsV2ByokCredentialsGetErrorBody](hud/errors/list_byok_credentials_v2_byok_credentials_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ByokCredentialsListResponse](hud/models/byok_credentials_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListByokCredentialsV2ByokCredentialsGetErrorBody](hud/errors/list_byok_credentials_v2_byok_credentials_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_byok_credential_v2_byok_credentials_credential_id_patch(credential_id: UUID, body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ByokCredentialItem, UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rotate a BYOK credential without exposing its plaintext value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.byok_credentials.with_raw_response.update_byok_credential_v2_byok_credentials_credential_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), ByokCredentialUpdateRequest(value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ByokCredentialItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody
```

**Async**

```python
result = await async_client.byok_credentials.with_raw_response.update_byok_credential_v2_byok_credentials_credential_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), ByokCredentialUpdateRequest(value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ByokCredentialItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>credential_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ByokCredentialUpdateRequest](hud/models/byok_credential_update_request.py) \| [ByokCredentialUpdateRequestDict](hud/models/byok_credential_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[ByokCredentialItem](hud/models/byok_credential_item.py), [UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody](hud/errors/update_byok_credential_v2_byok_credentials_credential_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ByokCredentialItem](hud/models/byok_credential_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody](hud/errors/update_byok_credential_v2_byok_credentials_credential_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EnvVars

> Source: [EnvVars](hud/apis/env_vars.py)

<details>
<summary><code>def batch_replace_env_vars_v2_env_vars_batch_put(body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistryEnvVarBatchResponse, BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Replace a registry's full env var set with the given variables.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.env_vars.with_raw_response.batch_replace_env_vars_v2_env_vars_batch_put(
    RegistryEnvVarBatchRequest(
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        variables=[RegistryEnvVarBatchItem(name="some example string", value="some example string")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody
```

**Async**

```python
result = await async_client.env_vars.with_raw_response.batch_replace_env_vars_v2_env_vars_batch_put(
    RegistryEnvVarBatchRequest(
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        variables=[RegistryEnvVarBatchItem(name="some example string", value="some example string")],
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegistryEnvVarBatchRequest](hud/models/registry_env_var_batch_request.py) \| [RegistryEnvVarBatchRequestDict](hud/models/registry_env_var_batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistryEnvVarBatchResponse](hud/models/registry_env_var_batch_response.py), [BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody](hud/errors/batch_replace_env_vars_v2_env_vars_batch_put_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistryEnvVarBatchResponse](hud/models/registry_env_var_batch_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody](hud/errors/batch_replace_env_vars_v2_env_vars_batch_put_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def check_env_var_completeness_v2_env_vars_check_post(body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistryEnvVarCheckResponse, CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether each registry has all env vars its manifest requires.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.env_vars.with_raw_response.check_env_var_completeness_v2_env_vars_check_post(
    RegistryEnvVarCheckRequest(registry_ids=[UUID("00000000-0000-0000-0000-000000000000")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarCheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody
```

**Async**

```python
result = await async_client.env_vars.with_raw_response.check_env_var_completeness_v2_env_vars_check_post(
    RegistryEnvVarCheckRequest(registry_ids=[UUID("00000000-0000-0000-0000-000000000000")])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarCheckResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegistryEnvVarCheckRequest](hud/models/registry_env_var_check_request.py) \| [RegistryEnvVarCheckRequestDict](hud/models/registry_env_var_check_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistryEnvVarCheckResponse](hud/models/registry_env_var_check_response.py), [CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody](hud/errors/check_env_var_completeness_v2_env_vars_check_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistryEnvVarCheckResponse](hud/models/registry_env_var_check_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody](hud/errors/check_env_var_completeness_v2_env_vars_check_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_env_var_v2_env_vars_post(body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistryEnvVarItem, CreateEnvVarV2EnvVarsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set a registry env var, creating it or updating an existing one by name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.env_vars.with_raw_response.create_env_var_v2_env_vars_post(
    RegistryEnvVarCreateRequest(
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        name="some example string",
        value="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvVarV2EnvVarsPostErrorBody
```

**Async**

```python
result = await async_client.env_vars.with_raw_response.create_env_var_v2_env_vars_post(
    RegistryEnvVarCreateRequest(
        registry_id=UUID("00000000-0000-0000-0000-000000000000"),
        name="some example string",
        value="some example string",
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateEnvVarV2EnvVarsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegistryEnvVarCreateRequest](hud/models/registry_env_var_create_request.py) \| [RegistryEnvVarCreateRequestDict](hud/models/registry_env_var_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistryEnvVarItem](hud/models/registry_env_var_item.py), [CreateEnvVarV2EnvVarsPostErrorBody](hud/errors/create_env_var_v2_env_vars_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistryEnvVarItem](hud/models/registry_env_var_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateEnvVarV2EnvVarsPostErrorBody](hud/errors/create_env_var_v2_env_vars_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_env_var_v2_env_vars_var_id_delete(var_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a registry env var.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.env_vars.with_raw_response.delete_env_var_v2_env_vars_var_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody
```

**Async**

```python
result = await async_client.env_vars.with_raw_response.delete_env_var_v2_env_vars_var_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>var_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody](hud/errors/delete_env_var_v2_env_vars_var_id_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody](hud/errors/delete_env_var_v2_env_vars_var_id_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_env_vars_v2_env_vars_get(registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistryEnvVarsListResponse, ListEnvVarsV2EnvVarsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List a registry's runtime env vars with masked values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.env_vars.with_raw_response.list_env_vars_v2_env_vars_get(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnvVarsV2EnvVarsGetErrorBody
```

**Async**

```python
result = await async_client.env_vars.with_raw_response.list_env_vars_v2_env_vars_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListEnvVarsV2EnvVarsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>registry_id</code> | <code>UUID</code> | Registry to list env vars for. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistryEnvVarsListResponse](hud/models/registry_env_vars_list_response.py), [ListEnvVarsV2EnvVarsGetErrorBody](hud/errors/list_env_vars_v2_env_vars_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistryEnvVarsListResponse](hud/models/registry_env_vars_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListEnvVarsV2EnvVarsGetErrorBody](hud/errors/list_env_vars_v2_env_vars_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_env_var_v2_env_vars_var_id_patch(var_id: UUID, body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RegistryEnvVarItem, UpdateEnvVarV2EnvVarsVarIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a registry env var's value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.env_vars.with_raw_response.update_env_var_v2_env_vars_var_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), RegistryEnvVarUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEnvVarV2EnvVarsVarIdPatchErrorBody
```

**Async**

```python
result = await async_client.env_vars.with_raw_response.update_env_var_v2_env_vars_var_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), RegistryEnvVarUpdateRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RegistryEnvVarItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateEnvVarV2EnvVarsVarIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>var_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[RegistryEnvVarUpdateRequest](hud/models/registry_env_var_update_request.py) \| [RegistryEnvVarUpdateRequestDict](hud/models/registry_env_var_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RegistryEnvVarItem](hud/models/registry_env_var_item.py), [UpdateEnvVarV2EnvVarsVarIdPatchErrorBody](hud/errors/update_env_var_v2_env_vars_var_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RegistryEnvVarItem](hud/models/registry_env_var_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateEnvVarV2EnvVarsVarIdPatchErrorBody](hud/errors/update_env_var_v2_env_vars_var_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## MemberSecrets

> Source: [MemberSecrets](hud/apis/member_secrets.py)

<details>
<summary><code>def create_member_secret_v2_member_secrets_post(body: MemberSecretCreateRequest | MemberSecretCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MemberSecretItem, CreateMemberSecretV2MemberSecretsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Set a personal secret, creating it or updating an existing one by name.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.member_secrets.with_raw_response.create_member_secret_v2_member_secrets_post(
    MemberSecretCreateRequest(name="some example string", value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberSecretItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMemberSecretV2MemberSecretsPostErrorBody
```

**Async**

```python
result = await async_client.member_secrets.with_raw_response.create_member_secret_v2_member_secrets_post(
    MemberSecretCreateRequest(name="some example string", value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberSecretItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateMemberSecretV2MemberSecretsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[MemberSecretCreateRequest](hud/models/member_secret_create_request.py) \| [MemberSecretCreateRequestDict](hud/models/member_secret_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[MemberSecretItem](hud/models/member_secret_item.py), [CreateMemberSecretV2MemberSecretsPostErrorBody](hud/errors/create_member_secret_v2_member_secrets_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MemberSecretItem](hud/models/member_secret_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateMemberSecretV2MemberSecretsPostErrorBody](hud/errors/create_member_secret_v2_member_secrets_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_member_secret_v2_member_secrets_secret_id_delete(secret_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a personal secret.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.member_secrets.with_raw_response.delete_member_secret_v2_member_secrets_secret_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody
```

**Async**

```python
result = await async_client.member_secrets.with_raw_response.delete_member_secret_v2_member_secrets_secret_id_delete(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secret_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;None, [DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody](hud/errors/delete_member_secret_v2_member_secrets_secret_id_delete_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody](hud/errors/delete_member_secret_v2_member_secrets_secret_id_delete_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_member_secrets_v2_member_secrets_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MemberSecretsListResponse, ListMemberSecretsV2MemberSecretsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller's personal secrets with masked values.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.member_secrets.with_raw_response.list_member_secrets_v2_member_secrets_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberSecretsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMemberSecretsV2MemberSecretsGetErrorBody
```

**Async**

```python
result = await async_client.member_secrets.with_raw_response.list_member_secrets_v2_member_secrets_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberSecretsListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListMemberSecretsV2MemberSecretsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[MemberSecretsListResponse](hud/models/member_secrets_list_response.py), [ListMemberSecretsV2MemberSecretsGetErrorBody](hud/errors/list_member_secrets_v2_member_secrets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MemberSecretsListResponse](hud/models/member_secrets_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListMemberSecretsV2MemberSecretsGetErrorBody](hud/errors/list_member_secrets_v2_member_secrets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_member_secret_v2_member_secrets_secret_id_patch(secret_id: UUID, body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MemberSecretItem, UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a personal secret's value.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.member_secrets.with_raw_response.update_member_secret_v2_member_secrets_secret_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), MemberSecretUpdateRequest(value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberSecretItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody
```

**Async**

```python
result = await async_client.member_secrets.with_raw_response.update_member_secret_v2_member_secrets_secret_id_patch(
    UUID("00000000-0000-0000-0000-000000000000"), MemberSecretUpdateRequest(value="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type MemberSecretItem
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>secret_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[MemberSecretUpdateRequest](hud/models/member_secret_update_request.py) \| [MemberSecretUpdateRequestDict](hud/models/member_secret_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[MemberSecretItem](hud/models/member_secret_item.py), [UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody](hud/errors/update_member_secret_v2_member_secrets_secret_id_patch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[MemberSecretItem](hud/models/member_secret_item.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody](hud/errors/update_member_secret_v2_member_secrets_secret_id_patch_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Qa

> Source: [Qa](hud/apis/qa.py)

<details>
<summary><code>def list_qa_checks_v2_qa_checks_get(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QaCheckListResponse, ListQaChecksV2QaChecksGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the QA checks available to run, each with the subject type it judges.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa.with_raw_response.list_qa_checks_v2_qa_checks_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaCheckListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQaChecksV2QaChecksGetErrorBody
```

**Async**

```python
result = await async_client.qa.with_raw_response.list_qa_checks_v2_qa_checks_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaCheckListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQaChecksV2QaChecksGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[QaCheckListResponse](hud/models/qa_check_list_response.py), [ListQaChecksV2QaChecksGetErrorBody](hud/errors/list_qa_checks_v2_qa_checks_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QaCheckListResponse](hud/models/qa_check_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListQaChecksV2QaChecksGetErrorBody](hud/errors/list_qa_checks_v2_qa_checks_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_qa_results_v2_qa_results_get(*, trace_ids: list[UUID] | None = None, task_ids: list[UUID] | None = None, include_history: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QaResultListResponse, ListQaResultsV2QaResultsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the result in effect for every QA check on the given evaluation traces or tasks.

A task's results in effect are those on its current version. With
`include_history`, list every result instead, newest first, across a
task's versions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa.with_raw_response.list_qa_results_v2_qa_results_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaResultListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQaResultsV2QaResultsGetErrorBody
```

**Async**

```python
result = await async_client.qa.with_raw_response.list_qa_results_v2_qa_results_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaResultListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQaResultsV2QaResultsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>trace_ids</code> | <code>list&#91;UUID&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>task_ids</code> | <code>list&#91;UUID&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_history</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[QaResultListResponse](hud/models/qa_result_list_response.py), [ListQaResultsV2QaResultsGetErrorBody](hud/errors/list_qa_results_v2_qa_results_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QaResultListResponse](hud/models/qa_result_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListQaResultsV2QaResultsGetErrorBody](hud/errors/list_qa_results_v2_qa_results_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_qa_checks_v2_qa_runs_post(body: QaRunCreateRequest | QaRunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QaResultListResponse, RunQaChecksV2QaRunsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Run QA checks against completed evaluation traces or tasks as one run; returns each subject's result of each check.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa.with_raw_response.run_qa_checks_v2_qa_runs_post(
    QaRunCreateRequest(check_keys=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaResultListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunQaChecksV2QaRunsPostErrorBody
```

**Async**

```python
result = await async_client.qa.with_raw_response.run_qa_checks_v2_qa_runs_post(
    QaRunCreateRequest(check_keys=["some example string"])
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaResultListResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunQaChecksV2QaRunsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[QaRunCreateRequest](hud/models/qa_run_create_request.py) \| [QaRunCreateRequestDict](hud/models/qa_run_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[QaResultListResponse](hud/models/qa_result_list_response.py), [RunQaChecksV2QaRunsPostErrorBody](hud/errors/run_qa_checks_v2_qa_runs_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QaResultListResponse](hud/models/qa_result_list_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RunQaChecksV2QaRunsPostErrorBody](hud/errors/run_qa_checks_v2_qa_runs_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## QaAgents

> Source: [QaAgents](hud/apis/qa_agents.py)

<details>
<summary><code>def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(result_id: UUID, *, since_seq: int | None = -1, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TraceEventsResponse, GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return an output-only QA rollout without evaluator prompts or private inputs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa_agents.with_raw_response.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody
```

**Async**

```python
result = await async_client.qa_agents.with_raw_response.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TraceEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>result_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>since_seq</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>-1</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>100</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TraceEventsResponse](hud/models/trace_events_response.py), [GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody](hud/errors/get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TraceEventsResponse](hud/models/trace_events_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody](hud/errors/get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_qa_agent_v2_qa_agents_agent_id_get(agent_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[QaAgentResponse, GetQaAgentV2QaAgentsAgentIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a QA agent by id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa_agents.with_raw_response.get_qa_agent_v2_qa_agents_agent_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaAgentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQaAgentV2QaAgentsAgentIdGetErrorBody
```

**Async**

```python
result = await async_client.qa_agents.with_raw_response.get_qa_agent_v2_qa_agents_agent_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type QaAgentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetQaAgentV2QaAgentsAgentIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>agent_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[QaAgentResponse](hud/models/qa_agent_response.py), [GetQaAgentV2QaAgentsAgentIdGetErrorBody](hud/errors/get_qa_agent_v2_qa_agents_agent_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[QaAgentResponse](hud/models/qa_agent_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetQaAgentV2QaAgentsAgentIdGetErrorBody](hud/errors/get_qa_agent_v2_qa_agents_agent_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_qa_agents_v2_qa_agents_get(*, subject_type: QaAgentSubjectTypeOrStr | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseQaAgentResponse, ListQaAgentsV2QaAgentsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the caller team's QA agents.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa_agents.with_raw_response.list_qa_agents_v2_qa_agents_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseQaAgentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQaAgentsV2QaAgentsGetErrorBody
```

**Async**

```python
result = await async_client.qa_agents.with_raw_response.list_qa_agents_v2_qa_agents_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseQaAgentResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListQaAgentsV2QaAgentsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject_type</code> | <code>[QaAgentSubjectTypeOrStr](hud/models/enums/qa_agent_subject_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseQaAgentResponse](hud/models/paginated_response_qa_agent_response.py), [ListQaAgentsV2QaAgentsGetErrorBody](hud/errors/list_qa_agents_v2_qa_agents_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseQaAgentResponse](hud/models/paginated_response_qa_agent_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListQaAgentsV2QaAgentsGetErrorBody](hud/errors/list_qa_agents_v2_qa_agents_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(*, subject_type: CheckSubjectTypeOrStr | None = None, subject_ids: list[UUID] | None = None, result_ids: list[UUID] | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[QaAgentResourceResultDetail], ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List resource QA results by subject or by exact result IDs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa_agents.with_raw_response.list_resource_qa_agent_results_v2_qa_agents_results_resources_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QaAgentResourceResultDetail]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody
```

**Async**

```python
result = await async_client.qa_agents.with_raw_response.list_resource_qa_agent_results_v2_qa_agents_results_resources_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QaAgentResourceResultDetail]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subject_type</code> | <code>[CheckSubjectTypeOrStr](hud/models/enums/check_subject_type.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>subject_ids</code> | <code>list&#91;UUID&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>result_ids</code> | <code>list&#91;UUID&#93; \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[QaAgentResourceResultDetail](hud/models/qa_agent_resource_result_detail.py)&#93;, [ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody](hud/errors/list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[QaAgentResourceResultDetail](hud/models/qa_agent_resource_result_detail.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody](hud/errors/list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(agent_id: UUID, body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[QaAgentResultResponse], RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Select or launch one QA result for each canonical resource subject.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.qa_agents.with_raw_response.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
    UUID("00000000-0000-0000-0000-000000000000"),
    QaAgentResourceRunRequest(subject_ids=[UUID("00000000-0000-0000-0000-000000000000")]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QaAgentResultResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody
```

**Async**

```python
result = await async_client.qa_agents.with_raw_response.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
    UUID("00000000-0000-0000-0000-000000000000"),
    QaAgentResourceRunRequest(subject_ids=[UUID("00000000-0000-0000-0000-000000000000")]),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type list[QaAgentResultResponse]
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>agent_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[QaAgentResourceRunRequest](hud/models/qa_agent_resource_run_request.py) \| [QaAgentResourceRunRequestDict](hud/models/qa_agent_resource_run_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;list&#91;[QaAgentResultResponse](hud/models/qa_agent_result_response.py)&#93;, [RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody](hud/errors/run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>list&#91;[QaAgentResultResponse](hud/models/qa_agent_result_response.py)&#93;</code> -- Successful Response

**On `Failure`**: `error` is <code>[RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody](hud/errors/run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Rollouts

> Source: [Rollouts](hud/apis/rollouts.py)

<details>
<summary><code>def cancel_job_v2_rollouts_cancel_job_post(body: CancelJobRequest | CancelJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CancelJobResponse, CancelJobV2RolloutsCancelJobPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel all non-terminal traces in a job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.rollouts.with_raw_response.cancel_job_v2_rollouts_cancel_job_post(
    CancelJobRequest(job_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelJobV2RolloutsCancelJobPostErrorBody
```

**Async**

```python
result = await async_client.rollouts.with_raw_response.cancel_job_v2_rollouts_cancel_job_post(
    CancelJobRequest(job_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelJobResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelJobV2RolloutsCancelJobPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelJobRequest](hud/models/cancel_job_request.py) \| [CancelJobRequestDict](hud/models/cancel_job_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[CancelJobResponse](hud/models/cancel_job_response.py), [CancelJobV2RolloutsCancelJobPostErrorBody](hud/errors/cancel_job_v2_rollouts_cancel_job_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CancelJobResponse](hud/models/cancel_job_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CancelJobV2RolloutsCancelJobPostErrorBody](hud/errors/cancel_job_v2_rollouts_cancel_job_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CancelUserJobsResponse, CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel all of the caller's active jobs, reporting per-job cancellation counts.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.rollouts.with_raw_response.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelUserJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody
```

**Async**

```python
result = await async_client.rollouts.with_raw_response.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelUserJobsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[CancelUserJobsResponse](hud/models/cancel_user_jobs_response.py), [CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody](hud/errors/cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CancelUserJobsResponse](hud/models/cancel_user_jobs_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody](hud/errors/cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def cancel_v2_rollouts_cancel_post(body: CancelRequest | CancelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CancelResponse, CancelV2RolloutsCancelPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel a single rollout trace; noop if it already reached a terminal state.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.rollouts.with_raw_response.cancel_v2_rollouts_cancel_post(
    CancelRequest(trace_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelV2RolloutsCancelPostErrorBody
```

**Async**

```python
result = await async_client.rollouts.with_raw_response.cancel_v2_rollouts_cancel_post(
    CancelRequest(trace_id=UUID("00000000-0000-0000-0000-000000000000"))
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CancelResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CancelV2RolloutsCancelPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelRequest](hud/models/cancel_request.py) \| [CancelRequestDict](hud/models/cancel_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[CancelResponse](hud/models/cancel_response.py), [CancelV2RolloutsCancelPostErrorBody](hud/errors/cancel_v2_rollouts_cancel_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CancelResponse](hud/models/cancel_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CancelV2RolloutsCancelPostErrorBody](hud/errors/cancel_v2_rollouts_cancel_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_list_v2_rollouts_run_list_post(body: RolloutRunListRequest | RolloutRunListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RolloutBatchResponse, RunListV2RolloutsRunListPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Launch a batch of hosted rollouts under one job.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.rollouts.with_raw_response.run_list_v2_rollouts_run_list_post(RolloutRunListRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolloutBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunListV2RolloutsRunListPostErrorBody
```

**Async**

```python
result = await async_client.rollouts.with_raw_response.run_list_v2_rollouts_run_list_post(RolloutRunListRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolloutBatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunListV2RolloutsRunListPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RolloutRunListRequest](hud/models/rollout_run_list_request.py) \| [RolloutRunListRequestDict](hud/models/rollout_run_list_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RolloutBatchResponse](hud/models/rollout_batch_response.py), [RunListV2RolloutsRunListPostErrorBody](hud/errors/run_list_v2_rollouts_run_list_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RolloutBatchResponse](hud/models/rollout_batch_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RunListV2RolloutsRunListPostErrorBody](hud/errors/run_list_v2_rollouts_run_list_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_v2_rollouts_run_post(body: RolloutRunRequest | RolloutRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RolloutResponse, RunV2RolloutsRunPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Launch a single hosted rollout and return its trace and job identifiers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.rollouts.with_raw_response.run_v2_rollouts_run_post(
    RolloutRunRequest(
        task_version_id=UUID("00000000-0000-0000-0000-000000000000"),
        model_id=UUID("00000000-0000-0000-0000-000000000000"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolloutResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunV2RolloutsRunPostErrorBody
```

**Async**

```python
result = await async_client.rollouts.with_raw_response.run_v2_rollouts_run_post(
    RolloutRunRequest(
        task_version_id=UUID("00000000-0000-0000-0000-000000000000"),
        model_id=UUID("00000000-0000-0000-0000-000000000000"),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolloutResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunV2RolloutsRunPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RolloutRunRequest](hud/models/rollout_run_request.py) \| [RolloutRunRequestDict](hud/models/rollout_run_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RolloutResponse](hud/models/rollout_response.py), [RunV2RolloutsRunPostErrorBody](hud/errors/run_v2_rollouts_run_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RolloutResponse](hud/models/rollout_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[RunV2RolloutsRunPostErrorBody](hud/errors/run_v2_rollouts_run_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def submit_v2_rollouts_submit_post(body: RolloutSubmitRequest | RolloutSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[RolloutResponse, SubmitV2RolloutsSubmitPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

v6 SDK hosted rollout: env/task reference + agent spec under the SDK's job/trace identity.

The SDK polls GET /v2/trace/{trace_id} to completion.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.rollouts.with_raw_response.submit_v2_rollouts_submit_post(
    RolloutSubmitRequest(
        trace_id=UUID("00000000-0000-0000-0000-000000000000"),
        job_id=UUID("00000000-0000-0000-0000-000000000000"),
        env="some example string",
        task="some example string",
        agent=SubmittedAgentSpec(type_=TypeHudPlatformRolloutsApi.CLAUDE, config={}),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolloutResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitV2RolloutsSubmitPostErrorBody
```

**Async**

```python
result = await async_client.rollouts.with_raw_response.submit_v2_rollouts_submit_post(
    RolloutSubmitRequest(
        trace_id=UUID("00000000-0000-0000-0000-000000000000"),
        job_id=UUID("00000000-0000-0000-0000-000000000000"),
        env="some example string",
        task="some example string",
        agent=SubmittedAgentSpec(type_=TypeHudPlatformRolloutsApi.CLAUDE, config={}),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type RolloutResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SubmitV2RolloutsSubmitPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RolloutSubmitRequest](hud/models/rollout_submit_request.py) \| [RolloutSubmitRequestDict](hud/models/rollout_submit_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[RolloutResponse](hud/models/rollout_response.py), [SubmitV2RolloutsSubmitPostErrorBody](hud/errors/submit_v2_rollouts_submit_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[RolloutResponse](hud/models/rollout_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[SubmitV2RolloutsSubmitPostErrorBody](hud/errors/submit_v2_rollouts_submit_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Tasksets

> Source: [Tasksets](hud/apis/tasksets.py)

<details>
<summary><code>def create_taskset_v2_tasksets_post(body: TasksetCreateRequest | TasksetCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksetResponse, CreateTasksetV2TasksetsPostErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a taskset for the caller's team.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasksets.with_raw_response.create_taskset_v2_tasksets_post(
    TasksetCreateRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTasksetV2TasksetsPostErrorBody
```

**Async**

```python
result = await async_client.tasksets.with_raw_response.create_taskset_v2_tasksets_post(
    TasksetCreateRequest(name="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateTasksetV2TasksetsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TasksetCreateRequest](hud/models/taskset_create_request.py) \| [TasksetCreateRequestDict](hud/models/taskset_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TasksetResponse](hud/models/taskset_response.py), [CreateTasksetV2TasksetsPostErrorBody](hud/errors/create_taskset_v2_tasksets_post_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksetResponse](hud/models/taskset_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[CreateTasksetV2TasksetsPostErrorBody](hud/errors/create_taskset_v2_tasksets_post_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def export_taskset_v2_tasksets_taskset_id_export_get(taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksetExportResponse, ExportTasksetV2TasksetsTasksetIdExportGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a taskset by UUID in the task wire format.

Same shape as the by-name lookup, and the only fetch path for cross-team
public tasksets.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasksets.with_raw_response.export_taskset_v2_tasksets_taskset_id_export_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportTasksetV2TasksetsTasksetIdExportGetErrorBody
```

**Async**

```python
result = await async_client.tasksets.with_raw_response.export_taskset_v2_tasksets_taskset_id_export_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExportTasksetV2TasksetsTasksetIdExportGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskset_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TasksetExportResponse](hud/models/taskset_export_response.py), [ExportTasksetV2TasksetsTasksetIdExportGetErrorBody](hud/errors/export_taskset_v2_tasksets_taskset_id_export_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksetExportResponse](hud/models/taskset_export_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ExportTasksetV2TasksetsTasksetIdExportGetErrorBody](hud/errors/export_taskset_v2_tasksets_taskset_id_export_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_taskset_by_name_v2_tasksets_by_name_name_get(name: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksetExportResponse, GetTasksetByNameV2TasksetsByNameNameGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Resolve a taskset by name and return its tasks in the task wire format.

Returns the latest version per task — the read-side counterpart of
`POST /tasks/upload`.

Scoped to the caller's team. Cross-team public tasksets are accessible
by UUID (`GET /tasksets/{id}/export`) only — name uniqueness is per team,
so resolving by name across teams would be ambiguous.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasksets.with_raw_response.get_taskset_by_name_v2_tasksets_by_name_name_get("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTasksetByNameV2TasksetsByNameNameGetErrorBody
```

**Async**

```python
result = await async_client.tasksets.with_raw_response.get_taskset_by_name_v2_tasksets_by_name_name_get(
    "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetExportResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTasksetByNameV2TasksetsByNameNameGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>name</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TasksetExportResponse](hud/models/taskset_export_response.py), [GetTasksetByNameV2TasksetsByNameNameGetErrorBody](hud/errors/get_taskset_by_name_v2_tasksets_by_name_name_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksetExportResponse](hud/models/taskset_export_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTasksetByNameV2TasksetsByNameNameGetErrorBody](hud/errors/get_taskset_by_name_v2_tasksets_by_name_name_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_taskset_v2_tasksets_taskset_id_get(taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TasksetResponse, GetTasksetV2TasksetsTasksetIdGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get a taskset by id.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasksets.with_raw_response.get_taskset_v2_tasksets_taskset_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTasksetV2TasksetsTasksetIdGetErrorBody
```

**Async**

```python
result = await async_client.tasksets.with_raw_response.get_taskset_v2_tasksets_taskset_id_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TasksetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetTasksetV2TasksetsTasksetIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskset_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[TasksetResponse](hud/models/taskset_response.py), [GetTasksetV2TasksetsTasksetIdGetErrorBody](hud/errors/get_taskset_v2_tasksets_taskset_id_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TasksetResponse](hud/models/taskset_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[GetTasksetV2TasksetsTasksetIdGetErrorBody](hud/errors/get_taskset_v2_tasksets_taskset_id_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(taskset_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseTaskResponse, ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List live task definitions, including for public-only viewers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasksets.with_raw_response.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTaskResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody
```

**Async**

```python
result = await async_client.tasksets.with_raw_response.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
    UUID("00000000-0000-0000-0000-000000000000")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTaskResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>taskset_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseTaskResponse](hud/models/paginated_response_task_response.py), [ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody](hud/errors/list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseTaskResponse](hud/models/paginated_response_task_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody](hud/errors/list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_tasksets_v2_tasksets_get(*, limit: int | None = 50, offset: int | None = 0, search: str | None = None, public_only: bool | None = False, featured_only: bool | None = False, owner_only: bool | None = False, min_tasks: int | None = None, registry_id: UUID | None = None, scenario_id: UUID | None = None, project_id: UUID | None = None, sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED, request_options: RequestOptionsOrDict | None = None) -> ApiResult[PaginatedResponseTasksetResponse, ListTasksetsV2TasksetsGetErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List tasksets visible to the caller, with search, ownership, and sort filters.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.tasksets.with_raw_response.list_tasksets_v2_tasksets_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTasksetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTasksetsV2TasksetsGetErrorBody
```

**Async**

```python
result = await async_client.tasksets.with_raw_response.list_tasksets_v2_tasksets_get()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type PaginatedResponseTasksetResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListTasksetsV2TasksetsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>search</code> | <code>str \| None</code> | ILIKE-match on taskset name<br>**Default**: <code>None</code> |
| <code>public_only</code> | <code>bool \| None</code> | Only public tasksets; anonymous browsing requires this or featured_only<br>**Default**: <code>False</code> |
| <code>featured_only</code> | <code>bool \| None</code> | Only platform-featured tasksets, which are always public<br>**Default**: <code>False</code> |
| <code>owner_only</code> | <code>bool \| None</code> | Only tasksets owned by the caller's membership; ignored when public_only=True<br>**Default**: <code>False</code> |
| <code>min_tasks</code> | <code>int \| None</code> | Only tasksets with at least this many live tasks<br>**Default**: <code>None</code> |
| <code>registry_id</code> | <code>UUID \| None</code> | Only tasksets with a live task whose latest version uses a scenario on this registry<br>**Default**: <code>None</code> |
| <code>scenario_id</code> | <code>UUID \| None</code> | Only tasksets with a live task whose latest version uses this scenario<br>**Default**: <code>None</code> |
| <code>project_id</code> | <code>UUID \| None</code> | Only tasksets contained by this Project; omitted lists every Project<br>**Default**: <code>None</code> |
| <code>sort_by</code> | <code>[SortByHudPlatformTasksetsApiOrStr](hud/models/enums/sort_by_hud_platform_tasksets_api.py) \| None</code> | Sort order: starred (caller's starred first), date (updated_at DESC), name (A-Z), stars (star_count DESC), tasks (task_count DESC)<br>**Default**: <code>SortByHudPlatformTasksetsApi.STARRED</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](hud/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](hud/core/results.py)&#91;[PaginatedResponseTasksetResponse](hud/models/paginated_response_taskset_response.py), [ListTasksetsV2TasksetsGetErrorBody](hud/errors/list_tasksets_v2_tasksets_get_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[PaginatedResponseTasksetResponse](hud/models/paginated_response_taskset_response.py)</code> -- Successful Response

**On `Failure`**: `error` is <code>[ListTasksetsV2TasksetsGetErrorBody](hud/errors/list_tasksets_v2_tasksets_get_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 404, 409, 429, 503 | <code>[ErrorResponse](hud/models/error_response.py)</code> |
| 422 | <code>[HttpValidationError](hud/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](hud/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

