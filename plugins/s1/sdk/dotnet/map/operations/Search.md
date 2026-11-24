<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/S1/Api/Search.cs` · 4 operations

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
| `AskOperationRequest` | `src/S1/Requests/Search/AskOperationRequest.cs` |
| `AskRequest` | `src/S1/Models/AskRequest.cs` |
| `AskResponse` | `src/S1/Models/AskResponse.cs` |
| `AskError` | `src/S1/Errors/AskError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### News

- **Auth**: `options.BearerAuth`
- **Signature**: `News(NewsOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `NewsResponse1`
- **Error**: `ApiException<NewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `NewsOperationRequest` | `src/S1/Requests/Search/NewsOperationRequest.cs` |
| `NewsRequest` | `src/S1/Models/AnyOf/NewsRequest.cs` |
| `NewsResponse1` | `src/S1/Models/AnyOf/NewsResponse1.cs` |
| `NewsError` | `src/S1/Errors/NewsError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### SearchInvoke

- **Auth**: `options.BearerAuth`
- **Signature**: `SearchInvoke(SearchOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SearchResponse1`
- **Error**: `ApiException<SearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchOperationRequest` | `src/S1/Requests/Search/SearchOperationRequest.cs` |
| `SearchRequest` | `src/S1/Models/AnyOf/SearchRequest.cs` |
| `SearchResponse1` | `src/S1/Models/AnyOf/SearchResponse1.cs` |
| `SearchError` | `src/S1/Errors/SearchError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

### Trending

- **Auth**: `options.BearerAuth`
- **Signature**: `Trending(TrendingOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `TrendingResponse`
- **Error**: `ApiException<TrendingError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiErrorModel([NotNullWhen(true)] out ApiErrorModel? value)` [400, 401, 402, 422, 429, 500, 502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TrendingOperationRequest` | `src/S1/Requests/Search/TrendingOperationRequest.cs` |
| `TrendingRequest` | `src/S1/Models/TrendingRequest.cs` |
| `TrendingResponse` | `src/S1/Models/TrendingResponse.cs` |
| `TrendingError` | `src/S1/Errors/TrendingError.cs` |
| `ApiErrorModel` | `src/S1/Models/ApiErrorModel.cs` |

