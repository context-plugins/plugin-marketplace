from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_symbols_by_ticker_earnings_error import (
    GetApiSymbolsByTickerEarningsErrorBody,
    get_api_symbols_by_ticker_earnings_error_mapper,
)
from ..errors.get_api_symbols_by_ticker_earnings_latest_error import (
    GetApiSymbolsByTickerEarningsLatestErrorBody,
    get_api_symbols_by_ticker_earnings_latest_error_mapper,
)
from ..errors.get_api_symbols_by_ticker_error import (
    GetApiSymbolsByTickerErrorBody,
    get_api_symbols_by_ticker_error_mapper,
)
from ..errors.get_api_symbols_by_ticker_insider_summary_error import (
    GetApiSymbolsByTickerInsiderSummaryErrorBody,
    get_api_symbols_by_ticker_insider_summary_error_mapper,
)
from ..errors.get_api_symbols_by_ticker_insider_trades_error import (
    GetApiSymbolsByTickerInsiderTradesErrorBody,
    get_api_symbols_by_ticker_insider_trades_error_mapper,
)
from ..errors.get_api_symbols_by_ticker_peers_error import (
    GetApiSymbolsByTickerPeersErrorBody,
    get_api_symbols_by_ticker_peers_error_mapper,
)
from ..errors.get_api_symbols_by_ticker_sentiment_summary_error import (
    GetApiSymbolsByTickerSentimentSummaryErrorBody,
    get_api_symbols_by_ticker_sentiment_summary_error_mapper,
)
from ..errors.get_api_symbols_directory_error import (
    GetApiSymbolsDirectoryErrorBody,
    get_api_symbols_directory_error_mapper,
)
from ..errors.get_api_symbols_error import GetApiSymbolsErrorBody, get_api_symbols_error_mapper
from ..errors.get_api_symbols_sectors_by_slug_error import (
    GetApiSymbolsSectorsBySlugErrorBody,
    get_api_symbols_sectors_by_slug_error_mapper,
)
from ..models.enums.side1 import Side1, Side1OrStr
from ..models.latest_earnings_pointer import LatestEarningsPointer
from ..models.sector_symbols import SectorSymbols
from ..models.symbol import Symbol
from ..models.symbol_directory import SymbolDirectory
from ..models.symbol_peers import SymbolPeers
from ..models.ticker_earnings_history import TickerEarningsHistory
from ..models.ticker_insider_summary import TickerInsiderSummary
from ..models.ticker_insider_trades import TickerInsiderTrades
from ..models.ticker_sentiment_summary import TickerSentimentSummary
from ..server.server import Server


