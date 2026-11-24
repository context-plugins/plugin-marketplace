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
from ..errors.get_credits_error import GetCreditsErrorBody, get_credits_error_mapper
from ..models.credit_balance import CreditBalance
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def get_credits(self, *, request_options: RequestOptionsOrDict | None = None) -> CreditBalance:
        """Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current credit balances.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_credits(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def get_credits(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> CreditBalance:
        """Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current credit balances.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_credits(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_credits(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreditBalance, GetCreditsErrorBody]:
        """Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreditBalance],
            error_mapper=get_credits_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_credits(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CreditBalance, GetCreditsErrorBody]:
        """Return the remaining credit balance across the email, mobile, and search/ICP credit pools.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/credits"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreditBalance],
            error_mapper=get_credits_error_mapper,
            request_options=request_options,
        )
