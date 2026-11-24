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
from ..errors.get_change_oi_data_error import GetChangeOiDataErrorBody, get_change_oi_data_error_mapper
from ..errors.get_dii_data_error import GetDiiDataErrorBody, get_dii_data_error_mapper
from ..errors.get_exchange_timings_error import GetExchangeTimingsErrorBody, get_exchange_timings_error_mapper
from ..errors.get_fii_data_error import GetFiiDataErrorBody, get_fii_data_error_mapper
from ..errors.get_holiday_error import GetHolidayErrorBody, get_holiday_error_mapper
from ..errors.get_holidays_error import GetHolidaysErrorBody, get_holidays_error_mapper
from ..errors.get_market_status_error import GetMarketStatusErrorBody, get_market_status_error_mapper
from ..errors.get_max_pain_data_error import GetMaxPainDataErrorBody, get_max_pain_data_error_mapper
from ..errors.get_oi_data_error import GetOiDataErrorBody, get_oi_data_error_mapper
from ..errors.get_pcr_data_error import GetPcrDataErrorBody, get_pcr_data_error_mapper
from ..errors.get_smartlist_futures_error import GetSmartlistFuturesErrorBody, get_smartlist_futures_error_mapper
from ..errors.get_smartlist_mtf_error import GetSmartlistMtfErrorBody, get_smartlist_mtf_error_mapper
from ..errors.get_smartlist_options_error import GetSmartlistOptionsErrorBody, get_smartlist_options_error_mapper
from ..models.analytics_response import AnalyticsResponse
from ..models.get_exchange_timing_response import GetExchangeTimingResponse
from ..models.get_holiday_response import GetHolidayResponse
from ..models.get_market_status_response import GetMarketStatusResponse
from ..server.server import Server


