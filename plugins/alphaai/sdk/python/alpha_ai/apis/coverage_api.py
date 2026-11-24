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
    unwrap,
)
from ..errors.get_api_coverage_error import GetApiCoverageErrorBody, get_api_coverage_error_mapper
from ..models.coverage import Coverage
from ..server.server import Server


class CoverageApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CoverageApiWithRawResponse(client, server, auth)

    def get_api_coverage(self, *, request_options: RequestOptionsOrDict | None = None) -> Coverage:
        """One object per data source: ``publisher_news`` (the GDELT stream, RSS feeds and directly parsed publisher
        pages), ``sec_form4``, ``sec_form8k``, ``sec_form6k``, ``earnings_reads``, ``earnings_schedule`` and
        ``economic_calendar``. Each carries its earliest and latest row, the last ingest time, the row count in the
        source's own unit, the collector's cadence, a history note saying where the history is thin, the known limits,
        and the per-plan archive horizon. Read this before backtesting or promising coverage downstream:
        ``first_row_at`` is the earliest row we hold, NOT the start of dense coverage — ``history_note`` says which
        months are thin (publisher news densified in June 2026; Form 4 before May 2026 is an unenriched replay; 8-K
        history starts June 2026; 6-K and earnings reads start 2026-07-28).

        The passport is computed once a day (03:50 UTC) and served from a cache: ``as_of`` is when the counts were taken
        and ``generated_at`` when the payload was assembled, so both describe the computation, never the response. Rows
        may be up to a day newer than ``last_row_at``. On a cold cache the first caller computes it (a few seconds); a
        concurrent caller gets ``503`` with ``Retry-After`` instead of a second scan.

        ``stale`` is an honest flag, not an alert: true when the newest ingest is older than ``stale_after_seconds`` —
        six poll cycles for the collectors, three days for SEC filings (EDGAR takes no filings on weekends), ten days
        for earnings reads — or, for the economic calendar (``stale_after_seconds`` null), when no future occurrence is
        held. ``publisher_news`` additionally reports each discovery channel (``gkg``, ``rss``) with its own last ingest
        and flag. ``research_only`` restates that everything described here is AI-generated financial information for
        research, not investment advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The passport, one object per source in a fixed order.

        Raises:
            ApiError: Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. The passport is not cached and another
                request is computing it. ``Retry-After`` (30 s) is when the fresh payload will be there; the body's
                ``extra`` carries ``reason: coverage_unavailable`` and ``retry_after_seconds``. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_api_coverage(request_options=request_options))

    @property
    def with_raw_response(self) -> CoverageApiWithRawResponse:
        return self._with_raw_response


class AsyncCoverageApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCoverageApiWithRawResponse(client, server, auth)

    async def get_api_coverage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Coverage:
        """One object per data source: ``publisher_news`` (the GDELT stream, RSS feeds and directly parsed publisher
        pages), ``sec_form4``, ``sec_form8k``, ``sec_form6k``, ``earnings_reads``, ``earnings_schedule`` and
        ``economic_calendar``. Each carries its earliest and latest row, the last ingest time, the row count in the
        source's own unit, the collector's cadence, a history note saying where the history is thin, the known limits,
        and the per-plan archive horizon. Read this before backtesting or promising coverage downstream:
        ``first_row_at`` is the earliest row we hold, NOT the start of dense coverage — ``history_note`` says which
        months are thin (publisher news densified in June 2026; Form 4 before May 2026 is an unenriched replay; 8-K
        history starts June 2026; 6-K and earnings reads start 2026-07-28).

        The passport is computed once a day (03:50 UTC) and served from a cache: ``as_of`` is when the counts were taken
        and ``generated_at`` when the payload was assembled, so both describe the computation, never the response. Rows
        may be up to a day newer than ``last_row_at``. On a cold cache the first caller computes it (a few seconds); a
        concurrent caller gets ``503`` with ``Retry-After`` instead of a second scan.

        ``stale`` is an honest flag, not an alert: true when the newest ingest is older than ``stale_after_seconds`` —
        six poll cycles for the collectors, three days for SEC filings (EDGAR takes no filings on weekends), ten days
        for earnings reads — or, for the economic calendar (``stale_after_seconds`` null), when no future occurrence is
        held. ``publisher_news`` additionally reports each discovery channel (``gkg``, ``rss``) with its own last ingest
        and flag. ``research_only`` restates that everything described here is AI-generated financial information for
        research, not investment advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The passport, one object per source in a fixed order.

        Raises:
            ApiError: Missing or invalid API key. Rate limit exceeded — either the per-minute burst cap or the per-day
                volume cap. The ``Retry-After`` header is the earliest second a retry can succeed, not a guess (a burst
                block is short, ≤60s; a day-cap block is capped at 3600s — the true reset is ``X-RateLimit-Reset``). The
                ``X-RateLimit-*`` trio shows the daily volume budget. The body's ``extra`` names your tier, its
                ``limit_per_minute`` / ``limit_per_day``, ``retry_after_seconds``, and — below Pro — an ``upgrade``
                block with the higher tiers' caps and the pricing URL. A rejected request does not itself consume quota,
                so retrying after ``Retry-After`` costs you nothing extra. The passport is not cached and another
                request is computing it. ``Retry-After`` (30 s) is when the fresh payload will be there; the body's
                ``extra`` carries ``reason: coverage_unavailable`` and ``retry_after_seconds``. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_api_coverage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCoverageApiWithRawResponse:
        return self._with_raw_response


class CoverageApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_coverage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Coverage, GetApiCoverageErrorBody]:
        """One object per data source: ``publisher_news`` (the GDELT stream, RSS feeds and directly parsed publisher
        pages), ``sec_form4``, ``sec_form8k``, ``sec_form6k``, ``earnings_reads``, ``earnings_schedule`` and
        ``economic_calendar``. Each carries its earliest and latest row, the last ingest time, the row count in the
        source's own unit, the collector's cadence, a history note saying where the history is thin, the known limits,
        and the per-plan archive horizon. Read this before backtesting or promising coverage downstream:
        ``first_row_at`` is the earliest row we hold, NOT the start of dense coverage — ``history_note`` says which
        months are thin (publisher news densified in June 2026; Form 4 before May 2026 is an unenriched replay; 8-K
        history starts June 2026; 6-K and earnings reads start 2026-07-28).

        The passport is computed once a day (03:50 UTC) and served from a cache: ``as_of`` is when the counts were taken
        and ``generated_at`` when the payload was assembled, so both describe the computation, never the response. Rows
        may be up to a day newer than ``last_row_at``. On a cold cache the first caller computes it (a few seconds); a
        concurrent caller gets ``503`` with ``Retry-After`` instead of a second scan.

        ``stale`` is an honest flag, not an alert: true when the newest ingest is older than ``stale_after_seconds`` —
        six poll cycles for the collectors, three days for SEC filings (EDGAR takes no filings on weekends), ten days
        for earnings reads — or, for the economic calendar (``stale_after_seconds`` null), when no future occurrence is
        held. ``publisher_news`` additionally reports each discovery channel (``gkg``, ``rss``) with its own last ingest
        and flag. ``research_only`` restates that everything described here is AI-generated financial information for
        research, not investment advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/coverage/"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Coverage],
            error_mapper=get_api_coverage_error_mapper,
            request_options=request_options,
        )


class AsyncCoverageApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_coverage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Coverage, GetApiCoverageErrorBody]:
        """One object per data source: ``publisher_news`` (the GDELT stream, RSS feeds and directly parsed publisher
        pages), ``sec_form4``, ``sec_form8k``, ``sec_form6k``, ``earnings_reads``, ``earnings_schedule`` and
        ``economic_calendar``. Each carries its earliest and latest row, the last ingest time, the row count in the
        source's own unit, the collector's cadence, a history note saying where the history is thin, the known limits,
        and the per-plan archive horizon. Read this before backtesting or promising coverage downstream:
        ``first_row_at`` is the earliest row we hold, NOT the start of dense coverage — ``history_note`` says which
        months are thin (publisher news densified in June 2026; Form 4 before May 2026 is an unenriched replay; 8-K
        history starts June 2026; 6-K and earnings reads start 2026-07-28).

        The passport is computed once a day (03:50 UTC) and served from a cache: ``as_of`` is when the counts were taken
        and ``generated_at`` when the payload was assembled, so both describe the computation, never the response. Rows
        may be up to a day newer than ``last_row_at``. On a cold cache the first caller computes it (a few seconds); a
        concurrent caller gets ``503`` with ``Retry-After`` instead of a second scan.

        ``stale`` is an honest flag, not an alert: true when the newest ingest is older than ``stale_after_seconds`` —
        six poll cycles for the collectors, three days for SEC filings (EDGAR takes no filings on weekends), ten days
        for earnings reads — or, for the economic calendar (``stale_after_seconds`` null), when no future occurrence is
        held. ``publisher_news`` additionally reports each discovery channel (``gkg``, ``rss``) with its own last ingest
        and flag. ``research_only`` restates that everything described here is AI-generated financial information for
        research, not investment advice.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/coverage/"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Coverage],
            error_mapper=get_api_coverage_error_mapper,
            request_options=request_options,
        )
