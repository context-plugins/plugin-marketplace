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
from ..models.quote import Quote
from ..server.server import Server


class QuoteApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QuoteApiWithRawResponse(client, server, auth)

    def get_quote(self, symbol: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Quote]:
        """Returns the latest price and market data for a given ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Quote data

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_quote(symbol, request_options=request_options))

    @property
    def with_raw_response(self) -> QuoteApiWithRawResponse:
        return self._with_raw_response


class AsyncQuoteApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQuoteApiWithRawResponse(client, server, auth)

    async def get_quote(self, symbol: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Quote]:
        """Returns the latest price and market data for a given ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Quote data

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_quote(symbol, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncQuoteApiWithRawResponse:
        return self._with_raw_response


class QuoteApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_quote(
        self, symbol: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Quote], RawError]:
        """Returns the latest price and market data for a given ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/quote/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[list[Quote]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncQuoteApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_quote(
        self, symbol: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Quote], RawError]:
        """Returns the latest price and market data for a given ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/quote/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[list[Quote]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
