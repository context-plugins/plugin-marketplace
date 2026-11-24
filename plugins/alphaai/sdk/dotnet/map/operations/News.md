<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.News` · Source: `src/AlphaAi/Api/News.cs` · 9 operations

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
| `GetApiNewsRequest` | `src/AlphaAi/Requests/News/GetApiNewsRequest.cs` |
| `NewsCategory` | `src/AlphaAi/Models/Enums/NewsCategory.cs` |
| `Collapse` | `src/AlphaAi/Models/Enums/Collapse.cs` |
| `Sort1` | `src/AlphaAi/Models/Enums/Sort1.cs` |
| `NewsSourceType` | `src/AlphaAi/Models/Enums/NewsSourceType.cs` |
| `NewsPagination` | `src/AlphaAi/Models/NewsPagination.cs` |
| `GetApiNewsError` | `src/AlphaAi/Errors/GetApiNewsError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

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
| `GetApiNewsBriefRequest` | `src/AlphaAi/Requests/News/GetApiNewsBriefRequest.cs` |
| `WatchlistBriefDto` | `src/AlphaAi/Models/WatchlistBriefDto.cs` |
| `GetApiNewsBriefError` | `src/AlphaAi/Errors/GetApiNewsBriefError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiNewsByUid

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsByUid(GetApiNewsByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`
- **Returns**: `RichNewsArticle`
- **Error**: `ApiException<GetApiNewsByUidError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsByUidRequest` | `src/AlphaAi/Requests/News/GetApiNewsByUidRequest.cs` |
| `RichNewsArticle` | `src/AlphaAi/Models/RichNewsArticle.cs` |
| `GetApiNewsByUidError` | `src/AlphaAi/Errors/GetApiNewsByUidError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiNewsByUidRelated

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsByUidRelated(GetApiNewsByUidRelatedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Uid`
- **Returns**: `ApiNewsRelatedResponse`
- **Error**: `ApiException<GetApiNewsByUidRelatedError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsByUidRelatedRequest` | `src/AlphaAi/Requests/News/GetApiNewsByUidRelatedRequest.cs` |
| `ApiNewsRelatedResponse` | `src/AlphaAi/Models/ApiNewsRelatedResponse.cs` |
| `GetApiNewsByUidRelatedError` | `src/AlphaAi/Errors/GetApiNewsByUidRelatedError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiNewsInsider

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsInsider(GetApiNewsInsiderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `symbol` ← `Symbol`, `min_relevance` ← `MinRelevance`, `is_10b5_1` ← `Is10B51`, `page_size` ← `PageSize`, `sort` ← `Sort`, `from_date` ← `FromDate`, `to_date` ← `ToDate`, `format` ← `Format`
- **Returns**: `NewsPagination`
- **Error**: `ApiException<GetApiNewsInsiderError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsInsiderRequest` | `src/AlphaAi/Requests/News/GetApiNewsInsiderRequest.cs` |
| `Sort1` | `src/AlphaAi/Models/Enums/Sort1.cs` |
| `Format` | `src/AlphaAi/Models/Enums/Format.cs` |
| `NewsPagination` | `src/AlphaAi/Models/NewsPagination.cs` |
| `GetApiNewsInsiderError` | `src/AlphaAi/Errors/GetApiNewsInsiderError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiNewsInsiderClusters

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsInsiderClusters(GetApiNewsInsiderClustersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `days` ← `Days`, `min_buyers` ← `MinBuyers`, `min_usd` ← `MinUsd`, `pattern` ← `Pattern`, `symbol` ← `Symbol`, `sort` ← `Sort`, `cursor` ← `Cursor`, `page_size` ← `PageSize`
- **Returns**: `InsiderClustersPage`
- **Error**: `ApiException<GetApiNewsInsiderClustersError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsInsiderClustersRequest` | `src/AlphaAi/Requests/News/GetApiNewsInsiderClustersRequest.cs` |
| `Pattern1` | `src/AlphaAi/Models/Enums/Pattern1.cs` |
| `Sort3` | `src/AlphaAi/Models/Enums/Sort3.cs` |
| `InsiderClustersPage` | `src/AlphaAi/Models/InsiderClustersPage.cs` |
| `GetApiNewsInsiderClustersError` | `src/AlphaAi/Errors/GetApiNewsInsiderClustersError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

### GetApiNewsMacro

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsMacro(GetApiNewsMacroRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `cursor` ← `Cursor`, `category` ← `Category`, `min_relevance` ← `MinRelevance`, `page_size` ← `PageSize`, `sort` ← `Sort`, `from_date` ← `FromDate`, `to_date` ← `ToDate`
- **Returns**: `NewsPagination`
- **Error**: `ApiException<GetApiNewsMacroError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400] · `TryGetError([NotNullWhen(true)] out Error? value)` [401, 403, 409, 429, 503] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetApiNewsMacroRequest` | `src/AlphaAi/Requests/News/GetApiNewsMacroRequest.cs` |
| `Sort1` | `src/AlphaAi/Models/Enums/Sort1.cs` |
| `NewsPagination` | `src/AlphaAi/Models/NewsPagination.cs` |
| `GetApiNewsMacroError` | `src/AlphaAi/Errors/GetApiNewsMacroError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

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
| `GetApiNewsSearchRequest` | `src/AlphaAi/Requests/News/GetApiNewsSearchRequest.cs` |
| `NewsCategory` | `src/AlphaAi/Models/Enums/NewsCategory.cs` |
| `SourceType` | `src/AlphaAi/Models/Enums/SourceType.cs` |
| `Collapse` | `src/AlphaAi/Models/Enums/Collapse.cs` |
| `NewsSearchPage` | `src/AlphaAi/Models/NewsSearchPage.cs` |
| `GetApiNewsSearchError` | `src/AlphaAi/Errors/GetApiNewsSearchError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |
| `ApiNewsSearch503Error1` | `src/AlphaAi/Models/ApiNewsSearch503Error1.cs` |

### GetApiNewsTrending

- **Auth**: `options.ApiKey`
- **Signature**: `GetApiNewsTrending(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IReadOnlyList<RichNewsArticle>`
- **Error**: `ApiException<GetApiNewsTrendingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RichNewsArticle` | `src/AlphaAi/Models/RichNewsArticle.cs` |
| `GetApiNewsTrendingError` | `src/AlphaAi/Errors/GetApiNewsTrendingError.cs` |
| `Error` | `src/AlphaAi/Models/Error.cs` |

