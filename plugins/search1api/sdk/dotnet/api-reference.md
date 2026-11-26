# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [Search1ApiClient](src/Search1Api/Search1ApiClient.cs)

## Account

> Source: [Account](src/Search1Api/Api/Account.cs)

<details>
<summary><code>Task&lt;UsageResponse&gt; Usage(UsageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Account.Usage(new UsageRequest());
    // TODO: Handle 'response' of type UsageResponse
}
catch (ApiException<UsageError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[UsageRequest](src/Search1Api/Requests/Account/UsageRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[UsageResponse](src/Search1Api/Models/UsageResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[UsageError](src/Search1Api/Errors/UsageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Crawl

> Source: [Crawl](src/Search1Api/Api/Crawl.cs)

<details>
<summary><code>Task&lt;CrawlResponse1&gt; CrawlInvoke(CrawlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Crawl.CrawlInvoke(new CrawlOperationRequest
    {
        Body = new CrawlRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type CrawlResponse1
}
catch (ApiException<CrawlError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[CrawlOperationRequest](src/Search1Api/Requests/Crawl/CrawlOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CrawlResponse1](src/Search1Api/Models/AnyOf/CrawlResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[CrawlError](src/Search1Api/Errors/CrawlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeepcrawlAcceptedResponse&gt; Deepcrawl(DeepcrawlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Crawl.Deepcrawl(new DeepcrawlOperationRequest
    {
        Body = new DeepcrawlRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type DeepcrawlAcceptedResponse
}
catch (ApiException<DeepcrawlError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeepcrawlOperationRequest](src/Search1Api/Requests/Crawl/DeepcrawlOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeepcrawlAcceptedResponse](src/Search1Api/Models/DeepcrawlAcceptedResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[DeepcrawlError](src/Search1Api/Errors/DeepcrawlError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;DeepcrawlStatusResponse&gt; DeepcrawlStatus(DeepcrawlStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Crawl.DeepcrawlStatus(new DeepcrawlStatusRequest { TaskId = "some example string" });
    // TODO: Handle 'response' of type DeepcrawlStatusResponse
}
catch (ApiException<DeepcrawlStatusError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[DeepcrawlStatusRequest](src/Search1Api/Requests/Crawl/DeepcrawlStatusRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DeepcrawlStatusResponse](src/Search1Api/Models/DeepcrawlStatusResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[DeepcrawlStatusError](src/Search1Api/Errors/DeepcrawlStatusError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ExtractResponse&gt; Extract(ExtractOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Crawl.Extract(new ExtractOperationRequest
    {
        Body = new ExtractRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type ExtractResponse
}
catch (ApiException<ExtractError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ExtractOperationRequest](src/Search1Api/Requests/Crawl/ExtractOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ExtractResponse](src/Search1Api/Models/ExtractResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[ExtractError](src/Search1Api/Errors/ExtractError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SitemapResponse&gt; Sitemap(SitemapOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Crawl.Sitemap(new SitemapOperationRequest
    {
        Body = new SitemapRequest { Url = "https://example.com" },
    });
    // TODO: Handle 'response' of type SitemapResponse
}
catch (ApiException<SitemapError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SitemapOperationRequest](src/Search1Api/Requests/Crawl/SitemapOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SitemapResponse](src/Search1Api/Models/SitemapResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[SitemapError](src/Search1Api/Errors/SitemapError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Feedback

> Source: [Feedback](src/Search1Api/Api/Feedback.cs)

<details>
<summary><code>Task&lt;FeedbackResponse&gt; FeedbackInvoke(FeedbackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Feedback.FeedbackInvoke(new FeedbackOperationRequest
    {
        Body = new FeedbackRequest { Message = "some example string" },
    });
    // TODO: Handle 'response' of type FeedbackResponse
}
catch (ApiException<FeedbackError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[FeedbackOperationRequest](src/Search1Api/Requests/Feedback/FeedbackOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FeedbackResponse](src/Search1Api/Models/FeedbackResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[FeedbackError](src/Search1Api/Errors/FeedbackError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](src/Search1Api/Api/Screenshot.cs)

<details>
<summary><code>Task&lt;BinaryContent&gt; ScreenshotInvoke(ScreenshotOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Screenshot.ScreenshotInvoke(new ScreenshotOperationRequest
    {
        Body = new ScreenshotRequest
        {
            Url = "https://s1.dev",
            Format = Format.Png,
            FullPage = true,
            WaitUntil = WaitUntil.Load,
            DelayMs = 1000,
            TimeoutMs = 30000,
        },
    });
    // TODO: Handle 'response' of type BinaryContent
}
catch (ApiException<ScreenshotError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[ScreenshotOperationRequest](src/Search1Api/Requests/Screenshot/ScreenshotOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>BinaryContent</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[ScreenshotError](src/Search1Api/Errors/ScreenshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/Search1Api/Api/Search.cs)

<details>
<summary><code>Task&lt;AskResponse&gt; Ask(AskOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Search.Ask(new AskOperationRequest
    {
        Body = new AskRequest { Query = "What are developers saying about Bun 1.3 this month?" },
    });
    // TODO: Handle 'response' of type AskResponse
}
catch (ApiException<AskError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[AskOperationRequest](src/Search1Api/Requests/Search/AskOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[AskResponse](src/Search1Api/Models/AskResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[AskError](src/Search1Api/Errors/AskError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsResponse1&gt; News(NewsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Search.News(new NewsOperationRequest
    {
        Body = new NewsParameters { Query = "some example string" },
    });
    // TODO: Handle 'response' of type NewsResponse1
}
catch (ApiException<NewsError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[NewsOperationRequest](src/Search1Api/Requests/Search/NewsOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsResponse1](src/Search1Api/Models/AnyOf/NewsResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[NewsError](src/Search1Api/Errors/NewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SearchResponse1&gt; SearchInvoke(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Search.SearchInvoke(new SearchOperationRequest
    {
        Body = new SearchParameters { Query = "some example string" },
    });
    // TODO: Handle 'response' of type SearchResponse1
}
catch (ApiException<SearchError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[SearchOperationRequest](src/Search1Api/Requests/Search/SearchOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SearchResponse1](src/Search1Api/Models/AnyOf/SearchResponse1.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[SearchError](src/Search1Api/Errors/SearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TrendingResponse&gt; Trending(TrendingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Search.Trending(new TrendingOperationRequest
    {
        Body = new TrendingRequest { SearchService = "some example string" },
    });
    // TODO: Handle 'response' of type TrendingResponse
}
catch (ApiException<TrendingError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[TrendingOperationRequest](src/Search1Api/Requests/Search/TrendingOperationRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TrendingResponse](src/Search1Api/Models/TrendingResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[TrendingError](src/Search1Api/Errors/TrendingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## SystemApi

> Source: [SystemApi](src/Search1Api/Api/SystemApi.cs)

<details>
<summary><code>Task&lt;HealthResponse&gt; Health(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.SystemApi.Health();
    // TODO: Handle 'response' of type HealthResponse
}
catch (ApiException<HealthError> ex)
{
    if (ex.Error.TryGetApiErrorModel(out var error))
    {
        // TODO: Handle 'error' of type ApiErrorModel
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[HealthResponse](src/Search1Api/Models/HealthResponse.cs)</code>

**OnError**: <code>[ApiException](src/Search1Api/Core/Exceptions/ApiException.cs)&lt;[HealthError](src/Search1Api/Errors/HealthError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

