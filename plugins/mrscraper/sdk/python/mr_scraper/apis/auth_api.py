from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..models.subscription_accounts_response import SubscriptionAccountsResponse
from ..server.server import Server


class AuthApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AuthApiWithRawResponse(client, server, auth)

    def get_subscription_accounts(
        self, *, x_backoffice_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SubscriptionAccountsResponse:
        """Send a ``GET`` request.

        Args:
            x_backoffice_token: Backoffice token to include database connection string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account information; user.databaseConnectionString is empty without a valid backoffice token

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_subscription_accounts(
                x_backoffice_token=x_backoffice_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AuthApiWithRawResponse:
        return self._with_raw_response


class AsyncAuthApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAuthApiWithRawResponse(client, server, auth)

    async def get_subscription_accounts(
        self, *, x_backoffice_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SubscriptionAccountsResponse:
        """Send a ``GET`` request.

        Args:
            x_backoffice_token: Backoffice token to include database connection string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account information; user.databaseConnectionString is empty without a valid backoffice token

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_subscription_accounts(
                x_backoffice_token=x_backoffice_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAuthApiWithRawResponse:
        return self._with_raw_response


class AuthApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_subscription_accounts(
        self, *, x_backoffice_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionAccountsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            x_backoffice_token: Backoffice token to include database connection string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/subscription-accounts"),
            headers=[param[str | None]("x-backoffice-token", x_backoffice_token)],
            auth_scheme=AnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=json_decoder[SubscriptionAccountsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncAuthApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_subscription_accounts(
        self, *, x_backoffice_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SubscriptionAccountsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            x_backoffice_token: Backoffice token to include database connection string
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_scraper_service_gateway_auth_api("/subscription-accounts"),
            headers=[param[str | None]("x-backoffice-token", x_backoffice_token)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, self._auth.bearer_auth),
            decoder=async_json_decoder[SubscriptionAccountsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
