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
from ..errors.create_sales_order_error import CreateSalesOrderErrorBody, create_sales_order_error_mapper
from ..errors.delete_sales_order_error import DeleteSalesOrderErrorBody, delete_sales_order_error_mapper
from ..errors.get_sales_order_error import GetSalesOrderErrorBody, get_sales_order_error_mapper
from ..errors.list_sales_order_lines_error import ListSalesOrderLinesErrorBody, list_sales_order_lines_error_mapper
from ..errors.list_sales_orders_error import ListSalesOrdersErrorBody, list_sales_orders_error_mapper
from ..errors.update_sales_order_error import UpdateSalesOrderErrorBody, update_sales_order_error_mapper
from ..models.companies_api_sales_orders_api_sales_order_lines_response import (
    CompaniesApiSalesOrdersApiSalesOrderLinesResponse,
)
from ..models.companies_api_sales_orders_response import CompaniesApiSalesOrdersResponse
from ..models.sales_order import SalesOrder
from ..models.sales_order_create import SalesOrderCreate, SalesOrderCreateDict
from ..models.sales_order_update import SalesOrderUpdate, SalesOrderUpdateDict
from ..server.server import Server


class SalesOrders:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SalesOrdersWithRawResponse(client, server, auth)

    def create_sales_order(
        self,
        company_id: UUID,
        body: SalesOrderCreate | SalesOrderCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SalesOrder:
        """Creates a new sales order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales order created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_sales_order(company_id, body, request_options=request_options))

    def delete_sales_order(
        self, company_id: UUID, sales_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales order deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.delete_sales_order(company_id, sales_order_id, request_options=request_options)
        )

    def get_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SalesOrder:
        """Retrieves a specific sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved sales order

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_sales_order(
                company_id, sales_order_id, select=select, expand=expand, request_options=request_options
            ),
        )

    def list_sales_order_lines(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiSalesOrdersApiSalesOrderLinesResponse:
        """Returns a list of sales order line items.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved sales order lines

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_sales_order_lines(
                company_id,
                sales_order_id,
                top=top,
                skip=skip,
                filter_=filter_,
                select=select,
                request_options=request_options,
            ),
        )

    def list_sales_orders(
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
    ) -> CompaniesApiSalesOrdersResponse:
        """Returns a list of sales order objects from the specified company.

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
            Successfully retrieved sales orders

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_sales_orders(
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

    def update_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        if_match: str,
        body: SalesOrderUpdate | SalesOrderUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SalesOrder:
        """Updates an existing sales order.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales order updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_sales_order(
                company_id, sales_order_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SalesOrdersWithRawResponse:
        return self._with_raw_response


class AsyncSalesOrders:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSalesOrdersWithRawResponse(client, server, auth)

    async def create_sales_order(
        self,
        company_id: UUID,
        body: SalesOrderCreate | SalesOrderCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SalesOrder:
        """Creates a new sales order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales order created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_sales_order(company_id, body, request_options=request_options)
        )

    async def delete_sales_order(
        self, company_id: UUID, sales_order_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales order deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.delete_sales_order(
                company_id, sales_order_id, request_options=request_options
            ),
        )

    async def get_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SalesOrder:
        """Retrieves a specific sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved sales order

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_sales_order(
                company_id, sales_order_id, select=select, expand=expand, request_options=request_options
            ),
        )

    async def list_sales_order_lines(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiSalesOrdersApiSalesOrderLinesResponse:
        """Returns a list of sales order line items.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved sales order lines

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sales_order_lines(
                company_id,
                sales_order_id,
                top=top,
                skip=skip,
                filter_=filter_,
                select=select,
                request_options=request_options,
            ),
        )

    async def list_sales_orders(
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
    ) -> CompaniesApiSalesOrdersResponse:
        """Returns a list of sales order objects from the specified company.

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
            Successfully retrieved sales orders

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sales_orders(
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

    async def update_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        if_match: str,
        body: SalesOrderUpdate | SalesOrderUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SalesOrder:
        """Updates an existing sales order.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales order updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_sales_order(
                company_id, sales_order_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSalesOrdersWithRawResponse:
        return self._with_raw_response


class SalesOrdersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sales_order(
        self,
        company_id: UUID,
        body: SalesOrderCreate | SalesOrderCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesOrder, CreateSalesOrderErrorBody]:
        """Creates a new sales order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/salesOrders"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SalesOrderCreate | SalesOrderCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[SalesOrder],
            error_mapper=create_sales_order_error_mapper,
            request_options=request_options,
        )

    def delete_sales_order(
        self, company_id: UUID, sales_order_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSalesOrderErrorBody]:
        """Deletes a sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=delete_sales_order_error_mapper,
            request_options=request_options,
        )

    def get_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesOrder, GetSalesOrderErrorBody]:
        """Retrieves a specific sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[SalesOrder],
            error_mapper=get_sales_order_error_mapper,
            request_options=request_options,
        )

    def list_sales_order_lines(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiSalesOrdersApiSalesOrderLinesResponse, ListSalesOrderLinesErrorBody]:
        """Returns a list of sales order line items.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
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
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiSalesOrdersApiSalesOrderLinesResponse],
            error_mapper=list_sales_order_lines_error_mapper,
            request_options=request_options,
        )

    def list_sales_orders(
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
    ) -> ApiResult[CompaniesApiSalesOrdersResponse, ListSalesOrdersErrorBody]:
        """Returns a list of sales order objects from the specified company.

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
            url_template=self._server.default("/companies({company_id})/salesOrders"),
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
            decoder=json_decoder[CompaniesApiSalesOrdersResponse],
            error_mapper=list_sales_orders_error_mapper,
            request_options=request_options,
        )

    def update_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        if_match: str,
        body: SalesOrderUpdate | SalesOrderUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesOrder, UpdateSalesOrderErrorBody]:
        """Updates an existing sales order.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SalesOrderUpdate | SalesOrderUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[SalesOrder],
            error_mapper=update_sales_order_error_mapper,
            request_options=request_options,
        )


class AsyncSalesOrdersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sales_order(
        self,
        company_id: UUID,
        body: SalesOrderCreate | SalesOrderCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesOrder, CreateSalesOrderErrorBody]:
        """Creates a new sales order in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/salesOrders"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SalesOrderCreate | SalesOrderCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[SalesOrder],
            error_mapper=create_sales_order_error_mapper,
            request_options=request_options,
        )

    async def delete_sales_order(
        self, company_id: UUID, sales_order_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteSalesOrderErrorBody]:
        """Deletes a sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=delete_sales_order_error_mapper,
            request_options=request_options,
        )

    async def get_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        select: str | None = None,
        expand: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesOrder, GetSalesOrderErrorBody]:
        """Retrieves a specific sales order by ID.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            select: Comma-separated list of properties to include in the response
            expand: Related entities to expand inline
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            query_params=[param[str | None]("$select", select), param[str | None]("$expand", expand)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[SalesOrder],
            error_mapper=get_sales_order_error_mapper,
            request_options=request_options,
        )

    async def list_sales_order_lines(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiSalesOrdersApiSalesOrderLinesResponse, ListSalesOrderLinesErrorBody]:
        """Returns a list of sales order line items.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
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
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})/salesOrderLines"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiSalesOrdersApiSalesOrderLinesResponse],
            error_mapper=list_sales_order_lines_error_mapper,
            request_options=request_options,
        )

    async def list_sales_orders(
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
    ) -> ApiResult[CompaniesApiSalesOrdersResponse, ListSalesOrdersErrorBody]:
        """Returns a list of sales order objects from the specified company.

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
            url_template=self._server.default("/companies({company_id})/salesOrders"),
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
            decoder=async_json_decoder[CompaniesApiSalesOrdersResponse],
            error_mapper=list_sales_orders_error_mapper,
            request_options=request_options,
        )

    async def update_sales_order(
        self,
        company_id: UUID,
        sales_order_id: UUID,
        if_match: str,
        body: SalesOrderUpdate | SalesOrderUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesOrder, UpdateSalesOrderErrorBody]:
        """Updates an existing sales order.

        Args:
            company_id: The unique identifier of the company
            sales_order_id: The unique identifier of the sales order
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/salesOrders({salesOrder_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("salesOrder_id", sales_order_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SalesOrderUpdate | SalesOrderUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[SalesOrder],
            error_mapper=update_sales_order_error_mapper,
            request_options=request_options,
        )
