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
from ..errors.create_direct_transfer_error import CreateDirectTransferErrorBody, create_direct_transfer_error_mapper
from ..errors.create_transfers_from_payment_error import (
    CreateTransfersFromPaymentErrorBody,
    create_transfers_from_payment_error_mapper,
)
from ..errors.fetch_transfer_error import FetchTransferErrorBody, fetch_transfer_error_mapper
from ..errors.fetch_transfers_for_payment_error import (
    FetchTransfersForPaymentErrorBody,
    fetch_transfers_for_payment_error_mapper,
)
from ..errors.list_reversals_error import ListReversalsErrorBody, list_reversals_error_mapper
from ..errors.list_transfers_error import ListTransfersErrorBody, list_transfers_error_mapper
from ..errors.modify_transfer_settlement_hold_error import (
    ModifyTransferSettlementHoldErrorBody,
    modify_transfer_settlement_hold_error_mapper,
)
from ..errors.reverse_transfer_error import ReverseTransferErrorBody, reverse_transfer_error_mapper
from ..models.enums.expand_razorpay_transfers_api import ExpandRazorpayTransfersApiOrStr
from ..models.payments_transfers_request import PaymentsTransfersRequest, PaymentsTransfersRequestDict
from ..models.payments_transfers_response import PaymentsTransfersResponse
from ..models.reversal import Reversal
from ..models.transfer_razorpay_transfers_api import TransferRazorpayTransfersApi
from ..models.transfers_request import TransfersRequest, TransfersRequestDict
from ..models.transfers_request1 import TransfersRequest1, TransfersRequest1Dict
from ..models.transfers_response import TransfersResponse
from ..models.transfers_reversals_request import TransfersReversalsRequest, TransfersReversalsRequestDict
from ..models.transfers_reversals_response import TransfersReversalsResponse
from ..server.server import Server


