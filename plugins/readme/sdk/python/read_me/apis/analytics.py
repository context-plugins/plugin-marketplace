from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    Date,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Analytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticsWithRawResponse(client, server, auth)

    def get_pageviews(
        self, *, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            start: Value sent with the request.
            end: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page view stats

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_pageviews(start=start, end=end, request_options=request_options))

    def get_quality(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Returns quality scores produced by Docs Audit for the project's pages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Quality scores

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_quality(request_options=request_options))

    def get_search(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search analytics

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_search(request_options=request_options))

    @property
    def with_raw_response(self) -> AnalyticsWithRawResponse:
        return self._with_raw_response


class AsyncAnalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticsWithRawResponse(client, server, auth)

    async def get_pageviews(
        self,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            start: Value sent with the request.
            end: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Page view stats

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_pageviews(start=start, end=end, request_options=request_options)
        )

    async def get_quality(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Returns quality scores produced by Docs Audit for the project's pages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Quality scores

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_quality(request_options=request_options))

    async def get_search(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search analytics

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_search(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAnalyticsWithRawResponse:
        return self._with_raw_response


class AnalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_pageviews(
        self, *, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            start: Value sent with the request.
            end: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pageviews"),
            query_params=[param[Date | None]("start", start), param[Date | None]("end", end)],
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_quality(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Returns quality scores produced by Docs Audit for the project's pages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/quality"),
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_search(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAnalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_pageviews(
        self,
        *,
        start: Date | None = None,
        end: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            start: Value sent with the request.
            end: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pageviews"),
            query_params=[param[Date | None]("start", start), param[Date | None]("end", end)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_quality(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Returns quality scores produced by Docs Audit for the project's pages.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/quality"),
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_search(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
