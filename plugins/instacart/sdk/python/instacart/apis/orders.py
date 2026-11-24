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
from ..errors.get_order_handling_error import GetOrderHandlingErrorBody, get_order_handling_error_mapper
from ..errors.get_order_items_error import GetOrderItemsErrorBody, get_order_items_error_mapper
from ..models.order_handling_response import OrderHandlingResponse
from ..models.order_items_response import OrderItemsResponse
from ..server.server import Server


class Orders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrdersWithRawResponse(client, server, auth)

    def get_order_handling(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrderHandlingResponse:
        """Retrieves handling information for a specific order, including the delivery or pickup address, the
        coordinates of the delivery or pickup address, information about the current shopper, and any notes or
        instructions included with the order.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order handling details

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_order_handling(order_id, request_options=request_options))

    def get_order_items(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrderItemsResponse:
        """Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the
        current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a
        shopper is picking the order to get real-time item status updates.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of order items with their statuses

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_order_items(order_id, request_options=request_options))

    @property
    def with_raw_response(self) -> OrdersWithRawResponse:
        return self._with_raw_response


class AsyncOrders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrdersWithRawResponse(client, server, auth)

    async def get_order_handling(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrderHandlingResponse:
        """Retrieves handling information for a specific order, including the delivery or pickup address, the
        coordinates of the delivery or pickup address, information about the current shopper, and any notes or
        instructions included with the order.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order handling details

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_order_handling(order_id, request_options=request_options))

    async def get_order_items(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrderItemsResponse:
        """Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the
        current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a
        shopper is picking the order to get real-time item status updates.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of order items with their statuses

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_order_items(order_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrdersWithRawResponse:
        return self._with_raw_response


class OrdersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_order_handling(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrderHandlingResponse, GetOrderHandlingErrorBody]:
        """Retrieves handling information for a specific order, including the delivery or pickup address, the
        coordinates of the delivery or pickup address, information about the current shopper, and any notes or
        instructions included with the order.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/post_checkout/orders/{order_id}/handling"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderHandlingResponse],
            error_mapper=get_order_handling_error_mapper,
            request_options=request_options,
        )

    def get_order_items(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrderItemsResponse, GetOrderItemsErrorBody]:
        """Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the
        current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a
        shopper is picking the order to get real-time item status updates.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/post_checkout/orders/{order_id}/items"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderItemsResponse],
            error_mapper=get_order_items_error_mapper,
            request_options=request_options,
        )


class AsyncOrdersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_order_handling(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrderHandlingResponse, GetOrderHandlingErrorBody]:
        """Retrieves handling information for a specific order, including the delivery or pickup address, the
        coordinates of the delivery or pickup address, information about the current shopper, and any notes or
        instructions included with the order.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/post_checkout/orders/{order_id}/handling"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderHandlingResponse],
            error_mapper=get_order_handling_error_mapper,
            request_options=request_options,
        )

    async def get_order_items(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrderItemsResponse, GetOrderItemsErrorBody]:
        """Retrieves the list of items for a specific order. Each item includes item details of the ordered item, the
        current status of that item, and the current replacement for that item if one exists. Poll this endpoint while a
        shopper is picking the order to get real-time item status updates.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/post_checkout/orders/{order_id}/items"),
            path_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderItemsResponse],
            error_mapper=get_order_items_error_mapper,
            request_options=request_options,
        )
