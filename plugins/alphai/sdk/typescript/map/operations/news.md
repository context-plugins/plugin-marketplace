<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `src/resources/news.ts` · 9 operations · Request and error types: namespace `News`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `alph-ai`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiNews

- **Signature**: `getApiNews(request?: News.GetApiNewsRequest, options?: RequestOptions): ApiPromise<NewsPagination, News.GetApiNewsError>`
- **Wire**: `GET /api/news/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsPagination`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [403] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [409] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsRequest` (13):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `symbol` | `query` | — | `string` | no | — |
| `category` | `query` | — | `NewsCategory[]` | no | — |
| `excludeCategories` | `query` | `exclude_categories` | `NewsCategory[]` | no | — |
| `minRelevance` | `query` | `min_relevance` | `number` | no | `4` |
| `pageSize` | `query` | `page_size` | `number` | no | `10` |
| `collapse` | `query` | — | `Collapse` | no | — |
| `collapseStories` | `query` | `collapse_stories` | `boolean` | no | `false` |
| `sort` | `query` | — | `Sort1` | no | `Sort1.Published` |
| `fromDate` | `query` | `from_date` | `Date` (date-time) | no | — |
| `toDate` | `query` | `to_date` | `Date` (date-time) | no | — |
| `sourceType` | `query` | `source_type` | `NewsSourceType[]` | no | — |
| `item` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewsCategory` | `newsCategorySchema` | `src/models/news-category.ts` |
| `Collapse` | `collapseSchema` | `src/models/collapse.ts` |
| `Sort1` | `sort1Schema` | `src/models/sort1.ts` |
| `NewsSourceType` | `newsSourceTypeSchema` | `src/models/news-source-type.ts` |
| `NewsPagination` | `newsPaginationSchema` | `src/models/news-pagination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsBrief

- **Signature**: `getApiNewsBrief(request: News.GetApiNewsBriefRequest, options?: RequestOptions): ApiPromise<WatchlistBriefDto, News.GetApiNewsBriefError>`
- **Wire**: `GET /api/news/brief/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WatchlistBriefDto`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsBriefError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsBriefRequest` (3):

| Field | Channel | Type | Req | Default | Style |
| --- | --- | --- | --- | --- | --- |
| `tickers` | `query` | `string[]` | yes | — | `csv` |
| `hours` | `query` | `number` | no | `24` | — |
| `limit` | `query` | `number` | no | `20` | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `WatchlistBriefDto` | `watchlistBriefDtoSchema` | `src/models/watchlist-brief-dto.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsByUid

- **Signature**: `getApiNewsByUid(request: News.GetApiNewsByUidRequest, options?: RequestOptions): ApiPromise<RichNewsArticle, News.GetApiNewsByUidError>`
- **Wire**: `GET /api/news/{uid}/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RichNewsArticle`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsByUidError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsByUidRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RichNewsArticle` | `richNewsArticleSchema` | `src/models/rich-news-article.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsByUidRelated

- **Signature**: `getApiNewsByUidRelated(request: News.GetApiNewsByUidRelatedRequest, options?: RequestOptions): ApiPromise<ApiNewsRelatedResponse, News.GetApiNewsByUidRelatedError>`
- **Wire**: `GET /api/news/{uid}/related/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiNewsRelatedResponse`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsByUidRelatedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [404] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsByUidRelatedRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `uid` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiNewsRelatedResponse` | `apiNewsRelatedResponseSchema` | `src/models/api-news-related-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsInsider

- **Signature**: `getApiNewsInsider(request?: News.GetApiNewsInsiderRequest, options?: RequestOptions): ApiPromise<NewsPagination, News.GetApiNewsInsiderError>`
- **Wire**: `GET /api/news/insider/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsPagination`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsInsiderError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [403] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [409] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsInsiderRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `symbol` | `query` | — | `string` | no | — |
| `minRelevance` | `query` | `min_relevance` | `number` | no | `4` |
| `is10B51` | `query` | `is_10b5_1` | `boolean` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `10` |
| `sort` | `query` | — | `Sort1` | no | `Sort1.Published` |
| `fromDate` | `query` | `from_date` | `Date` (date-time) | no | — |
| `toDate` | `query` | `to_date` | `Date` (date-time) | no | — |
| `format` | `query` | — | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort1` | `sort1Schema` | `src/models/sort1.ts` |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `NewsPagination` | `newsPaginationSchema` | `src/models/news-pagination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsInsiderClusters

- **Signature**: `getApiNewsInsiderClusters(request?: News.GetApiNewsInsiderClustersRequest, options?: RequestOptions): ApiPromise<InsiderClustersPage, News.GetApiNewsInsiderClustersError>`
- **Wire**: `GET /api/news/insider/clusters/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsiderClustersPage`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsInsiderClustersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [403] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsInsiderClustersRequest` (8):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `days` | `query` | — | `number` | no | `30` |
| `minBuyers` | `query` | `min_buyers` | `number` | no | `2` |
| `minUsd` | `query` | `min_usd` | `number` | no | — |
| `pattern` | `query` | — | `Pattern1` | no | `Pattern1.OpenMarket` |
| `symbol` | `query` | — | `string` | no | — |
| `sort` | `query` | — | `Sort3` | no | `Sort3.Recent` |
| `cursor` | `query` | — | `string` | no | — |
| `pageSize` | `query` | `page_size` | `number` | no | `10` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Pattern1` | `pattern1Schema` | `src/models/pattern1.ts` |
| `Sort3` | `sort3Schema` | `src/models/sort3.ts` |
| `InsiderClustersPage` | `insiderClustersPageSchema` | `src/models/insider-clusters-page.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsMacro

