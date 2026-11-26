# Reference

Every operation below is shown in its throwing form. On an error status it throws `ApiException<TError>` — the status code, headers, content type and the operation's error type, `RawError` (the raw body) when the spec declares none — and where an operation offers an `…AsResult` sibling, that sibling returns `ApiResult<TResponse, TError>` instead. A request that produces no usable response surfaces as `SdkConnectionException` or `SdkTimeoutException`, a body that does not match the documented response type as `ResponseDeserializationException`, and a required credential that is not configured, or one that cannot be applied, as `AuthSchemeException`; all of them derive from `SdkException` and name the failed call. See [README → Error Handling](README.md#error-handling).

> Source: [AlphAiClient](src/AlphAi/AlphAiClient.cs)

## Calendar

> Source: [Calendar](src/AlphAi/Api/Calendar.cs)

<details>
<summary><code>Task&lt;CalendarEvents&gt; GetApiCalendar(GetApiCalendarRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Calendar.GetApiCalendar(new GetApiCalendarRequest
    {
        FromDate = "2026-08-07",
        ToDate = "2026-08-14",
        EventKey = "cpi,nfp,fomc_decision",
    });
    // TODO: Handle 'response' of type CalendarEvents
}
catch (ApiException<GetApiCalendarError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiCalendarRequest](src/AlphAi/Requests/Calendar/GetApiCalendarRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalendarEvents](src/AlphAi/Models/CalendarEvents.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiCalendarError](src/AlphAi/Errors/GetApiCalendarError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CoverageApi

> Source: [CoverageApi](src/AlphAi/Api/CoverageApi.cs)

<details>
<summary><code>Task&lt;Coverage&gt; GetApiCoverage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.CoverageApi.GetApiCoverage();
    // TODO: Handle 'response' of type Coverage
}
catch (ApiException<GetApiCoverageError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Coverage](src/AlphAi/Models/Coverage.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiCoverageError](src/AlphAi/Errors/GetApiCoverageError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## News

> Source: [News](src/AlphAi/Api/News.cs)

<details>
<summary><code>Task&lt;NewsPagination&gt; GetApiNews(GetApiNewsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNews(new GetApiNewsRequest
    {
        Symbol = "NVDA",
        FromDate = DateTimeOffset.Parse("2026-06-01T00:00:00Z"),
        ToDate = DateTimeOffset.Parse("2026-06-30T23:59:59Z"),
        Item = "5.02",
    });
    // TODO: Handle 'response' of type NewsPagination
}
catch (ApiException<GetApiNewsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsRequest](src/AlphAi/Requests/News/GetApiNewsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsPagination](src/AlphAi/Models/NewsPagination.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsError](src/AlphAi/Errors/GetApiNewsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;WatchlistBriefDto&gt; GetApiNewsBrief(GetApiNewsBriefRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsBrief(new GetApiNewsBriefRequest
    {
        Tickers = ["NVDA", "AMD", "BTC-USD"],
    });
    // TODO: Handle 'response' of type WatchlistBriefDto
}
catch (ApiException<GetApiNewsBriefError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsBriefRequest](src/AlphAi/Requests/News/GetApiNewsBriefRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[WatchlistBriefDto](src/AlphAi/Models/WatchlistBriefDto.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsBriefError](src/AlphAi/Errors/GetApiNewsBriefError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;RichNewsArticle&gt; GetApiNewsByUid(GetApiNewsByUidRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsByUid(new GetApiNewsByUidRequest { Uid = "some example string" });
    // TODO: Handle 'response' of type RichNewsArticle
}
catch (ApiException<GetApiNewsByUidError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsByUidRequest](src/AlphAi/Requests/News/GetApiNewsByUidRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RichNewsArticle](src/AlphAi/Models/RichNewsArticle.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsByUidError](src/AlphAi/Errors/GetApiNewsByUidError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;ApiNewsRelatedResponse&gt; GetApiNewsByUidRelated(GetApiNewsByUidRelatedRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsByUidRelated(new GetApiNewsByUidRelatedRequest
    {
        Uid = "some example string",
    });
    // TODO: Handle 'response' of type ApiNewsRelatedResponse
}
catch (ApiException<GetApiNewsByUidRelatedError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsByUidRelatedRequest](src/AlphAi/Requests/News/GetApiNewsByUidRelatedRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ApiNewsRelatedResponse](src/AlphAi/Models/ApiNewsRelatedResponse.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsByUidRelatedError](src/AlphAi/Errors/GetApiNewsByUidRelatedError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsPagination&gt; GetApiNewsInsider(GetApiNewsInsiderRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsInsider(new GetApiNewsInsiderRequest
    {
        Symbol = "NVDA",
        FromDate = DateTimeOffset.Parse("2026-06-01T00:00:00Z"),
        ToDate = DateTimeOffset.Parse("2026-06-30T23:59:59Z"),
    });
    // TODO: Handle 'response' of type NewsPagination
}
catch (ApiException<GetApiNewsInsiderError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsInsiderRequest](src/AlphAi/Requests/News/GetApiNewsInsiderRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsPagination](src/AlphAi/Models/NewsPagination.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsInsiderError](src/AlphAi/Errors/GetApiNewsInsiderError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;InsiderClustersPage&gt; GetApiNewsInsiderClusters(GetApiNewsInsiderClustersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsInsiderClusters(new GetApiNewsInsiderClustersRequest
    {
        Symbol = "NVDA",
    });
    // TODO: Handle 'response' of type InsiderClustersPage
}
catch (ApiException<GetApiNewsInsiderClustersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsInsiderClustersRequest](src/AlphAi/Requests/News/GetApiNewsInsiderClustersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[InsiderClustersPage](src/AlphAi/Models/InsiderClustersPage.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsInsiderClustersError](src/AlphAi/Errors/GetApiNewsInsiderClustersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsPagination&gt; GetApiNewsMacro(GetApiNewsMacroRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsMacro(new GetApiNewsMacroRequest
    {
        Category = "macro_economy",
        FromDate = DateTimeOffset.Parse("2026-09-16T00:00:00Z"),
        ToDate = DateTimeOffset.Parse("2026-09-17T23:59:59Z"),
    });
    // TODO: Handle 'response' of type NewsPagination
}
catch (ApiException<GetApiNewsMacroError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsMacroRequest](src/AlphAi/Requests/News/GetApiNewsMacroRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsPagination](src/AlphAi/Models/NewsPagination.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsMacroError](src/AlphAi/Errors/GetApiNewsMacroError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;NewsSearchPage&gt; GetApiNewsSearch(GetApiNewsSearchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsSearch(new GetApiNewsSearchRequest
    {
        Q = "Jane Street",
        Symbol = "NVDA",
        Item = "5.02",
    });
    // TODO: Handle 'response' of type NewsSearchPage
}
catch (ApiException<GetApiNewsSearchError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiNewsSearchRequest](src/AlphAi/Requests/News/GetApiNewsSearchRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[NewsSearchPage](src/AlphAi/Models/NewsSearchPage.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsSearchError](src/AlphAi/Errors/GetApiNewsSearchError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;IReadOnlyList&lt;RichNewsArticle&gt;&gt; GetApiNewsTrending(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.News.GetApiNewsTrending();
    // TODO: Handle 'response' of type IReadOnlyList<RichNewsArticle>
}
catch (ApiException<GetApiNewsTrendingError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[RichNewsArticle](src/AlphAi/Models/RichNewsArticle.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiNewsTrendingError](src/AlphAi/Errors/GetApiNewsTrendingError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Radar

> Source: [Radar](src/AlphAi/Api/Radar.cs)

<details>
<summary><code>Task&lt;SnapshotPreviewDto&gt; GetRadarSnapshot(GetRadarSnapshotRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Radar.GetRadarSnapshot(new GetRadarSnapshotRequest());
    // TODO: Handle 'response' of type SnapshotPreviewDto
}
catch (ApiException<GetRadarSnapshotError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetRadarSnapshotRequest](src/AlphAi/Requests/Radar/GetRadarSnapshotRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SnapshotPreviewDto](src/AlphAi/Models/SnapshotPreviewDto.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetRadarSnapshotError](src/AlphAi/Errors/GetRadarSnapshotError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Stories

> Source: [Stories](src/AlphAi/Api/Stories.cs)

<details>
<summary><code>Task&lt;StoriesPage&gt; GetApiStories(GetApiStoriesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stories.GetApiStories(new GetApiStoriesRequest());
    // TODO: Handle 'response' of type StoriesPage
}
catch (ApiException<GetApiStoriesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiStoriesRequest](src/AlphAi/Requests/Stories/GetApiStoriesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoriesPage](src/AlphAi/Models/StoriesPage.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiStoriesError](src/AlphAi/Errors/GetApiStoriesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryLookup&gt; GetApiStoriesByStoryId(GetApiStoriesByStoryIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stories.GetApiStoriesByStoryId(new GetApiStoriesByStoryIdRequest
    {
        StoryId = "some example string",
    });
    // TODO: Handle 'response' of type StoryLookup
}
catch (ApiException<GetApiStoriesByStoryIdError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiStoriesByStoryIdRequest](src/AlphAi/Requests/Stories/GetApiStoriesByStoryIdRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryLookup](src/AlphAi/Models/StoryLookup.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiStoriesByStoryIdError](src/AlphAi/Errors/GetApiStoriesByStoryIdError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;StoryMaterials&gt; GetApiStoriesByStoryIdMaterials(GetApiStoriesByStoryIdMaterialsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stories.GetApiStoriesByStoryIdMaterials(new GetApiStoriesByStoryIdMaterialsRequest
    {
        StoryId = "some example string",
    });
    // TODO: Handle 'response' of type StoryMaterials
}
catch (ApiException<GetApiStoriesByStoryIdMaterialsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiStoriesByStoryIdMaterialsRequest](src/AlphAi/Requests/Stories/GetApiStoriesByStoryIdMaterialsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[StoryMaterials](src/AlphAi/Models/StoryMaterials.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiStoriesByStoryIdMaterialsError](src/AlphAi/Errors/GetApiStoriesByStoryIdMaterialsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TopStories&gt; GetApiStoriesTop(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Stories.GetApiStoriesTop();
    // TODO: Handle 'response' of type TopStories
}
catch (ApiException<GetApiStoriesTopError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TopStories](src/AlphAi/Models/TopStories.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiStoriesTopError](src/AlphAi/Errors/GetApiStoriesTopError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Symbols

> Source: [Symbols](src/AlphAi/Api/Symbols.cs)

<details>
<summary><code>Task&lt;IReadOnlyList&lt;Symbol&gt;&gt; GetApiSymbols(GetApiSymbolsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbols(new GetApiSymbolsRequest { Search = "bitcoin" });
    // TODO: Handle 'response' of type IReadOnlyList<Symbol>
}
catch (ApiException<GetApiSymbolsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>IReadOnlyList&lt;[Symbol](src/AlphAi/Models/Symbol.cs)&gt;</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsError](src/AlphAi/Errors/GetApiSymbolsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;Symbol&gt; GetApiSymbolsByTicker(GetApiSymbolsByTickerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTicker(new GetApiSymbolsByTickerRequest { Ticker = "BTC-USD" });
    // TODO: Handle 'response' of type Symbol
}
catch (ApiException<GetApiSymbolsByTickerError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Symbol](src/AlphAi/Models/Symbol.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerError](src/AlphAi/Errors/GetApiSymbolsByTickerError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TickerEarningsHistory&gt; GetApiSymbolsByTickerEarnings(GetApiSymbolsByTickerEarningsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTickerEarnings(new GetApiSymbolsByTickerEarningsRequest
    {
        Ticker = "some example string",
    });
    // TODO: Handle 'response' of type TickerEarningsHistory
}
catch (ApiException<GetApiSymbolsByTickerEarningsError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerEarningsRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerEarningsRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerEarningsHistory](src/AlphAi/Models/TickerEarningsHistory.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerEarningsError](src/AlphAi/Errors/GetApiSymbolsByTickerEarningsError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;LatestEarningsPointer&gt; GetApiSymbolsByTickerEarningsLatest(GetApiSymbolsByTickerEarningsLatestRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTickerEarningsLatest(
        new GetApiSymbolsByTickerEarningsLatestRequest { Ticker = "some example string" });
    // TODO: Handle 'response' of type LatestEarningsPointer
}
catch (ApiException<GetApiSymbolsByTickerEarningsLatestError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerEarningsLatestRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerEarningsLatestRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LatestEarningsPointer](src/AlphAi/Models/LatestEarningsPointer.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerEarningsLatestError](src/AlphAi/Errors/GetApiSymbolsByTickerEarningsLatestError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TickerInsiderSummary&gt; GetApiSymbolsByTickerInsiderSummary(GetApiSymbolsByTickerInsiderSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTickerInsiderSummary(
        new GetApiSymbolsByTickerInsiderSummaryRequest { Ticker = "some example string" });
    // TODO: Handle 'response' of type TickerInsiderSummary
}
catch (ApiException<GetApiSymbolsByTickerInsiderSummaryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerInsiderSummaryRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerInsiderSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerInsiderSummary](src/AlphAi/Models/TickerInsiderSummary.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerInsiderSummaryError](src/AlphAi/Errors/GetApiSymbolsByTickerInsiderSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TickerInsiderTrades&gt; GetApiSymbolsByTickerInsiderTrades(GetApiSymbolsByTickerInsiderTradesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTickerInsiderTrades(new GetApiSymbolsByTickerInsiderTradesRequest
    {
        Ticker = "some example string",
    });
    // TODO: Handle 'response' of type TickerInsiderTrades
}
catch (ApiException<GetApiSymbolsByTickerInsiderTradesError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerInsiderTradesRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerInsiderTradesRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerInsiderTrades](src/AlphAi/Models/TickerInsiderTrades.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerInsiderTradesError](src/AlphAi/Errors/GetApiSymbolsByTickerInsiderTradesError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SymbolPeers&gt; GetApiSymbolsByTickerPeers(GetApiSymbolsByTickerPeersRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTickerPeers(new GetApiSymbolsByTickerPeersRequest
    {
        Ticker = "some example string",
    });
    // TODO: Handle 'response' of type SymbolPeers
}
catch (ApiException<GetApiSymbolsByTickerPeersError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerPeersRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerPeersRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SymbolPeers](src/AlphAi/Models/SymbolPeers.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerPeersError](src/AlphAi/Errors/GetApiSymbolsByTickerPeersError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;TickerSentimentSummary&gt; GetApiSymbolsByTickerSentimentSummary(GetApiSymbolsByTickerSentimentSummaryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsByTickerSentimentSummary(
        new GetApiSymbolsByTickerSentimentSummaryRequest { Ticker = "some example string" });
    // TODO: Handle 'response' of type TickerSentimentSummary
}
catch (ApiException<GetApiSymbolsByTickerSentimentSummaryError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsByTickerSentimentSummaryRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsByTickerSentimentSummaryRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[TickerSentimentSummary](src/AlphAi/Models/TickerSentimentSummary.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsByTickerSentimentSummaryError](src/AlphAi/Errors/GetApiSymbolsByTickerSentimentSummaryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SymbolDirectory&gt; GetApiSymbolsDirectory(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsDirectory();
    // TODO: Handle 'response' of type SymbolDirectory
}
catch (ApiException<GetApiSymbolsDirectoryError> ex)
{
    if (ex.Error.TryGetError(out var error))
    {
        // TODO: Handle 'error' of type Error
    }
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SymbolDirectory](src/AlphAi/Models/SymbolDirectory.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsDirectoryError](src/AlphAi/Errors/GetApiSymbolsDirectoryError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>Task&lt;SectorSymbols&gt; GetApiSymbolsSectorsBySlug(GetApiSymbolsSectorsBySlugRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default);</code></summary>

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

```csharp
try
{
    var response = await client.Symbols.GetApiSymbolsSectorsBySlug(new GetApiSymbolsSectorsBySlugRequest
    {
        Slug = "some example string",
    });
    // TODO: Handle 'response' of type SectorSymbols
}
catch (ApiException<GetApiSymbolsSectorsBySlugError> ex)
{
    if (ex.Error.TryGetNoContent(out var error))
    {
        // TODO: Handle 'error' of type RawError
    }
}
```

</dd>
</dl>

### Request

<dl>
<dd>

<code>[GetApiSymbolsSectorsBySlugRequest](src/AlphAi/Requests/Symbols/GetApiSymbolsSectorsBySlugRequest.cs)</code>

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SectorSymbols](src/AlphAi/Models/SectorSymbols.cs)</code>

**OnError**: <code>[ApiException](src/AlphAi/Core/Exceptions/ApiException.cs)&lt;[GetApiSymbolsSectorsBySlugError](src/AlphAi/Errors/GetApiSymbolsSectorsBySlugError.cs)&gt;</code>

</dd>
</dl>

</dd>
</dl>

</details>

