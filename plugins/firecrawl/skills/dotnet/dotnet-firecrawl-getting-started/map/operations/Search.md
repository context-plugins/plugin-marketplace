<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `Api/Search.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchAndScrape

- **Signature**: `SearchAndScrape(SearchRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `SearchResponse`
- **Error**: `SdkException<SearchAndScrapeError>` — **Case A (typed)**
- **Error accessors**: `TryGetSearch408Error1(out Search408Error1)` [408] · `TryGetSearch500Error1(out Search500Error1)` [500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchRequest` | `Models/SearchRequest.cs` |
| `SearchResponse` | `Models/SearchResponse.cs` |
| `SearchAndScrapeError` | `Errors/SearchAndScrapeError.cs` |
| `Search408Error1` | `Models/Search408Error1.cs` |
| `Search500Error1` | `Models/Search500Error1.cs` |

### SubmitSearchFeedback

- **Signature**: `SubmitSearchFeedback(Guid jobId, SearchFeedbackRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `FeedbackResponse`
- **Error**: `SdkException<SubmitSearchFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetFeedbackErrorResponse(out FeedbackErrorResponse)` [400, 403, 404, 409, 500] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `SearchFeedbackRequest` | `Models/SearchFeedbackRequest.cs` |
| `FeedbackResponse` | `Models/FeedbackResponse.cs` |
| `SubmitSearchFeedbackError` | `Errors/SubmitSearchFeedbackError.cs` |
| `FeedbackErrorResponse` | `Models/FeedbackErrorResponse.cs` |

