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
from ..errors.get_account_usage_stats_error import GetAccountUsageStatsErrorBody, get_account_usage_stats_error_mapper
from ..models.account_usage_stats_response import AccountUsageStatsResponse
from ..server.server import Server


class AccountManagement:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountManagementWithRawResponse(client, server, auth)

    def get_account_usage_stats(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> AccountUsageStatsResponse:
        """Retrieve your current API credit usage statistics including used, remaining, and total credits.

        *Endpoint*: **(GET) https://api.lusha.com/account/usage**

        **Rate Limits**: This endpoint has a specific rate limit of 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account usage statistics retrieved successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Too many requests - rate limit exceeded Internal server
                error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_account_usage_stats(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountManagementWithRawResponse:
        return self._with_raw_response


class AsyncAccountManagement:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountManagementWithRawResponse(client, server, auth)

    async def get_account_usage_stats(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AccountUsageStatsResponse:
        """Retrieve your current API credit usage statistics including used, remaining, and total credits.

        *Endpoint*: **(GET) https://api.lusha.com/account/usage**

        **Rate Limits**: This endpoint has a specific rate limit of 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account usage statistics retrieved successfully

        Raises:
            ApiError: Unauthorized - invalid or missing API key Too many requests - rate limit exceeded Internal server
                error ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_account_usage_stats(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountManagementWithRawResponse:
        return self._with_raw_response


class AccountManagementWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account_usage_stats(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageStatsResponse, GetAccountUsageStatsErrorBody]:
        """Retrieve your current API credit usage statistics including used, remaining, and total credits.

        *Endpoint*: **(GET) https://api.lusha.com/account/usage**

        **Rate Limits**: This endpoint has a specific rate limit of 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AccountUsageStatsResponse],
            error_mapper=get_account_usage_stats_error_mapper,
            request_options=request_options,
        )


class AsyncAccountManagementWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account_usage_stats(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageStatsResponse, GetAccountUsageStatsErrorBody]:
        """Retrieve your current API credit usage statistics including used, remaining, and total credits.

        *Endpoint*: **(GET) https://api.lusha.com/account/usage**

        **Rate Limits**: This endpoint has a specific rate limit of 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AccountUsageStatsResponse],
            error_mapper=get_account_usage_stats_error_mapper,
            request_options=request_options,
        )
