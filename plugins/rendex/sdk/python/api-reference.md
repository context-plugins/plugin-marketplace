# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [RendexClient](rendex/client.py)

## Account

> Source: [Account](rendex/apis/account.py)

<details>
<summary><code>def get_account(*, request_options: RequestOptionsOrDict | None = None) -> V1AccountResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the authenticated account's plan, this month's usage
(used / limit / remaining and the reset date), the per-minute rate limit,
and a recommended upgrade with a one-tap link. Read-only and free — it
does not consume credits.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.account.get_account()
    # TODO: Handle 'response' of type V1AccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

**Async**

```python
try:
    response = await async_client.account.get_account()
    # TODO: Handle 'response' of type V1AccountResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetAccountErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AccountResponse](rendex/models/v1_account_response.py)</code> -- Account summary

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[GetAccountErrorBody](rendex/errors/get_account_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](rendex/apis/batch.py)

<details>
<summary><code>def post_screenshot_batch(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> BatchResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submit up to 500 URLs for capture in a single request. Each URL is processed
asynchronously. Returns a `batchId` that can be polled via `GET /v1/batches/{batchId}`.
Shared defaults apply to all URLs unless overridden per-item.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.batch.post_screenshot_batch(
        BatchRequest(
            urls=[Url(url="https://example.com"), Url(url="https://github.com"), Url(url="https://stripe.com")],
            defaults=ScreenshotRequest(format=Format.WEBP, width=1280, full_page=True),
        ),
    )
    # TODO: Handle 'response' of type BatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostScreenshotBatchErrorBody
```

**Async**

```python
try:
    response = await async_client.batch.post_screenshot_batch(
        BatchRequest(
            urls=[Url(url="https://example.com"), Url(url="https://github.com"), Url(url="https://stripe.com")],
            defaults=ScreenshotRequest(format=Format.WEBP, width=1280, full_page=True),
        ),
    )
    # TODO: Handle 'response' of type BatchResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostScreenshotBatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRequest](rendex/models/batch_request.py) \| [BatchRequestDict](rendex/models/batch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchResponse](rendex/models/batch_response.py)</code> -- Batch accepted for processing

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[PostScreenshotBatchErrorBody](rendex/errors/post_screenshot_batch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](rendex/apis/health.py)

<details>
<summary><code>def deep_health_check(*, request_options: RequestOptionsOrDict | None = None) -> DeepHealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies connectivity to all external dependencies (database, billing).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.health.deep_health_check()
    # TODO: Handle 'response' of type DeepHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeepHealthCheckErrorBody
```

**Async**

