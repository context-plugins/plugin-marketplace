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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_purchase_order_error import CreatePurchaseOrderErrorBody, create_purchase_order_error_mapper
from ..errors.delete_purchase_order_error import DeletePurchaseOrderErrorBody, delete_purchase_order_error_mapper
from ..errors.get_purchase_order_error import GetPurchaseOrderErrorBody, get_purchase_order_error_mapper
from ..errors.list_purchase_order_lines_error import (
    ListPurchaseOrderLinesErrorBody,
    list_purchase_order_lines_error_mapper,
)
from ..errors.list_purchase_orders_error import ListPurchaseOrdersErrorBody, list_purchase_orders_error_mapper
from ..errors.update_purchase_order_error import UpdatePurchaseOrderErrorBody, update_purchase_order_error_mapper
from ..models.companies_api_purchase_orders_api_purchase_order_lines_response import (
    CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse,
)
from ..models.companies_api_purchase_orders_response import CompaniesApiPurchaseOrdersResponse
from ..models.purchase_order import PurchaseOrder
from ..models.purchase_order_create import PurchaseOrderCreate, PurchaseOrderCreateDict
from ..models.purchase_order_update import PurchaseOrderUpdate, PurchaseOrderUpdateDict
from ..server.server import Server


class PurchaseOrders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PurchaseOrdersWithRawResponse(client, server, auth)

    def create_purchase_order(
        self,
        company_id: UUID,
        body: PurchaseOrderCreate | PurchaseOrderCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PurchaseOrder:
        """Creates a new purchase order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase order created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_purchase_order(company_id, body, request_options=request_options))

    def delete_purchase_order(
        self, company_id: UUID, purchase_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase order deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_purchase_order(
                company_id, purchase_order_id, request_options=request_options
            ),
        )

    def get_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PurchaseOrder:
        """Retrieves a specific purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved purchase order

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_purchase_order(
                company_id, purchase_order_id, select=select, expand=expand, request_options=request_options
            ),
        )

    def list_purchase_order_lines(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse:
        """Returns a list of purchase order line items.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved purchase order lines

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_purchase_order_lines(
                company_id,
                purchase_order_id,
                top=top,
                skip=skip,
                filter_=filter_,
                select=select,
                request_options=request_options,
            ),
        )

    def list_purchase_orders(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiPurchaseOrdersResponse:
        """Returns a list of purchase order objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved purchase orders

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_purchase_orders(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                expand=expand,
                request_options=request_options,
            ),
        )

    def update_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        if_match: str,
        body: PurchaseOrderUpdate | PurchaseOrderUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PurchaseOrder:
        """Updates an existing purchase order.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase order updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_purchase_order(
                company_id, purchase_order_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PurchaseOrdersWithRawResponse:
        return self._with_raw_response


class AsyncPurchaseOrders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPurchaseOrdersWithRawResponse(client, server, auth)

    async def create_purchase_order(
        self,
        company_id: UUID,
        body: PurchaseOrderCreate | PurchaseOrderCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PurchaseOrder:
        """Creates a new purchase order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase order created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_purchase_order(company_id, body, request_options=request_options)
        )

    async def delete_purchase_order(
        self, company_id: UUID, purchase_order_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase order deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_purchase_order(
                company_id, purchase_order_id, request_options=request_options
            ),
        )

    async def get_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PurchaseOrder:
        """Retrieves a specific purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved purchase order

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_purchase_order(
                company_id, purchase_order_id, select=select, expand=expand, request_options=request_options
            ),
        )

    async def list_purchase_order_lines(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse:
        """Returns a list of purchase order line items.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved purchase order lines

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_purchase_order_lines(
                company_id,
                purchase_order_id,
                top=top,
                skip=skip,
                filter_=filter_,
                select=select,
                request_options=request_options,
            ),
        )

    async def list_purchase_orders(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiPurchaseOrdersResponse:
        """Returns a list of purchase order objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved purchase orders

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_purchase_orders(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def update_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        if_match: str,
        body: PurchaseOrderUpdate | PurchaseOrderUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PurchaseOrder:
        """Updates an existing purchase order.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase order updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_purchase_order(
                company_id, purchase_order_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPurchaseOrdersWithRawResponse:
        return self._with_raw_response


class PurchaseOrdersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_purchase_order(
        self,
        company_id: UUID,
        body: PurchaseOrderCreate | PurchaseOrderCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseOrder, CreatePurchaseOrderErrorBody]:
        """Creates a new purchase order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/purchaseOrders"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseOrderCreate | PurchaseOrderCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[PurchaseOrder],
            error_mapper=create_purchase_order_error_mapper,
            request_options=request_options,
        )

    def delete_purchase_order(
        self, company_id: UUID, purchase_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePurchaseOrderErrorBody]:
        """Deletes a purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=delete_purchase_order_error_mapper,
            request_options=request_options,
        )

    def get_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseOrder, GetPurchaseOrderErrorBody]:
        """Retrieves a specific purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[PurchaseOrder],
            error_mapper=get_purchase_order_error_mapper,
            request_options=request_options,
        )

    def list_purchase_order_lines(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, ListPurchaseOrderLinesErrorBody]:
        """Returns a list of purchase order line items.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/companies({company_id})/purchaseOrders({purchaseOrder_id})/purchaseOrderLines"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse],
            error_mapper=list_purchase_order_lines_error_mapper,
            request_options=request_options,
        )

    def list_purchase_orders(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiPurchaseOrdersResponse, ListPurchaseOrdersErrorBody]:
        """Returns a list of purchase order objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/purchaseOrders"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
                param[str | None]("$expand", expand),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiPurchaseOrdersResponse],
            error_mapper=list_purchase_orders_error_mapper,
            request_options=request_options,
        )

    def update_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        if_match: str,
        body: PurchaseOrderUpdate | PurchaseOrderUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseOrder, UpdatePurchaseOrderErrorBody]:
        """Updates an existing purchase order.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseOrderUpdate | PurchaseOrderUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[PurchaseOrder],
            error_mapper=update_purchase_order_error_mapper,
            request_options=request_options,
        )


class AsyncPurchaseOrdersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_purchase_order(
        self,
        company_id: UUID,
        body: PurchaseOrderCreate | PurchaseOrderCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseOrder, CreatePurchaseOrderErrorBody]:
        """Creates a new purchase order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/purchaseOrders"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseOrderCreate | PurchaseOrderCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[PurchaseOrder],
            error_mapper=create_purchase_order_error_mapper,
            request_options=request_options,
        )

    async def delete_purchase_order(
        self, company_id: UUID, purchase_order_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeletePurchaseOrderErrorBody]:
        """Deletes a purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=delete_purchase_order_error_mapper,
            request_options=request_options,
        )

    async def get_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseOrder, GetPurchaseOrderErrorBody]:
        """Retrieves a specific purchase order by ID.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[PurchaseOrder],
            error_mapper=get_purchase_order_error_mapper,
            request_options=request_options,
        )

    async def list_purchase_order_lines(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse, ListPurchaseOrderLinesErrorBody]:
        """Returns a list of purchase order line items.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default(
                "/companies({company_id})/purchaseOrders({purchaseOrder_id})/purchaseOrderLines"
            ),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiPurchaseOrdersApiPurchaseOrderLinesResponse],
            error_mapper=list_purchase_order_lines_error_mapper,
            request_options=request_options,
        )

    async def list_purchase_orders(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiPurchaseOrdersResponse, ListPurchaseOrdersErrorBody]:
        """Returns a list of purchase order objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/purchaseOrders"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
                param[str | None]("$expand", expand),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiPurchaseOrdersResponse],
            error_mapper=list_purchase_orders_error_mapper,
            request_options=request_options,
        )

    async def update_purchase_order(
        self,
        company_id: UUID,
        purchase_order_id: UUID,
        if_match: str,
        body: PurchaseOrderUpdate | PurchaseOrderUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseOrder, UpdatePurchaseOrderErrorBody]:
        """Updates an existing purchase order.

        Args:
            company_id: The unique identifier of the company
            purchase_order_id: The unique identifier of the purchase order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/purchaseOrders({purchaseOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("purchaseOrder_id", purchase_order_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseOrderUpdate | PurchaseOrderUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[PurchaseOrder],
            error_mapper=update_purchase_order_error_mapper,
            request_options=request_options,
        )
