from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Authentication:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthenticationWithRawResponse(client, server, auth)

    def login(self, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Exchange the client_id and api_key (sent as ``x-client-id`` and ``x-api-key`` headers) for a short-lived
        bearer access token used in subsequent calls.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access token returned

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.login(request_options=request_options))

    @property
    def with_raw_response(self) -> AuthenticationWithRawResponse:
        return self._with_raw_response


class AsyncAuthentication:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthenticationWithRawResponse(client, server, auth)

    async def login(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Exchange the client_id and api_key (sent as ``x-client-id`` and ``x-api-key`` headers) for a short-lived
        bearer access token used in subsequent calls.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access token returned

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.login(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthenticationWithRawResponse:
        return self._with_raw_response


class AuthenticationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def login(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Exchange the client_id and api_key (sent as ``x-client-id`` and ``x-api-key`` headers) for a short-lived
        bearer access token used in subsequent calls.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/authentication/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.bearer_auth, AllSchemes(self._auth.client_id_header, self._auth.api_key_header)
            ),
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAuthenticationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def login(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiResult[None, RawError]:
        """Exchange the client_id and api_key (sent as ``x-client-id`` and ``x-api-key`` headers) for a short-lived
        bearer access token used in subsequent calls.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/authentication/login"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.bearer_auth, AsyncAllSchemes(self._auth.client_id_header, self._auth.api_key_header)
            ),
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
