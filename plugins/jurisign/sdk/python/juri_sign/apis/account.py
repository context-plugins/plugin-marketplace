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
from ..errors.get_account_credits_error import GetAccountCreditsErrorBody, get_account_credits_error_mapper
from ..models.account_credits_response import AccountCreditsResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def get_account_credits(self, *, request_options: RequestOptionsOrDict | None = None) -> AccountCreditsResponse:
        """Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of
        the authenticated token.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Credit balance

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``Unauthenticated1 | RawError``."""
        return unwrap(self._with_raw_response.get_account_credits(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def get_account_credits(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AccountCreditsResponse:
        """Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of
        the authenticated token.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Credit balance

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``Unauthenticated1 | RawError``."""
        return unwrap(await self._with_raw_response.get_account_credits(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_account_credits(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountCreditsResponse, GetAccountCreditsErrorBody]:
        """Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of
        the authenticated token.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AccountCreditsResponse],
            error_mapper=get_account_credits_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_account_credits(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountCreditsResponse, GetAccountCreditsErrorBody]:
        """Retrieve your organization's real-time signature credit consumption. Scoped strictly to the organization of
        the authenticated token.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AccountCreditsResponse],
            error_mapper=get_account_credits_error_mapper,
            request_options=request_options,
        )
