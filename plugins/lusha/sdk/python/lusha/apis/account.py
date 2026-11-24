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
        """Returns a full snapshot of your account status:
        - **Credits** — total, used, and remaining for the current billing cycle
        - **Rate limits** — current usage and reset times for daily, hourly, and per-minute windows
        - **Plan** — your current plan category and renewal dates
        - **Pricing** — credit cost per action type across all public API endpoints

        > **Rate limit:** This endpoint is limited to 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved account usage

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
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
        """Returns a full snapshot of your account status:
        - **Credits** — total, used, and remaining for the current billing cycle
        - **Rate limits** — current usage and reset times for daily, hourly, and per-minute windows
        - **Plan** — your current plan category and renewal dates
        - **Pricing** — credit cost per action type across all public API endpoints

        > **Rate limit:** This endpoint is limited to 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved account usage

        Raises:
            ApiError: Unauthorized - invalid or missing API key Forbidden - account inactive, V3 access not enabled, or
                plan does not include this feature Too many requests - rate limit exceeded Internal server error
                ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_account_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]:
        """Returns a full snapshot of your account status:
        - **Credits** — total, used, and remaining for the current billing cycle
        - **Rate limits** — current usage and reset times for daily, hourly, and per-minute windows
        - **Plan** — your current plan category and renewal dates
        - **Pricing** — credit cost per action type across all public API endpoints

        > **Rate limit:** This endpoint is limited to 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/account/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[AccountUsageResponse],
            error_mapper=get_account_usage_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountUsageResponse, GetAccountUsageErrorBody]:
        """Returns a full snapshot of your account status:
        - **Credits** — total, used, and remaining for the current billing cycle
        - **Rate limits** — current usage and reset times for daily, hourly, and per-minute windows
        - **Plan** — your current plan category and renewal dates
        - **Pricing** — credit cost per action type across all public API endpoints

        > **Rate limit:** This endpoint is limited to 5 requests per minute.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/account/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[AccountUsageResponse],
            error_mapper=get_account_usage_error_mapper,
            request_options=request_options,
        )
