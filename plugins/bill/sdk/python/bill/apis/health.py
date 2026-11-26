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
from ..models.health_check_dto import HealthCheckDto
from ..server.server import Server


class Health:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = HealthWithRawResponse(client, server)

    def get_health_check(self, *, request_options: RequestOptionsOrDict | None = None) -> HealthCheckDto:
        """Returns application health status.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getHealthCheck 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_health_check(request_options=request_options))

    @property
    def with_raw_response(self) -> HealthWithRawResponse:
        return self._with_raw_response


class AsyncHealth:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncHealthWithRawResponse(client, server)

    async def get_health_check(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> HealthCheckDto:
        """Returns application health status.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            getHealthCheck 200 response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_health_check(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncHealthWithRawResponse:
        return self._with_raw_response


class HealthWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_health_check(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[HealthCheckDto, RawError]:
        """Returns application health status.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/health"),
            decoder=json_decoder[HealthCheckDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncHealthWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_health_check(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[HealthCheckDto, RawError]:
        """Returns application health status.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/health"),
            decoder=async_json_decoder[HealthCheckDto],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
