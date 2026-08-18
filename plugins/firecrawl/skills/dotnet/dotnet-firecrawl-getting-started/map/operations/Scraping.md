# Scraping — operations

Accessor: `client.Scraping` · Source: `Api/Scraping.cs` · 9 operations

**Parameter names are literal.** Signatures are generated code verbatim — in named arguments use the exact parameter names shown (the cancellation-token parameter is named `ct`).

### CancelBatchScrape
- **HTTP**: `DELETE /batch/scrape/{id}` (Default (api))
- **Signature**: `CancelBatchScrape(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchScrapeResponse`
- **Error**: `SdkException<CancelBatchScrapeError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrape404Error1(out BatchScrape404Error1)` [404] · `TryGetBatchScrape500Error1(out BatchScrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBatchScrapeErrors
- **HTTP**: `GET /batch/scrape/{id}/errors` (Default (api))
- **Signature**: `GetBatchScrapeErrors(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `CrawlErrorsResponseObj`
- **Error**: `SdkException<GetBatchScrapeErrorsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrapeErrors402Error1(out BatchScrapeErrors402Error1)` [402] · `TryGetBatchScrapeErrors429Error1(out BatchScrapeErrors429Error1)` [429] · `TryGetBatchScrapeErrors500Error1(out BatchScrapeErrors500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetBatchScrapeStatus
- **HTTP**: `GET /batch/scrape/{id}` (Default (api))
- **Signature**: `GetBatchScrapeStatus(Guid id, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchScrapeStatusResponseObj`
- **Error**: `SdkException<GetBatchScrapeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrape402Error1(out BatchScrape402Error1)` [402] · `TryGetBatchScrape429Error1(out BatchScrape429Error1)` [429] · `TryGetBatchScrape500Error1(out BatchScrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### GetScrapeStatus
- **HTTP**: `GET /scrape/{jobId}` (Default (api))
- **Signature**: `GetScrapeStatus(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScrapeResponse`
- **Error**: `SdkException<GetScrapeStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrape402Error21(out Scrape402Error21)` [402] · `TryGetScrape429Error21(out Scrape429Error21)` [429] · `TryGetScrape500Error21(out Scrape500Error21)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### InteractWithScrapeBrowserSession
- **HTTP**: `POST /scrape/{jobId}/interact` (Default (api))
- **Signature**: `InteractWithScrapeBrowserSession(Guid jobId, ScrapeInteractRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScrapeInteractResponse`
- **Error**: `SdkException<InteractWithScrapeBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrapeInteract400Error1(out ScrapeInteract400Error1)` [400] · `TryGetScrapeInteract402Error1(out ScrapeInteract402Error1)` [402] · `TryGetScrapeInteract403Error1(out ScrapeInteract403Error1)` [403] · `TryGetScrapeInteract404Error1(out ScrapeInteract404Error1)` [404] · `TryGetScrapeInteract409Error1(out ScrapeInteract409Error1)` [409] · `TryGetScrapeInteract410Error1(out ScrapeInteract410Error1)` [410] · `TryGetScrapeInteract429Error1(out ScrapeInteract429Error1)` [429] · `TryGetScrapeInteract502Error1(out ScrapeInteract502Error1)` [502] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ParseFile
- **HTTP**: `POST /parse` (Default (api))
- **Signature**: `ParseFile(BinaryContent file, ParseOptions? options, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `options` — nullable, no default → **must pass explicitly**
  - defaults: `requestOptions` = null
- **Returns**: `ScrapeResponse`
- **Error**: `SdkException<ParseFileError>` — **Case A (typed)**
- **Error accessors**: `TryGetParse400Error1(out Parse400Error1)` [400] · `TryGetParse402Error1(out Parse402Error1)` [402] · `TryGetParse429Error1(out Parse429Error1)` [429] · `TryGetParse500Error1(out Parse500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScrapeAndExtractFromUrl
- **HTTP**: `POST /scrape` (Default (api))
- **Signature**: `ScrapeAndExtractFromUrl(ScrapeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `ScrapeResponse`
- **Error**: `SdkException<ScrapeAndExtractFromUrlError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrape402Error1(out Scrape402Error1)` [402] · `TryGetScrape429Error1(out Scrape429Error1)` [429] · `TryGetScrape500Error1(out Scrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### ScrapeAndExtractFromUrls
- **HTTP**: `POST /batch/scrape` (Default (api))
- **Signature**: `ScrapeAndExtractFromUrls(BatchScrapeRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `BatchScrapeResponseObj`
- **Error**: `SdkException<ScrapeAndExtractFromUrlsError>` — **Case A (typed)**
- **Error accessors**: `TryGetBatchScrape402Error1(out BatchScrape402Error1)` [402] · `TryGetBatchScrape429Error1(out BatchScrape429Error1)` [429] · `TryGetBatchScrape500Error1(out BatchScrape500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none

### StopInteractiveScrapeBrowserSession
- **HTTP**: `DELETE /scrape/{jobId}/interact` (Default (api))
- **Signature**: `StopInteractiveScrapeBrowserSession(Guid jobId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - defaults: `requestOptions` = null
- **Returns**: `SuccessResponse`
- **Error**: `SdkException<StopInteractiveScrapeBrowserSessionError>` — **Case A (typed)**
- **Error accessors**: `TryGetScrapeInteract403Error1(out ScrapeInteract403Error1)` [403] · `TryGetScrapeInteract404Error1(out ScrapeInteract404Error1)` [404] · `TryGetRawError(out RawError)` [fallback]
- **No-throw variant**: absent
- **Pagination**: none
