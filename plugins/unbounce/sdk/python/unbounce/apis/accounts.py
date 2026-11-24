from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.get_account_error import GetAccountErrorBody, get_account_error_mapper
from ..errors.list_accounts_error import ListAccountsErrorBody, list_accounts_error_mapper
from ..models.account import Account
from ..models.account_collection import AccountCollection
from ..models.accounts_sub_accounts_response import AccountsSubAccountsResponse
from ..models.sub_account import SubAccount
from ..server.server import Server


class Accounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsWithRawResponse(client, server, auth)

    def get_account(self, account_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Account:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account

        Raises:
            ApiError: Resource not found ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_account(account_id, request_options=request_options))

    def get_sub_account(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SubAccount:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sub-account

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_sub_account(sub_account_id, request_options=request_options))

    def list_accounts(self, *, request_options: RequestOptionsOrDict | None = None) -> AccountCollection:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account collection

        Raises:
            ApiError: Authentication failed ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_accounts(request_options=request_options))

    def list_sub_accounts_for_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> AccountsSubAccountsResponse:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sub-account collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_sub_accounts_for_account(account_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AccountsWithRawResponse:
        return self._with_raw_response


class AsyncAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsWithRawResponse(client, server, auth)

    async def get_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Account:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account

        Raises:
            ApiError: Resource not found ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_account(account_id, request_options=request_options))

    async def get_sub_account(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubAccount:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sub-account

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_sub_account(sub_account_id, request_options=request_options))

    async def list_accounts(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> AccountCollection:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account collection

        Raises:
            ApiError: Authentication failed ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_accounts(request_options=request_options))

    async def list_sub_accounts_for_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AccountsSubAccountsResponse:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sub-account collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_sub_accounts_for_account(account_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAccountsWithRawResponse:
        return self._with_raw_response


class AccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetAccountErrorBody]:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[Account],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    def get_sub_account(
        self, sub_account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubAccount, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[SubAccount],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_accounts(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountCollection, ListAccountsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts"),
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[AccountCollection],
            error_mapper=list_accounts_error_mapper,
            request_options=request_options,
        )

    def list_sub_accounts_for_account(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountsSubAccountsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/{account_id}/sub_accounts"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[AccountsSubAccountsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetAccountErrorBody]:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/{account_id}"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[Account],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    async def get_sub_account(
        self, sub_account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubAccount, RawError]:
        """Send a ``GET`` request.

        Args:
            sub_account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sub_accounts/{sub_account_id}"),
            path_params=[param[str]("sub_account_id", sub_account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[SubAccount],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_accounts(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountCollection, ListAccountsErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[AccountCollection],
            error_mapper=list_accounts_error_mapper,
            request_options=request_options,
        )

    async def list_sub_accounts_for_account(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountsSubAccountsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            account_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/accounts/{account_id}/sub_accounts"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[AccountsSubAccountsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
