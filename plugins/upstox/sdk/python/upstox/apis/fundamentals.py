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
from ..errors.get_balance_sheet_error import GetBalanceSheetErrorBody, get_balance_sheet_error_mapper
from ..errors.get_cash_flow_error import GetCashFlowErrorBody, get_cash_flow_error_mapper
from ..errors.get_company_profile_error import GetCompanyProfileErrorBody, get_company_profile_error_mapper
from ..errors.get_competitors_error import GetCompetitorsErrorBody, get_competitors_error_mapper
from ..errors.get_corporate_actions_error import GetCorporateActionsErrorBody, get_corporate_actions_error_mapper
from ..errors.get_income_statement_error import GetIncomeStatementErrorBody, get_income_statement_error_mapper
from ..errors.get_key_ratios_error import GetKeyRatiosErrorBody, get_key_ratios_error_mapper
from ..errors.get_share_holdings_error import GetShareHoldingsErrorBody, get_share_holdings_error_mapper
from ..models.balance_sheet_response import BalanceSheetResponse
from ..models.cash_flow_response import CashFlowResponse
from ..models.company_profile_response import CompanyProfileResponse
from ..models.competitors_response import CompetitorsResponse
from ..models.corporate_actions_response import CorporateActionsResponse
from ..models.income_statement_response import IncomeStatementResponse
from ..models.key_ratios_response import KeyRatiosResponse
from ..models.share_holdings_response import ShareHoldingsResponse
from ..server.server import Server


class Fundamentals:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FundamentalsWithRawResponse(client, server, auth)

    def get_balance_sheet(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BalanceSheetResponse:
        """Fetches balance sheet data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN.<br>UDAPI1207 - Invalid type. Allowed values:
                consolidated, standalone. Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_balance_sheet(isin, type_=type_, fs=fs, request_options=request_options)
        )

    def get_cash_flow(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CashFlowResponse:
        """Fetches cash flow data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated, standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN.<br>UDAPI1207 - Invalid type. Allowed values:
                consolidated, standalone. Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_cash_flow(isin, type_=type_, fs=fs, request_options=request_options))

    def get_company_profile(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompanyProfileResponse:
        """Fetches company profile information for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_company_profile(isin, request_options=request_options))

    def get_competitors(
        self, instrument_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CompetitorsResponse:
        """Fetches the list of competitors for the given instrument_key.

        Args:
            instrument_key: Instrument key of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid Instrument key. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_competitors(instrument_key, request_options=request_options))

    def get_corporate_actions(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CorporateActionsResponse:
        """Fetches corporate actions for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_corporate_actions(isin, request_options=request_options))

    def get_income_statement(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        time_period: str | None = "yearly",
        fs: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IncomeStatementResponse:
        """Fetches income statement data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            time_period: Time period. Allowed values: yearly, quarterly
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN.<br>UDAPI1207 - Invalid type. Allowed values:
                consolidated, standalone.<br>UDAPI1208 - Invalid time period. Allowed values: yearly, quarterly.
                Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_income_statement(
                isin, type_=type_, time_period=time_period, fs=fs, request_options=request_options
            ),
        )

    def get_key_ratios(self, isin: str, *, request_options: RequestOptionsOrDict | None = None) -> KeyRatiosResponse:
        """Fetches key financial ratios for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_key_ratios(isin, request_options=request_options))

    def get_share_holdings(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ShareHoldingsResponse:
        """Fetches shareholding pattern for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_share_holdings(isin, request_options=request_options))

    @property
    def with_raw_response(self) -> FundamentalsWithRawResponse:
        return self._with_raw_response


