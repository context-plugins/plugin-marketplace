from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.list_platforms_error import ListPlatformsErrorBody, list_platforms_error_mapper
from ..models.support_v1_metadata_platforms_response import SupportV1MetadataPlatformsResponse
from ..server.server import Server


class Platforms:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PlatformsWithRawResponse(client, server, auth)

    def list_platforms(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> SupportV1MetadataPlatformsResponse:
        """Returns a list of all the available platforms.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of available platforms returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_platforms(request_options=request_options))

    @property
    def with_raw_response(self) -> PlatformsWithRawResponse:
        return self._with_raw_response


class AsyncPlatforms:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPlatformsWithRawResponse(client, server, auth)

    async def list_platforms(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SupportV1MetadataPlatformsResponse:
        """Returns a list of all the available platforms.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - List of available platforms returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_platforms(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPlatformsWithRawResponse:
        return self._with_raw_response


class PlatformsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_platforms(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SupportV1MetadataPlatformsResponse, ListPlatformsErrorBody]:
        """Returns a list of all the available platforms.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/metadata/platforms"),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[SupportV1MetadataPlatformsResponse],
            error_mapper=list_platforms_error_mapper,
            request_options=request_options,
        )


class AsyncPlatformsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_platforms(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SupportV1MetadataPlatformsResponse, ListPlatformsErrorBody]:
        """Returns a list of all the available platforms.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/support/v1/metadata/platforms"),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[SupportV1MetadataPlatformsResponse],
            error_mapper=list_platforms_error_mapper,
            request_options=request_options,
        )
