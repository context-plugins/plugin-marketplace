from __future__ import annotations

from typing import Any
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
from ..errors.introspect_error import IntrospectErrorBody, introspect_error_mapper
from ..errors.revoke_error import RevokeErrorBody, revoke_error_mapper
from ..errors.token_error import TokenErrorBody, token_error_mapper
from ..errors.token_info_error import TokenInfoErrorBody, token_info_error_mapper
from ..models.introspection_response import IntrospectionResponse
from ..models.oauth_introspect_request import OauthIntrospectRequest, OauthIntrospectRequestDict
from ..models.oauth_revoke_request import OauthRevokeRequest, OauthRevokeRequestDict
from ..models.oauth_token_request import OauthTokenRequest, OauthTokenRequestDict
from ..models.token_info_response import TokenInfoResponse
from ..models.token_response import TokenResponse
from ..server.server import Server


class Tokens:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = TokensWithRawResponse(client, server)

    def introspect(
        self,
        *,
        body: OauthIntrospectRequest | OauthIntrospectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> IntrospectionResponse:
        """Returns whether a token is active and metadata about the token. Send parameters as
        ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid or missing required parameters. Client authentication failed or the token
                is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(self._with_raw_response.introspect(body=body, request_options=request_options))

    def revoke(
        self,
        *,
        body: OauthRevokeRequest | OauthRevokeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Revokes an access token or refresh token. Send parameters as ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Client authentication failed or the token is invalid. The authenticated client or token is not
                allowed to perform this action. ``error`` is ``OAuthError | RawError``."""
        return unwrap(self._with_raw_response.revoke(body=body, request_options=request_options))

    def token(
        self,
        *,
        body: OauthTokenRequest | OauthTokenRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token.
        Send parameters as application/x-www-form-urlencoded.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid or missing required parameters. Client authentication failed or the token
                is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(self._with_raw_response.token(body=body, request_options=request_options))

    def token_info(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> TokenInfoResponse:
        """Returns metadata for the current access token.

        Args:
            authorization: Bearer access token (``Bearer <access_token>``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Client authentication failed or the token is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(self._with_raw_response.token_info(authorization, request_options=request_options))

    @property
    def with_raw_response(self) -> TokensWithRawResponse:
        return self._with_raw_response


class AsyncTokens:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncTokensWithRawResponse(client, server)

    async def introspect(
        self,
        *,
        body: OauthIntrospectRequest | OauthIntrospectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> IntrospectionResponse:
        """Returns whether a token is active and metadata about the token. Send parameters as
        ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid or missing required parameters. Client authentication failed or the token
                is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(await self._with_raw_response.introspect(body=body, request_options=request_options))

    async def revoke(
        self,
        *,
        body: OauthRevokeRequest | OauthRevokeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Revokes an access token or refresh token. Send parameters as ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Client authentication failed or the token is invalid. The authenticated client or token is not
                allowed to perform this action. ``error`` is ``OAuthError | RawError``."""
        return unwrap(await self._with_raw_response.revoke(body=body, request_options=request_options))

    async def token(
        self,
        *,
        body: OauthTokenRequest | OauthTokenRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token.
        Send parameters as application/x-www-form-urlencoded.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: The request is invalid or missing required parameters. Client authentication failed or the token
                is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(await self._with_raw_response.token(body=body, request_options=request_options))

    async def token_info(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> TokenInfoResponse:
        """Returns metadata for the current access token.

        Args:
            authorization: Bearer access token (``Bearer <access_token>``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Client authentication failed or the token is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(await self._with_raw_response.token_info(authorization, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTokensWithRawResponse:
        return self._with_raw_response


class TokensWithRawResponse(BaseRawResponse[RawClient, Server]):
    def introspect(
        self,
        *,
        body: OauthIntrospectRequest | OauthIntrospectRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[IntrospectionResponse, IntrospectErrorBody]:
        """Returns whether a token is active and metadata about the token. Send parameters as
        ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/introspect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OauthIntrospectRequest | OauthIntrospectRequestDict | None](body),
            decoder=json_decoder[IntrospectionResponse],
            error_mapper=introspect_error_mapper,
            request_options=request_options,
        )

    def revoke(
        self,
        *,
        body: OauthRevokeRequest | OauthRevokeRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RevokeErrorBody]:
        """Revokes an access token or refresh token. Send parameters as ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/revoke"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OauthRevokeRequest | OauthRevokeRequestDict | None](body),
            decoder=json_decoder[Any],
            error_mapper=revoke_error_mapper,
            request_options=request_options,
        )

    def token(
        self,
        *,
        body: OauthTokenRequest | OauthTokenRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, TokenErrorBody]:
        """Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token.
        Send parameters as application/x-www-form-urlencoded.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OauthTokenRequest | OauthTokenRequestDict | None](body),
            decoder=json_decoder[TokenResponse],
            error_mapper=token_error_mapper,
            request_options=request_options,
        )

    def token_info(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TokenInfoResponse, TokenInfoErrorBody]:
        """Returns metadata for the current access token.

        Args:
            authorization: Bearer access token (``Bearer <access_token>``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/token/info"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[TokenInfoResponse],
            error_mapper=token_info_error_mapper,
            request_options=request_options,
        )


class AsyncTokensWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def introspect(
        self,
        *,
        body: OauthIntrospectRequest | OauthIntrospectRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[IntrospectionResponse, IntrospectErrorBody]:
        """Returns whether a token is active and metadata about the token. Send parameters as
        ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/introspect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OauthIntrospectRequest | OauthIntrospectRequestDict | None](body),
            decoder=async_json_decoder[IntrospectionResponse],
            error_mapper=introspect_error_mapper,
            request_options=request_options,
        )

    async def revoke(
        self,
        *,
        body: OauthRevokeRequest | OauthRevokeRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RevokeErrorBody]:
        """Revokes an access token or refresh token. Send parameters as ``application/x-www-form-urlencoded``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/revoke"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OauthRevokeRequest | OauthRevokeRequestDict | None](body),
            decoder=async_json_decoder[Any],
            error_mapper=revoke_error_mapper,
            request_options=request_options,
        )

    async def token(
        self,
        *,
        body: OauthTokenRequest | OauthTokenRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, TokenErrorBody]:
        """Exchanges an authorization code for an access token, or exchanges a refresh token for a new access token.
        Send parameters as application/x-www-form-urlencoded.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[OauthTokenRequest | OauthTokenRequestDict | None](body),
            decoder=async_json_decoder[TokenResponse],
            error_mapper=token_error_mapper,
            request_options=request_options,
        )

    async def token_info(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TokenInfoResponse, TokenInfoErrorBody]:
        """Returns metadata for the current access token.

        Args:
            authorization: Bearer access token (``Bearer <access_token>``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/token/info"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[TokenInfoResponse],
            error_mapper=token_info_error_mapper,
            request_options=request_options,
        )
