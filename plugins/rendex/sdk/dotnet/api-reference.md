# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [RendexClient](src/Rendex/RendexClient.cs)

## Account

> Source: [Account](src/Rendex/Api/Account.cs)

<details>
<summary><code>Task&lt;V1AccountResponse&gt; GetAccount(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Account.GetAccount();
    // TODO: Handle 'response' of type V1AccountResponse
}
catch (ApiException<GetAccountError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1AccountResponse](src/Rendex/Models/V1AccountResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[GetAccountError](src/Rendex/Errors/GetAccountError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Batch

> Source: [Batch](src/Rendex/Api/Batch.cs)

<details>
<summary><code>Task&lt;BatchResponse&gt; PostScreenshotBatch(PostScreenshotBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Batch.PostScreenshotBatch(new PostScreenshotBatchRequest
    {
        Body = new BatchRequest
        {
            Urls = [
                new Url { UrlValue = "https://example.com" },
                new Url { UrlValue = "https://github.com" },
                new Url { UrlValue = "https://stripe.com" },
            ],
            Defaults = new ScreenshotRequest { Format = Format.Webp, Width = 1280, FullPage = true },
        },
    });
    // TODO: Handle 'response' of type BatchResponse
}
catch (ApiException<PostScreenshotBatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostScreenshotBatchRequest](src/Rendex/Requests/Batch/PostScreenshotBatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchResponse](src/Rendex/Models/BatchResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[PostScreenshotBatchError](src/Rendex/Errors/PostScreenshotBatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](src/Rendex/Api/Health.cs)

<details>
<summary><code>Task&lt;DeepHealthResponse&gt; DeepHealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Health.DeepHealthCheck();
    // TODO: Handle 'response' of type DeepHealthResponse
}
catch (ApiException<DeepHealthCheckError> ex)
{
    if (ex.Error.TryGetDeepHealthResponse(out var error))
    {
        // TODO: Handle 'error' of type DeepHealthResponse
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeepHealthResponse](src/Rendex/Models/DeepHealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[DeepHealthCheckError](src/Rendex/Errors/DeepHealthCheckError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;HealthResponse&gt; HealthCheck(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Health.HealthCheck();
    // TODO: Handle 'response' of type HealthResponse
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthResponse](src/Rendex/Models/HealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Rendex/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Jobs

> Source: [Jobs](src/Rendex/Api/Jobs.cs)

<details>
<summary><code>Task&lt;BatchStatusResponse&gt; GetBatchStatus(GetBatchStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Jobs.GetBatchStatus(new GetBatchStatusRequest { BatchId = "some example string" });
    // TODO: Handle 'response' of type BatchStatusResponse
}
catch (ApiException<GetBatchStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetBatchStatusRequest](src/Rendex/Requests/Jobs/GetBatchStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BatchStatusResponse](src/Rendex/Models/BatchStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[GetBatchStatusError](src/Rendex/Errors/GetBatchStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;JobStatusResponse&gt; GetJobStatus(GetJobStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Jobs.GetJobStatus(new GetJobStatusRequest { JobId = "some example string" });
    // TODO: Handle 'response' of type JobStatusResponse
}
catch (ApiException<GetJobStatusError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetJobStatusRequest](src/Rendex/Requests/Jobs/GetJobStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[JobStatusResponse](src/Rendex/Models/JobStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[GetJobStatusError](src/Rendex/Errors/GetJobStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](src/Rendex/Api/Screenshot.cs)

<details>
<summary><code>Task&lt;V1RenderLinkResponse&gt; CreateRenderLink(CreateRenderLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Screenshot.CreateRenderLink(new CreateRenderLinkRequest
    {
        Body = new V1RenderLinkRequest(),
    });
    // TODO: Handle 'response' of type V1RenderLinkResponse
}
catch (ApiException<CreateRenderLinkError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateRenderLinkRequest](src/Rendex/Requests/Screenshot/CreateRenderLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1RenderLinkResponse](src/Rendex/Models/V1RenderLinkResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[CreateRenderLinkError](src/Rendex/Errors/CreateRenderLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ExtractResponse&gt; ExtractContent(ExtractContentRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Screenshot.ExtractContent(new ExtractContentRequest
    {
        Body = new V1ExtractRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type V1ExtractResponse
}
catch (ApiException<ExtractContentError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExtractContentRequest](src/Rendex/Requests/Screenshot/ExtractContentRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ExtractResponse](src/Rendex/Models/V1ExtractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[ExtractContentError](src/Rendex/Errors/ExtractContentError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; GetScreenshot(GetScreenshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Screenshot.GetScreenshot(new GetScreenshotRequest { Url = "https://example.com" });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<GetScreenshotError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetScreenshotRequest](src/Rendex/Requests/Screenshot/GetScreenshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[GetScreenshotError](src/Rendex/Errors/GetScreenshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; PostScreenshot(PostScreenshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Screenshot.PostScreenshot(new PostScreenshotRequest
    {
        Body = new ScreenshotRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<PostScreenshotError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostScreenshotRequest](src/Rendex/Requests/Screenshot/PostScreenshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[PostScreenshotError](src/Rendex/Errors/PostScreenshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ScreenshotJsonResponse&gt; PostScreenshotJson(PostScreenshotJsonRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Screenshot.PostScreenshotJson(new PostScreenshotJsonRequest
    {
        Body = new ScreenshotRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type ScreenshotJsonResponse
}
catch (ApiException<PostScreenshotJsonError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[PostScreenshotJsonRequest](src/Rendex/Requests/Screenshot/PostScreenshotJsonRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ScreenshotJsonResponse](src/Rendex/Models/ScreenshotJsonResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[PostScreenshotJsonError](src/Rendex/Errors/PostScreenshotJsonError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1ArtifactResponse&gt; RenderArtifact(RenderArtifactRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Screenshot.RenderArtifact(new RenderArtifactRequest
    {
        Body = new V1ArtifactRequest { Content = "some example string" },
    });
    // TODO: Handle 'response' of type V1ArtifactResponse
}
catch (ApiException<RenderArtifactError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RenderArtifactRequest](src/Rendex/Requests/Screenshot/RenderArtifactRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1ArtifactResponse](src/Rendex/Models/V1ArtifactResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[RenderArtifactError](src/Rendex/Errors/RenderArtifactError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;BinaryContent&gt; ServeRenderLink(ServeRenderLinkRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Screenshot.ServeRenderLink(new ServeRenderLinkRequest
    {
        P = "some example string",
        Uid = "some example string",
        Exp = 1,
        Sig = "some example string",
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<ServeRenderLinkError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ServeRenderLinkRequest](src/Rendex/Requests/Screenshot/ServeRenderLinkRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[ServeRenderLinkError](src/Rendex/Errors/ServeRenderLinkError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WatchApi

> Source: [WatchApi](src/Rendex/Api/WatchApi.cs)

<details>
<summary><code>Task&lt;V1WatchesResponse&gt; CreateWatch(CreateWatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.CreateWatch(new CreateWatchOperationRequest
    {
        Body = new CreateWatchRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type V1WatchesResponse
}
catch (ApiException<CreateWatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CreateWatchOperationRequest](src/Rendex/Requests/WatchApi/CreateWatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse](src/Rendex/Models/V1WatchesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[CreateWatchError](src/Rendex/Errors/CreateWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task DeleteWatch(DeleteWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    await client.WatchApi.DeleteWatch(new DeleteWatchRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
}
catch (ApiException<DeleteWatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeleteWatchRequest](src/Rendex/Requests/WatchApi/DeleteWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: No content

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[DeleteWatchError](src/Rendex/Errors/DeleteWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WatchesResponse&gt; GetWatch(GetWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.GetWatch(new GetWatchRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type V1WatchesResponse
}
catch (ApiException<GetWatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetWatchRequest](src/Rendex/Requests/WatchApi/GetWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse](src/Rendex/Models/V1WatchesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[GetWatchError](src/Rendex/Errors/GetWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WatchesRunsResponse&gt; ListWatchRuns(ListWatchRunsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.ListWatchRuns(new ListWatchRunsRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type V1WatchesRunsResponse
}
catch (ApiException<ListWatchRunsError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWatchRunsRequest](src/Rendex/Requests/WatchApi/ListWatchRunsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesRunsResponse](src/Rendex/Models/V1WatchesRunsResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[ListWatchRunsError](src/Rendex/Errors/ListWatchRunsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WatchesResponse1&gt; ListWatches(ListWatchesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.ListWatches(new ListWatchesRequest());
    // TODO: Handle 'response' of type V1WatchesResponse1
}
catch (ApiException<RawError> ex)
{
    // TODO: Handle 'ex.Error' of type RawError
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ListWatchesRequest](src/Rendex/Requests/WatchApi/ListWatchesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse1](src/Rendex/Models/V1WatchesResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[RawError](src/Rendex/Core/ErrorResponse/RawError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WatchesRunResponse&gt; RunWatchNow(RunWatchNowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.RunWatchNow(new RunWatchNowRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
    });
    // TODO: Handle 'response' of type V1WatchesRunResponse
}
catch (ApiException<RunWatchNowError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[RunWatchNowRequest](src/Rendex/Requests/WatchApi/RunWatchNowRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesRunResponse](src/Rendex/Models/V1WatchesRunResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[RunWatchNowError](src/Rendex/Errors/RunWatchNowError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WatchesTestResponse&gt; TestWatch(TestWatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.TestWatch(new TestWatchRequest
    {
        Body = new CreateWatchRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type V1WatchesTestResponse
}
catch (ApiException<TestWatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TestWatchRequest](src/Rendex/Requests/WatchApi/TestWatchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesTestResponse](src/Rendex/Models/V1WatchesTestResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[TestWatchError](src/Rendex/Errors/TestWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;V1WatchesResponse&gt; UpdateWatch(UpdateWatchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.WatchApi.UpdateWatch(new UpdateWatchOperationRequest
    {
        Id = Guid.Parse("00000000-0000-0000-0000-000000000000"),
        Body = new UpdateWatchRequest(),
    });
    // TODO: Handle 'response' of type V1WatchesResponse
}
catch (ApiException<UpdateWatchError> ex)
{
    if (ex.Error.TryGetErrorResponseModel(out var error))
    {
        // TODO: Handle 'error' of type ErrorResponseModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UpdateWatchOperationRequest](src/Rendex/Requests/WatchApi/UpdateWatchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[V1WatchesResponse](src/Rendex/Models/V1WatchesResponse.cs)</code>

**OnError**: <code>[ApiException](src/Rendex/Core/Exceptions/ApiException.cs)&lt;[UpdateWatchError](src/Rendex/Errors/UpdateWatchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

