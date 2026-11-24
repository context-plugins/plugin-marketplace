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
from ..errors.create_last_mile_order_error import CreateLastMileOrderErrorBody, create_last_mile_order_error_mapper
from ..errors.find_last_mile_stores_error import FindLastMileStoresErrorBody, find_last_mile_stores_error_mapper
from ..errors.preview_last_mile_service_options_error import (
    PreviewLastMileServiceOptionsErrorBody,
    preview_last_mile_service_options_error_mapper,
)
from ..errors.stage_last_mile_order_error import StageLastMileOrderErrorBody, stage_last_mile_order_error_mapper
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


class LastMileDelivery:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LastMileDeliveryWithRawResponse(client, server, auth)

    def create_last_mile_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrderResponse:
        """Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed
        items that require only delivery from the store to the customer location.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Last mile delivery order created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_last_mile_order(user_id, body, request_options=request_options))

    def find_last_mile_stores(
        self, body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> StoresResponse:
        """Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is
        for pre-packed orders that only require transportation from the store to the customer.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stores offering last mile delivery

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.find_last_mile_stores(body, request_options=request_options))

    def preview_last_mile_service_options(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ServiceOptionsResponse:
        """Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before
        creating the order.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Service options for last mile delivery

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.preview_last_mile_service_options(user_id, body, request_options=request_options)
        )

    def stage_last_mile_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrderResponse:
        """Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called
        when the order items are packed and ready at the store.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order staged successfully

        Raises:
            ApiError: Bad request Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.stage_last_mile_order(order_id, request_options=request_options))

    @property
    def with_raw_response(self) -> LastMileDeliveryWithRawResponse:
        return self._with_raw_response


class AsyncLastMileDelivery:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLastMileDeliveryWithRawResponse(client, server, auth)

    async def create_last_mile_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrderResponse:
        """Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed
        items that require only delivery from the store to the customer location.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Last mile delivery order created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_last_mile_order(user_id, body, request_options=request_options)
        )

    async def find_last_mile_stores(
        self,
        body: FindStoresRequest | FindStoresRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StoresResponse:
        """Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is
        for pre-packed orders that only require transportation from the store to the customer.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of stores offering last mile delivery

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.find_last_mile_stores(body, request_options=request_options))

    async def preview_last_mile_service_options(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ServiceOptionsResponse:
        """Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before
        creating the order.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Service options for last mile delivery

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.preview_last_mile_service_options(
                user_id, body, request_options=request_options
            ),
        )

    async def stage_last_mile_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrderResponse:
        """Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called
        when the order items are packed and ready at the store.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order staged successfully

        Raises:
            ApiError: Bad request Unauthorized Order not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.stage_last_mile_order(order_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLastMileDeliveryWithRawResponse:
        return self._with_raw_response


class LastMileDeliveryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_last_mile_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderResponse, CreateLastMileOrderErrorBody]:
        """Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed
        items that require only delivery from the store to the customer location.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/lastmile/users/{user_id}/orders"),
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
            error_mapper=create_last_mile_order_error_mapper,
            request_options=request_options,
        )

    def find_last_mile_stores(
        self, body: FindStoresRequest | FindStoresRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StoresResponse, FindLastMileStoresErrorBody]:
        """Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is
        for pre-packed orders that only require transportation from the store to the customer.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/stores/last_mile"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindStoresRequest | FindStoresRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[StoresResponse],
            error_mapper=find_last_mile_stores_error_mapper,
            request_options=request_options,
        )

    def preview_last_mile_service_options(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionsResponse, PreviewLastMileServiceOptionsErrorBody]:
        """Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before
        creating the order.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/lastmile/users/{user_id}/service_options"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ServiceOptionsResponse],
            error_mapper=preview_last_mile_service_options_error_mapper,
            request_options=request_options,
        )

    def stage_last_mile_order(
        self, order_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrderResponse, StageLastMileOrderErrorBody]:
        """Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called
        when the order items are packed and ready at the store.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/lastmile/orders/{order_id}/staged"),
            path_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OrderResponse],
            error_mapper=stage_last_mile_order_error_mapper,
            request_options=request_options,
        )


class AsyncLastMileDeliveryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_last_mile_order(
        self,
        user_id: str,
        body: (
            CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApi
            | CreateOrderRequestInstacartConnectFulfillmentLastMileDeliveryApiDict
        ),
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrderResponse, CreateLastMileOrderErrorBody]:
        """Creates a last mile delivery order for a previously reserved time slot. Last mile orders are for pre-packed
        items that require only delivery from the store to the customer location.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/lastmile/users/{user_id}/orders"),
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
            error_mapper=create_last_mile_order_error_mapper,
            request_options=request_options,
        )

    async def find_last_mile_stores(
        self,
        body: FindStoresRequest | FindStoresRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StoresResponse, FindLastMileStoresErrorBody]:
        """Returns an array of stores that offer last mile delivery for the customer's location. Last mile delivery is
        for pre-packed orders that only require transportation from the store to the customer.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/stores/last_mile"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[FindStoresRequest | FindStoresRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[StoresResponse],
            error_mapper=find_last_mile_stores_error_mapper,
            request_options=request_options,
        )

    async def preview_last_mile_service_options(
        self,
        user_id: str,
        body: PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ServiceOptionsResponse, PreviewLastMileServiceOptionsErrorBody]:
        """Previews and reserves a time slot for a last mile delivery order. Used to secure a delivery window before
        creating the order.

        Args:
            user_id: The unique identifier for the user in the retailer's system.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/lastmile/users/{user_id}/service_options"),
            path_params=[param[str]("user_id", user_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PreviewServiceOptionsRequest | PreviewServiceOptionsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ServiceOptionsResponse],
            error_mapper=preview_last_mile_service_options_error_mapper,
            request_options=request_options,
        )

    async def stage_last_mile_order(
        self, order_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrderResponse, StageLastMileOrderErrorBody]:
        """Marks a last mile delivery order as staged and ready for pickup by the delivery driver. This should be called
        when the order items are packed and ready at the store.

        Args:
            order_id: The unique identifier for the order.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/fulfillment/lastmile/orders/{order_id}/staged"),
            path_params=[param[str]("order_id", order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OrderResponse],
            error_mapper=stage_last_mile_order_error_mapper,
            request_options=request_options,
        )
