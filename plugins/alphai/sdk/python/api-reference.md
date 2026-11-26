# Reference

**Parsed** endpoints return the typed payload and raise `ApiError` on a documented non-2xx. For the raw endpoints, see [Raw API Reference](raw-api-reference.md).

> Source: [AlphAiClient](alph_ai/client.py)

## Calendar

> Source: [Calendar](alph_ai/apis/calendar.py)

<details>
<summary><code>def get_api_calendar(*, from_date: str | None = None, to_date: str | None = None, event_key: str | None = None, importance: ImportanceOrStr | None = None, country: CountryOrStr | None = Country.US, request_options: RequestOptionsOrDict | None = None) -> CalendarEvents</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The official forward schedule of US macro releases: FOMC decisions
(with SEP and press-conference markers) and minutes, CPI, PPI, the
jobs report (nonfarm payrolls), GDP estimates (advance/second/third),
PCE, advance retail sales, weekly jobless claims and JOLTS — sourced
from the agencies' own schedule pages (Fed, BLS, BEA, Census, DOL).

Each occurrence carries a stable `uid` (`US-CPI-2026-07`) that
survives reschedules: a moved release keeps its identity, updates
`scheduled_at` and reports `schedule_status`. `phase` says only
whether the scheduled moment has passed (`upcoming`/`elapsed`) — it
deliberately does not claim the agency actually published. Pair the
calendar with `/api/news/macro/` to read what a release meant once
it's out.

The window is `[from_date, to_date)` — from inclusive, to exclusive;
date-only values mean UTC midnight; defaults are today (UTC) → +7
days; the span is capped at 400 days. No pagination: a full year of
every series is ~250 rows (hard cap 500), ordered by `scheduled_at`
ascending. Cancelled and postponed occurrences stay in the response
with their `schedule_status`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.calendar.get_api_calendar(
        from_date="2026-08-07", to_date="2026-08-14", event_key="cpi,nfp,fomc_decision"
    )
    # TODO: Handle 'response' of type CalendarEvents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiCalendarErrorBody
