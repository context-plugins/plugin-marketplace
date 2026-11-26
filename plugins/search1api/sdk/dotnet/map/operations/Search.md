<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/Search1Api/Api/Search.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### Ask

- **Auth**: `options.BearerAuth`
- **Signature**: `Ask(AskOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AskResponse`
- **Error**: `ApiException<AskError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AskOperationRequest` | `src/Search1Api/Requests/Search/AskOperationRequest.cs` |
| `AskRequest` | `src/Search1Api/Models/AskRequest.cs` |
| `AskResponse` | `src/Search1Api/Models/AskResponse.cs` |
| `AskError` | `src/Search1Api/Errors/AskError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### News

- **Auth**: `options.BearerAuth`
- **Signature**: `News(NewsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `NewsResponse1`
- **Error**: `ApiException<NewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NewsOperationRequest` | `src/Search1Api/Requests/Search/NewsOperationRequest.cs` |
| `NewsRequest` | `src/Search1Api/Models/AnyOf/NewsRequest.cs` |
| `NewsResponse1` | `src/Search1Api/Models/AnyOf/NewsResponse1.cs` |
| `NewsError` | `src/Search1Api/Errors/NewsError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### SearchInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchInvoke(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResponse1`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchOperationRequest` | `src/Search1Api/Requests/Search/SearchOperationRequest.cs` |
| `SearchRequest` | `src/Search1Api/Models/AnyOf/SearchRequest.cs` |
| `SearchResponse1` | `src/Search1Api/Models/AnyOf/SearchResponse1.cs` |
| `SearchError` | `src/Search1Api/Errors/SearchError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

### Trending

- **Auth**: `options.BearerAuth`
- **Signature**: `Trending(TrendingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TrendingResponse`
- **Error**: `ApiException<TrendingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrendingOperationRequest` | `src/Search1Api/Requests/Search/TrendingOperationRequest.cs` |
| `TrendingRequest` | `src/Search1Api/Models/TrendingRequest.cs` |
| `TrendingResponse` | `src/Search1Api/Models/TrendingResponse.cs` |
| `TrendingError` | `src/Search1Api/Errors/TrendingError.cs` |
| `ApiErrorModel` | `src/Search1Api/Models/ApiErrorModel.cs` |

