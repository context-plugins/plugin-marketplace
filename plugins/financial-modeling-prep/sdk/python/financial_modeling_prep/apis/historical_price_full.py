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
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.historical_price_response import HistoricalPriceResponse
from ..server.server import Server


class HistoricalPriceFull:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HistoricalPriceFullWithRawResponse(client, server, auth)

    def get_historical_price(
        self,
        symbol: str,
        *,
        from_: Date | None = None,
        to: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> HistoricalPriceResponse:
        """Returns historical daily OHLCV data for a ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Historical price series

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_historical_price(symbol, from_=from_, to=to, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> HistoricalPriceFullWithRawResponse:
        return self._with_raw_response


class AsyncHistoricalPriceFull:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHistoricalPriceFullWithRawResponse(client, server, auth)

    async def get_historical_price(
        self,
        symbol: str,
        *,
        from_: Date | None = None,
        to: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> HistoricalPriceResponse:
        """Returns historical daily OHLCV data for a ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Historical price series

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_historical_price(
                symbol, from_=from_, to=to, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncHistoricalPriceFullWithRawResponse:
        return self._with_raw_response


class HistoricalPriceFullWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_historical_price(
        self,
        symbol: str,
        *,
        from_: Date | None = None,
        to: Date | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[HistoricalPriceResponse, RawError]:
        """Returns historical daily OHLCV data for a ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/historical-price-full/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            query_params=[param[Date | None]("from", from_), param[Date | None]("to", to)],
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[HistoricalPriceResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncHistoricalPriceFullWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_historical_price(
        self,
        symbol: str,
        *,
        from_: Date | None = None,
        to: Date | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[HistoricalPriceResponse, RawError]:
        """Returns historical daily OHLCV data for a ticker symbol.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            from_: Value sent with the request.
            to: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/historical-price-full/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            query_params=[param[Date | None]("from", from_), param[Date | None]("to", to)],
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[HistoricalPriceResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
