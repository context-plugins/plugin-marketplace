from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.order import Order
from ..models.orders_lines_request import OrdersLinesRequest, OrdersLinesRequestDict
from ..server.server import Server


class OrdersLines:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OrdersLinesWithRawResponse(client, server)

    def update3(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersLinesRequest | OrdersLinesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order:
        """Send a ``PUT`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update3(order_id, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> OrdersLinesWithRawResponse:
        return self._with_raw_response


class AsyncOrdersLines:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOrdersLinesWithRawResponse(client, server)

    async def update3(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersLinesRequest | OrdersLinesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order:
        """Send a ``PUT`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update3(order_id, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncOrdersLinesWithRawResponse:
        return self._with_raw_response


class OrdersLinesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def update3(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersLinesRequest | OrdersLinesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, RawError]:
        """Send a ``PUT`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/orders/{orderId}/lines"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersLinesRequest | OrdersLinesRequestDict | None](body),
            decoder=json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncOrdersLinesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def update3(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersLinesRequest | OrdersLinesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, RawError]:
        """Send a ``PUT`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/orders/{orderId}/lines"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersLinesRequest | OrdersLinesRequestDict | None](body),
            decoder=async_json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
