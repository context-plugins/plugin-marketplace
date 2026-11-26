from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.archive_invoice_error import ArchiveInvoiceErrorBody, archive_invoice_error_mapper
from ..errors.create_invoice_error import CreateInvoiceErrorBody, create_invoice_error_mapper
from ..errors.get_invoice_error import GetInvoiceErrorBody, get_invoice_error_mapper
from ..errors.get_payment_link_error import GetPaymentLinkErrorBody, get_payment_link_error_mapper
from ..errors.list_invoices_error import ListInvoicesErrorBody, list_invoices_error_mapper
from ..errors.record_invoice_error import RecordInvoiceErrorBody, record_invoice_error_mapper
from ..errors.replace_invoice_error import ReplaceInvoiceErrorBody, replace_invoice_error_mapper
from ..errors.restore_invoice_error import RestoreInvoiceErrorBody, restore_invoice_error_mapper
from ..errors.send_invoice_error import SendInvoiceErrorBody, send_invoice_error_mapper
from ..errors.update_invoice_error import UpdateInvoiceErrorBody, update_invoice_error_mapper
from ..models.invoice_create_request_dto import InvoiceCreateRequestDto, InvoiceCreateRequestDtoDict
from ..models.invoice_payment_link_request_dto import InvoicePaymentLinkRequestDto, InvoicePaymentLinkRequestDtoDict
from ..models.invoice_payment_link_response_dto import InvoicePaymentLinkResponseDto
from ..models.invoice_replace_request_dto import InvoiceReplaceRequestDto, InvoiceReplaceRequestDtoDict
from ..models.invoice_response_dto import InvoiceResponseDto
from ..models.invoice_update_request_dto import InvoiceUpdateRequestDto, InvoiceUpdateRequestDtoDict
from ..models.list_invoice_response_dto import ListInvoiceResponseDto
from ..models.record_invoice_request_dto import RecordInvoiceRequestDto, RecordInvoiceRequestDtoDict
from ..models.record_invoice_response_dto import RecordInvoiceResponseDto
from ..models.send_invoice_request_dto import SendInvoiceRequestDto, SendInvoiceRequestDtoDict
from ..server.server import Server


class Invoices:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = InvoicesWithRawResponse(client, server)

    def archive_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Archive an existing invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived invoice with ``POST /v3/invoices/{invoiceId}/restore``. There is no change when you
        archive an archived invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_invoice(
                invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_invoice(
        self,
        body: InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Create a new invoice.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_invoice(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Get details about an existing invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get invoice details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_invoice(
                invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_payment_link(
        self,
        invoice_id: str,
        body: InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoicePaymentLinkResponseDto:
        """Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and
        customer information.

        You can send the invoice payment link to your customer for getting paid by the customer. With this link, the
        customer can complete the invoice payment without the need to set up a BILL account.

        When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided
        email address.

        **Note**: You get valid invoice payment links only for customers that are NOT connected with your organization
        in the BILL network.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get an invoice payment link response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_payment_link(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListInvoiceResponseDto:
        """Get a list of invoice objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of invoices response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_invoices(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def record_invoice(
        self,
        body: RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> RecordInvoiceResponseDto:
        """Record an offline AR payment received from a customer.

        An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded
        payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is
        available as a customer credit in the BILL system.

        See Recording an AR payment in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Record AR payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.record_invoice(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def replace_invoice(
        self,
        invoice_id: str,
        body: InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Update the number of line items in an invoice. You can also update other invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.replace_invoice(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def restore_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Restore an archived invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored
        invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.restore_invoice(
                invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def send_invoice(
        self,
        invoice_id: str,
        body: SendInvoiceRequestDto | SendInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.send_invoice(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_invoice(
        self,
        invoice_id: str,
        body: InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Update details about an invoice line item. You can also update other invoice details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The invoice line item ``id`` does not change with a PATCH operation.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_invoice(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> InvoicesWithRawResponse:
        return self._with_raw_response


class AsyncInvoices:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncInvoicesWithRawResponse(client, server)

    async def archive_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Archive an existing invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived invoice with ``POST /v3/invoices/{invoiceId}/restore``. There is no change when you
        archive an archived invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_invoice(
                invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_invoice(
        self,
        body: InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Create a new invoice.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_invoice(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Get details about an existing invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get invoice details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_invoice(
                invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_payment_link(
        self,
        invoice_id: str,
        body: InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoicePaymentLinkResponseDto:
        """Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and
        customer information.

        You can send the invoice payment link to your customer for getting paid by the customer. With this link, the
        customer can complete the invoice payment without the need to set up a BILL account.

        When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided
        email address.

        **Note**: You get valid invoice payment links only for customers that are NOT connected with your organization
        in the BILL network.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get an invoice payment link response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_payment_link(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListInvoiceResponseDto:
        """Get a list of invoice objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of invoices response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_invoices(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def record_invoice(
        self,
        body: RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> RecordInvoiceResponseDto:
        """Record an offline AR payment received from a customer.

        An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded
        payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is
        available as a customer credit in the BILL system.

        See Recording an AR payment in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Record AR payment response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.record_invoice(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def replace_invoice(
        self,
        invoice_id: str,
        body: InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Update the number of line items in an invoice. You can also update other invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_invoice(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def restore_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Restore an archived invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored
        invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Restore an archived invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.restore_invoice(
                invoice_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def send_invoice(
        self,
        invoice_id: str,
        body: SendInvoiceRequestDto | SendInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Send an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.send_invoice(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_invoice(
        self,
        invoice_id: str,
        body: InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoiceResponseDto:
        """Update details about an invoice line item. You can also update other invoice details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The invoice line item ``id`` does not change with a PATCH operation.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update an invoice response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_invoice(
                invoice_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInvoicesWithRawResponse:
        return self._with_raw_response


class InvoicesWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, ArchiveInvoiceErrorBody]:
        """Archive an existing invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived invoice with ``POST /v3/invoices/{invoiceId}/restore``. There is no change when you
        archive an archived invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/archive"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[InvoiceResponseDto],
            error_mapper=archive_invoice_error_mapper,
            request_options=request_options,
        )

    def create_invoice(
        self,
        body: InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, CreateInvoiceErrorBody]:
        """Create a new invoice.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict](body),
            decoder=json_decoder[InvoiceResponseDto],
            error_mapper=create_invoice_error_mapper,
            request_options=request_options,
        )

    def get_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, GetInvoiceErrorBody]:
        """Get details about an existing invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[InvoiceResponseDto],
            error_mapper=get_invoice_error_mapper,
            request_options=request_options,
        )

    def get_payment_link(
        self,
        invoice_id: str,
        body: InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoicePaymentLinkResponseDto, GetPaymentLinkErrorBody]:
        """Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and
        customer information.

        You can send the invoice payment link to your customer for getting paid by the customer. With this link, the
        customer can complete the invoice payment without the need to set up a BILL account.

        When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided
        email address.

        **Note**: You get valid invoice payment links only for customers that are NOT connected with your organization
        in the BILL network.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/payment-link"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict](body),
            decoder=json_decoder[InvoicePaymentLinkResponseDto],
            error_mapper=get_payment_link_error_mapper,
            request_options=request_options,
        )

    def list_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListInvoiceResponseDto, ListInvoicesErrorBody]:
        """Get a list of invoice objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/invoices"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListInvoiceResponseDto],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )

    def record_invoice(
        self,
        body: RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordInvoiceResponseDto, RecordInvoiceErrorBody]:
        """Record an offline AR payment received from a customer.

        An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded
        payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is
        available as a customer credit in the BILL system.

        See Recording an AR payment in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/record-payment"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict](body),
            decoder=json_decoder[RecordInvoiceResponseDto],
            error_mapper=record_invoice_error_mapper,
            request_options=request_options,
        )

    def replace_invoice(
        self,
        invoice_id: str,
        body: InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, ReplaceInvoiceErrorBody]:
        """Update the number of line items in an invoice. You can also update other invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict](body),
            decoder=json_decoder[InvoiceResponseDto],
            error_mapper=replace_invoice_error_mapper,
            request_options=request_options,
        )

    def restore_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, RestoreInvoiceErrorBody]:
        """Restore an archived invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored
        invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/restore"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[InvoiceResponseDto],
            error_mapper=restore_invoice_error_mapper,
            request_options=request_options,
        )

    def send_invoice(
        self,
        invoice_id: str,
        body: SendInvoiceRequestDto | SendInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SendInvoiceErrorBody]:
        """Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/email"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SendInvoiceRequestDto | SendInvoiceRequestDtoDict](body),
            decoder=empty_response,
            error_mapper=send_invoice_error_mapper,
            request_options=request_options,
        )

    def update_invoice(
        self,
        invoice_id: str,
        body: InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, UpdateInvoiceErrorBody]:
        """Update details about an invoice line item. You can also update other invoice details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The invoice line item ``id`` does not change with a PATCH operation.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict](body),
            decoder=json_decoder[InvoiceResponseDto],
            error_mapper=update_invoice_error_mapper,
            request_options=request_options,
        )


class AsyncInvoicesWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, ArchiveInvoiceErrorBody]:
        """Archive an existing invoice. In the response, the ``archived`` field is set as ``true``.

        You can restore an archived invoice with ``POST /v3/invoices/{invoiceId}/restore``. There is no change when you
        archive an archived invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/archive"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[InvoiceResponseDto],
            error_mapper=archive_invoice_error_mapper,
            request_options=request_options,
        )

    async def create_invoice(
        self,
        body: InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, CreateInvoiceErrorBody]:
        """Create a new invoice.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoiceCreateRequestDto | InvoiceCreateRequestDtoDict](body),
            decoder=async_json_decoder[InvoiceResponseDto],
            error_mapper=create_invoice_error_mapper,
            request_options=request_options,
        )

    async def get_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, GetInvoiceErrorBody]:
        """Get details about an existing invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[InvoiceResponseDto],
            error_mapper=get_invoice_error_mapper,
            request_options=request_options,
        )

    async def get_payment_link(
        self,
        invoice_id: str,
        body: InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoicePaymentLinkResponseDto, GetPaymentLinkErrorBody]:
        """Get an invoice payment link. In the response, BILL sends you a payment link based on the provided invoice and
        customer information.

        You can send the invoice payment link to your customer for getting paid by the customer. With this link, the
        customer can complete the invoice payment without the need to set up a BILL account.

        When a customer payment is made with the invoice payment link, BILL sends a payment receipt to the provided
        email address.

        **Note**: You get valid invoice payment links only for customers that are NOT connected with your organization
        in the BILL network.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/payment-link"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoicePaymentLinkRequestDto | InvoicePaymentLinkRequestDtoDict](body),
            decoder=async_json_decoder[InvoicePaymentLinkResponseDto],
            error_mapper=get_payment_link_error_mapper,
            request_options=request_options,
        )

    async def list_invoices(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListInvoiceResponseDto, ListInvoicesErrorBody]:
        """Get a list of invoice objects. By default, you get 20 results on one page of results. Set ``max`` in your
        request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/invoices"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListInvoiceResponseDto],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )

    async def record_invoice(
        self,
        body: RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[RecordInvoiceResponseDto, RecordInvoiceErrorBody]:
        """Record an offline AR payment received from a customer.

        An offline payment is a payment that you receive outside the BILL system. BILL simply applies the recorded
        payment amount to one or more invoices for the customer. Any recorded unapplied amount is an overpayment and is
        available as a customer credit in the BILL system.

        See Recording an AR payment in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/record-payment"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[RecordInvoiceRequestDto | RecordInvoiceRequestDtoDict](body),
            decoder=async_json_decoder[RecordInvoiceResponseDto],
            error_mapper=record_invoice_error_mapper,
            request_options=request_options,
        )

    async def replace_invoice(
        self,
        invoice_id: str,
        body: InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, ReplaceInvoiceErrorBody]:
        """Update the number of line items in an invoice. You can also update other invoice details.

        You can use the PUT operation to add, remove, or replace the number of line items in an invoice. A set of rules
        apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the invoice.
        * When you omit an existing line item ``id``, the line item is removed from the invoice.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoiceReplaceRequestDto | InvoiceReplaceRequestDtoDict](body),
            decoder=async_json_decoder[InvoiceResponseDto],
            error_mapper=replace_invoice_error_mapper,
            request_options=request_options,
        )

    async def restore_invoice(
        self,
        invoice_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, RestoreInvoiceErrorBody]:
        """Restore an archived invoice. In the response, the ``archived`` field is set as ``false``.

        You can perform any valid BILL operation on restored invoices. There is no change when you restore a restored
        invoice.

        Args:
            invoice_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/restore"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[InvoiceResponseDto],
            error_mapper=restore_invoice_error_mapper,
            request_options=request_options,
        )

    async def send_invoice(
        self,
        invoice_id: str,
        body: SendInvoiceRequestDto | SendInvoiceRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SendInvoiceErrorBody]:
        """Send an invoice to a customer email address. You can send the invoice to multiple email addresses.

        See Invoices in the Guides section for more information, sample requests, and responses.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/invoices/{invoiceId}/email"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[SendInvoiceRequestDto | SendInvoiceRequestDtoDict](body),
            decoder=async_empty_response,
            error_mapper=send_invoice_error_mapper,
            request_options=request_options,
        )

    async def update_invoice(
        self,
        invoice_id: str,
        body: InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoiceResponseDto, UpdateInvoiceErrorBody]:
        """Update details about an invoice line item. You can also update other invoice details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The invoice line item ``id`` does not change with a PATCH operation.

        Args:
            invoice_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/invoices/{invoiceId}"),
            path_params=[param[str]("invoiceId", invoice_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InvoiceUpdateRequestDto | InvoiceUpdateRequestDtoDict](body),
            decoder=async_json_decoder[InvoiceResponseDto],
            error_mapper=update_invoice_error_mapper,
            request_options=request_options,
        )
