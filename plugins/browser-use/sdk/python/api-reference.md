# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [BrowserUseClient](browser_use/client.py)

## Browsers

> Source: [Browsers](browser_use/apis/browsers.py)

<details>
<summary><code>def create_browser_session_browsers_post(body: CreateBrowserSessionRequest | CreateBrowserSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BrowserSessionItemView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Create a new browser session.

**Pricing:** Browser sessions are charged at $0.02/hour for all users.

The full rate is charged upfront when the session starts.
When you stop the session, any unused time is automatically refunded proportionally.

Billing is rounded up to the minute (minimum 1 minute).
For example, if you stop a session after 30 minutes, you'll be refunded half the charged amount.

**Session Limits:**
- All users: Up to 4 hours per session

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.browsers.create_browser_session_browsers_post(CreateBrowserSessionRequest())
    # TODO: Handle 'response' of type BrowserSessionItemView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBrowserSessionBrowsersPostErrorBody
```

**Async**

```python
try:
    response = await async_client.browsers.create_browser_session_browsers_post(CreateBrowserSessionRequest())
    # TODO: Handle 'response' of type BrowserSessionItemView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateBrowserSessionBrowsersPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBrowserSessionRequest](browser_use/models/create_browser_session_request.py) \| [CreateBrowserSessionRequestDict](browser_use/models/create_browser_session_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionItemView](browser_use/models/browser_session_item_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CreateBrowserSessionBrowsersPostErrorBody](browser_use/errors/create_browser_session_browsers_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[ApiKeySpendLimitError](browser_use/models/api_key_spend_limit_error.py)</code> |
| 403 | <code>[SessionTimeoutLimitExceededError](browser_use/models/session_timeout_limit_exceeded_error.py)</code> |
| 404 | <code>[ProfileNotFoundError](browser_use/models/profile_not_found_error.py)</code> |
| 422 | <code>[ValidationError](browser_use/models/validation_error.py)</code> |
| 429 | <code>[TooManyConcurrentActiveSessionsError](browser_use/models/too_many_concurrent_active_sessions_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_browser_session_browsers_session_id_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> BrowserSessionView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get detailed browser session information including status and URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.browsers.get_browser_session_browsers_session_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type BrowserSessionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBrowserSessionBrowsersSessionIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.browsers.get_browser_session_browsers_session_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BrowserSessionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBrowserSessionBrowsersSessionIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionView](browser_use/models/browser_session_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetBrowserSessionBrowsersSessionIdGetErrorBody](browser_use/errors/get_browser_session_browsers_session_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[SessionNotFoundError](browser_use/models/session_not_found_error.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_browser_session_downloads_browsers_session_id_downloads_get(session_id: UUID, *, limit: int | None = 50, cursor: str | None = None, include_urls: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> BrowserDownloadListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files the browser downloaded to S3 during the session.

Pass `includeUrls=true` to receive presigned download URLs (15 min expiry) inline.
Files are stored at `downloads/projects/{project_id}/sessions/{session_id}/` in
the private bucket.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.browsers.list_browser_session_downloads_browsers_session_id_downloads_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BrowserDownloadListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.browsers.list_browser_session_downloads_browsers_session_id_downloads_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type BrowserDownloadListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_urls</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserDownloadListResponse](browser_use/models/browser_download_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListBrowserSessionDownloadsBrowsersSessionIdDownloadsGetErrorBody](browser_use/errors/list_browser_session_downloads_browsers_session_id_downloads_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[SessionNotFoundError](browser_use/models/session_not_found_error.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_browser_sessions_browsers_get(*, metadata: list[str] | None = None, page_size: int | None = 10, page_number: int | None = 1, filter_by: BrowserSessionStatusOrStr | None = None, agent_session_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> BrowserSessionListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get paginated list of browser sessions with optional status filtering.

List responses intentionally omit per-session presigned recording URLs
(`recording_url` is always `null` here). Each recording URL requires a
synchronous boto3 SigV4 signing call (plus an S3 HEAD) that holds the GIL
and blocks the event loop. With page_size up to the max this CPU-pegs the
worker and starves the DB pool, cascading into pool exhaustion across the
fleet. Clients should fetch the recording URL on demand via
`GET /api/v2/browsers/{id}`, which signs exactly one URL for a single
session. Mirrors the v3 sessions list fix (ENG-4904, PR #4621).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.browsers.list_browser_sessions_browsers_get()
    # TODO: Handle 'response' of type BrowserSessionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBrowserSessionsBrowsersGetErrorBody
```

**Async**

```python
try:
    response = await async_client.browsers.list_browser_sessions_browsers_get()
    # TODO: Handle 'response' of type BrowserSessionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListBrowserSessionsBrowsersGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>metadata</code> | <code>list&#91;str&#93; \| None</code> | Only browsers tagged with every one of these terms. `key` matches any value; `key=value` matches exactly. Repeat the param to require more than one (AND).<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>page_number</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>filter_by</code> | <code>[BrowserSessionStatusOrStr](browser_use/models/enums/browser_session_status.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>agent_session_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionListResponse](browser_use/models/browser_session_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListBrowserSessionsBrowsersGetErrorBody](browser_use/errors/list_browser_sessions_browsers_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_browser_session_browsers_session_id_patch(session_id: UUID, body: UpdateBrowserSessionRequest | UpdateBrowserSessionRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BrowserSessionView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stop a browser session.

**Refund:** When you stop a session, unused time is automatically refunded.
If the session ran for less than 1 hour, you'll receive a proportional refund.
Billing is ceil to the nearest minute (minimum 1 minute).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.browsers.update_browser_session_browsers_session_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), UpdateBrowserSessionRequest()
    )
    # TODO: Handle 'response' of type BrowserSessionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBrowserSessionBrowsersSessionIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.browsers.update_browser_session_browsers_session_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), UpdateBrowserSessionRequest()
    )
    # TODO: Handle 'response' of type BrowserSessionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateBrowserSessionBrowsersSessionIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[UpdateBrowserSessionRequest](browser_use/models/update_browser_session_request.py) \| [UpdateBrowserSessionRequestDict](browser_use/models/update_browser_session_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BrowserSessionView](browser_use/models/browser_session_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UpdateBrowserSessionBrowsersSessionIdPatchErrorBody](browser_use/errors/update_browser_session_browsers_session_id_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[SessionNotFoundError](browser_use/models/session_not_found_error.py)</code> |
| 422 | <code>[ValidationError](browser_use/models/validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Extensions

> Source: [Extensions](browser_use/apis/extensions.py)

<details>
<summary><code>def delete_extension_extensions_extension_id_delete(extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete an extension without affecting running browsers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.extensions.delete_extension_extensions_extension_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExtensionExtensionsExtensionIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.extensions.delete_extension_extensions_extension_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteExtensionExtensionsExtensionIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>extension_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[DeleteExtensionExtensionsExtensionIdDeleteErrorBody](browser_use/errors/delete_extension_extensions_extension_id_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 503 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_extension_extensions_extension_id_get(extension_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ExtensionView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get an uploaded extension by its ID.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.extensions.get_extension_extensions_extension_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ExtensionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExtensionExtensionsExtensionIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.extensions.get_extension_extensions_extension_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ExtensionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetExtensionExtensionsExtensionIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>extension_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionView](browser_use/models/extension_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetExtensionExtensionsExtensionIdGetErrorBody](browser_use/errors/get_extension_extensions_extension_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_extensions_extensions_get(*, page_size: int | None = 10, page_number: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> ExtensionListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the extensions uploaded to this project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.extensions.list_extensions_extensions_get()
    # TODO: Handle 'response' of type ExtensionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtensionsExtensionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.extensions.list_extensions_extensions_get()
    # TODO: Handle 'response' of type ExtensionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListExtensionsExtensionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>page_number</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionListResponse](browser_use/models/extension_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListExtensionsExtensionsGetErrorBody](browser_use/errors/list_extensions_extensions_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_extension_extensions_post(file: FileInput, *, request_options: RequestOptionsOrDict | None = None) -> ExtensionView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upload a Manifest V3 extension as a ZIP file with manifest.json at its root.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.extensions.upload_extension_extensions_post(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type ExtensionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadExtensionExtensionsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.extensions.upload_extension_extensions_post(Path("path/to/file.bin"))
    # TODO: Handle 'response' of type ExtensionView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadExtensionExtensionsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>file</code> | <code>FileInput</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtensionView](browser_use/models/extension_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UploadExtensionExtensionsPostErrorBody](browser_use/errors/upload_extension_extensions_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 413, 422, 503 | <code>[RawError](browser_use/core/results.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Integrations

> Source: [Integrations](browser_use/apis/integrations.py)

<details>
<summary><code>def authorize_integration_integrations_provider_authorize_post(provider: str, *, request_options: RequestOptionsOrDict | None = None) -> AuthorizeResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get the OAuth redirect URL for connecting an integration.

The client opens the returned URL in a web auth session and polls
`/integrations/{provider}/status` once the flow lands back on the callback
path. The URL is Composio-hosted; no redirect URI is registered per client.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.integrations.authorize_integration_integrations_provider_authorize_post("some example string")
    # TODO: Handle 'response' of type AuthorizeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody
```

**Async**

```python
try:
    response = await async_client.integrations.authorize_integration_integrations_provider_authorize_post(
        "some example string"
    )
    # TODO: Handle 'response' of type AuthorizeResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AuthorizeResponse](browser_use/models/authorize_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody](browser_use/errors/authorize_integration_integrations_provider_authorize_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def disconnect_integration_integrations_provider_delete(provider: str, *, request_options: RequestOptionsOrDict | None = None) -> DisconnectResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disconnect an integration for this project.

Deliberately NOT gated like `authorize` above: a restricted project must
still be able to tear down a connection it already has.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.integrations.disconnect_integration_integrations_provider_delete("some example string")
    # TODO: Handle 'response' of type DisconnectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisconnectIntegrationIntegrationsProviderDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.integrations.disconnect_integration_integrations_provider_delete(
        "some example string"
    )
    # TODO: Handle 'response' of type DisconnectResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DisconnectIntegrationIntegrationsProviderDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DisconnectResponse](browser_use/models/disconnect_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[DisconnectIntegrationIntegrationsProviderDeleteErrorBody](browser_use/errors/disconnect_integration_integrations_provider_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_connection_status_integrations_provider_status_get(provider: str, *, request_options: RequestOptionsOrDict | None = None) -> ConnectionStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Check whether this project has connected a specific provider.

Poll this after opening the authorize URL to learn when OAuth completed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.integrations.get_connection_status_integrations_provider_status_get("some example string")
    # TODO: Handle 'response' of type ConnectionStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionStatusIntegrationsProviderStatusGetErrorBody
```

**Async**

```python
try:
    response = await async_client.integrations.get_connection_status_integrations_provider_status_get(
        "some example string"
    )
    # TODO: Handle 'response' of type ConnectionStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetConnectionStatusIntegrationsProviderStatusGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>provider</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ConnectionStatusResponse](browser_use/models/connection_status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetConnectionStatusIntegrationsProviderStatusGetErrorBody](browser_use/errors/get_connection_status_integrations_provider_status_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_categories_integrations_categories_get(*, request_options: RequestOptionsOrDict | None = None) -> IntegrationCategoryResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all integration categories, for filtering the list above.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.integrations.list_categories_integrations_categories_get()
    # TODO: Handle 'response' of type IntegrationCategoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCategoriesIntegrationsCategoriesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.integrations.list_categories_integrations_categories_get()
    # TODO: Handle 'response' of type IntegrationCategoryResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListCategoriesIntegrationsCategoriesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntegrationCategoryResponse](browser_use/models/integration_category_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListCategoriesIntegrationsCategoriesGetErrorBody](browser_use/errors/list_categories_integrations_categories_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_integrations_integrations_get(*, limit: int | None = None, offset: int | None = 0, search: str | None = None, popular_only: bool | None = False, connected_only: bool | None = False, request_options: RequestOptionsOrDict | None = None) -> IntegrationListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List available integrations with this project's connection status.

`is_connected` is resolved per integration, so a client can render the whole
catalogue and the connected subset from this one call. `connected_only` is
what a "my integrations" view reads — including on a restricted project,
which cannot connect anything but can still remove what it already has.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.integrations.list_integrations_integrations_get()
    # TODO: Handle 'response' of type IntegrationListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntegrationsIntegrationsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.integrations.list_integrations_integrations_get()
    # TODO: Handle 'response' of type IntegrationListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListIntegrationsIntegrationsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Number of results to skip<br>**Default**: <code>0</code> |
| <code>search</code> | <code>str \| None</code> | Filter by name, description or provider<br>**Default**: <code>None</code> |
| <code>popular_only</code> | <code>bool \| None</code> | Only return popular integrations<br>**Default**: <code>False</code> |
| <code>connected_only</code> | <code>bool \| None</code> | Only return integrations this project has connected<br>**Default**: <code>False</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[IntegrationListResponse](browser_use/models/integration_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListIntegrationsIntegrationsGetErrorBody](browser_use/errors/list_integrations_integrations_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Profiles

> Source: [Profiles](browser_use/apis/profiles.py)

<details>
<summary><code>def create_profile_profiles_post(*, body: ProfileCreateRequest | ProfileCreateRequestDict | None = None, request_options: RequestOptionsOrDict | None = None) -> ProfileView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Profiles allow you to preserve the state of the browser between tasks.

They are most commonly used to allow users to preserve the log-in state in the agent between tasks.
You'd normally create one profile per user and then use it for all their tasks.

You can set a `user_id` when creating a profile to associate it with a user in your system.
This allows you to later search for the profile using the GET /profiles endpoint with a query parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.profiles.create_profile_profiles_post()
    # TODO: Handle 'response' of type ProfileView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProfileProfilesPostErrorBody
```

**Async**

```python
try:
    response = await async_client.profiles.create_profile_profiles_post()
    # TODO: Handle 'response' of type ProfileView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateProfileProfilesPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ProfileCreateRequest](browser_use/models/profile_create_request.py) \| [ProfileCreateRequestDict](browser_use/models/profile_create_request.py) \| None</code> | The request body.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileView](browser_use/models/profile_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CreateProfileProfilesPostErrorBody](browser_use/errors/create_profile_profiles_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[InsufficientCreditsError](browser_use/models/insufficient_credits_error.py)</code> |
| 422 | <code>[ValidationError](browser_use/models/validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_browser_profile_profiles_profile_id_delete(profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a browser profile and its configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.profiles.delete_browser_profile_profiles_profile_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBrowserProfileProfilesProfileIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.profiles.delete_browser_profile_profiles_profile_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteBrowserProfileProfilesProfileIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>profile_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[DeleteBrowserProfileProfilesProfileIdDeleteErrorBody](browser_use/errors/delete_browser_profile_profiles_profile_id_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_profile_profiles_profile_id_get(profile_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ProfileView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get profile details.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.profiles.get_profile_profiles_profile_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type ProfileView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProfileProfilesProfileIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.profiles.get_profile_profiles_profile_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type ProfileView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetProfileProfilesProfileIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>profile_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileView](browser_use/models/profile_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetProfileProfilesProfileIdGetErrorBody](browser_use/errors/get_profile_profiles_profile_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProfileNotFoundError](browser_use/models/profile_not_found_error.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_profiles_profiles_get(*, page_size: int | None = 10, page_number: int | None = 1, query: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ProfileListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get paginated list of profiles.

Use the `query` parameter to search profiles by name or user_id.
This is useful when you have many profiles and need to find a specific user.

Example: If you set `user_id` to your internal user identifier when creating profiles,
you can later search for that user by passing their identifier as the `query` parameter.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.profiles.list_profiles_profiles_get()
    # TODO: Handle 'response' of type ProfileListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProfilesProfilesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.profiles.list_profiles_profiles_get()
    # TODO: Handle 'response' of type ProfileListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListProfilesProfilesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>page_size</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>10</code> |
| <code>page_number</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>1</code> |
| <code>query</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileListResponse](browser_use/models/profile_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListProfilesProfilesGetErrorBody](browser_use/errors/list_profiles_profiles_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_profile_profiles_profile_id_patch(profile_id: UUID, body: ProfileUpdateRequest | ProfileUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ProfileView</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update a browser profile's information.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.profiles.update_profile_profiles_profile_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), ProfileUpdateRequest()
    )
    # TODO: Handle 'response' of type ProfileView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProfileProfilesProfileIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.profiles.update_profile_profiles_profile_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), ProfileUpdateRequest()
    )
    # TODO: Handle 'response' of type ProfileView
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateProfileProfilesProfileIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>profile_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[ProfileUpdateRequest](browser_use/models/profile_update_request.py) \| [ProfileUpdateRequestDict](browser_use/models/profile_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProfileView](browser_use/models/profile_view.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UpdateProfileProfilesProfileIdPatchErrorBody](browser_use/errors/update_profile_profiles_profile_id_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProfileNotFoundError](browser_use/models/profile_not_found_error.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Runs

> Source: [Runs](browser_use/apis/runs.py)

<details>
<summary><code>def cancel_run_runs_run_id_cancel_post(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> RunSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancel an in-flight run.

Idempotent: a run already in a terminal state (completed / failed /
cancelled) is returned as-is. Once cancelled, the gateway refuses
every subsequent `chat_completions` call from the worker — so the
project cannot be billed further regardless of whether the worker
subprocess notices the cancel itself.

The worker keeps running for at most one more bcode step
(consuming no LLM tokens because CP 409s them) and then exits when
bcode realizes the next tool call has no model behind it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.cancel_run_runs_run_id_cancel_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelRunRunsRunIdCancelPostErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.cancel_run_runs_run_id_cancel_post(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelRunRunsRunIdCancelPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunSummary](browser_use/models/run_summary.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CancelRunRunsRunIdCancelPostErrorBody](browser_use/errors/cancel_run_runs_run_id_cancel_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 502, 503 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_run_runs_post(body: RunCreateRequest | RunCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> RunCreateResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `POST` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.create_run_runs_post(RunCreateRequest(task="some example string"))
    # TODO: Handle 'response' of type RunCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRunRunsPostErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.create_run_runs_post(RunCreateRequest(task="some example string"))
    # TODO: Handle 'response' of type RunCreateResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRunRunsPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RunCreateRequest](browser_use/models/run_create_request.py) \| [RunCreateRequestDict](browser_use/models/run_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunCreateResponse](browser_use/models/run_create_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CreateRunRunsPostErrorBody](browser_use/errors/create_run_runs_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409, 429 | <code>[RawError](browser_use/core/results.py)</code> |
| 402 | <code>[ApiKeySpendLimitError](browser_use/models/api_key_spend_limit_error.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_run_events_runs_run_id_events_get(run_id: UUID, *, limit: int | None = 200, after: int | None = 0, include_output: bool | None = True, request_options: RequestOptionsOrDict | None = None) -> RunEventsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Paginated event read. `after` is the event id cursor — clients
doing periodic polls pass back the highest id they've seen to get only
the delta. Default 0 returns from the start.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.get_run_events_runs_run_id_events_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RunEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunEventsRunsRunIdEventsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.get_run_events_runs_run_id_events_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RunEventsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunEventsRunsRunIdEventsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>200</code> |
| <code>after</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>0</code> |
| <code>include_output</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>True</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunEventsResponse](browser_use/models/run_events_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetRunEventsRunsRunIdEventsGetErrorBody](browser_use/errors/get_run_events_runs_run_id_events_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_run_runs_run_id_get(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> RunSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.get_run_runs_run_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunRunsRunIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.get_run_runs_run_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RunSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunRunsRunIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunSummary](browser_use/models/run_summary.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetRunRunsRunIdGetErrorBody](browser_use/errors/get_run_runs_run_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_run_status_runs_run_id_status_get(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> RunStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Minimal status poll (see RunStatusResponse). POLL rate bucket: selects
ONLY the status/project columns — a 2s poll never drags the task/result
text (TOAST reads) that GET /runs/{id} pays. Poll until terminal, then
fetch the full summary once.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.get_run_status_runs_run_id_status_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type RunStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunStatusRunsRunIdStatusGetErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.get_run_status_runs_run_id_status_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RunStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRunStatusRunsRunIdStatusGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunStatusResponse](browser_use/models/run_status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetRunStatusRunsRunIdStatusGetErrorBody](browser_use/errors/get_run_status_runs_run_id_status_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_run_attachments_runs_run_id_attachments_get(run_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> RunAttachmentsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The upload files attached to a run, for rendering attachment chips.
Ordered to match the run's attached_file_ids.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.list_run_attachments_runs_run_id_attachments_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RunAttachmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.list_run_attachments_runs_run_id_attachments_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type RunAttachmentsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>run_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunAttachmentsResponse](browser_use/models/run_attachments_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListRunAttachmentsRunsRunIdAttachmentsGetErrorBody](browser_use/errors/list_run_attachments_runs_run_id_attachments_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_runs_runs_get(*, limit: int | None = 50, cursor: str | None = None, session_id: UUID | None = None, request_options: RequestOptionsOrDict | None = None) -> RunListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.runs.list_runs_runs_get()
    # TODO: Handle 'response' of type RunListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRunsRunsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.runs.list_runs_runs_get()
    # TODO: Handle 'response' of type RunListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListRunsRunsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>cursor</code> | <code>str \| None</code> | Keyset cursor from a prior response.<br>**Default**: <code>None</code> |
| <code>session_id</code> | <code>UUID \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RunListResponse](browser_use/models/run_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListRunsRunsGetErrorBody](browser_use/errors/list_runs_runs_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sessions

> Source: [Sessions](browser_use/apis/sessions.py)

<details>
<summary><code>def cancel_queued_message_sessions_session_id_queue_message_id_delete(session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None) -> QueuedMessage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Remove a still-pending queued message; 409 once the drain has claimed it.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.cancel_queued_message_sessions_session_id_queue_message_id_delete(
        UUID("00000000-0000-0000-0000-000000000000"), 1
    )
    # TODO: Handle 'response' of type QueuedMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.cancel_queued_message_sessions_session_id_queue_message_id_delete(
        UUID("00000000-0000-0000-0000-000000000000"), 1
    )
    # TODO: Handle 'response' of type QueuedMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>message_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueuedMessage](browser_use/models/queued_message.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CancelQueuedMessageSessionsSessionIdQueueMessageIdDeleteErrorBody](browser_use/errors/cancel_queued_message_sessions_session_id_queue_message_id_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 409 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def create_session_share_sessions_session_id_share_post(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> SessionShareInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enable sharing: reactivates the session's existing share (stable token,
so a link that was toggled off keeps working when re-enabled) or creates
one on first use.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.create_session_share_sessions_session_id_share_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionShareInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSessionShareSessionsSessionIdSharePostErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.create_session_share_sessions_session_id_share_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionShareInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateSessionShareSessionsSessionIdSharePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionShareInfo](browser_use/models/session_share_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CreateSessionShareSessionsSessionIdSharePostErrorBody](browser_use/errors/create_session_share_sessions_session_id_share_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_session_sessions_session_id_delete(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete a session: it disappears from the session lists and can no longer
be opened or continued.

Soft delete (mirrors V2's `is_archived`): the runs, events and usage records
stay in place so billing and analytics keep reconciling, and ZDR purge is the
only thing that ever destroys V4 content. Idempotent — deleting twice is a
no-op 204.

An in-flight run is cancelled first, and pending queued messages are
cancelled too; otherwise the drain would dispatch a follow-up run whose
`session_archived_at` is NULL and resurrect the session. Cancel is forwarded
to CP before anything is written (and outside the queue lock, per the
enqueue path's ordering), so a CP failure (502) leaves the session visible
rather than hiding a run that is still burning credits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.sessions.delete_session_sessions_session_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSessionSessionsSessionIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.sessions.delete_session_sessions_session_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteSessionSessionsSessionIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[DeleteSessionSessionsSessionIdDeleteErrorBody](browser_use/errors/delete_session_sessions_session_id_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404, 502, 503 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_cost_sessions_session_id_cost_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> SessionCostResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Everything this session has cost so far, split by source.

A run's `total_cost_usd` is its LLM (and web-search) charge only. Browser
time and proxy bandwidth are metered against the session's browser, which
outlives any one run — so this is the endpoint for the session's full cost.

These are recorded usage costs, not an invoice total: promotional waivers
and credits are applied downstream in billing, so a session run under a
promotion can report cost here that was never charged.

Costs keep moving after a run reports `finished`: LLM calls settle up to
about 90 seconds later, and the browser accrues time and proxy traffic
until it stops.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.get_session_cost_sessions_session_id_cost_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionCostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionCostSessionsSessionIdCostGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_cost_sessions_session_id_cost_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionCostResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionCostSessionsSessionIdCostGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionCostResponse](browser_use/models/session_cost_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetSessionCostSessionsSessionIdCostGetErrorBody](browser_use/errors/get_session_cost_sessions_session_id_cost_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_queue_message_sessions_session_id_queue_message_id_get(session_id: UUID, message_id: int, *, request_options: RequestOptionsOrDict | None = None) -> QueuedMessage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Read one queued message including terminal handoff states.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.get_session_queue_message_sessions_session_id_queue_message_id_get(
        UUID("00000000-0000-0000-0000-000000000000"), 1
    )
    # TODO: Handle 'response' of type QueuedMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_queue_message_sessions_session_id_queue_message_id_get(
        UUID("00000000-0000-0000-0000-000000000000"), 1
    )
    # TODO: Handle 'response' of type QueuedMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>message_id</code> | <code>int</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueuedMessage](browser_use/models/queued_message.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetSessionQueueMessageSessionsSessionIdQueueMessageIdGetErrorBody](browser_use/errors/get_session_queue_message_sessions_session_id_queue_message_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_sessions_session_id_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> SessionInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Session detail — the same slim shape as one GET /sessions row (its
latest run). Doubles as the busy/idle poll for a conversation (POLL rate
bucket): slim columns only, indexed public_session_id lookup, never the
heavy result/token fields.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.get_session_sessions_session_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type SessionInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionSessionsSessionIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_sessions_session_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionSessionsSessionIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionInfo](browser_use/models/session_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetSessionSessionsSessionIdGetErrorBody](browser_use/errors/get_session_sessions_session_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_session_share_sessions_session_id_share_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> SessionShareInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The session's share link (active or not); null if never shared.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.get_session_share_sessions_session_id_share_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionShareInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionShareSessionsSessionIdShareGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.get_session_share_sessions_session_id_share_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type SessionShareInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetSessionShareSessionsSessionIdShareGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionShareInfo](browser_use/models/session_share_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetSessionShareSessionsSessionIdShareGetErrorBody](browser_use/errors/get_session_share_sessions_session_id_share_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_session_queue_sessions_session_id_queue_get(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> QueueListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List open messages, recently delivered queued messages, and steering cutoffs.

Includes live dispatch claims so clients can restore an accepted queued
message after a refresh without briefly losing its waiting state.

Consumed QUEUE rows are returned too, capped at the most recent
_DELIVERED_QUEUE_HISTORY, plus up to _AGENCY_DELIVERED_QUEUE_HISTORY compact
Agency choice and generation receipts so inbox state survives refresh. A message absorbed mid-run is announced by a
`queued_input_injected` event carrying only its input id, so the chat has no
other source for the text to render. The cap bounds this response because
clients poll it while a run is active; a session with more delivered
follow-ups than the cap renders its oldest injected bubbles without text.

The latest consumed interrupt bridges the primary-write/read-replica gap
before its replacement run appears; clients discard it once that run is
visible. Compact per-source cutoffs preserve every historical interrupted
transcript boundary without returning every historical steering message and
its attachments.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.list_session_queue_sessions_session_id_queue_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type QueueListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionQueueSessionsSessionIdQueueGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.list_session_queue_sessions_session_id_queue_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type QueueListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionQueueSessionsSessionIdQueueGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueueListResponse](browser_use/models/queue_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListSessionQueueSessionsSessionIdQueueGetErrorBody](browser_use/errors/list_session_queue_sessions_session_id_queue_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_sessions_sessions_get(*, limit: int | None = 20, cursor: str | None = None, request_options: RequestOptionsOrDict | None = None) -> SessionListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List the project's V4 sessions — one row per session (its most recent
run), most-recent first.

A session is a conversation: follow-up runs reuse the same
public_session_id, so GET /api/v4/runs would list one row per RUN. This
collapses to one row per SESSION directly in Postgres with DISTINCT ON, so a
chatty session with 100 runs is still a single row (no scan amplification),
and selects only the slim columns the session list needs — never the heavy
per-run text/token/cost fields.

Keyset-paginated on the latest run's (created_at, id): pass `next_cursor`
back as `cursor` to page. Offset/COUNT was dropped — it doesn't scale on
projects with many sessions.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.list_sessions_sessions_get()
    # TODO: Handle 'response' of type SessionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionsSessionsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.list_sessions_sessions_get()
    # TODO: Handle 'response' of type SessionListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListSessionsSessionsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Max sessions per page (max 100).<br>**Default**: <code>20</code> |
| <code>cursor</code> | <code>str \| None</code> | Keyset cursor from a prior response.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionListResponse](browser_use/models/session_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListSessionsSessionsGetErrorBody](browser_use/errors/list_sessions_sessions_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def purge_session_sessions_session_id_purge_post(session_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Purge V4 session data; return 202 while active work or uploads defer deletion.

Redacts DB records and deletes S3 objects (bcode state, workspace files,
recordings, downloads, staging uploads) for every run in the session. Same
cleanup the ZDR cron performs, but on-demand; outstanding upload grants defer physical deletion. V4
analog of the V2 POST /sessions/{id}/purge. Surfaces shared with a still-live
sibling run are deferred by the same guards the cron uses.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.sessions.purge_session_sessions_session_id_purge_post(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurgeSessionSessionsSessionIdPurgePostErrorBody
```

**Async**

```python
try:
    await async_client.sessions.purge_session_sessions_session_id_purge_post(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PurgeSessionSessionsSessionIdPurgePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[PurgeSessionSessionsSessionIdPurgePostErrorBody](browser_use/errors/purge_session_sessions_session_id_purge_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def queue_session_message_sessions_session_id_queue_post(session_id: UUID, body: QueueMessageRequest | QueueMessageRequestDict, *, x_v4_queue_deduplicate: str | None = None, request_options: RequestOptionsOrDict | None = None) -> QueuedMessage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a message to a session. If the session is busy it waits on the queue
and runs as the next turn; if idle it drains immediately.

`interrupt=true` cancels the session's active run so this message takes effect
now instead of waiting for the current turn (no-op when the session is idle).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.queue_session_message_sessions_session_id_queue_post(
        UUID("00000000-0000-0000-0000-000000000000"), QueueMessageRequest(text="some example string")
    )
    # TODO: Handle 'response' of type QueuedMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueueSessionMessageSessionsSessionIdQueuePostErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.queue_session_message_sessions_session_id_queue_post(
        UUID("00000000-0000-0000-0000-000000000000"), QueueMessageRequest(text="some example string")
    )
    # TODO: Handle 'response' of type QueuedMessage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type QueueSessionMessageSessionsSessionIdQueuePostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[QueueMessageRequest](browser_use/models/queue_message_request.py) \| [QueueMessageRequestDict](browser_use/models/queue_message_request.py)</code> | The request body. |
| <code>x_v4_queue_deduplicate</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[QueuedMessage](browser_use/models/queued_message.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[QueueSessionMessageSessionsSessionIdQueuePostErrorBody](browser_use/errors/queue_session_message_sessions_session_id_queue_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 402 | <code>[ApiKeySpendLimitError](browser_use/models/api_key_spend_limit_error.py)</code> |
| 403, 404, 429 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_session_cost_cap_sessions_session_id_cost_cap_patch(session_id: UUID, body: SessionCostCapRequest | SessionCostCapRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SessionCostCapResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Update the active run cap without starting another run.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.update_session_cost_cap_sessions_session_id_cost_cap_patch(
        UUID("00000000-0000-0000-0000-000000000000"), SessionCostCapRequest(max_cost_usd=1.5)
    )
    # TODO: Handle 'response' of type SessionCostCapResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.update_session_cost_cap_sessions_session_id_cost_cap_patch(
        UUID("00000000-0000-0000-0000-000000000000"), SessionCostCapRequest(max_cost_usd=1.5)
    )
    # TODO: Handle 'response' of type SessionCostCapResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[SessionCostCapRequest](browser_use/models/session_cost_cap_request.py) \| [SessionCostCapRequestDict](browser_use/models/session_cost_cap_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionCostCapResponse](browser_use/models/session_cost_cap_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UpdateSessionCostCapSessionsSessionIdCostCapPatchErrorBody](browser_use/errors/update_session_cost_cap_sessions_session_id_cost_cap_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_session_sessions_session_id_patch(session_id: UUID, body: SessionUpdateRequest | SessionUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SessionInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a session.

`session_title` is denormalized onto every run in the session (the session
list reads the latest run), so a rename writes them all in one UPDATE. Null
clears the name and the UI falls back to the opening task — it does NOT
re-run title generation, which only fills rows where the title IS NULL and
so would silently overwrite the clear.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.update_session_sessions_session_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), SessionUpdateRequest()
    )
    # TODO: Handle 'response' of type SessionInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSessionSessionsSessionIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.update_session_sessions_session_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), SessionUpdateRequest()
    )
    # TODO: Handle 'response' of type SessionInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSessionSessionsSessionIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[SessionUpdateRequest](browser_use/models/session_update_request.py) \| [SessionUpdateRequestDict](browser_use/models/session_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionInfo](browser_use/models/session_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UpdateSessionSessionsSessionIdPatchErrorBody](browser_use/errors/update_session_sessions_session_id_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_session_share_sessions_session_id_share_put(session_id: UUID, body: SessionShareUpdateRequest | SessionShareUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SessionShareInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Toggle the session's share link on/off.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.sessions.update_session_share_sessions_session_id_share_put(
        UUID("00000000-0000-0000-0000-000000000000"), SessionShareUpdateRequest(is_active=True)
    )
    # TODO: Handle 'response' of type SessionShareInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSessionShareSessionsSessionIdSharePutErrorBody
```

**Async**

```python
try:
    response = await async_client.sessions.update_session_share_sessions_session_id_share_put(
        UUID("00000000-0000-0000-0000-000000000000"), SessionShareUpdateRequest(is_active=True)
    )
    # TODO: Handle 'response' of type SessionShareInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateSessionShareSessionsSessionIdSharePutErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>session_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[SessionShareUpdateRequest](browser_use/models/session_share_update_request.py) \| [SessionShareUpdateRequestDict](browser_use/models/session_share_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SessionShareInfo](browser_use/models/session_share_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UpdateSessionShareSessionsSessionIdSharePutErrorBody](browser_use/errors/update_session_share_sessions_session_id_share_put_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Wallets

> Source: [Wallets](browser_use/apis/wallets.py)

<details>
<summary><code>def get_stripe_link_status_stripe_link_get(*, request_options: RequestOptionsOrDict | None = None) -> StripeLinkStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The project's active Stripe Link wallet connection, if any.

Read-only: connecting happens in the cloud UI. A run opts into paying with
it by passing `connection_id` as RunCreateRequest.stripe_link_connection_id,
which is validated again there against this same project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.wallets.get_stripe_link_status_stripe_link_get()
    # TODO: Handle 'response' of type StripeLinkStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStripeLinkStatusStripeLinkGetErrorBody
```

**Async**

```python
try:
    response = await async_client.wallets.get_stripe_link_status_stripe_link_get()
    # TODO: Handle 'response' of type StripeLinkStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetStripeLinkStatusStripeLinkGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StripeLinkStatusResponse](browser_use/models/stripe_link_status_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetStripeLinkStatusStripeLinkGetErrorBody](browser_use/errors/get_stripe_link_status_stripe_link_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_agentcard_wallets_agentcard_wallets_get(*, request_options: RequestOptionsOrDict | None = None) -> AgentCardWalletListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The project's active AgentCard wallets, newest first.

Read-only: funding is admin-only during the beta. The UI uses this to offer
a wallet on the composer, which is how a run opts into spending — the id
then rides RunCreateRequest.agentcard_wallet_id and is validated again there
against this same project.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.wallets.list_agentcard_wallets_agentcard_wallets_get()
    # TODO: Handle 'response' of type AgentCardWalletListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAgentcardWalletsAgentcardWalletsGetErrorBody
```

**Async**

```python
try:
    response = await async_client.wallets.list_agentcard_wallets_agentcard_wallets_get()
    # TODO: Handle 'response' of type AgentCardWalletListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListAgentcardWalletsAgentcardWalletsGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AgentCardWalletListResponse](browser_use/models/agent_card_wallet_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListAgentcardWalletsAgentcardWalletsGetErrorBody](browser_use/errors/list_agentcard_wallets_agentcard_wallets_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Workspaces

> Source: [Workspaces](browser_use/apis/workspaces.py)

<details>
<summary><code>def create_workspace_workspaces_post(body: WorkspaceCreateRequest | WorkspaceCreateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Mint an empty workspace. Lets callers upload input files BEFORE the
first run exists; pass the id as workspaceId on POST /runs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.create_workspace_workspaces_post(WorkspaceCreateRequest())
    # TODO: Handle 'response' of type WorkspaceInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWorkspaceWorkspacesPostErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.create_workspace_workspaces_post(WorkspaceCreateRequest())
    # TODO: Handle 'response' of type WorkspaceInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWorkspaceWorkspacesPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[WorkspaceCreateRequest](browser_use/models/workspace_create_request.py) \| [WorkspaceCreateRequestDict](browser_use/models/workspace_create_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceInfo](browser_use/models/workspace_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[CreateWorkspaceWorkspacesPostErrorBody](browser_use/errors/create_workspace_workspaces_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspace_file_workspaces_workspace_id_files_delete(workspace_id: UUID, path: str, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Delete one exact path from a workspace and remove matching upload metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.workspaces.delete_workspace_file_workspaces_workspace_id_files_delete(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody
```

**Async**

```python
try:
    await async_client.workspaces.delete_workspace_file_workspaces_workspace_id_files_delete(
        UUID("00000000-0000-0000-0000-000000000000"), "some example string"
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>path</code> | <code>str</code> | Relative file path to delete |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteErrorBody](browser_use/errors/delete_workspace_file_workspaces_workspace_id_files_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_workspace_workspaces_workspace_id_delete(workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Archive a workspace. Idempotent for missing, archived, and foreign ids.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.workspaces.delete_workspace_workspaces_workspace_id_delete(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody
```

**Async**

```python
try:
    await async_client.workspaces.delete_workspace_workspaces_workspace_id_delete(
        UUID("00000000-0000-0000-0000-000000000000")
    )
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[DeleteWorkspaceWorkspacesWorkspaceIdDeleteErrorBody](browser_use/errors/delete_workspace_workspaces_workspace_id_delete_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspace_size_workspaces_workspace_id_size_get(workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceSizeInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return current storage usage and the plan-specific workspace quota.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.get_workspace_size_workspaces_workspace_id_size_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type WorkspaceSizeInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspace_size_workspaces_workspace_id_size_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type WorkspaceSizeInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceSizeInfo](browser_use/models/workspace_size_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetErrorBody](browser_use/errors/get_workspace_size_workspaces_workspace_id_size_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_workspace_workspaces_workspace_id_get(workspace_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.get_workspace_workspaces_workspace_id_get(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type WorkspaceInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceWorkspacesWorkspaceIdGetErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.get_workspace_workspaces_workspace_id_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type WorkspaceInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWorkspaceWorkspacesWorkspaceIdGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceInfo](browser_use/models/workspace_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[GetWorkspaceWorkspacesWorkspaceIdGetErrorBody](browser_use/errors/get_workspace_workspaces_workspace_id_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_workspace_files_workspaces_workspace_id_files_get(workspace_id: UUID, *, prefix: str | None = "", limit: int | None = 50, cursor: str | None = None, include_urls: bool | None = False, content_disposition: ContentdispositionOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> WorkspaceFileListResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List files the agent has produced for this workspace, paginated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.list_workspace_files_workspaces_workspace_id_files_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type WorkspaceFileListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.list_workspace_files_workspaces_workspace_id_files_get(
        UUID("00000000-0000-0000-0000-000000000000")
    )
    # TODO: Handle 'response' of type WorkspaceFileListResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>prefix</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>""</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>50</code> |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>include_urls</code> | <code>bool \| None</code> | Value sent with the request.<br>**Default**: <code>False</code> |
| <code>content_disposition</code> | <code>[ContentdispositionOrStr](browser_use/models/enums/contentdisposition.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceFileListResponse](browser_use/models/workspace_file_list_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[ListWorkspaceFilesWorkspacesWorkspaceIdFilesGetErrorBody](browser_use/errors/list_workspace_files_workspaces_workspace_id_files_get_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_workspace_workspaces_workspace_id_patch(workspace_id: UUID, body: WorkspaceUpdateRequest | WorkspaceUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceInfo</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Rename a workspace. Explicit null clears the name; omission is a no-op.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.update_workspace_workspaces_workspace_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), WorkspaceUpdateRequest()
    )
    # TODO: Handle 'response' of type WorkspaceInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.update_workspace_workspaces_workspace_id_patch(
        UUID("00000000-0000-0000-0000-000000000000"), WorkspaceUpdateRequest()
    )
    # TODO: Handle 'response' of type WorkspaceInfo
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[WorkspaceUpdateRequest](browser_use/models/workspace_update_request.py) \| [WorkspaceUpdateRequestDict](browser_use/models/workspace_update_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceInfo](browser_use/models/workspace_info.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UpdateWorkspaceWorkspacesWorkspaceIdPatchErrorBody](browser_use/errors/update_workspace_workspaces_workspace_id_patch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def upload_workspace_files_workspaces_workspace_id_files_upload_post(workspace_id: UUID, body: WorkspaceFileUploadRequest | WorkspaceFileUploadRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> WorkspaceFileUploadResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Presigned PUT URLs for input files, placed under `uploads/` in the
workspace. The agent pulls them in at the start of every run. URLs are
pinned to the declared Content-Type and exact Content-Length.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.workspaces.upload_workspace_files_workspaces_workspace_id_files_upload_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        WorkspaceFileUploadRequest(files=[WorkspaceFileUploadItem(name="some example string", size=1)]),
    )
    # TODO: Handle 'response' of type WorkspaceFileUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody
```

**Async**

```python
try:
    response = await async_client.workspaces.upload_workspace_files_workspaces_workspace_id_files_upload_post(
        UUID("00000000-0000-0000-0000-000000000000"),
        WorkspaceFileUploadRequest(files=[WorkspaceFileUploadItem(name="some example string", size=1)]),
    )
    # TODO: Handle 'response' of type WorkspaceFileUploadResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>workspace_id</code> | <code>UUID</code> | Value sent with the request. |
| <code>body</code> | <code>[WorkspaceFileUploadRequest](browser_use/models/workspace_file_upload_request.py) \| [WorkspaceFileUploadRequestDict](browser_use/models/workspace_file_upload_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](browser_use/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WorkspaceFileUploadResponse](browser_use/models/workspace_file_upload_response.py)</code> -- Successful Response

**OnError**: <code>[ApiError](browser_use/core/exceptions.py)&#91;[UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostErrorBody](browser_use/errors/upload_workspace_files_workspaces_workspace_id_files_upload_post_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 404, 409 | <code>[RawError](browser_use/core/results.py)</code> |
| 422 | <code>[HttpValidationError](browser_use/models/http_validation_error.py)</code> |
| anything unmapped | <code>[RawError](browser_use/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

