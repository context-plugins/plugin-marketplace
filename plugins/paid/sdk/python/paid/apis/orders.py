from __future__ import annotations

from typing import Any
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
from ..errors.activate_and_pay_error import ActivateAndPayErrorBody, activate_and_pay_error_mapper
from ..errors.activate_order_by_id_error import ActivateOrderByIdErrorBody, activate_order_by_id_error_mapper
from ..errors.batch_order_seat_assignments_error import (
    BatchOrderSeatAssignmentsErrorBody,
    batch_order_seat_assignments_error_mapper,
)
from ..errors.cancel_renewal_error import CancelRenewalErrorBody, cancel_renewal_error_mapper
from ..errors.create_order_error import CreateOrderErrorBody, create_order_error_mapper
from ..errors.delete_order_by_id_error import DeleteOrderByIdErrorBody, delete_order_by_id_error_mapper
from ..errors.get_invoices_error import GetInvoicesErrorBody, get_invoices_error_mapper
from ..errors.get_order_by_id_error import GetOrderByIdErrorBody, get_order_by_id_error_mapper
from ..errors.get_order_lines_error import GetOrderLinesErrorBody, get_order_lines_error_mapper
from ..errors.list_order_seats_error import ListOrderSeatsErrorBody, list_order_seats_error_mapper
from ..errors.list_orders_error import ListOrdersErrorBody, list_orders_error_mapper
from ..errors.schedule_plan_change_error import SchedulePlanChangeErrorBody, schedule_plan_change_error_mapper
from ..errors.update_order_by_id_error import UpdateOrderByIdErrorBody, update_order_by_id_error_mapper
from ..errors.update_order_seat_assignment_error import (
    UpdateOrderSeatAssignmentErrorBody,
    update_order_seat_assignment_error_mapper,
)
from ..models.batch_seat_assignments_request import BatchSeatAssignmentsRequest, BatchSeatAssignmentsRequestDict
from ..models.batch_seat_assignments_response import BatchSeatAssignmentsResponse
from ..models.cancel_renewal_request import CancelRenewalRequest, CancelRenewalRequestDict
from ..models.cancel_renewal_response import CancelRenewalResponse
from ..models.create_order_request import CreateOrderRequest, CreateOrderRequestDict
from ..models.enums.orders_get_parameters_creation_state import OrdersGetParametersCreationStateOrStr
from ..models.enums.orders_get_parameters_status import OrdersGetParametersStatusOrStr
from ..models.enums.orders_id_seats_get_parameters_status import OrdersIdSeatsGetParametersStatusOrStr
from ..models.invoice_paid_orders_api import InvoicePaidOrdersApi
from ..models.order import Order
from ..models.order1 import Order1
from ..models.order_create import OrderCreate, OrderCreateDict
from ..models.order_lines_response import OrderLinesResponse
from ..models.order_list_response import OrderListResponse
from ..models.order_seat import OrderSeat
from ..models.order_seat_list_response import OrderSeatListResponse
from ..models.orders_activate_and_pay_request import OrdersActivateAndPayRequest, OrdersActivateAndPayRequestDict
from ..models.proration_upgrade_request import ProrationUpgradeRequest, ProrationUpgradeRequestDict
from ..models.proration_upgrade_response import ProrationUpgradeResponse
from ..models.update_order_request import UpdateOrderRequest, UpdateOrderRequestDict
from ..models.update_seat_assignment_request import UpdateSeatAssignmentRequest, UpdateSeatAssignmentRequestDict
from ..server.server import Server


