<!-- Generated file — do not edit; regenerated with the SDK. -->

# ArticlesApi — operations

Accessor: `client.articles_api` · Source: `nordic_financial_news/apis/articles_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.articles_api.get_api_v1_articles

- **Route**: `GET /api/v1/articles`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_articles(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, sort: SortOrStr | None = None, mode: ModeOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, source_type: str | None = None, ticker: str | None = None, company: str | None = None, exchange: str | None = None, market: str | None = None, domicile: str | None = None, index: str | None = None, sector: str | None = None, content_type: str | None = None, published_after: str | None = None, published_before: str | None = None, listed: str | None = None, watchlist: str | None = None, primary_only: bool | None = None, include_peripheral: bool | None = None, ids: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query · `fields` — query · `updated_after` — query · `q` — query · `sort` — query · `mode` — query · `country` — query · `category` — query · `sources` — query · `source_type` — query · `ticker` — query · `company` — query · `exchange` — query · `market` — query · `domicile` — query · `index` — query · `sector` — query · `content_type` — query · `published_after` — query · `published_before` — query · `listed` — query · `watchlist` — query · `primary_only` — query · `include_peripheral` — query · `ids` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1ArticlesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ArticlesResponse1, GetApiV1ArticlesErrorBody]`
- **Error**: `GetApiV1ArticlesErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortOrStr` | `nordic_financial_news/models/enums/sort.py` |
| `ModeOrStr` | `nordic_financial_news/models/enums/mode.py` |
| `ApiV1ArticlesResponse1` | `nordic_financial_news/models/api_v1_articles_response1.py` |
| `GetApiV1ArticlesErrorBody` | `nordic_financial_news/errors/get_api_v1_articles_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

### client.articles_api.get_api_v1_articles_by_id

- **Route**: `GET /api/v1/articles/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_articles_by_id(id_: str, *, include_peripheral: bool | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `include_peripheral` — query · `if_none_match` — header `If-None-Match` · `if_modified_since` — header `If-Modified-Since`
- **Returns (parsed)**: `ApiV1ArticlesResponse`
- **Returns (raw)**: `ApiResult[ApiV1ArticlesResponse, GetApiV1ArticlesByIdErrorBody]`
- **Error**: `GetApiV1ArticlesByIdErrorBody` — **Case A (typed)**
- **Error arms**: `ProblemDetails` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ArticlesResponse` | `nordic_financial_news/models/api_v1_articles_response.py` |
| `GetApiV1ArticlesByIdErrorBody` | `nordic_financial_news/errors/get_api_v1_articles_by_id_error.py` |
| `ProblemDetails` | `nordic_financial_news/models/problem_details.py` |

