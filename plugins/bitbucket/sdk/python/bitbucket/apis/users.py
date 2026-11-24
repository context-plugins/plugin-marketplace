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
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.get_users_by_selected_user_error import (
    GetUsersBySelectedUserErrorBody,
    get_users_by_selected_user_error_mapper,
)
from ..models.account import Account
from ..models.error import Error
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def get_user(self, *, request_options: RequestOptionsOrDict | None = None) -> Account:
        """Returns the currently logged in user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current user.

        Raises:
            ApiError: When the request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_user(request_options=request_options))

    def get_user_emails(self, *, request_options: RequestOptionsOrDict | None = None) -> Error:
        """Returns all the authenticated user's email addresses. Both confirmed and unconfirmed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unexpected error.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_user_emails(request_options=request_options))

    def get_user_emails_by_email(self, email: str, *, request_options: RequestOptionsOrDict | None = None) -> Error:
        """Returns details about a specific one of the authenticated user's email addresses.

        Details describe whether the address has been confirmed by the user and whether it is the user's primary address
        or not.

        Args:
            email: Email address of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unexpected error.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_user_emails_by_email(email, request_options=request_options))

    def get_users_by_selected_user(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Account:
        """Gets the public information associated with a user account.

        If the user's profile is private, ``location``, ``website`` and ``created_on`` elements are omitted.

        Note that the user object returned by this operation is changing significantly, due to privacy changes. See the
        announcement for details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user object

        Raises:
            ApiError: If no user exists for the specified UUID, or if the specified account is a team account, not a
                personal account. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_users_by_selected_user(selected_user, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def get_user(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Account:
        """Returns the currently logged in user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current user.

        Raises:
            ApiError: When the request wasn't authenticated. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_user(request_options=request_options))

    async def get_user_emails(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Error:
        """Returns all the authenticated user's email addresses. Both confirmed and unconfirmed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unexpected error.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_user_emails(request_options=request_options))

    async def get_user_emails_by_email(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Error:
        """Returns details about a specific one of the authenticated user's email addresses.

        Details describe whether the address has been confirmed by the user and whether it is the user's primary address
        or not.

        Args:
            email: Email address of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Unexpected error.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_user_emails_by_email(email, request_options=request_options))

    async def get_users_by_selected_user(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Account:
        """Gets the public information associated with a user account.

        If the user's profile is private, ``location``, ``website`` and ``created_on`` elements are omitted.

        Note that the user object returned by this operation is changing significantly, due to privacy changes. See the
        announcement for details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The user object

        Raises:
            ApiError: If no user exists for the specified UUID, or if the specified account is a team account, not a
                personal account. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_users_by_selected_user(selected_user, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_user(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Account, GetUserErrorBody]:
        """Returns the currently logged in user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user"),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Account],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def get_user_emails(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Error, RawError]:
        """Returns all the authenticated user's email addresses. Both confirmed and unconfirmed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/emails"),
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_user_emails_by_email(
        self, email: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Error, RawError]:
        """Returns details about a specific one of the authenticated user's email addresses.

        Details describe whether the address has been confirmed by the user and whether it is the user's primary address
        or not.

        Args:
            email: Email address of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/emails/{email}"),
            path_params=[param[str]("email", email)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Error],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_users_by_selected_user(
        self, selected_user: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetUsersBySelectedUserErrorBody]:
        """Gets the public information associated with a user account.

        If the user's profile is private, ``location``, ``website`` and ``created_on`` elements are omitted.

        Note that the user object returned by this operation is changing significantly, due to privacy changes. See the
        announcement for details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=json_decoder[Account],
            error_mapper=get_users_by_selected_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetUserErrorBody]:
        """Returns the currently logged in user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user"),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Account],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def get_user_emails(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, RawError]:
        """Returns all the authenticated user's email addresses. Both confirmed and unconfirmed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/emails"),
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_user_emails_by_email(
        self, email: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Error, RawError]:
        """Returns details about a specific one of the authenticated user's email addresses.

        Details describe whether the address has been confirmed by the user and whether it is the user's primary address
        or not.

        Args:
            email: Email address of the user.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/emails/{email}"),
            path_params=[param[str]("email", email)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Error],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_users_by_selected_user(
        self, selected_user: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Account, GetUsersBySelectedUserErrorBody]:
        """Gets the public information associated with a user account.

        If the user's profile is private, ``location``, ``website`` and ``created_on`` elements are omitted.

        Note that the user object returned by this operation is changing significantly, due to privacy changes. See the
        announcement for details.

        Args:
            selected_user: This can either be an Atlassian Account ID OR the UUID of the account, surrounded by
                curly-braces, for example: ``{account UUID}``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users/{selected_user}"),
            path_params=[param[str]("selected_user", selected_user)],
            auth_scheme=AsyncAnySchemes(self._auth.oauth2, self._auth.basic, self._auth.api_key),
            decoder=async_json_decoder[Account],
            error_mapper=get_users_by_selected_user_error_mapper,
            request_options=request_options,
        )
