from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.create_order_error import CreateOrderErrorBody, create_order_error_mapper
from ..errors.fetch_all_orders_error import FetchAllOrdersErrorBody, fetch_all_orders_error_mapper
from ..errors.fetch_order_error import FetchOrderErrorBody, fetch_order_error_mapper
from ..errors.fetch_order_payments_error import FetchOrderPaymentsErrorBody, fetch_order_payments_error_mapper
from ..errors.update_order_error import UpdateOrderErrorBody, update_order_error_mapper
from ..models.enums.authorized import AuthorizedOrInt
from ..models.enums.expand_razorpay_orders_api import ExpandRazorpayOrdersApiOrStr
from ..models.order import Order
from ..models.orders_payments_response import OrdersPaymentsResponse
from ..models.orders_request import OrdersRequest, OrdersRequestDict
from ..models.orders_request1 import OrdersRequest1, OrdersRequest1Dict
from ..models.orders_response import OrdersResponse
from ..server.server import Server


class Orders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OrdersWithRawResponse(client, server, auth)

    def create_order(
        self, body: OrdersRequest | OrdersRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Order:
        """Create an order before initiating a payment. The returned order_id must be passed to Razorpay Checkout. An
        order can have multiple payment attempts but only one successful capture.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_order(body, request_options=request_options))

    def fetch_all_orders(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        authorized: AuthorizedOrInt | None = None,
        receipt: str | None = None,
        expand: list[ExpandRazorpayOrdersApiOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> OrdersResponse:
        """Retrieve a paginated list of orders. Maximum 100 records per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            authorized: 1 = orders with authorized payments only. 0 = without.
            receipt: Filter by receipt value.
            expand: Expand: payments, payments.card, transfers, virtual_account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of orders.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_orders(
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                authorized=authorized,
                receipt=receipt,
                expand=expand,
                request_options=request_options,
            ),
        )

    def fetch_order(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Order:
        """Retrieve the full details and current status of a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_order(id_, request_options=request_options))

    def fetch_order_payments(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> OrdersPaymentsResponse:
        """Retrieve all authorized and failed payment attempts made against a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of payments for the order.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_order_payments(id_, request_options=request_options))

    def update_order(
        self,
        id_: str,
        body: OrdersRequest1 | OrdersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Order:
        """Update the notes field of an existing order. Only notes can be modified after creation.

        Args:
            id_: Order ID (order_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated order.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_order(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> OrdersWithRawResponse:
        return self._with_raw_response


class AsyncOrders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOrdersWithRawResponse(client, server, auth)

    async def create_order(
        self, body: OrdersRequest | OrdersRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Order:
        """Create an order before initiating a payment. The returned order_id must be passed to Razorpay Checkout. An
        order can have multiple payment attempts but only one successful capture.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_order(body, request_options=request_options))

    async def fetch_all_orders(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        authorized: AuthorizedOrInt | None = None,
        receipt: str | None = None,
        expand: list[ExpandRazorpayOrdersApiOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OrdersResponse:
        """Retrieve a paginated list of orders. Maximum 100 records per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            authorized: 1 = orders with authorized payments only. 0 = without.
            receipt: Filter by receipt value.
            expand: Expand: payments, payments.card, transfers, virtual_account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of orders.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_orders(
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                authorized=authorized,
                receipt=receipt,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def fetch_order(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Order:
        """Retrieve the full details and current status of a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Order details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_order(id_, request_options=request_options))

    async def fetch_order_payments(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OrdersPaymentsResponse:
        """Retrieve all authorized and failed payment attempts made against a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of payments for the order.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_order_payments(id_, request_options=request_options))

    async def update_order(
        self,
        id_: str,
        body: OrdersRequest1 | OrdersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Order:
        """Update the notes field of an existing order. Only notes can be modified after creation.

        Args:
            id_: Order ID (order_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated order.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_order(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncOrdersWithRawResponse:
        return self._with_raw_response


class OrdersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_order(
        self, body: OrdersRequest | OrdersRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Order, CreateOrderErrorBody]:
        """Create an order before initiating a payment. The returned order_id must be passed to Razorpay Checkout. An
        order can have multiple payment attempts but only one successful capture.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersRequest | OrdersRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Order],
            error_mapper=create_order_error_mapper,
            request_options=request_options,
        )

    def fetch_all_orders(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        authorized: AuthorizedOrInt | None = None,
        receipt: str | None = None,
        expand: list[ExpandRazorpayOrdersApiOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[OrdersResponse, FetchAllOrdersErrorBody]:
        """Retrieve a paginated list of orders. Maximum 100 records per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            authorized: 1 = orders with authorized payments only. 0 = without.
            receipt: Filter by receipt value.
            expand: Expand: payments, payments.card, transfers, virtual_account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[AuthorizedOrInt | None]("authorized", authorized),
                param[str | None]("receipt", receipt),
                param[list[ExpandRazorpayOrdersApiOrStr] | None]("expand[]", expand),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[OrdersResponse],
            error_mapper=fetch_all_orders_error_mapper,
            request_options=request_options,
        )

    def fetch_order(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Order, FetchOrderErrorBody]:
        """Retrieve the full details and current status of a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Order],
            error_mapper=fetch_order_error_mapper,
            request_options=request_options,
        )

    def fetch_order_payments(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OrdersPaymentsResponse, FetchOrderPaymentsErrorBody]:
        """Retrieve all authorized and failed payment attempts made against a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}/payments"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[OrdersPaymentsResponse],
            error_mapper=fetch_order_payments_error_mapper,
            request_options=request_options,
        )

    def update_order(
        self,
        id_: str,
        body: OrdersRequest1 | OrdersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, UpdateOrderErrorBody]:
        """Update the notes field of an existing order. Only notes can be modified after creation.

        Args:
            id_: Order ID (order_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersRequest1 | OrdersRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Order],
            error_mapper=update_order_error_mapper,
            request_options=request_options,
        )


class AsyncOrdersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_order(
        self, body: OrdersRequest | OrdersRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Order, CreateOrderErrorBody]:
        """Create an order before initiating a payment. The returned order_id must be passed to Razorpay Checkout. An
        order can have multiple payment attempts but only one successful capture.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/orders"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersRequest | OrdersRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Order],
            error_mapper=create_order_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_orders(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        authorized: AuthorizedOrInt | None = None,
        receipt: str | None = None,
        expand: list[ExpandRazorpayOrdersApiOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OrdersResponse, FetchAllOrdersErrorBody]:
        """Retrieve a paginated list of orders. Maximum 100 records per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            authorized: 1 = orders with authorized payments only. 0 = without.
            receipt: Filter by receipt value.
            expand: Expand: payments, payments.card, transfers, virtual_account.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[AuthorizedOrInt | None]("authorized", authorized),
                param[str | None]("receipt", receipt),
                param[list[ExpandRazorpayOrdersApiOrStr] | None]("expand[]", expand),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[OrdersResponse],
            error_mapper=fetch_all_orders_error_mapper,
            request_options=request_options,
        )

    async def fetch_order(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Order, FetchOrderErrorBody]:
        """Retrieve the full details and current status of a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Order],
            error_mapper=fetch_order_error_mapper,
            request_options=request_options,
        )

    async def fetch_order_payments(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OrdersPaymentsResponse, FetchOrderPaymentsErrorBody]:
        """Retrieve all authorized and failed payment attempts made against a specific order.

        Args:
            id_: Order ID (order_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/orders/{id}/payments"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[OrdersPaymentsResponse],
            error_mapper=fetch_order_payments_error_mapper,
            request_options=request_options,
        )

    async def update_order(
        self,
        id_: str,
        body: OrdersRequest1 | OrdersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Order, UpdateOrderErrorBody]:
        """Update the notes field of an existing order. Only notes can be modified after creation.

        Args:
            id_: Order ID (order_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/orders/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OrdersRequest1 | OrdersRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Order],
            error_mapper=update_order_error_mapper,
            request_options=request_options,
        )
