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
from ..errors.get_cache_revalidation_usage_error import (
    GetCacheRevalidationUsageErrorBody,
    get_cache_revalidation_usage_error_mapper,
)
from ..models.cache_usage import CacheUsage
from ..server.server import Server


class Analytics:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnalyticsWithRawResponse(client, server, auth)

    def get_cache_revalidation_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> CacheUsage:
        """Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests
        have been used against the organization's plan limit.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cache revalidation usage metrics.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_cache_revalidation_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AnalyticsWithRawResponse:
        return self._with_raw_response


class AsyncAnalytics:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnalyticsWithRawResponse(client, server, auth)

    async def get_cache_revalidation_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CacheUsage:
        """Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests
        have been used against the organization's plan limit.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Cache revalidation usage metrics.

        Raises:
            ApiError: Authentication credentials are missing or invalid. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_cache_revalidation_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAnalyticsWithRawResponse:
        return self._with_raw_response


class AnalyticsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_cache_revalidation_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CacheUsage, GetCacheRevalidationUsageErrorBody]:
        """Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests
        have been used against the organization's plan limit.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/cache-revalidation-usage"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=json_decoder[CacheUsage],
            error_mapper=get_cache_revalidation_usage_error_mapper,
            request_options=request_options,
        )


class AsyncAnalyticsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_cache_revalidation_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CacheUsage, GetCacheRevalidationUsageErrorBody]:
        """Retrieves the organization's current cache revalidation quota usage, showing how many revalidation requests
        have been used against the organization's plan limit.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/cache-revalidation-usage"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.authtoken_auth),
            decoder=async_json_decoder[CacheUsage],
            error_mapper=get_cache_revalidation_usage_error_mapper,
            request_options=request_options,
        )
