from __future__ import annotations

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
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.validate_error import ValidateErrorBody, validate_error_mapper
from ..models.validate_response import ValidateResponse
from ..server.server import Server


class AuthApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthApiWithRawResponse(client, server, auth)

    def validate(self, *, request_options: RequestOptionsOrDict | None = None) -> ValidateResponse:
        """Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated
        token, regardless of its own permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The domain and email of the API user returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.validate(request_options=request_options))

    @property
    def with_raw_response(self) -> AuthApiWithRawResponse:
        return self._with_raw_response


class AsyncAuthApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthApiWithRawResponse(client, server, auth)

    async def validate(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ValidateResponse:
        """Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated
        token, regardless of its own permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The domain and email of the API user returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.validate(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthApiWithRawResponse:
        return self._with_raw_response


class AuthApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def validate(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ValidateResponse, ValidateErrorBody]:
        """Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated
        token, regardless of its own permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/auth/v1/validate"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[ValidateResponse],
            error_mapper=validate_error_mapper,
            request_options=request_options,
        )


class AsyncAuthApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def validate(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ValidateResponse, ValidateErrorBody]:
        """Returns the domain, email, and effective permissions of the current API user. Callable by any authenticated
        token, regardless of its own permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/auth/v1/validate"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[ValidateResponse],
            error_mapper=validate_error_mapper,
            request_options=request_options,
        )