- **Signature**: `getApiNewsMacro(request?: News.GetApiNewsMacroRequest, options?: RequestOptions): ApiPromise<NewsPagination, News.GetApiNewsMacroError>`
- **Wire**: `GET /api/news/macro/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsPagination`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsMacroError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [403] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [409] `Error` · `"error5"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsMacroRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `category` | `query` | — | `string` | no | — |
| `minRelevance` | `query` | `min_relevance` | `number` | no | `4` |
| `pageSize` | `query` | `page_size` | `number` | no | `10` |
| `sort` | `query` | — | `Sort1` | no | `Sort1.Published` |
| `fromDate` | `query` | `from_date` | `Date` (date-time) | no | — |
| `toDate` | `query` | `to_date` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort1` | `sort1Schema` | `src/models/sort1.ts` |
| `NewsPagination` | `newsPaginationSchema` | `src/models/news-pagination.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getApiNewsSearch

- **Signature**: `getApiNewsSearch(request: News.GetApiNewsSearchRequest, options?: RequestOptions): ApiPromise<NewsSearchPage, News.GetApiNewsSearchError>`
- **Wire**: `GET /api/news/search/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NewsSearchPage`
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [429] `Error` · `"apiNewsSearch503Error1"` [503] `ApiNewsSearch503Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `News.GetApiNewsSearchRequest` (12):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | yes | — |
| `cursor` | `query` | — | `string` | no | — |
| `symbol` | `query` | — | `string` | no | — |
| `category` | `query` | — | `NewsCategory[]` | no | — |
| `sourceType` | `query` | `source_type` | `SourceType[]` | no | — |
| `item` | `query` | — | `string` | no | — |
| `minRelevance` | `query` | `min_relevance` | `number` | no | `4` |
| `pageSize` | `query` | `page_size` | `number` | no | `10` |
| `collapse` | `query` | — | `Collapse` | no | — |
| `collapseStories` | `query` | `collapse_stories` | `boolean` | no | `false` |
| `fromDate` | `query` | `from_date` | `Date` (date-time) | no | — |
| `toDate` | `query` | `to_date` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewsCategory` | `newsCategorySchema` | `src/models/news-category.ts` |
| `SourceType` | `sourceTypeSchema` | `src/models/source-type.ts` |
| `Collapse` | `collapseSchema` | `src/models/collapse.ts` |
| `NewsSearchPage` | `newsSearchPageSchema` | `src/models/news-search-page.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ApiNewsSearch503Error1` | `apiNewsSearch503Error1Schema` | `src/models/api-news-search503-error1.ts` |

### getApiNewsTrending

- **Signature**: `getApiNewsTrending(options?: RequestOptions): ApiPromise<RichNewsArticle[], News.GetApiNewsTrendingError>`
- **Wire**: `GET /api/news/trending/`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RichNewsArticle[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AlphAiError` with `kind: "api"`, an instance of `News.GetApiNewsTrendingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `RichNewsArticle` | `richNewsArticleSchema` | `src/models/rich-news-article.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

