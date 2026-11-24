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
from ..errors.add_allowed_payer_error import AddAllowedPayerErrorBody, add_allowed_payer_error_mapper
from ..errors.add_vpa_receiver_error import AddVpaReceiverErrorBody, add_vpa_receiver_error_mapper
from ..errors.close_virtual_account_error import CloseVirtualAccountErrorBody, close_virtual_account_error_mapper
from ..errors.create_virtual_account_error import CreateVirtualAccountErrorBody, create_virtual_account_error_mapper
from ..errors.delete_allowed_payer_error import DeleteAllowedPayerErrorBody, delete_allowed_payer_error_mapper
from ..errors.fetch_bank_transfer_error import FetchBankTransferErrorBody, fetch_bank_transfer_error_mapper
from ..errors.fetch_virtual_account_error import FetchVirtualAccountErrorBody, fetch_virtual_account_error_mapper
from ..errors.fetch_virtual_account_payments_error import (
    FetchVirtualAccountPaymentsErrorBody,
    fetch_virtual_account_payments_error_mapper,
)
from ..errors.list_virtual_accounts_error import ListVirtualAccountsErrorBody, list_virtual_accounts_error_mapper
from ..errors.update_virtual_account_error import UpdateVirtualAccountErrorBody, update_virtual_account_error_mapper
from ..models.bank_transfer import BankTransfer
from ..models.virtual_account import VirtualAccount
from ..models.virtual_accounts_allowed_payers_request import (
    VirtualAccountsAllowedPayersRequest,
    VirtualAccountsAllowedPayersRequestDict,
)
from ..models.virtual_accounts_close_request import VirtualAccountsCloseRequest, VirtualAccountsCloseRequestDict
from ..models.virtual_accounts_payments_response import VirtualAccountsPaymentsResponse
from ..models.virtual_accounts_receivers_request import (
    VirtualAccountsReceiversRequest,
    VirtualAccountsReceiversRequestDict,
)
from ..models.virtual_accounts_request import VirtualAccountsRequest, VirtualAccountsRequestDict
from ..models.virtual_accounts_request1 import VirtualAccountsRequest1, VirtualAccountsRequest1Dict
from ..models.virtual_accounts_response import VirtualAccountsResponse
from ..server.server import Server


class VirtualAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VirtualAccountsWithRawResponse(client, server, auth)

    def add_allowed_payer(
        self,
        va_id: str,
        body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party
        Validation). Only whitelisted payers can successfully pay into this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Allowed payer added.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.add_allowed_payer(va_id, body, request_options=request_options))

    def add_vpa_receiver(
        self,
        id_: str,
        body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature
        to be enabled on the merchant account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            VPA receiver added. Returns the updated VirtualAccount.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.add_vpa_receiver(id_, body, request_options=request_options))

    def close_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Manually close an active virtual account so it no longer accepts payments.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account closed.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.close_virtual_account(id_, body, request_options=request_options))

    def create_virtual_account(
        self,
        body: VirtualAccountsRequest | VirtualAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set
        amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp:
        2147483647.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_virtual_account(body, request_options=request_options))

    def delete_allowed_payer(self, va_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able
        to make payments to this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            id_: Allowed payer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Allowed payer removed.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_allowed_payer(va_id, id_, request_options=request_options))

    def fetch_bank_transfer(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> BankTransfer:
        """Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR
        number, payer bank account details, and transfer mode.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bank transfer details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_bank_transfer(id_, request_options=request_options))

    def fetch_virtual_account(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> VirtualAccount:
        """Retrieve details of a specific virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_virtual_account(id_, request_options=request_options))

    def fetch_virtual_account_payments(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VirtualAccountsPaymentsResponse:
        """Retrieve all payments received by a virtual account. Returns Payment objects.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payments for the virtual account.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_virtual_account_payments(id_, request_options=request_options))

    def list_virtual_accounts(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VirtualAccountsResponse:
        """Retrieve a paginated list of virtual accounts with optional filters.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of Virtual Accounts.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_virtual_accounts(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def update_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Update the amount_expected or close_by timestamp on an active virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_virtual_account(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> VirtualAccountsWithRawResponse:
        return self._with_raw_response


class AsyncVirtualAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVirtualAccountsWithRawResponse(client, server, auth)

    async def add_allowed_payer(
        self,
        va_id: str,
        body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party
        Validation). Only whitelisted payers can successfully pay into this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Allowed payer added.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.add_allowed_payer(va_id, body, request_options=request_options))

    async def add_vpa_receiver(
        self,
        id_: str,
        body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature
        to be enabled on the merchant account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            VPA receiver added. Returns the updated VirtualAccount.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.add_vpa_receiver(id_, body, request_options=request_options))

    async def close_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Manually close an active virtual account so it no longer accepts payments.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account closed.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.close_virtual_account(id_, body, request_options=request_options))

    async def create_virtual_account(
        self,
        body: VirtualAccountsRequest | VirtualAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set
        amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp:
        2147483647.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_virtual_account(body, request_options=request_options))

    async def delete_allowed_payer(
        self, va_id: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able
        to make payments to this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            id_: Allowed payer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Allowed payer removed.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_allowed_payer(va_id, id_, request_options=request_options))

    async def fetch_bank_transfer(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BankTransfer:
        """Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR
        number, payer bank account details, and transfer mode.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Bank transfer details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_bank_transfer(id_, request_options=request_options))

    async def fetch_virtual_account(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VirtualAccount:
        """Retrieve details of a specific virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_virtual_account(id_, request_options=request_options))

    async def fetch_virtual_account_payments(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VirtualAccountsPaymentsResponse:
        """Retrieve all payments received by a virtual account. Returns Payment objects.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payments for the virtual account.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_virtual_account_payments(id_, request_options=request_options)
        )

    async def list_virtual_accounts(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VirtualAccountsResponse:
        """Retrieve a paginated list of virtual accounts with optional filters.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of Virtual Accounts.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_virtual_accounts(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def update_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VirtualAccount:
        """Update the amount_expected or close_by timestamp on an active virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Virtual Account updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_virtual_account(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncVirtualAccountsWithRawResponse:
        return self._with_raw_response


class VirtualAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_allowed_payer(
        self,
        va_id: str,
        body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, AddAllowedPayerErrorBody]:
        """Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party
        Validation). Only whitelisted payers can successfully pay into this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts/{va_id}/allowed_payers"),
            path_params=[param[str]("va_id", va_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccount],
            error_mapper=add_allowed_payer_error_mapper,
            request_options=request_options,
        )

    def add_vpa_receiver(
        self,
        id_: str,
        body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, AddVpaReceiverErrorBody]:
        """Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature
        to be enabled on the merchant account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts/{id}/receivers"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccount],
            error_mapper=add_vpa_receiver_error_mapper,
            request_options=request_options,
        )

    def close_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, CloseVirtualAccountErrorBody]:
        """Manually close an active virtual account so it no longer accepts payments.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts/{id}/close"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccount],
            error_mapper=close_virtual_account_error_mapper,
            request_options=request_options,
        )

    def create_virtual_account(
        self,
        body: VirtualAccountsRequest | VirtualAccountsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, CreateVirtualAccountErrorBody]:
        """Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set
        amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp:
        2147483647.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsRequest | VirtualAccountsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccount],
            error_mapper=create_virtual_account_error_mapper,
            request_options=request_options,
        )

    def delete_allowed_payer(
        self, va_id: str, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteAllowedPayerErrorBody]:
        """Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able
        to make payments to this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            id_: Allowed payer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/virtual_accounts/{va_id}/allowed_payers/{id}"),
            path_params=[param[str]("va_id", va_id), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Any],
            error_mapper=delete_allowed_payer_error_mapper,
            request_options=request_options,
        )

    def fetch_bank_transfer(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BankTransfer, FetchBankTransferErrorBody]:
        """Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR
        number, payer bank account details, and transfer mode.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{id}/bank_transfer"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[BankTransfer],
            error_mapper=fetch_bank_transfer_error_mapper,
            request_options=request_options,
        )

    def fetch_virtual_account(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VirtualAccount, FetchVirtualAccountErrorBody]:
        """Retrieve details of a specific virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/virtual_accounts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccount],
            error_mapper=fetch_virtual_account_error_mapper,
            request_options=request_options,
        )

    def fetch_virtual_account_payments(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VirtualAccountsPaymentsResponse, FetchVirtualAccountPaymentsErrorBody]:
        """Retrieve all payments received by a virtual account. Returns Payment objects.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/virtual_accounts/{id}/payments"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccountsPaymentsResponse],
            error_mapper=fetch_virtual_account_payments_error_mapper,
            request_options=request_options,
        )

    def list_virtual_accounts(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccountsResponse, ListVirtualAccountsErrorBody]:
        """Retrieve a paginated list of virtual accounts with optional filters.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/virtual_accounts"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccountsResponse],
            error_mapper=list_virtual_accounts_error_mapper,
            request_options=request_options,
        )

    def update_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, UpdateVirtualAccountErrorBody]:
        """Update the amount_expected or close_by timestamp on an active virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/virtual_accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsRequest1 | VirtualAccountsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[VirtualAccount],
            error_mapper=update_virtual_account_error_mapper,
            request_options=request_options,
        )


class AsyncVirtualAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_allowed_payer(
        self,
        va_id: str,
        body: VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, AddAllowedPayerErrorBody]:
        """Whitelist a specific payer bank account or VPA for a virtual account (Smart Collect with Third Party
        Validation). Only whitelisted payers can successfully pay into this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts/{va_id}/allowed_payers"),
            path_params=[param[str]("va_id", va_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsAllowedPayersRequest | VirtualAccountsAllowedPayersRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccount],
            error_mapper=add_allowed_payer_error_mapper,
            request_options=request_options,
        )

    async def add_vpa_receiver(
        self,
        id_: str,
        body: VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, AddVpaReceiverErrorBody]:
        """Add a UPI VPA receiver to an existing virtual account (Smart Collect 2.0). Requires the VPA receiver feature
        to be enabled on the merchant account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts/{id}/receivers"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsReceiversRequest | VirtualAccountsReceiversRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccount],
            error_mapper=add_vpa_receiver_error_mapper,
            request_options=request_options,
        )

    async def close_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, CloseVirtualAccountErrorBody]:
        """Manually close an active virtual account so it no longer accepts payments.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts/{id}/close"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsCloseRequest | VirtualAccountsCloseRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccount],
            error_mapper=close_virtual_account_error_mapper,
            request_options=request_options,
        )

    async def create_virtual_account(
        self,
        body: VirtualAccountsRequest | VirtualAccountsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, CreateVirtualAccountErrorBody]:
        """Create a virtual bank account (and optionally a VPA) for accepting NEFT/RTGS/IMPS/UPI payments. Set
        amount_expected=0 to accept any amount. Auto-closes after 90 days of inactivity. Maximum close_by timestamp:
        2147483647.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/virtual_accounts"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsRequest | VirtualAccountsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccount],
            error_mapper=create_virtual_account_error_mapper,
            request_options=request_options,
        )

    async def delete_allowed_payer(
        self, va_id: str, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteAllowedPayerErrorBody]:
        """Remove a payer from the whitelist of a virtual account (Smart Collect TPV). The payer will no longer be able
        to make payments to this virtual account.

        Args:
            va_id: Virtual Account ID (va_*).
            id_: Allowed payer ID to remove.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/virtual_accounts/{va_id}/allowed_payers/{id}"),
            path_params=[param[str]("va_id", va_id), param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Any],
            error_mapper=delete_allowed_payer_error_mapper,
            request_options=request_options,
        )

    async def fetch_bank_transfer(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BankTransfer, FetchBankTransferErrorBody]:
        """Retrieve the BankTransfer entity associated with a payment received via a Virtual Account. Contains the UTR
        number, payer bank account details, and transfer mode.

        Args:
            id_: Payment ID (pay_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/{id}/bank_transfer"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[BankTransfer],
            error_mapper=fetch_bank_transfer_error_mapper,
            request_options=request_options,
        )

    async def fetch_virtual_account(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VirtualAccount, FetchVirtualAccountErrorBody]:
        """Retrieve details of a specific virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/virtual_accounts/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccount],
            error_mapper=fetch_virtual_account_error_mapper,
            request_options=request_options,
        )

    async def fetch_virtual_account_payments(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VirtualAccountsPaymentsResponse, FetchVirtualAccountPaymentsErrorBody]:
        """Retrieve all payments received by a virtual account. Returns Payment objects.

        Args:
            id_: Virtual Account ID (va_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/virtual_accounts/{id}/payments"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccountsPaymentsResponse],
            error_mapper=fetch_virtual_account_payments_error_mapper,
            request_options=request_options,
        )

    async def list_virtual_accounts(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccountsResponse, ListVirtualAccountsErrorBody]:
        """Retrieve a paginated list of virtual accounts with optional filters.

        Args:
            from_: Unix timestamp filter (start).
            to: Unix timestamp filter (end).
            count: Number of records to return. Default: 10. Maximum: 100.
            skip: Number of records to skip. Use for pagination. Default: 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/virtual_accounts"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccountsResponse],
            error_mapper=list_virtual_accounts_error_mapper,
            request_options=request_options,
        )

    async def update_virtual_account(
        self,
        id_: str,
        body: VirtualAccountsRequest1 | VirtualAccountsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VirtualAccount, UpdateVirtualAccountErrorBody]:
        """Update the amount_expected or close_by timestamp on an active virtual account.

        Args:
            id_: Virtual Account ID (va_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/virtual_accounts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[VirtualAccountsRequest1 | VirtualAccountsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[VirtualAccount],
            error_mapper=update_virtual_account_error_mapper,
            request_options=request_options,
        )
