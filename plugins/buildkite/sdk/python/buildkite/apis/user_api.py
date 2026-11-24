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
from ..models.user import User
from ..server.server import Server


class UserApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UserApiWithRawResponse(client, server, auth)

    def get_current_user(self, *, request_options: RequestOptionsOrDict | None = None) -> User:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Authenticated user record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_current_user(request_options=request_options))

    @property
    def with_raw_response(self) -> UserApiWithRawResponse:
        return self._with_raw_response


class AsyncUserApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUserApiWithRawResponse(client, server, auth)

    async def get_current_user(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> User:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Authenticated user record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_current_user(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUserApiWithRawResponse:
        return self._with_raw_response


class UserApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_current_user(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[User, RawError]:
        """Send a ``GET`` request.

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
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncUserApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_current_user(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[User, RawError]:
        """Send a ``GET`` request.

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
            error_mapper=raw_error_response,
            request_options=request_options,
        )
