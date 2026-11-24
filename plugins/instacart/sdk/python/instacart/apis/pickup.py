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
from ..errors.create_pickup_order_error import CreatePickupOrderErrorBody, create_pickup_order_error_mapper
from ..errors.find_pickup_stores_error import FindPickupStoresErrorBody, find_pickup_stores_error_mapper
from ..errors.preview_pickup_time_slots_error import (
    PreviewPickupTimeSlotsErrorBody,
    preview_pickup_time_slots_error_mapper,
)
from ..models.create_order_request_instacart_connect_fulfillment_last_mile_delivery_api import (
    CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi,
    CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict,
)
from ..models.find_stores_request import FindStoresRequest, FindStoresRequestDict
from ..models.order_response import OrderResponse
from ..models.preview_service_options_request import PreviewServiceOptionsRequest, PreviewServiceOptionsRequestDict
from ..models.service_options_response import ServiceOptionsResponse
from ..models.stores_response import StoresResponse
from ..server.server import Server


class Pickup:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PickupWithRawResponse(client, server, auth)

    def create_pickup_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderResponse:
        """Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders
        should be created as soon as possible after checkout to minimize wait time.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pickup order created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_pickup_order(user_id, body, request_options=request_options))

    def find_pickup_stores(
        self, body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoresResponse:
        """Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest
        store first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stores offering pickup

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.find_pickup_stores(body, request_options=request_options))

    def preview_pickup_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceOptionsResponse:
        """Previews possible service options and available time slots for pickup fulfillments. Useful for displaying
        pickup time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available pickup time slots

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.preview_pickup_time_slots(user_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PickupWithRawResponse:
        return self._with_raw_response


class AsyncPickup:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPickupWithRawResponse(client, server, auth)

    async def create_pickup_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderResponse:
        """Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders
        should be created as soon as possible after checkout to minimize wait time.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pickup order created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_pickup_order(user_id, body, request_options=request_options))

    async def find_pickup_stores(
        self,
        body: FindStoresRequest | FindStoresRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoresResponse:
        """Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest
        store first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stores offering pickup

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.find_pickup_stores(body, request_options=request_options))

    async def preview_pickup_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceOptionsResponse:
        """Previews possible service options and available time slots for pickup fulfillments. Useful for displaying
        pickup time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available pickup time slots

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.preview_pickup_time_slots(user_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPickupWithRawResponse:
        return self._with_raw_response


class PickupWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_pickup_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderResponse, CreatePickupOrderErrorBody]:
        """Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders
        should be created as soon as possible after checkout to minimize wait time.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/pickup"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
                    | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
                )
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderResponse],
            error_mapper=create_pickup_order_error_mapper,
            request_options=request_options,
        )

    def find_pickup_stores(
        self, body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoresResponse, FindPickupStoresErrorBody]:
        """Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest
        store first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/stores/pickup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindStoresRequest | FindStoresRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[StoresResponse],
            error_mapper=find_pickup_stores_error_mapper,
            request_options=request_options,
        )

    def preview_pickup_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionsResponse, PreviewPickupTimeSlotsErrorBody]:
        """Previews possible service options and available time slots for pickup fulfillments. Useful for displaying
        pickup time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/service_options/pickup"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ServiceOptionsResponse],
            error_mapper=preview_pickup_time_slots_error_mapper,
            request_options=request_options,
        )


class AsyncPickupWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_pickup_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderResponse, CreatePickupOrderErrorBody]:
        """Creates a pickup order for a previously reserved time slot. The response can take several seconds, so orders
        should be created as soon as possible after checkout to minimize wait time.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/orders/pickup"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                (
                    CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
                    | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
                )
            ](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderResponse],
            error_mapper=create_pickup_order_error_mapper,
            request_options=request_options,
        )

    async def find_pickup_stores(
        self,
        body: FindStoresRequest | FindStoresRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoresResponse, FindPickupStoresErrorBody]:
        """Returns an array of stores that offer pickup for the customer's location, sorted by distance with the closest
        store first.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/stores/pickup"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindStoresRequest | FindStoresRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[StoresResponse],
            error_mapper=find_pickup_stores_error_mapper,
            request_options=request_options,
        )

    async def preview_pickup_time_slots(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionsResponse, PreviewPickupTimeSlotsErrorBody]:
        """Previews possible service options and available time slots for pickup fulfillments. Useful for displaying
        pickup time options to customers before they complete checkout.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/users/{user_id}/service_options/pickup"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ServiceOptionsResponse],
            error_mapper=preview_pickup_time_slots_error_mapper,
            request_options=request_options,
        )
