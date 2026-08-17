<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scraping — operations

Accessor: `client.Scraping` · Source: `Api/Scraping.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CancelBatchScrape

- **Signature**: `CancelBatchScrape(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BatchScrapeResponse`
- **Error**: `SdkException<CancelBatchScrapeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrape404Error1(out BatchScrape404Error1)` [404] · `TryGetBatchScrape500Error1(out BatchScrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BatchScrapeResponse` | `Models/BatchScrapeResponse.cs` |
| `CancelBatchScrapeError` | `Errors/CancelBatchScrapeError.cs` |
| `BatchScrape404Error1` | `Models/BatchScrape404Error1.cs` |
| `BatchScrape500Error1` | `Models/BatchScrape500Error1.cs` |

### GetBatchScrapeErrors

- **Signature**: `GetBatchScrapeErrors(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `CrawlErrorsResponseObj`
- **Error**: `SdkException<GetBatchScrapeErrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrapeErrors402Error1(out BatchScrapeErrors402Error1)` [402] · `TryGetBatchScrapeErrors429Error1(out BatchScrapeErrors429Error1)` [429] · `TryGetBatchScrapeErrors500Error1(out BatchScrapeErrors500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlErrorsResponseObj` | `Models/CrawlErrorsResponseObj.cs` |
| `GetBatchScrapeErrorsError` | `Errors/GetBatchScrapeErrorsError.cs` |
| `BatchScrapeErrors402Error1` | `Models/BatchScrapeErrors402Error1.cs` |
| `BatchScrapeErrors429Error1` | `Models/BatchScrapeErrors429Error1.cs` |
| `BatchScrapeErrors500Error1` | `Models/BatchScrapeErrors500Error1.cs` |

### GetBatchScrapeStatus

- **Signature**: `GetBatchScrapeStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BatchScrapeStatusResponseObj`
- **Error**: `SdkException<GetBatchScrapeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrape402Error1(out BatchScrape402Error1)` [402] · `TryGetBatchScrape429Error1(out BatchScrape429Error1)` [429] · `TryGetBatchScrape500Error1(out BatchScrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BatchScrapeStatusResponseObj` | `Models/BatchScrapeStatusResponseObj.cs` |
| `GetBatchScrapeStatusError` | `Errors/GetBatchScrapeStatusError.cs` |
| `BatchScrape402Error1` | `Models/BatchScrape402Error1.cs` |
| `BatchScrape429Error1` | `Models/BatchScrape429Error1.cs` |
| `BatchScrape500Error1` | `Models/BatchScrape500Error1.cs` |

### ScrapeAndExtractFromUrl

- **Signature**: `ScrapeAndExtractFromUrl(ScrapeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ScrapeResponse`
- **Error**: `SdkException<ScrapeAndExtractFromUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrape402Error1(out Scrape402Error1)` [402] · `TryGetScrape429Error1(out Scrape429Error1)` [429] · `TryGetScrape500Error1(out Scrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ScrapeRequest` | `Models/ScrapeRequest.cs` |
| `ScrapeResponse` | `Models/ScrapeResponse.cs` |
| `ScrapeAndExtractFromUrlError` | `Errors/ScrapeAndExtractFromUrlError.cs` |
| `Scrape402Error1` | `Models/Scrape402Error1.cs` |
| `Scrape429Error1` | `Models/Scrape429Error1.cs` |
| `Scrape500Error1` | `Models/Scrape500Error1.cs` |

### ScrapeAndExtractFromUrls

- **Signature**: `ScrapeAndExtractFromUrls(BatchScrapeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `BatchScrapeResponseObj`
- **Error**: `SdkException<ScrapeAndExtractFromUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrape402Error1(out BatchScrape402Error1)` [402] · `TryGetBatchScrape429Error1(out BatchScrape429Error1)` [429] · `TryGetBatchScrape500Error1(out BatchScrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `BatchScrapeRequest` | `Models/BatchScrapeRequest.cs` |
| `BatchScrapeResponseObj` | `Models/BatchScrapeResponseObj.cs` |
| `ScrapeAndExtractFromUrlsError` | `Errors/ScrapeAndExtractFromUrlsError.cs` |
| `BatchScrape402Error1` | `Models/BatchScrape402Error1.cs` |
| `BatchScrape429Error1` | `Models/BatchScrape429Error1.cs` |
| `BatchScrape500Error1` | `Models/BatchScrape500Error1.cs` |

