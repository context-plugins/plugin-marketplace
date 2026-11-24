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
from ..errors.delete_partner_account_error import DeletePartnerAccountErrorBody, delete_partner_account_error_mapper
from ..errors.fetch_linked_account2_error import FetchLinkedAccount2ErrorBody, fetch_linked_account2_error_mapper
from ..errors.update_linked_account2_error import UpdateLinkedAccount2ErrorBody, update_linked_account2_error_mapper
from ..models.linked_account import LinkedAccount
from ..models.v2_accounts_request_razorpay_partner_accounts_api import (
    V2AccountsRequestRazorpayPartnerAccountsApi,
    V2AccountsRequestRazorpayPartnerAccountsApiDict,
)
from ..models.v2_accounts_response import V2AccountsResponse
from ..server.server import Server


class PartnerAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnerAccountsWithRawResponse(client, server, auth)

    def delete_partner_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V2AccountsResponse:
        """Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns
        suspended_at timestamp. Authentication: OAuth access_token as username with empty password.

        Args:
            account_id: Account ID with prefix acc_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account suspended

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_partner_account(account_id, request_options=request_options))

    def fetch_linked_account2(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LinkedAccount:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_linked_account2(account_id, request_options=request_options))

    def update_linked_account2(
        self,
        account_id: str,
        body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LinkedAccount:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_linked_account2(account_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PartnerAccountsWithRawResponse:
        return self._with_raw_response


class AsyncPartnerAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnerAccountsWithRawResponse(client, server, auth)

    async def delete_partner_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V2AccountsResponse:
        """Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns
        suspended_at timestamp. Authentication: OAuth access_token as username with empty password.

        Args:
            account_id: Account ID with prefix acc_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account suspended

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_partner_account(account_id, request_options=request_options))

    async def fetch_linked_account2(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LinkedAccount:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_linked_account2(account_id, request_options=request_options))

    async def update_linked_account2(
        self,
        account_id: str,
        body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LinkedAccount:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Linked Account updated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_linked_account2(account_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPartnerAccountsWithRawResponse:
        return self._with_raw_response


class PartnerAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_partner_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V2AccountsResponse, DeletePartnerAccountErrorBody]:
        """Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns
        suspended_at timestamp. Authentication: OAuth access_token as username with empty password.

        Args:
            account_id: Account ID with prefix acc_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[V2AccountsResponse],
            error_mapper=delete_partner_account_error_mapper,
            request_options=request_options,
        )

    def fetch_linked_account2(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedAccount, FetchLinkedAccount2ErrorBody]:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[LinkedAccount],
            error_mapper=fetch_linked_account2_error_mapper,
            request_options=request_options,
        )

    def update_linked_account2(
        self,
        account_id: str,
        body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedAccount, UpdateLinkedAccount2ErrorBody]:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict
            ](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[LinkedAccount],
            error_mapper=update_linked_account2_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_partner_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V2AccountsResponse, DeletePartnerAccountErrorBody]:
        """Suspend a sub-merchant account created via Partners API. Sets account status to 'suspended' and returns
        suspended_at timestamp. Authentication: OAuth access_token as username with empty password.

        Args:
            account_id: Account ID with prefix acc_
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[V2AccountsResponse],
            error_mapper=delete_partner_account_error_mapper,
            request_options=request_options,
        )

    async def fetch_linked_account2(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LinkedAccount, FetchLinkedAccount2ErrorBody]:
        """Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account
        details (authentication: OAuth access_token).

        Args:
            account_id: Linked Account ID (acc_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[LinkedAccount],
            error_mapper=fetch_linked_account2_error_mapper,
            request_options=request_options,
        )

    async def update_linked_account2(
        self,
        account_id: str,
        body: V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LinkedAccount, UpdateLinkedAccount2ErrorBody]:
        """Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.

        Args:
            account_id: Linked Account ID (acc_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[
                V2AccountsRequestRazorpayPartnerAccountsApi | V2AccountsRequestRazorpayPartnerAccountsApiDict
            ](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[LinkedAccount],
            error_mapper=update_linked_account2_error_mapper,
            request_options=request_options,
        )
