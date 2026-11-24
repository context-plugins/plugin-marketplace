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
from ..errors.get_ltp_error import GetLtpErrorBody, get_ltp_error_mapper
from ..errors.get_market_quote_ohlcv3_error import GetMarketQuoteOhlcv3ErrorBody, get_market_quote_ohlcv3_error_mapper
from ..errors.get_market_quote_option_greek_error import (
    GetMarketQuoteOptionGreekErrorBody,
    get_market_quote_option_greek_error_mapper,
)
from ..models.get_market_quote_last_traded_price_response_v3 import GetMarketQuoteLastTradedPriceResponseV3
from ..models.get_market_quote_ohlc_response_v3 import GetMarketQuoteOhlcResponseV3
from ..models.get_market_quote_option_greek_response_v3 import GetMarketQuoteOptionGreekResponseV3
from ..server.server import Server


class MarketQuoteV3:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MarketQuoteV3WithRawResponse(client, server, auth)

    def get_ltp(
        self, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetMarketQuoteLastTradedPriceResponseV3:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 500 instruments in one go.

        Args:
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - symbol is required<br>UDAPI1011 - symbol is of invalid
                format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_ltp(instrument_key=instrument_key, request_options=request_options))

    def get_market_quote_ohlcv3(
        self, interval: str, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetMarketQuoteOhlcResponseV3:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 500 instruments in one go.

        Args:
            interval: Interval to get ohlc data
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
            self._with_raw_response.get_market_quote_ohlcv3(
                interval, instrument_key=instrument_key, request_options=request_options
            ),
        )

    def get_market_quote_option_greek(
        self, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetMarketQuoteOptionGreekResponseV3:
        """This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API
        returns the Option Greek data of up to 500 instruments in one go.

        Args:
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
            self._with_raw_response.get_market_quote_option_greek(
                instrument_key=instrument_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MarketQuoteV3WithRawResponse:
        return self._with_raw_response


class AsyncMarketQuoteV3:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMarketQuoteV3WithRawResponse(client, server, auth)

    async def get_ltp(
        self, *, instrument_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMarketQuoteLastTradedPriceResponseV3:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 500 instruments in one go.

        Args:
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
            await self._with_raw_response.get_ltp(instrument_key=instrument_key, request_options=request_options)
        )

    async def get_market_quote_ohlcv3(
        self,
        interval: str,
        *,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetMarketQuoteOhlcResponseV3:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 500 instruments in one go.

        Args:
            interval: Interval to get ohlc data
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
            await self._with_raw_response.get_market_quote_ohlcv3(
                interval, instrument_key=instrument_key, request_options=request_options
            ),
        )

    async def get_market_quote_option_greek(
        self, *, instrument_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMarketQuoteOptionGreekResponseV3:
        """This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API
        returns the Option Greek data of up to 500 instruments in one go.

        Args:
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
            await self._with_raw_response.get_market_quote_option_greek(
                instrument_key=instrument_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMarketQuoteV3WithRawResponse:
        return self._with_raw_response


class MarketQuoteV3WithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_ltp(
        self, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketQuoteLastTradedPriceResponseV3, GetLtpErrorBody]:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 500 instruments in one go.

        Args:
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/market-quote/ltp"),
            query_params=[param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMarketQuoteLastTradedPriceResponseV3],
            error_mapper=get_ltp_error_mapper,
            request_options=request_options,
        )

    def get_market_quote_ohlcv3(
        self, interval: str, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketQuoteOhlcResponseV3, GetMarketQuoteOhlcv3ErrorBody]:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 500 instruments in one go.

        Args:
            interval: Interval to get ohlc data
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/market-quote/ohlc"),
            query_params=[param[str]("interval", interval), param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMarketQuoteOhlcResponseV3],
            error_mapper=get_market_quote_ohlcv3_error_mapper,
            request_options=request_options,
        )

    def get_market_quote_option_greek(
        self, *, instrument_key: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketQuoteOptionGreekResponseV3, GetMarketQuoteOptionGreekErrorBody]:
        """This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API
        returns the Option Greek data of up to 500 instruments in one go.

        Args:
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/market-quote/option-greek"),
            query_params=[param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMarketQuoteOptionGreekResponseV3],
            error_mapper=get_market_quote_option_greek_error_mapper,
            request_options=request_options,
        )


class AsyncMarketQuoteV3WithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_ltp(
        self, *, instrument_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketQuoteLastTradedPriceResponseV3, GetLtpErrorBody]:
        """This API provides the functionality to retrieve the LTP quotes for one or more instruments.This API returns
        the LTPs of up to 500 instruments in one go.

        Args:
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/market-quote/ltp"),
            query_params=[param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMarketQuoteLastTradedPriceResponseV3],
            error_mapper=get_ltp_error_mapper,
            request_options=request_options,
        )

    async def get_market_quote_ohlcv3(
        self,
        interval: str,
        *,
        instrument_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMarketQuoteOhlcResponseV3, GetMarketQuoteOhlcv3ErrorBody]:
        """This API provides the functionality to retrieve the OHLC quotes for one or more instruments.This API returns
        the OHLC snapshots of up to 500 instruments in one go.

        Args:
            interval: Interval to get ohlc data
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/market-quote/ohlc"),
            query_params=[param[str]("interval", interval), param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMarketQuoteOhlcResponseV3],
            error_mapper=get_market_quote_ohlcv3_error_mapper,
            request_options=request_options,
        )

    async def get_market_quote_option_greek(
        self, *, instrument_key: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketQuoteOptionGreekResponseV3, GetMarketQuoteOptionGreekErrorBody]:
        """This API provides the functionality to retrieve the Option Greek data for one or more instruments.This API
        returns the Option Greek data of up to 500 instruments in one go.

        Args:
            instrument_key: Comma separated list of instrument keys
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/market-quote/option-greek"),
            query_params=[param[str | None]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMarketQuoteOptionGreekResponseV3],
            error_mapper=get_market_quote_option_greek_error_mapper,
            request_options=request_options,
        )
