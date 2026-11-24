# Reference

> Source: [S1Client](src/client.ts)

## Account

> Source: [Account](src/resources/account.ts)

<details>
<summary><code>usage(request?: Account.UsageRequest, options?: RequestOptions): ApiPromise&lt;UsageResponse, Account.UsageError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Return the remaining credit balance for the authenticated account. Use it to check headroom before starting an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.account.usage();
  // TODO: Handle 'response' of type UsageResponse
} catch (err) {
  // TODO: Handle 'err' of type Account.UsageError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.account.usage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UsageResponse
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
| <code>period?</code> | <code>[Period](src/models/period.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.account.usage(request)`

- **OnSuccess**: <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: throws <code>[Account.UsageError](src/resources/account.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.account.usage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UsageResponse, Account.UsageError&gt;</code>, with `result.value` of type <code>[UsageResponse](src/models/usage-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Crawl

> Source: [Crawl](src/resources/crawl.ts)

<details>
<summary><code>crawl(request: Crawl.CrawlRequestParams, options?: RequestOptions): ApiPromise&lt;CrawlResponse1, Crawl.CrawlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetch one public URL and return its readable title and body as clean text, with navigation, boilerplate, and scripts stripped. Use it on a URL the user supplied or one returned by POST /search. To ingest a whole site rather than a single page, use POST /deepcrawl. Send an array of request objects to crawl several URLs in one call: the response is an array containing only the URLs that succeeded, in no guaranteed order, so match items back to your input by `crawlParameters.url`; failed URLs are omitted and not charged. `enable_fallback` is accepted as a snake_case alias of `enableFallback`. Costs 1 credit per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crawl.crawl({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type CrawlResponse1
} catch (err) {
  // TODO: Handle 'err' of type Crawl.CrawlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crawl.crawl({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CrawlResponse1
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
| <code>body</code> | <code>[CrawlRequest1](src/models/unions/crawl-request1.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crawl.crawl(request)`

- **OnSuccess**: <code>[CrawlResponse1](src/models/unions/crawl-response1.ts)</code>
- **OnError**: throws <code>[Crawl.CrawlError](src/resources/crawl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crawl.crawl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CrawlResponse1, Crawl.CrawlError&gt;</code>, with `result.value` of type <code>[CrawlResponse1](src/models/unions/crawl-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deepcrawl(request: Crawl.DeepcrawlRequestParams, options?: RequestOptions): ApiPromise&lt;DeepcrawlAcceptedResponse, Crawl.DeepcrawlError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Start an asynchronous crawl of an entire site and package the pages as documents. Use it for whole-site ingestion; a single page is POST /crawl. The call returns a task id immediately rather than the result — poll GET /deepcrawl/status/{taskId} until the task reports completion. Costs 20 credits per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crawl.deepcrawl({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type DeepcrawlAcceptedResponse
} catch (err) {
  // TODO: Handle 'err' of type Crawl.DeepcrawlError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crawl.deepcrawl({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeepcrawlAcceptedResponse
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
| <code>body</code> | <code>[DeepcrawlRequest](src/models/deepcrawl-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crawl.deepcrawl(request)`

- **OnSuccess**: <code>[DeepcrawlAcceptedResponse](src/models/deepcrawl-accepted-response.ts)</code>
- **OnError**: throws <code>[Crawl.DeepcrawlError](src/resources/crawl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crawl.deepcrawl(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeepcrawlAcceptedResponse, Crawl.DeepcrawlError&gt;</code>, with `result.value` of type <code>[DeepcrawlAcceptedResponse](src/models/deepcrawl-accepted-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deepcrawlStatus(request: Crawl.DeepcrawlStatusRequest, options?: RequestOptions): ApiPromise&lt;DeepcrawlStatusResponse, Crawl.DeepcrawlStatusError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Poll a deepcrawl task started by POST /deepcrawl. Returns the task's current state and, once it finishes, where to retrieve the packaged result. Safe to call repeatedly. Free to call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crawl.deepcrawlStatus({ taskId: "some example string" });
  // TODO: Handle 'response' of type DeepcrawlStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type Crawl.DeepcrawlStatusError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crawl.deepcrawlStatus({ taskId: "some example string" }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeepcrawlStatusResponse
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
| <code>taskId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crawl.deepcrawlStatus(request)`

- **OnSuccess**: <code>[DeepcrawlStatusResponse](src/models/deepcrawl-status-response.ts)</code>
- **OnError**: throws <code>[Crawl.DeepcrawlStatusError](src/resources/crawl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crawl.deepcrawlStatus(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeepcrawlStatusResponse, Crawl.DeepcrawlStatusError&gt;</code>, with `result.value` of type <code>[DeepcrawlStatusResponse](src/models/deepcrawl-status-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>extract(request: Crawl.ExtractRequestParams, options?: RequestOptions): ApiPromise&lt;ExtractResponse, Crawl.ExtractError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pull structured data out of a single webpage using a natural-language prompt and a JSON schema you supply. Use it when you need specific fields — prices, specifications, contact details — rather than the whole document; when you want the full text, use POST /crawl. Costs 10 credits per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crawl.extract({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type ExtractResponse
} catch (err) {
  // TODO: Handle 'err' of type Crawl.ExtractError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crawl.extract({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ExtractResponse
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
| <code>body</code> | <code>[ExtractRequest](src/models/extract-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crawl.extract(request)`

- **OnSuccess**: <code>[ExtractResponse](src/models/extract-response.ts)</code>
- **OnError**: throws <code>[Crawl.ExtractError](src/resources/crawl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crawl.extract(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ExtractResponse, Crawl.ExtractError&gt;</code>, with `result.value` of type <code>[ExtractResponse](src/models/extract-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>sitemap(request: Crawl.SitemapRequestParams, options?: RequestOptions): ApiPromise&lt;SitemapResponse, Crawl.SitemapError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Discover the public URLs of a site when you need to know which pages exist before fetching any of them — scoping a crawl, auditing coverage, or locating a section. With the default `type: "sitemap"` this reads the site's own sitemap: `Sitemap:` directives in robots.txt first, then the conventional paths, following sitemap index files and gzipped sitemaps, and returns the URLs it declares for the requested host. A site that publishes no sitemap falls back to the links found on the given page. Use `type: "all"` to skip the sitemap and get every link on that one page instead, including links to other hosts. Neither mode fetches page content. Costs 1 credit per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.crawl.sitemap({ body: { url: "https://example.com" } });
  // TODO: Handle 'response' of type SitemapResponse
} catch (err) {
  // TODO: Handle 'err' of type Crawl.SitemapError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.crawl.sitemap({ body: { url: "https://example.com" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SitemapResponse
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
| <code>body</code> | <code>[SitemapRequest](src/models/sitemap-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.crawl.sitemap(request)`

- **OnSuccess**: <code>[SitemapResponse](src/models/sitemap-response.ts)</code>
- **OnError**: throws <code>[Crawl.SitemapError](src/resources/crawl.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.crawl.sitemap(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SitemapResponse, Crawl.SitemapError&gt;</code>, with `result.value` of type <code>[SitemapResponse](src/models/sitemap-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Feedback

> Source: [Feedback](src/resources/feedback.ts)

<details>
<summary><code>feedback(request: Feedback.FeedbackRequestParams, options?: RequestOptions): ApiPromise&lt;FeedbackResponse, Feedback.FeedbackError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report a Search1API problem, missing capability, or confusing documentation encountered during a task. Only message is required. Optional request_id refers to the original problem request. Do not include credentials, personal data, or private user content. Reports are stored in Agent Feedback and linked to an opaque account reference. Do not report every empty result or retry the same report automatically; feedback should not block the main task. Returns 201 only after storage succeeds. Maximum JSON body size: 16 KiB. Limited to 10 submissions per account per minute at a Cloudflare location. Free to call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.feedback.feedback({ body: { message: "some example string" } });
  // TODO: Handle 'response' of type FeedbackResponse
} catch (err) {
  // TODO: Handle 'err' of type Feedback.FeedbackError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.feedback.feedback({ body: { message: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type FeedbackResponse
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
| <code>body</code> | <code>[FeedbackRequest](src/models/feedback-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.feedback.feedback(request)`

- **OnSuccess**: <code>[FeedbackResponse](src/models/feedback-response.ts)</code>
- **OnError**: throws <code>[Feedback.FeedbackError](src/resources/feedback.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.feedback.feedback(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;FeedbackResponse, Feedback.FeedbackError&gt;</code>, with `result.value` of type <code>[FeedbackResponse](src/models/feedback-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Screenshot

> Source: [Screenshot](src/resources/screenshot.ts)

<details>
<summary><code>screenshot(request: Screenshot.ScreenshotRequestParams, options?: RequestOptions): ApiPromise&lt;BinaryContent, Screenshot.ScreenshotError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks, visual previews, or content that does not survive text extraction — and control the viewport, when the page counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the page's text instead, call POST /crawl. Costs 2 credits per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.screenshot.screenshot({
    body: {
      url: "https://s1.dev",
      format: Format.Png,
      fullPage: true,
      waitUntil: WaitUntil.Load,
      delayMs: 1000,
      timeoutMs: 30000,
    },
  });
  // TODO: Handle 'response' of type BinaryContent
} catch (err) {
  // TODO: Handle 'err' of type Screenshot.ScreenshotError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.screenshot
  .screenshot({
    body: {
      url: "https://s1.dev",
      format: Format.Png,
      fullPage: true,
      waitUntil: WaitUntil.Load,
      delayMs: 1000,
      timeoutMs: 30000,
    },
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
| <code>body</code> | <code>[ScreenshotRequest](src/models/screenshot-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.screenshot.screenshot(request)`

- **OnSuccess**: <code>BinaryContent</code>
- **OnError**: throws <code>[Screenshot.ScreenshotError](src/resources/screenshot.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.screenshot.screenshot(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BinaryContent, Screenshot.ScreenshotError&gt;</code>, with `result.value` of type <code>BinaryContent</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## Search

> Source: [Search](src/resources/search.ts)

<details>
<summary><code>ask(request: Search.AskRequestParams, options?: RequestOptions): ApiPromise&lt;AskResponse, Search.AskError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Agentic search. Describe what you are looking for in plain language and let a decision model (currently TypeSafe Jev) decide where to look. It picks up to five engines (web search, Hacker News, Reddit, GitHub, X, arXiv, Wikipedia, IMDb, WeChat, YouTube), rewrites the request into search keywords, infers a publication window from phrases such as "this week", searches the engines in parallel, and returns only the results judged relevant, merged and ranked, so agents read fewer off-topic results. The request takes only `query`; engines, keywords, and the window are always chosen by the model, and the response reports them in `intent`. Use POST /search instead when you already know the engine and keywords and want its raw ranking. Costs 5 credits per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.ask({
    body: { query: "What are developers saying about Bun 1.3 this month?" },
  });
  // TODO: Handle 'response' of type AskResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.AskError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search
  .ask({ body: { query: "What are developers saying about Bun 1.3 this month?" } })
  .asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AskResponse
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
| <code>body</code> | <code>[AskRequest](src/models/ask-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.ask(request)`

- **OnSuccess**: <code>[AskResponse](src/models/ask-response.ts)</code>
- **OnError**: throws <code>[Search.AskError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.ask(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AskResponse, Search.AskError&gt;</code>, with `result.value` of type <code>[AskResponse](src/models/ask-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>news(request: Search.NewsRequestParams, options?: RequestOptions): ApiPromise&lt;NewsResponse1, Search.NewsError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search recent news when the question is about events, announcements, or coverage rather than reference material. Returns articles from verified publishers with title, URL, snippet, `published_date` (ISO 8601, when known), and optional full page content, filterable by site, language, and time range. For questions that are not time-sensitive, prefer POST /search. Costs 1 credit per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.news({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type NewsResponse1
} catch (err) {
  // TODO: Handle 'err' of type Search.NewsError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.news({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type NewsResponse1
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
| <code>body</code> | <code>[NewsRequest](src/models/unions/news-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.news(request)`

- **OnSuccess**: <code>[NewsResponse1](src/models/unions/news-response1.ts)</code>
- **OnError**: throws <code>[Search.NewsError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.news(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;NewsResponse1, Search.NewsError&gt;</code>, with `result.value` of type <code>[NewsResponse1](src/models/unions/news-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>search(request: Search.SearchRequestParams, options?: RequestOptions): ApiPromise&lt;SearchResponse1, Search.SearchError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the live public web when the answer depends on current information, sources, or research a model's training data cannot cover. Returns ranked results with id, title, URL, snippet, and `published_date` (ISO 8601, when the engine exposes one) across 13+ engines, with optional images. Set `crawl_results` to pull the top N result pages in the same call — each crawled page is billed as an additional crawl — or pass a result URL to POST /crawl separately. Costs 1 credit per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.search({ body: { query: "some example string" } });
  // TODO: Handle 'response' of type SearchResponse1
} catch (err) {
  // TODO: Handle 'err' of type Search.SearchError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.search({ body: { query: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchResponse1
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
| <code>body</code> | <code>[SearchRequest](src/models/unions/search-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.search(request)`

- **OnSuccess**: <code>[SearchResponse1](src/models/unions/search-response1.ts)</code>
- **OnError**: throws <code>[Search.SearchError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.search(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchResponse1, Search.SearchError&gt;</code>, with `result.value` of type <code>[SearchResponse1](src/models/unions/search-response1.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>trending(request: Search.TrendingRequestParams, options?: RequestOptions): ApiPromise&lt;TrendingResponse, Search.TrendingError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List what is currently popular on a supported platform, such as GitHub repositories or Hacker News stories, when the user asks what is trending or new right now. This reads a platform's own live ranking rather than performing a query — for topic searches use POST /search. Costs 1 credit per request.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.search.trending({ body: { searchService: "some example string" } });
  // TODO: Handle 'response' of type TrendingResponse
} catch (err) {
  // TODO: Handle 'err' of type Search.TrendingError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.search.trending({ body: { searchService: "some example string" } }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TrendingResponse
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
| <code>body</code> | <code>[TrendingRequest](src/models/trending-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.search.trending(request)`

- **OnSuccess**: <code>[TrendingResponse](src/models/trending-response.ts)</code>
- **OnError**: throws <code>[Search.TrendingError](src/resources/search.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.search.trending(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TrendingResponse, Search.TrendingError&gt;</code>, with `result.value` of type <code>[TrendingResponse](src/models/trending-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

## System

> Source: [System](src/resources/system.ts)

<details>
<summary><code>health(options?: RequestOptions): ApiPromise&lt;HealthResponse, System.HealthError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks — it will not tell you whether an API key is valid; call GET /usage for that. Free to call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.system.health();
  // TODO: Handle 'response' of type HealthResponse
} catch (err) {
  // TODO: Handle 'err' of type System.HealthError, discriminated with 'err.payload.kind'
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.system.health().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type HealthResponse
} else {
  // TODO: Handle 'result', discriminated with 'result.payload.kind'
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.system.health()`

- **OnSuccess**: <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: throws <code>[System.HealthError](src/resources/system.ts)</code>, with `err.payload` discriminated on `kind`

**As ApiResult**: `await client.system.health().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;HealthResponse, System.HealthError&gt;</code>, with `result.value` of type <code>[HealthResponse](src/models/health-response.ts)</code>
- **OnError**: `result.payload` discriminated on `kind`, with `result.message`

**Thrown**: <code>[S1Error](src/core/errors.ts)</code> on any operational failure — a caller abort and a programmer error stay outside the family and reach you raw

</dd>
</dl>

</dd>
</dl>

</details>

