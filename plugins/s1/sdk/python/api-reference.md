# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [S1Client](s1/client.py)

## Account

> Source: [Account](s1/apis/account.py)

<details>
<summary><code>def usage(*, period: PeriodOrStr | None = None, request_options: RequestOptionsOrDict | None = None) -> UsageResponse</code></summary>

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
try:
    response = client.account.usage()
    # TODO: Handle 'response' of type UsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsageErrorBody
```

**Async**

```python
try:
    response = await async_client.account.usage()
    # TODO: Handle 'response' of type UsageResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type UsageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>period</code> | <code>[PeriodOrStr](s1/models/enums/period.py) \| None</code> | Value sent with the request.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](s1/models/usage_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[UsageErrorBody](s1/errors/usage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 429, 500 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Crawl

> Source: [Crawl](s1/apis/crawl.py)

<details>
<summary><code>def crawl(body: CrawlRequest1 | CrawlRequest1Dict, *, request_options: RequestOptionsOrDict | None = None) -> CrawlResponse1</code></summary>

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
try:
    response = client.crawl.crawl(CrawlRequest(url="https://example.com"))
    # TODO: Handle 'response' of type CrawlResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CrawlErrorBody
```

**Async**

```python
try:
    response = await async_client.crawl.crawl(CrawlRequest(url="https://example.com"))
    # TODO: Handle 'response' of type CrawlResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type CrawlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CrawlRequest1](s1/models/unions/crawl_request1.py) \| [CrawlRequest1Dict](s1/models/unions/crawl_request1.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CrawlResponse1](s1/models/unions/crawl_response1.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[CrawlErrorBody](s1/errors/crawl_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 404, 410, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deepcrawl(body: DeepcrawlRequest | DeepcrawlRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> DeepcrawlAcceptedResponse</code></summary>

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
try:
    response = client.crawl.deepcrawl(DeepcrawlRequest(url="https://example.com"))
    # TODO: Handle 'response' of type DeepcrawlAcceptedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeepcrawlErrorBody
```

**Async**

```python
try:
    response = await async_client.crawl.deepcrawl(DeepcrawlRequest(url="https://example.com"))
    # TODO: Handle 'response' of type DeepcrawlAcceptedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeepcrawlErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeepcrawlRequest](s1/models/deepcrawl_request.py) \| [DeepcrawlRequestDict](s1/models/deepcrawl_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeepcrawlAcceptedResponse](s1/models/deepcrawl_accepted_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[DeepcrawlErrorBody](s1/errors/deepcrawl_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def deepcrawl_status(task_id: str, *, request_options: RequestOptionsOrDict | None = None) -> DeepcrawlStatusResponse</code></summary>

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
try:
    response = client.crawl.deepcrawl_status("some example string")
    # TODO: Handle 'response' of type DeepcrawlStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeepcrawlStatusErrorBody
```

**Async**

```python
try:
    response = await async_client.crawl.deepcrawl_status("some example string")
    # TODO: Handle 'response' of type DeepcrawlStatusResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type DeepcrawlStatusErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>task_id</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeepcrawlStatusResponse](s1/models/deepcrawl_status_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[DeepcrawlStatusErrorBody](s1/errors/deepcrawl_status_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def extract(body: ExtractRequest | ExtractRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> ExtractResponse</code></summary>

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
try:
    response = client.crawl.extract(ExtractRequest(url="https://example.com"))
    # TODO: Handle 'response' of type ExtractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractErrorBody
```

**Async**

```python
try:
    response = await async_client.crawl.extract(ExtractRequest(url="https://example.com"))
    # TODO: Handle 'response' of type ExtractResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ExtractErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ExtractRequest](s1/models/extract_request.py) \| [ExtractRequestDict](s1/models/extract_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtractResponse](s1/models/extract_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[ExtractErrorBody](s1/errors/extract_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def sitemap(body: SitemapRequest | SitemapRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SitemapResponse</code></summary>

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
try:
    response = client.crawl.sitemap(SitemapRequest(url="https://example.com"))
    # TODO: Handle 'response' of type SitemapResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SitemapErrorBody
```

**Async**

```python
try:
    response = await async_client.crawl.sitemap(SitemapRequest(url="https://example.com"))
    # TODO: Handle 'response' of type SitemapResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SitemapErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SitemapRequest](s1/models/sitemap_request.py) \| [SitemapRequestDict](s1/models/sitemap_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitemapResponse](s1/models/sitemap_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[SitemapErrorBody](s1/errors/sitemap_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Feedback

> Source: [Feedback](s1/apis/feedback.py)

