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
from ..errors.account_error import AccountErrorBody, account_error_mapper
from ..models.account_envelope import AccountEnvelope
from ..server.server import Server


class AccountApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountApiWithRawResponse(client, server, auth)

    def account(self, *, request_options: RequestOptionsOrDict | None = None) -> AccountEnvelope:
        """Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live |
        sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Authentication error (missing/invalid API key). Rate limited (rate_limit_exceeded); carries
                Retry-After. ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(self._with_raw_response.account(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountApiWithRawResponse:
        return self._with_raw_response


class AsyncAccountApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountApiWithRawResponse(client, server, auth)

    async def account(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> AccountEnvelope:
        """Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live |
        sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Authentication error (missing/invalid API key). Rate limited (rate_limit_exceeded); carries
                Retry-After. ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(await self._with_raw_response.account(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountApiWithRawResponse:
        return self._with_raw_response


class AccountApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def account(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AccountEnvelope, AccountErrorBody]:
        """Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live |
        sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AccountEnvelope],
            error_mapper=account_error_mapper,
            request_options=request_options,
        )


class AsyncAccountApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def account(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AccountEnvelope, AccountErrorBody]:
        """Programmatic introspection of the authenticated key: credit balance, plan (code/name/status), key env (live |
        sandbox) and the per-plan rate limit (requests/minute). Works for live and sandbox keys; free and never billed.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/account"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AccountEnvelope],
            error_mapper=account_error_mapper,
            request_options=request_options,
        )
