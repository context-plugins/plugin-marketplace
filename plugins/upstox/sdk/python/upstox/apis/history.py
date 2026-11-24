from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_historical_candle_data2_error import (
    GetHistoricalCandleData2ErrorBody,
    get_historical_candle_data2_error_mapper,
)
from ..errors.get_historical_candle_data3_error import (
    GetHistoricalCandleData3ErrorBody,
    get_historical_candle_data3_error_mapper,
)
from ..errors.get_intra_day_candle_data1_error import (
    GetIntraDayCandleData1ErrorBody,
    get_intra_day_candle_data1_error_mapper,
)
from ..models.get_historical_candle_response import GetHistoricalCandleResponse
from ..models.get_intra_day_candle_response import GetIntraDayCandleResponse
from ..server.server import Server


class History:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = HistoryWithRawResponse(client, server)

    def get_historical_candle_data_2(
        self, instrument_key: str, interval: str, to_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetHistoricalCandleResponse:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
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
            self._with_raw_response.get_historical_candle_data_2(
                instrument_key, interval, to_date, request_options=request_options
            ),
        )

    def get_historical_candle_data_3(
        self,
        instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetHistoricalCandleResponse:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
            from_date: Value sent with the request.
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
            self._with_raw_response.get_historical_candle_data_3(
                instrument_key, interval, to_date, from_date, request_options=request_options
            ),
        )

    def get_intra_day_candle_data_1(
        self, instrument_key: str, interval: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetIntraDayCandleResponse:
        """Get OHLC values for all instruments for the present trading day

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1076 - Interval accepts one of (1minute,30minute)<br>UDAPI1021 -
                Instrument key is of invalid format<br>UDAPI100011 - Invalid Instrument key Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_intra_day_candle_data_1(
                instrument_key, interval, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> HistoryWithRawResponse:
        return self._with_raw_response


class AsyncHistory:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncHistoryWithRawResponse(client, server)

    async def get_historical_candle_data_2(
        self,
        instrument_key: str,
        interval: str,
        to_date: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetHistoricalCandleResponse:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
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
            await self._with_raw_response.get_historical_candle_data_2(
                instrument_key, interval, to_date, request_options=request_options
            ),
        )

    async def get_historical_candle_data_3(
        self,
        instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetHistoricalCandleResponse:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
            from_date: Value sent with the request.
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
            await self._with_raw_response.get_historical_candle_data_3(
                instrument_key, interval, to_date, from_date, request_options=request_options
            ),
        )

    async def get_intra_day_candle_data_1(
        self, instrument_key: str, interval: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetIntraDayCandleResponse:
        """Get OHLC values for all instruments for the present trading day

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1076 - Interval accepts one of (1minute,30minute)<br>UDAPI1021 -
                Instrument key is of invalid format<br>UDAPI100011 - Invalid Instrument key Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_intra_day_candle_data_1(
                instrument_key, interval, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncHistoryWithRawResponse:
        return self._with_raw_response


class HistoryWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_historical_candle_data_2(
        self, instrument_key: str, interval: str, to_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData2ErrorBody]:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}"),
            path_params=[
                param[str]("instrumentKey", instrument_key),
                param[str]("interval", interval),
                param[str]("to_date", to_date),
            ],
            decoder=json_decoder[GetHistoricalCandleResponse],
            error_mapper=get_historical_candle_data2_error_mapper,
            request_options=request_options,
        )

    def get_historical_candle_data_3(
        self,
        instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData3ErrorBody]:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
            from_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}"),
            path_params=[
                param[str]("instrumentKey", instrument_key),
                param[str]("interval", interval),
                param[str]("to_date", to_date),
                param[str]("from_date", from_date),
            ],
            decoder=json_decoder[GetHistoricalCandleResponse],
            error_mapper=get_historical_candle_data3_error_mapper,
            request_options=request_options,
        )

    def get_intra_day_candle_data_1(
        self, instrument_key: str, interval: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntraDayCandleResponse, GetIntraDayCandleData1ErrorBody]:
        """Get OHLC values for all instruments for the present trading day

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/historical-candle/intraday/{instrumentKey}/{interval}"),
            path_params=[param[str]("instrumentKey", instrument_key), param[str]("interval", interval)],
            decoder=json_decoder[GetIntraDayCandleResponse],
            error_mapper=get_intra_day_candle_data1_error_mapper,
            request_options=request_options,
        )


class AsyncHistoryWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_historical_candle_data_2(
        self,
        instrument_key: str,
        interval: str,
        to_date: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData2ErrorBody]:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}"),
            path_params=[
                param[str]("instrumentKey", instrument_key),
                param[str]("interval", interval),
                param[str]("to_date", to_date),
            ],
            decoder=async_json_decoder[GetHistoricalCandleResponse],
            error_mapper=get_historical_candle_data2_error_mapper,
            request_options=request_options,
        )

    async def get_historical_candle_data_3(
        self,
        instrument_key: str,
        interval: str,
        to_date: str,
        from_date: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetHistoricalCandleResponse, GetHistoricalCandleData3ErrorBody]:
        """Get OHLC values for all instruments across various timeframes. Historical data can be fetched for the
        following durations. 1minute: last 1 month candles till endDate 30minute: last 1 year candles till endDate day:
        last 1 year candles till endDate week: last 10 year candles till endDate month: last 10 year candles till
        endDate

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            to_date: Value sent with the request.
            from_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/historical-candle/{instrumentKey}/{interval}/{to_date}/{from_date}"),
            path_params=[
                param[str]("instrumentKey", instrument_key),
                param[str]("interval", interval),
                param[str]("to_date", to_date),
                param[str]("from_date", from_date),
            ],
            decoder=async_json_decoder[GetHistoricalCandleResponse],
            error_mapper=get_historical_candle_data3_error_mapper,
            request_options=request_options,
        )

    async def get_intra_day_candle_data_1(
        self, instrument_key: str, interval: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetIntraDayCandleResponse, GetIntraDayCandleData1ErrorBody]:
        """Get OHLC values for all instruments for the present trading day

        Args:
            instrument_key: Value sent with the request.
            interval: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/historical-candle/intraday/{instrumentKey}/{interval}"),
            path_params=[param[str]("instrumentKey", instrument_key), param[str]("interval", interval)],
            decoder=async_json_decoder[GetIntraDayCandleResponse],
            error_mapper=get_intra_day_candle_data1_error_mapper,
            request_options=request_options,
        )
