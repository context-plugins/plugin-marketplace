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
from ..errors.get_usage_error import GetUsageErrorBody, get_usage_error_mapper
from ..models.usage import Usage
from ..server.server import Server


class UsageApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UsageApiWithRawResponse(client, server, auth)

    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> Usage:
        """The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live
        key and a test key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage this month.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> UsageApiWithRawResponse:
        return self._with_raw_response


class AsyncUsageApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUsageApiWithRawResponse(client, server, auth)

    async def get_usage(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Usage:
        """The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live
        key and a test key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Usage this month.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_usage(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUsageApiWithRawResponse:
        return self._with_raw_response


class UsageApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_usage(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Usage, GetUsageErrorBody]:
        """The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live
        key and a test key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usage"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Usage],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )


class AsyncUsageApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_usage(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Usage, GetUsageErrorBody]:
        """The workspace's plan and what it has used in the current calendar month (UTC). The same numbers with a live
        key and a test key.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/usage"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Usage],
            error_mapper=get_usage_error_mapper,
            request_options=request_options,
        )
