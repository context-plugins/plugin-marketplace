<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsStories — operations

Accessor: `client.newsStories` · Source: `src/resources/news-stories.ts` · 8 operations · Request and error types: namespace `NewsStories`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getArticleRefreshJob

- **Signature**: `getArticleRefreshJob(request: NewsStories.GetArticleRefreshJobRequest, options?: RequestOptions): ApiPromise<ArticleRefreshJobResponse, NewsStories.GetArticleRefreshJobError>`
- **Wire**: `GET /v1/articles/refresh/jobs/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ArticleRefreshJobResponse`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.GetArticleRefreshJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [400] `ErrorResponse` · `"errorResponse5"` [403] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.GetArticleRefreshJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArticleRefreshJobResponse` | `articleRefreshJobResponseSchema` | `src/models/article-refresh-job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getStoryCounts

- **Signature**: `getStoryCounts(request?: NewsStories.GetStoryCountsRequest, options?: RequestOptions): ApiPromise<StatResult, NewsStories.GetStoryCountsError>`
- **Wire**: `GET /v1/stories/stats`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StatResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.GetStoryCountsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.GetStoryCountsRequest` (40):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `splitBy` | `query` | `SplitBy` | no | `SplitBy.Month` |
| `q` | `query` | `string` | no | — |
| `name` | `query` | `string` | no | — |
| `clusterId` | `query` | `string[]` | no | — |
| `excludeClusterId` | `query` | `string[]` | no | — |
| `from` | `query` | `Date` (date-time) | no | — |
| `to` | `query` | `Date` (date-time) | no | — |
| `initializedFrom` | `query` | `Date` (date-time) | no | — |
| `initializedTo` | `query` | `Date` (date-time) | no | — |
| `updatedFrom` | `query` | `Date` (date-time) | no | — |
| `updatedTo` | `query` | `Date` (date-time) | no | — |
| `topic` | `query` | `string[]` | no | — |
| `category` | `query` | `string[]` | no | — |
| `taxonomy` | `query` | `string[]` | no | — |
| `source` | `query` | `string[]` | no | — |
| `sourceGroup` | `query` | `string[]` | no | — |
| `minUniqueSources` | `query` | `number` | no | — |
| `minSourceDiversity` | `query` | `number` | no | — |
| `personWikidataId` | `query` | `string[]` | no | — |
| `personName` | `query` | `string` | no | — |
| `companyId` | `query` | `string[]` | no | — |
| `companyName` | `query` | `string` | no | — |
| `companyDomain` | `query` | `string[]` | no | — |
| `companySymbol` | `query` | `string[]` | no | — |
| `companyIsin` | `query` | `string[]` | no | — |
| `companySymbolIsin` | `query` | `string[]` | no | — |
| `country` | `query` | `string[]` | no | — |
| `state` | `query` | `string[]` | no | — |
| `city` | `query` | `string[]` | no | — |
| `area` | `query` | `string[]` | no | — |
| `minClusterSize` | `query` | `number` | no | — |
| `maxClusterSize` | `query` | `number` | no | — |
| `nameExists` | `query` | `boolean` | no | — |
| `positiveSentimentFrom` | `query` | `number` | no | — |
| `positiveSentimentTo` | `query` | `number` | no | — |
| `neutralSentimentFrom` | `query` | `number` | no | — |
| `neutralSentimentTo` | `query` | `number` | no | — |
| `negativeSentimentFrom` | `query` | `number` | no | — |
| `negativeSentimentTo` | `query` | `number` | no | — |
| `showDuplicates` | `query` | `boolean` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SplitBy` | `splitBySchema` | `src/models/split-by.ts` |
| `StatResult` | `statResultSchema` | `src/models/stat-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getStoryHistory

- **Signature**: `getStoryHistory(request?: NewsStories.GetStoryHistoryRequest, options?: RequestOptions): ApiPromise<StoryHistoryResult, NewsStories.GetStoryHistoryError>`
- **Wire**: `GET /v1/stories/history`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoryHistoryResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.GetStoryHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.GetStoryHistoryRequest` (7):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `clusterId` | `query` | `string[]` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `sortBy` | `query` | `SortBy` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `changelogExists` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy` | `sortBySchema` | `src/models/sort-by.ts` |
| `StoryHistoryResult` | `storyHistoryResultSchema` | `src/models/story-history-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### peekArticleRefresh

