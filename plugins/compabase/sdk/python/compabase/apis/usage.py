from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_usage_error import GetUsageErrorBody, get_usage_error_mapper
from ..models.usage_response import UsageResponse
from ..server.server import Server


class Usage:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsageWithRawResponse(client, server, auth)

    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> UsageResponse:
        """Returns how many requests this key has used in the current UTC calendar month against its limit. This
        endpoint does not consume quota (usage counter is not incremented).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage snapshot

        Raises:
            ApiError: Missing, invalid, or revoked API key. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> UsageWithRawResponse:
        return self._with_raw_response


class AsyncUsage:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsageWithRawResponse(client, server, auth)

    async def get_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> UsageResponse:
        """Returns how many requests this key has used in the current UTC calendar month against its limit. This
        endpoint does not consume quota (usage counter is not incremented).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage snapshot

        Raises:
            ApiError: Missing, invalid, or revoked API key. ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsageWithRawResponse:
        return self._with_raw_response


class UsageWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, GetUsageErrorBody]:
        """Returns how many requests this key has used in the current UTC calendar month against its limit. This
        endpoint does not consume quota (usage counter is not incremented).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            auth_scheme=AnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=json_decoder[UsageResponse],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )


class AsyncUsageWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, GetUsageErrorBody]:
        """Returns how many requests this key has used in the current UTC calendar month against its limit. This
        endpoint does not consume quota (usage counter is not incremented).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key_auth, self._auth.bearer_auth),
            decoder=async_json_decoder[UsageResponse],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )
