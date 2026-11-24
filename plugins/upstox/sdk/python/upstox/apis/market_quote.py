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
from ..errors.get_full_market_quote_error import GetFullMarketQuoteErrorBody, get_full_market_quote_error_mapper
from ..errors.get_market_quote_ohlc_error import GetMarketQuoteOhlcErrorBody, get_market_quote_ohlc_error_mapper
from ..errors.ltp_error import LtpErrorBody, ltp_error_mapper
from ..models.get_full_market_quote_response import GetFullMarketQuoteResponse
from ..models.get_market_quote_last_traded_price_response import GetMarketQuoteLastTradedPriceResponse
from ..models.get_market_quote_ohlc_response import GetMarketQuoteOhlcResponse
from ..server.server import Server


class MarketQuote:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MarketQuoteWithRawResponse(client, server, auth)

    def get_full_market_quote(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetFullMarketQuoteResponse:
        """This API provides the functionality to retrieve the full market quotes for one or more instruments.This API
        returns the complete market data snapshot of up to 500 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_full_market_quote(
                symbol=symbol, instrument_key=instrument_key, request_options=request_options
            ),
        )

    def get_market_quote_ohlc(
        self,
        interval: str,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetMarketQuoteOhlcResponse:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 1000 instruments in one go.

        Args:
            interval: Interval to get ohlc data
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI1027 - interval is required<br>UDAPI1028 - Invalid interval<br>UDAPI100011 - Invalid
                Instrument key Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests ``error``
                is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_market_quote_ohlc(
                interval, symbol=symbol, instrument_key=instrument_key, request_options=request_options
            ),
        )

    def ltp(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetMarketQuoteLastTradedPriceResponse:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 1000 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.ltp(symbol=symbol, instrument_key=instrument_key, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> MarketQuoteWithRawResponse:
        return self._with_raw_response


class AsyncMarketQuote:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMarketQuoteWithRawResponse(client, server, auth)

    async def get_full_market_quote(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetFullMarketQuoteResponse:
        """This API provides the functionality to retrieve the full market quotes for one or more instruments.This API
        returns the complete market data snapshot of up to 500 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_full_market_quote(
                symbol=symbol, instrument_key=instrument_key, request_options=request_options
            ),
        )

    async def get_market_quote_ohlc(
        self,
        interval: str,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetMarketQuoteOhlcResponse:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 1000 instruments in one go.

        Args:
            interval: Interval to get ohlc data
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI1027 - interval is required<br>UDAPI1028 - Invalid interval<br>UDAPI100011 - Invalid
                Instrument key Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests ``error``
                is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_market_quote_ohlc(
                interval, symbol=symbol, instrument_key=instrument_key, request_options=request_options
            ),
        )

    async def ltp(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetMarketQuoteLastTradedPriceResponse:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 1000 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.ltp(
                symbol=symbol, instrument_key=instrument_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMarketQuoteWithRawResponse:
        return self._with_raw_response


class MarketQuoteWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_full_market_quote(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetFullMarketQuoteResponse, GetFullMarketQuoteErrorBody]:
        """This API provides the functionality to retrieve the full market quotes for one or more instruments.This API
        returns the complete market data snapshot of up to 500 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market-quote/quotes"),
            query_params=[param[str | None]("symbol", symbol), param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetFullMarketQuoteResponse],
            error_mapper=get_full_market_quote_error_mapper,
            request_options=request_options,
        )

    def get_market_quote_ohlc(
        self,
        interval: str,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMarketQuoteOhlcResponse, GetMarketQuoteOhlcErrorBody]:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 1000 instruments in one go.

        Args:
            interval: Interval to get ohlc data
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market-quote/ohlc"),
            query_params=[
                param[str]("interval", interval),
                param[str | None]("symbol", symbol),
                param[str | None]("instrument_key", instrument_key),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMarketQuoteOhlcResponse],
            error_mapper=get_market_quote_ohlc_error_mapper,
            request_options=request_options,
        )

    def ltp(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMarketQuoteLastTradedPriceResponse, LtpErrorBody]:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 1000 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market-quote/ltp"),
            query_params=[param[str | None]("symbol", symbol), param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMarketQuoteLastTradedPriceResponse],
            error_mapper=ltp_error_mapper,
            request_options=request_options,
        )


class AsyncMarketQuoteWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_full_market_quote(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetFullMarketQuoteResponse, GetFullMarketQuoteErrorBody]:
        """This API provides the functionality to retrieve the full market quotes for one or more instruments.This API
        returns the complete market data snapshot of up to 500 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market-quote/quotes"),
            query_params=[param[str | None]("symbol", symbol), param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetFullMarketQuoteResponse],
            error_mapper=get_full_market_quote_error_mapper,
            request_options=request_options,
        )

    async def get_market_quote_ohlc(
        self,
        interval: str,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMarketQuoteOhlcResponse, GetMarketQuoteOhlcErrorBody]:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 1000 instruments in one go.

        Args:
            interval: Interval to get ohlc data
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market-quote/ohlc"),
            query_params=[
                param[str]("interval", interval),
                param[str | None]("symbol", symbol),
                param[str | None]("instrument_key", instrument_key),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMarketQuoteOhlcResponse],
            error_mapper=get_market_quote_ohlc_error_mapper,
            request_options=request_options,
        )

    async def ltp(
        self,
        *,
        symbol: str | None = None,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMarketQuoteLastTradedPriceResponse, LtpErrorBody]:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 1000 instruments in one go.

        Args:
            symbol: Comma separated list of symbols
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market-quote/ltp"),
            query_params=[param[str | None]("symbol", symbol), param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMarketQuoteLastTradedPriceResponse],
            error_mapper=ltp_error_mapper,
            request_options=request_options,
        )
