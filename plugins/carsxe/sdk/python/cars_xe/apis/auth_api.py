from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

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
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class AuthApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthApiWithRawResponse(client, server, auth)

    def validate_key(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``POST`` request.

        Args:
            key: Your CarsXE API key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation result

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.validate_key(key, request_options=request_options))

    @property
    def with_raw_response(self) -> AuthApiWithRawResponse:
        return self._with_raw_response


class AsyncAuthApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthApiWithRawResponse(client, server, auth)

    async def validate_key(self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``POST`` request.

        Args:
            key: Your CarsXE API key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Validation result

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.validate_key(key, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthApiWithRawResponse:
        return self._with_raw_response


class AuthApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def validate_key(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Your CarsXE API key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/auth/validate"),
            query_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_query,
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAuthApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def validate_key(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Your CarsXE API key
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/auth/validate"),
            query_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_query,
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
