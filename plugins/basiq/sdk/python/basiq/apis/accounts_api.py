from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_account_error import GetAccountErrorBody, get_account_error_mapper
from ..errors.get_accounts_error import GetAccountsErrorBody, get_accounts_error_mapper
from ..models.account_response_resource1 import AccountResponseResource1
from ..models.users_accounts_response import UsersAccountsResponse
from ..server.server import Server


class AccountsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountsApiWithRawResponse(client, server, auth)

    def get_account(
        self,
        user_id: str,
        account_id: str,
        *,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AccountResponseResource1:
        """Retrieve a specific account belonging to a user

        Args:
            user_id: User identifier
            account_id: Account identifier
            filter_: Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently
                supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a account with details.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``UsersAccounts400Error1 | UsersAccounts403Error1 |
                UsersAccounts404Error1 | UsersAccounts500Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.get_account(user_id, account_id, filter_=filter_, request_options=request_options)
        )

    def get_accounts(
        self, user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> UsersAccountsResponse:
        """List all accounts belonging to a user

        Args:
            user_id: User identifier
            filter_: Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is
                currently supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a account with details.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``UsersAccounts400Error1 | UsersAccounts403Error1 |
                UsersAccounts404Error1 | UsersAccounts500Error1 | RawError``."""
        return unwrap(self._with_raw_response.get_accounts(user_id, filter_=filter_, request_options=request_options))

    @property
    def with_raw_response(self) -> AccountsApiWithRawResponse:
        return self._with_raw_response


class AsyncAccountsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountsApiWithRawResponse(client, server, auth)

    async def get_account(
        self,
        user_id: str,
        account_id: str,
        *,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AccountResponseResource1:
        """Retrieve a specific account belonging to a user

        Args:
            user_id: User identifier
            account_id: Account identifier
            filter_: Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently
                supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a account with details.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``UsersAccounts400Error1 | UsersAccounts403Error1 |
                UsersAccounts404Error1 | UsersAccounts500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_account(
                user_id, account_id, filter_=filter_, request_options=request_options
            ),
        )

    async def get_accounts(
        self, user_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsersAccountsResponse:
        """List all accounts belonging to a user

        Args:
            user_id: User identifier
            filter_: Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is
                currently supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returns a account with details.

        Raises:
            ApiError: Returns error that server cannot or will not process the request due to something that is
                perceived to be a client error Error that access is forbidden and tied to the application logic, such as
                insufficient rights to a resource. Returns error indicating that server can't find requested resource.
                Returns error response code indicates that the server encountered an unexpected condition that prevented
                it from fulfilling the request. ``error`` is ``UsersAccounts400Error1 | UsersAccounts403Error1 |
                UsersAccounts404Error1 | UsersAccounts500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_accounts(user_id, filter_=filter_, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncAccountsApiWithRawResponse:
        return self._with_raw_response


class AccountsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account(
        self,
        user_id: str,
        account_id: str,
        *,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AccountResponseResource1, GetAccountErrorBody]:
        """Retrieve a specific account belonging to a user

        Args:
            user_id: User identifier
            account_id: Account identifier
            filter_: Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently
                supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/accounts/{accountId}"),
            path_params=[param[str]("userId", user_id), param[str]("accountId", account_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[AccountResponseResource1],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    def get_accounts(
        self, user_id: str, *, filter_: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsersAccountsResponse, GetAccountsErrorBody]:
        """List all accounts belonging to a user

        Args:
            user_id: User identifier
            filter_: Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is
                currently supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/accounts"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[UsersAccountsResponse],
            error_mapper=get_accounts_error_mapper,
            request_options=request_options,
        )


class AsyncAccountsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account(
        self,
        user_id: str,
        account_id: str,
        *,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AccountResponseResource1, GetAccountErrorBody]:
        """Retrieve a specific account belonging to a user

        Args:
            user_id: User identifier
            account_id: Account identifier
            filter_: Account filters; account.id, connection.id, institution.id, Only equals (eq) operation is currently
                supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/accounts/{accountId}"),
            path_params=[param[str]("userId", user_id), param[str]("accountId", account_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[AccountResponseResource1],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )

    async def get_accounts(
        self, user_id: str, *, filter_: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersAccountsResponse, GetAccountsErrorBody]:
        """List all accounts belonging to a user

        Args:
            user_id: User identifier
            filter_: Account filters: account.id, connection.id, institution.id. Only the equals (eq) operation is
                currently supported.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{userId}/accounts"),
            path_params=[param[str]("userId", user_id)],
            query_params=[param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[UsersAccountsResponse],
            error_mapper=get_accounts_error_mapper,
            request_options=request_options,
        )
