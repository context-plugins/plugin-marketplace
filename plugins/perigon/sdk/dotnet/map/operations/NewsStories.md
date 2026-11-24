<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsStories — operations

Accessor: `client.NewsStories` · Source: `src/Perigon/Api/NewsStories.cs` · 8 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetArticleRefreshJob

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetArticleRefreshJob(GetArticleRefreshJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ArticleRefreshJobResponse`
- **Error**: `ApiException<GetArticleRefreshJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetArticleRefreshJobRequest` | `src/Perigon/Requests/NewsStories/GetArticleRefreshJobRequest.cs` |
| `ArticleRefreshJobResponse` | `src/Perigon/Models/ArticleRefreshJobResponse.cs` |
| `GetArticleRefreshJobError` | `src/Perigon/Errors/GetArticleRefreshJobError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### GetStoryCounts

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetStoryCounts(GetStoryCountsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `splitBy` ← `SplitBy`, `q` ← `Q`, `name` ← `Name`, `clusterId` ← `ClusterId`, `excludeClusterId` ← `ExcludeClusterId`, `from` ← `From`, `to` ← `To`, `initializedFrom` ← `InitializedFrom`, `initializedTo` ← `InitializedTo`, `updatedFrom` ← `UpdatedFrom`, `updatedTo` ← `UpdatedTo`, `topic` ← `Topic`, `category` ← `Category`, `taxonomy` ← `Taxonomy`, `source` ← `Source`, `sourceGroup` ← `SourceGroup`, `minUniqueSources` ← `MinUniqueSources`, `minSourceDiversity` ← `MinSourceDiversity`, `personWikidataId` ← `PersonWikidataId`, `personName` ← `PersonName`, `companyId` ← `CompanyId`, `companyName` ← `CompanyName`, `companyDomain` ← `CompanyDomain`, `companySymbol` ← `CompanySymbol`, `companyIsin` ← `CompanyIsin`, `companySymbolIsin` ← `CompanySymbolIsin`, `country` ← `Country`, `state` ← `State`, `city` ← `City`, `area` ← `Area`, `minClusterSize` ← `MinClusterSize`, `maxClusterSize` ← `MaxClusterSize`, `nameExists` ← `NameExists`, `positiveSentimentFrom` ← `PositiveSentimentFrom`, `positiveSentimentTo` ← `PositiveSentimentTo`, `neutralSentimentFrom` ← `NeutralSentimentFrom`, `neutralSentimentTo` ← `NeutralSentimentTo`, `negativeSentimentFrom` ← `NegativeSentimentFrom`, `negativeSentimentTo` ← `NegativeSentimentTo`, `showDuplicates` ← `ShowDuplicates`
- **Returns**: `StatResult`
- **Error**: `ApiException<GetStoryCountsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoryCountsRequest` | `src/Perigon/Requests/NewsStories/GetStoryCountsRequest.cs` |
| `SplitBy` | `src/Perigon/Models/Enums/SplitBy.cs` |
| `StatResult` | `src/Perigon/Models/StatResult.cs` |
| `GetStoryCountsError` | `src/Perigon/Errors/GetStoryCountsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### GetStoryHistory

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetStoryHistory(GetStoryHistoryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `clusterId` ← `ClusterId`, `from` ← `From`, `to` ← `To`, `sortBy` ← `SortBy`, `page` ← `Page`, `size` ← `Size`, `changelogExists` ← `ChangelogExists`
- **Returns**: `StoryHistoryResult`
- **Error**: `ApiException<GetStoryHistoryError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetStoryHistoryRequest` | `src/Perigon/Requests/NewsStories/GetStoryHistoryRequest.cs` |
| `SortBy` | `src/Perigon/Models/Enums/SortBy.cs` |
| `StoryHistoryResult` | `src/Perigon/Models/StoryHistoryResult.cs` |
| `GetStoryHistoryError` | `src/Perigon/Errors/GetStoryHistoryError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### PeekArticleRefresh

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PeekArticleRefresh(PeekArticleRefreshRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ArticleRefreshPeekResponse`
- **Error**: `ApiException<PeekArticleRefreshError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PeekArticleRefreshRequest` | `src/Perigon/Requests/NewsStories/PeekArticleRefreshRequest.cs` |
| `ArticleRefreshSubmitRequest` | `src/Perigon/Models/ArticleRefreshSubmitRequest.cs` |
| `ArticleRefreshPeekResponse` | `src/Perigon/Models/ArticleRefreshPeekResponse.cs` |
| `PeekArticleRefreshError` | `src/Perigon/Errors/PeekArticleRefreshError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchArticles

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchArticles(SearchArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `title` ← `Title`, `desc` ← `Desc`, `content` ← `Content`, `summary` ← `Summary`, `url` ← `Url`, `articleId` ← `ArticleId`, `clusterId` ← `ClusterId`, `sortBy` ← `SortBy`, `page` ← `Page`, `size` ← `Size`, `from` ← `From`, `to` ← `To`, `addDateFrom` ← `AddDateFrom`, `addDateTo` ← `AddDateTo`, `refreshDateFrom` ← `RefreshDateFrom`, `refreshDateTo` ← `RefreshDateTo`, `medium` ← `Medium`, `source` ← `Source`, `sourceGroup` ← `SourceGroup`, `excludeSourceGroup` ← `ExcludeSourceGroup`, `excludeSource` ← `ExcludeSource`, `watchlist` ← `Watchlist`, `excludeWatchlist` ← `ExcludeWatchlist`, `paywall` ← `Paywall`, `byline` ← `Byline`, `author` ← `Author`, `excludeAuthor` ← `ExcludeAuthor`, `journalistId` ← `JournalistId`, `excludeJournalistId` ← `ExcludeJournalistId`, `language` ← `Language`, `excludeLanguage` ← `ExcludeLanguage`, `searchTranslation` ← `SearchTranslation`, `label` ← `Label`, `excludeLabel` ← `ExcludeLabel`, `category` ← `Category`, `excludeCategory` ← `ExcludeCategory`, `topic` ← `Topic`, `excludeTopic` ← `ExcludeTopic`, `linkTo` ← `LinkTo`, `showReprints` ← `ShowReprints`, `reprintGroupId` ← `ReprintGroupId`, `city` ← `City`, `excludeCity` ← `ExcludeCity`, `area` ← `Area`, `state` ← `State`, `excludeState` ← `ExcludeState`, `county` ← `County`, `excludeCounty` ← `ExcludeCounty`, `locationsCountry` ← `LocationsCountry`, `country` ← `Country`, `excludeLocationsCountry` ← `ExcludeLocationsCountry`, `location` ← `Location`, `lat` ← `Lat`, `lon` ← `Lon`, `maxDistance` ← `MaxDistance`, `sourceCity` ← `SourceCity`, `excludeSourceCity` ← `ExcludeSourceCity`, `sourceCounty` ← `SourceCounty`, `excludeSourceCounty` ← `ExcludeSourceCounty`, `sourceCountry` ← `SourceCountry`, `excludeSourceCountry` ← `ExcludeSourceCountry`, `sourceState` ← `SourceState`, `excludeSourceState` ← `ExcludeSourceState`, `sourceLat` ← `SourceLat`, `sourceLon` ← `SourceLon`, `sourceMaxDistance` ← `SourceMaxDistance`, `personWikidataId` ← `PersonWikidataId`, `excludePersonWikidataId` ← `ExcludePersonWikidataId`, `personName` ← `PersonName`, `excludePersonName` ← `ExcludePersonName`, `companyId` ← `CompanyId`, `excludeCompanyId` ← `ExcludeCompanyId`, `companyName` ← `CompanyName`, `companyDomain` ← `CompanyDomain`, `excludeCompanyDomain` ← `ExcludeCompanyDomain`, `companySymbol` ← `CompanySymbol`, `companyIsin` ← `CompanyIsin`, `companySymbolIsin` ← `CompanySymbolIsin`, `excludeCompanyIsin` ← `ExcludeCompanyIsin`, `excludeCompanySymbolIsin` ← `ExcludeCompanySymbolIsin`, `excludeCompanySymbol` ← `ExcludeCompanySymbol`, `showNumResults` ← `ShowNumResults`, `positiveSentimentFrom` ← `PositiveSentimentFrom`, `positiveSentimentTo` ← `PositiveSentimentTo`, `neutralSentimentFrom` ← `NeutralSentimentFrom`, `neutralSentimentTo` ← `NeutralSentimentTo`, `negativeSentimentFrom` ← `NegativeSentimentFrom`, `negativeSentimentTo` ← `NegativeSentimentTo`, `taxonomy` ← `Taxonomy`, `prefixTaxonomy` ← `PrefixTaxonomy`, `showHighlighting` ← `ShowHighlighting`, `highlightFragmentSize` ← `HighlightFragmentSize`, `highlightNumFragments` ← `HighlightNumFragments`, `highlightPreTag` ← `HighlightPreTag`, `highlightPostTag` ← `HighlightPostTag`, `highlightQ` ← `HighlightQ`
- **Returns**: `QuerySearchResult`
- **Error**: `ApiException<SearchArticlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchArticlesRequest` | `src/Perigon/Requests/NewsStories/SearchArticlesRequest.cs` |
| `AllEndpointSortBy` | `src/Perigon/Models/Enums/AllEndpointSortBy.cs` |
| `QuerySearchResult` | `src/Perigon/Models/QuerySearchResult.cs` |
| `SearchArticlesError` | `src/Perigon/Errors/SearchArticlesError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchStories

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchStories(SearchStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `name` ← `Name`, `clusterId` ← `ClusterId`, `excludeClusterId` ← `ExcludeClusterId`, `sortBy` ← `SortBy`, `page` ← `Page`, `size` ← `Size`, `from` ← `From`, `to` ← `To`, `initializedFrom` ← `InitializedFrom`, `initializedTo` ← `InitializedTo`, `updatedFrom` ← `UpdatedFrom`, `updatedTo` ← `UpdatedTo`, `topic` ← `Topic`, `category` ← `Category`, `taxonomy` ← `Taxonomy`, `source` ← `Source`, `sourceGroup` ← `SourceGroup`, `minUniqueSources` ← `MinUniqueSources`, `minSourceDiversity` ← `MinSourceDiversity`, `personWikidataId` ← `PersonWikidataId`, `personName` ← `PersonName`, `companyId` ← `CompanyId`, `companyName` ← `CompanyName`, `companyDomain` ← `CompanyDomain`, `companySymbol` ← `CompanySymbol`, `companyIsin` ← `CompanyIsin`, `companySymbolIsin` ← `CompanySymbolIsin`, `country` ← `Country`, `state` ← `State`, `city` ← `City`, `area` ← `Area`, `minClusterSize` ← `MinClusterSize`, `maxClusterSize` ← `MaxClusterSize`, `nameExists` ← `NameExists`, `positiveSentimentFrom` ← `PositiveSentimentFrom`, `positiveSentimentTo` ← `PositiveSentimentTo`, `neutralSentimentFrom` ← `NeutralSentimentFrom`, `neutralSentimentTo` ← `NeutralSentimentTo`, `negativeSentimentFrom` ← `NegativeSentimentFrom`, `negativeSentimentTo` ← `NegativeSentimentTo`, `showStoryPageInfo` ← `ShowStoryPageInfo`, `showNumResults` ← `ShowNumResults`, `showDuplicates` ← `ShowDuplicates`, `showHighlighting` ← `ShowHighlighting`, `highlightFragmentSize` ← `HighlightFragmentSize`, `highlightNumFragments` ← `HighlightNumFragments`, `highlightPreTag` ← `HighlightPreTag`, `highlightPostTag` ← `HighlightPostTag`, `highlightQ` ← `HighlightQ`, `expandArticles` ← `ExpandArticles`
- **Returns**: `StorySearchResult`
- **Error**: `ApiException<SearchStoriesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchStoriesRequest` | `src/Perigon/Requests/NewsStories/SearchStoriesRequest.cs` |
| `ClustersListSortBy` | `src/Perigon/Models/Enums/ClustersListSortBy.cs` |
| `StorySearchResult` | `src/Perigon/Models/StorySearchResult.cs` |
| `SearchStoriesError` | `src/Perigon/Errors/SearchStoriesError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SubmitArticleRefreshJob

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SubmitArticleRefreshJob(SubmitArticleRefreshJobRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ArticleRefreshJobResponse`
- **Error**: `ApiException<SubmitArticleRefreshJobError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SubmitArticleRefreshJobRequest` | `src/Perigon/Requests/NewsStories/SubmitArticleRefreshJobRequest.cs` |
| `ArticleRefreshSubmitRequest` | `src/Perigon/Models/ArticleRefreshSubmitRequest.cs` |
| `ArticleRefreshJobResponse` | `src/Perigon/Models/ArticleRefreshJobResponse.cs` |
| `SubmitArticleRefreshJobError` | `src/Perigon/Errors/SubmitArticleRefreshJobError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### VectorSearchArticles

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `VectorSearchArticles(VectorSearchArticlesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ArticlesVectorSearchResult`
- **Error**: `ApiException<VectorSearchArticlesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VectorSearchArticlesRequest` | `src/Perigon/Requests/NewsStories/VectorSearchArticlesRequest.cs` |
| `ArticleSearchParams` | `src/Perigon/Models/ArticleSearchParams.cs` |
| `ArticlesVectorSearchResult` | `src/Perigon/Models/ArticlesVectorSearchResult.cs` |
| `VectorSearchArticlesError` | `src/Perigon/Errors/VectorSearchArticlesError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

