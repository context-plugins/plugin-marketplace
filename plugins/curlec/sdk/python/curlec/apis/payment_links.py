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
from ..errors.cancel_payment_link_error import CancelPaymentLinkErrorBody, cancel_payment_link_error_mapper
from ..errors.create_payment_link_error import CreatePaymentLinkErrorBody, create_payment_link_error_mapper
from ..errors.fetch_all_payment_links_error import FetchAllPaymentLinksErrorBody, fetch_all_payment_links_error_mapper
from ..errors.fetch_payment_link_error import FetchPaymentLinkErrorBody, fetch_payment_link_error_mapper
from ..errors.resend_payment_link_notification_error import (
    ResendPaymentLinkNotificationErrorBody,
    resend_payment_link_notification_error_mapper,
)
from ..errors.update_payment_link_error import UpdatePaymentLinkErrorBody, update_payment_link_error_mapper
from ..models.enums.medium import MediumOrStr
from ..models.payment_link import PaymentLink
from ..models.payment_links_notify_by_response import PaymentLinksNotifyByResponse
from ..models.payment_links_request import PaymentLinksRequest, PaymentLinksRequestDict
from ..models.payment_links_request1 import PaymentLinksRequest1, PaymentLinksRequest1Dict
from ..models.payment_links_response import PaymentLinksResponse
from ..server.server import Server