class MarketHolidaysAndTimings:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MarketHolidaysAndTimingsWithRawResponse(client, server, auth)

    def get_change_oi_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        interval: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches change in OI data for the given instrument key, expiry, date and interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which change OI data is required
            interval: Number of days for which difference in OI is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format.<br>UDAPI1204 - Invalid interval. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_change_oi_data(
                instrument_key, expiry, date, interval, request_options=request_options
            ),
        )

    def get_dii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches DII activity data for the given interval.

        Args:
            data_type: Data type. Allowed value: NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1198 - Invalid data_type. Allowed value: NSE_EQ|CASH.<br>UDAPI1199 -
                Invalid interval.<br>UDAPI1200 - Invalid from date format. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_dii_data(data_type, interval, from_=from_, request_options=request_options)
        )

    def get_exchange_timings(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetExchangeTimingResponse:
        """This API provides the functionality to retrieve the exchange timings on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_exchange_timings(date, request_options=request_options))

    def get_fii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches FII activity data for the given data type and interval.

        Args:
            data_type: Data type. Allowed values: NSE_FO|INDEX_FUTURES, NSE_FO|STOCK_FUTURES, NSE_FO|INDEX_OPTIONS,
                NSE_FO|STOCK_OPTIONS, NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1198 - Invalid data_type.<br>UDAPI1199 - Invalid interval.<br>UDAPI1200 -
                Invalid from date format. Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_fii_data(data_type, interval, from_=from_, request_options=request_options)
        )

    def get_holiday(self, date: str, *, request_options: RequestOptionsOrDict | None = None) -> GetHolidayResponse:
        """This API provides the functionality to retrieve the holiday on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_holiday(date, request_options=request_options))

    def get_holidays(self, *, request_options: RequestOptionsOrDict | None = None) -> GetHolidayResponse:
        """This API provides the functionality to retrieve the holiday list of current year

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_holidays(request_options=request_options))

    def get_market_status(
        self, exchange: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetMarketStatusResponse:
        """This API provides the functionality to retrieve the market status for particular exchange

        Args:
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_market_status(exchange, request_options=request_options))

    def get_max_pain_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which Max Pain data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format.<br>UDAPI1205 - Invalid bucket_interval. Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_max_pain_data(
                instrument_key, expiry, date, bucket_interval, request_options=request_options
            ),
        )

    def get_oi_data(
        self, instrument_key: str, expiry: str, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AnalyticsResponse:
        """Fetches OI data for the given instrument key, expiry and date.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which OI data is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format. Internal Server Error Forbidden Locked Unprocessable Entity
                Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_oi_data(instrument_key, expiry, date, request_options=request_options)
        )

    def get_pcr_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which PCR data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format.<br>UDAPI1205 - Invalid bucket_interval. Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_pcr_data(
                instrument_key, expiry, date, bucket_interval, request_options=request_options
            ),
        )

    def get_smartlist_futures(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches the smartlist of futures for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS,
                OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1212 - Invalid asset_type.<br>UDAPI1213 - Invalid category for the given
                asset_type.<br>UDAPI1214 - Invalid page_size. Maximum allowed value is 50. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_smartlist_futures(
                asset_type=asset_type,
                category=category,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def get_smartlist_mtf(
        self,
        *,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

        Args:
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1214 - Invalid page_size. Maximum allowed value is 50. Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_smartlist_mtf(
                page_number=page_number, page_size=page_size, request_options=request_options
            ),
        )

    def get_smartlist_options(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches the smartlist of options for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED,
                MOST_ACTIVE, OI_GAINERS, OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1212 - Invalid asset_type.<br>UDAPI1213 - Invalid category for the given
                asset_type.<br>UDAPI1214 - Invalid page_size. Maximum allowed value is 50. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_smartlist_options(
                asset_type=asset_type,
                category=category,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> MarketHolidaysAndTimingsWithRawResponse:
        return self._with_raw_response


class AsyncMarketHolidaysAndTimings:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMarketHolidaysAndTimingsWithRawResponse(client, server, auth)

    async def get_change_oi_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        interval: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches change in OI data for the given instrument key, expiry, date and interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which change OI data is required
            interval: Number of days for which difference in OI is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format.<br>UDAPI1204 - Invalid interval. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_change_oi_data(
                instrument_key, expiry, date, interval, request_options=request_options
            ),
        )

    async def get_dii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches DII activity data for the given interval.

        Args:
            data_type: Data type. Allowed value: NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1198 - Invalid data_type. Allowed value: NSE_EQ|CASH.<br>UDAPI1199 -
                Invalid interval.<br>UDAPI1200 - Invalid from date format. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_dii_data(
                data_type, interval, from_=from_, request_options=request_options
            ),
        )

    async def get_exchange_timings(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetExchangeTimingResponse:
        """This API provides the functionality to retrieve the exchange timings on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_exchange_timings(date, request_options=request_options))

    async def get_fii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches FII activity data for the given data type and interval.

        Args:
            data_type: Data type. Allowed values: NSE_FO|INDEX_FUTURES, NSE_FO|STOCK_FUTURES, NSE_FO|INDEX_OPTIONS,
                NSE_FO|STOCK_OPTIONS, NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1198 - Invalid data_type.<br>UDAPI1199 - Invalid interval.<br>UDAPI1200 -
                Invalid from date format. Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_fii_data(
                data_type, interval, from_=from_, request_options=request_options
            ),
        )

    async def get_holiday(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetHolidayResponse:
        """This API provides the functionality to retrieve the holiday on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_holiday(date, request_options=request_options))

    async def get_holidays(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetHolidayResponse:
        """This API provides the functionality to retrieve the holiday list of current year

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_holidays(request_options=request_options))

    async def get_market_status(
        self, exchange: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMarketStatusResponse:
        """This API provides the functionality to retrieve the market status for particular exchange

        Args:
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_market_status(exchange, request_options=request_options))

    async def get_max_pain_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which Max Pain data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format.<br>UDAPI1205 - Invalid bucket_interval. Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_max_pain_data(
                instrument_key, expiry, date, bucket_interval, request_options=request_options
            ),
        )

    async def get_oi_data(
        self, instrument_key: str, expiry: str, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnalyticsResponse:
        """Fetches OI data for the given instrument key, expiry and date.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which OI data is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format. Internal Server Error Forbidden Locked Unprocessable Entity
                Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_oi_data(instrument_key, expiry, date, request_options=request_options)
        )

    async def get_pcr_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which PCR data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid instrument_key.<br>UDAPI1202 - Invalid expiry
                format.<br>UDAPI1203 - Invalid date format.<br>UDAPI1205 - Invalid bucket_interval. Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pcr_data(
                instrument_key, expiry, date, bucket_interval, request_options=request_options
            ),
        )

    async def get_smartlist_futures(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches the smartlist of futures for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS,
                OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1212 - Invalid asset_type.<br>UDAPI1213 - Invalid category for the given
                asset_type.<br>UDAPI1214 - Invalid page_size. Maximum allowed value is 50. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_smartlist_futures(
                asset_type=asset_type,
                category=category,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def get_smartlist_mtf(
        self,
        *,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

        Args:
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1214 - Invalid page_size. Maximum allowed value is 50. Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_smartlist_mtf(
                page_number=page_number, page_size=page_size, request_options=request_options
            ),
        )

    async def get_smartlist_options(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsResponse:
        """Fetches the smartlist of options for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED,
                MOST_ACTIVE, OI_GAINERS, OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1212 - Invalid asset_type.<br>UDAPI1213 - Invalid category for the given
                asset_type.<br>UDAPI1214 - Invalid page_size. Maximum allowed value is 50. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_smartlist_options(
                asset_type=asset_type,
                category=category,
                page_number=page_number,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMarketHolidaysAndTimingsWithRawResponse:
        return self._with_raw_response


class MarketHolidaysAndTimingsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_change_oi_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        interval: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetChangeOiDataErrorBody]:
        """Fetches change in OI data for the given instrument key, expiry, date and interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which change OI data is required
            interval: Number of days for which difference in OI is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/change-oi"),
            query_params=[
                param[str]("instrument_key", instrument_key),
                param[str]("expiry", expiry),
                param[str]("date", date),
                param[int]("interval", interval),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_change_oi_data_error_mapper,
            request_options=request_options,
        )

    def get_dii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetDiiDataErrorBody]:
        """Fetches DII activity data for the given interval.

        Args:
            data_type: Data type. Allowed value: NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/dii"),
            query_params=[
                param[str]("data_type", data_type), param[str]("interval", interval), param[str | None]("from", from_)
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_dii_data_error_mapper,
            request_options=request_options,
        )

    def get_exchange_timings(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetExchangeTimingResponse, GetExchangeTimingsErrorBody]:
        """This API provides the functionality to retrieve the exchange timings on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/timings/{date}"),
            path_params=[param[str]("date", date)],
            decoder=json_decoder[GetExchangeTimingResponse],
            error_mapper=get_exchange_timings_error_mapper,
            request_options=request_options,
        )

    def get_fii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetFiiDataErrorBody]:
        """Fetches FII activity data for the given data type and interval.

        Args:
            data_type: Data type. Allowed values: NSE_FO|INDEX_FUTURES, NSE_FO|STOCK_FUTURES, NSE_FO|INDEX_OPTIONS,
                NSE_FO|STOCK_OPTIONS, NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/fii"),
            query_params=[
                param[str]("data_type", data_type), param[str]("interval", interval), param[str | None]("from", from_)
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_fii_data_error_mapper,
            request_options=request_options,
        )

    def get_holiday(
        self, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetHolidayResponse, GetHolidayErrorBody]:
        """This API provides the functionality to retrieve the holiday on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/holidays/{date}"),
            path_params=[param[str]("date", date)],
            decoder=json_decoder[GetHolidayResponse],
            error_mapper=get_holiday_error_mapper,
            request_options=request_options,
        )

    def get_holidays(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetHolidayResponse, GetHolidaysErrorBody]:
        """This API provides the functionality to retrieve the holiday list of current year

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/holidays"),
            decoder=json_decoder[GetHolidayResponse],
            error_mapper=get_holidays_error_mapper,
            request_options=request_options,
        )

    def get_market_status(
        self, exchange: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketStatusResponse, GetMarketStatusErrorBody]:
        """This API provides the functionality to retrieve the market status for particular exchange

        Args:
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/status/{exchange}"),
            path_params=[param[str]("exchange", exchange)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMarketStatusResponse],
            error_mapper=get_market_status_error_mapper,
            request_options=request_options,
        )

    def get_max_pain_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetMaxPainDataErrorBody]:
        """Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which Max Pain data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/max-pain"),
            query_params=[
                param[str]("instrument_key", instrument_key),
                param[str]("expiry", expiry),
                param[str]("date", date),
                param[int]("bucket_interval", bucket_interval),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_max_pain_data_error_mapper,
            request_options=request_options,
        )

    def get_oi_data(
        self, instrument_key: str, expiry: str, date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsResponse, GetOiDataErrorBody]:
        """Fetches OI data for the given instrument key, expiry and date.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which OI data is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/oi"),
            query_params=[
                param[str]("instrument_key", instrument_key), param[str]("expiry", expiry), param[str]("date", date)
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_oi_data_error_mapper,
            request_options=request_options,
        )

    def get_pcr_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetPcrDataErrorBody]:
        """Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which PCR data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/pcr"),
            query_params=[
                param[str]("instrument_key", instrument_key),
                param[str]("expiry", expiry),
                param[str]("date", date),
                param[int]("bucket_interval", bucket_interval),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_pcr_data_error_mapper,
            request_options=request_options,
        )

    def get_smartlist_futures(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetSmartlistFuturesErrorBody]:
        """Fetches the smartlist of futures for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS,
                OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/smartlist/futures"),
            query_params=[
                param[str | None]("asset_type", asset_type),
                param[str | None]("category", category),
                param[int | None]("page_number", page_number),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_smartlist_futures_error_mapper,
            request_options=request_options,
        )

    def get_smartlist_mtf(
        self,
        *,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetSmartlistMtfErrorBody]:
        """Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

        Args:
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/smartlist/mtf"),
            query_params=[param[int | None]("page_number", page_number), param[int | None]("page_size", page_size)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_smartlist_mtf_error_mapper,
            request_options=request_options,
        )

    def get_smartlist_options(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetSmartlistOptionsErrorBody]:
        """Fetches the smartlist of options for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED,
                MOST_ACTIVE, OI_GAINERS, OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/smartlist/options"),
            query_params=[
                param[str | None]("asset_type", asset_type),
                param[str | None]("category", category),
                param[int | None]("page_number", page_number),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[AnalyticsResponse],
            error_mapper=get_smartlist_options_error_mapper,
            request_options=request_options,
        )


class AsyncMarketHolidaysAndTimingsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_change_oi_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        interval: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetChangeOiDataErrorBody]:
        """Fetches change in OI data for the given instrument key, expiry, date and interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which change OI data is required
            interval: Number of days for which difference in OI is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/change-oi"),
            query_params=[
                param[str]("instrument_key", instrument_key),
                param[str]("expiry", expiry),
                param[str]("date", date),
                param[int]("interval", interval),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_change_oi_data_error_mapper,
            request_options=request_options,
        )

    async def get_dii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetDiiDataErrorBody]:
        """Fetches DII activity data for the given interval.

        Args:
            data_type: Data type. Allowed value: NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/dii"),
            query_params=[
                param[str]("data_type", data_type), param[str]("interval", interval), param[str | None]("from", from_)
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_dii_data_error_mapper,
            request_options=request_options,
        )

    async def get_exchange_timings(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetExchangeTimingResponse, GetExchangeTimingsErrorBody]:
        """This API provides the functionality to retrieve the exchange timings on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/timings/{date}"),
            path_params=[param[str]("date", date)],
            decoder=async_json_decoder[GetExchangeTimingResponse],
            error_mapper=get_exchange_timings_error_mapper,
            request_options=request_options,
        )

    async def get_fii_data(
        self,
        data_type: str,
        interval: str,
        *,
        from_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetFiiDataErrorBody]:
        """Fetches FII activity data for the given data type and interval.

        Args:
            data_type: Data type. Allowed values: NSE_FO|INDEX_FUTURES, NSE_FO|STOCK_FUTURES, NSE_FO|INDEX_OPTIONS,
                NSE_FO|STOCK_OPTIONS, NSE_EQ|CASH
            interval: Interval. Allowed values: 1D, 1M
            from_: Start date in YYYY-MM-DD format (optional)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/fii"),
            query_params=[
                param[str]("data_type", data_type), param[str]("interval", interval), param[str | None]("from", from_)
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_fii_data_error_mapper,
            request_options=request_options,
        )

    async def get_holiday(
        self, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetHolidayResponse, GetHolidayErrorBody]:
        """This API provides the functionality to retrieve the holiday on particular date

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/holidays/{date}"),
            path_params=[param[str]("date", date)],
            decoder=async_json_decoder[GetHolidayResponse],
            error_mapper=get_holiday_error_mapper,
            request_options=request_options,
        )

    async def get_holidays(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetHolidayResponse, GetHolidaysErrorBody]:
        """This API provides the functionality to retrieve the holiday list of current year

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/holidays"),
            decoder=async_json_decoder[GetHolidayResponse],
            error_mapper=get_holidays_error_mapper,
            request_options=request_options,
        )

    async def get_market_status(
        self, exchange: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMarketStatusResponse, GetMarketStatusErrorBody]:
        """This API provides the functionality to retrieve the market status for particular exchange

        Args:
            exchange: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/status/{exchange}"),
            path_params=[param[str]("exchange", exchange)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMarketStatusResponse],
            error_mapper=get_market_status_error_mapper,
            request_options=request_options,
        )

    async def get_max_pain_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetMaxPainDataErrorBody]:
        """Fetches Max Pain data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which Max Pain data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/max-pain"),
            query_params=[
                param[str]("instrument_key", instrument_key),
                param[str]("expiry", expiry),
                param[str]("date", date),
                param[int]("bucket_interval", bucket_interval),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_max_pain_data_error_mapper,
            request_options=request_options,
        )

    async def get_oi_data(
        self, instrument_key: str, expiry: str, date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnalyticsResponse, GetOiDataErrorBody]:
        """Fetches OI data for the given instrument key, expiry and date.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which OI data is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/oi"),
            query_params=[
                param[str]("instrument_key", instrument_key), param[str]("expiry", expiry), param[str]("date", date)
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_oi_data_error_mapper,
            request_options=request_options,
        )

    async def get_pcr_data(
        self,
        instrument_key: str,
        expiry: str,
        date: str,
        bucket_interval: int,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetPcrDataErrorBody]:
        """Fetches PCR (Put-Call Ratio) data for the given instrument key, expiry, date and bucket interval.

        Args:
            instrument_key: Underlying asset instrument key
            expiry: Expiry date in YYYY-MM-DD format
            date: Date in YYYY-MM-DD format for which PCR data is required
            bucket_interval: Bucket interval in minutes for the insights list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/pcr"),
            query_params=[
                param[str]("instrument_key", instrument_key),
                param[str]("expiry", expiry),
                param[str]("date", date),
                param[int]("bucket_interval", bucket_interval),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_pcr_data_error_mapper,
            request_options=request_options,
        )

    async def get_smartlist_futures(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetSmartlistFuturesErrorBody]:
        """Fetches the smartlist of futures for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, PREMIUM, DISCOUNT (COMMODITY supports only: TOP_TRADED, MOST_ACTIVE, OI_GAINERS,
                OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/smartlist/futures"),
            query_params=[
                param[str | None]("asset_type", asset_type),
                param[str | None]("category", category),
                param[int | None]("page_number", page_number),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_smartlist_futures_error_mapper,
            request_options=request_options,
        )

    async def get_smartlist_mtf(
        self,
        *,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetSmartlistMtfErrorBody]:
        """Fetches the smartlist of MTF (Margin Trade Funding) stocks. Prices are enriched with live LTP data.

        Args:
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/smartlist/mtf"),
            query_params=[param[int | None]("page_number", page_number), param[int | None]("page_size", page_size)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_smartlist_mtf_error_mapper,
            request_options=request_options,
        )

    async def get_smartlist_options(
        self,
        *,
        asset_type: str | None = None,
        category: str | None = None,
        page_number: int | None = None,
        page_size: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsResponse, GetSmartlistOptionsErrorBody]:
        """Fetches the smartlist of options for the given asset type and category.

        Args:
            asset_type: Asset type. Allowed values: INDEX, STOCK, COMMODITY
            category: Category. Allowed values: TOP_TRADED, MOST_ACTIVE, OI_GAINERS, OI_LOSERS, PRICE_GAINERS,
                PRICE_LOSERS, IV_GAINERS, IV_LOSERS, UNDER_5000, UNDER_10000 (COMMODITY supports only: TOP_TRADED,
                MOST_ACTIVE, OI_GAINERS, OI_LOSERS)
            page_number: Page number (optional, 1-indexed)
            page_size: Page size (optional, max 50)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/market/smartlist/options"),
            query_params=[
                param[str | None]("asset_type", asset_type),
                param[str | None]("category", category),
                param[int | None]("page_number", page_number),
                param[int | None]("page_size", page_size),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[AnalyticsResponse],
            error_mapper=get_smartlist_options_error_mapper,
            request_options=request_options,
        )
