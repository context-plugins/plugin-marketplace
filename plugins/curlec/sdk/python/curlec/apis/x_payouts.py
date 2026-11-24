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
from ..errors.approve_payout_error import ApprovePayoutErrorBody, approve_payout_error_mapper
from ..errors.cancel_payout_error import CancelPayoutErrorBody, cancel_payout_error_mapper
from ..errors.create_payout_error import CreatePayoutErrorBody, create_payout_error_mapper
from ..errors.fetch_payout_error import FetchPayoutErrorBody, fetch_payout_error_mapper
from ..errors.list_payouts_error import ListPayoutsErrorBody, list_payouts_error_mapper
from ..errors.reject_payout_error import RejectPayoutErrorBody, reject_payout_error_mapper
from ..models.payout import Payout
from ..models.payouts_approve_request import PayoutsApproveRequest, PayoutsApproveRequestDict
from ..models.payouts_reject_request import PayoutsRejectRequest, PayoutsRejectRequestDict
from ..models.payouts_request import PayoutsRequest, PayoutsRequestDict
from ..models.payouts_response import PayoutsResponse
from ..server.server import Server


class XPayouts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = XPayoutsWithRawResponse(client, server, auth)

    def approve_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Payout:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to approve.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout approved

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.approve_payout(payout_id, body=body, request_options=request_options))

    def cancel_payout(self, payout_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Payout:
        """Only payouts in 'queued' status can be cancelled.

        Args:
            payout_id: Unique identifier of the payout to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout cancelled

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.cancel_payout(payout_id, request_options=request_options))

    def create_payout(
        self,
        x_payout_idempotency: str,
        body: PayoutsRequest | PayoutsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Payout:
        """Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite
        payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved
        via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15,
        2025. Never generate a new idempotency key while a payout is in 'processing' state.

        Args:
            x_payout_idempotency: UUID v4 idempotency key. Mandatory since March 15, 2025.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_payout(x_payout_idempotency, body, request_options=request_options)
        )

    def fetch_payout(self, payout_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Payout:
        """Fetch details of a specific payout by its ID.

        Args:
            payout_id: Unique identifier of the payout (e.g. ``pout_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.fetch_payout(payout_id, request_options=request_options))

    def list_payouts(
        self,
        account_number: str,
        *,
        contact_id: str | None = None,
        fund_account_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 25,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PayoutsResponse:
        """List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.

        Args:
            account_number: The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings →
                Banking). Required to scope results to a specific account.
            contact_id: Filter payouts by the contact ID of the recipient.
            fund_account_id: Filter payouts by fund account ID.
            from_: Unix timestamp. Only payouts created from this timestamp onwards are returned.
            to: Unix timestamp. Only payouts created before this timestamp are returned.
            count: Number of payouts to return. Default: 10. Maximum: 100.
            skip: Number of payouts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payouts

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_payouts(
                account_number,
                contact_id=contact_id,
                fund_account_id=fund_account_id,
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    def reject_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Payout:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to reject.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout rejected

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.reject_payout(payout_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> XPayoutsWithRawResponse:
        return self._with_raw_response


class AsyncXPayouts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncXPayoutsWithRawResponse(client, server, auth)

    async def approve_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Payout:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to approve.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout approved

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.approve_payout(payout_id, body=body, request_options=request_options)
        )

    async def cancel_payout(
        self, payout_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Payout:
        """Only payouts in 'queued' status can be cancelled.

        Args:
            payout_id: Unique identifier of the payout to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout cancelled

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.cancel_payout(payout_id, request_options=request_options))

    async def create_payout(
        self,
        x_payout_idempotency: str,
        body: PayoutsRequest | PayoutsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Payout:
        """Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite
        payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved
        via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15,
        2025. Never generate a new idempotency key while a payout is in 'processing' state.

        Args:
            x_payout_idempotency: UUID v4 idempotency key. Mandatory since March 15, 2025.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_payout(x_payout_idempotency, body, request_options=request_options)
        )

    async def fetch_payout(self, payout_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Payout:
        """Fetch details of a specific payout by its ID.

        Args:
            payout_id: Unique identifier of the payout (e.g. ``pout_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.fetch_payout(payout_id, request_options=request_options))

    async def list_payouts(
        self,
        account_number: str,
        *,
        contact_id: str | None = None,
        fund_account_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 25,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PayoutsResponse:
        """List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.

        Args:
            account_number: The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings →
                Banking). Required to scope results to a specific account.
            contact_id: Filter payouts by the contact ID of the recipient.
            fund_account_id: Filter payouts by fund account ID.
            from_: Unix timestamp. Only payouts created from this timestamp onwards are returned.
            to: Unix timestamp. Only payouts created before this timestamp are returned.
            count: Number of payouts to return. Default: 10. Maximum: 100.
            skip: Number of payouts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payouts

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payouts(
                account_number,
                contact_id=contact_id,
                fund_account_id=fund_account_id,
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                request_options=request_options,
            ),
        )

    async def reject_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Payout:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to reject.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payout rejected

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.reject_payout(payout_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncXPayoutsWithRawResponse:
        return self._with_raw_response


class XPayoutsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def approve_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Payout, ApprovePayoutErrorBody]:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to approve.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts/{payout_id}/approve"),
            path_params=[param[str]("payout_id", payout_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutsApproveRequest | PayoutsApproveRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Payout],
            error_mapper=approve_payout_error_mapper,
            request_options=request_options,
        )

    def cancel_payout(
        self, payout_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Payout, CancelPayoutErrorBody]:
        """Only payouts in 'queued' status can be cancelled.

        Args:
            payout_id: Unique identifier of the payout to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts/{payout_id}/cancel"),
            path_params=[param[str]("payout_id", payout_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Payout],
            error_mapper=cancel_payout_error_mapper,
            request_options=request_options,
        )

    def create_payout(
        self,
        x_payout_idempotency: str,
        body: PayoutsRequest | PayoutsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Payout, CreatePayoutErrorBody]:
        """Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite
        payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved
        via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15,
        2025. Never generate a new idempotency key while a payout is in 'processing' state.

        Args:
            x_payout_idempotency: UUID v4 idempotency key. Mandatory since March 15, 2025.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts"),
            headers=[param[str]("X-Payout-Idempotency", x_payout_idempotency), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutsRequest | PayoutsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Payout],
            error_mapper=create_payout_error_mapper,
            request_options=request_options,
        )

    def fetch_payout(
        self, payout_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Payout, FetchPayoutErrorBody]:
        """Fetch details of a specific payout by its ID.

        Args:
            payout_id: Unique identifier of the payout (e.g. ``pout_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payouts/{payout_id}"),
            path_params=[param[str]("payout_id", payout_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Payout],
            error_mapper=fetch_payout_error_mapper,
            request_options=request_options,
        )

    def list_payouts(
        self,
        account_number: str,
        *,
        contact_id: str | None = None,
        fund_account_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 25,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutsResponse, ListPayoutsErrorBody]:
        """List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.

        Args:
            account_number: The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings →
                Banking). Required to scope results to a specific account.
            contact_id: Filter payouts by the contact ID of the recipient.
            fund_account_id: Filter payouts by fund account ID.
            from_: Unix timestamp. Only payouts created from this timestamp onwards are returned.
            to: Unix timestamp. Only payouts created before this timestamp are returned.
            count: Number of payouts to return. Default: 10. Maximum: 100.
            skip: Number of payouts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payouts"),
            query_params=[
                param[str]("account_number", account_number),
                param[str | None]("contact_id", contact_id),
                param[str | None]("fund_account_id", fund_account_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PayoutsResponse],
            error_mapper=list_payouts_error_mapper,
            request_options=request_options,
        )

    def reject_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Payout, RejectPayoutErrorBody]:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to reject.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts/{payout_id}/reject"),
            path_params=[param[str]("payout_id", payout_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutsRejectRequest | PayoutsRejectRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Payout],
            error_mapper=reject_payout_error_mapper,
            request_options=request_options,
        )


class AsyncXPayoutsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def approve_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsApproveRequest | PayoutsApproveRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Payout, ApprovePayoutErrorBody]:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to approve.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts/{payout_id}/approve"),
            path_params=[param[str]("payout_id", payout_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutsApproveRequest | PayoutsApproveRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Payout],
            error_mapper=approve_payout_error_mapper,
            request_options=request_options,
        )

    async def cancel_payout(
        self, payout_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Payout, CancelPayoutErrorBody]:
        """Only payouts in 'queued' status can be cancelled.

        Args:
            payout_id: Unique identifier of the payout to cancel.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts/{payout_id}/cancel"),
            path_params=[param[str]("payout_id", payout_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Payout],
            error_mapper=cancel_payout_error_mapper,
            request_options=request_options,
        )

    async def create_payout(
        self,
        x_payout_idempotency: str,
        body: PayoutsRequest | PayoutsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Payout, CreatePayoutErrorBody]:
        """Disburse funds via NEFT, RTGS, IMPS, UPI, or card. Supports standard payouts (fund_account_id), composite
        payouts (contact + fund account inline), card payouts (PCI DSS required), and mobile number payouts (resolved
        via NPCI mapper). Idempotency header X-Payout-Idempotency (UUID v4, 4–36 chars) is mandatory since March 15,
        2025. Never generate a new idempotency key while a payout is in 'processing' state.

        Args:
            x_payout_idempotency: UUID v4 idempotency key. Mandatory since March 15, 2025.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts"),
            headers=[param[str]("X-Payout-Idempotency", x_payout_idempotency), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutsRequest | PayoutsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Payout],
            error_mapper=create_payout_error_mapper,
            request_options=request_options,
        )

    async def fetch_payout(
        self, payout_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Payout, FetchPayoutErrorBody]:
        """Fetch details of a specific payout by its ID.

        Args:
            payout_id: Unique identifier of the payout (e.g. ``pout_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payouts/{payout_id}"),
            path_params=[param[str]("payout_id", payout_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Payout],
            error_mapper=fetch_payout_error_mapper,
            request_options=request_options,
        )

    async def list_payouts(
        self,
        account_number: str,
        *,
        contact_id: str | None = None,
        fund_account_id: str | None = None,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 25,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutsResponse, ListPayoutsErrorBody]:
        """List payouts for a given RazorpayX account. Filter by contact, fund account, date range, or status.

        Args:
            account_number: The RazorpayX account number (Customer Identifier from Dashboard → My Account & Settings →
                Banking). Required to scope results to a specific account.
            contact_id: Filter payouts by the contact ID of the recipient.
            fund_account_id: Filter payouts by fund account ID.
            from_: Unix timestamp. Only payouts created from this timestamp onwards are returned.
            to: Unix timestamp. Only payouts created before this timestamp are returned.
            count: Number of payouts to return. Default: 10. Maximum: 100.
            skip: Number of payouts to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payouts"),
            query_params=[
                param[str]("account_number", account_number),
                param[str | None]("contact_id", contact_id),
                param[str | None]("fund_account_id", fund_account_id),
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PayoutsResponse],
            error_mapper=list_payouts_error_mapper,
            request_options=request_options,
        )

    async def reject_payout(
        self,
        payout_id: str,
        *,
        body: PayoutsRejectRequest | PayoutsRejectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Payout, RejectPayoutErrorBody]:
        """Requires Payouts Approval workflow enabled and Technology Partner status with OAuth.

        Args:
            payout_id: Unique identifier of the payout to reject.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payouts/{payout_id}/reject"),
            path_params=[param[str]("payout_id", payout_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PayoutsRejectRequest | PayoutsRejectRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Payout],
            error_mapper=reject_payout_error_mapper,
            request_options=request_options,
        )
