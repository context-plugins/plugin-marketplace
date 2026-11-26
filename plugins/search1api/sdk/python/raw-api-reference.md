# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [Search1ApiClient](search1_api/client.py)

## Account

> Source: [Account](search1_api/apis/account.py)

<details>
<summary><code>def usage(*, period: PeriodOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsageResponse, UsageErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the remaining credit balance for the authenticated account. Use it to check headroom before starting an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.account.with_raw_response.usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsageErrorBody
```

**Async**

```python
result = await async_client.account.with_raw_response.usage()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type UsageResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type UsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period</code> | <code>[PeriodOrStr](search1_api/models/enums/period.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[UsageResponse](search1_api/models/usage_response.py), [UsageErrorBody](search1_api/errors/usage_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[UsageResponse](search1_api/models/usage_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[UsageErrorBody](search1_api/errors/usage_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Crawl

> Source: [Crawl](search1_api/apis/crawl.py)

<details>
<summary><code>def crawl(body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[CrawlResponse1, CrawlErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items back to your input by `crawlParameters.url`; failed URLs are omitted and not charged. `enable_fallback` is accepted as a snake_case alias of `enableFallback`. Costs 1 credit per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.crawl.with_raw_response.crawl(CrawlRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CrawlResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CrawlErrorBody
```

**Async**

```python
result = await async_client.crawl.with_raw_response.crawl(CrawlRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type CrawlResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type CrawlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CrawlRequest1](search1_api/models/unions/crawl_request1.py) \| [CrawlRequest1Dict](search1_api/models/unions/crawl_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[CrawlResponse1](search1_api/models/unions/crawl_response1.py), [CrawlErrorBody](search1_api/errors/crawl_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[CrawlResponse1](search1_api/models/unions/crawl_response1.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[CrawlErrorBody](search1_api/errors/crawl_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 410, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deepcrawl(body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeepcrawlAcceptedResponse, DeepcrawlErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.crawl.with_raw_response.deepcrawl(DeepcrawlRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeepcrawlAcceptedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeepcrawlErrorBody
```

**Async**

```python
result = await async_client.crawl.with_raw_response.deepcrawl(DeepcrawlRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeepcrawlAcceptedResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeepcrawlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeepcrawlRequest](search1_api/models/deepcrawl_request.py) \| [DeepcrawlRequestDict](search1_api/models/deepcrawl_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[DeepcrawlAcceptedResponse](search1_api/models/deepcrawl_accepted_response.py), [DeepcrawlErrorBody](search1_api/errors/deepcrawl_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeepcrawlAcceptedResponse](search1_api/models/deepcrawl_accepted_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeepcrawlErrorBody](search1_api/errors/deepcrawl_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deepcrawl_status(task_id: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[DeepcrawlStatusResponse, DeepcrawlStatusErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes, where to retrieve the packaged result. Safe to call repeatedly. Free to call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.crawl.with_raw_response.deepcrawl_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeepcrawlStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeepcrawlStatusErrorBody
```

**Async**

```python
result = await async_client.crawl.with_raw_response.deepcrawl_status("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type DeepcrawlStatusResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type DeepcrawlStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[DeepcrawlStatusResponse](search1_api/models/deepcrawl_status_response.py), [DeepcrawlStatusErrorBody](search1_api/errors/deepcrawl_status_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[DeepcrawlStatusResponse](search1_api/models/deepcrawl_status_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[DeepcrawlStatusErrorBody](search1_api/errors/deepcrawl_status_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def extract(body: ExtractRequest | ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ExtractResponse, ExtractErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply. Use it when you need specific fields — prices, specifications, contact details — rather than the whole document; when you want the full text, use POST /crawl. Costs 10 credits per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.crawl.with_raw_response.extract(ExtractRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractErrorBody
```

**Async**

```python
result = await async_client.crawl.with_raw_response.extract(ExtractRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ExtractResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ExtractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ExtractRequest](search1_api/models/extract_request.py) \| [ExtractRequestDict](search1_api/models/extract_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[ExtractResponse](search1_api/models/extract_response.py), [ExtractErrorBody](search1_api/errors/extract_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ExtractResponse](search1_api/models/extract_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[ExtractErrorBody](search1_api/errors/extract_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sitemap(body: SitemapRequest | SitemapRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SitemapResponse, SitemapErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discover the public URLs of a site when you need to know which pages exist before fetching any of them — scoping a crawl, auditing coverage, or locating a section. With the default `type: "sitemap"` this reads the site's own sitemap: `Sitemap:` directives in robots.txt first, then the conventional paths, following sitemap index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes no sitemap falls back to the links found on the given page. Use `type: "all"` to skip the sitemap and get every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1 credit per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.crawl.with_raw_response.sitemap(SitemapRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitemapResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SitemapErrorBody
```

**Async**

```python
result = await async_client.crawl.with_raw_response.sitemap(SitemapRequest(url="https://example.com"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SitemapResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SitemapErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SitemapRequest](search1_api/models/sitemap_request.py) \| [SitemapRequestDict](search1_api/models/sitemap_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[SitemapResponse](search1_api/models/sitemap_response.py), [SitemapErrorBody](search1_api/errors/sitemap_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SitemapResponse](search1_api/models/sitemap_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SitemapErrorBody](search1_api/errors/sitemap_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Feedback

> Source: [Feedback](search1_api/apis/feedback.py)

<details>
<summary><code>def feedback(body: FeedbackRequest | FeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FeedbackResponse, FeedbackErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only message is required. Optional request_id refers to the original problem request. Do not include credentials, personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account reference. Do not report every empty result or retry the same report automatically; feedback should not block the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10 submissions per account per minute at a Cloudflare location. Free to call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.feedback.with_raw_response.feedback(FeedbackRequest(message="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeedbackResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeedbackErrorBody
```

**Async**

```python
result = await async_client.feedback.with_raw_response.feedback(FeedbackRequest(message="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FeedbackResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type FeedbackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FeedbackRequest](search1_api/models/feedback_request.py) \| [FeedbackRequestDict](search1_api/models/feedback_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[FeedbackResponse](search1_api/models/feedback_response.py), [FeedbackErrorBody](search1_api/errors/feedback_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[FeedbackResponse](search1_api/models/feedback_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[FeedbackErrorBody](search1_api/errors/feedback_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 413, 415, 429, 500, 503 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](search1_api/apis/screenshot.py)

<details>
<summary><code>def screenshot(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[FileResponse, ScreenshotErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks, visual previews, or content that does not survive text extraction — and control the viewport, when the page counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the page's text instead, call POST /crawl. Costs 2 credits per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.screenshot.with_raw_response.screenshot(
    ScreenshotRequest(
        url="https://s1.dev",
        format=Format.PNG,
        full_page=True,
        wait_until=WaitUntil.LOAD,
        delay_ms=1000,
        timeout_ms=30000,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type FileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScreenshotErrorBody
```

**Async**

```python
result = await async_client.screenshot.with_raw_response.screenshot(
    ScreenshotRequest(
        url="https://s1.dev",
        format=Format.PNG,
        full_page=True,
        wait_until=WaitUntil.LOAD,
        delay_ms=1000,
        timeout_ms=30000,
    ),
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AsyncFileResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type ScreenshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScreenshotRequest](search1_api/models/screenshot_request.py) \| [ScreenshotRequestDict](search1_api/models/screenshot_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;FileResponse, [ScreenshotErrorBody](search1_api/errors/screenshot_error.py)&#93;</code>

**On `Success`**: `payload` is <code>FileResponse</code>, its body not yet read -- Successful response

**On `Failure`**: `error` is <code>[ScreenshotErrorBody](search1_api/errors/screenshot_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 422, 429, 500, 502, 503, 504 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](search1_api/apis/search.py)

<details>
<summary><code>def ask(body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[AskResponse, AskErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Agentic search. Describe what you are looking for in plain language and let a decision model (currently TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X, arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window from phrases such as "this week", searches the engines in parallel, and returns only the results judged relevant, merged and ranked, so agents read fewer off-topic results. The request takes only `query`; engines, keywords, and the window are always chosen by the model, and the response reports them in `intent`. Use POST /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.ask(AskRequest(query="What are developers saying about Bun 1.3 this month?"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AskResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.ask(
    AskRequest(query="What are developers saying about Bun 1.3 this month?")
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type AskResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type AskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AskRequest](search1_api/models/ask_request.py) \| [AskRequestDict](search1_api/models/ask_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[AskResponse](search1_api/models/ask_response.py), [AskErrorBody](search1_api/errors/ask_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[AskResponse](search1_api/models/ask_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[AskErrorBody](search1_api/errors/ask_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def news(body: NewsRequest | NewsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[NewsResponse1, NewsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search recent news when the question is about events, announcements, or coverage rather than reference material. Returns articles from verified publishers with title, URL, snippet, `published_date` (ISO 8601, when known), and optional full page content, filterable by site, language, and time range. For questions that are not time-sensitive, prefer POST /search. Costs 1 credit per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.news(NewsParameters(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NewsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NewsErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.news(NewsParameters(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type NewsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type NewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NewsRequest](search1_api/models/unions/news_request.py) \| [NewsRequestDict](search1_api/models/unions/news_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[NewsResponse1](search1_api/models/unions/news_response1.py), [NewsErrorBody](search1_api/errors/news_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[NewsResponse1](search1_api/models/unions/news_response1.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[NewsErrorBody](search1_api/errors/news_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search(body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResponse1, SearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the live public web when the answer depends on current information, sources, or research a model's training data cannot cover. Returns ranked results with id, title, URL, snippet, and `published_date` (ISO 8601, when the engine exposes one) across 13+ engines, with optional images. Set `crawl_results` to pull the top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL to POST /crawl separately. Costs 1 credit per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.search(SearchParameters(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.search(SearchParameters(query="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest](search1_api/models/unions/search_request.py) \| [SearchRequestDict](search1_api/models/unions/search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[SearchResponse1](search1_api/models/unions/search_response1.py), [SearchErrorBody](search1_api/errors/search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResponse1](search1_api/models/unions/search_response1.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[SearchErrorBody](search1_api/errors/search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trending(body: TrendingRequest | TrendingRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[TrendingResponse, TrendingErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories, when the user asks what is trending or new right now. This reads a platform's own live ranking rather than performing a query — for topic searches use POST /search. Costs 1 credit per request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search.with_raw_response.trending(TrendingRequest(search_service="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrendingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrendingErrorBody
```

**Async**

```python
result = await async_client.search.with_raw_response.trending(TrendingRequest(search_service="some example string"))
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type TrendingResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type TrendingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TrendingRequest](search1_api/models/trending_request.py) \| [TrendingRequestDict](search1_api/models/trending_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[TrendingResponse](search1_api/models/trending_response.py), [TrendingErrorBody](search1_api/errors/trending_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[TrendingResponse](search1_api/models/trending_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[TrendingErrorBody](search1_api/errors/trending_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## System

> Source: [System](search1_api/apis/system.py)

<details>
<summary><code>def health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[HealthResponse, HealthErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks — it will not tell you whether an API key is valid; call GET /usage for that. Free to call.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.system.with_raw_response.health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HealthErrorBody
```

**Async**

```python
result = await async_client.system.with_raw_response.health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type HealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type HealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](search1_api/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](search1_api/core/results.py)&#91;[HealthResponse](search1_api/models/health_response.py), [HealthErrorBody](search1_api/errors/health_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[HealthResponse](search1_api/models/health_response.py)</code> -- Successful response

**On `Failure`**: `error` is <code>[HealthErrorBody](search1_api/errors/health_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ApiErrorModel](search1_api/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](search1_api/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

