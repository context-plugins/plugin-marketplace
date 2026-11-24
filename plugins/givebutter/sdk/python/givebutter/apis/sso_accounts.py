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
    unwrap,
)
from ..errors.sso_account_error import SsoAccountErrorBody, sso_account_error_mapper
from ..models.sso_account_resource import SsoAccountResource
from ..server.server import Server


class SsoAccounts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SsoAccountsWithRawResponse(client, server, auth)

    def sso_account(self, *, request_options: RequestOptionsOrDict | None = None) -> SsoAccountResource:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``SsoAccountResource``

        Raises:
            ApiError: Unauthenticated ``error`` is ``AuthenticationException1 | RawError``."""
        return unwrap(self._with_raw_response.sso_account(request_options=request_options))

    @property
    def with_raw_response(self) -> SsoAccountsWithRawResponse:
        return self._with_raw_response


class AsyncSsoAccounts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSsoAccountsWithRawResponse(client, server, auth)

    async def sso_account(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SsoAccountResource:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``SsoAccountResource``

        Raises:
            ApiError: Unauthenticated ``error`` is ``AuthenticationException1 | RawError``."""
        return unwrap(await self._with_raw_response.sso_account(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSsoAccountsWithRawResponse:
        return self._with_raw_response


class SsoAccountsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def sso_account(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SsoAccountResource, SsoAccountErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sso/v1/account"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[SsoAccountResource],
            error_mapper=sso_account_error_mapper,
            request_options=request_options,
        )


class AsyncSsoAccountsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def sso_account(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SsoAccountResource, SsoAccountErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sso/v1/account"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[SsoAccountResource],
            error_mapper=sso_account_error_mapper,
            request_options=request_options,
        )
