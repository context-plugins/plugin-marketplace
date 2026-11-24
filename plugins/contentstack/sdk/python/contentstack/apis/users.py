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
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.update_user_error import UpdateUserErrorBody, update_user_error_mapper
from ..models.update_user_request import UpdateUserRequest, UpdateUserRequestDict
from ..models.user import User
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def get_user(self, *, request_options: RequestOptionsOrDict | None = None) -> User:
        """Retrieves the account details of the currently authenticated user, including profile information and
        organization memberships.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current user's account details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.get_user(request_options=request_options))

    def update_user(
        self, body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> User:
        """Updates profile information for the currently authenticated user, including first name, last name, and other
        account attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated user object.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.update_user(body, request_options=request_options))

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def get_user(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> User:
        """Retrieves the account details of the currently authenticated user, including profile information and
        organization memberships.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current user's account details.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.get_user(request_options=request_options))

    async def update_user(
        self,
        body: UpdateUserRequest | UpdateUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> User:
        """Updates profile information for the currently authenticated user, including first name, last name, and other
        account attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated user object.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.update_user(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_user(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, GetUserErrorBody]:
        """Retrieves the account details of the currently authenticated user, including profile information and
        organization memberships.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/user"),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[User],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def update_user(
        self, body: UpdateUserRequest | UpdateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User, UpdateUserErrorBody]:
        """Updates profile information for the currently authenticated user, including first name, last name, and other
        account attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_environments_api("/user"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserRequest | UpdateUserRequestDict](body),
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=json_decoder[User],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, GetUserErrorBody]:
        """Retrieves the account details of the currently authenticated user, including profile information and
        organization memberships.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_contentstack_environments_api("/user"),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[User],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def update_user(
        self,
        body: UpdateUserRequest | UpdateUserRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[User, UpdateUserErrorBody]:
        """Updates profile information for the currently authenticated user, including first name, last name, and other
        account attributes.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_contentstack_environments_api("/user"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateUserRequest | UpdateUserRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_json_decoder[User],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )
