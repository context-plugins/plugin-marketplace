from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.get_platform_limits_error import GetPlatformLimitsErrorBody, get_platform_limits_error_mapper
from ..errors.get_user_error import GetUserErrorBody, get_user_error_mapper
from ..errors.update_user_error import UpdateUserErrorBody, update_user_error_mapper
from ..models.platform_limits import PlatformLimits
from ..models.user import User
from ..models.user_update import UserUpdate, UserUpdateDict
from ..server.server import Server


class UserApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserApiWithRawResponse(client, server, auth)

    def get_platform_limits(
        self, *, path: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> PlatformLimits:
        """Fetch all platform limits and counts available for an organization

        Args:
            path: The specific path for which information is requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_platform_limits(path=path, request_options=request_options))

    def get_user(self, *, request_options: RequestOptionsOrDict | None = None) -> User:
        """Returns information for the current authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_user(request_options=request_options))

    def update_user(
        self, body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> User:
        """Update fields in the user

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_user(body, request_options=request_options))

    @property
    def with_raw_response(self) -> UserApiWithRawResponse:
        return self._with_raw_response


class AsyncUserApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserApiWithRawResponse(client, server, auth)

    async def get_platform_limits(
        self, *, path: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PlatformLimits:
        """Fetch all platform limits and counts available for an organization

        Args:
            path: The specific path for which information is requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_platform_limits(path=path, request_options=request_options))

    async def get_user(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> User:
        """Returns information for the current authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_user(request_options=request_options))

    async def update_user(
        self, body: UserUpdate | UserUpdateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> User:
        """Update fields in the user

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_user(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUserApiWithRawResponse:
        return self._with_raw_response


class UserApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_platform_limits(
        self, *, path: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PlatformLimits, GetPlatformLimitsErrorBody]:
        """Fetch all platform limits and counts available for an organization

        Args:
            path: The specific path for which information is requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/platform_limits"),
            query_params=[param[str | None]("path", path)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PlatformLimits],
            error_mapper=get_platform_limits_error_mapper,
            request_options=request_options,
        )

    def get_user(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, GetUserErrorBody]:
        """Returns information for the current authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[User],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    def update_user(
        self, body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User, UpdateUserErrorBody]:
        """Update fields in the user

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/user"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserUpdate | UserUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[User],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )


class AsyncUserApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_platform_limits(
        self, *, path: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PlatformLimits, GetPlatformLimitsErrorBody]:
        """Fetch all platform limits and counts available for an organization

        Args:
            path: The specific path for which information is requested
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user/platform_limits"),
            query_params=[param[str | None]("path", path)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PlatformLimits],
            error_mapper=get_platform_limits_error_mapper,
            request_options=request_options,
        )

    async def get_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, GetUserErrorBody]:
        """Returns information for the current authenticated user.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/user"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[User],
            error_mapper=get_user_error_mapper,
            request_options=request_options,
        )

    async def update_user(
        self, body: UserUpdate | UserUpdateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, UpdateUserErrorBody]:
        """Update fields in the user

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/user"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UserUpdate | UserUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[User],
            error_mapper=update_user_error_mapper,
            request_options=request_options,
        )
