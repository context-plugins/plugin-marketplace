from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_news_brief_error import GetApiNewsBriefErrorBody, get_api_news_brief_error_mapper
from ..errors.get_api_news_by_uid_error import GetApiNewsByUidErrorBody, get_api_news_by_uid_error_mapper
from ..errors.get_api_news_by_uid_related_error import (
    GetApiNewsByUidRelatedErrorBody,
    get_api_news_by_uid_related_error_mapper,
)
from ..errors.get_api_news_error import GetApiNewsErrorBody, get_api_news_error_mapper
from ..errors.get_api_news_insider_clusters_error import (
    GetApiNewsInsiderClustersErrorBody,
    get_api_news_insider_clusters_error_mapper,
)
from ..errors.get_api_news_insider_error import GetApiNewsInsiderErrorBody, get_api_news_insider_error_mapper
from ..errors.get_api_news_macro_error import GetApiNewsMacroErrorBody, get_api_news_macro_error_mapper
from ..errors.get_api_news_search_error import GetApiNewsSearchErrorBody, get_api_news_search_error_mapper
from ..errors.get_api_news_trending_error import GetApiNewsTrendingErrorBody, get_api_news_trending_error_mapper
from ..models.api_news_related_response import ApiNewsRelatedResponse
from ..models.enums.collapse import CollapseOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.news_category import NewsCategoryOrStr
from ..models.enums.news_source_type import NewsSourceTypeOrStr
from ..models.enums.pattern1 import Pattern1, Pattern1OrStr
from ..models.enums.sort1 import Sort1, Sort1OrStr
from ..models.enums.sort3 import Sort3, Sort3OrStr
from ..models.enums.source_type import SourceTypeOrStr
from ..models.insider_clusters_page import InsiderClustersPage
from ..models.news_pagination import NewsPagination
from ..models.news_search_page import NewsSearchPage
from ..models.rich_news_article import RichNewsArticle
from ..models.watchlist_brief_dto import WatchlistBriefDto
from ..server.server import Server


