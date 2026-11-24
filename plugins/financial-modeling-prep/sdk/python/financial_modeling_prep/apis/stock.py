from __future__ import annotations

from typing import Any

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
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Stock:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = StockWithRawResponse(client, server, auth)

    def list_stocks(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Any]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stock list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_stocks(request_options=request_options))

    @property
    def with_raw_response(self) -> StockWithRawResponse:
        return self._with_raw_response


class AsyncStock:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncStockWithRawResponse(client, server, auth)

    async def list_stocks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Any]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Stock list

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_stocks(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStockWithRawResponse:
        return self._with_raw_response


class StockWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_stocks(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[list[Any], RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/stock/list"),
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[list[Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncStockWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_stocks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Any], RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/stock/list"),
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[list[Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
