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
from ..errors.balance_show_error import BalanceShowErrorBody, balance_show_error_mapper
from ..models.api_v1_balance_response import ApiV1BalanceResponse
from ..server.server import Server


class AccountBalance:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountBalanceWithRawResponse(client, server, auth)

    def balance_show(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1BalanceResponse:
        """Retrieve the current account balance for the authenticated user.

        **Balance Representation:**
        - Returns balance in account currency (typically USD)
        - Value is rounded to 2 decimal places
        - Supports both JSON and plain text formats

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns account balance in JSON format with 2 decimal places

        Raises:
            ApiError: Returns 403 error when API token is incorrect ``error`` is ``ApiV1Balance403Error1 |
                RawError``."""
        return unwrap(self._with_raw_response.balance_show(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountBalanceWithRawResponse:
        return self._with_raw_response


class AsyncAccountBalance:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountBalanceWithRawResponse(client, server, auth)

    async def balance_show(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiV1BalanceResponse:
        """Retrieve the current account balance for the authenticated user.

        **Balance Representation:**
        - Returns balance in account currency (typically USD)
        - Value is rounded to 2 decimal places
        - Supports both JSON and plain text formats

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns account balance in JSON format with 2 decimal places

        Raises:
            ApiError: Returns 403 error when API token is incorrect ``error`` is ``ApiV1Balance403Error1 |
                RawError``."""
        return unwrap(await self._with_raw_response.balance_show(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountBalanceWithRawResponse:
        return self._with_raw_response


class AccountBalanceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def balance_show(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1BalanceResponse, BalanceShowErrorBody]:
        """Retrieve the current account balance for the authenticated user.

        **Balance Representation:**
        - Returns balance in account currency (typically USD)
        - Value is rounded to 2 decimal places
        - Supports both JSON and plain text formats

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/balance"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1BalanceResponse],
            error_mapper=balance_show_error_mapper,
            request_options=request_options,
        )


class AsyncAccountBalanceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def balance_show(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1BalanceResponse, BalanceShowErrorBody]:
        """Retrieve the current account balance for the authenticated user.

        **Balance Representation:**
        - Returns balance in account currency (typically USD)
        - Value is rounded to 2 decimal places
        - Supports both JSON and plain text formats

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/balance"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1BalanceResponse],
            error_mapper=balance_show_error_mapper,
            request_options=request_options,
        )