<details>
<summary><code>def feedback(body: FeedbackRequest | FeedbackRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FeedbackResponse</code></summary>

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
try:
    response = client.feedback.feedback(FeedbackRequest(message="some example string"))
    # TODO: Handle 'response' of type FeedbackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeedbackErrorBody
```

**Async**

```python
try:
    response = await async_client.feedback.feedback(FeedbackRequest(message="some example string"))
    # TODO: Handle 'response' of type FeedbackResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type FeedbackErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FeedbackRequest](s1/models/feedback_request.py) \| [FeedbackRequestDict](s1/models/feedback_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeedbackResponse](s1/models/feedback_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[FeedbackErrorBody](s1/errors/feedback_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403, 413, 415, 429, 500, 503 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](s1/apis/screenshot.py)

<details>
<summary><code>def screenshot(body: ScreenshotRequest | ScreenshotRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> FileResponse</code></summary>

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
try:
    response = client.screenshot.screenshot(
        ScreenshotRequest(
            url="https://s1.dev",
            format=Format.PNG,
            full_page=True,
            wait_until=WaitUntil.LOAD,
            delay_ms=1000,
            timeout_ms=30000,
        ),
    )
    # TODO: Handle 'response' of type FileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScreenshotErrorBody
```

**Async**

```python
try:
    response = await async_client.screenshot.screenshot(
        ScreenshotRequest(
            url="https://s1.dev",
            format=Format.PNG,
            full_page=True,
            wait_until=WaitUntil.LOAD,
            delay_ms=1000,
            timeout_ms=30000,
        ),
    )
    # TODO: Handle 'response' of type AsyncFileResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type ScreenshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ScreenshotRequest](s1/models/screenshot_request.py) \| [ScreenshotRequestDict](s1/models/screenshot_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>FileResponse</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[ScreenshotErrorBody](s1/errors/screenshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 403, 422, 429, 500, 502, 503, 504 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](s1/apis/search.py)

<details>
<summary><code>def ask(body: AskRequest | AskRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> AskResponse</code></summary>

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
try:
    response = client.search.ask(AskRequest(query="What are developers saying about Bun 1.3 this month?"))
    # TODO: Handle 'response' of type AskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskErrorBody
```

**Async**

```python
try:
    response = await async_client.search.ask(AskRequest(query="What are developers saying about Bun 1.3 this month?"))
    # TODO: Handle 'response' of type AskResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type AskErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[AskRequest](s1/models/ask_request.py) \| [AskRequestDict](s1/models/ask_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AskResponse](s1/models/ask_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[AskErrorBody](s1/errors/ask_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def news(body: NewsRequest | NewsRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> NewsResponse1</code></summary>

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
try:
    response = client.search.news(NewsParameters(query="some example string"))
    # TODO: Handle 'response' of type NewsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NewsErrorBody
```

**Async**

```python
try:
    response = await async_client.search.news(NewsParameters(query="some example string"))
    # TODO: Handle 'response' of type NewsResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type NewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[NewsRequest](s1/models/unions/news_request.py) \| [NewsRequestDict](s1/models/unions/news_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsResponse1](s1/models/unions/news_response1.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[NewsErrorBody](s1/errors/news_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def search(body: SearchRequest | SearchRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> SearchResponse1</code></summary>

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
try:
    response = client.search.search(SearchParameters(query="some example string"))
    # TODO: Handle 'response' of type SearchResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchErrorBody
```

**Async**

```python
try:
    response = await async_client.search.search(SearchParameters(query="some example string"))
    # TODO: Handle 'response' of type SearchResponse1
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchRequest](s1/models/unions/search_request.py) \| [SearchRequestDict](s1/models/unions/search_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse1](s1/models/unions/search_response1.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[SearchErrorBody](s1/errors/search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def trending(body: TrendingRequest | TrendingRequestDict, *, request_options: RequestOptionsOrDict | None = None) -> TrendingResponse</code></summary>

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
try:
    response = client.search.trending(TrendingRequest(search_service="some example string"))
    # TODO: Handle 'response' of type TrendingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TrendingErrorBody
```

**Async**

```python
try:
    response = await async_client.search.trending(TrendingRequest(search_service="some example string"))
    # TODO: Handle 'response' of type TrendingResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type TrendingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[TrendingRequest](s1/models/trending_request.py) \| [TrendingRequestDict](s1/models/trending_request.py)</code> | The request body. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrendingResponse](s1/models/trending_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[TrendingErrorBody](s1/errors/trending_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 402, 422, 429, 500, 502 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## System

> Source: [System](s1/apis/system.py)

<details>
<summary><code>def health(*, request_options: RequestOptionsOrDict | None = None) -> HealthResponse</code></summary>

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
try:
    response = client.system.health()
    # TODO: Handle 'response' of type HealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HealthErrorBody
```

**Async**

```python
try:
    response = await async_client.system.health()
    # TODO: Handle 'response' of type HealthResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type HealthErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](s1/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthResponse](s1/models/health_response.py)</code> -- Successful response

**OnError**: <code>[ApiError](s1/core/exceptions.py)&#91;[HealthErrorBody](s1/errors/health_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 500 | <code>[ApiErrorModel](s1/models/api_error_model.py)</code> |
| anything unmapped | <code>[RawError](s1/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

