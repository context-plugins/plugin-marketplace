<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawl — operations

Accessor: `client.Crawl` · Source: `src/S1/Api/Crawl.cs` · 5 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CrawlInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `CrawlInvoke(CrawlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `CrawlResponse1`
- **Error**: `ApiException<CrawlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 404, 410, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CrawlOperationRequest` | `src/S1/Requests/Crawl/CrawlOperationRequest.cs` |
| `CrawlRequest1` | `src/S1/Models/AnyOf/CrawlRequest1.cs` |
| `CrawlResponse1` | `src/S1/Models/AnyOf/CrawlResponse1.cs` |
| `CrawlError` | `src/S1/Errors/CrawlError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### Deepcrawl

- **Auth**: `options.BearerAuth`
- **Signature**: `Deepcrawl(DeepcrawlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DeepcrawlAcceptedResponse`
- **Error**: `ApiException<DeepcrawlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeepcrawlOperationRequest` | `src/S1/Requests/Crawl/DeepcrawlOperationRequest.cs` |
| `DeepcrawlRequest` | `src/S1/Models/DeepcrawlRequest.cs` |
| `DeepcrawlAcceptedResponse` | `src/S1/Models/DeepcrawlAcceptedResponse.cs` |
| `DeepcrawlError` | `src/S1/Errors/DeepcrawlError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### DeepcrawlStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `DeepcrawlStatus(DeepcrawlStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Returns**: `DeepcrawlStatusResponse`
- **Error**: `ApiException<DeepcrawlStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 404, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeepcrawlStatusRequest` | `src/S1/Requests/Crawl/DeepcrawlStatusRequest.cs` |
| `DeepcrawlStatusResponse` | `src/S1/Models/DeepcrawlStatusResponse.cs` |
| `DeepcrawlStatusError` | `src/S1/Errors/DeepcrawlStatusError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### Extract

- **Auth**: `options.BearerAuth`
- **Signature**: `Extract(ExtractOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExtractResponse`
- **Error**: `ApiException<ExtractError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExtractOperationRequest` | `src/S1/Requests/Crawl/ExtractOperationRequest.cs` |
| `ExtractRequest` | `src/S1/Models/ExtractRequest.cs` |
| `ExtractResponse` | `src/S1/Models/ExtractResponse.cs` |
| `ExtractError` | `src/S1/Errors/ExtractError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### Sitemap

- **Auth**: `options.BearerAuth`
- **Signature**: `Sitemap(SitemapOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SitemapResponse`
- **Error**: `ApiException<SitemapError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SitemapOperationRequest` | `src/S1/Requests/Crawl/SitemapOperationRequest.cs` |
| `SitemapRequest` | `src/S1/Models/SitemapRequest.cs` |
| `SitemapResponse` | `src/S1/Models/SitemapResponse.cs` |
| `SitemapError` | `src/S1/Errors/SitemapError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

