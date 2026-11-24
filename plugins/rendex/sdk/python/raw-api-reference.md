# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [RendexClient](rendex/client.py)

## Account

> Source: [Account](rendex/apis/account.py)

<details>
<summary><code>def get_account(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1AccountResponse, GetAccountErrorBody]</code></summary>

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
result = client.account.with_raw_response.get_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.get_account()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1AccountResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetAccountErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1AccountResponse](rendex/models/v1_account_response.py), [GetAccountErrorBody](rendex/errors/get_account_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1AccountResponse](rendex/models/v1_account_response.py)</code> -- Account summary

**On `Failure`**: `error` is <code>[GetAccountErrorBody](rendex/errors/get_account_error.py)</code>

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
<summary><code>def post_screenshot_batch(body: BatchRequest | BatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchResponse, PostScreenshotBatchErrorBody]</code></summary>

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
result = client.batch.with_raw_response.post_screenshot_batch(
    BatchRequest(
        urls=[Url(url="https://example.com"), Url(url="https://github.com"), Url(url="https://stripe.com")],
        defaults=ScreenshotRequest(format=Format.WEBP, width=1280, full_page=True),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostScreenshotBatchErrorBody
```

**Async**

```python
result = await async_client.batch.with_raw_response.post_screenshot_batch(
    BatchRequest(
        urls=[Url(url="https://example.com"), Url(url="https://github.com"), Url(url="https://stripe.com")],
        defaults=ScreenshotRequest(format=Format.WEBP, width=1280, full_page=True),
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostScreenshotBatchErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[BatchResponse](rendex/models/batch_response.py), [PostScreenshotBatchErrorBody](rendex/errors/post_screenshot_batch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchResponse](rendex/models/batch_response.py)</code> -- Batch accepted for processing

**On `Failure`**: `error` is <code>[PostScreenshotBatchErrorBody](rendex/errors/post_screenshot_batch_error.py)</code>

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
<summary><code>def deep_health_check(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeepHealthResponse, DeepHealthCheckErrorBody]</code></summary>

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
result = client.health.with_raw_response.deep_health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeepHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeepHealthCheckErrorBody
```

**Async**

```python
result = await async_client.health.with_raw_response.deep_health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeepHealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeepHealthCheckErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[DeepHealthResponse](rendex/models/deep_health_response.py), [DeepHealthCheckErrorBody](rendex/errors/deep_health_check_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeepHealthResponse](rendex/models/deep_health_response.py)</code> -- All dependencies healthy

**On `Failure`**: `error` is <code>[DeepHealthCheckErrorBody](rendex/errors/deep_health_check_error.py)</code>

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
<summary><code>def health_check(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[HealthResponse, RawError]</code></summary>

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
result = client.health.with_raw_response.health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.health.with_raw_response.health_check()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HealthResponse
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
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[HealthResponse](rendex/models/health_response.py), [RawError](rendex/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[HealthResponse](rendex/models/health_response.py)</code> -- Service is alive

**On `Failure`**: `error` is <code>[RawError](rendex/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](rendex/apis/jobs.py)

<details>
<summary><code>def get_batch_status(batch_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[BatchStatusResponse, GetBatchStatusErrorBody]</code></summary>

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
result = client.jobs.with_raw_response.get_batch_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBatchStatusErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_batch_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type BatchStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetBatchStatusErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[BatchStatusResponse](rendex/models/batch_status_response.py), [GetBatchStatusErrorBody](rendex/errors/get_batch_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[BatchStatusResponse](rendex/models/batch_status_response.py)</code> -- Batch status

**On `Failure`**: `error` is <code>[GetBatchStatusErrorBody](rendex/errors/get_batch_status_error.py)</code>

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
<summary><code>def get_job_status(job_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[JobStatusResponse, GetJobStatusErrorBody]</code></summary>

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
result = client.jobs.with_raw_response.get_job_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobStatusErrorBody
```

**Async**

```python
result = await async_client.jobs.with_raw_response.get_job_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type JobStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetJobStatusErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[JobStatusResponse](rendex/models/job_status_response.py), [GetJobStatusErrorBody](rendex/errors/get_job_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[JobStatusResponse](rendex/models/job_status_response.py)</code> -- Job status

**On `Failure`**: `error` is <code>[GetJobStatusErrorBody](rendex/errors/get_job_status_error.py)</code>

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
<summary><code>def create_render_link(body: V1RenderLinkRequest | V1RenderLinkRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1RenderLinkResponse, CreateRenderLinkErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.create_render_link(V1RenderLinkRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RenderLinkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRenderLinkErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.create_render_link(V1RenderLinkRequest())
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1RenderLinkResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateRenderLinkErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1RenderLinkResponse](rendex/models/v1_render_link_response.py), [CreateRenderLinkErrorBody](rendex/errors/create_render_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1RenderLinkResponse](rendex/models/v1_render_link_response.py)</code> -- Signed render link

**On `Failure`**: `error` is <code>[CreateRenderLinkErrorBody](rendex/errors/create_render_link_error.py)</code>

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
<summary><code>def extract_content(body: V1ExtractRequest | V1ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ExtractResponse, ExtractContentErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.extract_content(V1ExtractRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractContentErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.extract_content(V1ExtractRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractContentErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1ExtractResponse](rendex/models/v1_extract_response.py), [ExtractContentErrorBody](rendex/errors/extract_content_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ExtractResponse](rendex/models/v1_extract_response.py)</code> -- Extracted content

**On `Failure`**: `error` is <code>[ExtractContentErrorBody](rendex/errors/extract_content_error.py)</code>

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
<summary><code>def get_screenshot(url: str, *, format_: Format1OrStr | None = Format1.PNG, width: int | None = 1280, height: int | None = 800, full_page: bool | None = False, quality: int | None = None, delay: int | None = 0, dark_mode: bool | None = False, device_scale_factor: float | None = 2.0, block_ads: bool | None = True, timeout: int | None = 30, wait_until: WaitUntil1OrStr | None = WaitUntil1.NETWORKIDLE2, wait_for_selector: str | None = None, best_attempt: bool | None = True, selector: str | None = None, device: Device1OrStr | None = None, block_cookie_banners: bool | None = False, resize_width: int | None = None, resize_height: int | None = None, key: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, GetScreenshotErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.get_screenshot("https://example.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScreenshotErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.get_screenshot("https://example.com")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetScreenshotErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;FileResponse, [GetScreenshotErrorBody](rendex/errors/get_screenshot_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Screenshot captured successfully

**On `Failure`**: `error` is <code>[GetScreenshotErrorBody](rendex/errors/get_screenshot_error.py)</code>

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
<summary><code>def post_screenshot(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, PostScreenshotErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.post_screenshot(ScreenshotRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostScreenshotErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.post_screenshot(ScreenshotRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostScreenshotErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;FileResponse, [PostScreenshotErrorBody](rendex/errors/post_screenshot_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Screenshot captured successfully

**On `Failure`**: `error` is <code>[PostScreenshotErrorBody](rendex/errors/post_screenshot_error.py)</code>

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
<summary><code>def post_screenshot_json(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ScreenshotJsonResponse, PostScreenshotJsonErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.post_screenshot_json(ScreenshotRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScreenshotJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostScreenshotJsonErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.post_screenshot_json(
    ScreenshotRequest(url="https://example.com")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ScreenshotJsonResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type PostScreenshotJsonErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[ScreenshotJsonResponse](rendex/models/screenshot_json_response.py), [PostScreenshotJsonErrorBody](rendex/errors/post_screenshot_json_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ScreenshotJsonResponse](rendex/models/screenshot_json_response.py)</code> -- Screenshot captured successfully

**On `Failure`**: `error` is <code>[PostScreenshotJsonErrorBody](rendex/errors/post_screenshot_json_error.py)</code>

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
<summary><code>def render_artifact(body: V1ArtifactRequest | V1ArtifactRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1ArtifactResponse, RenderArtifactErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.render_artifact(V1ArtifactRequest(content="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ArtifactResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RenderArtifactErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.render_artifact(
    V1ArtifactRequest(content="some example string")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1ArtifactResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RenderArtifactErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1ArtifactResponse](rendex/models/v1_artifact_response.py), [RenderArtifactErrorBody](rendex/errors/render_artifact_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1ArtifactResponse](rendex/models/v1_artifact_response.py)</code> -- Rendered artifact URLs

**On `Failure`**: `error` is <code>[RenderArtifactErrorBody](rendex/errors/render_artifact_error.py)</code>

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
<summary><code>def serve_render_link(p: str, uid: str, exp: int, sig: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, ServeRenderLinkErrorBody]</code></summary>

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
result = client.screenshot.with_raw_response.serve_render_link(
    "some example string", "some example string", 1, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ServeRenderLinkErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.serve_render_link(
    "some example string", "some example string", 1, "some example string"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ServeRenderLinkErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;FileResponse, [ServeRenderLinkErrorBody](rendex/errors/serve_render_link_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Rendered image or PDF

**On `Failure`**: `error` is <code>[ServeRenderLinkErrorBody](rendex/errors/serve_render_link_error.py)</code>

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
<summary><code>def create_watch(body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesResponse, CreateWatchErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.create_watch(CreateWatchRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWatchErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.create_watch(CreateWatchRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CreateWatchErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesResponse](rendex/models/v1_watches_response.py), [CreateWatchErrorBody](rendex/errors/create_watch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesResponse](rendex/models/v1_watches_response.py)</code> -- Watch created (baseline run enqueued when active)

**On `Failure`**: `error` is <code>[CreateWatchErrorBody](rendex/errors/create_watch_error.py)</code>

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
<summary><code>def delete_watch(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, DeleteWatchErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.delete_watch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWatchErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.delete_watch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success():
        ...  # 2xx, no content
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeleteWatchErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;None, [DeleteWatchErrorBody](rendex/errors/delete_watch_error.py)&#93;</code>

**On `Success`**: the 2xx carries no content; `payload` is <code>None</code>

**On `Failure`**: `error` is <code>[DeleteWatchErrorBody](rendex/errors/delete_watch_error.py)</code>

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
<summary><code>def get_watch(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesResponse, GetWatchErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.get_watch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWatchErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.get_watch(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetWatchErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesResponse](rendex/models/v1_watches_response.py), [GetWatchErrorBody](rendex/errors/get_watch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesResponse](rendex/models/v1_watches_response.py)</code> -- The watch

**On `Failure`**: `error` is <code>[GetWatchErrorBody](rendex/errors/get_watch_error.py)</code>

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
<summary><code>def list_watch_runs(id_: UUID, *, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesRunsResponse, ListWatchRunsErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.list_watch_runs(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesRunsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWatchRunsErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.list_watch_runs(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesRunsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ListWatchRunsErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesRunsResponse](rendex/models/v1_watches_runs_response.py), [ListWatchRunsErrorBody](rendex/errors/list_watch_runs_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesRunsResponse](rendex/models/v1_watches_runs_response.py)</code> -- A page of runs, newest first

**On `Failure`**: `error` is <code>[ListWatchRunsErrorBody](rendex/errors/list_watch_runs_error.py)</code>

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
<summary><code>def list_watches(*, status: Status2RendexRenderingWatchApiOrStr | None = Status2RendexRenderingWatchApi.ALL, cursor: str | None = None, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesResponse1, RawError]</code></summary>

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
result = client.watch_api.with_raw_response.list_watches()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.list_watches()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse1
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
| <code>status</code> | <code>[Status2RendexRenderingWatchApiOrStr](rendex/models/enums/status2_rendex_rendering_watch_api.py) \| None</code> | Filter by state<br>**Default**: <code>Status2RendexRenderingWatchApi.ALL</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a prior response's nextCursor<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](rendex/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesResponse1](rendex/models/v1_watches_response1.py), [RawError](rendex/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesResponse1](rendex/models/v1_watches_response1.py)</code> -- A page of watches, newest first

**On `Failure`**: `error` is <code>[RawError](rendex/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def run_watch_now(id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesRunResponse, RunWatchNowErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.run_watch_now(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunWatchNowErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.run_watch_now(UUID("00000000-0000-0000-0000-000000000000"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesRunResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RunWatchNowErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesRunResponse](rendex/models/v1_watches_run_response.py), [RunWatchNowErrorBody](rendex/errors/run_watch_now_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesRunResponse](rendex/models/v1_watches_run_response.py)</code> -- Run enqueued

**On `Failure`**: `error` is <code>[RunWatchNowErrorBody](rendex/errors/run_watch_now_error.py)</code>

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
<summary><code>def test_watch(body: CreateWatchRequest | CreateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesTestResponse, TestWatchErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.test_watch(CreateWatchRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesTestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestWatchErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.test_watch(CreateWatchRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesTestResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TestWatchErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesTestResponse](rendex/models/v1_watches_test_response.py), [TestWatchErrorBody](rendex/errors/test_watch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesTestResponse](rendex/models/v1_watches_test_response.py)</code> -- Render result (reachable or not — both are valid test outcomes)

**On `Failure`**: `error` is <code>[TestWatchErrorBody](rendex/errors/test_watch_error.py)</code>

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
<summary><code>def update_watch(id_: UUID, body: UpdateWatchRequest | UpdateWatchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[V1WatchesResponse, UpdateWatchErrorBody]</code></summary>

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
result = client.watch_api.with_raw_response.update_watch(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateWatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWatchErrorBody
```

**Async**

```python
result = await async_client.watch_api.with_raw_response.update_watch(
    UUID("00000000-0000-0000-0000-000000000000"), UpdateWatchRequest()
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type V1WatchesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UpdateWatchErrorBody
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

**Returns**: <code>[ApiResult](rendex/core/results.py)&#91;[V1WatchesResponse](rendex/models/v1_watches_response.py), [UpdateWatchErrorBody](rendex/errors/update_watch_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[V1WatchesResponse](rendex/models/v1_watches_response.py)</code> -- The updated watch

**On `Failure`**: `error` is <code>[UpdateWatchErrorBody](rendex/errors/update_watch_error.py)</code>

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

