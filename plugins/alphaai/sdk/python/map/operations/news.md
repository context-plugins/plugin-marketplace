<!-- Generated file — do not edit; regenerated with the SDK. -->

# News — operations

Accessor: `client.news` · Source: `alpha_ai/apis/news.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.news.get_api_news

- **Route**: `GET /api/news/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news(*, cursor: str | None = None, symbol: str | None = None, category: list[NewsCategoryOrStr] | None = None, exclude_categories: list[NewsCategoryOrStr] | None = None, min_relevance: int | None = 4, page_size: int | None = 10, collapse: CollapseOrStr | None = None, collapse_stories: bool | None = False, sort: Sort1OrStr | None = Sort1.PUBLISHED, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, source_type: list[NewsSourceTypeOrStr] | None = None, item: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `symbol` — query · `category` — query · `exclude_categories` — query · `min_relevance` — query · `page_size` — query · `collapse` — query · `collapse_stories` — query · `sort` — query · `from_date` — query · `to_date` — query · `source_type` — query · `item` — query
- **Returns (parsed)**: `NewsPagination`
- **Returns (raw)**: `ApiResult[NewsPagination, GetApiNewsErrorBody]`
- **Error**: `GetApiNewsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 409, 429, 503] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `NewsCategoryOrStr` | `alpha_ai/models/enums/news_category.py` |
| `CollapseOrStr` | `alpha_ai/models/enums/collapse.py` |
| `Sort1OrStr` | `alpha_ai/models/enums/sort1.py` |
| `NewsSourceTypeOrStr` | `alpha_ai/models/enums/news_source_type.py` |
| `NewsPagination` | `alpha_ai/models/news_pagination.py` |
| `GetApiNewsErrorBody` | `alpha_ai/errors/get_api_news_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_brief

- **Route**: `GET /api/news/brief/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_brief(tickers: list[str], *, hours: int | None = 24, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `tickers`
- **Params**: `tickers` — query · `hours` — query · `limit` — query
- **Returns (parsed)**: `WatchlistBriefDto`
- **Returns (raw)**: `ApiResult[WatchlistBriefDto, GetApiNewsBriefErrorBody]`
- **Error**: `GetApiNewsBriefErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `WatchlistBriefDto` | `alpha_ai/models/watchlist_brief_dto.py` |
| `GetApiNewsBriefErrorBody` | `alpha_ai/errors/get_api_news_brief_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_by_uid

- **Route**: `GET /api/news/{uid}/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_by_uid(uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`
- **Params**: `uid` — path
- **Returns (parsed)**: `RichNewsArticle`
- **Returns (raw)**: `ApiResult[RichNewsArticle, GetApiNewsByUidErrorBody]`
- **Error**: `GetApiNewsByUidErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RichNewsArticle` | `alpha_ai/models/rich_news_article.py` |
| `GetApiNewsByUidErrorBody` | `alpha_ai/errors/get_api_news_by_uid_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_by_uid_related

- **Route**: `GET /api/news/{uid}/related/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_by_uid_related(uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `uid`
- **Params**: `uid` — path
- **Returns (parsed)**: `ApiNewsRelatedResponse`
- **Returns (raw)**: `ApiResult[ApiNewsRelatedResponse, GetApiNewsByUidRelatedErrorBody]`
- **Error**: `GetApiNewsByUidRelatedErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiNewsRelatedResponse` | `alpha_ai/models/api_news_related_response.py` |
| `GetApiNewsByUidRelatedErrorBody` | `alpha_ai/errors/get_api_news_by_uid_related_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_insider

- **Route**: `GET /api/news/insider/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_insider(*, cursor: str | None = None, symbol: str | None = None, min_relevance: int | None = 4, is_10b5_1: bool | None = None, page_size: int | None = 10, sort: Sort1OrStr | None = Sort1.PUBLISHED, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `symbol` — query · `min_relevance` — query · `is_10b5_1` — query · `page_size` — query · `sort` — query · `from_date` — query · `to_date` — query · `format_` — query `format`
- **Returns (parsed)**: `NewsPagination`
- **Returns (raw)**: `ApiResult[NewsPagination, GetApiNewsInsiderErrorBody]`
- **Error**: `GetApiNewsInsiderErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 409, 429, 503] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `Sort1OrStr` | `alpha_ai/models/enums/sort1.py` |
| `FormatOrStr` | `alpha_ai/models/enums/format.py` |
| `NewsPagination` | `alpha_ai/models/news_pagination.py` |
| `GetApiNewsInsiderErrorBody` | `alpha_ai/errors/get_api_news_insider_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_insider_clusters

- **Route**: `GET /api/news/insider/clusters/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_insider_clusters(*, days: int | None = 30, min_buyers: int | None = 2, min_usd: int | None = None, pattern: Pattern1OrStr | None = Pattern1.OPEN_MARKET, symbol: str | None = None, sort: Sort3OrStr | None = Sort3.RECENT, cursor: str | None = None, page_size: int | None = 10, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `days` — query · `min_buyers` — query · `min_usd` — query · `pattern` — query · `symbol` — query · `sort` — query · `cursor` — query · `page_size` — query
- **Returns (parsed)**: `InsiderClustersPage`
- **Returns (raw)**: `ApiResult[InsiderClustersPage, GetApiNewsInsiderClustersErrorBody]`
- **Error**: `GetApiNewsInsiderClustersErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `Pattern1OrStr` | `alpha_ai/models/enums/pattern1.py` |
| `Sort3OrStr` | `alpha_ai/models/enums/sort3.py` |
| `InsiderClustersPage` | `alpha_ai/models/insider_clusters_page.py` |
| `GetApiNewsInsiderClustersErrorBody` | `alpha_ai/errors/get_api_news_insider_clusters_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_macro

- **Route**: `GET /api/news/macro/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_macro(*, cursor: str | None = None, category: str | None = None, min_relevance: int | None = 4, page_size: int | None = 10, sort: Sort1OrStr | None = Sort1.PUBLISHED, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `cursor` — query · `category` — query · `min_relevance` — query · `page_size` — query · `sort` — query · `from_date` — query · `to_date` — query
- **Returns (parsed)**: `NewsPagination`
- **Returns (raw)**: `ApiResult[NewsPagination, GetApiNewsMacroErrorBody]`
- **Error**: `GetApiNewsMacroErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 409, 429, 503] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `Sort1OrStr` | `alpha_ai/models/enums/sort1.py` |
| `NewsPagination` | `alpha_ai/models/news_pagination.py` |
| `GetApiNewsMacroErrorBody` | `alpha_ai/errors/get_api_news_macro_error.py` |
| `Error` | `alpha_ai/models/error.py` |

### client.news.get_api_news_search

- **Route**: `GET /api/news/search/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_search(q: str, *, cursor: str | None = None, symbol: str | None = None, category: list[NewsCategoryOrStr] | None = None, source_type: list[SourceTypeOrStr] | None = None, item: str | None = None, min_relevance: int | None = 4, page_size: int | None = 10, collapse: CollapseOrStr | None = None, collapse_stories: bool | None = False, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `cursor` — query · `symbol` — query · `category` — query · `source_type` — query · `item` — query · `min_relevance` — query · `page_size` — query · `collapse` — query · `collapse_stories` — query · `from_date` — query · `to_date` — query
- **Returns (parsed)**: `NewsSearchPage`
- **Returns (raw)**: `ApiResult[NewsSearchPage, GetApiNewsSearchErrorBody]`
- **Error**: `GetApiNewsSearchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429] · `ApiNewsSearch503Error1` [503] · `RawError` [400, anything unmapped]

| Type | Source |
| --- | --- |
| `NewsCategoryOrStr` | `alpha_ai/models/enums/news_category.py` |
| `SourceTypeOrStr` | `alpha_ai/models/enums/source_type.py` |
| `CollapseOrStr` | `alpha_ai/models/enums/collapse.py` |
| `NewsSearchPage` | `alpha_ai/models/news_search_page.py` |
| `GetApiNewsSearchErrorBody` | `alpha_ai/errors/get_api_news_search_error.py` |
| `Error` | `alpha_ai/models/error.py` |
| `ApiNewsSearch503Error1` | `alpha_ai/models/api_news_search503_error1.py` |

### client.news.get_api_news_trending

- **Route**: `GET /api/news/trending/`
- **Auth**: `api_key`
- **Signature**: `def get_api_news_trending(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[RichNewsArticle]`
- **Returns (raw)**: `ApiResult[list[RichNewsArticle], GetApiNewsTrendingErrorBody]`
- **Error**: `GetApiNewsTrendingErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RichNewsArticle` | `alpha_ai/models/rich_news_article.py` |
| `GetApiNewsTrendingErrorBody` | `alpha_ai/errors/get_api_news_trending_error.py` |
| `Error` | `alpha_ai/models/error.py` |

