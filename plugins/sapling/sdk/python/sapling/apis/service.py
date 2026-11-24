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
from ..models.api_v1_liveness_response import ApiV1LivenessResponse
from ..models.api_v1_version_response import ApiV1VersionResponse
from ..server.server import Server


class Service:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ServiceWithRawResponse(client, server)

    def sapling_liveness(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1LivenessResponse:
        """Answers 200 while the API process is up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Alive.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sapling_liveness(request_options=request_options))

    def sapling_version(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiV1VersionResponse:
        """Release and build identifiers of the serving deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Version.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.sapling_version(request_options=request_options))

    @property
    def with_raw_response(self) -> ServiceWithRawResponse:
        return self._with_raw_response


class AsyncService:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncServiceWithRawResponse(client, server)

    async def sapling_liveness(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1LivenessResponse:
        """Answers 200 while the API process is up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Alive.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sapling_liveness(request_options=request_options))

    async def sapling_version(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV1VersionResponse:
        """Release and build identifiers of the serving deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Version.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.sapling_version(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncServiceWithRawResponse:
        return self._with_raw_response


class ServiceWithRawResponse(BaseRawResponse[RawClient, Server]):
    def sapling_liveness(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1LivenessResponse, RawError]:
        """Answers 200 while the API process is up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/liveness"),
            decoder=json_decoder[ApiV1LivenessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def sapling_version(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1VersionResponse, RawError]:
        """Release and build identifiers of the serving deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/version"),
            decoder=json_decoder[ApiV1VersionResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncServiceWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def sapling_liveness(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1LivenessResponse, RawError]:
        """Answers 200 while the API process is up.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/liveness"),
            decoder=async_json_decoder[ApiV1LivenessResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def sapling_version(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1VersionResponse, RawError]:
        """Release and build identifiers of the serving deployment.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/version"),
            decoder=async_json_decoder[ApiV1VersionResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
