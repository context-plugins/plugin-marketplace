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
from ..errors.health_error import HealthErrorBody, health_error_mapper
from ..models.health_response import HealthResponse
from ..server.server import Server


class System:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SystemWithRawResponse(client, server)

    def health(self, *, request_options: RequestOptionsOrDict | None = None) -> HealthResponse:
        """Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks —
        it will not tell you whether an API key is valid; call GET /usage for that. Free to call.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Internal Server Error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.health(request_options=request_options))

    @property
    def with_raw_response(self) -> SystemWithRawResponse:
        return self._with_raw_response


class AsyncSystem:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSystemWithRawResponse(client, server)

    async def health(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> HealthResponse:
        """Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks —
        it will not tell you whether an API key is valid; call GET /usage for that. Free to call.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful response

        Raises:
            ApiError: Internal Server Error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.health(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSystemWithRawResponse:
        return self._with_raw_response


class SystemWithRawResponse(BaseRawResponse[RawClient, Server]):
    def health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[HealthResponse, HealthErrorBody]:
        """Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks —
        it will not tell you whether an API key is valid; call GET /usage for that. Free to call.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/health"),
            decoder=json_decoder[HealthResponse],
            error_mapper=health_error_mapper,
            request_options=request_options,
        )


class AsyncSystemWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[HealthResponse, HealthErrorBody]:
        """Report whether the API is serving traffic. Takes no credentials, so use it for uptime and readiness checks —
        it will not tell you whether an API key is valid; call GET /usage for that. Free to call.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/health"),
            decoder=async_json_decoder[HealthResponse],
            error_mapper=health_error_mapper,
            request_options=request_options,
        )
