<!-- Generated file — do not edit; regenerated with the SDK. -->

# NewsStories — operations

Accessor: `client.news_stories` · Source: `perigon/apis/news_stories.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.news_stories.get_article_refresh_job

- **Route**: `GET /v1/articles/refresh/jobs/{id}`
- **Auth**: `api_key_auth`
- **Signature**: `def get_article_refresh_job(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ArticleRefreshJobResponse`
- **Returns (raw)**: `ApiResult[ArticleRefreshJobResponse, GetArticleRefreshJobErrorBody]`
- **Error**: `GetArticleRefreshJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArticleRefreshJobResponse` | `perigon/models/article_refresh_job_response.py` |
| `GetArticleRefreshJobErrorBody` | `perigon/errors/get_article_refresh_job_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.get_story_counts

- **Route**: `GET /v1/stories/stats`
- **Auth**: `api_key_auth`
- **Signature**: `def get_story_counts(*, split_by: SplitByOrStr = SplitBy.MONTH, q: str | None = None, name: str | None = None, cluster_id: list[str] | None = None, exclude_cluster_id: list[str] | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, initialized_from: RFC3339DateTime | None = None, initialized_to: RFC3339DateTime | None = None, updated_from: RFC3339DateTime | None = None, updated_to: RFC3339DateTime | None = None, topic: list[str] | None = None, category: list[str] | None = None, taxonomy: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, min_unique_sources: int | None = None, min_source_diversity: float | None = None, person_wikidata_id: list[str] | None = None, person_name: str | None = None, company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, country: list[str] | None = None, state: list[str] | None = None, city: list[str] | None = None, area: list[str] | None = None, min_cluster_size: int | None = None, max_cluster_size: int | None = None, name_exists: bool | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, show_duplicates: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `split_by` — query `splitBy` · `q` — query · `name` — query · `cluster_id` — query `clusterId` · `exclude_cluster_id` — query `excludeClusterId` · `from_` — query `from` · `to` — query · `initialized_from` — query `initializedFrom` · `initialized_to` — query `initializedTo` · `updated_from` — query `updatedFrom` · `updated_to` — query `updatedTo` · `topic` — query · `category` — query · `taxonomy` — query · `source` — query · `source_group` — query `sourceGroup` · `min_unique_sources` — query `minUniqueSources` · `min_source_diversity` — query `minSourceDiversity` · `person_wikidata_id` — query `personWikidataId` · `person_name` — query `personName` · `company_id` — query `companyId` · `company_name` — query `companyName` · `company_domain` — query `companyDomain` · `company_symbol` — query `companySymbol` · `company_isin` — query `companyIsin` · `company_symbol_isin` — query `companySymbolIsin` · `country` — query · `state` — query · `city` — query · `area` — query · `min_cluster_size` — query `minClusterSize` · `max_cluster_size` — query `maxClusterSize` · `name_exists` — query `nameExists` · `positive_sentiment_from` — query `positiveSentimentFrom` · `positive_sentiment_to` — query `positiveSentimentTo` · `neutral_sentiment_from` — query `neutralSentimentFrom` · `neutral_sentiment_to` — query `neutralSentimentTo` · `negative_sentiment_from` — query `negativeSentimentFrom` · `negative_sentiment_to` — query `negativeSentimentTo` · `show_duplicates` — query `showDuplicates`
- **Returns (parsed)**: `StatResult`
- **Returns (raw)**: `ApiResult[StatResult, GetStoryCountsErrorBody]`
- **Error**: `GetStoryCountsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SplitByOrStr` | `perigon/models/enums/split_by.py` |
| `StatResult` | `perigon/models/stat_result.py` |
| `GetStoryCountsErrorBody` | `perigon/errors/get_story_counts_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.get_story_history

- **Route**: `GET /v1/stories/history`
- **Auth**: `api_key_auth`
- **Signature**: `def get_story_history(*, cluster_id: list[str] | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, sort_by: SortByOrStr | None = None, page: int | None = None, size: int | None = None, changelog_exists: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cluster_id` — query `clusterId` · `from_` — query `from` · `to` — query · `sort_by` — query `sortBy` · `page` — query · `size` — query · `changelog_exists` — query `changelogExists`
- **Returns (parsed)**: `StoryHistoryResult`
- **Returns (raw)**: `ApiResult[StoryHistoryResult, GetStoryHistoryErrorBody]`
- **Error**: `GetStoryHistoryErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByOrStr` | `perigon/models/enums/sort_by.py` |
| `StoryHistoryResult` | `perigon/models/story_history_result.py` |
| `GetStoryHistoryErrorBody` | `perigon/errors/get_story_history_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.peek_article_refresh

- **Route**: `POST /v1/articles/refresh/peek`
- **Auth**: `api_key_auth`
- **Signature**: `def peek_article_refresh(body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ArticleRefreshPeekResponse`
- **Returns (raw)**: `ApiResult[ArticleRefreshPeekResponse, PeekArticleRefreshErrorBody]`
- **Error**: `PeekArticleRefreshErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArticleRefreshSubmitRequest` | `perigon/models/article_refresh_submit_request.py` |
| `ArticleRefreshSubmitRequestDict` | `perigon/models/article_refresh_submit_request.py` |
| `ArticleRefreshPeekResponse` | `perigon/models/article_refresh_peek_response.py` |
| `PeekArticleRefreshErrorBody` | `perigon/errors/peek_article_refresh_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.search_articles

- **Route**: `GET /v1/articles/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_articles(*, q: str | None = None, title: str | None = None, desc: str | None = None, content: str | None = None, summary: str | None = None, url: str | None = None, article_id: list[str] | None = None, cluster_id: list[str] | None = None, sort_by: AllEndpointSortByOrStr | None = None, page: int | None = None, size: int | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, add_date_from: RFC3339DateTime | None = None, add_date_to: RFC3339DateTime | None = None, refresh_date_from: RFC3339DateTime | None = None, refresh_date_to: RFC3339DateTime | None = None, medium: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, exclude_source_group: list[str] | None = None, exclude_source: list[str] | None = None, watchlist: list[str] | None = None, exclude_watchlist: list[str] | None = None, paywall: bool | None = None, byline: list[str] | None = None, author: list[str] | None = None, exclude_author: list[str] | None = None, journalist_id: list[str] | None = None, exclude_journalist_id: list[str] | None = None, language: list[str] | None = None, exclude_language: list[str] | None = None, search_translation: bool | None = None, label: list[str] | None = None, exclude_label: list[str] | None = None, category: list[str] | None = None, exclude_category: list[str] | None = None, topic: list[str] | None = None, exclude_topic: list[str] | None = None, link_to: str | None = None, show_reprints: bool | None = None, reprint_group_id: str | None = None, city: list[str] | None = None, exclude_city: list[str] | None = None, area: list[str] | None = None, state: list[str] | None = None, exclude_state: list[str] | None = None, county: list[str] | None = None, exclude_county: list[str] | None = None, locations_country: list[str] | None = None, country: list[str] | None = None, exclude_locations_country: list[str] | None = None, location: list[str] | None = None, lat: float | None = None, lon: float | None = None, max_distance: float | None = None, source_city: list[str] | None = None, exclude_source_city: list[str] | None = None, source_county: list[str] | None = None, exclude_source_county: list[str] | None = None, source_country: list[str] | None = None, exclude_source_country: list[str] | None = None, source_state: list[str] | None = None, exclude_source_state: list[str] | None = None, source_lat: float | None = None, source_lon: float | None = None, source_max_distance: float | None = None, person_wikidata_id: list[str] | None = None, exclude_person_wikidata_id: list[str] | None = None, person_name: list[str] | None = None, exclude_person_name: list[str] | None = None, company_id: list[str] | None = None, exclude_company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, exclude_company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, exclude_company_isin: list[str] | None = None, exclude_company_symbol_isin: list[str] | None = None, exclude_company_symbol: list[str] | None = None, show_num_results: bool | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, taxonomy: list[str] | None = None, prefix_taxonomy: str | None = None, show_highlighting: bool | None = None, highlight_fragment_size: int | None = None, highlight_num_fragments: int | None = None, highlight_pre_tag: str | None = None, highlight_post_tag: str | None = None, highlight_q: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `title` — query · `desc` — query · `content` — query · `summary` — query · `url` — query · `article_id` — query `articleId` · `cluster_id` — query `clusterId` · `sort_by` — query `sortBy` · `page` — query · `size` — query · `from_` — query `from` · `to` — query · `add_date_from` — query `addDateFrom` · `add_date_to` — query `addDateTo` · `refresh_date_from` — query `refreshDateFrom` · `refresh_date_to` — query `refreshDateTo` · `medium` — query · `source` — query · `source_group` — query `sourceGroup` · `exclude_source_group` — query `excludeSourceGroup` · `exclude_source` — query `excludeSource` · `watchlist` — query · `exclude_watchlist` — query `excludeWatchlist` · `paywall` — query · `byline` — query · `author` — query · `exclude_author` — query `excludeAuthor` · `journalist_id` — query `journalistId` · `exclude_journalist_id` — query `excludeJournalistId` · `language` — query · `exclude_language` — query `excludeLanguage` · `search_translation` — query `searchTranslation` · `label` — query · `exclude_label` — query `excludeLabel` · `category` — query · `exclude_category` — query `excludeCategory` · `topic` — query · `exclude_topic` — query `excludeTopic` · `link_to` — query `linkTo` · `show_reprints` — query `showReprints` · `reprint_group_id` — query `reprintGroupId` · `city` — query · `exclude_city` — query `excludeCity` · `area` — query · `state` — query · `exclude_state` — query `excludeState` · `county` — query · `exclude_county` — query `excludeCounty` · `locations_country` — query `locationsCountry` · `country` — query · `exclude_locations_country` — query `excludeLocationsCountry` · `location` — query · `lat` — query · `lon` — query · `max_distance` — query `maxDistance` · `source_city` — query `sourceCity` · `exclude_source_city` — query `excludeSourceCity` · `source_county` — query `sourceCounty` · `exclude_source_county` — query `excludeSourceCounty` · `source_country` — query `sourceCountry` · `exclude_source_country` — query `excludeSourceCountry` · `source_state` — query `sourceState` · `exclude_source_state` — query `excludeSourceState` · `source_lat` — query `sourceLat` · `source_lon` — query `sourceLon` · `source_max_distance` — query `sourceMaxDistance` · `person_wikidata_id` — query `personWikidataId` · `exclude_person_wikidata_id` — query `excludePersonWikidataId` · `person_name` — query `personName` · `exclude_person_name` — query `excludePersonName` · `company_id` — query `companyId` · `exclude_company_id` — query `excludeCompanyId` · `company_name` — query `companyName` · `company_domain` — query `companyDomain` · `exclude_company_domain` — query `excludeCompanyDomain` · `company_symbol` — query `companySymbol` · `company_isin` — query `companyIsin` · `company_symbol_isin` — query `companySymbolIsin` · `exclude_company_isin` — query `excludeCompanyIsin` · `exclude_company_symbol_isin` — query `excludeCompanySymbolIsin` · `exclude_company_symbol` — query `excludeCompanySymbol` · `show_num_results` — query `showNumResults` · `positive_sentiment_from` — query `positiveSentimentFrom` · `positive_sentiment_to` — query `positiveSentimentTo` · `neutral_sentiment_from` — query `neutralSentimentFrom` · `neutral_sentiment_to` — query `neutralSentimentTo` · `negative_sentiment_from` — query `negativeSentimentFrom` · `negative_sentiment_to` — query `negativeSentimentTo` · `taxonomy` — query · `prefix_taxonomy` — query `prefixTaxonomy` · `show_highlighting` — query `showHighlighting` · `highlight_fragment_size` — query `highlightFragmentSize` · `highlight_num_fragments` — query `highlightNumFragments` · `highlight_pre_tag` — query `highlightPreTag` · `highlight_post_tag` — query `highlightPostTag` · `highlight_q` — query `highlightQ`
- **Returns (parsed)**: `QuerySearchResult`
- **Returns (raw)**: `ApiResult[QuerySearchResult, SearchArticlesErrorBody]`
- **Error**: `SearchArticlesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AllEndpointSortByOrStr` | `perigon/models/enums/all_endpoint_sort_by.py` |
| `QuerySearchResult` | `perigon/models/query_search_result.py` |
| `SearchArticlesErrorBody` | `perigon/errors/search_articles_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.search_stories

- **Route**: `GET /v1/stories/all`
- **Auth**: `api_key_auth`
- **Signature**: `def search_stories(*, q: str | None = None, name: str | None = None, cluster_id: list[str] | None = None, exclude_cluster_id: list[str] | None = None, sort_by: ClustersListSortByOrStr | None = None, page: int | None = None, size: int | None = None, from_: RFC3339DateTime | None = None, to: RFC3339DateTime | None = None, initialized_from: RFC3339DateTime | None = None, initialized_to: RFC3339DateTime | None = None, updated_from: RFC3339DateTime | None = None, updated_to: RFC3339DateTime | None = None, topic: list[str] | None = None, category: list[str] | None = None, taxonomy: list[str] | None = None, source: list[str] | None = None, source_group: list[str] | None = None, min_unique_sources: int | None = None, min_source_diversity: float | None = None, person_wikidata_id: list[str] | None = None, person_name: str | None = None, company_id: list[str] | None = None, company_name: str | None = None, company_domain: list[str] | None = None, company_symbol: list[str] | None = None, company_isin: list[str] | None = None, company_symbol_isin: list[str] | None = None, country: list[str] | None = None, state: list[str] | None = None, city: list[str] | None = None, area: list[str] | None = None, min_cluster_size: int | None = None, max_cluster_size: int | None = None, name_exists: bool | None = None, positive_sentiment_from: float | None = None, positive_sentiment_to: float | None = None, neutral_sentiment_from: float | None = None, neutral_sentiment_to: float | None = None, negative_sentiment_from: float | None = None, negative_sentiment_to: float | None = None, show_story_page_info: bool | None = None, show_num_results: bool | None = None, show_duplicates: bool | None = None, show_highlighting: bool | None = None, highlight_fragment_size: int | None = None, highlight_num_fragments: int | None = None, highlight_pre_tag: str | None = None, highlight_post_tag: str | None = None, highlight_q: str | None = None, expand_articles: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `name` — query · `cluster_id` — query `clusterId` · `exclude_cluster_id` — query `excludeClusterId` · `sort_by` — query `sortBy` · `page` — query · `size` — query · `from_` — query `from` · `to` — query · `initialized_from` — query `initializedFrom` · `initialized_to` — query `initializedTo` · `updated_from` — query `updatedFrom` · `updated_to` — query `updatedTo` · `topic` — query · `category` — query · `taxonomy` — query · `source` — query · `source_group` — query `sourceGroup` · `min_unique_sources` — query `minUniqueSources` · `min_source_diversity` — query `minSourceDiversity` · `person_wikidata_id` — query `personWikidataId` · `person_name` — query `personName` · `company_id` — query `companyId` · `company_name` — query `companyName` · `company_domain` — query `companyDomain` · `company_symbol` — query `companySymbol` · `company_isin` — query `companyIsin` · `company_symbol_isin` — query `companySymbolIsin` · `country` — query · `state` — query · `city` — query · `area` — query · `min_cluster_size` — query `minClusterSize` · `max_cluster_size` — query `maxClusterSize` · `name_exists` — query `nameExists` · `positive_sentiment_from` — query `positiveSentimentFrom` · `positive_sentiment_to` — query `positiveSentimentTo` · `neutral_sentiment_from` — query `neutralSentimentFrom` · `neutral_sentiment_to` — query `neutralSentimentTo` · `negative_sentiment_from` — query `negativeSentimentFrom` · `negative_sentiment_to` — query `negativeSentimentTo` · `show_story_page_info` — query `showStoryPageInfo` · `show_num_results` — query `showNumResults` · `show_duplicates` — query `showDuplicates` · `show_highlighting` — query `showHighlighting` · `highlight_fragment_size` — query `highlightFragmentSize` · `highlight_num_fragments` — query `highlightNumFragments` · `highlight_pre_tag` — query `highlightPreTag` · `highlight_post_tag` — query `highlightPostTag` · `highlight_q` — query `highlightQ` · `expand_articles` — query `expandArticles`
- **Returns (parsed)**: `StorySearchResult`
- **Returns (raw)**: `ApiResult[StorySearchResult, SearchStoriesErrorBody]`
- **Error**: `SearchStoriesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ClustersListSortByOrStr` | `perigon/models/enums/clusters_list_sort_by.py` |
| `StorySearchResult` | `perigon/models/story_search_result.py` |
| `SearchStoriesErrorBody` | `perigon/errors/search_stories_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.submit_article_refresh_job

- **Route**: `POST /v1/articles/refresh/jobs`
- **Auth**: `api_key_auth`
- **Signature**: `def submit_article_refresh_job(body: ArticleRefreshSubmitRequest | ArticleRefreshSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ArticleRefreshJobResponse`
- **Returns (raw)**: `ApiResult[ArticleRefreshJobResponse, SubmitArticleRefreshJobErrorBody]`
- **Error**: `SubmitArticleRefreshJobErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArticleRefreshSubmitRequest` | `perigon/models/article_refresh_submit_request.py` |
| `ArticleRefreshSubmitRequestDict` | `perigon/models/article_refresh_submit_request.py` |
| `ArticleRefreshJobResponse` | `perigon/models/article_refresh_job_response.py` |
| `SubmitArticleRefreshJobErrorBody` | `perigon/errors/submit_article_refresh_job_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

### client.news_stories.vector_search_articles

- **Route**: `POST /v1/vector/news/all`
- **Auth**: `api_key_auth`
- **Signature**: `def vector_search_articles(body: ArticleSearchParams | ArticleSearchParamsDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ArticlesVectorSearchResult`
- **Returns (raw)**: `ApiResult[ArticlesVectorSearchResult, VectorSearchArticlesErrorBody]`
- **Error**: `VectorSearchArticlesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ArticleSearchParams` | `perigon/models/article_search_params.py` |
| `ArticleSearchParamsDict` | `perigon/models/article_search_params.py` |
| `ArticlesVectorSearchResult` | `perigon/models/articles_vector_search_result.py` |
| `VectorSearchArticlesErrorBody` | `perigon/errors/vector_search_articles_error.py` |
| `ErrorResponse` | `perigon/models/error_response.py` |

