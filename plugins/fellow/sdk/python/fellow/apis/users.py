from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.authenticated_user_response import AuthenticatedUserResponse
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def apps_developer_api_api_get_authenticated_user(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AuthenticatedUserResponse:
        """Get information about the authenticated user and their workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_authenticated_user(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def apps_developer_api_api_get_authenticated_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuthenticatedUserResponse:
        """Get information about the authenticated user and their workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_authenticated_user(request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apps_developer_api_api_get_authenticated_user(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuthenticatedUserResponse, RawError]:
        """Get information about the authenticated user and their workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/me"),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[AuthenticatedUserResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apps_developer_api_api_get_authenticated_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuthenticatedUserResponse, RawError]:
        """Get information about the authenticated user and their workspace.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/me"),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[AuthenticatedUserResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
