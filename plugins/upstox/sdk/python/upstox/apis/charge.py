from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_brokerage_error import GetBrokerageErrorBody, get_brokerage_error_mapper
from ..errors.post_margin_error import PostMarginErrorBody, post_margin_error_mapper
from ..models.get_brokerage_response import GetBrokerageResponse
from ..models.margin_request import MarginRequest, MarginRequestDict
from ..models.post_margin_response import PostMarginResponse
from ..server.server import Server


class Charge:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ChargeWithRawResponse(client, server, auth)

    def get_brokerage(
        self,
        instrument_token: str,
        quantity: int,
        product: str,
        transaction_type: str,
        price: float,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetBrokerageResponse:
        """Compute Brokerage Charges

        Args:
            instrument_token: Key of the instrument
            quantity: Quantity with which the order is to be placed
            product: Product with which the order is to be placed
            transaction_type: Indicates whether its a BUY or SELL order
            price: Price with which the order is to be placed
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1060 - The quantity is required<br>UDAPI1061 - The price is
                required<br>UDAPI1062 - The transaction_type is required<br> UDAPI1063 - The product is required<br>
                UDAPI1064 - The quantity cannot be zero<br>UDAPI1065 - The price cannot be zero<br>UDAPI1059 - The
                instrument_token is of invalid format Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_brokerage(
                instrument_token, quantity, product, transaction_type, price, request_options=request_options
            ),
        )

    def post_margin(
        self, body: MarginRequest | MarginRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PostMarginResponse:
        """Compute Margin

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1095 - The price must be greater than zero<br>UDAPI1096 - Quantity cannot
                be less than or equal to zero<br>UDAPI1097 - The quantity is required<br>UDAPI1098 - The
                instrument_token is of invalid format<br>UDAPI1099 - The instrument key is required<br>UDAPI1100 - The
                product is required<br>UDAPI1101 - The transaction_type is required<br>UDAPI1102 - The instrument limit
                has been exceeded<br>UDAPI1103 - Instrument key cannot be duplicated<br>UDAPI1104 - Quantity should be
                multiple of lot size Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.post_margin(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ChargeWithRawResponse:
        return self._with_raw_response


class AsyncCharge:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncChargeWithRawResponse(client, server, auth)

    async def get_brokerage(
        self,
        instrument_token: str,
        quantity: int,
        product: str,
        transaction_type: str,
        price: float,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetBrokerageResponse:
        """Compute Brokerage Charges

        Args:
            instrument_token: Key of the instrument
            quantity: Quantity with which the order is to be placed
            product: Product with which the order is to be placed
            transaction_type: Indicates whether its a BUY or SELL order
            price: Price with which the order is to be placed
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1060 - The quantity is required<br>UDAPI1061 - The price is
                required<br>UDAPI1062 - The transaction_type is required<br> UDAPI1063 - The product is required<br>
                UDAPI1064 - The quantity cannot be zero<br>UDAPI1065 - The price cannot be zero<br>UDAPI1059 - The
                instrument_token is of invalid format Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_brokerage(
                instrument_token, quantity, product, transaction_type, price, request_options=request_options
            ),
        )

    async def post_margin(
        self, body: MarginRequest | MarginRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PostMarginResponse:
        """Compute Margin

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1095 - The price must be greater than zero<br>UDAPI1096 - Quantity cannot
                be less than or equal to zero<br>UDAPI1097 - The quantity is required<br>UDAPI1098 - The
                instrument_token is of invalid format<br>UDAPI1099 - The instrument key is required<br>UDAPI1100 - The
                product is required<br>UDAPI1101 - The transaction_type is required<br>UDAPI1102 - The instrument limit
                has been exceeded<br>UDAPI1103 - Instrument key cannot be duplicated<br>UDAPI1104 - Quantity should be
                multiple of lot size Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.post_margin(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncChargeWithRawResponse:
        return self._with_raw_response


class ChargeWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_brokerage(
        self,
        instrument_token: str,
        quantity: int,
        product: str,
        transaction_type: str,
        price: float,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetBrokerageResponse, GetBrokerageErrorBody]:
        """Compute Brokerage Charges

        Args:
            instrument_token: Key of the instrument
            quantity: Quantity with which the order is to be placed
            product: Product with which the order is to be placed
            transaction_type: Indicates whether its a BUY or SELL order
            price: Price with which the order is to be placed
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/charges/brokerage"),
            query_params=[
                param[str]("instrument_token", instrument_token),
                param[int]("quantity", quantity),
                param[str]("product", product),
                param[str]("transaction_type", transaction_type),
                param[float]("price", price),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetBrokerageResponse],
            error_mapper=get_brokerage_error_mapper,
            request_options=request_options,
        )

    def post_margin(
        self, body: MarginRequest | MarginRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PostMarginResponse, PostMarginErrorBody]:
        """Compute Margin

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/charges/margin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MarginRequest | MarginRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PostMarginResponse],
            error_mapper=post_margin_error_mapper,
            request_options=request_options,
        )


class AsyncChargeWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_brokerage(
        self,
        instrument_token: str,
        quantity: int,
        product: str,
        transaction_type: str,
        price: float,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetBrokerageResponse, GetBrokerageErrorBody]:
        """Compute Brokerage Charges

        Args:
            instrument_token: Key of the instrument
            quantity: Quantity with which the order is to be placed
            product: Product with which the order is to be placed
            transaction_type: Indicates whether its a BUY or SELL order
            price: Price with which the order is to be placed
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/charges/brokerage"),
            query_params=[
                param[str]("instrument_token", instrument_token),
                param[int]("quantity", quantity),
                param[str]("product", product),
                param[str]("transaction_type", transaction_type),
                param[float]("price", price),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetBrokerageResponse],
            error_mapper=get_brokerage_error_mapper,
            request_options=request_options,
        )

    async def post_margin(
        self, body: MarginRequest | MarginRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PostMarginResponse, PostMarginErrorBody]:
        """Compute Margin

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/charges/margin"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[MarginRequest | MarginRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PostMarginResponse],
            error_mapper=post_margin_error_mapper,
            request_options=request_options,
        )
