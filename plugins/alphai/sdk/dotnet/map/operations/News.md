<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.News` · Source: `src/AlphAi/Api/News.cs` · 9 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetApiNews

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNews(GetApiNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `symbol` ← `Symbol`, `category` ← `Category`, `exclude_categories` ← `ExcludeCategories`, `min_relevance` ← `MinRelevance`, `page_size` ← `PageSize`, `collapse` ← `Collapse`, `collapse_stories` ← `CollapseStories`, `sort` ← `Sort`, `from_date` ← `FromDate`, `to_date` ← `ToDate`, `source_type` ← `SourceType`, `item` ← `Item`
- **Returns**: `NewsPagination`
- **Error**: `ApiException<GetApiNewsError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsRequest` | `src/AlphAi/Requests/News/GetApiNewsRequest.cs` |
| `NewsCategory` | `src/AlphAi/Models/Enums/NewsCategory.cs` |
| `Collapse` | `src/AlphAi/Models/Enums/Collapse.cs` |
| `Sort1` | `src/AlphAi/Models/Enums/Sort1.cs` |
| `NewsSourceType` | `src/AlphAi/Models/Enums/NewsSourceType.cs` |
| `NewsPagination` | `src/AlphAi/Models/NewsPagination.cs` |
| `GetApiNewsError` | `src/AlphAi/Errors/GetApiNewsError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsBrief

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsBrief(GetApiNewsBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Tickers`
- **Query params (wire ← C#)**: `tickers` ← `Tickers` (comma-separated), `hours` ← `Hours`, `limit` ← `Limit`
- **Returns**: `WatchlistBriefDto`
- **Error**: `ApiException<GetApiNewsBriefError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsBriefRequest` | `src/AlphAi/Requests/News/GetApiNewsBriefRequest.cs` |
| `WatchlistBriefDto` | `src/AlphAi/Models/WatchlistBriefDto.cs` |
| `GetApiNewsBriefError` | `src/AlphAi/Errors/GetApiNewsBriefError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsByUid

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsByUid(GetApiNewsByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`
- **Returns**: `RichNewsArticle`
- **Error**: `ApiException<GetApiNewsByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsByUidRequest` | `src/AlphAi/Requests/News/GetApiNewsByUidRequest.cs` |
| `RichNewsArticle` | `src/AlphAi/Models/RichNewsArticle.cs` |
| `GetApiNewsByUidError` | `src/AlphAi/Errors/GetApiNewsByUidError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsByUidRelated

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsByUidRelated(GetApiNewsByUidRelatedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`
- **Returns**: `ApiNewsRelatedResponse`
- **Error**: `ApiException<GetApiNewsByUidRelatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsByUidRelatedRequest` | `src/AlphAi/Requests/News/GetApiNewsByUidRelatedRequest.cs` |
| `ApiNewsRelatedResponse` | `src/AlphAi/Models/ApiNewsRelatedResponse.cs` |
| `GetApiNewsByUidRelatedError` | `src/AlphAi/Errors/GetApiNewsByUidRelatedError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsInsider

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsInsider(GetApiNewsInsiderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `symbol` ← `Symbol`, `min_relevance` ← `MinRelevance`, `is_10b5_1` ← `Is10B51`, `page_size` ← `PageSize`, `sort` ← `Sort`, `from_date` ← `FromDate`, `to_date` ← `ToDate`, `format` ← `Format`
- **Returns**: `NewsPagination`
- **Error**: `ApiException<GetApiNewsInsiderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsInsiderRequest` | `src/AlphAi/Requests/News/GetApiNewsInsiderRequest.cs` |
| `Sort1` | `src/AlphAi/Models/Enums/Sort1.cs` |
| `Format` | `src/AlphAi/Models/Enums/Format.cs` |
| `NewsPagination` | `src/AlphAi/Models/NewsPagination.cs` |
| `GetApiNewsInsiderError` | `src/AlphAi/Errors/GetApiNewsInsiderError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsInsiderClusters

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsInsiderClusters(GetApiNewsInsiderClustersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`, `min_buyers` ← `MinBuyers`, `min_usd` ← `MinUsd`, `pattern` ← `Pattern`, `symbol` ← `Symbol`, `sort` ← `Sort`, `cursor` ← `Cursor`, `page_size` ← `PageSize`
- **Returns**: `InsiderClustersPage`
- **Error**: `ApiException<GetApiNewsInsiderClustersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsInsiderClustersRequest` | `src/AlphAi/Requests/News/GetApiNewsInsiderClustersRequest.cs` |
| `Pattern1` | `src/AlphAi/Models/Enums/Pattern1.cs` |
| `Sort3` | `src/AlphAi/Models/Enums/Sort3.cs` |
| `InsiderClustersPage` | `src/AlphAi/Models/InsiderClustersPage.cs` |
| `GetApiNewsInsiderClustersError` | `src/AlphAi/Errors/GetApiNewsInsiderClustersError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsMacro

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsMacro(GetApiNewsMacroRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `category` ← `Category`, `min_relevance` ← `MinRelevance`, `page_size` ← `PageSize`, `sort` ← `Sort`, `from_date` ← `FromDate`, `to_date` ← `ToDate`
- **Returns**: `NewsPagination`
- **Error**: `ApiException<GetApiNewsMacroError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsMacroRequest` | `src/AlphAi/Requests/News/GetApiNewsMacroRequest.cs` |
| `Sort1` | `src/AlphAi/Models/Enums/Sort1.cs` |
| `NewsPagination` | `src/AlphAi/Models/NewsPagination.cs` |
| `GetApiNewsMacroError` | `src/AlphAi/Errors/GetApiNewsMacroError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

### GetApiNewsSearch

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsSearch(GetApiNewsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `cursor` ← `Cursor`, `symbol` ← `Symbol`, `category` ← `Category`, `source_type` ← `SourceType`, `item` ← `Item`, `min_relevance` ← `MinRelevance`, `page_size` ← `PageSize`, `collapse` ← `Collapse`, `collapse_stories` ← `CollapseStories`, `from_date` ← `FromDate`, `to_date` ← `ToDate`
- **Returns**: `NewsSearchPage`
- **Error**: `ApiException<GetApiNewsSearchError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429] · `TryGetApiNewsSearch503Error1([NotNullWhen(true)] out ApiNewsSearch503Error1? value)` [503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsSearchRequest` | `src/AlphAi/Requests/News/GetApiNewsSearchRequest.cs` |
| `NewsCategory` | `src/AlphAi/Models/Enums/NewsCategory.cs` |
| `SourceType` | `src/AlphAi/Models/Enums/SourceType.cs` |
| `Collapse` | `src/AlphAi/Models/Enums/Collapse.cs` |
| `NewsSearchPage` | `src/AlphAi/Models/NewsSearchPage.cs` |
| `GetApiNewsSearchError` | `src/AlphAi/Errors/GetApiNewsSearchError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |
| `ApiNewsSearch503Error1` | `src/AlphAi/Models/ApiNewsSearch503Error1.cs` |

### GetApiNewsTrending

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsTrending(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<RichNewsArticle>`
- **Error**: `ApiException<GetApiNewsTrendingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RichNewsArticle` | `src/AlphAi/Models/RichNewsArticle.cs` |
| `GetApiNewsTrendingError` | `src/AlphAi/Errors/GetApiNewsTrendingError.cs` |
| `Error` | `src/AlphAi/Models/Error.cs` |

