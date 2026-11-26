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
from ..errors.get_api_calendar_error import GetApiCalendarErrorBody, get_api_calendar_error_mapper
from ..models.calendar_events import CalendarEvents
from ..models.enums.country import Country, CountryOrStr
from ..models.enums.importance import ImportanceOrStr
from ..server.server import Server


class Calendar:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CalendarWithRawResponse(client, server, auth)

    def get_api_calendar(
        self,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        event_key: str | None = None,
        importance: ImportanceOrStr | None = None,
        country: CountryOrStr | None = Country.US,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CalendarEvents:
        """The official forward schedule of US macro releases: FOMC decisions (with SEP and press-conference markers)
        and minutes, CPI, PPI, the jobs report (nonfarm payrolls), GDP estimates (advance/second/third), PCE, advance
        retail sales, weekly jobless claims and JOLTS — sourced from the agencies' own schedule pages (Fed, BLS, BEA,
        Census, DOL).

        Each occurrence carries a stable ``uid`` (``US-CPI-2026-07``) that survives reschedules: a moved release keeps
        its identity, updates ``scheduled_at`` and reports ``schedule_status``. ``phase`` says only whether the
        scheduled moment has passed (``upcoming``/``elapsed``) — it deliberately does not claim the agency actually
        published. Pair the calendar with ``/api/news/macro/`` to read what a release meant once it's out.

        The window is ``[from_date, to_date)`` — from inclusive, to exclusive; date-only values mean UTC midnight;
        defaults are today (UTC) → +7 days; the span is capped at 400 days. No pagination: a full year of every series
        is ~250 rows (hard cap 500), ordered by ``scheduled_at`` ascending. Cancelled and postponed occurrences stay in
        the response with their ``schedule_status``.

        Args:
            from_date: Window start, inclusive. ``YYYY-MM-DD`` (UTC midnight) or an ISO datetime (naive = UTC). Default:
                today, UTC midnight.
            to_date: Window end, exclusive. Same formats. Default ``from_date`` + 7 days; span capped at 400 days.
            event_key: Narrow to specific series, comma-separated. Unknown keys return 400.
            importance: Narrow by importance tier.
            country: v1 covers US releases only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Occurrences within the window, ``scheduled_at`` ascending.

        Raises:
            ApiError: Unknown parameter or value, a malformed date, ``to_date`` not after ``from_date``, or a window
                over 400 days. Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_api_calendar(
                from_date=from_date,
                to_date=to_date,
                event_key=event_key,
                importance=importance,
                country=country,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CalendarWithRawResponse:
        return self._with_raw_response


class AsyncCalendar:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCalendarWithRawResponse(client, server, auth)

    async def get_api_calendar(
        self,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        event_key: str | None = None,
        importance: ImportanceOrStr | None = None,
        country: CountryOrStr | None = Country.US,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CalendarEvents:
        """The official forward schedule of US macro releases: FOMC decisions (with SEP and press-conference markers)
        and minutes, CPI, PPI, the jobs report (nonfarm payrolls), GDP estimates (advance/second/third), PCE, advance
        retail sales, weekly jobless claims and JOLTS — sourced from the agencies' own schedule pages (Fed, BLS, BEA,
        Census, DOL).

        Each occurrence carries a stable ``uid`` (``US-CPI-2026-07``) that survives reschedules: a moved release keeps
        its identity, updates ``scheduled_at`` and reports ``schedule_status``. ``phase`` says only whether the
        scheduled moment has passed (``upcoming``/``elapsed``) — it deliberately does not claim the agency actually
        published. Pair the calendar with ``/api/news/macro/`` to read what a release meant once it's out.

        The window is ``[from_date, to_date)`` — from inclusive, to exclusive; date-only values mean UTC midnight;
        defaults are today (UTC) → +7 days; the span is capped at 400 days. No pagination: a full year of every series
        is ~250 rows (hard cap 500), ordered by ``scheduled_at`` ascending. Cancelled and postponed occurrences stay in
        the response with their ``schedule_status``.

        Args:
            from_date: Window start, inclusive. ``YYYY-MM-DD`` (UTC midnight) or an ISO datetime (naive = UTC). Default:
                today, UTC midnight.
            to_date: Window end, exclusive. Same formats. Default ``from_date`` + 7 days; span capped at 400 days.
            event_key: Narrow to specific series, comma-separated. Unknown keys return 400.
            importance: Narrow by importance tier.
            country: v1 covers US releases only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Occurrences within the window, ``scheduled_at`` ascending.

        Raises:
            ApiError: Unknown parameter or value, a malformed date, ``to_date`` not after ``from_date``, or a window
                over 400 days. Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the
                per-day volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess
                (a burst block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is
                ``X-RateLimit-Reset``). The ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra``
                names your tier, its ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro
                — an ``upgrade`` block with the higher tiers' caps and the pricing URL. A rejected request does not
                itself consume quota, so retrying after ``Retry-After`` costs you nothing extra. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_calendar(
                from_date=from_date,
                to_date=to_date,
                event_key=event_key,
                importance=importance,
                country=country,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCalendarWithRawResponse:
        return self._with_raw_response


class CalendarWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_calendar(
        self,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        event_key: str | None = None,
        importance: ImportanceOrStr | None = None,
        country: CountryOrStr | None = Country.US,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CalendarEvents, GetApiCalendarErrorBody]:
        """The official forward schedule of US macro releases: FOMC decisions (with SEP and press-conference markers)
        and minutes, CPI, PPI, the jobs report (nonfarm payrolls), GDP estimates (advance/second/third), PCE, advance
        retail sales, weekly jobless claims and JOLTS — sourced from the agencies' own schedule pages (Fed, BLS, BEA,
        Census, DOL).

        Each occurrence carries a stable ``uid`` (``US-CPI-2026-07``) that survives reschedules: a moved release keeps
        its identity, updates ``scheduled_at`` and reports ``schedule_status``. ``phase`` says only whether the
        scheduled moment has passed (``upcoming``/``elapsed``) — it deliberately does not claim the agency actually
        published. Pair the calendar with ``/api/news/macro/`` to read what a release meant once it's out.

        The window is ``[from_date, to_date)`` — from inclusive, to exclusive; date-only values mean UTC midnight;
        defaults are today (UTC) → +7 days; the span is capped at 400 days. No pagination: a full year of every series
        is ~250 rows (hard cap 500), ordered by ``scheduled_at`` ascending. Cancelled and postponed occurrences stay in
        the response with their ``schedule_status``.

        Args:
            from_date: Window start, inclusive. ``YYYY-MM-DD`` (UTC midnight) or an ISO datetime (naive = UTC). Default:
                today, UTC midnight.
            to_date: Window end, exclusive. Same formats. Default ``from_date`` + 7 days; span capped at 400 days.
            event_key: Narrow to specific series, comma-separated. Unknown keys return 400.
            importance: Narrow by importance tier.
            country: v1 covers US releases only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/calendar/"),
            query_params=[
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
                param[str | None]("event_key", event_key),
                param[ImportanceOrStr | None]("importance", importance),
                param[CountryOrStr | None]("country", country),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[CalendarEvents],
            error_mapper=get_api_calendar_error_mapper,
            request_options=request_options,
        )


class AsyncCalendarWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_calendar(
        self,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        event_key: str | None = None,
        importance: ImportanceOrStr | None = None,
        country: CountryOrStr | None = Country.US,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CalendarEvents, GetApiCalendarErrorBody]:
        """The official forward schedule of US macro releases: FOMC decisions (with SEP and press-conference markers)
        and minutes, CPI, PPI, the jobs report (nonfarm payrolls), GDP estimates (advance/second/third), PCE, advance
        retail sales, weekly jobless claims and JOLTS — sourced from the agencies' own schedule pages (Fed, BLS, BEA,
        Census, DOL).

        Each occurrence carries a stable ``uid`` (``US-CPI-2026-07``) that survives reschedules: a moved release keeps
        its identity, updates ``scheduled_at`` and reports ``schedule_status``. ``phase`` says only whether the
        scheduled moment has passed (``upcoming``/``elapsed``) — it deliberately does not claim the agency actually
        published. Pair the calendar with ``/api/news/macro/`` to read what a release meant once it's out.

        The window is ``[from_date, to_date)`` — from inclusive, to exclusive; date-only values mean UTC midnight;
        defaults are today (UTC) → +7 days; the span is capped at 400 days. No pagination: a full year of every series
        is ~250 rows (hard cap 500), ordered by ``scheduled_at`` ascending. Cancelled and postponed occurrences stay in
        the response with their ``schedule_status``.

        Args:
            from_date: Window start, inclusive. ``YYYY-MM-DD`` (UTC midnight) or an ISO datetime (naive = UTC). Default:
                today, UTC midnight.
            to_date: Window end, exclusive. Same formats. Default ``from_date`` + 7 days; span capped at 400 days.
            event_key: Narrow to specific series, comma-separated. Unknown keys return 400.
            importance: Narrow by importance tier.
            country: v1 covers US releases only.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/calendar/"),
            query_params=[
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
                param[str | None]("event_key", event_key),
                param[ImportanceOrStr | None]("importance", importance),
                param[CountryOrStr | None]("country", country),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[CalendarEvents],
            error_mapper=get_api_calendar_error_mapper,
            request_options=request_options,
        )
