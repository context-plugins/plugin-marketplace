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
from ..models.supported_versions import SupportedVersions
from ..server.server import Server


class Versions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VersionsWithRawResponse(client, server)

    def get_api_versions(self, *, request_options: RequestOptionsOrDict | None = None) -> SupportedVersions:
        """Retrieve the list of supported Einstein Bots API versions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Supported API versions

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_api_versions(request_options=request_options))

    @property
    def with_raw_response(self) -> VersionsWithRawResponse:
        return self._with_raw_response


class AsyncVersions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVersionsWithRawResponse(client, server)

    async def get_api_versions(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> SupportedVersions:
        """Retrieve the list of supported Einstein Bots API versions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Supported API versions

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_api_versions(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncVersionsWithRawResponse:
        return self._with_raw_response


class VersionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_api_versions(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SupportedVersions, RawError]:
        """Retrieve the list of supported Einstein Bots API versions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/versions"),
            decoder=json_decoder[SupportedVersions],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncVersionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_api_versions(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SupportedVersions, RawError]:
        """Retrieve the list of supported Einstein Bots API versions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/versions"),
            decoder=async_json_decoder[SupportedVersions],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
