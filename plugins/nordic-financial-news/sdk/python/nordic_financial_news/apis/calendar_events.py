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
from ..errors.get_api_v1_calendar_events_by_id_error import (
    GetApiV1CalendarEventsByIdErrorBody,
    get_api_v1_calendar_events_by_id_error_mapper,
)
from ..errors.get_api_v1_calendar_events_error import (
    GetApiV1CalendarEventsErrorBody,
    get_api_v1_calendar_events_error_mapper,
)
from ..models.api_v1_calendar_events_response import ApiV1CalendarEventsResponse
from ..models.api_v1_calendar_events_response1 import ApiV1CalendarEventsResponse1
from ..models.enums.event_type1 import EventType1OrStr
from ..models.enums.status1 import Status1OrStr
from ..server.server import Server


class CalendarEvents:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CalendarEventsWithRawResponse(client, server, auth)

    def get_api_v1_calendar_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        event_type: EventType1OrStr | None = None,
        status: Status1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        watchlist: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CalendarEventsResponse:
        """Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.),
        earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&A
        milestones (announcements, offer deadlines, completions).

        Each event is tied to a single company and is sorted by ``scheduled_at`` ascending (soonest first).
        ``scheduled_at`` is always in UTC; for local-time display use the ``local_time`` field (``scheduled_at``
        rendered in the issuer's ``timezone``, ISO 8601 with offset). Prefer ``local_time`` for the calendar date. A
        day-precision event is stored at local midnight, so its UTC ``scheduled_at`` falls on the previous day for
        ahead-of-UTC (Nordic) zones. ``title`` and ``description`` are always English regardless of the source-article
        language.

        ## Dividends Each dividend row carries a nested ``dividend`` object with ``ex_date``, ``record_date``,
        ``payment_date``, ``declaration_date``, and ``kind``. ``scheduled_at`` follows the priority **ex-date >
        record-date > payment-date**, whichever is explicitly stated, in that order. ``dividend`` is ``null`` for
        non-dividend events.

        ## Default window By default only upcoming events are returned, from today onward by the issuer's local date (so
        events scheduled for today stay listed throughout the day). Pass ``scheduled_after`` or ``scheduled_before`` to
        query a specific window. This also surfaces past events, which carry ``status: published`` (events flip from
        ``scheduled`` to ``published`` ~2 days after their date). An ``updated_after`` sync walk also lifts this floor,
        since sync must cover past events too.

        ## Status List endpoints return ``scheduled`` + ``published`` events and **exclude ``cancelled``** by default.
        Pass the ``status`` parameter to filter (``status=cancelled`` to retrieve cancellations, or
        ``scheduled``/``published`` to narrow). Discarded events are never returned. Note: a ``scheduled → cancelled``
        transition is *not* surfaced by default ``updated_after`` polling. To track cancellations, poll with
        ``status=cancelled`` or subscribe to cancellation alerts.

        ## Filtering Compose ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, and
        ``event_type`` to narrow the result set. All filters are intersected.

        ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch only events
        that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated: follow
        ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar.
        ``updated_after`` returns 403 there, because the capped window is recomputed per request and a change feed over
        it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an
        old watermark returns history rather than only upcoming events. Updates to past events that occurred before your
        currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.

        ## Pagination List responses include ``pagination.next_cursor`` when more pages are available. Pass it back as
        the ``cursor`` parameter on the next request. Cursors are opaque. Do not parse them.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. Otherwise the ``ETag`` reflects the response as served, not only record timestamps: it changes when
        plan limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental
                sync: store the timestamp of your last completed sync and pass it on the next request. Results are
                ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor`` before
                advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor,
                so past events with newer updates are included.
            ticker: Filter by company stock ticker (e.g. ``VOLV-B``), comma-separated for several (matches any of them).
                Also accepts exchange-suffixed form (e.g. ``VOLV-B.ST``); former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. A company outside the calendar's Nordic coverage resolves but returns no events.
                Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. A company
                outside the calendar's Nordic coverage resolves but returns no events. Combined with ``ticker``, the two
                filters intersect.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``DK``, ``NO``, ``FI``, ``IS``).
                Comma-separated for multiple (e.g. ``SE,NO``). Case-insensitive. This is the event's country: the
                issuer's, with source-country fallback.
            market: Filter to events for an issuer with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the event's own country) and ``domicile`` (legal domicile). Includes
                foreign-domiciled but locally-listed issuers.
            domicile: Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs, or ``XSTO,XCSE``). Only events for an issuer with an active listing on the exchange
                match. Case-insensitive.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns events
                only for companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Must exactly match one of the standard sector names: ``Communication
                Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health
                Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            watchlist: Restricts to events for companies in a single watchlist, identified by its ``id`` (from the List
                Watchlists endpoint). An unknown id returns no events. Requires ``read:watchlist`` scope.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Calendar events retrieved successfully

        Raises:
            ApiError: Invalid parameter Missing or invalid API key Incremental sync is not available on this plan
                ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_calendar_events(
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                ticker=ticker,
                company=company,
                country=country,
                market=market,
                domicile=domicile,
                exchange=exchange,
                index=index,
                sector=sector,
                event_type=event_type,
                status=status,
                scheduled_after=scheduled_after,
                scheduled_before=scheduled_before,
                watchlist=watchlist,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    def get_api_v1_calendar_events_by_id(
        self,
        id_: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1CalendarEventsResponse1:
        """Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.

        On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns
        403.

        Responses are cached with ``ETag`` and ``Last-Modified`` headers and a ``private, max-age=300``
        ``Cache-Control``; clients can send ``If-None-Match`` or ``If-Modified-Since`` to receive a ``304 Not
        Modified``.

        Args:
            id_: The calendar event ID, as returned in the ``id`` field of list responses.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Calendar event retrieved

        Raises:
            ApiError: Missing or invalid API key Calendar event not found Calendar event is outside this plan's calendar
                window ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_calendar_events_by_id(
                id_, if_none_match=if_none_match, if_modified_since=if_modified_since, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CalendarEventsWithRawResponse:
        return self._with_raw_response


class AsyncCalendarEvents:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCalendarEventsWithRawResponse(client, server, auth)

    async def get_api_v1_calendar_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        event_type: EventType1OrStr | None = None,
        status: Status1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        watchlist: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CalendarEventsResponse:
        """Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.),
        earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&A
        milestones (announcements, offer deadlines, completions).

        Each event is tied to a single company and is sorted by ``scheduled_at`` ascending (soonest first).
        ``scheduled_at`` is always in UTC; for local-time display use the ``local_time`` field (``scheduled_at``
        rendered in the issuer's ``timezone``, ISO 8601 with offset). Prefer ``local_time`` for the calendar date. A
        day-precision event is stored at local midnight, so its UTC ``scheduled_at`` falls on the previous day for
        ahead-of-UTC (Nordic) zones. ``title`` and ``description`` are always English regardless of the source-article
        language.

        ## Dividends Each dividend row carries a nested ``dividend`` object with ``ex_date``, ``record_date``,
        ``payment_date``, ``declaration_date``, and ``kind``. ``scheduled_at`` follows the priority **ex-date >
        record-date > payment-date**, whichever is explicitly stated, in that order. ``dividend`` is ``null`` for
        non-dividend events.

        ## Default window By default only upcoming events are returned, from today onward by the issuer's local date (so
        events scheduled for today stay listed throughout the day). Pass ``scheduled_after`` or ``scheduled_before`` to
        query a specific window. This also surfaces past events, which carry ``status: published`` (events flip from
        ``scheduled`` to ``published`` ~2 days after their date). An ``updated_after`` sync walk also lifts this floor,
        since sync must cover past events too.

        ## Status List endpoints return ``scheduled`` + ``published`` events and **exclude ``cancelled``** by default.
        Pass the ``status`` parameter to filter (``status=cancelled`` to retrieve cancellations, or
        ``scheduled``/``published`` to narrow). Discarded events are never returned. Note: a ``scheduled → cancelled``
        transition is *not* surfaced by default ``updated_after`` polling. To track cancellations, poll with
        ``status=cancelled`` or subscribe to cancellation alerts.

        ## Filtering Compose ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, and
        ``event_type`` to narrow the result set. All filters are intersected.

        ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch only events
        that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated: follow
        ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar.
        ``updated_after`` returns 403 there, because the capped window is recomputed per request and a change feed over
        it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an
        old watermark returns history rather than only upcoming events. Updates to past events that occurred before your
        currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.

        ## Pagination List responses include ``pagination.next_cursor`` when more pages are available. Pass it back as
        the ``cursor`` parameter on the next request. Cursors are opaque. Do not parse them.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. Otherwise the ``ETag`` reflects the response as served, not only record timestamps: it changes when
        plan limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental
                sync: store the timestamp of your last completed sync and pass it on the next request. Results are
                ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor`` before
                advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor,
                so past events with newer updates are included.
            ticker: Filter by company stock ticker (e.g. ``VOLV-B``), comma-separated for several (matches any of them).
                Also accepts exchange-suffixed form (e.g. ``VOLV-B.ST``); former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. A company outside the calendar's Nordic coverage resolves but returns no events.
                Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. A company
                outside the calendar's Nordic coverage resolves but returns no events. Combined with ``ticker``, the two
                filters intersect.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``DK``, ``NO``, ``FI``, ``IS``).
                Comma-separated for multiple (e.g. ``SE,NO``). Case-insensitive. This is the event's country: the
                issuer's, with source-country fallback.
            market: Filter to events for an issuer with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the event's own country) and ``domicile`` (legal domicile). Includes
                foreign-domiciled but locally-listed issuers.
            domicile: Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs, or ``XSTO,XCSE``). Only events for an issuer with an active listing on the exchange
                match. Case-insensitive.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns events
                only for companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Must exactly match one of the standard sector names: ``Communication
                Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health
                Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            watchlist: Restricts to events for companies in a single watchlist, identified by its ``id`` (from the List
                Watchlists endpoint). An unknown id returns no events. Requires ``read:watchlist`` scope.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Calendar events retrieved successfully

        Raises:
            ApiError: Invalid parameter Missing or invalid API key Incremental sync is not available on this plan
                ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_calendar_events(
                limit=limit,
                cursor=cursor,
                fields=fields,
                updated_after=updated_after,
                ticker=ticker,
                company=company,
                country=country,
                market=market,
                domicile=domicile,
                exchange=exchange,
                index=index,
                sector=sector,
                event_type=event_type,
                status=status,
                scheduled_after=scheduled_after,
                scheduled_before=scheduled_before,
                watchlist=watchlist,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    async def get_api_v1_calendar_events_by_id(
        self,
        id_: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1CalendarEventsResponse1:
        """Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.

        On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns
        403.

        Responses are cached with ``ETag`` and ``Last-Modified`` headers and a ``private, max-age=300``
        ``Cache-Control``; clients can send ``If-None-Match`` or ``If-Modified-Since`` to receive a ``304 Not
        Modified``.

        Args:
            id_: The calendar event ID, as returned in the ``id`` field of list responses.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Calendar event retrieved

        Raises:
            ApiError: Missing or invalid API key Calendar event not found Calendar event is outside this plan's calendar
                window ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_calendar_events_by_id(
                id_, if_none_match=if_none_match, if_modified_since=if_modified_since, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCalendarEventsWithRawResponse:
        return self._with_raw_response


class CalendarEventsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_calendar_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        event_type: EventType1OrStr | None = None,
        status: Status1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        watchlist: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CalendarEventsResponse, GetApiV1CalendarEventsErrorBody]:
        """Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.),
        earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&A
        milestones (announcements, offer deadlines, completions).

        Each event is tied to a single company and is sorted by ``scheduled_at`` ascending (soonest first).
        ``scheduled_at`` is always in UTC; for local-time display use the ``local_time`` field (``scheduled_at``
        rendered in the issuer's ``timezone``, ISO 8601 with offset). Prefer ``local_time`` for the calendar date. A
        day-precision event is stored at local midnight, so its UTC ``scheduled_at`` falls on the previous day for
        ahead-of-UTC (Nordic) zones. ``title`` and ``description`` are always English regardless of the source-article
        language.

        ## Dividends Each dividend row carries a nested ``dividend`` object with ``ex_date``, ``record_date``,
        ``payment_date``, ``declaration_date``, and ``kind``. ``scheduled_at`` follows the priority **ex-date >
        record-date > payment-date**, whichever is explicitly stated, in that order. ``dividend`` is ``null`` for
        non-dividend events.

        ## Default window By default only upcoming events are returned, from today onward by the issuer's local date (so
        events scheduled for today stay listed throughout the day). Pass ``scheduled_after`` or ``scheduled_before`` to
        query a specific window. This also surfaces past events, which carry ``status: published`` (events flip from
        ``scheduled`` to ``published`` ~2 days after their date). An ``updated_after`` sync walk also lifts this floor,
        since sync must cover past events too.

        ## Status List endpoints return ``scheduled`` + ``published`` events and **exclude ``cancelled``** by default.
        Pass the ``status`` parameter to filter (``status=cancelled`` to retrieve cancellations, or
        ``scheduled``/``published`` to narrow). Discarded events are never returned. Note: a ``scheduled → cancelled``
        transition is *not* surfaced by default ``updated_after`` polling. To track cancellations, poll with
        ``status=cancelled`` or subscribe to cancellation alerts.

        ## Filtering Compose ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, and
        ``event_type`` to narrow the result set. All filters are intersected.

        ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch only events
        that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated: follow
        ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar.
        ``updated_after`` returns 403 there, because the capped window is recomputed per request and a change feed over
        it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an
        old watermark returns history rather than only upcoming events. Updates to past events that occurred before your
        currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.

        ## Pagination List responses include ``pagination.next_cursor`` when more pages are available. Pass it back as
        the ``cursor`` parameter on the next request. Cursors are opaque. Do not parse them.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. Otherwise the ``ETag`` reflects the response as served, not only record timestamps: it changes when
        plan limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental
                sync: store the timestamp of your last completed sync and pass it on the next request. Results are
                ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor`` before
                advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor,
                so past events with newer updates are included.
            ticker: Filter by company stock ticker (e.g. ``VOLV-B``), comma-separated for several (matches any of them).
                Also accepts exchange-suffixed form (e.g. ``VOLV-B.ST``); former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. A company outside the calendar's Nordic coverage resolves but returns no events.
                Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. A company
                outside the calendar's Nordic coverage resolves but returns no events. Combined with ``ticker``, the two
                filters intersect.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``DK``, ``NO``, ``FI``, ``IS``).
                Comma-separated for multiple (e.g. ``SE,NO``). Case-insensitive. This is the event's country: the
                issuer's, with source-country fallback.
            market: Filter to events for an issuer with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the event's own country) and ``domicile`` (legal domicile). Includes
                foreign-domiciled but locally-listed issuers.
            domicile: Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs, or ``XSTO,XCSE``). Only events for an issuer with an active listing on the exchange
                match. Case-insensitive.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns events
                only for companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Must exactly match one of the standard sector names: ``Communication
                Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health
                Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            watchlist: Restricts to events for companies in a single watchlist, identified by its ``id`` (from the List
                Watchlists endpoint). An unknown id returns no events. Requires ``read:watchlist`` scope.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calendar_events"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("country", country),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("exchange", exchange),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[EventType1OrStr | None]("event_type", event_type),
                param[Status1OrStr | None]("status", status),
                param[str | None]("scheduled_after", scheduled_after),
                param[str | None]("scheduled_before", scheduled_before),
                param[str | None]("watchlist", watchlist),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CalendarEventsResponse],
            error_mapper=get_api_v1_calendar_events_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_calendar_events_by_id(
        self,
        id_: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CalendarEventsResponse1, GetApiV1CalendarEventsByIdErrorBody]:
        """Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.

        On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns
        403.

        Responses are cached with ``ETag`` and ``Last-Modified`` headers and a ``private, max-age=300``
        ``Cache-Control``; clients can send ``If-None-Match`` or ``If-Modified-Since`` to receive a ``304 Not
        Modified``.

        Args:
            id_: The calendar event ID, as returned in the ``id`` field of list responses.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calendar_events/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1CalendarEventsResponse1],
            error_mapper=get_api_v1_calendar_events_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncCalendarEventsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_calendar_events(
        self,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        fields: str | None = None,
        updated_after: str | None = None,
        ticker: str | None = None,
        company: str | None = None,
        country: str | None = None,
        market: str | None = None,
        domicile: str | None = None,
        exchange: str | None = None,
        index: str | None = None,
        sector: str | None = None,
        event_type: EventType1OrStr | None = None,
        status: Status1OrStr | None = None,
        scheduled_after: str | None = None,
        scheduled_before: str | None = None,
        watchlist: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CalendarEventsResponse, GetApiV1CalendarEventsErrorBody]:
        """Returns a paginated list of scheduled Nordic financial calendar events: earnings reports (Q1 / H1 / FY etc.),
        earnings calls, trading updates, AGMs/EGMs, capital markets days, conference presentations, dividends, and M&A
        milestones (announcements, offer deadlines, completions).

        Each event is tied to a single company and is sorted by ``scheduled_at`` ascending (soonest first).
        ``scheduled_at`` is always in UTC; for local-time display use the ``local_time`` field (``scheduled_at``
        rendered in the issuer's ``timezone``, ISO 8601 with offset). Prefer ``local_time`` for the calendar date. A
        day-precision event is stored at local midnight, so its UTC ``scheduled_at`` falls on the previous day for
        ahead-of-UTC (Nordic) zones. ``title`` and ``description`` are always English regardless of the source-article
        language.

        ## Dividends Each dividend row carries a nested ``dividend`` object with ``ex_date``, ``record_date``,
        ``payment_date``, ``declaration_date``, and ``kind``. ``scheduled_at`` follows the priority **ex-date >
        record-date > payment-date**, whichever is explicitly stated, in that order. ``dividend`` is ``null`` for
        non-dividend events.

        ## Default window By default only upcoming events are returned, from today onward by the issuer's local date (so
        events scheduled for today stay listed throughout the day). Pass ``scheduled_after`` or ``scheduled_before`` to
        query a specific window. This also surfaces past events, which carry ``status: published`` (events flip from
        ``scheduled`` to ``published`` ~2 days after their date). An ``updated_after`` sync walk also lifts this floor,
        since sync must cover past events too.

        ## Status List endpoints return ``scheduled`` + ``published`` events and **exclude ``cancelled``** by default.
        Pass the ``status`` parameter to filter (``status=cancelled`` to retrieve cancellations, or
        ``scheduled``/``published`` to narrow). Discarded events are never returned. Note: a ``scheduled → cancelled``
        transition is *not* surfaced by default ``updated_after`` polling. To track cancellations, poll with
        ``status=cancelled`` or subscribe to cancellation alerts.

        ## Filtering Compose ``ticker``, ``country``, ``market``, ``domicile``, ``exchange``, ``index``, ``sector``, and
        ``event_type`` to narrow the result set. All filters are intersected.

        ## Polling for updates Use ``updated_after`` with the timestamp of your last completed sync to fetch only events
        that have changed since. Results are then ordered by ``updated_at`` ascending and cursor-paginated: follow
        ``pagination.next_cursor``, resending the same ``updated_after``, until it is null. Advance your stored
        timestamp only once every page is drained. Incremental sync is not available on plans with a capped calendar.
        ``updated_after`` returns 403 there, because the capped window is recomputed per request and a change feed over
        it cannot be drained. The walk covers the full served dataset, including past events, so a first sync from an
        old watermark returns history rather than only upcoming events. Updates to past events that occurred before your
        currently stored watermark are not replayed; reset the watermark (or start a fresh sync) to backfill them.

        ## Pagination List responses include ``pagination.next_cursor`` when more pages are available. Pass it back as
        the ``cursor`` parameter on the next request. Cursors are opaque. Do not parse them.

        ## Caching Requests with ``updated_after`` are not cached: they return ``Cache-Control: no-cache, no-store`` and
        no ``ETag``. Otherwise the ``ETag`` reflects the response as served, not only record timestamps: it changes when
        plan limits alter the visible set, so a changed ``ETag`` does not necessarily mean a record was updated.

        Args:
            limit: Number of events to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response. When
                continuing an ``updated_after`` sync, resend the same ``updated_after`` value alongside it.
            fields: Comma-separated list of fields to include in the response. Reduces payload size. ``id`` is always
                included. Available fields: ``title``, ``description``, ``event_type``, ``status``, ``date_precision``,
                ``fiscal_period``, ``scheduled_at``, ``timezone``, ``local_time``, ``scheduled_at_changed_at``,
                ``source_article_id``, ``source``, ``company_id``, ``company``, ``country``, ``dividend``,
                ``updated_at``.
            updated_after: ISO 8601 datetime. Returns only events updated after this timestamp. Use for incremental
                sync: store the timestamp of your last completed sync and pass it on the next request. Results are
                ordered by ``updated_at`` ascending and cursor-paginated. Drain ``pagination.next_cursor`` before
                advancing your stored timestamp. Passing this parameter also disables the default upcoming-only floor,
                so past events with newer updates are included.
            ticker: Filter by company stock ticker (e.g. ``VOLV-B``), comma-separated for several (matches any of them).
                Also accepts exchange-suffixed form (e.g. ``VOLV-B.ST``); former tickers resolve. Matching is
                case-insensitive. Every value must resolve to a company, or the request is rejected with ``400`` naming
                the unknown values. A company outside the calendar's Nordic coverage resolves but returns no events.
                Combined with ``company``, the two filters intersect.
            company: Filter by company ``id`` (as returned by the companies endpoints), comma-separated for several
                (matches any of them). Complements ``ticker``; use this to reach companies without a stock listing.
                Every value must resolve, or the request is rejected with ``400`` naming the unknown ids. A company
                outside the calendar's Nordic coverage resolves but returns no events. Combined with ``ticker``, the two
                filters intersect.
            country: Filter by country using ISO 3166-1 alpha-2 code (e.g. ``SE``, ``DK``, ``NO``, ``FI``, ``IS``).
                Comma-separated for multiple (e.g. ``SE,NO``). Case-insensitive. This is the event's country: the
                issuer's, with source-country fallback.
            market: Filter to events for an issuer with an active equity listing in these countries' exchanges (ISO
                3166-1 alpha-2, comma-separated, e.g. ``SE,NO``). ``SE`` covers Nasdaq Stockholm, First North, Spotlight
                and NGM. Distinct from ``country`` (the event's own country) and ``domicile`` (legal domicile). Includes
                foreign-domiciled but locally-listed issuers.
            domicile: Filter to events for an issuer legally domiciled in these countries (ISO 3166-1 alpha-2,
                comma-separated). Reaches unlisted companies; excludes foreign-domiciled but locally-listed issuers. Use
                ``market`` for market-coverage questions.
            exchange: Filter by exchange using ISO 10383 Market Identifier Code, comma-separated for multiple (e.g.
                ``XSTO`` for Nasdaq Stockholm, ``XCSE`` for Nasdaq Copenhagen, ``XHEL`` for Nasdaq Helsinki, ``XOSL``
                for Oslo Børs, or ``XSTO,XCSE``). Only events for an issuer with an active listing on the exchange
                match. Case-insensitive.
            index: Filter by stock index id or symbol (e.g. ``OMXS30``, ``OMXC25``, ``OMXH25``, ``OBX``). Returns events
                only for companies in that index. Case-insensitive for symbols.
            sector: Filter by company sector. Must exactly match one of the standard sector names: ``Communication
                Services``, ``Consumer Discretionary``, ``Consumer Staples``, ``Energy``, ``Financials``, ``Health
                Care``, ``Industrials``, ``Information Technology``, ``Materials``, ``Real Estate``, ``Utilities``.
            event_type: Filter by calendar event type. Accepts a single value or a comma-separated list for multiple
                types. These are calendar event types (underscored) and are the only values accepted here. The
                hyphenated Events taxonomy slugs from ``GET /api/v1/event_types`` belong to ``GET /api/v1/events`` and
                are rejected. A few spellings overlap across the two vocabularies (e.g. ``delisting``) while denoting
                different things: a calendar event is a dated, scheduled entry for one issuer; an Events slug classifies
                a narrative event that already happened.
            status: Filter by lifecycle status. Omitted: returns ``scheduled`` + past ``published`` events and excludes
                ``cancelled``. Pass ``cancelled`` to retrieve cancellations, or ``scheduled``/``published`` to narrow.
            scheduled_after: Window start. A bare date (``YYYY-MM-DD``) means that calendar date in each issuer's own
                timezone, inclusive: ``scheduled_after=2026-10-01&scheduled_before=2026-10-31`` is October in every
                issuer's local calendar. An ISO 8601 datetime (``Z`` or a UTC offset) means an exact UTC instant, at or
                after. Passing this parameter disables the default upcoming-only floor, allowing past events to be
                returned.
            scheduled_before: Window end. A bare date means that calendar date in each issuer's own timezone, inclusive.
                An ISO 8601 datetime means an exact UTC instant, exclusive (strictly before). Passing this parameter
                disables the default upcoming-only floor, allowing past events to be returned.
            watchlist: Restricts to events for companies in a single watchlist, identified by its ``id`` (from the List
                Watchlists endpoint). An unknown id returns no events. Requires ``read:watchlist`` scope.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calendar_events"),
            query_params=[
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("fields", fields),
                param[str | None]("updated_after", updated_after),
                param[str | None]("ticker", ticker),
                param[str | None]("company", company),
                param[str | None]("country", country),
                param[str | None]("market", market),
                param[str | None]("domicile", domicile),
                param[str | None]("exchange", exchange),
                param[str | None]("index", index),
                param[str | None]("sector", sector),
                param[EventType1OrStr | None]("event_type", event_type),
                param[Status1OrStr | None]("status", status),
                param[str | None]("scheduled_after", scheduled_after),
                param[str | None]("scheduled_before", scheduled_before),
                param[str | None]("watchlist", watchlist),
            ],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CalendarEventsResponse],
            error_mapper=get_api_v1_calendar_events_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_calendar_events_by_id(
        self,
        id_: str,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1CalendarEventsResponse1, GetApiV1CalendarEventsByIdErrorBody]:
        """Fetches a single scheduled calendar event by ID. Cancelled or discarded events return 404.

        On plans with a capped calendar, only events inside your plan's window are readable; anything outside it returns
        403.

        Responses are cached with ``ETag`` and ``Last-Modified`` headers and a ``private, max-age=300``
        ``Cache-Control``; clients can send ``If-None-Match`` or ``If-Modified-Since`` to receive a ``304 Not
        Modified``.

        Args:
            id_: The calendar event ID, as returned in the ``id`` field of list responses.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if the event has not
                changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/calendar_events/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1CalendarEventsResponse1],
            error_mapper=get_api_v1_calendar_events_by_id_error_mapper,
            request_options=request_options,
        )