```

**Async**

```python
try:
    response = await async_client.calendar.get_api_calendar(
        from_date="2026-08-07", to_date="2026-08-14", event_key="cpi,nfp,fomc_decision"
    )
    # TODO: Handle 'response' of type CalendarEvents
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiCalendarErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>from_date</code> | <code>str \| None</code> | Window start, inclusive. `YYYY-MM-DD` (UTC midnight) or an ISO datetime (naive = UTC). Default: today, UTC midnight.<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>str \| None</code> | Window end, exclusive. Same formats. Default `from_date` + 7 days; span capped at 400 days.<br>**Default**: <code>None</code> |
| <code>event_key</code> | <code>str \| None</code> | Narrow to specific series, comma-separated. Unknown keys return 400.<br>**Default**: <code>None</code> |
| <code>importance</code> | <code>[ImportanceOrStr](alph_ai/models/enums/importance.py) \| None</code> | Narrow by importance tier.<br>**Default**: <code>None</code> |
| <code>country</code> | <code>[CountryOrStr](alph_ai/models/enums/country.py) \| None</code> | v1 covers US releases only.<br>**Default**: <code>Country.US</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalendarEvents](alph_ai/models/calendar_events.py)</code> -- Occurrences within the window, `scheduled_at` ascending.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiCalendarErrorBody](alph_ai/errors/get_api_calendar_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## CoverageApi

> Source: [CoverageApi](alph_ai/apis/coverage_api.py)

<details>
<summary><code>def get_api_coverage(*, request_options: RequestOptionsOrDict | None = None) -> Coverage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One object per data source: `publisher_news` (the GDELT stream, RSS
feeds and directly parsed publisher pages), `sec_form4`, `sec_form8k`, `sec_form6k`,
`earnings_reads`, `earnings_schedule` and `economic_calendar`. Each
carries its earliest and latest row, the last ingest time, the row
count in the source's own unit, the collector's cadence, a history
note saying where the history is thin, the known limits, and the
per-plan archive horizon. Read this before backtesting or promising
coverage downstream: `first_row_at` is the earliest row we hold, NOT
the start of dense coverage — `history_note` says which months are
thin (publisher news densified in June 2026; Form 4 before May 2026
is an unenriched replay; 8-K history starts June 2026; 6-K and
earnings reads start 2026-07-28).

The passport is computed once a day (03:50 UTC) and served from a
cache: `as_of` is when the counts were taken and `generated_at` when
the payload was assembled, so both describe the computation, never
the response. Rows may be up to a day newer than `last_row_at`. On a
cold cache the first caller computes it (a few seconds); a concurrent
caller gets `503` with `Retry-After` instead of a second scan.

`stale` is an honest flag, not an alert: true when the newest ingest
is older than `stale_after_seconds` — six poll cycles for the
collectors, three days for SEC filings (EDGAR takes no filings on
weekends), ten days for earnings reads — or, for the economic
calendar (`stale_after_seconds` null), when no future occurrence is
held. `publisher_news` additionally reports each discovery channel
(`gkg`, `rss`) with its own last ingest and flag.
`research_only` restates that everything described here is
AI-generated financial information for research, not investment
advice.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.coverage_api.get_api_coverage()
    # TODO: Handle 'response' of type Coverage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiCoverageErrorBody
```

**Async**

```python
try:
    response = await async_client.coverage_api.get_api_coverage()
    # TODO: Handle 'response' of type Coverage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiCoverageErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Coverage](alph_ai/models/coverage.py)</code> -- The passport, one object per source in a fixed order.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiCoverageErrorBody](alph_ai/errors/get_api_coverage_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429, 503 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](alph_ai/apis/news.py)

<details>
<summary><code>def get_api_news(*, cursor: str | None = None, symbol: str | None = None, category: list[NewsCategoryOrStr] | None = None, exclude_categories: list[NewsCategoryOrStr] | None = None, min_relevance: int | None = 4, page_size: int | None = 10, collapse: CollapseOrStr | None = None, collapse_stories: bool | None = False, sort: Sort1OrStr | None = Sort1.PUBLISHED, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, source_type: list[NewsSourceTypeOrStr] | None = None, item: str | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsPagination</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Feed of enriched articles, newest first. Default filter:
`relevance_score >= 4` AND at least one active ticker. Pagination is
cursor-based with a default page size of 10 (any size from 1 to 20 via
`page_size=`; Pro keys go up to 50): omit `cursor` for the newest page,
then pass the
`next_cursor` from each response to fetch the next (older) page. `next_cursor: null` means the end of the feed. Cursors are opaque — do
not construct or parse them; an invalid cursor returns 400. Archive
depth is tiered: paging back past your plan's horizon (Free 30 days,
Basic 90, Pro 180) returns 403 with an upgrade hint. **Delta polling** (`sort=ingested`): the same feed ordered by the
moment rows became available, for "what is new since my last poll". Articles reach the feed later than their publish time (collection
median ~30 min for general news, with a long tail), so a poller that
filters by `time_published` misses most late arrivals; `sort=ingested`
follows ingest order. First call without `cursor` returns a bounded
sample of up to `page_size` recent visible rows and a cursor at the
feed head. This initial sample may be partial or empty when the scan
reaches its work limit; it still starts the live stream. Each later call with
the previous `next_cursor` returns only rows added since. In this mode
`next_cursor` is always non-null — empty `results` means you are
caught up, keep the cursor and poll again later (responses are cached
for 60 s, so polling more often than once a minute buys nothing). New
rows only: an update to an already-delivered article is not re-sent. `time_published` is not monotonic within a delta page; sort client-side
if you need chronological order. A cursor is only valid with the sort
mode that issued it. On resumed requests, empty **successful** pages mean the current scan is caught up. A
nonempty page shorter than `page_size` may still have a continuation;
keep following its cursor. If a bounded scan cannot produce a page,
HTTP 409 reports `extra.reason="delta_scan_incomplete"` and
`extra.next_cursor`. Continue from that cursor with identical filters
and sort; repeating the original request cannot resolve this work limit. A concurrent change during reading instead returns HTTP 503 with
`extra.reason="delta_candidates_changed"`: retry the original request,
without advancing its cursor. Neither error is cached. MCP delta tools
report the same JSON envelopes as tool errors. The cursor family,
archive gates and story-collapse behavior remain unchanged. Delta mode carries live coverage only: when we add history in bulk
(backfilling an earlier period), those rows do NOT enter this stream —
they would arrive as thousands of "new" items that are months old and
push your cursor far behind the live feed. They are served normally in
`sort=published`, by date filters and by `/api/news/{uid}/`, so a
one-off catch-up over the archive is a published-mode query. **Keeping up.** One call returns at most `page_size` rows, so a poller
holds its position at the head only while `calls per day × page_size`
stays above the daily volume of the stream it asked for. Below that it
falls a little further behind every day, and the symptom misleads:
`time_published` reads hours or days old while the data is current. What went stale is the cursor, not the feed. So drain instead of
polling once per tick: when a page comes back with `results` filled,
call again immediately, and sleep only once `results` is empty. That
clears a burst within the same cycle and lets a poller catch up by
itself after downtime. Two levers if the call budget is still short,
and they multiply: `page_size` (up to 20, or 50 on a Pro key) and a
narrower stream (`min_relevance`, `symbol`, `category`). For scale, at
the default `>= 4` floor the feed carries roughly 2,700 rows a day,
while `min_relevance=7` carries roughly 1,000.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news(
        symbol="NVDA",
        from_date=datetime(2026, 6, 1, 0, 0, 0, tzinfo=timezone.utc),
        to_date=datetime(2026, 6, 30, 23, 59, 59, tzinfo=timezone.utc),
        item="5.02",
    )
    # TODO: Handle 'response' of type NewsPagination
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news(
        symbol="NVDA",
        from_date=datetime(2026, 6, 1, 0, 0, 0, tzinfo=timezone.utc),
        to_date=datetime(2026, 6, 30, 23, 59, 59, tzinfo=timezone.utc),
        item="5.02",
    )
    # TODO: Handle 'response' of type NewsPagination
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`. Omit for the newest page.<br>**Default**: <code>None</code> |
| <code>symbol</code> | <code>str \| None</code> | Filter to articles that mention this ticker. US equities use the bare symbol (`NVDA`); cryptocurrencies use the `<SYM>-USD` form (`BTC-USD`), and a bare crypto name resolves to it (`DOGE` matches `DOGE-USD`); foreign listings use the Yahoo suffix (`VOD.L`). A delisted symbol returns its news history. A renamed company's current ticker also matches articles tagged with its former ticker, and any share class of an issuer matches articles tagged with its other listed classes (`GOOGL` includes rows tagged `GOOG`); article tags stay as published. `ticker` is accepted as an alias.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;[NewsCategoryOrStr](alph_ai/models/enums/news_category.py)&#93; \| None</code> | Keep only these categories. Accepts a single value, a CSV list (`category=earnings,insider`), or a repeated parameter — matches any of them (OR).<br>**Default**: <code>None</code> |
| <code>exclude_categories</code> | <code>list&#91;[NewsCategoryOrStr](alph_ai/models/enums/news_category.py)&#93; \| None</code> | Drop these categories from the feed. Same single / CSV / repeated forms as `category`.<br>**Default**: <code>None</code> |
| <code>min_relevance</code> | <code>int \| None</code> | Override the default ≥4 threshold.<br>**Default**: <code>4</code> |
| <code>page_size</code> | <code>int \| None</code> | Items per page, default `10`. Any value from `1` to `20` is accepted on every tier; `21`-`50` requires a Pro key. A value outside `1`-`50`, or an over-`20` page without a Pro key, returns 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each response's `next_cursor` back as `cursor` regardless of page size. `limit` is accepted as an alias.<br>**Default**: <code>10</code> |
| <code>collapse</code> | <code>[CollapseOrStr](alph_ai/models/enums/collapse.py) \| None</code> | `story` collapses coverage of one event to a single representative row (the story root): syndicated reprints and independently written articles about the same event, matched on headline and lead similarity. Populates the `story_id`, `sources_count` and `sources` fields on each item. Omit for the full feed (every article, story fields `null`). Only `story` is accepted; any other value returns 400.<br>Note: row-level filters (`symbol`, `category`, `min_relevance`) apply to the story's representative root, so a story whose root does not match the filter is omitted entirely. The root is the best copy the enricher has seen: a later copy that outscores a weak root (one below 7) takes the root over, so a story's `story_id` and its place in the feed can move once to that copy; a root at 7 or above is never replaced. An 8-K that carries a press release as its exhibit is a member of that release's story (same issuer, the release's headline inside the filing, within 3 hours) when the release itself scores at or above the feed floor, so with `source_type=sec_form8k` a collapsed feed omits such filings — read them uncollapsed. A filing whose release scored below the floor stays its own story.<br>**Default**: <code>None</code> |
| <code>collapse_stories</code> | <code>bool \| None</code> | Boolean alias matching the MCP and Python SDK option. `true` is equivalent to `collapse=story`; `false` leaves articles ungrouped. Send either `collapse` or `collapse_stories`, not both (400).<br>**Default**: <code>False</code> |
| <code>sort</code> | <code>[Sort1OrStr](alph_ai/models/enums/sort1.py) \| None</code> | `published` (default) is the reverse-chronological feed. `ingested` is delta-polling mode: rows in the order they became available, ascending, with `next_cursor` always returned (empty `results` = caught up) — see the endpoint description. All other filters apply unchanged in both modes. Cursors are mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).<br>**Default**: <code>Sort1.PUBLISHED</code> |
| <code>from_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive lower bound on `time_published` — when the article was published, not when it entered the feed. ISO-8601; a value without a timezone is read as UTC. A bare date (`2026-06-01`) means that day's midnight.<br>Reaching further back than your plan's archive horizon returns 403 (see the `403` response) — the window is subject to the same tiered depth as a deep `cursor`, and on the first page just the same. Cannot be combined with `sort=ingested` (400): delta mode returns rows in ingest order from your cursor and never walks back into history.<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive upper bound on `time_published`, same format as `from_date`. A bare date (`2026-06-01`) covers the WHOLE day (through `23:59:59.999999Z`), so `from_date=2026-06-01&to_date=2026-06-01` returns that day rather than an empty page. `from_date` later than `to_date` returns 400.<br>**Default**: <code>None</code> |
| <code>source_type</code> | <code>list&#91;[NewsSourceTypeOrStr](alph_ai/models/enums/news_source_type.py)&#93; \| None</code> | Keep only rows ingested from these sources: `gdelt` (press coverage), `sec_form4` (insider transactions), `sec_form8k` (8-K current reports), `sec_form6k` (a foreign private issuer's 6-K earnings release). Same single / CSV / repeated forms as `category`, OR-matched. Unknown values return 400. Composes with every other filter: `source_type=sec_form8k&symbol=NVDA` is one company's 8-Ks, `source_type=gdelt&min_relevance=8` is the press without any filing.<br>**Default**: <code>None</code> |
| <code>item</code> | <code>str \| None</code> | 8-K item code, e.g. `5.02` (officer departures/appointments), `8.01` (other events), `1.01` (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing, not just the one that drove its category — and implies `source_type=sec_form8k`; `item` next to any other `source_type` returns 400 (only 8-Ks have item codes). The category filter already covers the two headline items (`2.02` → `earnings`, `2.01` → `mergers_acquisitions`); `item` is for everything else. A filing SEC served no document for has an empty item list and never matches. Every matched row carries the `filing` block.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsPagination](alph_ai/models/news_pagination.py)</code> -- A page of enriched articles.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsErrorBody](alph_ai/errors/get_api_news_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 403, 409, 429, 503 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_brief(tickers: list[str], *, hours: int | None = 24, limit: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> WatchlistBriefDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One response with recent news grouped by story, a separate SEC Form
4/8-K/6-K filings section, and the next confirmed earnings date per
ticker. Supply your symbols explicitly; this endpoint does not read
an account's saved watchlist. The website and MCP tool
`alphai_watchlist_brief` use the caller's saved list instead.

`hours` is a publication-time window ending at `generated_at`, both
ends inclusive. This is a ranked snapshot, not a delta since the last
call. Bulk backfills are excluded. Within each section, the newest
500 matching articles at the configured relevance floor (default 4)
are grouped, then ranked by each group's highest relevance and novelty,
then its newest publication time. Fields on a returned event describe
the representative article. `limit`
applies independently to news and filings. Either a candidate overflow
or additional grouped stories sets that section's `*_truncated` flag.
A truncated response is a selection, not a complete event inventory;
narrow `hours` or use the paginated ticker feed for further coverage.

An event shared by several requested tickers appears once, with
`matched_tickers` naming all matches. If press coverage and a filing
share a story, the filing represents it once in the filings section.
Distinct Form 4 transaction legs
remain separate even when they share a filing URL. Share classes and
former ticker names are included. Unrecognized symbols are returned
in `unknown_tickers`; bare crypto names are not guessed (use BTC-USD).
Dates are confirmed only, on or after today's America/New_York date,
excluding reports already matched to a published filing;
absence means no confirmed date on file, not that no report is due.
Available on every tier. Responses use `Cache-Control: private, no-store`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_brief(["NVDA", "AMD", "BTC-USD"])
    # TODO: Handle 'response' of type WatchlistBriefDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsBriefErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_brief(["NVDA", "AMD", "BTC-USD"])
    # TODO: Handle 'response' of type WatchlistBriefDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsBriefErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>tickers</code> | <code>list&#91;str&#93;</code> | 1–100 distinct symbols, comma-separated or repeated; case-insensitive. |
| <code>hours</code> | <code>int \| None</code> | Value sent with the request.<br>**Default**: <code>24</code> |
| <code>limit</code> | <code>int \| None</code> | Maximum grouped stories in each section; this brief has no cursor.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistBriefDto](alph_ai/models/watchlist_brief_dto.py)</code> -- Brief with explicit coverage and truncation information.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsBriefErrorBody](alph_ai/errors/get_api_news_brief_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_by_uid(uid: str, *, request_options: RequestOptionsOrDict | None = None) -> RichNewsArticle</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One enriched article. SEC rows carry the same structured block the
feeds serve: `insider` on a Form 4 row (as on `/api/news/insider/`),
`filing` on an 8-K row (as on `/api/news/`), so a uid taken from
`/api/news/insider/clusters/` opens with its trade data. An 8-K or
6-K earnings filing can also carry `earnings` (see that field), which
no feed populates.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_by_uid("some example string")
    # TODO: Handle 'response' of type RichNewsArticle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsByUidErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_by_uid("some example string")
    # TODO: Handle 'response' of type RichNewsArticle
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsByUidErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RichNewsArticle](alph_ai/models/rich_news_article.py)</code> -- A single enriched article.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsByUidErrorBody](alph_ai/errors/get_api_news_by_uid_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_by_uid_related(uid: str, *, request_options: RequestOptionsOrDict | None = None) -> ApiNewsRelatedResponse</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Up to 6 articles related to the given article: fresh articles sharing
a ticker first, then same-category recents as backfill. Same enriched
shape and `relevance_score >= 4` filtering as `/api/news/`; insider
(SEC Form 4) rows are excluded unless the base article is itself
insider. No pagination — the list is a fixed-size block.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_by_uid_related("some example string")
    # TODO: Handle 'response' of type ApiNewsRelatedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsByUidRelatedErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_by_uid_related("some example string")
    # TODO: Handle 'response' of type ApiNewsRelatedResponse
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsByUidRelatedErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>uid</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiNewsRelatedResponse](alph_ai/models/api_news_related_response.py)</code> -- Related enriched articles (possibly fewer than 6).

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsByUidRelatedErrorBody](alph_ai/errors/get_api_news_by_uid_related_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_insider(*, cursor: str | None = None, symbol: str | None = None, min_relevance: int | None = 4, is_10b5_1: bool | None = None, page_size: int | None = 10, sort: Sort1OrStr | None = Sort1.PUBLISHED, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, format_: FormatOrStr | None = Format.JSON, request_options: RequestOptionsOrDict | None = None) -> NewsPagination</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dedicated insider feed (`category=insider`): SEC EDGAR Form 4 insider
activity ONLY — one deterministic-templated row per filing event
(a filing's non-derivative trades of one type and holding form,
aggregated: total shares, volume-weighted average price and executed
range, total value), surfaced shortly after filing, with the relevance
score computed from the event's total (size, buy vs. sell, 10b5-1 plan
or not). A sale (`transaction_code` `S`) tops out at 6 whatever its
size, and so does a sale back to the issuer (`D`) that leaves the
insider with no shares, which is how holdings are cashed out when an
acquisition closes. Purchases, and a `D` that leaves a holding (the
company buying back a holder's block), use the full scale. A sale
filed without a price stays at 6 too. Same enriched shape, ticker
and `relevance_score >= 4` filtering, and cursor-based pagination as
`/api/news/`. Equivalent to `/api/news/?category=insider`, surfaced as a
first-class route. For aggregate stats instead of the stream, see
`/api/symbols/{ticker}/insider-summary/`.

The category is fixed to `insider`. This endpoint does not accept
`category`, `exclude_categories` or story-grouping parameters; use
`/api/news/` for those filters.

To watch for new filings, poll with `sort=ingested` rather than
re-reading the newest page: a Form 4 is filed up to several days after
the trade it reports, so a new event often enters the feed already
below the head of the publish-ordered page. Delta mode orders by the
moment the row became available, so it never misses one. The contract
is identical to `/api/news/?sort=ingested` — see that endpoint for the
full description.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_insider(
        symbol="NVDA",
        from_date=datetime(2026, 6, 1, 0, 0, 0, tzinfo=timezone.utc),
        to_date=datetime(2026, 6, 30, 23, 59, 59, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type NewsPagination
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsInsiderErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_insider(
        symbol="NVDA",
        from_date=datetime(2026, 6, 1, 0, 0, 0, tzinfo=timezone.utc),
        to_date=datetime(2026, 6, 30, 23, 59, 59, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type NewsPagination
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsInsiderErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`. Omit for the newest page.<br>**Default**: <code>None</code> |
| <code>symbol</code> | <code>str \| None</code> | Filter to insider news that mentions this ticker. Delisted symbols return their history; a renamed company's current ticker also matches rows tagged with its former ticker. `ticker` is accepted as an alias.<br>**Default**: <code>None</code> |
| <code>min_relevance</code> | <code>int \| None</code> | Override the default ≥4 threshold. Insider rows score deterministically from the event's summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an "only large trades" dial: `min_relevance=6` keeps purchases from roughly $500k and sales from roughly $1M, `min_relevance=7` keeps purchases from roughly $1M and no sales, except a large buyback by the company from a holder who keeps a stake (`transaction_code` `D`). A 10b5-1 plan trade sits one step lower.<br>**Default**: <code>4</code> |
| <code>is_10b5_1</code> | <code>bool \| None</code> | Filter on the same field each item's `insider` block reports: the event's Rule 10b5-1 status. Omit for every event; `false` returns discretionary trades only — the "hide pre-scheduled sales" dial, since a 10b5-1 ladder was set up months earlier and carries no timing decision; `true` returns plan events only. Event-level, like the field itself: a filing whose group mixes plan and discretionary tranches counts as a plan event on both. The two values partition the feed, so `true` and `false` pages always add up to the unfiltered one.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Items per page, default `10`. Any value from `1` to `20` is accepted on every tier; `21`-`50` requires a Pro key. A value outside `1`-`50`, or an over-`20` page without a Pro key, returns 400. `limit` is accepted as an alias.<br>**Default**: <code>10</code> |
| <code>sort</code> | <code>[Sort1OrStr](alph_ai/models/enums/sort1.py) \| None</code> | `published` (default) is the reverse-chronological feed. `ingested` is delta-polling mode, with the same contract as on `/api/news/`: rows in the order they became available, ascending, `next_cursor` always returned (empty `results` = caught up), and all other filters applied unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the trade it reports, so a new event routinely lands below the newest page of the publish-ordered feed and a poller reading only the head misses it. Cursors are mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).<br>**Default**: <code>Sort1.PUBLISHED</code> |
| <code>from_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive lower bound on `time_published`, identical in format and behaviour to the parameter on `/api/news/` (ISO-8601, naive read as UTC, tier-gated with 403, refused with `sort=ingested`).<br>Note which clock it is: `time_published` is when the filing reached the feed, NOT the insider's `transaction_date` reported in the `insider` block. A Form 4 is filed days after the trade, so a window over trade dates is a different question and this parameter does not answer it.<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive upper bound on `time_published`. A bare date covers the whole day; same clock caveat as `from_date`.<br>**Default**: <code>None</code> |
| <code>format_</code> | <code>[FormatOrStr](alph_ai/models/enums/format.py) \| None</code> | Response format. `json` (default) is the page described below.<br>`csv` streams the same feed as a file: one row per insider event,<br>the same filters (`symbol`, `min_relevance`, `is_10b5_1`,<br>`from_date`/`to_date`, `sort`, `cursor`), walked page by page on<br>the server up to your plan's **row cap** — Free 500, Basic 2 000,<br>Pro 10 000 rows per file — inside your plan's archive horizon<br>(30 / 90 / 180 days). `page_size` has no effect on CSV. One<br>request counts once against your rate limit, whatever the file's<br>length.<br><br>Where a JSON page past the horizon returns 403, the file stops at the horizon and the<br>response headers say so (`X-Alphai-Truncated: archive_horizon`).<br>Validation errors (a bad cursor, an inverted window, a window with<br>`sort=ingested`) are the same 400 JSON bodies as for `format=json`,<br>sent before any row.<br><br>Concurrent feed changes or a connection error can interrupt the<br>stream after headers are sent. Accept a file only after the stream<br>completes and the number of parsed CSV data rows matches<br>`X-Alphai-Rows`. Otherwise discard the partial file and retry the<br>original request; do not advance to `X-Alphai-Next-Cursor`.<br><br>Response: `Content-Type: text/csv; charset=utf-8`,<br>`Content-Disposition: attachment; filename="alphai-insider-<date>.csv"`,<br>`Cache-Control: private, no-store`, plus the `X-Alphai-*` headers<br>listed under the 200 response: `X-Alphai-Rows` (data rows in the<br>file), `X-Alphai-Row-Cap` (your plan's cap), `X-Alphai-Truncated`<br>(`row_cap` — more rows exist, continue with the cursor;<br>`archive_horizon` — the walk reached your plan's archive depth;<br>`false` — the file holds everything the filters select) and<br>`X-Alphai-Next-Cursor` (present when there is more: the same token<br>a JSON page would have returned at that position, so you can<br>continue in either format).<br><br>Columns, in order: `uid`, `time_published`, `tickers`<br>(`\|`-joined), `title`, `url`, `category`, `relevance_score`,<br>`side`, `transaction_code`, `shares`, `avg_price_usd`,<br>`total_value_usd`, `is_10b5_1`, `insider_name`, `insider_title`,<br>`is_officer`, `is_director`, `is_ten_percent_owner`,<br>`transaction_date`, `filed_at`, `late_filing`, `summary` — the<br>JSON item's fields and its `insider` block flattened (event<br>columns are empty for a row without a block). RFC 4180 quoting,<br>LF line endings, UTF-8, timestamps in ISO 8601 UTC (`Z`),<br>booleans `true`/`false`, an empty cell for null, never the article<br>body. A free-text cell that begins with `=`, `+`, `-`, `@` or a<br>tab is prefixed with an apostrophe so it cannot run as a formula<br>when the file is opened in a spreadsheet.<br><br>Select the format with this parameter only: an `Accept: text/csv`<br>header on its own still returns JSON, and a client that sends<br>`Accept: application/json` together with `format=csv` gets 406.<br>With `sort=ingested` and no cursor the file holds the newest rows<br>(up to the cap) in ingest order and the cursor parks at the head,<br>like the JSON prime page; with a cursor it holds everything since<br>that position, with rows older than your archive horizon skipped<br>and reported as `archive_horizon`.<br>**Default**: <code>Format.JSON</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsPagination](alph_ai/models/news_pagination.py)</code> -- A page of enriched insider-transaction articles. Each item additionally carries the structured `insider` event block (side / shares / average price / total value / reporting owner) — populated on this endpoint only. With `format=csv`, the same rows as a streamed CSV file: see the `format` parameter for the columns, the per-plan row caps and the `X-Alphai-*` headers.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsInsiderErrorBody](alph_ai/errors/get_api_news_insider_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 403, 409, 429, 503 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_insider_clusters(*, days: int | None = 30, min_buyers: int | None = 2, min_usd: int | None = None, pattern: Pattern1OrStr | None = Pattern1.OPEN_MARKET, symbol: str | None = None, sort: Sort3OrStr | None = Sort3.RECENT, cursor: str | None = None, page_size: int | None = 10, request_options: RequestOptionsOrDict | None = None) -> InsiderClustersPage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Episodes in which **several different insiders of one issuer bought on
the open market together**: an issuer's Form 4 purchase dates are
chained into one episode while consecutive purchases are at most 10
days apart (an episode is cut at 30 days), and every purchase inside
it is examined before a buyer counts.

Counting names is not enough — the loudest look-alikes are an IPO or
PIPE allocation (caught by its price shape, or by the filing's own
footnote saying the shares came from the issuer, an offering or a
negotiated block), a mutual-bank conversion, ESPP / DRIP /
director-plan lots, the same transaction reported through two owners
(a director via the fund and the fund itself), and plan lots sitting
next to one real purchase. Each buyer therefore carries a `role`:
`independent` buyers are the cluster; `plan_like` (with `reason` when
the filing's words decided it), `unpriced` and `duplicate_of` buyers
are listed so you can see why a 30-name filing burst is not one. The episode's `pattern` is `open_market` when at
least two independent buyers remain and one of them is an officer or
director, `holders_only` when only 10% holders without a role remain,
and `plan_or_offering` otherwise. The default hides everything but
`open_market`; ask for the rest explicitly. The rule was fixed against
90 episodes checked by hand against the filings (2026-09-22): it shows
58 of 58 real clusters and hides 29 of 30 look-alikes; a 401(k) plan
purchase can still pass, since the filing says so only in a footnote.

`days` is measured on `known_at` — the moment the episode's latest
filing reached EDGAR — so "what became known this month" is one call.
A purchase filed more than ~40 days after the trade is not chained
(2.3% of Form 4 purchases). Coverage starts at `meta.coverage_since`
(the tranche table begins in August 2025); this is a descriptive
screen (`research_only`, not point-in-time), with no returns attached.
Only common-stock purchases outside Rule 10b5-1 plans are considered;
units, preferred and warrants are ignored.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_insider_clusters(symbol="NVDA")
    # TODO: Handle 'response' of type InsiderClustersPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsInsiderClustersErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_insider_clusters(symbol="NVDA")
    # TODO: Handle 'response' of type InsiderClustersPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsInsiderClustersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>days</code> | <code>int \| None</code> | Lookback in days over `known_at`, `1`-`90`, default `30`. Deeper than your plan's archive horizon (Free 30, Basic 90) returns 403.<br>**Default**: <code>30</code> |
| <code>min_buyers</code> | <code>int \| None</code> | Minimum headcount, `2`-`10`, default `2`: independent buyers for `open_market` / `holders_only` episodes, everyone who bought (`buyers_total`) for `plan_or_offering` ones, where by construction fewer than two buyers are independent.<br>**Default**: <code>2</code> |
| <code>min_usd</code> | <code>int \| None</code> | Drop episodes whose `total_usd` is below this. An episode with an unknown total (`value_partial` with no priced fill) is kept, not dropped — a missing number is not a small one.<br>**Default**: <code>None</code> |
| <code>pattern</code> | <code>[Pattern1OrStr](alph_ai/models/enums/pattern1.py) \| None</code> | `open_market` (default), `plan_or_offering`, `holders_only`, or `all`. Insiders taking a $70M IPO allocation is an event too; it is labeled, not hidden, when you ask for it.<br>**Default**: <code>Pattern1.OPEN_MARKET</code> |
| <code>symbol</code> | <code>str \| None</code> | One ticker. A renamed company's current ticker also matches episodes tagged with its former ticker, and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still returns its episodes when named explicitly; the unfiltered list shows active listings only. `ticker` is accepted as an alias.<br>**Default**: <code>None</code> |
| <code>sort</code> | <code>[Sort3OrStr](alph_ai/models/enums/sort3.py) \| None</code> | `recent` (default) — newest `known_at` first; `buyers` — most independent buyers first, ties by value; `value` — largest `total_usd` first, unknown totals last. Cursors are sort-specific.<br>**Default**: <code>Sort3.RECENT</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`, with the same `sort`. Omit for the first page.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Items per page, default `10`; `1`-`20` on every tier, `21`-`50` with a Pro key. `limit` is accepted as an alias.<br>**Default**: <code>10</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsiderClustersPage](alph_ai/models/insider_clusters_page.py)</code> -- A page of classified purchase episodes, newest known first by default.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsInsiderClustersErrorBody](alph_ai/errors/get_api_news_insider_clusters_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 403, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_macro(*, cursor: str | None = None, category: str | None = None, min_relevance: int | None = 4, page_size: int | None = 10, sort: Sort1OrStr | None = Sort1.PUBLISHED, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsPagination</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dedicated macro feed: the `macro_economy`, `commodities` and
`geopolitics` categories in one stream — central-bank decisions and
statements (FOMC), inflation/jobs prints, oil and gold, geopolitical
risk. Same enriched shape, `relevance_score >= 4` floor and
cursor-based pagination as `/api/news/`; equivalent to
`/api/news/?category=macro_economy,commodities,geopolitics`, surfaced
as a first-class route.

Macro rows are market-wide, so most carry an empty `tickers` list —
that is by design (an FOMC statement is not news about one company),
and the per-article analysis block is still populated. A macro row
that IS about listed companies (an oil-price story tagged to majors)
keeps its tickers.

To watch for new releases, poll with `sort=ingested` — same delta
contract as `/api/news/?sort=ingested`.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_macro(
        category="macro_economy",
        from_date=datetime(2026, 9, 16, 0, 0, 0, tzinfo=timezone.utc),
        to_date=datetime(2026, 9, 17, 23, 59, 59, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type NewsPagination
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsMacroErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_macro(
        category="macro_economy",
        from_date=datetime(2026, 9, 16, 0, 0, 0, tzinfo=timezone.utc),
        to_date=datetime(2026, 9, 17, 23, 59, 59, tzinfo=timezone.utc),
    )
    # TODO: Handle 'response' of type NewsPagination
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsMacroErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`. Omit for the newest page.<br>**Default**: <code>None</code> |
| <code>category</code> | <code>str \| None</code> | Narrow to a subset of the macro categories, comma-separated. Values outside `macro_economy`/`commodities`/`geopolitics` return 400 (the full category filter lives on `/api/news/`).<br>**Default**: <code>None</code> |
| <code>min_relevance</code> | <code>int \| None</code> | Override the default ≥4 threshold. On release days the release itself scores 7-9, so `min_relevance=7` keeps roughly "the events" and drops the commentary.<br>**Default**: <code>4</code> |
| <code>page_size</code> | <code>int \| None</code> | Items per page, default `10`. Any value from `1` to `20` is accepted on every tier; `21`-`50` requires a Pro key. A value outside `1`-`50`, or an over-`20` page without a Pro key, returns 400. `limit` is accepted as an alias.<br>**Default**: <code>10</code> |
| <code>sort</code> | <code>[Sort1OrStr](alph_ai/models/enums/sort1.py) \| None</code> | `published` (default) is the reverse-chronological feed. `ingested` is delta-polling mode, with the same contract as on `/api/news/`. Cursors are mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).<br>**Default**: <code>Sort1.PUBLISHED</code> |
| <code>from_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive lower bound on `time_published`, exactly as on `/api/news/`: ISO-8601, a value without a timezone is read as UTC, a bare date (`2026-09-16`) means that day's midnight. "What did the tape say after the decision" is `from_date=<decision day>` plus `min_relevance=7`. Subject to your plan's archive horizon (403 on the first page, see the `403` response) and refused with `sort=ingested` (400).<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive upper bound on `time_published`, same format as `from_date`. A bare date covers the WHOLE day, so `from_date=2026-09-16&to_date=2026-09-16` returns that day. `from_date` later than `to_date` returns 400.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsPagination](alph_ai/models/news_pagination.py)</code> -- A page of enriched macro articles.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsMacroErrorBody](alph_ai/errors/get_api_news_macro_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 403, 409, 429, 503 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_search(q: str, *, cursor: str | None = None, symbol: str | None = None, category: list[NewsCategoryOrStr] | None = None, source_type: list[SourceTypeOrStr] | None = None, item: str | None = None, min_relevance: int | None = 4, page_size: int | None = 10, collapse: CollapseOrStr | None = None, collapse_stories: bool | None = False, from_date: RFC3339DateTime | None = None, to_date: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None) -> NewsSearchPage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search the enriched feed by words. `q` is matched against each
article's title, its summary and the entity names the enrichment
extracted; the page comes back ranked (best match first, newest first
among equal matches), with a per-item `search_match` and a `query`
block that says how the words were read. `symbol`, `category`,
`source_type`, `item`, `min_relevance`, `from_date`, `to_date` and
`collapse` apply as hard filters on top, exactly as on `/api/news/`:
`q=director&item=5.02` searches 8-K filings that carry item 5.02,
`q="going concern"&source_type=gdelt` searches press coverage only.

**Query syntax.** Bare words are all required (`chip tariffs`); a
quoted phrase must appear in order (`"going concern"`); `-word`
excludes (`apple -iphone`); `OR` separates alternatives
(`nvidia OR amd`). Words in a non-Latin script are ignored. Matching
tolerates one typo from five letters (`prices` reaches `price`) and a
prefix on the last word; there is no stemming.

**Modes** (`query.mode`). `strict`: every word matched. `broadened`:
the strict pass found fewer than 5 rows and the query has three or
more words, so the most frequent words were dropped and the page
carries rows with at least two of the query's words —
`search_match.terms_matched` says how many on each; read these as
leads, not matches. `no_match`: nothing in the searched window.
`no_terms`: the query held no searchable words. Absence is not proof
the event did not happen: the searched window starts at
`query.window_from`.

**Window and paging.** The searched window is your plan's archive
horizon (Free 30 days, Basic 90, Pro 180) unless `from_date` /
`to_date` narrow it; a window reaching past the horizon returns 403
like the feed. Results are bounded to the best 200 matches (`matched`
counts them, capped at 200) and paged with an opaque `cursor` that is
bound to the query that issued it. Responses are private and never
shared-cached.

**Failure.** When the search service does not answer in time the
endpoint returns 503 with `extra.reason = "search_unavailable"`. The
structured feed and every other endpoint are unaffected: retry the
search later rather than the whole chain.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_search("Jane Street", symbol="NVDA", item="5.02")
    # TODO: Handle 'response' of type NewsSearchPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsSearchErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_search("Jane Street", symbol="NVDA", item="5.02")
    # TODO: Handle 'response' of type NewsSearchPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsSearchErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>q</code> | <code>str</code> | The words to search for, 2 to 200 characters (syntax above). `query` is accepted as an alias. |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`; only valid with the `q` that issued it.<br>**Default**: <code>None</code> |
| <code>symbol</code> | <code>str \| None</code> | Hard ticker filter, same forms and expansions as on `/api/news/` (`ticker` is an alias).<br>**Default**: <code>None</code> |
| <code>category</code> | <code>list&#91;[NewsCategoryOrStr](alph_ai/models/enums/news_category.py)&#93; \| None</code> | Hard category filter — single value, CSV or repeated, OR-matched.<br>**Default**: <code>None</code> |
| <code>source_type</code> | <code>list&#91;[SourceTypeOrStr](alph_ai/models/enums/source_type.py)&#93; \| None</code> | Keep only rows ingested from these sources, same values and forms as on `/api/news/`: `gdelt` (press coverage), `sec_form4`, `sec_form8k`, `sec_form6k`. Single, CSV or repeated, OR-matched. Unknown values return 400.<br>**Default**: <code>None</code> |
| <code>item</code> | <code>str \| None</code> | 8-K item code, e.g. `5.02`: only 8-K filings carrying that item (any item of the filing). Implies `source_type=sec_form8k`; next to any other `source_type` it returns 400.<br>**Default**: <code>None</code> |
| <code>min_relevance</code> | <code>int \| None</code> | Override the default ≥4 threshold.<br>**Default**: <code>4</code> |
| <code>page_size</code> | <code>int \| None</code> | Items per page, default `10`; `1`-`20` on every tier, up to `50` on a Pro key (`limit` is an alias).<br>**Default**: <code>10</code> |
| <code>collapse</code> | <code>[CollapseOrStr](alph_ai/models/enums/collapse.py) \| None</code> | `story` collapses coverage of one event to its best-ranked article, with `story_id`, `sources_count` and `sources` on each item.<br>**Default**: <code>None</code> |
| <code>collapse_stories</code> | <code>bool \| None</code> | Boolean alias: `true` is equivalent to `collapse=story`; `false` leaves articles ungrouped. Send either spelling, not both (400).<br>**Default**: <code>False</code> |
| <code>from_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive lower bound on `time_published` (ISO-8601, UTC when naive; a bare date is that day's midnight). Past your archive horizon → 403.<br>**Default**: <code>None</code> |
| <code>to_date</code> | <code>RFC3339DateTime \| None</code> | Inclusive upper bound on `time_published`; a bare date covers its whole day.<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsSearchPage](alph_ai/models/news_search_page.py)</code> -- A page of ranked matches.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsSearchErrorBody](alph_ai/errors/get_api_news_search_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 403, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| 503 | <code>[ApiNewsSearch503Error1](alph_ai/models/api_news_search503_error1.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_news_trending(*, request_options: RequestOptionsOrDict | None = None) -> list[RichNewsArticle]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Top stories from the trailing 48h: `relevance_score >= 8`, ranked by relevance score decayed by article age, so a fresh story outranks an equally-scored stale one. At most two stories per ticker. Fixed size of 10, no pagination. Coverage of one story, syndicated reprints and independent write-ups of the same event alike, is collapsed to a single representative, and each item carries the `story_id`, `sources_count` and `sources` fields for the story it represents. `story_id` is the story ROOT's uid — the stable story key shared with `?collapse=story` and the MCP tools — while the item itself is the story's strongest-ranked member, so `story_id` may differ from the item's own `original.uid`. Most stories are carried by a single outlet, so `sources_count` is usually 1; see its field description.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.news.get_api_news_trending()
    # TODO: Handle 'response' of type list[RichNewsArticle]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsTrendingErrorBody
```

**Async**

```python
try:
    response = await async_client.news.get_api_news_trending()
    # TODO: Handle 'response' of type list[RichNewsArticle]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiNewsTrendingErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[RichNewsArticle](alph_ai/models/rich_news_article.py)&#93;</code> -- List of enriched articles.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiNewsTrendingErrorBody](alph_ai/errors/get_api_news_trending_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Radar

> Source: [Radar](alph_ai/apis/radar.py)

<details>
<summary><code>def get_radar_snapshot(*, window: WindowOrStr | None = Window._24H, scope: ScopeOrStr | None = Scope.MARKET, market: MarketOrStr | None = Market.ALL, ticker: str | None = "", tickers: str | None = "", search: str | None = "", sort: SortAlphAiRestRadarApiOrStr | None = SortAlphAiRestRadarApi.SCORE, order: OrderOrStr | None = Order.DESC, sentiment: SentimentAlphAiRestRadarApiOrStr | None = SentimentAlphAiRestRadarApi.ALL, min_z: float | None = None, limit: int | None = 50, offset: int | None = 0, cursor: str | None = "", request_options: RequestOptionsOrDict | None = None) -> SnapshotPreviewDto</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Descriptive news-activity ranking. Free delay 3600 seconds; Basic 900 seconds; Pro no added delay. Tier and watchlist owner come from authentication, never query parameters. The public API requires a Bearer API key and uses the normal request quotas. The whole snapshot, including supporting headlines and company names, is selected at or before wall-clock time minus the tier delay. Snapshots refresh every minute and are retained for three hours. Collection and enrichment add processing time. preview_reference_at is null in live mode; a frozen development preview uses that historical clock instead and explicitly reports freshness.mode=historical_preview. as_of is the actual selected cutoff. Only tickers with current-window news appear. snapshot_id identifies immutable content including public evidence metadata. freshness states the effective delay, generation time, source check time and latest enrichment observed. Missing history or a producer more than four minutes behind returns 503, never newer data in place of a delayed snapshot. watchlist_coverage separates known quiet names from names absent from the snapshot; absent does not mean an invalid symbol. Summary is scoped before search/ticker/sentiment/min_z filters and pagination; universe describes the entire stored snapshot. Null metrics stay null. Collection coverage is unverified; these calculations are not point-in-time backtests or confirmed alerts. Historical corrections can affect the model baseline. All responses: private, no-store. event_context reports separate SEC/insider availability, cutoff, generation time, age_seconds at the numeric cutoff (not HTTP time), and lookback windows. results[].event_context contains only that row's issuer-CIK context: up to 3 recent 8-K/6-K filings over 7 days by filed_at and up to 3 open-market insider clusters over 30 days by known_at (the latest SEC filing time). Counts cover all eligible records; arrays contain the newest records. Each cluster includes up to 5 SEC evidence links, filings_count and evidence_truncated. 6-K coverage is selected ingested earnings releases only. Filings also carry news_uid, news_title, news_published and has_article for AlphAI article links. has_article means enrichment existed before the context cutoff; older snapshots default to false with null title/publication metadata. SEC URLs remain available as sec_url. Share classes with the same CIK share context, without changing news counts, scores, filters, ranking or row eligibility. No USD totals are reported. Context and its evidence follow the same tier delay and cursor; later corrections appear only in new snapshots. Context older than max_age_seconds=300 at the numeric cutoff is unavailable. Missing, disabled, stale or failed context does not fail news readings. Unavailable context has null row context; a row also has null context when it is absent from the context snapshot. Unsupported or unidentified issuers have explicit row status/reason and null counts. Supported issuers with no eligible stored records have zero counts. Available does not certify complete SEC coverage. Unknown or repeated query parameters are rejected.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.radar.get_radar_snapshot()
    # TODO: Handle 'response' of type SnapshotPreviewDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRadarSnapshotErrorBody
```

**Async**

```python
try:
    response = await async_client.radar.get_radar_snapshot()
    # TODO: Handle 'response' of type SnapshotPreviewDto
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetRadarSnapshotErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>window</code> | <code>[WindowOrStr](alph_ai/models/enums/window.py) \| None</code> | Window ending at as_of, not at wall-clock now.<br>**Default**: <code>Window._24H</code> |
| <code>scope</code> | <code>[ScopeOrStr](alph_ai/models/enums/scope.py) \| None</code> | market scans all tickers without a tier ticker cap. watchlist requires authentication and reads only the caller's existing saved symbols, matched exactly. An empty list returns no results. Existing watchlist entitlements apply (default Free 10, Basic/Pro unlimited); no separate Radar allowance.<br>**Default**: <code>Scope.MARKET</code> |
| <code>market</code> | <code>[MarketOrStr](alph_ai/models/enums/market.py) \| None</code> | Filter within the selected scope; international includes all intl:* markets.<br>**Default**: <code>Market.ALL</code> |
| <code>ticker</code> | <code>str \| None</code> | One exact ticker, case-insensitive. No alias expansion. Mutually exclusive with tickers.<br>**Default**: <code>""</code> |
| <code>tickers</code> | <code>str \| None</code> | Comma-separated exact symbols, case-insensitive. No tier ticker cap; request text is bounded to 16384 characters. Applied within scope, so it never bypasses watchlist ownership.<br>**Default**: <code>""</code> |
| <code>search</code> | <code>str \| None</code> | Case-insensitive ticker substring for interactive search. Separate from exact ticker selection.<br>**Default**: <code>""</code> |
| <code>sort</code> | <code>[SortAlphAiRestRadarApiOrStr](alph_ai/models/enums/sort_alph_ai_rest_radar_api.py) \| None</code> | score, stories (total), model_stories, sentiment or sentiment_change (current minus prior window). Missing values last; ties use total story count then ticker.<br>**Default**: <code>SortAlphAiRestRadarApi.SCORE</code> |
| <code>order</code> | <code>[OrderOrStr](alph_ai/models/enums/order.py) \| None</code> | asc or desc (default). Missing metrics always remain last.<br>**Default**: <code>Order.DESC</code> |
| <code>sentiment</code> | <code>[SentimentAlphAiRestRadarApiOrStr](alph_ai/models/enums/sentiment_alph_ai_rest_radar_api.py) \| None</code> | all, positive (>0.15), negative (<-0.15), mixed (inclusive -0.15 through 0.15). Null metrics match only all.<br>**Default**: <code>SentimentAlphAiRestRadarApi.ALL</code> |
| <code>min_z</code> | <code>float \| None</code> | Minimum descriptive activity score, not a confirmed candidate filter.<br>**Default**: <code>None</code> |
| <code>limit</code> | <code>int \| None</code> | Page size only, never a tier ticker cap. Follow next_cursor with the same filters and page size.<br>**Default**: <code>50</code> |
| <code>offset</code> | <code>int \| None</code> | Legacy zero-based pagination without snapshot pinning. Prefer cursor; cannot combine a nonzero offset with cursor.<br>**Default**: <code>0</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque signed next_cursor or previous_cursor. Pins the complete snapshot, filters, tier and watchlist membership/owner. A changed context, removed snapshot or replaced content returns 409; restart without cursor. Never edit the token.<br>**Default**: <code>""</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotPreviewDto](alph_ai/models/snapshot_preview_dto.py)</code> -- Eligible snapshot and effective access rules

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetRadarSnapshotErrorBody](alph_ai/errors/get_radar_snapshot_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 401, 404, 409, 429, 503 | <code>[RawError](alph_ai/core/results.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](alph_ai/apis/stories.py)

<details>
<summary><code>def get_api_stories(*, cursor: str | None = None, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> StoriesPage</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Stories newest-first by the time of their latest article
(`last_material_at`): stories with a published summary and
`importance >= 7`. Keyset pagination: omit `cursor` for the newest
page, pass `next_cursor` back for the next (older) one; `null` means
the end. Cursors are opaque; an invalid one is a 400. Archive depth
is tiered as on the feeds — paging back past your plan's horizon
(Free 30 days, Basic 90, Pro 180) returns 403 `archive_horizon`.

A story keeps moving up this list while articles keep joining it
(`last_material_at` is the keyset), and its summary is rewritten as
materials arrive, so re-reading a `story_id` later can return a
different summary — `updated_at` says when the facts last changed.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.stories.get_api_stories()
    # TODO: Handle 'response' of type StoriesPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesErrorBody
```

**Async**

```python
try:
    response = await async_client.stories.get_api_stories()
    # TODO: Handle 'response' of type StoriesPage
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`. Omit for the newest page.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Stories per page, 1 to 50 on every tier (default 20). `limit` is accepted as an alias.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoriesPage](alph_ai/models/stories_page.py)</code> -- A page of stories.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiStoriesErrorBody](alph_ai/errors/get_api_stories_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 403, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_stories_by_story_id(story_id: str, *, request_options: RequestOptionsOrDict | None = None) -> StoryLookup</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

One story — the summary AlphAI wrote from its articles, the key facts
each with the publisher it was read from and the `source_uid` of that
article, the per-ticker read, the open questions — wrapped in a
lookup `status`, because a `story_id` taken from an article row does
not always name a current story:

* `found` — `story` is filled.
* `merged` — this story was folded into another one; `redirect_to`
is the surviving story's id. Fetch that one (a web page would 308).
* `not_a_story` — the id belongs to an article that only one
publisher carried, so there is no story to summarise; `article`
names it (`/api/news/{uid}/`). An article's `story_id` resolves
here for every row, so this is the normal answer for most of the
feed: most events are carried by a single outlet.
* An unknown id is a 404.

`summary_state` tells you how to read the text: `published` (the
summary covers every article the story had when it was written),
`stale` (`new_materials` articles joined since; the rewrite is
queued — the summaries are debounced, so a fast-moving story is
rewritten minutes, not seconds, after each new article), or
`preparing` (no summary yet: `title` is the lead article's headline
and `summary` its collector summary; `key_facts`, `why_it_matters`,
`ticker_takes` and `uncertainties` are empty). A story older than
your plan's archive horizon (by `last_material_at`) is a 403
`archive_horizon`, like a deep feed cursor.

The summary is the model's own text, checked against the articles
before publishing: every figure in it appears in a source, and no
passage of more than a dozen words is copied from one. It is
AI-generated financial information for research, not investment
advice. Article bodies are never served; `materials` link to the
publishers.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.stories.get_api_stories_by_story_id("some example string")
    # TODO: Handle 'response' of type StoryLookup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesByStoryIdErrorBody
```

**Async**

```python
try:
    response = await async_client.stories.get_api_stories_by_story_id("some example string")
    # TODO: Handle 'response' of type StoryLookup
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesByStoryIdErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_id</code> | <code>str</code> | A story id — the `story_id` of any article row, or an id from `/api/stories/`. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryLookup](alph_ai/models/story_lookup.py)</code> -- The lookup — `found`, `merged` or `not_a_story`.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiStoriesByStoryIdErrorBody](alph_ai/errors/get_api_stories_by_story_id_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 403, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_stories_by_story_id_materials(story_id: str, *, cursor: str | None = None, page_size: int | None = 50, request_options: RequestOptionsOrDict | None = None) -> StoryMaterials</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every article behind a story, oldest first — the materials the
summary was written from and the ones that joined after it. Same
visibility as the feed (`relevance_score >= 4`); each row carries its
`uid` (open it with `/api/news/{uid}/`), publisher, publication time,
the publisher's URL and its relevance score. A story's `key_facts`
point into this list by `source_uid`. Keyset pagination with
`cursor` / `next_cursor` as on `/api/stories/`; most stories fit one
page. Only a current story (`status: found`) has materials: a merged
or not-a-story id is a 404 here — resolve it through
`/api/stories/{story_id}/` first.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.stories.get_api_stories_by_story_id_materials("some example string")
    # TODO: Handle 'response' of type StoryMaterials
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesByStoryIdMaterialsErrorBody
```

**Async**

```python
try:
    response = await async_client.stories.get_api_stories_by_story_id_materials("some example string")
    # TODO: Handle 'response' of type StoryMaterials
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesByStoryIdMaterialsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>story_id</code> | <code>str</code> | Value sent with the request. |
| <code>cursor</code> | <code>str \| None</code> | Opaque cursor from a prior response's `next_cursor`. Omit for the first (oldest) page.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Articles per page, 1 to 50 on every tier (default 50). `limit` is accepted as an alias.<br>**Default**: <code>50</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryMaterials](alph_ai/models/story_materials.py)</code> -- A page of the story's articles, oldest first.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiStoriesByStoryIdMaterialsErrorBody](alph_ai/errors/get_api_stories_by_story_id_materials_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_stories_top(*, request_options: RequestOptionsOrDict | None = None) -> TopStories</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The strongest stories of the trailing 48 hours, ranked: a story's
`importance` plus a coverage bonus of `min(3, log2(publishers))`,
minus one point per 12 hours since its key facts last changed
(`updated_at`). One slot per ticker and two per no-ticker macro
category, so one event cannot fill the list. Only stories with a
published summary and `importance >= 7` qualify. Fixed size of up to
50, no pagination; `ranking_version` names the formula so a change
is visible, `as_of` is when the list was ranked.

Compared with `/api/news/trending/`: trending ranks single articles
and collapses reprints; this ranks the stories themselves (two or
more publishers), each with an AlphAI-written summary. A story's
`story_id` is the same key an article row carries, so a trending
item's `story_id` opens the story here.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.stories.get_api_stories_top()
    # TODO: Handle 'response' of type TopStories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesTopErrorBody
```

**Async**

```python
try:
    response = await async_client.stories.get_api_stories_top()
    # TODO: Handle 'response' of type TopStories
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiStoriesTopErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TopStories](alph_ai/models/top_stories.py)</code> -- Ranked stories, strongest first.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiStoriesTopErrorBody](alph_ai/errors/get_api_stories_top_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

## Symbols

> Source: [Symbols](alph_ai/apis/symbols.py)

<details>
<summary><code>def get_api_symbols(*, limit: int | None = None, offset: int | None = 0, search: str | None = None, request_options: RequestOptionsOrDict | None = None) -> list[Symbol]</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings), alphabetical by ticker. ~16k entries — cache aggressively, or slice with the optional `limit`/`offset` params (the response stays a bare array either way). Pass `search` to resolve a name, brand or ticker prefix to its canonical symbol (`search=bitcoin` returns `BTC-USD`, `search=spacex` returns `SPCX`).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols(search="bitcoin")
    # TODO: Handle 'response' of type list[Symbol]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols(search="bitcoin")
    # TODO: Handle 'response' of type list[Symbol]
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit</code> | <code>int \| None</code> | Return at most this many symbols. Omit for the full list.<br>**Default**: <code>None</code> |
| <code>offset</code> | <code>int \| None</code> | Skip this many symbols from the start of the list.<br>**Default**: <code>0</code> |
| <code>search</code> | <code>str \| None</code> | Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's brand name where that differs from its registered name (`search=spacex` returns `SPCX`, registered as SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact name and brand matches rank above prefix and substring matches, and within the same level a company ranks above a fund (`search=jpmorgan` lists `JPM` before `JEPI`). Useful for finding the canonical form of a name (`search=bitcoin` returns `BTC-USD`).<br>**Default**: <code>None</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>list&#91;[Symbol](alph_ai/models/symbol.py)&#93;</code> -- List of active symbols.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsErrorBody](alph_ai/errors/get_api_symbols_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> Symbol</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Send a `GET` request.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker("BTC-USD")
    # TODO: Handle 'response' of type Symbol
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker("BTC-USD")
    # TODO: Handle 'response' of type Symbol
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Ticker symbol. US equities are bare (`AAPL`); cryptocurrencies use the `<SYM>-USD` form (`BTC-USD`); foreign listings use the Yahoo suffix (`VOD.L`). |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Symbol](alph_ai/models/symbol.py)</code> -- Symbol with extended metadata. Resolves delisted symbols too: check `status`, and `renamed_to` for the successor ticker when the company continues under a new symbol.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerErrorBody](alph_ai/errors/get_api_symbols_by_ticker_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 404, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker_earnings(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> TickerEarningsHistory</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Every published AlphAI earnings read for the ticker, newest first, and
the date of its next report when the company has confirmed one.

A read is produced from the company's own SEC filing — an 8-K item 2.02
for US filers, a 6-K earnings release for foreign private issuers —
within minutes of it reaching EDGAR, and every number in it is verified
against the filing text before publication. `/earnings/latest/` returns
just a pointer to the newest one; this endpoint returns the analyses
themselves.

Bridges share classes: a request for one class returns the reads filed
under the issuer's primary class, and each row's `ticker` names the
class it was actually filed under, which may differ from the one you
asked for.

Unpaginated and capped at 20 reads. Depth is currently shallow by
construction — AlphAI's reads exist for filings from late July 2026
onward and reports arrive quarterly — so most tickers carry one or two.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker_earnings("some example string")
    # TODO: Handle 'response' of type TickerEarningsHistory
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerEarningsErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker_earnings("some example string")
    # TODO: Handle 'response' of type TickerEarningsHistory
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerEarningsErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Accepts the same ticker forms as the symbol detail endpoint. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerEarningsHistory](alph_ai/models/ticker_earnings_history.py)</code> -- The ticker's earnings reads. An empty `reports` array is a normal answer, not an error: it means no read has been published yet.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerEarningsErrorBody](alph_ai/errors/get_api_symbols_by_ticker_earnings_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker_earnings_latest(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> LatestEarningsPointer</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

A pointer to the ticker's most recent published earnings read (SEC 8-K
item 2.02, or a foreign private issuer's 6-K earnings release). Resolve
the full analysis via `/api/news/{uid}/`, whose
`earnings` object carries it. Bridges share classes: a request for one
class returns the read filed under the issuer's primary class.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker_earnings_latest("some example string")
    # TODO: Handle 'response' of type LatestEarningsPointer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerEarningsLatestErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker_earnings_latest("some example string")
    # TODO: Handle 'response' of type LatestEarningsPointer
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerEarningsLatestErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Accepts the same ticker forms as the symbol detail endpoint. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LatestEarningsPointer](alph_ai/models/latest_earnings_pointer.py)</code> -- The ticker's most recent earnings read pointer.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerEarningsLatestErrorBody](alph_ai/errors/get_api_symbols_by_ticker_earnings_latest_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker_insider_summary(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> TickerInsiderSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell
transaction counts, dollar volumes, the share of transactions executed
under pre-arranged 10b5-1 plans, and the most active insiders ranked
by absolute net value (buys minus sells).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker_insider_summary("some example string")
    # TODO: Handle 'response' of type TickerInsiderSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerInsiderSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker_insider_summary("some example string")
    # TODO: Handle 'response' of type TickerInsiderSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerInsiderSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their `<SYM>-USD` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings have no Form 4 flow, so they return zeros. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerInsiderSummary](alph_ai/models/ticker_insider_summary.py)</code> -- Insider activity stats for the window. Zeros mean no filings in the window for a real listing; a ticker no symbol owns returns 404 instead.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerInsiderSummaryErrorBody](alph_ai/errors/get_api_symbols_by_ticker_insider_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 404, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker_insider_trades(ticker: str, *, side: Side1OrStr | None = Side1.ALL, cursor: str | None = None, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None) -> TickerInsiderTrades</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The complete per-ticker insider-trading payload behind
alphai.io/stock/{ticker}/insider-trades: the paginated Form 4 event
history plus everything a chart needs, in one request. One event is
a filing's whole tranche group (shares summed, the price
value-weighted, a 10b5-1 ladder is ONE event), same folding as the
feed's `insider` block.

The first page (no `cursor`) also carries the aggregates: `summary`
(3-month, 12-month and all-time windows plus the most active
insiders of the last 12 months), `series` (monthly buckets) and
`series_weekly` (Monday-keyed weekly buckets), both zero-filled up
to the current period and capped to the trailing 12 months, and
`chart_events` — every event of the trailing 12 months regardless of
pagination. The aggregates always cover both sides regardless of the
`side` filter, and they are `null` on cursor pages, which carry only
the next `events` chunk.

Side semantics on this surface follow the value flow: code P is
`buy`; codes S and D are both `sell`, because a code D sale back to
the issuer moves dollars off the insider's position like any sale.
This deliberately differs from the feed's `insider.side`, which
labels D as `other`; use `transaction_code` to tell a market sale
(S) from a sale to the issuer (D).

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker_insider_trades("some example string")
    # TODO: Handle 'response' of type TickerInsiderTrades
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerInsiderTradesErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker_insider_trades("some example string")
    # TODO: Handle 'response' of type TickerInsiderTrades
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerInsiderTradesErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their `<SYM>-USD` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings have no Form 4 flow, so they return empty history. |
| <code>side</code> | <code>[Side1OrStr](alph_ai/models/enums/side1.py) \| None</code> | Filters the paginated `events` list only; the first page's aggregates always cover both sides.<br>**Default**: <code>Side1.ALL</code> |
| <code>cursor</code> | <code>str \| None</code> | Opaque keyset cursor from a prior response's `next_cursor`. Omit it for the newest page, the only one carrying the aggregates.<br>**Default**: <code>None</code> |
| <code>page_size</code> | <code>int \| None</code> | Events per page. Not tier-gated: every tier may request up to 200, so one request can load a chart's whole working set. `limit` is accepted as an alias.<br>**Default**: <code>20</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerInsiderTrades](alph_ai/models/ticker_insider_trades.py)</code> -- One page of the event history. Empty arrays mean no recorded filings for a real listing; a ticker no symbol owns returns 404 instead.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerInsiderTradesErrorBody](alph_ai/errors/get_api_symbols_by_ticker_insider_trades_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 404, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker_peers(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> SymbolPeers</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Other companies in the same industry (widening to the broader sector
when the industry is thin) that carry recent enriched news, most
recently covered first. Powers the "Related tickers" links on the stock
hub pages.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker_peers("some example string")
    # TODO: Handle 'response' of type SymbolPeers
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerPeersErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker_peers("some example string")
    # TODO: Handle 'response' of type SymbolPeers
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerPeersErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Value sent with the request. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SymbolPeers](alph_ai/models/symbol_peers.py)</code> -- Up to ten related tickers. A well-formed but unknown ticker, or one with no peers carrying recent news, returns an empty list.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerPeersErrorBody](alph_ai/errors/get_api_symbols_by_ticker_peers_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_by_ticker_sentiment_summary(ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> TickerSentimentSummary</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Counts of bullish / neutral / bearish per-ticker sentiment calls from
the enriched news flow, plus per-day buckets. The window is the last 7
UTC calendar days, today included (today is partial): `daily` holds one
bucket per day, and `bullish`, `neutral`, `bearish` and `total` are the
sums of those buckets. Insider (SEC Form 4) template rows are excluded —
this reflects press coverage, not filings.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_by_ticker_sentiment_summary("some example string")
    # TODO: Handle 'response' of type TickerSentimentSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerSentimentSummaryErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_by_ticker_sentiment_summary("some example string")
    # TODO: Handle 'response' of type TickerSentimentSummary
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsByTickerSentimentSummaryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>ticker</code> | <code>str</code> | Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their `<SYM>-USD` listing (`DOGE` → `DOGE-USD`; the response echoes the resolved ticker), and delisted or renamed symbols stay addressable. |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerSentimentSummary](alph_ai/models/ticker_sentiment_summary.py)</code> -- Sentiment counts for the window. Zeros mean a quiet week for a real listing; a ticker no symbol owns returns 404 instead.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsByTickerSentimentSummaryErrorBody](alph_ai/errors/get_api_symbols_by_ticker_sentiment_summary_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 404, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_directory(*, request_options: RequestOptionsOrDict | None = None) -> SymbolDirectory</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The hub index behind /stocks: the globally most-covered tickers over
the trailing window, plus one card per sector (size + its busiest
names). Ranked by recent enriched-news coverage.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_directory()
    # TODO: Handle 'response' of type SymbolDirectory
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsDirectoryErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_directory()
    # TODO: Handle 'response' of type SymbolDirectory
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsDirectoryErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SymbolDirectory](alph_ai/models/symbol_directory.py)</code> -- Most-active tickers and sector cards.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsDirectoryErrorBody](alph_ai/errors/get_api_symbols_directory_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>def get_api_symbols_sectors_by_slug(slug: str, *, page: int | None = 1, request_options: RequestOptionsOrDict | None = None) -> SectorSymbols</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

The tickers in a sector (by slug, e.g. `financial-services`), ranked by
recent enriched-news coverage. Powers the /stocks/{slug} sub-pages.
Returns up to 500 index-eligible tickers per page, ordered by coverage
descending then ticker. Increment `page` while `has_next` is true.
`count` is the number on this page; `total_count` is the whole sector.
A page beyond the end returns an empty `symbols` array and `has_next: false`.
Rankings refresh periodically; this is a live directory, not a historical snapshot.

</dd>
</dl>

### Usage

<dl>
<dd>

**Sync**

```python
try:
    response = client.symbols.get_api_symbols_sectors_by_slug("some example string")
    # TODO: Handle 'response' of type SectorSymbols
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsSectorsBySlugErrorBody
```

**Async**

```python
try:
    response = await async_client.symbols.get_api_symbols_sectors_by_slug("some example string")
    # TODO: Handle 'response' of type SectorSymbols
except ApiError as e:
    ...  # TODO: Handle 'e.error' of type GetApiSymbolsSectorsBySlugErrorBody
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>slug</code> | <code>str</code> | Value sent with the request. |
| <code>page</code> | <code>int \| None</code> | One-based sector page, 500 tickers per page.<br>**Default**: <code>1</code> |
| <code>request_options</code> | <code>[RequestOptionsOrDict](alph_ai/core/request_options.py) \| None</code> | Per-call overrides for this one request, such as a timeout, extra headers, or its retry count and statuses. |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectorSymbols](alph_ai/models/sector_symbols.py)</code> -- The sector and its most-covered tickers.

**OnError**: <code>[ApiError](alph_ai/core/exceptions.py)&#91;[GetApiSymbolsSectorsBySlugErrorBody](alph_ai/errors/get_api_symbols_sectors_by_slug_error.py)&#93;</code>

Mapped in first-match order -- an earlier row wins over a later range that also covers the status:

| Status | `error` is |
| --- | --- |
| 400, 404 | <code>[RawError](alph_ai/core/results.py)</code> |
| 401, 429 | <code>[Error](alph_ai/models/error.py)</code> |
| anything unmapped | <code>[RawError](alph_ai/core/results.py)</code> |

</dd>
</dl>

</dd>
</dl>

</details>

