from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_system_health_error import GetSystemHealthErrorBody, get_system_health_error_mapper
from ..models.system_health_response import SystemHealthResponse
from ..server.server import Server


class Monitoring:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = MonitoringWithRawResponse(client, server)

    def get_system_health(self, *, request_options: RequestOptionsOrDict | None = None) -> SystemHealthResponse:
        """Returns the current health status of the Skribble API. Use this endpoint to monitor system availability and
        responsiveness.

        ``status:UP`` indicates that the system is operational.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(self._with_raw_response.get_system_health(request_options=request_options))

    @property
    def with_raw_response(self) -> MonitoringWithRawResponse:
        return self._with_raw_response


class AsyncMonitoring:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncMonitoringWithRawResponse(client, server)

    async def get_system_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SystemHealthResponse:
        """Returns the current health status of the Skribble API. Use this endpoint to monitor system availability and
        responsiveness.

        ``status:UP`` indicates that the system is operational.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized Not found Too many requests Internal server error Service unavailable
                ``error`` is ``Problem | RawError``."""
        return unwrap(await self._with_raw_response.get_system_health(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncMonitoringWithRawResponse:
        return self._with_raw_response


class MonitoringWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_system_health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SystemHealthResponse, GetSystemHealthErrorBody]:
        """Returns the current health status of the Skribble API. Use this endpoint to monitor system availability and
        responsiveness.

        ``status:UP`` indicates that the system is operational.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_monitoring_api("/management/health"),
            decoder=json_decoder[SystemHealthResponse],
            error_mapper=get_system_health_error_mapper,
            request_options=request_options,
        )


class AsyncMonitoringWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_system_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SystemHealthResponse, GetSystemHealthErrorBody]:
        """Returns the current health status of the Skribble API. Use this endpoint to monitor system availability and
        responsiveness.

        ``status:UP`` indicates that the system is operational.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_skribble_monitoring_api("/management/health"),
            decoder=async_json_decoder[SystemHealthResponse],
            error_mapper=get_system_health_error_mapper,
            request_options=request_options,
        )
