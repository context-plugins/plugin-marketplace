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
from ..errors.cancel_gtt_order_error import CancelGttOrderErrorBody, cancel_gtt_order_error_mapper
from ..errors.cancel_multi_order_error import CancelMultiOrderErrorBody, cancel_multi_order_error_mapper
from ..errors.cancel_order1_error import CancelOrder1ErrorBody, cancel_order1_error_mapper
from ..errors.cancel_order_error import CancelOrderErrorBody, cancel_order_error_mapper
from ..errors.exit_positions_error import ExitPositionsErrorBody, exit_positions_error_mapper
from ..errors.get_gtt_order_details_error import GetGttOrderDetailsErrorBody, get_gtt_order_details_error_mapper
from ..errors.get_order_book_error import GetOrderBookErrorBody, get_order_book_error_mapper
from ..errors.get_order_details_error import GetOrderDetailsErrorBody, get_order_details_error_mapper
from ..errors.get_order_status_error import GetOrderStatusErrorBody, get_order_status_error_mapper
from ..errors.get_trade_history_error import GetTradeHistoryErrorBody, get_trade_history_error_mapper
from ..errors.get_trades_by_order_error import GetTradesByOrderErrorBody, get_trades_by_order_error_mapper
from ..errors.modify_gtt_order_error import ModifyGttOrderErrorBody, modify_gtt_order_error_mapper
from ..errors.modify_order1_error import ModifyOrder1ErrorBody, modify_order1_error_mapper
from ..errors.modify_order_error import ModifyOrderErrorBody, modify_order_error_mapper
from ..errors.place_gtt_order_error import PlaceGttOrderErrorBody, place_gtt_order_error_mapper
from ..errors.place_multi_order_error import PlaceMultiOrderErrorBody, place_multi_order_error_mapper
from ..errors.place_order1_error import PlaceOrder1ErrorBody, place_order1_error_mapper
from ..errors.place_order_error import PlaceOrderErrorBody, place_order_error_mapper
from ..models.cancel_or_exit_multi_order_response import CancelOrExitMultiOrderResponse
from ..models.cancel_order_response import CancelOrderResponse
from ..models.cancel_order_v3_response import CancelOrderV3Response
from ..models.get_gtt_order_response import GetGttOrderResponse
from ..models.get_order_book_response import GetOrderBookResponse
from ..models.get_order_details_response import GetOrderDetailsResponse
from ..models.get_order_response import GetOrderResponse
from ..models.get_trade_response import GetTradeResponse
from ..models.gtt_cancel_order_request import GttCancelOrderRequest, GttCancelOrderRequestDict
from ..models.gtt_modify_order_request import GttModifyOrderRequest, GttModifyOrderRequestDict
from ..models.gtt_place_order_request import GttPlaceOrderRequest, GttPlaceOrderRequestDict
from ..models.gtt_trigger_order_response import GttTriggerOrderResponse
from ..models.modify_order_request import ModifyOrderRequest, ModifyOrderRequestDict
from ..models.modify_order_response import ModifyOrderResponse
from ..models.modify_order_v3_response import ModifyOrderV3Response
from ..models.multi_order_request import MultiOrderRequest, MultiOrderRequestDict
from ..models.multi_order_response import MultiOrderResponse
from ..models.place_order_request import PlaceOrderRequest, PlaceOrderRequestDict
from ..models.place_order_response import PlaceOrderResponse
from ..models.place_order_v3_request import PlaceOrderV3Request, PlaceOrderV3RequestDict
from ..models.place_order_v3_response import PlaceOrderV3Response
from ..server.server import Server


