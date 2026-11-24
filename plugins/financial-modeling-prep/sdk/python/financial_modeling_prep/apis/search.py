from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.search_response import SearchResponse
from ..server.server import Server


class Search:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SearchWithRawResponse(client, server, auth)

    def search_symbols(
        self,
        query: str,
        *,
        limit: int | None = 10,
        exchange: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[SearchResponse]:
        """Send a ``GET`` request.

        Args:
            query: Value sent with the request.
            limit: Value sent with the request.
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.search_symbols(
                query, limit=limit, exchange=exchange, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SearchWithRawResponse:
        return self._with_raw_response


class AsyncSearch:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSearchWithRawResponse(client, server, auth)

    async def search_symbols(
        self,
        query: str,
        *,
        limit: int | None = 10,
        exchange: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[SearchResponse]:
        """Send a ``GET`` request.

        Args:
            query: Value sent with the request.
            limit: Value sent with the request.
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search results

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.search_symbols(
                query, limit=limit, exchange=exchange, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSearchWithRawResponse:
        return self._with_raw_response


class SearchWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_symbols(
        self,
        query: str,
        *,
        limit: int | None = 10,
        exchange: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[SearchResponse], RawError]:
        """Send a ``GET`` request.

        Args:
            query: Value sent with the request.
            limit: Value sent with the request.
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            query_params=[
                param[str]("query", query), param[int | None]("limit", limit), param[str | None]("exchange", exchange)
            ],
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[list[SearchResponse]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSearchWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_symbols(
        self,
        query: str,
        *,
        limit: int | None = 10,
        exchange: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[SearchResponse], RawError]:
        """Send a ``GET`` request.

        Args:
            query: Value sent with the request.
            limit: Value sent with the request.
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            query_params=[
                param[str]("query", query), param[int | None]("limit", limit), param[str | None]("exchange", exchange)
            ],
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[list[SearchResponse]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
