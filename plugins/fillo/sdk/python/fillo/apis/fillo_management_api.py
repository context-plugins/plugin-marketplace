from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class FilloManagementApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FilloManagementApiWithRawResponse(client, server)

    def discover_fillo_api(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Signed-out index of the Management API, authentication docs, OpenAPI contract, webhooks, MCP server, and
        official CLI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Fillo API discovery document.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.discover_fillo_api(request_options=request_options))

    @property
    def with_raw_response(self) -> FilloManagementApiWithRawResponse:
        return self._with_raw_response


class AsyncFilloManagementApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFilloManagementApiWithRawResponse(client, server)

    async def discover_fillo_api(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Signed-out index of the Management API, authentication docs, OpenAPI contract, webhooks, MCP server, and
        official CLI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Fillo API discovery document.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.discover_fillo_api(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncFilloManagementApiWithRawResponse:
        return self._with_raw_response


class FilloManagementApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def discover_fillo_api(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Signed-out index of the Management API, authentication docs, OpenAPI contract, webhooks, MCP server, and
        official CLI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncFilloManagementApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def discover_fillo_api(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Signed-out index of the Management API, authentication docs, OpenAPI contract, webhooks, MCP server, and
        official CLI.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
