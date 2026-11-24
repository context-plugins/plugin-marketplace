from __future__ import annotations

from typing import Any

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
from ..models.enums.period import Period, PeriodOrStr
from ..server.server import Server


class BalanceSheetStatement:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BalanceSheetStatementWithRawResponse(client, server, auth)

    def get_balance_sheet(
        self,
        symbol: str,
        *,
        period: PeriodOrStr | None = Period.ANNUAL,
        limit: int | None = 40,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Any]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            period: Reporting period
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Balance sheet records

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_balance_sheet(
                symbol, period=period, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BalanceSheetStatementWithRawResponse:
        return self._with_raw_response


class AsyncBalanceSheetStatement:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBalanceSheetStatementWithRawResponse(client, server, auth)

    async def get_balance_sheet(
        self,
        symbol: str,
        *,
        period: PeriodOrStr | None = Period.ANNUAL,
        limit: int | None = 40,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Any]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            period: Reporting period
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Balance sheet records

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_balance_sheet(
                symbol, period=period, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBalanceSheetStatementWithRawResponse:
        return self._with_raw_response


class BalanceSheetStatementWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_balance_sheet(
        self,
        symbol: str,
        *,
        period: PeriodOrStr | None = Period.ANNUAL,
        limit: int | None = 40,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Any], RawError]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            period: Reporting period
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/balance-sheet-statement/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            query_params=[param[PeriodOrStr | None]("period", period), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[list[Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBalanceSheetStatementWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_balance_sheet(
        self,
        symbol: str,
        *,
        period: PeriodOrStr | None = Period.ANNUAL,
        limit: int | None = 40,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Any], RawError]:
        """Send a ``GET`` request.

        Args:
            symbol: Ticker symbol (e.g., AAPL, MSFT)
            period: Reporting period
            limit: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/balance-sheet-statement/{symbol}"),
            path_params=[param[str]("symbol", symbol)],
            query_params=[param[PeriodOrStr | None]("period", period), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[list[Any]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
