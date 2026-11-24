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
from ..errors.get_api_usage_error import GetApiUsageErrorBody, get_api_usage_error_mapper
from ..models.usage_response import UsageResponse
from ..server.server import Server


class Usage:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsageWithRawResponse(client, server, auth)

    def get_api_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> UsageResponse:
        """Retrieve current API request usage and plan limit information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API usage and plan limit information.

        Raises:
            ApiError: Unauthorized. Missing or invalid X-API-Key. API quota exceeded or rate limit reached. Internal
                server error. The authenticated key/plan is not allowed to perform this request. Request parameters
                failed validation. The service or an upstream dependency is temporarily unavailable. ``error`` is
                ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.get_api_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> UsageWithRawResponse:
        return self._with_raw_response


class AsyncUsage:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsageWithRawResponse(client, server, auth)

    async def get_api_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> UsageResponse:
        """Retrieve current API request usage and plan limit information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            API usage and plan limit information.

        Raises:
            ApiError: Unauthorized. Missing or invalid X-API-Key. API quota exceeded or rate limit reached. Internal
                server error. The authenticated key/plan is not allowed to perform this request. Request parameters
                failed validation. The service or an upstream dependency is temporarily unavailable. ``error`` is
                ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.get_api_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsageWithRawResponse:
        return self._with_raw_response


class UsageWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_usage(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, GetApiUsageErrorBody]:
        """Retrieve current API request usage and plan limit information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[UsageResponse],
            error_mapper=get_api_usage_error_mapper,
            request_options=request_options,
        )


class AsyncUsageWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[UsageResponse, GetApiUsageErrorBody]:
        """Retrieve current API request usage and plan limit information.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/usage"),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[UsageResponse],
            error_mapper=get_api_usage_error_mapper,
            request_options=request_options,
        )
