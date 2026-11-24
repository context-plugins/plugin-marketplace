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
from ..errors.get_expired_future_contracts_error import (
    GetExpiredFutureContractsErrorBody,
    get_expired_future_contracts_error_mapper,
)
from ..errors.get_expired_historical_candle_data_error import (
    GetExpiredHistoricalCandleDataErrorBody,
    get_expired_historical_candle_data_error_mapper,
)
from ..errors.get_expired_option_contracts_error import (
    GetExpiredOptionContractsErrorBody,
    get_expired_option_contracts_error_mapper,
)
from ..errors.get_expiries_response_error import GetExpiriesResponseErrorBody, get_expiries_response_error_mapper
from ..models.get_expired_futures_contract_response import GetExpiredFuturesContractResponse
from ..models.get_expiries_response import GetExpiriesResponse
from ..models.get_historical_candle_response import GetHistoricalCandleResponse
from ..models.get_option_contract_response import GetOptionContractResponse
from ..server.server import Server


class ExpiredInstrument:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ExpiredInstrumentWithRawResponse(client, server, auth)

    def get_expired_future_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetExpiredFuturesContractResponse:
        """This API provides the functionality to retrieve expired future contracts for a given instrument key and
        expiry date.

        Args:
            instrument_key: Instrument Key of asset
            expiry_date: Expiry date of the instrument
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - instrument_key is required<br>UDAPI1011 - instrument_key is of
                invalid format<br>UDAPI100011 - Invalid Instrument key<br> Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_expired_future_contracts(
                instrument_key, expiry_date, request_options=request_options
            ),
        )

    def get_expired_historical_candle_data(
        self,
        expired_instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetHistoricalCandleResponse:
        """Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched
        for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till
        endDate day: last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year
        candles till endDate

        Args:
            expired_instrument_key: Expired Instrument Key of asset
            interval: Interval to get expired ohlc data
            to_date: to date
            from_date: from date
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1015 - to_date must be greater than or equal to from_date and Date should
                be in valid format: yyyy-mm-dd<br>UDAPI1020 - Interval accepts one of
                (1minute,30minute,day,week,month)<br>UDAPI1021 - Instrument key is of invalid format<br>UDAPI1022 -
                to_date is required<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_expired_historical_candle_data(
                expired_instrument_key, interval, to_date, from_date, request_options=request_options
            ),
        )

    def get_expired_option_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetOptionContractResponse:
        """This API provides the functionality to retrieve the expired option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_expired_option_contracts(
                instrument_key, expiry_date, request_options=request_options
            ),
        )

    def get_expiries_response(
        self, instrument_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetExpiriesResponse:
        """This API provides the functionality to retrieve expiry dates for a given instrument key.

        Args:
            instrument_key: Instrument Key of asset
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - instrument_key is required<br>UDAPI1011 - instrument_key is of
                invalid format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_expiries_response(instrument_key, request_options=request_options))

    @property
    def with_raw_response(self) -> ExpiredInstrumentWithRawResponse:
        return self._with_raw_response