class AsyncFundamentals:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFundamentalsWithRawResponse(client, server, auth)

    async def get_balance_sheet(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BalanceSheetResponse:
        """Fetches balance sheet data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN.<br>UDAPI1207 - Invalid type. Allowed values:
                consolidated, standalone. Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_balance_sheet(isin, type_=type_, fs=fs, request_options=request_options)
        )

    async def get_cash_flow(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CashFlowResponse:
        """Fetches cash flow data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated, standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN.<br>UDAPI1207 - Invalid type. Allowed values:
                consolidated, standalone. Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_cash_flow(isin, type_=type_, fs=fs, request_options=request_options)
        )

    async def get_company_profile(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompanyProfileResponse:
        """Fetches company profile information for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_company_profile(isin, request_options=request_options))

    async def get_competitors(
        self, instrument_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CompetitorsResponse:
        """Fetches the list of competitors for the given instrument_key.

        Args:
            instrument_key: Instrument key of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100011 - Invalid Instrument key. Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_competitors(instrument_key, request_options=request_options))

    async def get_corporate_actions(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CorporateActionsResponse:
        """Fetches corporate actions for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_corporate_actions(isin, request_options=request_options))

    async def get_income_statement(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        time_period: str | None = "yearly",
        fs: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IncomeStatementResponse:
        """Fetches income statement data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            time_period: Time period. Allowed values: yearly, quarterly
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN.<br>UDAPI1207 - Invalid type. Allowed values:
                consolidated, standalone.<br>UDAPI1208 - Invalid time period. Allowed values: yearly, quarterly.
                Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests Authorization Failure
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_income_statement(
                isin, type_=type_, time_period=time_period, fs=fs, request_options=request_options
            ),
        )

    async def get_key_ratios(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> KeyRatiosResponse:
        """Fetches key financial ratios for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_key_ratios(isin, request_options=request_options))

    async def get_share_holdings(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ShareHoldingsResponse:
        """Fetches shareholding pattern for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1206 - Invalid ISIN. Internal Server Error Forbidden Locked Unprocessable
                Entity Too Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_share_holdings(isin, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFundamentalsWithRawResponse:
        return self._with_raw_response


class FundamentalsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_balance_sheet(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BalanceSheetResponse, GetBalanceSheetErrorBody]:
        """Fetches balance sheet data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/balance-sheet"),
            path_params=[param[str]("isin", isin)],
            query_params=[param[str | None]("type", type_), param[bool | None]("fs", fs)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[BalanceSheetResponse],
            error_mapper=get_balance_sheet_error_mapper,
            request_options=request_options,
        )

    def get_cash_flow(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CashFlowResponse, GetCashFlowErrorBody]:
        """Fetches cash flow data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated, standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/cash-flow"),
            path_params=[param[str]("isin", isin)],
            query_params=[param[str | None]("type", type_), param[bool | None]("fs", fs)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CashFlowResponse],
            error_mapper=get_cash_flow_error_mapper,
            request_options=request_options,
        )

    def get_company_profile(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompanyProfileResponse, GetCompanyProfileErrorBody]:
        """Fetches company profile information for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/profile"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CompanyProfileResponse],
            error_mapper=get_company_profile_error_mapper,
            request_options=request_options,
        )

    def get_competitors(
        self, instrument_key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CompetitorsResponse, GetCompetitorsErrorBody]:
        """Fetches the list of competitors for the given instrument_key.

        Args:
            instrument_key: Instrument key of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{instrument_key}/competitors"),
            path_params=[param[str]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CompetitorsResponse],
            error_mapper=get_competitors_error_mapper,
            request_options=request_options,
        )

    def get_corporate_actions(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CorporateActionsResponse, GetCorporateActionsErrorBody]:
        """Fetches corporate actions for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/corporate-actions"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CorporateActionsResponse],
            error_mapper=get_corporate_actions_error_mapper,
            request_options=request_options,
        )

    def get_income_statement(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        time_period: str | None = "yearly",
        fs: bool | None = False,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IncomeStatementResponse, GetIncomeStatementErrorBody]:
        """Fetches income statement data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            time_period: Time period. Allowed values: yearly, quarterly
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/income-statement"),
            path_params=[param[str]("isin", isin)],
            query_params=[
                param[str | None]("type", type_),
                param[str | None]("time_period", time_period),
                param[bool | None]("fs", fs),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[IncomeStatementResponse],
            error_mapper=get_income_statement_error_mapper,
            request_options=request_options,
        )

    def get_key_ratios(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[KeyRatiosResponse, GetKeyRatiosErrorBody]:
        """Fetches key financial ratios for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/key-ratios"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[KeyRatiosResponse],
            error_mapper=get_key_ratios_error_mapper,
            request_options=request_options,
        )

    def get_share_holdings(
        self, isin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ShareHoldingsResponse, GetShareHoldingsErrorBody]:
        """Fetches shareholding pattern for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/share-holdings"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[ShareHoldingsResponse],
            error_mapper=get_share_holdings_error_mapper,
            request_options=request_options,
        )


class AsyncFundamentalsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_balance_sheet(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BalanceSheetResponse, GetBalanceSheetErrorBody]:
        """Fetches balance sheet data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/balance-sheet"),
            path_params=[param[str]("isin", isin)],
            query_params=[param[str | None]("type", type_), param[bool | None]("fs", fs)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[BalanceSheetResponse],
            error_mapper=get_balance_sheet_error_mapper,
            request_options=request_options,
        )

    async def get_cash_flow(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        fs: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CashFlowResponse, GetCashFlowErrorBody]:
        """Fetches cash flow data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated, standalone
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/cash-flow"),
            path_params=[param[str]("isin", isin)],
            query_params=[param[str | None]("type", type_), param[bool | None]("fs", fs)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CashFlowResponse],
            error_mapper=get_cash_flow_error_mapper,
            request_options=request_options,
        )

    async def get_company_profile(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompanyProfileResponse, GetCompanyProfileErrorBody]:
        """Fetches company profile information for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/profile"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CompanyProfileResponse],
            error_mapper=get_company_profile_error_mapper,
            request_options=request_options,
        )

    async def get_competitors(
        self, instrument_key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CompetitorsResponse, GetCompetitorsErrorBody]:
        """Fetches the list of competitors for the given instrument_key.

        Args:
            instrument_key: Instrument key of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{instrument_key}/competitors"),
            path_params=[param[str]("instrument_key", instrument_key)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CompetitorsResponse],
            error_mapper=get_competitors_error_mapper,
            request_options=request_options,
        )

    async def get_corporate_actions(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CorporateActionsResponse, GetCorporateActionsErrorBody]:
        """Fetches corporate actions for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/corporate-actions"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CorporateActionsResponse],
            error_mapper=get_corporate_actions_error_mapper,
            request_options=request_options,
        )

    async def get_income_statement(
        self,
        isin: str,
        *,
        type_: str | None = "consolidated",
        time_period: str | None = "yearly",
        fs: bool | None = False,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IncomeStatementResponse, GetIncomeStatementErrorBody]:
        """Fetches income statement data for the given ISIN.

        Args:
            isin: ISIN of the company
            type_: Report type. Allowed values: consolidated or standalone
            time_period: Time period. Allowed values: yearly, quarterly
            fs: Whether to include the full financial statement
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/income-statement"),
            path_params=[param[str]("isin", isin)],
            query_params=[
                param[str | None]("type", type_),
                param[str | None]("time_period", time_period),
                param[bool | None]("fs", fs),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[IncomeStatementResponse],
            error_mapper=get_income_statement_error_mapper,
            request_options=request_options,
        )

    async def get_key_ratios(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[KeyRatiosResponse, GetKeyRatiosErrorBody]:
        """Fetches key financial ratios for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/key-ratios"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[KeyRatiosResponse],
            error_mapper=get_key_ratios_error_mapper,
            request_options=request_options,
        )

    async def get_share_holdings(
        self, isin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ShareHoldingsResponse, GetShareHoldingsErrorBody]:
        """Fetches shareholding pattern for the given ISIN.

        Args:
            isin: ISIN of the company
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fundamentals/{isin}/share-holdings"),
            path_params=[param[str]("isin", isin)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[ShareHoldingsResponse],
            error_mapper=get_share_holdings_error_mapper,
            request_options=request_options,
        )
