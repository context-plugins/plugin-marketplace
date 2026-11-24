# Raw Reference

**Raw** endpoints, reached through `with_raw_response`, return `ApiResult[T, E]` and never raise for an API error. For the parsed endpoints, see [API Reference](api-reference.md).

> Source: [NordicFinancialNewsClient](nordic_financial_news/client.py)

## ArticlesApi

> Source: [ArticlesApi](nordic_financial_news/apis/articles_api.py)

<details>
<summary><code>def get_api_v1_articles(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, sort: SortOrStr | None = None, mode: ModeOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, source_type: str | None = None, ticker: str | None = None, company: str | None = None, exchange: str | None = None, market: str | None = None, domicile: str | None = None, index: str | None = None, sector: str | None = None, content_type: str | None = None, published_after: str | None = None, published_before: str | None = None, listed: str | None = None, watchlist: str | None = None, primary_only: bool | None = None, include_peripheral: bool | None = None, ids: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ArticlesResponse1, GetApiV1ArticlesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of live articles ordered by publication date (newest first). Each article includes an English headline, a short summary, and key points, with `article_url` linking to the full original-language article at the source.

## Filtering
Supports filtering by country, category, source, company ticker, and content type. Use `GET /api/v1/sources` to discover source IDs for the `sources` filter. Use `ids` for batch lookup of specific articles.

## Search
Use `q` for full-text search: relevance-ranked by default, newest-first with `sort=latest`, or matched by meaning with `mode=semantic`.

## Polling for updates
Use `updated_after` for incremental syncing.

## Pagination
Responses include cursor-based pagination and support field projection to minimize payload size.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.articles_api.with_raw_response.get_api_v1_articles(
    limit=25,
    fields="id,title,published_at",
    updated_after="2024-01-01T00:00:00Z",
    q="Volvo earnings",
    sort=Sort.LATEST,
    mode=Mode.SEMANTIC,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    source_type="stock_exchange",
    ticker="VOLV-B",
    company="cmpny1234567",
    exchange="XSTO,XCSE",
    market="SE",
    domicile="SE",
    index="OMXS30",
    sector="Industrials",
    content_type="news,analysis",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
    listed="true",
    watchlist="wl_8fk2a1b3c4d5",
    primary_only=True,
    include_peripheral=True,
    ids="k3n9x2m7p4q1,b8v5c2z6w1r3",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ArticlesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ArticlesErrorBody
```

**Async**

```python
result = await async_client.articles_api.with_raw_response.get_api_v1_articles(
    limit=25,
    fields="id,title,published_at",
    updated_after="2024-01-01T00:00:00Z",
    q="Volvo earnings",
    sort=Sort.LATEST,
    mode=Mode.SEMANTIC,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    source_type="stock_exchange",
    ticker="VOLV-B",
    company="cmpny1234567",
    exchange="XSTO,XCSE",
    market="SE",
    domicile="SE",
    index="OMXS30",
    sector="Industrials",
    content_type="news,analysis",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
    listed="true",
    watchlist="wl_8fk2a1b3c4d5",
    primary_only=True,
    include_peripheral=True,
    ids="k3n9x2m7p4q1,b8v5c2z6w1r3",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ArticlesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ArticlesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of articles to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. Mutually exclusive with `q` unless `sort=latest` is also given.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Reduces payload size. Available fields: `id`, `title`, `article_url`, `published_at`, `updated_at`, `content_type`, `source`, `company_ids`, `country`, `category`.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only articles updated after this timestamp. Use this for incremental sync: store the timestamp of your last completed sync, then request only newer results on each poll. Results are ordered by `updated_at` ascending and are cursor-paginated. Follow `pagination.next_cursor`, resending the same `updated_after` value, until it is null. Only advance your stored timestamp once you have drained every page (see the Real-Time Updates guide at https://docs.nordicfinancialnews.com). Mutually exclusive with `sort=latest` (with or without `q`). An `updated_after` walk is always ordered by `updated_at`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text search query (2-200 characters). By default, results are ranked by relevance instead of publication date, as a single page with no cursor. Mutually exclusive with `cursor` unless `sort=latest` is also given. Disables caching.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](nordic_financial_news/models/enums/sort.py) \| None</code> | Result order for `q`. `relevance` (default) is a single relevance-ranked page with no cursor; it requires `q`, and returns 400 without one. `latest` turns `q` into a match filter under the endpoint's normal newest-first order (`published_at` descending) and the response is cursor-paginated like any other request; without `q` it is an accepted no-op (that's already the default order). Mutually exclusive with `updated_after`.<br>**Default**: <code>None</code> |
| <code>mode</code> | <code>[ModeOrStr](nordic_financial_news/models/enums/mode.py) \| None</code> | Set to `semantic` to match `q` by meaning rather than by keyword. The match runs over each article's translated title and summary, so it answers thematic questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion").<br><br>Requires `q`, is mutually exclusive with `sort`, `cursor`, `updated_after` and `ids`, and returns a single ranked page capped by `limit`; every other filter (`country`, `category`, `sources`, `source_type`, `ticker`, `company`, `market`, `domicile`, `exchange`, `index`, `sector`, `watchlist`, `content_type`, `published_after`/`published_before`) remains a hard filter applied before the match, not after.<br><br>Each article gains a `distance` (raw cosine, lower is closer, rounded to 4dp). Compare it only within one response, never across responses: the scale is model-dependent. Ranking also blends in a small recency bonus that `distance` does not reflect. A server-side relevance floor drops weak matches, so a page is frequently shorter than `limit` and can be empty. Raising `limit` does not recover floored rows.<br><br>On plans with restricted article access the response carries `plan_limited: true`; the plan article count cap does not apply in this mode, only the source and age restrictions.<br><br>The response `pagination` object carries `count` only. There is no `next_cursor`, since a distance ranking cannot be cursor-paginated, and the response is uncacheable (`Cache-Control: no-cache, no-store`, no `ETag`). If the query cannot be embedded the request returns `503` rather than silently falling back to keyword matching.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Filter by category `id` (from `GET /api/v1/categories`). Comma-separated for multiple (e.g. `cat_earnings1,cat_mna000001`); unknown ids are ignored.<br>**Default**: <code>None</code> |
| <code>sources</code> | <code>str \| None</code> | Comma-separated list of source IDs (max 25). Use `GET /api/v1/sources` to discover source IDs. Also accepts array form (`sources[]=id1&sources[]=id2`). Disabled sources resolve to empty results.<br>**Default**: <code>None</code> |
| <code>source_type</code> | <code>str \| None</code> | Filter by source type, comma-separated. Valid values: `news_publication`, `wire_service`, `press_release`, `government`, `trade_publication`, `blog`, `stock_exchange`, `research`. Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Filter by company stock ticker symbol, comma-separated for several (e.g. `VOLV-B` or `VOLV-B,ERIC-B`; matches any of them). Accepts full tickers with exchange suffix (e.g. `VOLV-B.ST`). Returns articles where the company is a principal association (subject, partner, investor, or competitor) — a company named only as the article's source, an advisor, or a passing mention does not match. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old ticker; the returned company `former_tickers` lists any such historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with `400` naming the unknown values. Combined with `company`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>company</code> | <code>str \| None</code> | Filter by company `id` (as returned by the companies endpoints), comma-separated for several (matches any of them). Complements `ticker`; use this to reach companies without a stock listing. Matches only the company's principal associations (subject, partner, investor, or competitor); a passing mention does not match. Every value must resolve, or the request is rejected with `400` naming the unknown ids. Combined with `ticker`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>str \| None</code> | Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g. `XSTO` for Nasdaq Stockholm, `XCSE` for Nasdaq Copenhagen, `XHEL` for Nasdaq Helsinki, `XOSL` for Oslo Børs). Returns articles about companies actively listed there. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify. Case-insensitive.<br>**Default**: <code>None</code> |
| <code>market</code> | <code>str \| None</code> | Filter to articles about companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from `country` (the source that reported it) and `domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify.<br>**Default**: <code>None</code> |
| <code>domicile</code> | <code>str \| None</code> | Filter to articles about companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use `market` for market-coverage questions. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify.<br>**Default**: <code>None</code> |
| <code>index</code> | <code>str \| None</code> | Filter by stock index id or symbol (e.g. `OMXS30`, `OMXC25`, `OMXH25`, `OBX`). Returns articles about companies in that index. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify. Case-insensitive for symbols.<br>**Default**: <code>None</code> |
| <code>sector</code> | <code>str \| None</code> | Filter by company sector. A company counts only through a principal association (subject, partner, investor, or competitor); a passing mention does not qualify. Case-sensitive; must exactly match one of: `Communication Services`, `Consumer Discretionary`, `Consumer Staples`, `Energy`, `Financials`, `Health Care`, `Industrials`, `Information Technology`, `Materials`, `Real Estate`, `Utilities`.<br>**Default**: <code>None</code> |
| <code>content_type</code> | <code>str \| None</code> | Filter by article content type, comma-separated. Valid values: `news`, `analysis`, `press_release`, `market_commentary`, `market_news`, `trading_halt`, `trading_event`, `other`. `GET /api/v1/meta` lists them as `content_types`. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>published_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns articles published on or after this timestamp.<br>**Default**: <code>None</code> |
| <code>published_before</code> | <code>str \| None</code> | ISO 8601 datetime. Returns articles published before this timestamp.<br>**Default**: <code>None</code> |
| <code>listed</code> | <code>str \| None</code> | When `true`, only return articles about at least one company with an active listing on any exchange, through a principal association (subject, partner, investor, or competitor). A passing mention does not qualify, and `include_peripheral` does not change this. A company whose listings are all delisted does not count. Hidden and unverified companies do not count.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>str \| None</code> | Restricts to articles about companies in a single watchlist, identified by its `id` (from the List Watchlists endpoint), through a principal association (subject, partner, investor, or competitor) — a passing mention does not qualify. An unknown id returns no articles. Requires `read:watchlist` scope.<br>**Default**: <code>None</code> |
| <code>primary_only</code> | <code>bool \| None</code> | When `true`, narrows further within the already-principal match, to only articles where the matched company (`ticker`, `company`, or `watchlist`) is the primary subject. Requires `ticker`, `company`, or `watchlist`, and returns 400 without one.<br>**Default**: <code>None</code> |
| <code>include_peripheral</code> | <code>bool \| None</code> | When `true`, widen the `ticker`, `company` and `watchlist` filters — and each article's `company_ids` — back to peripheral associations (a company named only as the article's source, an advisor, or a passing mention), which are otherwise excluded. Default `false` (principal-only: subject, partner, investor, competitor). `primary_only` still wins where it applies: the primary-subject restriction is kept even when peripheral is requested. Not honored on `GET /api/v1/search`.<br>**Default**: <code>None</code> |
| <code>ids</code> | <code>str \| None</code> | Comma-separated list of article IDs for batch lookup (max 100). Cannot be combined with `cursor`, `updated_after`, or `sort`. Returns a single page: `pagination` carries `count` only, with no `next_cursor`. IDs that don't resolve, or that your plan can't access, are omitted rather than rejected, so `count` can be less than the number of IDs sent. Key off each row's `id`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1ArticlesResponse1](nordic_financial_news/models/api_v1_articles_response1.py), [GetApiV1ArticlesErrorBody](nordic_financial_news/errors/get_api_v1_articles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ArticlesResponse1](nordic_financial_news/models/api_v1_articles_response1.py)</code> -- Articles retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1ArticlesErrorBody](nordic_financial_news/errors/get_api_v1_articles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_articles_by_id(id_: str, *, include_peripheral: bool | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ArticlesResponse, GetApiV1ArticlesByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the details of a single article: an English headline, a short summary, key points, and associated companies, along with `article_url` pointing to the full original-language article at the source. Supports conditional requests via `If-None-Match` for efficient caching.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.articles_api.with_raw_response.get_api_v1_articles_by_id("art_abc123def", include_peripheral=True)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ArticlesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ArticlesByIdErrorBody
```

**Async**

```python
result = await async_client.articles_api.with_raw_response.get_api_v1_articles_by_id(
    "art_abc123def", include_peripheral=True
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ArticlesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ArticlesByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Article ID (e.g. `art_abc123def`). |
| <code>include_peripheral</code> | <code>bool \| None</code> | When `true`, widen `companies` and `company_ids` back to peripheral associations (a company named only as the article's source, an advisor, or a passing mention), which are otherwise excluded. Default `false` (principal-only). Each `companies[]` entry always carries `association_tier` regardless of this parameter.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if the article has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1ArticlesResponse](nordic_financial_news/models/api_v1_articles_response.py), [GetApiV1ArticlesByIdErrorBody](nordic_financial_news/errors/get_api_v1_articles_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ArticlesResponse](nordic_financial_news/models/api_v1_articles_response.py)</code> -- Article found

**On `Failure`**: `error` is <code>[GetApiV1ArticlesByIdErrorBody](nordic_financial_news/errors/get_api_v1_articles_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CalendarEvents

> Source: [CalendarEvents](nordic_financial_news/apis/calendar_events.py)

<details>
<summary><code>def get_api_v1_calendar_events(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, ticker: str | None = None, company: str | None = None, country: str | None = None, market: str | None = None, domicile: str | None = None, exchange: str | None = None, index: str | None = None, sector: str | None = None, event_type: EventType1OrStr | None = None, status: Status1OrStr | None = None, scheduled_after: str | None = None, scheduled_before: str | None = None, watchlist: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CalendarEventsResponse, GetApiV1CalendarEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.), earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&A milestones (announcements, offer deadlines, completions).

Each event is tied to a single company and is sorted by `scheduled_at` ascending (soonest first). `scheduled_at` is always in UTC; for local-time display use the `local_time` field (`scheduled_at` rendered in the issuer's `timezone`, ISO 8601 with offset). Prefer `local_time` for the calendar date. A day-precision event is stored at local midnight, so its UTC `scheduled_at` falls on the previous day for ahead-of-UTC (Nordic) zones. `title` and `description` are always English regardless of the source-article language.

## Dividends
Each dividend row carries a nested `dividend` object with `ex_date`, `record_date`, `payment_date`, `declaration_date`, and `kind`. `scheduled_at` follows the priority **ex-date > record-date > payment-date**, whichever is explicitly stated, in that order. `dividend` is `null` for non-dividend events.

## Default window
By default only upcoming events are returned, from today onward by the issuer's local date (so events scheduled for today stay listed throughout the day). Pass `scheduled_after` or `scheduled_before` to query a specific window. This also surfaces past events, which carry `status: published` (events flip from `scheduled` to `published` ~2 days after their date). An `updated_after` sync walk also lifts this floor, since sync must cover past events too.

## Status
List endpoints return `scheduled` + `published` events and **exclude `cancelled`** by default. Pass the `status` parameter to filter (`status=cancelled` to retrieve cancellations, or `scheduled`/`published` to narrow). Discarded events are never returned. Note: a `scheduled → cancelled` transition is *not* surfaced by default `updated_after` polling. To track cancellations, poll with `status=cancelled` or subscribe to cancellation alerts.

## Filtering
Compose `ticker`, `country`, `market`, `domicile`, `exchange`, `index`, `sector`, and `event_type` to narrow the result set. All filters are intersected.

## Polling for updates
Use `updated_after` with the timestamp of your last completed sync to fetch only events that have changed since. Results are then ordered by `updated_at` ascending and cursor-paginated: follow `pagination.next_cursor`, resending the same `updated_after`, until it is null. Advance your stored timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar. `updated_after` returns 403 there, because the capped window is recomputed per request and a change feed over it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an old watermark returns history rather than only upcoming events. Updates to past events that occurred before your currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.

## Pagination
List responses include `pagination.next_cursor` when more pages are available. Pass it back as the `cursor` parameter on the next request. Cursors are opaque. Do not parse them.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. Otherwise the `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.calendar_events.with_raw_response.get_api_v1_calendar_events(
    limit=25,
    fields="title,event_type,scheduled_at,company_id,dividend",
    updated_after="2026-03-01T00:00:00Z",
    ticker="VOLV-B",
    company="cmpny1234567",
    country="SE",
    market="SE",
    domicile="SE",
    exchange="XSTO",
    index="OMXS30",
    sector="Industrials",
    status=Status1.CANCELLED,
    scheduled_after="2026-10-01",
    scheduled_before="2026-10-31",
    watchlist="wl_8fk2a1b3c4d5",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CalendarEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CalendarEventsErrorBody
```

**Async**

```python
result = await async_client.calendar_events.with_raw_response.get_api_v1_calendar_events(
    limit=25,
    fields="title,event_type,scheduled_at,company_id,dividend",
    updated_after="2026-03-01T00:00:00Z",
    ticker="VOLV-B",
    company="cmpny1234567",
    country="SE",
    market="SE",
    domicile="SE",
    exchange="XSTO",
    index="OMXS30",
    sector="Industrials",
    status=Status1.CANCELLED,
    scheduled_after="2026-10-01",
    scheduled_before="2026-10-31",
    watchlist="wl_8fk2a1b3c4d5",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CalendarEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CalendarEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of events to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. When continuing an `updated_after` sync, resend the same `updated_after` value alongside it.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Reduces payload size. `id` is always included. Available fields: `title`, `description`, `event_type`, `status`, `date_precision`, `fiscal_period`, `scheduled_at`, `timezone`, `local_time`, `scheduled_at_changed_at`, `source_article_id`, `source`, `company_id`, `company`, `country`, `dividend`, `updated_at`.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental sync: store the timestamp of your last completed sync and pass it on the next request. Results are ordered by `updated_at` ascending and cursor-paginated. Drain `pagination.next_cursor` before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor, so past events with newer updates are included.<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Filter by company stock ticker (e.g. `VOLV-B`), comma-separated for several (matches any of them). Also accepts exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with `400` naming the unknown values. A company outside the calendar's Nordic coverage resolves but returns no events. Combined with `company`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>company</code> | <code>str \| None</code> | Filter by company `id` (as returned by the companies endpoints), comma-separated for several (matches any of them). Complements `ticker`; use this to reach companies without a stock listing. Every value must resolve, or the request is rejected with `400` naming the unknown ids. A company outside the calendar's Nordic coverage resolves but returns no events. Combined with `ticker`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `DK`, `NO`, `FI`, `IS`). Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive. This is the event's country: the issuer's, with source-country fallback.<br>**Default**: <code>None</code> |
| <code>market</code> | <code>str \| None</code> | Filter to events for an issuer with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from `country` (the event's own country) and `domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers.<br>**Default**: <code>None</code> |
| <code>domicile</code> | <code>str \| None</code> | Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use `market` for market-coverage questions.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>str \| None</code> | Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g. `XSTO` for Nasdaq Stockholm, `XCSE` for Nasdaq Copenhagen, `XHEL` for Nasdaq Helsinki, `XOSL` for Oslo Børs, or `XSTO,XCSE`). Only events for an issuer with an active listing on the exchange match. Case-insensitive.<br>**Default**: <code>None</code> |
| <code>index</code> | <code>str \| None</code> | Filter by stock index id or symbol (e.g. `OMXS30`, `OMXC25`, `OMXH25`, `OBX`). Returns events only for companies in that index. Case-insensitive for symbols.<br>**Default**: <code>None</code> |
| <code>sector</code> | <code>str \| None</code> | Filter by company sector. Must exactly match one of the standard sector names: `Communication Services`, `Consumer Discretionary`, `Consumer Staples`, `Energy`, `Financials`, `Health Care`, `Industrials`, `Information Technology`, `Materials`, `Real Estate`, `Utilities`.<br>**Default**: <code>None</code> |
| <code>event_type</code> | <code>[EventType1OrStr](nordic_financial_news/models/enums/event_type1.py) \| None</code> | Filter by calendar event type. Accepts a single value or a comma-separated list for multiple types. These are calendar event types (underscored) and are the only values accepted here. The hyphenated Events taxonomy slugs from `GET /api/v1/event_types` belong to `GET /api/v1/events` and are rejected. A few spellings overlap across the two vocabularies (e.g. `delisting`) while denoting different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies a narrative event that already happened.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1OrStr](nordic_financial_news/models/enums/status1.py) \| None</code> | Filter by lifecycle status. Omitted: returns `scheduled` + past `published` events and excludes `cancelled`. Pass `cancelled` to retrieve cancellations, or `scheduled`/`published` to narrow.<br>**Default**: <code>None</code> |
| <code>scheduled_after</code> | <code>str \| None</code> | Window start. A bare date (`YYYY-MM-DD`) means that calendar date in each issuer's own timezone, inclusive: `scheduled_after=2026-10-01&scheduled_before=2026-10-31` is October in every issuer's local calendar. An ISO 8601 datetime (`Z` or a UTC offset) means an exact UTC instant, at or after. Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.<br>**Default**: <code>None</code> |
| <code>scheduled_before</code> | <code>str \| None</code> | Window end. A bare date means that calendar date in each issuer's own timezone, inclusive. An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>str \| None</code> | Restricts to events for companies in a single watchlist, identified by its `id` (from the List Watchlists endpoint). An unknown id returns no events. Requires `read:watchlist` scope.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CalendarEventsResponse](nordic_financial_news/models/api_v1_calendar_events_response.py), [GetApiV1CalendarEventsErrorBody](nordic_financial_news/errors/get_api_v1_calendar_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CalendarEventsResponse](nordic_financial_news/models/api_v1_calendar_events_response.py)</code> -- Calendar events retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CalendarEventsErrorBody](nordic_financial_news/errors/get_api_v1_calendar_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 403 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_calendar_events_by_id(id_: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CalendarEventsResponse1, GetApiV1CalendarEventsByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.

On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns 403.

Responses are cached with `ETag` and `Last-Modified` headers and a `private, max-age=300` `Cache-Control`; clients can send `If-None-Match` or `If-Modified-Since` to receive a `304 Not Modified`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.calendar_events.with_raw_response.get_api_v1_calendar_events_by_id("cale_q3volvo1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CalendarEventsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CalendarEventsByIdErrorBody
```

**Async**

```python
result = await async_client.calendar_events.with_raw_response.get_api_v1_calendar_events_by_id("cale_q3volvo1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CalendarEventsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CalendarEventsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The calendar event ID, as returned in the `id` field of list responses. |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if the event has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CalendarEventsResponse1](nordic_financial_news/models/api_v1_calendar_events_response1.py), [GetApiV1CalendarEventsByIdErrorBody](nordic_financial_news/errors/get_api_v1_calendar_events_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CalendarEventsResponse1](nordic_financial_news/models/api_v1_calendar_events_response1.py)</code> -- Calendar event retrieved

**On `Failure`**: `error` is <code>[GetApiV1CalendarEventsByIdErrorBody](nordic_financial_news/errors/get_api_v1_calendar_events_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Categories

> Source: [Categories](nordic_financial_news/apis/categories.py)

<details>
<summary><code>def get_api_v1_categories(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CategoriesResponse, GetApiV1CategoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all enabled article categories, ordered alphabetically by name. Categories are used to classify articles and stories (e.g. Earnings, M&A, IPO). Use category IDs to filter articles and stories by topic.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.categories.with_raw_response.get_api_v1_categories(limit=25, fields="id,name")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CategoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CategoriesErrorBody
```

**Async**

```python
result = await async_client.categories.with_raw_response.get_api_v1_categories(limit=25, fields="id,name")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CategoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CategoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of categories to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include. Available fields: `id`, `name`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CategoriesResponse](nordic_financial_news/models/api_v1_categories_response.py), [GetApiV1CategoriesErrorBody](nordic_financial_news/errors/get_api_v1_categories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CategoriesResponse](nordic_financial_news/models/api_v1_categories_response.py)</code> -- Categories retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CategoriesErrorBody](nordic_financial_news/errors/get_api_v1_categories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CompaniesApi

> Source: [CompaniesApi](nordic_financial_news/apis/companies_api.py)

<details>
<summary><code>def get_api_v1_companies(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, q: str | None = None, mode: ModeOrStr | None = None, company: str | None = None, ticker: str | None = None, country: str | None = None, market: str | None = None, domicile: str | None = None, exchange: str | None = None, sector: str | None = None, listed: str | None = None, watchlist: str | None = None, is_active: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompaniesResponse, GetApiV1CompaniesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use `q` for full-text search across company names, ranked by relevance, or add `mode=semantic` to match `q` by meaning instead.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies_api.with_raw_response.get_api_v1_companies(
    limit=25,
    fields="id,name,ticker",
    q="Volvo",
    mode=Mode.SEMANTIC,
    company="cmpny1234567,cmpny7654321",
    ticker="VOLV-B,ERIC-B",
    country="SE",
    market="SE",
    domicile="SE",
    exchange="XSTO",
    sector="Financials",
    listed="true",
    watchlist="true",
    is_active="true",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesErrorBody
```

**Async**

```python
result = await async_client.companies_api.with_raw_response.get_api_v1_companies(
    limit=25,
    fields="id,name,ticker",
    q="Volvo",
    mode=Mode.SEMANTIC,
    company="cmpny1234567,cmpny7654321",
    ticker="VOLV-B,ERIC-B",
    country="SE",
    market="SE",
    domicile="SE",
    exchange="XSTO",
    sector="Financials",
    listed="true",
    watchlist="true",
    is_active="true",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of companies to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. Mutually exclusive with `q`.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Available fields: `id`, `name`, `slug`, `ticker`, `former_tickers`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text search query (2-200 characters). Searches company names and aliases. Results are ranked by relevance instead of alphabetical order. Mutually exclusive with `cursor`.<br>**Default**: <code>None</code> |
| <code>mode</code> | <code>[ModeOrStr](nordic_financial_news/models/enums/mode.py) \| None</code> | Set to `semantic` to match `q` by meaning rather than by name/ticker text. The match runs over each company's name, aliases, country, sector, industry and description, so it answers thematic questions a name match cannot ("defense contractors", "companies making battery cells").<br><br>Put geography in `market`, `domicile` or `country` rather than in `q`. A place name in `q` matches company names containing it ("Nordic ...", "Swedish ...") ahead of companies that actually do that thing.<br><br>Requires `q`, is mutually exclusive with `cursor`, and returns a single ranked page capped by `limit`; `company`, `ticker`, `country`, `market`, `domicile`, `exchange`, `sector`, `listed`, `watchlist` and `is_active` remain hard filters applied before the match, not after.<br><br>Each company gains a `distance` (raw cosine, lower is closer, rounded to 4dp). Compare it only within one response, never across responses: the scale is model-dependent. Ranking also blends in a small coverage bonus that `distance` does not reflect. A server-side relevance floor drops weak matches, so a page is frequently shorter than `limit` and can be empty. Raising `limit` does not recover floored rows.<br><br>The response `pagination` object carries `count` only. There is no `next_cursor`, since a distance ranking cannot be cursor-paginated, and the response is uncacheable (`Cache-Control: no-cache, no-store`, no `ETag`). If the query cannot be embedded the request returns `503` rather than silently falling back to name matching.<br>**Default**: <code>None</code> |
| <code>company</code> | <code>str \| None</code> | Resolve specific company `id` values, comma-separated (maximum 25). This is the batch-resolve path for the `company_id` and `company_ids` values returned by the articles, stories, events and calendar endpoints. Look up a whole page of them in one request instead of one `GET /companies/{identifier}` per company. Every id must resolve, or the request is rejected with `400` naming the unknown ids. Results are returned in name order, not the order requested, so key off each row's `id`. Combined with `ticker`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`) and resolves former tickers; matching is case-insensitive. Unlike `q` this is an exact filter, so it returns no near-matches and supports cursor pagination. Every ticker must resolve, or the request is rejected with `400` naming the unknown values. Combined with `company`, the two filters intersect. A ticker shared by more than one issuer resolves to every matching company, so a batch can return more rows than the number of tickers sent. `GET /companies/{identifier}` tie-breaks such a ticker to a single company, this filter does not.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Legal domicile, ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive. Synonym for `domicile` on this endpoint, kept for backward compatibility. If both `country` and `domicile` are sent, they intersect.<br>**Default**: <code>None</code> |
| <code>market</code> | <code>str \| None</code> | Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from `country`/`domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers.<br>**Default**: <code>None</code> |
| <code>domicile</code> | <code>str \| None</code> | Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). The canonical cross-surface name for what `country` already means on this endpoint; reaches unlisted companies and excludes foreign-domiciled but locally-listed issuers. Use `market` for market-coverage questions.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>str \| None</code> | Filter by exchange MIC code, comma-separated for multiple (e.g. `XSTO`, `XOSL,XCSE`). Only companies with an active listing on the exchange match.<br>**Default**: <code>None</code> |
| <code>sector</code> | <code>str \| None</code> | Filter by industry sector (e.g. `Financials`, `Industrials`, `Information Technology`).<br>**Default**: <code>None</code> |
| <code>listed</code> | <code>str \| None</code> | When `true`, only return companies with at least one active stock exchange listing.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>str \| None</code> | When `true`, only return companies in the authenticated user's watchlist. Requires `read:watchlist` scope.<br>**Default**: <code>None</code> |
| <code>is_active</code> | <code>str \| None</code> | Filter by active status. When `true`, only return active companies. When `false`, only return inactive companies.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CompaniesResponse](nordic_financial_news/models/api_v1_companies_response.py), [GetApiV1CompaniesErrorBody](nordic_financial_news/errors/get_api_v1_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompaniesResponse](nordic_financial_news/models/api_v1_companies_response.py)</code> -- Companies retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CompaniesErrorBody](nordic_financial_news/errors/get_api_v1_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_companies_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompaniesResponse1, GetApiV1CompaniesByIdentifierErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a single company, including description, sector, relationships, and stock listings. Look up by company ID (e.g. `comp_apple123`) or ticker symbol (e.g. `AAPL`, `VOLV-B`). Lookup also accepts the full ticker including exchange suffix (e.g. `VOLV-B.ST`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies_api.with_raw_response.get_api_v1_companies_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierErrorBody
```

**Async**

```python
result = await async_client.companies_api.with_raw_response.get_api_v1_companies_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup. |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CompaniesResponse1](nordic_financial_news/models/api_v1_companies_response1.py), [GetApiV1CompaniesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompaniesResponse1](nordic_financial_news/models/api_v1_companies_response1.py)</code> -- Company retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CompaniesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_companies_by_identifier_articles(identifier: str, *, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, sort: SortOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, source_type: str | None = None, content_type: str | None = None, published_after: str | None = None, published_before: str | None = None, primary_only: bool | None = None, include_peripheral: bool | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompaniesArticlesResponse, GetApiV1CompaniesByIdentifierArticlesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns articles where the company is a principal association (subject, partner, investor,
or competitor), ordered by publication date (newest first). An article where this company
is only the source, an advisor, or a passing mention is excluded.

## Parameters
Accepts the same `q`, `sort`, `fields`, `updated_after`, `country`, `category`, `sources`, `source_type`, `content_type`, `published_after` and `published_before` parameters as `GET /api/v1/articles`, with identical semantics, scoped to this company. `primary_only=true` narrows further within that principal set, to only articles where this company is the primary subject.

## Rejected parameters
`ticker`, `company`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and `sector` are rejected (400). The path already fixes the company; use `GET /api/v1/articles` to filter the full collection by them (`watchlist=false` and `listed` with any value other than `true` are ignored, as on the flat resource).

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_articles(
    "some example string",
    limit=25,
    fields="id,title,published_at",
    updated_after="2024-01-01T00:00:00Z",
    q="Volvo earnings",
    sort=Sort.LATEST,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    source_type="stock_exchange",
    content_type="news,analysis",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesArticlesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierArticlesErrorBody
```

**Async**

```python
result = await async_client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_articles(
    "some example string",
    limit=25,
    fields="id,title,published_at",
    updated_after="2024-01-01T00:00:00Z",
    q="Volvo earnings",
    sort=Sort.LATEST,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    source_type="stock_exchange",
    content_type="news,analysis",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesArticlesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierArticlesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup. |
| <code>limit</code> | <code>int \| None</code> | Number of articles to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response. Mutually exclusive with `q` unless `sort=latest` is also given.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Reduces payload size. Available fields: `id`, `title`, `article_url`, `published_at`, `updated_at`, `content_type`, `source`, `company_ids`, `country`, `category`.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only this company's articles updated after this timestamp. Use this for incremental sync: store the timestamp of your last completed sync, then request only newer results on each poll. Results are ordered by `updated_at` ascending and are cursor-paginated. Follow `pagination.next_cursor`, resending the same `updated_after` value, until it is null. Only advance your stored timestamp once you have drained every page. Mutually exclusive with `sort=latest` (with or without `q`). An `updated_after` walk is always ordered by `updated_at`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text search query (2-200 characters). By default, results are ranked by relevance instead of publication date, as a single page with no cursor. Mutually exclusive with `cursor` unless `sort=latest` is also given. Disables caching.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](nordic_financial_news/models/enums/sort.py) \| None</code> | Result order for `q`. `relevance` (default) is a single relevance-ranked page with no cursor; it requires `q`, and returns 400 without one. `latest` turns `q` into a match filter under the endpoint's normal newest-first order (`published_at` descending) and the response is cursor-paginated like any other request; without `q` it is an accepted no-op (that's already the default order). Mutually exclusive with `updated_after`.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Filter by category `id` (from `GET /api/v1/categories`). Comma-separated for multiple (e.g. `cat_earnings1,cat_mna000001`); unknown ids are ignored.<br>**Default**: <code>None</code> |
| <code>sources</code> | <code>str \| None</code> | Comma-separated list of source IDs (max 25). Use `GET /api/v1/sources` to discover source IDs. Also accepts array form (`sources[]=id1&sources[]=id2`). Disabled sources resolve to empty results.<br>**Default**: <code>None</code> |
| <code>source_type</code> | <code>str \| None</code> | Filter by source type, comma-separated. Valid values: `news_publication`, `wire_service`, `press_release`, `government`, `trade_publication`, `blog`, `stock_exchange`, `research`. Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>content_type</code> | <code>str \| None</code> | Filter by article content type, comma-separated. Valid values: `news`, `analysis`, `press_release`, `market_commentary`, `market_news`, `trading_halt`, `trading_event`, `other`. `GET /api/v1/meta` lists them as `content_types`. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>published_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns articles published on or after this timestamp.<br>**Default**: <code>None</code> |
| <code>published_before</code> | <code>str \| None</code> | ISO 8601 datetime. Returns articles published before this timestamp.<br>**Default**: <code>None</code> |
| <code>primary_only</code> | <code>bool \| None</code> | When `true`, narrows further within the already-principal match, to only articles where this company is the primary subject.<br>**Default**: <code>None</code> |
| <code>include_peripheral</code> | <code>bool \| None</code> | When `true`, widen this feed back to articles where the company is only a peripheral association (its source, an advisor, or a passing mention), which are otherwise excluded. Default `false` (principal-only). `primary_only` still keeps the primary-subject restriction even when peripheral is requested.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CompaniesArticlesResponse](nordic_financial_news/models/api_v1_companies_articles_response.py), [GetApiV1CompaniesByIdentifierArticlesErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_articles_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompaniesArticlesResponse](nordic_financial_news/models/api_v1_companies_articles_response.py)</code> -- Company articles retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CompaniesByIdentifierArticlesErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_articles_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_companies_by_identifier_calendar_events(identifier: str, *, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, status: Status1OrStr | None = None, event_type: EventType1OrStr | None = None, scheduled_after: str | None = None, scheduled_before: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompaniesCalendarEventsResponse, GetApiV1CompaniesByIdentifierCalendarEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and more), ordered by `scheduled_at` ascending. This is the same contract as `GET /api/v1/calendar_events`, scoped to a single company by the path.

## Default window
By default only upcoming events are returned; `scheduled_after`/`scheduled_before` or `updated_after` lift that floor, the same way they do on the flat resource.

## Plan availability
Not available on plans with a capped calendar. Use `GET /api/v1/calendar_events` for the upcoming-events preview instead.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_calendar_events(
    "some example string",
    limit=25,
    fields="title,event_type,scheduled_at,dividend",
    updated_after="2026-03-01T00:00:00Z",
    status=Status1.CANCELLED,
    scheduled_after="2026-10-01",
    scheduled_before="2026-10-31",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesCalendarEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierCalendarEventsErrorBody
```

**Async**

```python
result = await async_client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_calendar_events(
    "some example string",
    limit=25,
    fields="title,event_type,scheduled_at,dividend",
    updated_after="2026-03-01T00:00:00Z",
    status=Status1.CANCELLED,
    scheduled_after="2026-10-01",
    scheduled_before="2026-10-31",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesCalendarEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierCalendarEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup. |
| <code>limit</code> | <code>int \| None</code> | Number of events to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. When continuing an `updated_after` sync, resend the same `updated_after` value alongside it.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Reduces payload size. `id` is always included. Available fields: `title`, `description`, `event_type`, `status`, `date_precision`, `fiscal_period`, `scheduled_at`, `timezone`, `local_time`, `scheduled_at_changed_at`, `source_article_id`, `source`, `company_id`, `company`, `country`, `dividend`, `updated_at`.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for incremental sync: store the timestamp of your last completed sync and pass it on the next request. Results are ordered by `updated_at` ascending and cursor-paginated. Drain `pagination.next_cursor` before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor, so past events with newer updates are included.<br>**Default**: <code>None</code> |
| <code>status</code> | <code>[Status1OrStr](nordic_financial_news/models/enums/status1.py) \| None</code> | Filter by lifecycle status. Omitted: returns `scheduled` + past `published` events and excludes `cancelled`. Pass `cancelled` to retrieve cancellations, or `scheduled`/`published` to narrow.<br>**Default**: <code>None</code> |
| <code>event_type</code> | <code>[EventType1OrStr](nordic_financial_news/models/enums/event_type1.py) \| None</code> | Filter by calendar event type. Accepts a single value or a comma-separated list for multiple types. These are calendar event types (underscored) and are the only values accepted here. The hyphenated Events taxonomy slugs from `GET /api/v1/event_types` belong to `GET /api/v1/events` and are rejected. A few spellings overlap across the two vocabularies (e.g. `delisting`) while denoting different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies a narrative event that already happened.<br>**Default**: <code>None</code> |
| <code>scheduled_after</code> | <code>str \| None</code> | Window start. A bare date (`YYYY-MM-DD`) means that calendar date in each issuer's own timezone, inclusive: `scheduled_after=2026-10-01&scheduled_before=2026-10-31` is October in every issuer's local calendar. An ISO 8601 datetime (`Z` or a UTC offset) means an exact UTC instant, at or after. Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.<br>**Default**: <code>None</code> |
| <code>scheduled_before</code> | <code>str \| None</code> | Window end. A bare date means that calendar date in each issuer's own timezone, inclusive. An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter disables the default upcoming-only floor, allowing past events to be returned.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CompaniesCalendarEventsResponse](nordic_financial_news/models/api_v1_companies_calendar_events_response.py), [GetApiV1CompaniesByIdentifierCalendarEventsErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_calendar_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompaniesCalendarEventsResponse](nordic_financial_news/models/api_v1_companies_calendar_events_response.py)</code> -- Company calendar events retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CompaniesByIdentifierCalendarEventsErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_calendar_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 403 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_companies_by_identifier_events(identifier: str, *, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, event_type: str | None = None, significance: str | None = None, sort: str | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, first_reported_after: str | None = None, first_reported_before: str | None = None, last_article_after: str | None = None, last_article_before: str | None = None, window: str | None = None, source_type: str | None = None, content_type: str | None = None, related_to: str | None = None, include_peripheral: bool | None = None, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompaniesEventsResponse, GetApiV1CompaniesByIdentifierEventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns Events this company participates in, newest first. This is the same contract as `GET /api/v1/events`, scoped to a single company by the path. Plan gating, ordering, `updated_after` sync (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its documentation for the full detail.

A tombstone respects the same event-grain filters as the flat resource, including `last_article_after`/`before`. A merged event's `last_article_at` freezes at merge time, so those filter a tombstone against that frozen value rather than against when the merge happened. `window` cannot be used for sync polling (mutually exclusive with `updated_after`).

Parameters that name or describe a different company or listing are rejected here with `400 invalid-parameter`: `company`, `ticker`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and `sector`. The path already fixes the company; use `GET /api/v1/events` to filter the full collection by any of them. `watchlist=false` and `listed` with any value other than `true` remain inert. `mode` is rejected with `400 invalid-parameter`; use `GET /api/v1/events?company={company_id}&q={query}&mode=semantic` to search one company's events by meaning.

Responses carry an `ETag` and `Cache-Control: private, max-age=0, must-revalidate`; send the ETag back as `If-None-Match` to receive a `304 Not Modified`. There is no `Last-Modified`, so `If-Modified-Since` alone never revalidates. This is the same contract, and the same reason, as `GET /api/v1/events`. Requests carrying `q` or `updated_after` are not cached and return `Cache-Control: no-cache, no-store`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_events(
    "some example string",
    limit=25,
    fields="title,status,article_count",
    updated_after="2026-03-01T00:00:00Z",
    q="earnings",
    event_type="earnings-report",
    significance="notable",
    sort="significance",
    country="SE",
    category="cat_earnings1",
    sources="src123456789",
    first_reported_after="2026-01-01T00:00:00Z",
    first_reported_before="2026-12-31T23:59:59Z",
    last_article_after="2026-03-01T00:00:00Z",
    last_article_before="2026-03-02T00:00:00Z",
    window="24h",
    source_type="stock_exchange",
    content_type="press_release",
    related_to="evtcorswg01",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierEventsErrorBody
```

**Async**

```python
result = await async_client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_events(
    "some example string",
    limit=25,
    fields="title,status,article_count",
    updated_after="2026-03-01T00:00:00Z",
    q="earnings",
    event_type="earnings-report",
    significance="notable",
    sort="significance",
    country="SE",
    category="cat_earnings1",
    sources="src123456789",
    first_reported_after="2026-01-01T00:00:00Z",
    first_reported_before="2026-12-31T23:59:59Z",
    last_article_after="2026-03-01T00:00:00Z",
    last_article_before="2026-03-02T00:00:00Z",
    window="24h",
    source_type="stock_exchange",
    content_type="press_release",
    related_to="evtcorswg01",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesEventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierEventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup. |
| <code>limit</code> | <code>int \| None</code> | Number of events to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response. Works with `q` too; `q` is a filter, not a separate search mode. When continuing an `updated_after` sync, resend the same `updated_after` value.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. `id` is always included.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only this company's events updated after this timestamp, including merge/removal tombstones. Use for incremental sync.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text filter over the event's own title and summary as well as its live member articles' indexed content (title, summary, key points, plus tagged company names and key facts), so an event can match on a company its coverage only tags. Matches stay in the default feed order (most recently reported first) and are cursor-paginated like any other request; combine with `window`/`last_article_after` for "latest on X".<br>**Default**: <code>None</code> |
| <code>event_type</code> | <code>str \| None</code> | Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from `GET /api/v1/event_types` and are the only values accepted here. The underscored calendar `event_type` values used by `GET /api/v1/calendar_events` are rejected. A few spellings overlap across the two vocabularies (e.g. `delisting`) while denoting different things. An unrecognized slug returns 400 naming the bad slug(s).<br>**Default**: <code>None</code> |
| <code>significance</code> | <code>str \| None</code> | Editorial importance, the feed's materiality threshold, comma-separated (e.g. `notable,routine`). Valid values: `notable` (material, front-page-worthy events), `routine` (ledger records: routine filings, scheduled disclosures), `commentary` (opinion/analysis pieces). Use `significance=notable` to restrict the feed to material events. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort order. `latest` (default) sorts most recently reported first, the unfiltered feed order. `significance` groups events into 3 coarse editorial tiers (`notable`, then `routine`, then `commentary`), most recently reported first within each tier; expect large ties within a tier. A mid-walk `routine`→`notable` escalation may be skipped, since the ordering is a best-effort snapshot. For a broad importance filter, prefer `significance=notable` with the default sort; page 1 is identical. Mutually exclusive with `updated_after` (an unrecognized value, or either sort value combined with `updated_after`, returns 400).<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated). Applied at the article grain, so sync tombstones do not respect it.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Filter to events with a live member article in any of these categories, by their `id` (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not respect it.<br>**Default**: <code>None</code> |
| <code>sources</code> | <code>str \| None</code> | Filter to events with a live member article from these sources, by their `id` (comma-separated, max 25). Applied at the article grain, so sync tombstones do not respect it.<br>**Default**: <code>None</code> |
| <code>first_reported_after</code> | <code>str \| None</code> | ISO 8601 datetime. Only events first reported at or after this time.<br>**Default**: <code>None</code> |
| <code>first_reported_before</code> | <code>str \| None</code> | ISO 8601 datetime. Only events first reported before this time.<br>**Default**: <code>None</code> |
| <code>last_article_after</code> | <code>str \| None</code> | ISO 8601 datetime. Only events whose most recent activity (`last_article_at`, or `first_reported_at` when that is null) is at or after this time. Mutually exclusive with `window`.<br>**Default**: <code>None</code> |
| <code>last_article_before</code> | <code>str \| None</code> | ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually exclusive with `window`.<br>**Default**: <code>None</code> |
| <code>window</code> | <code>str \| None</code> | Relative shorthand for `last_article_after`, e.g. `8h`, `24h`, `7d` (hours or days only, max 365d equivalent). Evaluated per request against the server clock. Mutually exclusive with `last_article_after`, `last_article_before`, and `updated_after`.<br>**Default**: <code>None</code> |
| <code>source_type</code> | <code>str \| None</code> | Filter to events with a live member article from this source type, comma-separated. Valid values: `news_publication`, `wire_service`, `press_release`, `government`, `trade_publication`, `blog`, `stock_exchange`, `research`. Articles from disabled sources are excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>content_type</code> | <code>str \| None</code> | Filter to events with a live member article of this content type, comma-separated. Valid values: `news`, `analysis`, `press_release`, `market_commentary`, `market_news`, `trading_halt`, `trading_event`, `other`. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned label per article. To find events with a member article from a primary disclosure source, filter on `source_type` (`wire_service`, `stock_exchange`, `press_release`, `government`) instead.<br>**Default**: <code>None</code> |
| <code>related_to</code> | <code>str \| None</code> | Filter to commentary events that comment on or react to the factual event with this `id`. Unresolvable `id` returns an empty result set, not an error.<br>**Default**: <code>None</code> |
| <code>include_peripheral</code> | <code>bool \| None</code> | When `true`, widen this feed, and the `company_ids` returned on each event, to events where this company has a peripheral role (advisor, speaker, or a passing mention) as well. Default `false` restricts to an active-involvement role (subject, acquirer, target, investor, issuer, partner).<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CompaniesEventsResponse](nordic_financial_news/models/api_v1_companies_events_response.py), [GetApiV1CompaniesByIdentifierEventsErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompaniesEventsResponse](nordic_financial_news/models/api_v1_companies_events_response.py)</code> -- Company events retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CompaniesByIdentifierEventsErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_companies_by_identifier_stories(identifier: str, *, limit: int | None = None, cursor: str | None = None, updated_after: str | None = None, fields: str | None = None, q: str | None = None, sort: SortOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, published_after: str | None = None, published_before: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CompaniesStoriesResponse, GetApiV1CompaniesByIdentifierStoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns stories that mention a specific company, ordered by publication date (newest first).

## Parameters
Accepts the same `q`, `sort`, `fields`, `updated_after`, `country`, `category`, `sources`, `published_after` and `published_before` parameters as `GET /api/v1/stories`, with identical semantics, scoped to this company.

## Rejected parameters
`ticker`, `company`, `watchlist`, `listed`, `exchange`, `market`, `domicile`, `index` and `sector` are rejected (400). The path already fixes the company; use `GET /api/v1/stories` to filter the full collection by them (`watchlist=false` and `listed` with any value other than `true` are ignored, as on the flat resource).

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, and when a story's visible article set changes, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_stories(
    "some example string",
    limit=25,
    updated_after="2024-01-01T00:00:00Z",
    fields="id,title,summary,published_at",
    q="Volvo earnings",
    sort=Sort.LATEST,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesStoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierStoriesErrorBody
```

**Async**

```python
result = await async_client.companies_api.with_raw_response.get_api_v1_companies_by_identifier_stories(
    "some example string",
    limit=25,
    updated_after="2024-01-01T00:00:00Z",
    fields="id,title,summary,published_at",
    q="Volvo earnings",
    sort=Sort.LATEST,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CompaniesStoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CompaniesByIdentifierStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. `VOLV-B.ST`); former tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the company ID for an unambiguous lookup. |
| <code>limit</code> | <code>int \| None</code> | Number of stories to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response. Mutually exclusive with `q` unless `sort=latest` is also given.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this for incremental sync: store the timestamp of your last completed sync, then request only newer results on each poll. Results are ordered by `updated_at` ascending and are cursor-paginated. Follow `pagination.next_cursor`, resending the same `updated_after` value, until it is null. Only advance your stored timestamp once you have drained every page. Mutually exclusive with `sort=latest` (with or without `q`). An `updated_after` walk is always ordered by `updated_at`.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Available fields: `id`, `title`, `summary`, `published_at`, `updated_at`, `article_count`, `article_ids`, `country`, `category`, `company_ids`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text search query (2-200 characters). By default, results are ranked by relevance instead of publication date, as a single page with no cursor. Mutually exclusive with `cursor` unless `sort=latest` is also given. Disables caching.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](nordic_financial_news/models/enums/sort.py) \| None</code> | Result order for `q`. `relevance` (default) is a single relevance-ranked page with no cursor; it requires `q`, and returns 400 without one. `latest` turns `q` into a match filter under the endpoint's normal newest-first order (`published_at` descending) and the response is cursor-paginated like any other request; without `q` it is an accepted no-op (that's already the default order). Mutually exclusive with `updated_after`.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Filter by category `id` (from `GET /api/v1/categories`). Comma-separated for multiple (e.g. `cat_earnings1,cat_mna000001`); unknown ids are ignored.<br>**Default**: <code>None</code> |
| <code>sources</code> | <code>str \| None</code> | Comma-separated list of source IDs (max 25). Use `GET /api/v1/sources` to discover source IDs. Also accepts array form (`sources[]=id1&sources[]=id2`). Returns stories with at least one article from a listed source.<br>**Default**: <code>None</code> |
| <code>published_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns stories published on or after this timestamp.<br>**Default**: <code>None</code> |
| <code>published_before</code> | <code>str \| None</code> | ISO 8601 datetime. Returns stories published before this timestamp.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CompaniesStoriesResponse](nordic_financial_news/models/api_v1_companies_stories_response.py), [GetApiV1CompaniesByIdentifierStoriesErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CompaniesStoriesResponse](nordic_financial_news/models/api_v1_companies_stories_response.py)</code> -- Company stories retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CompaniesByIdentifierStoriesErrorBody](nordic_financial_news/errors/get_api_v1_companies_by_identifier_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CountriesApi

> Source: [CountriesApi](nordic_financial_news/apis/countries_api.py)

<details>
<summary><code>def get_api_v1_countries(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CountriesResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the Nordic countries covered by the API, ordered alphabetically. Use the country `id` or `iso2_code` to filter articles, stories, and companies by country.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.countries_api.with_raw_response.get_api_v1_countries(limit=25, fields="id,name,iso2_code")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.countries_api.with_raw_response.get_api_v1_countries(limit=25, fields="id,name,iso2_code")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CountriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of countries to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include. Available fields: `id`, `name`, `iso2_code`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CountriesResponse](nordic_financial_news/models/api_v1_countries_response.py), [RawError](nordic_financial_news/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CountriesResponse](nordic_financial_news/models/api_v1_countries_response.py)</code> -- Countries retrieved successfully

**On `Failure`**: `error` is <code>[RawError](nordic_financial_news/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_countries_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1CountriesResponse1, GetApiV1CountriesByIdentifierErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a single country, including its stock exchanges. Look up by country ID or ISO 3166-1 alpha-2 code (e.g. `SE`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.countries_api.with_raw_response.get_api_v1_countries_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CountriesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CountriesByIdentifierErrorBody
```

**Async**

```python
result = await async_client.countries_api.with_raw_response.get_api_v1_countries_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1CountriesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1CountriesByIdentifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Country ID, ISO 3166-1 alpha-2 code (e.g. `SE`), or slug (e.g. `sweden`) |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1CountriesResponse1](nordic_financial_news/models/api_v1_countries_response1.py), [GetApiV1CountriesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_countries_by_identifier_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1CountriesResponse1](nordic_financial_news/models/api_v1_countries_response1.py)</code> -- Country retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1CountriesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_countries_by_identifier_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## EventTypes

> Source: [EventTypes](nordic_financial_news/apis/event_types.py)

<details>
<summary><code>def get_api_v1_event_types(*, fields: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EventTypesResponse, GetApiV1EventTypesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all active event types, grouped by category (in the categories' defined order) and ordered by slug within each. Event type slugs are the values for the `event_type` filter on `GET /api/v1/events`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.event_types.with_raw_response.get_api_v1_event_types(fields="id,slug,label")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EventTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1EventTypesErrorBody
```

**Async**

```python
result = await async_client.event_types.with_raw_response.get_api_v1_event_types(fields="id,slug,label")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EventTypesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1EventTypesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include. Available fields: `id`, `slug`, `label`, `category`, `summary`. `id` is always included.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1EventTypesResponse](nordic_financial_news/models/api_v1_event_types_response.py), [GetApiV1EventTypesErrorBody](nordic_financial_news/errors/get_api_v1_event_types_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EventTypesResponse](nordic_financial_news/models/api_v1_event_types_response.py)</code> -- Event types retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1EventTypesErrorBody](nordic_financial_news/errors/get_api_v1_event_types_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](nordic_financial_news/apis/events.py)

<details>
<summary><code>def get_api_v1_events(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, updated_after: str | None = None, q: str | None = None, mode: ModeOrStr | None = None, event_type: str | None = None, significance: str | None = None, ticker: str | None = None, company: str | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, source_type: str | None = None, content_type: str | None = None, exchange: str | None = None, market: str | None = None, domicile: str | None = None, index: str | None = None, sector: str | None = None, listed: str | None = None, watchlist: str | None = None, first_reported_after: str | None = None, first_reported_before: str | None = None, last_article_after: str | None = None, last_article_before: str | None = None, window: str | None = None, sort: str | None = None, related_to: str | None = None, include_peripheral: bool | None = None, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EventsResponse, GetApiV1EventsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of Events. An event groups the articles reporting a single real-world development (an earnings report, an M&A announcement, a dividend, an executive change, and so on). Sorted by when the event was first reported, most recent first. An event is only returned if at least one of its live member articles survives your plan's age and source restrictions. This is the same visibility rule the event feed on the website uses. If none survive, the event does not appear at all. `GET /api/v1/events/:id` distinguishes that case from an event your plan can see but whose full coverage it cannot (see below). ## Merges and removals
Events sometimes merge (two events turn out to describe the same development) or are removed (no live articles remain, or the event was found to be incorrect). Both are terminal. The event never reappears in a normal list, and `GET /api/v1/events/:id` on one returns a **minimal tombstone**: `id`, `status`, `merged_into` (the surviving event's `id`, when merged), and `updated_at` only. A tombstone carries no title, summary, counts or id arrays. Poll with `updated_after` to learn about merges and removals. Tombstones for events that changed since your watermark are included in that sync walk (uncapped, on every plan), which is otherwise the only way to learn that an event you previously fetched is gone. They are never returned by the default list. A tombstone still respects your event-grain filters: `company`, `ticker`, `exchange`, `index`, `sector`, `listed`, `event_type`, `significance`, `watchlist`, `first_reported_after`/`before`, and `last_article_after`/`before`. A merged event that involved the company you filtered by still surfaces its tombstone. Those filters are checked against the tombstone's companies as they are now. With `listed`, a tombstone whose only listed company was delisted or stopped appearing in the API's company data before the merge or removal no longer matches, so it is not returned. Poll without `listed` for full-fidelity tombstone coverage. On `exchange`, `market`, `domicile`, `index`, `sector` and `listed`, a merged or removed commentary event's tombstone is returned when any matching company is on it, in any role, so a filtered sync can include a tombstone for an event it never returned. A filtered sync returns events that match the filters now: an event that stops matching (for example, when its articles are no longer about a matching company) is not returned by it. Poll without those filters to see every change. A tombstone does not respect `country`, `category`, `sources`, `source_type` or `content_type`, which are article-grain filters. It has no live articles left to filter by, so poll without them for full-fidelity tombstone coverage. A merged event's `last_article_at` freezes at merge time, so `last_article_after`/`before` filter a tombstone against that frozen value rather than against when the merge happened. `window` cannot be used for sync polling at all (see below). ## Polling for updates
Use `updated_after` with the timestamp of your last completed sync to fetch only events that have changed since. Results are then ordered by `updated_at` ascending and cursor-paginated: follow `pagination.next_cursor`, resending the same `updated_after`, until it is null. Advance your stored timestamp only once every page is drained. A merge takes the earlier of the two `first_reported_at` values, so it only ever moves the surviving event earlier in the default sort. Under the default (non-sync) ordering a cursor walk can therefore re-emit a row you have already seen, but it can never skip one. Treat the walk as at-least-once and dedupe by `id`. `company_ids`/`story_ids` membership can drift out from under `updated_after` without bumping `updated_at`: a company merge, a company leaving or rejoining the API's company data, or a story being withdrawn from an event you already hold. A change to a story itself is tracked, and bumps the parent event.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.get_api_v1_events(
    limit=25,
    fields="title,status,article_count",
    updated_after="2026-03-01T00:00:00Z",
    q="Volvo earnings",
    mode=Mode.SEMANTIC,
    event_type="earnings-report",
    significance="notable,routine",
    ticker="VOLV-B",
    company="cmpny1234567",
    country="SE",
    category="cat_earnings1",
    sources="src123456789",
    source_type="stock_exchange",
    content_type="press_release",
    exchange="XSTO",
    market="SE",
    domicile="SE",
    index="OMXS30",
    sector="Industrials",
    listed="true",
    watchlist="wl_8fk2a1b3c4d5",
    first_reported_after="2026-01-01T00:00:00Z",
    first_reported_before="2026-12-31T23:59:59Z",
    last_article_after="2026-03-01T00:00:00Z",
    last_article_before="2026-03-02T00:00:00Z",
    window="24h",
    sort="significance",
    related_to="evtrswagsh01",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1EventsErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_api_v1_events(
    limit=25,
    fields="title,status,article_count",
    updated_after="2026-03-01T00:00:00Z",
    q="Volvo earnings",
    mode=Mode.SEMANTIC,
    event_type="earnings-report",
    significance="notable,routine",
    ticker="VOLV-B",
    company="cmpny1234567",
    country="SE",
    category="cat_earnings1",
    sources="src123456789",
    source_type="stock_exchange",
    content_type="press_release",
    exchange="XSTO",
    market="SE",
    domicile="SE",
    index="OMXS30",
    sector="Industrials",
    listed="true",
    watchlist="wl_8fk2a1b3c4d5",
    first_reported_after="2026-01-01T00:00:00Z",
    first_reported_before="2026-12-31T23:59:59Z",
    last_article_after="2026-03-01T00:00:00Z",
    last_article_before="2026-03-02T00:00:00Z",
    window="24h",
    sort="significance",
    related_to="evtrswagsh01",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EventsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1EventsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of events to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. Works with `q` too; `q` is a filter, not a separate search mode. Not accepted with `mode=semantic`. When continuing an `updated_after` sync, resend the same `updated_after` value alongside it.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Reduces payload size. `id` is always included.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only events updated after this timestamp, including merge/removal tombstones. Use for incremental sync.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text filter over the event's own title and summary as well as its live member articles' indexed content (title, summary, key points, plus tagged company names and key facts), so an event can match on a company its coverage only tags. Matches stay in the default feed order (most recently reported first) and are cursor-paginated like any other request; combine with `window`/`last_article_after` for "latest on X". This differs deliberately from `q` on `GET /api/v1/articles` and `GET /api/v1/stories`, which returns a relevance-ranked single page unless `sort=latest` is given. Here `q` is a filter over the ordinary feed order, so it composes with `window` and the cursor. `mode=semantic` replaces this with a ranked match (see `mode`).<br>**Default**: <code>None</code> |
| <code>mode</code> | <code>[ModeOrStr](nordic_financial_news/models/enums/mode.py) \| None</code> | Set to `semantic` to match `q` by meaning rather than by keyword, for thematic questions a keyword match cannot answer ("defense contract wins", "battery cell capacity expansion").<br><br>The match runs over the translated title and summary of each event's live member articles, not over the event's own title or summary, and not over the key points, tagged company names or key facts that plain `q` also reaches. It is therefore not a strict recall improvement over plain `q`: an event whose title is on-topic while its member articles are oblique can match `q` and not `mode=semantic`.<br><br>Results are ranked by distance blended with a small recency bonus, not in feed order. Requires `q`, is mutually exclusive with `sort`, `cursor` and `updated_after`, and returns a single ranked page capped by `limit`. Every other filter remains a hard filter applied before the match, not after. `window` and `last_article_after`/`last_article_before` still bound the event's activity, not the date of the matched article, so the member article behind a match can be considerably older than the event's last activity.<br><br>Each event gains a `distance` (raw cosine, lower is closer): the distance of its best-matching member article that your plan can access, so the same event can carry different distances on different plans. Compare it only within one response, never across responses: the scale is model-dependent. Ranking uses the mean of an event's two closest member articles and a recency bonus, neither of which `distance` reflects. A server-side relevance floor drops weak matches, so a page is frequently shorter than `limit` and can be empty.<br><br>The plan cap on recent events does not apply in this mode: the match runs over every event with member articles inside your plan's age and source restrictions, and `plan_limited: true` reports only that those restrictions are in force. `truncated: true` means the article-match horizon was exhausted, so further matching events exist that this response cannot reach, and no cursor can page to them.<br><br>The response `pagination` object carries `count` only. There is no `next_cursor`, and the response is uncacheable (`Cache-Control: no-cache, no-store`, no `ETag`). If the query cannot be embedded the request returns `503` rather than silently falling back to keyword matching.<br>**Default**: <code>None</code> |
| <code>event_type</code> | <code>str \| None</code> | Filter by event type slug, comma-separated (e.g. `earnings-report,acquisition-announced`). These are Events taxonomy slugs (hyphenated) from `GET /api/v1/event_types` and are the only values accepted here. The underscored calendar `event_type` values used by `GET /api/v1/calendar_events` are rejected. A few spellings overlap across the two vocabularies (e.g. `delisting`) while denoting different things. An unrecognized slug returns 400 naming the bad slug(s).<br>**Default**: <code>None</code> |
| <code>significance</code> | <code>str \| None</code> | Editorial importance, the feed's materiality threshold, comma-separated (e.g. `notable,routine`). Valid values: `notable` (material, front-page-worthy events), `routine` (ledger records: routine filings, scheduled disclosures), `commentary` (opinion/analysis pieces). Use `significance=notable` to restrict the feed to material events. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Filter to events involving the company with this stock ticker (e.g. `VOLV-B`), comma-separated for several (matches any of them). Accepts the exchange-suffixed form; former tickers resolve. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with `400` naming the unknown values. Combined with `company`, the two filters intersect. Matches active-involvement roles only unless `include_peripheral=true`.<br>**Default**: <code>None</code> |
| <code>company</code> | <code>str \| None</code> | Filter to events involving a company by its `id`, comma-separated for several (matches any of them). Complements `ticker`; reaches companies without a stock listing. Every value must resolve, or the request is rejected with `400` naming the unknown ids. Combined with `ticker`, the two filters intersect. Matches active-involvement roles only unless `include_peripheral=true`.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter to events with a live member article from this country (ISO 3166-1 alpha-2, comma-separated for multiple). Applied at the article grain, so sync tombstones do not respect it.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Filter to events with a live member article in any of these categories, by their `id` (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not respect it.<br>**Default**: <code>None</code> |
| <code>sources</code> | <code>str \| None</code> | Filter to events with a live member article from these sources, by their `id` (comma-separated, max 25). Applied at the article grain, so sync tombstones do not respect it.<br>**Default**: <code>None</code> |
| <code>source_type</code> | <code>str \| None</code> | Filter to events with a live member article from this source type, comma-separated. Valid values: `news_publication`, `wire_service`, `press_release`, `government`, `trade_publication`, `blog`, `stock_exchange`, `research`. Articles from disabled sources are excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s).<br>**Default**: <code>None</code> |
| <code>content_type</code> | <code>str \| None</code> | Filter to events with a live member article of this content type, comma-separated. Valid values: `news`, `analysis`, `press_release`, `market_commentary`, `market_news`, `trading_halt`, `trading_event`, `other`. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned label per article. To find events with a member article from a primary disclosure source, filter on `source_type` (`wire_service`, `stock_exchange`, `press_release`, `government`) instead.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>str \| None</code> | Filter by exchange MIC code, comma-separated for multiple (e.g. `XSTO`, `XSTO,XCSE`).<br>**Default**: <code>None</code> |
| <code>market</code> | <code>str \| None</code> | Filter to events involving a company with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from `country` (the source that reported it) and `domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers. Note: a just-listed company's listing record can lag its IPO event.<br>**Default**: <code>None</code> |
| <code>domicile</code> | <code>str \| None</code> | Filter to events involving a company legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use `market` for market-coverage questions.<br>**Default**: <code>None</code> |
| <code>index</code> | <code>str \| None</code> | Filter to events for companies in this stock index, by `id` or symbol.<br>**Default**: <code>None</code> |
| <code>sector</code> | <code>str \| None</code> | Filter by company sector. Must exactly match a standard sector name.<br>**Default**: <code>None</code> |
| <code>listed</code> | <code>str \| None</code> | When `true`, only return events involving at least one company with an active listing on any exchange, matched by the same rule as `exchange`/`market`/`domicile`/`index`/`sector`. On a factual event, the company must have an active-involvement role (subject, acquirer, target, investor, issuer, partner); an advisor, speaker or passing mention does not qualify. On a commentary event, any role counts when a live article in the event is about that company rather than only mentioning it. `include_peripheral` does not change this. A company whose listings are all delisted does not count. Hidden and unverified companies do not count.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>str \| None</code> | Restrict to events for companies in a single watchlist, by its `id`. Requires the `read:watchlist` scope. Matches active-involvement roles only unless `include_peripheral=true`.<br>**Default**: <code>None</code> |
| <code>first_reported_after</code> | <code>str \| None</code> | ISO 8601 datetime. Only events first reported at or after this time.<br>**Default**: <code>None</code> |
| <code>first_reported_before</code> | <code>str \| None</code> | ISO 8601 datetime. Only events first reported before this time.<br>**Default**: <code>None</code> |
| <code>last_article_after</code> | <code>str \| None</code> | ISO 8601 datetime. Only events whose most recent activity (`last_article_at`, or `first_reported_at` when that is null) is at or after this time. This matches when the event was last active, not when it broke. Mutually exclusive with `window`.<br>**Default**: <code>None</code> |
| <code>last_article_before</code> | <code>str \| None</code> | ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually exclusive with `window`.<br>**Default**: <code>None</code> |
| <code>window</code> | <code>str \| None</code> | Relative shorthand for `last_article_after`, e.g. `8h`, `24h`, `7d` (hours or days only, max 365d equivalent). Evaluated per request against the server clock. Compute `last_article_after` yourself for a stable multi-page snapshot. Mutually exclusive with `last_article_after`, `last_article_before`, and `updated_after`.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>str \| None</code> | Sort order. `latest` (default) sorts most recently reported first, the unfiltered feed order. `significance` groups events into 3 coarse editorial tiers (`notable`, then `routine`, then `commentary`), most recently reported first within each tier; expect large ties within a tier. A mid-walk `routine`→`notable` escalation may be skipped, since the ordering is a best-effort snapshot. For a broad importance filter, prefer `significance=notable` with the default sort; page 1 is identical. Mutually exclusive with `updated_after` (an unrecognized value, or either sort value combined with `updated_after`, returns 400).<br>**Default**: <code>None</code> |
| <code>related_to</code> | <code>str \| None</code> | Filter to commentary events that comment on or react to the factual event with this `id` (see `related_to` on the response). Unresolvable `id` returns an empty result set, not an error.<br>**Default**: <code>None</code> |
| <code>include_peripheral</code> | <code>bool \| None</code> | When `true`, widen `company`/`ticker`/`watchlist` matching, and the `company_ids` returned on each event, to companies with a peripheral role (advisor, speaker, or a passing mention) as well. Default `false` restricts matching and `company_ids` to companies with an active-involvement role (subject, acquirer, target, investor, issuer, partner). Does not widen `exchange`, `market`, `domicile`, `index`, `sector` or `listed`: on a factual event those match an active-involvement role; on a commentary event, any role, when a live article in the event is about that company rather than only mentioning it.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1EventsResponse](nordic_financial_news/models/api_v1_events_response.py), [GetApiV1EventsErrorBody](nordic_financial_news/errors/get_api_v1_events_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EventsResponse](nordic_financial_news/models/api_v1_events_response.py)</code> -- Events retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1EventsErrorBody](nordic_financial_news/errors/get_api_v1_events_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_events_by_id(id_: str, *, include_peripheral: bool | None = None, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1EventsResponse1, GetApiV1EventsByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Fetches a single event by ID.

A merged or removed event returns 200 with the minimal tombstone shape (see the list endpoint's description) rather than 404. The id still resolves; it carries no content. An event with no live member articles at all returns 404. An event whose live members exist but are all outside your plan's age/source restrictions returns 403 with an upgrade problem, distinct from the plain 404.

Responses are cached with `ETag` and `Cache-Control: private, max-age=300`; send `If-None-Match` to receive a `304 Not Modified`. There is no `Last-Modified` here, for the same reason as `GET /api/v1/events`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.events.with_raw_response.get_api_v1_events_by_id("evt_volvoq3ma1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EventsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1EventsByIdErrorBody
```

**Async**

```python
result = await async_client.events.with_raw_response.get_api_v1_events_by_id("evt_volvoq3ma1")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1EventsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1EventsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | The event ID, as returned in the `id` field of list responses. |
| <code>include_peripheral</code> | <code>bool \| None</code> | When `true`, `company_ids` and `companies[]` also include companies with a peripheral role (advisor, speaker, or a passing mention). Default `false` lists companies with an active-involvement role only (subject, acquirer, target, investor, issuer, partner). `association_tier` is present on every `companies[]` entry regardless.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if the event has not changed.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1EventsResponse1](nordic_financial_news/models/api_v1_events_response1.py), [GetApiV1EventsByIdErrorBody](nordic_financial_news/errors/get_api_v1_events_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1EventsResponse1](nordic_financial_news/models/api_v1_events_response1.py)</code> -- Event retrieved

**On `Failure`**: `error` is <code>[GetApiV1EventsByIdErrorBody](nordic_financial_news/errors/get_api_v1_events_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## ExchangesApi

> Source: [ExchangesApi](nordic_financial_news/apis/exchanges_api.py)

<details>
<summary><code>def get_api_v1_exchanges(*, limit: int | None = None, cursor: str | None = None, country: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ExchangesResponse, GetApiV1ExchangesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns active Nordic stock exchanges, ordered alphabetically. Supports filtering by country.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.exchanges_api.with_raw_response.get_api_v1_exchanges(limit=25, country="SE", fields="id,name,mic_code")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExchangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ExchangesErrorBody
```

**Async**

```python
result = await async_client.exchanges_api.with_raw_response.get_api_v1_exchanges(
    limit=25, country="SE", fields="id,name,mic_code"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExchangesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ExchangesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of exchanges to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter by country using ISO 3166-1 alpha-2 code. Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Available fields: `id`, `name`, `mic_code`, `acronym`, `country`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1ExchangesResponse](nordic_financial_news/models/api_v1_exchanges_response.py), [GetApiV1ExchangesErrorBody](nordic_financial_news/errors/get_api_v1_exchanges_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ExchangesResponse](nordic_financial_news/models/api_v1_exchanges_response.py)</code> -- Exchanges retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1ExchangesErrorBody](nordic_financial_news/errors/get_api_v1_exchanges_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_exchanges_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ExchangesResponse1, GetApiV1ExchangesByIdentifierErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns detailed information about a stock exchange, including currency, timezone, and location. Look up by exchange ID (e.g. `exch_nasdaq1`) or MIC code (e.g. `XSTO`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.exchanges_api.with_raw_response.get_api_v1_exchanges_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExchangesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ExchangesByIdentifierErrorBody
```

**Async**

```python
result = await async_client.exchanges_api.with_raw_response.get_api_v1_exchanges_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExchangesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ExchangesByIdentifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Exchange ID or MIC code (e.g. `XSTO`) |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1ExchangesResponse1](nordic_financial_news/models/api_v1_exchanges_response1.py), [GetApiV1ExchangesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_exchanges_by_identifier_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ExchangesResponse1](nordic_financial_news/models/api_v1_exchanges_response1.py)</code> -- Exchange retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1ExchangesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_exchanges_by_identifier_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_exchanges_by_identifier_companies(identifier: str, *, limit: int | None = None, cursor: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1ExchangesCompaniesResponse, GetApiV1ExchangesByIdentifierCompaniesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns companies listed on a specific exchange, ordered alphabetically. The `ticker` and `exchange` shown for each company reflect its primary listing, which may be on a different exchange if the company is listed on multiple exchanges.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.exchanges_api.with_raw_response.get_api_v1_exchanges_by_identifier_companies(
    "some example string", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExchangesCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ExchangesByIdentifierCompaniesErrorBody
```

**Async**

```python
result = await async_client.exchanges_api.with_raw_response.get_api_v1_exchanges_by_identifier_companies(
    "some example string", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1ExchangesCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1ExchangesByIdentifierCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Exchange ID or MIC code (e.g. `XSTO`) |
| <code>limit</code> | <code>int \| None</code> | Number of companies to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1ExchangesCompaniesResponse](nordic_financial_news/models/api_v1_exchanges_companies_response.py), [GetApiV1ExchangesByIdentifierCompaniesErrorBody](nordic_financial_news/errors/get_api_v1_exchanges_by_identifier_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1ExchangesCompaniesResponse](nordic_financial_news/models/api_v1_exchanges_companies_response.py)</code> -- Exchange companies retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1ExchangesByIdentifierCompaniesErrorBody](nordic_financial_news/errors/get_api_v1_exchanges_by_identifier_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Health

> Source: [Health](nordic_financial_news/apis/health.py)

<details>
<summary><code>def get_api_v1_health(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1HealthResponse, RawError]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the health status of the API

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.health.with_raw_response.get_api_v1_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1HealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

**Async**

```python
result = await async_client.health.with_raw_response.get_api_v1_health()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1HealthResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type RawError
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1HealthResponse](nordic_financial_news/models/api_v1_health_response.py), [RawError](nordic_financial_news/core/results.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1HealthResponse](nordic_financial_news/models/api_v1_health_response.py)</code> -- successful

**On `Failure`**: `error` is <code>[RawError](nordic_financial_news/core/results.py)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## IndicesApi

> Source: [IndicesApi](nordic_financial_news/apis/indices_api.py)

<details>
<summary><code>def get_api_v1_indices(*, limit: int | None = None, cursor: str | None = None, exchange: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IndicesResponse, GetApiV1IndicesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns stock indices, ordered alphabetically by name. Use `exchange` to filter by a specific exchange.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.indices_api.with_raw_response.get_api_v1_indices(limit=25, exchange="XSTO", fields="id,name,symbol")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IndicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IndicesErrorBody
```

**Async**

```python
result = await async_client.indices_api.with_raw_response.get_api_v1_indices(
    limit=25, exchange="XSTO", fields="id,name,symbol"
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IndicesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IndicesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of indices to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>str \| None</code> | Filter by exchange MIC code, comma-separated for multiple (e.g. `XSTO`, `XSTO,XHEL`). Only active exchanges match.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Available fields: `id`, `name`, `symbol`, `pan_nordic`, `exchange`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1IndicesResponse](nordic_financial_news/models/api_v1_indices_response.py), [GetApiV1IndicesErrorBody](nordic_financial_news/errors/get_api_v1_indices_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IndicesResponse](nordic_financial_news/models/api_v1_indices_response.py)</code> -- Indices retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1IndicesErrorBody](nordic_financial_news/errors/get_api_v1_indices_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_indices_by_identifier(identifier: str, *, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IndicesResponse1, GetApiV1IndicesByIdentifierErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a single index, including description and company count. Look up by index ID or symbol (case-insensitive, e.g. `OMXS30`). Note: `companies_count` reflects the number of distinct companies in the index, which may be less than the number of index constituents when a company has multiple share classes listed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.indices_api.with_raw_response.get_api_v1_indices_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IndicesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IndicesByIdentifierErrorBody
```

**Async**

```python
result = await async_client.indices_api.with_raw_response.get_api_v1_indices_by_identifier("some example string")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IndicesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IndicesByIdentifierErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Index ID or symbol (e.g. `OMXS30`) |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1IndicesResponse1](nordic_financial_news/models/api_v1_indices_response1.py), [GetApiV1IndicesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_indices_by_identifier_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IndicesResponse1](nordic_financial_news/models/api_v1_indices_response1.py)</code> -- Index retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1IndicesByIdentifierErrorBody](nordic_financial_news/errors/get_api_v1_indices_by_identifier_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_indices_by_identifier_companies(identifier: str, *, limit: int | None = None, cursor: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1IndicesCompaniesResponse, GetApiV1IndicesByIdentifierCompaniesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns companies that are members of a specific index, ordered alphabetically. The `ticker` and `exchange` shown for each company reflect its primary listing, which may differ from the listing used in this index (e.g. a company listed on multiple exchanges).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.indices_api.with_raw_response.get_api_v1_indices_by_identifier_companies(
    "some example string", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IndicesCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IndicesByIdentifierCompaniesErrorBody
```

**Async**

```python
result = await async_client.indices_api.with_raw_response.get_api_v1_indices_by_identifier_companies(
    "some example string", limit=25
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1IndicesCompaniesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1IndicesByIdentifierCompaniesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>identifier</code> | <code>str</code> | Index ID or symbol (e.g. `OMXS30`) |
| <code>limit</code> | <code>int \| None</code> | Number of companies to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1IndicesCompaniesResponse](nordic_financial_news/models/api_v1_indices_companies_response.py), [GetApiV1IndicesByIdentifierCompaniesErrorBody](nordic_financial_news/errors/get_api_v1_indices_by_identifier_companies_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1IndicesCompaniesResponse](nordic_financial_news/models/api_v1_indices_companies_response.py)</code> -- Index companies retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1IndicesByIdentifierCompaniesErrorBody](nordic_financial_news/errors/get_api_v1_indices_by_identifier_companies_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Meta

> Source: [Meta](nordic_financial_news/apis/meta.py)

<details>
<summary><code>def get_api_v1_meta(*, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1MetaResponse, GetApiV1MetaErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns API metadata including version, capabilities, supported fields, content types, and rate limit policy.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.meta.with_raw_response.get_api_v1_meta()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1MetaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1MetaErrorBody
```

**Async**

```python
result = await async_client.meta.with_raw_response.get_api_v1_meta()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1MetaResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1MetaErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1MetaResponse](nordic_financial_news/models/api_v1_meta_response.py), [GetApiV1MetaErrorBody](nordic_financial_news/errors/get_api_v1_meta_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1MetaResponse](nordic_financial_news/models/api_v1_meta_response.py)</code> -- API metadata retrieved

**On `Failure`**: `error` is <code>[GetApiV1MetaErrorBody](nordic_financial_news/errors/get_api_v1_meta_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## SearchApi

> Source: [SearchApi](nordic_financial_news/apis/search_api.py)

<details>
<summary><code>def get_api_v1_search(q: str, *, type_: str | None = None, limit: int | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[SearchResult, GetApiV1SearchErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by resource type and ranked by relevance. Use `type` to limit which resource types are searched.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.search_api.with_raw_response.get_api_v1_search("Volvo", type_="articles,companies", limit=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SearchErrorBody
```

**Async**

```python
result = await async_client.search_api.with_raw_response.get_api_v1_search("Volvo", type_="articles,companies", limit=5)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type SearchResult
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | Full-text search query (2-200 characters). |
| <code>type_</code> | <code>str \| None</code> | Comma-separated list of resource types to search. Defaults to all types. Valid values: `articles`, `stories`, `companies`, `countries`, `exchanges`, `indices`.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum number of results per resource type (default 5, max 25).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[SearchResult](nordic_financial_news/models/search_result.py), [GetApiV1SearchErrorBody](nordic_financial_news/errors/get_api_v1_search_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[SearchResult](nordic_financial_news/models/search_result.py)</code> -- Search results

**On `Failure`**: `error` is <code>[GetApiV1SearchErrorBody](nordic_financial_news/errors/get_api_v1_search_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Sources

> Source: [Sources](nordic_financial_news/apis/sources.py)

<details>
<summary><code>def get_api_v1_sources(*, limit: int | None = None, cursor: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1SourcesResponse, GetApiV1SourcesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of enabled news sources, ordered alphabetically by name. Use source IDs to filter articles and stories via the `sources` parameter on the articles and stories list endpoints.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.sources.with_raw_response.get_api_v1_sources(limit=25, fields="id,name,domain")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SourcesErrorBody
```

**Async**

```python
result = await async_client.sources.with_raw_response.get_api_v1_sources(limit=25, fields="id,name,domain")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1SourcesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1SourcesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of sources to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor from a previous response.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include. Available fields: `id`, `name`, `domain`, `country`, `source_type`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1SourcesResponse](nordic_financial_news/models/api_v1_sources_response.py), [GetApiV1SourcesErrorBody](nordic_financial_news/errors/get_api_v1_sources_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1SourcesResponse](nordic_financial_news/models/api_v1_sources_response.py)</code> -- Sources retrieved

**On `Failure`**: `error` is <code>[GetApiV1SourcesErrorBody](nordic_financial_news/errors/get_api_v1_sources_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## StoriesApi

> Source: [StoriesApi](nordic_financial_news/apis/stories_api.py)

<details>
<summary><code>def get_api_v1_stories(*, limit: int | None = None, cursor: str | None = None, updated_after: str | None = None, q: str | None = None, sort: SortOrStr | None = None, mode: ModeOrStr | None = None, country: str | None = None, category: str | None = None, sources: str | None = None, ticker: str | None = None, company: str | None = None, exchange: str | None = None, market: str | None = None, domicile: str | None = None, index: str | None = None, sector: str | None = None, listed: str | None = None, watchlist: str | None = None, published_after: str | None = None, published_before: str | None = None, fields: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StoriesResponse, GetApiV1StoriesErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of published stories ordered by publication date (newest first). Each story synthesizes coverage of a single developing event from multiple source articles into one narrative.

## Filtering
Supports filtering by country, category, source, and company ticker. Use `GET /api/v1/sources` to discover source IDs for the `sources` filter.

## Search
Use `q` for full-text search: relevance-ranked by default, newest-first with `sort=latest`, or matched by meaning with `mode=semantic`.

## Polling for updates
Use `updated_after` for incremental syncing.

## Caching
Requests with `updated_after` are not cached: they return `Cache-Control: no-cache, no-store` and no `ETag`. The `ETag` reflects the response as served, not only record timestamps: it changes when plan limits alter the visible set, and when a story's visible article set changes, so a changed `ETag` does not necessarily mean a record was updated.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories_api.with_raw_response.get_api_v1_stories(
    limit=25,
    updated_after="2024-01-01T00:00:00Z",
    q="Volvo earnings",
    sort=Sort.LATEST,
    mode=Mode.SEMANTIC,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    ticker="VOLV-B",
    company="cmpny1234567",
    exchange="XSTO,XCSE",
    market="SE",
    domicile="SE",
    index="OMXS30",
    sector="Industrials",
    listed="true",
    watchlist="wl_8fk2a1b3c4d5",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
    fields="id,title,summary,published_at",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1StoriesErrorBody
```

**Async**

```python
result = await async_client.stories_api.with_raw_response.get_api_v1_stories(
    limit=25,
    updated_after="2024-01-01T00:00:00Z",
    q="Volvo earnings",
    sort=Sort.LATEST,
    mode=Mode.SEMANTIC,
    country="SE",
    category="cat_earnings1",
    sources="abc123def456,ghi789jkl012",
    ticker="VOLV-B",
    company="cmpny1234567",
    exchange="XSTO,XCSE",
    market="SE",
    domicile="SE",
    index="OMXS30",
    sector="Industrials",
    listed="true",
    watchlist="wl_8fk2a1b3c4d5",
    published_after="2024-06-01T00:00:00Z",
    published_before="2024-12-31T23:59:59Z",
    fields="id,title,summary,published_at",
)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StoriesResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1StoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Number of stories to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response. Mutually exclusive with `q` unless `sort=latest` is also given.<br>**Default**: <code>None</code> |
| <code>updated_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns only stories updated after this timestamp. Use this for incremental sync: store the timestamp of your last completed sync, then request only newer results on each poll. Results are ordered by `updated_at` ascending and are cursor-paginated. Follow `pagination.next_cursor`, resending the same `updated_after` value, until it is null. Only advance your stored timestamp once you have drained every page (see the Real-Time Updates guide at https://docs.nordicfinancialnews.com). Mutually exclusive with `sort=latest` (with or without `q`). An `updated_after` walk is always ordered by `updated_at`.<br>**Default**: <code>None</code> |
| <code>q</code> | <code>str \| None</code> | Full-text search query (2-200 characters). By default, results are ranked by relevance instead of publication date, as a single page with no cursor. Mutually exclusive with `cursor` unless `sort=latest` is also given. Disables caching.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[SortOrStr](nordic_financial_news/models/enums/sort.py) \| None</code> | Result order for `q`. `relevance` (default) is a single relevance-ranked page with no cursor; it requires `q`, and returns 400 without one. `latest` turns `q` into a match filter under the endpoint's normal newest-first order (`published_at` descending) and the response is cursor-paginated like any other request; without `q` it is an accepted no-op (that's already the default order). Mutually exclusive with `updated_after`.<br>**Default**: <code>None</code> |
| <code>mode</code> | <code>[ModeOrStr](nordic_financial_news/models/enums/mode.py) \| None</code> | Set to `semantic` to match `q` by meaning rather than by keyword. The match runs over each story's title, summary and key entities. The narrative body is not part of the match, so it answers thematic questions a keyword match cannot ("defense contract wins", "battery cell capacity expansion").<br><br>Requires `q`, is mutually exclusive with `sort`, `cursor` and `updated_after`, and returns a single ranked page capped by `limit`; every other filter (`country`, `category`, `sources`, `ticker`, `company`, `market`, `domicile`, `exchange`, `index`, `sector`, `watchlist`, `published_after`/`published_before`) remains a hard filter applied before the match, not after.<br><br>Each story gains a `distance` (raw cosine, lower is closer, rounded to 4dp). Compare it only within one response, never across responses: the scale is model-dependent. Ranking also blends in a small recency bonus that `distance` does not reflect. A server-side relevance floor drops weak matches, so a page is frequently shorter than `limit` and can be empty. Raising `limit` does not recover floored rows.<br><br>On restricted plans, the story age window narrows the candidate set and the story count cap applies as a clamp on this page, so a capped plan receives its closest matches rather than its newest stories; either restriction sets `plan_limited: true`.<br><br>The response `pagination` object carries `count` only. There is no `next_cursor`, since a distance ranking cannot be cursor-paginated, and the response is uncacheable (`Cache-Control: no-cache, no-store`, no `ETag`). If the query cannot be embedded the request returns `503` rather than silently falling back to keyword matching.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>str \| None</code> | Filter by country using ISO 3166-1 alpha-2 code (e.g. `SE`, `NO`, `DK`). Comma-separated for multiple (e.g. `SE,NO`). Case-insensitive.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Filter by category `id` (from `GET /api/v1/categories`). Comma-separated for multiple (e.g. `cat_earnings1,cat_mna000001`); unknown ids are ignored.<br>**Default**: <code>None</code> |
| <code>sources</code> | <code>str \| None</code> | Comma-separated list of source IDs (max 25). Use `GET /api/v1/sources` to discover source IDs. Also accepts array form (`sources[]=id1&sources[]=id2`). Returns stories with at least one article from a listed source.<br>**Default**: <code>None</code> |
| <code>ticker</code> | <code>str \| None</code> | Filter by company stock ticker symbol, comma-separated for several (e.g. `VOLV-B` or `VOLV-B,ERIC-B`; matches any of them). Accepts full tickers with exchange suffix (e.g. `VOLV-B.ST`). Returns stories mentioning the company. Former tickers resolve too: a company that renamed or moved venues is still reachable by an old ticker; the returned company `former_tickers` lists any such historical tickers. Matching is case-insensitive. Every value must resolve to a company, or the request is rejected with `400` naming the unknown values. Combined with `company`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>company</code> | <code>str \| None</code> | Filter by company `id` (as returned by the companies endpoints), comma-separated for several (matches any of them). Complements `ticker`; use this to reach companies without a stock listing. Every value must resolve, or the request is rejected with `400` naming the unknown ids. Combined with `ticker`, the two filters intersect.<br>**Default**: <code>None</code> |
| <code>exchange</code> | <code>str \| None</code> | Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g. `XSTO` for Nasdaq Stockholm, `XCSE` for Nasdaq Copenhagen, `XHEL` for Nasdaq Helsinki, `XOSL` for Oslo Børs). Returns stories about companies actively listed there. Case-insensitive.<br>**Default**: <code>None</code> |
| <code>market</code> | <code>str \| None</code> | Filter to stories about companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2, comma-separated, e.g. `SE,NO`). `SE` covers Nasdaq Stockholm, First North, Spotlight and NGM. Distinct from `country` (the source that reported it) and `domicile` (legal domicile). Includes foreign-domiciled but locally-listed issuers.<br>**Default**: <code>None</code> |
| <code>domicile</code> | <code>str \| None</code> | Filter to stories about companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use `market` for market-coverage questions.<br>**Default**: <code>None</code> |
| <code>index</code> | <code>str \| None</code> | Filter by stock index id or symbol (e.g. `OMXS30`, `OMXC25`, `OMXH25`, `OBX`). Returns stories about companies in that index. Case-insensitive for symbols.<br>**Default**: <code>None</code> |
| <code>sector</code> | <code>str \| None</code> | Filter by company sector. Case-sensitive; must exactly match one of: `Communication Services`, `Consumer Discretionary`, `Consumer Staples`, `Energy`, `Financials`, `Health Care`, `Industrials`, `Information Technology`, `Materials`, `Real Estate`, `Utilities`.<br>**Default**: <code>None</code> |
| <code>listed</code> | <code>str \| None</code> | When `true`, only return stories linked to at least one company with an active listing on any exchange. A company whose listings are all delisted does not count. Hidden and unverified companies do not count.<br>**Default**: <code>None</code> |
| <code>watchlist</code> | <code>str \| None</code> | Restricts to stories mentioning companies in a single watchlist, identified by its `id` (from the List Watchlists endpoint). An unknown id returns no stories. Requires `read:watchlist` scope.<br>**Default**: <code>None</code> |
| <code>published_after</code> | <code>str \| None</code> | ISO 8601 datetime. Returns stories published on or after this timestamp.<br>**Default**: <code>None</code> |
| <code>published_before</code> | <code>str \| None</code> | ISO 8601 datetime. Returns stories published before this timestamp.<br>**Default**: <code>None</code> |
| <code>fields</code> | <code>str \| None</code> | Comma-separated list of fields to include in the response. Available fields: `id`, `title`, `summary`, `published_at`, `updated_at`, `article_count`, `article_ids`, `country`, `category`, `company_ids`.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1StoriesResponse](nordic_financial_news/models/api_v1_stories_response.py), [GetApiV1StoriesErrorBody](nordic_financial_news/errors/get_api_v1_stories_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StoriesResponse](nordic_financial_news/models/api_v1_stories_response.py)</code> -- Stories retrieved

**On `Failure`**: `error` is <code>[GetApiV1StoriesErrorBody](nordic_financial_news/errors/get_api_v1_stories_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_stories_by_id(id_: str, *, if_none_match: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1StoriesResponse1, GetApiV1StoriesByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the full details of a single story, including content in Markdown format, associated articles, and companies. Supports conditional requests via `If-None-Match` for efficient caching.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.stories_api.with_raw_response.get_api_v1_stories_by_id("sty_abc123def")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StoriesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1StoriesByIdErrorBody
```

**Async**

```python
result = await async_client.stories_api.with_raw_response.get_api_v1_stories_by_id("sty_abc123def")
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1StoriesResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1StoriesByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Story ID (e.g. `sty_abc123def`). |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if the story has not changed.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1StoriesResponse1](nordic_financial_news/models/api_v1_stories_response1.py), [GetApiV1StoriesByIdErrorBody](nordic_financial_news/errors/get_api_v1_stories_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1StoriesResponse1](nordic_financial_news/models/api_v1_stories_response1.py)</code> -- Story found

**On `Failure`**: `error` is <code>[GetApiV1StoriesByIdErrorBody](nordic_financial_news/errors/get_api_v1_stories_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Watchlists

> Source: [Watchlists](nordic_financial_news/apis/watchlists.py)

<details>
<summary><code>def get_api_v1_watchlists(*, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WatchlistsResponse, GetApiV1WatchlistsErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details endpoint to retrieve companies. Requires the `read:watchlist` scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.get_api_v1_watchlists()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WatchlistsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1WatchlistsErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.get_api_v1_watchlists()
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WatchlistsResponse
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1WatchlistsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1WatchlistsResponse](nordic_financial_news/models/api_v1_watchlists_response.py), [GetApiV1WatchlistsErrorBody](nordic_financial_news/errors/get_api_v1_watchlists_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WatchlistsResponse](nordic_financial_news/models/api_v1_watchlists_response.py)</code> -- Watchlists retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1WatchlistsErrorBody](nordic_financial_news/errors/get_api_v1_watchlists_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_v1_watchlists_by_id(id_: str, *, limit: int | None = None, cursor: str | None = None, if_none_match: str | None = None, if_modified_since: str | None = None, request_options: RequestOptionsOrDict | None = None) -> ApiResult[ApiV1WatchlistsResponse1, GetApiV1WatchlistsByIdErrorBody]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company name. Hidden and unverified companies are excluded. Requires the `read:watchlist` scope.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
result = client.watchlists.with_raw_response.get_api_v1_watchlists_by_id("a1b2c3d4e5f6", limit=25)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WatchlistsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1WatchlistsByIdErrorBody
```

**Async**

```python
result = await async_client.watchlists.with_raw_response.get_api_v1_watchlists_by_id("a1b2c3d4e5f6", limit=25)
match result:
    case Success(payload=payload):
        ...  # TODO: Handle 'payload' of type ApiV1WatchlistsResponse1
    case Failure(error=error):
        ...  # TODO: Handle 'error' of type GetApiV1WatchlistsByIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id_</code> | <code>str</code> | Watchlist ID (e.g. `a1b2c3d4e5f6`). |
| <code>limit</code> | <code>int \| None</code> | Number of companies to return per page (default 25, max 100).<br>**Default**: <code>None</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque pagination cursor returned as `pagination.next_cursor` from a previous response.<br>**Default**: <code>None</code> |
| <code>if_none_match</code> | <code>str \| None</code> | ETag value from a previous response. Returns `304 Not Modified` if data has not changed.<br>**Default**: <code>None</code> |
| <code>if_modified_since</code> | <code>str \| None</code> | HTTP date from a previous `Last-Modified` header. Returns `304 Not Modified` if nothing has changed since.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](nordic_financial_news/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**Returns**: <code>[ApiResult](nordic_financial_news/core/results.py)&#91;[ApiV1WatchlistsResponse1](nordic_financial_news/models/api_v1_watchlists_response1.py), [GetApiV1WatchlistsByIdErrorBody](nordic_financial_news/errors/get_api_v1_watchlists_by_id_error.py)&#93;</code>

**On `Success`**: `payload` is <code>[ApiV1WatchlistsResponse1](nordic_financial_news/models/api_v1_watchlists_response1.py)</code> -- Watchlist retrieved successfully

**On `Failure`**: `error` is <code>[GetApiV1WatchlistsByIdErrorBody](nordic_financial_news/errors/get_api_v1_watchlists_by_id_error.py)</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404 | <code>[ProblemDetails](nordic_financial_news/models/problem_details.py)</code> |
| anything unmapped | <code>[RawError](nordic_financial_news/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

