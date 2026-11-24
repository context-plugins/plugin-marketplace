from __future__ import annotations

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
from ..models.health_response import HealthResponse
from ..server.server import Server


class System:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SystemWithRawResponse(client, server)

    def get_health_openapi(self, *, request_options: RequestOptionsOrDict | None = None) -> HealthResponse:
        """Returns ``200 OK`` with a small JSON payload as long as the API is responding. Useful as a liveness probe;
        does not check downstream dependencies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Service is healthy

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_health_openapi(request_options=request_options))

    @property
    def with_raw_response(self) -> SystemWithRawResponse:
        return self._with_raw_response


class AsyncSystem:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSystemWithRawResponse(client, server)

    async def get_health_openapi(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> HealthResponse:
        """Returns ``200 OK`` with a small JSON payload as long as the API is responding. Useful as a liveness probe;
        does not check downstream dependencies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Service is healthy

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_health_openapi(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSystemWithRawResponse:
        return self._with_raw_response


class SystemWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_health_openapi(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[HealthResponse, RawError]:
        """Returns ``200 OK`` with a small JSON payload as long as the API is responding. Useful as a liveness probe;
        does not check downstream dependencies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/health"),
            decoder=json_decoder[HealthResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSystemWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_health_openapi(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[HealthResponse, RawError]:
        """Returns ``200 OK`` with a small JSON payload as long as the API is responding. Useful as a liveness probe;
        does not check downstream dependencies.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/health"),
            decoder=async_json_decoder[HealthResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
