# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [HudClient](hud/client.py)

## Builds

> Source: [Builds](hud/apis/builds.py)

<details>
<summary><code>def build_status_v2_builds_build_id_status_get(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> BuildResponse</code></summary>

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
try:
    response = client.builds.build_status_v2_builds_build_id_status_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuildStatusV2BuildsBuildIdStatusGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.build_status_v2_builds_build_id_status_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BuildStatusV2BuildsBuildIdStatusGetErrorBody
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

**OnSuccess**: <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[BuildStatusV2BuildsBuildIdStatusGetErrorBody](hud/errors/build_status_v2_builds_build_id_status_get_error.py)&#93;</code>

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
<summary><code>def cancel_build_v2_builds_build_id_cancel_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> BuildResponse</code></summary>

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
try:
    response = client.builds.cancel_build_v2_builds_build_id_cancel_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelBuildV2BuildsBuildIdCancelPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.cancel_build_v2_builds_build_id_cancel_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelBuildV2BuildsBuildIdCancelPostErrorBody
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

**OnSuccess**: <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CancelBuildV2BuildsBuildIdCancelPostErrorBody](hud/errors/cancel_build_v2_builds_build_id_cancel_post_error.py)&#93;</code>

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
<summary><code>def download_build_source_v2_builds_build_id_source_download_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> BuildSourceDownloadResponse</code></summary>

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
try:
    response = client.builds.download_build_source_v2_builds_build_id_source_download_get(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type BuildSourceDownloadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.download_build_source_v2_builds_build_id_source_download_get(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type BuildSourceDownloadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody
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

**OnSuccess**: <code>[BuildSourceDownloadResponse](hud/models/build_source_download_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DownloadBuildSourceV2BuildsBuildIdSourceDownloadGetErrorBody](hud/errors/download_build_source_v2_builds_build_id_source_download_get_error.py)&#93;</code>

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
<summary><code>def download_build_workspace_v2_builds_build_id_workspace_download_get(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.builds.download_build_workspace_v2_builds_build_id_workspace_download_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.download_build_workspace_v2_builds_build_id_workspace_download_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DownloadBuildWorkspaceV2BuildsBuildIdWorkspaceDownloadGetErrorBody](hud/errors/download_build_workspace_v2_builds_build_id_workspace_download_get_error.py)&#93;</code>

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
<summary><code>def list_build_source_v2_builds_build_id_source_get(build_id: UUID, *, path: str | None = "", cursor: str | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> BuildSourceListResponse</code></summary>

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
try:
    response = client.builds.list_build_source_v2_builds_build_id_source_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildSourceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildSourceV2BuildsBuildIdSourceGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.list_build_source_v2_builds_build_id_source_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildSourceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildSourceV2BuildsBuildIdSourceGetErrorBody
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

**OnSuccess**: <code>[BuildSourceListResponse](hud/models/build_source_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListBuildSourceV2BuildsBuildIdSourceGetErrorBody](hud/errors/list_build_source_v2_builds_build_id_source_get_error.py)&#93;</code>

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
<summary><code>def list_build_workspace_v2_builds_build_id_workspace_get(build_id: UUID, *, path: str | None = "", cursor: str | None = None, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> BuildWorkspaceListResponse</code></summary>

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
try:
    response = client.builds.list_build_workspace_v2_builds_build_id_workspace_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildWorkspaceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.list_build_workspace_v2_builds_build_id_workspace_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildWorkspaceListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody
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

**OnSuccess**: <code>[BuildWorkspaceListResponse](hud/models/build_workspace_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListBuildWorkspaceV2BuildsBuildIdWorkspaceGetErrorBody](hud/errors/list_build_workspace_v2_builds_build_id_workspace_get_error.py)&#93;</code>

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
<summary><code>def list_builds_v2_builds_get(registry_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> BuildListResponse</code></summary>

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
try:
    response = client.builds.list_builds_v2_builds_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BuildListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsV2BuildsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.list_builds_v2_builds_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BuildListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBuildsV2BuildsGetErrorBody
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

**OnSuccess**: <code>[BuildListResponse](hud/models/build_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListBuildsV2BuildsGetErrorBody](hud/errors/list_builds_v2_builds_get_error.py)&#93;</code>

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
<summary><code>def lookup_builds_v2_builds_lookup_post(body: BuildLookupRequest | BuildLookupRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BuildLookupResponse</code></summary>

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
try:
    response = client.builds.lookup_builds_v2_builds_lookup_post(
        BuildLookupRequest(content_digests=["some example string"])
    )
    # TODO: Handle 'response' of type BuildLookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LookupBuildsV2BuildsLookupPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.lookup_builds_v2_builds_lookup_post(
        BuildLookupRequest(content_digests=["some example string"])
    )
    # TODO: Handle 'response' of type BuildLookupResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type LookupBuildsV2BuildsLookupPostErrorBody
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

**OnSuccess**: <code>[BuildLookupResponse](hud/models/build_lookup_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[LookupBuildsV2BuildsLookupPostErrorBody](hud/errors/lookup_builds_v2_builds_lookup_post_error.py)&#93;</code>

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
<summary><code>def preview_build_source_v2_builds_build_id_source_preview_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> BuildSourcePreviewResponse</code></summary>

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
try:
    response = client.builds.preview_build_source_v2_builds_build_id_source_preview_get(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type BuildSourcePreviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.preview_build_source_v2_builds_build_id_source_preview_get(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type BuildSourcePreviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody
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

**OnSuccess**: <code>[BuildSourcePreviewResponse](hud/models/build_source_preview_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[PreviewBuildSourceV2BuildsBuildIdSourcePreviewGetErrorBody](hud/errors/preview_build_source_v2_builds_build_id_source_preview_get_error.py)&#93;</code>

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
<summary><code>def preview_build_workspace_v2_builds_build_id_workspace_preview_get(build_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> BuildSourcePreviewResponse</code></summary>

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
try:
    response = client.builds.preview_build_workspace_v2_builds_build_id_workspace_preview_get(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type BuildSourcePreviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.preview_build_workspace_v2_builds_build_id_workspace_preview_get(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
    # TODO: Handle 'response' of type BuildSourcePreviewResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody
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

**OnSuccess**: <code>[BuildSourcePreviewResponse](hud/models/build_source_preview_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[PreviewBuildWorkspaceV2BuildsBuildIdWorkspacePreviewGetErrorBody](hud/errors/preview_build_workspace_v2_builds_build_id_workspace_preview_get_error.py)&#93;</code>

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
<summary><code>def register_build_source_v2_builds_register_post(body: BuildRegisterRequest | BuildRegisterRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BuildRegisterResponse</code></summary>

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
try:
    response = client.builds.register_build_source_v2_builds_register_post(
        BuildRegisterRequest(build_id=UUID("00000000-0000-0000-0000-000000000000"))
    )
    # TODO: Handle 'response' of type BuildRegisterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegisterBuildSourceV2BuildsRegisterPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.register_build_source_v2_builds_register_post(
        BuildRegisterRequest(build_id=UUID("00000000-0000-0000-0000-000000000000"))
    )
    # TODO: Handle 'response' of type BuildRegisterResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RegisterBuildSourceV2BuildsRegisterPostErrorBody
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

**OnSuccess**: <code>[BuildRegisterResponse](hud/models/build_register_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RegisterBuildSourceV2BuildsRegisterPostErrorBody](hud/errors/register_build_source_v2_builds_register_post_error.py)&#93;</code>

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
<summary><code>def reindex_build_source_v2_builds_build_id_source_reindex_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.builds.reindex_build_source_v2_builds_build_id_source_reindex_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody
```

**Async**

```python
try:
    await async_client.builds.reindex_build_source_v2_builds_build_id_source_reindex_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ReindexBuildSourceV2BuildsBuildIdSourceReindexPostErrorBody](hud/errors/reindex_build_source_v2_builds_build_id_source_reindex_post_error.py)&#93;</code>

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
<summary><code>def set_latest_build_v2_builds_build_id_set_latest_post(build_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> BuildResponse</code></summary>

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
try:
    response = client.builds.set_latest_build_v2_builds_build_id_set_latest_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.set_latest_build_v2_builds_build_id_set_latest_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody
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

**OnSuccess**: <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[SetLatestBuildV2BuildsBuildIdSetLatestPostErrorBody](hud/errors/set_latest_build_v2_builds_build_id_set_latest_post_error.py)&#93;</code>

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
<summary><code>def trigger_build_v2_builds_trigger_direct_post(body: BuildTriggerRequest | BuildTriggerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BuildResponse</code></summary>

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
try:
    response = client.builds.trigger_build_v2_builds_trigger_direct_post(BuildTriggerRequest())
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBuildV2BuildsTriggerDirectPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.trigger_build_v2_builds_trigger_direct_post(BuildTriggerRequest())
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBuildV2BuildsTriggerDirectPostErrorBody
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

**OnSuccess**: <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[TriggerBuildV2BuildsTriggerDirectPostErrorBody](hud/errors/trigger_build_v2_builds_trigger_direct_post_error.py)&#93;</code>

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
<summary><code>def trigger_build_v2_builds_trigger_post(body: BuildTriggerRequest | BuildTriggerRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BuildResponse</code></summary>

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
try:
    response = client.builds.trigger_build_v2_builds_trigger_post(BuildTriggerRequest())
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBuildV2BuildsTriggerPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.trigger_build_v2_builds_trigger_post(BuildTriggerRequest())
    # TODO: Handle 'response' of type BuildResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TriggerBuildV2BuildsTriggerPostErrorBody
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

**OnSuccess**: <code>[BuildResponse](hud/models/build_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[TriggerBuildV2BuildsTriggerPostErrorBody](hud/errors/trigger_build_v2_builds_trigger_post_error.py)&#93;</code>

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
<summary><code>def upload_url_v2_builds_upload_url_post(*, request_options: RequestOptionsOrDict | None = None) -> BuildUploadUrlResponse</code></summary>

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
try:
    response = client.builds.upload_url_v2_builds_upload_url_post()
    # TODO: Handle 'response' of type BuildUploadUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadUrlV2BuildsUploadUrlPostErrorBody
```

**Async**

```python
try:
    response = await async_client.builds.upload_url_v2_builds_upload_url_post()
    # TODO: Handle 'response' of type BuildUploadUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadUrlV2BuildsUploadUrlPostErrorBody
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

**OnSuccess**: <code>[BuildUploadUrlResponse](hud/models/build_upload_url_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UploadUrlV2BuildsUploadUrlPostErrorBody](hud/errors/upload_url_v2_builds_upload_url_post_error.py)&#93;</code>

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
<summary><code>def create_team_qc_pipeline_v2_checks_pipelines_post(body: QcPipelineCreateRequest | QcPipelineCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> QcPipelineRegistrationResponse</code></summary>

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
try:
    response = client.checks.create_team_qc_pipeline_v2_checks_pipelines_post(
        QcPipelineCreateRequest(
            asset_type="some example string",
            key="some example string",
            label="some example string",
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            scenario_name="some example string",
        ),
    )
    # TODO: Handle 'response' of type QcPipelineRegistrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody
```

**Async**

```python
try:
    response = await async_client.checks.create_team_qc_pipeline_v2_checks_pipelines_post(
        QcPipelineCreateRequest(
            asset_type="some example string",
            key="some example string",
            label="some example string",
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            scenario_name="some example string",
        ),
    )
    # TODO: Handle 'response' of type QcPipelineRegistrationResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody
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

**OnSuccess**: <code>[QcPipelineRegistrationResponse](hud/models/qc_pipeline_registration_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateTeamQcPipelineV2ChecksPipelinesPostErrorBody](hud/errors/create_team_qc_pipeline_v2_checks_pipelines_post_error.py)&#93;</code>

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
<summary><code>def list_platform_check_runs_v2_checks_runs_get(subject_type: CheckSubjectTypeOrStr, subject_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> list[CheckRunResponse]</code></summary>

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
try:
    response = client.checks.list_platform_check_runs_v2_checks_runs_get(
        CheckSubjectType.ENVIRONMENT, UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[CheckRunResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlatformCheckRunsV2ChecksRunsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.checks.list_platform_check_runs_v2_checks_runs_get(
        CheckSubjectType.ENVIRONMENT, UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[CheckRunResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlatformCheckRunsV2ChecksRunsGetErrorBody
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

**OnSuccess**: <code>list&#91;[CheckRunResponse](hud/models/check_run_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListPlatformCheckRunsV2ChecksRunsGetErrorBody](hud/errors/list_platform_check_runs_v2_checks_runs_get_error.py)&#93;</code>

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
<summary><code>def list_platform_checks_v2_checks_get(*, subject_type: CheckSubjectTypeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[CheckDefinitionResponse]</code></summary>

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
try:
    response = client.checks.list_platform_checks_v2_checks_get()
    # TODO: Handle 'response' of type list[CheckDefinitionResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlatformChecksV2ChecksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.checks.list_platform_checks_v2_checks_get()
    # TODO: Handle 'response' of type list[CheckDefinitionResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListPlatformChecksV2ChecksGetErrorBody
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

**OnSuccess**: <code>list&#91;[CheckDefinitionResponse](hud/models/check_definition_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListPlatformChecksV2ChecksGetErrorBody](hud/errors/list_platform_checks_v2_checks_get_error.py)&#93;</code>

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
<summary><code>def list_team_qc_pipelines_v2_checks_pipelines_get(*, request_options: RequestOptionsOrDict | None = None) -> list[QcPipelineRegistrationResponse]</code></summary>

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
try:
    response = client.checks.list_team_qc_pipelines_v2_checks_pipelines_get()
    # TODO: Handle 'response' of type list[QcPipelineRegistrationResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.checks.list_team_qc_pipelines_v2_checks_pipelines_get()
    # TODO: Handle 'response' of type list[QcPipelineRegistrationResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody
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

**OnSuccess**: <code>list&#91;[QcPipelineRegistrationResponse](hud/models/qc_pipeline_registration_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListTeamQcPipelinesV2ChecksPipelinesGetErrorBody](hud/errors/list_team_qc_pipelines_v2_checks_pipelines_get_error.py)&#93;</code>

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
<summary><code>def run_platform_check_v2_checks_check_key_runs_post(check_key: str, body: CheckRunRequest | CheckRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CheckRunResponse</code></summary>

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
try:
    response = client.checks.run_platform_check_v2_checks_check_key_runs_post(
        "some example string",
        CheckRunRequest(
            subject_type=CheckSubjectType.ENVIRONMENT, subject_id=UUID("00000000-0000-0000-0000-000000000000")
        ),
    )
    # TODO: Handle 'response' of type CheckRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.checks.run_platform_check_v2_checks_check_key_runs_post(
        "some example string",
        CheckRunRequest(
            subject_type=CheckSubjectType.ENVIRONMENT, subject_id=UUID("00000000-0000-0000-0000-000000000000")
        ),
    )
    # TODO: Handle 'response' of type CheckRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody
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

**OnSuccess**: <code>[CheckRunResponse](hud/models/check_run_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RunPlatformCheckV2ChecksCheckKeyRunsPostErrorBody](hud/errors/run_platform_check_v2_checks_check_key_runs_post_error.py)&#93;</code>

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
<summary><code>def post_completion_v2_completions_post(body: CompletionRequest | CompletionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CompletionResponse</code></summary>

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
try:
    response = client.completions.post_completion_v2_completions_post(
        CompletionRequest(
            model="some example string",
            messages=[ChatMessage(role="some example string", content="some example string")],
        ),
    )
    # TODO: Handle 'response' of type CompletionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCompletionV2CompletionsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.completions.post_completion_v2_completions_post(
        CompletionRequest(
            model="some example string",
            messages=[ChatMessage(role="some example string", content="some example string")],
        ),
    )
    # TODO: Handle 'response' of type CompletionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostCompletionV2CompletionsPostErrorBody
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

**OnSuccess**: <code>[CompletionResponse](hud/models/completion_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[PostCompletionV2CompletionsPostErrorBody](hud/errors/post_completion_v2_completions_post_error.py)&#93;</code>

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
<summary><code>def complete_data_file_v2_data_file_id_complete_post(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> DataFileResponse</code></summary>

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
try:
    response = client.data.complete_data_file_v2_data_file_id_complete_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type DataFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompleteDataFileV2DataFileIdCompletePostErrorBody
```

**Async**

```python
try:
    response = await async_client.data.complete_data_file_v2_data_file_id_complete_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type DataFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CompleteDataFileV2DataFileIdCompletePostErrorBody
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

**OnSuccess**: <code>[DataFileResponse](hud/models/data_file_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CompleteDataFileV2DataFileIdCompletePostErrorBody](hud/errors/complete_data_file_v2_data_file_id_complete_post_error.py)&#93;</code>

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
<summary><code>def create_data_file_v2_data_post(body: DataFileCreateRequest | DataFileCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DataFileUploadResponse</code></summary>

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
try:
    response = client.data.create_data_file_v2_data_post(
        DataFileCreateRequest(filename="some example string", size_bytes=1)
    )
    # TODO: Handle 'response' of type DataFileUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDataFileV2DataPostErrorBody
```

**Async**

```python
try:
    response = await async_client.data.create_data_file_v2_data_post(
        DataFileCreateRequest(filename="some example string", size_bytes=1)
    )
    # TODO: Handle 'response' of type DataFileUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateDataFileV2DataPostErrorBody
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

**OnSuccess**: <code>[DataFileUploadResponse](hud/models/data_file_upload_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateDataFileV2DataPostErrorBody](hud/errors/create_data_file_v2_data_post_error.py)&#93;</code>

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
<summary><code>def delete_data_file_v2_data_file_id_delete(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.data.delete_data_file_v2_data_file_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDataFileV2DataFileIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.data.delete_data_file_v2_data_file_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDataFileV2DataFileIdDeleteErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteDataFileV2DataFileIdDeleteErrorBody](hud/errors/delete_data_file_v2_data_file_id_delete_error.py)&#93;</code>

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
<summary><code>def delete_data_files_v2_data_delete_post(body: DataFileIdsRequest | DataFileIdsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.data.delete_data_files_v2_data_delete_post(
        DataFileIdsRequest(file_ids=[UUID("00000000-0000-0000-0000-000000000000")])
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDataFilesV2DataDeletePostErrorBody
```

**Async**

```python
try:
    await async_client.data.delete_data_files_v2_data_delete_post(
        DataFileIdsRequest(file_ids=[UUID("00000000-0000-0000-0000-000000000000")])
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteDataFilesV2DataDeletePostErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteDataFilesV2DataDeletePostErrorBody](hud/errors/delete_data_files_v2_data_delete_post_error.py)&#93;</code>

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
<summary><code>def download_data_file_v2_data_file_id_download_get(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> DataFileDownloadResponse</code></summary>

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
try:
    response = client.data.download_data_file_v2_data_file_id_download_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type DataFileDownloadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadDataFileV2DataFileIdDownloadGetErrorBody
```

**Async**

```python
try:
    response = await async_client.data.download_data_file_v2_data_file_id_download_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type DataFileDownloadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DownloadDataFileV2DataFileIdDownloadGetErrorBody
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

**OnSuccess**: <code>[DataFileDownloadResponse](hud/models/data_file_download_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DownloadDataFileV2DataFileIdDownloadGetErrorBody](hud/errors/download_data_file_v2_data_file_id_download_get_error.py)&#93;</code>

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
<summary><code>def get_data_file_storage_usage_v2_data_usage_get(*, request_options: RequestOptionsOrDict | None = None) -> DataFileStorageUsageResponse</code></summary>

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
try:
    response = client.data.get_data_file_storage_usage_v2_data_usage_get()
    # TODO: Handle 'response' of type DataFileStorageUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDataFileStorageUsageV2DataUsageGetErrorBody
```

**Async**

```python
try:
    response = await async_client.data.get_data_file_storage_usage_v2_data_usage_get()
    # TODO: Handle 'response' of type DataFileStorageUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDataFileStorageUsageV2DataUsageGetErrorBody
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

**OnSuccess**: <code>[DataFileStorageUsageResponse](hud/models/data_file_storage_usage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetDataFileStorageUsageV2DataUsageGetErrorBody](hud/errors/get_data_file_storage_usage_v2_data_usage_get_error.py)&#93;</code>

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
<summary><code>def get_data_file_v2_data_file_id_get(file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> DataFileResponse</code></summary>

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
try:
    response = client.data.get_data_file_v2_data_file_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type DataFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDataFileV2DataFileIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.data.get_data_file_v2_data_file_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type DataFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetDataFileV2DataFileIdGetErrorBody
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

**OnSuccess**: <code>[DataFileResponse](hud/models/data_file_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetDataFileV2DataFileIdGetErrorBody](hud/errors/get_data_file_v2_data_file_id_get_error.py)&#93;</code>

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
<summary><code>def list_data_file_groups_v2_data_groups_get(*, request_options: RequestOptionsOrDict | None = None) -> DataFileGroupListResponse</code></summary>

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
try:
    response = client.data.list_data_file_groups_v2_data_groups_get()
    # TODO: Handle 'response' of type DataFileGroupListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDataFileGroupsV2DataGroupsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.data.list_data_file_groups_v2_data_groups_get()
    # TODO: Handle 'response' of type DataFileGroupListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDataFileGroupsV2DataGroupsGetErrorBody
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

**OnSuccess**: <code>[DataFileGroupListResponse](hud/models/data_file_group_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListDataFileGroupsV2DataGroupsGetErrorBody](hud/errors/list_data_file_groups_v2_data_groups_get_error.py)&#93;</code>

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
<summary><code>def list_data_files_v2_data_get(*, scope: Scope3OrStr | None = Scope3.ALL, membership_id: int | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> DataFileListResponse</code></summary>

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
try:
    response = client.data.list_data_files_v2_data_get()
    # TODO: Handle 'response' of type DataFileListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDataFilesV2DataGetErrorBody
```

**Async**

```python
try:
    response = await async_client.data.list_data_files_v2_data_get()
    # TODO: Handle 'response' of type DataFileListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListDataFilesV2DataGetErrorBody
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

**OnSuccess**: <code>[DataFileListResponse](hud/models/data_file_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListDataFilesV2DataGetErrorBody](hud/errors/list_data_files_v2_data_get_error.py)&#93;</code>

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
<summary><code>def update_data_file_v2_data_file_id_patch(file_id: UUID, body: DataFileUpdateRequest | DataFileUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DataFileResponse</code></summary>

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
try:
    response = client.data.update_data_file_v2_data_file_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), DataFileUpdateRequest(filename="some example string")
    )
    # TODO: Handle 'response' of type DataFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDataFileV2DataFileIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.data.update_data_file_v2_data_file_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), DataFileUpdateRequest(filename="some example string")
    )
    # TODO: Handle 'response' of type DataFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateDataFileV2DataFileIdPatchErrorBody
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

**OnSuccess**: <code>[DataFileResponse](hud/models/data_file_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateDataFileV2DataFileIdPatchErrorBody](hud/errors/update_data_file_v2_data_file_id_patch_error.py)&#93;</code>

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
<summary><code>def cancel_import_v2_imports_import_id_cancel_post(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ImportResponse</code></summary>

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
try:
    response = client.imports.cancel_import_v2_imports_import_id_cancel_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelImportV2ImportsImportIdCancelPostErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.cancel_import_v2_imports_import_id_cancel_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelImportV2ImportsImportIdCancelPostErrorBody
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

**OnSuccess**: <code>[ImportResponse](hud/models/import_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CancelImportV2ImportsImportIdCancelPostErrorBody](hud/errors/cancel_import_v2_imports_import_id_cancel_post_error.py)&#93;</code>

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
<summary><code>def create_import_upload_v2_imports_uploads_post(body: ImportUploadRequest | ImportUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DataFileUploadResponse</code></summary>

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
try:
    response = client.imports.create_import_upload_v2_imports_uploads_post(
        ImportUploadRequest(filename="some example string", size_bytes=1)
    )
    # TODO: Handle 'response' of type DataFileUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateImportUploadV2ImportsUploadsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.create_import_upload_v2_imports_uploads_post(
        ImportUploadRequest(filename="some example string", size_bytes=1)
    )
    # TODO: Handle 'response' of type DataFileUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateImportUploadV2ImportsUploadsPostErrorBody
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

**OnSuccess**: <code>[DataFileUploadResponse](hud/models/data_file_upload_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateImportUploadV2ImportsUploadsPostErrorBody](hud/errors/create_import_upload_v2_imports_uploads_post_error.py)&#93;</code>

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
<summary><code>def estimate_import_v2_imports_estimate_get(format_: FormatOrStr, file_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ImportEstimateResponse</code></summary>

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
try:
    response = client.imports.estimate_import_v2_imports_estimate_get(
        Format.HARBOR, UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ImportEstimateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EstimateImportV2ImportsEstimateGetErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.estimate_import_v2_imports_estimate_get(
        Format.HARBOR, UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ImportEstimateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EstimateImportV2ImportsEstimateGetErrorBody
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

**OnSuccess**: <code>[ImportEstimateResponse](hud/models/import_estimate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[EstimateImportV2ImportsEstimateGetErrorBody](hud/errors/estimate_import_v2_imports_estimate_get_error.py)&#93;</code>

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
<summary><code>def get_import_report_v2_imports_import_id_report_get(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> Any</code></summary>

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
try:
    response = client.imports.get_import_report_v2_imports_import_id_report_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetImportReportV2ImportsImportIdReportGetErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.get_import_report_v2_imports_import_id_report_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type Any
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetImportReportV2ImportsImportIdReportGetErrorBody
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

**OnSuccess**: <code>Any</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetImportReportV2ImportsImportIdReportGetErrorBody](hud/errors/get_import_report_v2_imports_import_id_report_get_error.py)&#93;</code>

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
<summary><code>def get_import_v2_imports_import_id_get(import_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ImportResponse</code></summary>

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
try:
    response = client.imports.get_import_v2_imports_import_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetImportV2ImportsImportIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.get_import_v2_imports_import_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetImportV2ImportsImportIdGetErrorBody
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

**OnSuccess**: <code>[ImportResponse](hud/models/import_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetImportV2ImportsImportIdGetErrorBody](hud/errors/get_import_v2_imports_import_id_get_error.py)&#93;</code>

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
<summary><code>def list_import_formats_v2_imports_formats_get(*, request_options: RequestOptionsOrDict | None = None) -> ImportFormatListResponse</code></summary>

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
try:
    response = client.imports.list_import_formats_v2_imports_formats_get()
    # TODO: Handle 'response' of type ImportFormatListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListImportFormatsV2ImportsFormatsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.list_import_formats_v2_imports_formats_get()
    # TODO: Handle 'response' of type ImportFormatListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListImportFormatsV2ImportsFormatsGetErrorBody
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

**OnSuccess**: <code>[ImportFormatListResponse](hud/models/import_format_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListImportFormatsV2ImportsFormatsGetErrorBody](hud/errors/list_import_formats_v2_imports_formats_get_error.py)&#93;</code>

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
<summary><code>def list_imports_v2_imports_get(*, format_: FormatOrStr | None = None, taskset_id: UUID | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ImportListResponse</code></summary>

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
try:
    response = client.imports.list_imports_v2_imports_get()
    # TODO: Handle 'response' of type ImportListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListImportsV2ImportsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.list_imports_v2_imports_get()
    # TODO: Handle 'response' of type ImportListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListImportsV2ImportsGetErrorBody
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

**OnSuccess**: <code>[ImportListResponse](hud/models/import_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListImportsV2ImportsGetErrorBody](hud/errors/list_imports_v2_imports_get_error.py)&#93;</code>

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
<summary><code>def start_import_v2_imports_post(body: ImportCreateRequest | ImportCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ImportResponse</code></summary>

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
try:
    response = client.imports.start_import_v2_imports_post(
        ImportCreateRequest(
            file_id=UUID("00000000-0000-0000-0000-000000000000"),
            taskset_id=UUID("00000000-0000-0000-0000-000000000000"),
        ),
    )
    # TODO: Handle 'response' of type ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartImportV2ImportsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.imports.start_import_v2_imports_post(
        ImportCreateRequest(
            file_id=UUID("00000000-0000-0000-0000-000000000000"),
            taskset_id=UUID("00000000-0000-0000-0000-000000000000"),
        ),
    )
    # TODO: Handle 'response' of type ImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StartImportV2ImportsPostErrorBody
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

**OnSuccess**: <code>[ImportResponse](hud/models/import_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[StartImportV2ImportsPostErrorBody](hud/errors/start_import_v2_imports_post_error.py)&#93;</code>

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
<summary><code>def get_inference_usage_v2_inference_usage_get(*, days: int | None = 7, user_id: UUID | None = None, api_key_id: UUID | None = None, byok_credential_id: UUID | None = None, model_id: UUID | None = None, request_type: str | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> InferenceUsageResponse</code></summary>

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
try:
    response = client.inference.get_inference_usage_v2_inference_usage_get()
    # TODO: Handle 'response' of type InferenceUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInferenceUsageV2InferenceUsageGetErrorBody
```

**Async**

```python
try:
    response = await async_client.inference.get_inference_usage_v2_inference_usage_get()
    # TODO: Handle 'response' of type InferenceUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInferenceUsageV2InferenceUsageGetErrorBody
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

**OnSuccess**: <code>[InferenceUsageResponse](hud/models/inference_usage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetInferenceUsageV2InferenceUsageGetErrorBody](hud/errors/get_inference_usage_v2_inference_usage_get_error.py)&#93;</code>

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
<summary><code>def list_instances_v2_instance_get(registry_id: UUID, *, include_terminated: bool | None = False, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> ActiveInstancesResponse</code></summary>

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
try:
    response = client.instances.list_instances_v2_instance_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ActiveInstancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInstancesV2InstanceGetErrorBody
```

**Async**

```python
try:
    response = await async_client.instances.list_instances_v2_instance_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ActiveInstancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListInstancesV2InstanceGetErrorBody
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

**OnSuccess**: <code>[ActiveInstancesResponse](hud/models/active_instances_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListInstancesV2InstanceGetErrorBody](hud/errors/list_instances_v2_instance_get_error.py)&#93;</code>

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
<summary><code>def stop_instances_v2_instance_stop_post(body: StopInstancesRequest | StopInstancesRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> StopInstancesResponse</code></summary>

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
try:
    response = client.instances.stop_instances_v2_instance_stop_post(
        StopInstancesRequest(
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            instance_ids=[UUID("00000000-0000-0000-0000-000000000000")],
        ),
    )
    # TODO: Handle 'response' of type StopInstancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopInstancesV2InstanceStopPostErrorBody
```

**Async**

```python
try:
    response = await async_client.instances.stop_instances_v2_instance_stop_post(
        StopInstancesRequest(
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            instance_ids=[UUID("00000000-0000-0000-0000-000000000000")],
        ),
    )
    # TODO: Handle 'response' of type StopInstancesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type StopInstancesV2InstanceStopPostErrorBody
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

**OnSuccess**: <code>[StopInstancesResponse](hud/models/stop_instances_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[StopInstancesV2InstanceStopPostErrorBody](hud/errors/stop_instances_v2_instance_stop_post_error.py)&#93;</code>

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
<summary><code>def enrich_jobs_v2_jobs_enrich_post(body: list[UUID], *, request_options: RequestOptionsOrDict | None = None) -> EnrichJobsResponse</code></summary>

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
try:
    response = client.jobs.enrich_jobs_v2_jobs_enrich_post([UUID("00000000-0000-0000-0000-000000000000")])
    # TODO: Handle 'response' of type EnrichJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichJobsV2JobsEnrichPostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.enrich_jobs_v2_jobs_enrich_post([UUID("00000000-0000-0000-0000-000000000000")])
    # TODO: Handle 'response' of type EnrichJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type EnrichJobsV2JobsEnrichPostErrorBody
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

**OnSuccess**: <code>[EnrichJobsResponse](hud/models/enrich_jobs_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[EnrichJobsV2JobsEnrichPostErrorBody](hud/errors/enrich_jobs_v2_jobs_enrich_post_error.py)&#93;</code>

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
<summary><code>def finish_imported_job_v2_jobs_import_job_id_finish_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> JobImportFinishResponse</code></summary>

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
try:
    response = client.jobs.finish_imported_job_v2_jobs_import_job_id_finish_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobImportFinishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FinishImportedJobV2JobsImportJobIdFinishPostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.finish_imported_job_v2_jobs_import_job_id_finish_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobImportFinishResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FinishImportedJobV2JobsImportJobIdFinishPostErrorBody
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

**OnSuccess**: <code>[JobImportFinishResponse](hud/models/job_import_finish_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[FinishImportedJobV2JobsImportJobIdFinishPostErrorBody](hud/errors/finish_imported_job_v2_jobs_import_job_id_finish_post_error.py)&#93;</code>

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
<summary><code>def finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(job_id: UUID, trace_id: UUID, body: JobImportTraceResult | JobImportTraceResultDict, *, request_options: RequestOptionsOrDict | None = None) -> JobImportTraceResultResponse</code></summary>

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
try:
    response = client.jobs.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        JobImportTraceResult(status=StatusHudPlatformJobsApi.COMPLETED),
    )
    # TODO: Handle 'response' of type JobImportTraceResultResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        JobImportTraceResult(status=StatusHudPlatformJobsApi.COMPLETED),
    )
    # TODO: Handle 'response' of type JobImportTraceResultResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody
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

**OnSuccess**: <code>[JobImportTraceResultResponse](hud/models/job_import_trace_result_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[FinishImportedTraceV2JobsImportJobIdTracesTraceIdFinishPostErrorBody](hud/errors/finish_imported_trace_v2_jobs_import_job_id_traces_trace_id_finish_post_error.py)&#93;</code>

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
<summary><code>def get_job_chart_data_v2_jobs_job_id_chart_data_get(job_id: UUID, *, limit: int | None = 5000, request_options: RequestOptionsOrDict | None = None) -> ChartDataResponse</code></summary>

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
try:
    response = client.jobs.get_job_chart_data_v2_jobs_job_id_chart_data_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ChartDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobChartDataV2JobsJobIdChartDataGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job_chart_data_v2_jobs_job_id_chart_data_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ChartDataResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobChartDataV2JobsJobIdChartDataGetErrorBody
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

**OnSuccess**: <code>[ChartDataResponse](hud/models/chart_data_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetJobChartDataV2JobsJobIdChartDataGetErrorBody](hud/errors/get_job_chart_data_v2_jobs_job_id_chart_data_get_error.py)&#93;</code>

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
<summary><code>def get_job_entity_links_v2_jobs_job_id_entity_links_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> JobEntityLinksResponse</code></summary>

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
try:
    response = client.jobs.get_job_entity_links_v2_jobs_job_id_entity_links_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobEntityLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job_entity_links_v2_jobs_job_id_entity_links_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobEntityLinksResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody
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

**OnSuccess**: <code>[JobEntityLinksResponse](hud/models/job_entity_links_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetJobEntityLinksV2JobsJobIdEntityLinksGetErrorBody](hud/errors/get_job_entity_links_v2_jobs_job_id_entity_links_get_error.py)&#93;</code>

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
<summary><code>def get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TasksetCoverageResponse</code></summary>

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
try:
    response = client.jobs.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TasksetCoverageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TasksetCoverageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody
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

**OnSuccess**: <code>[TasksetCoverageResponse](hud/models/taskset_coverage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetJobTasksetCoverageV2JobsJobIdTasksetCoverageGetErrorBody](hud/errors/get_job_taskset_coverage_v2_jobs_job_id_taskset_coverage_get_error.py)&#93;</code>

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
<summary><code>def get_job_usage_v2_jobs_job_id_usage_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> JobUsageResponse</code></summary>

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
try:
    response = client.jobs.get_job_usage_v2_jobs_job_id_usage_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type JobUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobUsageV2JobsJobIdUsageGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job_usage_v2_jobs_job_id_usage_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobUsageV2JobsJobIdUsageGetErrorBody
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

**OnSuccess**: <code>[JobUsageResponse](hud/models/job_usage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetJobUsageV2JobsJobIdUsageGetErrorBody](hud/errors/get_job_usage_v2_jobs_job_id_usage_get_error.py)&#93;</code>

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
<summary><code>def get_job_v2_jobs_job_id_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> JobResponse</code></summary>

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
try:
    response = client.jobs.get_job_v2_jobs_job_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type JobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobV2JobsJobIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job_v2_jobs_job_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type JobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobV2JobsJobIdGetErrorBody
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

**OnSuccess**: <code>[JobResponse](hud/models/job_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetJobV2JobsJobIdGetErrorBody](hud/errors/get_job_v2_jobs_job_id_get_error.py)&#93;</code>

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
<summary><code>def import_job_v2_jobs_import_post(body: JobImportRequest | JobImportRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> JobImportResponse</code></summary>

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
try:
    response = client.jobs.import_job_v2_jobs_import_post(
        JobImportRequest(
            taskset_id=UUID("00000000-0000-0000-0000-000000000000"),
            external_id="some example string",
            name="some example string",
            traces=[JobImportTrace(external_id="some example string", task_digest="some example string")],
        ),
    )
    # TODO: Handle 'response' of type JobImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportJobV2JobsImportPostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.import_job_v2_jobs_import_post(
        JobImportRequest(
            taskset_id=UUID("00000000-0000-0000-0000-000000000000"),
            external_id="some example string",
            name="some example string",
            traces=[JobImportTrace(external_id="some example string", task_digest="some example string")],
        ),
    )
    # TODO: Handle 'response' of type JobImportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ImportJobV2JobsImportPostErrorBody
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

**OnSuccess**: <code>[JobImportResponse](hud/models/job_import_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ImportJobV2JobsImportPostErrorBody](hud/errors/import_job_v2_jobs_import_post_error.py)&#93;</code>

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
<summary><code>def invalidate_job_v2_jobs_job_id_invalidate_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> BatchValidateResponse</code></summary>

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
try:
    response = client.jobs.invalidate_job_v2_jobs_job_id_invalidate_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BatchValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InvalidateJobV2JobsJobIdInvalidatePostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.invalidate_job_v2_jobs_job_id_invalidate_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BatchValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InvalidateJobV2JobsJobIdInvalidatePostErrorBody
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

**OnSuccess**: <code>[BatchValidateResponse](hud/models/batch_validate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[InvalidateJobV2JobsJobIdInvalidatePostErrorBody](hud/errors/invalidate_job_v2_jobs_job_id_invalidate_post_error.py)&#93;</code>

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
<summary><code>def job_summary_v2_jobs_job_id_summary_get(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> JobSummary</code></summary>

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
try:
    response = client.jobs.job_summary_v2_jobs_job_id_summary_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type JobSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JobSummaryV2JobsJobIdSummaryGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.job_summary_v2_jobs_job_id_summary_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JobSummaryV2JobsJobIdSummaryGetErrorBody
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

**OnSuccess**: <code>[JobSummary](hud/models/job_summary.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[JobSummaryV2JobsJobIdSummaryGetErrorBody](hud/errors/job_summary_v2_jobs_job_id_summary_get_error.py)&#93;</code>

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
<summary><code>def list_active_jobs_v2_jobs_active_get(*, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> list[JobResponse]</code></summary>

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
try:
    response = client.jobs.list_active_jobs_v2_jobs_active_get()
    # TODO: Handle 'response' of type list[JobResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListActiveJobsV2JobsActiveGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.list_active_jobs_v2_jobs_active_get()
    # TODO: Handle 'response' of type list[JobResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListActiveJobsV2JobsActiveGetErrorBody
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

**OnSuccess**: <code>list&#91;[JobResponse](hud/models/job_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListActiveJobsV2JobsActiveGetErrorBody](hud/errors/list_active_jobs_v2_jobs_active_get_error.py)&#93;</code>

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
<summary><code>def list_enriched_jobs_v2_jobs_enriched_get(taskset_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> TasksetJobsEnrichedResponse</code></summary>

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
try:
    response = client.jobs.list_enriched_jobs_v2_jobs_enriched_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TasksetJobsEnrichedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnrichedJobsV2JobsEnrichedGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.list_enriched_jobs_v2_jobs_enriched_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TasksetJobsEnrichedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnrichedJobsV2JobsEnrichedGetErrorBody
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

**OnSuccess**: <code>[TasksetJobsEnrichedResponse](hud/models/taskset_jobs_enriched_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListEnrichedJobsV2JobsEnrichedGetErrorBody](hud/errors/list_enriched_jobs_v2_jobs_enriched_get_error.py)&#93;</code>

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
<summary><code>def list_job_thumbnails_v2_jobs_job_id_thumbnails_get(job_id: UUID, *, limit: int | None = 100, offset: int | None = 0, status: list[TraceStatusOrStr] | None = None, request_options: RequestOptionsOrDict | None = None) -> JobThumbnailsResponse</code></summary>

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
try:
    response = client.jobs.list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobThumbnailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.list_job_thumbnails_v2_jobs_job_id_thumbnails_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type JobThumbnailsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody
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

**OnSuccess**: <code>[JobThumbnailsResponse](hud/models/job_thumbnails_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListJobThumbnailsV2JobsJobIdThumbnailsGetErrorBody](hud/errors/list_job_thumbnails_v2_jobs_job_id_thumbnails_get_error.py)&#93;</code>

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
<summary><code>def list_job_traces_v2_jobs_job_id_traces_get(job_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseTraceResponse</code></summary>

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
try:
    response = client.jobs.list_job_traces_v2_jobs_job_id_traces_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PaginatedResponseTraceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobTracesV2JobsJobIdTracesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.list_job_traces_v2_jobs_job_id_traces_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PaginatedResponseTraceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobTracesV2JobsJobIdTracesGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseTraceResponse](hud/models/paginated_response_trace_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListJobTracesV2JobsJobIdTracesGetErrorBody](hud/errors/list_job_traces_v2_jobs_job_id_traces_get_error.py)&#93;</code>

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
<summary><code>def list_jobs_v2_jobs_get(*, limit: int | None = 50, offset: int | None = 0, taskset_id: UUID | None = None, project_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseJobResponse</code></summary>

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
try:
    response = client.jobs.list_jobs_v2_jobs_get()
    # TODO: Handle 'response' of type PaginatedResponseJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobsV2JobsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.list_jobs_v2_jobs_get()
    # TODO: Handle 'response' of type PaginatedResponseJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListJobsV2JobsGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseJobResponse](hud/models/paginated_response_job_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListJobsV2JobsGetErrorBody](hud/errors/list_jobs_v2_jobs_get_error.py)&#93;</code>

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
<summary><code>def publish_job_v2_jobs_job_id_publish_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PublishJobResponse</code></summary>

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
try:
    response = client.jobs.publish_job_v2_jobs_job_id_publish_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PublishJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishJobV2JobsJobIdPublishPostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.publish_job_v2_jobs_job_id_publish_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PublishJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishJobV2JobsJobIdPublishPostErrorBody
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

**OnSuccess**: <code>[PublishJobResponse](hud/models/publish_job_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[PublishJobV2JobsJobIdPublishPostErrorBody](hud/errors/publish_job_v2_jobs_job_id_publish_post_error.py)&#93;</code>

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
<summary><code>def revalidate_job_v2_jobs_job_id_revalidate_post(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> BatchValidateResponse</code></summary>

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
try:
    response = client.jobs.revalidate_job_v2_jobs_job_id_revalidate_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BatchValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RevalidateJobV2JobsJobIdRevalidatePostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.revalidate_job_v2_jobs_job_id_revalidate_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BatchValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RevalidateJobV2JobsJobIdRevalidatePostErrorBody
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

**OnSuccess**: <code>[BatchValidateResponse](hud/models/batch_validate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RevalidateJobV2JobsJobIdRevalidatePostErrorBody](hud/errors/revalidate_job_v2_jobs_job_id_revalidate_post_error.py)&#93;</code>

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
<summary><code>def unpublish_job_v2_jobs_job_id_publish_delete(job_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> StatusResponse</code></summary>

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
try:
    response = client.jobs.unpublish_job_v2_jobs_job_id_publish_delete(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type StatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishJobV2JobsJobIdPublishDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.unpublish_job_v2_jobs_job_id_publish_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type StatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishJobV2JobsJobIdPublishDeleteErrorBody
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

**OnSuccess**: <code>[StatusResponse](hud/models/status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UnpublishJobV2JobsJobIdPublishDeleteErrorBody](hud/errors/unpublish_job_v2_jobs_job_id_publish_delete_error.py)&#93;</code>

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
<summary><code>def update_job_v2_jobs_job_id_patch(job_id: UUID, body: JobUpdateRequest | JobUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> JobResponse</code></summary>

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
try:
    response = client.jobs.update_job_v2_jobs_job_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), JobUpdateRequest()
    )
    # TODO: Handle 'response' of type JobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateJobV2JobsJobIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.update_job_v2_jobs_job_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), JobUpdateRequest()
    )
    # TODO: Handle 'response' of type JobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateJobV2JobsJobIdPatchErrorBody
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

**OnSuccess**: <code>[JobResponse](hud/models/job_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateJobV2JobsJobIdPatchErrorBody](hud/errors/update_job_v2_jobs_job_id_patch_error.py)&#93;</code>

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
<summary><code>def upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(job_id: UUID, trace_id: UUID, body: AtifTrajectory | AtifTrajectoryDict, *, request_options: RequestOptionsOrDict | None = None) -> JobImportTrajectoryResponse</code></summary>

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
try:
    response = client.jobs.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        AtifTrajectory(
            agent=AtifAgent(name="some example string", version="some example string"),
            steps=[AtifStep(step_id=1, source=SourceHudPlatformJobsApi.SYSTEM, message="some example string")],
        ),
    )
    # TODO: Handle 'response' of type JobImportTrajectoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        AtifTrajectory(
            agent=AtifAgent(name="some example string", version="some example string"),
            steps=[AtifStep(step_id=1, source=SourceHudPlatformJobsApi.SYSTEM, message="some example string")],
        ),
    )
    # TODO: Handle 'response' of type JobImportTrajectoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody
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

**OnSuccess**: <code>[JobImportTrajectoryResponse](hud/models/job_import_trajectory_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UploadImportedTrajectoryV2JobsImportJobIdTracesTraceIdTrajectoryPostErrorBody](hud/errors/upload_imported_trajectory_v2_jobs_import_job_id_traces_trace_id_trajectory_post_error.py)&#93;</code>

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
<summary><code>def create_spend_limit_v2_limits_post(body: SpendLimitCreateRequest | SpendLimitCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SpendLimitItem</code></summary>

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
try:
    response = client.limits_api.create_spend_limit_v2_limits_post(
        SpendLimitCreateRequest(interval=SpendInterval.WEEK, action=SpendLimitAction.ALERT)
    )
    # TODO: Handle 'response' of type SpendLimitItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSpendLimitV2LimitsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.limits_api.create_spend_limit_v2_limits_post(
        SpendLimitCreateRequest(interval=SpendInterval.WEEK, action=SpendLimitAction.ALERT)
    )
    # TODO: Handle 'response' of type SpendLimitItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSpendLimitV2LimitsPostErrorBody
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

**OnSuccess**: <code>[SpendLimitItem](hud/models/spend_limit_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateSpendLimitV2LimitsPostErrorBody](hud/errors/create_spend_limit_v2_limits_post_error.py)&#93;</code>

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
<summary><code>def delete_spend_limit_v2_limits_limit_id_delete(limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.limits_api.delete_spend_limit_v2_limits_limit_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.limits_api.delete_spend_limit_v2_limits_limit_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteSpendLimitV2LimitsLimitIdDeleteErrorBody](hud/errors/delete_spend_limit_v2_limits_limit_id_delete_error.py)&#93;</code>

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
<summary><code>def list_spend_limits_v2_limits_get(*, request_options: RequestOptionsOrDict | None = None) -> SpendLimitListResponse</code></summary>

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
try:
    response = client.limits_api.list_spend_limits_v2_limits_get()
    # TODO: Handle 'response' of type SpendLimitListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSpendLimitsV2LimitsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.limits_api.list_spend_limits_v2_limits_get()
    # TODO: Handle 'response' of type SpendLimitListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSpendLimitsV2LimitsGetErrorBody
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

**OnSuccess**: <code>[SpendLimitListResponse](hud/models/spend_limit_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListSpendLimitsV2LimitsGetErrorBody](hud/errors/list_spend_limits_v2_limits_get_error.py)&#93;</code>

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
<summary><code>def reset_spend_limit_v2_limits_limit_id_reset_post(limit_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> SpendLimitItem</code></summary>

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
try:
    response = client.limits_api.reset_spend_limit_v2_limits_limit_id_reset_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SpendLimitItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResetSpendLimitV2LimitsLimitIdResetPostErrorBody
```

**Async**

```python
try:
    response = await async_client.limits_api.reset_spend_limit_v2_limits_limit_id_reset_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SpendLimitItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResetSpendLimitV2LimitsLimitIdResetPostErrorBody
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

**OnSuccess**: <code>[SpendLimitItem](hud/models/spend_limit_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ResetSpendLimitV2LimitsLimitIdResetPostErrorBody](hud/errors/reset_spend_limit_v2_limits_limit_id_reset_post_error.py)&#93;</code>

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
<summary><code>def update_spend_limit_v2_limits_limit_id_patch(limit_id: UUID, body: SpendLimitUpdateRequest | SpendLimitUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SpendLimitItem</code></summary>

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
try:
    response = client.limits_api.update_spend_limit_v2_limits_limit_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), SpendLimitUpdateRequest()
    )
    # TODO: Handle 'response' of type SpendLimitItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSpendLimitV2LimitsLimitIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.limits_api.update_spend_limit_v2_limits_limit_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), SpendLimitUpdateRequest()
    )
    # TODO: Handle 'response' of type SpendLimitItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSpendLimitV2LimitsLimitIdPatchErrorBody
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

**OnSuccess**: <code>[SpendLimitItem](hud/models/spend_limit_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateSpendLimitV2LimitsLimitIdPatchErrorBody](hud/errors/update_spend_limit_v2_limits_limit_id_patch_error.py)&#93;</code>

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
<summary><code>def fork_model_v2_models_fork_post(body: ModelForkRequest | ModelForkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ModelResponse</code></summary>

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
try:
    response = client.models_api.fork_model_v2_models_fork_post(
        ModelForkRequest(source_model_id=UUID("00000000-0000-0000-0000-000000000000"), name="some example string")
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ForkModelV2ModelsForkPostErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.fork_model_v2_models_fork_post(
        ModelForkRequest(source_model_id=UUID("00000000-0000-0000-0000-000000000000"), name="some example string")
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ForkModelV2ModelsForkPostErrorBody
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

**OnSuccess**: <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ForkModelV2ModelsForkPostErrorBody](hud/errors/fork_model_v2_models_fork_post_error.py)&#93;</code>

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
<summary><code>def get_model_v2_models_model_id_get(model_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ModelResponse</code></summary>

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
try:
    response = client.models_api.get_model_v2_models_model_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetModelV2ModelsModelIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.get_model_v2_models_model_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetModelV2ModelsModelIdGetErrorBody
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

**OnSuccess**: <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetModelV2ModelsModelIdGetErrorBody](hud/errors/get_model_v2_models_model_id_get_error.py)&#93;</code>

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
<summary><code>def list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(model_id: UUID, checkpoint_id: UUID, *, limit: int | None = 200, request_options: RequestOptionsOrDict | None = None) -> list[CheckpointTraceRow]</code></summary>

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
try:
    response = client.models_api.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[CheckpointTraceRow]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[CheckpointTraceRow]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody
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

**OnSuccess**: <code>list&#91;[CheckpointTraceRow](hud/models/checkpoint_trace_row.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListCheckpointTracesV2ModelsModelIdCheckpointsCheckpointIdTracesGetErrorBody](hud/errors/list_checkpoint_traces_v2_models_model_id_checkpoints_checkpoint_id_traces_get_error.py)&#93;</code>

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
<summary><code>def list_model_checkpoints_v2_models_model_id_checkpoints_get(model_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> list[CheckpointResponse]</code></summary>

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
try:
    response = client.models_api.list_model_checkpoints_v2_models_model_id_checkpoints_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[CheckpointResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.list_model_checkpoints_v2_models_model_id_checkpoints_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[CheckpointResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody
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

**OnSuccess**: <code>list&#91;[CheckpointResponse](hud/models/checkpoint_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListModelCheckpointsV2ModelsModelIdCheckpointsGetErrorBody](hud/errors/list_model_checkpoints_v2_models_model_id_checkpoints_get_error.py)&#93;</code>

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
<summary><code>def list_model_inference_logs_v2_models_model_id_logs_get(model_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseModelInferenceLogEntry</code></summary>

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
try:
    response = client.models_api.list_model_inference_logs_v2_models_model_id_logs_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PaginatedResponseModelInferenceLogEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.list_model_inference_logs_v2_models_model_id_logs_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PaginatedResponseModelInferenceLogEntry
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseModelInferenceLogEntry](hud/models/paginated_response_model_inference_log_entry.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListModelInferenceLogsV2ModelsModelIdLogsGetErrorBody](hud/errors/list_model_inference_logs_v2_models_model_id_logs_get_error.py)&#93;</code>

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
<summary><code>def list_models_v2_models_get(*, limit: int | None = 100, offset: int | None = 0, scope: ModelListScopeOrStr | None = None, search: str | None = None, trainable: bool | None = False, include_deprecated: bool | None = True, sort: ModelListSort1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseModelResponse</code></summary>

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
try:
    response = client.models_api.list_models_v2_models_get()
    # TODO: Handle 'response' of type PaginatedResponseModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelsV2ModelsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.list_models_v2_models_get()
    # TODO: Handle 'response' of type PaginatedResponseModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListModelsV2ModelsGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseModelResponse](hud/models/paginated_response_model_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListModelsV2ModelsGetErrorBody](hud/errors/list_models_v2_models_get_error.py)&#93;</code>

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
<summary><code>def model_results_v2_models_model_id_results_get(model_id: UUID, *, checkpoint_ids: str | None = None, purpose: PurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ModelResultsResponse</code></summary>

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
try:
    response = client.models_api.model_results_v2_models_model_id_results_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ModelResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelResultsV2ModelsModelIdResultsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.model_results_v2_models_model_id_results_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ModelResultsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelResultsV2ModelsModelIdResultsGetErrorBody
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

**OnSuccess**: <code>[ModelResultsResponse](hud/models/model_results_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ModelResultsV2ModelsModelIdResultsGetErrorBody](hud/errors/model_results_v2_models_model_id_results_get_error.py)&#93;</code>

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
<summary><code>def model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(model_id: UUID, *, exclude: str | None = None, search: str | None = None, limit: int | None = 50, purpose: PurposeOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> SuggestedTasksetsResponse</code></summary>

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
try:
    response = client.models_api.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SuggestedTasksetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SuggestedTasksetsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody
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

**OnSuccess**: <code>[SuggestedTasksetsResponse](hud/models/suggested_tasksets_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ModelSuggestedTasksetsV2ModelsModelIdSuggestedTasksetsGetErrorBody](hud/errors/model_suggested_tasksets_v2_models_model_id_suggested_tasksets_get_error.py)&#93;</code>

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
<summary><code>def resolve_model_v2_models_resolve_get(model: str, *, request_options: RequestOptionsOrDict | None = None) -> ModelResponse</code></summary>

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
try:
    response = client.models_api.resolve_model_v2_models_resolve_get("some example string")
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResolveModelV2ModelsResolveGetErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.resolve_model_v2_models_resolve_get("some example string")
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ResolveModelV2ModelsResolveGetErrorBody
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

**OnSuccess**: <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ResolveModelV2ModelsResolveGetErrorBody](hud/errors/resolve_model_v2_models_resolve_get_error.py)&#93;</code>

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
<summary><code>def set_model_head_v2_models_model_id_head_put(model_id: UUID, body: SetHeadRequest | SetHeadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ModelResponse</code></summary>

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
try:
    response = client.models_api.set_model_head_v2_models_model_id_head_put(
        UUID("00000000-0000-0000-0000-000000000000"),
        SetHeadRequest(checkpoint_id=UUID("00000000-0000-0000-0000-000000000000")),
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetModelHeadV2ModelsModelIdHeadPutErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.set_model_head_v2_models_model_id_head_put(
        UUID("00000000-0000-0000-0000-000000000000"),
        SetHeadRequest(checkpoint_id=UUID("00000000-0000-0000-0000-000000000000")),
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SetModelHeadV2ModelsModelIdHeadPutErrorBody
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

**OnSuccess**: <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[SetModelHeadV2ModelsModelIdHeadPutErrorBody](hud/errors/set_model_head_v2_models_model_id_head_put_error.py)&#93;</code>

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
<summary><code>def update_model_v2_models_model_id_patch(model_id: UUID, body: ModelUpdate | ModelUpdateDict, *, request_options: RequestOptionsOrDict | None = None) -> ModelResponse</code></summary>

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
try:
    response = client.models_api.update_model_v2_models_model_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), ModelUpdate()
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateModelV2ModelsModelIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.models_api.update_model_v2_models_model_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), ModelUpdate()
    )
    # TODO: Handle 'response' of type ModelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateModelV2ModelsModelIdPatchErrorBody
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

**OnSuccess**: <code>[ModelResponse](hud/models/model_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateModelV2ModelsModelIdPatchErrorBody](hud/errors/update_model_v2_models_model_id_patch_error.py)&#93;</code>

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
<summary><code>def join_oauth_app_team_v2_oauth_join_post(*, request_options: RequestOptionsOrDict | None = None) -> OAuthJoinResponse</code></summary>

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
try:
    response = client.o_auth.join_oauth_app_team_v2_oauth_join_post()
    # TODO: Handle 'response' of type OAuthJoinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JoinOauthAppTeamV2OauthJoinPostErrorBody
```

**Async**

```python
try:
    response = await async_client.o_auth.join_oauth_app_team_v2_oauth_join_post()
    # TODO: Handle 'response' of type OAuthJoinResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type JoinOauthAppTeamV2OauthJoinPostErrorBody
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

**OnSuccess**: <code>[OAuthJoinResponse](hud/models/o_auth_join_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[JoinOauthAppTeamV2OauthJoinPostErrorBody](hud/errors/join_oauth_app_team_v2_oauth_join_post_error.py)&#93;</code>

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
<summary><code>def get_registry_source_url_v2_registry_registry_id_source_url_get(registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> RegistrySourceUrlResponse</code></summary>

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
try:
    response = client.registry_api.get_registry_source_url_v2_registry_registry_id_source_url_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RegistrySourceUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody
```

**Async**

```python
try:
    response = await async_client.registry_api.get_registry_source_url_v2_registry_registry_id_source_url_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RegistrySourceUrlResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody
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

**OnSuccess**: <code>[RegistrySourceUrlResponse](hud/models/registry_source_url_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetRegistrySourceUrlV2RegistryRegistryIdSourceUrlGetErrorBody](hud/errors/get_registry_source_url_v2_registry_registry_id_source_url_get_error.py)&#93;</code>

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
<summary><code>def get_registry_v2_registry_registry_id_get(registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> RegistryDetailResponse</code></summary>

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
try:
    response = client.registry_api.get_registry_v2_registry_registry_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RegistryDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRegistryV2RegistryRegistryIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.registry_api.get_registry_v2_registry_registry_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RegistryDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRegistryV2RegistryRegistryIdGetErrorBody
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

**OnSuccess**: <code>[RegistryDetailResponse](hud/models/registry_detail_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetRegistryV2RegistryRegistryIdGetErrorBody](hud/errors/get_registry_v2_registry_registry_id_get_error.py)&#93;</code>

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
<summary><code>def list_registries_v2_registry_get(*, limit: int | None = 50, offset: int | None = 0, search: str | None = None, match_templates: bool | None = False, include_latest_scenarios: bool | None = False, public_only: bool | None = False, featured_only: bool | None = False, owner_only: bool | None = False, project_id: UUID | None = None, sort_by: SortByOrStr | None = SortBy.STARRED, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseRegistryDetailResponse</code></summary>

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
try:
    response = client.registry_api.list_registries_v2_registry_get()
    # TODO: Handle 'response' of type PaginatedResponseRegistryDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRegistriesV2RegistryGetErrorBody
```

**Async**

```python
try:
    response = await async_client.registry_api.list_registries_v2_registry_get()
    # TODO: Handle 'response' of type PaginatedResponseRegistryDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRegistriesV2RegistryGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseRegistryDetailResponse](hud/models/paginated_response_registry_detail_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListRegistriesV2RegistryGetErrorBody](hud/errors/list_registries_v2_registry_get_error.py)&#93;</code>

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
<summary><code>def list_registry_scenarios_v2_registry_registry_id_scenarios_get(registry_id: UUID, *, build_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> list[ScenarioResponse]</code></summary>

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
try:
    response = client.registry_api.list_registry_scenarios_v2_registry_registry_id_scenarios_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[ScenarioResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody
```

**Async**

```python
try:
    response = await async_client.registry_api.list_registry_scenarios_v2_registry_registry_id_scenarios_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type list[ScenarioResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody
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

**OnSuccess**: <code>list&#91;[ScenarioResponse](hud/models/scenario_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody](hud/errors/list_registry_scenarios_v2_registry_registry_id_scenarios_get_error.py)&#93;</code>

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
<summary><code>def list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceStorageObjectListResponse</code></summary>

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
try:
    response = client.storage.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceStorageObjectListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.storage.list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceStorageObjectListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody
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

**OnSuccess**: <code>[TraceStorageObjectListResponse](hud/models/trace_storage_object_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListTraceArtifactsV2StorageTracesTraceIdArtifactsGetErrorBody](hud/errors/list_trace_artifacts_v2_storage_traces_trace_id_artifacts_get_error.py)&#93;</code>

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
<summary><code>def trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceWorkspaceChangesResponse</code></summary>

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
try:
    response = client.storage.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceWorkspaceChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.storage.trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceWorkspaceChangesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody
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

**OnSuccess**: <code>[TraceWorkspaceChangesResponse](hud/models/trace_workspace_changes_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[TraceWorkspaceChangesV2StorageTracesTraceIdWorkspaceChangesGetErrorBody](hud/errors/trace_workspace_changes_v2_storage_traces_trace_id_workspace_changes_get_error.py)&#93;</code>

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
<summary><code>def trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceWorkspaceFilesResponse</code></summary>

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
try:
    response = client.storage.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceWorkspaceFilesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.storage.trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceWorkspaceFilesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody
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

**OnSuccess**: <code>[TraceWorkspaceFilesResponse](hud/models/trace_workspace_files_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[TraceWorkspaceFilesV2StorageTracesTraceIdWorkspaceFilesGetErrorBody](hud/errors/trace_workspace_files_v2_storage_traces_trace_id_workspace_files_get_error.py)&#93;</code>

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
<summary><code>def bulk_update_task_stage_v2_tasks_stage_patch(body: BulkStageRequest | BulkStageRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BulkStatusResponse</code></summary>

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
try:
    response = client.tasks.bulk_update_task_stage_v2_tasks_stage_patch(
        BulkStageRequest(ids=[UUID("00000000-0000-0000-0000-000000000000")], stage="some example string")
    )
    # TODO: Handle 'response' of type BulkStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateTaskStageV2TasksStagePatchErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.bulk_update_task_stage_v2_tasks_stage_patch(
        BulkStageRequest(ids=[UUID("00000000-0000-0000-0000-000000000000")], stage="some example string")
    )
    # TODO: Handle 'response' of type BulkStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateTaskStageV2TasksStagePatchErrorBody
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

**OnSuccess**: <code>[BulkStatusResponse](hud/models/bulk_status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[BulkUpdateTaskStageV2TasksStagePatchErrorBody](hud/errors/bulk_update_task_stage_v2_tasks_stage_patch_error.py)&#93;</code>

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
<summary><code>def bulk_update_task_status_v2_tasks_status_patch(body: BulkStatusRequest | BulkStatusRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BulkStatusResponse</code></summary>

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
try:
    response = client.tasks.bulk_update_task_status_v2_tasks_status_patch(BulkStatusRequest())
    # TODO: Handle 'response' of type BulkStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateTaskStatusV2TasksStatusPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.bulk_update_task_status_v2_tasks_status_patch(BulkStatusRequest())
    # TODO: Handle 'response' of type BulkStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BulkUpdateTaskStatusV2TasksStatusPatchErrorBody
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

**OnSuccess**: <code>[BulkStatusResponse](hud/models/bulk_status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[BulkUpdateTaskStatusV2TasksStatusPatchErrorBody](hud/errors/bulk_update_task_status_v2_tasks_status_patch_error.py)&#93;</code>

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
<summary><code>def create_task_comment_v2_tasks_task_id_comments_post(task_id: UUID, body: CreateTaskCommentRequest | CreateTaskCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TaskCommentItem</code></summary>

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
try:
    response = client.tasks.create_task_comment_v2_tasks_task_id_comments_post(
        UUID("00000000-0000-0000-0000-000000000000"), CreateTaskCommentRequest(body="some example string")
    )
    # TODO: Handle 'response' of type TaskCommentItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.create_task_comment_v2_tasks_task_id_comments_post(
        UUID("00000000-0000-0000-0000-000000000000"), CreateTaskCommentRequest(body="some example string")
    )
    # TODO: Handle 'response' of type TaskCommentItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody
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

**OnSuccess**: <code>[TaskCommentItem](hud/models/task_comment_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateTaskCommentV2TasksTaskIdCommentsPostErrorBody](hud/errors/create_task_comment_v2_tasks_task_id_comments_post_error.py)&#93;</code>

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
<summary><code>def delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(task_id: UUID, comment_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.tasks.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.tasks.delete_task_comment_v2_tasks_task_id_comments_comment_id_delete(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteTaskCommentV2TasksTaskIdCommentsCommentIdDeleteErrorBody](hud/errors/delete_task_comment_v2_tasks_task_id_comments_comment_id_delete_error.py)&#93;</code>

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
<summary><code>def get_task_activity_v2_tasks_task_id_activity_get(task_id: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> TaskActivityResponse</code></summary>

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
try:
    response = client.tasks.get_task_activity_v2_tasks_task_id_activity_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TaskActivityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskActivityV2TasksTaskIdActivityGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_task_activity_v2_tasks_task_id_activity_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TaskActivityResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskActivityV2TasksTaskIdActivityGetErrorBody
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

**OnSuccess**: <code>[TaskActivityResponse](hud/models/task_activity_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTaskActivityV2TasksTaskIdActivityGetErrorBody](hud/errors/get_task_activity_v2_tasks_task_id_activity_get_error.py)&#93;</code>

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
<summary><code>def get_task_comments_v2_tasks_task_id_comments_get(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TaskCommentsListResponse</code></summary>

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
try:
    response = client.tasks.get_task_comments_v2_tasks_task_id_comments_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TaskCommentsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_task_comments_v2_tasks_task_id_comments_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TaskCommentsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody
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

**OnSuccess**: <code>[TaskCommentsListResponse](hud/models/task_comments_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTaskCommentsV2TasksTaskIdCommentsGetErrorBody](hud/errors/get_task_comments_v2_tasks_task_id_comments_get_error.py)&#93;</code>

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
<summary><code>def get_task_ready_check_v2_tasks_task_id_ready_check_get(task_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet</code></summary>

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
try:
    response = client.tasks.get_task_ready_check_v2_tasks_task_id_ready_check_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_task_ready_check_v2_tasks_task_id_ready_check_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody
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

**OnSuccess**: <code>[ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet](hud/models/unions/response_get_task_ready_check_v2_tasks_task_id_ready_check_get.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTaskReadyCheckV2TasksTaskIdReadyCheckGetErrorBody](hud/errors/get_task_ready_check_v2_tasks_task_id_ready_check_get_error.py)&#93;</code>

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
<summary><code>def get_task_traces_v2_tasks_task_id_traces_get(task_id: UUID, *, limit: int | None = 20, offset: int | None = 0, task_version_id: UUID | None = None, model_id: UUID | None = None, exclude_training: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseTaskTrace</code></summary>

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
try:
    response = client.tasks.get_task_traces_v2_tasks_task_id_traces_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PaginatedResponseTaskTrace
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskTracesV2TasksTaskIdTracesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_task_traces_v2_tasks_task_id_traces_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PaginatedResponseTaskTrace
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskTracesV2TasksTaskIdTracesGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseTaskTrace](hud/models/paginated_response_task_trace.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTaskTracesV2TasksTaskIdTracesGetErrorBody](hud/errors/get_task_traces_v2_tasks_task_id_traces_get_error.py)&#93;</code>

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
<summary><code>def get_task_version_v2_tasks_task_id_versions_version_id_get(task_id: UUID, version_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TaskWithVersionResponse</code></summary>

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
try:
    response = client.tasks.get_task_version_v2_tasks_task_id_versions_version_id_get(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TaskWithVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.get_task_version_v2_tasks_task_id_versions_version_id_get(
        UUID("00000000-0000-0000-0000-000000000000"), UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TaskWithVersionResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody
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

**OnSuccess**: <code>[TaskWithVersionResponse](hud/models/task_with_version_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTaskVersionV2TasksTaskIdVersionsVersionIdGetErrorBody](hud/errors/get_task_version_v2_tasks_task_id_versions_version_id_get_error.py)&#93;</code>

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
<summary><code>def update_task_comment_v2_tasks_task_id_comments_comment_id_patch(task_id: UUID, comment_id: UUID, body: UpdateTaskCommentRequest | UpdateTaskCommentRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TaskCommentItem</code></summary>

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
try:
    response = client.tasks.update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        UpdateTaskCommentRequest(body="some example string"),
    )
    # TODO: Handle 'response' of type TaskCommentItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.update_task_comment_v2_tasks_task_id_comments_comment_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"),
        UUID("00000000-0000-0000-0000-000000000000"),
        UpdateTaskCommentRequest(body="some example string"),
    )
    # TODO: Handle 'response' of type TaskCommentItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody
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

**OnSuccess**: <code>[TaskCommentItem](hud/models/task_comment_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateTaskCommentV2TasksTaskIdCommentsCommentIdPatchErrorBody](hud/errors/update_task_comment_v2_tasks_task_id_comments_comment_id_patch_error.py)&#93;</code>

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
<summary><code>def upload_tasks_v2_tasks_upload_post(body: TaskUploadRequest | TaskUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TaskUploadResponse</code></summary>

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
try:
    response = client.tasks.upload_tasks_v2_tasks_upload_post(
        TaskUploadRequest(tasks=[TaskUploadItem(name="some example string")])
    )
    # TODO: Handle 'response' of type TaskUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadTasksV2TasksUploadPostErrorBody
```

**Async**

```python
try:
    response = await async_client.tasks.upload_tasks_v2_tasks_upload_post(
        TaskUploadRequest(tasks=[TaskUploadItem(name="some example string")])
    )
    # TODO: Handle 'response' of type TaskUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadTasksV2TasksUploadPostErrorBody
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

**OnSuccess**: <code>[TaskUploadResponse](hud/models/task_upload_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UploadTasksV2TasksUploadPostErrorBody](hud/errors/upload_tasks_v2_tasks_upload_post_error.py)&#93;</code>

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
<summary><code>def invite_team_members_v2_team_invitations_post(body: TeamInviteRequest | TeamInviteRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TeamInviteResponse</code></summary>

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
try:
    response = client.teams.invite_team_members_v2_team_invitations_post(
        TeamInviteRequest(emails=["user@example.com"], role=Role.ADMIN)
    )
    # TODO: Handle 'response' of type TeamInviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InviteTeamMembersV2TeamInvitationsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.teams.invite_team_members_v2_team_invitations_post(
        TeamInviteRequest(emails=["user@example.com"], role=Role.ADMIN)
    )
    # TODO: Handle 'response' of type TeamInviteResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type InviteTeamMembersV2TeamInvitationsPostErrorBody
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

**OnSuccess**: <code>[TeamInviteResponse](hud/models/team_invite_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[InviteTeamMembersV2TeamInvitationsPostErrorBody](hud/errors/invite_team_members_v2_team_invitations_post_error.py)&#93;</code>

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
<summary><code>def list_team_invitations_v2_team_invitations_get(*, request_options: RequestOptionsOrDict | None = None) -> TeamInvitationsResponse</code></summary>

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
try:
    response = client.teams.list_team_invitations_v2_team_invitations_get()
    # TODO: Handle 'response' of type TeamInvitationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTeamInvitationsV2TeamInvitationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.teams.list_team_invitations_v2_team_invitations_get()
    # TODO: Handle 'response' of type TeamInvitationsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTeamInvitationsV2TeamInvitationsGetErrorBody
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

**OnSuccess**: <code>[TeamInvitationsResponse](hud/models/team_invitations_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListTeamInvitationsV2TeamInvitationsGetErrorBody](hud/errors/list_team_invitations_v2_team_invitations_get_error.py)&#93;</code>

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
<summary><code>def list_team_members_v2_team_members_get(*, request_options: RequestOptionsOrDict | None = None) -> TeamMembersResponse</code></summary>

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
try:
    response = client.teams.list_team_members_v2_team_members_get()
    # TODO: Handle 'response' of type TeamMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTeamMembersV2TeamMembersGetErrorBody
```

**Async**

```python
try:
    response = await async_client.teams.list_team_members_v2_team_members_get()
    # TODO: Handle 'response' of type TeamMembersResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTeamMembersV2TeamMembersGetErrorBody
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

**OnSuccess**: <code>[TeamMembersResponse](hud/models/team_members_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListTeamMembersV2TeamMembersGetErrorBody](hud/errors/list_team_members_v2_team_members_get_error.py)&#93;</code>

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
<summary><code>def remove_team_members_v2_team_members_batch_remove_post(body: TeamMemberRemoveRequest | TeamMemberRemoveRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TeamMemberBatchResponse</code></summary>

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
try:
    response = client.teams.remove_team_members_v2_team_members_batch_remove_post(
        TeamMemberRemoveRequest(membership_ids=[1])
    )
    # TODO: Handle 'response' of type TeamMemberBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody
```

**Async**

```python
try:
    response = await async_client.teams.remove_team_members_v2_team_members_batch_remove_post(
        TeamMemberRemoveRequest(membership_ids=[1])
    )
    # TODO: Handle 'response' of type TeamMemberBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody
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

**OnSuccess**: <code>[TeamMemberBatchResponse](hud/models/team_member_batch_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RemoveTeamMembersV2TeamMembersBatchRemovePostErrorBody](hud/errors/remove_team_members_v2_team_members_batch_remove_post_error.py)&#93;</code>

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
<summary><code>def revoke_team_invitations_v2_team_invitations_batch_revoke_post(body: TeamInvitationRevokeRequest | TeamInvitationRevokeRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TeamInvitationRevokeResponse</code></summary>

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
try:
    response = client.teams.revoke_team_invitations_v2_team_invitations_batch_revoke_post(
        TeamInvitationRevokeRequest(invitation_ids=["some example string"])
    )
    # TODO: Handle 'response' of type TeamInvitationRevokeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody
```

**Async**

```python
try:
    response = await async_client.teams.revoke_team_invitations_v2_team_invitations_batch_revoke_post(
        TeamInvitationRevokeRequest(invitation_ids=["some example string"])
    )
    # TODO: Handle 'response' of type TeamInvitationRevokeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody
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

**OnSuccess**: <code>[TeamInvitationRevokeResponse](hud/models/team_invitation_revoke_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RevokeTeamInvitationsV2TeamInvitationsBatchRevokePostErrorBody](hud/errors/revoke_team_invitations_v2_team_invitations_batch_revoke_post_error.py)&#93;</code>

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
<summary><code>def update_team_member_roles_v2_team_members_batch_role_post(body: TeamMemberRoleUpdateRequest | TeamMemberRoleUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TeamMemberBatchResponse</code></summary>

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
try:
    response = client.teams.update_team_member_roles_v2_team_members_batch_role_post(
        TeamMemberRoleUpdateRequest(membership_ids=[1], role=Role.ADMIN)
    )
    # TODO: Handle 'response' of type TeamMemberBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody
```

**Async**

```python
try:
    response = await async_client.teams.update_team_member_roles_v2_team_members_batch_role_post(
        TeamMemberRoleUpdateRequest(membership_ids=[1], role=Role.ADMIN)
    )
    # TODO: Handle 'response' of type TeamMemberBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody
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

**OnSuccess**: <code>[TeamMemberBatchResponse](hud/models/team_member_batch_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateTeamMemberRolesV2TeamMembersBatchRolePostErrorBody](hud/errors/update_team_member_roles_v2_team_members_batch_role_post_error.py)&#93;</code>

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
<summary><code>def batch_validate_traces_v2_trace_batch_validate_post(body: TraceBatchValidateRequest | TraceBatchValidateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TraceBatchValidateResponse</code></summary>

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
try:
    response = client.traces.batch_validate_traces_v2_trace_batch_validate_post(
        TraceBatchValidateRequest(trace_ids=[UUID("00000000-0000-0000-0000-000000000000")], is_valid=True)
    )
    # TODO: Handle 'response' of type TraceBatchValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchValidateTracesV2TraceBatchValidatePostErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.batch_validate_traces_v2_trace_batch_validate_post(
        TraceBatchValidateRequest(trace_ids=[UUID("00000000-0000-0000-0000-000000000000")], is_valid=True)
    )
    # TODO: Handle 'response' of type TraceBatchValidateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchValidateTracesV2TraceBatchValidatePostErrorBody
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

**OnSuccess**: <code>[TraceBatchValidateResponse](hud/models/trace_batch_validate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[BatchValidateTracesV2TraceBatchValidatePostErrorBody](hud/errors/batch_validate_traces_v2_trace_batch_validate_post_error.py)&#93;</code>

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
<summary><code>def get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(trace_id: UUID, *, include_spans: bool | None = True, include_env_logs: bool | None = True, include_worker_logs: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> TraceAnalysisContextResponse</code></summary>

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
try:
    response = client.traces.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceAnalysisContextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_analysis_context_v2_trace_trace_id_analysis_context_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceAnalysisContextResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody
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

**OnSuccess**: <code>[TraceAnalysisContextResponse](hud/models/trace_analysis_context_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceAnalysisContextV2TraceTraceIdAnalysisContextGetErrorBody](hud/errors/get_trace_analysis_context_v2_trace_trace_id_analysis_context_get_error.py)&#93;</code>

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
<summary><code>def get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceAnalysisPromptResponse</code></summary>

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
try:
    response = client.traces.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceAnalysisPromptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceAnalysisPromptResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody
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

**OnSuccess**: <code>[TraceAnalysisPromptResponse](hud/models/trace_analysis_prompt_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceAnalysisPromptV2TraceTraceIdAnalysisPromptGetErrorBody](hud/errors/get_trace_analysis_prompt_v2_trace_trace_id_analysis_prompt_get_error.py)&#93;</code>

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
<summary><code>def get_trace_env_logs_v2_trace_trace_id_env_logs_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> EnvLogsResponse</code></summary>

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
try:
    response = client.traces.get_trace_env_logs_v2_trace_trace_id_env_logs_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type EnvLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_env_logs_v2_trace_trace_id_env_logs_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type EnvLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody
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

**OnSuccess**: <code>[EnvLogsResponse](hud/models/env_logs_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceEnvLogsV2TraceTraceIdEnvLogsGetErrorBody](hud/errors/get_trace_env_logs_v2_trace_trace_id_env_logs_get_error.py)&#93;</code>

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
<summary><code>def get_trace_events_v2_trace_trace_id_events_get(trace_id: UUID, *, since_seq: int | None = -1, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> TraceEventsResponse</code></summary>

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
try:
    response = client.traces.get_trace_events_v2_trace_trace_id_events_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TraceEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceEventsV2TraceTraceIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_events_v2_trace_trace_id_events_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceEventsV2TraceTraceIdEventsGetErrorBody
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

**OnSuccess**: <code>[TraceEventsResponse](hud/models/trace_events_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceEventsV2TraceTraceIdEventsGetErrorBody](hud/errors/get_trace_events_v2_trace_trace_id_events_get_error.py)&#93;</code>

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
<summary><code>def get_trace_info_v2_trace_trace_id_info_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceInfoResponse</code></summary>

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
try:
    response = client.traces.get_trace_info_v2_trace_trace_id_info_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TraceInfoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceInfoV2TraceTraceIdInfoGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_info_v2_trace_trace_id_info_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceInfoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceInfoV2TraceTraceIdInfoGetErrorBody
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

**OnSuccess**: <code>[TraceInfoResponse](hud/models/trace_info_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceInfoV2TraceTraceIdInfoGetErrorBody](hud/errors/get_trace_info_v2_trace_trace_id_info_get_error.py)&#93;</code>

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
<summary><code>def get_trace_logs_v2_trace_trace_id_logs_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceLogsResponse</code></summary>

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
try:
    response = client.traces.get_trace_logs_v2_trace_trace_id_logs_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TraceLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceLogsV2TraceTraceIdLogsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_logs_v2_trace_trace_id_logs_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceLogsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceLogsV2TraceTraceIdLogsGetErrorBody
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

**OnSuccess**: <code>[TraceLogsResponse](hud/models/trace_logs_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceLogsV2TraceTraceIdLogsGetErrorBody](hud/errors/get_trace_logs_v2_trace_trace_id_logs_get_error.py)&#93;</code>

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
<summary><code>def get_trace_usage_v2_trace_trace_id_usage_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceUsageBreakdown</code></summary>

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
try:
    response = client.traces.get_trace_usage_v2_trace_trace_id_usage_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TraceUsageBreakdown
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceUsageV2TraceTraceIdUsageGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_usage_v2_trace_trace_id_usage_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceUsageBreakdown
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceUsageV2TraceTraceIdUsageGetErrorBody
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

**OnSuccess**: <code>[TraceUsageBreakdown](hud/models/trace_usage_breakdown.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceUsageV2TraceTraceIdUsageGetErrorBody](hud/errors/get_trace_usage_v2_trace_trace_id_usage_get_error.py)&#93;</code>

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
<summary><code>def get_trace_v2_trace_trace_id_get(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TraceDetailResponse</code></summary>

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
try:
    response = client.traces.get_trace_v2_trace_trace_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TraceDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceV2TraceTraceIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.get_trace_v2_trace_trace_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TraceDetailResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTraceV2TraceTraceIdGetErrorBody
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

**OnSuccess**: <code>[TraceDetailResponse](hud/models/trace_detail_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTraceV2TraceTraceIdGetErrorBody](hud/errors/get_trace_v2_trace_trace_id_get_error.py)&#93;</code>

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
<summary><code>def list_related_traces_v2_trace_trace_id_related_get(trace_id: UUID, kind: RelatedKind1OrStr, *, limit: int | None = 50, scope_to_job: bool | None = False, status: str | None = None, order: RelatedOrder1OrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> list[TraceThumbnail]</code></summary>

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
try:
    response = client.traces.list_related_traces_v2_trace_trace_id_related_get(
        UUID("00000000-0000-0000-0000-000000000000"), RelatedKind1.JOB
    )
    # TODO: Handle 'response' of type list[TraceThumbnail]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.list_related_traces_v2_trace_trace_id_related_get(
        UUID("00000000-0000-0000-0000-000000000000"), RelatedKind1.JOB
    )
    # TODO: Handle 'response' of type list[TraceThumbnail]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody
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

**OnSuccess**: <code>list&#91;[TraceThumbnail](hud/models/trace_thumbnail.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListRelatedTracesV2TraceTraceIdRelatedGetErrorBody](hud/errors/list_related_traces_v2_trace_trace_id_related_get_error.py)&#93;</code>

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
<summary><code>def publish_trace_v2_trace_trace_id_publish_post(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> PublishTraceResponse</code></summary>

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
try:
    response = client.traces.publish_trace_v2_trace_trace_id_publish_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type PublishTraceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishTraceV2TraceTraceIdPublishPostErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.publish_trace_v2_trace_trace_id_publish_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PublishTraceResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PublishTraceV2TraceTraceIdPublishPostErrorBody
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

**OnSuccess**: <code>[PublishTraceResponse](hud/models/publish_trace_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[PublishTraceV2TraceTraceIdPublishPostErrorBody](hud/errors/publish_trace_v2_trace_trace_id_publish_post_error.py)&#93;</code>

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
<summary><code>def unpublish_trace_v2_trace_trace_id_publish_delete(trace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> StatusResponse</code></summary>

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
try:
    response = client.traces.unpublish_trace_v2_trace_trace_id_publish_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type StatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.unpublish_trace_v2_trace_trace_id_publish_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type StatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody
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

**OnSuccess**: <code>[StatusResponse](hud/models/status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UnpublishTraceV2TraceTraceIdPublishDeleteErrorBody](hud/errors/unpublish_trace_v2_trace_trace_id_publish_delete_error.py)&#93;</code>

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
<summary><code>def update_trace_v2_trace_trace_id_patch(trace_id: UUID, body: TraceUpdateRequest | TraceUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TraceInfoResponse</code></summary>

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
try:
    response = client.traces.update_trace_v2_trace_trace_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), TraceUpdateRequest()
    )
    # TODO: Handle 'response' of type TraceInfoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTraceV2TraceTraceIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.traces.update_trace_v2_trace_trace_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), TraceUpdateRequest()
    )
    # TODO: Handle 'response' of type TraceInfoResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateTraceV2TraceTraceIdPatchErrorBody
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

**OnSuccess**: <code>[TraceInfoResponse](hud/models/trace_info_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateTraceV2TraceTraceIdPatchErrorBody](hud/errors/update_trace_v2_trace_trace_id_patch_error.py)&#93;</code>

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
<summary><code>def get_environment_usage_v2_environments_usage_get(*, days: int | None = 7, user_id: UUID | None = None, api_key_id: UUID | None = None, status: str | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> EnvironmentUsageResponse</code></summary>

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
try:
    response = client.usage.get_environment_usage_v2_environments_usage_get()
    # TODO: Handle 'response' of type EnvironmentUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody
```

**Async**

```python
try:
    response = await async_client.usage.get_environment_usage_v2_environments_usage_get()
    # TODO: Handle 'response' of type EnvironmentUsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody
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

**OnSuccess**: <code>[EnvironmentUsageResponse](hud/models/environment_usage_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetEnvironmentUsageV2EnvironmentsUsageGetErrorBody](hud/errors/get_environment_usage_v2_environments_usage_get_error.py)&#93;</code>

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
<summary><code>def get_inference_usage_aggregate_v2_usage_inference_get(*, start: RFC3339DateTime | None = None, end: RFC3339DateTime | None = None, bucket_width: BucketWidthOrStr | None = BucketWidth._1D, group_by: list[GroupByOrStr] | None = None, user_id: UUID | None = None, api_key_id: UUID | None = None, byok_credential_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> InferenceUsageAggregateResponse</code></summary>

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
try:
    response = client.usage.get_inference_usage_aggregate_v2_usage_inference_get()
    # TODO: Handle 'response' of type InferenceUsageAggregateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInferenceUsageAggregateV2UsageInferenceGetErrorBody
```

**Async**

```python
try:
    response = await async_client.usage.get_inference_usage_aggregate_v2_usage_inference_get()
    # TODO: Handle 'response' of type InferenceUsageAggregateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetInferenceUsageAggregateV2UsageInferenceGetErrorBody
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

**OnSuccess**: <code>[InferenceUsageAggregateResponse](hud/models/inference_usage_aggregate_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetInferenceUsageAggregateV2UsageInferenceGetErrorBody](hud/errors/get_inference_usage_aggregate_v2_usage_inference_get_error.py)&#93;</code>

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
<summary><code>def create_byok_credential_v2_byok_credentials_post(body: ByokCredentialCreateRequest | ByokCredentialCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ByokCredentialItem</code></summary>

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
try:
    response = client.byok_credentials.create_byok_credential_v2_byok_credentials_post(
        ByokCredentialCreateRequest(provider_id=1, scope=Scope.MEMBER, value="some example string")
    )
    # TODO: Handle 'response' of type ByokCredentialItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateByokCredentialV2ByokCredentialsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.byok_credentials.create_byok_credential_v2_byok_credentials_post(
        ByokCredentialCreateRequest(provider_id=1, scope=Scope.MEMBER, value="some example string")
    )
    # TODO: Handle 'response' of type ByokCredentialItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateByokCredentialV2ByokCredentialsPostErrorBody
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

**OnSuccess**: <code>[ByokCredentialItem](hud/models/byok_credential_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateByokCredentialV2ByokCredentialsPostErrorBody](hud/errors/create_byok_credential_v2_byok_credentials_post_error.py)&#93;</code>

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
<summary><code>def delete_byok_credential_v2_byok_credentials_credential_id_delete(credential_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.byok_credentials.delete_byok_credential_v2_byok_credentials_credential_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.byok_credentials.delete_byok_credential_v2_byok_credentials_credential_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteByokCredentialV2ByokCredentialsCredentialIdDeleteErrorBody](hud/errors/delete_byok_credential_v2_byok_credentials_credential_id_delete_error.py)&#93;</code>

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
<summary><code>def list_byok_credentials_v2_byok_credentials_get(*, request_options: RequestOptionsOrDict | None = None) -> ByokCredentialsListResponse</code></summary>

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
try:
    response = client.byok_credentials.list_byok_credentials_v2_byok_credentials_get()
    # TODO: Handle 'response' of type ByokCredentialsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListByokCredentialsV2ByokCredentialsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.byok_credentials.list_byok_credentials_v2_byok_credentials_get()
    # TODO: Handle 'response' of type ByokCredentialsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListByokCredentialsV2ByokCredentialsGetErrorBody
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

**OnSuccess**: <code>[ByokCredentialsListResponse](hud/models/byok_credentials_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListByokCredentialsV2ByokCredentialsGetErrorBody](hud/errors/list_byok_credentials_v2_byok_credentials_get_error.py)&#93;</code>

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
<summary><code>def update_byok_credential_v2_byok_credentials_credential_id_patch(credential_id: UUID, body: ByokCredentialUpdateRequest | ByokCredentialUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ByokCredentialItem</code></summary>

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
try:
    response = client.byok_credentials.update_byok_credential_v2_byok_credentials_credential_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), ByokCredentialUpdateRequest(value="some example string")
    )
    # TODO: Handle 'response' of type ByokCredentialItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.byok_credentials.update_byok_credential_v2_byok_credentials_credential_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), ByokCredentialUpdateRequest(value="some example string")
    )
    # TODO: Handle 'response' of type ByokCredentialItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody
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

**OnSuccess**: <code>[ByokCredentialItem](hud/models/byok_credential_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateByokCredentialV2ByokCredentialsCredentialIdPatchErrorBody](hud/errors/update_byok_credential_v2_byok_credentials_credential_id_patch_error.py)&#93;</code>

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
<summary><code>def batch_replace_env_vars_v2_env_vars_batch_put(body: RegistryEnvVarBatchRequest | RegistryEnvVarBatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RegistryEnvVarBatchResponse</code></summary>

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
try:
    response = client.env_vars.batch_replace_env_vars_v2_env_vars_batch_put(
        RegistryEnvVarBatchRequest(
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            variables=[RegistryEnvVarBatchItem(name="some example string", value="some example string")],
        ),
    )
    # TODO: Handle 'response' of type RegistryEnvVarBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody
```

**Async**

```python
try:
    response = await async_client.env_vars.batch_replace_env_vars_v2_env_vars_batch_put(
        RegistryEnvVarBatchRequest(
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            variables=[RegistryEnvVarBatchItem(name="some example string", value="some example string")],
        ),
    )
    # TODO: Handle 'response' of type RegistryEnvVarBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody
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

**OnSuccess**: <code>[RegistryEnvVarBatchResponse](hud/models/registry_env_var_batch_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[BatchReplaceEnvVarsV2EnvVarsBatchPutErrorBody](hud/errors/batch_replace_env_vars_v2_env_vars_batch_put_error.py)&#93;</code>

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
<summary><code>def check_env_var_completeness_v2_env_vars_check_post(body: RegistryEnvVarCheckRequest | RegistryEnvVarCheckRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RegistryEnvVarCheckResponse</code></summary>

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
try:
    response = client.env_vars.check_env_var_completeness_v2_env_vars_check_post(
        RegistryEnvVarCheckRequest(registry_ids=[UUID("00000000-0000-0000-0000-000000000000")])
    )
    # TODO: Handle 'response' of type RegistryEnvVarCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody
```

**Async**

```python
try:
    response = await async_client.env_vars.check_env_var_completeness_v2_env_vars_check_post(
        RegistryEnvVarCheckRequest(registry_ids=[UUID("00000000-0000-0000-0000-000000000000")])
    )
    # TODO: Handle 'response' of type RegistryEnvVarCheckResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody
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

**OnSuccess**: <code>[RegistryEnvVarCheckResponse](hud/models/registry_env_var_check_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CheckEnvVarCompletenessV2EnvVarsCheckPostErrorBody](hud/errors/check_env_var_completeness_v2_env_vars_check_post_error.py)&#93;</code>

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
<summary><code>def create_env_var_v2_env_vars_post(body: RegistryEnvVarCreateRequest | RegistryEnvVarCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RegistryEnvVarItem</code></summary>

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
try:
    response = client.env_vars.create_env_var_v2_env_vars_post(
        RegistryEnvVarCreateRequest(
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            name="some example string",
            value="some example string",
        ),
    )
    # TODO: Handle 'response' of type RegistryEnvVarItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvVarV2EnvVarsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.env_vars.create_env_var_v2_env_vars_post(
        RegistryEnvVarCreateRequest(
            registry_id=UUID("00000000-0000-0000-0000-000000000000"),
            name="some example string",
            value="some example string",
        ),
    )
    # TODO: Handle 'response' of type RegistryEnvVarItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateEnvVarV2EnvVarsPostErrorBody
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

**OnSuccess**: <code>[RegistryEnvVarItem](hud/models/registry_env_var_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateEnvVarV2EnvVarsPostErrorBody](hud/errors/create_env_var_v2_env_vars_post_error.py)&#93;</code>

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
<summary><code>def delete_env_var_v2_env_vars_var_id_delete(var_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.env_vars.delete_env_var_v2_env_vars_var_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.env_vars.delete_env_var_v2_env_vars_var_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteEnvVarV2EnvVarsVarIdDeleteErrorBody](hud/errors/delete_env_var_v2_env_vars_var_id_delete_error.py)&#93;</code>

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
<summary><code>def list_env_vars_v2_env_vars_get(registry_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> RegistryEnvVarsListResponse</code></summary>

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
try:
    response = client.env_vars.list_env_vars_v2_env_vars_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RegistryEnvVarsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnvVarsV2EnvVarsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.env_vars.list_env_vars_v2_env_vars_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RegistryEnvVarsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListEnvVarsV2EnvVarsGetErrorBody
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

**OnSuccess**: <code>[RegistryEnvVarsListResponse](hud/models/registry_env_vars_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListEnvVarsV2EnvVarsGetErrorBody](hud/errors/list_env_vars_v2_env_vars_get_error.py)&#93;</code>

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
<summary><code>def update_env_var_v2_env_vars_var_id_patch(var_id: UUID, body: RegistryEnvVarUpdateRequest | RegistryEnvVarUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RegistryEnvVarItem</code></summary>

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
try:
    response = client.env_vars.update_env_var_v2_env_vars_var_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), RegistryEnvVarUpdateRequest()
    )
    # TODO: Handle 'response' of type RegistryEnvVarItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEnvVarV2EnvVarsVarIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.env_vars.update_env_var_v2_env_vars_var_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), RegistryEnvVarUpdateRequest()
    )
    # TODO: Handle 'response' of type RegistryEnvVarItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateEnvVarV2EnvVarsVarIdPatchErrorBody
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

**OnSuccess**: <code>[RegistryEnvVarItem](hud/models/registry_env_var_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateEnvVarV2EnvVarsVarIdPatchErrorBody](hud/errors/update_env_var_v2_env_vars_var_id_patch_error.py)&#93;</code>

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
<summary><code>def create_member_secret_v2_member_secrets_post(body: MemberSecretCreateRequest | MemberSecretCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MemberSecretItem</code></summary>

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
try:
    response = client.member_secrets.create_member_secret_v2_member_secrets_post(
        MemberSecretCreateRequest(name="some example string", value="some example string")
    )
    # TODO: Handle 'response' of type MemberSecretItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMemberSecretV2MemberSecretsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.member_secrets.create_member_secret_v2_member_secrets_post(
        MemberSecretCreateRequest(name="some example string", value="some example string")
    )
    # TODO: Handle 'response' of type MemberSecretItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateMemberSecretV2MemberSecretsPostErrorBody
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

**OnSuccess**: <code>[MemberSecretItem](hud/models/member_secret_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateMemberSecretV2MemberSecretsPostErrorBody](hud/errors/create_member_secret_v2_member_secrets_post_error.py)&#93;</code>

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
<summary><code>def delete_member_secret_v2_member_secrets_secret_id_delete(secret_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

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
try:
    client.member_secrets.delete_member_secret_v2_member_secrets_secret_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.member_secrets.delete_member_secret_v2_member_secrets_secret_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody
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

**OnSuccess**: No content

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[DeleteMemberSecretV2MemberSecretsSecretIdDeleteErrorBody](hud/errors/delete_member_secret_v2_member_secrets_secret_id_delete_error.py)&#93;</code>

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
<summary><code>def list_member_secrets_v2_member_secrets_get(*, request_options: RequestOptionsOrDict | None = None) -> MemberSecretsListResponse</code></summary>

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
try:
    response = client.member_secrets.list_member_secrets_v2_member_secrets_get()
    # TODO: Handle 'response' of type MemberSecretsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMemberSecretsV2MemberSecretsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.member_secrets.list_member_secrets_v2_member_secrets_get()
    # TODO: Handle 'response' of type MemberSecretsListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListMemberSecretsV2MemberSecretsGetErrorBody
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

**OnSuccess**: <code>[MemberSecretsListResponse](hud/models/member_secrets_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListMemberSecretsV2MemberSecretsGetErrorBody](hud/errors/list_member_secrets_v2_member_secrets_get_error.py)&#93;</code>

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
<summary><code>def update_member_secret_v2_member_secrets_secret_id_patch(secret_id: UUID, body: MemberSecretUpdateRequest | MemberSecretUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> MemberSecretItem</code></summary>

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
try:
    response = client.member_secrets.update_member_secret_v2_member_secrets_secret_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), MemberSecretUpdateRequest(value="some example string")
    )
    # TODO: Handle 'response' of type MemberSecretItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.member_secrets.update_member_secret_v2_member_secrets_secret_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), MemberSecretUpdateRequest(value="some example string")
    )
    # TODO: Handle 'response' of type MemberSecretItem
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody
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

**OnSuccess**: <code>[MemberSecretItem](hud/models/member_secret_item.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[UpdateMemberSecretV2MemberSecretsSecretIdPatchErrorBody](hud/errors/update_member_secret_v2_member_secrets_secret_id_patch_error.py)&#93;</code>

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
<summary><code>def list_qa_checks_v2_qa_checks_get(*, request_options: RequestOptionsOrDict | None = None) -> QaCheckListResponse</code></summary>

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
try:
    response = client.qa.list_qa_checks_v2_qa_checks_get()
    # TODO: Handle 'response' of type QaCheckListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQaChecksV2QaChecksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.qa.list_qa_checks_v2_qa_checks_get()
    # TODO: Handle 'response' of type QaCheckListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQaChecksV2QaChecksGetErrorBody
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

**OnSuccess**: <code>[QaCheckListResponse](hud/models/qa_check_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListQaChecksV2QaChecksGetErrorBody](hud/errors/list_qa_checks_v2_qa_checks_get_error.py)&#93;</code>

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
<summary><code>def list_qa_results_v2_qa_results_get(*, trace_ids: list[UUID] | None = None, task_ids: list[UUID] | None = None, include_history: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> QaResultListResponse</code></summary>

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
try:
    response = client.qa.list_qa_results_v2_qa_results_get()
    # TODO: Handle 'response' of type QaResultListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQaResultsV2QaResultsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.qa.list_qa_results_v2_qa_results_get()
    # TODO: Handle 'response' of type QaResultListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQaResultsV2QaResultsGetErrorBody
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

**OnSuccess**: <code>[QaResultListResponse](hud/models/qa_result_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListQaResultsV2QaResultsGetErrorBody](hud/errors/list_qa_results_v2_qa_results_get_error.py)&#93;</code>

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
<summary><code>def run_qa_checks_v2_qa_runs_post(body: QaRunCreateRequest | QaRunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> QaResultListResponse</code></summary>

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
try:
    response = client.qa.run_qa_checks_v2_qa_runs_post(QaRunCreateRequest(check_keys=["some example string"]))
    # TODO: Handle 'response' of type QaResultListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunQaChecksV2QaRunsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.qa.run_qa_checks_v2_qa_runs_post(
        QaRunCreateRequest(check_keys=["some example string"])
    )
    # TODO: Handle 'response' of type QaResultListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunQaChecksV2QaRunsPostErrorBody
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

**OnSuccess**: <code>[QaResultListResponse](hud/models/qa_result_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RunQaChecksV2QaRunsPostErrorBody](hud/errors/run_qa_checks_v2_qa_runs_post_error.py)&#93;</code>

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
<summary><code>def get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(result_id: UUID, *, since_seq: int | None = -1, limit: int | None = 100, request_options: RequestOptionsOrDict | None = None) -> TraceEventsResponse</code></summary>

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
try:
    response = client.qa_agents.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody
```

**Async**

```python
try:
    response = await async_client.qa_agents.get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TraceEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody
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

**OnSuccess**: <code>[TraceEventsResponse](hud/models/trace_events_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetQaAgentSanitizedRolloutV2QaAgentsResultsResultIdRolloutGetErrorBody](hud/errors/get_qa_agent_sanitized_rollout_v2_qa_agents_results_result_id_rollout_get_error.py)&#93;</code>

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
<summary><code>def get_qa_agent_v2_qa_agents_agent_id_get(agent_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> QaAgentResponse</code></summary>

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
try:
    response = client.qa_agents.get_qa_agent_v2_qa_agents_agent_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type QaAgentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQaAgentV2QaAgentsAgentIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.qa_agents.get_qa_agent_v2_qa_agents_agent_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type QaAgentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetQaAgentV2QaAgentsAgentIdGetErrorBody
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

**OnSuccess**: <code>[QaAgentResponse](hud/models/qa_agent_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetQaAgentV2QaAgentsAgentIdGetErrorBody](hud/errors/get_qa_agent_v2_qa_agents_agent_id_get_error.py)&#93;</code>

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
<summary><code>def list_qa_agents_v2_qa_agents_get(*, subject_type: QaAgentSubjectTypeOrStr | None = None, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseQaAgentResponse</code></summary>

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
try:
    response = client.qa_agents.list_qa_agents_v2_qa_agents_get()
    # TODO: Handle 'response' of type PaginatedResponseQaAgentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQaAgentsV2QaAgentsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.qa_agents.list_qa_agents_v2_qa_agents_get()
    # TODO: Handle 'response' of type PaginatedResponseQaAgentResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListQaAgentsV2QaAgentsGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseQaAgentResponse](hud/models/paginated_response_qa_agent_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListQaAgentsV2QaAgentsGetErrorBody](hud/errors/list_qa_agents_v2_qa_agents_get_error.py)&#93;</code>

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
<summary><code>def list_resource_qa_agent_results_v2_qa_agents_results_resources_get(*, subject_type: CheckSubjectTypeOrStr | None = None, subject_ids: list[UUID] | None = None, result_ids: list[UUID] | None = None, request_options: RequestOptionsOrDict | None = None) -> list[QaAgentResourceResultDetail]</code></summary>

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
try:
    response = client.qa_agents.list_resource_qa_agent_results_v2_qa_agents_results_resources_get()
    # TODO: Handle 'response' of type list[QaAgentResourceResultDetail]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.qa_agents.list_resource_qa_agent_results_v2_qa_agents_results_resources_get()
    # TODO: Handle 'response' of type list[QaAgentResourceResultDetail]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody
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

**OnSuccess**: <code>list&#91;[QaAgentResourceResultDetail](hud/models/qa_agent_resource_result_detail.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListResourceQaAgentResultsV2QaAgentsResultsResourcesGetErrorBody](hud/errors/list_resource_qa_agent_results_v2_qa_agents_results_resources_get_error.py)&#93;</code>

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
<summary><code>def run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(agent_id: UUID, body: QaAgentResourceRunRequest | QaAgentResourceRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> list[QaAgentResultResponse]</code></summary>

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
try:
    response = client.qa_agents.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        QaAgentResourceRunRequest(subject_ids=[UUID("00000000-0000-0000-0000-000000000000")]),
    )
    # TODO: Handle 'response' of type list[QaAgentResultResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody
```

**Async**

```python
try:
    response = await async_client.qa_agents.run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        QaAgentResourceRunRequest(subject_ids=[UUID("00000000-0000-0000-0000-000000000000")]),
    )
    # TODO: Handle 'response' of type list[QaAgentResultResponse]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody
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

**OnSuccess**: <code>list&#91;[QaAgentResultResponse](hud/models/qa_agent_result_response.py)&#93;</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RunResourceQaAgentV2QaAgentsAgentIdRunResourcesPostErrorBody](hud/errors/run_resource_qa_agent_v2_qa_agents_agent_id_run_resources_post_error.py)&#93;</code>

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
<summary><code>def cancel_job_v2_rollouts_cancel_job_post(body: CancelJobRequest | CancelJobRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CancelJobResponse</code></summary>

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
try:
    response = client.rollouts.cancel_job_v2_rollouts_cancel_job_post(
        CancelJobRequest(job_id=UUID("00000000-0000-0000-0000-000000000000"))
    )
    # TODO: Handle 'response' of type CancelJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelJobV2RolloutsCancelJobPostErrorBody
```

**Async**

```python
try:
    response = await async_client.rollouts.cancel_job_v2_rollouts_cancel_job_post(
        CancelJobRequest(job_id=UUID("00000000-0000-0000-0000-000000000000"))
    )
    # TODO: Handle 'response' of type CancelJobResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelJobV2RolloutsCancelJobPostErrorBody
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

**OnSuccess**: <code>[CancelJobResponse](hud/models/cancel_job_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CancelJobV2RolloutsCancelJobPostErrorBody](hud/errors/cancel_job_v2_rollouts_cancel_job_post_error.py)&#93;</code>

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
<summary><code>def cancel_user_jobs_v2_rollouts_cancel_user_jobs_post(*, request_options: RequestOptionsOrDict | None = None) -> CancelUserJobsResponse</code></summary>

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
try:
    response = client.rollouts.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post()
    # TODO: Handle 'response' of type CancelUserJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.rollouts.cancel_user_jobs_v2_rollouts_cancel_user_jobs_post()
    # TODO: Handle 'response' of type CancelUserJobsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody
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

**OnSuccess**: <code>[CancelUserJobsResponse](hud/models/cancel_user_jobs_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CancelUserJobsV2RolloutsCancelUserJobsPostErrorBody](hud/errors/cancel_user_jobs_v2_rollouts_cancel_user_jobs_post_error.py)&#93;</code>

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
<summary><code>def cancel_v2_rollouts_cancel_post(body: CancelRequest | CancelRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> CancelResponse</code></summary>

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
try:
    response = client.rollouts.cancel_v2_rollouts_cancel_post(
        CancelRequest(trace_id=UUID("00000000-0000-0000-0000-000000000000"))
    )
    # TODO: Handle 'response' of type CancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelV2RolloutsCancelPostErrorBody
```

**Async**

```python
try:
    response = await async_client.rollouts.cancel_v2_rollouts_cancel_post(
        CancelRequest(trace_id=UUID("00000000-0000-0000-0000-000000000000"))
    )
    # TODO: Handle 'response' of type CancelResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelV2RolloutsCancelPostErrorBody
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

**OnSuccess**: <code>[CancelResponse](hud/models/cancel_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CancelV2RolloutsCancelPostErrorBody](hud/errors/cancel_v2_rollouts_cancel_post_error.py)&#93;</code>

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
<summary><code>def run_list_v2_rollouts_run_list_post(body: RolloutRunListRequest | RolloutRunListRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RolloutBatchResponse</code></summary>

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
try:
    response = client.rollouts.run_list_v2_rollouts_run_list_post(RolloutRunListRequest())
    # TODO: Handle 'response' of type RolloutBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunListV2RolloutsRunListPostErrorBody
```

**Async**

```python
try:
    response = await async_client.rollouts.run_list_v2_rollouts_run_list_post(RolloutRunListRequest())
    # TODO: Handle 'response' of type RolloutBatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunListV2RolloutsRunListPostErrorBody
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

**OnSuccess**: <code>[RolloutBatchResponse](hud/models/rollout_batch_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RunListV2RolloutsRunListPostErrorBody](hud/errors/run_list_v2_rollouts_run_list_post_error.py)&#93;</code>

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
<summary><code>def run_v2_rollouts_run_post(body: RolloutRunRequest | RolloutRunRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RolloutResponse</code></summary>

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
try:
    response = client.rollouts.run_v2_rollouts_run_post(
        RolloutRunRequest(
            task_version_id=UUID("00000000-0000-0000-0000-000000000000"),
            model_id=UUID("00000000-0000-0000-0000-000000000000"),
        ),
    )
    # TODO: Handle 'response' of type RolloutResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunV2RolloutsRunPostErrorBody
```

**Async**

```python
try:
    response = await async_client.rollouts.run_v2_rollouts_run_post(
        RolloutRunRequest(
            task_version_id=UUID("00000000-0000-0000-0000-000000000000"),
            model_id=UUID("00000000-0000-0000-0000-000000000000"),
        ),
    )
    # TODO: Handle 'response' of type RolloutResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunV2RolloutsRunPostErrorBody
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

**OnSuccess**: <code>[RolloutResponse](hud/models/rollout_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[RunV2RolloutsRunPostErrorBody](hud/errors/run_v2_rollouts_run_post_error.py)&#93;</code>

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
<summary><code>def submit_v2_rollouts_submit_post(body: RolloutSubmitRequest | RolloutSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RolloutResponse</code></summary>

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
try:
    response = client.rollouts.submit_v2_rollouts_submit_post(
        RolloutSubmitRequest(
            trace_id=UUID("00000000-0000-0000-0000-000000000000"),
            job_id=UUID("00000000-0000-0000-0000-000000000000"),
            env="some example string",
            task="some example string",
            agent=SubmittedAgentSpec(type_=TypeHudPlatformRolloutsApi.CLAUDE, config={}),
        ),
    )
    # TODO: Handle 'response' of type RolloutResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitV2RolloutsSubmitPostErrorBody
```

**Async**

```python
try:
    response = await async_client.rollouts.submit_v2_rollouts_submit_post(
        RolloutSubmitRequest(
            trace_id=UUID("00000000-0000-0000-0000-000000000000"),
            job_id=UUID("00000000-0000-0000-0000-000000000000"),
            env="some example string",
            task="some example string",
            agent=SubmittedAgentSpec(type_=TypeHudPlatformRolloutsApi.CLAUDE, config={}),
        ),
    )
    # TODO: Handle 'response' of type RolloutResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SubmitV2RolloutsSubmitPostErrorBody
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

**OnSuccess**: <code>[RolloutResponse](hud/models/rollout_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[SubmitV2RolloutsSubmitPostErrorBody](hud/errors/submit_v2_rollouts_submit_post_error.py)&#93;</code>

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
<summary><code>def create_taskset_v2_tasksets_post(body: TasksetCreateRequest | TasksetCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TasksetResponse</code></summary>

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
try:
    response = client.tasksets.create_taskset_v2_tasksets_post(TasksetCreateRequest(name="some example string"))
    # TODO: Handle 'response' of type TasksetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTasksetV2TasksetsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.tasksets.create_taskset_v2_tasksets_post(
        TasksetCreateRequest(name="some example string")
    )
    # TODO: Handle 'response' of type TasksetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateTasksetV2TasksetsPostErrorBody
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

**OnSuccess**: <code>[TasksetResponse](hud/models/taskset_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[CreateTasksetV2TasksetsPostErrorBody](hud/errors/create_taskset_v2_tasksets_post_error.py)&#93;</code>

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
<summary><code>def export_taskset_v2_tasksets_taskset_id_export_get(taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TasksetExportResponse</code></summary>

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
try:
    response = client.tasksets.export_taskset_v2_tasksets_taskset_id_export_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TasksetExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportTasksetV2TasksetsTasksetIdExportGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasksets.export_taskset_v2_tasksets_taskset_id_export_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TasksetExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExportTasksetV2TasksetsTasksetIdExportGetErrorBody
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

**OnSuccess**: <code>[TasksetExportResponse](hud/models/taskset_export_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ExportTasksetV2TasksetsTasksetIdExportGetErrorBody](hud/errors/export_taskset_v2_tasksets_taskset_id_export_get_error.py)&#93;</code>

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
<summary><code>def get_taskset_by_name_v2_tasksets_by_name_name_get(name: str, *, request_options: RequestOptionsOrDict | None = None) -> TasksetExportResponse</code></summary>

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
try:
    response = client.tasksets.get_taskset_by_name_v2_tasksets_by_name_name_get("some example string")
    # TODO: Handle 'response' of type TasksetExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTasksetByNameV2TasksetsByNameNameGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasksets.get_taskset_by_name_v2_tasksets_by_name_name_get("some example string")
    # TODO: Handle 'response' of type TasksetExportResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTasksetByNameV2TasksetsByNameNameGetErrorBody
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

**OnSuccess**: <code>[TasksetExportResponse](hud/models/taskset_export_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTasksetByNameV2TasksetsByNameNameGetErrorBody](hud/errors/get_taskset_by_name_v2_tasksets_by_name_name_get_error.py)&#93;</code>

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
<summary><code>def get_taskset_v2_tasksets_taskset_id_get(taskset_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> TasksetResponse</code></summary>

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
try:
    response = client.tasksets.get_taskset_v2_tasksets_taskset_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type TasksetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTasksetV2TasksetsTasksetIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasksets.get_taskset_v2_tasksets_taskset_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type TasksetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetTasksetV2TasksetsTasksetIdGetErrorBody
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

**OnSuccess**: <code>[TasksetResponse](hud/models/taskset_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[GetTasksetV2TasksetsTasksetIdGetErrorBody](hud/errors/get_taskset_v2_tasksets_taskset_id_get_error.py)&#93;</code>

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
<summary><code>def list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(taskset_id: UUID, *, limit: int | None = 50, offset: int | None = 0, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseTaskResponse</code></summary>

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
try:
    response = client.tasksets.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PaginatedResponseTaskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasksets.list_taskset_tasks_v2_tasksets_taskset_id_tasks_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type PaginatedResponseTaskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseTaskResponse](hud/models/paginated_response_task_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListTasksetTasksV2TasksetsTasksetIdTasksGetErrorBody](hud/errors/list_taskset_tasks_v2_tasksets_taskset_id_tasks_get_error.py)&#93;</code>

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
<summary><code>def list_tasksets_v2_tasksets_get(*, limit: int | None = 50, offset: int | None = 0, search: str | None = None, public_only: bool | None = False, featured_only: bool | None = False, owner_only: bool | None = False, min_tasks: int | None = None, registry_id: UUID | None = None, scenario_id: UUID | None = None, project_id: UUID | None = None, sort_by: SortByHudPlatformTasksetsApiOrStr | None = SortByHudPlatformTasksetsApi.STARRED, request_options: RequestOptionsOrDict | None = None) -> PaginatedResponseTasksetResponse</code></summary>

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
try:
    response = client.tasksets.list_tasksets_v2_tasksets_get()
    # TODO: Handle 'response' of type PaginatedResponseTasksetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTasksetsV2TasksetsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.tasksets.list_tasksets_v2_tasksets_get()
    # TODO: Handle 'response' of type PaginatedResponseTasksetResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListTasksetsV2TasksetsGetErrorBody
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

**OnSuccess**: <code>[PaginatedResponseTasksetResponse](hud/models/paginated_response_taskset_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](hud/core/exceptions.py)&#91;[ListTasksetsV2TasksetsGetErrorBody](hud/errors/list_tasksets_v2_tasksets_get_error.py)&#93;</code>

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

