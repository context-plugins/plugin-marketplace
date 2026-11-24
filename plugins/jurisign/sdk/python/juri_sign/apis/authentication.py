from __future__ import annotations

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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_sandbox_token_error import CreateSandboxTokenErrorBody, create_sandbox_token_error_mapper
from ..errors.create_token_error import CreateTokenErrorBody, create_token_error_mapper
from ..errors.revoke_token_error import RevokeTokenErrorBody, revoke_token_error_mapper
from ..models.auth_sandbox_token_request import AuthSandboxTokenRequest, AuthSandboxTokenRequestDict
from ..models.auth_sandbox_token_response import AuthSandboxTokenResponse
from ..models.auth_token_request import AuthTokenRequest, AuthTokenRequestDict
from ..models.auth_token_response import AuthTokenResponse
from ..models.message_response import MessageResponse
from ..models.response import Response
from ..server.server import Server


class Authentication:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthenticationWithRawResponse(client, server, auth)

    def create_sandbox_token(
        self,
        body: AuthSandboxTokenRequest | AuthSandboxTokenRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AuthSandboxTokenResponse:
        """Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed
        sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the
        log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are
        isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice
        versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it —
        mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute
        for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sandbox token created successfully

        Raises:
            ApiError: Account not in an organization or organization suspended Invalid credentials or validation error
                Rate limit exceeded (10 attempts/minute for the targeted account, 60/minute for the calling IP) — see
                the Retry-After header ``error`` is ``MessageResponse | ValidationError1 | RawError``."""
        return unwrap(self._with_raw_response.create_sandbox_token(body, request_options=request_options))

    def create_token(
        self, body: AuthTokenRequest | AuthTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> AuthTokenResponse:
        """Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token
        is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write,
        webhooks:manage). Pass ``scopes`` to request a restricted subset instead — every endpoint checks the token's
        abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the
        targeted account, and 60 per minute for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token created successfully

        Raises:
            ApiError: Account not in an organization or organization suspended Invalid credentials or validation error
                Rate limit exceeded (10 attempts/minute for the targeted account, 60/minute for the calling IP) — see
                the Retry-After header ``error`` is ``MessageResponse | ValidationError1 | RawError``."""
        return unwrap(self._with_raw_response.create_token(body, request_options=request_options))

    def get_status(self, *, request_options: RequestOptionsOrDict | None = None) -> Response:
        """Returns the current API status and version information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API is operational

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_status(request_options=request_options))

    def revoke_token(self, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse:
        """Revoke the Bearer token used in this request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token revoked

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.revoke_token(request_options=request_options))

    @property
    def with_raw_response(self) -> AuthenticationWithRawResponse:
        return self._with_raw_response


class AsyncAuthentication:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthenticationWithRawResponse(client, server, auth)

    async def create_sandbox_token(
        self,
        body: AuthSandboxTokenRequest | AuthSandboxTokenRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AuthSandboxTokenResponse:
        """Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed
        sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the
        log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are
        isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice
        versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it —
        mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute
        for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Sandbox token created successfully

        Raises:
            ApiError: Account not in an organization or organization suspended Invalid credentials or validation error
                Rate limit exceeded (10 attempts/minute for the targeted account, 60/minute for the calling IP) — see
                the Retry-After header ``error`` is ``MessageResponse | ValidationError1 | RawError``."""
        return unwrap(await self._with_raw_response.create_sandbox_token(body, request_options=request_options))

    async def create_token(
        self, body: AuthTokenRequest | AuthTokenRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AuthTokenResponse:
        """Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token
        is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write,
        webhooks:manage). Pass ``scopes`` to request a restricted subset instead — every endpoint checks the token's
        abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the
        targeted account, and 60 per minute for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token created successfully

        Raises:
            ApiError: Account not in an organization or organization suspended Invalid credentials or validation error
                Rate limit exceeded (10 attempts/minute for the targeted account, 60/minute for the calling IP) — see
                the Retry-After header ``error`` is ``MessageResponse | ValidationError1 | RawError``."""
        return unwrap(await self._with_raw_response.create_token(body, request_options=request_options))

    async def get_status(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Response:
        """Returns the current API status and version information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API is operational

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_status(request_options=request_options))

    async def revoke_token(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> MessageResponse:
        """Revoke the Bearer token used in this request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Token revoked

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.revoke_token(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAuthenticationWithRawResponse:
        return self._with_raw_response


class AuthenticationWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sandbox_token(
        self,
        body: AuthSandboxTokenRequest | AuthSandboxTokenRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthSandboxTokenResponse, CreateSandboxTokenErrorBody]:
        """Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed
        sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the
        log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are
        isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice
        versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it —
        mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute
        for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/sandbox-token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AuthSandboxTokenRequest | AuthSandboxTokenRequestDict](body),
            decoder=json_decoder[AuthSandboxTokenResponse],
            error_mapper=create_sandbox_token_error_mapper,
            request_options=request_options,
        )

    def create_token(
        self, body: AuthTokenRequest | AuthTokenRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AuthTokenResponse, CreateTokenErrorBody]:
        """Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token
        is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write,
        webhooks:manage). Pass ``scopes`` to request a restricted subset instead — every endpoint checks the token's
        abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the
        targeted account, and 60 per minute for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AuthTokenRequest | AuthTokenRequestDict](body),
            decoder=json_decoder[AuthTokenResponse],
            error_mapper=create_token_error_mapper,
            request_options=request_options,
        )

    def get_status(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Response, RawError]:
        """Returns the current API status and version information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/"),
            decoder=json_decoder[Response],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def revoke_token(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, RevokeTokenErrorBody]:
        """Revoke the Bearer token used in this request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/auth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=revoke_token_error_mapper,
            request_options=request_options,
        )


class AsyncAuthenticationWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sandbox_token(
        self,
        body: AuthSandboxTokenRequest | AuthSandboxTokenRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AuthSandboxTokenResponse, CreateSandboxTokenErrorBody]:
        """Authenticate with the same email/password as POST /auth/token, but obtain a sandbox token instead (prefixed
        sandbox_...). Requests made with this token never send real SMS or emails (SMS are logged, emails go through the
        log mailer) and never deduct signature credits. Documents and signature requests created in sandbox mode are
        isolated from your organization's real data: they never appear in a normal (non-sandbox) request, and vice
        versa. A sandbox token can only be used with the sandbox_ prefix, and a normal token can never be used with it —
        mixing the two returns 401. Rate limited to 10 attempts per minute for the targeted account, and 60 per minute
        for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/sandbox-token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AuthSandboxTokenRequest | AuthSandboxTokenRequestDict](body),
            decoder=async_json_decoder[AuthSandboxTokenResponse],
            error_mapper=create_sandbox_token_error_mapper,
            request_options=request_options,
        )

    async def create_token(
        self, body: AuthTokenRequest | AuthTokenRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AuthTokenResponse, CreateTokenErrorBody]:
        """Authenticate with email/password to obtain a Bearer token, scoped to your organization. By default the token
        is granted all 5 available scopes (documents:read, documents:write, sign-requests:read, sign-requests:write,
        webhooks:manage). Pass ``scopes`` to request a restricted subset instead — every endpoint checks the token's
        abilities and returns 403 if the required scope is missing. Rate limited to 10 attempts per minute for the
        targeted account, and 60 per minute for the calling IP.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/auth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AuthTokenRequest | AuthTokenRequestDict](body),
            decoder=async_json_decoder[AuthTokenResponse],
            error_mapper=create_token_error_mapper,
            request_options=request_options,
        )

    async def get_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Response, RawError]:
        """Returns the current API status and version information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/"),
            decoder=async_json_decoder[Response],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def revoke_token(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, RevokeTokenErrorBody]:
        """Revoke the Bearer token used in this request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/auth/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=revoke_token_error_mapper,
            request_options=request_options,
        )
