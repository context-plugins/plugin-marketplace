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
from ..errors.get_account_usage_error import GetAccountUsageErrorBody, get_account_usage_error_mapper
from ..models.account_usage_response import AccountUsageResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def get_account_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> AccountUsageResponse:
        """Returns the authenticated account's monthly allowance, current usage, billing period, rate limit,
        purchased-credit balance, and total available requests.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current account usage and credit balance.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks account:read scope. ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(self._with_raw_response.get_account_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def get_account_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AccountUsageResponse:
        """Returns the authenticated account's monthly allowance, current usage, billing period, rate limit,
        purchased-credit balance, and total available requests.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current account usage and credit balance.

        Raises:
            ApiError: Missing or invalid API key. Credential lacks account:read scope. ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(await self._with_raw_response.get_account_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]:
        """Returns the authenticated account's monthly allowance, current usage, billing period, rate limit,
        purchased-credit balance, and total available requests.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/account/usage"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AccountUsageResponse],
            error_mapper=get_account_usage_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]:
        """Returns the authenticated account's monthly allowance, current usage, billing period, rate limit,
        purchased-credit balance, and total available requests.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/account/usage"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AccountUsageResponse],
            error_mapper=get_account_usage_error_mapper,
            request_options=request_options,
        )