class Orders:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = OrdersWithRawResponse(client, server)

    def activate(
        self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Order:
        """Send a ``POST`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.activate(order_id, authorization, request_options=request_options))

    def activate_and_pay(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order:
        """Activates the order and processes the initial payment using the provided Stripe confirmation token.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order activated and payment processed successfully

        Raises:
            ApiError: Bad request - Invalid customer state or request body Forbidden - Invalid or missing API key Order
                not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.activate_and_pay(
                order_id, authorization, body=body, request_options=request_options
            ),
        )

    def activate_order_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Order1:
        """Activate a draft order by ID. Activation starts billing for the order using the same validation and side
        effects as the dashboard activation flow.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.activate_order_by_id(id_, authorization, request_options=request_options))

    def batch_order_seat_assignments(
        self,
        id_: str,
        authorization: str,
        *,
        body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BatchSeatAssignmentsResponse:
        """Assign or unassign seats in batch for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.batch_order_seat_assignments(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def cancel_renewal(
        self,
        order_id: str,
        authorization: str,
        *,
        body: CancelRenewalRequest | CancelRenewalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CancelRenewalResponse:
        """Schedules the cancellation of an order's renewal from a specified date. The order will remain active until
        the cancellation date.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order renewal cancelled successfully

        Raises:
            ApiError: Bad request - Invalid order version or cancel from date Forbidden - Invalid or missing API key
                Order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.cancel_renewal(order_id, authorization, body=body, request_options=request_options)
        )

    def create_order(
        self,
        authorization: str,
        *,
        body: CreateOrderRequest | CreateOrderRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order1:
        """Creates a new order for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_order(authorization, body=body, request_options=request_options))

    def create4(
        self,
        authorization: str,
        *,
        body: OrderCreate | OrderCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create4(authorization, body=body, request_options=request_options))

    def delete_order_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Delete an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_order_by_id(id_, authorization, request_options=request_options))

    def delete4(self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete4(order_id, authorization, request_options=request_options))

    def get_invoices(
        self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[InvoicePaidOrdersApi]:
        """Retrieves all invoices associated with a specific order.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_invoices(order_id, authorization, request_options=request_options))

    def get_order_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Order1:
        """Get an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_order_by_id(id_, authorization, request_options=request_options))

    def get_order_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderLinesResponse:
        """Get the order lines for an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_order_lines(
                id_, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def get4(self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> Order:
        """Send a ``GET`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get4(order_id, authorization, request_options=request_options))

    def list_order_seats(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_external_id: str | None = None,
        status: OrdersIdSeatsGetParametersStatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderSeatListResponse:
        """List seats for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_external_id: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_order_seats(
                id_,
                authorization,
                limit=limit,
                offset=offset,
                product_external_id=product_external_id,
                status=status,
                request_options=request_options,
            ),
        )

    def list_orders(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        external_id: str | None = None,
        creation_state: OrdersGetParametersCreationStateOrStr | None = None,
        status: OrdersGetParametersStatusOrStr | None = None,
        start_date_from: str | None = None,
        start_date_to: str | None = None,
        end_date_from: str | None = None,
        end_date_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderListResponse:
        """Get a list of orders for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            external_id: Filter by the order's external ID (exact match).
            creation_state: Filter by creation state: draft or active.
            status: Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date
                is in the past. active: activated, not paused, and not ended.
            start_date_from: Only orders whose start date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            start_date_to: Only orders whose start date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            end_date_from: Only orders whose end date is on or after this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            end_date_to: Only orders whose end date is on or before this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_orders(
                authorization,
                limit=limit,
                offset=offset,
                customer_id=customer_id,
                external_customer_id=external_customer_id,
                external_id=external_id,
                creation_state=creation_state,
                status=status,
                start_date_from=start_date_from,
                start_date_to=start_date_to,
                end_date_from=end_date_from,
                end_date_to=end_date_to,
                request_options=request_options,
            ),
        )

    def list4(self, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Order]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list4(authorization, request_options=request_options))

    def schedule_plan_change(
        self,
        order_id: str,
        authorization: str,
        *,
        body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProrationUpgradeResponse:
        """Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied
        for the unused portion of the current billing period.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan change scheduled successfully

        Raises:
            ApiError: Bad request - Invalid order version, effective date, or attributes Forbidden - Invalid or missing
                API key Order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.schedule_plan_change(
                order_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_order_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateOrderRequest | UpdateOrderRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order1:
        """Update an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_order_by_id(id_, authorization, body=body, request_options=request_options)
        )

    def update_order_seat_assignment(
        self,
        id_: str,
        seat_id: str,
        authorization: str,
        *,
        body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderSeat:
        """Assign or unassign a single seat on an order

        Args:
            id_: Value sent with the request.
            seat_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_order_seat_assignment(
                id_, seat_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> OrdersWithRawResponse:
        return self._with_raw_response


class AsyncOrders:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncOrdersWithRawResponse(client, server)

    async def activate(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Order:
        """Send a ``POST`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.activate(order_id, authorization, request_options=request_options))

    async def activate_and_pay(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order:
        """Activates the order and processes the initial payment using the provided Stripe confirmation token.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order activated and payment processed successfully

        Raises:
            ApiError: Bad request - Invalid customer state or request body Forbidden - Invalid or missing API key Order
                not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.activate_and_pay(
                order_id, authorization, body=body, request_options=request_options
            ),
        )

    async def activate_order_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Order1:
        """Activate a draft order by ID. Activation starts billing for the order using the same validation and side
        effects as the dashboard activation flow.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.activate_order_by_id(id_, authorization, request_options=request_options)
        )

    async def batch_order_seat_assignments(
        self,
        id_: str,
        authorization: str,
        *,
        body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BatchSeatAssignmentsResponse:
        """Assign or unassign seats in batch for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.batch_order_seat_assignments(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def cancel_renewal(
        self,
        order_id: str,
        authorization: str,
        *,
        body: CancelRenewalRequest | CancelRenewalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CancelRenewalResponse:
        """Schedules the cancellation of an order's renewal from a specified date. The order will remain active until
        the cancellation date.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order renewal cancelled successfully

        Raises:
            ApiError: Bad request - Invalid order version or cancel from date Forbidden - Invalid or missing API key
                Order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_renewal(
                order_id, authorization, body=body, request_options=request_options
            ),
        )

    async def create_order(
        self,
        authorization: str,
        *,
        body: CreateOrderRequest | CreateOrderRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order1:
        """Creates a new order for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_order(authorization, body=body, request_options=request_options)
        )

    async def create4(
        self,
        authorization: str,
        *,
        body: OrderCreate | OrderCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create4(authorization, body=body, request_options=request_options))

    async def delete_order_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Delete an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_order_by_id(id_, authorization, request_options=request_options)
        )

    async def delete4(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete4(order_id, authorization, request_options=request_options))

    async def get_invoices(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[InvoicePaidOrdersApi]:
        """Retrieves all invoices associated with a specific order.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: Forbidden - Invalid or missing API key Order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_invoices(order_id, authorization, request_options=request_options)
        )

    async def get_order_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Order1:
        """Get an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_order_by_id(id_, authorization, request_options=request_options)
        )

    async def get_order_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderLinesResponse:
        """Get the order lines for an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_order_lines(
                id_, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def get4(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Order:
        """Send a ``GET`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get4(order_id, authorization, request_options=request_options))

    async def list_order_seats(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_external_id: str | None = None,
        status: OrdersIdSeatsGetParametersStatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderSeatListResponse:
        """List seats for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_external_id: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_order_seats(
                id_,
                authorization,
                limit=limit,
                offset=offset,
                product_external_id=product_external_id,
                status=status,
                request_options=request_options,
            ),
        )

    async def list_orders(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        external_id: str | None = None,
        creation_state: OrdersGetParametersCreationStateOrStr | None = None,
        status: OrdersGetParametersStatusOrStr | None = None,
        start_date_from: str | None = None,
        start_date_to: str | None = None,
        end_date_from: str | None = None,
        end_date_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderListResponse:
        """Get a list of orders for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            external_id: Filter by the order's external ID (exact match).
            creation_state: Filter by creation state: draft or active.
            status: Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date
                is in the past. active: activated, not paused, and not ended.
            start_date_from: Only orders whose start date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            start_date_to: Only orders whose start date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            end_date_from: Only orders whose end date is on or after this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            end_date_to: Only orders whose end date is on or before this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_orders(
                authorization,
                limit=limit,
                offset=offset,
                customer_id=customer_id,
                external_customer_id=external_customer_id,
                external_id=external_id,
                creation_state=creation_state,
                status=status,
                start_date_from=start_date_from,
                start_date_to=start_date_to,
                end_date_from=end_date_from,
                end_date_to=end_date_to,
                request_options=request_options,
            ),
        )

    async def list4(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Order]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list4(authorization, request_options=request_options))

    async def schedule_plan_change(
        self,
        order_id: str,
        authorization: str,
        *,
        body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProrationUpgradeResponse:
        """Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied
        for the unused portion of the current billing period.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan change scheduled successfully

        Raises:
            ApiError: Bad request - Invalid order version, effective date, or attributes Forbidden - Invalid or missing
                API key Order not found ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.schedule_plan_change(
                order_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_order_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateOrderRequest | UpdateOrderRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order1:
        """Update an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_order_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def update_order_seat_assignment(
        self,
        id_: str,
        seat_id: str,
        authorization: str,
        *,
        body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderSeat:
        """Assign or unassign a single seat on an order

        Args:
            id_: Value sent with the request.
            seat_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_order_seat_assignment(
                id_, seat_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOrdersWithRawResponse:
        return self._with_raw_response


class OrdersWithRawResponse(BaseRawResponse[RawClient, Server]):
    def activate(
        self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Order, RawError]:
        """Send a ``POST`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/activate"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def activate_and_pay(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, ActivateAndPayErrorBody]:
        """Activates the order and processes the initial payment using the provided Stripe confirmation token.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/activate-and-pay"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None](body),
            decoder=json_decoder[Order],
            error_mapper=activate_and_pay_error_mapper,
            request_options=request_options,
        )

    def activate_order_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Order1, ActivateOrderByIdErrorBody]:
        """Activate a draft order by ID. Activation starts billing for the order using the same validation and side
        effects as the dashboard activation flow.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{id}/activate"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Order1],
            error_mapper=activate_order_by_id_error_mapper,
            request_options=request_options,
        )

    def batch_order_seat_assignments(
        self,
        id_: str,
        authorization: str,
        *,
        body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchSeatAssignmentsResponse, BatchOrderSeatAssignmentsErrorBody]:
        """Assign or unassign seats in batch for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{id}/seat-assignments"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None](body),
            decoder=json_decoder[BatchSeatAssignmentsResponse],
            error_mapper=batch_order_seat_assignments_error_mapper,
            request_options=request_options,
        )

    def cancel_renewal(
        self,
        order_id: str,
        authorization: str,
        *,
        body: CancelRenewalRequest | CancelRenewalRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelRenewalResponse, CancelRenewalErrorBody]:
        """Schedules the cancellation of an order's renewal from a specified date. The order will remain active until
        the cancellation date.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/cancel"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelRenewalRequest | CancelRenewalRequestDict | None](body),
            decoder=json_decoder[CancelRenewalResponse],
            error_mapper=cancel_renewal_error_mapper,
            request_options=request_options,
        )

    def create_order(
        self,
        authorization: str,
        *,
        body: CreateOrderRequest | CreateOrderRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order1, CreateOrderErrorBody]:
        """Creates a new order for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrderRequest | CreateOrderRequestDict | None](body),
            decoder=json_decoder[Order1],
            error_mapper=create_order_error_mapper,
            request_options=request_options,
        )

    def create4(
        self,
        authorization: str,
        *,
        body: OrderCreate | OrderCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrderCreate | OrderCreateDict | None](body),
            decoder=json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_order_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteOrderByIdErrorBody]:
        """Delete an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=delete_order_by_id_error_mapper,
            request_options=request_options,
        )

    def delete4(
        self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/orders/{orderId}"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_invoices(
        self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[InvoicePaidOrdersApi], GetInvoicesErrorBody]:
        """Retrieves all invoices associated with a specific order.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{orderId}/invoices"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[InvoicePaidOrdersApi]],
            error_mapper=get_invoices_error_mapper,
            request_options=request_options,
        )

    def get_order_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Order1, GetOrderByIdErrorBody]:
        """Get an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Order1],
            error_mapper=get_order_by_id_error_mapper,
            request_options=request_options,
        )

    def get_order_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderLinesResponse, GetOrderLinesErrorBody]:
        """Get the order lines for an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}/lines"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[OrderLinesResponse],
            error_mapper=get_order_lines_error_mapper,
            request_options=request_options,
        )

    def get4(
        self, order_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Order, RawError]:
        """Send a ``GET`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{orderId}"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_order_seats(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_external_id: str | None = None,
        status: OrdersIdSeatsGetParametersStatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderSeatListResponse, ListOrderSeatsErrorBody]:
        """List seats for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_external_id: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}/seats"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("productExternalId", product_external_id),
                param[OrdersIdSeatsGetParametersStatusOrStr | None]("status", status),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[OrderSeatListResponse],
            error_mapper=list_order_seats_error_mapper,
            request_options=request_options,
        )

    def list_orders(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        external_id: str | None = None,
        creation_state: OrdersGetParametersCreationStateOrStr | None = None,
        status: OrdersGetParametersStatusOrStr | None = None,
        start_date_from: str | None = None,
        start_date_to: str | None = None,
        end_date_from: str | None = None,
        end_date_to: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderListResponse, ListOrdersErrorBody]:
        """Get a list of orders for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            external_id: Filter by the order's external ID (exact match).
            creation_state: Filter by creation state: draft or active.
            status: Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date
                is in the past. active: activated, not paused, and not ended.
            start_date_from: Only orders whose start date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            start_date_to: Only orders whose start date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            end_date_from: Only orders whose end date is on or after this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            end_date_to: Only orders whose end date is on or before this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("customerId", customer_id),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("externalId", external_id),
                param[OrdersGetParametersCreationStateOrStr | None]("creationState", creation_state),
                param[OrdersGetParametersStatusOrStr | None]("status", status),
                param[str | None]("startDateFrom", start_date_from),
                param[str | None]("startDateTo", start_date_to),
                param[str | None]("endDateFrom", end_date_from),
                param[str | None]("endDateTo", end_date_to),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[OrderListResponse],
            error_mapper=list_orders_error_mapper,
            request_options=request_options,
        )

    def list4(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Order], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[Order]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def schedule_plan_change(
        self,
        order_id: str,
        authorization: str,
        *,
        body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProrationUpgradeResponse, SchedulePlanChangeErrorBody]:
        """Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied
        for the unused portion of the current billing period.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/schedule-plan-change"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProrationUpgradeRequest | ProrationUpgradeRequestDict | None](body),
            decoder=json_decoder[ProrationUpgradeResponse],
            error_mapper=schedule_plan_change_error_mapper,
            request_options=request_options,
        )

    def update_order_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateOrderRequest | UpdateOrderRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order1, UpdateOrderByIdErrorBody]:
        """Update an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateOrderRequest | UpdateOrderRequestDict | None](body),
            decoder=json_decoder[Order1],
            error_mapper=update_order_by_id_error_mapper,
            request_options=request_options,
        )

    def update_order_seat_assignment(
        self,
        id_: str,
        seat_id: str,
        authorization: str,
        *,
        body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderSeat, UpdateOrderSeatAssignmentErrorBody]:
        """Assign or unassign a single seat on an order

        Args:
            id_: Value sent with the request.
            seat_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/orders/{id}/seats/{seatId}"),
            path_params=[param[str]("id", id_), param[str]("seatId", seat_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None](body),
            decoder=json_decoder[OrderSeat],
            error_mapper=update_order_seat_assignment_error_mapper,
            request_options=request_options,
        )


class AsyncOrdersWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def activate(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Order, RawError]:
        """Send a ``POST`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/activate"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def activate_and_pay(
        self,
        order_id: str,
        authorization: str,
        *,
        body: OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, ActivateAndPayErrorBody]:
        """Activates the order and processes the initial payment using the provided Stripe confirmation token.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/activate-and-pay"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersActivateAndPayRequest | OrdersActivateAndPayRequestDict | None](body),
            decoder=async_json_decoder[Order],
            error_mapper=activate_and_pay_error_mapper,
            request_options=request_options,
        )

    async def activate_order_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Order1, ActivateOrderByIdErrorBody]:
        """Activate a draft order by ID. Activation starts billing for the order using the same validation and side
        effects as the dashboard activation flow.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{id}/activate"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Order1],
            error_mapper=activate_order_by_id_error_mapper,
            request_options=request_options,
        )

    async def batch_order_seat_assignments(
        self,
        id_: str,
        authorization: str,
        *,
        body: BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BatchSeatAssignmentsResponse, BatchOrderSeatAssignmentsErrorBody]:
        """Assign or unassign seats in batch for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{id}/seat-assignments"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BatchSeatAssignmentsRequest | BatchSeatAssignmentsRequestDict | None](body),
            decoder=async_json_decoder[BatchSeatAssignmentsResponse],
            error_mapper=batch_order_seat_assignments_error_mapper,
            request_options=request_options,
        )

    async def cancel_renewal(
        self,
        order_id: str,
        authorization: str,
        *,
        body: CancelRenewalRequest | CancelRenewalRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CancelRenewalResponse, CancelRenewalErrorBody]:
        """Schedules the cancellation of an order's renewal from a specified date. The order will remain active until
        the cancellation date.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/cancel"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CancelRenewalRequest | CancelRenewalRequestDict | None](body),
            decoder=async_json_decoder[CancelRenewalResponse],
            error_mapper=cancel_renewal_error_mapper,
            request_options=request_options,
        )

    async def create_order(
        self,
        authorization: str,
        *,
        body: CreateOrderRequest | CreateOrderRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order1, CreateOrderErrorBody]:
        """Creates a new order for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrderRequest | CreateOrderRequestDict | None](body),
            decoder=async_json_decoder[Order1],
            error_mapper=create_order_error_mapper,
            request_options=request_options,
        )

    async def create4(
        self,
        authorization: str,
        *,
        body: OrderCreate | OrderCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrderCreate | OrderCreateDict | None](body),
            decoder=async_json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_order_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteOrderByIdErrorBody]:
        """Delete an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=delete_order_by_id_error_mapper,
            request_options=request_options,
        )

    async def delete4(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/orders/{orderId}"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_invoices(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[InvoicePaidOrdersApi], GetInvoicesErrorBody]:
        """Retrieves all invoices associated with a specific order.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{orderId}/invoices"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[InvoicePaidOrdersApi]],
            error_mapper=get_invoices_error_mapper,
            request_options=request_options,
        )

    async def get_order_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Order1, GetOrderByIdErrorBody]:
        """Get an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Order1],
            error_mapper=get_order_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_order_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderLinesResponse, GetOrderLinesErrorBody]:
        """Get the order lines for an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}/lines"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[OrderLinesResponse],
            error_mapper=get_order_lines_error_mapper,
            request_options=request_options,
        )

    async def get4(
        self, order_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Order, RawError]:
        """Send a ``GET`` request.

        Args:
            order_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{orderId}"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Order],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_order_seats(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        product_external_id: str | None = None,
        status: OrdersIdSeatsGetParametersStatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderSeatListResponse, ListOrderSeatsErrorBody]:
        """List seats for an order

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            product_external_id: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}/seats"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("productExternalId", product_external_id),
                param[OrdersIdSeatsGetParametersStatusOrStr | None]("status", status),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[OrderSeatListResponse],
            error_mapper=list_order_seats_error_mapper,
            request_options=request_options,
        )

    async def list_orders(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        external_id: str | None = None,
        creation_state: OrdersGetParametersCreationStateOrStr | None = None,
        status: OrdersGetParametersStatusOrStr | None = None,
        start_date_from: str | None = None,
        start_date_to: str | None = None,
        end_date_from: str | None = None,
        end_date_to: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderListResponse, ListOrdersErrorBody]:
        """Get a list of orders for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            external_id: Filter by the order's external ID (exact match).
            creation_state: Filter by creation state: draft or active.
            status: Filter by derived order status. draft: not yet activated. paused: billing is paused. ended: end date
                is in the past. active: activated, not paused, and not ended.
            start_date_from: Only orders whose start date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            start_date_to: Only orders whose start date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            end_date_from: Only orders whose end date is on or after this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            end_date_to: Only orders whose end date is on or before this date. Orders without an end date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("customerId", customer_id),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("externalId", external_id),
                param[OrdersGetParametersCreationStateOrStr | None]("creationState", creation_state),
                param[OrdersGetParametersStatusOrStr | None]("status", status),
                param[str | None]("startDateFrom", start_date_from),
                param[str | None]("startDateTo", start_date_to),
                param[str | None]("endDateFrom", end_date_from),
                param[str | None]("endDateTo", end_date_to),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[OrderListResponse],
            error_mapper=list_orders_error_mapper,
            request_options=request_options,
        )

    async def list4(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Order], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[Order]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def schedule_plan_change(
        self,
        order_id: str,
        authorization: str,
        *,
        body: ProrationUpgradeRequest | ProrationUpgradeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProrationUpgradeResponse, SchedulePlanChangeErrorBody]:
        """Schedules a plan upgrade or downgrade for an order with automatic proration calculation. Credits are applied
        for the unused portion of the current billing period.

        Args:
            order_id: The order ID (can be internal ID or display ID)
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders/{orderId}/schedule-plan-change"),
            path_params=[param[str]("orderId", order_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProrationUpgradeRequest | ProrationUpgradeRequestDict | None](body),
            decoder=async_json_decoder[ProrationUpgradeResponse],
            error_mapper=schedule_plan_change_error_mapper,
            request_options=request_options,
        )

    async def update_order_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateOrderRequest | UpdateOrderRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order1, UpdateOrderByIdErrorBody]:
        """Update an order by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateOrderRequest | UpdateOrderRequestDict | None](body),
            decoder=async_json_decoder[Order1],
            error_mapper=update_order_by_id_error_mapper,
            request_options=request_options,
        )

    async def update_order_seat_assignment(
        self,
        id_: str,
        seat_id: str,
        authorization: str,
        *,
        body: UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderSeat, UpdateOrderSeatAssignmentErrorBody]:
        """Assign or unassign a single seat on an order

        Args:
            id_: Value sent with the request.
            seat_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/orders/{id}/seats/{seatId}"),
            path_params=[param[str]("id", id_), param[str]("seatId", seat_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateSeatAssignmentRequest | UpdateSeatAssignmentRequestDict | None](body),
            decoder=async_json_decoder[OrderSeat],
            error_mapper=update_order_seat_assignment_error_mapper,
            request_options=request_options,
        )
