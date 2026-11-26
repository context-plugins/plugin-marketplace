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
from ..errors.create_purchase_invoice_error import CreatePurchaseInvoiceErrorBody, create_purchase_invoice_error_mapper
from ..errors.list_purchase_invoices_error import ListPurchaseInvoicesErrorBody, list_purchase_invoices_error_mapper
from ..models.companies_api_purchase_invoices_response import CompaniesApiPurchaseInvoicesResponse
from ..models.purchase_invoice import PurchaseInvoice
from ..models.purchase_invoice_create import PurchaseInvoiceCreate, PurchaseInvoiceCreateDict
from ..server.server import Server


class PurchaseInvoices:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PurchaseInvoicesWithRawResponse(client, server, auth)

    def create_purchase_invoice(
        self,
        company_id: UUID,
        body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PurchaseInvoice:
        """Creates a new purchase invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase invoice created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.create_purchase_invoice(company_id, body, request_options=request_options)
        )

    def list_purchase_invoices(
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
    ) -> CompaniesApiPurchaseInvoicesResponse:
        """Returns a list of purchase invoice objects.

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
            Successfully retrieved purchase invoices

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_purchase_invoices(
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
    def with_raw_response(self) -> PurchaseInvoicesWithRawResponse:
        return self._with_raw_response


class AsyncPurchaseInvoices:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPurchaseInvoicesWithRawResponse(client, server, auth)

    async def create_purchase_invoice(
        self,
        company_id: UUID,
        body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PurchaseInvoice:
        """Creates a new purchase invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Purchase invoice created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.create_purchase_invoice(company_id, body, request_options=request_options)
        )

    async def list_purchase_invoices(
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
    ) -> CompaniesApiPurchaseInvoicesResponse:
        """Returns a list of purchase invoice objects.

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
            Successfully retrieved purchase invoices

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_purchase_invoices(
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
    def with_raw_response(self) -> AsyncPurchaseInvoicesWithRawResponse:
        return self._with_raw_response


class PurchaseInvoicesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_purchase_invoice(
        self,
        company_id: UUID,
        body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseInvoice, CreatePurchaseInvoiceErrorBody]:
        """Creates a new purchase invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/purchaseInvoices"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseInvoiceCreate | PurchaseInvoiceCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[PurchaseInvoice],
            error_mapper=create_purchase_invoice_error_mapper,
            request_options=request_options,
        )

    def list_purchase_invoices(
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
    ) -> ApiResult[CompaniesApiPurchaseInvoicesResponse, ListPurchaseInvoicesErrorBody]:
        """Returns a list of purchase invoice objects.

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
            url_template=self._server.default("/companies({company_id})/purchaseInvoices"),
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
            decoder=json_decoder[CompaniesApiPurchaseInvoicesResponse],
            error_mapper=list_purchase_invoices_error_mapper,
            request_options=request_options,
        )


class AsyncPurchaseInvoicesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_purchase_invoice(
        self,
        company_id: UUID,
        body: PurchaseInvoiceCreate | PurchaseInvoiceCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PurchaseInvoice, CreatePurchaseInvoiceErrorBody]:
        """Creates a new purchase invoice in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/purchaseInvoices"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PurchaseInvoiceCreate | PurchaseInvoiceCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[PurchaseInvoice],
            error_mapper=create_purchase_invoice_error_mapper,
            request_options=request_options,
        )

    async def list_purchase_invoices(
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
    ) -> ApiResult[CompaniesApiPurchaseInvoicesResponse, ListPurchaseInvoicesErrorBody]:
        """Returns a list of purchase invoice objects.

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
            url_template=self._server.default("/companies({company_id})/purchaseInvoices"),
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
            decoder=async_json_decoder[CompaniesApiPurchaseInvoicesResponse],
            error_mapper=list_purchase_invoices_error_mapper,
            request_options=request_options,
        )
