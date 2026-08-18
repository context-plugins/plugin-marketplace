# Crawling — operations

Accessor: `client.Crawling` · Source: `Api/Crawling.cs` · 6 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelCrawl
- **HTTP**: `DELETE /crawl/{id}` (Default (api))
- **Signature**: `CancelCrawl(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlResponse1`
- **Error**: `SdkException<CancelCrawlError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawl404Error1(out Crawl404Error1)` [404] · `TryGetCrawl500Error1(out Crawl500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CrawlParamsPreview
- **HTTP**: `POST /crawl/params-preview` (Default (api))
- **Signature**: `CrawlParamsPreview(CrawlParamsPreviewRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlParamsPreviewResponse`
- **Error**: `SdkException<CrawlParamsPreviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawlParamsPreview400Error1(out CrawlParamsPreview400Error1)` [400] · `TryGetCrawlParamsPreview401Error1(out CrawlParamsPreview401Error1)` [401] · `TryGetCrawlParamsPreview500Error1(out CrawlParamsPreview500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### CrawlUrls
- **HTTP**: `POST /crawl` (Default (api))
- **Signature**: `CrawlUrls(CrawlRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlResponse`
- **Error**: `SdkException<CrawlUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawl402Error1(out Crawl402Error1)` [402] · `TryGetCrawl429Error1(out Crawl429Error1)` [429] · `TryGetCrawl500Error1(out Crawl500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetActiveCrawls
- **HTTP**: `GET /crawl/active` (Default (api))
- **Signature**: `GetActiveCrawls(RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlActiveResponse`
- **Error**: `SdkException<GetActiveCrawlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawlActive402Error1(out CrawlActive402Error1)` [402] · `TryGetCrawlActive429Error1(out CrawlActive429Error1)` [429] · `TryGetCrawlActive500Error1(out CrawlActive500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCrawlErrors
- **HTTP**: `GET /crawl/{id}/errors` (Default (api))
- **Signature**: `GetCrawlErrors(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlErrorsResponseObj`
- **Error**: `SdkException<GetCrawlErrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawlErrors402Error1(out CrawlErrors402Error1)` [402] · `TryGetCrawlErrors429Error1(out CrawlErrors429Error1)` [429] · `TryGetCrawlErrors500Error1(out CrawlErrors500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetCrawlStatus
- **HTTP**: `GET /crawl/{id}` (Default (api))
- **Signature**: `GetCrawlStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlStatusResponseObj`
- **Error**: `SdkException<GetCrawlStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawl402Error1(out Crawl402Error1)` [402] · `TryGetCrawl429Error1(out Crawl429Error1)` [429] · `TryGetCrawl500Error1(out Crawl500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
