<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scraping — operations

Accessor: `client.Scraping` · Source: `Api/Scraping.cs` · 9 operations

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

### GetScrapeStatus

- **Signature**: `GetScrapeStatus(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ScrapeResponse`
- **Error**: `SdkException<GetScrapeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrape402Error21(out Scrape402Error21)` [402] · `TryGetScrape429Error21(out Scrape429Error21)` [429] · `TryGetScrape500Error21(out Scrape500Error21)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ScrapeResponse` | `Models/ScrapeResponse.cs` |
| `GetScrapeStatusError` | `Errors/GetScrapeStatusError.cs` |
| `Scrape402Error21` | `Models/Scrape402Error21.cs` |
| `Scrape429Error21` | `Models/Scrape429Error21.cs` |
| `Scrape500Error21` | `Models/Scrape500Error21.cs` |

### InteractWithScrapeBrowserSession

- **Signature**: `InteractWithScrapeBrowserSession(Guid jobId, ScrapeInteractRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ScrapeInteractResponse`
- **Error**: `SdkException<InteractWithScrapeBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrapeInteract400Error1(out ScrapeInteract400Error1)` [400] · `TryGetScrapeInteract402Error1(out ScrapeInteract402Error1)` [402] · `TryGetScrapeInteract403Error1(out ScrapeInteract403Error1)` [403] · `TryGetScrapeInteract404Error1(out ScrapeInteract404Error1)` [404] · `TryGetScrapeInteract409Error1(out ScrapeInteract409Error1)` [409] · `TryGetScrapeInteract410Error1(out ScrapeInteract410Error1)` [410] · `TryGetScrapeInteract429Error1(out ScrapeInteract429Error1)` [429] · `TryGetScrapeInteract502Error1(out ScrapeInteract502Error1)` [502] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ScrapeInteractRequest` | `Models/ScrapeInteractRequest.cs` |
| `ScrapeInteractResponse` | `Models/ScrapeInteractResponse.cs` |
| `InteractWithScrapeBrowserSessionError` | `Errors/InteractWithScrapeBrowserSessionError.cs` |
| `ScrapeInteract400Error1` | `Models/ScrapeInteract400Error1.cs` |
| `ScrapeInteract402Error1` | `Models/ScrapeInteract402Error1.cs` |
| `ScrapeInteract403Error1` | `Models/ScrapeInteract403Error1.cs` |
| `ScrapeInteract404Error1` | `Models/ScrapeInteract404Error1.cs` |
| `ScrapeInteract409Error1` | `Models/ScrapeInteract409Error1.cs` |
| `ScrapeInteract410Error1` | `Models/ScrapeInteract410Error1.cs` |
| `ScrapeInteract429Error1` | `Models/ScrapeInteract429Error1.cs` |
| `ScrapeInteract502Error1` | `Models/ScrapeInteract502Error1.cs` |

### ParseFile

- **Signature**: `ParseFile(BinaryContent file, ParseOptions? options, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `options` — nullable, no default → **must pass explicitly**
- **Returns**: `ScrapeResponse`
- **Error**: `SdkException<ParseFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetParse400Error1(out Parse400Error1)` [400] · `TryGetParse402Error1(out Parse402Error1)` [402] · `TryGetParse429Error1(out Parse429Error1)` [429] · `TryGetParse500Error1(out Parse500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ParseOptions` | `Models/ParseOptions.cs` |
| `ScrapeResponse` | `Models/ScrapeResponse.cs` |
| `ParseFileError` | `Errors/ParseFileError.cs` |
| `Parse400Error1` | `Models/Parse400Error1.cs` |
| `Parse402Error1` | `Models/Parse402Error1.cs` |
| `Parse429Error1` | `Models/Parse429Error1.cs` |
| `Parse500Error1` | `Models/Parse500Error1.cs` |

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

### StopInteractiveScrapeBrowserSession

- **Signature**: `StopInteractiveScrapeBrowserSession(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<StopInteractiveScrapeBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrapeInteract403Error1(out ScrapeInteract403Error1)` [403] · `TryGetScrapeInteract404Error1(out ScrapeInteract404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SuccessResponse` | `Models/SuccessResponse.cs` |
| `StopInteractiveScrapeBrowserSessionError` | `Errors/StopInteractiveScrapeBrowserSessionError.cs` |
| `ScrapeInteract403Error1` | `Models/ScrapeInteract403Error1.cs` |
| `ScrapeInteract404Error1` | `Models/ScrapeInteract404Error1.cs` |

