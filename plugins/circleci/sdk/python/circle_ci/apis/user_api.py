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
    unwrap,
)
from ..errors.get_collaborations_error import GetCollaborationsErrorBody, get_collaborations_error_mapper
from ..errors.get_current_user_error import GetCurrentUserErrorBody, get_current_user_error_mapper
from ..models.collaboration import Collaboration
from ..models.user import User
from ..server.server import Server


class UserApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserApiWithRawResponse(client, server, auth)

    def get_collaborations(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Collaboration]:
        """Returns a list of organizations and accounts the current user collaborates with.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved collaborations

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_collaborations(request_options=request_options))

    def get_current_user(self, *, request_options: RequestOptionsOrDict | None = None) -> User:
        """Returns information about the currently authenticated user, including name, login, and avatar URL.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved user information

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_current_user(request_options=request_options))

    @property
    def with_raw_response(self) -> UserApiWithRawResponse:
        return self._with_raw_response


class AsyncUserApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserApiWithRawResponse(client, server, auth)

    async def get_collaborations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Collaboration]:
        """Returns a list of organizations and accounts the current user collaborates with.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved collaborations

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_collaborations(request_options=request_options))

    async def get_current_user(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> User:
        """Returns information about the currently authenticated user, including name, login, and avatar URL.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved user information

        Raises:
            ApiError: Unauthorized ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_current_user(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUserApiWithRawResponse:
        return self._with_raw_response


class UserApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_collaborations(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Collaboration], GetCollaborationsErrorBody]:
        """Returns a list of organizations and accounts the current user collaborates with.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/me/collaborations"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Collaboration]],
            error_mapper=get_collaborations_error_mapper,
            request_options=request_options,
        )

    def get_current_user(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[User, GetCurrentUserErrorBody]:
        """Returns information about the currently authenticated user, including name, login, and avatar URL.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/me"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[User],
            error_mapper=get_current_user_error_mapper,
            request_options=request_options,
        )


class AsyncUserApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_collaborations(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Collaboration], GetCollaborationsErrorBody]:
        """Returns a list of organizations and accounts the current user collaborates with.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/me/collaborations"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Collaboration]],
            error_mapper=get_collaborations_error_mapper,
            request_options=request_options,
        )

    async def get_current_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, GetCurrentUserErrorBody]:
        """Returns information about the currently authenticated user, including name, login, and avatar URL.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/me"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[User],
            error_mapper=get_current_user_error_mapper,
            request_options=request_options,
        )
