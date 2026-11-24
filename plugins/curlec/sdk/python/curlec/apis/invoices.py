from __future__ import annotations

from typing import Any
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
from ..errors.cancel_invoice_error import CancelInvoiceErrorBody, cancel_invoice_error_mapper
from ..errors.create_invoice_error import CreateInvoiceErrorBody, create_invoice_error_mapper
from ..errors.delete_invoice_error import DeleteInvoiceErrorBody, delete_invoice_error_mapper
from ..errors.fetch_invoice_error import FetchInvoiceErrorBody, fetch_invoice_error_mapper
from ..errors.issue_invoice_error import IssueInvoiceErrorBody, issue_invoice_error_mapper
from ..errors.list_invoices_error import ListInvoicesErrorBody, list_invoices_error_mapper
from ..errors.send_invoice_notification_error import (
    SendInvoiceNotificationErrorBody,
    send_invoice_notification_error_mapper,
)
from ..errors.update_invoice_error import UpdateInvoiceErrorBody, update_invoice_error_mapper
from ..models.enums.medium import MediumOrStr
from ..models.enums.type3 import Type3OrStr
from ..models.invoice import Invoice
from ..models.invoices_notify_by_response import InvoicesNotifyByResponse
from ..models.invoices_request import InvoicesRequest, InvoicesRequestDict
from ..models.invoices_request1 import InvoicesRequest1, InvoicesRequest1Dict
from ..models.invoices_response import InvoicesResponse
from ..server.server import Server


