from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.list_bookmakers_error import ListBookmakersErrorBody, list_bookmakers_error_mapper
from ..errors.list_events_error import ListEventsErrorBody, list_events_error_mapper
from ..errors.list_regions_error import ListRegionsErrorBody, list_regions_error_mapper
from ..errors.list_sports_error import ListSportsErrorBody, list_sports_error_mapper
from ..models.enums.date_format import DateFormat, DateFormatOrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.regions import Regions
from ..models.unions.v2_bookmakers_response1 import V2BookmakersResponse1
from ..models.unions.v2_events_response1 import V2EventsResponse1
from ..models.unions.v2_sports_response1 import V2SportsResponse1
from ..server.server import Server


class Discovery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DiscoveryWithRawResponse(client, server, auth)

    def list_bookmakers(
        self, *, format_: FormatOrStr | None = Format.ENVELOPE, request_options: RequestOptionsOrDict | None = None
    ) -> V2BookmakersResponse1:
        """Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no
        ``region``: a ``region`` parameter is 400.

        Args:
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The catalogue. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``format``. ``missing_api_key``, ``invalid_api_key`` (also a
                closed account), ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``, ``schema_not_in_scope``. ``too_many_from_address``, then after authentication
                ``too_many_requests``; the front door's own caps answer an empty-bodied 429. ``internal_error``.
                ``temporarily_unavailable``. 502 from the front door when the API behind it does not answer: an empty
                body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi |
                Error401OddsRelayDiscoveryApi | Error403OddsRelayDiscoveryApi | Error429OddsRelayDiscoveryApi |
                Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(self._with_raw_response.list_bookmakers(format_=format_, request_options=request_options))

    def list_events(
        self,
        sport: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2EventsResponse1:
        """The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged
        250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by ``id`` and take a missed
        event on the next walk. A cursor expires 300 s after it was issued. ``region`` missing means ``uk``.

        Args:
            sport: Required: a sport key or a prefix of one as ``/v2/sports`` lists them. Missing is 400
                ``missing_param``; unknown 400 ``unknown_sport`` with ``valid``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            event_ids: Comma-separated, at most 50 event ids.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Unknown or repeated parameter; ``missing_param`` (``sport``); ``unknown_sport`` (with ``valid``);
                a bad ``format``, ``dateFormat``, instant or ``cursor``; ``eventIds`` over 50; a region list, repeat or
                uppercase code. ``missing_api_key``, ``invalid_api_key`` (also a closed account), ``revoked_api_key``,
                ``expired_api_key``, ``paused_api_key``. ``account_suspended``, ``origin_not_allowed``,
                ``schema_not_in_scope``. ``unknown_region``. ``too_many_from_address``, then after authentication
                ``too_many_requests``; the front door's own caps answer an empty-bodied 429. ``internal_error``.
                ``temporarily_unavailable``. 502 from the front door when the API behind it does not answer: an empty
                body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi |
                Error401OddsRelayDiscoveryApi | Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi
                | Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_events(
                sport,
                region=region,
                format_=format_,
                date_format=date_format,
                cursor=cursor,
                event_ids=event_ids,
                commence_time_from=commence_time_from,
                commence_time_to=commence_time_to,
                request_options=request_options,
            ),
        )

    def list_regions(self, *, request_options: RequestOptionsOrDict | None = None) -> Regions:
        """The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model.
        Free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The regions. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Any parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayDiscoveryApi | Error401OddsRelayDiscoveryApi |
                Error403OddsRelayDiscoveryApi | Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi |
                Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(self._with_raw_response.list_regions(request_options=request_options))

    def list_sports(
        self,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> V2SportsResponse1:
        """Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows
        at a time in (group, key) order; a cursor expires 300 s after it was issued. ``region`` missing means ``uk``;
        discovery is not scoped to your key's regions.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``format``, ``dateFormat`` or ``cursor``; a region list,
                repeat or uppercase code. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``, ``schema_not_in_scope``. ``unknown_region``. ``too_many_from_address``, then
                after authentication ``too_many_requests``; the front door's own caps answer an empty-bodied 429.
                ``internal_error``. ``temporarily_unavailable``. 502 from the front door when the API behind it does not
                answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi |
                Error401OddsRelayDiscoveryApi | Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi
                | Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            self._with_raw_response.list_sports(
                region=region, format_=format_, date_format=date_format, cursor=cursor, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> DiscoveryWithRawResponse:
        return self._with_raw_response


class AsyncDiscovery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDiscoveryWithRawResponse(client, server, auth)

    async def list_bookmakers(
        self, *, format_: FormatOrStr | None = Format.ENVELOPE, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V2BookmakersResponse1:
        """Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no
        ``region``: a ``region`` parameter is 400.

        Args:
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The catalogue. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``format``. ``missing_api_key``, ``invalid_api_key`` (also a
                closed account), ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``, ``schema_not_in_scope``. ``too_many_from_address``, then after authentication
                ``too_many_requests``; the front door's own caps answer an empty-bodied 429. ``internal_error``.
                ``temporarily_unavailable``. 502 from the front door when the API behind it does not answer: an empty
                body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi |
                Error401OddsRelayDiscoveryApi | Error403OddsRelayDiscoveryApi | Error429OddsRelayDiscoveryApi |
                Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(await self._with_raw_response.list_bookmakers(format_=format_, request_options=request_options))

    async def list_events(
        self,
        sport: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2EventsResponse1:
        """The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged
        250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by ``id`` and take a missed
        event on the next walk. A cursor expires 300 s after it was issued. ``region`` missing means ``uk``.

        Args:
            sport: Required: a sport key or a prefix of one as ``/v2/sports`` lists them. Missing is 400
                ``missing_param``; unknown 400 ``unknown_sport`` with ``valid``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            event_ids: Comma-separated, at most 50 event ids.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Unknown or repeated parameter; ``missing_param`` (``sport``); ``unknown_sport`` (with ``valid``);
                a bad ``format``, ``dateFormat``, instant or ``cursor``; ``eventIds`` over 50; a region list, repeat or
                uppercase code. ``missing_api_key``, ``invalid_api_key`` (also a closed account), ``revoked_api_key``,
                ``expired_api_key``, ``paused_api_key``. ``account_suspended``, ``origin_not_allowed``,
                ``schema_not_in_scope``. ``unknown_region``. ``too_many_from_address``, then after authentication
                ``too_many_requests``; the front door's own caps answer an empty-bodied 429. ``internal_error``.
                ``temporarily_unavailable``. 502 from the front door when the API behind it does not answer: an empty
                body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi |
                Error401OddsRelayDiscoveryApi | Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi
                | Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_events(
                sport,
                region=region,
                format_=format_,
                date_format=date_format,
                cursor=cursor,
                event_ids=event_ids,
                commence_time_from=commence_time_from,
                commence_time_to=commence_time_to,
                request_options=request_options,
            ),
        )

    async def list_regions(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Regions:
        """The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model.
        Free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The regions. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Any parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayDiscoveryApi | Error401OddsRelayDiscoveryApi |
                Error403OddsRelayDiscoveryApi | Error429OddsRelayDiscoveryApi | Error500OddsRelayDiscoveryApi |
                Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(await self._with_raw_response.list_regions(request_options=request_options))

    async def list_sports(
        self,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> V2SportsResponse1:
        """Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows
        at a time in (group, key) order; a cursor expires 300 s after it was issued. ``region`` missing means ``uk``;
        discovery is not scoped to your key's regions.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page. Gzip unless refused (over 1 kB).

        Raises:
            ApiError: Unknown or repeated parameter; a bad ``format``, ``dateFormat`` or ``cursor``; a region list,
                repeat or uppercase code. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``, ``schema_not_in_scope``. ``unknown_region``. ``too_many_from_address``, then
                after authentication ``too_many_requests``; the front door's own caps answer an empty-bodied 429.
                ``internal_error``. ``temporarily_unavailable``. 502 from the front door when the API behind it does not
                answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayDiscoveryApi |
                Error401OddsRelayDiscoveryApi | Error403OddsRelayDiscoveryApi | Error404 | Error429OddsRelayDiscoveryApi
                | Error500OddsRelayDiscoveryApi | Error503OddsRelayDiscoveryApi | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sports(
                region=region, format_=format_, date_format=date_format, cursor=cursor, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDiscoveryWithRawResponse:
        return self._with_raw_response


class DiscoveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_bookmakers(
        self, *, format_: FormatOrStr | None = Format.ENVELOPE, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V2BookmakersResponse1, ListBookmakersErrorBody]:
        """Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no
        ``region``: a ``region`` parameter is 400.

        Args:
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/bookmakers"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2BookmakersResponse1],
            error_mapper=list_bookmakers_error_mapper,
            request_options=request_options,
        )

    def list_events(
        self,
        sport: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2EventsResponse1, ListEventsErrorBody]:
        """The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged
        250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by ``id`` and take a missed
        event on the next walk. A cursor expires 300 s after it was issued. ``region`` missing means ``uk``.

        Args:
            sport: Required: a sport key or a prefix of one as ``/v2/sports`` lists them. Missing is 400
                ``missing_param``; unknown 400 ``unknown_sport`` with ``valid``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            event_ids: Comma-separated, at most 50 event ids.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/events"),
            query_params=[
                param[str]("sport", sport),
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("cursor", cursor),
                param[str | None]("eventIds", event_ids),
                param[str | None]("commenceTimeFrom", commence_time_from),
                param[str | None]("commenceTimeTo", commence_time_to),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2EventsResponse1],
            error_mapper=list_events_error_mapper,
            request_options=request_options,
        )

    def list_regions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Regions, ListRegionsErrorBody]:
        """The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model.
        Free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/regions"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[Regions],
            error_mapper=list_regions_error_mapper,
            request_options=request_options,
        )

    def list_sports(
        self,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[V2SportsResponse1, ListSportsErrorBody]:
        """Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows
        at a time in (group, key) order; a cursor expires 300 s after it was issued. ``region`` missing means ``uk``;
        discovery is not scoped to your key's regions.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/sports"),
            query_params=[
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2SportsResponse1],
            error_mapper=list_sports_error_mapper,
            request_options=request_options,
        )


class AsyncDiscoveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_bookmakers(
        self, *, format_: FormatOrStr | None = Format.ENVELOPE, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V2BookmakersResponse1, ListBookmakersErrorBody]:
        """Every bookmaker and exchange key the API serves, with its display name, regions and kind. Free. Takes no
        ``region``: a ``region`` parameter is 400.

        Args:
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/bookmakers"),
            query_params=[param[FormatOrStr | None]("format", format_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2BookmakersResponse1],
            error_mapper=list_bookmakers_error_mapper,
            request_options=request_options,
        )

    async def list_events(
        self,
        sport: str,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        event_ids: str | None = None,
        commence_time_from: str | None = None,
        commence_time_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2EventsResponse1, ListEventsErrorBody]:
        """The events on the matched boards under one sport key or prefix, with the boards carrying each. Free. Paged
        250 at a time in (kick-off, id) order; a cursor resumes strictly after the last event it saw, so an event whose
        kick-off moves across the cursor during a walk can appear twice or be missed: dedupe by ``id`` and take a missed
        event on the next walk. A cursor expires 300 s after it was issued. ``region`` missing means ``uk``.

        Args:
            sport: Required: a sport key or a prefix of one as ``/v2/sports`` lists them. Missing is 400
                ``missing_param``; unknown 400 ``unknown_sport`` with ``valid``.
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            event_ids: Comma-separated, at most 50 event ids.
            commence_time_from: Events kicking off at or after this ISO-8601 instant (no offset = UTC; a fraction of a
                second rounds up). Not ISO-8601 is 400; on the matched boards a From after To is 400.
            commence_time_to: Events kicking off at or before this ISO-8601 instant (no offset = UTC).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/events"),
            query_params=[
                param[str]("sport", sport),
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("cursor", cursor),
                param[str | None]("eventIds", event_ids),
                param[str | None]("commenceTimeFrom", commence_time_from),
                param[str | None]("commenceTimeTo", commence_time_to),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2EventsResponse1],
            error_mapper=list_events_error_mapper,
            request_options=request_options,
        )

    async def list_regions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Regions, ListRegionsErrorBody]:
        """The regions your key covers that have live bookmakers here, with each region's exchanges and coverage model.
        Free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/regions"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[Regions],
            error_mapper=list_regions_error_mapper,
            request_options=request_options,
        )

    async def list_sports(
        self,
        *,
        region: str | None = None,
        format_: FormatOrStr | None = Format.ENVELOPE,
        date_format: DateFormatOrStr | None = DateFormat.ISO,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[V2SportsResponse1, ListSportsErrorBody]:
        """Every competition on the matched boards, grouped, with the market keys seen under each. Free. Paged 250 rows
        at a time in (group, key) order; a cursor expires 300 s after it was issued. ``region`` missing means ``uk``;
        discovery is not scoped to your key's regions.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            format_: ``envelope`` (default): ``{meta, data}``. ``bare``: the ``data`` array alone, ``meta`` moved to
                ``X-*`` headers.
            date_format: ``iso`` (default, ISO-8601 UTC) or ``unix`` (integer epoch seconds) for ``commence_time``,
                ``processed_at`` and ``last_update``. ``standard`` and ``dutching`` serve iso only: anything else is
                400.
            cursor: The previous page's ``meta.next_cursor`` (or ``X-Next-Cursor``). A cursor is bound to no account and
                expires 300 s after it was issued: 400 ``cursor expired: start again from the first page``; any other
                shape 400 ``cursor not recognised: start again from the first page``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/sports"),
            query_params=[
                param[str | None]("region", region),
                param[FormatOrStr | None]("format", format_),
                param[DateFormatOrStr | None]("dateFormat", date_format),
                param[str | None]("cursor", cursor),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2SportsResponse1],
            error_mapper=list_sports_error_mapper,
            request_options=request_options,
        )
