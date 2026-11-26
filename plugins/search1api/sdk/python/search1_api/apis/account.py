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
    param,
    unwrap,
)
from ..errors.usage_error import UsageErrorBody, usage_error_mapper
from ..models.enums.period import PeriodOrStr
from ..models.usage_response import UsageResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def usage(
        self, *, period: PeriodOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> UsageResponse:
        """Return the remaining credit balance for the authenticated account. Use it to check headroom before starting
        an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Too Many Requests Internal Server Error ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(self._with_raw_response.usage(period=period, request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def usage(
        self, *, period: PeriodOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> UsageResponse:
        """Return the remaining credit balance for the authenticated account. Use it to check headroom before starting
        an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Bad Request Unauthorized Too Many Requests Internal Server Error ``error`` is ``ApiErrorModel |
                RawError``."""
        return unwrap(await self._with_raw_response.usage(period=period, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def usage(
        self, *, period: PeriodOrStr | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, UsageErrorBody]:
        """Return the remaining credit balance for the authenticated account. Use it to check headroom before starting
        an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            query_params=[param[PeriodOrStr | None]("period", period)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[UsageResponse],
            error_mapper=usage_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def usage(
        self, *, period: PeriodOrStr | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, UsageErrorBody]:
        """Return the remaining credit balance for the authenticated account. Use it to check headroom before starting
        an expensive job such as a deepcrawl, or to confirm an API key works. Free to call.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            query_params=[param[PeriodOrStr | None]("period", period)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[UsageResponse],
            error_mapper=usage_error_mapper,
            request_options=request_options,
        )
