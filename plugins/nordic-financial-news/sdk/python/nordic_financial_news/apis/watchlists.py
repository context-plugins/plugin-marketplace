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
from ..errors.get_api_v1_watchlists_by_id_error import (
    GetApiV1WatchlistsByIdErrorBody,
    get_api_v1_watchlists_by_id_error_mapper,
)
from ..errors.get_api_v1_watchlists_error import GetApiV1WatchlistsErrorBody, get_api_v1_watchlists_error_mapper
from ..models.api_v1_watchlists_response import ApiV1WatchlistsResponse
from ..models.api_v1_watchlists_response1 import ApiV1WatchlistsResponse1
from ..server.server import Server


class Watchlists:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WatchlistsWithRawResponse(client, server, auth)

    def get_api_v1_watchlists(
        self,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WatchlistsResponse:
        """Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation
        date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details
        endpoint to retrieve companies. Requires the ``read:watchlist`` scope.

        Args:
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watchlists retrieved successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_watchlists(
                if_none_match=if_none_match, if_modified_since=if_modified_since, request_options=request_options
            ),
        )

    def get_api_v1_watchlists_by_id(
        self,
        id_: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV1WatchlistsResponse1:
        """Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company
        name. Hidden and unverified companies are excluded. Requires the ``read:watchlist`` scope.

        Args:
            id_: Watchlist ID (e.g. ``a1b2c3d4e5f6``).
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watchlist retrieved successfully

        Raises:
            ApiError: Watchlist not found Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_watchlists_by_id(
                id_,
                limit=limit,
                cursor=cursor,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> WatchlistsWithRawResponse:
        return self._with_raw_response


class AsyncWatchlists:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWatchlistsWithRawResponse(client, server, auth)

    async def get_api_v1_watchlists(
        self,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WatchlistsResponse:
        """Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation
        date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details
        endpoint to retrieve companies. Requires the ``read:watchlist`` scope.

        Args:
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watchlists retrieved successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_watchlists(
                if_none_match=if_none_match, if_modified_since=if_modified_since, request_options=request_options
            ),
        )

    async def get_api_v1_watchlists_by_id(
        self,
        id_: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1WatchlistsResponse1:
        """Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company
        name. Hidden and unverified companies are excluded. Requires the ``read:watchlist`` scope.

        Args:
            id_: Watchlist ID (e.g. ``a1b2c3d4e5f6``).
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Watchlist retrieved successfully

        Raises:
            ApiError: Watchlist not found Unauthorized ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_watchlists_by_id(
                id_,
                limit=limit,
                cursor=cursor,
                if_none_match=if_none_match,
                if_modified_since=if_modified_since,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWatchlistsWithRawResponse:
        return self._with_raw_response


class WatchlistsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_watchlists(
        self,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WatchlistsResponse, GetApiV1WatchlistsErrorBody]:
        """Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation
        date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details
        endpoint to retrieve companies. Requires the ``read:watchlist`` scope.

        Args:
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/watchlists"),
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WatchlistsResponse],
            error_mapper=get_api_v1_watchlists_error_mapper,
            request_options=request_options,
        )

    def get_api_v1_watchlists_by_id(
        self,
        id_: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WatchlistsResponse1, GetApiV1WatchlistsByIdErrorBody]:
        """Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company
        name. Hidden and unverified companies are excluded. Requires the ``read:watchlist`` scope.

        Args:
            id_: Watchlist ID (e.g. ``a1b2c3d4e5f6``).
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/watchlists/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1WatchlistsResponse1],
            error_mapper=get_api_v1_watchlists_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncWatchlistsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_watchlists(
        self,
        *,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WatchlistsResponse, GetApiV1WatchlistsErrorBody]:
        """Returns all watchlists belonging to the authenticated user, ordered by position (ascending) then creation
        date. Each watchlist includes a company count but not the full company list. Use the Get Watchlist Details
        endpoint to retrieve companies. Requires the ``read:watchlist`` scope.

        Args:
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/watchlists"),
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WatchlistsResponse],
            error_mapper=get_api_v1_watchlists_error_mapper,
            request_options=request_options,
        )

    async def get_api_v1_watchlists_by_id(
        self,
        id_: str,
        *,
        limit: int | None = None,
        cursor: str | None = None,
        if_none_match: str | None = None,
        if_modified_since: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1WatchlistsResponse1, GetApiV1WatchlistsByIdErrorBody]:
        """Returns watchlist details along with a paginated list of its companies, ordered alphabetically by company
        name. Hidden and unverified companies are excluded. Requires the ``read:watchlist`` scope.

        Args:
            id_: Watchlist ID (e.g. ``a1b2c3d4e5f6``).
            limit: Number of companies to return per page (default 25, max 100).
            cursor: Opaque pagination cursor returned as ``pagination.next_cursor`` from a previous response.
            if_none_match: ETag value from a previous response. Returns ``304 Not Modified`` if data has not changed.
            if_modified_since: HTTP date from a previous ``Last-Modified`` header. Returns ``304 Not Modified`` if
                nothing has changed since.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/watchlists/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[str | None]("cursor", cursor)],
            headers=[
                param[str | None]("If-None-Match", if_none_match),
                param[str | None]("If-Modified-Since", if_modified_since),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1WatchlistsResponse1],
            error_mapper=get_api_v1_watchlists_by_id_error_mapper,
            request_options=request_options,
        )