- **Signature**: `peekArticleRefresh(request: NewsStories.PeekArticleRefreshRequest, options?: RequestOptions): ApiPromise<ArticleRefreshPeekResponse, NewsStories.PeekArticleRefreshError>`
- **Wire**: `POST /v1/articles/refresh/peek`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ArticleRefreshPeekResponse`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.PeekArticleRefreshError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.PeekArticleRefreshRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ArticleRefreshSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArticleRefreshSubmitRequest` | `articleRefreshSubmitRequestSchema` | `src/models/article-refresh-submit-request.ts` |
| `ArticleRefreshPeekResponse` | `articleRefreshPeekResponseSchema` | `src/models/article-refresh-peek-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchArticles

- **Signature**: `searchArticles(request?: NewsStories.SearchArticlesRequest, options?: RequestOptions): ApiPromise<QuerySearchResult, NewsStories.SearchArticlesError>`
- **Wire**: `GET /v1/articles/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `QuerySearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.SearchArticlesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.SearchArticlesRequest` (97):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `title` | `query` | `string` | no |
| `desc` | `query` | `string` | no |
| `content` | `query` | `string` | no |
| `summary` | `query` | `string` | no |
| `url` | `query` | `string` | no |
| `articleId` | `query` | `string[]` | no |
| `clusterId` | `query` | `string[]` | no |
| `sortBy` | `query` | `AllEndpointSortBy` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `addDateFrom` | `query` | `Date` (date-time) | no |
| `addDateTo` | `query` | `Date` (date-time) | no |
| `refreshDateFrom` | `query` | `Date` (date-time) | no |
| `refreshDateTo` | `query` | `Date` (date-time) | no |
| `medium` | `query` | `string[]` | no |
| `source` | `query` | `string[]` | no |
| `sourceGroup` | `query` | `string[]` | no |
| `excludeSourceGroup` | `query` | `string[]` | no |
| `excludeSource` | `query` | `string[]` | no |
| `watchlist` | `query` | `string[]` | no |
| `excludeWatchlist` | `query` | `string[]` | no |
| `paywall` | `query` | `boolean` | no |
| `byline` | `query` | `string[]` | no |
| `author` | `query` | `string[]` | no |
| `excludeAuthor` | `query` | `string[]` | no |
| `journalistId` | `query` | `string[]` | no |
| `excludeJournalistId` | `query` | `string[]` | no |
| `language` | `query` | `string[]` | no |
| `excludeLanguage` | `query` | `string[]` | no |
| `searchTranslation` | `query` | `boolean` | no |
| `label` | `query` | `string[]` | no |
| `excludeLabel` | `query` | `string[]` | no |
| `category` | `query` | `string[]` | no |
| `excludeCategory` | `query` | `string[]` | no |
| `topic` | `query` | `string[]` | no |
| `excludeTopic` | `query` | `string[]` | no |
| `linkTo` | `query` | `string` | no |
| `showReprints` | `query` | `boolean` | no |
| `reprintGroupId` | `query` | `string` | no |
| `city` | `query` | `string[]` | no |
| `excludeCity` | `query` | `string[]` | no |
| `area` | `query` | `string[]` | no |
| `state` | `query` | `string[]` | no |
| `excludeState` | `query` | `string[]` | no |
| `county` | `query` | `string[]` | no |
| `excludeCounty` | `query` | `string[]` | no |
| `locationsCountry` | `query` | `string[]` | no |
| `country` | `query` | `string[]` | no |
| `excludeLocationsCountry` | `query` | `string[]` | no |
| `location` | `query` | `string[]` | no |
| `lat` | `query` | `number` | no |
| `lon` | `query` | `number` | no |
| `maxDistance` | `query` | `number` | no |
| `sourceCity` | `query` | `string[]` | no |
| `excludeSourceCity` | `query` | `string[]` | no |
| `sourceCounty` | `query` | `string[]` | no |
| `excludeSourceCounty` | `query` | `string[]` | no |
| `sourceCountry` | `query` | `string[]` | no |
| `excludeSourceCountry` | `query` | `string[]` | no |
| `sourceState` | `query` | `string[]` | no |
| `excludeSourceState` | `query` | `string[]` | no |
| `sourceLat` | `query` | `number` | no |
| `sourceLon` | `query` | `number` | no |
| `sourceMaxDistance` | `query` | `number` | no |
| `personWikidataId` | `query` | `string[]` | no |
| `excludePersonWikidataId` | `query` | `string[]` | no |
| `personName` | `query` | `string[]` | no |
| `excludePersonName` | `query` | `string[]` | no |
| `companyId` | `query` | `string[]` | no |
| `excludeCompanyId` | `query` | `string[]` | no |
| `companyName` | `query` | `string` | no |
| `companyDomain` | `query` | `string[]` | no |
| `excludeCompanyDomain` | `query` | `string[]` | no |
| `companySymbol` | `query` | `string[]` | no |
| `companyIsin` | `query` | `string[]` | no |
| `companySymbolIsin` | `query` | `string[]` | no |
| `excludeCompanyIsin` | `query` | `string[]` | no |
| `excludeCompanySymbolIsin` | `query` | `string[]` | no |
| `excludeCompanySymbol` | `query` | `string[]` | no |
| `showNumResults` | `query` | `boolean` | no |
| `positiveSentimentFrom` | `query` | `number` | no |
| `positiveSentimentTo` | `query` | `number` | no |
| `neutralSentimentFrom` | `query` | `number` | no |
| `neutralSentimentTo` | `query` | `number` | no |
| `negativeSentimentFrom` | `query` | `number` | no |
| `negativeSentimentTo` | `query` | `number` | no |
| `taxonomy` | `query` | `string[]` | no |
| `prefixTaxonomy` | `query` | `string` | no |
| `showHighlighting` | `query` | `boolean` | no |
| `highlightFragmentSize` | `query` | `number` | no |
| `highlightNumFragments` | `query` | `number` | no |
| `highlightPreTag` | `query` | `string` | no |
| `highlightPostTag` | `query` | `string` | no |
| `highlightQ` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllEndpointSortBy` | `allEndpointSortBySchema` | `src/models/all-endpoint-sort-by.ts` |
| `QuerySearchResult` | `querySearchResultSchema` | `src/models/query-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchStories

