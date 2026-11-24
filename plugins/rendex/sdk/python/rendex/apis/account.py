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
from ..errors.get_account_error import GetAccountErrorBody, get_account_error_mapper
from ..models.v1_account_response import V1AccountResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def get_account(self, *, request_options: RequestOptionsOrDict | None = None) -> V1AccountResponse:
        """Returns the authenticated account's plan, this month's usage (used / limit / remaining and the reset date),
        the per-minute rate limit, and a recommended upgrade with a one-tap link. Read-only and free — it does not
        consume credits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account summary

        Raises:
            ApiError: Missing or invalid API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_account(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def get_account(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1AccountResponse:
        """Returns the authenticated account's plan, this month's usage (used / limit / remaining and the reset date),
        the per-minute rate limit, and a recommended upgrade with a one-tap link. Read-only and free — it does not
        consume credits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Account summary

        Raises:
            ApiError: Missing or invalid API key ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_account(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1AccountResponse, GetAccountErrorBody]:
        """Returns the authenticated account's plan, this month's usage (used / limit / remaining and the reset date),
        the per-minute rate limit, and a recommended upgrade with a one-tap link. Read-only and free — it does not
        consume credits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/account"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1AccountResponse],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1AccountResponse, GetAccountErrorBody]:
        """Returns the authenticated account's plan, this month's usage (used / limit / remaining and the reset date),
        the per-minute rate limit, and a recommended upgrade with a one-tap link. Read-only and free — it does not
        consume credits.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/account"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1AccountResponse],
            error_mapper=get_account_error_mapper,
            request_options=request_options,
        )
