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
    raw_error_response,
    unwrap,
)
from ..models.users_response import UsersResponse
from ..server.server import Server


class Users:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsersWithRawResponse(client, server, auth)

    def list_users(self, *, request_options: RequestOptionsOrDict | None = None) -> UsersResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_users(request_options=request_options))

    @property
    def with_raw_response(self) -> UsersWithRawResponse:
        return self._with_raw_response


class AsyncUsers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsersWithRawResponse(client, server, auth)

    async def list_users(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> UsersResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            User collection

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_users(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsersWithRawResponse:
        return self._with_raw_response


class UsersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_users(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[UsersResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users"),
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=json_decoder[UsersResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncUsersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_users(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsersResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/users"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.oauth2),
            decoder=async_json_decoder[UsersResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
