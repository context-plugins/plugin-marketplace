<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawling — operations

Accessor: `client.Crawling` · Source: `Api/Crawling.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelCrawl

- **Signature**: `CancelCrawl(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlResponse1`
- **Error**: `SdkException<CancelCrawlError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawl404Error1(out Crawl404Error1)` [404] · `TryGetCrawl500Error1(out Crawl500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlResponse1` | `Models/CrawlResponse1.cs` |
| `CancelCrawlError` | `Errors/CancelCrawlError.cs` |
| `Crawl404Error1` | `Models/Crawl404Error1.cs` |
| `Crawl500Error1` | `Models/Crawl500Error1.cs` |

### CrawlParamsPreview

- **Signature**: `CrawlParamsPreview(CrawlParamsPreviewRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlParamsPreviewResponse`
- **Error**: `SdkException<CrawlParamsPreviewError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawlParamsPreview400Error1(out CrawlParamsPreview400Error1)` [400] · `TryGetCrawlParamsPreview401Error1(out CrawlParamsPreview401Error1)` [401] · `TryGetCrawlParamsPreview500Error1(out CrawlParamsPreview500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlParamsPreviewRequest` | `Models/CrawlParamsPreviewRequest.cs` |
| `CrawlParamsPreviewResponse` | `Models/CrawlParamsPreviewResponse.cs` |
| `CrawlParamsPreviewError` | `Errors/CrawlParamsPreviewError.cs` |
| `CrawlParamsPreview400Error1` | `Models/CrawlParamsPreview400Error1.cs` |
| `CrawlParamsPreview401Error1` | `Models/CrawlParamsPreview401Error1.cs` |
| `CrawlParamsPreview500Error1` | `Models/CrawlParamsPreview500Error1.cs` |

### CrawlUrls

- **Signature**: `CrawlUrls(CrawlRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlResponse`
- **Error**: `SdkException<CrawlUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawl402Error1(out Crawl402Error1)` [402] · `TryGetCrawl429Error1(out Crawl429Error1)` [429] · `TryGetCrawl500Error1(out Crawl500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlRequest` | `Models/CrawlRequest.cs` |
| `CrawlResponse` | `Models/CrawlResponse.cs` |
| `CrawlUrlsError` | `Errors/CrawlUrlsError.cs` |
| `Crawl402Error1` | `Models/Crawl402Error1.cs` |
| `Crawl429Error1` | `Models/Crawl429Error1.cs` |
| `Crawl500Error1` | `Models/Crawl500Error1.cs` |

### GetActiveCrawls

- **Signature**: `GetActiveCrawls(RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlActiveResponse`
- **Error**: `SdkException<GetActiveCrawlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawlActive402Error1(out CrawlActive402Error1)` [402] · `TryGetCrawlActive429Error1(out CrawlActive429Error1)` [429] · `TryGetCrawlActive500Error1(out CrawlActive500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlActiveResponse` | `Models/CrawlActiveResponse.cs` |
| `GetActiveCrawlsError` | `Errors/GetActiveCrawlsError.cs` |
| `CrawlActive402Error1` | `Models/CrawlActive402Error1.cs` |
| `CrawlActive429Error1` | `Models/CrawlActive429Error1.cs` |
| `CrawlActive500Error1` | `Models/CrawlActive500Error1.cs` |

### GetCrawlErrors

- **Signature**: `GetCrawlErrors(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlErrorsResponseObj`
- **Error**: `SdkException<GetCrawlErrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawlErrors402Error1(out CrawlErrors402Error1)` [402] · `TryGetCrawlErrors429Error1(out CrawlErrors429Error1)` [429] · `TryGetCrawlErrors500Error1(out CrawlErrors500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlErrorsResponseObj` | `Models/CrawlErrorsResponseObj.cs` |
| `GetCrawlErrorsError` | `Errors/GetCrawlErrorsError.cs` |
| `CrawlErrors402Error1` | `Models/CrawlErrors402Error1.cs` |
| `CrawlErrors429Error1` | `Models/CrawlErrors429Error1.cs` |
| `CrawlErrors500Error1` | `Models/CrawlErrors500Error1.cs` |

### GetCrawlStatus

- **Signature**: `GetCrawlStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlStatusResponseObj`
- **Error**: `SdkException<GetCrawlStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetCrawl402Error1(out Crawl402Error1)` [402] · `TryGetCrawl429Error1(out Crawl429Error1)` [429] · `TryGetCrawl500Error1(out Crawl500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlStatusResponseObj` | `Models/CrawlStatusResponseObj.cs` |
| `GetCrawlStatusError` | `Errors/GetCrawlStatusError.cs` |
| `Crawl402Error1` | `Models/Crawl402Error1.cs` |
| `Crawl429Error1` | `Models/Crawl429Error1.cs` |
| `Crawl500Error1` | `Models/Crawl500Error1.cs` |