class Order:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrderWithRawResponse(client, server, auth)

    def cancel_gtt_order(
        self,
        body: GttCancelOrderRequest | GttCancelOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GttTriggerOrderResponse:
        """This API allows you to cancel GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.cancel_gtt_order(body, origin=origin, request_options=request_options))

    def cancel_multi_order(
        self, *, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CancelOrExitMultiOrderResponse:
        """API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

        Args:
            tag: The tag associated with the orders for which the orders must be cancelled
            segment: The segment for which the orders must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1105 - Invalid segment<br>UDAPI1108 - No open or pending order
                available<br>UDAPI1109 - Available open or pending orders should not be more than limit Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.cancel_multi_order(tag=tag, segment=segment, request_options=request_options)
        )

    def cancel_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CancelOrderV3Response:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.cancel_order(order_id, request_options=request_options))

    def cancel_order_1(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CancelOrderResponse:
        """Cancel order API can be used for two purposes: Cancelling an open order which could be an AMO or a normal
        order It is also used to EXIT a CO or OCO(bracket order)

        Args:
            order_id: The order ID for which the order must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'.<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.cancel_order_1(order_id, request_options=request_options))

    def exit_positions(
        self, *, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CancelOrExitMultiOrderResponse:
        """This API provides the functionality to exit all the positions

        Args:
            tag: The tag associated with the positions for which the positions must be exit
            segment: The segment for which the positions must be exit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1105 - Invalid segment. <br>UDAPI1108 - No open position available to
                exit.<br>UDAPI1109 - Available open positions should not be more than limit. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.exit_positions(tag=tag, segment=segment, request_options=request_options))

    def get_gtt_order_details(
        self, *, gtt_order_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetGttOrderResponse:
        """GTT_ORDER_DESCRIPTION

        Args:
            gtt_order_id: Unique identifier of the GTT order for which the order history is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_gtt_order_details(gtt_order_id=gtt_order_id, request_options=request_options)
        )

    def get_order_book(self, *, request_options: RequestOptionsOrDict | None = None) -> GetOrderBookResponse:
        """This API provides the list of orders placed by the user. The orders placed by the user is transient for a day
        and is cleared by the end of the trading session. This API returns all states of the orders, namely, open,
        pending, and filled ones.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_order_book(request_options=request_options))

    def get_order_details(
        self,
        *,
        order_id: str | None = None,
        tag: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetOrderResponse:
        """This API provides the details of the particular order the user has placed. The orders placed by the user is
        transient for a day and are cleared by the end of the trading session. This API returns all states of the
        orders, namely, open, pending, and filled ones.

        The order history can be requested either using order_id or tag.

        If both the options are passed, the history of the order which precisely matches both the order_id and tag will
        be returned in the response.

        If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the
        response.

        Args:
            order_id: The order reference ID for which the order history is required
            tag: The unique tag of the order for which the order history is being requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_order_details(order_id=order_id, tag=tag, request_options=request_options)
        )

    def get_order_status(
        self, *, order_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetOrderDetailsResponse:
        r"""This API provides the recent detail of the particular order the user has placed. The orders placed by the
        user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be
        requested using order_id.

        Args:
            order_id: The order reference ID for which the order details is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_order_status(order_id=order_id, request_options=request_options))

    def get_trade_history(self, *, request_options: RequestOptionsOrDict | None = None) -> GetTradeResponse:
        """Retrieve the trades executed for the day

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_trade_history(request_options=request_options))

    def get_trades_by_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetTradeResponse:
        """Retrieve the trades executed for an order

        Args:
            order_id: The order ID for which the order to get order trades
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'.<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_trades_by_order(order_id, request_options=request_options))

    def modify_gtt_order(
        self,
        body: GttModifyOrderRequest | GttModifyOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GttTriggerOrderResponse:
        """This API allows you to modify GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.modify_gtt_order(body, origin=origin, request_options=request_options))

    def modify_order(
        self, body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModifyOrderV3Response:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.modify_order(body, request_options=request_options))

    def modify_order_1(
        self, body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ModifyOrderResponse:
        """This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send
        the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will
        be considered from the original order

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.modify_order_1(body, request_options=request_options))

    def place_gtt_order(
        self,
        body: GttPlaceOrderRequest | GttPlaceOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GttTriggerOrderResponse:
        """This API allows you to place GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.place_gtt_order(body, origin=origin, request_options=request_options))

    def place_multi_order(
        self,
        body: list[MultiOrderRequest | MultiOrderRequestDict],
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MultiOrderResponse:
        """This API allows you to place multiple orders to the exchange via Upstox.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.place_multi_order(body, origin=origin, request_options=request_options))

    def place_order(
        self,
        body: PlaceOrderV3Request | PlaceOrderV3RequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PlaceOrderV3Response:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.place_order(body, request_options=request_options))

    def place_order_1(
        self, body: PlaceOrderRequest | PlaceOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> PlaceOrderResponse:
        """This API allows you to place an order to the exchange via Upstox.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.place_order_1(body, request_options=request_options))

    @property
    def with_raw_response(self) -> OrderWithRawResponse:
        return self._with_raw_response


class AsyncOrder:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrderWithRawResponse(client, server, auth)

    async def cancel_gtt_order(
        self,
        body: GttCancelOrderRequest | GttCancelOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GttTriggerOrderResponse:
        """This API allows you to cancel GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_gtt_order(body, origin=origin, request_options=request_options)
        )

    async def cancel_multi_order(
        self,
        *,
        tag: str | None = None,
        segment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CancelOrExitMultiOrderResponse:
        """API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

        Args:
            tag: The tag associated with the orders for which the orders must be cancelled
            segment: The segment for which the orders must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1105 - Invalid segment<br>UDAPI1108 - No open or pending order
                available<br>UDAPI1109 - Available open or pending orders should not be more than limit Internal Server
                Error Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_multi_order(tag=tag, segment=segment, request_options=request_options)
        )

    async def cancel_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CancelOrderV3Response:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.cancel_order(order_id, request_options=request_options))

    async def cancel_order_1(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CancelOrderResponse:
        """Cancel order API can be used for two purposes: Cancelling an open order which could be an AMO or a normal
        order It is also used to EXIT a CO or OCO(bracket order)

        Args:
            order_id: The order ID for which the order must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'.<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.cancel_order_1(order_id, request_options=request_options))

    async def exit_positions(
        self,
        *,
        tag: str | None = None,
        segment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CancelOrExitMultiOrderResponse:
        """This API provides the functionality to exit all the positions

        Args:
            tag: The tag associated with the positions for which the positions must be exit
            segment: The segment for which the positions must be exit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1105 - Invalid segment. <br>UDAPI1108 - No open position available to
                exit.<br>UDAPI1109 - Available open positions should not be more than limit. Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.exit_positions(tag=tag, segment=segment, request_options=request_options)
        )

    async def get_gtt_order_details(
        self, *, gtt_order_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetGttOrderResponse:
        """GTT_ORDER_DESCRIPTION

        Args:
            gtt_order_id: Unique identifier of the GTT order for which the order history is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_gtt_order_details(
                gtt_order_id=gtt_order_id, request_options=request_options
            ),
        )

    async def get_order_book(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetOrderBookResponse:
        """This API provides the list of orders placed by the user. The orders placed by the user is transient for a day
        and is cleared by the end of the trading session. This API returns all states of the orders, namely, open,
        pending, and filled ones.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_order_book(request_options=request_options))

    async def get_order_details(
        self,
        *,
        order_id: str | None = None,
        tag: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetOrderResponse:
        """This API provides the details of the particular order the user has placed. The orders placed by the user is
        transient for a day and are cleared by the end of the trading session. This API returns all states of the
        orders, namely, open, pending, and filled ones.

        The order history can be requested either using order_id or tag.

        If both the options are passed, the history of the order which precisely matches both the order_id and tag will
        be returned in the response.

        If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the
        response.

        Args:
            order_id: The order reference ID for which the order history is required
            tag: The unique tag of the order for which the order history is being requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_order_details(order_id=order_id, tag=tag, request_options=request_options)
        )

    async def get_order_status(
        self, *, order_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetOrderDetailsResponse:
        r"""This API provides the recent detail of the particular order the user has placed. The orders placed by the
        user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be
        requested using order_id.

        Args:
            order_id: The order reference ID for which the order details is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_order_status(order_id=order_id, request_options=request_options)
        )

    async def get_trade_history(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> GetTradeResponse:
        """Retrieve the trades executed for the day

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_trade_history(request_options=request_options))

    async def get_trades_by_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetTradeResponse:
        """Retrieve the trades executed for an order

        Args:
            order_id: The order ID for which the order to get order trades
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1010 - Order id accepts only alphanumeric characters and '-'.<br>UDAPI1023
                - Order id is required<br>UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.get_trades_by_order(order_id, request_options=request_options))

    async def modify_gtt_order(
        self,
        body: GttModifyOrderRequest | GttModifyOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GttTriggerOrderResponse:
        """This API allows you to modify GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.modify_gtt_order(body, origin=origin, request_options=request_options)
        )

    async def modify_order(
        self,
        body: ModifyOrderRequest | ModifyOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModifyOrderV3Response:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.modify_order(body, request_options=request_options))

    async def modify_order_1(
        self,
        body: ModifyOrderRequest | ModifyOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ModifyOrderResponse:
        """This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send
        the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will
        be considered from the original order

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI100010 - Unknown order id | order request rejected Internal Server Error
                Forbidden Locked Unprocessable Entity Too Many Requests ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.modify_order_1(body, request_options=request_options))

    async def place_gtt_order(
        self,
        body: GttPlaceOrderRequest | GttPlaceOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GttTriggerOrderResponse:
        """This API allows you to place GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.place_gtt_order(body, origin=origin, request_options=request_options)
        )

    async def place_multi_order(
        self,
        body: list[MultiOrderRequest | MultiOrderRequestDict],
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MultiOrderResponse:
        """This API allows you to place multiple orders to the exchange via Upstox.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.place_multi_order(body, origin=origin, request_options=request_options)
        )

    async def place_order(
        self,
        body: PlaceOrderV3Request | PlaceOrderV3RequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlaceOrderV3Response:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.place_order(body, request_options=request_options))

    async def place_order_1(
        self,
        body: PlaceOrderRequest | PlaceOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PlaceOrderResponse:
        """This API allows you to place an order to the exchange via Upstox.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.place_order_1(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrderWithRawResponse:
        return self._with_raw_response


class OrderWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_gtt_order(
        self,
        body: GttCancelOrderRequest | GttCancelOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GttTriggerOrderResponse, CancelGttOrderErrorBody]:
        """This API allows you to cancel GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/order/gtt/cancel"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GttCancelOrderRequest | GttCancelOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GttTriggerOrderResponse],
            error_mapper=cancel_gtt_order_error_mapper,
            request_options=request_options,
        )

    def cancel_multi_order(
        self, *, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelOrExitMultiOrderResponse, CancelMultiOrderErrorBody]:
        """API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

        Args:
            tag: The tag associated with the orders for which the orders must be cancelled
            segment: The segment for which the orders must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/order/multi/cancel"),
            query_params=[param[str | None]("tag", tag), param[str | None]("segment", segment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CancelOrExitMultiOrderResponse],
            error_mapper=cancel_multi_order_error_mapper,
            request_options=request_options,
        )

    def cancel_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelOrderV3Response, CancelOrderErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/order/cancel"),
            query_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CancelOrderV3Response],
            error_mapper=cancel_order_error_mapper,
            request_options=request_options,
        )

    def cancel_order_1(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelOrderResponse, CancelOrder1ErrorBody]:
        """Cancel order API can be used for two purposes: Cancelling an open order which could be an AMO or a normal
        order It is also used to EXIT a CO or OCO(bracket order)

        Args:
            order_id: The order ID for which the order must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/order/cancel"),
            query_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CancelOrderResponse],
            error_mapper=cancel_order1_error_mapper,
            request_options=request_options,
        )

    def exit_positions(
        self, *, tag: str | None = None, segment: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CancelOrExitMultiOrderResponse, ExitPositionsErrorBody]:
        """This API provides the functionality to exit all the positions

        Args:
            tag: The tag associated with the positions for which the positions must be exit
            segment: The segment for which the positions must be exit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/order/positions/exit"),
            query_params=[param[str | None]("tag", tag), param[str | None]("segment", segment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[CancelOrExitMultiOrderResponse],
            error_mapper=exit_positions_error_mapper,
            request_options=request_options,
        )

    def get_gtt_order_details(
        self, *, gtt_order_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetGttOrderResponse, GetGttOrderDetailsErrorBody]:
        """GTT_ORDER_DESCRIPTION

        Args:
            gtt_order_id: Unique identifier of the GTT order for which the order history is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/order/gtt"),
            query_params=[param[str | None]("gtt_order_id", gtt_order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetGttOrderResponse],
            error_mapper=get_gtt_order_details_error_mapper,
            request_options=request_options,
        )

    def get_order_book(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetOrderBookResponse, GetOrderBookErrorBody]:
        """This API provides the list of orders placed by the user. The orders placed by the user is transient for a day
        and is cleared by the end of the trading session. This API returns all states of the orders, namely, open,
        pending, and filled ones.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/retrieve-all"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetOrderBookResponse],
            error_mapper=get_order_book_error_mapper,
            request_options=request_options,
        )

    def get_order_details(
        self,
        *,
        order_id: str | None = None,
        tag: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetOrderResponse, GetOrderDetailsErrorBody]:
        """This API provides the details of the particular order the user has placed. The orders placed by the user is
        transient for a day and are cleared by the end of the trading session. This API returns all states of the
        orders, namely, open, pending, and filled ones.

        The order history can be requested either using order_id or tag.

        If both the options are passed, the history of the order which precisely matches both the order_id and tag will
        be returned in the response.

        If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the
        response.

        Args:
            order_id: The order reference ID for which the order history is required
            tag: The unique tag of the order for which the order history is being requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/history"),
            query_params=[param[str | None]("order_id", order_id), param[str | None]("tag", tag)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetOrderResponse],
            error_mapper=get_order_details_error_mapper,
            request_options=request_options,
        )

    def get_order_status(
        self, *, order_id: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetOrderDetailsResponse, GetOrderStatusErrorBody]:
        r"""This API provides the recent detail of the particular order the user has placed. The orders placed by the
        user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be
        requested using order_id.

        Args:
            order_id: The order reference ID for which the order details is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/details"),
            query_params=[param[str | None]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetOrderDetailsResponse],
            error_mapper=get_order_status_error_mapper,
            request_options=request_options,
        )

    def get_trade_history(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetTradeResponse, GetTradeHistoryErrorBody]:
        """Retrieve the trades executed for the day

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/trades/get-trades-for-day"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetTradeResponse],
            error_mapper=get_trade_history_error_mapper,
            request_options=request_options,
        )

    def get_trades_by_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetTradeResponse, GetTradesByOrderErrorBody]:
        """Retrieve the trades executed for an order

        Args:
            order_id: The order ID for which the order to get order trades
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/trades"),
            query_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetTradeResponse],
            error_mapper=get_trades_by_order_error_mapper,
            request_options=request_options,
        )

    def modify_gtt_order(
        self,
        body: GttModifyOrderRequest | GttModifyOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GttTriggerOrderResponse, ModifyGttOrderErrorBody]:
        """This API allows you to modify GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/order/gtt/modify"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GttModifyOrderRequest | GttModifyOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GttTriggerOrderResponse],
            error_mapper=modify_gtt_order_error_mapper,
            request_options=request_options,
        )

    def modify_order(
        self, body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModifyOrderV3Response, ModifyOrderErrorBody]:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/order/modify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModifyOrderRequest | ModifyOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[ModifyOrderV3Response],
            error_mapper=modify_order_error_mapper,
            request_options=request_options,
        )

    def modify_order_1(
        self, body: ModifyOrderRequest | ModifyOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ModifyOrderResponse, ModifyOrder1ErrorBody]:
        """This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send
        the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will
        be considered from the original order

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/order/modify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModifyOrderRequest | ModifyOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[ModifyOrderResponse],
            error_mapper=modify_order1_error_mapper,
            request_options=request_options,
        )

    def place_gtt_order(
        self,
        body: GttPlaceOrderRequest | GttPlaceOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GttTriggerOrderResponse, PlaceGttOrderErrorBody]:
        """This API allows you to place GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/order/gtt/place"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GttPlaceOrderRequest | GttPlaceOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GttTriggerOrderResponse],
            error_mapper=place_gtt_order_error_mapper,
            request_options=request_options,
        )

    def place_multi_order(
        self,
        body: list[MultiOrderRequest | MultiOrderRequestDict],
        *,
        origin: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MultiOrderResponse, PlaceMultiOrderErrorBody]:
        """This API allows you to place multiple orders to the exchange via Upstox.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/order/multi/place"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[MultiOrderRequest | MultiOrderRequestDict]](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[MultiOrderResponse],
            error_mapper=place_multi_order_error_mapper,
            request_options=request_options,
        )

    def place_order(
        self,
        body: PlaceOrderV3Request | PlaceOrderV3RequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PlaceOrderV3Response, PlaceOrderErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/order/place"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlaceOrderV3Request | PlaceOrderV3RequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PlaceOrderV3Response],
            error_mapper=place_order_error_mapper,
            request_options=request_options,
        )

    def place_order_1(
        self, body: PlaceOrderRequest | PlaceOrderRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlaceOrderResponse, PlaceOrder1ErrorBody]:
        """This API allows you to place an order to the exchange via Upstox.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/order/place"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlaceOrderRequest | PlaceOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PlaceOrderResponse],
            error_mapper=place_order1_error_mapper,
            request_options=request_options,
        )


class AsyncOrderWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_gtt_order(
        self,
        body: GttCancelOrderRequest | GttCancelOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GttTriggerOrderResponse, CancelGttOrderErrorBody]:
        """This API allows you to cancel GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/order/gtt/cancel"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GttCancelOrderRequest | GttCancelOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GttTriggerOrderResponse],
            error_mapper=cancel_gtt_order_error_mapper,
            request_options=request_options,
        )

    async def cancel_multi_order(
        self,
        *,
        tag: str | None = None,
        segment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelOrExitMultiOrderResponse, CancelMultiOrderErrorBody]:
        """API to cancel all the open or pending orders which can be applied to both AMO and regular orders.

        Args:
            tag: The tag associated with the orders for which the orders must be cancelled
            segment: The segment for which the orders must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/order/multi/cancel"),
            query_params=[param[str | None]("tag", tag), param[str | None]("segment", segment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CancelOrExitMultiOrderResponse],
            error_mapper=cancel_multi_order_error_mapper,
            request_options=request_options,
        )

    async def cancel_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CancelOrderV3Response, CancelOrderErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/order/cancel"),
            query_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CancelOrderV3Response],
            error_mapper=cancel_order_error_mapper,
            request_options=request_options,
        )

    async def cancel_order_1(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CancelOrderResponse, CancelOrder1ErrorBody]:
        """Cancel order API can be used for two purposes: Cancelling an open order which could be an AMO or a normal
        order It is also used to EXIT a CO or OCO(bracket order)

        Args:
            order_id: The order ID for which the order must be cancelled
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/order/cancel"),
            query_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CancelOrderResponse],
            error_mapper=cancel_order1_error_mapper,
            request_options=request_options,
        )

    async def exit_positions(
        self,
        *,
        tag: str | None = None,
        segment: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelOrExitMultiOrderResponse, ExitPositionsErrorBody]:
        """This API provides the functionality to exit all the positions

        Args:
            tag: The tag associated with the positions for which the positions must be exit
            segment: The segment for which the positions must be exit
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/order/positions/exit"),
            query_params=[param[str | None]("tag", tag), param[str | None]("segment", segment)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[CancelOrExitMultiOrderResponse],
            error_mapper=exit_positions_error_mapper,
            request_options=request_options,
        )

    async def get_gtt_order_details(
        self, *, gtt_order_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetGttOrderResponse, GetGttOrderDetailsErrorBody]:
        """GTT_ORDER_DESCRIPTION

        Args:
            gtt_order_id: Unique identifier of the GTT order for which the order history is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/order/gtt"),
            query_params=[param[str | None]("gtt_order_id", gtt_order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetGttOrderResponse],
            error_mapper=get_gtt_order_details_error_mapper,
            request_options=request_options,
        )

    async def get_order_book(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetOrderBookResponse, GetOrderBookErrorBody]:
        """This API provides the list of orders placed by the user. The orders placed by the user is transient for a day
        and is cleared by the end of the trading session. This API returns all states of the orders, namely, open,
        pending, and filled ones.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/retrieve-all"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetOrderBookResponse],
            error_mapper=get_order_book_error_mapper,
            request_options=request_options,
        )

    async def get_order_details(
        self,
        *,
        order_id: str | None = None,
        tag: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetOrderResponse, GetOrderDetailsErrorBody]:
        """This API provides the details of the particular order the user has placed. The orders placed by the user is
        transient for a day and are cleared by the end of the trading session. This API returns all states of the
        orders, namely, open, pending, and filled ones.

        The order history can be requested either using order_id or tag.

        If both the options are passed, the history of the order which precisely matches both the order_id and tag will
        be returned in the response.

        If only the tag is passed, the history of all the associated orders which matches the tag will be shared in the
        response.

        Args:
            order_id: The order reference ID for which the order history is required
            tag: The unique tag of the order for which the order history is being requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/history"),
            query_params=[param[str | None]("order_id", order_id), param[str | None]("tag", tag)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetOrderResponse],
            error_mapper=get_order_details_error_mapper,
            request_options=request_options,
        )

    async def get_order_status(
        self, *, order_id: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetOrderDetailsResponse, GetOrderStatusErrorBody]:
        r"""This API provides the recent detail of the particular order the user has placed. The orders placed by the
        user is transient for a day and are cleared by the end of the trading session.\n\nThe order details can be
        requested using order_id.

        Args:
            order_id: The order reference ID for which the order details is required
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/details"),
            query_params=[param[str | None]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetOrderDetailsResponse],
            error_mapper=get_order_status_error_mapper,
            request_options=request_options,
        )

    async def get_trade_history(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetTradeResponse, GetTradeHistoryErrorBody]:
        """Retrieve the trades executed for the day

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/trades/get-trades-for-day"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetTradeResponse],
            error_mapper=get_trade_history_error_mapper,
            request_options=request_options,
        )

    async def get_trades_by_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetTradeResponse, GetTradesByOrderErrorBody]:
        """Retrieve the trades executed for an order

        Args:
            order_id: The order ID for which the order to get order trades
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/order/trades"),
            query_params=[param[str]("order_id", order_id)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetTradeResponse],
            error_mapper=get_trades_by_order_error_mapper,
            request_options=request_options,
        )

    async def modify_gtt_order(
        self,
        body: GttModifyOrderRequest | GttModifyOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GttTriggerOrderResponse, ModifyGttOrderErrorBody]:
        """This API allows you to modify GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/order/gtt/modify"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GttModifyOrderRequest | GttModifyOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GttTriggerOrderResponse],
            error_mapper=modify_gtt_order_error_mapper,
            request_options=request_options,
        )

    async def modify_order(
        self,
        body: ModifyOrderRequest | ModifyOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModifyOrderV3Response, ModifyOrderErrorBody]:
        """Send a ``PUT`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/order/modify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModifyOrderRequest | ModifyOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[ModifyOrderV3Response],
            error_mapper=modify_order_error_mapper,
            request_options=request_options,
        )

    async def modify_order_1(
        self,
        body: ModifyOrderRequest | ModifyOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ModifyOrderResponse, ModifyOrder1ErrorBody]:
        """This API allows you to modify an order. For modification orderId is mandatory. With orderId you need to send
        the optional parameter which needs to be modified. In case the optional parameters aren't sent, the default will
        be considered from the original order

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/order/modify"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModifyOrderRequest | ModifyOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[ModifyOrderResponse],
            error_mapper=modify_order1_error_mapper,
            request_options=request_options,
        )

    async def place_gtt_order(
        self,
        body: GttPlaceOrderRequest | GttPlaceOrderRequestDict,
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GttTriggerOrderResponse, PlaceGttOrderErrorBody]:
        """This API allows you to place GTT orders.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/order/gtt/place"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[GttPlaceOrderRequest | GttPlaceOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GttTriggerOrderResponse],
            error_mapper=place_gtt_order_error_mapper,
            request_options=request_options,
        )

    async def place_multi_order(
        self,
        body: list[MultiOrderRequest | MultiOrderRequestDict],
        *,
        origin: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MultiOrderResponse, PlaceMultiOrderErrorBody]:
        """This API allows you to place multiple orders to the exchange via Upstox.

        Args:
            body: The request body.
            origin: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/order/multi/place"),
            headers=[param[str | None]("Origin", origin), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[list[MultiOrderRequest | MultiOrderRequestDict]](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[MultiOrderResponse],
            error_mapper=place_multi_order_error_mapper,
            request_options=request_options,
        )

    async def place_order(
        self,
        body: PlaceOrderV3Request | PlaceOrderV3RequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlaceOrderV3Response, PlaceOrderErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/order/place"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlaceOrderV3Request | PlaceOrderV3RequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PlaceOrderV3Response],
            error_mapper=place_order_error_mapper,
            request_options=request_options,
        )

    async def place_order_1(
        self,
        body: PlaceOrderRequest | PlaceOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PlaceOrderResponse, PlaceOrder1ErrorBody]:
        """This API allows you to place an order to the exchange via Upstox.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/order/place"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PlaceOrderRequest | PlaceOrderRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PlaceOrderResponse],
            error_mapper=place_order1_error_mapper,
            request_options=request_options,
        )
