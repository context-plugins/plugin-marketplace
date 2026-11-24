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
from ..errors.get_profit_and_loss_charges_error import (
    GetProfitAndLossChargesErrorBody,
    get_profit_and_loss_charges_error_mapper,
)
from ..errors.get_trade_wise_profit_and_loss_data_error import (
    GetTradeWiseProfitAndLossDataErrorBody,
    get_trade_wise_profit_and_loss_data_error_mapper,
)
from ..errors.get_trade_wise_profit_and_loss_meta_data_error import (
    GetTradeWiseProfitAndLossMetaDataErrorBody,
    get_trade_wise_profit_and_loss_meta_data_error_mapper,
)
from ..models.get_profit_and_loss_charges_response import GetProfitAndLossChargesResponse
from ..models.get_trade_wise_profit_and_loss_data_response import GetTradeWiseProfitAndLossDataResponse
from ..models.get_trade_wise_profit_and_loss_meta_data_response import GetTradeWiseProfitAndLossMetaDataResponse
from ..server.server import Server


class TradeProfitAndLoss:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TradeProfitAndLossWithRawResponse(client, server, auth)

    def get_profit_and_loss_charges(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetProfitAndLossChargesResponse:
        """This API gives the charges incurred by users for their trades

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1067 - The ''segment'' is required<br>UDAPI1066 - The ''segment'' is
                invalid<br>UDAPI1068 - The start_date is required<br>UDAPI1069 - The end_date is required<br>UDAPI1105 -
                The provided dates do not fall within the specified financial year Internal Server Error Forbidden
                Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_profit_and_loss_charges(
                segment, financial_year, from_date=from_date, to_date=to_date, request_options=request_options
            ),
        )

    def get_trade_wise_profit_and_loss_data(
        self,
        segment: str,
        financial_year: str,
        page_number: int,
        page_size: int,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetTradeWiseProfitAndLossDataResponse:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            page_number: Page Number, the pages are starting from 1
            page_size: Page size for pagination. The maximum page size value is obtained from P and L report metadata
                API.
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1070 - The financial_year is required<br>UDAPI1071 - The page_number is
                required<br>UDAPI1072 - The page_size is required<br>UDAPI1067 - The ''segment'' is
                required<br>UDAPI1066 - The ''segment'' is invalid<br>UDAPI1073 - Financial year should have max length
                of 4<br>UDAPI1106 - The page_size should be greater than or equal to 1<br>UDAPI1107 - The page_size
                should be less than or equal to 5000>br>UDAPI1105 - The given dates are not in the mentioned financial
                year Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_trade_wise_profit_and_loss_data(
                segment,
                financial_year,
                page_number,
                page_size,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    def get_trade_wise_profit_and_loss_meta_data(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetTradeWiseProfitAndLossMetaDataResponse:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1070 - The financial_year is required<br>UDAPI1067 - The ''segment'' is
                required<br>UDAPI1066 - The ''segment'' is invalid<br>UDAPI1073 - Financial year should have max length
                of 4<br>UDAPI1068 - The start_date is required<br>UDAPI1069 - The end_date is required<br>UDAPI1105 -
                The provided dates do not fall within the specified financial year Internal Server Error Forbidden
                Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_trade_wise_profit_and_loss_meta_data(
                segment, financial_year, from_date=from_date, to_date=to_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> TradeProfitAndLossWithRawResponse:
        return self._with_raw_response


class AsyncTradeProfitAndLoss:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTradeProfitAndLossWithRawResponse(client, server, auth)

    async def get_profit_and_loss_charges(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetProfitAndLossChargesResponse:
        """This API gives the charges incurred by users for their trades

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1067 - The ''segment'' is required<br>UDAPI1066 - The ''segment'' is
                invalid<br>UDAPI1068 - The start_date is required<br>UDAPI1069 - The end_date is required<br>UDAPI1105 -
                The provided dates do not fall within the specified financial year Internal Server Error Forbidden
                Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_profit_and_loss_charges(
                segment, financial_year, from_date=from_date, to_date=to_date, request_options=request_options
            ),
        )

    async def get_trade_wise_profit_and_loss_data(
        self,
        segment: str,
        financial_year: str,
        page_number: int,
        page_size: int,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetTradeWiseProfitAndLossDataResponse:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            page_number: Page Number, the pages are starting from 1
            page_size: Page size for pagination. The maximum page size value is obtained from P and L report metadata
                API.
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1070 - The financial_year is required<br>UDAPI1071 - The page_number is
                required<br>UDAPI1072 - The page_size is required<br>UDAPI1067 - The ''segment'' is
                required<br>UDAPI1066 - The ''segment'' is invalid<br>UDAPI1073 - Financial year should have max length
                of 4<br>UDAPI1106 - The page_size should be greater than or equal to 1<br>UDAPI1107 - The page_size
                should be less than or equal to 5000>br>UDAPI1105 - The given dates are not in the mentioned financial
                year Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_trade_wise_profit_and_loss_data(
                segment,
                financial_year,
                page_number,
                page_size,
                from_date=from_date,
                to_date=to_date,
                request_options=request_options,
            ),
        )

    async def get_trade_wise_profit_and_loss_meta_data(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetTradeWiseProfitAndLossMetaDataResponse:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1070 - The financial_year is required<br>UDAPI1067 - The ''segment'' is
                required<br>UDAPI1066 - The ''segment'' is invalid<br>UDAPI1073 - Financial year should have max length
                of 4<br>UDAPI1068 - The start_date is required<br>UDAPI1069 - The end_date is required<br>UDAPI1105 -
                The provided dates do not fall within the specified financial year Internal Server Error Forbidden
                Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_trade_wise_profit_and_loss_meta_data(
                segment, financial_year, from_date=from_date, to_date=to_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncTradeProfitAndLossWithRawResponse:
        return self._with_raw_response


class TradeProfitAndLossWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_profit_and_loss_charges(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetProfitAndLossChargesResponse, GetProfitAndLossChargesErrorBody]:
        """This API gives the charges incurred by users for their trades

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trade/profit-loss/charges"),
            query_params=[
                param[str]("segment", segment),
                param[str]("financial_year", financial_year),
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetProfitAndLossChargesResponse],
            error_mapper=get_profit_and_loss_charges_error_mapper,
            request_options=request_options,
        )

    def get_trade_wise_profit_and_loss_data(
        self,
        segment: str,
        financial_year: str,
        page_number: int,
        page_size: int,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTradeWiseProfitAndLossDataResponse, GetTradeWiseProfitAndLossDataErrorBody]:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            page_number: Page Number, the pages are starting from 1
            page_size: Page size for pagination. The maximum page size value is obtained from P and L report metadata
                API.
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trade/profit-loss/data"),
            query_params=[
                param[str]("segment", segment),
                param[str]("financial_year", financial_year),
                param[int]("page_number", page_number),
                param[int]("page_size", page_size),
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetTradeWiseProfitAndLossDataResponse],
            error_mapper=get_trade_wise_profit_and_loss_data_error_mapper,
            request_options=request_options,
        )

    def get_trade_wise_profit_and_loss_meta_data(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTradeWiseProfitAndLossMetaDataResponse, GetTradeWiseProfitAndLossMetaDataErrorBody]:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trade/profit-loss/metadata"),
            query_params=[
                param[str]("segment", segment),
                param[str]("financial_year", financial_year),
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetTradeWiseProfitAndLossMetaDataResponse],
            error_mapper=get_trade_wise_profit_and_loss_meta_data_error_mapper,
            request_options=request_options,
        )


class AsyncTradeProfitAndLossWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_profit_and_loss_charges(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetProfitAndLossChargesResponse, GetProfitAndLossChargesErrorBody]:
        """This API gives the charges incurred by users for their trades

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trade/profit-loss/charges"),
            query_params=[
                param[str]("segment", segment),
                param[str]("financial_year", financial_year),
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetProfitAndLossChargesResponse],
            error_mapper=get_profit_and_loss_charges_error_mapper,
            request_options=request_options,
        )

    async def get_trade_wise_profit_and_loss_data(
        self,
        segment: str,
        financial_year: str,
        page_number: int,
        page_size: int,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTradeWiseProfitAndLossDataResponse, GetTradeWiseProfitAndLossDataErrorBody]:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            page_number: Page Number, the pages are starting from 1
            page_size: Page size for pagination. The maximum page size value is obtained from P and L report metadata
                API.
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trade/profit-loss/data"),
            query_params=[
                param[str]("segment", segment),
                param[str]("financial_year", financial_year),
                param[int]("page_number", page_number),
                param[int]("page_size", page_size),
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetTradeWiseProfitAndLossDataResponse],
            error_mapper=get_trade_wise_profit_and_loss_data_error_mapper,
            request_options=request_options,
        )

    async def get_trade_wise_profit_and_loss_meta_data(
        self,
        segment: str,
        financial_year: str,
        *,
        from_date: str | None = None,
        to_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetTradeWiseProfitAndLossMetaDataResponse, GetTradeWiseProfitAndLossMetaDataErrorBody]:
        """This API gives the data of the realised Profit and Loss report requested by a user

        Args:
            segment: Segment for which data is requested can be from the following options EQ - Equity, FO - Futures and
                Options, COM - Commodity, CD - Currency Derivatives
            financial_year: Financial year for which data has been requested. Concatenation of last 2 digits of from
                year and to year Sample:for 2021-2022, financial_year will be 2122
            from_date: Date from which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            to_date: Date till which data needs to be fetched. from_date and to_date should fall under the same
                financial year as mentioned in financial_year attribute. Date in dd-mm-yyyy format
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/trade/profit-loss/metadata"),
            query_params=[
                param[str]("segment", segment),
                param[str]("financial_year", financial_year),
                param[str | None]("from_date", from_date),
                param[str | None]("to_date", to_date),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetTradeWiseProfitAndLossMetaDataResponse],
            error_mapper=get_trade_wise_profit_and_loss_meta_data_error_mapper,
            request_options=request_options,
        )