class News:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NewsWithRawResponse(client, server, auth)

    def get_api_news(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        exclude_categories: list[NewsCategoryOrStr] | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        source_type: list[NewsSourceTypeOrStr] | None = None,
        item: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsPagination:
        """Feed of enriched articles, newest first. Default filter: ``relevance_score >= 4`` AND at least one active
        ticker. Pagination is cursor-based with a default page size of 10 (any size from 1 to 20 via ``page_size=``; Pro
        keys go up to 50): omit ``cursor`` for the newest page, then pass the ``next_cursor`` from each response to
        fetch the next (older) page. ``next_cursor: null`` means the end of the feed. Cursors are opaque — do not
        construct or parse them; an invalid cursor returns 400. Archive depth is tiered: paging back past your plan's
        horizon (Free 30 days, Basic 90, Pro 180) returns 403 with an upgrade hint. **Delta polling**
        (``sort=ingested``): the same feed ordered by the moment rows became available, for "what is new since my last
        poll". Articles reach the feed later than their publish time (collection median ~30 min for general news, with a
        long tail), so a poller that filters by ``time_published`` misses most late arrivals; ``sort=ingested`` follows
        ingest order. First call without ``cursor`` returns a bounded sample of up to ``page_size`` recent visible rows
        and a cursor at the feed head. This initial sample may be partial or empty when the scan reaches its work limit;
        it still starts the live stream. Each later call with the previous ``next_cursor`` returns only rows added
        since. In this mode ``next_cursor`` is always non-null — empty ``results`` means you are caught up, keep the
        cursor and poll again later (responses are cached for 60 s, so polling more often than once a minute buys
        nothing). New rows only: an update to an already-delivered article is not re-sent. ``time_published`` is not
        monotonic within a delta page; sort client-side if you need chronological order. A cursor is only valid with the
        sort mode that issued it. On resumed requests, empty **successful** pages mean the current scan is caught up. A
        nonempty page shorter than ``page_size`` may still have a continuation; keep following its cursor. If a bounded
        scan cannot produce a page, HTTP 409 reports ``extra.reason="delta_scan_incomplete"`` and ``extra.next_cursor``.
        Continue from that cursor with identical filters and sort; repeating the original request cannot resolve this
        work limit. A concurrent change during reading instead returns HTTP 503 with
        ``extra.reason="delta_candidates_changed"``: retry the original request, without advancing its cursor. Neither
        error is cached. MCP delta tools report the same JSON envelopes as tool errors. The cursor family, archive gates
        and story-collapse behavior remain unchanged. Delta mode carries live coverage only: when we add history in bulk
        (backfilling an earlier period), those rows do NOT enter this stream — they would arrive as thousands of "new"
        items that are months old and push your cursor far behind the live feed. They are served normally in
        ``sort=published``, by date filters and by ``/api/news/{uid}/``, so a one-off catch-up over the archive is a
        published-mode query. **Keeping up.** One call returns at most ``page_size`` rows, so a poller holds its
        position at the head only while ``calls per day × page_size`` stays above the daily volume of the stream it
        asked for. Below that it falls a little further behind every day, and the symptom misleads: ``time_published``
        reads hours or days old while the data is current. What went stale is the cursor, not the feed. So drain instead
        of polling once per tick: when a page comes back with ``results`` filled, call again immediately, and sleep only
        once ``results`` is empty. That clears a burst within the same cycle and lets a poller catch up by itself after
        downtime. Two levers if the call budget is still short, and they multiply: ``page_size`` (up to 20, or 50 on a
        Pro key) and a narrower stream (``min_relevance``, ``symbol``, ``category``). For scale, at the default ``>= 4``
        floor the feed carries roughly 2,700 rows a day, while ``min_relevance=7`` carries roughly 1,000.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to articles that mention this ticker. US equities use the bare symbol (``NVDA``);
                cryptocurrencies use the ``<SYM>-USD`` form (``BTC-USD``), and a bare crypto name resolves to it
                (``DOGE`` matches ``DOGE-USD``); foreign listings use the Yahoo suffix (``VOD.L``). A delisted symbol
                returns its news history. A renamed company's current ticker also matches articles tagged with its
                former ticker, and any share class of an issuer matches articles tagged with its other listed classes
                (``GOOGL`` includes rows tagged ``GOOG``); article tags stay as published. ``ticker`` is accepted as an
                alias.
            category: Keep only these categories. Accepts a single value, a CSV list (``category=earnings,insider``), or
                a repeated parameter — matches any of them (OR).
            exclude_categories: Drop these categories from the feed. Same single / CSV / repeated forms as ``category``.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each
                response's ``next_cursor`` back as ``cursor`` regardless of page size. ``limit`` is accepted as an
                alias.
            collapse: ``story`` collapses coverage of one event to a single representative row (the story root):
                syndicated reprints and independently written articles about the same event, matched on headline and
                lead similarity. Populates the ``story_id``, ``sources_count`` and ``sources`` fields on each item. Omit
                for the full feed (every article, story fields ``null``). Only ``story`` is accepted; any other value
                returns 400. Note: row-level filters (``symbol``, ``category``, ``min_relevance``) apply to the story's
                representative root, so a story whose root does not match the filter is omitted entirely. The root is
                the best copy the enricher has seen: a later copy that outscores a weak root (one below 7) takes the
                root over, so a story's ``story_id`` and its place in the feed can move once to that copy; a root at 7
                or above is never replaced. An 8-K that carries a press release as its exhibit is a member of that
                release's story (same issuer, the release's headline inside the filing, within 3 hours) when the release
                itself scores at or above the feed floor, so with ``source_type=sec_form8k`` a collapsed feed omits such
                filings — read them uncollapsed. A filing whose release scored below the floor stays its own story.
            collapse_stories: Boolean alias matching the MCP and Python SDK option. ``true`` is equivalent to
                ``collapse=story``; ``false`` leaves articles ungrouped. Send either ``collapse`` or
                ``collapse_stories``, not both (400).
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode: rows in
                the order they became available, ascending, with ``next_cursor`` always returned (empty ``results`` =
                caught up) — see the endpoint description. All other filters apply unchanged in both modes. Cursors are
                mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published`` — when the article was published, not when it entered
                the feed. ISO-8601; a value without a timezone is read as UTC. A bare date (``2026-06-01``) means that
                day's midnight. Reaching further back than your plan's archive horizon returns 403 (see the ``403``
                response) — the window is subject to the same tiered depth as a deep ``cursor``, and on the first page
                just the same. Cannot be combined with ``sort=ingested`` (400): delta mode returns rows in ingest order
                from your cursor and never walks back into history.
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date
                (``2026-06-01``) covers the WHOLE day (through ``23:59:59.999999Z``), so
                ``from_date=2026-06-01&to_date=2026-06-01`` returns that day rather than an empty page. ``from_date``
                later than ``to_date`` returns 400.
            source_type: Keep only rows ingested from these sources: ``gdelt`` (press coverage), ``sec_form4`` (insider
                transactions), ``sec_form8k`` (8-K current reports), ``sec_form6k`` (a foreign private issuer's 6-K
                earnings release). Same single / CSV / repeated forms as ``category``, OR-matched. Unknown values return
                400. Composes with every other filter: ``source_type=sec_form8k&symbol=NVDA`` is one company's 8-Ks,
                ``source_type=gdelt&min_relevance=8`` is the press without any filing.
            item: 8-K item code, e.g. ``5.02`` (officer departures/appointments), ``8.01`` (other events), ``1.01``
                (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing, not just the
                one that drove its category — and implies ``source_type=sec_form8k``; ``item`` next to any other
                ``source_type`` returns 400 (only 8-Ks have item codes). The category filter already covers the two
                headline items (``2.02`` → ``earnings``, ``2.01`` → ``mergers_acquisitions``); ``item`` is for
                everything else. A filing SEC served no document for has an empty item list and never matches. Every
                matched row carries the ``filing`` block.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of enriched articles.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. A
                resumed JSON delta scan consumed its work allowance without finding visible rows or reaching the head.
                ``extra.reason`` is ``delta_scan_incomplete``. Continue from ``extra.next_cursor`` with identical
                filters and sort; only invisible candidates were consumed. Do not retry the old cursor or treat this
                error as caught up. Existing SDK iterators raise a conflict error; applications must explicitly resume
                from the cursor in its ``extra``. CSV follows these continuations internally. Delta candidates changed
                between selection and reading. ``extra.reason`` is ``delta_candidates_changed``; no continuation cursor
                is returned. Retry the original request with the same cursor and filters. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_news(
                cursor=cursor,
                symbol=symbol,
                category=category,
                exclude_categories=exclude_categories,
                min_relevance=min_relevance,
                page_size=page_size,
                collapse=collapse,
                collapse_stories=collapse_stories,
                sort=sort,
                from_date=from_date,
                to_date=to_date,
                source_type=source_type,
                item=item,
                request_options=request_options,
            ),
        )

    def get_api_news_brief(
        self,
        tickers: list[str],
        *,
        hours: int | None = 24,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WatchlistBriefDto:
        """One response with recent news grouped by story, a separate SEC Form 4/8-K/6-K filings section, and the next
        confirmed earnings date per ticker. Supply your symbols explicitly; this endpoint does not read an account's
        saved watchlist. The website and MCP tool ``alphai_watchlist_brief`` use the caller's saved list instead.

        ``hours`` is a publication-time window ending at ``generated_at``, both ends inclusive. This is a ranked
        snapshot, not a delta since the last call. Bulk backfills are excluded. Within each section, the newest 500
        matching articles at the configured relevance floor (default 4) are grouped, then ranked by each group's highest
        relevance and novelty, then its newest publication time. Fields on a returned event describe the representative
        article. ``limit`` applies independently to news and filings. Either a candidate overflow or additional grouped
        stories sets that section's ``*_truncated`` flag. A truncated response is a selection, not a complete event
        inventory; narrow ``hours`` or use the paginated ticker feed for further coverage.

        An event shared by several requested tickers appears once, with ``matched_tickers`` naming all matches. If press
        coverage and a filing share a story, the filing represents it once in the filings section. Distinct Form 4
        transaction legs remain separate even when they share a filing URL. Share classes and former ticker names are
        included. Unrecognized symbols are returned in ``unknown_tickers``; bare crypto names are not guessed (use
        BTC-USD). Dates are confirmed only, on or after today's America/New_York date, excluding reports already matched
        to a published filing; absence means no confirmed date on file, not that no report is due. Available on every
        tier. Responses use ``Cache-Control: private, no-store``.

        Args:
            tickers: 1–100 distinct symbols, comma-separated or repeated; case-insensitive.
            hours: Value sent with the request.
            limit: Maximum grouped stories in each section; this brief has no cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Brief with explicit coverage and truncation information.

        Raises:
            ApiError: Invalid Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_news_brief(
                tickers, hours=hours, limit=limit, request_options=request_options
            ),
        )

    def get_api_news_by_uid(self, uid: str, *, request_options: RequestOptionsOrDict | None = None) -> RichNewsArticle:
        """One enriched article. SEC rows carry the same structured block the feeds serve: ``insider`` on a Form 4 row
        (as on ``/api/news/insider/``), ``filing`` on an 8-K row (as on ``/api/news/``), so a uid taken from
        ``/api/news/insider/clusters/`` opens with its trade data. An 8-K or 6-K earnings filing can also carry
        ``earnings`` (see that field), which no feed populates.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A single enriched article.

        Raises:
            ApiError: No item with that identifier. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_news_by_uid(uid, request_options=request_options))

    def get_api_news_by_uid_related(
        self, uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiNewsRelatedResponse:
        """Up to 6 articles related to the given article: fresh articles sharing a ticker first, then same-category
        recents as backfill. Same enriched shape and ``relevance_score >= 4`` filtering as ``/api/news/``; insider (SEC
        Form 4) rows are excluded unless the base article is itself insider. No pagination — the list is a fixed-size
        block.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Related enriched articles (possibly fewer than 6).

        Raises:
            ApiError: No item with that identifier. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_news_by_uid_related(uid, request_options=request_options))

    def get_api_news_insider(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        min_relevance: int | None = 4,
        is_10b5_1: bool | None = None,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsPagination:
        """Dedicated insider feed (``category=insider``): SEC EDGAR Form 4 insider activity ONLY — one
        deterministic-templated row per filing event (a filing's non-derivative trades of one type and holding form,
        aggregated: total shares, volume-weighted average price and executed range, total value), surfaced shortly after
        filing, with the relevance score computed from the event's total (size, buy vs. sell, 10b5-1 plan or not). A
        sale (``transaction_code`` ``S``) tops out at 6 whatever its size, and so does a sale back to the issuer (``D``)
        that leaves the insider with no shares, which is how holdings are cashed out when an acquisition closes.
        Purchases, and a ``D`` that leaves a holding (the company buying back a holder's block), use the full scale. A
        sale filed without a price stays at 6 too. Same enriched shape, ticker and ``relevance_score >= 4`` filtering,
        and cursor-based pagination as ``/api/news/``. Equivalent to ``/api/news/?category=insider``, surfaced as a
        first-class route. For aggregate stats instead of the stream, see ``/api/symbols/{ticker}/insider-summary/``.

        The category is fixed to ``insider``. This endpoint does not accept ``category``, ``exclude_categories`` or
        story-grouping parameters; use ``/api/news/`` for those filters.

        To watch for new filings, poll with ``sort=ingested`` rather than re-reading the newest page: a Form 4 is filed
        up to several days after the trade it reports, so a new event often enters the feed already below the head of
        the publish-ordered page. Delta mode orders by the moment the row became available, so it never misses one. The
        contract is identical to ``/api/news/?sort=ingested`` — see that endpoint for the full description.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to insider news that mentions this ticker. Delisted symbols return their history; a renamed
                company's current ticker also matches rows tagged with its former ticker. ``ticker`` is accepted as an
                alias.
            min_relevance: Override the default ≥4 threshold. Insider rows score deterministically from the event's
                summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an "only
                large trades" dial: ``min_relevance=6`` keeps purchases from roughly $500k and sales from roughly $1M,
                ``min_relevance=7`` keeps purchases from roughly $1M and no sales, except a large buyback by the company
                from a holder who keeps a stake (``transaction_code`` ``D``). A 10b5-1 plan trade sits one step lower.
            is_10b5_1: Filter on the same field each item's ``insider`` block reports: the event's Rule 10b5-1 status.
                Omit for every event; ``false`` returns discretionary trades only — the "hide pre-scheduled sales" dial,
                since a 10b5-1 ladder was set up months earlier and carries no timing decision; ``true`` returns plan
                events only. Event-level, like the field itself: a filing whose group mixes plan and discretionary
                tranches counts as a plan event on both. The two values partition the feed, so ``true`` and ``false``
                pages always add up to the unfiltered one.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``: rows in the order they became available, ascending,
                ``next_cursor`` always returned (empty ``results`` = caught up), and all other filters applied
                unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the trade it reports,
                so a new event routinely lands below the newest page of the publish-ordered feed and a poller reading
                only the head misses it. Cursors are mode-specific: a cursor is only valid with the sort mode that
                issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, identical in format and behaviour to the parameter
                on ``/api/news/`` (ISO-8601, naive read as UTC, tier-gated with 403, refused with ``sort=ingested``).
                Note which clock it is: ``time_published`` is when the filing reached the feed, NOT the insider's
                ``transaction_date`` reported in the ``insider`` block. A Form 4 is filed days after the trade, so a
                window over trade dates is a different question and this parameter does not answer it.
            to_date: Inclusive upper bound on ``time_published``. A bare date covers the whole day; same clock caveat as
                ``from_date``.
            format_: Response format. ``json`` (default) is the page described below. ``csv`` streams the same feed as a
                file: one row per insider event, the same filters (``symbol``, ``min_relevance``, ``is_10b5_1``,
                ``from_date``/``to_date``, ``sort``, ``cursor``), walked page by page on the server up to your plan's
                **row cap** — Free 500, Basic 2 000, Pro 10 000 rows per file — inside your plan's archive horizon (30 /
                90 / 180 days). ``page_size`` has no effect on CSV. One request counts once against your rate limit,
                whatever the file's length. Where a JSON page past the horizon returns 403, the file stops at the
                horizon and the response headers say so (``X-Alphai-Truncated: archive_horizon``). Validation errors (a
                bad cursor, an inverted window, a window with ``sort=ingested``) are the same 400 JSON bodies as for
                ``format=json``, sent before any row. Concurrent feed changes or a connection error can interrupt the
                stream after headers are sent. Accept a file only after the stream completes and the number of parsed
                CSV data rows matches ``X-Alphai-Rows``. Otherwise discard the partial file and retry the original
                request; do not advance to ``X-Alphai-Next-Cursor``. Response: ``Content-Type: text/csv;
                charset=utf-8``, ``Content-Disposition: attachment; filename="alphai-insider-<date>.csv"``,
                ``Cache-Control: private, no-store``, plus the ``X-Alphai-*`` headers listed under the 200 response:
                ``X-Alphai-Rows`` (data rows in the file), ``X-Alphai-Row-Cap`` (your plan's cap),
                ``X-Alphai-Truncated`` (``row_cap`` — more rows exist, continue with the cursor; ``archive_horizon`` —
                the walk reached your plan's archive depth; ``false`` — the file holds everything the filters select)
                and ``X-Alphai-Next-Cursor`` (present when there is more: the same token a JSON page would have returned
                at that position, so you can continue in either format). Columns, in order: ``uid``, ``time_published``,
                ``tickers`` (``|``-joined), ``title``, ``url``, ``category``, ``relevance_score``, ``side``,
                ``transaction_code``, ``shares``, ``avg_price_usd``, ``total_value_usd``, ``is_10b5_1``,
                ``insider_name``, ``insider_title``, ``is_officer``, ``is_director``, ``is_ten_percent_owner``,
                ``transaction_date``, ``filed_at``, ``late_filing``, ``summary`` — the JSON item's fields and its
                ``insider`` block flattened (event columns are empty for a row without a block). RFC 4180 quoting, LF
                line endings, UTF-8, timestamps in ISO 8601 UTC (``Z``), booleans ``true``/``false``, an empty cell for
                null, never the article body. A free-text cell that begins with ``=``, ``+``, ``-``, ``@`` or a tab is
                prefixed with an apostrophe so it cannot run as a formula when the file is opened in a spreadsheet.
                Select the format with this parameter only: an ``Accept: text/csv`` header on its own still returns
                JSON, and a client that sends ``Accept: application/json`` together with ``format=csv`` gets 406. With
                ``sort=ingested`` and no cursor the file holds the newest rows (up to the cap) in ingest order and the
                cursor parks at the head, like the JSON prime page; with a cursor it holds everything since that
                position, with rows older than your archive horizon skipped and reported as ``archive_horizon``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of enriched insider-transaction articles. Each item additionally carries the structured ``insider``
            event block (side / shares / average price / total value / reporting owner) — populated on this endpoint
            only. With ``format=csv``, the same rows as a streamed CSV file: see the ``format`` parameter for the
            columns, the per-plan row caps and the ``X-Alphai-*`` headers.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. A
                resumed JSON delta scan consumed its work allowance without finding visible rows or reaching the head.
                ``extra.reason`` is ``delta_scan_incomplete``. Continue from ``extra.next_cursor`` with identical
                filters and sort; only invisible candidates were consumed. Do not retry the old cursor or treat this
                error as caught up. Existing SDK iterators raise a conflict error; applications must explicitly resume
                from the cursor in its ``extra``. CSV follows these continuations internally. Delta candidates changed
                between selection and reading. ``extra.reason`` is ``delta_candidates_changed``; no continuation cursor
                is returned. Retry the original request with the same cursor and filters. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_news_insider(
                cursor=cursor,
                symbol=symbol,
                min_relevance=min_relevance,
                is_10b5_1=is_10b5_1,
                page_size=page_size,
                sort=sort,
                from_date=from_date,
                to_date=to_date,
                format_=format_,
                request_options=request_options,
            ),
        )

    def get_api_news_insider_clusters(
        self,
        *,
        days: int | None = 30,
        min_buyers: int | None = 2,
        min_usd: int | None = None,
        pattern: Pattern1OrStr | None = Pattern1.OPEN_MARKET,
        symbol: str | None = None,
        sort: Sort3OrStr | None = Sort3.RECENT,
        cursor: str | None = None,
        page_size: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InsiderClustersPage:
        """Episodes in which **several different insiders of one issuer bought on the open market together**: an
        issuer's Form 4 purchase dates are chained into one episode while consecutive purchases are at most 10 days
        apart (an episode is cut at 30 days), and every purchase inside it is examined before a buyer counts.

        Counting names is not enough — the loudest look-alikes are an IPO or PIPE allocation (caught by its price shape,
        or by the filing's own footnote saying the shares came from the issuer, an offering or a negotiated block), a
        mutual-bank conversion, ESPP / DRIP / director-plan lots, the same transaction reported through two owners (a
        director via the fund and the fund itself), and plan lots sitting next to one real purchase. Each buyer
        therefore carries a ``role``: ``independent`` buyers are the cluster; ``plan_like`` (with ``reason`` when the
        filing's words decided it), ``unpriced`` and ``duplicate_of`` buyers are listed so you can see why a 30-name
        filing burst is not one. The episode's ``pattern`` is ``open_market`` when at least two independent buyers
        remain and one of them is an officer or director, ``holders_only`` when only 10% holders without a role remain,
        and ``plan_or_offering`` otherwise. The default hides everything but ``open_market``; ask for the rest
        explicitly. The rule was fixed against 90 episodes checked by hand against the filings (2026-09-22): it shows 58
        of 58 real clusters and hides 29 of 30 look-alikes; a 401(k) plan purchase can still pass, since the filing says
        so only in a footnote.

        ``days`` is measured on ``known_at`` — the moment the episode's latest filing reached EDGAR — so "what became
        known this month" is one call. A purchase filed more than ~40 days after the trade is not chained (2.3% of Form
        4 purchases). Coverage starts at ``meta.coverage_since`` (the tranche table begins in August 2025); this is a
        descriptive screen (``research_only``, not point-in-time), with no returns attached. Only common-stock purchases
        outside Rule 10b5-1 plans are considered; units, preferred and warrants are ignored.

        Args:
            days: Lookback in days over ``known_at``, ``1``-``90``, default ``30``. Deeper than your plan's archive
                horizon (Free 30, Basic 90) returns 403.
            min_buyers: Minimum headcount, ``2``-``10``, default ``2``: independent buyers for ``open_market`` /
                ``holders_only`` episodes, everyone who bought (``buyers_total``) for ``plan_or_offering`` ones, where
                by construction fewer than two buyers are independent.
            min_usd: Drop episodes whose ``total_usd`` is below this. An episode with an unknown total
                (``value_partial`` with no priced fill) is kept, not dropped — a missing number is not a small one.
            pattern: ``open_market`` (default), ``plan_or_offering``, ``holders_only``, or ``all``. Insiders taking a
                $70M IPO allocation is an event too; it is labeled, not hidden, when you ask for it.
            symbol: One ticker. A renamed company's current ticker also matches episodes tagged with its former ticker,
                and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still returns its episodes
                when named explicitly; the unfiltered list shows active listings only. ``ticker`` is accepted as an
                alias.
            sort: ``recent`` (default) — newest ``known_at`` first; ``buyers`` — most independent buyers first, ties by
                value; ``value`` — largest ``total_usd`` first, unknown totals last. Cursors are sort-specific.
            cursor: Opaque cursor from a prior response's ``next_cursor``, with the same ``sort``. Omit for the first
                page.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, ``21``-``50`` with a Pro key.
                ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of classified purchase episodes, newest known first by default.

        Raises:
            ApiError: A parameter outside its range or enum The request reaches past your plan's news-archive horizon
                (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date`` does. The
                body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's ``archive_days``, and
                (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL. The window is checked
                on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is refused immediately
                rather than after paging down to it. A window with only ``to_date`` is refused when that bound itself is
                past the horizon (the window is open-ended into the past). Windows and cursors inside the horizon are
                unaffected, and the request is refused rather than trimmed to the horizon, so a given URL always returns
                the same body. Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_news_insider_clusters(
                days=days,
                min_buyers=min_buyers,
                min_usd=min_usd,
                pattern=pattern,
                symbol=symbol,
                sort=sort,
                cursor=cursor,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def get_api_news_macro(
        self,
        *,
        cursor: str | None = None,
        category: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsPagination:
        """Dedicated macro feed: the ``macro_economy``, ``commodities`` and ``geopolitics`` categories in one stream —
        central-bank decisions and statements (FOMC), inflation/jobs prints, oil and gold, geopolitical risk. Same
        enriched shape, ``relevance_score >= 4`` floor and cursor-based pagination as ``/api/news/``; equivalent to
        ``/api/news/?category=macro_economy,commodities,geopolitics``, surfaced as a first-class route.

        Macro rows are market-wide, so most carry an empty ``tickers`` list — that is by design (an FOMC statement is
        not news about one company), and the per-article analysis block is still populated. A macro row that IS about
        listed companies (an oil-price story tagged to majors) keeps its tickers.

        To watch for new releases, poll with ``sort=ingested`` — same delta contract as ``/api/news/?sort=ingested``.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            category: Narrow to a subset of the macro categories, comma-separated. Values outside
                ``macro_economy``/``commodities``/``geopolitics`` return 400 (the full category filter lives on
                ``/api/news/``).
            min_relevance: Override the default ≥4 threshold. On release days the release itself scores 7-9, so
                ``min_relevance=7`` keeps roughly "the events" and drops the commentary.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``. Cursors are mode-specific: a cursor is only valid with the sort
                mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, exactly as on ``/api/news/``: ISO-8601, a value
                without a timezone is read as UTC, a bare date (``2026-09-16``) means that day's midnight. "What did the
                tape say after the decision" is ``from_date=<decision day>`` plus ``min_relevance=7``. Subject to your
                plan's archive horizon (403 on the first page, see the ``403`` response) and refused with
                ``sort=ingested`` (400).
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date covers the
                WHOLE day, so ``from_date=2026-09-16&to_date=2026-09-16`` returns that day. ``from_date`` later than
                ``to_date`` returns 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of enriched macro articles.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. A
                resumed JSON delta scan consumed its work allowance without finding visible rows or reaching the head.
                ``extra.reason`` is ``delta_scan_incomplete``. Continue from ``extra.next_cursor`` with identical
                filters and sort; only invisible candidates were consumed. Do not retry the old cursor or treat this
                error as caught up. Existing SDK iterators raise a conflict error; applications must explicitly resume
                from the cursor in its ``extra``. CSV follows these continuations internally. Delta candidates changed
                between selection and reading. ``extra.reason`` is ``delta_candidates_changed``; no continuation cursor
                is returned. Retry the original request with the same cursor and filters. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_news_macro(
                cursor=cursor,
                category=category,
                min_relevance=min_relevance,
                page_size=page_size,
                sort=sort,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    def get_api_news_search(
        self,
        q: str,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        source_type: list[SourceTypeOrStr] | None = None,
        item: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NewsSearchPage:
        """Search the enriched feed by words. ``q`` is matched against each article's title, its summary and the entity
        names the enrichment extracted; the page comes back ranked (best match first, newest first among equal matches),
        with a per-item ``search_match`` and a ``query`` block that says how the words were read. ``symbol``,
        ``category``, ``source_type``, ``item``, ``min_relevance``, ``from_date``, ``to_date`` and ``collapse`` apply as
        hard filters on top, exactly as on ``/api/news/``: ``q=director&item=5.02`` searches 8-K filings that carry item
        5.02, ``q="going concern"&source_type=gdelt`` searches press coverage only.

        **Query syntax.** Bare words are all required (``chip tariffs``); a quoted phrase must appear in order (``"going
        concern"``); ``-word`` excludes (``apple -iphone``); ``OR`` separates alternatives (``nvidia OR amd``). Words in
        a non-Latin script are ignored. Matching tolerates one typo from five letters (``prices`` reaches ``price``) and
        a prefix on the last word; there is no stemming.

        **Modes** (``query.mode``). ``strict``: every word matched. ``broadened``: the strict pass found fewer than 5
        rows and the query has three or more words, so the most frequent words were dropped and the page carries rows
        with at least two of the query's words — ``search_match.terms_matched`` says how many on each; read these as
        leads, not matches. ``no_match``: nothing in the searched window. ``no_terms``: the query held no searchable
        words. Absence is not proof the event did not happen: the searched window starts at ``query.window_from``.

        **Window and paging.** The searched window is your plan's archive horizon (Free 30 days, Basic 90, Pro 180)
        unless ``from_date`` / ``to_date`` narrow it; a window reaching past the horizon returns 403 like the feed.
        Results are bounded to the best 200 matches (``matched`` counts them, capped at 200) and paged with an opaque
        ``cursor`` that is bound to the query that issued it. Responses are private and never shared-cached.

        **Failure.** When the search service does not answer in time the endpoint returns 503 with ``extra.reason =
        "search_unavailable"``. The structured feed and every other endpoint are unaffected: retry the search later
        rather than the whole chain.

        Args:
            q: The words to search for, 2 to 200 characters (syntax above). ``query`` is accepted as an alias.
            cursor: Opaque cursor from a prior response's ``next_cursor``; only valid with the ``q`` that issued it.
            symbol: Hard ticker filter, same forms and expansions as on ``/api/news/`` (``ticker`` is an alias).
            category: Hard category filter — single value, CSV or repeated, OR-matched.
            source_type: Keep only rows ingested from these sources, same values and forms as on ``/api/news/``:
                ``gdelt`` (press coverage), ``sec_form4``, ``sec_form8k``, ``sec_form6k``. Single, CSV or repeated,
                OR-matched. Unknown values return 400.
            item: 8-K item code, e.g. ``5.02``: only 8-K filings carrying that item (any item of the filing). Implies
                ``source_type=sec_form8k``; next to any other ``source_type`` it returns 400.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, up to ``50`` on a Pro key (``limit``
                is an alias).
            collapse: ``story`` collapses coverage of one event to its best-ranked article, with ``story_id``,
                ``sources_count`` and ``sources`` on each item.
            collapse_stories: Boolean alias: ``true`` is equivalent to ``collapse=story``; ``false`` leaves articles
                ungrouped. Send either spelling, not both (400).
            from_date: Inclusive lower bound on ``time_published`` (ISO-8601, UTC when naive; a bare date is that day's
                midnight). Past your archive horizon → 403.
            to_date: Inclusive upper bound on ``time_published``; a bare date covers its whole day.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of ranked matches.

        Raises:
            ApiError: ``q`` missing or outside 2-200 characters, an invalid cursor or one issued for another query, a
                ``page_size`` outside 1-50 or not permitted on this tier, ``from_date`` after ``to_date``, an unknown
                ``source_type``, a malformed ``item`` or one combined with a non-8-K ``source_type``, or an unsupported
                ``collapse`` value. Missing or invalid API key. The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. The search service did
                not answer in time. The body carries ``extra.reason = "search_unavailable"``; the feed endpoints are
                unaffected. ``error`` is ``Error | ApiNewsSearch503Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_news_search(
                q,
                cursor=cursor,
                symbol=symbol,
                category=category,
                source_type=source_type,
                item=item,
                min_relevance=min_relevance,
                page_size=page_size,
                collapse=collapse,
                collapse_stories=collapse_stories,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    def get_api_news_trending(self, *, request_options: RequestOptionsOrDict | None = None) -> list[RichNewsArticle]:
        """Top stories from the trailing 48h: ``relevance_score >= 8``, ranked by relevance score decayed by article
        age, so a fresh story outranks an equally-scored stale one. At most two stories per ticker. Fixed size of 10, no
        pagination. Coverage of one story, syndicated reprints and independent write-ups of the same event alike, is
        collapsed to a single representative, and each item carries the ``story_id``, ``sources_count`` and ``sources``
        fields for the story it represents. ``story_id`` is the story ROOT's uid — the stable story key shared with
        ``?collapse=story`` and the MCP tools — while the item itself is the story's strongest-ranked member, so
        ``story_id`` may differ from the item's own ``original.uid``. Most stories are carried by a single outlet, so
        ``sources_count`` is usually 1; see its field description.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of enriched articles.

        Raises:
            ApiError: Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_news_trending(request_options=request_options))

    @property
    def with_raw_response(self) -> NewsWithRawResponse:
        return self._with_raw_response


class AsyncNews:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNewsWithRawResponse(client, server, auth)

    async def get_api_news(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        exclude_categories: list[NewsCategoryOrStr] | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        source_type: list[NewsSourceTypeOrStr] | None = None,
        item: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsPagination:
        """Feed of enriched articles, newest first. Default filter: ``relevance_score >= 4`` AND at least one active
        ticker. Pagination is cursor-based with a default page size of 10 (any size from 1 to 20 via ``page_size=``; Pro
        keys go up to 50): omit ``cursor`` for the newest page, then pass the ``next_cursor`` from each response to
        fetch the next (older) page. ``next_cursor: null`` means the end of the feed. Cursors are opaque — do not
        construct or parse them; an invalid cursor returns 400. Archive depth is tiered: paging back past your plan's
        horizon (Free 30 days, Basic 90, Pro 180) returns 403 with an upgrade hint. **Delta polling**
        (``sort=ingested``): the same feed ordered by the moment rows became available, for "what is new since my last
        poll". Articles reach the feed later than their publish time (collection median ~30 min for general news, with a
        long tail), so a poller that filters by ``time_published`` misses most late arrivals; ``sort=ingested`` follows
        ingest order. First call without ``cursor`` returns a bounded sample of up to ``page_size`` recent visible rows
        and a cursor at the feed head. This initial sample may be partial or empty when the scan reaches its work limit;
        it still starts the live stream. Each later call with the previous ``next_cursor`` returns only rows added
        since. In this mode ``next_cursor`` is always non-null — empty ``results`` means you are caught up, keep the
        cursor and poll again later (responses are cached for 60 s, so polling more often than once a minute buys
        nothing). New rows only: an update to an already-delivered article is not re-sent. ``time_published`` is not
        monotonic within a delta page; sort client-side if you need chronological order. A cursor is only valid with the
        sort mode that issued it. On resumed requests, empty **successful** pages mean the current scan is caught up. A
        nonempty page shorter than ``page_size`` may still have a continuation; keep following its cursor. If a bounded
        scan cannot produce a page, HTTP 409 reports ``extra.reason="delta_scan_incomplete"`` and ``extra.next_cursor``.
        Continue from that cursor with identical filters and sort; repeating the original request cannot resolve this
        work limit. A concurrent change during reading instead returns HTTP 503 with
        ``extra.reason="delta_candidates_changed"``: retry the original request, without advancing its cursor. Neither
        error is cached. MCP delta tools report the same JSON envelopes as tool errors. The cursor family, archive gates
        and story-collapse behavior remain unchanged. Delta mode carries live coverage only: when we add history in bulk
        (backfilling an earlier period), those rows do NOT enter this stream — they would arrive as thousands of "new"
        items that are months old and push your cursor far behind the live feed. They are served normally in
        ``sort=published``, by date filters and by ``/api/news/{uid}/``, so a one-off catch-up over the archive is a
        published-mode query. **Keeping up.** One call returns at most ``page_size`` rows, so a poller holds its
        position at the head only while ``calls per day × page_size`` stays above the daily volume of the stream it
        asked for. Below that it falls a little further behind every day, and the symptom misleads: ``time_published``
        reads hours or days old while the data is current. What went stale is the cursor, not the feed. So drain instead
        of polling once per tick: when a page comes back with ``results`` filled, call again immediately, and sleep only
        once ``results`` is empty. That clears a burst within the same cycle and lets a poller catch up by itself after
        downtime. Two levers if the call budget is still short, and they multiply: ``page_size`` (up to 20, or 50 on a
        Pro key) and a narrower stream (``min_relevance``, ``symbol``, ``category``). For scale, at the default ``>= 4``
        floor the feed carries roughly 2,700 rows a day, while ``min_relevance=7`` carries roughly 1,000.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to articles that mention this ticker. US equities use the bare symbol (``NVDA``);
                cryptocurrencies use the ``<SYM>-USD`` form (``BTC-USD``), and a bare crypto name resolves to it
                (``DOGE`` matches ``DOGE-USD``); foreign listings use the Yahoo suffix (``VOD.L``). A delisted symbol
                returns its news history. A renamed company's current ticker also matches articles tagged with its
                former ticker, and any share class of an issuer matches articles tagged with its other listed classes
                (``GOOGL`` includes rows tagged ``GOOG``); article tags stay as published. ``ticker`` is accepted as an
                alias.
            category: Keep only these categories. Accepts a single value, a CSV list (``category=earnings,insider``), or
                a repeated parameter — matches any of them (OR).
            exclude_categories: Drop these categories from the feed. Same single / CSV / repeated forms as ``category``.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each
                response's ``next_cursor`` back as ``cursor`` regardless of page size. ``limit`` is accepted as an
                alias.
            collapse: ``story`` collapses coverage of one event to a single representative row (the story root):
                syndicated reprints and independently written articles about the same event, matched on headline and
                lead similarity. Populates the ``story_id``, ``sources_count`` and ``sources`` fields on each item. Omit
                for the full feed (every article, story fields ``null``). Only ``story`` is accepted; any other value
                returns 400. Note: row-level filters (``symbol``, ``category``, ``min_relevance``) apply to the story's
                representative root, so a story whose root does not match the filter is omitted entirely. The root is
                the best copy the enricher has seen: a later copy that outscores a weak root (one below 7) takes the
                root over, so a story's ``story_id`` and its place in the feed can move once to that copy; a root at 7
                or above is never replaced. An 8-K that carries a press release as its exhibit is a member of that
                release's story (same issuer, the release's headline inside the filing, within 3 hours) when the release
                itself scores at or above the feed floor, so with ``source_type=sec_form8k`` a collapsed feed omits such
                filings — read them uncollapsed. A filing whose release scored below the floor stays its own story.
            collapse_stories: Boolean alias matching the MCP and Python SDK option. ``true`` is equivalent to
                ``collapse=story``; ``false`` leaves articles ungrouped. Send either ``collapse`` or
                ``collapse_stories``, not both (400).
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode: rows in
                the order they became available, ascending, with ``next_cursor`` always returned (empty ``results`` =
                caught up) — see the endpoint description. All other filters apply unchanged in both modes. Cursors are
                mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published`` — when the article was published, not when it entered
                the feed. ISO-8601; a value without a timezone is read as UTC. A bare date (``2026-06-01``) means that
                day's midnight. Reaching further back than your plan's archive horizon returns 403 (see the ``403``
                response) — the window is subject to the same tiered depth as a deep ``cursor``, and on the first page
                just the same. Cannot be combined with ``sort=ingested`` (400): delta mode returns rows in ingest order
                from your cursor and never walks back into history.
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date
                (``2026-06-01``) covers the WHOLE day (through ``23:59:59.999999Z``), so
                ``from_date=2026-06-01&to_date=2026-06-01`` returns that day rather than an empty page. ``from_date``
                later than ``to_date`` returns 400.
            source_type: Keep only rows ingested from these sources: ``gdelt`` (press coverage), ``sec_form4`` (insider
                transactions), ``sec_form8k`` (8-K current reports), ``sec_form6k`` (a foreign private issuer's 6-K
                earnings release). Same single / CSV / repeated forms as ``category``, OR-matched. Unknown values return
                400. Composes with every other filter: ``source_type=sec_form8k&symbol=NVDA`` is one company's 8-Ks,
                ``source_type=gdelt&min_relevance=8`` is the press without any filing.
            item: 8-K item code, e.g. ``5.02`` (officer departures/appointments), ``8.01`` (other events), ``1.01``
                (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing, not just the
                one that drove its category — and implies ``source_type=sec_form8k``; ``item`` next to any other
                ``source_type`` returns 400 (only 8-Ks have item codes). The category filter already covers the two
                headline items (``2.02`` → ``earnings``, ``2.01`` → ``mergers_acquisitions``); ``item`` is for
                everything else. A filing SEC served no document for has an empty item list and never matches. Every
                matched row carries the ``filing`` block.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of enriched articles.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. A
                resumed JSON delta scan consumed its work allowance without finding visible rows or reaching the head.
                ``extra.reason`` is ``delta_scan_incomplete``. Continue from ``extra.next_cursor`` with identical
                filters and sort; only invisible candidates were consumed. Do not retry the old cursor or treat this
                error as caught up. Existing SDK iterators raise a conflict error; applications must explicitly resume
                from the cursor in its ``extra``. CSV follows these continuations internally. Delta candidates changed
                between selection and reading. ``extra.reason`` is ``delta_candidates_changed``; no continuation cursor
                is returned. Retry the original request with the same cursor and filters. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_news(
                cursor=cursor,
                symbol=symbol,
                category=category,
                exclude_categories=exclude_categories,
                min_relevance=min_relevance,
                page_size=page_size,
                collapse=collapse,
                collapse_stories=collapse_stories,
                sort=sort,
                from_date=from_date,
                to_date=to_date,
                source_type=source_type,
                item=item,
                request_options=request_options,
            ),
        )

    async def get_api_news_brief(
        self,
        tickers: list[str],
        *,
        hours: int | None = 24,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WatchlistBriefDto:
        """One response with recent news grouped by story, a separate SEC Form 4/8-K/6-K filings section, and the next
        confirmed earnings date per ticker. Supply your symbols explicitly; this endpoint does not read an account's
        saved watchlist. The website and MCP tool ``alphai_watchlist_brief`` use the caller's saved list instead.

        ``hours`` is a publication-time window ending at ``generated_at``, both ends inclusive. This is a ranked
        snapshot, not a delta since the last call. Bulk backfills are excluded. Within each section, the newest 500
        matching articles at the configured relevance floor (default 4) are grouped, then ranked by each group's highest
        relevance and novelty, then its newest publication time. Fields on a returned event describe the representative
        article. ``limit`` applies independently to news and filings. Either a candidate overflow or additional grouped
        stories sets that section's ``*_truncated`` flag. A truncated response is a selection, not a complete event
        inventory; narrow ``hours`` or use the paginated ticker feed for further coverage.

        An event shared by several requested tickers appears once, with ``matched_tickers`` naming all matches. If press
        coverage and a filing share a story, the filing represents it once in the filings section. Distinct Form 4
        transaction legs remain separate even when they share a filing URL. Share classes and former ticker names are
        included. Unrecognized symbols are returned in ``unknown_tickers``; bare crypto names are not guessed (use
        BTC-USD). Dates are confirmed only, on or after today's America/New_York date, excluding reports already matched
        to a published filing; absence means no confirmed date on file, not that no report is due. Available on every
        tier. Responses use ``Cache-Control: private, no-store``.

        Args:
            tickers: 1–100 distinct symbols, comma-separated or repeated; case-insensitive.
            hours: Value sent with the request.
            limit: Maximum grouped stories in each section; this brief has no cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Brief with explicit coverage and truncation information.

        Raises:
            ApiError: Invalid Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_news_brief(
                tickers, hours=hours, limit=limit, request_options=request_options
            ),
        )

    async def get_api_news_by_uid(
        self, uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RichNewsArticle:
        """One enriched article. SEC rows carry the same structured block the feeds serve: ``insider`` on a Form 4 row
        (as on ``/api/news/insider/``), ``filing`` on an 8-K row (as on ``/api/news/``), so a uid taken from
        ``/api/news/insider/clusters/`` opens with its trade data. An 8-K or 6-K earnings filing can also carry
        ``earnings`` (see that field), which no feed populates.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A single enriched article.

        Raises:
            ApiError: No item with that identifier. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_news_by_uid(uid, request_options=request_options))

    async def get_api_news_by_uid_related(
        self, uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiNewsRelatedResponse:
        """Up to 6 articles related to the given article: fresh articles sharing a ticker first, then same-category
        recents as backfill. Same enriched shape and ``relevance_score >= 4`` filtering as ``/api/news/``; insider (SEC
        Form 4) rows are excluded unless the base article is itself insider. No pagination — the list is a fixed-size
        block.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Related enriched articles (possibly fewer than 6).

        Raises:
            ApiError: No item with that identifier. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_news_by_uid_related(uid, request_options=request_options))

    async def get_api_news_insider(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        min_relevance: int | None = 4,
        is_10b5_1: bool | None = None,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsPagination:
        """Dedicated insider feed (``category=insider``): SEC EDGAR Form 4 insider activity ONLY — one
        deterministic-templated row per filing event (a filing's non-derivative trades of one type and holding form,
        aggregated: total shares, volume-weighted average price and executed range, total value), surfaced shortly after
        filing, with the relevance score computed from the event's total (size, buy vs. sell, 10b5-1 plan or not). A
        sale (``transaction_code`` ``S``) tops out at 6 whatever its size, and so does a sale back to the issuer (``D``)
        that leaves the insider with no shares, which is how holdings are cashed out when an acquisition closes.
        Purchases, and a ``D`` that leaves a holding (the company buying back a holder's block), use the full scale. A
        sale filed without a price stays at 6 too. Same enriched shape, ticker and ``relevance_score >= 4`` filtering,
        and cursor-based pagination as ``/api/news/``. Equivalent to ``/api/news/?category=insider``, surfaced as a
        first-class route. For aggregate stats instead of the stream, see ``/api/symbols/{ticker}/insider-summary/``.

        The category is fixed to ``insider``. This endpoint does not accept ``category``, ``exclude_categories`` or
        story-grouping parameters; use ``/api/news/`` for those filters.

        To watch for new filings, poll with ``sort=ingested`` rather than re-reading the newest page: a Form 4 is filed
        up to several days after the trade it reports, so a new event often enters the feed already below the head of
        the publish-ordered page. Delta mode orders by the moment the row became available, so it never misses one. The
        contract is identical to ``/api/news/?sort=ingested`` — see that endpoint for the full description.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to insider news that mentions this ticker. Delisted symbols return their history; a renamed
                company's current ticker also matches rows tagged with its former ticker. ``ticker`` is accepted as an
                alias.
            min_relevance: Override the default ≥4 threshold. Insider rows score deterministically from the event's
                summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an "only
                large trades" dial: ``min_relevance=6`` keeps purchases from roughly $500k and sales from roughly $1M,
                ``min_relevance=7`` keeps purchases from roughly $1M and no sales, except a large buyback by the company
                from a holder who keeps a stake (``transaction_code`` ``D``). A 10b5-1 plan trade sits one step lower.
            is_10b5_1: Filter on the same field each item's ``insider`` block reports: the event's Rule 10b5-1 status.
                Omit for every event; ``false`` returns discretionary trades only — the "hide pre-scheduled sales" dial,
                since a 10b5-1 ladder was set up months earlier and carries no timing decision; ``true`` returns plan
                events only. Event-level, like the field itself: a filing whose group mixes plan and discretionary
                tranches counts as a plan event on both. The two values partition the feed, so ``true`` and ``false``
                pages always add up to the unfiltered one.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``: rows in the order they became available, ascending,
                ``next_cursor`` always returned (empty ``results`` = caught up), and all other filters applied
                unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the trade it reports,
                so a new event routinely lands below the newest page of the publish-ordered feed and a poller reading
                only the head misses it. Cursors are mode-specific: a cursor is only valid with the sort mode that
                issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, identical in format and behaviour to the parameter
                on ``/api/news/`` (ISO-8601, naive read as UTC, tier-gated with 403, refused with ``sort=ingested``).
                Note which clock it is: ``time_published`` is when the filing reached the feed, NOT the insider's
                ``transaction_date`` reported in the ``insider`` block. A Form 4 is filed days after the trade, so a
                window over trade dates is a different question and this parameter does not answer it.
            to_date: Inclusive upper bound on ``time_published``. A bare date covers the whole day; same clock caveat as
                ``from_date``.
            format_: Response format. ``json`` (default) is the page described below. ``csv`` streams the same feed as a
                file: one row per insider event, the same filters (``symbol``, ``min_relevance``, ``is_10b5_1``,
                ``from_date``/``to_date``, ``sort``, ``cursor``), walked page by page on the server up to your plan's
                **row cap** — Free 500, Basic 2 000, Pro 10 000 rows per file — inside your plan's archive horizon (30 /
                90 / 180 days). ``page_size`` has no effect on CSV. One request counts once against your rate limit,
                whatever the file's length. Where a JSON page past the horizon returns 403, the file stops at the
                horizon and the response headers say so (``X-Alphai-Truncated: archive_horizon``). Validation errors (a
                bad cursor, an inverted window, a window with ``sort=ingested``) are the same 400 JSON bodies as for
                ``format=json``, sent before any row. Concurrent feed changes or a connection error can interrupt the
                stream after headers are sent. Accept a file only after the stream completes and the number of parsed
                CSV data rows matches ``X-Alphai-Rows``. Otherwise discard the partial file and retry the original
                request; do not advance to ``X-Alphai-Next-Cursor``. Response: ``Content-Type: text/csv;
                charset=utf-8``, ``Content-Disposition: attachment; filename="alphai-insider-<date>.csv"``,
                ``Cache-Control: private, no-store``, plus the ``X-Alphai-*`` headers listed under the 200 response:
                ``X-Alphai-Rows`` (data rows in the file), ``X-Alphai-Row-Cap`` (your plan's cap),
                ``X-Alphai-Truncated`` (``row_cap`` — more rows exist, continue with the cursor; ``archive_horizon`` —
                the walk reached your plan's archive depth; ``false`` — the file holds everything the filters select)
                and ``X-Alphai-Next-Cursor`` (present when there is more: the same token a JSON page would have returned
                at that position, so you can continue in either format). Columns, in order: ``uid``, ``time_published``,
                ``tickers`` (``|``-joined), ``title``, ``url``, ``category``, ``relevance_score``, ``side``,
                ``transaction_code``, ``shares``, ``avg_price_usd``, ``total_value_usd``, ``is_10b5_1``,
                ``insider_name``, ``insider_title``, ``is_officer``, ``is_director``, ``is_ten_percent_owner``,
                ``transaction_date``, ``filed_at``, ``late_filing``, ``summary`` — the JSON item's fields and its
                ``insider`` block flattened (event columns are empty for a row without a block). RFC 4180 quoting, LF
                line endings, UTF-8, timestamps in ISO 8601 UTC (``Z``), booleans ``true``/``false``, an empty cell for
                null, never the article body. A free-text cell that begins with ``=``, ``+``, ``-``, ``@`` or a tab is
                prefixed with an apostrophe so it cannot run as a formula when the file is opened in a spreadsheet.
                Select the format with this parameter only: an ``Accept: text/csv`` header on its own still returns
                JSON, and a client that sends ``Accept: application/json`` together with ``format=csv`` gets 406. With
                ``sort=ingested`` and no cursor the file holds the newest rows (up to the cap) in ingest order and the
                cursor parks at the head, like the JSON prime page; with a cursor it holds everything since that
                position, with rows older than your archive horizon skipped and reported as ``archive_horizon``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of enriched insider-transaction articles. Each item additionally carries the structured ``insider``
            event block (side / shares / average price / total value / reporting owner) — populated on this endpoint
            only. With ``format=csv``, the same rows as a streamed CSV file: see the ``format`` parameter for the
            columns, the per-plan row caps and the ``X-Alphai-*`` headers.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. A
                resumed JSON delta scan consumed its work allowance without finding visible rows or reaching the head.
                ``extra.reason`` is ``delta_scan_incomplete``. Continue from ``extra.next_cursor`` with identical
                filters and sort; only invisible candidates were consumed. Do not retry the old cursor or treat this
                error as caught up. Existing SDK iterators raise a conflict error; applications must explicitly resume
                from the cursor in its ``extra``. CSV follows these continuations internally. Delta candidates changed
                between selection and reading. ``extra.reason`` is ``delta_candidates_changed``; no continuation cursor
                is returned. Retry the original request with the same cursor and filters. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_news_insider(
                cursor=cursor,
                symbol=symbol,
                min_relevance=min_relevance,
                is_10b5_1=is_10b5_1,
                page_size=page_size,
                sort=sort,
                from_date=from_date,
                to_date=to_date,
                format_=format_,
                request_options=request_options,
            ),
        )

    async def get_api_news_insider_clusters(
        self,
        *,
        days: int | None = 30,
        min_buyers: int | None = 2,
        min_usd: int | None = None,
        pattern: Pattern1OrStr | None = Pattern1.OPEN_MARKET,
        symbol: str | None = None,
        sort: Sort3OrStr | None = Sort3.RECENT,
        cursor: str | None = None,
        page_size: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InsiderClustersPage:
        """Episodes in which **several different insiders of one issuer bought on the open market together**: an
        issuer's Form 4 purchase dates are chained into one episode while consecutive purchases are at most 10 days
        apart (an episode is cut at 30 days), and every purchase inside it is examined before a buyer counts.

        Counting names is not enough — the loudest look-alikes are an IPO or PIPE allocation (caught by its price shape,
        or by the filing's own footnote saying the shares came from the issuer, an offering or a negotiated block), a
        mutual-bank conversion, ESPP / DRIP / director-plan lots, the same transaction reported through two owners (a
        director via the fund and the fund itself), and plan lots sitting next to one real purchase. Each buyer
        therefore carries a ``role``: ``independent`` buyers are the cluster; ``plan_like`` (with ``reason`` when the
        filing's words decided it), ``unpriced`` and ``duplicate_of`` buyers are listed so you can see why a 30-name
        filing burst is not one. The episode's ``pattern`` is ``open_market`` when at least two independent buyers
        remain and one of them is an officer or director, ``holders_only`` when only 10% holders without a role remain,
        and ``plan_or_offering`` otherwise. The default hides everything but ``open_market``; ask for the rest
        explicitly. The rule was fixed against 90 episodes checked by hand against the filings (2026-09-22): it shows 58
        of 58 real clusters and hides 29 of 30 look-alikes; a 401(k) plan purchase can still pass, since the filing says
        so only in a footnote.

        ``days`` is measured on ``known_at`` — the moment the episode's latest filing reached EDGAR — so "what became
        known this month" is one call. A purchase filed more than ~40 days after the trade is not chained (2.3% of Form
        4 purchases). Coverage starts at ``meta.coverage_since`` (the tranche table begins in August 2025); this is a
        descriptive screen (``research_only``, not point-in-time), with no returns attached. Only common-stock purchases
        outside Rule 10b5-1 plans are considered; units, preferred and warrants are ignored.

        Args:
            days: Lookback in days over ``known_at``, ``1``-``90``, default ``30``. Deeper than your plan's archive
                horizon (Free 30, Basic 90) returns 403.
            min_buyers: Minimum headcount, ``2``-``10``, default ``2``: independent buyers for ``open_market`` /
                ``holders_only`` episodes, everyone who bought (``buyers_total``) for ``plan_or_offering`` ones, where
                by construction fewer than two buyers are independent.
            min_usd: Drop episodes whose ``total_usd`` is below this. An episode with an unknown total
                (``value_partial`` with no priced fill) is kept, not dropped — a missing number is not a small one.
            pattern: ``open_market`` (default), ``plan_or_offering``, ``holders_only``, or ``all``. Insiders taking a
                $70M IPO allocation is an event too; it is labeled, not hidden, when you ask for it.
            symbol: One ticker. A renamed company's current ticker also matches episodes tagged with its former ticker,
                and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still returns its episodes
                when named explicitly; the unfiltered list shows active listings only. ``ticker`` is accepted as an
                alias.
            sort: ``recent`` (default) — newest ``known_at`` first; ``buyers`` — most independent buyers first, ties by
                value; ``value`` — largest ``total_usd`` first, unknown totals last. Cursors are sort-specific.
            cursor: Opaque cursor from a prior response's ``next_cursor``, with the same ``sort``. Omit for the first
                page.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, ``21``-``50`` with a Pro key.
                ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of classified purchase episodes, newest known first by default.

        Raises:
            ApiError: A parameter outside its range or enum The request reaches past your plan's news-archive horizon
                (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date`` does. The
                body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's ``archive_days``, and
                (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL. The window is checked
                on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is refused immediately
                rather than after paging down to it. A window with only ``to_date`` is refused when that bound itself is
                past the horizon (the window is open-ended into the past). Windows and cursors inside the horizon are
                unaffected, and the request is refused rather than trimmed to the horizon, so a given URL always returns
                the same body. Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_news_insider_clusters(
                days=days,
                min_buyers=min_buyers,
                min_usd=min_usd,
                pattern=pattern,
                symbol=symbol,
                sort=sort,
                cursor=cursor,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def get_api_news_macro(
        self,
        *,
        cursor: str | None = None,
        category: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsPagination:
        """Dedicated macro feed: the ``macro_economy``, ``commodities`` and ``geopolitics`` categories in one stream —
        central-bank decisions and statements (FOMC), inflation/jobs prints, oil and gold, geopolitical risk. Same
        enriched shape, ``relevance_score >= 4`` floor and cursor-based pagination as ``/api/news/``; equivalent to
        ``/api/news/?category=macro_economy,commodities,geopolitics``, surfaced as a first-class route.

        Macro rows are market-wide, so most carry an empty ``tickers`` list — that is by design (an FOMC statement is
        not news about one company), and the per-article analysis block is still populated. A macro row that IS about
        listed companies (an oil-price story tagged to majors) keeps its tickers.

        To watch for new releases, poll with ``sort=ingested`` — same delta contract as ``/api/news/?sort=ingested``.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            category: Narrow to a subset of the macro categories, comma-separated. Values outside
                ``macro_economy``/``commodities``/``geopolitics`` return 400 (the full category filter lives on
                ``/api/news/``).
            min_relevance: Override the default ≥4 threshold. On release days the release itself scores 7-9, so
                ``min_relevance=7`` keeps roughly "the events" and drops the commentary.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``. Cursors are mode-specific: a cursor is only valid with the sort
                mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, exactly as on ``/api/news/``: ISO-8601, a value
                without a timezone is read as UTC, a bare date (``2026-09-16``) means that day's midnight. "What did the
                tape say after the decision" is ``from_date=<decision day>`` plus ``min_relevance=7``. Subject to your
                plan's archive horizon (403 on the first page, see the ``403`` response) and refused with
                ``sort=ingested`` (400).
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date covers the
                WHOLE day, so ``from_date=2026-09-16&to_date=2026-09-16`` returns that day. ``from_date`` later than
                ``to_date`` returns 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of enriched macro articles.

        Raises:
            ApiError: Invalid cursor (opaque; reuse ``next_cursor``) The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. A
                resumed JSON delta scan consumed its work allowance without finding visible rows or reaching the head.
                ``extra.reason`` is ``delta_scan_incomplete``. Continue from ``extra.next_cursor`` with identical
                filters and sort; only invisible candidates were consumed. Do not retry the old cursor or treat this
                error as caught up. Existing SDK iterators raise a conflict error; applications must explicitly resume
                from the cursor in its ``extra``. CSV follows these continuations internally. Delta candidates changed
                between selection and reading. ``extra.reason`` is ``delta_candidates_changed``; no continuation cursor
                is returned. Retry the original request with the same cursor and filters. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_news_macro(
                cursor=cursor,
                category=category,
                min_relevance=min_relevance,
                page_size=page_size,
                sort=sort,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    async def get_api_news_search(
        self,
        q: str,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        source_type: list[SourceTypeOrStr] | None = None,
        item: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NewsSearchPage:
        """Search the enriched feed by words. ``q`` is matched against each article's title, its summary and the entity
        names the enrichment extracted; the page comes back ranked (best match first, newest first among equal matches),
        with a per-item ``search_match`` and a ``query`` block that says how the words were read. ``symbol``,
        ``category``, ``source_type``, ``item``, ``min_relevance``, ``from_date``, ``to_date`` and ``collapse`` apply as
        hard filters on top, exactly as on ``/api/news/``: ``q=director&item=5.02`` searches 8-K filings that carry item
        5.02, ``q="going concern"&source_type=gdelt`` searches press coverage only.

        **Query syntax.** Bare words are all required (``chip tariffs``); a quoted phrase must appear in order (``"going
        concern"``); ``-word`` excludes (``apple -iphone``); ``OR`` separates alternatives (``nvidia OR amd``). Words in
        a non-Latin script are ignored. Matching tolerates one typo from five letters (``prices`` reaches ``price``) and
        a prefix on the last word; there is no stemming.

        **Modes** (``query.mode``). ``strict``: every word matched. ``broadened``: the strict pass found fewer than 5
        rows and the query has three or more words, so the most frequent words were dropped and the page carries rows
        with at least two of the query's words — ``search_match.terms_matched`` says how many on each; read these as
        leads, not matches. ``no_match``: nothing in the searched window. ``no_terms``: the query held no searchable
        words. Absence is not proof the event did not happen: the searched window starts at ``query.window_from``.

        **Window and paging.** The searched window is your plan's archive horizon (Free 30 days, Basic 90, Pro 180)
        unless ``from_date`` / ``to_date`` narrow it; a window reaching past the horizon returns 403 like the feed.
        Results are bounded to the best 200 matches (``matched`` counts them, capped at 200) and paged with an opaque
        ``cursor`` that is bound to the query that issued it. Responses are private and never shared-cached.

        **Failure.** When the search service does not answer in time the endpoint returns 503 with ``extra.reason =
        "search_unavailable"``. The structured feed and every other endpoint are unaffected: retry the search later
        rather than the whole chain.

        Args:
            q: The words to search for, 2 to 200 characters (syntax above). ``query`` is accepted as an alias.
            cursor: Opaque cursor from a prior response's ``next_cursor``; only valid with the ``q`` that issued it.
            symbol: Hard ticker filter, same forms and expansions as on ``/api/news/`` (``ticker`` is an alias).
            category: Hard category filter — single value, CSV or repeated, OR-matched.
            source_type: Keep only rows ingested from these sources, same values and forms as on ``/api/news/``:
                ``gdelt`` (press coverage), ``sec_form4``, ``sec_form8k``, ``sec_form6k``. Single, CSV or repeated,
                OR-matched. Unknown values return 400.
            item: 8-K item code, e.g. ``5.02``: only 8-K filings carrying that item (any item of the filing). Implies
                ``source_type=sec_form8k``; next to any other ``source_type`` it returns 400.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, up to ``50`` on a Pro key (``limit``
                is an alias).
            collapse: ``story`` collapses coverage of one event to its best-ranked article, with ``story_id``,
                ``sources_count`` and ``sources`` on each item.
            collapse_stories: Boolean alias: ``true`` is equivalent to ``collapse=story``; ``false`` leaves articles
                ungrouped. Send either spelling, not both (400).
            from_date: Inclusive lower bound on ``time_published`` (ISO-8601, UTC when naive; a bare date is that day's
                midnight). Past your archive horizon → 403.
            to_date: Inclusive upper bound on ``time_published``; a bare date covers its whole day.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of ranked matches.

        Raises:
            ApiError: ``q`` missing or outside 2-200 characters, an invalid cursor or one issued for another query, a
                ``page_size`` outside 1-50 or not permitted on this tier, ``from_date`` after ``to_date``, an unknown
                ``source_type``, a malformed ``item`` or one combined with a non-8-K ``source_type``, or an unsupported
                ``collapse`` value. Missing or invalid API key. The request reaches past your plan's news-archive
                horizon (Free 30 days, Basic 90, Pro 180) — either the ``cursor`` points beyond it, or ``from_date``
                does. The body's ``extra`` carries ``reason: archive_horizon``, your ``tier``, the plan's
                ``archive_days``, and (below Pro) an ``upgrade`` block with the higher tiers' caps and the pricing URL.
                The window is checked on the FIRST page, unlike the cursor: a ``from_date`` older than the horizon is
                refused immediately rather than after paging down to it. A window with only ``to_date`` is refused when
                that bound itself is past the horizon (the window is open-ended into the past). Windows and cursors
                inside the horizon are unaffected, and the request is refused rather than trimmed to the horizon, so a
                given URL always returns the same body. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. The search service did
                not answer in time. The body carries ``extra.reason = "search_unavailable"``; the feed endpoints are
                unaffected. ``error`` is ``Error | ApiNewsSearch503Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_news_search(
                q,
                cursor=cursor,
                symbol=symbol,
                category=category,
                source_type=source_type,
                item=item,
                min_relevance=min_relevance,
                page_size=page_size,
                collapse=collapse,
                collapse_stories=collapse_stories,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    async def get_api_news_trending(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[RichNewsArticle]:
        """Top stories from the trailing 48h: ``relevance_score >= 8``, ranked by relevance score decayed by article
        age, so a fresh story outranks an equally-scored stale one. At most two stories per ticker. Fixed size of 10, no
        pagination. Coverage of one story, syndicated reprints and independent write-ups of the same event alike, is
        collapsed to a single representative, and each item carries the ``story_id``, ``sources_count`` and ``sources``
        fields for the story it represents. ``story_id`` is the story ROOT's uid — the stable story key shared with
        ``?collapse=story`` and the MCP tools — while the item itself is the story's strongest-ranked member, so
        ``story_id`` may differ from the item's own ``original.uid``. Most stories are carried by a single outlet, so
        ``sources_count`` is usually 1; see its field description.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of enriched articles.

        Raises:
            ApiError: Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_news_trending(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncNewsWithRawResponse:
        return self._with_raw_response


class NewsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_news(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        exclude_categories: list[NewsCategoryOrStr] | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        source_type: list[NewsSourceTypeOrStr] | None = None,
        item: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsPagination, GetApiNewsErrorBody]:
        """Feed of enriched articles, newest first. Default filter: ``relevance_score >= 4`` AND at least one active
        ticker. Pagination is cursor-based with a default page size of 10 (any size from 1 to 20 via ``page_size=``; Pro
        keys go up to 50): omit ``cursor`` for the newest page, then pass the ``next_cursor`` from each response to
        fetch the next (older) page. ``next_cursor: null`` means the end of the feed. Cursors are opaque — do not
        construct or parse them; an invalid cursor returns 400. Archive depth is tiered: paging back past your plan's
        horizon (Free 30 days, Basic 90, Pro 180) returns 403 with an upgrade hint. **Delta polling**
        (``sort=ingested``): the same feed ordered by the moment rows became available, for "what is new since my last
        poll". Articles reach the feed later than their publish time (collection median ~30 min for general news, with a
        long tail), so a poller that filters by ``time_published`` misses most late arrivals; ``sort=ingested`` follows
        ingest order. First call without ``cursor`` returns a bounded sample of up to ``page_size`` recent visible rows
        and a cursor at the feed head. This initial sample may be partial or empty when the scan reaches its work limit;
        it still starts the live stream. Each later call with the previous ``next_cursor`` returns only rows added
        since. In this mode ``next_cursor`` is always non-null — empty ``results`` means you are caught up, keep the
        cursor and poll again later (responses are cached for 60 s, so polling more often than once a minute buys
        nothing). New rows only: an update to an already-delivered article is not re-sent. ``time_published`` is not
        monotonic within a delta page; sort client-side if you need chronological order. A cursor is only valid with the
        sort mode that issued it. On resumed requests, empty **successful** pages mean the current scan is caught up. A
        nonempty page shorter than ``page_size`` may still have a continuation; keep following its cursor. If a bounded
        scan cannot produce a page, HTTP 409 reports ``extra.reason="delta_scan_incomplete"`` and ``extra.next_cursor``.
        Continue from that cursor with identical filters and sort; repeating the original request cannot resolve this
        work limit. A concurrent change during reading instead returns HTTP 503 with
        ``extra.reason="delta_candidates_changed"``: retry the original request, without advancing its cursor. Neither
        error is cached. MCP delta tools report the same JSON envelopes as tool errors. The cursor family, archive gates
        and story-collapse behavior remain unchanged. Delta mode carries live coverage only: when we add history in bulk
        (backfilling an earlier period), those rows do NOT enter this stream — they would arrive as thousands of "new"
        items that are months old and push your cursor far behind the live feed. They are served normally in
        ``sort=published``, by date filters and by ``/api/news/{uid}/``, so a one-off catch-up over the archive is a
        published-mode query. **Keeping up.** One call returns at most ``page_size`` rows, so a poller holds its
        position at the head only while ``calls per day × page_size`` stays above the daily volume of the stream it
        asked for. Below that it falls a little further behind every day, and the symptom misleads: ``time_published``
        reads hours or days old while the data is current. What went stale is the cursor, not the feed. So drain instead
        of polling once per tick: when a page comes back with ``results`` filled, call again immediately, and sleep only
        once ``results`` is empty. That clears a burst within the same cycle and lets a poller catch up by itself after
        downtime. Two levers if the call budget is still short, and they multiply: ``page_size`` (up to 20, or 50 on a
        Pro key) and a narrower stream (``min_relevance``, ``symbol``, ``category``). For scale, at the default ``>= 4``
        floor the feed carries roughly 2,700 rows a day, while ``min_relevance=7`` carries roughly 1,000.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to articles that mention this ticker. US equities use the bare symbol (``NVDA``);
                cryptocurrencies use the ``<SYM>-USD`` form (``BTC-USD``), and a bare crypto name resolves to it
                (``DOGE`` matches ``DOGE-USD``); foreign listings use the Yahoo suffix (``VOD.L``). A delisted symbol
                returns its news history. A renamed company's current ticker also matches articles tagged with its
                former ticker, and any share class of an issuer matches articles tagged with its other listed classes
                (``GOOGL`` includes rows tagged ``GOOG``); article tags stay as published. ``ticker`` is accepted as an
                alias.
            category: Keep only these categories. Accepts a single value, a CSV list (``category=earnings,insider``), or
                a repeated parameter — matches any of them (OR).
            exclude_categories: Drop these categories from the feed. Same single / CSV / repeated forms as ``category``.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each
                response's ``next_cursor`` back as ``cursor`` regardless of page size. ``limit`` is accepted as an
                alias.
            collapse: ``story`` collapses coverage of one event to a single representative row (the story root):
                syndicated reprints and independently written articles about the same event, matched on headline and
                lead similarity. Populates the ``story_id``, ``sources_count`` and ``sources`` fields on each item. Omit
                for the full feed (every article, story fields ``null``). Only ``story`` is accepted; any other value
                returns 400. Note: row-level filters (``symbol``, ``category``, ``min_relevance``) apply to the story's
                representative root, so a story whose root does not match the filter is omitted entirely. The root is
                the best copy the enricher has seen: a later copy that outscores a weak root (one below 7) takes the
                root over, so a story's ``story_id`` and its place in the feed can move once to that copy; a root at 7
                or above is never replaced. An 8-K that carries a press release as its exhibit is a member of that
                release's story (same issuer, the release's headline inside the filing, within 3 hours) when the release
                itself scores at or above the feed floor, so with ``source_type=sec_form8k`` a collapsed feed omits such
                filings — read them uncollapsed. A filing whose release scored below the floor stays its own story.
            collapse_stories: Boolean alias matching the MCP and Python SDK option. ``true`` is equivalent to
                ``collapse=story``; ``false`` leaves articles ungrouped. Send either ``collapse`` or
                ``collapse_stories``, not both (400).
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode: rows in
                the order they became available, ascending, with ``next_cursor`` always returned (empty ``results`` =
                caught up) — see the endpoint description. All other filters apply unchanged in both modes. Cursors are
                mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published`` — when the article was published, not when it entered
                the feed. ISO-8601; a value without a timezone is read as UTC. A bare date (``2026-06-01``) means that
                day's midnight. Reaching further back than your plan's archive horizon returns 403 (see the ``403``
                response) — the window is subject to the same tiered depth as a deep ``cursor``, and on the first page
                just the same. Cannot be combined with ``sort=ingested`` (400): delta mode returns rows in ingest order
                from your cursor and never walks back into history.
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date
                (``2026-06-01``) covers the WHOLE day (through ``23:59:59.999999Z``), so
                ``from_date=2026-06-01&to_date=2026-06-01`` returns that day rather than an empty page. ``from_date``
                later than ``to_date`` returns 400.
            source_type: Keep only rows ingested from these sources: ``gdelt`` (press coverage), ``sec_form4`` (insider
                transactions), ``sec_form8k`` (8-K current reports), ``sec_form6k`` (a foreign private issuer's 6-K
                earnings release). Same single / CSV / repeated forms as ``category``, OR-matched. Unknown values return
                400. Composes with every other filter: ``source_type=sec_form8k&symbol=NVDA`` is one company's 8-Ks,
                ``source_type=gdelt&min_relevance=8`` is the press without any filing.
            item: 8-K item code, e.g. ``5.02`` (officer departures/appointments), ``8.01`` (other events), ``1.01``
                (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing, not just the
                one that drove its category — and implies ``source_type=sec_form8k``; ``item`` next to any other
                ``source_type`` returns 400 (only 8-Ks have item codes). The category filter already covers the two
                headline items (``2.02`` → ``earnings``, ``2.01`` → ``mergers_acquisitions``); ``item`` is for
                everything else. A filing SEC served no document for has an empty item list and never matches. Every
                matched row carries the ``filing`` block.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[str | None]("symbol", symbol),
                param[list[NewsCategoryOrStr] | None]("category", category),
                param[list[NewsCategoryOrStr] | None]("exclude_categories", exclude_categories),
                param[int | None]("min_relevance", min_relevance),
                param[int | None]("page_size", page_size),
                param[CollapseOrStr | None]("collapse", collapse),
                param[bool | None]("collapse_stories", collapse_stories),
                param[Sort1OrStr | None]("sort", sort),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
                param[list[NewsSourceTypeOrStr] | None]("source_type", source_type),
                param[str | None]("item", item),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[NewsPagination],
            error_mapper=get_api_news_error_mapper,
            request_options=request_options,
        )

    def get_api_news_brief(
        self,
        tickers: list[str],
        *,
        hours: int | None = 24,
        limit: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistBriefDto, GetApiNewsBriefErrorBody]:
        """One response with recent news grouped by story, a separate SEC Form 4/8-K/6-K filings section, and the next
        confirmed earnings date per ticker. Supply your symbols explicitly; this endpoint does not read an account's
        saved watchlist. The website and MCP tool ``alphai_watchlist_brief`` use the caller's saved list instead.

        ``hours`` is a publication-time window ending at ``generated_at``, both ends inclusive. This is a ranked
        snapshot, not a delta since the last call. Bulk backfills are excluded. Within each section, the newest 500
        matching articles at the configured relevance floor (default 4) are grouped, then ranked by each group's highest
        relevance and novelty, then its newest publication time. Fields on a returned event describe the representative
        article. ``limit`` applies independently to news and filings. Either a candidate overflow or additional grouped
        stories sets that section's ``*_truncated`` flag. A truncated response is a selection, not a complete event
        inventory; narrow ``hours`` or use the paginated ticker feed for further coverage.

        An event shared by several requested tickers appears once, with ``matched_tickers`` naming all matches. If press
        coverage and a filing share a story, the filing represents it once in the filings section. Distinct Form 4
        transaction legs remain separate even when they share a filing URL. Share classes and former ticker names are
        included. Unrecognized symbols are returned in ``unknown_tickers``; bare crypto names are not guessed (use
        BTC-USD). Dates are confirmed only, on or after today's America/New_York date, excluding reports already matched
        to a published filing; absence means no confirmed date on file, not that no report is due. Available on every
        tier. Responses use ``Cache-Control: private, no-store``.

        Args:
            tickers: 1–100 distinct symbols, comma-separated or repeated; case-insensitive.
            hours: Value sent with the request.
            limit: Maximum grouped stories in each section; this brief has no cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/brief/"),
            query_params=[
                param[list[str]]("tickers", tickers),
                param[int | None]("hours", hours),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[WatchlistBriefDto],
            error_mapper=get_api_news_brief_error_mapper,
            request_options=request_options,
        )

    def get_api_news_by_uid(
        self, uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RichNewsArticle, GetApiNewsByUidErrorBody]:
        """One enriched article. SEC rows carry the same structured block the feeds serve: ``insider`` on a Form 4 row
        (as on ``/api/news/insider/``), ``filing`` on an 8-K row (as on ``/api/news/``), so a uid taken from
        ``/api/news/insider/clusters/`` opens with its trade data. An 8-K or 6-K earnings filing can also carry
        ``earnings`` (see that field), which no feed populates.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/{uid}/"),
            path_params=[param[str]("uid", uid)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[RichNewsArticle],
            error_mapper=get_api_news_by_uid_error_mapper,
            request_options=request_options,
        )

    def get_api_news_by_uid_related(
        self, uid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiNewsRelatedResponse, GetApiNewsByUidRelatedErrorBody]:
        """Up to 6 articles related to the given article: fresh articles sharing a ticker first, then same-category
        recents as backfill. Same enriched shape and ``relevance_score >= 4`` filtering as ``/api/news/``; insider (SEC
        Form 4) rows are excluded unless the base article is itself insider. No pagination — the list is a fixed-size
        block.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/{uid}/related/"),
            path_params=[param[str]("uid", uid)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[ApiNewsRelatedResponse],
            error_mapper=get_api_news_by_uid_related_error_mapper,
            request_options=request_options,
        )

    def get_api_news_insider(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        min_relevance: int | None = 4,
        is_10b5_1: bool | None = None,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsPagination, GetApiNewsInsiderErrorBody]:
        """Dedicated insider feed (``category=insider``): SEC EDGAR Form 4 insider activity ONLY — one
        deterministic-templated row per filing event (a filing's non-derivative trades of one type and holding form,
        aggregated: total shares, volume-weighted average price and executed range, total value), surfaced shortly after
        filing, with the relevance score computed from the event's total (size, buy vs. sell, 10b5-1 plan or not). A
        sale (``transaction_code`` ``S``) tops out at 6 whatever its size, and so does a sale back to the issuer (``D``)
        that leaves the insider with no shares, which is how holdings are cashed out when an acquisition closes.
        Purchases, and a ``D`` that leaves a holding (the company buying back a holder's block), use the full scale. A
        sale filed without a price stays at 6 too. Same enriched shape, ticker and ``relevance_score >= 4`` filtering,
        and cursor-based pagination as ``/api/news/``. Equivalent to ``/api/news/?category=insider``, surfaced as a
        first-class route. For aggregate stats instead of the stream, see ``/api/symbols/{ticker}/insider-summary/``.

        The category is fixed to ``insider``. This endpoint does not accept ``category``, ``exclude_categories`` or
        story-grouping parameters; use ``/api/news/`` for those filters.

        To watch for new filings, poll with ``sort=ingested`` rather than re-reading the newest page: a Form 4 is filed
        up to several days after the trade it reports, so a new event often enters the feed already below the head of
        the publish-ordered page. Delta mode orders by the moment the row became available, so it never misses one. The
        contract is identical to ``/api/news/?sort=ingested`` — see that endpoint for the full description.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to insider news that mentions this ticker. Delisted symbols return their history; a renamed
                company's current ticker also matches rows tagged with its former ticker. ``ticker`` is accepted as an
                alias.
            min_relevance: Override the default ≥4 threshold. Insider rows score deterministically from the event's
                summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an "only
                large trades" dial: ``min_relevance=6`` keeps purchases from roughly $500k and sales from roughly $1M,
                ``min_relevance=7`` keeps purchases from roughly $1M and no sales, except a large buyback by the company
                from a holder who keeps a stake (``transaction_code`` ``D``). A 10b5-1 plan trade sits one step lower.
            is_10b5_1: Filter on the same field each item's ``insider`` block reports: the event's Rule 10b5-1 status.
                Omit for every event; ``false`` returns discretionary trades only — the "hide pre-scheduled sales" dial,
                since a 10b5-1 ladder was set up months earlier and carries no timing decision; ``true`` returns plan
                events only. Event-level, like the field itself: a filing whose group mixes plan and discretionary
                tranches counts as a plan event on both. The two values partition the feed, so ``true`` and ``false``
                pages always add up to the unfiltered one.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``: rows in the order they became available, ascending,
                ``next_cursor`` always returned (empty ``results`` = caught up), and all other filters applied
                unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the trade it reports,
                so a new event routinely lands below the newest page of the publish-ordered feed and a poller reading
                only the head misses it. Cursors are mode-specific: a cursor is only valid with the sort mode that
                issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, identical in format and behaviour to the parameter
                on ``/api/news/`` (ISO-8601, naive read as UTC, tier-gated with 403, refused with ``sort=ingested``).
                Note which clock it is: ``time_published`` is when the filing reached the feed, NOT the insider's
                ``transaction_date`` reported in the ``insider`` block. A Form 4 is filed days after the trade, so a
                window over trade dates is a different question and this parameter does not answer it.
            to_date: Inclusive upper bound on ``time_published``. A bare date covers the whole day; same clock caveat as
                ``from_date``.
            format_: Response format. ``json`` (default) is the page described below. ``csv`` streams the same feed as a
                file: one row per insider event, the same filters (``symbol``, ``min_relevance``, ``is_10b5_1``,
                ``from_date``/``to_date``, ``sort``, ``cursor``), walked page by page on the server up to your plan's
                **row cap** — Free 500, Basic 2 000, Pro 10 000 rows per file — inside your plan's archive horizon (30 /
                90 / 180 days). ``page_size`` has no effect on CSV. One request counts once against your rate limit,
                whatever the file's length. Where a JSON page past the horizon returns 403, the file stops at the
                horizon and the response headers say so (``X-Alphai-Truncated: archive_horizon``). Validation errors (a
                bad cursor, an inverted window, a window with ``sort=ingested``) are the same 400 JSON bodies as for
                ``format=json``, sent before any row. Concurrent feed changes or a connection error can interrupt the
                stream after headers are sent. Accept a file only after the stream completes and the number of parsed
                CSV data rows matches ``X-Alphai-Rows``. Otherwise discard the partial file and retry the original
                request; do not advance to ``X-Alphai-Next-Cursor``. Response: ``Content-Type: text/csv;
                charset=utf-8``, ``Content-Disposition: attachment; filename="alphai-insider-<date>.csv"``,
                ``Cache-Control: private, no-store``, plus the ``X-Alphai-*`` headers listed under the 200 response:
                ``X-Alphai-Rows`` (data rows in the file), ``X-Alphai-Row-Cap`` (your plan's cap),
                ``X-Alphai-Truncated`` (``row_cap`` — more rows exist, continue with the cursor; ``archive_horizon`` —
                the walk reached your plan's archive depth; ``false`` — the file holds everything the filters select)
                and ``X-Alphai-Next-Cursor`` (present when there is more: the same token a JSON page would have returned
                at that position, so you can continue in either format). Columns, in order: ``uid``, ``time_published``,
                ``tickers`` (``|``-joined), ``title``, ``url``, ``category``, ``relevance_score``, ``side``,
                ``transaction_code``, ``shares``, ``avg_price_usd``, ``total_value_usd``, ``is_10b5_1``,
                ``insider_name``, ``insider_title``, ``is_officer``, ``is_director``, ``is_ten_percent_owner``,
                ``transaction_date``, ``filed_at``, ``late_filing``, ``summary`` — the JSON item's fields and its
                ``insider`` block flattened (event columns are empty for a row without a block). RFC 4180 quoting, LF
                line endings, UTF-8, timestamps in ISO 8601 UTC (``Z``), booleans ``true``/``false``, an empty cell for
                null, never the article body. A free-text cell that begins with ``=``, ``+``, ``-``, ``@`` or a tab is
                prefixed with an apostrophe so it cannot run as a formula when the file is opened in a spreadsheet.
                Select the format with this parameter only: an ``Accept: text/csv`` header on its own still returns
                JSON, and a client that sends ``Accept: application/json`` together with ``format=csv`` gets 406. With
                ``sort=ingested`` and no cursor the file holds the newest rows (up to the cap) in ingest order and the
                cursor parks at the head, like the JSON prime page; with a cursor it holds everything since that
                position, with rows older than your archive horizon skipped and reported as ``archive_horizon``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/insider/"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[str | None]("symbol", symbol),
                param[int | None]("min_relevance", min_relevance),
                param[bool | None]("is_10b5_1", is_10b5_1),
                param[int | None]("page_size", page_size),
                param[Sort1OrStr | None]("sort", sort),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[NewsPagination],
            error_mapper=get_api_news_insider_error_mapper,
            request_options=request_options,
        )

    def get_api_news_insider_clusters(
        self,
        *,
        days: int | None = 30,
        min_buyers: int | None = 2,
        min_usd: int | None = None,
        pattern: Pattern1OrStr | None = Pattern1.OPEN_MARKET,
        symbol: str | None = None,
        sort: Sort3OrStr | None = Sort3.RECENT,
        cursor: str | None = None,
        page_size: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InsiderClustersPage, GetApiNewsInsiderClustersErrorBody]:
        """Episodes in which **several different insiders of one issuer bought on the open market together**: an
        issuer's Form 4 purchase dates are chained into one episode while consecutive purchases are at most 10 days
        apart (an episode is cut at 30 days), and every purchase inside it is examined before a buyer counts.

        Counting names is not enough — the loudest look-alikes are an IPO or PIPE allocation (caught by its price shape,
        or by the filing's own footnote saying the shares came from the issuer, an offering or a negotiated block), a
        mutual-bank conversion, ESPP / DRIP / director-plan lots, the same transaction reported through two owners (a
        director via the fund and the fund itself), and plan lots sitting next to one real purchase. Each buyer
        therefore carries a ``role``: ``independent`` buyers are the cluster; ``plan_like`` (with ``reason`` when the
        filing's words decided it), ``unpriced`` and ``duplicate_of`` buyers are listed so you can see why a 30-name
        filing burst is not one. The episode's ``pattern`` is ``open_market`` when at least two independent buyers
        remain and one of them is an officer or director, ``holders_only`` when only 10% holders without a role remain,
        and ``plan_or_offering`` otherwise. The default hides everything but ``open_market``; ask for the rest
        explicitly. The rule was fixed against 90 episodes checked by hand against the filings (2026-09-22): it shows 58
        of 58 real clusters and hides 29 of 30 look-alikes; a 401(k) plan purchase can still pass, since the filing says
        so only in a footnote.

        ``days`` is measured on ``known_at`` — the moment the episode's latest filing reached EDGAR — so "what became
        known this month" is one call. A purchase filed more than ~40 days after the trade is not chained (2.3% of Form
        4 purchases). Coverage starts at ``meta.coverage_since`` (the tranche table begins in August 2025); this is a
        descriptive screen (``research_only``, not point-in-time), with no returns attached. Only common-stock purchases
        outside Rule 10b5-1 plans are considered; units, preferred and warrants are ignored.

        Args:
            days: Lookback in days over ``known_at``, ``1``-``90``, default ``30``. Deeper than your plan's archive
                horizon (Free 30, Basic 90) returns 403.
            min_buyers: Minimum headcount, ``2``-``10``, default ``2``: independent buyers for ``open_market`` /
                ``holders_only`` episodes, everyone who bought (``buyers_total``) for ``plan_or_offering`` ones, where
                by construction fewer than two buyers are independent.
            min_usd: Drop episodes whose ``total_usd`` is below this. An episode with an unknown total
                (``value_partial`` with no priced fill) is kept, not dropped — a missing number is not a small one.
            pattern: ``open_market`` (default), ``plan_or_offering``, ``holders_only``, or ``all``. Insiders taking a
                $70M IPO allocation is an event too; it is labeled, not hidden, when you ask for it.
            symbol: One ticker. A renamed company's current ticker also matches episodes tagged with its former ticker,
                and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still returns its episodes
                when named explicitly; the unfiltered list shows active listings only. ``ticker`` is accepted as an
                alias.
            sort: ``recent`` (default) — newest ``known_at`` first; ``buyers`` — most independent buyers first, ties by
                value; ``value`` — largest ``total_usd`` first, unknown totals last. Cursors are sort-specific.
            cursor: Opaque cursor from a prior response's ``next_cursor``, with the same ``sort``. Omit for the first
                page.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, ``21``-``50`` with a Pro key.
                ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/insider/clusters/"),
            query_params=[
                param[int | None]("days", days),
                param[int | None]("min_buyers", min_buyers),
                param[int | None]("min_usd", min_usd),
                param[Pattern1OrStr | None]("pattern", pattern),
                param[str | None]("symbol", symbol),
                param[Sort3OrStr | None]("sort", sort),
                param[str | None]("cursor", cursor),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[InsiderClustersPage],
            error_mapper=get_api_news_insider_clusters_error_mapper,
            request_options=request_options,
        )

    def get_api_news_macro(
        self,
        *,
        cursor: str | None = None,
        category: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsPagination, GetApiNewsMacroErrorBody]:
        """Dedicated macro feed: the ``macro_economy``, ``commodities`` and ``geopolitics`` categories in one stream —
        central-bank decisions and statements (FOMC), inflation/jobs prints, oil and gold, geopolitical risk. Same
        enriched shape, ``relevance_score >= 4`` floor and cursor-based pagination as ``/api/news/``; equivalent to
        ``/api/news/?category=macro_economy,commodities,geopolitics``, surfaced as a first-class route.

        Macro rows are market-wide, so most carry an empty ``tickers`` list — that is by design (an FOMC statement is
        not news about one company), and the per-article analysis block is still populated. A macro row that IS about
        listed companies (an oil-price story tagged to majors) keeps its tickers.

        To watch for new releases, poll with ``sort=ingested`` — same delta contract as ``/api/news/?sort=ingested``.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            category: Narrow to a subset of the macro categories, comma-separated. Values outside
                ``macro_economy``/``commodities``/``geopolitics`` return 400 (the full category filter lives on
                ``/api/news/``).
            min_relevance: Override the default ≥4 threshold. On release days the release itself scores 7-9, so
                ``min_relevance=7`` keeps roughly "the events" and drops the commentary.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``. Cursors are mode-specific: a cursor is only valid with the sort
                mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, exactly as on ``/api/news/``: ISO-8601, a value
                without a timezone is read as UTC, a bare date (``2026-09-16``) means that day's midnight. "What did the
                tape say after the decision" is ``from_date=<decision day>`` plus ``min_relevance=7``. Subject to your
                plan's archive horizon (403 on the first page, see the ``403`` response) and refused with
                ``sort=ingested`` (400).
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date covers the
                WHOLE day, so ``from_date=2026-09-16&to_date=2026-09-16`` returns that day. ``from_date`` later than
                ``to_date`` returns 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/macro/"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[str | None]("category", category),
                param[int | None]("min_relevance", min_relevance),
                param[int | None]("page_size", page_size),
                param[Sort1OrStr | None]("sort", sort),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[NewsPagination],
            error_mapper=get_api_news_macro_error_mapper,
            request_options=request_options,
        )

    def get_api_news_search(
        self,
        q: str,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        source_type: list[SourceTypeOrStr] | None = None,
        item: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsSearchPage, GetApiNewsSearchErrorBody]:
        """Search the enriched feed by words. ``q`` is matched against each article's title, its summary and the entity
        names the enrichment extracted; the page comes back ranked (best match first, newest first among equal matches),
        with a per-item ``search_match`` and a ``query`` block that says how the words were read. ``symbol``,
        ``category``, ``source_type``, ``item``, ``min_relevance``, ``from_date``, ``to_date`` and ``collapse`` apply as
        hard filters on top, exactly as on ``/api/news/``: ``q=director&item=5.02`` searches 8-K filings that carry item
        5.02, ``q="going concern"&source_type=gdelt`` searches press coverage only.

        **Query syntax.** Bare words are all required (``chip tariffs``); a quoted phrase must appear in order (``"going
        concern"``); ``-word`` excludes (``apple -iphone``); ``OR`` separates alternatives (``nvidia OR amd``). Words in
        a non-Latin script are ignored. Matching tolerates one typo from five letters (``prices`` reaches ``price``) and
        a prefix on the last word; there is no stemming.

        **Modes** (``query.mode``). ``strict``: every word matched. ``broadened``: the strict pass found fewer than 5
        rows and the query has three or more words, so the most frequent words were dropped and the page carries rows
        with at least two of the query's words — ``search_match.terms_matched`` says how many on each; read these as
        leads, not matches. ``no_match``: nothing in the searched window. ``no_terms``: the query held no searchable
        words. Absence is not proof the event did not happen: the searched window starts at ``query.window_from``.

        **Window and paging.** The searched window is your plan's archive horizon (Free 30 days, Basic 90, Pro 180)
        unless ``from_date`` / ``to_date`` narrow it; a window reaching past the horizon returns 403 like the feed.
        Results are bounded to the best 200 matches (``matched`` counts them, capped at 200) and paged with an opaque
        ``cursor`` that is bound to the query that issued it. Responses are private and never shared-cached.

        **Failure.** When the search service does not answer in time the endpoint returns 503 with ``extra.reason =
        "search_unavailable"``. The structured feed and every other endpoint are unaffected: retry the search later
        rather than the whole chain.

        Args:
            q: The words to search for, 2 to 200 characters (syntax above). ``query`` is accepted as an alias.
            cursor: Opaque cursor from a prior response's ``next_cursor``; only valid with the ``q`` that issued it.
            symbol: Hard ticker filter, same forms and expansions as on ``/api/news/`` (``ticker`` is an alias).
            category: Hard category filter — single value, CSV or repeated, OR-matched.
            source_type: Keep only rows ingested from these sources, same values and forms as on ``/api/news/``:
                ``gdelt`` (press coverage), ``sec_form4``, ``sec_form8k``, ``sec_form6k``. Single, CSV or repeated,
                OR-matched. Unknown values return 400.
            item: 8-K item code, e.g. ``5.02``: only 8-K filings carrying that item (any item of the filing). Implies
                ``source_type=sec_form8k``; next to any other ``source_type`` it returns 400.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, up to ``50`` on a Pro key (``limit``
                is an alias).
            collapse: ``story`` collapses coverage of one event to its best-ranked article, with ``story_id``,
                ``sources_count`` and ``sources`` on each item.
            collapse_stories: Boolean alias: ``true`` is equivalent to ``collapse=story``; ``false`` leaves articles
                ungrouped. Send either spelling, not both (400).
            from_date: Inclusive lower bound on ``time_published`` (ISO-8601, UTC when naive; a bare date is that day's
                midnight). Past your archive horizon → 403.
            to_date: Inclusive upper bound on ``time_published``; a bare date covers its whole day.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/search/"),
            query_params=[
                param[str]("q", q),
                param[str | None]("cursor", cursor),
                param[str | None]("symbol", symbol),
                param[list[NewsCategoryOrStr] | None]("category", category),
                param[list[SourceTypeOrStr] | None]("source_type", source_type),
                param[str | None]("item", item),
                param[int | None]("min_relevance", min_relevance),
                param[int | None]("page_size", page_size),
                param[CollapseOrStr | None]("collapse", collapse),
                param[bool | None]("collapse_stories", collapse_stories),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[NewsSearchPage],
            error_mapper=get_api_news_search_error_mapper,
            request_options=request_options,
        )

    def get_api_news_trending(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[RichNewsArticle], GetApiNewsTrendingErrorBody]:
        """Top stories from the trailing 48h: ``relevance_score >= 8``, ranked by relevance score decayed by article
        age, so a fresh story outranks an equally-scored stale one. At most two stories per ticker. Fixed size of 10, no
        pagination. Coverage of one story, syndicated reprints and independent write-ups of the same event alike, is
        collapsed to a single representative, and each item carries the ``story_id``, ``sources_count`` and ``sources``
        fields for the story it represents. ``story_id`` is the story ROOT's uid — the stable story key shared with
        ``?collapse=story`` and the MCP tools — while the item itself is the story's strongest-ranked member, so
        ``story_id`` may differ from the item's own ``original.uid``. Most stories are carried by a single outlet, so
        ``sources_count`` is usually 1; see its field description.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/trending/"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[list[RichNewsArticle]],
            error_mapper=get_api_news_trending_error_mapper,
            request_options=request_options,
        )


class AsyncNewsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_news(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        exclude_categories: list[NewsCategoryOrStr] | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        source_type: list[NewsSourceTypeOrStr] | None = None,
        item: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsPagination, GetApiNewsErrorBody]:
        """Feed of enriched articles, newest first. Default filter: ``relevance_score >= 4`` AND at least one active
        ticker. Pagination is cursor-based with a default page size of 10 (any size from 1 to 20 via ``page_size=``; Pro
        keys go up to 50): omit ``cursor`` for the newest page, then pass the ``next_cursor`` from each response to
        fetch the next (older) page. ``next_cursor: null`` means the end of the feed. Cursors are opaque — do not
        construct or parse them; an invalid cursor returns 400. Archive depth is tiered: paging back past your plan's
        horizon (Free 30 days, Basic 90, Pro 180) returns 403 with an upgrade hint. **Delta polling**
        (``sort=ingested``): the same feed ordered by the moment rows became available, for "what is new since my last
        poll". Articles reach the feed later than their publish time (collection median ~30 min for general news, with a
        long tail), so a poller that filters by ``time_published`` misses most late arrivals; ``sort=ingested`` follows
        ingest order. First call without ``cursor`` returns a bounded sample of up to ``page_size`` recent visible rows
        and a cursor at the feed head. This initial sample may be partial or empty when the scan reaches its work limit;
        it still starts the live stream. Each later call with the previous ``next_cursor`` returns only rows added
        since. In this mode ``next_cursor`` is always non-null — empty ``results`` means you are caught up, keep the
        cursor and poll again later (responses are cached for 60 s, so polling more often than once a minute buys
        nothing). New rows only: an update to an already-delivered article is not re-sent. ``time_published`` is not
        monotonic within a delta page; sort client-side if you need chronological order. A cursor is only valid with the
        sort mode that issued it. On resumed requests, empty **successful** pages mean the current scan is caught up. A
        nonempty page shorter than ``page_size`` may still have a continuation; keep following its cursor. If a bounded
        scan cannot produce a page, HTTP 409 reports ``extra.reason="delta_scan_incomplete"`` and ``extra.next_cursor``.
        Continue from that cursor with identical filters and sort; repeating the original request cannot resolve this
        work limit. A concurrent change during reading instead returns HTTP 503 with
        ``extra.reason="delta_candidates_changed"``: retry the original request, without advancing its cursor. Neither
        error is cached. MCP delta tools report the same JSON envelopes as tool errors. The cursor family, archive gates
        and story-collapse behavior remain unchanged. Delta mode carries live coverage only: when we add history in bulk
        (backfilling an earlier period), those rows do NOT enter this stream — they would arrive as thousands of "new"
        items that are months old and push your cursor far behind the live feed. They are served normally in
        ``sort=published``, by date filters and by ``/api/news/{uid}/``, so a one-off catch-up over the archive is a
        published-mode query. **Keeping up.** One call returns at most ``page_size`` rows, so a poller holds its
        position at the head only while ``calls per day × page_size`` stays above the daily volume of the stream it
        asked for. Below that it falls a little further behind every day, and the symptom misleads: ``time_published``
        reads hours or days old while the data is current. What went stale is the cursor, not the feed. So drain instead
        of polling once per tick: when a page comes back with ``results`` filled, call again immediately, and sleep only
        once ``results`` is empty. That clears a burst within the same cycle and lets a poller catch up by itself after
        downtime. Two levers if the call budget is still short, and they multiply: ``page_size`` (up to 20, or 50 on a
        Pro key) and a narrower stream (``min_relevance``, ``symbol``, ``category``). For scale, at the default ``>= 4``
        floor the feed carries roughly 2,700 rows a day, while ``min_relevance=7`` carries roughly 1,000.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to articles that mention this ticker. US equities use the bare symbol (``NVDA``);
                cryptocurrencies use the ``<SYM>-USD`` form (``BTC-USD``), and a bare crypto name resolves to it
                (``DOGE`` matches ``DOGE-USD``); foreign listings use the Yahoo suffix (``VOD.L``). A delisted symbol
                returns its news history. A renamed company's current ticker also matches articles tagged with its
                former ticker, and any share class of an issuer matches articles tagged with its other listed classes
                (``GOOGL`` includes rows tagged ``GOOG``); article tags stay as published. ``ticker`` is accepted as an
                alias.
            category: Keep only these categories. Accepts a single value, a CSV list (``category=earnings,insider``), or
                a repeated parameter — matches any of them (OR).
            exclude_categories: Drop these categories from the feed. Same single / CSV / repeated forms as ``category``.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400 — the page is never silently clamped. Pagination is otherwise unchanged: pass each
                response's ``next_cursor`` back as ``cursor`` regardless of page size. ``limit`` is accepted as an
                alias.
            collapse: ``story`` collapses coverage of one event to a single representative row (the story root):
                syndicated reprints and independently written articles about the same event, matched on headline and
                lead similarity. Populates the ``story_id``, ``sources_count`` and ``sources`` fields on each item. Omit
                for the full feed (every article, story fields ``null``). Only ``story`` is accepted; any other value
                returns 400. Note: row-level filters (``symbol``, ``category``, ``min_relevance``) apply to the story's
                representative root, so a story whose root does not match the filter is omitted entirely. The root is
                the best copy the enricher has seen: a later copy that outscores a weak root (one below 7) takes the
                root over, so a story's ``story_id`` and its place in the feed can move once to that copy; a root at 7
                or above is never replaced. An 8-K that carries a press release as its exhibit is a member of that
                release's story (same issuer, the release's headline inside the filing, within 3 hours) when the release
                itself scores at or above the feed floor, so with ``source_type=sec_form8k`` a collapsed feed omits such
                filings — read them uncollapsed. A filing whose release scored below the floor stays its own story.
            collapse_stories: Boolean alias matching the MCP and Python SDK option. ``true`` is equivalent to
                ``collapse=story``; ``false`` leaves articles ungrouped. Send either ``collapse`` or
                ``collapse_stories``, not both (400).
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode: rows in
                the order they became available, ascending, with ``next_cursor`` always returned (empty ``results`` =
                caught up) — see the endpoint description. All other filters apply unchanged in both modes. Cursors are
                mode-specific: a cursor is only valid with the sort mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published`` — when the article was published, not when it entered
                the feed. ISO-8601; a value without a timezone is read as UTC. A bare date (``2026-06-01``) means that
                day's midnight. Reaching further back than your plan's archive horizon returns 403 (see the ``403``
                response) — the window is subject to the same tiered depth as a deep ``cursor``, and on the first page
                just the same. Cannot be combined with ``sort=ingested`` (400): delta mode returns rows in ingest order
                from your cursor and never walks back into history.
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date
                (``2026-06-01``) covers the WHOLE day (through ``23:59:59.999999Z``), so
                ``from_date=2026-06-01&to_date=2026-06-01`` returns that day rather than an empty page. ``from_date``
                later than ``to_date`` returns 400.
            source_type: Keep only rows ingested from these sources: ``gdelt`` (press coverage), ``sec_form4`` (insider
                transactions), ``sec_form8k`` (8-K current reports), ``sec_form6k`` (a foreign private issuer's 6-K
                earnings release). Same single / CSV / repeated forms as ``category``, OR-matched. Unknown values return
                400. Composes with every other filter: ``source_type=sec_form8k&symbol=NVDA`` is one company's 8-Ks,
                ``source_type=gdelt&min_relevance=8`` is the press without any filing.
            item: 8-K item code, e.g. ``5.02`` (officer departures/appointments), ``8.01`` (other events), ``1.01``
                (material agreements). Keeps only 8-K filings that carry the item — ANY item of the filing, not just the
                one that drove its category — and implies ``source_type=sec_form8k``; ``item`` next to any other
                ``source_type`` returns 400 (only 8-Ks have item codes). The category filter already covers the two
                headline items (``2.02`` → ``earnings``, ``2.01`` → ``mergers_acquisitions``); ``item`` is for
                everything else. A filing SEC served no document for has an empty item list and never matches. Every
                matched row carries the ``filing`` block.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[str | None]("symbol", symbol),
                param[list[NewsCategoryOrStr] | None]("category", category),
                param[list[NewsCategoryOrStr] | None]("exclude_categories", exclude_categories),
                param[int | None]("min_relevance", min_relevance),
                param[int | None]("page_size", page_size),
                param[CollapseOrStr | None]("collapse", collapse),
                param[bool | None]("collapse_stories", collapse_stories),
                param[Sort1OrStr | None]("sort", sort),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
                param[list[NewsSourceTypeOrStr] | None]("source_type", source_type),
                param[str | None]("item", item),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[NewsPagination],
            error_mapper=get_api_news_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_brief(
        self,
        tickers: list[str],
        *,
        hours: int | None = 24,
        limit: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WatchlistBriefDto, GetApiNewsBriefErrorBody]:
        """One response with recent news grouped by story, a separate SEC Form 4/8-K/6-K filings section, and the next
        confirmed earnings date per ticker. Supply your symbols explicitly; this endpoint does not read an account's
        saved watchlist. The website and MCP tool ``alphai_watchlist_brief`` use the caller's saved list instead.

        ``hours`` is a publication-time window ending at ``generated_at``, both ends inclusive. This is a ranked
        snapshot, not a delta since the last call. Bulk backfills are excluded. Within each section, the newest 500
        matching articles at the configured relevance floor (default 4) are grouped, then ranked by each group's highest
        relevance and novelty, then its newest publication time. Fields on a returned event describe the representative
        article. ``limit`` applies independently to news and filings. Either a candidate overflow or additional grouped
        stories sets that section's ``*_truncated`` flag. A truncated response is a selection, not a complete event
        inventory; narrow ``hours`` or use the paginated ticker feed for further coverage.

        An event shared by several requested tickers appears once, with ``matched_tickers`` naming all matches. If press
        coverage and a filing share a story, the filing represents it once in the filings section. Distinct Form 4
        transaction legs remain separate even when they share a filing URL. Share classes and former ticker names are
        included. Unrecognized symbols are returned in ``unknown_tickers``; bare crypto names are not guessed (use
        BTC-USD). Dates are confirmed only, on or after today's America/New_York date, excluding reports already matched
        to a published filing; absence means no confirmed date on file, not that no report is due. Available on every
        tier. Responses use ``Cache-Control: private, no-store``.

        Args:
            tickers: 1–100 distinct symbols, comma-separated or repeated; case-insensitive.
            hours: Value sent with the request.
            limit: Maximum grouped stories in each section; this brief has no cursor.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/brief/"),
            query_params=[
                param[list[str]]("tickers", tickers),
                param[int | None]("hours", hours),
                param[int | None]("limit", limit),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[WatchlistBriefDto],
            error_mapper=get_api_news_brief_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_by_uid(
        self, uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RichNewsArticle, GetApiNewsByUidErrorBody]:
        """One enriched article. SEC rows carry the same structured block the feeds serve: ``insider`` on a Form 4 row
        (as on ``/api/news/insider/``), ``filing`` on an 8-K row (as on ``/api/news/``), so a uid taken from
        ``/api/news/insider/clusters/`` opens with its trade data. An 8-K or 6-K earnings filing can also carry
        ``earnings`` (see that field), which no feed populates.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/{uid}/"),
            path_params=[param[str]("uid", uid)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[RichNewsArticle],
            error_mapper=get_api_news_by_uid_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_by_uid_related(
        self, uid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiNewsRelatedResponse, GetApiNewsByUidRelatedErrorBody]:
        """Up to 6 articles related to the given article: fresh articles sharing a ticker first, then same-category
        recents as backfill. Same enriched shape and ``relevance_score >= 4`` filtering as ``/api/news/``; insider (SEC
        Form 4) rows are excluded unless the base article is itself insider. No pagination — the list is a fixed-size
        block.

        Args:
            uid: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/{uid}/related/"),
            path_params=[param[str]("uid", uid)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[ApiNewsRelatedResponse],
            error_mapper=get_api_news_by_uid_related_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_insider(
        self,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        min_relevance: int | None = 4,
        is_10b5_1: bool | None = None,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        format_: FormatOrStr | None = Format.JSON,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsPagination, GetApiNewsInsiderErrorBody]:
        """Dedicated insider feed (``category=insider``): SEC EDGAR Form 4 insider activity ONLY — one
        deterministic-templated row per filing event (a filing's non-derivative trades of one type and holding form,
        aggregated: total shares, volume-weighted average price and executed range, total value), surfaced shortly after
        filing, with the relevance score computed from the event's total (size, buy vs. sell, 10b5-1 plan or not). A
        sale (``transaction_code`` ``S``) tops out at 6 whatever its size, and so does a sale back to the issuer (``D``)
        that leaves the insider with no shares, which is how holdings are cashed out when an acquisition closes.
        Purchases, and a ``D`` that leaves a holding (the company buying back a holder's block), use the full scale. A
        sale filed without a price stays at 6 too. Same enriched shape, ticker and ``relevance_score >= 4`` filtering,
        and cursor-based pagination as ``/api/news/``. Equivalent to ``/api/news/?category=insider``, surfaced as a
        first-class route. For aggregate stats instead of the stream, see ``/api/symbols/{ticker}/insider-summary/``.

        The category is fixed to ``insider``. This endpoint does not accept ``category``, ``exclude_categories`` or
        story-grouping parameters; use ``/api/news/`` for those filters.

        To watch for new filings, poll with ``sort=ingested`` rather than re-reading the newest page: a Form 4 is filed
        up to several days after the trade it reports, so a new event often enters the feed already below the head of
        the publish-ordered page. Delta mode orders by the moment the row became available, so it never misses one. The
        contract is identical to ``/api/news/?sort=ingested`` — see that endpoint for the full description.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            symbol: Filter to insider news that mentions this ticker. Delisted symbols return their history; a renamed
                company's current ticker also matches rows tagged with its former ticker. ``ticker`` is accepted as an
                alias.
            min_relevance: Override the default ≥4 threshold. Insider rows score deterministically from the event's
                summed dollar value (plus buy/10b5-1 modifiers), and a sale tops out at 6, so this acts as an "only
                large trades" dial: ``min_relevance=6`` keeps purchases from roughly $500k and sales from roughly $1M,
                ``min_relevance=7`` keeps purchases from roughly $1M and no sales, except a large buyback by the company
                from a holder who keeps a stake (``transaction_code`` ``D``). A 10b5-1 plan trade sits one step lower.
            is_10b5_1: Filter on the same field each item's ``insider`` block reports: the event's Rule 10b5-1 status.
                Omit for every event; ``false`` returns discretionary trades only — the "hide pre-scheduled sales" dial,
                since a 10b5-1 ladder was set up months earlier and carries no timing decision; ``true`` returns plan
                events only. Event-level, like the field itself: a filing whose group mixes plan and discretionary
                tranches counts as a plan event on both. The two values partition the feed, so ``true`` and ``false``
                pages always add up to the unfiltered one.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``: rows in the order they became available, ascending,
                ``next_cursor`` always returned (empty ``results`` = caught up), and all other filters applied
                unchanged. Prefer it for watching insider activity — a Form 4 is filed days after the trade it reports,
                so a new event routinely lands below the newest page of the publish-ordered feed and a poller reading
                only the head misses it. Cursors are mode-specific: a cursor is only valid with the sort mode that
                issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, identical in format and behaviour to the parameter
                on ``/api/news/`` (ISO-8601, naive read as UTC, tier-gated with 403, refused with ``sort=ingested``).
                Note which clock it is: ``time_published`` is when the filing reached the feed, NOT the insider's
                ``transaction_date`` reported in the ``insider`` block. A Form 4 is filed days after the trade, so a
                window over trade dates is a different question and this parameter does not answer it.
            to_date: Inclusive upper bound on ``time_published``. A bare date covers the whole day; same clock caveat as
                ``from_date``.
            format_: Response format. ``json`` (default) is the page described below. ``csv`` streams the same feed as a
                file: one row per insider event, the same filters (``symbol``, ``min_relevance``, ``is_10b5_1``,
                ``from_date``/``to_date``, ``sort``, ``cursor``), walked page by page on the server up to your plan's
                **row cap** — Free 500, Basic 2 000, Pro 10 000 rows per file — inside your plan's archive horizon (30 /
                90 / 180 days). ``page_size`` has no effect on CSV. One request counts once against your rate limit,
                whatever the file's length. Where a JSON page past the horizon returns 403, the file stops at the
                horizon and the response headers say so (``X-Alphai-Truncated: archive_horizon``). Validation errors (a
                bad cursor, an inverted window, a window with ``sort=ingested``) are the same 400 JSON bodies as for
                ``format=json``, sent before any row. Concurrent feed changes or a connection error can interrupt the
                stream after headers are sent. Accept a file only after the stream completes and the number of parsed
                CSV data rows matches ``X-Alphai-Rows``. Otherwise discard the partial file and retry the original
                request; do not advance to ``X-Alphai-Next-Cursor``. Response: ``Content-Type: text/csv;
                charset=utf-8``, ``Content-Disposition: attachment; filename="alphai-insider-<date>.csv"``,
                ``Cache-Control: private, no-store``, plus the ``X-Alphai-*`` headers listed under the 200 response:
                ``X-Alphai-Rows`` (data rows in the file), ``X-Alphai-Row-Cap`` (your plan's cap),
                ``X-Alphai-Truncated`` (``row_cap`` — more rows exist, continue with the cursor; ``archive_horizon`` —
                the walk reached your plan's archive depth; ``false`` — the file holds everything the filters select)
                and ``X-Alphai-Next-Cursor`` (present when there is more: the same token a JSON page would have returned
                at that position, so you can continue in either format). Columns, in order: ``uid``, ``time_published``,
                ``tickers`` (``|``-joined), ``title``, ``url``, ``category``, ``relevance_score``, ``side``,
                ``transaction_code``, ``shares``, ``avg_price_usd``, ``total_value_usd``, ``is_10b5_1``,
                ``insider_name``, ``insider_title``, ``is_officer``, ``is_director``, ``is_ten_percent_owner``,
                ``transaction_date``, ``filed_at``, ``late_filing``, ``summary`` — the JSON item's fields and its
                ``insider`` block flattened (event columns are empty for a row without a block). RFC 4180 quoting, LF
                line endings, UTF-8, timestamps in ISO 8601 UTC (``Z``), booleans ``true``/``false``, an empty cell for
                null, never the article body. A free-text cell that begins with ``=``, ``+``, ``-``, ``@`` or a tab is
                prefixed with an apostrophe so it cannot run as a formula when the file is opened in a spreadsheet.
                Select the format with this parameter only: an ``Accept: text/csv`` header on its own still returns
                JSON, and a client that sends ``Accept: application/json`` together with ``format=csv`` gets 406. With
                ``sort=ingested`` and no cursor the file holds the newest rows (up to the cap) in ingest order and the
                cursor parks at the head, like the JSON prime page; with a cursor it holds everything since that
                position, with rows older than your archive horizon skipped and reported as ``archive_horizon``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/insider/"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[str | None]("symbol", symbol),
                param[int | None]("min_relevance", min_relevance),
                param[bool | None]("is_10b5_1", is_10b5_1),
                param[int | None]("page_size", page_size),
                param[Sort1OrStr | None]("sort", sort),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
                param[FormatOrStr | None]("format", format_),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[NewsPagination],
            error_mapper=get_api_news_insider_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_insider_clusters(
        self,
        *,
        days: int | None = 30,
        min_buyers: int | None = 2,
        min_usd: int | None = None,
        pattern: Pattern1OrStr | None = Pattern1.OPEN_MARKET,
        symbol: str | None = None,
        sort: Sort3OrStr | None = Sort3.RECENT,
        cursor: str | None = None,
        page_size: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InsiderClustersPage, GetApiNewsInsiderClustersErrorBody]:
        """Episodes in which **several different insiders of one issuer bought on the open market together**: an
        issuer's Form 4 purchase dates are chained into one episode while consecutive purchases are at most 10 days
        apart (an episode is cut at 30 days), and every purchase inside it is examined before a buyer counts.

        Counting names is not enough — the loudest look-alikes are an IPO or PIPE allocation (caught by its price shape,
        or by the filing's own footnote saying the shares came from the issuer, an offering or a negotiated block), a
        mutual-bank conversion, ESPP / DRIP / director-plan lots, the same transaction reported through two owners (a
        director via the fund and the fund itself), and plan lots sitting next to one real purchase. Each buyer
        therefore carries a ``role``: ``independent`` buyers are the cluster; ``plan_like`` (with ``reason`` when the
        filing's words decided it), ``unpriced`` and ``duplicate_of`` buyers are listed so you can see why a 30-name
        filing burst is not one. The episode's ``pattern`` is ``open_market`` when at least two independent buyers
        remain and one of them is an officer or director, ``holders_only`` when only 10% holders without a role remain,
        and ``plan_or_offering`` otherwise. The default hides everything but ``open_market``; ask for the rest
        explicitly. The rule was fixed against 90 episodes checked by hand against the filings (2026-09-22): it shows 58
        of 58 real clusters and hides 29 of 30 look-alikes; a 401(k) plan purchase can still pass, since the filing says
        so only in a footnote.

        ``days`` is measured on ``known_at`` — the moment the episode's latest filing reached EDGAR — so "what became
        known this month" is one call. A purchase filed more than ~40 days after the trade is not chained (2.3% of Form
        4 purchases). Coverage starts at ``meta.coverage_since`` (the tranche table begins in August 2025); this is a
        descriptive screen (``research_only``, not point-in-time), with no returns attached. Only common-stock purchases
        outside Rule 10b5-1 plans are considered; units, preferred and warrants are ignored.

        Args:
            days: Lookback in days over ``known_at``, ``1``-``90``, default ``30``. Deeper than your plan's archive
                horizon (Free 30, Basic 90) returns 403.
            min_buyers: Minimum headcount, ``2``-``10``, default ``2``: independent buyers for ``open_market`` /
                ``holders_only`` episodes, everyone who bought (``buyers_total``) for ``plan_or_offering`` ones, where
                by construction fewer than two buyers are independent.
            min_usd: Drop episodes whose ``total_usd`` is below this. An episode with an unknown total
                (``value_partial`` with no priced fill) is kept, not dropped — a missing number is not a small one.
            pattern: ``open_market`` (default), ``plan_or_offering``, ``holders_only``, or ``all``. Insiders taking a
                $70M IPO allocation is an event too; it is labeled, not hidden, when you ask for it.
            symbol: One ticker. A renamed company's current ticker also matches episodes tagged with its former ticker,
                and share-class siblings (GOOGL / GOOG) match each other. A delisted ticker still returns its episodes
                when named explicitly; the unfiltered list shows active listings only. ``ticker`` is accepted as an
                alias.
            sort: ``recent`` (default) — newest ``known_at`` first; ``buyers`` — most independent buyers first, ties by
                value; ``value`` — largest ``total_usd`` first, unknown totals last. Cursors are sort-specific.
            cursor: Opaque cursor from a prior response's ``next_cursor``, with the same ``sort``. Omit for the first
                page.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, ``21``-``50`` with a Pro key.
                ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/insider/clusters/"),
            query_params=[
                param[int | None]("days", days),
                param[int | None]("min_buyers", min_buyers),
                param[int | None]("min_usd", min_usd),
                param[Pattern1OrStr | None]("pattern", pattern),
                param[str | None]("symbol", symbol),
                param[Sort3OrStr | None]("sort", sort),
                param[str | None]("cursor", cursor),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[InsiderClustersPage],
            error_mapper=get_api_news_insider_clusters_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_macro(
        self,
        *,
        cursor: str | None = None,
        category: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        sort: Sort1OrStr | None = Sort1.PUBLISHED,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsPagination, GetApiNewsMacroErrorBody]:
        """Dedicated macro feed: the ``macro_economy``, ``commodities`` and ``geopolitics`` categories in one stream —
        central-bank decisions and statements (FOMC), inflation/jobs prints, oil and gold, geopolitical risk. Same
        enriched shape, ``relevance_score >= 4`` floor and cursor-based pagination as ``/api/news/``; equivalent to
        ``/api/news/?category=macro_economy,commodities,geopolitics``, surfaced as a first-class route.

        Macro rows are market-wide, so most carry an empty ``tickers`` list — that is by design (an FOMC statement is
        not news about one company), and the per-article analysis block is still populated. A macro row that IS about
        listed companies (an oil-price story tagged to majors) keeps its tickers.

        To watch for new releases, poll with ``sort=ingested`` — same delta contract as ``/api/news/?sort=ingested``.

        Args:
            cursor: Opaque cursor from a prior response's ``next_cursor``. Omit for the newest page.
            category: Narrow to a subset of the macro categories, comma-separated. Values outside
                ``macro_economy``/``commodities``/``geopolitics`` return 400 (the full category filter lives on
                ``/api/news/``).
            min_relevance: Override the default ≥4 threshold. On release days the release itself scores 7-9, so
                ``min_relevance=7`` keeps roughly "the events" and drops the commentary.
            page_size: Items per page, default ``10``. Any value from ``1`` to ``20`` is accepted on every tier;
                ``21``-``50`` requires a Pro key. A value outside ``1``-``50``, or an over-``20`` page without a Pro
                key, returns 400. ``limit`` is accepted as an alias.
            sort: ``published`` (default) is the reverse-chronological feed. ``ingested`` is delta-polling mode, with
                the same contract as on ``/api/news/``. Cursors are mode-specific: a cursor is only valid with the sort
                mode that issued it (a mismatch returns 400).
            from_date: Inclusive lower bound on ``time_published``, exactly as on ``/api/news/``: ISO-8601, a value
                without a timezone is read as UTC, a bare date (``2026-09-16``) means that day's midnight. "What did the
                tape say after the decision" is ``from_date=<decision day>`` plus ``min_relevance=7``. Subject to your
                plan's archive horizon (403 on the first page, see the ``403`` response) and refused with
                ``sort=ingested`` (400).
            to_date: Inclusive upper bound on ``time_published``, same format as ``from_date``. A bare date covers the
                WHOLE day, so ``from_date=2026-09-16&to_date=2026-09-16`` returns that day. ``from_date`` later than
                ``to_date`` returns 400.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/macro/"),
            query_params=[
                param[str | None]("cursor", cursor),
                param[str | None]("category", category),
                param[int | None]("min_relevance", min_relevance),
                param[int | None]("page_size", page_size),
                param[Sort1OrStr | None]("sort", sort),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[NewsPagination],
            error_mapper=get_api_news_macro_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_search(
        self,
        q: str,
        *,
        cursor: str | None = None,
        symbol: str | None = None,
        category: list[NewsCategoryOrStr] | None = None,
        source_type: list[SourceTypeOrStr] | None = None,
        item: str | None = None,
        min_relevance: int | None = 4,
        page_size: int | None = 10,
        collapse: CollapseOrStr | None = None,
        collapse_stories: bool | None = False,
        from_date: RFC3339DateTime | None = None,
        to_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NewsSearchPage, GetApiNewsSearchErrorBody]:
        """Search the enriched feed by words. ``q`` is matched against each article's title, its summary and the entity
        names the enrichment extracted; the page comes back ranked (best match first, newest first among equal matches),
        with a per-item ``search_match`` and a ``query`` block that says how the words were read. ``symbol``,
        ``category``, ``source_type``, ``item``, ``min_relevance``, ``from_date``, ``to_date`` and ``collapse`` apply as
        hard filters on top, exactly as on ``/api/news/``: ``q=director&item=5.02`` searches 8-K filings that carry item
        5.02, ``q="going concern"&source_type=gdelt`` searches press coverage only.

        **Query syntax.** Bare words are all required (``chip tariffs``); a quoted phrase must appear in order (``"going
        concern"``); ``-word`` excludes (``apple -iphone``); ``OR`` separates alternatives (``nvidia OR amd``). Words in
        a non-Latin script are ignored. Matching tolerates one typo from five letters (``prices`` reaches ``price``) and
        a prefix on the last word; there is no stemming.

        **Modes** (``query.mode``). ``strict``: every word matched. ``broadened``: the strict pass found fewer than 5
        rows and the query has three or more words, so the most frequent words were dropped and the page carries rows
        with at least two of the query's words — ``search_match.terms_matched`` says how many on each; read these as
        leads, not matches. ``no_match``: nothing in the searched window. ``no_terms``: the query held no searchable
        words. Absence is not proof the event did not happen: the searched window starts at ``query.window_from``.

        **Window and paging.** The searched window is your plan's archive horizon (Free 30 days, Basic 90, Pro 180)
        unless ``from_date`` / ``to_date`` narrow it; a window reaching past the horizon returns 403 like the feed.
        Results are bounded to the best 200 matches (``matched`` counts them, capped at 200) and paged with an opaque
        ``cursor`` that is bound to the query that issued it. Responses are private and never shared-cached.

        **Failure.** When the search service does not answer in time the endpoint returns 503 with ``extra.reason =
        "search_unavailable"``. The structured feed and every other endpoint are unaffected: retry the search later
        rather than the whole chain.

        Args:
            q: The words to search for, 2 to 200 characters (syntax above). ``query`` is accepted as an alias.
            cursor: Opaque cursor from a prior response's ``next_cursor``; only valid with the ``q`` that issued it.
            symbol: Hard ticker filter, same forms and expansions as on ``/api/news/`` (``ticker`` is an alias).
            category: Hard category filter — single value, CSV or repeated, OR-matched.
            source_type: Keep only rows ingested from these sources, same values and forms as on ``/api/news/``:
                ``gdelt`` (press coverage), ``sec_form4``, ``sec_form8k``, ``sec_form6k``. Single, CSV or repeated,
                OR-matched. Unknown values return 400.
            item: 8-K item code, e.g. ``5.02``: only 8-K filings carrying that item (any item of the filing). Implies
                ``source_type=sec_form8k``; next to any other ``source_type`` it returns 400.
            min_relevance: Override the default ≥4 threshold.
            page_size: Items per page, default ``10``; ``1``-``20`` on every tier, up to ``50`` on a Pro key (``limit``
                is an alias).
            collapse: ``story`` collapses coverage of one event to its best-ranked article, with ``story_id``,
                ``sources_count`` and ``sources`` on each item.
            collapse_stories: Boolean alias: ``true`` is equivalent to ``collapse=story``; ``false`` leaves articles
                ungrouped. Send either spelling, not both (400).
            from_date: Inclusive lower bound on ``time_published`` (ISO-8601, UTC when naive; a bare date is that day's
                midnight). Past your archive horizon → 403.
            to_date: Inclusive upper bound on ``time_published``; a bare date covers its whole day.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/search/"),
            query_params=[
                param[str]("q", q),
                param[str | None]("cursor", cursor),
                param[str | None]("symbol", symbol),
                param[list[NewsCategoryOrStr] | None]("category", category),
                param[list[SourceTypeOrStr] | None]("source_type", source_type),
                param[str | None]("item", item),
                param[int | None]("min_relevance", min_relevance),
                param[int | None]("page_size", page_size),
                param[CollapseOrStr | None]("collapse", collapse),
                param[bool | None]("collapse_stories", collapse_stories),
                param[RFC3339DateTime | None]("from_date", from_date),
                param[RFC3339DateTime | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[NewsSearchPage],
            error_mapper=get_api_news_search_error_mapper,
            request_options=request_options,
        )

    async def get_api_news_trending(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[RichNewsArticle], GetApiNewsTrendingErrorBody]:
        """Top stories from the trailing 48h: ``relevance_score >= 8``, ranked by relevance score decayed by article
        age, so a fresh story outranks an equally-scored stale one. At most two stories per ticker. Fixed size of 10, no
        pagination. Coverage of one story, syndicated reprints and independent write-ups of the same event alike, is
        collapsed to a single representative, and each item carries the ``story_id``, ``sources_count`` and ``sources``
        fields for the story it represents. ``story_id`` is the story ROOT's uid — the stable story key shared with
        ``?collapse=story`` and the MCP tools — while the item itself is the story's strongest-ranked member, so
        ``story_id`` may differ from the item's own ``original.uid``. Most stories are carried by a single outlet, so
        ``sources_count`` is usually 1; see its field description.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/news/trending/"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[list[RichNewsArticle]],
            error_mapper=get_api_news_trending_error_mapper,
            request_options=request_options,
        )
