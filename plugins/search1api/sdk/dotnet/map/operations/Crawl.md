<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawl — operations

Accessor: `client.Crawl` · Source: `src/Search1Api/Api/Crawl.cs` · 5 operations

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
| `CrawlOperationRequest` | `src/Search1Api/Requests/Crawl/CrawlOperationRequest.cs` |
| `CrawlRequest1` | `src/Search1Api/Models/AnyOf/CrawlRequest1.cs` |
| `CrawlResponse1` | `src/Search1Api/Models/AnyOf/CrawlResponse1.cs` |
| `CrawlError` | `src/Search1Api/Errors/CrawlError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### Deepcrawl

- **Auth**: `options.BearerAuth`
- **Signature**: `Deepcrawl(DeepcrawlOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `DeepcrawlAcceptedResponse`
- **Error**: `ApiException<DeepcrawlError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeepcrawlOperationRequest` | `src/Search1Api/Requests/Crawl/DeepcrawlOperationRequest.cs` |
| `DeepcrawlRequest` | `src/Search1Api/Models/DeepcrawlRequest.cs` |
| `DeepcrawlAcceptedResponse` | `src/Search1Api/Models/DeepcrawlAcceptedResponse.cs` |
| `DeepcrawlError` | `src/Search1Api/Errors/DeepcrawlError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### DeepcrawlStatus

- **Auth**: `options.BearerAuth`
- **Signature**: `DeepcrawlStatus(DeepcrawlStatusRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `TaskId`
- **Returns**: `DeepcrawlStatusResponse`
- **Error**: `ApiException<DeepcrawlStatusError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 404, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeepcrawlStatusRequest` | `src/Search1Api/Requests/Crawl/DeepcrawlStatusRequest.cs` |
| `DeepcrawlStatusResponse` | `src/Search1Api/Models/DeepcrawlStatusResponse.cs` |
| `DeepcrawlStatusError` | `src/Search1Api/Errors/DeepcrawlStatusError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### Extract

- **Auth**: `options.BearerAuth`
- **Signature**: `Extract(ExtractOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ExtractResponse`
- **Error**: `ApiException<ExtractError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExtractOperationRequest` | `src/Search1Api/Requests/Crawl/ExtractOperationRequest.cs` |
| `ExtractRequest` | `src/Search1Api/Models/ExtractRequest.cs` |
| `ExtractResponse` | `src/Search1Api/Models/ExtractResponse.cs` |
| `ExtractError` | `src/Search1Api/Errors/ExtractError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### Sitemap

- **Auth**: `options.BearerAuth`
- **Signature**: `Sitemap(SitemapOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SitemapResponse`
- **Error**: `ApiException<SitemapError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SitemapOperationRequest` | `src/Search1Api/Requests/Crawl/SitemapOperationRequest.cs` |
| `SitemapRequest` | `src/Search1Api/Models/SitemapRequest.cs` |
| `SitemapResponse` | `src/Search1Api/Models/SitemapResponse.cs` |
| `SitemapError` | `src/Search1Api/Errors/SitemapError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

