from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_invoice_by_id_error import GetInvoiceByIdErrorBody, get_invoice_by_id_error_mapper
from ..errors.get_invoice_lines_error import GetInvoiceLinesErrorBody, get_invoice_lines_error_mapper
from ..errors.list_invoices_error import ListInvoicesErrorBody, list_invoices_error_mapper
from ..errors.update_invoice_by_id_error import UpdateInvoiceByIdErrorBody, update_invoice_by_id_error_mapper
from ..models.enums.invoices_get_parameters_payment_status import InvoicesGetParametersPaymentStatusOrStr
from ..models.enums.invoices_get_parameters_status import InvoicesGetParametersStatusOrStr
from ..models.invoice import Invoice
from ..models.invoice_lines_response import InvoiceLinesResponse
from ..models.invoice_list_response import InvoiceListResponse
from ..models.update_invoice_request import UpdateInvoiceRequest, UpdateInvoiceRequestDict
from ..server.server import Server


class Invoices:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = InvoicesWithRawResponse(client, server)

    def get_invoice_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Invoice:
        """Get an invoice by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_invoice_by_id(id_, authorization, request_options=request_options))

    def get_invoice_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceLinesResponse:
        """Get the invoice lines for an invoice by ID

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
            self._with_raw_response.get_invoice_lines(
                id_, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    def list_invoices(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        status: InvoicesGetParametersStatusOrStr | None = None,
        payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None,
        issue_date_from: str | None = None,
        issue_date_to: str | None = None,
        due_date_from: str | None = None,
        due_date_to: str | None = None,
        display_number: str | None = None,
        purchase_order_reference: str | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceListResponse:
        """Get a list of invoices for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            order_id: Filter by the order this invoice was generated from.
            status: Filter by invoice status.
            payment_status: Filter by payment status.
            issue_date_from: Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            issue_date_to: Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            due_date_from: Only invoices whose due date is on or after this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            due_date_to: Only invoices whose due date is on or before this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            display_number: Filter by the invoice number shown on the invoice, whether draft or posted (exact match).
            purchase_order_reference: Filter by purchase order reference (exact match, whitespace-sensitive).
            currency: Filter by invoice currency code (case-insensitive, e.g. USD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_invoices(
                authorization,
                limit=limit,
                offset=offset,
                customer_id=customer_id,
                external_customer_id=external_customer_id,
                order_id=order_id,
                status=status,
                payment_status=payment_status,
                issue_date_from=issue_date_from,
                issue_date_to=issue_date_to,
                due_date_from=due_date_from,
                due_date_to=due_date_to,
                display_number=display_number,
                purchase_order_reference=purchase_order_reference,
                currency=currency,
                request_options=request_options,
            ),
        )

    def update_invoice_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Invoice:
        """Update an invoice by ID

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
            self._with_raw_response.update_invoice_by_id(id_, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> InvoicesWithRawResponse:
        return self._with_raw_response


class AsyncInvoices:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncInvoicesWithRawResponse(client, server)

    async def get_invoice_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Invoice:
        """Get an invoice by ID

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
            await self._with_raw_response.get_invoice_by_id(id_, authorization, request_options=request_options)
        )

    async def get_invoice_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceLinesResponse:
        """Get the invoice lines for an invoice by ID

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
            await self._with_raw_response.get_invoice_lines(
                id_, authorization, limit=limit, offset=offset, request_options=request_options
            ),
        )

    async def list_invoices(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        status: InvoicesGetParametersStatusOrStr | None = None,
        payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None,
        issue_date_from: str | None = None,
        issue_date_to: str | None = None,
        due_date_from: str | None = None,
        due_date_to: str | None = None,
        display_number: str | None = None,
        purchase_order_reference: str | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceListResponse:
        """Get a list of invoices for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            order_id: Filter by the order this invoice was generated from.
            status: Filter by invoice status.
            payment_status: Filter by payment status.
            issue_date_from: Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            issue_date_to: Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            due_date_from: Only invoices whose due date is on or after this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            due_date_to: Only invoices whose due date is on or before this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            display_number: Filter by the invoice number shown on the invoice, whether draft or posted (exact match).
            purchase_order_reference: Filter by purchase order reference (exact match, whitespace-sensitive).
            currency: Filter by invoice currency code (case-insensitive, e.g. USD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_invoices(
                authorization,
                limit=limit,
                offset=offset,
                customer_id=customer_id,
                external_customer_id=external_customer_id,
                order_id=order_id,
                status=status,
                payment_status=payment_status,
                issue_date_from=issue_date_from,
                issue_date_to=issue_date_to,
                due_date_from=due_date_from,
                due_date_to=due_date_to,
                display_number=display_number,
                purchase_order_reference=purchase_order_reference,
                currency=currency,
                request_options=request_options,
            ),
        )

    async def update_invoice_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Invoice:
        """Update an invoice by ID

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
            await self._with_raw_response.update_invoice_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInvoicesWithRawResponse:
        return self._with_raw_response


class InvoicesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_invoice_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, GetInvoiceByIdErrorBody]:
        """Get an invoice by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Invoice],
            error_mapper=get_invoice_by_id_error_mapper,
            request_options=request_options,
        )

    def get_invoice_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceLinesResponse, GetInvoiceLinesErrorBody]:
        """Get the invoice lines for an invoice by ID

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
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/{id}/lines"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[InvoiceLinesResponse],
            error_mapper=get_invoice_lines_error_mapper,
            request_options=request_options,
        )

    def list_invoices(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        status: InvoicesGetParametersStatusOrStr | None = None,
        payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None,
        issue_date_from: str | None = None,
        issue_date_to: str | None = None,
        due_date_from: str | None = None,
        due_date_to: str | None = None,
        display_number: str | None = None,
        purchase_order_reference: str | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceListResponse, ListInvoicesErrorBody]:
        """Get a list of invoices for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            order_id: Filter by the order this invoice was generated from.
            status: Filter by invoice status.
            payment_status: Filter by payment status.
            issue_date_from: Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            issue_date_to: Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            due_date_from: Only invoices whose due date is on or after this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            due_date_to: Only invoices whose due date is on or before this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            display_number: Filter by the invoice number shown on the invoice, whether draft or posted (exact match).
            purchase_order_reference: Filter by purchase order reference (exact match, whitespace-sensitive).
            currency: Filter by invoice currency code (case-insensitive, e.g. USD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("customerId", customer_id),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("orderId", order_id),
                param[InvoicesGetParametersStatusOrStr | None]("status", status),
                param[InvoicesGetParametersPaymentStatusOrStr | None]("paymentStatus", payment_status),
                param[str | None]("issueDateFrom", issue_date_from),
                param[str | None]("issueDateTo", issue_date_to),
                param[str | None]("dueDateFrom", due_date_from),
                param[str | None]("dueDateTo", due_date_to),
                param[str | None]("displayNumber", display_number),
                param[str | None]("purchaseOrderReference", purchase_order_reference),
                param[str | None]("currency", currency),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[InvoiceListResponse],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )

    def update_invoice_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Invoice, UpdateInvoiceByIdErrorBody]:
        """Update an invoice by ID

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
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateInvoiceRequest | UpdateInvoiceRequestDict | None](body),
            decoder=json_decoder[Invoice],
            error_mapper=update_invoice_by_id_error_mapper,
            request_options=request_options,
        )


class AsyncInvoicesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_invoice_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, GetInvoiceByIdErrorBody]:
        """Get an invoice by ID

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Invoice],
            error_mapper=get_invoice_by_id_error_mapper,
            request_options=request_options,
        )

    async def get_invoice_lines(
        self,
        id_: str,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceLinesResponse, GetInvoiceLinesErrorBody]:
        """Get the invoice lines for an invoice by ID

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
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/{id}/lines"),
            path_params=[param[str]("id", id_)],
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[InvoiceLinesResponse],
            error_mapper=get_invoice_lines_error_mapper,
            request_options=request_options,
        )

    async def list_invoices(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        status: InvoicesGetParametersStatusOrStr | None = None,
        payment_status: InvoicesGetParametersPaymentStatusOrStr | None = None,
        issue_date_from: str | None = None,
        issue_date_to: str | None = None,
        due_date_from: str | None = None,
        due_date_to: str | None = None,
        display_number: str | None = None,
        purchase_order_reference: str | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceListResponse, ListInvoicesErrorBody]:
        """Get a list of invoices for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer ID.
            external_customer_id: Filter by customer external ID.
            order_id: Filter by the order this invoice was generated from.
            status: Filter by invoice status.
            payment_status: Filter by payment status.
            issue_date_from: Only invoices whose issue date is on or after this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            issue_date_to: Only invoices whose issue date is on or before this date. Accepts an ISO 8601 date or
                date-time. Date-only values (e.g. 2026-06-30) are treated as UTC; date-times without an explicit
                timezone offset are ambiguous, so include one (e.g. 2026-06-30T00:00:00-05:00) when precision matters.
            due_date_from: Only invoices whose due date is on or after this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            due_date_to: Only invoices whose due date is on or before this date. Invoices without a due date are not
                matched. Accepts an ISO 8601 date or date-time. Date-only values (e.g. 2026-06-30) are treated as UTC;
                date-times without an explicit timezone offset are ambiguous, so include one (e.g.
                2026-06-30T00:00:00-05:00) when precision matters.
            display_number: Filter by the invoice number shown on the invoice, whether draft or posted (exact match).
            purchase_order_reference: Filter by purchase order reference (exact match, whitespace-sensitive).
            currency: Filter by invoice currency code (case-insensitive, e.g. USD).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("customerId", customer_id),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("orderId", order_id),
                param[InvoicesGetParametersStatusOrStr | None]("status", status),
                param[InvoicesGetParametersPaymentStatusOrStr | None]("paymentStatus", payment_status),
                param[str | None]("issueDateFrom", issue_date_from),
                param[str | None]("issueDateTo", issue_date_to),
                param[str | None]("dueDateFrom", due_date_from),
                param[str | None]("dueDateTo", due_date_to),
                param[str | None]("displayNumber", display_number),
                param[str | None]("purchaseOrderReference", purchase_order_reference),
                param[str | None]("currency", currency),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[InvoiceListResponse],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )

    async def update_invoice_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateInvoiceRequest | UpdateInvoiceRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Invoice, UpdateInvoiceByIdErrorBody]:
        """Update an invoice by ID

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
            url_template=self._server.default_reference_analytics_experimental_api("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateInvoiceRequest | UpdateInvoiceRequestDict | None](body),
            decoder=async_json_decoder[Invoice],
            error_mapper=update_invoice_by_id_error_mapper,
            request_options=request_options,
        )
