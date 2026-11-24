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
from ..errors.get_me_error import GetMeErrorBody, get_me_error_mapper
from ..errors.get_me_usage_error import GetMeUsageErrorBody, get_me_usage_error_mapper
from ..models.me_response import MeResponse
from ..models.usage_response import UsageResponse
from ..server.server import Server


class Account:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AccountWithRawResponse(client, server, auth)

    def get_me(self, *, request_options: RequestOptionsOrDict | None = None) -> MeResponse:
        """Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the
        request (if any), and the effective dated API version. Use this as the first call in any integration to verify
        credentials and discover capabilities.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current user, plan, limits, key info

        Raises:
            ApiError: Missing or invalid API key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_me(request_options=request_options))

    def get_me_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> UsageResponse:
        """Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts)
        alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy
        burst and back off if you're close to a cap.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage counters vs plan limits

        Raises:
            ApiError: Missing or invalid API key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(self._with_raw_response.get_me_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AccountWithRawResponse:
        return self._with_raw_response


class AsyncAccount:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAccountWithRawResponse(client, server, auth)

    async def get_me(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> MeResponse:
        """Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the
        request (if any), and the effective dated API version. Use this as the first call in any integration to verify
        credentials and discover capabilities.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Current user, plan, limits, key info

        Raises:
            ApiError: Missing or invalid API key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_me(request_options=request_options))

    async def get_me_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> UsageResponse:
        """Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts)
        alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy
        burst and back off if you're close to a cap.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage counters vs plan limits

        Raises:
            ApiError: Missing or invalid API key ``error`` is ``ApiErrorBody | RawError``."""
        return unwrap(await self._with_raw_response.get_me_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAccountWithRawResponse:
        return self._with_raw_response


class AccountWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_me(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[MeResponse, GetMeErrorBody]:
        """Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the
        request (if any), and the effective dated API version. Use this as the first call in any integration to verify
        credentials and discover capabilities.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MeResponse],
            error_mapper=get_me_error_mapper,
            request_options=request_options,
        )

    def get_me_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, GetMeUsageErrorBody]:
        """Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts)
        alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy
        burst and back off if you're close to a cap.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/me/usage"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[UsageResponse],
            error_mapper=get_me_usage_error_mapper,
            request_options=request_options,
        )


class AsyncAccountWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_me(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MeResponse, GetMeErrorBody]:
        """Returns the authenticated user, their current plan + per-resource limits, the API key that authenticated the
        request (if any), and the effective dated API version. Use this as the first call in any integration to verify
        credentials and discover capabilities.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/me"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MeResponse],
            error_mapper=get_me_error_mapper,
            request_options=request_options,
        )

    async def get_me_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, GetMeUsageErrorBody]:
        """Returns this calendar month's usage counters (searches, semantic searches, data calls, keyword alerts)
        alongside the plan's configured limits. Use it to handle 429 responses proactively — check usage before a heavy
        burst and back off if you're close to a cap.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/me/usage"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[UsageResponse],
            error_mapper=get_me_usage_error_mapper,
            request_options=request_options,
        )
