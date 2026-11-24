from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_invoice_error import GetInvoiceErrorBody, get_invoice_error_mapper
from ..errors.list_invoices_error import ListInvoicesErrorBody, list_invoices_error_mapper
from ..models.billing_v1_invoices_response import BillingV1InvoicesResponse
from ..models.billing_v1_invoices_response1 import BillingV1InvoicesResponse1
from ..server.server import Server


class Invoices:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InvoicesWithRawResponse(client, server, auth)

    def get_invoice(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BillingV1InvoicesResponse1:
        """Returns the full details of an invoice specified by the invoice number.

        Args:
            id_: Invoice number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Invoice details returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(self._with_raw_response.get_invoice(id_, request_options=request_options))

    def list_invoices(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> BillingV1InvoicesResponse:
        """Returns a list of all the current and historical invoices for your organization. Invoices are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: Value sent with the request.
            min_creation_time: Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created after or at this timestamp are returned.
            max_creation_time: Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - All available invoices returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            self._with_raw_response.list_invoices(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> InvoicesWithRawResponse:
        return self._with_raw_response


class AsyncInvoices:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInvoicesWithRawResponse(client, server, auth)

    async def get_invoice(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BillingV1InvoicesResponse1:
        """Returns the full details of an invoice specified by the invoice number.

        Args:
            id_: Invoice number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Invoice details returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(await self._with_raw_response.get_invoice(id_, request_options=request_options))

    async def list_invoices(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BillingV1InvoicesResponse:
        """Returns a list of all the current and historical invoices for your organization. Invoices are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: Value sent with the request.
            min_creation_time: Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created after or at this timestamp are returned.
            max_creation_time: Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - All available invoices returned.

        Raises:
            ApiError: Syntactically malformed request, missing required parameter, or unsupported parameter value.
                Missing or invalid credentials. Authenticated but not authorized to perform this request. The requested
                resource does not exist. Unexpected server error. ``error`` is ``ProblemDetails | RawError``."""
        return unwrap(
            await self._with_raw_response.list_invoices(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                min_creation_time=min_creation_time,
                max_creation_time=max_creation_time,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInvoicesWithRawResponse:
        return self._with_raw_response


class InvoicesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_invoice(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BillingV1InvoicesResponse1, GetInvoiceErrorBody]:
        """Returns the full details of an invoice specified by the invoice number.

        Args:
            id_: Invoice number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BillingV1InvoicesResponse1],
            error_mapper=get_invoice_error_mapper,
            request_options=request_options,
        )

    def list_invoices(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingV1InvoicesResponse, ListInvoicesErrorBody]:
        """Returns a list of all the current and historical invoices for your organization. Invoices are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: Value sent with the request.
            min_creation_time: Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created after or at this timestamp are returned.
            max_creation_time: Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/invoices"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[int | None]("minCreationTime", min_creation_time),
                param[int | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[BillingV1InvoicesResponse],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )


class AsyncInvoicesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_invoice(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BillingV1InvoicesResponse1, GetInvoiceErrorBody]:
        """Returns the full details of an invoice specified by the invoice number.

        Args:
            id_: Invoice number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BillingV1InvoicesResponse1],
            error_mapper=get_invoice_error_mapper,
            request_options=request_options,
        )

    async def list_invoices(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        min_creation_time: int | None = None,
        max_creation_time: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BillingV1InvoicesResponse, ListInvoicesErrorBody]:
        """Returns a list of all the current and historical invoices for your organization. Invoices are returned in
        reverse chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Leverage the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: Value sent with the request.
            min_creation_time: Min value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created after or at this timestamp are returned.
            max_creation_time: Max value for the invoice creation time, in milliseconds since the POSIX epoch. If set,
                only invoices created before or at this timestamp are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/billing/v1/invoices"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[int | None]("minCreationTime", min_creation_time),
                param[int | None]("maxCreationTime", max_creation_time),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[BillingV1InvoicesResponse],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )
