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
    form_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.post_token_error import PostTokenErrorBody, post_token_error_mapper
from ..models.token_response import TokenResponse
from ..server.server import Server


class Authentication:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthenticationWithRawResponse(client, server, auth)

    def post_token(
        self,
        basiq_version: str,
        *,
        scope: str | None = None,
        user_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

        Args:
            basiq_version: Value sent with the request.
            scope: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Return token object that will be used for Basiq API requests.

        Raises:
            ApiError: Returns error that server cannot or will not process the request as it does not conform. Returns
                error indicating that server can't find requested resource. Returns error response code indicates that
                the server encountered an unexpected condition that prevented it from fulfilling the request. ``error``
                is ``Token400Error1 | Token404Error1 | Token500Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.post_token(
                basiq_version, scope=scope, user_id=user_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AuthenticationWithRawResponse:
        return self._with_raw_response


class AsyncAuthentication:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthenticationWithRawResponse(client, server, auth)

    async def post_token(
        self,
        basiq_version: str,
        *,
        scope: str | None = None,
        user_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

        Args:
            basiq_version: Value sent with the request.
            scope: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Return token object that will be used for Basiq API requests.

        Raises:
            ApiError: Returns error that server cannot or will not process the request as it does not conform. Returns
                error indicating that server can't find requested resource. Returns error response code indicates that
                the server encountered an unexpected condition that prevented it from fulfilling the request. ``error``
                is ``Token400Error1 | Token404Error1 | Token500Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.post_token(
                basiq_version, scope=scope, user_id=user_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuthenticationWithRawResponse:
        return self._with_raw_response


class AuthenticationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def post_token(
        self,
        basiq_version: str,
        *,
        scope: str | None = None,
        user_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, PostTokenErrorBody]:
        """Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

        Args:
            basiq_version: Value sent with the request.
            scope: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/token"),
            headers=[param[str]("basiq-version", basiq_version), param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(param[str | None]("scope", scope), param[str | None]("userId", user_id)),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[TokenResponse],
            error_mapper=post_token_error_mapper,
            request_options=request_options,
        )


class AsyncAuthenticationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def post_token(
        self,
        basiq_version: str,
        *,
        scope: str | None = None,
        user_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, PostTokenErrorBody]:
        """Use this endpoint to retrieve a token that will be passed as authorization header for Basiq API

        Args:
            basiq_version: Value sent with the request.
            scope: Value sent with the request.
            user_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/token"),
            headers=[param[str]("basiq-version", basiq_version), param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(param[str | None]("scope", scope), param[str | None]("userId", user_id)),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[TokenResponse],
            error_mapper=post_token_error_mapper,
            request_options=request_options,
        )
