from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_o_auth_app_error import GetOAuthAppErrorBody, get_o_auth_app_error_mapper
from ..models.o_auth_app import OAuthApp
from ..server.server import Server


class Apps:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AppsWithRawResponse(client, server, auth)

    def get_o_auth_app(self, client_id: str, *, request_options: RequestOptionsOrDict | None = None) -> OAuthApp:
        """Retrieve the details for the provided OAuth App client ID

        Args:
            client_id: The client ID of an OAuth app
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_o_auth_app(client_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AppsWithRawResponse:
        return self._with_raw_response


class AsyncApps:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAppsWithRawResponse(client, server, auth)

    async def get_o_auth_app(
        self, client_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OAuthApp:
        """Retrieve the details for the provided OAuth App client ID

        Args:
            client_id: The client ID of an OAuth app
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_o_auth_app(client_id, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAppsWithRawResponse:
        return self._with_raw_response


class AppsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_o_auth_app(
        self, client_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OAuthApp, GetOAuthAppErrorBody]:
        """Retrieve the details for the provided OAuth App client ID

        Args:
            client_id: The client ID of an OAuth app
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apps/{client_id}"),
            path_params=[param[str]("client_id", client_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OAuthApp],
            error_mapper=get_o_auth_app_error_mapper,
            request_options=request_options,
        )


class AsyncAppsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_o_auth_app(
        self, client_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OAuthApp, GetOAuthAppErrorBody]:
        """Retrieve the details for the provided OAuth App client ID

        Args:
            client_id: The client ID of an OAuth app
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/apps/{client_id}"),
            path_params=[param[str]("client_id", client_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OAuthApp],
            error_mapper=get_o_auth_app_error_mapper,
            request_options=request_options,
        )
