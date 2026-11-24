from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    empty_response,
    param,
    unwrap,
)
from ..errors.authorize_error import AuthorizeErrorBody, authorize_error_mapper
from ..models.enums.code_challenge_method import CodeChallengeMethodOrStr
from ..server.server import Server


class Authorizations:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AuthorizationsWithRawResponse(client, server)

    def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        response_type: str,
        *,
        scope: str | None = None,
        state: str | None = None,
        code_challenge: str | None = None,
        code_challenge_method: CodeChallengeMethodOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed),
        then redirects back to your ``redirect_uri`` with a ``code`` and ``state``.

        Args:
            client_id: The OAuth application client ID (``uid``).
            redirect_uri: Must exactly match one of the app's configured redirect URIs.
            response_type: Must be ``code`` for the authorization code flow.
            scope: Space-delimited list of requested scopes.
            state: Opaque value returned to your callback for CSRF protection.
            code_challenge: PKCE code challenge. Required for public clients.
            code_challenge_method: PKCE challenge method (``plain`` or ``S256``). Required for public clients when using
                PKCE.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: The request is invalid or missing required parameters. Client authentication failed or the token
                is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(
            self._with_raw_response.authorize(
                client_id,
                redirect_uri,
                response_type,
                scope=scope,
                state=state,
                code_challenge=code_challenge,
                code_challenge_method=code_challenge_method,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AuthorizationsWithRawResponse:
        return self._with_raw_response


class AsyncAuthorizations:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAuthorizationsWithRawResponse(client, server)

    async def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        response_type: str,
        *,
        scope: str | None = None,
        state: str | None = None,
        code_challenge: str | None = None,
        code_challenge_method: CodeChallengeMethodOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed),
        then redirects back to your ``redirect_uri`` with a ``code`` and ``state``.

        Args:
            client_id: The OAuth application client ID (``uid``).
            redirect_uri: Must exactly match one of the app's configured redirect URIs.
            response_type: Must be ``code`` for the authorization code flow.
            scope: Space-delimited list of requested scopes.
            state: Opaque value returned to your callback for CSRF protection.
            code_challenge: PKCE code challenge. Required for public clients.
            code_challenge_method: PKCE challenge method (``plain`` or ``S256``). Required for public clients when using
                PKCE.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: The request is invalid or missing required parameters. Client authentication failed or the token
                is invalid. ``error`` is ``OAuthError | RawError``."""
        return unwrap(
            await self._with_raw_response.authorize(
                client_id,
                redirect_uri,
                response_type,
                scope=scope,
                state=state,
                code_challenge=code_challenge,
                code_challenge_method=code_challenge_method,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuthorizationsWithRawResponse:
        return self._with_raw_response


class AuthorizationsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        response_type: str,
        *,
        scope: str | None = None,
        state: str | None = None,
        code_challenge: str | None = None,
        code_challenge_method: CodeChallengeMethodOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AuthorizeErrorBody]:
        """Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed),
        then redirects back to your ``redirect_uri`` with a ``code`` and ``state``.

        Args:
            client_id: The OAuth application client ID (``uid``).
            redirect_uri: Must exactly match one of the app's configured redirect URIs.
            response_type: Must be ``code`` for the authorization code flow.
            scope: Space-delimited list of requested scopes.
            state: Opaque value returned to your callback for CSRF protection.
            code_challenge: PKCE code challenge. Required for public clients.
            code_challenge_method: PKCE challenge method (``plain`` or ``S256``). Required for public clients when using
                PKCE.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/authorize"),
            query_params=[
                param[str]("client_id", client_id),
                param[str]("redirect_uri", redirect_uri),
                param[str]("response_type", response_type),
                param[str | None]("scope", scope),
                param[str | None]("state", state),
                param[str | None]("code_challenge", code_challenge),
                param[CodeChallengeMethodOrStr | None]("code_challenge_method", code_challenge_method),
            ],
            decoder=empty_response,
            error_mapper=authorize_error_mapper,
            request_options=request_options,
        )


class AsyncAuthorizationsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        response_type: str,
        *,
        scope: str | None = None,
        state: str | None = None,
        code_challenge: str | None = None,
        code_challenge_method: CodeChallengeMethodOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AuthorizeErrorBody]:
        """Starts the OAuth2 authorization code flow. This endpoint redirects the user to login and consent (if needed),
        then redirects back to your ``redirect_uri`` with a ``code`` and ``state``.

        Args:
            client_id: The OAuth application client ID (``uid``).
            redirect_uri: Must exactly match one of the app's configured redirect URIs.
            response_type: Must be ``code`` for the authorization code flow.
            scope: Space-delimited list of requested scopes.
            state: Opaque value returned to your callback for CSRF protection.
            code_challenge: PKCE code challenge. Required for public clients.
            code_challenge_method: PKCE challenge method (``plain`` or ``S256``). Required for public clients when using
                PKCE.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_o_auth2_authorizations_api("/oauth/authorize"),
            query_params=[
                param[str]("client_id", client_id),
                param[str]("redirect_uri", redirect_uri),
                param[str]("response_type", response_type),
                param[str | None]("scope", scope),
                param[str | None]("state", state),
                param[str | None]("code_challenge", code_challenge),
                param[CodeChallengeMethodOrStr | None]("code_challenge_method", code_challenge_method),
            ],
            decoder=async_empty_response,
            error_mapper=authorize_error_mapper,
            request_options=request_options,
        )