- **Signature**: `searchStories(request?: NewsStories.SearchStoriesRequest, options?: RequestOptions): ApiPromise<StorySearchResult, NewsStories.SearchStoriesError>`
- **Wire**: `GET /v1/stories/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.SearchStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.SearchStoriesRequest` (51):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `clusterId` | `query` | `string[]` | no |
| `excludeClusterId` | `query` | `string[]` | no |
| `sortBy` | `query` | `ClustersListSortBy` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `initializedFrom` | `query` | `Date` (date-time) | no |
| `initializedTo` | `query` | `Date` (date-time) | no |
| `updatedFrom` | `query` | `Date` (date-time) | no |
| `updatedTo` | `query` | `Date` (date-time) | no |
| `topic` | `query` | `string[]` | no |
| `category` | `query` | `string[]` | no |
| `taxonomy` | `query` | `string[]` | no |
| `source` | `query` | `string[]` | no |
| `sourceGroup` | `query` | `string[]` | no |
| `minUniqueSources` | `query` | `number` | no |
| `minSourceDiversity` | `query` | `number` | no |
| `personWikidataId` | `query` | `string[]` | no |
| `personName` | `query` | `string` | no |
| `companyId` | `query` | `string[]` | no |
| `companyName` | `query` | `string` | no |
| `companyDomain` | `query` | `string[]` | no |
| `companySymbol` | `query` | `string[]` | no |
| `companyIsin` | `query` | `string[]` | no |
| `companySymbolIsin` | `query` | `string[]` | no |
| `country` | `query` | `string[]` | no |
| `state` | `query` | `string[]` | no |
| `city` | `query` | `string[]` | no |
| `area` | `query` | `string[]` | no |
| `minClusterSize` | `query` | `number` | no |
| `maxClusterSize` | `query` | `number` | no |
| `nameExists` | `query` | `boolean` | no |
| `positiveSentimentFrom` | `query` | `number` | no |
| `positiveSentimentTo` | `query` | `number` | no |
| `neutralSentimentFrom` | `query` | `number` | no |
| `neutralSentimentTo` | `query` | `number` | no |
| `negativeSentimentFrom` | `query` | `number` | no |
| `negativeSentimentTo` | `query` | `number` | no |
| `showStoryPageInfo` | `query` | `boolean` | no |
| `showNumResults` | `query` | `boolean` | no |
| `showDuplicates` | `query` | `boolean` | no |
| `showHighlighting` | `query` | `boolean` | no |
| `highlightFragmentSize` | `query` | `number` | no |
| `highlightNumFragments` | `query` | `number` | no |
| `highlightPreTag` | `query` | `string` | no |
| `highlightPostTag` | `query` | `string` | no |
| `highlightQ` | `query` | `string` | no |
| `expandArticles` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ClustersListSortBy` | `clustersListSortBySchema` | `src/models/clusters-list-sort-by.ts` |
| `StorySearchResult` | `storySearchResultSchema` | `src/models/story-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### submitArticleRefreshJob

- **Signature**: `submitArticleRefreshJob(request: NewsStories.SubmitArticleRefreshJobRequest, options?: RequestOptions): ApiPromise<ArticleRefreshJobResponse, NewsStories.SubmitArticleRefreshJobError>`
- **Wire**: `POST /v1/articles/refresh/jobs`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ArticleRefreshJobResponse`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.SubmitArticleRefreshJobError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [400] `ErrorResponse` · `"errorResponse5"` [403] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.SubmitArticleRefreshJobRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ArticleRefreshSubmitRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArticleRefreshSubmitRequest` | `articleRefreshSubmitRequestSchema` | `src/models/article-refresh-submit-request.ts` |
| `ArticleRefreshJobResponse` | `articleRefreshJobResponseSchema` | `src/models/article-refresh-job-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### vectorSearchArticles

- **Signature**: `vectorSearchArticles(request: NewsStories.VectorSearchArticlesRequest, options?: RequestOptions): ApiPromise<ArticlesVectorSearchResult, NewsStories.VectorSearchArticlesError>`
- **Wire**: `POST /v1/vector/news/all`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ArticlesVectorSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `NewsStories.VectorSearchArticlesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NewsStories.VectorSearchArticlesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ArticleSearchParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ArticleSearchParams` | `articleSearchParamsSchema` | `src/models/article-search-params.ts` |
| `ArticlesVectorSearchResult` | `articlesVectorSearchResultSchema` | `src/models/articles-vector-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