class Symbols:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SymbolsWithRawResponse(client, server, auth)

    def get_api_symbols(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Symbol]:
        """All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings), alphabetical by
        ticker. ~16k entries — cache aggressively, or slice with the optional ``limit``/``offset`` params (the response
        stays a bare array either way). Pass ``search`` to resolve a name, brand or ticker prefix to its canonical
        symbol (``search=bitcoin`` returns ``BTC-USD``, ``search=spacex`` returns ``SPCX``).

        Args:
            limit: Return at most this many symbols. Omit for the full list.
            offset: Skip this many symbols from the start of the list.
            search: Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's brand
                name where that differs from its registered name (``search=spacex`` returns ``SPCX``, registered as
                SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact name and brand matches rank
                above prefix and substring matches, and within the same level a company ranks above a fund
                (``search=jpmorgan`` lists ``JPM`` before ``JEPI``). Useful for finding the canonical form of a name
                (``search=bitcoin`` returns ``BTC-USD``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of active symbols.

        Raises:
            ApiError: Out-of-range or unknown query parameter. Missing or invalid API key. Rate limit exceeded — either
                the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols(
                limit=limit, offset=offset, search=search, request_options=request_options
            ),
        )

    def get_api_symbols_by_ticker(self, ticker: str, *, request_options: RequestOptionsOrDict | None = None) -> Symbol:
        """Send a ``GET`` request.

        Args:
            ticker: Ticker symbol. US equities are bare (``AAPL``); cryptocurrencies use the ``<SYM>-USD`` form
                (``BTC-USD``); foreign listings use the Yahoo suffix (``VOD.L``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Symbol with extended metadata. Resolves delisted symbols too: check ``status``, and ``renamed_to`` for the
            successor ticker when the company continues under a new symbol.

        Raises:
            ApiError: No item with that identifier. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_symbols_by_ticker(ticker, request_options=request_options))

    def get_api_symbols_by_ticker_earnings(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TickerEarningsHistory:
        """Every published AlphAI earnings read for the ticker, newest first, and the date of its next report when the
        company has confirmed one.

        A read is produced from the company's own SEC filing — an 8-K item 2.02 for US filers, a 6-K earnings release
        for foreign private issuers — within minutes of it reaching EDGAR, and every number in it is verified against
        the filing text before publication. ``/earnings/latest/`` returns just a pointer to the newest one; this
        endpoint returns the analyses themselves.

        Bridges share classes: a request for one class returns the reads filed under the issuer's primary class, and
        each row's ``ticker`` names the class it was actually filed under, which may differ from the one you asked for.

        Unpaginated and capped at 20 reads. Depth is currently shallow by construction — AlphAI's reads exist for
        filings from late July 2026 onward and reports arrive quarterly — so most tickers carry one or two.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ticker's earnings reads. An empty ``reports`` array is a normal answer, not an error: it means no read
            has been published yet.

        Raises:
            ApiError: Malformed ticker. Missing or invalid API key. Unknown symbol — no listing owns this string (error
                code ``unknown_symbol``). Look tickers up via ``/api/symbols/?search=``. Rate limit exceeded — either
                the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols_by_ticker_earnings(ticker, request_options=request_options)
        )

    def get_api_symbols_by_ticker_earnings_latest(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LatestEarningsPointer:
        """A pointer to the ticker's most recent published earnings read (SEC 8-K item 2.02, or a foreign private
        issuer's 6-K earnings release). Resolve the full analysis via ``/api/news/{uid}/``, whose ``earnings`` object
        carries it. Bridges share classes: a request for one class returns the read filed under the issuer's primary
        class.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ticker's most recent earnings read pointer.

        Raises:
            ApiError: Malformed ticker. Missing or invalid API key. Unknown symbol — no listing owns this string (error
                code ``unknown_symbol``). Look tickers up via ``/api/symbols/?search=``. Rate limit exceeded — either
                the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols_by_ticker_earnings_latest(ticker, request_options=request_options)
        )

    def get_api_symbols_by_ticker_insider_summary(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TickerInsiderSummary:
        """Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell transaction counts, dollar volumes, the
        share of transactions executed under pre-arranged 10b5-1 plans, and the most active insiders ranked by absolute
        net value (buys minus sells).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return zeros.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Insider activity stats for the window. Zeros mean no filings in the window for a real listing; a ticker no
            symbol owns returns 404 instead.

        Raises:
            ApiError: Malformed ticker. No item with that identifier. Missing or invalid API key. Rate limit exceeded —
                either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest
                second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at
                3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume
                budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols_by_ticker_insider_summary(ticker, request_options=request_options)
        )

    def get_api_symbols_by_ticker_insider_trades(
        self,
        ticker: str,
        *,
        side: Side1OrStr | None = Side1.ALL,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TickerInsiderTrades:
        """The complete per-ticker insider-trading payload behind alphai.io/stock/{ticker}/insider-trades: the paginated
        Form 4 event history plus everything a chart needs, in one request. One event is a filing's whole tranche group
        (shares summed, the price value-weighted, a 10b5-1 ladder is ONE event), same folding as the feed's ``insider``
        block.

        The first page (no ``cursor``) also carries the aggregates: ``summary`` (3-month, 12-month and all-time windows
        plus the most active insiders of the last 12 months), ``series`` (monthly buckets) and ``series_weekly``
        (Monday-keyed weekly buckets), both zero-filled up to the current period and capped to the trailing 12 months,
        and ``chart_events`` — every event of the trailing 12 months regardless of pagination. The aggregates always
        cover both sides regardless of the ``side`` filter, and they are ``null`` on cursor pages, which carry only the
        next ``events`` chunk.

        Side semantics on this surface follow the value flow: code P is ``buy``; codes S and D are both ``sell``,
        because a code D sale back to the issuer moves dollars off the insider's position like any sale. This
        deliberately differs from the feed's ``insider.side``, which labels D as ``other``; use ``transaction_code`` to
        tell a market sale (S) from a sale to the issuer (D).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return empty history.
            side: Filters the paginated ``events`` list only; the first page's aggregates always cover both sides.
            cursor: Opaque keyset cursor from a prior response's ``next_cursor``. Omit it for the newest page, the only
                one carrying the aggregates.
            page_size: Events per page. Not tier-gated: every tier may request up to 200, so one request can load a
                chart's whole working set. ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One page of the event history. Empty arrays mean no recorded filings for a real listing; a ticker no symbol
            owns returns 404 instead.

        Raises:
            ApiError: Malformed ticker No item with that identifier. Missing or invalid API key. Rate limit exceeded —
                either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest
                second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at
                3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume
                budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols_by_ticker_insider_trades(
                ticker, side=side, cursor=cursor, page_size=page_size, request_options=request_options
            ),
        )

    def get_api_symbols_by_ticker_peers(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SymbolPeers:
        """Other companies in the same industry (widening to the broader sector when the industry is thin) that carry
        recent enriched news, most recently covered first. Powers the "Related tickers" links on the stock hub pages.

        Args:
            ticker: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Up to ten related tickers. A well-formed but unknown ticker, or one with no peers carrying recent news,
            returns an empty list.

        Raises:
            ApiError: Malformed ticker. Missing or invalid API key. Rate limit exceeded — either the per-minute burst
                cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed,
                not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_api_symbols_by_ticker_peers(ticker, request_options=request_options))

    def get_api_symbols_by_ticker_sentiment_summary(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TickerSentimentSummary:
        """Counts of bullish / neutral / bearish per-ticker sentiment calls from the enriched news flow, plus per-day
        buckets. The window is the last 7 UTC calendar days, today included (today is partial): ``daily`` holds one
        bucket per day, and ``bullish``, ``neutral``, ``bearish`` and ``total`` are the sums of those buckets. Insider
        (SEC Form 4) template rows are excluded — this reflects press coverage, not filings.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing (``DOGE`` → ``DOGE-USD``; the response echoes the resolved ticker), and delisted
                or renamed symbols stay addressable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sentiment counts for the window. Zeros mean a quiet week for a real listing; a ticker no symbol owns returns
            404 instead.

        Raises:
            ApiError: Malformed ticker. No item with that identifier. Missing or invalid API key. Rate limit exceeded —
                either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest
                second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at
                3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume
                budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols_by_ticker_sentiment_summary(ticker, request_options=request_options)
        )

    def get_api_symbols_directory(self, *, request_options: RequestOptionsOrDict | None = None) -> SymbolDirectory:
        """The hub index behind /stocks: the globally most-covered tickers over the trailing window, plus one card per
        sector (size + its busiest names). Ranked by recent enriched-news coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Most-active tickers and sector cards.

        Raises:
            ApiError: Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_api_symbols_directory(request_options=request_options))

    def get_api_symbols_sectors_by_slug(
        self, slug: str, *, page: int | None = 1, request_options: RequestOptionsOrDict | None = None
    ) -> SectorSymbols:
        """The tickers in a sector (by slug, e.g. ``financial-services``), ranked by recent enriched-news coverage.
        Powers the /stocks/{slug} sub-pages. Returns up to 500 index-eligible tickers per page, ordered by coverage
        descending then ticker. Increment ``page`` while ``has_next`` is true. ``count`` is the number on this page;
        ``total_count`` is the whole sector. A page beyond the end returns an empty ``symbols`` array and ``has_next:
        false``. Rankings refresh periodically; this is a live directory, not a historical snapshot.

        Args:
            slug: Value sent with the request.
            page: One-based sector page, 500 tickers per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The sector and its most-covered tickers.

        Raises:
            ApiError: Invalid page or unsupported query parameter. Unknown sector slug. Missing or invalid API key. Rate
                limit exceeded — either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header
                is the earliest second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block
                is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the
                daily volume budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_symbols_sectors_by_slug(slug, page=page, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SymbolsWithRawResponse:
        return self._with_raw_response


class AsyncSymbols:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSymbolsWithRawResponse(client, server, auth)

    async def get_api_symbols(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Symbol]:
        """All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings), alphabetical by
        ticker. ~16k entries — cache aggressively, or slice with the optional ``limit``/``offset`` params (the response
        stays a bare array either way). Pass ``search`` to resolve a name, brand or ticker prefix to its canonical
        symbol (``search=bitcoin`` returns ``BTC-USD``, ``search=spacex`` returns ``SPCX``).

        Args:
            limit: Return at most this many symbols. Omit for the full list.
            offset: Skip this many symbols from the start of the list.
            search: Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's brand
                name where that differs from its registered name (``search=spacex`` returns ``SPCX``, registered as
                SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact name and brand matches rank
                above prefix and substring matches, and within the same level a company ranks above a fund
                (``search=jpmorgan`` lists ``JPM`` before ``JEPI``). Useful for finding the canonical form of a name
                (``search=bitcoin`` returns ``BTC-USD``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of active symbols.

        Raises:
            ApiError: Out-of-range or unknown query parameter. Missing or invalid API key. Rate limit exceeded — either
                the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols(
                limit=limit, offset=offset, search=search, request_options=request_options
            ),
        )

    async def get_api_symbols_by_ticker(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Symbol:
        """Send a ``GET`` request.

        Args:
            ticker: Ticker symbol. US equities are bare (``AAPL``); cryptocurrencies use the ``<SYM>-USD`` form
                (``BTC-USD``); foreign listings use the Yahoo suffix (``VOD.L``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Symbol with extended metadata. Resolves delisted symbols too: check ``status``, and ``renamed_to`` for the
            successor ticker when the company continues under a new symbol.

        Raises:
            ApiError: No item with that identifier. Missing or invalid API key. Rate limit exceeded — either the
                per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_symbols_by_ticker(ticker, request_options=request_options))

    async def get_api_symbols_by_ticker_earnings(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TickerEarningsHistory:
        """Every published AlphAI earnings read for the ticker, newest first, and the date of its next report when the
        company has confirmed one.

        A read is produced from the company's own SEC filing — an 8-K item 2.02 for US filers, a 6-K earnings release
        for foreign private issuers — within minutes of it reaching EDGAR, and every number in it is verified against
        the filing text before publication. ``/earnings/latest/`` returns just a pointer to the newest one; this
        endpoint returns the analyses themselves.

        Bridges share classes: a request for one class returns the reads filed under the issuer's primary class, and
        each row's ``ticker`` names the class it was actually filed under, which may differ from the one you asked for.

        Unpaginated and capped at 20 reads. Depth is currently shallow by construction — AlphAI's reads exist for
        filings from late July 2026 onward and reports arrive quarterly — so most tickers carry one or two.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ticker's earnings reads. An empty ``reports`` array is a normal answer, not an error: it means no read
            has been published yet.

        Raises:
            ApiError: Malformed ticker. Missing or invalid API key. Unknown symbol — no listing owns this string (error
                code ``unknown_symbol``). Look tickers up via ``/api/symbols/?search=``. Rate limit exceeded — either
                the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_by_ticker_earnings(ticker, request_options=request_options)
        )

    async def get_api_symbols_by_ticker_earnings_latest(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LatestEarningsPointer:
        """A pointer to the ticker's most recent published earnings read (SEC 8-K item 2.02, or a foreign private
        issuer's 6-K earnings release). Resolve the full analysis via ``/api/news/{uid}/``, whose ``earnings`` object
        carries it. Bridges share classes: a request for one class returns the read filed under the issuer's primary
        class.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The ticker's most recent earnings read pointer.

        Raises:
            ApiError: Malformed ticker. Missing or invalid API key. Unknown symbol — no listing owns this string (error
                code ``unknown_symbol``). Look tickers up via ``/api/symbols/?search=``. Rate limit exceeded — either
                the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a
                retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the
                true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The
                body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``,
                and — below Pro — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected
                request does not itself consume quota, so retrying after ``Retry-After`` costs you nothing extra.
                ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_by_ticker_earnings_latest(
                ticker, request_options=request_options
            ),
        )

    async def get_api_symbols_by_ticker_insider_summary(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TickerInsiderSummary:
        """Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell transaction counts, dollar volumes, the
        share of transactions executed under pre-arranged 10b5-1 plans, and the most active insiders ranked by absolute
        net value (buys minus sells).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return zeros.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Insider activity stats for the window. Zeros mean no filings in the window for a real listing; a ticker no
            symbol owns returns 404 instead.

        Raises:
            ApiError: Malformed ticker. No item with that identifier. Missing or invalid API key. Rate limit exceeded —
                either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest
                second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at
                3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume
                budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_by_ticker_insider_summary(
                ticker, request_options=request_options
            ),
        )

    async def get_api_symbols_by_ticker_insider_trades(
        self,
        ticker: str,
        *,
        side: Side1OrStr | None = Side1.ALL,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TickerInsiderTrades:
        """The complete per-ticker insider-trading payload behind alphai.io/stock/{ticker}/insider-trades: the paginated
        Form 4 event history plus everything a chart needs, in one request. One event is a filing's whole tranche group
        (shares summed, the price value-weighted, a 10b5-1 ladder is ONE event), same folding as the feed's ``insider``
        block.

        The first page (no ``cursor``) also carries the aggregates: ``summary`` (3-month, 12-month and all-time windows
        plus the most active insiders of the last 12 months), ``series`` (monthly buckets) and ``series_weekly``
        (Monday-keyed weekly buckets), both zero-filled up to the current period and capped to the trailing 12 months,
        and ``chart_events`` — every event of the trailing 12 months regardless of pagination. The aggregates always
        cover both sides regardless of the ``side`` filter, and they are ``null`` on cursor pages, which carry only the
        next ``events`` chunk.

        Side semantics on this surface follow the value flow: code P is ``buy``; codes S and D are both ``sell``,
        because a code D sale back to the issuer moves dollars off the insider's position like any sale. This
        deliberately differs from the feed's ``insider.side``, which labels D as ``other``; use ``transaction_code`` to
        tell a market sale (S) from a sale to the issuer (D).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return empty history.
            side: Filters the paginated ``events`` list only; the first page's aggregates always cover both sides.
            cursor: Opaque keyset cursor from a prior response's ``next_cursor``. Omit it for the newest page, the only
                one carrying the aggregates.
            page_size: Events per page. Not tier-gated: every tier may request up to 200, so one request can load a
                chart's whole working set. ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            One page of the event history. Empty arrays mean no recorded filings for a real listing; a ticker no symbol
            owns returns 404 instead.

        Raises:
            ApiError: Malformed ticker No item with that identifier. Missing or invalid API key. Rate limit exceeded —
                either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest
                second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at
                3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume
                budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_by_ticker_insider_trades(
                ticker, side=side, cursor=cursor, page_size=page_size, request_options=request_options
            ),
        )

    async def get_api_symbols_by_ticker_peers(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SymbolPeers:
        """Other companies in the same industry (widening to the broader sector when the industry is thin) that carry
        recent enriched news, most recently covered first. Powers the "Related tickers" links on the stock hub pages.

        Args:
            ticker: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Up to ten related tickers. A well-formed but unknown ticker, or one with no peers carrying recent news,
            returns an empty list.

        Raises:
            ApiError: Malformed ticker. Missing or invalid API key. Rate limit exceeded — either the per-minute burst
                cap or the per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed,
                not a guess (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_by_ticker_peers(ticker, request_options=request_options)
        )

    async def get_api_symbols_by_ticker_sentiment_summary(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TickerSentimentSummary:
        """Counts of bullish / neutral / bearish per-ticker sentiment calls from the enriched news flow, plus per-day
        buckets. The window is the last 7 UTC calendar days, today included (today is partial): ``daily`` holds one
        bucket per day, and ``bullish``, ``neutral``, ``bearish`` and ``total`` are the sums of those buckets. Insider
        (SEC Form 4) template rows are excluded — this reflects press coverage, not filings.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing (``DOGE`` → ``DOGE-USD``; the response echoes the resolved ticker), and delisted
                or renamed symbols stay addressable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sentiment counts for the window. Zeros mean a quiet week for a real listing; a ticker no symbol owns returns
            404 instead.

        Raises:
            ApiError: Malformed ticker. No item with that identifier. Missing or invalid API key. Rate limit exceeded —
                either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header is the earliest
                second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block is capped at
                3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume
                budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_by_ticker_sentiment_summary(
                ticker, request_options=request_options
            ),
        )

    async def get_api_symbols_directory(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SymbolDirectory:
        """The hub index behind /stocks: the globally most-covered tickers over the trailing window, plus one card per
        sector (size + its busiest names). Ranked by recent enriched-news coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Most-active tickers and sector cards.

        Raises:
            ApiError: Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_api_symbols_directory(request_options=request_options))

    async def get_api_symbols_sectors_by_slug(
        self, slug: str, *, page: int | None = 1, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SectorSymbols:
        """The tickers in a sector (by slug, e.g. ``financial-services``), ranked by recent enriched-news coverage.
        Powers the /stocks/{slug} sub-pages. Returns up to 500 index-eligible tickers per page, ordered by coverage
        descending then ticker. Increment ``page`` while ``has_next`` is true. ``count`` is the number on this page;
        ``total_count`` is the whole sector. A page beyond the end returns an empty ``symbols`` array and ``has_next:
        false``. Rankings refresh periodically; this is a live directory, not a historical snapshot.

        Args:
            slug: Value sent with the request.
            page: One-based sector page, 500 tickers per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The sector and its most-covered tickers.

        Raises:
            ApiError: Invalid page or unsupported query parameter. Unknown sector slug. Missing or invalid API key. Rate
                limit exceeded — either the per-minute burst cap or the per-day volume cap. The ``Retry-After`` header
                is the earliest second a retry can succeed, not a guess (a burst block is short, ≤60s; a day-cap block
                is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the
                daily volume budget. The body's ``extra`` names your tier, its ``limit_per_minute`` / ``limit_per_day``,
                ``retry_after_seconds``, and — below Pro — an ``upgrade`` block with the higher tiers' caps and the
                pricing URL. A rejected request does not itself consume quota, so retrying after ``Retry-After`` costs
                you nothing extra. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_symbols_sectors_by_slug(
                slug, page=page, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSymbolsWithRawResponse:
        return self._with_raw_response


class SymbolsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_symbols(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Symbol], GetApiSymbolsErrorBody]:
        """All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings), alphabetical by
        ticker. ~16k entries — cache aggressively, or slice with the optional ``limit``/``offset`` params (the response
        stays a bare array either way). Pass ``search`` to resolve a name, brand or ticker prefix to its canonical
        symbol (``search=bitcoin`` returns ``BTC-USD``, ``search=spacex`` returns ``SPCX``).

        Args:
            limit: Return at most this many symbols. Omit for the full list.
            offset: Skip this many symbols from the start of the list.
            search: Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's brand
                name where that differs from its registered name (``search=spacex`` returns ``SPCX``, registered as
                SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact name and brand matches rank
                above prefix and substring matches, and within the same level a company ranks above a fund
                (``search=jpmorgan`` lists ``JPM`` before ``JEPI``). Useful for finding the canonical form of a name
                (``search=bitcoin`` returns ``BTC-USD``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[list[Symbol]],
            error_mapper=get_api_symbols_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Symbol, GetApiSymbolsByTickerErrorBody]:
        """Send a ``GET`` request.

        Args:
            ticker: Ticker symbol. US equities are bare (``AAPL``); cryptocurrencies use the ``<SYM>-USD`` form
                (``BTC-USD``); foreign listings use the Yahoo suffix (``VOD.L``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Symbol],
            error_mapper=get_api_symbols_by_ticker_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker_earnings(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TickerEarningsHistory, GetApiSymbolsByTickerEarningsErrorBody]:
        """Every published AlphAI earnings read for the ticker, newest first, and the date of its next report when the
        company has confirmed one.

        A read is produced from the company's own SEC filing — an 8-K item 2.02 for US filers, a 6-K earnings release
        for foreign private issuers — within minutes of it reaching EDGAR, and every number in it is verified against
        the filing text before publication. ``/earnings/latest/`` returns just a pointer to the newest one; this
        endpoint returns the analyses themselves.

        Bridges share classes: a request for one class returns the reads filed under the issuer's primary class, and
        each row's ``ticker`` names the class it was actually filed under, which may differ from the one you asked for.

        Unpaginated and capped at 20 reads. Depth is currently shallow by construction — AlphAI's reads exist for
        filings from late July 2026 onward and reports arrive quarterly — so most tickers carry one or two.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/earnings/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[TickerEarningsHistory],
            error_mapper=get_api_symbols_by_ticker_earnings_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker_earnings_latest(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LatestEarningsPointer, GetApiSymbolsByTickerEarningsLatestErrorBody]:
        """A pointer to the ticker's most recent published earnings read (SEC 8-K item 2.02, or a foreign private
        issuer's 6-K earnings release). Resolve the full analysis via ``/api/news/{uid}/``, whose ``earnings`` object
        carries it. Bridges share classes: a request for one class returns the read filed under the issuer's primary
        class.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/earnings/latest/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[LatestEarningsPointer],
            error_mapper=get_api_symbols_by_ticker_earnings_latest_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker_insider_summary(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TickerInsiderSummary, GetApiSymbolsByTickerInsiderSummaryErrorBody]:
        """Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell transaction counts, dollar volumes, the
        share of transactions executed under pre-arranged 10b5-1 plans, and the most active insiders ranked by absolute
        net value (buys minus sells).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return zeros.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/insider-summary/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[TickerInsiderSummary],
            error_mapper=get_api_symbols_by_ticker_insider_summary_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker_insider_trades(
        self,
        ticker: str,
        *,
        side: Side1OrStr | None = Side1.ALL,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TickerInsiderTrades, GetApiSymbolsByTickerInsiderTradesErrorBody]:
        """The complete per-ticker insider-trading payload behind alphai.io/stock/{ticker}/insider-trades: the paginated
        Form 4 event history plus everything a chart needs, in one request. One event is a filing's whole tranche group
        (shares summed, the price value-weighted, a 10b5-1 ladder is ONE event), same folding as the feed's ``insider``
        block.

        The first page (no ``cursor``) also carries the aggregates: ``summary`` (3-month, 12-month and all-time windows
        plus the most active insiders of the last 12 months), ``series`` (monthly buckets) and ``series_weekly``
        (Monday-keyed weekly buckets), both zero-filled up to the current period and capped to the trailing 12 months,
        and ``chart_events`` — every event of the trailing 12 months regardless of pagination. The aggregates always
        cover both sides regardless of the ``side`` filter, and they are ``null`` on cursor pages, which carry only the
        next ``events`` chunk.

        Side semantics on this surface follow the value flow: code P is ``buy``; codes S and D are both ``sell``,
        because a code D sale back to the issuer moves dollars off the insider's position like any sale. This
        deliberately differs from the feed's ``insider.side``, which labels D as ``other``; use ``transaction_code`` to
        tell a market sale (S) from a sale to the issuer (D).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return empty history.
            side: Filters the paginated ``events`` list only; the first page's aggregates always cover both sides.
            cursor: Opaque keyset cursor from a prior response's ``next_cursor``. Omit it for the newest page, the only
                one carrying the aggregates.
            page_size: Events per page. Not tier-gated: every tier may request up to 200, so one request can load a
                chart's whole working set. ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/insider-trades/"),
            path_params=[param[str]("ticker", ticker)],
            query_params=[
                param[Side1OrStr | None]("side", side),
                param[str | None]("cursor", cursor),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[TickerInsiderTrades],
            error_mapper=get_api_symbols_by_ticker_insider_trades_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker_peers(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SymbolPeers, GetApiSymbolsByTickerPeersErrorBody]:
        """Other companies in the same industry (widening to the broader sector when the industry is thin) that carry
        recent enriched news, most recently covered first. Powers the "Related tickers" links on the stock hub pages.

        Args:
            ticker: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/peers/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[SymbolPeers],
            error_mapper=get_api_symbols_by_ticker_peers_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_by_ticker_sentiment_summary(
        self, ticker: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TickerSentimentSummary, GetApiSymbolsByTickerSentimentSummaryErrorBody]:
        """Counts of bullish / neutral / bearish per-ticker sentiment calls from the enriched news flow, plus per-day
        buckets. The window is the last 7 UTC calendar days, today included (today is partial): ``daily`` holds one
        bucket per day, and ``bullish``, ``neutral``, ``bearish`` and ``total`` are the sums of those buckets. Insider
        (SEC Form 4) template rows are excluded — this reflects press coverage, not filings.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing (``DOGE`` → ``DOGE-USD``; the response echoes the resolved ticker), and delisted
                or renamed symbols stay addressable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/sentiment-summary/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[TickerSentimentSummary],
            error_mapper=get_api_symbols_by_ticker_sentiment_summary_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_directory(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SymbolDirectory, GetApiSymbolsDirectoryErrorBody]:
        """The hub index behind /stocks: the globally most-covered tickers over the trailing window, plus one card per
        sector (size + its busiest names). Ranked by recent enriched-news coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/directory/"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[SymbolDirectory],
            error_mapper=get_api_symbols_directory_error_mapper,
            request_options=request_options,
        )

    def get_api_symbols_sectors_by_slug(
        self, slug: str, *, page: int | None = 1, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SectorSymbols, GetApiSymbolsSectorsBySlugErrorBody]:
        """The tickers in a sector (by slug, e.g. ``financial-services``), ranked by recent enriched-news coverage.
        Powers the /stocks/{slug} sub-pages. Returns up to 500 index-eligible tickers per page, ordered by coverage
        descending then ticker. Increment ``page`` while ``has_next`` is true. ``count`` is the number on this page;
        ``total_count`` is the whole sector. A page beyond the end returns an empty ``symbols`` array and ``has_next:
        false``. Rankings refresh periodically; this is a live directory, not a historical snapshot.

        Args:
            slug: Value sent with the request.
            page: One-based sector page, 500 tickers per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/sectors/{slug}/"),
            path_params=[param[str]("slug", slug)],
            query_params=[param[int | None]("page", page)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[SectorSymbols],
            error_mapper=get_api_symbols_sectors_by_slug_error_mapper,
            request_options=request_options,
        )


class AsyncSymbolsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_symbols(
        self,
        *,
        limit: int | None = None,
        offset: int | None = 0,
        search: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Symbol], GetApiSymbolsErrorBody]:
        """All active symbols (US equities, US exchange-traded funds, crypto, and foreign listings), alphabetical by
        ticker. ~16k entries — cache aggressively, or slice with the optional ``limit``/``offset`` params (the response
        stays a bare array either way). Pass ``search`` to resolve a name, brand or ticker prefix to its canonical
        symbol (``search=bitcoin`` returns ``BTC-USD``, ``search=spacex`` returns ``SPCX``).

        Args:
            limit: Return at most this many symbols. Omit for the full list.
            offset: Skip this many symbols from the start of the list.
            search: Resolve a query to matching symbols: ticker-prefix, company-name substring, or the company's brand
                name where that differs from its registered name (``search=spacex`` returns ``SPCX``, registered as
                SPACE EXPLORATION TECHNOLOGIES CORP). Case-insensitive; exact ticker, exact name and brand matches rank
                above prefix and substring matches, and within the same level a company ranks above a fund
                (``search=jpmorgan`` lists ``JPM`` before ``JEPI``). Useful for finding the canonical form of a name
                (``search=bitcoin`` returns ``BTC-USD``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("search", search),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[list[Symbol]],
            error_mapper=get_api_symbols_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Symbol, GetApiSymbolsByTickerErrorBody]:
        """Send a ``GET`` request.

        Args:
            ticker: Ticker symbol. US equities are bare (``AAPL``); cryptocurrencies use the ``<SYM>-USD`` form
                (``BTC-USD``); foreign listings use the Yahoo suffix (``VOD.L``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Symbol],
            error_mapper=get_api_symbols_by_ticker_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker_earnings(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TickerEarningsHistory, GetApiSymbolsByTickerEarningsErrorBody]:
        """Every published AlphAI earnings read for the ticker, newest first, and the date of its next report when the
        company has confirmed one.

        A read is produced from the company's own SEC filing — an 8-K item 2.02 for US filers, a 6-K earnings release
        for foreign private issuers — within minutes of it reaching EDGAR, and every number in it is verified against
        the filing text before publication. ``/earnings/latest/`` returns just a pointer to the newest one; this
        endpoint returns the analyses themselves.

        Bridges share classes: a request for one class returns the reads filed under the issuer's primary class, and
        each row's ``ticker`` names the class it was actually filed under, which may differ from the one you asked for.

        Unpaginated and capped at 20 reads. Depth is currently shallow by construction — AlphAI's reads exist for
        filings from late July 2026 onward and reports arrive quarterly — so most tickers carry one or two.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/earnings/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[TickerEarningsHistory],
            error_mapper=get_api_symbols_by_ticker_earnings_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker_earnings_latest(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LatestEarningsPointer, GetApiSymbolsByTickerEarningsLatestErrorBody]:
        """A pointer to the ticker's most recent published earnings read (SEC 8-K item 2.02, or a foreign private
        issuer's 6-K earnings release). Resolve the full analysis via ``/api/news/{uid}/``, whose ``earnings`` object
        carries it. Bridges share classes: a request for one class returns the read filed under the issuer's primary
        class.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/earnings/latest/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[LatestEarningsPointer],
            error_mapper=get_api_symbols_by_ticker_earnings_latest_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker_insider_summary(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TickerInsiderSummary, GetApiSymbolsByTickerInsiderSummaryErrorBody]:
        """Aggregated SEC Form 4 activity over the trailing 30 days: buy/sell transaction counts, dollar volumes, the
        share of transactions executed under pre-arranged 10b5-1 plans, and the most active insiders ranked by absolute
        net value (buys minus sells).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return zeros.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/insider-summary/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[TickerInsiderSummary],
            error_mapper=get_api_symbols_by_ticker_insider_summary_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker_insider_trades(
        self,
        ticker: str,
        *,
        side: Side1OrStr | None = Side1.ALL,
        cursor: str | None = None,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TickerInsiderTrades, GetApiSymbolsByTickerInsiderTradesErrorBody]:
        """The complete per-ticker insider-trading payload behind alphai.io/stock/{ticker}/insider-trades: the paginated
        Form 4 event history plus everything a chart needs, in one request. One event is a filing's whole tranche group
        (shares summed, the price value-weighted, a 10b5-1 ladder is ONE event), same folding as the feed's ``insider``
        block.

        The first page (no ``cursor``) also carries the aggregates: ``summary`` (3-month, 12-month and all-time windows
        plus the most active insiders of the last 12 months), ``series`` (monthly buckets) and ``series_weekly``
        (Monday-keyed weekly buckets), both zero-filled up to the current period and capped to the trailing 12 months,
        and ``chart_events`` — every event of the trailing 12 months regardless of pagination. The aggregates always
        cover both sides regardless of the ``side`` filter, and they are ``null`` on cursor pages, which carry only the
        next ``events`` chunk.

        Side semantics on this surface follow the value flow: code P is ``buy``; codes S and D are both ``sell``,
        because a code D sale back to the issuer moves dollars off the insider's position like any sale. This
        deliberately differs from the feed's ``insider.side``, which labels D as ``other``; use ``transaction_code`` to
        tell a market sale (S) from a sale to the issuer (D).

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing, and delisted or renamed symbols stay addressable. Crypto and foreign listings
                have no Form 4 flow, so they return empty history.
            side: Filters the paginated ``events`` list only; the first page's aggregates always cover both sides.
            cursor: Opaque keyset cursor from a prior response's ``next_cursor``. Omit it for the newest page, the only
                one carrying the aggregates.
            page_size: Events per page. Not tier-gated: every tier may request up to 200, so one request can load a
                chart's whole working set. ``limit`` is accepted as an alias.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/insider-trades/"),
            path_params=[param[str]("ticker", ticker)],
            query_params=[
                param[Side1OrStr | None]("side", side),
                param[str | None]("cursor", cursor),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[TickerInsiderTrades],
            error_mapper=get_api_symbols_by_ticker_insider_trades_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker_peers(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SymbolPeers, GetApiSymbolsByTickerPeersErrorBody]:
        """Other companies in the same industry (widening to the broader sector when the industry is thin) that carry
        recent enriched news, most recently covered first. Powers the "Related tickers" links on the stock hub pages.

        Args:
            ticker: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/peers/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[SymbolPeers],
            error_mapper=get_api_symbols_by_ticker_peers_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_by_ticker_sentiment_summary(
        self, ticker: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TickerSentimentSummary, GetApiSymbolsByTickerSentimentSummaryErrorBody]:
        """Counts of bullish / neutral / bearish per-ticker sentiment calls from the enriched news flow, plus per-day
        buckets. The window is the last 7 UTC calendar days, today included (today is partial): ``daily`` holds one
        bucket per day, and ``bullish``, ``neutral``, ``bearish`` and ``total`` are the sums of those buckets. Insider
        (SEC Form 4) template rows are excluded — this reflects press coverage, not filings.

        Args:
            ticker: Accepts the same ticker forms as the symbol detail endpoint: bare crypto names resolve to their
                ``<SYM>-USD`` listing (``DOGE`` → ``DOGE-USD``; the response echoes the resolved ticker), and delisted
                or renamed symbols stay addressable.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/{ticker}/sentiment-summary/"),
            path_params=[param[str]("ticker", ticker)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[TickerSentimentSummary],
            error_mapper=get_api_symbols_by_ticker_sentiment_summary_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_directory(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SymbolDirectory, GetApiSymbolsDirectoryErrorBody]:
        """The hub index behind /stocks: the globally most-covered tickers over the trailing window, plus one card per
        sector (size + its busiest names). Ranked by recent enriched-news coverage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/directory/"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[SymbolDirectory],
            error_mapper=get_api_symbols_directory_error_mapper,
            request_options=request_options,
        )

    async def get_api_symbols_sectors_by_slug(
        self, slug: str, *, page: int | None = 1, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SectorSymbols, GetApiSymbolsSectorsBySlugErrorBody]:
        """The tickers in a sector (by slug, e.g. ``financial-services``), ranked by recent enriched-news coverage.
        Powers the /stocks/{slug} sub-pages. Returns up to 500 index-eligible tickers per page, ordered by coverage
        descending then ticker. Increment ``page`` while ``has_next`` is true. ``count`` is the number on this page;
        ``total_count`` is the whole sector. A page beyond the end returns an empty ``symbols`` array and ``has_next:
        false``. Rankings refresh periodically; this is a live directory, not a historical snapshot.

        Args:
            slug: Value sent with the request.
            page: One-based sector page, 500 tickers per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/symbols/sectors/{slug}/"),
            path_params=[param[str]("slug", slug)],
            query_params=[param[int | None]("page", page)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[SectorSymbols],
            error_mapper=get_api_symbols_sectors_by_slug_error_mapper,
            request_options=request_options,
        )
