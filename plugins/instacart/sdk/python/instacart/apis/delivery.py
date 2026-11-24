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
from ..errors.cancel_order_error import CancelOrderErrorBody, cancel_order_error_mapper
from ..errors.create_delivery_order_error import CreateDeliveryOrderErrorBody, create_delivery_order_error_mapper
from ..errors.find_delivery_stores_error import FindDeliveryStoresErrorBody, find_delivery_stores_error_mapper
from ..errors.get_order_error import GetOrderErrorBody, get_order_error_mapper
from ..errors.preview_delivery_time_slots_error import (
    PreviewDeliveryTimeSlotsErrorBody,
    preview_delivery_time_slots_error_mapper,
)
from ..errors.reserve_delivery_time_slot_error import (
    ReserveDeliveryTimeSlotErrorBody,
    reserve_delivery_time_slot_error_mapper,
)
from ..models.create_order_request import CreateOrderRequest, CreateOrderRequestDict
from ..models.find_stores_request import FindStoresRequest, FindStoresRequestDict
from ..models.order_response import OrderResponse
from ..models.preview_service_options_request import PreviewServiceOptionsRequest, PreviewServiceOptionsRequestDict
from ..models.reserve_time_slot_request import ReserveTimeSlotRequest, ReserveTimeSlotRequestDict
from ..models.service_option_hold_response import ServiceOptionHoldResponse
from ..models.service_options_response import ServiceOptionsResponse
from ..models.stores_response import StoresResponse
from ..server.server import Server


class Delivery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DeliveryWithRawResponse(client, server, auth)

    def cancel_order(
        self, user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrderResponse:
        """Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be
        brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled
        through this endpoint.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order canceled successfully

        Raises:
            ApiError: Order cannot be canceled in its current status Unauthorized Order not found ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.cancel_order(user_id, order_id, request_options=request_options))

    def create_delivery_order(
        self,
        user_id: str,
        body: CreateOrderRequest | CreateOrderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderResponse:
        """Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery
        details. Orders should be created as soon as possible after the time slot is reserved.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delivery order created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_delivery_order(user_id, body, request_options=request_options))

    def find_delivery_stores(
        self, body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoresResponse:
        """Returns an array of stores that offer delivery for the customer's location, sorted by distance with the
        closest store first. Accepts location data such as latitude and longitude or a postal code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stores offering delivery

        Raises:
            ApiError: Bad request due to invalid parameters Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.find_delivery_stores(body, request_options=request_options))

    def get_order(
        self, user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrderResponse:
        """Retrieves details for a specific order, including its current status, items, and delivery or pickup
        information.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order details

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_order(user_id, order_id, request_options=request_options))

    def preview_delivery_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceOptionsResponse:
        """Previews possible service options and available time slots for delivery fulfillments. Useful for displaying
        delivery time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available delivery time slots

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.preview_delivery_time_slots(user_id, body, request_options=request_options)
        )

    def reserve_delivery_time_slot(
        self,
        user_id: str,
        body: ReserveTimeSlotRequest | ReserveTimeSlotRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceOptionHoldResponse:
        """Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and
        must be followed by order creation before it expires.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Time slot reserved successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.reserve_delivery_time_slot(user_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DeliveryWithRawResponse:
        return self._with_raw_response


class AsyncDelivery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDeliveryWithRawResponse(client, server, auth)

    async def cancel_order(
        self, user_id: str, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrderResponse:
        """Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be
        brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled
        through this endpoint.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order canceled successfully

        Raises:
            ApiError: Order cannot be canceled in its current status Unauthorized Order not found ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.cancel_order(user_id, order_id, request_options=request_options))

    async def create_delivery_order(
        self,
        user_id: str,
        body: CreateOrderRequest | CreateOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderResponse:
        """Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery
        details. Orders should be created as soon as possible after the time slot is reserved.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delivery order created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_delivery_order(user_id, body, request_options=request_options)
        )

    async def find_delivery_stores(
        self,
        body: FindStoresRequest | FindStoresRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoresResponse:
        """Returns an array of stores that offer delivery for the customer's location, sorted by distance with the
        closest store first. Accepts location data such as latitude and longitude or a postal code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stores offering delivery

        Raises:
            ApiError: Bad request due to invalid parameters Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.find_delivery_stores(body, request_options=request_options))

    async def get_order(
        self, user_id: str, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrderResponse:
        """Retrieves details for a specific order, including its current status, items, and delivery or pickup
        information.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order details

        Raises:
            ApiError: Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_order(user_id, order_id, request_options=request_options))

    async def preview_delivery_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceOptionsResponse:
        """Previews possible service options and available time slots for delivery fulfillments. Useful for displaying
        delivery time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available delivery time slots

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.preview_delivery_time_slots(user_id, body, request_options=request_options)
        )

    async def reserve_delivery_time_slot(
        self,
        user_id: str,
        body: ReserveTimeSlotRequest | ReserveTimeSlotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceOptionHoldResponse:
        """Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and
        must be followed by order creation before it expires.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Time slot reserved successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.reserve_delivery_time_slot(user_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDeliveryWithRawResponse:
        return self._with_raw_response


class DeliveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_order(
        self, user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrderResponse, CancelOrderErrorBody]:
        """Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be
        brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled
        through this endpoint.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/{order_id}/cancel"),
            path_params=[param[str]("user_id", user_id), param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderResponse],
            error_mapper=cancel_order_error_mapper,
            request_options=request_options,
        )

    def create_delivery_order(
        self,
        user_id: str,
        body: CreateOrderRequest | CreateOrderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderResponse, CreateDeliveryOrderErrorBody]:
        """Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery
        details. Orders should be created as soon as possible after the time slot is reserved.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/delivery"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrderRequest | CreateOrderRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderResponse],
            error_mapper=create_delivery_order_error_mapper,
            request_options=request_options,
        )

    def find_delivery_stores(
        self, body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoresResponse, FindDeliveryStoresErrorBody]:
        """Returns an array of stores that offer delivery for the customer's location, sorted by distance with the
        closest store first. Accepts location data such as latitude and longitude or a postal code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/stores/delivery"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindStoresRequest | FindStoresRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[StoresResponse],
            error_mapper=find_delivery_stores_error_mapper,
            request_options=request_options,
        )

    def get_order(
        self, user_id: str, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrderResponse, GetOrderErrorBody]:
        """Retrieves details for a specific order, including its current status, items, and delivery or pickup
        information.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/{order_id}"),
            path_params=[param[str]("user_id", user_id), param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderResponse],
            error_mapper=get_order_error_mapper,
            request_options=request_options,
        )

    def preview_delivery_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionsResponse, PreviewDeliveryTimeSlotsErrorBody]:
        """Previews possible service options and available time slots for delivery fulfillments. Useful for displaying
        delivery time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/service_options/delivery"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ServiceOptionsResponse],
            error_mapper=preview_delivery_time_slots_error_mapper,
            request_options=request_options,
        )

    def reserve_delivery_time_slot(
        self,
        user_id: str,
        body: ReserveTimeSlotRequest | ReserveTimeSlotRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionHoldResponse, ReserveDeliveryTimeSlotErrorBody]:
        """Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and
        must be followed by order creation before it expires.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/service_options/delivery/hold"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReserveTimeSlotRequest | ReserveTimeSlotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ServiceOptionHoldResponse],
            error_mapper=reserve_delivery_time_slot_error_mapper,
            request_options=request_options,
        )


class AsyncDeliveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_order(
        self, user_id: str, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrderResponse, CancelOrderErrorBody]:
        """Cancels a delivery, pickup, or last mile delivery order. To successfully cancel, the order status must be
        brand_new. Once a shopper is assigned and the status moves to acknowledged, the order can no longer be canceled
        through this endpoint.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/{order_id}/cancel"),
            path_params=[param[str]("user_id", user_id), param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderResponse],
            error_mapper=cancel_order_error_mapper,
            request_options=request_options,
        )

    async def create_delivery_order(
        self,
        user_id: str,
        body: CreateOrderRequest | CreateOrderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderResponse, CreateDeliveryOrderErrorBody]:
        """Creates a delivery order for a previously reserved time slot. The order includes the cart items and delivery
        details. Orders should be created as soon as possible after the time slot is reserved.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/delivery"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateOrderRequest | CreateOrderRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderResponse],
            error_mapper=create_delivery_order_error_mapper,
            request_options=request_options,
        )

    async def find_delivery_stores(
        self,
        body: FindStoresRequest | FindStoresRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoresResponse, FindDeliveryStoresErrorBody]:
        """Returns an array of stores that offer delivery for the customer's location, sorted by distance with the
        closest store first. Accepts location data such as latitude and longitude or a postal code.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/stores/delivery"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindStoresRequest | FindStoresRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[StoresResponse],
            error_mapper=find_delivery_stores_error_mapper,
            request_options=request_options,
        )

    async def get_order(
        self, user_id: str, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrderResponse, GetOrderErrorBody]:
        """Retrieves details for a specific order, including its current status, items, and delivery or pickup
        information.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/{order_id}"),
            path_params=[param[str]("user_id", user_id), param[str]("order_id", order_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderResponse],
            error_mapper=get_order_error_mapper,
            request_options=request_options,
        )

    async def preview_delivery_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionsResponse, PreviewDeliveryTimeSlotsErrorBody]:
        """Previews possible service options and available time slots for delivery fulfillments. Useful for displaying
        delivery time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/service_options/delivery"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ServiceOptionsResponse],
            error_mapper=preview_delivery_time_slots_error_mapper,
            request_options=request_options,
        )

    async def reserve_delivery_time_slot(
        self,
        user_id: str,
        body: ReserveTimeSlotRequest | ReserveTimeSlotRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionHoldResponse, ReserveDeliveryTimeSlotErrorBody]:
        """Reserves a selected delivery time slot for the specified user and their cart items. The hold is temporary and
        must be followed by order creation before it expires.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/service_options/delivery/hold"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReserveTimeSlotRequest | ReserveTimeSlotRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ServiceOptionHoldResponse],
            error_mapper=reserve_delivery_time_slot_error_mapper,
            request_options=request_options,
        )