```python
try:
    response = await async_client.health.deep_health_check()
    # TODO: Handle 'response' of type DeepHealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeepHealthCheckErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeepHealthResponse](rendex/models/deep_health_response.py)</code> -- All dependencies healthy

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[DeepHealthCheckErrorBody](rendex/errors/deep_health_check_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 503 | <code>[DeepHealthResponse](rendex/models/deep_health_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def health_check(*, request_options: RequestOptionsOrDict | None = None) -> HealthResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns 200 if the API worker is running.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.health.health_check()
    # TODO: Handle 'response' of type HealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.health.health_check()
    # TODO: Handle 'response' of type HealthResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthResponse](rendex/models/health_response.py)</code> -- Service is alive

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[RawError](rendex/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](rendex/apis/jobs.py)

<details>
<summary><code>def get_batch_status(batch_id: str, *, request_options: RequestOptionsOrDict | None = None) -> BatchStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of a batch capture request, including per-URL
job statuses and progress.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.jobs.get_batch_status("some example string")
    # TODO: Handle 'response' of type BatchStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBatchStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_batch_status("some example string")
    # TODO: Handle 'response' of type BatchStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetBatchStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batch_id</code> | <code>str</code> | Batch identifier (returned by `POST /v1/screenshot/batch`) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchStatusResponse](rendex/models/batch_status_response.py)</code> -- Batch status

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[GetBatchStatusErrorBody](rendex/errors/get_batch_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_job_status(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> JobStatusResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of an async screenshot job. When status is `completed`,
the response includes the image URL or base64 data.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.jobs.get_job_status("some example string")
    # TODO: Handle 'response' of type JobStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.jobs.get_job_status("some example string")
    # TODO: Handle 'response' of type JobStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetJobStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>job_id</code> | <code>str</code> | Async job identifier (returned when `async: true`) |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobStatusResponse](rendex/models/job_status_response.py)</code> -- Job status

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[GetJobStatusErrorBody](rendex/errors/get_job_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](rendex/apis/screenshot.py)

<details>
<summary><code>def create_render_link(body: V1RenderLinkRequest | V1RenderLinkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1RenderLinkResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a self-contained, signed URL you can paste straight into
` (or an `). No backend or storage
on your side: `GET /v1/render` renders it on the first request, caches
the result in R2 under a deterministic key, and serves the cached copy
on every repeat — so a widely-shared link costs one render, not one per
crawl. The link encodes the (signed, tamper-proof) render params, the
owning account, and an expiry. Credits are charged to the link owner on
each cache-miss render only.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.create_render_link(V1RenderLinkRequest())
    # TODO: Handle 'response' of type V1RenderLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRenderLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.create_render_link(V1RenderLinkRequest())
    # TODO: Handle 'response' of type V1RenderLinkResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateRenderLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RenderLinkRequest](rendex/models/v1_render_link_request.py) \| [V1RenderLinkRequestDict](rendex/models/v1_render_link_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RenderLinkResponse](rendex/models/v1_render_link_response.py)</code> -- Signed render link

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[CreateRenderLinkErrorBody](rendex/errors/create_render_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 413 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def extract_content(body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ExtractResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Turns a single URL into clean reader-mode content — Markdown, JSON, or
article HTML — pulled from the fully-rendered page (so it works on
JavaScript-heavy sites). Text only; for image + text in one call use
`POST /v1/screenshot/json` with `extract: true`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.extract_content(V1ExtractRequest(url="https://example.com"))
    # TODO: Handle 'response' of type V1ExtractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractContentErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.extract_content(V1ExtractRequest(url="https://example.com"))
    # TODO: Handle 'response' of type V1ExtractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractContentErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ExtractRequest](rendex/models/v1_extract_request.py) \| [V1ExtractRequestDict](rendex/models/v1_extract_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExtractResponse](rendex/models/v1_extract_response.py)</code> -- Extracted content

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[ExtractContentErrorBody](rendex/errors/extract_content_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 413, 422 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_screenshot(url: str, *, format_: Format1OrStr | None = Format1.PNG, width: int | None = 1280, height: int | None = 800, full_page: bool | None = False, quality: int | None = None, delay: int | None = 0, dark_mode: bool | None = False, device_scale_factor: float | None = 2.0, block_ads: bool | None = True, timeout: int | None = 30, wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2, wait_for_selector: str | None = None, best_attempt: bool | None = True, selector: str | None = None, device: Device1OrStr | None = None, block_cookie_banners: bool | None = False, resize_width: int | None = None, resize_height: int | None = None, key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the screenshot as a binary image. Supports ` embedding
and browser-based access. All POST parameters are accepted as query params.
Accepts API key via `Authorization: Bearer`, `x-api-key` header, or `?key=` query param.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.get_screenshot("https://example.com")
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScreenshotErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.get_screenshot("https://example.com")
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetScreenshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>str</code> | Webpage URL to capture (must be a valid URL) |
| <code>format_</code> | <code>[Format1OrStr](rendex/models/enums/format1.py) \| None</code> | Output format<br>**Default**: <code>Format1.PNG</code> |
| <code>width</code> | <code>int \| None</code> | Viewport width in pixels<br>**Default**: <code>1280</code> |
| <code>height</code> | <code>int \| None</code> | Viewport height in pixels<br>**Default**: <code>800</code> |
| <code>full_page</code> | <code>bool \| None</code> | Capture full scrollable page (capped at 16384px height)<br>**Default**: <code>False</code> |
| <code>quality</code> | <code>int \| None</code> | Image quality (JPEG and WebP only)<br>**Default**: <code>None</code> |
| <code>delay</code> | <code>int \| None</code> | Wait milliseconds after page load before capture<br>**Default**: <code>0</code> |
| <code>dark_mode</code> | <code>bool \| None</code> | Emulate dark color scheme (prefers-color-scheme: dark)<br>**Default**: <code>False</code> |
| <code>device_scale_factor</code> | <code>float \| None</code> | Device pixel ratio (2 for Retina, 3 for high-DPI)<br>**Default**: <code>2.0</code> |
| <code>block_ads</code> | <code>bool \| None</code> | Block ads, trackers, and chat widgets<br>**Default**: <code>True</code> |
| <code>timeout</code> | <code>int \| None</code> | Navigation timeout in seconds<br>**Default**: <code>30</code> |
| <code>wait_until</code> | <code>[WaitUntil1OrStr](rendex/models/enums/wait_until1.py) \| None</code> | Page readiness condition before capture<br>**Default**: <code>WaitUntil1.NETWORKIDLE2</code> |
| <code>wait_for_selector</code> | <code>str \| None</code> | CSS selector to wait for before capture<br>**Default**: <code>None</code> |
| <code>best_attempt</code> | <code>bool \| None</code> | Return partial screenshot on timeout instead of failing<br>**Default**: <code>True</code> |
| <code>selector</code> | <code>str \| None</code> | CSS selector of element to capture instead of full page<br>**Default**: <code>None</code> |
| <code>device</code> | <code>[Device1OrStr](rendex/models/enums/device1.py) \| None</code> | Device preset that sets viewport, scale, and user agent in one parameter<br>**Default**: <code>None</code> |
| <code>block_cookie_banners</code> | <code>bool \| None</code> | Hide common cookie and consent walls before capture<br>**Default**: <code>False</code> |
| <code>resize_width</code> | <code>int \| None</code> | Downscale the output to this width (image formats only). Aspect ratio preserved when only one dimension is set. Never upscales.<br>**Default**: <code>None</code> |
| <code>resize_height</code> | <code>int \| None</code> | Downscale the output to this height (image formats only).<br>**Default**: <code>None</code> |
| <code>key</code> | <code>str \| None</code> | API key (alternative to Authorization header)<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Screenshot captured successfully

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[GetScreenshotErrorBody](rendex/errors/get_screenshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 408, 429, 500 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_screenshot(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts a JSON body with capture parameters. Returns the screenshot as a
binary image with metadata in response headers (`x-screenshot-*`, `x-rendex-*`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.post_screenshot(ScreenshotRequest(url="https://example.com"))
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostScreenshotErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.post_screenshot(ScreenshotRequest(url="https://example.com"))
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostScreenshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScreenshotRequest](rendex/models/screenshot_request.py) \| [ScreenshotRequestDict](rendex/models/screenshot_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Screenshot captured successfully

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[PostScreenshotErrorBody](rendex/errors/post_screenshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 408, 429, 500 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def post_screenshot_json(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ScreenshotJsonResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same capture parameters as `POST /v1/screenshot`, but returns the image
as a base64-encoded string inside a JSON envelope with full metadata.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.post_screenshot_json(ScreenshotRequest(url="https://example.com"))
    # TODO: Handle 'response' of type ScreenshotJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostScreenshotJsonErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.post_screenshot_json(ScreenshotRequest(url="https://example.com"))
    # TODO: Handle 'response' of type ScreenshotJsonResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type PostScreenshotJsonErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScreenshotRequest](rendex/models/screenshot_request.py) \| [ScreenshotRequestDict](rendex/models/screenshot_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScreenshotJsonResponse](rendex/models/screenshot_json_response.py)</code> -- Screenshot captured successfully

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[PostScreenshotJsonErrorBody](rendex/errors/post_screenshot_json_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 408, 429, 500 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def render_artifact(body: V1ArtifactRequest | V1ArtifactRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1ArtifactResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One call that turns Markdown or HTML plus a small branding theme into a
branded PDF, a PNG, and a hosted share page — built for AI agents and
ChatGPT apps that produce a finished document and need a downloadable,
shareable result. Pass the document body in `content` (Markdown by
default, or set `inputFormat: html`), an optional `branding` theme
(logo, accent color, font, header, footer), and an optional `pageSetup`
(paper size, orientation, margins, scale, viewport). Choose the output
`formats` — `pdf`, `png`, or both. Each requested format charges 1
credit from the same shared pool as the rendering endpoints, drawn with
the same `rdx_` key; the full charge is refunded on a render failure.
The response returns short-lived signed URLs for each rendered format
plus a `shareUrl` to a hosted preview page; all expire after `expiresIn`
seconds (default 24h).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.render_artifact(V1ArtifactRequest(content="some example string"))
    # TODO: Handle 'response' of type V1ArtifactResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RenderArtifactErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.render_artifact(V1ArtifactRequest(content="some example string"))
    # TODO: Handle 'response' of type V1ArtifactResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RenderArtifactErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ArtifactRequest](rendex/models/v1_artifact_request.py) \| [V1ArtifactRequestDict](rendex/models/v1_artifact_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ArtifactResponse](rendex/models/v1_artifact_response.py)</code> -- Rendered artifact URLs

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[RenderArtifactErrorBody](rendex/errors/render_artifact_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def serve_render_link(p: str, uid: str, exp: int, sig: str, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Public endpoint — the HMAC signature in the URL is the auth boundary (no
API key). Renders on the first hit and returns the image/PDF bytes;
subsequent hits serve the cached copy. Normally you don't call this
directly — embed the URL returned by `POST /v1/render/link`. The
`x-rendex-cache` response header is `hit` or `miss`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.screenshot.serve_render_link(
        "some example string", "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ServeRenderLinkErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.serve_render_link(
        "some example string", "some example string", 1, "some example string"
    )
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ServeRenderLinkErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>p</code> | <code>str</code> | Signed params token |
| <code>uid</code> | <code>str</code> | Owning account id |
| <code>exp</code> | <code>int</code> | Expiry (unix seconds) |
| <code>sig</code> | <code>str</code> | HMAC signature |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Rendered image or PDF

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[ServeRenderLinkErrorBody](rendex/errors/serve_render_link_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## WatchApi

> Source: [WatchApi](rendex/apis/watch_api.py)

<details>
<summary><code>def create_watch(body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start monitoring a URL for changes. Rendex renders the page in real Chrome on your
schedule, runs a before/after visual diff (and/or a text diff), and alerts you over a
webhook and/or email when it changes. An active watch captures its baseline immediately,
drawing 1 credit from your shared pool; a failed check is refunded. The same `rdx_` key
and credit pool as the rendering endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.create_watch(CreateWatchRequest(url="https://example.com"))
    # TODO: Handle 'response' of type V1WatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.watch_api.create_watch(CreateWatchRequest(url="https://example.com"))
    # TODO: Handle 'response' of type V1WatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CreateWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWatchRequest](rendex/models/create_watch_request.py) \| [CreateWatchRequestDict](rendex/models/create_watch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse](rendex/models/v1_watches_response.py)</code> -- Watch created (baseline run enqueued when active)

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[CreateWatchErrorBody](rendex/errors/create_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 429 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def delete_watch(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    client.watch_api.delete_watch(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWatchErrorBody
```

**Async**

```python
try:
    await async_client.watch_api.delete_watch(UUID("00000000-0000-0000-0000-000000000000"))
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeleteWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Watch UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[DeleteWatchErrorBody](rendex/errors/delete_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_watch(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a single watch by id, including its current status and configuration.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.get_watch(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type V1WatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.watch_api.get_watch(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type V1WatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Watch UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse](rendex/models/v1_watches_response.py)</code> -- The watch

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[GetWatchErrorBody](rendex/errors/get_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_watch_runs(id_: UUID, *, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> V1WatchesRunsResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newest first. Each run carries short-lived signed before/after/overlay image URLs.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.list_watch_runs(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type V1WatchesRunsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWatchRunsErrorBody
```

**Async**

```python
try:
    response = await async_client.watch_api.list_watch_runs(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type V1WatchesRunsResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ListWatchRunsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Watch UUID |
| <code>cursor</code> | <code>str \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesRunsResponse](rendex/models/v1_watches_runs_response.py)</code> -- A page of runs, newest first

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[ListWatchRunsErrorBody](rendex/errors/list_watch_runs_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def list_watches(*, status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> V1WatchesResponse1</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your watches, newest first. Filter by state and page with the cursor.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.list_watches()
    # TODO: Handle 'response' of type V1WatchesResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RawError
```

**Async**

```python
try:
    response = await async_client.watch_api.list_watches()
    # TODO: Handle 'response' of type V1WatchesResponse1
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
| <code>status</code> | <code>[Status2RendexRenderingWatchApiOrStr](rendex/models/enums/status2_rendex_rendering_watch_api.py) \| None</code> | Filter by state<br>**Default**: <code>Status2RendexRenderingWatchApi.ALL</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a prior response's nextCursor<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse1](rendex/models/v1_watches_response1.py)</code> -- A page of watches, newest first

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[RawError](rendex/core/results.py)&#93;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_watch_now(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesRunResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enqueue an immediate check (draws 1 credit). The watch must be active.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.run_watch_now(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type V1WatchesRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunWatchNowErrorBody
```

**Async**

```python
try:
    response = await async_client.watch_api.run_watch_now(UUID("00000000-0000-0000-0000-000000000000"))
    # TODO: Handle 'response' of type V1WatchesRunResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type RunWatchNowErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Watch UUID |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesRunResponse](rendex/models/v1_watches_run_response.py)</code> -- Run enqueued

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[RunWatchNowErrorBody](rendex/errors/run_watch_now_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404, 409, 429 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def test_watch(body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesTestResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks, geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule. Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.test_watch(CreateWatchRequest(url="https://example.com"))
    # TODO: Handle 'response' of type V1WatchesTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.watch_api.test_watch(CreateWatchRequest(url="https://example.com"))
    # TODO: Handle 'response' of type V1WatchesTestResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TestWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWatchRequest](rendex/models/create_watch_request.py) \| [CreateWatchRequestDict](rendex/models/create_watch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesTestResponse](rendex/models/v1_watches_test_response.py)</code> -- Render result (reachable or not — both are valid test outcomes)

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[TestWatchErrorBody](rendex/errors/test_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 403, 429 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def update_watch(id_: UUID, body: UpdateWatchRequest | UpdateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> V1WatchesResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All fields optional. Set `paused` true to pause or false to resume. `webhookUrl` and
`notifyEmail` accept `null` to switch a channel off.

**renderParams is MERGED, not replaced.** A partial `renderParams` is deep-merged over the
watch's existing render config, so you can change one knob (e.g. `{ "renderParams": { "darkMode": true } }`)
without re-sending the whole object. To clear a knob, set it to its default explicitly.

**Re-baselining.** Changing `url` clears the baseline so the next run re-baselines. A
renderParams edit that changes WHAT is captured (a scope change — e.g. `selector`,
`fullPage`, `width`/`height`, or `device`) likewise invalidates the baseline and
re-baselines on the next run; a noise-only edit (e.g. `threshold`, `ignoreRegions`) does not.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.watch_api.update_watch(UUID("00000000-0000-0000-0000-000000000000"), UpdateWatchRequest())
    # TODO: Handle 'response' of type V1WatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWatchErrorBody
```

**Async**

```python
try:
    response = await async_client.watch_api.update_watch(
        UUID("00000000-0000-0000-0000-000000000000"), UpdateWatchRequest()
    )
    # TODO: Handle 'response' of type V1WatchesResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UpdateWatchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>UUID</code> | Watch UUID |
| <code>body</code> | <code>[UpdateWatchRequest](rendex/models/update_watch_request.py) \| [UpdateWatchRequestDict](rendex/models/update_watch_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse](rendex/models/v1_watches_response.py)</code> -- The updated watch

**OnError**: <code>[ApiError](rendex/core/exceptions.py)&#91;[UpdateWatchErrorBody](rendex/errors/update_watch_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403, 404 | <code>[ErrorResponse](rendex/models/error_response.py)</code> |
| anything unmapped | <code>[RawError](rendex/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

