# Reference

> Source: [RendexClient](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>getAccount(options?: RequestOptions): ApiPromise&lt;V1AccountResponse, Account.GetAccountError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.getAccount();
  // TODO: Handle 'response' of type V1AccountResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.GetAccountError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.getAccount().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1AccountResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.getAccount()`

- **OnSuccess**: <code>[V1AccountResponse](src/models/v1-account-response.ts)</code>
- **OnError**: throws <code>[Account.GetAccountError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.getAccount().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1AccountResponse, Account.GetAccountError&gt;</code>, with `result.value` of type <code>[V1AccountResponse](src/models/v1-account-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](src/resources/batch.ts)

<details>
<summary><code>postScreenshotBatch(request: Batch.PostScreenshotBatchRequest, options?: RequestOptions): ApiPromise&lt;BatchResponse, Batch.PostScreenshotBatchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.batch.postScreenshotBatch({
    body: {
      urls: [{ url: "https://example.com" }, { url: "https://github.com" }, { url: "https://stripe.com" }],
      defaults: { format: Format.Webp, width: 1280, fullPage: true },
    },
  });
  // TODO: Handle 'response' of type BatchResponse
} catch (err) {
  // TODO: Handle 'err' of type Batch.PostScreenshotBatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.batch
  .postScreenshotBatch({
    body: {
      urls: [{ url: "https://example.com" }, { url: "https://github.com" }, { url: "https://stripe.com" }],
      defaults: { format: Format.Webp, width: 1280, fullPage: true },
    },
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRequest](src/models/batch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.batch.postScreenshotBatch(request)`

- **OnSuccess**: <code>[BatchResponse](src/models/batch-response.ts)</code>
- **OnError**: throws <code>[Batch.PostScreenshotBatchError](src/resources/batch.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.batch.postScreenshotBatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchResponse, Batch.PostScreenshotBatchError&gt;</code>, with `result.value` of type <code>[BatchResponse](src/models/batch-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/resources/health.ts)

<details>
<summary><code>deepHealthCheck(options?: RequestOptions): ApiPromise&lt;DeepHealthResponse, Health.DeepHealthCheckError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Verifies connectivity to all external dependencies (database, billing).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.deepHealthCheck();
  // TODO: Handle 'response' of type DeepHealthResponse
} catch (err) {
  // TODO: Handle 'err' of type Health.DeepHealthCheckError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.health.deepHealthCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeepHealthResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.deepHealthCheck()`

- **OnSuccess**: <code>[DeepHealthResponse](src/models/deep-health-response.ts)</code>
- **OnError**: throws <code>[Health.DeepHealthCheckError](src/resources/health.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.health.deepHealthCheck().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeepHealthResponse, Health.DeepHealthCheckError&gt;</code>, with `result.value` of type <code>[DeepHealthResponse](src/models/deep-health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>healthCheck(options?: RequestOptions): ApiPromise&lt;HealthResponse, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns 200 if the API worker is running.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.health.healthCheck();
  // TODO: Handle 'response' of type HealthResponse
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.health.healthCheck().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HealthResponse
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.health.healthCheck()`

- **OnSuccess**: <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.health.healthCheck().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HealthResponse, ApiError&gt;</code>, with `result.value` of type <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/resources/jobs.ts)

<details>
<summary><code>getBatchStatus(request: Jobs.GetBatchStatusRequest, options?: RequestOptions): ApiPromise&lt;BatchStatusResponse, Jobs.GetBatchStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of a batch capture request, including per-URL
job statuses and progress.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getBatchStatus({ batchId: "some example string" });
  // TODO: Handle 'response' of type BatchStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetBatchStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getBatchStatus({ batchId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>batchId</code> | <code>string</code> | Batch identifier (returned by `POST /v1/screenshot/batch`) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getBatchStatus(request)`

- **OnSuccess**: <code>[BatchStatusResponse](src/models/batch-status-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetBatchStatusError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getBatchStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchStatusResponse, Jobs.GetBatchStatusError&gt;</code>, with `result.value` of type <code>[BatchStatusResponse](src/models/batch-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getJobStatus(request: Jobs.GetJobStatusRequest, options?: RequestOptions): ApiPromise&lt;JobStatusResponse, Jobs.GetJobStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the current status of an async screenshot job. When status is `completed`,
the response includes the image URL or base64 data.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.jobs.getJobStatus({ jobId: "some example string" });
  // TODO: Handle 'response' of type JobStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Jobs.GetJobStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.jobs.getJobStatus({ jobId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type JobStatusResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | Async job identifier (returned when `async: true`) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.jobs.getJobStatus(request)`

- **OnSuccess**: <code>[JobStatusResponse](src/models/job-status-response.ts)</code>
- **OnError**: throws <code>[Jobs.GetJobStatusError](src/resources/jobs.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.jobs.getJobStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;JobStatusResponse, Jobs.GetJobStatusError&gt;</code>, with `result.value` of type <code>[JobStatusResponse](src/models/job-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](src/resources/screenshot.ts)

<details>
<summary><code>createRenderLink(request: Screenshot.CreateRenderLinkRequest, options?: RequestOptions): ApiPromise&lt;V1RenderLinkResponse, Screenshot.CreateRenderLinkError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a self-contained, signed URL you can paste straight into
`` (or an ``). No backend or storage
on your side: `GET /v1/render` renders it on the first request, caches
the result in R2 under a deterministic key, and serves the cached copy
on every repeat — so a widely-shared link costs one render, not one per
crawl. The link encodes the (signed, tamper-proof) render params, the
owning account, and an expiry. Credits are charged to the link owner on
each cache-miss render only.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.createRenderLink({ body: {} });
  // TODO: Handle 'response' of type V1RenderLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.CreateRenderLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot.createRenderLink({ body: {} }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1RenderLinkResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1RenderLinkRequest](src/models/v1-render-link-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.createRenderLink(request)`

- **OnSuccess**: <code>[V1RenderLinkResponse](src/models/v1-render-link-response.ts)</code>
- **OnError**: throws <code>[Screenshot.CreateRenderLinkError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.createRenderLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1RenderLinkResponse, Screenshot.CreateRenderLinkError&gt;</code>, with `result.value` of type <code>[V1RenderLinkResponse](src/models/v1-render-link-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>extractContent(request: Screenshot.ExtractContentRequest, options?: RequestOptions): ApiPromise&lt;V1ExtractResponse, Screenshot.ExtractContentError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.extractContent({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type V1ExtractResponse
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.ExtractContentError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot.extractContent({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ExtractResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ExtractRequest](src/models/v1-extract-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.extractContent(request)`

- **OnSuccess**: <code>[V1ExtractResponse](src/models/v1-extract-response.ts)</code>
- **OnError**: throws <code>[Screenshot.ExtractContentError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.extractContent(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ExtractResponse, Screenshot.ExtractContentError&gt;</code>, with `result.value` of type <code>[V1ExtractResponse](src/models/v1-extract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getScreenshot(request: Screenshot.GetScreenshotRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Screenshot.GetScreenshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the screenshot as a binary image. Supports `` embedding
and browser-based access. All POST parameters are accepted as query params.
Accepts API key via `Authorization: Bearer`, `x-api-key` header, or `?key=` query param.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.getScreenshot({ url: "https://example.com" });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.GetScreenshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot.getScreenshot({ url: "https://example.com" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>url</code> | <code>string</code> | Webpage URL to capture (must be a valid URL) |
| <code>format?</code> | <code>[Format1](src/models/format1.ts)</code> | Output format<br>**Default**: "png" |
| <code>width?</code> | <code>number</code> | Viewport width in pixels<br>**Default**: 1280 |
| <code>height?</code> | <code>number</code> | Viewport height in pixels<br>**Default**: 800 |
| <code>fullPage?</code> | <code>boolean</code> | Capture full scrollable page (capped at 16384px height)<br>**Default**: false |
| <code>quality?</code> | <code>number</code> | Image quality (JPEG and WebP only) |
| <code>delay?</code> | <code>number</code> | Wait milliseconds after page load before capture<br>**Default**: 0 |
| <code>darkMode?</code> | <code>boolean</code> | Emulate dark color scheme (prefers-color-scheme: dark)<br>**Default**: false |
| <code>deviceScaleFactor?</code> | <code>number</code> | Device pixel ratio (2 for Retina, 3 for high-DPI)<br>**Default**: 2 |
| <code>blockAds?</code> | <code>boolean</code> | Block ads, trackers, and chat widgets<br>**Default**: true |
| <code>timeout?</code> | <code>number</code> | Navigation timeout in seconds<br>**Default**: 30 |
| <code>waitUntil?</code> | <code>[WaitUntil1](src/models/wait-until1.ts)</code> | Page readiness condition before capture<br>**Default**: "networkidle2" |
| <code>waitForSelector?</code> | <code>string</code> | CSS selector to wait for before capture |
| <code>bestAttempt?</code> | <code>boolean</code> | Return partial screenshot on timeout instead of failing<br>**Default**: true |
| <code>selector?</code> | <code>string</code> | CSS selector of element to capture instead of full page |
| <code>device?</code> | <code>[Device1](src/models/device1.ts)</code> | Device preset that sets viewport, scale, and user agent in one parameter |
| <code>blockCookieBanners?</code> | <code>boolean</code> | Hide common cookie and consent walls before capture<br>**Default**: false |
| <code>resizeWidth?</code> | <code>number</code> | Downscale the output to this width (image formats only). Aspect ratio preserved when only one dimension is set. Never upscales. |
| <code>resizeHeight?</code> | <code>number</code> | Downscale the output to this height (image formats only). |
| <code>key?</code> | <code>string</code> | API key (alternative to Authorization header) |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.getScreenshot(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Screenshot.GetScreenshotError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.getScreenshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Screenshot.GetScreenshotError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postScreenshot(request: Screenshot.PostScreenshotRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Screenshot.PostScreenshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts a JSON body with capture parameters. Returns the screenshot as a
binary image with metadata in response headers (`x-screenshot-*`, `x-rendex-*`).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.postScreenshot({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.PostScreenshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot.postScreenshot({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScreenshotRequest](src/models/screenshot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.postScreenshot(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Screenshot.PostScreenshotError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.postScreenshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Screenshot.PostScreenshotError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>postScreenshotJson(request: Screenshot.PostScreenshotJsonRequest, options?: RequestOptions): ApiPromise&lt;ScreenshotJsonResponse, Screenshot.PostScreenshotJsonError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Same capture parameters as `POST /v1/screenshot`, but returns the image
as a base64-encoded string inside a JSON envelope with full metadata.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.postScreenshotJson({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type ScreenshotJsonResponse
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.PostScreenshotJsonError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot
  .postScreenshotJson({ body: { url: "https://example.com" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ScreenshotJsonResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScreenshotRequest](src/models/screenshot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.postScreenshotJson(request)`

- **OnSuccess**: <code>[ScreenshotJsonResponse](src/models/screenshot-json-response.ts)</code>
- **OnError**: throws <code>[Screenshot.PostScreenshotJsonError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.postScreenshotJson(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ScreenshotJsonResponse, Screenshot.PostScreenshotJsonError&gt;</code>, with `result.value` of type <code>[ScreenshotJsonResponse](src/models/screenshot-json-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>renderArtifact(request: Screenshot.RenderArtifactRequest, options?: RequestOptions): ApiPromise&lt;V1ArtifactResponse, Screenshot.RenderArtifactError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.renderArtifact({ body: { content: "some example string" } });
  // TODO: Handle 'response' of type V1ArtifactResponse
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.RenderArtifactError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot
  .renderArtifact({ body: { content: "some example string" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1ArtifactResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[V1ArtifactRequest](src/models/v1-artifact-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.renderArtifact(request)`

- **OnSuccess**: <code>[V1ArtifactResponse](src/models/v1-artifact-response.ts)</code>
- **OnError**: throws <code>[Screenshot.RenderArtifactError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.renderArtifact(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1ArtifactResponse, Screenshot.RenderArtifactError&gt;</code>, with `result.value` of type <code>[V1ArtifactResponse](src/models/v1-artifact-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>serveRenderLink(request: Screenshot.ServeRenderLinkRequest, options?: RequestOptions): ApiPromise&lt;BinaryContent, Screenshot.ServeRenderLinkError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.serveRenderLink({
    p: "some example string",
    uid: "some example string",
    exp: 1,
    sig: "some example string",
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.ServeRenderLinkError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot
  .serveRenderLink({
    p: "some example string",
    uid: "some example string",
    exp: 1,
    sig: "some example string",
  })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BinaryContent
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>p</code> | <code>string</code> | Signed params token |
| <code>uid</code> | <code>string</code> | Owning account id |
| <code>exp</code> | <code>number</code> | Expiry (unix seconds) |
| <code>sig</code> | <code>string</code> | HMAC signature |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.serveRenderLink(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Screenshot.ServeRenderLinkError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.serveRenderLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Screenshot.ServeRenderLinkError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## WatchApi

> Source: [WatchApi](src/resources/watch-api.ts)

<details>
<summary><code>createWatch(request: WatchApi.CreateWatchRequestParams, options?: RequestOptions): ApiPromise&lt;V1WatchesResponse, WatchApi.CreateWatchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.createWatch({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type V1WatchesResponse
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.CreateWatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi.createWatch({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWatchRequest](src/models/create-watch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.createWatch(request)`

- **OnSuccess**: <code>[V1WatchesResponse](src/models/v1-watches-response.ts)</code>
- **OnError**: throws <code>[WatchApi.CreateWatchError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.createWatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesResponse, WatchApi.CreateWatchError&gt;</code>, with `result.value` of type <code>[V1WatchesResponse](src/models/v1-watches-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWatch(request: WatchApi.DeleteWatchRequest, options?: RequestOptions): ApiPromise&lt;undefined, WatchApi.DeleteWatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Permanently delete a watch. Run rows cascade; stored images age out via the bucket lifecycle.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  await client.watchApi.deleteWatch({ id: "00000000-0000-0000-0000-000000000000" });
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.DeleteWatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi
  .deleteWatch({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: The call succeeded and resolves to no body
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Watch UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.deleteWatch(request)`

- **OnSuccess**: <code>undefined</code>
- **OnError**: throws <code>[WatchApi.DeleteWatchError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.deleteWatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;undefined, WatchApi.DeleteWatchError&gt;</code>, with `result.value` of type <code>undefined</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWatch(request: WatchApi.GetWatchRequest, options?: RequestOptions): ApiPromise&lt;V1WatchesResponse, WatchApi.GetWatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch a single watch by id, including its current status and configuration.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.getWatch({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type V1WatchesResponse
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.GetWatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi.getWatch({ id: "00000000-0000-0000-0000-000000000000" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Watch UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.getWatch(request)`

- **OnSuccess**: <code>[V1WatchesResponse](src/models/v1-watches-response.ts)</code>
- **OnError**: throws <code>[WatchApi.GetWatchError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.getWatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesResponse, WatchApi.GetWatchError&gt;</code>, with `result.value` of type <code>[V1WatchesResponse](src/models/v1-watches-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWatchRuns(request: WatchApi.ListWatchRunsRequest, options?: RequestOptions): ApiPromise&lt;V1WatchesRunsResponse, WatchApi.ListWatchRunsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Newest first. Each run carries short-lived signed before/after/overlay image URLs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.listWatchRuns({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type V1WatchesRunsResponse
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.ListWatchRunsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi
  .listWatchRuns({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesRunsResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Watch UUID |
| <code>cursor?</code> | <code>string</code> | - |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.listWatchRuns(request)`

- **OnSuccess**: <code>[V1WatchesRunsResponse](src/models/v1-watches-runs-response.ts)</code>
- **OnError**: throws <code>[WatchApi.ListWatchRunsError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.listWatchRuns(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesRunsResponse, WatchApi.ListWatchRunsError&gt;</code>, with `result.value` of type <code>[V1WatchesRunsResponse](src/models/v1-watches-runs-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWatches(request?: WatchApi.ListWatchesRequest, options?: RequestOptions): ApiPromise&lt;V1WatchesResponse1, ApiError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List your watches, newest first. Filter by state and page with the cursor.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.listWatches();
  // TODO: Handle 'response' of type V1WatchesResponse1
} catch (err) {
  // TODO: Handle 'err' of type ApiError, where 'err.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi.listWatches().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesResponse1
} else {
  // TODO: Handle 'result', where 'result.payload' is always the Undeclared arm
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>status?</code> | <code>[Status2RendexRenderingWatchApi](src/models/status2-rendex-rendering-watch-api.ts)</code> | Filter by state<br>**Default**: "all" |
| <code>cursor?</code> | <code>string</code> | Opaque pagination cursor from a prior response's nextCursor |
| <code>limit?</code> | <code>number</code> | -<br>**Default**: 20 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.listWatches(request)`

- **OnSuccess**: <code>[V1WatchesResponse1](src/models/v1-watches-response1.ts)</code>
- **OnError**: throws <code>[ApiError](src/core/api-error.ts)</code>, with `err.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm

**As ApiResult**: `await client.watchApi.listWatches(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesResponse1, ApiError&gt;</code>, with `result.value` of type <code>[V1WatchesResponse1](src/models/v1-watches-response1.ts)</code>
- **OnError**: `result.payload` always the <code>[Undeclared](src/core/api-error.ts)</code> arm, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>runWatchNow(request: WatchApi.RunWatchNowRequest, options?: RequestOptions): ApiPromise&lt;V1WatchesRunResponse, WatchApi.RunWatchNowError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enqueue an immediate check (draws 1 credit). The watch must be active.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.runWatchNow({ id: "00000000-0000-0000-0000-000000000000" });
  // TODO: Handle 'response' of type V1WatchesRunResponse
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.RunWatchNowError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi
  .runWatchNow({ id: "00000000-0000-0000-0000-000000000000" })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesRunResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Watch UUID |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.runWatchNow(request)`

- **OnSuccess**: <code>[V1WatchesRunResponse](src/models/v1-watches-run-response.ts)</code>
- **OnError**: throws <code>[WatchApi.RunWatchNowError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.runWatchNow(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesRunResponse, WatchApi.RunWatchNowError&gt;</code>, with `result.value` of type <code>[V1WatchesRunResponse](src/models/v1-watches-run-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testWatch(request: WatchApi.TestWatchRequest, options?: RequestOptions): ApiPromise&lt;V1WatchesTestResponse, WatchApi.TestWatchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Render a proposed watch config exactly as a live check would (same self-identifying User-Agent, SSRF checks, geo + compatibility-mode behaviour, and block/error detection) and return what was captured — so you can validate a selector, scope, or fetch identity and confirm the page is reachable BEFORE committing to a schedule. Creates nothing (no watch, baseline, diff, or alerts). Draws 1 credit; refunded when the page can't be read. A blocked or errored page is a 200 result with reachable:false + an actionable reason, not an API error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.testWatch({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type V1WatchesTestResponse
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.TestWatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi.testWatch({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesTestResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWatchRequest](src/models/create-watch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.testWatch(request)`

- **OnSuccess**: <code>[V1WatchesTestResponse](src/models/v1-watches-test-response.ts)</code>
- **OnError**: throws <code>[WatchApi.TestWatchError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.testWatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesTestResponse, WatchApi.TestWatchError&gt;</code>, with `result.value` of type <code>[V1WatchesTestResponse](src/models/v1-watches-test-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWatch(request: WatchApi.UpdateWatchRequestParams, options?: RequestOptions): ApiPromise&lt;V1WatchesResponse, WatchApi.UpdateWatchError&gt;</code></summary>

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

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.watchApi.updateWatch({
    id: "00000000-0000-0000-0000-000000000000",
    body: {},
  });
  // TODO: Handle 'response' of type V1WatchesResponse
} catch (err) {
  // TODO: Handle 'err' of type WatchApi.UpdateWatchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.watchApi
  .updateWatch({ id: "00000000-0000-0000-0000-000000000000", body: {} })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1WatchesResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Watch UUID |
| <code>body</code> | <code>[UpdateWatchRequest](src/models/update-watch-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.watchApi.updateWatch(request)`

- **OnSuccess**: <code>[V1WatchesResponse](src/models/v1-watches-response.ts)</code>
- **OnError**: throws <code>[WatchApi.UpdateWatchError](src/resources/watch-api.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.watchApi.updateWatch(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1WatchesResponse, WatchApi.UpdateWatchError&gt;</code>, with `result.value` of type <code>[V1WatchesResponse](src/models/v1-watches-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[RendexError](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

