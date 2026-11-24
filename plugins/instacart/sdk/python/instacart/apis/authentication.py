from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.generate_access_token_error import GenerateAccessTokenErrorBody, generate_access_token_error_mapper
from ..models.token_request import TokenRequest, TokenRequestDict
from ..models.token_response import TokenResponse
from ..server.server import Server


class Authentication:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuthenticationWithRawResponse(client, server)

    def generate_access_token(
        self, body: TokenRequest | TokenRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> TokenResponse:
        """Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be
        included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token
        rather than generating a new one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access token generated successfully

        Raises:
            ApiError: Invalid client credentials ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.generate_access_token(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AuthenticationWithRawResponse:
        return self._with_raw_response


class AsyncAuthentication:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuthenticationWithRawResponse(client, server)

    async def generate_access_token(
        self, body: TokenRequest | TokenRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TokenResponse:
        """Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be
        included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token
        rather than generating a new one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Access token generated successfully

        Raises:
            ApiError: Invalid client credentials ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.generate_access_token(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthenticationWithRawResponse:
        return self._with_raw_response


class AuthenticationWithRawResponse(BaseRawResponse[RawClient, Server]):
    def generate_access_token(
        self, body: TokenRequest | TokenRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TokenResponse, GenerateAccessTokenErrorBody]:
        """Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be
        included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token
        rather than generating a new one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/oauth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TokenRequest | TokenRequestDict](body),
            decoder=json_decoder[TokenResponse],
            error_mapper=generate_access_token_error_mapper,
            request_options=request_options,
        )


class AsyncAuthenticationWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def generate_access_token(
        self, body: TokenRequest | TokenRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TokenResponse, GenerateAccessTokenErrorBody]:
        """Generates an OAuth 2.0 access token using client credentials. The token is valid for 24 hours and must be
        included as a Bearer token in all subsequent API requests. During the validity period, reuse the same token
        rather than generating a new one.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/oauth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TokenRequest | TokenRequestDict](body),
            decoder=async_json_decoder[TokenResponse],
            error_mapper=generate_access_token_error_mapper,
            request_options=request_options,
        )