class Invoices:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InvoicesWithRawResponse(client, server, auth)

    def cancel_invoice(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice:
        """Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice cancelled.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_invoice(id_, request_options=request_options))

    def create_invoice(
        self, body: InvoicesRequest | InvoicesRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Invoice:
        """Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple
        payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer.
        Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice created in draft state.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_invoice(body, request_options=request_options))

    def delete_invoice(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Permanently delete a draft invoice. Only invoices in draft status can be deleted.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice deleted.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_invoice(id_, request_options=request_options))

    def fetch_invoice(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice:
        """Get full details of a specific invoice including status, line items, and payment information.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_invoice(id_, request_options=request_options))

    def issue_invoice(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Invoice:
        """Transition a draft invoice to issued status, sending a notification to the customer with the payment link.
        Once issued, line items cannot be changed.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice issued. short_url is now active.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.issue_invoice(id_, request_options=request_options))

    def list_invoices(
        self,
        *,
        type_: Type3OrStr | None = None,
        payment_id: str | None = None,
        customer_id: str | None = None,
        subscription_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InvoicesResponse:
        """Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100
        per call.

        Args:
            type_: Filter by invoice type.
            payment_id: Filter invoices by the payment ID used to pay them.
            customer_id: Filter by customer ID (cust_*).
            subscription_id: Fetch all invoices generated for a subscription (sub_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of invoices.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_invoices(
                type_=type_,
                payment_id=payment_id,
                customer_id=customer_id,
                subscription_id=subscription_id,
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    def send_invoice_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> InvoicesNotifyByResponse:
        """Send or resend the invoice payment link to the customer via SMS or email.

        Args:
            id_: Invoice ID (inv_*).
            medium: Notification channel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Notification sent.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.send_invoice_notification(id_, medium, request_options=request_options))

    def update_invoice(
        self,
        id_: str,
        body: InvoicesRequest1 | InvoicesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Invoice:
        """Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment,
        receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.

        Args:
            id_: Invoice ID (inv_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated invoice.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_invoice(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> InvoicesWithRawResponse:
        return self._with_raw_response


class AsyncInvoices:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInvoicesWithRawResponse(client, server, auth)

    async def cancel_invoice(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Invoice:
        """Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice cancelled.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.cancel_invoice(id_, request_options=request_options))

    async def create_invoice(
        self, body: InvoicesRequest | InvoicesRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Invoice:
        """Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple
        payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer.
        Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice created in draft state.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_invoice(body, request_options=request_options))

    async def delete_invoice(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Permanently delete a draft invoice. Only invoices in draft status can be deleted.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice deleted.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_invoice(id_, request_options=request_options))

    async def fetch_invoice(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Invoice:
        """Get full details of a specific invoice including status, line items, and payment information.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_invoice(id_, request_options=request_options))

    async def issue_invoice(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Invoice:
        """Transition a draft invoice to issued status, sending a notification to the customer with the payment link.
        Once issued, line items cannot be changed.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Invoice issued. short_url is now active.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.issue_invoice(id_, request_options=request_options))

    async def list_invoices(
        self,
        *,
        type_: Type3OrStr | None = None,
        payment_id: str | None = None,
        customer_id: str | None = None,
        subscription_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InvoicesResponse:
        """Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100
        per call.

        Args:
            type_: Filter by invoice type.
            payment_id: Filter invoices by the payment ID used to pay them.
            customer_id: Filter by customer ID (cust_*).
            subscription_id: Fetch all invoices generated for a subscription (sub_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of invoices.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_invoices(
                type_=type_,
                payment_id=payment_id,
                customer_id=customer_id,
                subscription_id=subscription_id,
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    async def send_invoice_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> InvoicesNotifyByResponse:
        """Send or resend the invoice payment link to the customer via SMS or email.

        Args:
            id_: Invoice ID (inv_*).
            medium: Notification channel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Notification sent.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.send_invoice_notification(id_, medium, request_options=request_options)
        )

    async def update_invoice(
        self,
        id_: str,
        body: InvoicesRequest1 | InvoicesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Invoice:
        """Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment,
        receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.

        Args:
            id_: Invoice ID (inv_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated invoice.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_invoice(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncInvoicesWithRawResponse:
        return self._with_raw_response


class InvoicesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_invoice(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, CancelInvoiceErrorBody]:
        """Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices/{id}/cancel"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Invoice],
            error_mapper=cancel_invoice_error_mapper,
            request_options=request_options,
        )

    def create_invoice(
        self, body: InvoicesRequest | InvoicesRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, CreateInvoiceErrorBody]:
        """Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple
        payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer.
        Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InvoicesRequest | InvoicesRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Invoice],
            error_mapper=create_invoice_error_mapper,
            request_options=request_options,
        )

    def delete_invoice(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteInvoiceErrorBody]:
        """Permanently delete a draft invoice. Only invoices in draft status can be deleted.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Any],
            error_mapper=delete_invoice_error_mapper,
            request_options=request_options,
        )

    def fetch_invoice(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, FetchInvoiceErrorBody]:
        """Get full details of a specific invoice including status, line items, and payment information.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Invoice],
            error_mapper=fetch_invoice_error_mapper,
            request_options=request_options,
        )

    def issue_invoice(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, IssueInvoiceErrorBody]:
        """Transition a draft invoice to issued status, sending a notification to the customer with the payment link.
        Once issued, line items cannot be changed.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices/{id}/issue"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Invoice],
            error_mapper=issue_invoice_error_mapper,
            request_options=request_options,
        )

    def list_invoices(
        self,
        *,
        type_: Type3OrStr | None = None,
        payment_id: str | None = None,
        customer_id: str | None = None,
        subscription_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoicesResponse, ListInvoicesErrorBody]:
        """Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100
        per call.

        Args:
            type_: Filter by invoice type.
            payment_id: Filter invoices by the payment ID used to pay them.
            customer_id: Filter by customer ID (cust_*).
            subscription_id: Fetch all invoices generated for a subscription (sub_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/invoices"),
            query_params=[
                param[Type3OrStr | None]("type", type_),
                param[str | None]("payment_id", payment_id),
                param[str | None]("customer_id", customer_id),
                param[str | None]("subscription_id", subscription_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[InvoicesResponse],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )

    def send_invoice_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[InvoicesNotifyByResponse, SendInvoiceNotificationErrorBody]:
        """Send or resend the invoice payment link to the customer via SMS or email.

        Args:
            id_: Invoice ID (inv_*).
            medium: Notification channel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices/{id}/notify_by/{medium}"),
            path_params=[param[str]("id", id_), param[MediumOrStr]("medium", medium)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[InvoicesNotifyByResponse],
            error_mapper=send_invoice_notification_error_mapper,
            request_options=request_options,
        )

    def update_invoice(
        self,
        id_: str,
        body: InvoicesRequest1 | InvoicesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Invoice, UpdateInvoiceErrorBody]:
        """Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment,
        receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.

        Args:
            id_: Invoice ID (inv_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InvoicesRequest1 | InvoicesRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Invoice],
            error_mapper=update_invoice_error_mapper,
            request_options=request_options,
        )


class AsyncInvoicesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_invoice(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, CancelInvoiceErrorBody]:
        """Cancel a draft or issued invoice. Cancelled invoices cannot be paid and cannot be reinstated.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices/{id}/cancel"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Invoice],
            error_mapper=cancel_invoice_error_mapper,
            request_options=request_options,
        )

    async def create_invoice(
        self, body: InvoicesRequest | InvoicesRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, CreateInvoiceErrorBody]:
        """Create an invoice or payment page. Set type='invoice' for a formal invoice or type='link' for a simple
        payment page. The invoice is created in draft state; call POST /invoices/{id}/issue to send it to the customer.
        Cannot be used to create GST invoices (use the Dashboard for those). Maximum 50 line items per invoice.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InvoicesRequest | InvoicesRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Invoice],
            error_mapper=create_invoice_error_mapper,
            request_options=request_options,
        )

    async def delete_invoice(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteInvoiceErrorBody]:
        """Permanently delete a draft invoice. Only invoices in draft status can be deleted.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Any],
            error_mapper=delete_invoice_error_mapper,
            request_options=request_options,
        )

    async def fetch_invoice(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, FetchInvoiceErrorBody]:
        """Get full details of a specific invoice including status, line items, and payment information.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Invoice],
            error_mapper=fetch_invoice_error_mapper,
            request_options=request_options,
        )

    async def issue_invoice(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Invoice, IssueInvoiceErrorBody]:
        """Transition a draft invoice to issued status, sending a notification to the customer with the payment link.
        Once issued, line items cannot be changed.

        Args:
            id_: Invoice ID (inv_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices/{id}/issue"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Invoice],
            error_mapper=issue_invoice_error_mapper,
            request_options=request_options,
        )

    async def list_invoices(
        self,
        *,
        type_: Type3OrStr | None = None,
        payment_id: str | None = None,
        customer_id: str | None = None,
        subscription_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InvoicesResponse, ListInvoicesErrorBody]:
        """Retrieve a list of invoices. Filter by type, status, customer, payment, or subscription. Returns up to 100
        per call.

        Args:
            type_: Filter by invoice type.
            payment_id: Filter invoices by the payment ID used to pay them.
            customer_id: Filter by customer ID (cust_*).
            subscription_id: Fetch all invoices generated for a subscription (sub_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/invoices"),
            query_params=[
                param[Type3OrStr | None]("type", type_),
                param[str | None]("payment_id", payment_id),
                param[str | None]("customer_id", customer_id),
                param[str | None]("subscription_id", subscription_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[InvoicesResponse],
            error_mapper=list_invoices_error_mapper,
            request_options=request_options,
        )

    async def send_invoice_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[InvoicesNotifyByResponse, SendInvoiceNotificationErrorBody]:
        """Send or resend the invoice payment link to the customer via SMS or email.

        Args:
            id_: Invoice ID (inv_*).
            medium: Notification channel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/invoices/{id}/notify_by/{medium}"),
            path_params=[param[str]("id", id_), param[MediumOrStr]("medium", medium)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[InvoicesNotifyByResponse],
            error_mapper=send_invoice_notification_error_mapper,
            request_options=request_options,
        )

    async def update_invoice(
        self,
        id_: str,
        body: InvoicesRequest1 | InvoicesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Invoice, UpdateInvoiceErrorBody]:
        """Update invoice fields. Updatable fields depend on current status: draft=all fields; issued=partial_payment,
        receipt, comment, terms, notes, expire_by; paid/cancelled/expired=notes only.

        Args:
            id_: Invoice ID (inv_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/invoices/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InvoicesRequest1 | InvoicesRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Invoice],
            error_mapper=update_invoice_error_mapper,
            request_options=request_options,
        )
