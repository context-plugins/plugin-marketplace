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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.login_user_error import LoginUserErrorBody, login_user_error_mapper
from ..errors.logout_user_error import LogoutUserErrorBody, logout_user_error_mapper
from ..models.login_request import LoginRequest, LoginRequestDict
from ..models.login_response import LoginResponse
from ..server.server import Server


class UserSessions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserSessionsWithRawResponse(client, server, auth)

    def login_user(
        self, body: LoginRequest | LoginRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> LoginResponse:
        """Authenticates a user with their email and password and returns an authtoken for use in subsequent API
        requests. The authtoken is valid for the duration of the session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful authentication with authtoken.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.login_user(body, request_options=request_options))

    def logout_user(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully logged out.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.logout_user(request_options=request_options))

    @property
    def with_raw_response(self) -> UserSessionsWithRawResponse:
        return self._with_raw_response


class AsyncUserSessions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserSessionsWithRawResponse(client, server, auth)

    async def login_user(
        self, body: LoginRequest | LoginRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LoginResponse:
        """Authenticates a user with their email and password and returns an authtoken for use in subsequent API
        requests. The authtoken is valid for the duration of the session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful authentication with authtoken.

        Raises:
            ApiError: The request is malformed or contains invalid parameters. Authentication credentials are missing or
                invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.login_user(body, request_options=request_options))

    async def logout_user(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully logged out.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.logout_user(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUserSessionsWithRawResponse:
        return self._with_raw_response


class UserSessionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def login_user(
        self, body: LoginRequest | LoginRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LoginResponse, LoginUserErrorBody]:
        """Authenticates a user with their email and password and returns an authtoken for use in subsequent API
        requests. The authtoken is valid for the duration of the session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_environments_api("/user-session"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LoginRequest | LoginRequestDict](body),
            decoder=json_decoder[LoginResponse],
            error_mapper=login_user_error_mapper,
            request_options=request_options,
        )

    def logout_user(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, LogoutUserErrorBody]:
        """Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_environments_api("/user-session"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=empty_response,
            error_mapper=logout_user_error_mapper,
            request_options=request_options,
        )


class AsyncUserSessionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def login_user(
        self, body: LoginRequest | LoginRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LoginResponse, LoginUserErrorBody]:
        """Authenticates a user with their email and password and returns an authtoken for use in subsequent API
        requests. The authtoken is valid for the duration of the session.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_contentstack_environments_api("/user-session"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LoginRequest | LoginRequestDict](body),
            decoder=async_json_decoder[LoginResponse],
            error_mapper=login_user_error_mapper,
            request_options=request_options,
        )

    async def logout_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, LogoutUserErrorBody]:
        """Invalidates the current user session and authtoken, signing the user out of all Contentstack sessions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_contentstack_environments_api("/user-session"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.authtoken_auth, self._auth.management_token_auth),
            decoder=async_empty_response,
            error_mapper=logout_user_error_mapper,
            request_options=request_options,
        )
