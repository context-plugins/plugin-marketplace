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
from ..errors.create_sales_invoice_error import CreateSalesInvoiceErrorBody, create_sales_invoice_error_mapper
from ..errors.list_sales_invoices_error import ListSalesInvoicesErrorBody, list_sales_invoices_error_mapper
from ..models.companies_api_sales_invoices_response import CompaniesApiSalesInvoicesResponse
from ..models.sales_invoice import SalesInvoice
from ..models.sales_invoice_create import SalesInvoiceCreate, SalesInvoiceCreateDict
from ..server.server import Server


class SalesInvoices:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SalesInvoicesWithRawResponse(client, server, auth)

    def create_sales_invoice(
        self,
        company_id: UUID,
        body: SalesInvoiceCreate | SalesInvoiceCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SalesInvoice:
        """Creates a new sales invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales invoice created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_sales_invoice(company_id, body, request_options=request_options))

    def list_sales_invoices(
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
    ) -> CompaniesApiSalesInvoicesResponse:
        """Returns a list of sales invoice objects.

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
            Successfully retrieved sales invoices

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_sales_invoices(
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

    @property
    def with_raw_response(self) -> SalesInvoicesWithRawResponse:
        return self._with_raw_response


class AsyncSalesInvoices:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSalesInvoicesWithRawResponse(client, server, auth)

    async def create_sales_invoice(
        self,
        company_id: UUID,
        body: SalesInvoiceCreate | SalesInvoiceCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SalesInvoice:
        """Creates a new sales invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sales invoice created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_sales_invoice(company_id, body, request_options=request_options)
        )

    async def list_sales_invoices(
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
    ) -> CompaniesApiSalesInvoicesResponse:
        """Returns a list of sales invoice objects.

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
            Successfully retrieved sales invoices

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_sales_invoices(
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

    @property
    def with_raw_response(self) -> AsyncSalesInvoicesWithRawResponse:
        return self._with_raw_response


class SalesInvoicesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sales_invoice(
        self,
        company_id: UUID,
        body: SalesInvoiceCreate | SalesInvoiceCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesInvoice, CreateSalesInvoiceErrorBody]:
        """Creates a new sales invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/salesInvoices"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SalesInvoiceCreate | SalesInvoiceCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[SalesInvoice],
            error_mapper=create_sales_invoice_error_mapper,
            request_options=request_options,
        )

    def list_sales_invoices(
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
    ) -> ApiResult[CompaniesApiSalesInvoicesResponse, ListSalesInvoicesErrorBody]:
        """Returns a list of sales invoice objects.

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
            url_template=self._server.default("/companies({company_id})/salesInvoices"),
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
            decoder=json_decoder[CompaniesApiSalesInvoicesResponse],
            error_mapper=list_sales_invoices_error_mapper,
            request_options=request_options,
        )


class AsyncSalesInvoicesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sales_invoice(
        self,
        company_id: UUID,
        body: SalesInvoiceCreate | SalesInvoiceCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SalesInvoice, CreateSalesInvoiceErrorBody]:
        """Creates a new sales invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/salesInvoices"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SalesInvoiceCreate | SalesInvoiceCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[SalesInvoice],
            error_mapper=create_sales_invoice_error_mapper,
            request_options=request_options,
        )

    async def list_sales_invoices(
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
    ) -> ApiResult[CompaniesApiSalesInvoicesResponse, ListSalesInvoicesErrorBody]:
        """Returns a list of sales invoice objects.

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
            url_template=self._server.default("/companies({company_id})/salesInvoices"),
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
            decoder=async_json_decoder[CompaniesApiSalesInvoicesResponse],
            error_mapper=list_sales_invoices_error_mapper,
            request_options=request_options,
        )
