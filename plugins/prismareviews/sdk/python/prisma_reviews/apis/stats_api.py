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
from ..errors.get_location_stats_error import GetLocationStatsErrorBody, get_location_stats_error_mapper
from ..errors.get_stats_error import GetStatsErrorBody, get_stats_error_mapper
from ..models.enums.platform_id import PlatformIdOrStr
from ..models.stats import Stats
from ..models.unions.since import Since, SinceDict
from ..models.unions.until import Until, UntilDict
from ..server.server import Server


class StatsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StatsApiWithRawResponse(client, server, auth)

    def get_location_stats(
        self,
        id_: str,
        *,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stats:
        """The same statistics as ``GET /v1/stats``, for one location.

        Args:
            id_: Location ID (``loc_…``).
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stats.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No location with that ID in this
                workspace and mode (``resource_not_found``). A ``since`` or ``until`` that can't be read, or ``since``
                not earlier than ``until`` (``invalid_request``). More requests this minute than the plan allows for
                this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_location_stats(id_, since=since, until=until, request_options=request_options)
        )

    def get_stats(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Stats:
        """Review statistics for your workspace in the mode of your key: count, average rating, reviews per star,
        replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by
        location or platform.

        Args:
            location_id: Only this location.
            platform: Only this platform.
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stats.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. An unknown ``platform``, a ``since`` or
                ``until`` that is neither a date nor a timestamp with offset, or ``since`` not earlier than ``until``
                (``invalid_request``). More requests this minute than the plan allows for this key. Not counted in
                usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and the API is paused.
                Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_stats(
                location_id=location_id, platform=platform, since=since, until=until, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> StatsApiWithRawResponse:
        return self._with_raw_response


class AsyncStatsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStatsApiWithRawResponse(client, server, auth)

    async def get_location_stats(
        self,
        id_: str,
        *,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Stats:
        """The same statistics as ``GET /v1/stats``, for one location.

        Args:
            id_: Location ID (``loc_…``).
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stats.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No location with that ID in this
                workspace and mode (``resource_not_found``). A ``since`` or ``until`` that can't be read, or ``since``
                not earlier than ``until`` (``invalid_request``). More requests this minute than the plan allows for
                this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_location_stats(
                id_, since=since, until=until, request_options=request_options
            ),
        )

    async def get_stats(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Stats:
        """Review statistics for your workspace in the mode of your key: count, average rating, reviews per star,
        replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by
        location or platform.

        Args:
            location_id: Only this location.
            platform: Only this platform.
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The stats.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. An unknown ``platform``, a ``since`` or
                ``until`` that is neither a date nor a timestamp with offset, or ``since`` not earlier than ``until``
                (``invalid_request``). More requests this minute than the plan allows for this key. Not counted in
                usage. Something failed on Prisma's side. Retryable. Prisma is under maintenance and the API is paused.
                Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_stats(
                location_id=location_id, platform=platform, since=since, until=until, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncStatsApiWithRawResponse:
        return self._with_raw_response


class StatsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_location_stats(
        self,
        id_: str,
        *,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stats, GetLocationStatsErrorBody]:
        """The same statistics as ``GET /v1/stats``, for one location.

        Args:
            id_: Location ID (``loc_…``).
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/locations/{id}/stats"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Since | SinceDict | None]("since", since), param[Until | UntilDict | None]("until", until)
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Stats],
            error_mapper=get_location_stats_error_mapper,
            request_options=request_options,
        )

    def get_stats(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Stats, GetStatsErrorBody]:
        """Review statistics for your workspace in the mode of your key: count, average rating, reviews per star,
        replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by
        location or platform.

        Args:
            location_id: Only this location.
            platform: Only this platform.
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stats"),
            query_params=[
                param[str | None]("location_id", location_id),
                param[PlatformIdOrStr | None]("platform", platform),
                param[Since | SinceDict | None]("since", since),
                param[Until | UntilDict | None]("until", until),
            ],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Stats],
            error_mapper=get_stats_error_mapper,
            request_options=request_options,
        )


class AsyncStatsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_location_stats(
        self,
        id_: str,
        *,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Stats, GetLocationStatsErrorBody]:
        """The same statistics as ``GET /v1/stats``, for one location.

        Args:
            id_: Location ID (``loc_…``).
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/locations/{id}/stats"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[Since | SinceDict | None]("since", since), param[Until | UntilDict | None]("until", until)
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Stats],
            error_mapper=get_location_stats_error_mapper,
            request_options=request_options,
        )

    async def get_stats(
        self,
        *,
        location_id: str | None = None,
        platform: PlatformIdOrStr | None = None,
        since: Since | SinceDict | None = None,
        until: Until | UntilDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Stats, GetStatsErrorBody]:
        """Review statistics for your workspace in the mode of your key: count, average rating, reviews per star,
        replies, reply rate, median reply time, unanswered negative reviews and a month-by-month series. Filter by
        location or platform.

        Args:
            location_id: Only this location.
            platform: Only this platform.
            since: Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp
                with offset. Default: 12 months before ``until``.
            until: End of the period (not included). Default: now.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/stats"),
            query_params=[
                param[str | None]("location_id", location_id),
                param[PlatformIdOrStr | None]("platform", platform),
                param[Since | SinceDict | None]("since", since),
                param[Until | UntilDict | None]("until", until),
            ],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Stats],
            error_mapper=get_stats_error_mapper,
            request_options=request_options,
        )