class AsyncExpiredInstrument:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncExpiredInstrumentWithRawResponse(client, server, auth)

    async def get_expired_future_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetExpiredFuturesContractResponse:
        """This API provides the functionality to retrieve expired future contracts for a given instrument key and
        expiry date.

        Args:
            instrument_key: Instrument Key of asset
            expiry_date: Expiry date of the instrument
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - instrument_key is required<br>UDAPI1011 - instrument_key is of
                invalid format<br>UDAPI100011 - Invalid Instrument key<br> Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_expired_future_contracts(
                instrument_key, expiry_date, request_options=request_options
            ),
        )

    async def get_expired_historical_candle_data(
        self,
        expired_instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetHistoricalCandleResponse:
        """Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched
        for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till
        endDate day: last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year
        candles till endDate

        Args:
            expired_instrument_key: Expired Instrument Key of asset
            interval: Interval to get expired ohlc data
            to_date: to date
            from_date: from date
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1015 - to_date must be greater than or equal to from_date and Date should
                be in valid format: yyyy-mm-dd<br>UDAPI1020 - Interval accepts one of
                (1minute,30minute,day,week,month)<br>UDAPI1021 - Instrument key is of invalid format<br>UDAPI1022 -
                to_date is required<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_expired_historical_candle_data(
                expired_instrument_key, interval, to_date, from_date, request_options=request_options
            ),
        )

    async def get_expired_option_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetOptionContractResponse:
        """This API provides the functionality to retrieve the expired option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_expired_option_contracts(
                instrument_key, expiry_date, request_options=request_options
            ),
        )

    async def get_expiries_response(
        self, instrument_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetExpiriesResponse:
        """This API provides the functionality to retrieve expiry dates for a given instrument key.

        Args:
            instrument_key: Instrument Key of asset
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1009 - instrument_key is required<br>UDAPI1011 - instrument_key is of
                invalid format<br>UDAPI100011 - Invalid Instrument key Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_expiries_response(instrument_key, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncExpiredInstrumentWithRawResponse:
        return self._with_raw_response


class ExpiredInstrumentWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_expired_future_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetExpiredFuturesContractResponse, GetExpiredFutureContractsErrorBody]:
        """This API provides the functionality to retrieve expired future contracts for a given instrument key and
        expiry date.

        Args:
            instrument_key: Instrument Key of asset
            expiry_date: Expiry date of the instrument
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/expired-instruments/future/contract"),
            query_params=[param[str]("instrument_key", instrument_key), param[str]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetExpiredFuturesContractResponse],
            error_mapper=get_expired_future_contracts_error_mapper,
            request_options=request_options,
        )

    def get_expired_historical_candle_data(
        self,
        expired_instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetHistoricalCandleResponse, GetExpiredHistoricalCandleDataErrorBody]:
        """Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched
        for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till
        endDate day: last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year
        candles till endDate

        Args:
            expired_instrument_key: Expired Instrument Key of asset
            interval: Interval to get expired ohlc data
            to_date: to date
            from_date: from date
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date}"
            ),
            path_params=[
                param[str]("expired_instrument_key", expired_instrument_key),
                param[str]("interval", interval),
                param[str]("to_date", to_date),
                param[str]("from_date", from_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetHistoricalCandleResponse],
            error_mapper=get_expired_historical_candle_data_error_mapper,
            request_options=request_options,
        )

    def get_expired_option_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetOptionContractResponse, GetExpiredOptionContractsErrorBody]:
        """This API provides the functionality to retrieve the expired option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/expired-instruments/option/contract"),
            query_params=[param[str]("instrument_key", instrument_key), param[str]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetOptionContractResponse],
            error_mapper=get_expired_option_contracts_error_mapper,
            request_options=request_options,
        )

    def get_expiries_response(
        self, instrument_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetExpiriesResponse, GetExpiriesResponseErrorBody]:
        """This API provides the functionality to retrieve expiry dates for a given instrument key.

        Args:
            instrument_key: Instrument Key of asset
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/expired-instruments/expiries"),
            query_params=[param[str]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetExpiriesResponse],
            error_mapper=get_expiries_response_error_mapper,
            request_options=request_options,
        )


class AsyncExpiredInstrumentWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_expired_future_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetExpiredFuturesContractResponse, GetExpiredFutureContractsErrorBody]:
        """This API provides the functionality to retrieve expired future contracts for a given instrument key and
        expiry date.

        Args:
            instrument_key: Instrument Key of asset
            expiry_date: Expiry date of the instrument
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/expired-instruments/future/contract"),
            query_params=[param[str]("instrument_key", instrument_key), param[str]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetExpiredFuturesContractResponse],
            error_mapper=get_expired_future_contracts_error_mapper,
            request_options=request_options,
        )

    async def get_expired_historical_candle_data(
        self,
        expired_instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetHistoricalCandleResponse, GetExpiredHistoricalCandleDataErrorBody]:
        """Get Expired OHLC values for all instruments across various timeframes. Expired Historical data can be fetched
        for the following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till
        endDate day: last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year
        candles till endDate

        Args:
            expired_instrument_key: Expired Instrument Key of asset
            interval: Interval to get expired ohlc data
            to_date: to date
            from_date: from date
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/v2/expired-instruments/historical-candle/{expired_instrument_key}/{interval}/{to_date}/{from_date}"
            ),
            path_params=[
                param[str]("expired_instrument_key", expired_instrument_key),
                param[str]("interval", interval),
                param[str]("to_date", to_date),
                param[str]("from_date", from_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetHistoricalCandleResponse],
            error_mapper=get_expired_historical_candle_data_error_mapper,
            request_options=request_options,
        )

    async def get_expired_option_contracts(
        self, instrument_key: str, expiry_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetOptionContractResponse, GetExpiredOptionContractsErrorBody]:
        """This API provides the functionality to retrieve the expired option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/expired-instruments/option/contract"),
            query_params=[param[str]("instrument_key", instrument_key), param[str]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetOptionContractResponse],
            error_mapper=get_expired_option_contracts_error_mapper,
            request_options=request_options,
        )

    async def get_expiries_response(
        self, instrument_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetExpiriesResponse, GetExpiriesResponseErrorBody]:
        """This API provides the functionality to retrieve expiry dates for a given instrument key.

        Args:
            instrument_key: Instrument Key of asset
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/expired-instruments/expiries"),
            query_params=[param[str]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetExpiriesResponse],
            error_mapper=get_expiries_response_error_mapper,
            request_options=request_options,
        )
