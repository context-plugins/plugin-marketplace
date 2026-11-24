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
from ..errors.get_api_v1_companies_by_identifier_articles_error import (
    GetApiV1CompaniesByIdentifierArticlesErrorBody,
    get_api_v1_companies_by_identifier_articles_error_mapper,
)
from ..errors.get_api_v1_companies_by_identifier_calendar_events_error import (
    GetApiV1CompaniesByIdentifierCalendarEventsErrorBody,
    get_api_v1_companies_by_identifier_calendar_events_error_mapper,
)
from ..errors.get_api_v1_companies_by_identifier_error import (
    GetApiV1CompaniesByIdentifierErrorBody,
    get_api_v1_companies_by_identifier_error_mapper,
)
from ..errors.get_api_v1_companies_by_identifier_events_error import (
    GetApiV1CompaniesByIdentifierEventsErrorBody,
    get_api_v1_companies_by_identifier_events_error_mapper,
)
from ..errors.get_api_v1_companies_by_identifier_stories_error import (
    GetApiV1CompaniesByIdentifierStoriesErrorBody,
    get_api_v1_companies_by_identifier_stories_error_mapper,
)
from ..errors.get_api_v1_companies_error import GetApiV1CompaniesErrorBody, get_api_v1_companies_error_mapper
from ..models.api_v1_companies_articles_response import ApiV1CompaniesArticlesResponse
from ..models.api_v1_companies_calendar_events_response import ApiV1CompaniesCalendarEventsResponse
from ..models.api_v1_companies_events_response import ApiV1CompaniesEventsResponse
from ..models.api_v1_companies_response import ApiV1CompaniesResponse
from ..models.api_v1_companies_response1 import ApiV1CompaniesResponse1
from ..models.api_v1_companies_stories_response import ApiV1CompaniesStoriesResponse
from ..models.enums.event_type1 import EventType1OrStr
from ..models.enums.mode import ModeOrStr
from ..models.enums.sort import SortOrStr
from ..models.enums.status1 import Status1OrStr
from ..server.server import Server


class CompaniesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CompaniesApiWithRawResponse(client, server, auth)

    def get_api_v1_companies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        company: str | None = None,
        ticker: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        is_active: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesResponse:
        """Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use
        ``q`` for full-text search across company names, ranked by relevance, or add ``mode=semantic`` to match ``q`` by
        meaning instead.

        Args:
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``slug``, ``ticker``, ``former_tickers``.
            q: Full-text search query (2-200 characters). Searches company names and aliases. Results are ranked by
                relevance instead of alphabetical order. Mutually exclusive with ``cursor``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by name/ticker text. The match runs over
                each company's name, aliases, country, sector, industry and description, so it answers thematic
                questions a name match cannot ("defense contractors", "companies making battery cells"). Put geography
                in ``market``, ``domicile`` or ``country`` rather than in ``q``. A place name in ``q`` matches company
                names containing it ("Nordic ...", "Swedish ...") ahead of companies that actually do that thing.
                Requires ``q``, is mutually exclusive with ``cursor``, and returns a single ranked page capped by
                ``limit``; ``company``, ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``sector``,
                ``listed``, ``watchlist`` and ``is_active`` remain hard filters applied before the match, not after.
                Each company gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                coverage bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so
                a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a
                distance ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to name matching.
            company: Resolve specific company ``id`` values, comma-separated (maximum 25). This is the batch-resolve
                path for the ``company_id`` and ``company_ids`` values returned by the articles, stories, events and
                calendar endpoints. Look up a whole page of them in one request instead of one ``GET
                /companies/{identifier}`` per company. Every id must resolve, or the request is rejected with ``400``
                naming the unknown ids. Results are returned in name order, not the order requested, so key off each
                row's ``id``. Combined with ``ticker``, the two filters intersect.
            ticker: Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed form
                (e.g. ``VOLV-B.ST``) and resolves former tickers; matching is case-insensitive. Unlike ``q`` this is an
                exact filter, so it returns no near-matches and supports cursor pagination. Every ticker must resolve,
                or the request is rejected with ``400`` naming the unknown values. Combined with ``company``, the two
                filters intersect. A ticker shared by more than one issuer resolves to every matching company, so a
                batch can return more rows than the number of tickers sent. ``GET /companies/{identifier}`` tie-breaks
                such a ticker to a single company, this filter does not.
            country: Legal domicile, ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for multiple
                (e.g. ``SE,NO``). Case-insensitive. Synonym for ``domicile`` on this endpoint, kept for backward
                compatibility. If both ``country`` and ``domicile`` are sent, they intersect.
            market: Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2,
                comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight and NGM.
                Distinct from ``country``/``domicile`` (legal domicile). Includes foreign-domiciled but locally-listed
                issuers.
            domicile: Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated).
                The canonical cross-surface name for what ``country`` already means on this endpoint; reaches unlisted
                companies and excludes foreign-domiciled but locally-listed issuers. Use ``market`` for market-coverage
                questions.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XOSL,XCSE``). Only
                companies with an active listing on the exchange match.
            sector: Filter by industry sector (e.g. ``Financials``, ``Industrials``, ``Information Technology``).
            listed: When ``true``, only return companies with at least one active stock exchange listing.
            watchlist: When ``true``, only return companies in the authenticated user's watchlist. Requires
                ``read:watchlist`` scope.
            is_active: Filter by active status. When ``true``, only return active companies. When ``false``, only return
                inactive companies.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Companies retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_companies(
                limit=limit,
                cursor=cursor,
                fields=fields,
                q=q,
                mode=mode,
                company=company,
                ticker=ticker,
                country=country,
                market=market,
                domicile=domicile,
                exchange=exchange,
                sector=sector,
                listed=listed,
                watchlist=watchlist,
                is_active=is_active,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_companies_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesResponse1:
        """Returns detailed information about a single company, including description, sector, relationships, and stock
        listings. Look up by company ID (e.g. ``comp_apple123``) or ticker symbol (e.g. ``AAPL``, ``VOLV-B``). Lookup
        also accepts the full ticker including exchange suffix (e.g. ``VOLV-B.ST``).

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company retrieved successfully

        Raises:
            ApiError: Company not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_companies_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_companies_by_identifier_articles(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesArticlesResponse:
        """Returns articles where the company is a principal association (subject, partner, investor, or competitor),
        ordered by publication date (newest first). An article where this company is only the source, an advisor, or a
        passing mention is excluded.

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``source_type``, ``content_type``, ``published_after`` and ``published_before`` parameters as ``GET
        /api/v1/articles``, with identical semantics, scoped to this company. ``primary_only=true`` narrows further
        within that principal set, to only articles where this company is the primary subject.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/articles`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value
        other than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only this company's articles updated after this timestamp. Use
                this for incremental sync: store the timestamp of your last completed sync, then request only newer
                results on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where this
                company is the primary subject.
            include_peripheral: When ``true``, widen this feed back to articles where the company is only a peripheral
                association (its source, an advisor, or a passing mention), which are otherwise excluded. Default
                ``false`` (principal-only). ``primary_only`` still keeps the primary-subject restriction even when
                peripheral is requested.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company articles retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_companies_by_identifier_articles(
                identifier,
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                sort=sort,
                country=country,
                category=category,
                sources=sources,
                source_type=source_type,
                content_type=content_type,
                published_after=published_after,
                published_before=published_before,
                primary_only=primary_only,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_companies_by_identifier_calendar_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        status: Status1OrStr | None = None,
        event_type: EventType1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesCalendarEventsResponse:
        """Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and
        more), ordered by ``scheduled_at`` ascending. This is the same contract as ``GET /api/v1/calendar_events``,
        scoped to a single company by the path.

        ## Default window By default only upcoming events are returned; ``scheduled_after``/``scheduled_before`` or
        ``updated_after`` lift that floor, the same way they do on the flat resource.

        ## Plan availability Not available on plans with a capped calendar. Use ``GET /api/v1/calendar_events`` for the
        upcoming-events preview instead.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for
                incremental sync: store the timestamp of your last completed sync and pass it on the next request.
                Results are ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor``
                before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only
                floor, so past events with newer updates are included.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company calendar events retrieved successfully

        Raises:
            ApiError: Company calendars are not available on this plan ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_companies_by_identifier_calendar_events(
                identifier,
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                status=status,
                event_type=event_type,
                scheduled_after=scheduled_after,
                scheduled_before=scheduled_before,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_companies_by_identifier_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        sort: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesEventsResponse:
        """Returns Events this company participates in, newest first. This is the same contract as ``GET
        /api/v1/events``, scoped to a single company by the path. Plan gating, ordering, ``updated_after`` sync
        (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its
        documentation for the full detail.

        A tombstone respects the same event-grain filters as the flat resource, including
        ``last_article_after``/``before``. A merged event's ``last_article_at`` freezes at merge time, so those filter a
        tombstone against that frozen value rather than against when the merge happened. ``window`` cannot be used for
        sync polling (mutually exclusive with ``updated_after``).

        Parameters that name or describe a different company or listing are rejected here with ``400
        invalid-parameter``: ``company``, ``ticker``, ``watchlist``, ``listed``, ``exchange``, ``market``, ``domicile``,
        ``index`` and ``sector``. The path already fixes the company; use ``GET /api/v1/events`` to filter the full
        collection by any of them. ``watchlist=false`` and ``listed`` with any value other than ``true`` remain inert.
        ``mode`` is rejected with ``400 invalid-parameter``; use ``GET
        /api/v1/events?company={company_id}&q={query}&mode=semantic`` to search one company's events by meaning.

        Responses carry an ``ETag`` and ``Cache-Control: private, max-age=0, must-revalidate``; send the ETag back as
        ``If-None-Match`` to receive a ``304 Not Modified``. There is no ``Last-Modified``, so ``If-Modified-Since``
        alone never revalidates. This is the same contract, and the same reason, as ``GET /api/v1/events``. Requests
        carrying ``q`` or ``updated_after`` are not cached and return ``Cache-Control: no-cache, no-store``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Works with ``q`` too; ``q`` is a filter, not a
                separate search mode. When continuing an ``updated_after`` sync, resend the same ``updated_after``
                value.
            fields: Comma-separated list of fields to include in the response. ``id`` is always included.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp, including
                merge/removal tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X".
            event_type: Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from
                ``GET /api/v1/event_types`` and are the only values accepted here. The underscored calendar
                ``event_type`` values used by ``GET /api/v1/calendar_events`` are rejected. A few spellings overlap
                across the two vocabularies (e.g. ``delisting``) while denoting different things. An unrecognized slug
                returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2,
                comma-separated). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Mutually exclusive with
                ``last_article_after``, ``last_article_before``, and ``updated_after``.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id``.
                Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen this feed, and the ``company_ids`` returned on each event, to
                events where this company has a peripheral role (advisor, speaker, or a passing mention) as well.
                Default ``false`` restricts to an active-involvement role (subject, acquirer, target, investor, issuer,
                partner).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company events retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_companies_by_identifier_events(
                identifier,
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                event_type=event_type,
                significance=significance,
                sort=sort,
                country=country,
                category=category,
                sources=sources,
                first_reported_after=first_reported_after,
                first_reported_before=first_reported_before,
                last_article_after=last_article_after,
                last_article_before=last_article_before,
                window=window,
                source_type=source_type,
                content_type=content_type,
                related_to=related_to,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                request_options=request_options,
            ),
        )

    def get_api_v1_companies_by_identifier_stories(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesStoriesResponse:
        """Returns stories that mention a specific company, ordered by publication date (newest first).

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``published_after`` and ``published_before`` parameters as ``GET /api/v1/stories``, with identical
        semantics, scoped to this company.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/stories`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value other
        than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this
                for incremental sync: store the timestamp of your last completed sync, then request only newer results
                on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company stories retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_companies_by_identifier_stories(
                identifier,
                limit=limit,
                cursor=cursor,
                updated_after=updated_after,
                fields=fields,
                q=q,
                sort=sort,
                country=country,
                category=category,
                sources=sources,
                published_after=published_after,
                published_before=published_before,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CompaniesApiWithRawResponse:
        return self._with_raw_response


class AsyncCompaniesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCompaniesApiWithRawResponse(client, server, auth)

    async def get_api_v1_companies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        company: str | None = None,
        ticker: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        is_active: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesResponse:
        """Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use
        ``q`` for full-text search across company names, ranked by relevance, or add ``mode=semantic`` to match ``q`` by
        meaning instead.

        Args:
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``slug``, ``ticker``, ``former_tickers``.
            q: Full-text search query (2-200 characters). Searches company names and aliases. Results are ranked by
                relevance instead of alphabetical order. Mutually exclusive with ``cursor``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by name/ticker text. The match runs over
                each company's name, aliases, country, sector, industry and description, so it answers thematic
                questions a name match cannot ("defense contractors", "companies making battery cells"). Put geography
                in ``market``, ``domicile`` or ``country`` rather than in ``q``. A place name in ``q`` matches company
                names containing it ("Nordic ...", "Swedish ...") ahead of companies that actually do that thing.
                Requires ``q``, is mutually exclusive with ``cursor``, and returns a single ranked page capped by
                ``limit``; ``company``, ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``sector``,
                ``listed``, ``watchlist`` and ``is_active`` remain hard filters applied before the match, not after.
                Each company gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                coverage bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so
                a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a
                distance ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to name matching.
            company: Resolve specific company ``id`` values, comma-separated (maximum 25). This is the batch-resolve
                path for the ``company_id`` and ``company_ids`` values returned by the articles, stories, events and
                calendar endpoints. Look up a whole page of them in one request instead of one ``GET
                /companies/{identifier}`` per company. Every id must resolve, or the request is rejected with ``400``
                naming the unknown ids. Results are returned in name order, not the order requested, so key off each
                row's ``id``. Combined with ``ticker``, the two filters intersect.
            ticker: Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed form
                (e.g. ``VOLV-B.ST``) and resolves former tickers; matching is case-insensitive. Unlike ``q`` this is an
                exact filter, so it returns no near-matches and supports cursor pagination. Every ticker must resolve,
                or the request is rejected with ``400`` naming the unknown values. Combined with ``company``, the two
                filters intersect. A ticker shared by more than one issuer resolves to every matching company, so a
                batch can return more rows than the number of tickers sent. ``GET /companies/{identifier}`` tie-breaks
                such a ticker to a single company, this filter does not.
            country: Legal domicile, ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for multiple
                (e.g. ``SE,NO``). Case-insensitive. Synonym for ``domicile`` on this endpoint, kept for backward
                compatibility. If both ``country`` and ``domicile`` are sent, they intersect.
            market: Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2,
                comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight and NGM.
                Distinct from ``country``/``domicile`` (legal domicile). Includes foreign-domiciled but locally-listed
                issuers.
            domicile: Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated).
                The canonical cross-surface name for what ``country`` already means on this endpoint; reaches unlisted
                companies and excludes foreign-domiciled but locally-listed issuers. Use ``market`` for market-coverage
                questions.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XOSL,XCSE``). Only
                companies with an active listing on the exchange match.
            sector: Filter by industry sector (e.g. ``Financials``, ``Industrials``, ``Information Technology``).
            listed: When ``true``, only return companies with at least one active stock exchange listing.
            watchlist: When ``true``, only return companies in the authenticated user's watchlist. Requires
                ``read:watchlist`` scope.
            is_active: Filter by active status. When ``true``, only return active companies. When ``false``, only return
                inactive companies.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Companies retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_companies(
                limit=limit,
                cursor=cursor,
                fields=fields,
                q=q,
                mode=mode,
                company=company,
                ticker=ticker,
                country=country,
                market=market,
                domicile=domicile,
                exchange=exchange,
                sector=sector,
                listed=listed,
                watchlist=watchlist,
                is_active=is_active,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_companies_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesResponse1:
        """Returns detailed information about a single company, including description, sector, relationships, and stock
        listings. Look up by company ID (e.g. ``comp_apple123``) or ticker symbol (e.g. ``AAPL``, ``VOLV-B``). Lookup
        also accepts the full ticker including exchange suffix (e.g. ``VOLV-B.ST``).

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company retrieved successfully

        Raises:
            ApiError: Company not found ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_companies_by_identifier(
                identifier,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_companies_by_identifier_articles(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesArticlesResponse:
        """Returns articles where the company is a principal association (subject, partner, investor, or competitor),
        ordered by publication date (newest first). An article where this company is only the source, an advisor, or a
        passing mention is excluded.

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``source_type``, ``content_type``, ``published_after`` and ``published_before`` parameters as ``GET
        /api/v1/articles``, with identical semantics, scoped to this company. ``primary_only=true`` narrows further
        within that principal set, to only articles where this company is the primary subject.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/articles`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value
        other than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only this company's articles updated after this timestamp. Use
                this for incremental sync: store the timestamp of your last completed sync, then request only newer
                results on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where this
                company is the primary subject.
            include_peripheral: When ``true``, widen this feed back to articles where the company is only a peripheral
                association (its source, an advisor, or a passing mention), which are otherwise excluded. Default
                ``false`` (principal-only). ``primary_only`` still keeps the primary-subject restriction even when
                peripheral is requested.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company articles retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_companies_by_identifier_articles(
                identifier,
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                sort=sort,
                country=country,
                category=category,
                sources=sources,
                source_type=source_type,
                content_type=content_type,
                published_after=published_after,
                published_before=published_before,
                primary_only=primary_only,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_companies_by_identifier_calendar_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        status: Status1OrStr | None = None,
        event_type: EventType1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesCalendarEventsResponse:
        """Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and
        more), ordered by ``scheduled_at`` ascending. This is the same contract as ``GET /api/v1/calendar_events``,
        scoped to a single company by the path.

        ## Default window By default only upcoming events are returned; ``scheduled_after``/``scheduled_before`` or
        ``updated_after`` lift that floor, the same way they do on the flat resource.

        ## Plan availability Not available on plans with a capped calendar. Use ``GET /api/v1/calendar_events`` for the
        upcoming-events preview instead.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for
                incremental sync: store the timestamp of your last completed sync and pass it on the next request.
                Results are ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor``
                before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only
                floor, so past events with newer updates are included.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company calendar events retrieved successfully

        Raises:
            ApiError: Company calendars are not available on this plan ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_companies_by_identifier_calendar_events(
                identifier,
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                status=status,
                event_type=event_type,
                scheduled_after=scheduled_after,
                scheduled_before=scheduled_before,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_companies_by_identifier_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        sort: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesEventsResponse:
        """Returns Events this company participates in, newest first. This is the same contract as ``GET
        /api/v1/events``, scoped to a single company by the path. Plan gating, ordering, ``updated_after`` sync
        (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its
        documentation for the full detail.

        A tombstone respects the same event-grain filters as the flat resource, including
        ``last_article_after``/``before``. A merged event's ``last_article_at`` freezes at merge time, so those filter a
        tombstone against that frozen value rather than against when the merge happened. ``window`` cannot be used for
        sync polling (mutually exclusive with ``updated_after``).

        Parameters that name or describe a different company or listing are rejected here with ``400
        invalid-parameter``: ``company``, ``ticker``, ``watchlist``, ``listed``, ``exchange``, ``market``, ``domicile``,
        ``index`` and ``sector``. The path already fixes the company; use ``GET /api/v1/events`` to filter the full
        collection by any of them. ``watchlist=false`` and ``listed`` with any value other than ``true`` remain inert.
        ``mode`` is rejected with ``400 invalid-parameter``; use ``GET
        /api/v1/events?company={company_id}&q={query}&mode=semantic`` to search one company's events by meaning.

        Responses carry an ``ETag`` and ``Cache-Control: private, max-age=0, must-revalidate``; send the ETag back as
        ``If-None-Match`` to receive a ``304 Not Modified``. There is no ``Last-Modified``, so ``If-Modified-Since``
        alone never revalidates. This is the same contract, and the same reason, as ``GET /api/v1/events``. Requests
        carrying ``q`` or ``updated_after`` are not cached and return ``Cache-Control: no-cache, no-store``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Works with ``q`` too; ``q`` is a filter, not a
                separate search mode. When continuing an ``updated_after`` sync, resend the same ``updated_after``
                value.
            fields: Comma-separated list of fields to include in the response. ``id`` is always included.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp, including
                merge/removal tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X".
            event_type: Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from
                ``GET /api/v1/event_types`` and are the only values accepted here. The underscored calendar
                ``event_type`` values used by ``GET /api/v1/calendar_events`` are rejected. A few spellings overlap
                across the two vocabularies (e.g. ``delisting``) while denoting different things. An unrecognized slug
                returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2,
                comma-separated). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Mutually exclusive with
                ``last_article_after``, ``last_article_before``, and ``updated_after``.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id``.
                Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen this feed, and the ``company_ids`` returned on each event, to
                events where this company has a peripheral role (advisor, speaker, or a passing mention) as well.
                Default ``false`` restricts to an active-involvement role (subject, acquirer, target, investor, issuer,
                partner).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company events retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_companies_by_identifier_events(
                identifier,
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                q=q,
                event_type=event_type,
                significance=significance,
                sort=sort,
                country=country,
                category=category,
                sources=sources,
                first_reported_after=first_reported_after,
                first_reported_before=first_reported_before,
                last_article_after=last_article_after,
                last_article_before=last_article_before,
                window=window,
                source_type=source_type,
                content_type=content_type,
                related_to=related_to,
                include_peripheral=include_peripheral,
                if_none_match=if_none_match,
                request_options=request_options,
            ),
        )

    async def get_api_v1_companies_by_identifier_stories(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CompaniesStoriesResponse:
        """Returns stories that mention a specific company, ordered by publication date (newest first).

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``published_after`` and ``published_before`` parameters as ``GET /api/v1/stories``, with identical
        semantics, scoped to this company.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/stories`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value other
        than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this
                for incremental sync: store the timestamp of your last completed sync, then request only newer results
                on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Company stories retrieved successfully

        Raises:
            ApiError: Invalid parameter ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_companies_by_identifier_stories(
                identifier,
                limit=limit,
                cursor=cursor,
                updated_after=updated_after,
                fields=fields,
                q=q,
                sort=sort,
                country=country,
                category=category,
                sources=sources,
                published_after=published_after,
                published_before=published_before,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCompaniesApiWithRawResponse:
        return self._with_raw_response


class CompaniesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_companies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        company: str | None = None,
        ticker: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        is_active: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesResponse, GetApiV1CompaniesErrorBody]:
        """Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use
        ``q`` for full-text search across company names, ranked by relevance, or add ``mode=semantic`` to match ``q`` by
        meaning instead.

        Args:
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``slug``, ``ticker``, ``former_tickers``.
            q: Full-text search query (2-200 characters). Searches company names and aliases. Results are ranked by
                relevance instead of alphabetical order. Mutually exclusive with ``cursor``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by name/ticker text. The match runs over
                each company's name, aliases, country, sector, industry and description, so it answers thematic
                questions a name match cannot ("defense contractors", "companies making battery cells"). Put geography
                in ``market``, ``domicile`` or ``country`` rather than in ``q``. A place name in ``q`` matches company
                names containing it ("Nordic ...", "Swedish ...") ahead of companies that actually do that thing.
                Requires ``q``, is mutually exclusive with ``cursor``, and returns a single ranked page capped by
                ``limit``; ``company``, ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``sector``,
                ``listed``, ``watchlist`` and ``is_active`` remain hard filters applied before the match, not after.
                Each company gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                coverage bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so
                a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a
                distance ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to name matching.
            company: Resolve specific company ``id`` values, comma-separated (maximum 25). This is the batch-resolve
                path for the ``company_id`` and ``company_ids`` values returned by the articles, stories, events and
                calendar endpoints. Look up a whole page of them in one request instead of one ``GET
                /companies/{identifier}`` per company. Every id must resolve, or the request is rejected with ``400``
                naming the unknown ids. Results are returned in name order, not the order requested, so key off each
                row's ``id``. Combined with ``ticker``, the two filters intersect.
            ticker: Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed form
                (e.g. ``VOLV-B.ST``) and resolves former tickers; matching is case-insensitive. Unlike ``q`` this is an
                exact filter, so it returns no near-matches and supports cursor pagination. Every ticker must resolve,
                or the request is rejected with ``400`` naming the unknown values. Combined with ``company``, the two
                filters intersect. A ticker shared by more than one issuer resolves to every matching company, so a
                batch can return more rows than the number of tickers sent. ``GET /companies/{identifier}`` tie-breaks
                such a ticker to a single company, this filter does not.
            country: Legal domicile, ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for multiple
                (e.g. ``SE,NO``). Case-insensitive. Synonym for ``domicile`` on this endpoint, kept for backward
                compatibility. If both ``country`` and ``domicile`` are sent, they intersect.
            market: Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2,
                comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight and NGM.
                Distinct from ``country``/``domicile`` (legal domicile). Includes foreign-domiciled but locally-listed
                issuers.
            domicile: Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated).
                The canonical cross-surface name for what ``country`` already means on this endpoint; reaches unlisted
                companies and excludes foreign-domiciled but locally-listed issuers. Use ``market`` for market-coverage
                questions.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XOSL,XCSE``). Only
                companies with an active listing on the exchange match.
            sector: Filter by industry sector (e.g. ``Financials``, ``Industrials``, ``Information Technology``).
            listed: When ``true``, only return companies with at least one active stock exchange listing.
            watchlist: When ``true``, only return companies in the authenticated user's watchlist. Requires
                ``read:watchlist`` scope.
            is_active: Filter by active status. When ``true``, only return active companies. When ``false``, only return
                inactive companies.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("q", q),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("company", company),
                param[str | None]("ticker", ticker),
                param[str | None]("country", country),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("exchange", exchange),
                param[str | None]("sector", sector),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[str | None]("is_active", is_active),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompaniesResponse],
            error_mapper=get_api_v1_companies_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_companies_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesResponse1, GetApiV1CompaniesByIdentifierErrorBody]:
        """Returns detailed information about a single company, including description, sector, relationships, and stock
        listings. Look up by company ID (e.g. ``comp_apple123``) or ticker symbol (e.g. ``AAPL``, ``VOLV-B``). Lookup
        also accepts the full ticker including exchange suffix (e.g. ``VOLV-B.ST``).

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompaniesResponse1],
            error_mapper=get_api_v1_companies_by_identifier_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_companies_by_identifier_articles(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesArticlesResponse, GetApiV1CompaniesByIdentifierArticlesErrorBody]:
        """Returns articles where the company is a principal association (subject, partner, investor, or competitor),
        ordered by publication date (newest first). An article where this company is only the source, an advisor, or a
        passing mention is excluded.

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``source_type``, ``content_type``, ``published_after`` and ``published_before`` parameters as ``GET
        /api/v1/articles``, with identical semantics, scoped to this company. ``primary_only=true`` narrows further
        within that principal set, to only articles where this company is the primary subject.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/articles`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value
        other than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only this company's articles updated after this timestamp. Use
                this for incremental sync: store the timestamp of your last completed sync, then request only newer
                results on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where this
                company is the primary subject.
            include_peripheral: When ``true``, widen this feed back to articles where the company is only a peripheral
                association (its source, an advisor, or a passing mention), which are otherwise excluded. Default
                ``false`` (principal-only). ``primary_only`` still keeps the primary-subject restriction even when
                peripheral is requested.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/articles"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("source_type", source_type),
                param[str | None]("content_type", content_type),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
                param[bool | None]("primary_only", primary_only),
                param[bool | None]("include_peripheral", include_peripheral),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompaniesArticlesResponse],
            error_mapper=get_api_v1_companies_by_identifier_articles_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_companies_by_identifier_calendar_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        status: Status1OrStr | None = None,
        event_type: EventType1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesCalendarEventsResponse, GetApiV1CompaniesByIdentifierCalendarEventsErrorBody]:
        """Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and
        more), ordered by ``scheduled_at`` ascending. This is the same contract as ``GET /api/v1/calendar_events``,
        scoped to a single company by the path.

        ## Default window By default only upcoming events are returned; ``scheduled_after``/``scheduled_before`` or
        ``updated_after`` lift that floor, the same way they do on the flat resource.

        ## Plan availability Not available on plans with a capped calendar. Use ``GET /api/v1/calendar_events`` for the
        upcoming-events preview instead.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for
                incremental sync: store the timestamp of your last completed sync and pass it on the next request.
                Results are ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor``
                before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only
                floor, so past events with newer updates are included.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/calendar_events"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[Status1OrStr | None]("status", status),
                param[EventType1OrStr | None]("event_type", event_type),
                param[str | None]("scheduled_after", scheduled_after),
                param[str | None]("scheduled_before", scheduled_before),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompaniesCalendarEventsResponse],
            error_mapper=get_api_v1_companies_by_identifier_calendar_events_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_companies_by_identifier_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        sort: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesEventsResponse, GetApiV1CompaniesByIdentifierEventsErrorBody]:
        """Returns Events this company participates in, newest first. This is the same contract as ``GET
        /api/v1/events``, scoped to a single company by the path. Plan gating, ordering, ``updated_after`` sync
        (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its
        documentation for the full detail.

        A tombstone respects the same event-grain filters as the flat resource, including
        ``last_article_after``/``before``. A merged event's ``last_article_at`` freezes at merge time, so those filter a
        tombstone against that frozen value rather than against when the merge happened. ``window`` cannot be used for
        sync polling (mutually exclusive with ``updated_after``).

        Parameters that name or describe a different company or listing are rejected here with ``400
        invalid-parameter``: ``company``, ``ticker``, ``watchlist``, ``listed``, ``exchange``, ``market``, ``domicile``,
        ``index`` and ``sector``. The path already fixes the company; use ``GET /api/v1/events`` to filter the full
        collection by any of them. ``watchlist=false`` and ``listed`` with any value other than ``true`` remain inert.
        ``mode`` is rejected with ``400 invalid-parameter``; use ``GET
        /api/v1/events?company={company_id}&q={query}&mode=semantic`` to search one company's events by meaning.

        Responses carry an ``ETag`` and ``Cache-Control: private, max-age=0, must-revalidate``; send the ETag back as
        ``If-None-Match`` to receive a ``304 Not Modified``. There is no ``Last-Modified``, so ``If-Modified-Since``
        alone never revalidates. This is the same contract, and the same reason, as ``GET /api/v1/events``. Requests
        carrying ``q`` or ``updated_after`` are not cached and return ``Cache-Control: no-cache, no-store``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Works with ``q`` too; ``q`` is a filter, not a
                separate search mode. When continuing an ``updated_after`` sync, resend the same ``updated_after``
                value.
            fields: Comma-separated list of fields to include in the response. ``id`` is always included.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp, including
                merge/removal tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X".
            event_type: Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from
                ``GET /api/v1/event_types`` and are the only values accepted here. The underscored calendar
                ``event_type`` values used by ``GET /api/v1/calendar_events`` are rejected. A few spellings overlap
                across the two vocabularies (e.g. ``delisting``) while denoting different things. An unrecognized slug
                returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2,
                comma-separated). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Mutually exclusive with
                ``last_article_after``, ``last_article_before``, and ``updated_after``.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id``.
                Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen this feed, and the ``company_ids`` returned on each event, to
                events where this company has a peripheral role (advisor, speaker, or a passing mention) as well.
                Default ``false`` restricts to an active-involvement role (subject, acquirer, target, investor, issuer,
                partner).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/events"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[str | None]("event_type", event_type),
                param[str | None]("significance", significance),
                param[str | None]("sort", sort),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("first_reported_after", first_reported_after),
                param[str | None]("first_reported_before", first_reported_before),
                param[str | None]("last_article_after", last_article_after),
                param[str | None]("last_article_before", last_article_before),
                param[str | None]("window", window),
                param[str | None]("source_type", source_type),
                param[str | None]("content_type", content_type),
                param[str | None]("related_to", related_to),
                param[bool | None]("include_peripheral", include_peripheral),
            ],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompaniesEventsResponse],
            error_mapper=get_api_v1_companies_by_identifier_events_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_companies_by_identifier_stories(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesStoriesResponse, GetApiV1CompaniesByIdentifierStoriesErrorBody]:
        """Returns stories that mention a specific company, ordered by publication date (newest first).

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``published_after`` and ``published_before`` parameters as ``GET /api/v1/stories``, with identical
        semantics, scoped to this company.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/stories`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value other
        than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this
                for incremental sync: store the timestamp of your last completed sync, then request only newer results
                on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/stories"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("updated_after", updated_after),
                param[str | None]("fields", fields),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CompaniesStoriesResponse],
            error_mapper=get_api_v1_companies_by_identifier_stories_error_mapper,
            request_options=request_options,
        )


class AsyncCompaniesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_companies(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        mode: ModeOrStr | None = None,
        company: str | None = None,
        ticker: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        sector: str | None = None,
        listed: str | None = None,
        watchlist: str | None = None,
        is_active: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesResponse, GetApiV1CompaniesErrorBody]:
        """Returns a paginated list of companies covered in Nordic financial news, ordered alphabetically by name. Use
        ``q`` for full-text search across company names, ranked by relevance, or add ``mode=semantic`` to match ``q`` by
        meaning instead.

        Args:
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. Mutually
                exclusive with ``q``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``name``,
                ``slug``, ``ticker``, ``former_tickers``.
            q: Full-text search query (2-200 characters). Searches company names and aliases. Results are ranked by
                relevance instead of alphabetical order. Mutually exclusive with ``cursor``.
            mode: Set to ``semantic`` to match ``q`` by meaning rather than by name/ticker text. The match runs over
                each company's name, aliases, country, sector, industry and description, so it answers thematic
                questions a name match cannot ("defense contractors", "companies making battery cells"). Put geography
                in ``market``, ``domicile`` or ``country`` rather than in ``q``. A place name in ``q`` matches company
                names containing it ("Nordic ...", "Swedish ...") ahead of companies that actually do that thing.
                Requires ``q``, is mutually exclusive with ``cursor``, and returns a single ranked page capped by
                ``limit``; ``company``, ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``sector``,
                ``listed``, ``watchlist`` and ``is_active`` remain hard filters applied before the match, not after.
                Each company gains a ``distance`` (raw cosine, lower is closer, rounded to 4dp). Compare it only within
                one response, never across responses: the scale is model-dependent. Ranking also blends in a small
                coverage bonus that ``distance`` does not reflect. A server-side relevance floor drops weak matches, so
                a page is frequently shorter than ``limit`` and can be empty. Raising ``limit`` does not recover floored
                rows. The response ``pagination`` object carries ``count`` only. There is no ``next_cursor``, since a
                distance ranking cannot be cursor-paginated, and the response is uncacheable (``Cache-Control: no-cache,
                no-store``, no ``ETag``). If the query cannot be embedded the request returns ``503`` rather than
                silently falling back to name matching.
            company: Resolve specific company ``id`` values, comma-separated (maximum 25). This is the batch-resolve
                path for the ``company_id`` and ``company_ids`` values returned by the articles, stories, events and
                calendar endpoints. Look up a whole page of them in one request instead of one ``GET
                /companies/{identifier}`` per company. Every id must resolve, or the request is rejected with ``400``
                naming the unknown ids. Results are returned in name order, not the order requested, so key off each
                row's ``id``. Combined with ``ticker``, the two filters intersect.
            ticker: Resolve specific stock tickers, comma-separated (maximum 25). Accepts the exchange-suffixed form
                (e.g. ``VOLV-B.ST``) and resolves former tickers; matching is case-insensitive. Unlike ``q`` this is an
                exact filter, so it returns no near-matches and supports cursor pagination. Every ticker must resolve,
                or the request is rejected with ``400`` naming the unknown values. Combined with ``company``, the two
                filters intersect. A ticker shared by more than one issuer resolves to every matching company, so a
                batch can return more rows than the number of tickers sent. ``GET /companies/{identifier}`` tie-breaks
                such a ticker to a single company, this filter does not.
            country: Legal domicile, ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for multiple
                (e.g. ``SE,NO``). Case-insensitive. Synonym for ``domicile`` on this endpoint, kept for backward
                compatibility. If both ``country`` and ``domicile`` are sent, they intersect.
            market: Filter to companies with an active equity listing in these countries' exchanges (ISO 3166-1 alpha-2,
                comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight and NGM.
                Distinct from ``country``/``domicile`` (legal domicile). Includes foreign-domiciled but locally-listed
                issuers.
            domicile: Filter to companies legally domiciled in these countries (ISO 3166-1 alpha-2, comma-separated).
                The canonical cross-surface name for what ``country`` already means on this endpoint; reaches unlisted
                companies and excludes foreign-domiciled but locally-listed issuers. Use ``market`` for market-coverage
                questions.
            exchange: Filter by exchange MIC code, comma-separated for multiple (e.g. ``XSTO``, ``XOSL,XCSE``). Only
                companies with an active listing on the exchange match.
            sector: Filter by industry sector (e.g. ``Financials``, ``Industrials``, ``Information Technology``).
            listed: When ``true``, only return companies with at least one active stock exchange listing.
            watchlist: When ``true``, only return companies in the authenticated user's watchlist. Requires
                ``read:watchlist`` scope.
            is_active: Filter by active status. When ``true``, only return active companies. When ``false``, only return
                inactive companies.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("q", q),
                param[ModeOrStr | None]("mode", mode),
                param[str | None]("company", company),
                param[str | None]("ticker", ticker),
                param[str | None]("country", country),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("exchange", exchange),
                param[str | None]("sector", sector),
                param[str | None]("listed", listed),
                param[str | None]("watchlist", watchlist),
                param[str | None]("is_active", is_active),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompaniesResponse],
            error_mapper=get_api_v1_companies_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_companies_by_identifier(
        self,
        identifier: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesResponse1, GetApiV1CompaniesByIdentifierErrorBody]:
        """Returns detailed information about a single company, including description, sector, relationships, and stock
        listings. Look up by company ID (e.g. ``comp_apple123``) or ticker symbol (e.g. ``AAPL``, ``VOLV-B``). Lookup
        also accepts the full ticker including exchange suffix (e.g. ``VOLV-B.ST``).

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}"),
            path_params=[param[str]("identifier", identifier)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompaniesResponse1],
            error_mapper=get_api_v1_companies_by_identifier_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_companies_by_identifier_articles(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        primary_only: bool | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesArticlesResponse, GetApiV1CompaniesByIdentifierArticlesErrorBody]:
        """Returns articles where the company is a principal association (subject, partner, investor, or competitor),
        ordered by publication date (newest first). An article where this company is only the source, an advisor, or a
        passing mention is excluded.

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``source_type``, ``content_type``, ``published_after`` and ``published_before`` parameters as ``GET
        /api/v1/articles``, with identical semantics, scoped to this company. ``primary_only=true`` narrows further
        within that principal set, to only articles where this company is the primary subject.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/articles`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value
        other than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of articles to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. Available fields:
                ``id``, ``title``, ``article_url``, ``published_at``, ``updated_at``, ``content_type``, ``source``,
                ``company_ids``, ``country``, ``category``.
            updated_after: ISO 8601 datetime. Returns only this company's articles updated after this timestamp. Use
                this for incremental sync: store the timestamp of your last completed sync, then request only newer
                results on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Disabled sources resolve to empty results.
            source_type: Filter by source type, comma-separated. Valid values: ``news_publication``, ``wire_service``,
                ``press_release``, ``government``, ``trade_publication``, ``blog``, ``stock_exchange``, ``research``.
                Articles from disabled sources are excluded. An unrecognized value returns 400 naming the bad value(s).
            content_type: Filter by article content type, comma-separated. Valid values: ``news``, ``analysis``,
                ``press_release``, ``market_commentary``, ``market_news``, ``trading_halt``, ``trading_event``,
                ``other``. ``GET /api/v1/meta`` lists them as ``content_types``. An unrecognized value returns 400
                naming the bad value(s).
            published_after: ISO 8601 datetime. Returns articles published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns articles published before this timestamp.
            primary_only: When ``true``, narrows further within the already-principal match, to only articles where this
                company is the primary subject.
            include_peripheral: When ``true``, widen this feed back to articles where the company is only a peripheral
                association (its source, an advisor, or a passing mention), which are otherwise excluded. Default
                ``false`` (principal-only). ``primary_only`` still keeps the primary-subject restriction even when
                peripheral is requested.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/articles"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("source_type", source_type),
                param[str | None]("content_type", content_type),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
                param[bool | None]("primary_only", primary_only),
                param[bool | None]("include_peripheral", include_peripheral),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompaniesArticlesResponse],
            error_mapper=get_api_v1_companies_by_identifier_articles_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_companies_by_identifier_calendar_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        status: Status1OrStr | None = None,
        event_type: EventType1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesCalendarEventsResponse, GetApiV1CompaniesByIdentifierCalendarEventsErrorBody]:
        """Returns upcoming scheduled calendar events for a single company (earnings reports, AGMs/EGMs, dividends, and
        more), ordered by ``scheduled_at`` ascending. This is the same contract as ``GET /api/v1/calendar_events``,
        scoped to a single company by the path.

        ## Default window By default only upcoming events are returned; ``scheduled_after``/``scheduled_before`` or
        ``updated_after`` lift that floor, the same way they do on the flat resource.

        ## Plan availability Not available on plans with a capped calendar. Use ``GET /api/v1/calendar_events`` for the
        upcoming-events preview instead.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp. Use for
                incremental sync: store the timestamp of your last completed sync and pass it on the next request.
                Results are ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor``
                before advancing your stored timestamp. Passing this parameter also disables the default upcoming-only
                floor, so past events with newer updates are included.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/calendar_events"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[Status1OrStr | None]("status", status),
                param[EventType1OrStr | None]("event_type", event_type),
                param[str | None]("scheduled_after", scheduled_after),
                param[str | None]("scheduled_before", scheduled_before),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompaniesCalendarEventsResponse],
            error_mapper=get_api_v1_companies_by_identifier_calendar_events_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_companies_by_identifier_events(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        q: str | None = None,
        event_type: str | None = None,
        significance: str | None = None,
        sort: str | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        first_reported_after: str | None = None,
        first_reported_before: str | None = None,
        last_article_after: str | None = None,
        last_article_before: str | None = None,
        window: str | None = None,
        source_type: str | None = None,
        content_type: str | None = None,
        related_to: str | None = None,
        include_peripheral: bool | None = None,
        if_none_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesEventsResponse, GetApiV1CompaniesByIdentifierEventsErrorBody]:
        """Returns Events this company participates in, newest first. This is the same contract as ``GET
        /api/v1/events``, scoped to a single company by the path. Plan gating, ordering, ``updated_after`` sync
        (including merge/removal tombstones for this company), and cursor semantics all match the flat resource; see its
        documentation for the full detail.

        A tombstone respects the same event-grain filters as the flat resource, including
        ``last_article_after``/``before``. A merged event's ``last_article_at`` freezes at merge time, so those filter a
        tombstone against that frozen value rather than against when the merge happened. ``window`` cannot be used for
        sync polling (mutually exclusive with ``updated_after``).

        Parameters that name or describe a different company or listing are rejected here with ``400
        invalid-parameter``: ``company``, ``ticker``, ``watchlist``, ``listed``, ``exchange``, ``market``, ``domicile``,
        ``index`` and ``sector``. The path already fixes the company; use ``GET /api/v1/events`` to filter the full
        collection by any of them. ``watchlist=false`` and ``listed`` with any value other than ``true`` remain inert.
        ``mode`` is rejected with ``400 invalid-parameter``; use ``GET
        /api/v1/events?company={company_id}&q={query}&mode=semantic`` to search one company's events by meaning.

        Responses carry an ``ETag`` and ``Cache-Control: private, max-age=0, must-revalidate``; send the ETag back as
        ``If-None-Match`` to receive a ``304 Not Modified``. There is no ``Last-Modified``, so ``If-Modified-Since``
        alone never revalidates. This is the same contract, and the same reason, as ``GET /api/v1/events``. Requests
        carrying ``q`` or ``updated_after`` are not cached and return ``Cache-Control: no-cache, no-store``.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Works with ``q`` too; ``q`` is a filter, not a
                separate search mode. When continuing an ``updated_after`` sync, resend the same ``updated_after``
                value.
            fields: Comma-separated list of fields to include in the response. ``id`` is always included.
            updated_after: ISO 8601 datetime. Returns only this company's events updated after this timestamp, including
                merge/removal tombstones. Use for incremental sync.
            q: Full-text filter over the event's own title and summary as well as its live member articles' indexed
                content (title, summary, key points, plus tagged company names and key facts), so an event can match on
                a company its coverage only tags. Matches stay in the default feed order (most recently reported first)
                and are cursor-paginated like any other request; combine with ``window``/``last_article_after`` for
                "latest on X".
            event_type: Filter by event type slug, comma-separated. These are Events taxonomy slugs (hyphenated) from
                ``GET /api/v1/event_types`` and are the only values accepted here. The underscored calendar
                ``event_type`` values used by ``GET /api/v1/calendar_events`` are rejected. A few spellings overlap
                across the two vocabularies (e.g. ``delisting``) while denoting different things. An unrecognized slug
                returns 400 naming the bad slug(s).
            significance: Editorial importance, the feed's materiality threshold, comma-separated (e.g.
                ``notable,routine``). Valid values: ``notable`` (material, front-page-worthy events), ``routine``
                (ledger records: routine filings, scheduled disclosures), ``commentary`` (opinion/analysis pieces). Use
                ``significance=notable`` to restrict the feed to material events. An unrecognized value returns 400
                naming the bad value(s).
            sort: Sort order. ``latest`` (default) sorts most recently reported first, the unfiltered feed order.
                ``significance`` groups events into 3 coarse editorial tiers (``notable``, then ``routine``, then
                ``commentary``), most recently reported first within each tier; expect large ties within a tier. A
                mid-walk ``routine``→``notable`` escalation may be skipped, since the ordering is a best-effort
                snapshot. For a broad importance filter, prefer ``significance=notable`` with the default sort; page 1
                is identical. Mutually exclusive with ``updated_after`` (an unrecognized value, or either sort value
                combined with ``updated_after``, returns 400).
            country: Filter to events with a live member article from this country (ISO 3166-1 alpha-2,
                comma-separated). Applied at the article grain, so sync tombstones do not respect it.
            category: Filter to events with a live member article in any of these categories, by their ``id``
                (comma-separated; unknown ids are ignored). Applied at the article grain, so sync tombstones do not
                respect it.
            sources: Filter to events with a live member article from these sources, by their ``id`` (comma-separated,
                max 25). Applied at the article grain, so sync tombstones do not respect it.
            first_reported_after: ISO 8601 datetime. Only events first reported at or after this time.
            first_reported_before: ISO 8601 datetime. Only events first reported before this time.
            last_article_after: ISO 8601 datetime. Only events whose most recent activity (``last_article_at``, or
                ``first_reported_at`` when that is null) is at or after this time. Mutually exclusive with ``window``.
            last_article_before: ISO 8601 datetime. Only events whose most recent activity is before this time. Mutually
                exclusive with ``window``.
            window: Relative shorthand for ``last_article_after``, e.g. ``8h``, ``24h``, ``7d`` (hours or days only, max
                365d equivalent). Evaluated per request against the server clock. Mutually exclusive with
                ``last_article_after``, ``last_article_before``, and ``updated_after``.
            source_type: Filter to events with a live member article from this source type, comma-separated. Valid
                values: ``news_publication``, ``wire_service``, ``press_release``, ``government``,
                ``trade_publication``, ``blog``, ``stock_exchange``, ``research``. Articles from disabled sources are
                excluded. Applied at the article grain, so sync tombstones do not respect it. An unrecognized value
                returns 400 naming the bad value(s).
            content_type: Filter to events with a live member article of this content type, comma-separated. Valid
                values: ``news``, ``analysis``, ``press_release``, ``market_commentary``, ``market_news``,
                ``trading_halt``, ``trading_event``, ``other``. Applied at the article grain, so sync tombstones do not
                respect it. An unrecognized value returns 400 naming the bad value(s). Content type is an AI-assigned
                label per article. To find events with a member article from a primary disclosure source, filter on
                ``source_type`` (``wire_service``, ``stock_exchange``, ``press_release``, ``government``) instead.
            related_to: Filter to commentary events that comment on or react to the factual event with this ``id``.
                Unresolvable ``id`` returns an empty result set, not an error.
            include_peripheral: When ``true``, widen this feed, and the ``company_ids`` returned on each event, to
                events where this company has a peripheral role (advisor, speaker, or a passing mention) as well.
                Default ``false`` restricts to an active-involvement role (subject, acquirer, target, investor, issuer,
                partner).
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/events"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("q", q),
                param[str | None]("event_type", event_type),
                param[str | None]("significance", significance),
                param[str | None]("sort", sort),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("first_reported_after", first_reported_after),
                param[str | None]("first_reported_before", first_reported_before),
                param[str | None]("last_article_after", last_article_after),
                param[str | None]("last_article_before", last_article_before),
                param[str | None]("window", window),
                param[str | None]("source_type", source_type),
                param[str | None]("content_type", content_type),
                param[str | None]("related_to", related_to),
                param[bool | None]("include_peripheral", include_peripheral),
            ],
            headers=[param[str | None]("If-None-Match", if_none_match)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompaniesEventsResponse],
            error_mapper=get_api_v1_companies_by_identifier_events_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_companies_by_identifier_stories(
        self,
        identifier: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        updated_after: str | None = None,
        fields: str | None = None,
        q: str | None = None,
        sort: SortOrStr | None = None,
        country: str | None = None,
        category: str | None = None,
        sources: str | None = None,
        published_after: str | None = None,
        published_before: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CompaniesStoriesResponse, GetApiV1CompaniesByIdentifierStoriesErrorBody]:
        """Returns stories that mention a specific company, ordered by publication date (newest first).

        ## Parameters Accepts the same ``q``, ``sort``, ``fields``, ``updated_after``, ``country``, ``category``,
        ``sources``, ``published_after`` and ``published_before`` parameters as ``GET /api/v1/stories``, with identical
        semantics, scoped to this company.

        ## Rejected parameters ``ticker``, ``company``, ``watchlist``, ``listed``, ``exchange``, ``market``,
        ``domicile``, ``index`` and ``sector`` are rejected (400). The path already fixes the company; use ``GET
        /api/v1/stories`` to filter the full collection by them (``watchlist=false`` and ``listed`` with any value other
        than ``true`` are ignored, as on the flat resource).

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. The ``ETag`` reflects the response as served, not only record timestamps: it changes when plan
        limits alter the visible set, and when a story's visible article set changes, so a changed ``ETag`` does not
        necessarily mean a record was updated.

        Args:
            identifier: Company ID or ticker symbol. Accepts the exchange-suffixed form (e.g. ``VOLV-B.ST``); former
                tickers resolve too. When a ticker is shared by more than one company, the company with a listing on a
                Nordic exchange is returned, then the one with an active listing, then the most recently listed. Use the
                company ID for an unambiguous lookup.
            limit: Number of stories to return per page (default 25, max 100).
            cursor: Opaque pagination cursor from a previous response. Mutually exclusive with ``q`` unless
                ``sort=latest`` is also given.
            updated_after: ISO 8601 datetime. Returns only this company's stories updated after this timestamp. Use this
                for incremental sync: store the timestamp of your last completed sync, then request only newer results
                on each poll. Results are ordered by ``updated_at`` ascending and are cursor-paginated. Follow
                ``pagination.next_cursor``, resending the same ``updated_after`` value, until it is null. Only advance
                your stored timestamp once you have drained every page. Mutually exclusive with ``sort=latest`` (with or
                without ``q``). An ``updated_after`` walk is always ordered by ``updated_at``.
            fields: Comma-separated list of fields to include in the response. Available fields: ``id``, ``title``,
                ``summary``, ``published_at``, ``updated_at``, ``article_count``, ``article_ids``, ``country``,
                ``category``, ``company_ids``.
            q: Full-text search query (2-200 characters). By default, results are ranked by relevance instead of
                publication date, as a single page with no cursor. Mutually exclusive with ``cursor`` unless
                ``sort=latest`` is also given. Disables caching.
            sort: Result order for ``q``. ``relevance`` (default) is a single relevance-ranked page with no cursor; it
                requires ``q``, and returns 400 without one. ``latest`` turns ``q`` into a match filter under the
                endpoint's normal newest-first order (``published_at`` descending) and the response is cursor-paginated
                like any other request; without ``q`` it is an accepted no-op (that's already the default order).
                Mutually exclusive with ``updated_after``.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``NO``, ``DK``). Comma-separated for
                multiple (e.g. ``SE,NO``). Case-insensitive.
            category: Filter by category ``id`` (from ``GET /api/v1/categories``). Comma-separated for multiple (e.g.
                ``cat_earnings1,cat_mna000001``); unknown ids are ignored.
            sources: Comma-separated list of source IDs (max 25). Use ``GET /api/v1/sources`` to discover source IDs.
                Also accepts array form (``sources[]=id1&sources[]=id2``). Returns stories with at least one article
                from a listed source.
            published_after: ISO 8601 datetime. Returns stories published on or after this timestamp.
            published_before: ISO 8601 datetime. Returns stories published before this timestamp.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/companies/{identifier}/stories"),
            path_params=[param[str]("identifier", identifier)],
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("updated_after", updated_after),
                param[str | None]("fields", fields),
                param[str | None]("q", q),
                param[SortOrStr | None]("sort", sort),
                param[str | None]("country", country),
                param[str | None]("category", category),
                param[str | None]("sources", sources),
                param[str | None]("published_after", published_after),
                param[str | None]("published_before", published_before),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CompaniesStoriesResponse],
            error_mapper=get_api_v1_companies_by_identifier_stories_error_mapper,
            request_options=request_options,
        )
