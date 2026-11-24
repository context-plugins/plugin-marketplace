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
    async_empty_response,
    async_json_decoder,
    empty_response,
    form_body,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.authorize_error import AuthorizeErrorBody, authorize_error_mapper
from ..errors.init_token_request_for_indie_user_error import (
    InitTokenRequestForIndieUserErrorBody,
    init_token_request_for_indie_user_error_mapper,
)
from ..errors.logout_error import LogoutErrorBody, logout_error_mapper
from ..errors.token_error import TokenErrorBody, token_error_mapper
from ..models.indie_user_token_request import IndieUserTokenRequest, IndieUserTokenRequestDict
from ..models.logout_response import LogoutResponse
from ..models.token_response import TokenResponse
from ..server.server import Server


class Login:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LoginWithRawResponse(client, server, auth)

    def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        *,
        state: str | None = None,
        scope: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """This provides details on the login endpoint.

        Args:
            client_id: Value sent with the request.
            redirect_uri: Value sent with the request.
            state: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Method Not Allowed UDAPI1018 - Redirect URI is required Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Unauthorized ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.authorize(
                client_id, redirect_uri, state=state, scope=scope, request_options=request_options
            ),
        )

    def init_token_request_for_indie_user(
        self,
        client_id: str,
        body: IndieUserTokenRequest | IndieUserTokenRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """This API provides the initialize the generate token and it's expiry for an indie user

        Args:
            client_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1017 - API Key is required <br/>UDAPI1024 - App Secret is required <br/>
                Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests Unauthorized ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.init_token_request_for_indie_user(client_id, body, request_options=request_options)
        )

    def logout(self, *, request_options: RequestOptionsOrDict | None = None) -> LogoutResponse:
        """Send a ``DELETE`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | OAuthClientException |
                RawError``."""
        return unwrap(self._with_raw_response.logout(request_options=request_options))

    def token(
        self,
        code: str,
        client_id: str,
        client_secret: str,
        redirect_uri: str,
        grant_type: str,
        *,
        refresh_extended_token: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """This API provides the functionality to obtain opaque token from authorization_code exchange and also provides
        the user’s profile in the same response.

        Args:
            code: Value sent with the request.
            client_id: OAuth API key that is a public identifier for app
            client_secret: OAuth client secret that is a private secret known only to app and authorization server
            redirect_uri: Authorization server will redirect the user back to the application via redirect url
            grant_type: Type of grant used to get an access token
            refresh_extended_token: Whether to refresh (regenerate) the extended access token. Defaults to false when
                absent. Set to true to refresh; false or omit to reuse an existing extended token when available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1017 - API Key is required <br/>UDAPI1018 - Redirect URI is required
                <br/>UDAPI1022 - Code is required <br/>UDAPI1023 - Grant type is required <br/>UDAPI1024 - App Secret is
                required <br/> Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Unauthorized ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.token(
                code,
                client_id,
                client_secret,
                redirect_uri,
                grant_type,
                refresh_extended_token=refresh_extended_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> LoginWithRawResponse:
        return self._with_raw_response


class AsyncLogin:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLoginWithRawResponse(client, server, auth)

    async def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        *,
        state: str | None = None,
        scope: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """This provides details on the login endpoint.

        Args:
            client_id: Value sent with the request.
            redirect_uri: Value sent with the request.
            state: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Method Not Allowed UDAPI1018 - Redirect URI is required Internal Server Error Forbidden Locked
                Unprocessable Entity Too Many Requests Unauthorized ``error`` is ``ApiGatewayErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.authorize(
                client_id, redirect_uri, state=state, scope=scope, request_options=request_options
            ),
        )

    async def init_token_request_for_indie_user(
        self,
        client_id: str,
        body: IndieUserTokenRequest | IndieUserTokenRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """This API provides the initialize the generate token and it's expiry for an indie user

        Args:
            client_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1017 - API Key is required <br/>UDAPI1024 - App Secret is required <br/>
                Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests Unauthorized ``error`` is
                ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.init_token_request_for_indie_user(
                client_id, body, request_options=request_options
            ),
        )

    async def logout(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> LogoutResponse:
        """Send a ``DELETE`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests Authorization Failure ``error`` is ``ApiGatewayErrorResponse | OAuthClientException |
                RawError``."""
        return unwrap(await self._with_raw_response.logout(request_options=request_options))

    async def token(
        self,
        code: str,
        client_id: str,
        client_secret: str,
        redirect_uri: str,
        grant_type: str,
        *,
        refresh_extended_token: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TokenResponse:
        """This API provides the functionality to obtain opaque token from authorization_code exchange and also provides
        the user’s profile in the same response.

        Args:
            code: Value sent with the request.
            client_id: OAuth API key that is a public identifier for app
            client_secret: OAuth client secret that is a private secret known only to app and authorization server
            redirect_uri: Authorization server will redirect the user back to the application via redirect url
            grant_type: Type of grant used to get an access token
            refresh_extended_token: Whether to refresh (regenerate) the extended access token. Defaults to false when
                absent. Set to true to refresh; false or omit to reuse an existing extended token when available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed UDAPI1017 - API Key is required <br/>UDAPI1018 - Redirect URI is required
                <br/>UDAPI1022 - Code is required <br/>UDAPI1023 - Grant type is required <br/>UDAPI1024 - App Secret is
                required <br/> Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                Unauthorized ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.token(
                code,
                client_id,
                client_secret,
                redirect_uri,
                grant_type,
                refresh_extended_token=refresh_extended_token,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLoginWithRawResponse:
        return self._with_raw_response


class LoginWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        *,
        state: str | None = None,
        scope: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AuthorizeErrorBody]:
        """This provides details on the login endpoint.

        Args:
            client_id: Value sent with the request.
            redirect_uri: Value sent with the request.
            state: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/login/authorization/dialog"),
            query_params=[
                param[str]("client_id", client_id),
                param[str]("redirect_uri", redirect_uri),
                param[str | None]("state", state),
                param[str | None]("scope", scope),
            ],
            decoder=empty_response,
            error_mapper=authorize_error_mapper,
            request_options=request_options,
        )

    def init_token_request_for_indie_user(
        self,
        client_id: str,
        body: IndieUserTokenRequest | IndieUserTokenRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, InitTokenRequestForIndieUserErrorBody]:
        """This API provides the initialize the generate token and it's expiry for an indie user

        Args:
            client_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/login/auth/token/request/{client_id}"),
            path_params=[param[str]("client_id", client_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IndieUserTokenRequest | IndieUserTokenRequestDict](body),
            decoder=json_decoder[TokenResponse],
            error_mapper=init_token_request_for_indie_user_error_mapper,
            request_options=request_options,
        )

    def logout(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LogoutResponse, LogoutErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/logout"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[LogoutResponse],
            error_mapper=logout_error_mapper,
            request_options=request_options,
        )

    def token(
        self,
        code: str,
        client_id: str,
        client_secret: str,
        redirect_uri: str,
        grant_type: str,
        *,
        refresh_extended_token: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, TokenErrorBody]:
        """This API provides the functionality to obtain opaque token from authorization_code exchange and also provides
        the user’s profile in the same response.

        Args:
            code: Value sent with the request.
            client_id: OAuth API key that is a public identifier for app
            client_secret: OAuth client secret that is a private secret known only to app and authorization server
            redirect_uri: Authorization server will redirect the user back to the application via redirect url
            grant_type: Type of grant used to get an access token
            refresh_extended_token: Whether to refresh (regenerate) the extended access token. Defaults to false when
                absent. Set to true to refresh; false or omit to reuse an existing extended token when available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/login/authorization/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[str]("code", code),
                param[str]("client_id", client_id),
                param[str]("client_secret", client_secret),
                param[str]("redirect_uri", redirect_uri),
                param[str]("grant_type", grant_type),
                param[bool | None]("refresh_extended_token", refresh_extended_token),
            ),
            decoder=json_decoder[TokenResponse],
            error_mapper=token_error_mapper,
            request_options=request_options,
        )


class AsyncLoginWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def authorize(
        self,
        client_id: str,
        redirect_uri: str,
        *,
        state: str | None = None,
        scope: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AuthorizeErrorBody]:
        """This provides details on the login endpoint.

        Args:
            client_id: Value sent with the request.
            redirect_uri: Value sent with the request.
            state: Value sent with the request.
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/login/authorization/dialog"),
            query_params=[
                param[str]("client_id", client_id),
                param[str]("redirect_uri", redirect_uri),
                param[str | None]("state", state),
                param[str | None]("scope", scope),
            ],
            decoder=async_empty_response,
            error_mapper=authorize_error_mapper,
            request_options=request_options,
        )

    async def init_token_request_for_indie_user(
        self,
        client_id: str,
        body: IndieUserTokenRequest | IndieUserTokenRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, InitTokenRequestForIndieUserErrorBody]:
        """This API provides the initialize the generate token and it's expiry for an indie user

        Args:
            client_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/login/auth/token/request/{client_id}"),
            path_params=[param[str]("client_id", client_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[IndieUserTokenRequest | IndieUserTokenRequestDict](body),
            decoder=async_json_decoder[TokenResponse],
            error_mapper=init_token_request_for_indie_user_error_mapper,
            request_options=request_options,
        )

    async def logout(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LogoutResponse, LogoutErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/logout"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[LogoutResponse],
            error_mapper=logout_error_mapper,
            request_options=request_options,
        )

    async def token(
        self,
        code: str,
        client_id: str,
        client_secret: str,
        redirect_uri: str,
        grant_type: str,
        *,
        refresh_extended_token: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TokenResponse, TokenErrorBody]:
        """This API provides the functionality to obtain opaque token from authorization_code exchange and also provides
        the user’s profile in the same response.

        Args:
            code: Value sent with the request.
            client_id: OAuth API key that is a public identifier for app
            client_secret: OAuth client secret that is a private secret known only to app and authorization server
            redirect_uri: Authorization server will redirect the user back to the application via redirect url
            grant_type: Type of grant used to get an access token
            refresh_extended_token: Whether to refresh (regenerate) the extended access token. Defaults to false when
                absent. Set to true to refresh; false or omit to reuse an existing extended token when available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/login/authorization/token"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=form_body(
                param[str]("code", code),
                param[str]("client_id", client_id),
                param[str]("client_secret", client_secret),
                param[str]("redirect_uri", redirect_uri),
                param[str]("grant_type", grant_type),
                param[bool | None]("refresh_extended_token", refresh_extended_token),
            ),
            decoder=async_json_decoder[TokenResponse],
            error_mapper=token_error_mapper,
            request_options=request_options,
        )