class PaymentLinks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PaymentLinksWithRawResponse(client, server, auth)

    def cancel_payment_link(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLink:
        """Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already
        expired links cannot be cancelled.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment link cancelled. Status changes to 'cancelled'.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_payment_link(id_, request_options=request_options))

    def create_payment_link(
        self,
        body: PaymentLinksRequest | PaymentLinksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentLink:
        """Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment
        methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are
        not supported for UPI links. Links expire after 6 months by default.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment link created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_payment_link(body, request_options=request_options))

    def fetch_all_payment_links(
        self,
        *,
        payment_id: str | None = None,
        reference_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentLinksResponse:
        """Retrieve all payment links. Filter by payment_id or reference_id to narrow results.

        Args:
            payment_id: Filter by associated payment ID.
            reference_id: Filter by your custom reference number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payment links.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_payment_links(
                payment_id=payment_id, reference_id=reference_id, request_options=request_options
            ),
        )

    def fetch_payment_link(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> PaymentLink:
        """Retrieve full details of a specific payment link.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment link details.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_payment_link(id_, request_options=request_options))

    def resend_payment_link_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaymentLinksNotifyByResponse:
        """Send or resend a payment link notification to the customer via SMS or email.

        Args:
            id_: Payment Link ID (plink_*).
            medium: Notification medium.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Notification sent.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.resend_payment_link_notification(id_, medium, request_options=request_options)
        )

    def update_payment_link(
        self,
        id_: str,
        body: PaymentLinksRequest1 | PaymentLinksRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentLink:
        """Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid'
        status.

        Args:
            id_: Payment Link ID (plink_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated payment link.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_payment_link(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PaymentLinksWithRawResponse:
        return self._with_raw_response


class AsyncPaymentLinks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPaymentLinksWithRawResponse(client, server, auth)

    async def cancel_payment_link(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentLink:
        """Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already
        expired links cannot be cancelled.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment link cancelled. Status changes to 'cancelled'.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.cancel_payment_link(id_, request_options=request_options))

    async def create_payment_link(
        self,
        body: PaymentLinksRequest | PaymentLinksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentLink:
        """Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment
        methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are
        not supported for UPI links. Links expire after 6 months by default.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment link created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_payment_link(body, request_options=request_options))

    async def fetch_all_payment_links(
        self,
        *,
        payment_id: str | None = None,
        reference_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentLinksResponse:
        """Retrieve all payment links. Filter by payment_id or reference_id to narrow results.

        Args:
            payment_id: Filter by associated payment ID.
            reference_id: Filter by your custom reference number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payment links.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_payment_links(
                payment_id=payment_id, reference_id=reference_id, request_options=request_options
            ),
        )

    async def fetch_payment_link(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentLink:
        """Retrieve full details of a specific payment link.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment link details.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_payment_link(id_, request_options=request_options))

    async def resend_payment_link_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentLinksNotifyByResponse:
        """Send or resend a payment link notification to the customer via SMS or email.

        Args:
            id_: Payment Link ID (plink_*).
            medium: Notification medium.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Notification sent.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.resend_payment_link_notification(id_, medium, request_options=request_options)
        )

    async def update_payment_link(
        self,
        id_: str,
        body: PaymentLinksRequest1 | PaymentLinksRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentLink:
        """Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid'
        status.

        Args:
            id_: Payment Link ID (plink_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated payment link.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_payment_link(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPaymentLinksWithRawResponse:
        return self._with_raw_response


class PaymentLinksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_payment_link(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentLink, CancelPaymentLinkErrorBody]:
        """Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already
        expired links cannot be cancelled.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payment_links/{id}/cancel"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentLink],
            error_mapper=cancel_payment_link_error_mapper,
            request_options=request_options,
        )

    def create_payment_link(
        self,
        body: PaymentLinksRequest | PaymentLinksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentLink, CreatePaymentLinkErrorBody]:
        """Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment
        methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are
        not supported for UPI links. Links expire after 6 months by default.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payment_links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentLinksRequest | PaymentLinksRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentLink],
            error_mapper=create_payment_link_error_mapper,
            request_options=request_options,
        )

    def fetch_all_payment_links(
        self,
        *,
        payment_id: str | None = None,
        reference_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentLinksResponse, FetchAllPaymentLinksErrorBody]:
        """Retrieve all payment links. Filter by payment_id or reference_id to narrow results.

        Args:
            payment_id: Filter by associated payment ID.
            reference_id: Filter by your custom reference number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payment_links"),
            query_params=[param[str | None]("payment_id", payment_id), param[str | None]("reference_id", reference_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentLinksResponse],
            error_mapper=fetch_all_payment_links_error_mapper,
            request_options=request_options,
        )

    def fetch_payment_link(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentLink, FetchPaymentLinkErrorBody]:
        """Retrieve full details of a specific payment link.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payment_links/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentLink],
            error_mapper=fetch_payment_link_error_mapper,
            request_options=request_options,
        )

    def resend_payment_link_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentLinksNotifyByResponse, ResendPaymentLinkNotificationErrorBody]:
        """Send or resend a payment link notification to the customer via SMS or email.

        Args:
            id_: Payment Link ID (plink_*).
            medium: Notification medium.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payment_links/{id}/notify_by/{medium}"),
            path_params=[param[str]("id", id_), param[MediumOrStr]("medium", medium)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentLinksNotifyByResponse],
            error_mapper=resend_payment_link_notification_error_mapper,
            request_options=request_options,
        )

    def update_payment_link(
        self,
        id_: str,
        body: PaymentLinksRequest1 | PaymentLinksRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentLink, UpdatePaymentLinkErrorBody]:
        """Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid'
        status.

        Args:
            id_: Payment Link ID (plink_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/payment_links/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentLinksRequest1 | PaymentLinksRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentLink],
            error_mapper=update_payment_link_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentLinksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_payment_link(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentLink, CancelPaymentLinkErrorBody]:
        """Cancel a payment link. Only links in 'created' status can be cancelled. Paid, partially paid, and already
        expired links cannot be cancelled.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payment_links/{id}/cancel"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentLink],
            error_mapper=cancel_payment_link_error_mapper,
            request_options=request_options,
        )

    async def create_payment_link(
        self,
        body: PaymentLinksRequest | PaymentLinksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentLink, CreatePaymentLinkErrorBody]:
        """Create a shareable payment link to collect payments via SMS and email. Supports standard links (all payment
        methods) and UPI-only links (set upi_link=true). UPI links are not available in test mode. Partial payments are
        not supported for UPI links. Links expire after 6 months by default.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payment_links"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentLinksRequest | PaymentLinksRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentLink],
            error_mapper=create_payment_link_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_payment_links(
        self,
        *,
        payment_id: str | None = None,
        reference_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentLinksResponse, FetchAllPaymentLinksErrorBody]:
        """Retrieve all payment links. Filter by payment_id or reference_id to narrow results.

        Args:
            payment_id: Filter by associated payment ID.
            reference_id: Filter by your custom reference number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payment_links"),
            query_params=[param[str | None]("payment_id", payment_id), param[str | None]("reference_id", reference_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentLinksResponse],
            error_mapper=fetch_all_payment_links_error_mapper,
            request_options=request_options,
        )

    async def fetch_payment_link(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentLink, FetchPaymentLinkErrorBody]:
        """Retrieve full details of a specific payment link.

        Args:
            id_: Payment Link ID (plink_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payment_links/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentLink],
            error_mapper=fetch_payment_link_error_mapper,
            request_options=request_options,
        )

    async def resend_payment_link_notification(
        self, id_: str, medium: MediumOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentLinksNotifyByResponse, ResendPaymentLinkNotificationErrorBody]:
        """Send or resend a payment link notification to the customer via SMS or email.

        Args:
            id_: Payment Link ID (plink_*).
            medium: Notification medium.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payment_links/{id}/notify_by/{medium}"),
            path_params=[param[str]("id", id_), param[MediumOrStr]("medium", medium)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentLinksNotifyByResponse],
            error_mapper=resend_payment_link_notification_error_mapper,
            request_options=request_options,
        )

    async def update_payment_link(
        self,
        id_: str,
        body: PaymentLinksRequest1 | PaymentLinksRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentLink, UpdatePaymentLinkErrorBody]:
        """Update an existing payment link. Updates are only allowed when the link is in 'created' or 'partially_paid'
        status.

        Args:
            id_: Payment Link ID (plink_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/payment_links/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentLinksRequest1 | PaymentLinksRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentLink],
            error_mapper=update_payment_link_error_mapper,
            request_options=request_options,
        )
