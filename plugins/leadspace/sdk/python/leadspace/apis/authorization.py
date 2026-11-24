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
from ..errors.create_authorization_token_error import (
    CreateAuthorizationTokenErrorBody,
    create_authorization_token_error_mapper,
)
from ..errors.refresh_authorization_token_error import (
    RefreshAuthorizationTokenErrorBody,
    refresh_authorization_token_error_mapper,
)
from ..models.authorization_request import AuthorizationRequest, AuthorizationRequestDict
from ..models.authorization_response import AuthorizationResponse
from ..models.refresh_request import RefreshRequest, RefreshRequestDict
from ..server.server import Server


class Authorization:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuthorizationWithRawResponse(client, server)

    def create_authorization_token(
        self,
        body: AuthorizationRequest | AuthorizationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuthorizationResponse:
        """Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire
        every 24 hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token issued

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_authorization_token(body, request_options=request_options))

    def refresh_authorization_token(
        self, body: RefreshRequest | RefreshRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AuthorizationResponse:
        """Exchanges a refreshToken for a new bearer token.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token refreshed

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.refresh_authorization_token(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AuthorizationWithRawResponse:
        return self._with_raw_response


class AsyncAuthorization:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuthorizationWithRawResponse(client, server)

    async def create_authorization_token(
        self,
        body: AuthorizationRequest | AuthorizationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuthorizationResponse:
        """Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire
        every 24 hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token issued

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_authorization_token(body, request_options=request_options))

    async def refresh_authorization_token(
        self, body: RefreshRequest | RefreshRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuthorizationResponse:
        """Exchanges a refreshToken for a new bearer token.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token refreshed

        Raises:
            ApiError: Unauthorized request (wrong credentials or credentials have expired) ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.refresh_authorization_token(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthorizationWithRawResponse:
        return self._with_raw_response


class AuthorizationWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_authorization_token(
        self,
        body: AuthorizationRequest | AuthorizationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthorizationResponse, CreateAuthorizationTokenErrorBody]:
        """Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire
        every 24 hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/oauth/authorize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AuthorizationRequest | AuthorizationRequestDict](body),
            decoder=json_decoder[AuthorizationResponse],
            error_mapper=create_authorization_token_error_mapper,
            request_options=request_options,
        )

    def refresh_authorization_token(
        self, body: RefreshRequest | RefreshRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuthorizationResponse, RefreshAuthorizationTokenErrorBody]:
        """Exchanges a refreshToken for a new bearer token.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/oauth/authorize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefreshRequest | RefreshRequestDict](body),
            decoder=json_decoder[AuthorizationResponse],
            error_mapper=refresh_authorization_token_error_mapper,
            request_options=request_options,
        )


class AsyncAuthorizationWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_authorization_token(
        self,
        body: AuthorizationRequest | AuthorizationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthorizationResponse, CreateAuthorizationTokenErrorBody]:
        """Exchanges the Program ID and authentication secret supplied by Leadspace for a bearer token. Tokens expire
        every 24 hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/oauth/authorize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AuthorizationRequest | AuthorizationRequestDict](body),
            decoder=async_json_decoder[AuthorizationResponse],
            error_mapper=create_authorization_token_error_mapper,
            request_options=request_options,
        )

    async def refresh_authorization_token(
        self, body: RefreshRequest | RefreshRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuthorizationResponse, RefreshAuthorizationTokenErrorBody]:
        """Exchanges a refreshToken for a new bearer token.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/oauth/authorize"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RefreshRequest | RefreshRequestDict](body),
            decoder=async_json_decoder[AuthorizationResponse],
            error_mapper=refresh_authorization_token_error_mapper,
            request_options=request_options,
        )
