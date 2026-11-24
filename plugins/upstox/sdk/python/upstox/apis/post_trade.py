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
from ..errors.get_trades_by_date_range_error import GetTradesByDateRangeErrorBody, get_trades_by_date_range_error_mapper
from ..models.trade_history_response import TradeHistoryResponse
from ..server.server import Server


class PostTrade:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PostTradeWithRawResponse(client, server, auth)

    def get_trades_by_date_range(
        self,
        start_date: str,
        end_date: str,
        page_number: int,
        page_size: int,
        *,
        segment: str | None = "",
        request_options: RequestOptionsOrDict | None = None,
    ) -> TradeHistoryResponse:
        """This API retrieves the trade history for a specified time interval.

        Args:
            start_date: Date from which trade history needs to be fetched. Date in YYYY-mm-dd format
            end_date: Date till which history needs needs to be fetched. Date in YYYY-mm-dd format
            page_number: Page number for which you want to fetch trade history
            page_size: How many records you want for a page
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives MF - Mutual Funds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_trades_by_date_range(
                start_date, end_date, page_number, page_size, segment=segment, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PostTradeWithRawResponse:
        return self._with_raw_response


class AsyncPostTrade:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPostTradeWithRawResponse(client, server, auth)

    async def get_trades_by_date_range(
        self,
        start_date: str,
        end_date: str,
        page_number: int,
        page_size: int,
        *,
        segment: str | None = "",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TradeHistoryResponse:
        """This API retrieves the trade history for a specified time interval.

        Args:
            start_date: Date from which trade history needs to be fetched. Date in YYYY-mm-dd format
            end_date: Date till which history needs needs to be fetched. Date in YYYY-mm-dd format
            page_number: Page number for which you want to fetch trade history
            page_size: How many records you want for a page
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives MF - Mutual Funds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_trades_by_date_range(
                start_date, end_date, page_number, page_size, segment=segment, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPostTradeWithRawResponse:
        return self._with_raw_response


class PostTradeWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_trades_by_date_range(
        self,
        start_date: str,
        end_date: str,
        page_number: int,
        page_size: int,
        *,
        segment: str | None = "",
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TradeHistoryResponse, GetTradesByDateRangeErrorBody]:
        """This API retrieves the trade history for a specified time interval.

        Args:
            start_date: Date from which trade history needs to be fetched. Date in YYYY-mm-dd format
            end_date: Date till which history needs needs to be fetched. Date in YYYY-mm-dd format
            page_number: Page number for which you want to fetch trade history
            page_size: How many records you want for a page
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives MF - Mutual Funds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/charges/historical-trades"),
            query_params=[
                param[str]("start_date", start_date),
                param[str]("end_date", end_date),
                param[int]("page_number", page_number),
                param[int]("page_size", page_size),
                param[str | None]("segment", segment),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[TradeHistoryResponse],
            error_mapper=get_trades_by_date_range_error_mapper,
            request_options=request_options,
        )


class AsyncPostTradeWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_trades_by_date_range(
        self,
        start_date: str,
        end_date: str,
        page_number: int,
        page_size: int,
        *,
        segment: str | None = "",
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TradeHistoryResponse, GetTradesByDateRangeErrorBody]:
        """This API retrieves the trade history for a specified time interval.

        Args:
            start_date: Date from which trade history needs to be fetched. Date in YYYY-mm-dd format
            end_date: Date till which history needs needs to be fetched. Date in YYYY-mm-dd format
            page_number: Page number for which you want to fetch trade history
            page_size: How many records you want for a page
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives MF - Mutual Funds
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/charges/historical-trades"),
            query_params=[
                param[str]("start_date", start_date),
                param[str]("end_date", end_date),
                param[int]("page_number", page_number),
                param[int]("page_size", page_size),
                param[str | None]("segment", segment),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[TradeHistoryResponse],
            error_mapper=get_trades_by_date_range_error_mapper,
            request_options=request_options,
        )
