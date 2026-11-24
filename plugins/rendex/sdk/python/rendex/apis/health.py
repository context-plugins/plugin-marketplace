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
from ..errors.deep_health_check_error import DeepHealthCheckErrorBody, deep_health_check_error_mapper
from ..models.deep_health_response import DeepHealthResponse
from ..models.health_response import HealthResponse
from ..server.server import Server


class Health:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = HealthWithRawResponse(client, server)

    def deep_health_check(self, *, request_options: RequestOptionsOrDict | None = None) -> DeepHealthResponse:
        """Verifies connectivity to all external dependencies (database, billing).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All dependencies healthy

        Raises:
            ApiError: One or more dependencies unhealthy ``error`` is ``DeepHealthResponse | RawError``."""
        return unwrap(self._with_raw_response.deep_health_check(request_options=request_options))

    def health_check(self, *, request_options: RequestOptionsOrDict | None = None) -> HealthResponse:
        """Returns 200 if the API worker is running.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Service is alive

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.health_check(request_options=request_options))

    @property
    def with_raw_response(self) -> HealthWithRawResponse:
        return self._with_raw_response


class AsyncHealth:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncHealthWithRawResponse(client, server)

    async def deep_health_check(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DeepHealthResponse:
        """Verifies connectivity to all external dependencies (database, billing).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All dependencies healthy

        Raises:
            ApiError: One or more dependencies unhealthy ``error`` is ``DeepHealthResponse | RawError``."""
        return unwrap(await self._with_raw_response.deep_health_check(request_options=request_options))

    async def health_check(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> HealthResponse:
        """Returns 200 if the API worker is running.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Service is alive

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.health_check(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncHealthWithRawResponse:
        return self._with_raw_response


class HealthWithRawResponse(BaseRawResponse[RawClient, Server]):
    def deep_health_check(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DeepHealthResponse, DeepHealthCheckErrorBody]:
        """Verifies connectivity to all external dependencies (database, billing).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/health/deep"),
            decoder=json_decoder[DeepHealthResponse],
            error_mapper=deep_health_check_error_mapper,
            request_options=request_options,
        )

    def health_check(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[HealthResponse, RawError]:
        """Returns 200 if the API worker is running.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/health"),
            decoder=json_decoder[HealthResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncHealthWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def deep_health_check(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DeepHealthResponse, DeepHealthCheckErrorBody]:
        """Verifies connectivity to all external dependencies (database, billing).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/health/deep"),
            decoder=async_json_decoder[DeepHealthResponse],
            error_mapper=deep_health_check_error_mapper,
            request_options=request_options,
        )

    async def health_check(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[HealthResponse, RawError]:
        """Returns 200 if the API worker is running.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/health"),
            decoder=async_json_decoder[HealthResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
