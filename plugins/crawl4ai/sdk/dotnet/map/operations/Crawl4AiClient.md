<!-- Generated file — do not edit; regenerated with the SDK. -->

# Crawl4AiClient — operations

Accessor: `client` · Source: `src/Crawl4Ai/Crawl4AiClient.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetCrawlJob

- **Signature**: `GetCrawlJob(GetCrawlJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `JobId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetCrawlJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCrawlJobRequest` | `src/Crawl4Ai/Requests/GetCrawlJobRequest.cs` |
| `GetCrawlJobError` | `src/Crawl4Ai/Errors/GetCrawlJobError.cs` |

### SubmitCrawlJob

- **Signature**: `SubmitCrawlJob(SubmitCrawlJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<SubmitCrawlJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitCrawlJobRequest` | `src/Crawl4Ai/Requests/SubmitCrawlJobRequest.cs` |
| `CrawlJobRequest` | `src/Crawl4Ai/Models/CrawlJobRequest.cs` |
| `SubmitCrawlJobError` | `src/Crawl4Ai/Errors/SubmitCrawlJobError.cs` |

