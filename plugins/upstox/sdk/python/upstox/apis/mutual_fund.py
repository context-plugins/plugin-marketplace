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
from ..errors.get_mutual_fund_holdings_error import (
    GetMutualFundHoldingsErrorBody,
    get_mutual_fund_holdings_error_mapper,
)
from ..errors.get_mutual_fund_order_error import GetMutualFundOrderErrorBody, get_mutual_fund_order_error_mapper
from ..errors.get_mutual_fund_orders_error import GetMutualFundOrdersErrorBody, get_mutual_fund_orders_error_mapper
from ..errors.get_mutual_fund_sips_error import GetMutualFundSipsErrorBody, get_mutual_fund_sips_error_mapper
from ..models.get_mutual_fund_holdings_response import GetMutualFundHoldingsResponse
from ..models.get_mutual_fund_order_details_response import GetMutualFundOrderDetailsResponse
from ..models.get_mutual_fund_orders_response import GetMutualFundOrdersResponse
from ..models.get_mutual_fund_sips_response import GetMutualFundSipsResponse
from ..server.server import Server


class MutualFund:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MutualFundWithRawResponse(client, server, auth)

    def get_mutual_fund_holdings(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetMutualFundHoldingsResponse:
        """Returns mutual fund holdings for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_mutual_fund_holdings(request_options=request_options))

    def get_mutual_fund_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetMutualFundOrderDetailsResponse:
        """Returns a single mutual fund order by order id.

        Args:
            order_id: Mutual fund order id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_mutual_fund_order(order_id, request_options=request_options))

    def get_mutual_fund_orders(
        self,
        *,
        status: str | None = "ALL",
        transaction_type: str | None = "ALL",
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetMutualFundOrdersResponse:
        """Returns mutual fund orders from the last 7 days for the authenticated user.

        Args:
            status: Mutual fund order status
            transaction_type: Mutual fund order transaction type
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_mutual_fund_orders(
                status=status,
                transaction_type=transaction_type,
                page_number=page_number,
                records=records,
                request_options=request_options,
            ),
        )

    def get_mutual_fund_sips(
        self,
        *,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetMutualFundSipsResponse:
        """Returns active and paused SIP orders for the authenticated user.

        Args:
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_mutual_fund_sips(
                page_number=page_number, records=records, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MutualFundWithRawResponse:
        return self._with_raw_response


class AsyncMutualFund:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMutualFundWithRawResponse(client, server, auth)

    async def get_mutual_fund_holdings(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMutualFundHoldingsResponse:
        """Returns mutual fund holdings for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_mutual_fund_holdings(request_options=request_options))

    async def get_mutual_fund_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetMutualFundOrderDetailsResponse:
        """Returns a single mutual fund order by order id.

        Args:
            order_id: Mutual fund order id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_mutual_fund_order(order_id, request_options=request_options))

    async def get_mutual_fund_orders(
        self,
        *,
        status: str | None = "ALL",
        transaction_type: str | None = "ALL",
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetMutualFundOrdersResponse:
        """Returns mutual fund orders from the last 7 days for the authenticated user.

        Args:
            status: Mutual fund order status
            transaction_type: Mutual fund order transaction type
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_mutual_fund_orders(
                status=status,
                transaction_type=transaction_type,
                page_number=page_number,
                records=records,
                request_options=request_options,
            ),
        )

    async def get_mutual_fund_sips(
        self,
        *,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetMutualFundSipsResponse:
        """Returns active and paused SIP orders for the authenticated user.

        Args:
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Business error Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_mutual_fund_sips(
                page_number=page_number, records=records, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMutualFundWithRawResponse:
        return self._with_raw_response


class MutualFundWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_mutual_fund_holdings(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMutualFundHoldingsResponse, GetMutualFundHoldingsErrorBody]:
        """Returns mutual fund holdings for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/holdings"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMutualFundHoldingsResponse],
            error_mapper=get_mutual_fund_holdings_error_mapper,
            request_options=request_options,
        )

    def get_mutual_fund_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetMutualFundOrderDetailsResponse, GetMutualFundOrderErrorBody]:
        """Returns a single mutual fund order by order id.

        Args:
            order_id: Mutual fund order id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/orders/{order_id}"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMutualFundOrderDetailsResponse],
            error_mapper=get_mutual_fund_order_error_mapper,
            request_options=request_options,
        )

    def get_mutual_fund_orders(
        self,
        *,
        status: str | None = "ALL",
        transaction_type: str | None = "ALL",
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMutualFundOrdersResponse, GetMutualFundOrdersErrorBody]:
        """Returns mutual fund orders from the last 7 days for the authenticated user.

        Args:
            status: Mutual fund order status
            transaction_type: Mutual fund order transaction type
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/orders"),
            query_params=[
                param[str | None]("status", status),
                param[str | None]("transaction_type", transaction_type),
                param[int | None]("page_number", page_number),
                param[int | None]("records", records),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMutualFundOrdersResponse],
            error_mapper=get_mutual_fund_orders_error_mapper,
            request_options=request_options,
        )

    def get_mutual_fund_sips(
        self,
        *,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMutualFundSipsResponse, GetMutualFundSipsErrorBody]:
        """Returns active and paused SIP orders for the authenticated user.

        Args:
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/sips"),
            query_params=[param[int | None]("page_number", page_number), param[int | None]("records", records)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetMutualFundSipsResponse],
            error_mapper=get_mutual_fund_sips_error_mapper,
            request_options=request_options,
        )


class AsyncMutualFundWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_mutual_fund_holdings(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMutualFundHoldingsResponse, GetMutualFundHoldingsErrorBody]:
        """Returns mutual fund holdings for the authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/holdings"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMutualFundHoldingsResponse],
            error_mapper=get_mutual_fund_holdings_error_mapper,
            request_options=request_options,
        )

    async def get_mutual_fund_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetMutualFundOrderDetailsResponse, GetMutualFundOrderErrorBody]:
        """Returns a single mutual fund order by order id.

        Args:
            order_id: Mutual fund order id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/orders/{order_id}"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMutualFundOrderDetailsResponse],
            error_mapper=get_mutual_fund_order_error_mapper,
            request_options=request_options,
        )

    async def get_mutual_fund_orders(
        self,
        *,
        status: str | None = "ALL",
        transaction_type: str | None = "ALL",
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMutualFundOrdersResponse, GetMutualFundOrdersErrorBody]:
        """Returns mutual fund orders from the last 7 days for the authenticated user.

        Args:
            status: Mutual fund order status
            transaction_type: Mutual fund order transaction type
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/orders"),
            query_params=[
                param[str | None]("status", status),
                param[str | None]("transaction_type", transaction_type),
                param[int | None]("page_number", page_number),
                param[int | None]("records", records),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMutualFundOrdersResponse],
            error_mapper=get_mutual_fund_orders_error_mapper,
            request_options=request_options,
        )

    async def get_mutual_fund_sips(
        self,
        *,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetMutualFundSipsResponse, GetMutualFundSipsErrorBody]:
        """Returns active and paused SIP orders for the authenticated user.

        Args:
            page_number: Page number for pagination.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/mf/sips"),
            query_params=[param[int | None]("page_number", page_number), param[int | None]("records", records)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetMutualFundSipsResponse],
            error_mapper=get_mutual_fund_sips_error_mapper,
            request_options=request_options,
        )