class Transfers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransfersWithRawResponse(client, server, auth)

    def create_direct_transfer(
        self,
        body: TransfersRequest | TransfersRequestDict,
        *,
        x_transfer_idempotency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransferRazorpayTransfersApi:
        """Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct
        Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header
        (unique to direct transfers).

        Args:
            body: The request body.
            x_transfer_idempotency: Idempotency key for direct transfers. If provided, retrying with the same key within
                24 hours returns the original transfer instead of creating a duplicate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_direct_transfer(
                body, x_transfer_idempotency=x_transfer_idempotency, request_options=request_options
            ),
        )

    def create_transfers_from_payment(
        self,
        id_: str,
        body: PaymentsTransfersRequest | PaymentsTransfersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentsTransfersResponse:
        """Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred
        to the recipient. INR only, minimum ₹100 per transfer.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfers created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_transfers_from_payment(id_, body, request_options=request_options))

    def fetch_transfer(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TransferRazorpayTransfersApi:
        """Retrieve details of a specific transfer by ID.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_transfer(id_, request_options=request_options))

    def fetch_transfers_for_payment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PaymentsTransfersResponse:
        """Retrieve all transfers created from a specific payment.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of transfers for the payment.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_transfers_for_payment(id_, request_options=request_options))

    def list_reversals(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TransfersReversalsResponse:
        """Retrieve all reversals for a specific transfer.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of reversals.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.list_reversals(id_, request_options=request_options))

    def list_transfers(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        recipient_settlement_id: str | None = None,
        expand: ExpandRazorpayTransfersApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransfersResponse:
        """Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a
        specific settlement. Use expand[]=recipient_settlement to include settlement details.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            recipient_settlement_id: Filter transfers by settlement ID in the Linked Account.
            expand: Expand recipient_settlement to include full settlement object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of transfers.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_transfers(
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                recipient_settlement_id=recipient_settlement_id,
                expand=expand,
                request_options=request_options,
            ),
        )

    def modify_transfer_settlement_hold(
        self,
        id_: str,
        body: TransfersRequest1 | TransfersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TransferRazorpayTransfersApi:
        """Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement,
        on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer settlement hold updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.modify_transfer_settlement_hold(id_, body, request_options=request_options)
        )

    def reverse_transfer(
        self,
        id_: str,
        *,
        body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Reversal:
        """Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals
        per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reversal created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.reverse_transfer(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TransfersWithRawResponse:
        return self._with_raw_response


class AsyncTransfers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransfersWithRawResponse(client, server, auth)

    async def create_direct_transfer(
        self,
        body: TransfersRequest | TransfersRequestDict,
        *,
        x_transfer_idempotency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransferRazorpayTransfersApi:
        """Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct
        Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header
        (unique to direct transfers).

        Args:
            body: The request body.
            x_transfer_idempotency: Idempotency key for direct transfers. If provided, retrying with the same key within
                24 hours returns the original transfer instead of creating a duplicate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_direct_transfer(
                body, x_transfer_idempotency=x_transfer_idempotency, request_options=request_options
            ),
        )

    async def create_transfers_from_payment(
        self,
        id_: str,
        body: PaymentsTransfersRequest | PaymentsTransfersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentsTransfersResponse:
        """Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred
        to the recipient. INR only, minimum ₹100 per transfer.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfers created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_transfers_from_payment(id_, body, request_options=request_options)
        )

    async def fetch_transfer(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TransferRazorpayTransfersApi:
        """Retrieve details of a specific transfer by ID.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_transfer(id_, request_options=request_options))

    async def fetch_transfers_for_payment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentsTransfersResponse:
        """Retrieve all transfers created from a specific payment.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of transfers for the payment.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_transfers_for_payment(id_, request_options=request_options))

    async def list_reversals(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TransfersReversalsResponse:
        """Retrieve all reversals for a specific transfer.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of reversals.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.list_reversals(id_, request_options=request_options))

    async def list_transfers(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        recipient_settlement_id: str | None = None,
        expand: ExpandRazorpayTransfersApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransfersResponse:
        """Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a
        specific settlement. Use expand[]=recipient_settlement to include settlement details.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            recipient_settlement_id: Filter transfers by settlement ID in the Linked Account.
            expand: Expand recipient_settlement to include full settlement object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of transfers.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_transfers(
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                recipient_settlement_id=recipient_settlement_id,
                expand=expand,
                request_options=request_options,
            ),
        )

    async def modify_transfer_settlement_hold(
        self,
        id_: str,
        body: TransfersRequest1 | TransfersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TransferRazorpayTransfersApi:
        """Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement,
        on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Transfer settlement hold updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.modify_transfer_settlement_hold(id_, body, request_options=request_options)
        )

    async def reverse_transfer(
        self,
        id_: str,
        *,
        body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Reversal:
        """Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals
        per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reversal created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.reverse_transfer(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTransfersWithRawResponse:
        return self._with_raw_response


class TransfersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_direct_transfer(
        self,
        body: TransfersRequest | TransfersRequestDict,
        *,
        x_transfer_idempotency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransferRazorpayTransfersApi, CreateDirectTransferErrorBody]:
        """Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct
        Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header
        (unique to direct transfers).

        Args:
            body: The request body.
            x_transfer_idempotency: Idempotency key for direct transfers. If provided, retrying with the same key within
                24 hours returns the original transfer instead of creating a duplicate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transfers"),
            headers=[
                param[str | None]("X-Transfer-Idempotency", x_transfer_idempotency),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[TransfersRequest | TransfersRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[TransferRazorpayTransfersApi],
            error_mapper=create_direct_transfer_error_mapper,
            request_options=request_options,
        )

    def create_transfers_from_payment(
        self,
        id_: str,
        body: PaymentsTransfersRequest | PaymentsTransfersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsTransfersResponse, CreateTransfersFromPaymentErrorBody]:
        """Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred
        to the recipient. INR only, minimum ₹100 per transfer.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/{id}/transfers"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsTransfersRequest | PaymentsTransfersRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsTransfersResponse],
            error_mapper=create_transfers_from_payment_error_mapper,
            request_options=request_options,
        )

    def fetch_transfer(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TransferRazorpayTransfersApi, FetchTransferErrorBody]:
        """Retrieve details of a specific transfer by ID.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transfers/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[TransferRazorpayTransfersApi],
            error_mapper=fetch_transfer_error_mapper,
            request_options=request_options,
        )

    def fetch_transfers_for_payment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentsTransfersResponse, FetchTransfersForPaymentErrorBody]:
        """Retrieve all transfers created from a specific payment.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{id}/transfers"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsTransfersResponse],
            error_mapper=fetch_transfers_for_payment_error_mapper,
            request_options=request_options,
        )

    def list_reversals(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TransfersReversalsResponse, ListReversalsErrorBody]:
        """Retrieve all reversals for a specific transfer.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transfers/{id}/reversals"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[TransfersReversalsResponse],
            error_mapper=list_reversals_error_mapper,
            request_options=request_options,
        )

    def list_transfers(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        recipient_settlement_id: str | None = None,
        expand: ExpandRazorpayTransfersApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransfersResponse, ListTransfersErrorBody]:
        """Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a
        specific settlement. Use expand[]=recipient_settlement to include settlement details.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            recipient_settlement_id: Filter transfers by settlement ID in the Linked Account.
            expand: Expand recipient_settlement to include full settlement object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transfers"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[str | None]("recipient_settlement_id", recipient_settlement_id),
                param[ExpandRazorpayTransfersApiOrStr | None]("expand[]", expand),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[TransfersResponse],
            error_mapper=list_transfers_error_mapper,
            request_options=request_options,
        )

    def modify_transfer_settlement_hold(
        self,
        id_: str,
        body: TransfersRequest1 | TransfersRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TransferRazorpayTransfersApi, ModifyTransferSettlementHoldErrorBody]:
        """Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement,
        on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/transfers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransfersRequest1 | TransfersRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[TransferRazorpayTransfersApi],
            error_mapper=modify_transfer_settlement_hold_error_mapper,
            request_options=request_options,
        )

    def reverse_transfer(
        self,
        id_: str,
        *,
        body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Reversal, ReverseTransferErrorBody]:
        """Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals
        per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transfers/{id}/reversals"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransfersReversalsRequest | TransfersReversalsRequestDict | None](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Reversal],
            error_mapper=reverse_transfer_error_mapper,
            request_options=request_options,
        )


class AsyncTransfersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_direct_transfer(
        self,
        body: TransfersRequest | TransfersRequestDict,
        *,
        x_transfer_idempotency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransferRazorpayTransfersApi, CreateDirectTransferErrorBody]:
        """Create an on-demand direct transfer from the merchant account to a Linked Account. Requires the Direct
        Transfer feature to be enabled on the account. Supports idempotency via the X-Transfer-Idempotency header
        (unique to direct transfers).

        Args:
            body: The request body.
            x_transfer_idempotency: Idempotency key for direct transfers. If provided, retrying with the same key within
                24 hours returns the original transfer instead of creating a duplicate.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transfers"),
            headers=[
                param[str | None]("X-Transfer-Idempotency", x_transfer_idempotency),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[TransfersRequest | TransfersRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[TransferRazorpayTransfersApi],
            error_mapper=create_direct_transfer_error_mapper,
            request_options=request_options,
        )

    async def create_transfers_from_payment(
        self,
        id_: str,
        body: PaymentsTransfersRequest | PaymentsTransfersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsTransfersResponse, CreateTransfersFromPaymentErrorBody]:
        """Split a captured payment to one or more Linked Accounts. Amount is deducted from the payment and transferred
        to the recipient. INR only, minimum ₹100 per transfer.

        Args:
            id_: Payment ID (pay_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/{id}/transfers"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsTransfersRequest | PaymentsTransfersRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsTransfersResponse],
            error_mapper=create_transfers_from_payment_error_mapper,
            request_options=request_options,
        )

    async def fetch_transfer(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TransferRazorpayTransfersApi, FetchTransferErrorBody]:
        """Retrieve details of a specific transfer by ID.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transfers/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[TransferRazorpayTransfersApi],
            error_mapper=fetch_transfer_error_mapper,
            request_options=request_options,
        )

    async def fetch_transfers_for_payment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentsTransfersResponse, FetchTransfersForPaymentErrorBody]:
        """Retrieve all transfers created from a specific payment.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{id}/transfers"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsTransfersResponse],
            error_mapper=fetch_transfers_for_payment_error_mapper,
            request_options=request_options,
        )

    async def list_reversals(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TransfersReversalsResponse, ListReversalsErrorBody]:
        """Retrieve all reversals for a specific transfer.

        Args:
            id_: Transfer ID (trf_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transfers/{id}/reversals"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[TransfersReversalsResponse],
            error_mapper=list_reversals_error_mapper,
            request_options=request_options,
        )

    async def list_transfers(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        recipient_settlement_id: str | None = None,
        expand: ExpandRazorpayTransfersApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransfersResponse, ListTransfersErrorBody]:
        """Retrieve a paginated list of transfers. Filter by recipient_settlement_id to fetch transfers included in a
        specific settlement. Use expand[]=recipient_settlement to include settlement details.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            recipient_settlement_id: Filter transfers by settlement ID in the Linked Account.
            expand: Expand recipient_settlement to include full settlement object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/transfers"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[str | None]("recipient_settlement_id", recipient_settlement_id),
                param[ExpandRazorpayTransfersApiOrStr | None]("expand[]", expand),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[TransfersResponse],
            error_mapper=list_transfers_error_mapper,
            request_options=request_options,
        )

    async def modify_transfer_settlement_hold(
        self,
        id_: str,
        body: TransfersRequest1 | TransfersRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TransferRazorpayTransfersApi, ModifyTransferSettlementHoldErrorBody]:
        """Put a transfer's settlement on hold or release an existing hold. Use on_hold=true to hold settlement,
        on_hold=false to release. on_hold_until sets a future timestamp for automatic hold release.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/transfers/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransfersRequest1 | TransfersRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[TransferRazorpayTransfersApi],
            error_mapper=modify_transfer_settlement_hold_error_mapper,
            request_options=request_options,
        )

    async def reverse_transfer(
        self,
        id_: str,
        *,
        body: TransfersReversalsRequest | TransfersReversalsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Reversal, ReverseTransferErrorBody]:
        """Move funds from a Linked Account back to the merchant. Partial reversals are supported. Multiple reversals
        per transfer are allowed as long as the total reversed amount does not exceed the transfer amount.

        Args:
            id_: Transfer ID (trf_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transfers/{id}/reversals"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransfersReversalsRequest | TransfersReversalsRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Reversal],
            error_mapper=reverse_transfer_error_mapper,
            request_options=request_options,
        )
